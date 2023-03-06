import { useState } from 'react';
import CharacterCard from './Cards/CharacterCard.js';
import { useGameDispatcher } from 'src/contexts/GameContext.js';
import { C } from 'src/utilities/react.js';

export default function Main() {
  const [ct, setCt] = useState(1);
  const dispatchGameAction = useGameDispatcher();

  function increaseCt() {
    setCt(ct + 1);
    dispatchGameAction({ type: 'new-character' });
  }

  const classes = C(
    'py-6', // Spacer; `px` is set by parent
    'overflow-hidden', // Constrains children to expected dimensions
    'flex justify-center', // Set as flex container so that children can accurately take up its sizes
  );
  return (
    <main className={classes}>
      <CharacterCard key={ct} onPlayerDecision={increaseCt}></CharacterCard>
    </main>
  );
}
