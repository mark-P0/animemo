import { useState } from 'react';
import { Character, getCharactersWithControlledDuplicates } from './jikan.js';

function cls(...classes: string[]): string {
  return classes.join(' ');
}

/**
 * Game loop
 * - Select difficulty
 *
 */

/**
 * Buttons
 * - Restart Game
 * -
 */
function Header() {
  return (
    <header className="bg-neutral-300/80 py-2">
      <code>memory-game</code>
    </header>
  );
}

function CharacterCardButton({ data }: { data: Character }) {
  const { name } = data;
  const { image_url } = data.images.jpg;

  const classes = cls(
    cls(
      'w-full aspect-[3/4] overflow-hidden',
      'bg-white rounded-lg shadow-lg',
      'text-sm sm:text-base'
    ),
    cls('flex flex-col justify-between items-center', 'p-3')
  );
  return (
    <button className={classes}>
      <img
        className="h-5/6 w-full object-cover object-top border-2 border-black rounded-lg"
        src={image_url}
        alt={name}
      />
      <p>{name}</p>
    </button>
  );
}

function Main({ characters }: { characters: Character[] }) {
  const classes = cls(
    'grid auto-rows-min place-items-center',
    cls('grid-cols-2', 'sm:grid-cols-3', 'md:grid-cols-4', 'lg:grid-cols-5'),
    cls('gap-4', 'sm:gap-8')
  );
  return (
    <main className={classes}>
      {characters.map((char, idx) => (
        <CharacterCardButton key={idx} data={char} />
      ))}
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-800/90 text-white rounded-full shadow-xl px-8 py-2">
      <code>Footer</code>
    </footer>
  );
}

/**
 * - 30 cells only, to display evenly in responsive grid with 2/3/4/5 columns
 *    - 4-column disregarded
 */
const INITIAL_CHARACTERS = await getCharactersWithControlledDuplicates(30);
export default function App() {
  const [chars] = useState(INITIAL_CHARACTERS);

  const classes = cls(
    'mx-auto min-h-screen bg-neutral-300',
    cls('grid place-items-center gap-4 pt-4 [&>*:nth-child(3)]:pb-4'),
    cls(
      '[&>*:nth-child(1)]:sticky [&>*:nth-child(1)]:top-0',
      '[&>*:nth-child(3)]:sticky [&>*:nth-child(3)]:bottom-0'
    ),
    '[&>*]:px-[10%] [&>*]:min-w-[320px] [&>*]:max-w-[1440px] [&>*]:w-full'
  );
  return (
    <div className={classes}>
      <Header />
      <Main characters={chars} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
