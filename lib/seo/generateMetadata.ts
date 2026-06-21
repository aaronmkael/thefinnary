import { buildAlternates } from './hreflang';
import { SITE_URL } from './i18n';
import type { Metadata } from 'next';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  lang: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  ogPageType?: string;
  noIndex?: boolean;
}

function buildOgUrl(title: string, subtitle?: string, type?: string): string {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set('subtitle', subtitle);
  if (type) params.set('type', type);
  return `${SITE_URL}/api/og?${params.toString()}`;
}

export function buildMetadata(input: MetaInput): Metadata {
  const canonical = `${SITE_URL}/${input.lang}${input.path}`;
  const ogImage = input.ogImage ?? buildOgUrl(
    input.title.replace(/ \| The Fish Collection.*$/, ''),
    input.description.slice(0, 100),
    input.ogPageType,
  );

  const ogType = input.ogType ?? 'website';

  return {
    title: input.title,
    description: input.description,
    robots: input.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' as const },
    alternates: {
      canonical,
      ...buildAlternates(input.path),
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: 'The Fish Collection',
      type: ogType,
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
      locale: input.lang,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [ogImage],
      site: '@thefishcollection',
    },
  };
}

/**
 * Locale-aware SEO title builders.
 * When a dict (from getDictionary) is passed, templates come from the "seo" namespace.
 * Falls back to English patterns when dict is omitted.
 */

export function productTitle(name: string, scientific: string, dict?: Record<string, string>): string {
  const pattern = dict?.productTitlePattern ?? 'Buy {name} ({scientific}) | The Fish Collection — Live Arrival Guaranteed';
  return pattern.replace('{name}', name).replace('{scientific}', scientific);
}

export function categoryTitle(category: string, dict?: Record<string, string>): string {
  const pattern = dict?.categoryTitlePattern ?? '{category} Fish for Sale | Buy Live {category} | The Fish Collection';
  return pattern.replace(/\{category\}/g, category);
}

export function speciesTitle(name: string, scientific: string, dict?: Record<string, string>): string {
  const pattern = dict?.speciesTitlePattern ?? '{name} ({scientific}): Complete Care Guide & Tank Setup | The Fish Collection';
  return pattern.replace('{name}', name).replace('{scientific}', scientific);
}

export function careTitle(topic: string, fish: string, dict?: Record<string, string>): string {
  const pattern = dict?.careTitlePattern ?? '{topic} Guide for {fish} | Water, Tank & Diet | The Fish Collection';
  return pattern.replace('{topic}', topic).replace('{fish}', fish);
}

export function blogTitle(headline: string, dict?: Record<string, string>): string {
  const pattern = dict?.blogTitlePattern ?? '{headline} | The Fish Collection';
  const suffix = pattern.replace('{headline}', '');
  const maxLen = 60 - suffix.length;
  const trimmed = headline.length > maxLen ? headline.slice(0, maxLen) : headline;
  return pattern.replace('{headline}', trimmed);
}

export function glossaryTitle(dict?: Record<string, string>): string {
  return dict?.glossaryTitlePattern ?? 'Aquarium Glossary: 90+ Fish & Tank Terms Explained | The Fish Collection';
}

export function careGuideCategoryTitle(categoryName: string, dict?: Record<string, string>): string {
  const pattern = dict?.careGuideCategoryTitlePattern ?? '{category} Guides | Fish Care | The Fish Collection';
  return pattern.replace('{category}', categoryName);
}
