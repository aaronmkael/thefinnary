# THEFISHCOLLECTION_SEO.md — Maximum SEO Infrastructure
# The complete content, species, keyword, and page blueprint.
# Version: 1.0 | March 2026
# Drop this in your project root. Claude Code reads it every session.

---

## HOW TO USE THIS FILE

This file contains three things:
1. Every species The Fish Collection should list — with all SEO data pre-filled
2. Every page that needs to exist — with exact URLs, titles, descriptions
3. Every keyword cluster — mapped to the correct page

When asked to create any page, use the exact data from this file.
Never invent titles, descriptions, or scientific names — use what is here.

---

## PART A — BRAND & DESIGN RULES

### Identity
- Brand: The Fish Collection | Domain: thefishcollection.com
- Tagline: The House of Rare & Luxury Aquatic Life
- Stack: Next.js 14 App Router · TypeScript · Tailwind CSS · Stripe · next-intl
- Tone: Expert auction house. Collector buyers. Think Christie's, not a pet shop.

### Colours
- midnight #0D1B2A — header, footer, primary CTA bg
- gilt #C8A45A — THE one accent (CTAs, prices, hover highlights)
- pearl #FAFAF5 — page background (never pure white)
- ink #0D1B2A — primary text
- charcoal #3A3A35 — body text
- smoke #6B6B65 — secondary text, scientific names
- parchment #E2DBCE — all borders
- linen #EDE8DD — hover fills
- cream #F3EFE4 — secondary surfaces
- depths #152234 — header hover
- slate #2A3F55 — dark dividers
- gilt-pale #F5EDD8 — luxury badge bg
- life #2D6A4F / bg #D8F3DC — in stock
- scarce #B5451B / bg #FDEEE9 — low stock
- void #595954 / bg #EBEBEB — out of stock
- tide #2A7A8C / bg #E0F4F7 — info / species accent

### Fonts
- --font-display: Cormorant Garamond (headings, fish names)
- --font-smallcaps: Cormorant SC (labels, nav, wordmark)
- --font-body: Fraunces (body copy, descriptions)
- --font-mono: DM Mono (prices, parameters, data)
- Scientific names: always font-display italic font-light text-smoke, never bold

### Component Rules
- Cards: rounded-sm (4px), border border-parchment
- Buttons: Primary = midnight+gilt | Secondary = transparent+parchment | Ghost = underline+gilt
- Product card image: aspect-ratio 4:5 always
- Prices: font-mono font-medium text-ink always
- Header: bg-midnight sticky h-18, 3-col grid (nav | wordmark | icons)
- Never: rounded-lg on cards, gradients, shadows, blue/green CTAs, raw <img>

---

## PART B — SEO RULES (ENFORCE ON EVERY PAGE)

### Canonical & Noindex
- Every page: self-referencing canonical, trailing slash, https
- NOINDEX (robots: index:false): /cart/ /checkout/ /order-confirmation/ /account/ + all ?query URLs

### Title Patterns
- Homepage: The House of Rare & Luxury Fish | The Fish Collection
- Category: {Name} Fish for Sale | Buy Live {Name} | The Fish Collection
- Product: Buy {Common} ({Scientific}) | The Fish Collection — Live Arrival Guaranteed
- Species guide: {Common} ({Scientific}): Complete Care Guide & Tank Setup | The Fish Collection
- Care guide: {Topic} for {Fish} | Water, Tank & Diet | The Fish Collection
- Blog: {Headline max 52 chars} | The Fish Collection
- Collection: {Phrase} | The Fish Collection
- Max 60 chars total. Primary keyword in first 40 chars.

### Meta Description Patterns
- Product: "{Fish} for sale — {rarity}. Live arrival guaranteed, overnight shipping. From ${price}. Expert-bred at The Fish Collection."
- Species: "Complete {Fish} care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection's specialist aquarists."
- Category: "Buy {count}+ {category} fish online. Expert-bred, live arrival guaranteed. Rare & luxury {category} species from ${min}. Free overnight shipping."
- 140–155 characters exactly.

### H1 Rules
- ONE per page. Must contain primary keyword.
- Product: "Buy {Fish Name}" or "{Fish Name} for Sale"
- Species: "{Common Name} ({Scientific Name}): Complete Care Guide"
- Never duplicate the title tag verbatim.

### URL Slugs
- Lowercase, hyphens only, max 6 words, no stop words, no dates
- Keyword-first: platinum-arowana-for-sale not buy-platinum-arowana

### Hreflang on every indexable page
- en-US → /en{path} | de-DE → /de{path} | nl-NL → /nl{path}
- fr-FR → /fr{path} | es-ES → /es{path} | x-default → /en{path}

### Rendering
- Homepage: ISR 3600s | Category: ISR 600s | Product: ISR 300s
- Species/Care/Blog: SSG (revalidate: false) | Collection: ISR 600s | Cart: CSR noindex

### JSON-LD Required per page type
- Product pages: Product + BreadcrumbList + FAQPage + Organization
- Species guides: Article + BreadcrumbList + FAQPage
- Care guides: Article + BreadcrumbList + FAQPage
- Blog: Article + BreadcrumbList
- Category/Collection: ItemList + BreadcrumbList + FAQPage
- Homepage: Organization (OnlineStore)
- Always include shippingDetails in Product schema (triggers Google free-shipping badge)

### Images
- next/image always, explicit width+height, priority on LCP only
- Product alt: "{Common} ({Scientific}) — {size/variant}"
- Category alt: "{Category} fish for sale at The Fish Collection"

### Internal Linking Matrix
- Homepage → all 20 category pages + top 8 species guides + blog index
- Category → all products in category + 3–5 related species guides
- Product → its species guide + care guide + 3–5 related products
- Species guide → product buy CTA + care guide + 2–3 related species
- Blog → 2–4 product/species naturally within content
- Anchor text: never "click here" / "read more" / "here"

---

## PART C — COMPLETE SPECIES DATABASE

Each entry contains everything needed to build the product page,
species guide, care guide, and all JSON-LD schema.

---

### AROWANA CATEGORY (/exotic-fish/arowana/)

#### A1 — Platinum Arowana
- slug: platinum-arowana
- scientific: Scleropages formosus
- tier: flagship | aov: $10,000–$300,000
- title: Buy Platinum Arowana (Scleropages formosus) | The Fish Collection — Live Arrival Guaranteed
- h1: Platinum Arowana for Sale
- description: Platinum Arowana for sale — the rarest freshwater fish in existence. CITES-certified, expert-bred. Live arrival guaranteed, overnight shipping. From $10,000. The Fish Collection.
- species_title: Platinum Arowana (Scleropages formosus): Complete Care Guide & Tank Setup | The Fish Collection
- tank_min_gallons: 300 | temp_c: 26–30 | ph: 6.5–7.5 | max_size_cm: 90 | care: specialist | origin: Southeast Asia | diet: Carnivore — live fish, insects, small mammals | temperament: Predatory, solitary | lifespan: 20+ years
- keywords: platinum arowana (2400/mo KD28), platinum arowana for sale (70/mo), short body albino silver arowana (880/mo KD5), arowana fish (8100/mo KD40)
- faqs:
  Q: How much does a platinum arowana cost? A: Platinum arowana prices range from $10,000 for juveniles to over $300,000 for champion-grade adults. Price is determined by colour purity, scale alignment, fin quality, and body proportion. The Fish Collection's specimens are CITES-certified with full provenance documentation.
  Q: What tank size does a platinum arowana need? A: A minimum 300-gallon (1,135L) aquarium is required for an adult platinum arowana. The tank should be long rather than tall — at least 8 feet in length. A tightly fitted lid is essential as arowana are powerful jumpers.
  Q: Are platinum arowana legal to own in the US? A: Yes, with the correct CITES documentation. Asian arowana (Scleropages formosus) are listed on CITES Appendix I. The Fish Collection provides full import permits and CITES certificates with every fish. Never purchase an arowana without verifying its documentation.
  Q: How long do arowana live? A: Platinum arowana in optimal conditions live 20+ years. They are a long-term commitment equivalent to owning a large dog. Water quality, diet quality, and tank size are the primary determinants of lifespan.
  Q: What do platinum arowana eat? A: Platinum arowana are carnivores. They eat live and frozen fish, large insects, prawns, frogs, and in the wild — small birds and mammals. Feed 2–3 times per week in adults. Over-feeding causes fatty liver disease.
- care_guide_slugs: [platinum-arowana-tank-setup, platinum-arowana-water-parameters, platinum-arowana-feeding-guide]
- related_slugs: [short-body-albino-silver-arowana, golden-arowana, red-arowana]
- internal_links:
  → species: /species/platinum-arowana/
  → category: /exotic-fish/arowana/
  → care: /care-guides/platinum-arowana-tank-setup/

#### A2 — Short Body Albino Silver Arowana
- slug: short-body-albino-silver-arowana
- scientific: Osteoglossum bicirrhosum
- tier: premium | aov: $800–$3,000
- title: Buy Short Body Albino Silver Arowana (Osteoglossum bicirrhosum) | The Fish Collection — Live Arrival Guaranteed
- h1: Short Body Albino Silver Arowana for Sale
- description: Short body albino silver arowana for sale — rare leucistic mutation with compressed body form. Expert-bred, live arrival guaranteed. From $800. The Fish Collection.
- tank_min_gallons: 200 | temp_c: 24–30 | ph: 6.0–7.0 | max_size_cm: 60 | care: expert | origin: South America | diet: Carnivore | temperament: Aggressive, solitary | lifespan: 15+ years
- keywords: short body albino silver arowana (880/mo KD5), albino silver arowana (390/mo KD3)
- faqs:
  Q: What makes a short body arowana different? A: Short body arowana are a selectively bred mutation where the vertebral column is compressed, producing a stockier fish with the same finnage as a standard arowana. The albino variant adds leucistic colouration — golden-white scales with red eyes. This combination is extremely rare and highly prized by collectors.
  Q: How big do short body arowana get? A: Short body arowana reach 50–65cm (20–25 inches) — roughly two-thirds the length of a standard silver arowana. Despite the shorter body, they require the same tank footprint due to their turning radius.
  Q: What are the water requirements? A: Temperature 24–30°C, pH 6.0–7.0, very soft to moderately soft water. They are more sensitive than standard silver arowana — maintain pristine water quality with weekly 25–30% water changes.

#### A3 — Golden Arowana
- slug: golden-arowana
- scientific: Scleropages formosus
- tier: flagship | aov: $3,000–$50,000
- title: Buy Golden Arowana (Scleropages formosus) | The Fish Collection — Live Arrival Guaranteed
- h1: Golden Arowana for Sale
- description: Golden arowana for sale — 24-karat gold base colour with metallic scale edging. CITES-certified, expert-bred. Live arrival guaranteed. From $3,000. The Fish Collection.
- tank_min_gallons: 300 | temp_c: 26–30 | ph: 6.5–7.5 | max_size_cm: 90 | care: specialist | origin: Southeast Asia | diet: Carnivore | temperament: Predatory, solitary
- keywords: golden arowana (1000/mo KD24), golden arowana for sale (260/mo KD12)

#### A4 — Red Arowana (Blood Red)
- slug: red-arowana-blood-red
- scientific: Scleropages formosus
- tier: flagship | aov: $5,000–$80,000
- title: Buy Red Arowana — Blood Red (Scleropages formosus) | The Fish Collection — Live Arrival Guaranteed
- h1: Red Arowana (Blood Red) for Sale
- tank_min_gallons: 300 | temp_c: 26–30 | ph: 6.5–7.5 | max_size_cm: 90 | care: specialist | origin: Borneo (Kalimantan) | diet: Carnivore
- keywords: red arowana (2400/mo KD35), red arowana for sale (590/mo KD18)

#### A5 — Super Red Arowana
- slug: super-red-arowana
- scientific: Scleropages formosus
- tier: flagship | aov: $8,000–$150,000
- title: Buy Super Red Arowana (Scleropages formosus) | The Fish Collection — Live Arrival Guaranteed
- h1: Super Red Arowana for Sale
- tank_min_gallons: 300 | temp_c: 26–30 | ph: 6.5–7.5 | max_size_cm: 90 | care: specialist | origin: Kapuas River, Borneo
- keywords: super red arowana (1300/mo KD30), super red arowana for sale (210/mo KD14)

---

### DISCUS CATEGORY (/exotic-fish/discus/) — URGENT: 199 keywords, 28K vol/mo

#### D1 — Cobalt Blue Discus
- slug: cobalt-blue-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $80–$300
- title: Buy Cobalt Blue Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Cobalt Blue Discus for Sale
- description: Cobalt blue discus for sale — vivid metallic blue strain, expert-bred in soft acidic water. Live arrival guaranteed, overnight shipping. From $80. The Fish Collection.
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced | origin: Amazon River Basin | diet: Carnivore — high-protein pellets, bloodworm, beefheart | temperament: Peaceful schooling | lifespan: 10–15 years
- keywords: cobalt blue discus (140/mo KD2), discus fish for sale (3600/mo KD51), discus fish (18100/mo KD41), buy discus fish online (390/mo KD42)
- faqs:
  Q: What temperature do discus need? A: Discus require consistently high temperatures — 28–31°C (82–88°F). This is higher than most tropical fish. Use a reliable heater with a digital thermometer and never let temperature fluctuate more than 1–2°C. Many discus keepers dedicate a species-only tank for this reason.
  Q: How big do discus fish get? A: Discus reach 15–20cm (6–8 inches) in diameter when properly raised. Size is strongly influenced by feeding frequency and water quality during the first year. Wild-caught specimens often exceed tank-bred fish in ultimate size.
  Q: What tank size do discus need? A: A minimum 75-gallon (280L) tank for a group of 6. Discus are schooling fish and should never be kept alone — a group of 6–8 is ideal. Taller tanks (24 inches minimum depth) suit their disc-shaped body better than long shallow tanks.
  Q: How hard is it to keep discus? A: Discus are rated Advanced care level. They require very stable, warm, soft, acidic water with pristine quality. Weekly 30–50% water changes are essential. They reward dedicated keepers with extraordinary colour and interactive behaviour.
  Q: Can discus live with other fish? A: Discus can be kept with small, peaceful fish that tolerate high temperatures — cardinal tetras, rummy nose tetras, and corydoras are classic companions. Avoid aggressive species, fish that carry disease (cichlids, goldfish), or fish requiring cooler water.

#### D2 — Wild Discus
- slug: wild-discus
- scientific: Symphysodon haraldi
- tier: premium | aov: $120–$600
- title: Buy Wild Discus (Symphysodon haraldi) | The Fish Collection — Live Arrival Guaranteed
- h1: Wild Discus for Sale
- description: Wild-caught discus for sale — sustainably collected from the Rio Purus, Peru. Stunning natural colouration impossible in tank-bred strains. From $120. The Fish Collection.
- tank_min_gallons: 75 | temp_c: 28–32 | ph: 5.5–6.5 | max_size_cm: 22 | care: specialist | origin: Rio Purus, Peru | diet: Carnivore | temperament: Peaceful schooling
- keywords: wild discus fish (320/mo KD1), wild caught discus (170/mo KD0)

#### D3 — Pigeon Blood Discus
- slug: pigeon-blood-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $100–$400
- title: Buy Pigeon Blood Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Pigeon Blood Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced | origin: Tank-bred strain | diet: Carnivore
- keywords: pigeon blood discus fish (170/mo KD3), pigeon blood discus (390/mo KD8)

#### D4 — Red Turquoise Discus
- slug: red-turquoise-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $90–$350
- title: Buy Red Turquoise Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Red Turquoise Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced
- keywords: red turquoise discus fish (170/mo KD0), red discus fish (260/mo KD4)

#### D5 — Golden Discus
- slug: golden-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $100–$500
- title: Buy Golden Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Golden Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced

#### D6 — Checkerboard Discus
- slug: checkerboard-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $120–$400
- title: Buy Checkerboard Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Checkerboard Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced
- keywords: checkerboard cichlids discus (190/mo KD4)

#### D7 — Blue Diamond Discus
- slug: blue-diamond-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $120–$500
- title: Buy Blue Diamond Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Blue Diamond Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced

#### D8 — Leopard Skin Discus
- slug: leopard-skin-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $100–$400
- title: Buy Leopard Skin Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Leopard Skin Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced

#### D9 — White Butterfly Discus
- slug: white-butterfly-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $150–$600
- title: Buy White Butterfly Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: White Butterfly Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced

#### D10 — Royal Blue Discus
- slug: royal-blue-discus
- scientific: Symphysodon aequifasciatus
- tier: premium | aov: $100–$450
- title: Buy Royal Blue Discus (Symphysodon aequifasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Royal Blue Discus for Sale
- tank_min_gallons: 75 | temp_c: 28–31 | ph: 6.0–7.0 | max_size_cm: 20 | care: advanced

---

### RARE MARINE CATEGORY (/exotic-fish/tang/ and /exotic-fish/grouper/)

#### M1 — G.E.M. Tang
- slug: gem-tang
- scientific: Zebrasoma gemmatum
- tier: flagship | aov: $800–$3,000
- title: Buy G.E.M. Tang (Zebrasoma gemmatum) | The Fish Collection — Live Arrival Guaranteed
- h1: G.E.M. Tang for Sale
- description: G.E.M. tang for sale — one of the rarest marine tangs in the hobby. Spotted black body with white polka dots. Live arrival guaranteed. From $800. The Fish Collection.
- tank_min_gallons: 180 | temp_c: 23–26 | ph: 8.1–8.4 | max_size_cm: 22 | care: expert | origin: Indian Ocean, Mozambique Channel | diet: Herbivore — algae, nori, mysis | temperament: Semi-aggressive | lifespan: 8–12 years | salinity: 1.020–1.025
- keywords: gem tang (1900/mo KD13), g.e.m. tang (590/mo KD5), gem tangs for sale (20/mo CPC$1.04)
- faqs:
  Q: How rare is the G.E.M. tang? A: The Gemmate Tang (Zebrasoma gemmatum) is considered one of the top 5 rarest marine aquarium fish. It inhabits deep waters of the Mozambique Channel and western Indian Ocean, making collection extremely difficult. The Fish Collection sources exclusively from sustainable certified collectors.
  Q: What tank size does a G.E.M. tang need? A: A minimum 180-gallon (680L) tank with strong flow and a deep sand bed. G.E.M. tangs are active swimmers and require considerable swimming space. A 6-foot long tank is the practical minimum.
  Q: Is the G.E.M. tang aggressive? A: Like all Zebrasoma tangs, the G.E.M. can be territorial toward other tangs — especially similar shapes. Introduce it last into an established reef, and provide sufficient territory. It is peaceful toward non-tang species.
  Q: What do G.E.M. tangs eat? A: Primarily herbivorous — macroalgae, nori sheets, and spirulina-based pellets. Supplement with mysis shrimp for protein. Multiple feedings daily of small portions is ideal.

#### M2 — Peppermint Angelfish
- slug: peppermint-angelfish
- scientific: Centropyge boylei
- tier: flagship | aov: $15,000–$30,000
- title: Buy Peppermint Angelfish (Centropyge boylei) | The Fish Collection — Live Arrival Guaranteed
- h1: Peppermint Angelfish for Sale
- description: Peppermint angelfish for sale — widely considered the most beautiful marine fish in existence. Red and white striped Centropyge from extreme depths. From $15,000. The Fish Collection.
- tank_min_gallons: 100 | temp_c: 22–25 | ph: 8.1–8.4 | max_size_cm: 7 | care: specialist | origin: Cook Islands, deep Pacific (60–120m) | diet: Omnivore — sponges, algae, mysis | temperament: Semi-aggressive | salinity: 1.024–1.026
- keywords: peppermint angelfish (1000/mo KD21), peppermint angelfish for sale (140/mo CPC$1.08)
- faqs:
  Q: Why is the peppermint angelfish so expensive? A: The peppermint angelfish (Centropyge boylei) lives at depths of 60–120 metres in the Cook Islands and Rarotonga. Collection requires technical rebreather diving, and decompression of the fish takes days. Availability is measured in single digits per year worldwide.
  Q: How do you keep a peppermint angelfish? A: A dedicated 100+ gallon mature reef with stable parameters. They are sensitive to shipping stress and require an extended acclimation period. Temperature should be kept at the lower end — 22–25°C. The Fish Collection provides a full acclimation protocol with every specimen.

#### M3 — Neptune Grouper
- slug: neptune-grouper
- scientific: Cephalopholis igarashiensis
- tier: flagship | aov: $3,000–$6,000
- title: Buy Neptune Grouper (Cephalopholis igarashiensis) | The Fish Collection — Live Arrival Guaranteed
- h1: Neptune Grouper for Sale
- description: Neptune grouper for sale — electric orange and white deep-water grouper from 100m+ depths. Among the rarest marine fish available. Live arrival guaranteed. The Fish Collection.
- tank_min_gallons: 120 | temp_c: 22–25 | ph: 8.1–8.4 | max_size_cm: 25 | care: specialist | origin: Indo-Pacific, deep water 80–250m | diet: Carnivore — feeder fish, large mysis | salinity: 1.024–1.026
- keywords: neptune grouper (480/mo KD11), neptune grouper for sale (170/mo KD8)

#### M4 — Bladefin Basslet
- slug: bladefin-basslet
- scientific: Jeboehlkia gladifer
- tier: flagship | aov: $5,000–$10,000
- title: Buy Bladefin Basslet (Jeboehlkia gladifer) | The Fish Collection — Live Arrival Guaranteed
- h1: Bladefin Basslet for Sale
- description: Bladefin basslet for sale — tiny deep-sea basslet with elongated dorsal fin from 200m+ depths in the Atlantic. Extremely rare. Live arrival guaranteed. The Fish Collection.
- tank_min_gallons: 30 | temp_c: 22–25 | ph: 8.1–8.4 | max_size_cm: 5 | care: specialist | origin: Caribbean, 150–300m | diet: Carnivore — small mysis, copepods | salinity: 1.024–1.026
- keywords: bladefin basslet (170/mo KD10), bladefin basslet for sale (40/mo KD5)

#### M5 — Golden Basslet
- slug: golden-basslet
- scientific: Liopropoma aureum
- tier: flagship | aov: $8,000–$15,000
- title: Buy Golden Basslet (Liopropoma aureum) | The Fish Collection — Live Arrival Guaranteed
- h1: Golden Basslet for Sale
- description: Golden basslet for sale — pure gold Liopropoma from deep Caribbean waters. One of the most prized reef fish in existence, collected from 150m+. The Fish Collection.
- tank_min_gallons: 40 | temp_c: 22–25 | ph: 8.1–8.4 | max_size_cm: 8 | care: specialist | origin: Caribbean, 150–250m | diet: Carnivore | salinity: 1.024–1.026
- keywords: golden basslet (90/mo KD0), golden basslet for sale (30/mo KD0)

---

### CATFISH CATEGORY (/exotic-fish/catfish/)

#### C1 — Shovelnose Tiger Catfish
- slug: shovelnose-tiger-catfish
- scientific: Pseudoplatystoma tigrinum
- tier: premium | aov: $100–$500
- title: Buy Shovelnose Tiger Catfish (Pseudoplatystoma tigrinum) | The Fish Collection — Live Arrival Guaranteed
- h1: Shovelnose Tiger Catfish for Sale
- tank_min_gallons: 300 | temp_c: 22–28 | ph: 6.0–7.5 | max_size_cm: 130 | care: expert | origin: Amazon Basin | diet: Carnivore — live/frozen fish | temperament: Predatory
- keywords: shovelnose tiger (1300/mo KD11), shovelnose catfish (1300/mo KD11), shovelhead catfish (1000/mo KD39)

#### C2 — Irwini Catfish
- slug: irwini-catfish
- scientific: Paulicea lutkeni
- tier: premium | aov: $150–$600
- title: Buy Irwini Catfish (Paulicea lutkeni) | The Fish Collection — Live Arrival Guaranteed
- h1: Irwini Catfish for Sale
- tank_min_gallons: 300 | temp_c: 22–28 | ph: 6.5–7.5 | max_size_cm: 140 | care: expert | origin: Paraná River system | diet: Carnivore | temperament: Predatory
- keywords: irwini catfish (1000/mo KD9), irwini catfish for sale (480/mo KD3)

#### C3 — Red Tail Catfish
- slug: red-tail-catfish
- scientific: Phractocephalus hemioliopterus
- tier: premium | aov: $60–$400
- title: Buy Red Tail Catfish (Phractocephalus hemioliopterus) | The Fish Collection — Live Arrival Guaranteed
- h1: Red Tail Catfish for Sale
- tank_min_gallons: 500 | temp_c: 20–26 | ph: 6.0–7.5 | max_size_cm: 130 | care: expert | origin: Amazon & Orinoco | diet: Carnivore | temperament: Aggressive
- keywords: red tail catfish for sale (1600/mo KD15), red tail catfish (1900/mo KD20)

#### C4 — Marble Achara Catfish
- slug: marble-achara-catfish
- scientific: Leiarius marmoratus
- tier: premium | aov: $120–$500
- title: Buy Marble Achara Catfish (Leiarius marmoratus) | The Fish Collection — Live Arrival Guaranteed
- h1: Marble Achara Catfish for Sale
- tank_min_gallons: 300 | temp_c: 22–28 | ph: 6.5–7.5 | max_size_cm: 60 | care: advanced | origin: Amazon Basin | diet: Carnivore | temperament: Semi-aggressive
- keywords: marble achara catfish (170/mo KD3)

#### C5 — Bumblebee Catfish
- slug: bumblebee-catfish
- scientific: Pseudopimelodus bufonius
- tier: standard | aov: $25–$80
- title: Buy Bumblebee Catfish (Pseudopimelodus bufonius) | The Fish Collection — Live Arrival Guaranteed
- h1: Bumblebee Catfish for Sale
- tank_min_gallons: 50 | temp_c: 20–25 | ph: 6.5–7.5 | max_size_cm: 15 | care: intermediate | origin: South America | diet: Carnivore — worms, pellets | temperament: Peaceful
- keywords: bumblebee catfish size (260/mo KD8), bumblebee catfish (480/mo KD12)

#### C6 — Black Lancer Catfish
- slug: black-lancer-catfish
- scientific: Bagrichthys macracanthus
- tier: premium | aov: $80–$250
- title: Buy Black Lancer Catfish (Bagrichthys macracanthus) | The Fish Collection — Live Arrival Guaranteed
- h1: Black Lancer Catfish for Sale
- tank_min_gallons: 75 | temp_c: 22–28 | ph: 6.0–7.0 | max_size_cm: 40 | care: advanced | origin: Mekong Basin | diet: Carnivore | temperament: Predatory
- keywords: black lancer catfish (170/mo KD9)

#### C7 — Grass Cutter Catfish
- slug: grass-cutter-catfish
- scientific: Prochilodus lineatus
- tier: standard | aov: $40–$150
- title: Buy Grass Cutter Catfish (Prochilodus lineatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Grass Cutter Catfish for Sale
- tank_min_gallons: 100 | temp_c: 22–28 | ph: 6.0–7.5 | max_size_cm: 80 | care: intermediate | origin: Río de la Plata, South America | diet: Herbivore/Omnivore | temperament: Peaceful
- keywords: grass cutter catfish (50/mo KD3)

---

### CICHLID CATEGORY (/exotic-fish/cichlid/)

#### CI1 — Flowerhorn Cichlid
- slug: flowerhorn-cichlid
- scientific: Hybrid cichlid (Cichlasoma × Amphilophus)
- tier: premium | aov: $80–$800
- title: Buy Flowerhorn Cichlid | The Fish Collection — Live Arrival Guaranteed
- h1: Flowerhorn Cichlid for Sale
- description: Flowerhorn cichlid for sale — prized for the distinctive kok (nuchal hump) and vivid colouration. Expert-bred. Live arrival guaranteed, overnight shipping. From $80. The Fish Collection.
- tank_min_gallons: 75 | temp_c: 26–30 | ph: 7.0–8.0 | max_size_cm: 30 | care: intermediate | origin: Hybrid (SE Asia breeding) | diet: Omnivore — cichlid pellets, worms | temperament: Highly aggressive, single specimen
- keywords: flowerhorn cichlid (6600/mo KD25), flowerhorn cichlid for sale (480/mo KD18)
- faqs:
  Q: How big do flowerhorn cichlids get? A: Flowerhorn cichlids typically reach 25–35cm (10–14 inches). Males grow larger and develop a more pronounced nuchal hump (kok). Females are smaller and the kok is less developed.
  Q: Can flowerhorn cichlids live with other fish? A: Flowerhorns are extremely aggressive and territorial — they are best kept alone in a species-only tank. Any tankmates risk being attacked or killed. Provide a minimum 75-gallon tank even for a single specimen.
  Q: What makes a high-quality flowerhorn? A: Collectors prize: a large, round, perfectly formed kok; vivid red or orange body colouration with distinct black lateral markings; full, flowing fins; and a short, compact body. The Fish Collection's specimens are selected from dedicated show-grade breeding lines.

#### CI2 — Starry Night Cichlid
- slug: starry-night-cichlid
- scientific: Paratilapia polleni
- tier: premium | aov: $60–$250
- title: Buy Starry Night Cichlid (Paratilapia polleni) | The Fish Collection — Live Arrival Guaranteed
- h1: Starry Night Cichlid for Sale
- tank_min_gallons: 75 | temp_c: 22–27 | ph: 7.0–8.0 | max_size_cm: 30 | care: advanced | origin: Madagascar | diet: Carnivore | temperament: Aggressive
- keywords: starry night cichlid (1300/mo KD5), starry night cichlid for sale (170/mo KD4)

#### CI3 — Dovii Cichlid (Wolf Cichlid)
- slug: dovii-cichlid
- scientific: Parachromis dovii
- tier: premium | aov: $40–$200
- title: Buy Dovii Cichlid (Parachromis dovii) | The Fish Collection — Live Arrival Guaranteed
- h1: Dovii Cichlid for Sale
- tank_min_gallons: 150 | temp_c: 24–30 | ph: 7.0–8.0 | max_size_cm: 72 | care: advanced | origin: Central America | diet: Carnivore | temperament: Extremely aggressive
- keywords: dovii cichlid for sale (210/mo KD1)

#### CI4 — Blue Zaire Frontosa
- slug: blue-zaire-frontosa
- scientific: Cyphotilapia frontosa
- tier: premium | aov: $60–$300
- title: Buy Blue Zaire Frontosa (Cyphotilapia frontosa) | The Fish Collection — Live Arrival Guaranteed
- h1: Blue Zaire Frontosa for Sale
- tank_min_gallons: 150 | temp_c: 24–27 | ph: 7.8–9.0 | max_size_cm: 35 | care: advanced | origin: Lake Tanganyika | diet: Carnivore | temperament: Semi-aggressive
- keywords: blue zaire frontosa for sale (320/mo KD4)

#### CI5 — Macaw Cichlid
- slug: macaw-cichlid
- scientific: Crenicichla sp. (Peru)
- tier: premium | aov: $100–$400
- title: Buy Macaw Cichlid (Crenicichla sp.) | The Fish Collection — Live Arrival Guaranteed
- h1: Macaw Cichlid for Sale
- tank_min_gallons: 75 | temp_c: 24–28 | ph: 6.0–7.5 | max_size_cm: 25 | care: advanced | origin: Peru | diet: Carnivore | temperament: Aggressive
- keywords: macaw cichlid (170/mo KD6)

#### CI6 — Turquoise Severum
- slug: turquoise-severum-cichlid
- scientific: Heros efasciatus
- tier: standard | aov: $30–$120
- title: Buy Turquoise Severum Cichlid (Heros efasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Turquoise Severum Cichlid for Sale
- tank_min_gallons: 55 | temp_c: 23–29 | ph: 6.0–7.5 | max_size_cm: 25 | care: intermediate | origin: Amazon Basin | diet: Omnivore | temperament: Peaceful to semi-aggressive
- keywords: turquoise severum cichlid (590/mo KD11)

#### CI7 — Gold Severum
- slug: gold-severum-cichlid
- scientific: Heros efasciatus
- tier: standard | aov: $25–$100
- title: Buy Gold Severum Cichlid (Heros efasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Gold Severum Cichlid for Sale
- tank_min_gallons: 55 | temp_c: 23–29 | ph: 6.0–7.5 | max_size_cm: 25 | care: intermediate | origin: Amazon Basin | diet: Omnivore
- keywords: gold severum cichlid (170/mo KD2)

---

### PUFFERFISH CATEGORY (/exotic-fish/pufferfish/)

#### P1 — Fahaka Pufferfish
- slug: fahaka-pufferfish
- scientific: Tetraodon lineatus
- tier: premium | aov: $60–$200
- title: Buy Fahaka Pufferfish (Tetraodon lineatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Fahaka Pufferfish for Sale
- description: Fahaka pufferfish for sale — largest freshwater puffer, with bold golden-orange striping. Live arrival guaranteed, overnight shipping. From $60. Expert-bred. The Fish Collection.
- tank_min_gallons: 120 | temp_c: 24–28 | ph: 7.0–8.0 | max_size_cm: 45 | care: advanced | origin: Nile River system, Africa | diet: Carnivore — snails, shellfish, hard foods | temperament: Extremely aggressive, single specimen
- keywords: fahaka pufferfish (2400/mo KD23 CPC$1.40), fahaka puffer fish for sale (260/mo KD7), fahaka puffer (720/mo KD17)
- faqs:
  Q: Can fahaka pufferfish live with other fish? A: No. Fahaka puffers are extremely aggressive and will attack and kill any tankmate regardless of size. They must be kept as single specimens. Provide a minimum 120-gallon tank with plenty of enrichment.
  Q: What do fahaka pufferfish eat? A: Fahaka puffers need hard, crunchy foods to wear down their ever-growing beak — snails, mussels, crayfish, cockles, and unshelled shrimp. Feed 3–4 times per week. Avoid soft foods long-term as they cause beak overgrowth.
  Q: How big do fahaka puffers get? A: The fahaka is the largest freshwater puffer — adults reach 35–45cm (14–18 inches). Despite their size, they are inquisitive, interactive fish that often recognise their keepers.

#### P2 — MBU Pufferfish
- slug: mbu-pufferfish
- scientific: Tetraodon mbu
- tier: premium | aov: $100–$400
- title: Buy MBU Pufferfish (Tetraodon mbu) | The Fish Collection — Live Arrival Guaranteed
- h1: MBU Pufferfish for Sale
- tank_min_gallons: 500 | temp_c: 24–28 | ph: 7.0–8.0 | max_size_cm: 67 | care: expert | origin: Congo River Basin | diet: Carnivore — snails, shellfish | temperament: Aggressive, single specimen
- keywords: mbu pufferfish (1300/mo KD17)

#### P3 — Figure Eight Puffer
- slug: figure-eight-puffer-fish
- scientific: Tetraodon biocellatus
- tier: standard | aov: $15–$60
- title: Buy Figure Eight Puffer Fish (Tetraodon biocellatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Figure Eight Puffer Fish for Sale
- tank_min_gallons: 30 | temp_c: 22–26 | ph: 7.0–8.0 | max_size_cm: 8 | care: intermediate | origin: Southeast Asia | diet: Carnivore | temperament: Semi-aggressive | notes: Brackish water preferred
- keywords: figure eight puffer fish (720/mo KD27)

#### P4 — Cross River Puffer
- slug: cross-river-puffer
- scientific: Tetraodon pustulatus
- tier: premium | aov: $80–$300
- title: Buy Cross River Puffer (Tetraodon pustulatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Cross River Puffer for Sale
- tank_min_gallons: 75 | temp_c: 24–28 | ph: 6.5–7.5 | max_size_cm: 30 | care: advanced | origin: Cross River, Nigeria/Cameroon | diet: Carnivore
- keywords: cross river puffer for sale (70/mo KD3)

#### P5 — Avocado Puffer
- slug: avocado-puffer
- scientific: Auriglobus modestus
- tier: standard | aov: $30–$100
- title: Buy Avocado Puffer (Auriglobus modestus) | The Fish Collection — Live Arrival Guaranteed
- h1: Avocado Puffer for Sale
- tank_min_gallons: 40 | temp_c: 23–27 | ph: 6.5–7.5 | max_size_cm: 12 | care: intermediate | origin: Southeast Asia (Thailand, Borneo) | diet: Carnivore
- keywords: avacado puffer (50/mo KD7)

---

### KNIFE FISH CATEGORY (/exotic-fish/knife-fish/)

#### K1 — Clown Knife Fish
- slug: clown-knife-fish
- scientific: Chitala chitala
- tier: standard | aov: $20–$150
- title: Buy Clown Knife Fish (Chitala chitala) | The Fish Collection — Live Arrival Guaranteed
- h1: Clown Knife Fish for Sale
- tank_min_gallons: 200 | temp_c: 24–30 | ph: 6.0–7.5 | max_size_cm: 100 | care: advanced | origin: Mekong Basin, Southeast Asia | diet: Carnivore | temperament: Predatory
- keywords: clown knife (1900/mo KD16), clown knife fish for sale (480/mo KD7), knife fish clown (1600/mo KD29)

#### K2 — Black Ghost Knife Fish
- slug: black-ghost-knife-fish
- scientific: Apteronotus albifrons
- tier: standard | aov: $20–$80
- title: Buy Black Ghost Knife Fish (Apteronotus albifrons) | The Fish Collection — Live Arrival Guaranteed
- h1: Black Ghost Knife Fish for Sale
- tank_min_gallons: 100 | temp_c: 23–28 | ph: 6.0–7.5 | max_size_cm: 50 | care: advanced | origin: Amazon Basin | diet: Carnivore | temperament: Predatory but peaceful toward large fish
- keywords: knife fish black ghost (720/mo KD26)

#### K3 — ABA ABA Knife Fish
- slug: aba-aba-knife-fish
- scientific: Gymnarchus niloticus
- tier: premium | aov: $80–$400
- title: Buy ABA ABA Knife Fish (Gymnarchus niloticus) | The Fish Collection — Live Arrival Guaranteed
- h1: ABA ABA Knife Fish for Sale
- tank_min_gallons: 300 | temp_c: 22–28 | ph: 6.5–7.5 | max_size_cm: 160 | care: expert | origin: Nile Basin, West Africa | diet: Carnivore | temperament: Extremely predatory
- keywords: aba aba knife fish (480/mo KD7)

#### K4 — Brown Knife Fish
- slug: brown-knife-fish
- scientific: Apteronotus leptorhynchus
- tier: standard | aov: $15–$60
- title: Buy Brown Knife Fish (Apteronotus leptorhynchus) | The Fish Collection — Live Arrival Guaranteed
- h1: Brown Knife Fish for Sale
- tank_min_gallons: 75 | temp_c: 23–28 | ph: 6.0–7.0 | max_size_cm: 35 | care: intermediate | origin: South America | diet: Carnivore
- keywords: brown knife fish (590/mo KD10)

#### K5 — Glass Knifefish
- slug: glass-knifefish
- scientific: Eigenmannia virescens
- tier: standard | aov: $15–$50
- title: Buy Glass Knifefish (Eigenmannia virescens) | The Fish Collection — Live Arrival Guaranteed
- h1: Glass Knifefish for Sale
- tank_min_gallons: 75 | temp_c: 23–28 | ph: 6.0–7.5 | max_size_cm: 45 | care: intermediate | origin: Amazon Basin | diet: Carnivore | temperament: Peaceful schooling fish
- keywords: glass knifefish (260/mo KD8)

---

### GAR & MONSTER CATEGORY (/exotic-fish/gar/)

#### G1 — Albino Alligator Gar
- slug: albino-alligator-gar
- scientific: Atractosteus spatula
- tier: flagship | aov: $2,000–$8,000
- title: Buy Albino Alligator Gar (Atractosteus spatula) | The Fish Collection — Live Arrival Guaranteed
- h1: Albino Alligator Gar for Sale
- description: Albino alligator gar for sale — prehistoric apex predator with leucistic golden-white colouration. Captive-bred. Live arrival guaranteed. From $2,000. The Fish Collection.
- tank_min_gallons: 500 | temp_c: 16–26 | ph: 6.5–8.0 | max_size_cm: 200 | care: specialist | origin: US South / Texas (captive-bred) | diet: Carnivore — live/frozen fish | temperament: Apex predator
- keywords: gar for sale (590/mo KD3), albino gar (480/mo KD7), alligator gar for sale (390/mo KD12)
- faqs:
  Q: How big does an alligator gar get? A: Alligator gar are the largest gar species, reaching 180–200cm (6 feet+) in the wild. In captivity, 120–150cm is typical. They require a massive tank or indoor pond — minimum 500 gallons for a juvenile, considerably more for an adult.
  Q: Is the alligator gar legal to keep? A: Laws vary by state. In Texas and many southern states, alligator gar are legal to keep with a permit. The Fish Collection supplies captive-bred specimens (never wild-caught) with all necessary documentation. Always verify local regulations before purchase.

#### G2 — Platinum Gar
- slug: platinum-gar
- scientific: Atractosteus sp.
- tier: flagship | aov: $500–$3,000
- title: Buy Platinum Gar (Atractosteus sp.) | The Fish Collection — Live Arrival Guaranteed
- h1: Platinum Gar for Sale
- tank_min_gallons: 400 | temp_c: 16–26 | ph: 6.5–8.0 | max_size_cm: 180 | care: specialist | origin: Captive-bred | diet: Carnivore
- keywords: platinum gar (590/mo KD22)

#### G3 — Arapaima
- slug: arapaima
- scientific: Arapaima gigas
- tier: flagship | aov: $1,000–$5,000
- title: Buy Arapaima (Arapaima gigas) | The Fish Collection — Live Arrival Guaranteed
- h1: Arapaima for Sale
- tank_min_gallons: 1000+ | temp_c: 24–30 | ph: 6.5–7.5 | max_size_cm: 300 | care: specialist | origin: Amazon Basin | diet: Carnivore — large live/frozen fish | notes: Requires indoor pond or commercial-scale facility
- keywords: arapaima gigas (1900/mo KD39), arapaima for sale (590/mo KD4), arapaima gigas for sale (480/mo KD2)

---

### WOLF FISH CATEGORY (/exotic-fish/wolffish/)

#### W1 — Wolf Fish
- slug: wolf-fish
- scientific: Hoplias malabaricus
- tier: premium | aov: $80–$400
- title: Buy Wolf Fish (Hoplias malabaricus) | The Fish Collection — Live Arrival Guaranteed
- h1: Wolf Fish for Sale
- description: Wolf fish for sale — powerful South American predator with formidable dentition. The wolf fish of the aquarium world. Live arrival guaranteed. From $80. The Fish Collection.
- tank_min_gallons: 150 | temp_c: 20–26 | ph: 5.5–7.5 | max_size_cm: 50 | care: advanced | origin: South America — widespread | diet: Carnivore — live/frozen fish | temperament: Highly aggressive, single specimen
- keywords: wolf fish (14800/mo KD36 CPC$1.76), aquarium wolf fish (480/mo KD16), wolf fish freshwater (480/mo KD16)
- faqs:
  Q: Are wolf fish aggressive? A: Yes — wolf fish are among the most aggressive freshwater predators in the hobby. They will attack anything in their tank, including fish of similar size. They must be kept alone. Experienced keepers only.
  Q: What do wolf fish eat? A: Wolf fish are obligate carnivores. Feed large feeder fish, large earthworms, strips of fish fillet, and large prawns. They should be fed 2–3 times per week. Juveniles can be trained onto frozen foods.
  Q: How big do wolf fish get? A: Hoplias malabaricus reaches 35–50cm (14–20 inches). The giant wolf fish (H. aimara) can reach 80cm+. The Fish Collection supplies both species — check the product listing for species confirmation.

---

### PLECO CATEGORY (/exotic-fish/pleco/)

#### PL1 — Snowball Pleco
- slug: snowball-pleco
- scientific: Hypancistrus inspector
- tier: premium | aov: $80–$250
- title: Buy Snowball Pleco (Hypancistrus inspector) | The Fish Collection — Live Arrival Guaranteed
- h1: Snowball Pleco for Sale
- tank_min_gallons: 40 | temp_c: 26–30 | ph: 6.0–7.5 | max_size_cm: 17 | care: intermediate | origin: Rio Negro, Brazil | diet: Omnivore — blanched vegetables, protein | temperament: Peaceful
- keywords: snowball pleco (1300/mo KD16)

#### PL2 — Blue Panaque Pleco
- slug: blue-panaque-pleco
- scientific: Panaque cochliodon
- tier: premium | aov: $150–$600
- title: Buy Blue Panaque Pleco (Panaque cochliodon) | The Fish Collection — Live Arrival Guaranteed
- h1: Blue Panaque Pleco for Sale
- tank_min_gallons: 75 | temp_c: 22–27 | ph: 6.5–7.5 | max_size_cm: 43 | care: advanced | origin: Río Magdalena, Colombia | diet: Xylophagous (wood-eating) | temperament: Territorial
- keywords: blue panaque pleco (210/mo KD3)

#### PL3 — Vampire Pleco
- slug: vampire-pleco
- scientific: Leporacanthicus galaxias
- tier: premium | aov: $80–$300
- title: Buy Vampire Pleco (Leporacanthicus galaxias) | The Fish Collection — Live Arrival Guaranteed
- h1: Vampire Pleco for Sale
- tank_min_gallons: 55 | temp_c: 26–30 | ph: 5.5–7.0 | max_size_cm: 24 | care: intermediate | origin: Rio Tocantins, Brazil | diet: Omnivore | temperament: Territorial with own species
- keywords: pleco vampire (390/mo KD3)

#### PL4 — Three Beacon Pleco
- slug: three-beacon-pleco
- scientific: Leporacanthicus triactis
- tier: premium | aov: $80–$300
- title: Buy Three Beacon Pleco (Leporacanthicus triactis) | The Fish Collection — Live Arrival Guaranteed
- h1: Three Beacon Pleco for Sale
- tank_min_gallons: 55 | temp_c: 26–30 | ph: 6.0–7.5 | max_size_cm: 18 | care: intermediate | origin: Rio Tocantins / Rio Xingu | diet: Omnivore
- keywords: three beacon pleco (110/mo KD2)

#### PL5 — Longfin Albino Bristlenose Pleco
- slug: longfin-albino-bristlenose-pleco
- scientific: Ancistrus sp.
- tier: standard | aov: $15–$60
- title: Buy Longfin Albino Bristlenose Pleco (Ancistrus sp.) | The Fish Collection — Live Arrival Guaranteed
- h1: Longfin Albino Bristlenose Pleco for Sale
- tank_min_gallons: 30 | temp_c: 22–28 | ph: 6.5–7.5 | max_size_cm: 15 | care: beginner | origin: Amazon Basin (tank-bred) | diet: Herbivore/Omnivore | temperament: Peaceful
- keywords: longfin albino bristlenose plecostomus (170/mo KD2)

---

### ANGELFISH CATEGORY (/exotic-fish/angelfish/)

#### AN1 — Peppermint Angelfish — [see M2 above in Marine]

#### AN2 — Altum Angelfish
- slug: altum-angelfish
- scientific: Pterophyllum altum
- tier: premium | aov: $80–$300
- title: Buy Altum Angelfish (Pterophyllum altum) | The Fish Collection — Live Arrival Guaranteed
- h1: Altum Angelfish for Sale
- tank_min_gallons: 75 | temp_c: 27–30 | ph: 4.5–6.0 | max_size_cm: 38 | care: expert | origin: Orinoco River basin | diet: Carnivore/Omnivore | temperament: Semi-aggressive
- keywords: altum angelfish for sale (320/mo KD11)

#### AN3 — Starfire Red Angelfish
- slug: starfire-red-angelfish
- scientific: Pterophyllum scalare
- tier: premium | aov: $50–$200
- title: Buy Starfire Red Angelfish (Pterophyllum scalare) | The Fish Collection — Live Arrival Guaranteed
- h1: Starfire Red Angelfish for Sale
- tank_min_gallons: 55 | temp_c: 25–30 | ph: 6.0–7.5 | max_size_cm: 25 | care: intermediate | origin: Tank-bred strain | diet: Omnivore | temperament: Semi-aggressive
- keywords: starfire red angelfish (140/mo KD13 CPC$1.23), glofish starfire red (70/mo KD13)

#### AN4 — Angel Koi Fish
- slug: angel-koi-fish
- scientific: Pterophyllum scalare
- tier: standard | aov: $30–$120
- title: Buy Angel Koi Fish (Pterophyllum scalare) | The Fish Collection — Live Arrival Guaranteed
- h1: Angel Koi Fish for Sale
- tank_min_gallons: 55 | temp_c: 24–30 | ph: 6.0–7.5 | max_size_cm: 25 | care: intermediate | origin: Tank-bred strain | diet: Omnivore
- keywords: angel koi fish (480/mo KD20)

---

### OTHER EXOTICS

#### OE1 — Dragon Goby
- slug: dragon-goby
- scientific: Gobioides broussonnetii
- tier: standard | aov: $15–$50
- title: Buy Dragon Goby (Gobioides broussonnetii) | The Fish Collection — Live Arrival Guaranteed
- h1: Dragon Goby for Sale
- tank_min_gallons: 75 | temp_c: 22–28 | ph: 7.5–8.5 | max_size_cm: 60 | care: intermediate | origin: Atlantic coast (US, Caribbean) | diet: Omnivore — algae, worms | temperament: Peaceful | notes: Brackish preferred
- keywords: dragon goby (2900/mo KD16)

#### OE2 — Elephantnose Fish
- slug: elephantnose-fish
- scientific: Gnathonemus petersii
- tier: standard | aov: $20–$80
- title: Buy Elephantnose Fish (Gnathonemus petersii) | The Fish Collection — Live Arrival Guaranteed
- h1: Elephantnose Fish for Sale
- tank_min_gallons: 50 | temp_c: 22–28 | ph: 6.0–7.5 | max_size_cm: 23 | care: advanced | origin: Central and West Africa | diet: Carnivore — live/frozen worms | temperament: Peaceful but territorial
- keywords: elephantnose fish (1600/mo KD25)

#### OE3 — Electric Eel
- slug: electric-eel
- scientific: Electrophorus electricus
- tier: premium | aov: $80–$400
- title: Buy Electric Eel (Electrophorus electricus) | The Fish Collection — Live Arrival Guaranteed
- h1: Electric Eel for Sale
- tank_min_gallons: 300 | temp_c: 23–28 | ph: 6.0–8.0 | max_size_cm: 250 | care: specialist | origin: Amazon Basin | diet: Carnivore | temperament: Predatory | notes: Can produce 600V — specialist handling required
- keywords: electric eel freshwater (720/mo KD13), eels for sale (720/mo KD15)

#### OE4 — Peacock Bass
- slug: peacock-bass
- scientific: Cichla ocellaris
- tier: premium | aov: $60–$300
- title: Buy Peacock Bass (Cichla ocellaris) | The Fish Collection — Live Arrival Guaranteed
- h1: Peacock Bass for Sale
- tank_min_gallons: 250 | temp_c: 24–30 | ph: 6.0–7.5 | max_size_cm: 70 | care: advanced | origin: Amazon Basin | diet: Carnivore — live fish | temperament: Aggressive
- keywords: peacock bass for sale (720/mo KD6)

#### OE5 — Vampire Fish (Payara)
- slug: vampire-fish-payara
- scientific: Hydrolycus scomberoides
- tier: premium | aov: $100–$400
- title: Buy Vampire Fish — Payara (Hydrolycus scomberoides) | The Fish Collection — Live Arrival Guaranteed
- h1: Vampire Fish (Payara) for Sale
- tank_min_gallons: 300 | temp_c: 22–28 | ph: 5.5–7.0 | max_size_cm: 100 | care: specialist | origin: Orinoco Basin | diet: Carnivore — live fish | temperament: Apex predator
- keywords: vampire fish aquarium (390/mo KD4)

#### OE6 — Freshwater Stingray
- slug: freshwater-stingray
- scientific: Potamotrygon motoro
- tier: premium | aov: $200–$1,500
- title: Buy Freshwater Stingray (Potamotrygon motoro) | The Fish Collection — Live Arrival Guaranteed
- h1: Freshwater Stingray for Sale
- tank_min_gallons: 300 | temp_c: 24–28 | ph: 6.0–7.0 | max_size_cm: 45 | care: expert | origin: Orinoco and Amazon | diet: Carnivore — worms, shellfish | notes: Venomous spine — specialist handling
- keywords: freshwater stingray cost (80/mo KD3), freshwater stingray buy (30/mo)

#### OE7 — Tiger Loach
- slug: tiger-loach
- scientific: Syncrossus hymenophysa
- tier: standard | aov: $20–$80
- title: Buy Tiger Loach (Syncrossus hymenophysa) | The Fish Collection — Live Arrival Guaranteed
- h1: Tiger Loach for Sale
- tank_min_gallons: 75 | temp_c: 22–28 | ph: 6.5–7.5 | max_size_cm: 30 | care: intermediate | origin: Mekong Basin | diet: Omnivore | temperament: Semi-aggressive
- keywords: tiger loach (480/mo KD12)

#### OE8 — Clown Loach
- slug: clown-loach
- scientific: Chromobotia macracanthus
- tier: standard | aov: $15–$60
- title: Buy Clown Loach (Chromobotia macracanthus) | The Fish Collection — Live Arrival Guaranteed
- h1: Clown Loach for Sale
- tank_min_gallons: 100 | temp_c: 24–30 | ph: 6.0–7.5 | max_size_cm: 30 | care: intermediate | origin: Borneo, Sumatra | diet: Omnivore | temperament: Peaceful schooling
- keywords: clown loach for sale (480/mo KD5)

#### OE9 — Lungfish
- slug: lungfish
- scientific: Protopterus annectens
- tier: premium | aov: $100–$500
- title: Buy Lungfish (Protopterus annectens) | The Fish Collection — Live Arrival Guaranteed
- h1: Lungfish for Sale
- tank_min_gallons: 150 | temp_c: 24–30 | ph: 6.5–7.5 | max_size_cm: 100 | care: expert | origin: Sub-Saharan Africa | diet: Carnivore | temperament: Aggressive | notes: Can survive drought via estivation — extraordinary biology
- keywords: lungfish for sale (180/mo KD0)

#### OE10 — Distichodus
- slug: distichodus-sexfasciatus
- scientific: Distichodus sexfasciatus
- tier: standard | aov: $30–$120
- title: Buy Distichodus (Distichodus sexfasciatus) | The Fish Collection — Live Arrival Guaranteed
- h1: Distichodus for Sale
- tank_min_gallons: 200 | temp_c: 22–28 | ph: 6.0–7.5 | max_size_cm: 75 | care: advanced | origin: Congo River Basin | diet: Herbivore/Omnivore | temperament: Semi-aggressive
- keywords: distichodus sexfasciatus (110/mo KD8)

#### OE11 — Flagtail Prochilodus
- slug: flagtail-prochilodus
- scientific: Semaprochilodus taeniurus
- tier: standard | aov: $30–$120
- title: Buy Flagtail Prochilodus (Semaprochilodus taeniurus) | The Fish Collection — Live Arrival Guaranteed
- h1: Flagtail Prochilodus for Sale
- tank_min_gallons: 200 | temp_c: 22–28 | ph: 6.0–7.0 | max_size_cm: 30 | care: intermediate | origin: Amazon Basin | diet: Herbivore — algae, detritus | temperament: Peaceful schooling
- keywords: flagtail prochilodus (320/mo KD11)

#### OE12 — Roseline Barb (Denison Barb)
- slug: roseline-barb
- scientific: Sahyadria denisonii
- tier: standard | aov: $15–$60
- title: Buy Roseline Barb (Sahyadria denisonii) | The Fish Collection — Live Arrival Guaranteed
- h1: Roseline Barb for Sale
- tank_min_gallons: 75 | temp_c: 18–25 | ph: 6.5–7.5 | max_size_cm: 15 | care: intermediate | origin: Western Ghats, India | diet: Omnivore | temperament: Active, peaceful schooling
- keywords: roseline barb (170/mo KD8), rose line shark (90/mo KD11 CPC$1.11), golden roseline shark (90/mo KD13 CPC$1.58)

#### OE13 — Piranha (Red-Bellied)
- slug: red-bellied-piranha
- scientific: Pygocentrus nattereri
- tier: standard | aov: $20–$100
- title: Buy Red-Bellied Piranha (Pygocentrus nattereri) | The Fish Collection — Live Arrival Guaranteed
- h1: Red-Bellied Piranha for Sale
- tank_min_gallons: 100 | temp_c: 24–28 | ph: 6.0–7.5 | max_size_cm: 35 | care: advanced | origin: Amazon Basin | diet: Carnivore | temperament: Predatory schooling
- keywords: piranhas for sale (480/mo KD7), pet piranha fish for sale (320/mo KD9)

#### OE14 — Albino Shark
- slug: albino-shark
- scientific: Epalzeorhynchos munense
- tier: standard | aov: $15–$60
- title: Buy Albino Shark (Epalzeorhynchos munense) | The Fish Collection — Live Arrival Guaranteed
- h1: Albino Shark for Sale
- tank_min_gallons: 75 | temp_c: 22–28 | ph: 6.5–7.5 | max_size_cm: 30 | care: intermediate | origin: Southeast Asia | diet: Omnivore | temperament: Semi-aggressive
- keywords: albino shark (1900/mo KD12), albino fish (1600/mo KD4)

#### OE15 — Bichir
- slug: bichir
- scientific: Polypterus ornatipinnis
- tier: premium | aov: $40–$300
- title: Buy Bichir (Polypterus ornatipinnis) | The Fish Collection — Live Arrival Guaranteed
- h1: Bichir for Sale
- tank_min_gallons: 100 | temp_c: 24–30 | ph: 6.5–7.5 | max_size_cm: 60 | care: intermediate | origin: Congo River Basin | diet: Carnivore | temperament: Predatory but peaceful toward large fish
- keywords: bichir fish for sale (210/mo KD1)

---

## PART D — ALL PAGES REQUIRED

### D1 — Buy / Collection Pages (transactional — highest commercial value)

| URL slug                      | H1                              | Volume   | KD  | Priority |
|-------------------------------|---------------------------------|----------|-----|----------|
| exotic-fish-for-sale          | Exotic Fish for Sale            | 1,900    | 58  | 1        |
| freshwater-fish-for-sale      | Freshwater Fish for Sale        | 4,400    | 32  | 1        |
| live-fish-for-sale            | Live Fish for Sale              | 4,400    | 66  | 1        |
| rare-fish-for-sale            | Rare Fish for Sale              | 2,900    | 30  | 1        |
| saltwater-fish-for-sale       | Saltwater Fish for Sale         | 5,400    | 18  | 2        |
| luxury-fish-for-sale          | Luxury Fish for Sale            | 50       | —   | 2        |
| catfish-for-sale              | Catfish for Sale                | 1,600    | 15  | 2        |
| discus-fish-for-sale          | Discus Fish for Sale            | 3,600    | 51  | 1        |

FAQs for every collection page — minimum 4 Q&As covering: shipping, guarantee, acclimation, legality.

### D2 — Category Hubs (already built — verify SEO data)

All 20 categories: arowana, catfish, cichlid, pufferfish, stingray, knife-fish, gar, goby, angelfish, loach, pleco, barb, oscar, betta, eel, piranha, bass, grouper, tang, discus.

Each needs:
- H1: {Category} Fish for Sale
- 300+ words editorial below product grid
- FAQ schema (3–5 questions)
- ItemList schema of all products
- BreadcrumbList schema
- Internal links to species guides

### D3 — Species Guides Required (90 total target, 12 built, 78 needed)

Priority species guides to build next (keyword-ordered):

| Species             | Slug                        | Vol/mo  | KD  |
|---------------------|----------------------------|---------|-----|
| Discus fish         | discus-fish                | 18,100  | 41  |
| Wolf fish           | wolf-fish                  | 14,800  | 36  |
| Dragon goby         | dragon-goby                | 2,900   | 16  |
| Platinum arowana    | platinum-arowana           | 2,400   | 28  |
| Fahaka pufferfish   | fahaka-pufferfish          | 2,400   | 23  |
| Flowerhorn cichlid  | flowerhorn-cichlid         | 6,600   | 25  |
| MBU pufferfish      | mbu-pufferfish             | 1,300   | 17  |
| Snowball pleco      | snowball-pleco             | 1,300   | 16  |
| Shovelnose catfish  | shovelnose-tiger-catfish   | 1,300   | 11  |
| Starry night cichlid| starry-night-cichlid       | 1,300   | 5   |
| Gem tang            | gem-tang                   | 1,900   | 13  |
| Peppermint angelfish| peppermint-angelfish       | 1,000   | 21  |
| Irwini catfish      | irwini-catfish             | 1,000   | 9   |
| Clown knife fish    | clown-knife-fish           | 1,900   | 16  |
| Elephantnose fish   | elephantnose-fish          | 1,600   | 25  |
| Albino shark        | albino-shark               | 1,900   | 12  |
| Peacock bass        | peacock-bass               | 720     | 6   |
| Red tail catfish    | red-tail-catfish           | 1,600   | 15  |
| Electric eel        | electric-eel               | 720     | 13  |
| Arapaima            | arapaima                   | 1,900   | 39  |
| Clown loach         | clown-loach                | 480     | 5   |
| Blue zaire frontosa | blue-zaire-frontosa        | 320     | 4   |
| Tiger loach         | tiger-loach                | 480     | 12  |
| Vampire pleco       | vampire-pleco              | 390     | 3   |
| Piranhas            | red-bellied-piranha        | 480     | 7   |
| Lungfish            | lungfish                   | 180     | 0   |
| Freshwater stingray | freshwater-stingray        | 80      | 3   |

### D4 — Care Guides Required (60 total target, 8 built, 52 needed)

Build these care guides — each = SSG page, Article schema, FAQPage schema:

| Care guide slug                        | Target keyword               | Vol  |
|----------------------------------------|------------------------------|------|
| platinum-arowana-tank-setup            | arowana tank setup           | 480  |
| platinum-arowana-water-parameters      | arowana water parameters     | 210  |
| platinum-arowana-feeding-guide         | arowana feeding              | 210  |
| discus-fish-water-parameters           | discus fish water parameters | 140  |
| discus-fish-tank-size                  | discus fish tank size        | 480  |
| discus-fish-tank-mates                 | discus fish tank mates       | 480  |
| discus-fish-feeding-guide              | discus fish food             | 210  |
| discus-fish-breeding-guide             | how to breed discus          | 170  |
| wolf-fish-care-guide                   | wolf fish care               | —    |
| fahaka-pufferfish-care-guide           | fahaka pufferfish care       | —    |
| mbu-pufferfish-care-guide              | mbu puffer care              | —    |
| flowerhorn-cichlid-care-guide          | flowerhorn care              | —    |
| red-tail-catfish-care-guide            | red tail catfish care        | —    |
| irwini-catfish-care-guide              | irwini catfish care          | —    |
| shovelnose-catfish-care-guide          | shovelnose catfish care      | —    |
| clown-knife-fish-care-guide            | clown knife fish care        | —    |
| black-ghost-knife-care-guide           | black ghost knife fish care  | —    |
| peacock-bass-care-guide                | peacock bass care            | —    |
| arapaima-care-guide                    | arapaima care                | —    |
| electric-eel-care-guide                | electric eel care            | —    |
| dragon-goby-care-guide                 | dragon goby care             | —    |
| freshwater-stingray-care-guide         | freshwater stingray care     | —    |
| alligator-gar-care-guide               | alligator gar care           | —    |
| gem-tang-aquarium-care                 | gem tang care                | —    |
| peppermint-angelfish-care-guide        | peppermint angelfish care    | —    |
| altum-angelfish-care-guide             | altum angelfish care         | —    |
| elephantnose-fish-care-guide           | elephantnose fish care       | —    |
| discus-fish-diseases-treatment         | discus fish disease          | 170  |
| setting-up-300-gallon-aquarium         | 300 gallon aquarium          | 170  |
| best-large-fish-for-aquarium           | large fish for fish tank     | 880  |
| freshwater-aquarium-water-quality      | freshwater fish care         | —    |
| how-to-breed-discus-fish               | how to breed discus fish     | 170  |

### D5 — Blog Posts Required (90 total target, 9 built, 81 needed)

Priority blog posts — each = SSG, Article schema, 800–2,000 words:

| Slug                                           | Title                                            | Vol target |
|------------------------------------------------|--------------------------------------------------|------------|
| most-expensive-aquarium-fish-world             | The Most Expensive Aquarium Fish in the World    | high       |
| rarest-fish-aquarium-hobby                     | 15 Rarest Fish in the Aquarium Hobby (2026)      | high       |
| platinum-arowana-price-guide                   | Platinum Arowana Price Guide: What You'll Pay    | 2400/mo    |
| discus-fish-beginners-guide                    | Discus Fish: The Complete Beginner's Guide       | 18100/mo   |
| wolf-fish-complete-guide                       | Wolf Fish: Everything You Need to Know           | 14800/mo   |
| exotic-fish-for-sale-guide                     | Buying Exotic Fish Online: The Complete Guide    | 1900/mo    |
| best-large-freshwater-fish-aquarium            | 20 Best Large Freshwater Fish for Aquariums      | high       |
| flowerhorn-cichlid-guide                       | Flowerhorn Cichlid: The Complete Guide           | 6600/mo    |
| fahaka-pufferfish-complete-guide               | Fahaka Pufferfish: Care, Tank Setup & Feeding   | 2400/mo    |
| gem-tang-ultimate-guide                        | G.E.M. Tang: The Ultimate Rare Marine Fish Guide | 1900/mo    |
| setting-up-arowana-tank                        | Setting Up a Platinum Arowana Tank: Step by Step | high       |
| types-of-catfish-aquarium                      | 25 Types of Catfish for Your Aquarium            | 4400/mo    |
| freshwater-puffer-fish-guide                   | Freshwater Puffer Fish: Species, Care & Setup    | 720/mo     |
| rare-freshwater-fish-collectors                | 18 Rare Freshwater Fish for Serious Collectors   | high       |
| cites-regulations-arowana-guide                | CITES Regulations for Asian Arowana Explained    | medium     |
| discus-fish-tank-setup-guide                   | The Perfect Discus Fish Tank Setup               | high       |
| predatory-freshwater-fish-guide                | 15 Best Predatory Freshwater Fish                | 1000/mo    |
| arapaima-care-guide-blog                       | Arapaima: The Amazon's Living Fossil             | 1900/mo    |
| shovelnose-catfish-care                        | Shovelnose Catfish: Size, Tank & Care Guide      | 1300/mo    |
| knife-fish-guide                               | Knife Fish Species: Complete Aquarium Guide      | high       |
| peppermint-angelfish-worlds-most-beautiful     | The Peppermint Angelfish: World's Most Beautiful | 1000/mo    |
| electric-eel-aquarium-guide                    | Keeping an Electric Eel: Is It Possible?         | 720/mo     |
| freshwater-stingray-guide                      | Freshwater Stingray: Care, Setup & Species       | medium     |
| discus-fish-breeding-complete                  | Breeding Discus Fish: From Pair to First Spawn   | high       |
| big-aquarium-setup-guide                       | How to Set Up a 300-Gallon Aquarium              | high       |

---

## PART E — KEYWORD CLUSTER MASTER MAP

This maps every major keyword cluster to its target page URL.

### Cluster 1 — Exotic Fish For Sale (287 kws, ~62K vol/mo)
Primary target: /en/buy/exotic-fish-for-sale/
Supporting pages: /en/exotic-fish/ (hub), all category pages
Key keywords: exotic fish for sale (1900/KD58), exotic fish (4400/KD30), exotic freshwater fish (1300/KD28), exotic aquarium (1600/KD12 CPC$1.07), exotic fish store (720/KD0)

### Cluster 2 — Platinum Arowana (104 kws, ~8K vol/mo)
Primary target: /en/exotic-fish/arowana/platinum-arowana/
Supporting: /en/species/platinum-arowana/ + 3 care guides
Key keywords: platinum arowana (2400/KD28), short body albino silver arowana (880/KD5), arowana fish (8100/KD40)

### Cluster 3 — Discus Fish (199 kws, ~28K vol/mo) — HIGHEST PRIORITY GAP
Primary target: /en/exotic-fish/discus/ (category) + individual product pages
Supporting: /en/species/discus-fish/ + 5 care guides + /en/buy/discus-fish-for-sale/
Key keywords: discus fish (18100/KD41), discus fish for sale (3600/KD51), discus fish tank (1300/KD23), discus fish aquarium (1000/KD25), discus fish price (590/KD17), discus fish care (390/KD20), discus fish tank mates (480/KD24), buy discus fish online (390/KD42)

### Cluster 4 — Wolf Fish (18 kws, ~17K vol/mo)
Primary target: /en/exotic-fish/wolffish/ + /en/species/wolf-fish/
Key keywords: wolf fish (14800/KD36 CPC$1.76), aquarium wolf fish (480/KD16), wolf fish freshwater (480/KD16), wolves fish (170/KD4), wolfs fish (30/CPC$2.69)

### Cluster 5 — G.E.M. Tang (70 kws, ~4K vol/mo)
Primary target: /en/exotic-fish/tang/gem-tang/ + /en/species/gem-tang/
Key keywords: gem tang (1900/KD13 CPC$0.87), g.e.m. tang (590/KD5), gem tangs for sale (20/CPC$1.04)

### Cluster 6 — Peppermint Angelfish (50 kws, ~3K vol/mo)
Primary target: /en/exotic-fish/angelfish/peppermint-angelfish/
Key keywords: peppermint angelfish (1000/KD21 CPC$0.72), peppermint angelfish for sale (140/CPC$1.08)

### Cluster 7 — Colorful Catfish (42 kws, ~12K vol/mo)
Primary target: /en/exotic-fish/catfish/ + individual product pages
Key keywords: catfish for sale (1600/KD15), red tail catfish for sale (1600/KD15), aquarium catfish (1900/KD20), types of catfish (4400/KD33), shovelnose catfish (1300/KD11), irwini catfish (1000/KD9)

### Cluster 8 — Fresh Water Puffer Fish (18 kws, ~5K vol/mo)
Primary target: /en/exotic-fish/pufferfish/ + product pages
Key keywords: fahaka pufferfish (2400/KD23 CPC$1.40), mbu pufferfish (1300/KD17), fresh water puffer fish (720/KD11), figure eight puffer fish (720/KD27)

### Cluster 9 — Flowerhorn Cichlid (4 kws, ~6.8K vol/mo)
Primary target: /en/exotic-fish/cichlid/flowerhorn-cichlid/
Key keywords: flowerhorn cichlid (6600/KD25), flowerhorn cichlid for sale (480/KD18)

### Cluster 10 — Dragon Goby (10 kws, ~4.2K vol/mo)
Primary target: /en/exotic-fish/goby/dragon-goby/
Key keywords: dragon goby (2900/KD16), dragonfish goby (210/CPC$1.11)

### Cluster 11 — Albino Gar (31 kws, ~3.9K vol/mo)
Primary target: /en/exotic-fish/gar/albino-alligator-gar/
Key keywords: gar for sale (590/KD3), albino gar (480/KD7), alligator gar for sale (390/KD12), platinum gar (590/KD22)

### Cluster 12 — Rare Fish (6 kws, ~4K vol/mo)
Primary target: /en/buy/rare-fish-for-sale/
Key keywords: rare fish (2900/KD30), rare aquarium fish (320/KD16)

---

## PART F — SEO DATA FOR EXISTING SPECIES NOT YET ON SITE

These should be added as products in your database to expand coverage:

| Species                | Scientific               | Target slug               | Category slug  | Vol  | KD |
|------------------------|--------------------------|---------------------------|----------------|------|----|
| Vampire fish (payara)  | Hydrolycus scomberoides  | vampire-fish-payara       | monster        | 390  | 4  |
| Datnoid                | Datnioides microlepis    | datnoid                   | monster        | 140  | 0  |
| Oscar fish (exotic)    | Astronotus ocellatus     | exotic-oscar-fish         | oscar          | 1300 | 7  |
| Long fin oscar         | Astronotus ocellatus     | long-fin-oscar            | oscar          | 260  | 2  |
| Exotic betta fish      | Betta splendens          | exotic-betta-fish         | betta          | 170  | 6  |
| Electric blue JD       | Rocio octofasciata       | electric-blue-jack-dempsey| cichlid        | 210  | 5  |
| Electric blue TX cichlid| Herichthys cyanoguttatus| electric-blue-texas-cichlid| cichlid       | 320  | 17 |
| Green terror cichlid   | Andinoacara rivulatus    | green-terror-cichlid      | cichlid        | 260  | 1  |
| Pike cichlid           | Crenicichla sp.          | pike-cichlid              | cichlid        | 110  | 4  |
| Cobalt blue discus     | Symphysodon aequifasciatus| cobalt-blue-discus       | discus         | 140  | 2  |
| Silver dollars         | Metynnis sp.             | silver-dollars-fish       | monster        | 260  | 11 |
| Red parrot fish        | Hybrid cichlid           | red-parrot-fish           | cichlid        | 140  | 7  |
| Blue catfish           | Ictalurus furcatus       | blue-catfish              | catfish        | 260  | 10 |
| Rosy barb              | Pethia conchonius        | rosy-barb                 | barb           | 320  | 5  |
| Iridescent shark       | Pangasianodon hypophthalmus| iridescent-sharks       | catfish        | 320  | 15 |
| Columbian sharks       | Ariopsis seemanni        | columbian-sharks          | sharks         | 140  | 8  |
| Black sharkminnow      | Labeo chrysophekadion    | black-sharkminnow         | sharks         | 70   | 10 |
| Synodontis ocellifer   | Synodontis ocellifer     | synodontis-ocellifer      | catfish        | 110  | 13 |
| Loxozonus corydoras    | Corydoras loxozonus      | loxozonus-corydoras       | catfish        | 90   | 5  |
| Pink jack dempsey      | Rocio octofasciata       | pink-jack-dempsey-cichlid | cichlid        | 140  | 5  |
| Checkerboard cichlid   | Dicrossus filamentosus   | checkerboard-cichlid      | cichlid        | 140  | 4  |

---

## PART G — TECHNICAL CHECKLIST (run before every deploy)

- [ ] Every new product page: unique title, description, H1, canonical, hreflang (5 locales)
- [ ] Product schema includes shippingDetails (free overnight)
- [ ] BreadcrumbList on every page
- [ ] FAQPage schema (min 4 Q&As) on all product + species pages
- [ ] Article schema on all species guides, care guides, blog posts
- [ ] revalidate export on ISR pages, revalidate: false on SSG pages
- [ ] next/image on all images, explicit width+height, priority on LCP only
- [ ] Noindex on: cart, checkout, order-confirmation, account, ?query URLs
- [ ] Sitemap updated (auto via route handler)
- [ ] No duplicate title tags (check with build or audit tool)
- [ ] Internal links: product → species guide → care guide (triangle)
- [ ] Scientific name on first mention: "Common Name (Scientific name)"

---

## PART H — CURRENT STATUS vs TARGET

| Type              | Built | Target EN | Gap   | Pages per locale |
|-------------------|-------|-----------|-------|------------------|
| Products          | 32    | 140+      | 108+  | 700+             |
| Species guides    | 12    | 90        | 78    | 450              |
| Care guides       | 8     | 60        | 52    | 300              |
| Blog posts        | 9     | 90        | 81    | 450              |
| Collection pages  | 2     | 8         | 6     | 40               |
| Category hubs     | 20    | 20        | 0 ✓   | 100              |
| Static pages      | 7     | 7         | 0 ✓   | 35               |
| **Total EN**      | ~90   | **510+**  | **420+**| **2,550+**    |

Total monthly searches currently covered: ~800K / 6.67M (12%)
After full build: 6.67M (100% indexed, ~40% captured)

---

*End of THEFISHCOLLECTION_SEO.md*
*This file is the single source of truth for all content decisions.*
*When in doubt about species data, URLs, or keywords — check here first.*
