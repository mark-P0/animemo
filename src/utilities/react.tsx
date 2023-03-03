import { SVGProps } from 'react';

/**
 * Combine class string arguments into a single space-delimited string.
 * Allows for breaking down class strings into composable pieces.
 *
 * **Truthy/Falsy values are simply ignored.** They are accepted to
 * support the conditional shorthand pattern. Think of the packages
 * [`clsx`](https://www.npmjs.com/package/clsx) <!-- cspell:disable-line -->
 * and [`classnames`](https://www.npmjs.com/package/classnames).
 *
 * If supported, CSS services (e.g. Tailwind's VSCode extension)
 * can be configured to be enabled within calls to this helper.
 *
 * Example:
 * ```js
 * const classes = C(
 *  'cls1 cls2 cls3',
 *  'annotated classes', // A comment explaining this class bit
 *  C(
 *    'group',
 *    'related',
 *    // 'classes', // Classes can be easily disabled for testing
 *  ),
 *  // `&&` evaluates to the right class strings if the left condition
 *  // is truthy; otherwise, it will evaluate to `false`
 *  // and will be silently ignored.
 *  shouldUseTheseClasses && 'classes to be conditionally used'
 *  true && 'use these classes',
 *  false && 'do-not use classes',
 *  null && 'these classes will NOT be used',
 *  undefined && 'NEITHER will these classes',
 * )
 * ```
 */
export function C(...classes: (string | boolean | null | undefined)[]): string {
  /**
   * Type Predicate pattern
   *
   * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
   */
  const strings = classes.filter((cls): cls is string => typeof cls === 'string');
  return strings.join(' ');
}

/**
 * Taken from Tailwind's docs, as Heroicons does not provide a similar graphic.
 *
 * https://tailwindcss.com/docs/animation#spin
 */
export function Spinner(props: SVGProps<SVGSVGElement>) {
  const classes = C('animate-spin', props.className);
  return (
    /* prettier-ignore */
    <svg
      {...props}
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}
