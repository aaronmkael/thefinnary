# CLAUDE.md — The Fish Collection.com

> This file is read automatically by Claude Code on every session.
> It contains the complete SEO, brand, and architecture rules for this project.
> **Never delete or truncate this file.** Update the version tag when making changes.
>
> Version: 1.0 | Last updated: March 2026 | Owner: SEO Lead

---

## 1. Project Overview

**Brand:** The Fish Collection  
**Domain:** thefishcollection.com  
**Tagline:** *The House of Rare & Luxury Aquatic Life*  
**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Stripe  
**Hosting:** Vercel (ISR + Edge Network)  
**Repo structure:** Monorepo — app, lib, messages, public  

The Fish Collection is a luxury e-commerce brand specialising in exotic, rare, and collector-grade aquarium fish — platinum arowana, gem tang, peppermint angelfish, albino alligator gar, and 200+ species. The brand is positioned as a curated house (like a winery, but for fish). Every word, URL, schema, and page must reflect this premium, expert positioning.

---

## 2. Non-Negotiable SEO Rules

These rules apply to **every file you touch**. No exceptions.

### 2.1 Canonical URLs

- Every page MUST have a `<link rel="canonical">` pointing to its own clean URL
- Canonical always uses `https://` + full domain + trailing slash: `https://thefishcollection.com/en/exotic-fish/arowana/platinum-arowana/`
- Cart, checkout, order-confirmation, account pages: canonical points back to the product or homepage
- Never set canonical to a different page to "consolidate" — only self-referencing canonicals
- Paginated pages (`?page=2`): canonical points to page 1 of the collection

### 2.2 Title Tags

Pattern by page type — follow exactly, no creative deviation:

```
Homepage:     The House of Rare & Luxury Fish | The Fish Collection
Category:     {Category Name} Fish for Sale | Buy Live {Category} | The Fish Collection
Product:      Buy {Fish Name} ({Scientific Name}) | The Fish Collection — Live Arrival Guaranteed
Species guide:{Fish Name}: Complete Care Guide & Tank Setup | The Fish Collection
Care guide:   {Topic} Guide for {Fish Name} | Water, Tank & Diet | The Fish Collection
Blog post:    {Headline, max 60 chars} | The Fish Collection
Collection:   {Transactional phrase, e.g. Exotic Fish for Sale USA} | The Fish Collection
```

Rules:
- Max 60 characters (including brand suffix) — warn if exceeded
- Primary keyword must appear in the first 40 characters
- Scientific name in parentheses on product pages — Google surfaces this in rich results
- Never stuff multiple keywords: one primary keyword per title

### 2.3 Meta Descriptions

- 140–155 characters exactly — warn if outside this range
- Must include: primary keyword, a concrete differentiator (price/species count/guarantee), and a CTA
- Never auto-generate from page content — always write per-page

Templates:
```
Product:  "{Fish Name} for sale — {rarity/size claim}. Live arrival guaranteed,
           overnight shipping. From ${price}. Expert-bred at The Fish Collection."

Category: "Buy {count}+ {category} fish online. Expert-bred, live arrival
           guaranteed. Rare & luxury {category} species from ${min_price}.
           Free overnight shipping."

Species:  "Complete {Fish Name} care guide — tank size, water parameters, diet
           & compatibility. Expert advice from The Fish Collection's aquarists."
```

### 2.4 Heading Structure

- ONE `<h1>` per page — always contains the primary keyword
- H1 on product pages: `{Fish Name} for Sale` or `Buy {Fish Name}` — never just the fish name alone
- H1 on species guides: `{Fish Name} ({Scientific Name}): Complete Care Guide`
- H2s target secondary and related keywords
- Never skip heading levels (H1 → H3 without H2)
- Heading text must differ from the title tag — do not repeat verbatim

### 2.5 URL Slugs

Rules (enforce in all route generators and CMS slugify functions):
- Lowercase only, hyphens only — no underscores, no camelCase, no special chars
- Max 6 words per slug segment
- Keyword-first: `platinum-arowana-for-sale` not `buy-the-platinum-arowana`
- No stop words in slugs: `a, the, of, and, or, in, to` — strip them
- No dates in slugs — keeps URLs evergreen
- Scientific names use hyphens: `scleropages-formosus` not `scleropages_formosus`

Slug function reference (enforce this exact logic):
```typescript
// lib/seo/slugify.ts
export function slugify(text: string): string {
  const stopWords = new Set(['a','an','the','of','and','or','in','to','for','with','on','at','from','by','as','is','was','are','were']);
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .split(/\s+/)
    .filter(word => !stopWords.has(word))
    .slice(0, 6)
    .join('-');
}
```

---

## 3. URL Architecture

All routes live under `app/[lang]/`. The `[lang]` segment is the locale code.

### 3.1 Full URL Map

```
/                                    → 301 to /en/ (Accept-Language redirect)
/{lang}/                             → Homepage
/{lang}/exotic-fish/                 → Master category hub (pillar page)
/{lang}/exotic-fish/{category}/      → Category listing (e.g. /en/exotic-fish/arowana/)
/{lang}/exotic-fish/{cat}/{slug}/    → Product detail page
/{lang}/species/                     → Species guide index
/{lang}/species/{slug}/              → Individual species guide
/{lang}/care-guides/                 → Care guide index
/{lang}/care-guides/{slug}/          → Individual care guide
/{lang}/blog/                        → Blog index
/{lang}/blog/{slug}/                 → Blog post
/{lang}/buy/{intent-slug}/           → Transactional collection (e.g. /en/buy/exotic-fish-for-sale/)
/{lang}/cart/                        → Cart (noindex)
/{lang}/checkout/                    → Checkout (noindex, no Stripe iframes here)
/{lang}/order-confirmation/          → Post-purchase (noindex)
/{lang}/sitemap.xml                  → Per-locale sitemap
/sitemap.xml                         → Sitemap index (all locales)
/robots.txt                          → Global robots file
```

### 3.2 Category Slugs (canonical list — do not invent new ones)

```
arowana
catfish
cichlid
pufferfish
stingray
knife-fish
gar
goby
angelfish
loach
pleco
barb
oscar
betta
eel
piranha
bass
grouper
tang
discus
```

### 3.3 Priority Sitemap Order

1. `/en/buy/exotic-fish-for-sale/` — 287 keywords, highest cluster
2. `/en/exotic-fish/arowana/platinum-arowana/` — flagship luxury product
3. `/en/species/gem-tang/` — KD 13, 1,900 vol
4. `/en/species/peppermint-angelfish/` — ultra-luxury ($20K+)
5. `/en/exotic-fish/arowana/` — category hub
6. All other product pages by Volume DESC

---

## 4. Multilingual & Hreflang

### 4.1 Supported Locales

```typescript
// lib/seo/i18n.ts
export const LOCALES = [
  { lang: 'en', region: 'en-US', label: 'English', currency: 'USD' },
  { lang: 'de', region: 'de-DE', label: 'Deutsch', currency: 'EUR' },
  { lang: 'nl', region: 'nl-NL', label: 'Nederlands', currency: 'EUR' },
  { lang: 'fr', region: 'fr-FR', label: 'Français',  currency: 'EUR' },
  { lang: 'es', region: 'es-ES', label: 'Español',   currency: 'EUR' },
] as const;

export type Lang = typeof LOCALES[number]['lang'];
```

### 4.2 Hreflang Implementation

Inject in `app/[lang]/layout.tsx` via `generateMetadata`. Every page must output ALL alternate tags + x-default:

```typescript
// lib/seo/hreflang.ts
export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const { region, lang } of LOCALES) {
    languages[region] = `https://thefishcollection.com/${lang}${path}`;
  }
  languages['x-default'] = `https://thefishcollection.com/en${path}`;
  return { languages };
}
```

Rules:
- `x-default` always points to `/en/` equivalent
- Path must be identical across locales (same slug in all languages)
- Never add hreflang to noindex pages (cart, checkout, order-confirmation)
- If a page doesn't exist in a locale yet, still include the hreflang pointing to EN — better than omitting

### 4.3 Language Rollout Order

| Phase | Locale | Status    | Notes                               |
|-------|--------|-----------|-------------------------------------|
| 1     | en     | Primary   | All 500+ pages                      |
| 2     | de     | Month 3   | Strong aquarium market (DE/AT/CH)   |
| 2     | nl     | Month 3   | Home market — Rotterdam base        |
| 3     | fr     | Month 5   | FR/BE/CH                            |
| 3     | es     | Month 5   | ES/MX/LATAM                         |

### 4.4 Translation Keys Structure

```
messages/
  en.json    ← source of truth
  de.json
  nl.json
  fr.json
  es.json
```

Namespace structure (add keys here, translate in all files):
```json
{
  "common": {
    "liveArrivalGuarantee": "Live Arrival Guaranteed",
    "freeShipping": "Free Overnight Shipping",
    "addToCart": "Add to Cart",
    "buyNow": "Buy Now",
    "inStock": "In Stock",
    "outOfStock": "Currently Unavailable",
    "species": "Species",
    "scientificName": "Scientific Name"
  },
  "seo": {
    "titleSuffix": "| The Fish Collection",
    "homeTitlePrefix": "The House of Rare & Luxury Fish",
    "productTitlePattern": "Buy {name} ({scientific}) | The Fish Collection — Live Arrival Guaranteed"
  },
  "product": {
    "careLevel": "Care Level",
    "tankSize": "Min. Tank Size",
    "waterTemp": "Water Temperature",
    "ph": "pH Range",
    "maxSize": "Max Size",
    "origin": "Origin",
    "diet": "Diet",
    "temperament": "Temperament"
  }
}
```

---

## 5. Structured Data (JSON-LD)

All schema goes in `lib/seo/jsonLd.ts`. Inject via `<script type="application/ld+json">` in the `<head>` — never inline in JSX body. Stack multiple schemas in a single script tag as an array.

### 5.1 Product Schema (product detail pages)

```typescript
export function buildProductSchema(product: Product): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.commonName} (${product.scientificName})`,
    description: product.seoDescription,
    image: product.images.map(img => img.url),
    brand: { '@type': 'Brand', name: 'The Fish Collection' },
    sku: product.sku,
    mpn: product.sku,
    offers: {
      '@type': 'Offer',
      url: `https://thefishcollection.com/en/exotic-fish/${product.category}/${product.slug}/`,
      priceCurrency: 'USD',
      price: product.priceUSD.toFixed(2),
      priceValidUntil: getNextYearISO(),
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'The Fish Collection' },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0, maxValue: 1, unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1, maxValue: 1, unitCode: 'DAY',
          },
        },
      },
    },
    aggregateRating: product.reviewCount > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: product.ratingAverage.toFixed(1),
      reviewCount: product.reviewCount,
      bestRating: '5',
      worstRating: '1',
    } : undefined,
  };
}
```

### 5.2 BreadcrumbList Schema (all pages)

```typescript
export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

Breadcrumb patterns:
```
Homepage:  Home
Category:  Home > {Category Name}
Product:   Home > {Category Name} > {Fish Name}
Species:   Home > Species Guides > {Fish Name}
Care:      Home > Care Guides > {Fish Name} > {Topic}
Blog:      Home > Blog > {Post Title}
```

### 5.3 FAQPage Schema (product pages + species guides)

Minimum 4 FAQs, maximum 8. Questions must come from real "People Also Ask" queries — check GSC after launch and update.

Seed FAQ question patterns (use these as starting templates):
```
"How much does a {fish name} cost?"
"How big does a {fish name} get?"
"Is {fish name} legal to own in the US?"
"What tank size does a {fish name} need?"
"What do {fish name} eat?"
"How long does a {fish name} live?"
"Can {fish name} live with other fish?"
"Where can I buy a {fish name}?"
```

```typescript
export function buildFAQ(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
```

### 5.4 Article Schema (blog posts + care guides)

```typescript
export function buildArticle(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.authorName,
      url: `https://thefishcollection.com/en/authors/${article.authorSlug}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Fish Collection',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thefishcollection.com/images/logo-schema.png',
        width: 600,
        height: 60,
      },
    },
    image: article.heroImage,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://thefishcollection.com/en/blog/${article.slug}/`,
    },
  };
}
```

### 5.5 Organization Schema (site-wide, in root layout)

```typescript
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  name: 'The Fish Collection',
  alternateName: 'The Fish Collection',
  url: 'https://thefishcollection.com',
  logo: 'https://thefishcollection.com/images/logo.png',
  description:
    'The House of Rare & Luxury Aquatic Life. Expert-bred exotic fish — platinum arowana, gem tang, peppermint angelfish and 200+ species. Live arrival guaranteed.',
  foundingDate: '2026',
  areaServed: ['US', 'GB', 'DE', 'NL', 'FR', 'ES'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exotic & Luxury Fish Catalog',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Platinum Arowana' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gem Tang' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Peppermint Angelfish' } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/thefishcollection',
    'https://www.youtube.com/@thefishcollection',
    'https://www.facebook.com/thefishcollection',
  ],
};
```

### 5.6 Schema Coverage by Page Type

| Page type        | Product | Breadcrumb | FAQ | Article | Org |
|------------------|:-------:|:----------:|:---:|:-------:|:---:|
| Homepage         |         |            |     |         | ✓   |
| Category page    |         | ✓          | ✓   |         | ✓   |
| Product detail   | ✓       | ✓          | ✓   |         | ✓   |
| Species guide    |         | ✓          | ✓   | ✓       |     |
| Care guide       |         | ✓          | ✓   | ✓       |     |
| Blog post        |         | ✓          |     | ✓       |     |
| Collection/buy   | ✓       | ✓          | ✓   |         | ✓   |

---

## 6. generateMetadata Factory

Every route must use this — never write raw `export const metadata` objects ad-hoc.

```typescript
// lib/seo/generateMetadata.ts
import { buildAlternates } from './hreflang';
import type { Metadata } from 'next';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  lang: string;
  ogImage?: string;
  ogType?: 'website' | 'product' | 'article';
  noIndex?: boolean;
}

export function buildMetadata(input: MetaInput): Metadata {
  const canonical = `https://thefishcollection.com/${input.lang}${input.path}`;
  const ogImage = input.ogImage ?? 'https://thefishcollection.com/images/og-default.jpg';

  return {
    title: input.title,
    description: input.description,
    robots: input.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    alternates: {
      canonical,
      ...buildAlternates(input.path),
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: 'The Fish Collection',
      type: input.ogType ?? 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
      locale: input.lang,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [ogImage],
      site: '@thefishcollection',
    },
  };
}
```

**Pages that MUST have `noIndex: true`:**
- `/[lang]/cart/`
- `/[lang]/checkout/`
- `/[lang]/order-confirmation/`
- `/[lang]/account/` and all sub-routes
- Any URL containing `?` query parameters (handle via robots.txt + canonical)

---

## 7. Sitemap

### 7.1 Sitemap Index (`/sitemap.xml`)

```typescript
// app/sitemap.xml/route.ts
export async function GET() {
  const locales = ['en', 'de', 'nl', 'fr', 'es'];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locales.map(lang => `  <sitemap>
    <loc>https://thefishcollection.com/${lang}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
```

### 7.2 Per-Locale Sitemap

```typescript
// app/[lang]/sitemap.xml/route.ts
// Priority rules:
const PRIORITIES: Record<string, number> = {
  homepage:   1.0,
  collection: 0.9,
  category:   0.9,
  product:    0.8,
  species:    0.8,
  care:       0.7,
  blog:       0.6,
};

const CHANGEFREQ: Record<string, string> = {
  homepage:   'daily',
  collection: 'daily',
  category:   'daily',
  product:    'weekly',
  species:    'monthly',
  care:       'monthly',
  blog:       'monthly',
};
```

Include `<image:image>` tags for all product and species pages — Google uses these for image search indexing.

---

## 8. robots.txt

```
# /public/robots.txt — The Fish Collection.com
User-agent: *
Allow: /

# Transactional/account routes — never index
Disallow: /*/cart
Disallow: /*/checkout
Disallow: /*/order-confirmation
Disallow: /*/account
Disallow: /*/wishlist

# API routes
Disallow: /api/

# Faceted navigation — prevent duplicate content
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?page=
Disallow: /*?ref=
Disallow: /*?utm_

# Crawl budget — polite
Crawl-delay: 1

# Sitemaps
Sitemap: https://thefishcollection.com/sitemap.xml
```

---

## 9. Rendering Strategy

| Page type       | Strategy       | Revalidate | Reason                                  |
|-----------------|----------------|------------|------------------------------------------|
| Homepage        | ISR            | 3600s      | Feature items change occasionally       |
| Category page   | ISR            | 600s       | Inventory changes throughout the day    |
| Product detail  | ISR + on-demand| 300s       | Stock and price accuracy critical       |
| Species guide   | SSG            | deploy     | Evergreen — pure content                |
| Care guide      | SSG            | deploy     | Evergreen — pure content                |
| Blog post       | SSG            | deploy     | Evergreen — pure content                |
| Collection/buy  | ISR            | 600s       | Inventory-dependent                     |
| Cart/checkout   | CSR            | none       | Never cached, never indexed             |

On-demand revalidation endpoint: `POST /api/revalidate?path={path}&secret={REVALIDATE_SECRET}`

---

## 10. Image SEO

### Rules for all images

- Always use `next/image` — never raw `<img>` tags
- Always provide `width` and `height` — prevents CLS
- Always provide descriptive `alt` text (see patterns below)
- Hero/LCP image: add `priority` prop — only ONE per page
- All below-fold images: default lazy loading (no prop needed)
- Format: AVIF primary, WebP fallback — configured in `next.config.js`
- Serve from CDN: `cdn.thefishcollection.com` (configure in `next.config.js` remotePatterns)

### Alt text patterns

```
Product hero:   "{Common Name} ({Scientific Name}) — {size/variant description}"
                Example: "Platinum Arowana (Scleropages formosus) — XL, 18-20 inches"

Category hero:  "{Category} fish for sale at The Fish Collection — {brief description}"
                Example: "Arowana fish for sale at The Fish Collection — rare freshwater species"

Species guide:  "{Common Name} in natural habitat — {origin region}"
                Example: "Gem Tang (Zebrasoma gemmatum) in natural habitat — Indian Ocean"

Care guide:     "{Fish Name} {tank/feeding/care topic} setup"
                Example: "Platinum Arowana tank setup — minimum 300 gallon aquarium"
```

### File naming convention

```
{fish-slug}-{variant}-{angle}.jpg
Examples:
  platinum-arowana-xl-side-view.jpg
  gem-tang-full-body.jpg
  peppermint-angelfish-juvenile.jpg
  albino-alligator-gar-tank.jpg
```

---

## 11. Internal Linking Rules

Internal links are the primary driver of topical authority. Follow this matrix strictly.

### Link requirements by page type

**Homepage → must link to:**
- All main category pages (arowana, catfish, cichlid, tang, pufferfish, etc.)
- Top 6 species guide pages
- Top 3 collection/buy pages (exotic fish for sale, rare fish for sale, luxury fish)
- Blog index

**Category page → must link to:**
- Every product in that category (product grid)
- 3–5 related species guides in the sidebar
- Parent category (exotic-fish/)
- 1–2 cross-category related pages (e.g., arowana → "other large exotic fish")

**Product detail → must link to:**
- Its species guide ("Full {Fish Name} Care Guide →")
- Its care guide if exists
- 3–5 related products (same category or similar price point)
- Parent category page

**Species guide → must link to:**
- Product page with buy CTA ("Buy {Fish Name} Online →")
- Care guide if exists
- 2–3 related species guides
- Parent species index

**Blog post → must link to:**
- 2–4 product or species pages organically within content
- Related blog posts
- Never force links — must be natural within content

### Anchor text rules

- Primary anchor: keyword-rich (`"platinum arowana for sale"`, `"buy gem tang online"`)
- Secondary anchor: natural variant (`"our arowana collection"`, `"this rare tang"`)
- Never: `"click here"`, `"read more"`, `"this page"` — these waste anchor text equity
- Never use the same anchor text for two different destination URLs on the same page

---

## 12. Content Rules & Brand Voice

### Tone of voice

The Fish Collection speaks as an **expert house**, not a pet shop. The voice is:
- Authoritative but not arrogant
- Specific and technical (use scientific names, exact water parameters, precise tank sizes)
- Collector-aware (our buyers know fish — don't explain what an arowana is)
- Premium without being exclusionary

**Do:**
```
"The Platinum Arowana (Scleropages formosus) demands a minimum 300-gallon tank 
and pristine water quality — a commitment The Fish Collection's breeding programme 
ensures you're prepared for."
```

**Don't:**
```
"The platinum arowana is an amazing and beautiful fish that many people love to 
keep in their aquariums! It's a great choice for fish lovers everywhere!"
```

### Word counts by page type

| Page type      | Min words | Target  | Notes                              |
|----------------|-----------|---------|-------------------------------------|
| Product detail | 400       | 600–900 | Unique per product — no templates  |
| Species guide  | 1,500     | 2,500+  | Comprehensive — targets PAA        |
| Care guide     | 1,200     | 2,000+  | Structured with H2/H3 sections     |
| Category page  | 300       | 500–700 | Above the fold + intro copy        |
| Blog post      | 800       | 1,500+  | Topic-dependent                    |
| Collection/buy | 200       | 350–500 | Short intro + product grid         |

### Keyword usage rules

- Primary keyword: in H1, first 100 words of body, at least 1 H2, image alt, meta title
- Secondary keywords: 1–2 occurrences each, natural placement
- Scientific name: always include on first mention — format: `Common Name (Scientific name)`
- Never keyword-stuff — Google's helpful content system will penalise this
- Aim for 1–2% keyword density on primary term

---

## 13. Priority Keyword Clusters

These 12 clusters represent >80% of targetable search volume in the dataset. Prioritise in this order.

### Cluster 1 — Exotic Fish for Sale (287 keywords, ~62K combined vol/mo)

Primary: `exotic fish for sale` (1,900 vol, KD 58)  
Secondary: `freshwater fish for sale` (4,400 vol, KD 32), `live fish for sale` (4,400 vol, KD 66), `exotic fish` (4,400 vol, KD 30)  
Target URL: `/en/buy/exotic-fish-for-sale/`  
Page type: Transactional collection  

### Cluster 2 — Platinum Arowana (104 keywords, ~8K combined vol/mo)

Primary: `platinum arowana` (2,400 vol, KD 28)  
Secondary: `platinum arowana for sale` (70 vol, KD high), `short body albino silver arowana` (880 vol, KD 5)  
Target URL: `/en/exotic-fish/arowana/platinum-arowana/` + `/en/species/platinum-arowana/`  
Page type: Product + species guide  

### Cluster 3 — Gem Tang / G.E.M. Tang (70 keywords, ~5K combined vol/mo)

Primary: `gem tang` (1,900 vol, KD 13) — **lowest KD, highest priority to rank first**  
Secondary: `gem tangs for sale` (20 vol, CPC $1.04)  
Target URL: `/en/exotic-fish/tang/gem-tang/` + `/en/species/gem-tang/`  
Page type: Product + species guide  

### Cluster 4 — Peppermint Angelfish (50 keywords, ~3K combined vol/mo)

Primary: `peppermint angelfish` (1,000 vol, KD 21), `peppermint angelfish for sale` (140 vol, CPC $1.08)  
Target URL: `/en/exotic-fish/angelfish/peppermint-angelfish/`  
Page type: Ultra-luxury product (AOV $20,000+)  

### Cluster 5 — Wolf Fish (18 keywords, 14,800 vol/mo)

Primary: `wolf fish` (14,800 vol, KD 36, CPC $1.76)  
Secondary: `aquarium wolf fish`, `wolf fish freshwater` (480 vol, KD 16)  
Target URL: `/en/exotic-fish/wolffish/` + `/en/species/wolf-fish/`  
Note: Highest single-keyword volume in dataset  

### Cluster 6 — Colorful Catfish (42 keywords, ~8K combined vol/mo)

Primary: `catfish for sale` (1,600 vol, KD 15), `red tail catfish for sale` (1,600 vol, KD 15)  
Secondary: `aquarium catfish` (1,900 vol, KD 20), `types of catfish` (4,400 vol, KD 33)  
Target URL: `/en/exotic-fish/catfish/` + species pages per species  

### Cluster 7 — Albino Alligator Gar (31 keywords, ~4K combined vol/mo)

Primary: `gar for sale` (590 vol, KD 3), `albino gar`  
Target URL: `/en/exotic-fish/gar/albino-alligator-gar/`  
Note: KD 3 — fastest possible ranking opportunity  

### Cluster 8 — Dragon Goby (10 keywords, 2,900 vol/mo)

Primary: `dragon goby` (2,900 vol, KD 16)  
Target URL: `/en/exotic-fish/goby/dragon-goby/`  
Note: Transactional + informational intent — strong hybrid page opportunity  

### Cluster 9 — Fahaka Pufferfish (18 keywords, 2,400 vol/mo)

Primary: `fahaka pufferfish` (2,400 vol, KD 23, CPC $1.40)  
Secondary: `fresh water puffer fish` (720 vol, KD 11), `mbu pufferfish` (1,300 vol, KD 17)  
Target URL: `/en/exotic-fish/pufferfish/fahaka-pufferfish/`  

### Cluster 10 — Flowerhorn Cichlid (4 keywords, 6,600 vol/mo)

Primary: `flowerhorn cichlid` (6,600 vol, KD 25)  
Target URL: `/en/exotic-fish/cichlid/flowerhorn-cichlid/`  

### Cluster 11 — Pet Piranha (17 keywords, ~2K combined vol/mo)

Primary: `piranhas for sale` (480 vol, KD 7)  
Target URL: `/en/exotic-fish/piranha/`  
Note: Regulatory considerations — verify legal states before publishing  

### Cluster 12 — Rare Fish (6 keywords, 2,900 vol/mo)

Primary: `rare fish` (2,900 vol, KD 30)  
Target URL: `/en/buy/rare-fish-for-sale/`  
Page type: Luxury collection page  

---

## 14. Stripe Integration (SEO-Safe Rules)

- **Product prices are rendered server-side** (ISR) — Google indexes them
- **Stripe Checkout Sessions are API-only** — `/api/stripe/checkout-session/` (POST)
- **No Stripe.js on indexable pages** — load Stripe Elements only on `/checkout/`
- **Checkout page is noindex** — Stripe iframes must never appear on crawlable pages
- **Order confirmation is noindex** — canonical points to the product that was purchased
- **Webhook endpoint:** `/api/stripe/webhook/` — verify signature, update inventory, trigger ISR revalidation

```typescript
// On successful payment in webhook handler:
await fetch(`https://thefishcollection.com/api/revalidate?path=/en/exotic-fish/${category}/${slug}/&secret=${secret}`);
```

---

## 15. Core Web Vitals Budgets

Enforce these in CI — fail the build if budgets are exceeded.

| Metric | Budget  | How to stay within it                           |
|--------|---------|-------------------------------------------------|
| LCP    | < 2.5s  | `priority` on hero image, AVIF, CDN             |
| CLS    | < 0.1   | Explicit `width`/`height` on all images, no FOUT|
| INP    | < 200ms | Server components, minimal client JS            |
| TTFB   | < 800ms | ISR + Vercel Edge Network                       |
| Bundle | < 90KB  | Per-route JS budget, no heavy client libraries  |

Run `next build --profile` before every deploy. Check `next-bundle-analyzer` output.

---

## 16. Environment Variables

```bash
# Required — never commit values
NEXT_PUBLIC_SITE_URL=https://thefishcollection.com
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
REVALIDATE_SECRET=...
DATABASE_URL=...

# Optional — analytics
NEXT_PUBLIC_GA4_ID=G-...
NEXT_PUBLIC_GTM_ID=GTM-...
```

---

## 17. File & Component Naming Conventions

```
app/[lang]/exotic-fish/[category]/[slug]/page.tsx   ← route files always page.tsx
app/[lang]/exotic-fish/[category]/[slug]/loading.tsx ← skeleton for ISR
components/seo/JsonLd.tsx                            ← schema injection component
components/product/ProductCard.tsx                   ← PascalCase components
lib/seo/generateMetadata.ts                          ← camelCase utilities
lib/seo/jsonLd.ts
lib/seo/hreflang.ts
lib/seo/sitemap.ts
lib/stripe/checkout.ts
types/product.ts                                     ← shared TypeScript types
```

---

## 18. Pre-Deploy Checklist

Run before every production deployment:

**Technical SEO**
- [ ] All new pages have unique `<title>` and `<meta description>`
- [ ] No `<title>` tags duplicated across pages
- [ ] All new pages have canonical tag pointing to correct URL
- [ ] hreflang tags correct on all new pages (verified by at least 2 locales)
- [ ] No new `noindex` on revenue-generating pages (accidentally left from dev)
- [ ] Sitemap updated and includes all new pages
- [ ] robots.txt unchanged (unless intentional)
- [ ] All images have `alt` text and explicit dimensions

**Schema**
- [ ] Run all new product pages through Google Rich Results Test
- [ ] No schema validation errors
- [ ] `shippingDetails` present on all Product schemas

**Performance**
- [ ] `next build` completes without warnings
- [ ] No new pages exceed 90KB JS budget
- [ ] LCP image has `priority` prop on all new pages
- [ ] No new `<img>` tags — only `next/image`

**Stripe**
- [ ] Checkout tested in Stripe test mode
- [ ] No Stripe.js loaded on indexable pages
- [ ] Webhook signature verification active

---

## 19. GSC & Analytics Setup

**Google Search Console**
- Primary property: `https://thefishcollection.com` (domain property, not URL-prefix)
- Submit: `/sitemap.xml` (index), then individual locale sitemaps
- Watch: Core Web Vitals report, Coverage report, Rich Results report
- Alert threshold: >5% drop in impressions over 7-day rolling window

**Google Analytics 4**
- Do NOT track: cart page, checkout page, order-confirmation page (privacy)
- DO track: product views, add-to-cart events, purchase events (via Stripe webhook)
- Custom dimension: `fish_category`, `fish_species`, `locale`

---

## 20. Quick Reference — Key Numbers

| Fact                        | Value                  |
|-----------------------------|------------------------|
| Total keywords in dataset   | 1,191                  |
| Page clusters               | 112                    |
| Non-clustered keywords      | 162 (expansion pool)   |
| Target pages (EN, Phase 1)  | 500+                   |
| Total pages (5 languages)   | 2,500–3,000            |
| Avg. keyword difficulty     | 12 / 100 (median: 5)   |
| Keywords at KD ≤ 20         | 77% of dataset         |
| Highest volume keyword      | tropical fish (18,100) |
| Highest CPC keyword         | wolf fish ($1.76)      |
| Flagship product AOV        | $10K–$300K (arowana)   |
| Supported languages         | EN, DE, NL, FR, ES     |
| Primary market              | United States          |
| Secondary markets           | DE, NL, FR, ES         |

---

*End of CLAUDE.md — The Fish Collection.com v1.0*
