import { C } from 'src/utilities/react.js';

export default function Header() {
  const classes = C(
    'py-2', // Spacer; `px` is set by parent
    'bg-neutral-600 text-white',
  );
  return (
    <header className={classes}>
      <code>animemo</code>
    </header>
  );
}
