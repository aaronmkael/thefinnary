export const SITE_URL = 'https://thefishcollection.com';

export const LOCALES = [
  { lang: 'en', region: 'en-US', label: 'English', nativeName: 'English', currency: 'USD', hreflang: 'en' },
  { lang: 'de', region: 'de-DE', label: 'Deutsch', nativeName: 'Deutsch', currency: 'EUR', hreflang: 'de' },
  { lang: 'nl', region: 'nl-NL', label: 'Nederlands', nativeName: 'Nederlands', currency: 'EUR', hreflang: 'nl' },
  { lang: 'fr', region: 'fr-FR', label: 'Français', nativeName: 'Français', currency: 'EUR', hreflang: 'fr' },
  { lang: 'es', region: 'es-ES', label: 'Español', nativeName: 'Español', currency: 'EUR', hreflang: 'es' },
  { lang: 'ja', region: 'ja-JP', label: 'Japanese', nativeName: '日本語', currency: 'JPY', hreflang: 'ja' },
  { lang: 'pt', region: 'pt-BR', label: 'Portuguese', nativeName: 'Português', currency: 'BRL', hreflang: 'pt-BR' },
  { lang: 'ko', region: 'ko-KR', label: 'Korean', nativeName: '한국어', currency: 'KRW', hreflang: 'ko' },
  { lang: 'it', region: 'it-IT', label: 'Italian', nativeName: 'Italiano', currency: 'EUR', hreflang: 'it' },
] as const;

export type Lang = (typeof LOCALES)[number]['lang'];

export const DEFAULT_LOCALE: Lang = 'en';

export function isValidLang(lang: string): lang is Lang {
  return LOCALES.some((l) => l.lang === lang);
}
