import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useGameState, useGameDispatcher } from 'src/contexts/GameContext.js';
import { C } from 'src/utilities/react.js';

export default function Header() {
  const { score } = useGameState();
  const dispatchGameAction = useGameDispatcher();

  function resetGame() {
    dispatchGameAction({ type: 'reset' });
  }

  const classes = C(
    'py-2', // Spacer; `px` is set by parent
    'bg-neutral-600 text-white',
    'flex items-center gap-3',
  );
  return (
    <header className={classes}>
      <h1 className="mr-auto">
        <code>animemo</code>
      </h1>
      <span className="mx-1 text-sm uppercase tracking-widest whitespace-nowrap text-neutral-400">
        Best: <span className="text-neutral-300">{score.best}</span>
      </span>
      <span className="mx-1 text-sm uppercase tracking-widest whitespace-nowrap text-neutral-400">
        Score: <span className="text-neutral-300">{score.current}</span>
      </span>
      <button
        className="transition hover:bg-white/10 ml-2 aspect-square rounded-full p-2"
        type="button"
        onClick={resetGame}
      >
        <ArrowPathIcon className="min-h-[1rem]" />
      </button>
    </header>
  );
}
