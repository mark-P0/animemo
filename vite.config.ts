import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { relToAbsPath } from './src/utilities/paths.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      src: relToAbsPath('./src', import.meta.url),
    },
  },
});
