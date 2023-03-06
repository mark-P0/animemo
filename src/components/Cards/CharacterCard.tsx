import { useEffect, useState } from 'react';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import BaseCard from './BaseCard.js';
import { Character } from 'src/api/types.js';
import { getRandomCharacter } from 'src/api/jikan.js';
import { C, Spinner } from 'src/utilities/react.js';

function Details({ character }: { character: Character | null }) {
  if (character === null) {
    return (
      <div className="grid place-items-center">
        <Spinner className="aspect-square w-1/4" />
      </div>
    );
  }

  const { name, name_kanji, url } = character;
  const { image_url } = character.images.jpg;

  return (
    <section className="overflow-hidden bg-white rounded-md grid grid-rows-[1fr_min-content]">
      <a className="overflow-hidden" href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="overflow-hidden h-full w-full object-cover object-top border-4 border-neutral-800"
          src={image_url}
          alt={name}
        />
      </a>
      <div className="flex items-center justify-between gap-3 p-3">
        <h2 className="uppercase tracking-widest text-sm font-semibold">{name}</h2>
        <span className="text-xs text-neutral-500 text-right">{name_kanji}</span>
      </div>
    </section>
  );
}

export default function CharacterCard({ onPlayerDecision }: { onPlayerDecision: () => void }) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [hasUserAccepted, setHasUserAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    async function _() {
      setCharacter(await getRandomCharacter());
    }
    _();
  }, []);

  function rejectCard() {
    setHasUserAccepted(false);
  }

  function acceptCard() {
    setHasUserAccepted(true);
  }

  const buttons = (
    <div className="flex justify-evenly py-6">
      <button
        className="disabled:opacity-50 aspect-square bg-neutral-300 text-black rounded-full p-4"
        type="button"
        onClick={rejectCard}
        disabled={character === null || hasUserAccepted !== null}
      >
        <EyeIcon className="min-h-[1rem]" />
      </button>
      <button
        className="disabled:opacity-50 aspect-square bg-neutral-800 text-white rounded-full p-4"
        type="button"
        onClick={acceptCard}
        disabled={character === null || hasUserAccepted !== null}
      >
        <LightBulbIcon className="min-h-[1rem]" />
      </button>
    </div>
  );

  const classes = C('grid p-5 pb-0', 'grid-rows-[6fr_1fr] sm:grid-rows-[4fr_1fr]');
  const outDir = hasUserAccepted === null ? undefined : hasUserAccepted ? 'right' : 'left';
  return (
    <BaseCard className={classes} slideOutTo={outDir} onSlideOutEnd={onPlayerDecision}>
      <Details character={character} />
      {buttons}
    </BaseCard>
  );
}
