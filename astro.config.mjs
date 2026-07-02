import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hkcompanylaw.eastlaw.wang/',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-v20260703.[hash][extname]',
        },
      },
    },
  },
});
