import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import BaseCard, { AnimationCallbacks } from './BaseCard.js';
import { useGameState, useGameDispatcher } from 'src/contexts/GameContext.js';
import { Character } from 'src/api/types.js';
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

export default function CharacterCard() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [hasUserAccepted, setHasUserAccepted] = useState<boolean | null>(null);
  const animationRef = useRef<AnimationCallbacks>(null);
  const gameState = useGameState();
  const dispatchGameAction = useGameDispatcher();

  useEffect(() => {
    (async () => {
      setCharacter(await gameState.currentCharacter);
    })();
  }, []);

  /**
   * Slide in as soon as the component is to be rendered
   */
  useLayoutEffect(() => {
    const animations = animationRef.current;
    if (animations) animations.slideIn('above');
  }, []);

  function decide(isAccepted: boolean) {
    /**
     * Should be impossible to reach this if there is no character,
     * as the buttons triggering this function should be disabled,
     * but is still included here for typing.
     */
    if (!character) return;

    const animations = animationRef.current;
    if (!animations) return;

    if (isAccepted) {
      setHasUserAccepted(true);
      animations.slideOut('right', () => {
        dispatchGameAction({ type: 'accept', payload: character.mal_id });
      });
    } else {
      setHasUserAccepted(false);
      animations.slideOut('left', () => {
        dispatchGameAction({ type: 'reject', payload: character.mal_id });
      });
    }
  }

  const buttons = (
    <div className="flex justify-evenly py-6">
      <button
        className="disabled:opacity-50 aspect-square bg-neutral-300 text-black rounded-full p-4"
        type="button"
        onClick={() => decide(false)}
        disabled={character === null || hasUserAccepted !== null}
      >
        <EyeIcon className="min-h-[1rem]" />
      </button>
      <button
        className="disabled:opacity-50 aspect-square bg-neutral-800 text-white rounded-full p-4"
        type="button"
        onClick={() => decide(true)}
        disabled={character === null || hasUserAccepted !== null}
      >
        <LightBulbIcon className="min-h-[1rem]" />
      </button>
    </div>
  );

  const classes = C('grid p-5 pb-0', 'grid-rows-[6fr_1fr] sm:grid-rows-[4fr_1fr]');
  return (
    <BaseCard className={classes} animationRef={animationRef}>
      <Details character={character} />
      {buttons}
    </BaseCard>
  );
}
