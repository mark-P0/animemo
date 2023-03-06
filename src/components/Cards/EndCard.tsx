import { useRef, useLayoutEffect } from 'react';
import BaseCard, { AnimationCallbacks } from './BaseCard.js';
import { C } from 'src/utilities/react.js';

export default function EndCard({ status }: { status: boolean }) {
  const animationRef = useRef<AnimationCallbacks>(null);

  useLayoutEffect(() => {
    const animations = animationRef.current;
    if (animations) animations.slideIn('above');
  }, []);

  const classes = C(
    C(
      status ? 'bg-green-700' : 'bg-red-700',
      'text-white text-8xl uppercase font-bold tracking-widest',
    ),
    'grid place-items-center',
  );

  return (
    <BaseCard className={classes} animationRef={animationRef}>
      {status ? 'W' : 'L'}
    </BaseCard>
  );
}
