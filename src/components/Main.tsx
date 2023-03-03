import { C } from 'src/utilities/react.js';

function Card() {
  const classes = C(
    C(
      'max-h-full max-w-full', // Allows this element to shrink when smaller than specified aspect ratios
      'aspect-[9/16] sm:aspect-[3/4]',
    ),
    'bg-neutral-200 rounded-lg',
  );
  return <div className={classes}></div>;
}

export default function Main() {
  const classes = C(
    'py-6', // Spacer; `px` is set by parent
    'flex justify-center', // Set as flex container so that children can accurately take up its sizes
    'overflow-hidden', // Constrains children to expected dimensions
  );
  return (
    <main className={classes}>
      <Card />
    </main>
  );
}
