import { LOCALES, SITE_URL } from './i18n';

export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const { hreflang, lang } of LOCALES) {
    languages[hreflang] = `${SITE_URL}/${lang}${path}`;
  }
  languages['x-default'] = `${SITE_URL}/en${path}`;
  return { languages };
}
