import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*/cart',
          '/*/checkout',
          '/*/order-confirmation',
          '/*/account',
          '/*/wishlist',
          '/api/',
          '/*?sort=',
          '/*?filter=',
          '/*?page=',
          '/*?ref=',
          '/*?utm_',
        ],
      },
    ],
    sitemap: 'https://thefishcollection.com/sitemap.xml',
  };
}
