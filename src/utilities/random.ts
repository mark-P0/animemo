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
