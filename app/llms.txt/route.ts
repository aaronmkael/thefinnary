import { SITE_URL } from '@/lib/seo/i18n';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import { speciesGuides } from '@/lib/data/species-guides';
import { careGuides } from '@/lib/data/care-guides';
import { blogPosts } from '@/lib/data/blog-posts';
import { collections } from '@/app/[lang]/buy/[slug]/page';

export async function GET() {
  const u = (path: string) => `${SITE_URL}/en${path}`;

  const lines = [
    '# The Fish Collection',
    '',
    '> House of Rare & Luxury Aquatic Life. The Fish Collection is a premium online retailer of exotic, rare, and collector-grade aquarium fish. We ship live fish overnight across the United States with a 100% live arrival guarantee.',
    '',
    `> Website: ${SITE_URL}`,
    '',
    '## About',
    '',
    `The Fish Collection sells ${products.length}+ exotic fish species across ${categories.length} categories, from Platinum Arowana and Peppermint Angelfish to Zebra Pleco and Galaxy Koi Betta. We publish expert-authored care guides, species profiles, and fishkeeping blog posts written by Teemu Suoninen, our lead aquarist with 20+ years of experience.`,
    '',
    '## Key Pages',
    '',
    `- [Homepage](${SITE_URL}): Main entry point`,
    `- [All Exotic Fish](${u('/exotic-fish/')}): Browse all ${categories.length} categories and ${products.length}+ species`,
    `- [Species Guides](${u('/species/')}): ${speciesGuides.length} in-depth species profiles`,
    `- [Care Guides](${u('/care-guides/')}): ${careGuides.length} expert care, breeding, and equipment guides`,
    `- [Blog](${u('/blog/')}): ${blogPosts.length} articles on fishkeeping, comparisons, and buying advice`,
    '',
    '## Buy Collections',
    '',
    ...Object.entries(collections).map(
      ([slug, col]) => `- [${col.title}](${u(`/buy/${slug}/`)})`
    ),
    '',
    '## Categories',
    '',
    ...categories.map(
      (cat) => `- [${cat.name}](${u(`/exotic-fish/${cat.slug}/`)}): ${products.filter((p) => p.category === cat.slug).length} species`
    ),
    '',
    '## Documentation',
    '',
    `- [Shipping Policy](${u('/shipping/')})`,
    `- [Returns & Refunds](${u('/returns/')})`,
    `- [FAQ](${u('/faq/')})`,
    `- [About Us](${u('/about/')})`,
    `- [Contact](${u('/contact/')})`,
    `- [Privacy Policy](${u('/privacy/')})`,
    `- [Terms of Service](${u('/terms/')})`,
    '',
    '## Languages',
    '',
    'Available in 9 languages: English, Deutsch, Nederlands, Français, Español, 日本語, Português, 한국어, Italiano.',
    '',
    `## Full Documentation`,
    '',
    `For a comprehensive listing of all pages and content, see [llms-full.txt](${SITE_URL}/llms-full.txt).`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
