import type { Lang } from '@/lib/seo/i18n';

const dictionaries: Record<Lang, () => Promise<Record<string, Record<string, string>>>> = {
  en: () => import('@/messages/en.json').then((m) => m.default),
  de: () => import('@/messages/de.json').then((m) => m.default),
  nl: () => import('@/messages/nl.json').then((m) => m.default),
  fr: () => import('@/messages/fr.json').then((m) => m.default),
  es: () => import('@/messages/es.json').then((m) => m.default),
  ja: () => import('@/messages/ja.json').then((m) => m.default),
  pt: () => import('@/messages/pt.json').then((m) => m.default),
  ko: () => import('@/messages/ko.json').then((m) => m.default),
  it: () => import('@/messages/it.json').then((m) => m.default),
};

export async function getDictionary(lang: Lang) {
  return dictionaries[lang]();
}
