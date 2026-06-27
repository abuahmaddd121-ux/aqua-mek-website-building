// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE: update `site` to the real domain before deploying (used for sitemap + canonical URLs).
export default defineConfig({
  site: 'https://aqua1.am',
  i18n: {
    defaultLocale: 'hy',
    locales: ['hy', 'ru', 'en'],
    routing: {
      prefixDefaultLocale: false, // Armenian served at the root (/), Russian at /ru, English at /en
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'hy',
        locales: { hy: 'hy-AM', ru: 'ru-RU', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
