/**
 * Patterns sourced from
 * - [React Beta Docs](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context)
 * - React Typescript Cheatsheet
 *    - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks
 *    - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context
 */

import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { Character } from 'src/api/types.js';
import { getRandomCharacter } from 'src/api/jikan.js';
import { string as rndString } from 'src/utilities/random.js';

type GameState = {
  stateId: string;
  status: boolean | null; // `true` === Win | `false` === Lose | `null` === Ongoing
  score: { current: number; best: number };
  character: {
    seenIds: Character['mal_id'][];
    current: Promise<Character>;
    next: Promise<Character>;
  };
};
const INITIAL_GAME_STATE: GameState = {
  stateId: rndString(8),
  status: null,
  score: { current: 0, best: 0 },
  character: {
    seenIds: [],
    current: getRandomCharacter(),
    next: getRandomCharacter(),
  },
};

const GameStateContext = createContext<GameState | null>(null);
const GameDispatcherContext = createContext<Dispatch<GameAction> | null>(null);

type GameAction =
  | { type: 'accept'; payload: Character['mal_id'] }
  | { type: 'reject'; payload: Character['mal_id'] }
  | { type: 'reset'; payload?: null };
function reduceGameActions(state: GameState, action: GameAction): GameState {
  const { score, character } = state;
  const { type } = action;
  const stateId = rndString(8);

  if (type === 'accept' || type === 'reject') {
    const newState: GameState = { ...state, stateId };

    const id = action.payload;
    const characterHasAlreadyBeenSeen = character.seenIds.includes(id);
    const validCondition =
      (characterHasAlreadyBeenSeen && type === 'reject') || // Already-seen characters must be rejected
      (!characterHasAlreadyBeenSeen && type === 'accept'); // Characters not-yet-seen must be accepted

    if (validCondition) {
      const newScore = score.current + 1;
      newState.score = {
        current: newScore, // `++` would also work
        best: newScore > score.best ? newScore : score.best,
      };
      newState.character = {
        seenIds: [...character.seenIds, id],
        current: character.next,
        next: getRandomCharacter(),
      };
    } else {
      newState.status = false; // Game is lost if none of the required conditions were met
    }

    return newState;
  }

  if (type === 'reset') {
    const newState: GameState = {
      ...INITIAL_GAME_STATE,
      stateId,
      score: {
        current: 0,
        best: score.best, // Retain best scores through resets
      },
      character: {
        seenIds: [],
        current: character.next,
        next: getRandomCharacter(),
      },
    };
    return newState;
  }

  throw new Error(`Unknown \`GameAction\` '${type}'`);
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [game, dispatch] = useReducer(reduceGameActions, INITIAL_GAME_STATE);

  return (
    <GameDispatcherContext.Provider value={dispatch}>
      <GameStateContext.Provider value={game}>
        {/* prettier-ignore */}
        {children}
      </GameStateContext.Provider>
    </GameDispatcherContext.Provider>
  );
}

export function useGameState() {
  const state = useContext(GameStateContext);
  if (state === null) throw new Error('`GameStateContext` not provided!');
  return state;
}

export function useGameDispatcher() {
  const dispatcher = useContext(GameDispatcherContext);
  if (dispatcher === null) throw new Error('`GameDispatcherContext` not provided!');
  return dispatcher;
}
