import { defaultLocale, type Locale } from './config';
import { en } from './translations/en';
import { es } from './translations/es';

const translations: Record<Locale, Record<string, string>> = { en, es };

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
}

export function localizeHref(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return cleanPath;
  return `/en${cleanPath}`;
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') return 'en';
  return defaultLocale;
}
