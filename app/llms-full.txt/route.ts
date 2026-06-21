import { SITE_URL } from '@/lib/seo/i18n';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { speciesGuides } from '@/lib/data/species-guides';
import { careGuides } from '@/lib/data/care-guides';
import { blogPosts } from '@/lib/data/blog-posts';
import { collections } from '@/app/[lang]/buy/[slug]/page';

export async function GET() {
  const u = (path: string) => `${SITE_URL}/en${path}`;

  const sections: string[] = [];

  /* ── Header ──────────────────────────────────────────��───────────── */
  sections.push(
    '# The Fish Collection — Full Site Documentation',
    '',
    '> House of Rare & Luxury Aquatic Life. Premium online retailer of exotic, rare, and collector-grade aquarium fish. Live arrival guaranteed. Free overnight shipping USA.',
    '',
    `> Website: ${SITE_URL}`,
    `> Products: ${products.length}+ species across ${categories.length} categories`,
    `> Content: ${speciesGuides.length} species guides, ${careGuides.length} care guides, ${blogPosts.length} blog posts`,
    '',
  );

  /* ── Buy Collections ─────────────────────────────────────────────── */
  sections.push('## Buy Collections', '');
  for (const [slug, col] of Object.entries(collections)) {
    const filtered = col.filter ? products.filter(col.filter) : products;
    sections.push(
      `### [${col.title}](${u(`/buy/${slug}/`)})`,
      '',
      col.metaDescription,
      '',
      `Products: ${filtered.length}`,
      '',
    );
  }

  /* ── Categories ──────────────────────────────────────────────────── */
  sections.push('## Fish Categories', '');
  for (const cat of categories) {
    const catProducts = products.filter((p) => p.category === cat.slug);
    sections.push(
      `### [${cat.name}](${u(`/exotic-fish/${cat.slug}/`)})`,
      '',
      `${catProducts.length} species available. Price range: $${Math.min(...catProducts.map((p) => p.priceUSD))}–$${Math.max(...catProducts.map((p) => p.priceUSD))}.`,
      '',
      'Species:',
      ...catProducts.map(
        (p) =>
          `- [${p.commonName}](${u(`/exotic-fish/${p.category}/${p.slug}/`)}): $${p.priceUSD}${p.scientificName ? ` — ${p.scientificName}` : ''}`
      ),
      '',
    );
  }

  /* ── Species Guides ──────────────────────────────────────────────── */
  sections.push('## Species Guides', '');
  for (const guide of speciesGuides) {
    sections.push(
      `### [${guide.title}](${u(`/species/${guide.slug}/`)})`,
      '',
      guide.metaDescription,
      '',
      ...(guide.keyFacts
        ? [
            'Key facts:',
            ...guide.keyFacts.map((f) => `- ${f.label}: ${f.value}`),
            '',
          ]
        : []),
      'Headings:',
      ...guide.headings.map((h) => `- ${h.text}`),
      '',
    );
  }

  /* ── Care Guides ─────────────────────────────────────────────────── */
  sections.push('## Care Guides', '');
  for (const guide of careGuides) {
    sections.push(
      `### [${guide.title}](${u(`/care-guides/${guide.slug}/`)})`,
      '',
      guide.metaDescription,
      '',
      ...(guide.category ? [`Category: ${guide.category}`, ''] : []),
      ...(guide.keyFacts
        ? [
            'Key facts:',
            ...guide.keyFacts.map((f) => `- ${f.label}: ${f.value}`),
            '',
          ]
        : []),
      'Headings:',
      ...guide.headings.map((h) => `${'  '.repeat(h.level - 2)}- ${h.text}`),
      '',
      ...(guide.quickAnswer
        ? [`Quick answer: ${guide.quickAnswer}`, '']
        : []),
      'FAQs:',
      ...guide.faqs.map((f) => `- Q: ${f.question}\n  A: ${f.answer}`),
      '',
    );
  }

  /* ── Blog Posts ──────────────────────────────────────────────────── */
  sections.push('## Blog Posts', '');
  for (const post of blogPosts) {
    sections.push(
      `### [${post.title}](${u(`/blog/${post.slug}/`)})`,
      '',
      post.metaDescription,
      '',
      `Published: ${post.publishedAt} | Updated: ${post.updatedAt}`,
      '',
      'Headings:',
      ...post.headings.map((h) => `${'  '.repeat(h.level - 2)}- ${h.text}`),
      '',
      ...(post.quickAnswer ? [`Quick answer: ${post.quickAnswer}`, ''] : []),
      'FAQs:',
      ...post.faqs.map((f) => `- Q: ${f.question}\n  A: ${f.answer}`),
      '',
    );
  }

  /* ── Static Pages ────────────────────────────────────────────────── */
  sections.push(
    '## Static Pages',
    '',
    `- [About Us](${u('/about/')})`,
    `- [Shipping Policy](${u('/shipping/')})`,
    `- [Returns & Refunds](${u('/returns/')})`,
    `- [FAQ](${u('/faq/')})`,
    `- [Contact](${u('/contact/')})`,
    `- [Privacy Policy](${u('/privacy/')})`,
    `- [Terms of Service](${u('/terms/')})`,
    '',
  );

  /* ── Languages ───────────────────────────────────────────────────── */
  sections.push(
    '## Languages',
    '',
    'All content is available in 9 languages:',
    '- English (en) — default',
    '- Deutsch (de)',
    '- Nederlands (nl)',
    '- Français (fr)',
    '- Español (es)',
    '- 日本語 (ja)',
    '- Português (pt)',
    '- 한국어 (ko)',
    '- Italiano (it)',
    '',
    'URL pattern: `https://thefishcollection.com/{lang}/...`',
    '',
  );

  return new Response(sections.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
