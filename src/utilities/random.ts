/**
 * Random floating number from `from` up to, but excluding, `to`.
 */
export function float(from: number, to: number): number {
  const range = to - from;
  return Math.random() * range + from;
}

/**
 * Random integer from `from` up to, but excluding, `to`.
 */
export function integer(from: number, to: number): number {
  return Math.floor(float(from, to));
}

/**
 * Random string with `n` characters.
 */
export function string(n: number): string {
  return Array.from({ length: n }, () => {
    const code = integer(0, 26);
    const base = (Math.random() > 0.5 ? 'a' : 'A').charCodeAt(0);
    return String.fromCharCode(base + code);
  }).join('');
}
