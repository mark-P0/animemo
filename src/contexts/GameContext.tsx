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

type GameState = {
  currentCharacter: Promise<Character>;
};
function generateInitialGameState(): GameState {
  return {
    currentCharacter: getRandomCharacter(),
  };
}

const GameStateContext = createContext<GameState | null>(null);
const GameDispatcherContext = createContext<Dispatch<GameAction> | null>(null);

type GameAction = { type: 'accept'; payload?: null } | { type: 'reject'; payload?: null };
function reduceGameActions(state: GameState, action: GameAction): GameState {
  const { type } = action;

  if (type === 'accept' || type === 'reject') {
    return { ...state, currentCharacter: getRandomCharacter() };
  }

  throw new Error(`Unknown \`GameAction\` '${type}'`);
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [game, dispatch] = useReducer(reduceGameActions, generateInitialGameState());

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
