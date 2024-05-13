import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json';
import dts from 'vite-plugin-dts';
// import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'common-components',
      fileName: 'common-components',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: Object.keys({
        ...pkg.dependencies,
        ...pkg.devDependencies,
      }),
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        interop: 'compat', // https://rollupjs.org/migration/#changed-defaults
      },
    },
  },
});
