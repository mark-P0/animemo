import { useState, useEffect, ReactNode } from 'react';
import { C } from 'src/utilities/react.js';

export default function BaseCard({
  slideInFrom = 'above',
  slideOutTo,
  className = '',
  children,
}: {
  slideInFrom?: 'above' | 'below';
  slideOutTo?: 'left' | 'right';
  className?: string;
  children?: ReactNode; // According to cheatsheet (https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)
}) {
  const [willSlideIn, setWillSlideIn] = useState(false);
  useEffect(() => {
    /**
     * For some reason... the slide-in state is set immediately and
     * prevents the transition animation from working properly.
     * Adding this small "delay" allows things to work as expected.
     */
    const timeoutId = setTimeout(() => setWillSlideIn(true), 100);
    return () => {
      clearTimeout(timeoutId); // Shouldn't be necessary, but just in case...
    };
  }, []);

  const classes = C(
    /* Animation */
    C(
      'transition ease-out duration-500',
      !willSlideIn && // Slide this component in by removing these classes that are initially present
        C(
          // Need to repeat full class names for Tailwind parser
          slideInFrom === 'above' && '-translate-y-[100vh] -rotate-12',
          slideInFrom === 'below' && 'translate-y-[100vh] -rotate-12',
        ),
      C(
        slideOutTo === 'left' && 'opacity-0 -translate-x-full -rotate-12',
        slideOutTo === 'right' && 'opacity-0 translate-x-full rotate-12',
      ),
    ),
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
  return <div className={classes}>{children}</div>;
}
