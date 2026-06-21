export interface CategoryFAQ {
  question: string;
  answer: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  productCount: number;
  buyingGuide?: string;
  faqs?: CategoryFAQ[];
}
