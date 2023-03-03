import { fileURLToPath, URL } from 'url';

/**
 * Expand relative paths to absolute counterpart.
 *
 * Base must be manually specified to e.g. `import.meta.url` from the
 * consuming script, as specifying it directly here will use the
 * directory of _this_ script as the base.
 *
 * https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
 */
export function relToAbsPath(path: string, base: string) {
  return fileURLToPath(new URL(path, base));
}
