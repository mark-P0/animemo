import { useLayoutEffect, useRef, ReactNode, MutableRefObject, TransitionEvent } from 'react';
import { C } from 'src/utilities/react.js';

export type AnimationCallbacks = {
  slideIn: (from: 'above' | 'below') => void;
  slideOut: (to: 'left' | 'right', onSlideOutEnd: () => void) => void;
};

export default function BaseCard({
  animationRef,
  className,
  children,
}: {
  animationRef: MutableRefObject<AnimationCallbacks | null>;
  className?: string;
  children?: ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasSlidOutRef = useRef(false);
  const slideOutEndCallbackRef = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    animationRef.current = {
      slideIn(from) {
        const disables = C(
          'transition-none', // Do not animate offsetting
          'invisible', // Do not render component to ensure offsetting will not be seen
        ).split(' ');
        const offsets = C(
          from === 'above' && '-translate-y-[100vh] -rotate-12', // Move component out of visible area
          from === 'below' && 'translate-y-[100vh] -rotate-12', // Need to repeat class names for Tailwind parser
        ).split(' ');

        /**
         * Could probably add/remove classes in single calls,
         * but separating them into explicit steps is more intuitive...
         */
        card.classList.add(...disables); // Disable component first...
        card.classList.add(...offsets); // ...then offset its position
        setTimeout(() => {
          card.classList.remove(...disables); // Actually show component
          card.classList.remove(...offsets); // Move component back to original position
        }, 50); // Add a bit of delay to allow style effects to settle
      },
      slideOut(to, onSlideOutEnd) {
        const offsets = C(
          to === 'left' && 'opacity-0 -translate-x-full -rotate-12',
          to === 'right' && 'opacity-0 translate-x-full rotate-12',
        ).split(' ');
        card.classList.add(...offsets);
        hasSlidOutRef.current = true;
        slideOutEndCallbackRef.current = onSlideOutEnd;
      },
    };
  }, []);

  function triggerActionsAfterSlideOut(event: TransitionEvent) {
    if (!hasSlidOutRef.current) return;
    if (event.propertyName !== 'transform') return;

    const onSlideOutEnd = slideOutEndCallbackRef.current;
    if (onSlideOutEnd) onSlideOutEnd();
  }

  const classes = C(
    /* Animation */
    'transition ease-out duration-500',
    /* Form */
    C(
      'max-h-full max-w-full', // Allows this element to shrink when smaller than specified aspect ratios
      'aspect-[9/16] sm:aspect-[3/4]',
    ),
    /* Appearance */
    'bg-neutral-200 rounded-lg',
    /* Content Layout */
    '',
    /* Additional(s) */
    className,
  );
  return (
    <div ref={cardRef} className={classes} onTransitionEnd={triggerActionsAfterSlideOut}>
      {children}
    </div>
  );
}
