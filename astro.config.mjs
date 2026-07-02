import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hkcompanylaw.eastlaw.wang/',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name]-v20260703.[hash][extname]',
        },
      },
    },
  },
});
