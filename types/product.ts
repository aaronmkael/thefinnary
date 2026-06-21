export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface WaterParameters {
  tempMin: number;
  tempMax: number;
  phMin: number;
  phMax: number;
  hardnessMin?: number;
  hardnessMax?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  commonName: string;
  scientificName: string;
  slug: string;
  category: string;
  sku: string;
  priceUSD: number;
  images: ProductImage[];
  description: string;
  seoDescription: string;
  careLevel: 1 | 2 | 3 | 4 | 5;
  careLevelLabel: string;
  tankSizeGallons: number;
  maxSizeInches: number;
  origin: string;
  diet: string;
  temperament: string;
  lifespan: string;
  waterParameters: WaterParameters;
  inStock: boolean;
  stockCount: number;
  faqs: FAQ[];
  relatedSlugs: string[];
  speciesGuideSlug?: string;
  ratingAverage: number;
  reviewCount: number;
}
