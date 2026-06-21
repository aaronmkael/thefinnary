import type { Metadata } from 'next';
import { fontVariables, cjkFontVariable } from '@/lib/fonts';
import { LOCALES } from '@/lib/seo/i18n';
import type { Lang } from '@/lib/seo/i18n';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { organizationSchema } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { SearchOverlay } from '@/components/layout/SearchOverlay';
import { CartProvider } from '@/lib/cart/CartContext';
import { SearchProvider } from '@/lib/search/SearchContext';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { speciesGuides } from '@/lib/data/species-guides';
import { blogPosts } from '@/lib/data/blog-posts';
import { blogTagHubs } from '@/lib/data/blog-tag-hubs';
import { careGuideCategories } from '@/lib/data/care-guide-categories';
import { careGuides } from '@/lib/data/care-guides';
import { glossaryTerms } from '@/lib/data/glossary';
import '@/app/globals.css';

export function generateStaticParams() {
  return LOCALES.map(({ lang }) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://thefishcollection.com'),
};

/* ── Lightweight data for client components (avoids bundling full content) ── */
const categoryNav = categories.map((c) => ({
  name: c.name,
  slug: c.slug,
  productCount: c.productCount,
}));

const searchProducts = products.map((p) => ({
  commonName: p.commonName,
  scientificName: p.scientificName,
  slug: p.slug,
  category: p.category,
  priceUSD: p.priceUSD,
  inStock: p.inStock,
}));

/* ── Lightweight guide nav data for mega menu & footer ── */
const FEATURED_SPECIES_SLUGS = [
  'platinum-arowana',
  'gem-tang',
  'peppermint-angelfish',
  'flowerhorn-cichlid',
  'black-diamond-stingray',
  'zebra-pleco',
  'axolotl',
  'koi-fish',
  'betta-fish',
  'fahaka-pufferfish',
];

const guidesNav = {
  featuredSpecies: FEATURED_SPECIES_SLUGS.map((slug) =>
    speciesGuides.find((g) => g.slug === slug),
  )
    .filter(Boolean)
    .map((g) => ({
      title: g!.title
        .replace(/\s*\|.*$/, '')
        .replace(/\s*\([^)]*\)/g, '')
        .replace(/\s*:.*$/, '')
        .replace(/\s+(Complete\s+)?(Species\s+&\s+)?(Care\s+)?Guide.*$/i, '')
        .trim(),
      slug: g!.slug,
    })),
  careCategories: careGuideCategories.map((c) => ({
    name: c.name,
    slug: c.slug,
    count: careGuides.filter((g) => g.topicCategory === c.slug).length,
  })),
  blogTagHubs: blogTagHubs.map((h) => ({
    name: h.name,
    slug: h.slug,
    count: blogPosts.filter((p) => p.tags?.includes(h.tag)).length,
  })),
  featuredBlogPosts: [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 4)
    .map((p) => ({
      title: p.title.replace(/\s*:.*$/, '').replace(/\s*\|.*$/, ''),
      slug: p.slug,
    })),
  contentStats: {
    speciesCount: speciesGuides.length,
    blogCount: blogPosts.length,
    careGuideCount: careGuides.length,
    glossaryCount: glossaryTerms.length,
    totalArticles:
      speciesGuides.length + blogPosts.length + careGuides.length,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as Lang);
  const cjkClass = cjkFontVariable[params.lang] ?? '';

  return (
    <html lang={params.lang} className={`${fontVariables} ${cjkClass}`}>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="bg-surface text-deep-text font-body antialiased">
        <CartProvider>
          <SearchProvider>
            <AnnouncementBar lang={params.lang} dict={dict.announcement} />
            <SiteHeader lang={params.lang} categories={categoryNav} guides={guidesNav} dict={dict} />
            <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
            <SiteFooter lang={params.lang} guides={guidesNav} dict={dict} />
            <CartDrawer lang={params.lang} dict={dict.cart} />
            <SearchOverlay
              products={searchProducts}
              categories={categoryNav}
              lang={params.lang}
              dict={dict}
            />
            <MobileBottomNav lang={params.lang} dict={dict.navigation} />
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}
