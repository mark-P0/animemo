import Header from './components/Header.js';
import Main from './components/Main.js';
import { GameProvider } from './contexts/GameContext.js';
import { C } from './utilities/react.js';

export default function App() {
  const classes = C(
    'overflow-hidden h-screen bg-neutral-700',
    'grid grid-rows-[min-content_1fr]',
    '[&>*]:px-4 sm:[&>*]:px-[10%]', // Pad sides so that they are not too flushed
  );
  return (
    <GameProvider>
      <div className={classes}>
        <Header />
        <Main />
      </div>
    </GameProvider>
  );
}
