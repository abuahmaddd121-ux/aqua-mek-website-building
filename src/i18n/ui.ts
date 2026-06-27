/**
 * Language configuration + URL helpers.
 * Armenian (hy) is the default and is served at the root (/).
 * Russian (ru) lives under /ru, English (en) under /en.
 */
export const languages = {
  hy: 'Հայերեն',
  ru: 'Русский',
  en: 'English',
} as const;

export const shortLang = {
  hy: 'ՀԱՅ',
  ru: 'РУС',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'hy';
export const locales: Lang[] = ['hy', 'ru', 'en'];

/**
 * Locales whose pages are actually published. Russian & English are added here
 * once their translations are filled in (Phase 3). Until then the language
 * switcher shows them as "coming soon" instead of linking to 404s.
 */
export const liveLocales: Lang[] = ['hy'];

/** Detect the active language from a URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg === 'ru' || seg === 'en') return seg;
  return defaultLang;
}

/** Remove any locale prefix, returning the canonical path (e.g. /ru/products → /products). */
export function stripLang(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'ru' || parts[0] === 'en') parts.shift();
  return '/' + parts.join('/');
}

/** Build the localized URL for a canonical path in the given language. */
export function localizePath(path: string, lang: Lang): string {
  const seg = path.replace(/^\/|\/$/g, '');
  const base = lang === defaultLang ? '' : `/${lang}`;
  return seg ? `${base}/${seg}` : base || '/';
}
