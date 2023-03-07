import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Expand relative paths to absolute counterpart.
 *
 * Base must be manually specified to e.g. `import.meta.url` from the
 * consuming script, as specifying it directly here will use the
 * directory of _this_ script as the base.
 *
 * https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
 */
function relToAbsPath(path: string, base: string) {
  return fileURLToPath(new URL(path, base));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /**
   * Use relative base path so that assets will resolve to the
   * repo path (e.g. <user>.github.io/<repo>) instead of the
   * root URL (<user>.github.io)
   *
   * - https://vitejs.dev/config/shared-options.html#base
   * - https://vitejs.dev/guide/static-deploy.html#github-pages
   */
  base: './',

  resolve: {
    alias: {
      src: relToAbsPath('./src', import.meta.url),
    },
  },
});
