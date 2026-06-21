# Graph Report - .  (2026-06-21)

## Corpus Check
- Large corpus: 310 files · ~5,781,370 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 522 nodes · 1160 edges · 32 communities (22 shown, 10 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 80 edges (avg confidence: 0.8)
- Token cost: 158,000 input · 2,176 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Routes & SEO Metadata|Page Routes & SEO Metadata]]
- [[_COMMUNITY_Blog & Author Pages|Blog & Author Pages]]
- [[_COMMUNITY_Cart & Checkout Flow|Cart & Checkout Flow]]
- [[_COMMUNITY_Product Pages & Pricing|Product Pages & Pricing]]
- [[_COMMUNITY_Article & E-E-A-T Components|Article & E-E-A-T Components]]
- [[_COMMUNITY_NPM Dependencies|NPM Dependencies]]
- [[_COMMUNITY_Image Generation Pipeline|Image Generation Pipeline]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Category Pages & Taxonomy|Category Pages & Taxonomy]]
- [[_COMMUNITY_Product Image Script|Product Image Script]]
- [[_COMMUNITY_Brand Design System|Brand Design System]]
- [[_COMMUNITY_Species Database & Keywords|Species Database & Keywords]]
- [[_COMMUNITY_SEO Architecture Spec|SEO Architecture Spec]]
- [[_COMMUNITY_Brand Image Script (TS)|Brand Image Script (TS)]]
- [[_COMMUNITY_Brand Image Script (MJS)|Brand Image Script (MJS)]]
- [[_COMMUNITY_JSON-LD Structured Data|JSON-LD Structured Data]]
- [[_COMMUNITY_Colour Palettes & Styling|Colour Palettes & Styling]]
- [[_COMMUNITY_Stripe Checkout API|Stripe Checkout API]]
- [[_COMMUNITY_Locale Middleware|Locale Middleware]]
- [[_COMMUNITY_Product Preview Pages|Product Preview Pages]]
- [[_COMMUNITY_Slugify Utility|Slugify Utility]]
- [[_COMMUNITY_Placeholder Image Component|Placeholder Image Component]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_SEO Meta i18n|SEO Meta i18n]]
- [[_COMMUNITY_Core Web Vitals Budget|Core Web Vitals Budget]]
- [[_COMMUNITY_Robots.txt Rules|Robots.txt Rules]]
- [[_COMMUNITY_Sitemap Config|Sitemap Config]]

## God Nodes (most connected - your core abstractions)
1. `getDictionary()` - 73 edges
2. `buildMetadata()` - 51 edges
3. `Lang` - 28 edges
4. `Breadcrumb()` - 22 edges
5. `buildFAQ()` - 17 edges
6. `compilerOptions` - 16 edges
7. `JsonLd()` - 15 edges
8. `useCart()` - 12 edges
9. `getAuthorBySlug()` - 12 edges
10. `CareGuideOrCategoryPage()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `TheFinnery SEO Infrastructure Blueprint` --semantically_similar_to--> `TheFinnery SEO/Architecture Spec (CLAUDE.md)`  [INFERRED] [semantically similar]
  THEFINNERY_SEO.md → CLAUDE (2).md
- `generateMetadata()` --calls--> `buildMetadata()`  [INFERRED]
  app/[lang]/buy/[slug]/page.tsx → lib/seo/generateMetadata.ts
- `Gilt/Midnight Luxury Colour System (SEO.md)` --semantically_similar_to--> `Bioluminescent Waters Colour Palette`  [INFERRED] [semantically similar]
  THEFINNERY_SEO.md → BRAND.md
- `Product Image Preview (scripts/preview-products.html)` --semantically_similar_to--> `Product Image Preview (public/preview-products.html)`  [INFERRED] [semantically similar]
  scripts/preview-products.html → public/preview-products.html
- `generateMetadata()` --calls--> `getDictionary()`  [INFERRED]
  app/[lang]/authors/[slug]/page.tsx → lib/i18n/getDictionary.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **JSON-LD Schema Builder Functions** — claude_2_claude_buildproductschema, claude_2_claude_buildbreadcrumb, claude_2_claude_buildfaq, claude_2_claude_buildarticle, claude_2_claude_organization_schema [EXTRACTED 1.00]
- **Brand Design System Pillars** — brand_brand_color_palette, brand_brand_typography, brand_brand_product_card, brand_brand_accessibility, brand_brand_voice_tone [INFERRED 0.85]
- **Flagship Luxury Species Set** — thefinnery_species_platinum_arowana, thefinnery_species_gem_tang, thefinnery_species_peppermint_angelfish, thefinnery_species_albino_alligator_gar [INFERRED 0.75]

## Communities (32 total, 10 thin omitted)

### Community 0 - "Page Routes & SEO Metadata"
Cohesion: 0.08
Nodes (55): AboutPage(), generateMetadata(), BlogIndexPage(), generateMetadata(), BulkOrdersPage(), bulkSchema, generateMetadata(), CareGuidesIndexPage() (+47 more)

### Community 1 - "Blog & Author Pages"
Cohesion: 0.08
Nodes (41): generateMetadata(), generateMetadata(), generateMetadata(), GET(), generateMetadata(), ArticleLayout(), getAuthorBySlug(), blogPosts (+33 more)

### Community 2 - "Cart & Checkout Flow"
Cohesion: 0.05
Nodes (46): CartContext, CartContextType, CartItem, CartProvider(), useCart(), CartDrawer(), CartDrawerProps, CartPage() (+38 more)

### Community 3 - "Product Pages & Pricing"
Cohesion: 0.06
Nodes (39): generateMetadata(), generateMetadata(), getProductBySlug(), products, FAQSection(), FAQSectionProps, CURRENCY_MAP, EXCHANGE_RATES (+31 more)

### Community 4 - "Article & E-E-A-T Components"
Cohesion: 0.07
Nodes (31): ArticleLayoutProps, BreadcrumbParent, RelatedArticle, ShopSection, authors, ArticleSummary(), ArticleSummaryProps, AuthorBox() (+23 more)

### Community 5 - "NPM Dependencies"
Cohesion: 0.07
Nodes (28): dependencies, dotenv, @google/genai, next, react, react-dom, sharp, stripe (+20 more)

### Community 6 - "Image Generation Pipeline"
Cohesion: 0.10
Nodes (24): args, ASPECT_RATIOS, blogPostScenes, buildBlogPostPrompt(), buildCareGuidePrompt(), buildProductPrompt(), buildQueue(), buildSpeciesGuidePrompt() (+16 more)

### Community 7 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 8 - "Category Pages & Taxonomy"
Cohesion: 0.21
Nodes (13): CategoryPage(), generateMetadata(), generateStaticParams(), getAllCategorySlugs(), getCategoryBySlug(), getProductsByCategory(), categoryTitle(), buildCategoryFAQ() (+5 more)

### Community 9 - "Product Image Script"
Cohesion: 0.15
Nodes (13): allProducts, buildPrompt(), __dirname, failures, generateImage(), processProduct(), PRODUCTS_DIR, results (+5 more)

### Community 10 - "Brand Design System"
Cohesion: 0.18
Nodes (14): Accessibility — WCAG AA/AAA Contrast Rules, TheFinnery Design System (BRAND.md), Brand Identity — Expert Friend Concept, Product Card Component, Scientific Name Rule (Cormorant Garamond Italic, drift), Site Header Component, Species Specs Grid Component, Typography — Outfit / Lora / DM Mono / Cormorant Garamond (+6 more)

### Community 11 - "Species Database & Keywords"
Cohesion: 0.19
Nodes (13): Priority Keyword Clusters (12), Gemini Imagen API Setup (imagen-3.0-generate-002), Brand Image Generation Plan (Gemini Imagen), Complete Species Database, Albino Alligator Gar (Atractosteus spatula), Cobalt Blue Discus (Symphysodon aequifasciatus), Fahaka Pufferfish (Tetraodon lineatus), Flowerhorn Cichlid (+5 more)

### Community 12 - "SEO Architecture Spec"
Cohesion: 0.17
Nodes (12): buildAlternates() Hreflang Builder, buildMetadata() generateMetadata Factory, Canonical URL Rules, Canonical Category Slug List, Internal Linking Matrix, Supported Locales (LOCALES i18n), Meta Description Patterns, Rendering Strategy (ISR/SSG/CSR) (+4 more)

### Community 13 - "Brand Image Script (TS)"
Cohesion: 0.24
Nodes (8): ai, BASE_DIR, generateImage(), images, ImageSpec, main(), Result, sleep()

### Community 14 - "Brand Image Script (MJS)"
Cohesion: 0.25
Nodes (7): batches, BRAND_DIR, __dirname, generateImage(), processImage(), results, ROOT

### Community 15 - "JSON-LD Structured Data"
Cohesion: 0.25
Nodes (8): buildArticle() Article JSON-LD, buildBreadcrumb() BreadcrumbList JSON-LD, buildFAQ() FAQPage JSON-LD, buildProductSchema() Product JSON-LD, JSON-LD Structured Data Module, organizationSchema (OnlineStore JSON-LD), Stripe Integration (SEO-Safe Rules), TheFinnery (Brand / OnlineStore)

### Community 16 - "Colour Palettes & Styling"
Cohesion: 0.33
Nodes (6): Bioluminescent Waters Colour Palette, Ember CTA Colour Rule (#E8622A), Tailwind Config Reference, Master Image Style — Painterly Field Guide, Gilt/Midnight Luxury Colour System (SEO.md), TheFinnery SEO Infrastructure Blueprint

### Community 17 - "Stripe Checkout API"
Cohesion: 0.60
Nodes (3): LineItem, POST(), getStripeServer()

### Community 19 - "Product Preview Pages"
Cohesion: 1.00
Nodes (3): Product Image Preview (public/preview-products.html), Products Dataset (91 fish entries), Product Image Preview (scripts/preview-products.html)

## Knowledge Gaps
- **171 isolated node(s):** `extends`, `bulkSchema`, `MARINE_CATEGORIES`, `MARINE_SLUGS`, `CollectionFAQ` (+166 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getDictionary()` connect `Page Routes & SEO Metadata` to `Category Pages & Taxonomy`, `Blog & Author Pages`, `Cart & Checkout Flow`, `Product Pages & Pricing`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Why does `buildMetadata()` connect `Page Routes & SEO Metadata` to `Category Pages & Taxonomy`, `Blog & Author Pages`, `Product Pages & Pricing`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `JsonLd()` connect `Page Routes & SEO Metadata` to `Blog & Author Pages`, `Cart & Checkout Flow`, `Product Pages & Pricing`, `Article & E-E-A-T Components`, `Category Pages & Taxonomy`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `getDictionary()` (e.g. with `generateMetadata()` and `generateMetadata()`) actually correct?**
  _`getDictionary()` has 11 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `buildMetadata()` (e.g. with `generateMetadata()` and `generateMetadata()`) actually correct?**
  _`buildMetadata()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `buildFAQ()` (e.g. with `BlogPostOrTagHubPage()` and `BuyCollectionPage()`) actually correct?**
  _`buildFAQ()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `extends`, `bulkSchema`, `MARINE_CATEGORIES` to the rest of the system?**
  _176 weakly-connected nodes found - possible documentation gaps or missing edges._