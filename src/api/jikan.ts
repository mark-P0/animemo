import { Character } from './types.js';
import PREFETCHED_DATA from './prefetched-data.js';
import { sleep } from 'src/utilities/misc.js';
import { integer as rndInteger } from 'src/utilities/random.js';

/**
 * TODO: Reflect with local storage?
 */
const memo = new Map<number, Character | null>(PREFETCHED_DATA);

/**
 * https://docs.api.jikan.moe/#tag/characters/operation/getCharacterById
 */
async function getCharacterById(id: number): Promise<Character | null> {
  console.log('Getting', { id });

  /**
   * Short-circuit for when the ID data has been memoized (naive cache)
   *
   * has-get pattern is not supported as a type guard
   * https://github.com/microsoft/TypeScript/issues/13086
   */
  const stored = memo.get(id);
  if (stored !== undefined) {
    console.log('Data stored', stored);
    return stored;
  }

  console.warn('Fetching...');

  /**
   * API response status codes: https://docs.api.jikan.moe/#section/Information/HTTP-Responses
   */
  const response = await fetch(`https://api.jikan.moe/v4/characters/${id}`);
  const { status } = response;
  if (
    status === 429 // Rate-limited; wait for a bit then try again
  ) {
    console.warn('Rate limited; retrying after a few moments...', response);
    await sleep(1);
    return getCharacterById(id);
  }
  if (
    status === 404 ||
    status !== 200 // Treat codes other than OK as if the data does not exist
  ) {
    console.warn('No character with that ID', response);
    memo.set(id, null);
    return null;
  }

  const json: { data: Character } = await response.json();
  const { data } = json;

  console.warn('Found character; storing in memo', { response, status, json });
  memo.set(id, data);
  return data;
}

/**
 * Generate a data ID from 1 up to `memo.size` + an `extraPct` of that.
 * - `extraPct` must be in **decimal form**, e.g. 25% is `0.25`
 * - When `extraPct = 0`, generated IDs will only be those in the `memo`
 */
function generateDataId(extraPct = 0): number {
  const from = 1;
  const to = memo.size * (1 + extraPct);
  const id = rndInteger(from, to);
  return id;
}

async function getRandomData(): Promise<Character | null> {
  const id = generateDataId();
  return await getCharacterById(id);
}

export async function getRandomCharacter(): Promise<Character> {
  const data = await getRandomData();
  if (data === null) return getRandomCharacter();
  return data;
}
