export const PRIORITIES: Record<string, number> = {
  homepage: 1.0,
  collection: 0.9,
  category: 0.9,
  product: 0.8,
  species: 0.8,
  care: 0.7,
  blog: 0.6,
};

export const CHANGEFREQ: Record<string, string> = {
  homepage: 'daily',
  collection: 'daily',
  category: 'daily',
  product: 'weekly',
  species: 'monthly',
  care: 'monthly',
  blog: 'monthly',
};

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
  images?: { loc: string; title?: string }[];
}

export function buildSitemapEntry(
  url: string,
  type: string,
  images?: { loc: string; title?: string }[]
): SitemapEntry {
  return {
    loc: url,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: CHANGEFREQ[type] ?? 'monthly',
    priority: PRIORITIES[type] ?? 0.5,
    images,
  };
}

export function entriesToXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map((entry) => {
      const imageTags = entry.images
        ?.map(
          (img) =>
            `    <image:image>\n      <image:loc>${img.loc}</image:loc>${img.title ? `\n      <image:title>${img.title}</image:title>` : ''}\n    </image:image>`
        )
        .join('\n');
      return `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${imageTags ?? ''}  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
}
