import { SITE_URL } from '@/lib/seo/i18n';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import { speciesGuides } from '@/lib/data/species-guides';
import { blogPosts } from '@/lib/data/blog-posts';
import { careGuides } from '@/lib/data/care-guides';
import { careGuideCategories } from '@/lib/data/care-guide-categories';
import { blogTagHubs } from '@/lib/data/blog-tag-hubs';
import { collections } from '@/app/[lang]/buy/[slug]/page';
import { buildSitemapEntry, entriesToXml } from '@/lib/seo/sitemap';

export async function GET(_req: Request, { params }: { params: { lang: string } }) {
  const lang = params.lang;
  const base = `${SITE_URL}/${lang}`;
  const today = new Date().toISOString().split('T')[0];

  const entries = [
    // Homepage
    buildSitemapEntry(`${base}/`, 'homepage'),

    // Collections
    ...Object.keys(collections).map((slug) =>
      buildSitemapEntry(`${base}/buy/${slug}/`, 'collection')
    ),

    // Pillar page
    buildSitemapEntry(`${base}/exotic-fish/`, 'category'),

    // Categories
    ...categories.map((cat) =>
      buildSitemapEntry(`${base}/exotic-fish/${cat.slug}/`, 'category')
    ),

    // Products
    ...products.map((p) =>
      buildSitemapEntry(`${base}/exotic-fish/${p.category}/${p.slug}/`, 'product', [
        { loc: `${SITE_URL}${p.images[0]?.url ?? ''}`, title: p.images[0]?.alt },
      ])
    ),

    // Species guides
    buildSitemapEntry(`${base}/species/`, 'species'),
    ...speciesGuides.map((g) =>
      buildSitemapEntry(`${base}/species/${g.slug}/`, 'species', [
        { loc: `${SITE_URL}${g.heroImage}`, title: g.heroImageAlt },
      ])
    ),

    // Care guides
    buildSitemapEntry(`${base}/care-guides/`, 'care'),
    ...careGuides.map((g) =>
      buildSitemapEntry(`${base}/care-guides/${g.slug}/`, 'care')
    ),

    // Care guide category hubs
    ...careGuideCategories.map((cat) =>
      buildSitemapEntry(`${base}/care-guides/${cat.slug}/`, 'care')
    ),

    // Glossary
    buildSitemapEntry(`${base}/glossary/`, 'care'),

    // Blog
    buildSitemapEntry(`${base}/blog/`, 'blog'),
    ...blogPosts.map((p) =>
      buildSitemapEntry(`${base}/blog/${p.slug}/`, 'blog')
    ),

    // Blog tag hubs
    ...blogTagHubs.map((hub) =>
      buildSitemapEntry(`${base}/blog/${hub.slug}/`, 'blog')
    ),

    // Authors
    buildSitemapEntry(`${base}/authors/teemu-suoninen/`, 'species'),

    // Static pages
    buildSitemapEntry(`${base}/about/`, 'care'),
    buildSitemapEntry(`${base}/shipping/`, 'care'),
    buildSitemapEntry(`${base}/returns/`, 'care'),
    buildSitemapEntry(`${base}/faq/`, 'care'),
    buildSitemapEntry(`${base}/contact/`, 'care'),
    buildSitemapEntry(`${base}/privacy/`, 'care'),
    buildSitemapEntry(`${base}/terms/`, 'care'),
  ];

  return new Response(entriesToXml(entries), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
