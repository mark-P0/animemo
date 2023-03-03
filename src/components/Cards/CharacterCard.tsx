import { useState } from 'react';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import BaseCard from './BaseCard.js';
import { C } from 'src/utilities/react.js';

var char = {
  mal_id: 1,
  url: 'https://myanimelist.net/character/1/Spike_Spiegel',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/characters/4/50197.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/characters/4/50197.webp',
      small_image_url: 'https://cdn.myanimelist.net/images/characters/4/50197t.webp',
    },
  },
  name: 'Spike Spiegel',
  name_kanji: 'スパイク・スピーゲル',
  nicknames: [],
  favorites: 44536,
  about: null,
};

function Details() {
  const { name, name_kanji, url } = char;
  const { image_url } = char.images.jpg;

  return (
    <div className="overflow-hidden bg-white rounded-md grid grid-rows-[1fr_min-content]">
      <a className="overflow-hidden" href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="overflow-hidden h-full w-full object-cover object-top border-4 border-neutral-800"
          src={image_url}
          alt={name}
        />
      </a>
      <div className="flex items-center justify-between gap-3 p-3">
        <p className="uppercase tracking-widest text-sm font-semibold">{name}</p>
        <p className="text-xs text-neutral-500 text-right">{name_kanji}</p>
      </div>
    </div>
  );
}

export function CharacterCard({ onPlayerDecision }: { onPlayerDecision: () => void }) {
  const [hasUserAccepted, setHasUserAccepted] = useState<boolean | null>(null);
  function rejectCard() {
    setHasUserAccepted(false);
  }
  function acceptCard() {
    setHasUserAccepted(true);
  }

  const buttons = (
    <div className="flex justify-evenly py-6">
      <button
        className="aspect-square bg-neutral-300 rounded-full p-4"
        type="button"
        onClick={rejectCard}
      >
        <EyeIcon className="min-h-[1rem]" />
      </button>
      <button
        className="aspect-square bg-neutral-800 text-white rounded-full p-4"
        type="button"
        onClick={acceptCard}
      >
        <LightBulbIcon className="min-h-[1rem]" />
      </button>
    </div>
  );

  const classes = C('grid p-5 pb-0', 'grid-rows-[6fr_1fr] sm:grid-rows-[4fr_1fr]');
  const outDir = hasUserAccepted === null ? undefined : hasUserAccepted ? 'right' : 'left';
  return (
    <BaseCard className={classes} slideOutTo={outDir} onSlideOutEnd={onPlayerDecision}>
      <Details />
      {buttons}
    </BaseCard>
  );
}
