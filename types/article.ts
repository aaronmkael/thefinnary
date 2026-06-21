import type { FAQ } from './product';

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Source {
  title: string;
  url: string;
  publisher?: string;
}

export type ArticleType = 'blog' | 'species' | 'care';

export interface Article {
  title: string;
  slug: string;
  type: ArticleType;
  authorSlug: string;
  publishedAt: string;
  updatedAt: string;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer?: string;
  quickAnswerQuestion?: string;
  summary: string;
  keyFacts?: { label: string; value: string }[];
  headings: Heading[];
  content: string;
  faqs: FAQ[];
  sources: Source[];
  relatedSlugs: string[];
  category?: string;
  scientificName?: string;
  topicCategory?: string;
  tags?: string[];
}
