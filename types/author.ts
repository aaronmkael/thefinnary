export interface SocialLink {
  platform: string;
  url: string;
}

export interface Author {
  name: string;
  slug: string;
  role: string;
  jobTitle: string;
  bio: string;
  shortBio: string;
  image: string;
  credentials: string[];
  yearsExperience: number;
  expertise: string[];
  knowsAbout: string[];
  socialLinks: SocialLink[];
  sameAs: string[];
}
