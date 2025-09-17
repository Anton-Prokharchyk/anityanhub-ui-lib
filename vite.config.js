import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr(),
      dts({
        insertTypesEntry: true,
        rollupTypes: true,
        tsConfigFilePath: './tsconfig.build.json',
      }),
    ],
    resolve: {
      alias: {
        // eslint-disable-next-line
        '@': path.resolve(__dirname, 'lib'),
      },
    },
    server: {
      port: 5173,
      host: true,
      strictPort: true,
      open: true,
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    root: './',
    build: {
      lib: {
        sourcemap: true,
        entry: './lib/components/index.ts',
        outDir: './dist',
        name: 'Anityanhub-ui-lib',
        formats: ['es', 'cjs', 'umd'],
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    },
  };
});
