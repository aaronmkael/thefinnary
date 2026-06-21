export interface BlogTagHub {
  slug: string;
  tag: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogTagHubs: BlogTagHub[] = [
  {
    slug: 'buying-guides',
    tag: 'buying-guide',
    name: 'Buying Guides',
    description:
      'Expert buying advice for exotic aquarium fish — what to look for, where to source, and how to avoid common pitfalls when purchasing rare and high-value species.',
    metaTitle:
      'Fish Buying Guides | How to Buy Exotic Fish | The Fish Collection',
    metaDescription:
      'Expert buying guides for exotic aquarium fish. Learn what to look for, how to verify health, and where to source rare species safely. Written by certified aquarists.',
  },
  {
    slug: 'species-spotlights',
    tag: 'species-spotlight',
    name: 'Species Spotlights',
    description:
      'In-depth profiles of exotic aquarium species — natural history, care requirements, pricing, and what makes each fish unique in the collector hobby.',
    metaTitle:
      'Species Spotlights | Exotic Fish Profiles | The Fish Collection',
    metaDescription:
      'Detailed species spotlight articles on exotic aquarium fish — natural history, care needs, pricing, and collector insights. Written by professional aquarists.',
  },
  {
    slug: 'comparisons',
    tag: 'comparison',
    name: 'Comparisons',
    description:
      'Side-by-side comparisons of popular aquarium fish, equipment, and methods — helping you make informed decisions for your setup.',
    metaTitle:
      'Fish & Aquarium Comparisons | Side-by-Side Guides | The Fish Collection',
    metaDescription:
      'Side-by-side comparisons of exotic fish species, aquarium equipment, and care methods. Data-driven guides to help you choose the right fish and gear.',
  },
  {
    slug: 'beginner-guides',
    tag: 'beginner-guide',
    name: 'Beginner Guides',
    description:
      'Essential guides for new fishkeepers — foundational knowledge on aquarium setup, water chemistry, fish selection, and daily care routines.',
    metaTitle:
      'Beginner Fish Keeping Guides | Start Your Aquarium | The Fish Collection',
    metaDescription:
      'Beginner-friendly aquarium guides covering tank setup, water chemistry basics, fish selection, and daily care. Start your fishkeeping journey with expert advice.',
  },
  {
    slug: 'pricing',
    tag: 'pricing',
    name: 'Price Guides',
    description:
      'Market pricing guides for exotic aquarium fish — current values, price trends, and the factors that determine what rare species cost.',
    metaTitle:
      'Exotic Fish Price Guides | How Much Do Rare Fish Cost | The Fish Collection',
    metaDescription:
      'Up-to-date pricing guides for exotic aquarium fish. Market values, price trends, and cost factors for arowana, angelfish, stingrays, and other rare species.',
  },
];

export function getBlogTagHubBySlug(slug: string): BlogTagHub | undefined {
  return blogTagHubs.find((h) => h.slug === slug);
}
