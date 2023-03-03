import Header from './components/Header.js';
import Main from './components/Main.js';
import { C } from './utilities/react.js';

export default function App() {
  const classes = C(
    'h-screen overflow-hidden bg-neutral-700',
    'grid grid-rows-[min-content_1fr]',
    '[&>*]:px-4 sm:[&>*]:px-[10%]', // Pad sides so that they are not too flushed
  );
  return (
    <div className={classes}>
      <Header />
      <Main />
    </div>
  );
}
