import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { bundlePlugin } from './bundle';

/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
  return {
    server: {
      port: 4000,
      host: true,
    },
    build: {
      assetsDir: '',
      cssCodeSplit: false,
      rollupOptions: {
        input: {
          code: 'src/controller/index.ts',
          ui: resolve(__dirname, 'index.html'),
        },
        output: {
          entryFileNames: '[name].js',
        },
      },
    },
    plugins: [preact(), bundlePlugin()],
  };
});
