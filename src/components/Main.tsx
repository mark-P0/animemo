import CharacterCard from './Cards/CharacterCard.js';
import EndCard from './Cards/EndCard.js';
import { useGameState } from 'src/contexts/GameContext.js';
import { C } from 'src/utilities/react.js';

export default function Main() {
  const { stateId, status } = useGameState();

  const classes = C(
    'py-6', // Spacer; `px` is set by parent
    'overflow-hidden', // Constrains children to expected dimensions
    'flex justify-center', // Set as flex container so that children can accurately take up its sizes
  );
  return (
    <main className={classes}>
      {status === null && <CharacterCard key={stateId} />}
      {status === false && <EndCard status={false} />}
      {status === true && <EndCard status={true} />}
    </main>
  );
}
