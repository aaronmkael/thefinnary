export interface CareGuideCategory {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const careGuideCategories: CareGuideCategory[] = [
  {
    slug: 'tank-setup',
    name: 'Tank Setup',
    description:
      'Complete aquarium setup guides covering tank dimensions, filtration systems, substrate, lighting, and equipment for exotic fish species.',
    metaTitle:
      'Aquarium Tank Setup Guides | Fish Tank Setup | The Fish Collection',
    metaDescription:
      'Expert aquarium tank setup guides — dimensions, filtration, substrate, lighting, and equipment recommendations for exotic fish. Written by certified aquarists.',
  },
  {
    slug: 'water-chemistry',
    name: 'Water Chemistry',
    description:
      'In-depth guides to aquarium water parameters, testing, the nitrogen cycle, and species-specific water chemistry requirements.',
    metaTitle:
      'Aquarium Water Chemistry Guides | Water Parameters | The Fish Collection',
    metaDescription:
      'Master aquarium water chemistry — pH, GH, KH, ammonia, nitrite, nitrate, and the nitrogen cycle. Species-specific water parameter guides from expert aquarists.',
  },
  {
    slug: 'feeding',
    name: 'Feeding & Diet',
    description:
      'Comprehensive feeding guides for exotic fish species — diet protocols, nutrition requirements, feeding schedules, and food recommendations.',
    metaTitle:
      'Fish Feeding & Diet Guides | What to Feed Exotic Fish | The Fish Collection',
    metaDescription:
      'Expert fish feeding guides covering diet protocols, nutrition, feeding schedules, and food recommendations for exotic aquarium fish species.',
  },
  {
    slug: 'breeding',
    name: 'Breeding',
    description:
      'Step-by-step breeding guides for exotic aquarium fish — conditioning, spawning, fry care, and genetic selection techniques.',
    metaTitle:
      'Fish Breeding Guides | How to Breed Exotic Fish | The Fish Collection',
    metaDescription:
      'Expert fish breeding guides — conditioning, spawning triggers, fry care, and genetic selection for arowana, betta, discus, koi, and more exotic species.',
  },
  {
    slug: 'disease-treatment',
    name: 'Disease & Treatment',
    description:
      'Fish disease identification and treatment guides — ich, fin rot, parasites, quarantine protocols, and preventive health management.',
    metaTitle:
      'Fish Disease & Treatment Guides | Aquarium Fish Health | The Fish Collection',
    metaDescription:
      'Identify and treat common fish diseases — ich, fin rot, parasites, and bacterial infections. Quarantine protocols and prevention guides from expert aquarists.',
  },
  {
    slug: 'tank-mates',
    name: 'Tank Mates & Compatibility',
    description:
      'Fish compatibility guides — which species can coexist, aggression management, stocking ratios, and community tank planning for exotic fish.',
    metaTitle:
      'Fish Tank Mate & Compatibility Guides | The Fish Collection',
    metaDescription:
      'Expert fish compatibility guides — tank mate recommendations, aggression management, and stocking ratios for arowana, cichlids, bettas, and other exotic species.',
  },
  {
    slug: 'equipment',
    name: 'Equipment',
    description:
      'Aquarium equipment guides — filters, heaters, lighting, protein skimmers, and accessories reviewed and recommended by professional aquarists.',
    metaTitle:
      'Aquarium Equipment Guides | Best Fish Tank Gear | The Fish Collection',
    metaDescription:
      'Expert aquarium equipment guides — filters, heaters, lighting systems, and accessories. Professional recommendations for exotic fish keeping setups.',
  },
  {
    slug: 'species-care',
    name: 'Species Care',
    description:
      'Complete care guides for specific exotic fish species — covering tank requirements, water parameters, diet, breeding, and health management.',
    metaTitle:
      'Species-Specific Fish Care Guides | Expert Aquarium Advice | The Fish Collection',
    metaDescription:
      'Detailed species-specific care guides for exotic aquarium fish — Oscar, Goldfish, Betta, Discus, and more. Written by certified aquarists.',
  },
];
