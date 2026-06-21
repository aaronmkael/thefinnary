import { SITE_URL } from './i18n';
import type { Product } from '@/types/product';
import type { Author } from '@/types/author';
import type { Article } from '@/types/article';
import type { FAQ } from '@/types/product';
import type { CategoryFAQ } from '@/types/category';

function getNextYearISO(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split('T')[0];
}

export function buildProductSchema(product: Product, lang: string = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.commonName} (${product.scientificName})`,
    description: product.seoDescription,
    image: product.images.map((img) => img.url),
    brand: { '@type': 'Brand', name: 'The Fish Collection' },
    sku: product.sku,
    mpn: product.sku,
    inLanguage: lang,
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/${lang}/exotic-fish/${product.category}/${product.slug}/`,
      priceCurrency: 'USD',
      price: product.priceUSD.toFixed(2),
      priceValidUntil: getNextYearISO(),
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'The Fish Collection' },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 1, unitCode: 'DAY' },
        },
      },
    },
    ...(product.reviewCount > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.ratingAverage.toFixed(1),
            reviewCount: product.reviewCount,
            bestRating: '5',
            worstRating: '1',
          },
        }
      : {}),
  };
}

export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQ(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildItemList(
  products: Product[],
  categorySlug: string,
  lang: string = 'en',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/${lang}/exotic-fish/${categorySlug}/${product.slug}/`,
      name: product.commonName,
    })),
  };
}

export function buildCategoryFAQ(faqs: CategoryFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(
  article: Article,
  author: Author,
  lang: string = 'en',
  wordCount?: number,
) {
  const typePathMap: Record<string, string> = {
    blog: 'blog',
    species: 'species',
    care: 'care-guides',
  };
  const articleSection =
    article.type === 'species'
      ? 'Species Guide'
      : article.type === 'care'
        ? 'Care Guide'
        : article.category ?? 'Blog';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: lang,
    articleSection,
    ...(wordCount ? { wordCount } : {}),
    about: {
      '@type': 'Thing',
      name: article.scientificName || article.title,
    },
    author: {
      '@type': 'Person',
      name: author.name,
      url: `${SITE_URL}/${lang}/authors/${author.slug}/`,
      jobTitle: author.jobTitle,
      knowsAbout: author.knowsAbout,
      sameAs: author.sameAs,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Fish Collection',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-schema.png`,
        width: 600,
        height: 60,
      },
    },
    image: article.heroImage,
    thumbnailUrl: article.heroImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${lang}/${typePathMap[article.type] ?? article.type}/${article.slug}/`,
    },
  };
}

export function buildHowToSchema(article: Article, lang: string = 'en') {
  // Derive steps from h2 headings in content
  const h2Regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
  const steps: { name: string; url: string }[] = [];
  const typePathMap: Record<string, string> = {
    blog: 'blog',
    species: 'species',
    care: 'care-guides',
  };
  const pageUrl = `${SITE_URL}/${lang}/${typePathMap[article.type] ?? article.type}/${article.slug}/`;
  let match;
  while ((match = h2Regex.exec(article.content)) !== null) {
    const id = match[1];
    const name = match[2].replace(/<[^>]*>/g, '').trim();
    if (name) {
      steps.push({ name, url: `${pageUrl}#${id}` });
    }
  }
  if (steps.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: article.title,
    description: article.metaDescription,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      url: s.url,
    })),
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  name: 'The Fish Collection',
  alternateName: 'The Fish Collection',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'The House of Rare & Luxury Aquatic Life. Expert-bred exotic fish — platinum arowana, gem tang, peppermint angelfish and 200+ species. Live arrival guaranteed.',
  foundingDate: '2026',
  areaServed: ['US', 'GB', 'DE', 'NL', 'FR', 'ES', 'JP', 'BR', 'KR', 'IT'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exotic & Luxury Fish Catalog',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Platinum Arowana' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gem Tang' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Peppermint Angelfish' } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/thefishcollection',
    'https://www.youtube.com/@thefishcollection',
    'https://www.facebook.com/thefishcollection',
  ],
};

export function buildPersonSchema(author: Author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    image: author.image,
    knowsAbout: author.knowsAbout,
    sameAs: author.sameAs,
    worksFor: {
      '@type': 'Organization',
      name: 'The Fish Collection',
      url: SITE_URL,
    },
  };
}

export function buildProfilePageSchema(author: Author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: buildPersonSchema(author),
  };
}

export function buildDefinedTermSetSchema(terms: { term: string; definition: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Aquarium & Fishkeeping Glossary',
    description: 'Comprehensive glossary of aquarium and fishkeeping terms used in exotic fish care, tank setup, and aquatic husbandry.',
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
    })),
  };
}
