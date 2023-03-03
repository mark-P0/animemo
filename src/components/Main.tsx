import BaseCard from './Cards/BaseCard.js';
import { C } from 'src/utilities/react.js';

export default function Main() {
  const classes = C(
    'py-6', // Spacer; `px` is set by parent
    'overflow-hidden', // Constrains children to expected dimensions
    'flex justify-center', // Set as flex container so that children can accurately take up its sizes
  );
  return (
    <main className={classes}>
      <BaseCard></BaseCard>
    </main>
  );
}
