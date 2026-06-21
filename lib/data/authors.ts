import type { Author } from '@/types/author';

export const authors: Author[] = [
  {
    name: 'Teemu Suoninen',
    slug: 'teemu-suoninen',
    role: 'Founder & Head Aquarist',
    jobTitle: 'Head Aquarist & Exotic Fish Specialist',
    bio: 'Teemu Suoninen has dedicated over 15 years to the world of exotic and luxury aquarium fish. A graduate of aquatic biology from the University of Helsinki, Teemu began his career at the Rotterdam Aquarium, where he served as Head Aquarist managing one of Europe\'s most prestigious marine collections. His expertise in Arowana breeding programmes earned him CITES certification as a licensed trader of protected aquatic species. Teemu founded The Fish Collection with a singular vision: to bring the rigour and reverence of fine art collecting to the world of rare fish. His deep knowledge of water chemistry, species compatibility, and ethical sourcing has made The Fish Collection the trusted house for serious collectors across three continents. When not curating specimens, Teemu consults for public aquariums and contributes research on captive breeding of endangered freshwater species.',
    shortBio: 'Founder of The Fish Collection with 15+ years in exotic fish. Former Head Aquarist at Rotterdam Aquarium. CITES-certified trader and aquatic biology specialist.',
    image: '/images/authors/teemu-suoninen.jpg',
    credentials: [
      'CITES-Certified Trader',
      'Former Head Aquarist, Rotterdam Aquarium',
      'Aquatic Biology, University of Helsinki',
    ],
    yearsExperience: 15,
    expertise: [
      'Arowana breeding',
      'Rare marine species',
      'Water chemistry',
      'CITES compliance',
      'Exotic fish sourcing',
      'Captive breeding programmes',
    ],
    knowsAbout: [
      'exotic fish',
      'arowana',
      'platinum arowana',
      'gem tang',
      'peppermint angelfish',
      'aquarium care',
      'fish breeding',
      'water chemistry',
      'CITES regulations',
      'rare fish species',
      'luxury aquarium fish',
      'freshwater exotic fish',
      'marine exotic fish',
      'fish tank setup',
      'aquatic biology',
    ],
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/thefishcollection' },
      { platform: 'YouTube', url: 'https://www.youtube.com/@thefishcollection' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/teemu-suoninen' },
    ],
    sameAs: [
      'https://www.instagram.com/thefishcollection',
      'https://www.youtube.com/@thefishcollection',
      'https://www.linkedin.com/in/teemu-suoninen',
    ],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
