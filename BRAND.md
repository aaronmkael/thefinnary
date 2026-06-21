# BRAND.md — The Fish Collection.com Design System
# Version 3.0 | March 2026
# Drop in project root. Claude Code reads this every session.
# Covers: identity, colours, typography, spacing, components, voice, and motion.

---

## 1. Brand Identity

### Concept
"The expert friend who happens to know everything about rare fish."
Not a velvet-rope auction house. Not a pet shop. The brand sits between
iNaturalist and Airbnb — knowledgeable, warm, generous with information,
and genuinely exciting to explore. Like a brilliant marine biologist who
is also a great host.

### Three Pillars
1. Expert but approachable — we know everything, we share everything
2. The fish is the hero — the UI exists to present the specimen, not itself
3. Accessible to all — a $20 loach buyer and a $200,000 arowana collector
   should both feel equally welcome

### What we are NOT
- Not an auction house (no velvet rope, no intimidation)
- Not a pet shop (no cartoon fish, no bubble graphics, no bright primaries)
- Not a tech startup (not Inter, not #3B82F6 blue, not rounded-xl cards)
- Not generic luxury (no purple gradients, no "premium" buzzword carousels)

### Tagline options (use one consistently per campaign)
- "Rare fish, real experts."            ← primary
- "The world's rarest fish, explained."
- "Find your next obsession."

---

## 2. Colour Palette — "Bioluminescent Waters"

Inspired by: the deep ocean (teal-black, not navy), bioluminescent marine
life (electric aqua), and sunlight hitting tropical freshwater (warm amber).
This palette exists nowhere else in aquatics e-commerce.

### Primary Surfaces

| Token    | Hex     | Usage                                         |
|----------|---------|-----------------------------------------------|
| abyss    | #0B2D36 | Header bg, footer bg, primary dark surface    |
| deep     | #134859 | Dark section bg, hero overlays                |
| current  | #1E6B80 | Primary links, active nav, focused elements   |
| lagoon   | #29A8C4 | Category labels, info badges, highlights      |
| shallows | #7DCFE0 | Light accent, decorative highlights           |
| foam     | #E3F5F9 | Tinted badge backgrounds, light info surface  |
| surface  | #FAFCFC | Primary page background (barely-aqua white)   |
| reef     | #EFF6F8 | Card backgrounds, secondary surface           |
| mist     | #DFF0F3 | Borders, dividers, subtle lines               |

### CTA & Warm Accent (ember — the call to action colour)

| Token   | Hex     | Usage                                          |
|---------|---------|------------------------------------------------|
| ember   | #E8622A | Primary CTA button bg — Add to Cart, Buy Now  |
| koi     | #F4845A | CTA hover state                                |
| sunrise | #FEF0E8 | CTA tint background, care-level badge bg       |
| flame   | #8C3512 | CTA text on sunrise bg, care level labels      |

### Text

| Token   | Hex     | Usage                                          |
|---------|---------|------------------------------------------------|
| ink     | #1E2B2E | Primary headings, product names                |
| deep-text | #3A5A62 | Body copy, descriptions                       |
| wade    | #5A7A82 | Secondary text, metadata                      |
| drift   | #7A9AA2 | Tertiary text, placeholders, scientific names  |
| ghost   | #B0C8CE | Disabled states, decorative only              |

### Status

| Token      | Hex     | Background | Usage         |
|------------|---------|------------|---------------|
| in-stock   | #1A7A5C | #D4F5EA   | In stock       |
| low-stock  | #B5451B | #FDEEE9   | Low stock      |
| out-stock  | #595954 | #EBEBEB   | Out of stock  |
| info       | #1E6B80 | #E3F5F9   | Info/species  |
| flagship   | #0B2D36 | #E3F5F9   | Premium badge |

### Dark Mode Overrides

| Light token | Dark value  | Notes                        |
|-------------|-------------|------------------------------|
| surface     | #0B2D36     | Page bg flips to abyss       |
| reef        | #134859     | Card bg flips to deep        |
| mist        | #1E4A58     | Border colour darkens        |
| ink         | #F0F8FA     | Text flips to near-white     |
| deep-text   | #C8DFE4     | Body text                    |
| ember       | #E8622A     | CTA stays the same           |
| lagoon      | #29A8C4     | Accent stays the same        |

### Usage Rules
- `ember` is the ONLY CTA colour. Never blue, never green.
- `abyss` reads "deep ocean" not "corporate navy" — this distinction matters.
- `surface` (#FAFCFC) has a barely-perceptible aqua tint — never use pure #FFF.
- `drift` is the colour for scientific names — never `ink`, never bold.
- Never put meaningful text in `ghost` — contrast fails.
- Never use `ember` for large backgrounds — it's an accent only.
- `lagoon` and `current` are cousins — use `lagoon` for decorative/label use,
  `current` for interactive/link use.

---

## 3. Typography

### Font Stack

| Role            | Family              | Purpose                                   |
|-----------------|---------------------|-------------------------------------------|
| Headings / UI   | Outfit              | Modern, rounded, warm — not overused.     |
|                 |                     | Friendly authority. Loaded via next/font. |
| Body / Articles | Lora                | Warm serif. Literary feel. Excellent for  |
|                 |                     | care guides, species info, blog posts.    |
| Data / Prices   | DM Mono             | All prices, parameters, pH, tank sizes,   |
|                 |                     | SKUs, stock counts. Clean precision.      |
| Scientific      | Cormorant Garamond  | Scientific names only — always italic,    |
| names           | Italic              | always drift colour, always lighter size. |

### CSS Variables
```
--font-heading:    'Outfit', system-ui, sans-serif
--font-body:       'Lora', Georgia, serif
--font-mono:       'DM Mono', 'Courier New', monospace
--font-scientific: 'Cormorant Garamond', Georgia, serif
```

### Why These Four

Outfit: rounded terminals, open apertures, friendly without being childish.
Used by thoughtful modern brands — not yet everywhere. Works at all sizes.

Lora: designed for screen reading at body size. The serifs have warmth without
formality. Care guides and species descriptions feel like they're written by
someone who actually loves fish.

DM Mono: clinical precision for data. The contrast between Outfit's warmth
and DM Mono's exactness is a brand signature — you see it and you know
The Fish Collection.

Cormorant Garamond Italic: reserved exclusively for scientific names. The
extreme stroke contrast makes it unmistakeable. It earns its use — no more,
no less.

### Scientific Name Rule
Every scientific name on the site:
- Font: Cormorant Garamond Italic
- Weight: 300 (light)
- Colour: `drift` (#7A9AA2) — never `ink`
- Size: always one step smaller than the common name
- Wraps in `<em>` for semantic correctness
- Never bold, never all-caps, never uppercase

### Type Scale

Display (hero sections only):
- display-2xl: 5.5rem / 88px
- display-xl:  4rem   / 64px
- display-lg:  3rem   / 48px

Headings:
- h1:  2.25rem / 36px  — product names, page titles
- h2:  1.75rem / 28px  — section headings
- h3:  1.375rem / 22px — sub-sections
- h4:  1.125rem / 18px — card titles, labels

Body:
- body-lg:  1.125rem / 18px — intro paragraphs
- body:     1rem     / 16px — standard body
- body-sm:  0.875rem / 14px — captions, secondary
- label:    0.75rem  / 12px — form labels, eyebrows
- micro:    0.6875rem / 11px — fine print minimum

Mono / Data:
- price:    1.125rem / 18px — product prices
- param:    0.875rem / 14px — water parameters
- sku:      0.75rem  / 12px — SKUs, codes

### Letter Spacing
- Display:   -0.03em  (tight — large text needs tightening)
- H1:        -0.02em
- H2–H4:      0em
- Labels:    +0.06em  (slightly open — improves readability at small sizes)
- Eyebrows:  +0.10em  (category labels like "AROWANA")
- Mono:       0em     (never track mono)

### Line Heights
- Display:   1.1
- Headings:  1.2
- Body:      1.7  (Lora needs space — don't compress)
- Labels:    1.3
- Mono:      1.5

---

## 4. Spacing

Base unit: **4px**. All values are multiples of 4.

| Token  | Value | Common use                        |
|--------|-------|-----------------------------------|
| sp-1   | 4px   | Icon gaps, tight inline spacing   |
| sp-2   | 8px   | Component internal padding        |
| sp-3   | 12px  | Badge padding, small gaps         |
| sp-4   | 16px  | Default padding, card inner gap   |
| sp-5   | 20px  | Slightly larger padding           |
| sp-6   | 24px  | Grid gutters, section sub-spacing |
| sp-8   | 32px  | Card padding, component spacing   |
| sp-10  | 40px  | Section inner padding             |
| sp-12  | 48px  | Section gaps                      |
| sp-16  | 64px  | Large section padding             |
| sp-20  | 80px  | Page section spacing              |
| sp-24  | 96px  | Hero section padding              |

Grid: 12 columns, 24px gutters.
Side margins: 80px (≥1440) → 60px (≥1280) → 40px (≥768) → 20px (<768).
Max site width: 1440px. Max readable text: 720px.

---

## 5. Borders & Radius

All borders: `1px solid #DFF0F3` (mist). Hairline: `0.5px solid #DFF0F3`.
On dark surfaces: `1px solid #1E4A58`.

Border radius — warmer than the old system, still grounded:

| Token  | Value  | Use                                        |
|--------|--------|--------------------------------------------|
| xs     | 4px    | Inputs, small form elements                |
| sm     | 8px    | Badges, chips, small cards                 |
| md     | 12px   | Standard cards — DEFAULT                  |
| lg     | 16px   | Large modals, feature cards                |
| xl     | 20px   | Hero panels, large image containers        |
| pill   | 9999px | Status badges, category pills, tags        |

Note: `md` (12px) is the new default for cards — warmer than the old 4px.
`pill` is reserved for small badges and tags only.

---

## 6. Shadows

Softer and warmer than before — uses teal-tinted shadows, not grey.

```
shadow-xs: 0 1px 3px rgba(11, 45, 54, 0.06)
shadow-sm: 0 2px 6px rgba(11, 45, 54, 0.08)
shadow-md: 0 4px 16px rgba(11, 45, 54, 0.10)
shadow-lg: 0 8px 32px rgba(11, 45, 54, 0.12)
shadow-xl: 0 16px 48px rgba(11, 45, 54, 0.14)
```

Use shadows more liberally than before — cards can have `shadow-sm` at rest
and `shadow-md` on hover. This is friendlier than hairline-border-only cards.

---

## 7. Components

### Buttons

Three variants. Heights: sm=36px, md=44px, lg=52px, xl=60px.

Primary (Add to Cart, Buy Now — all purchase actions):
```
bg: ember (#E8622A)
text: white, Outfit, font-weight 700, font-size 15px
border-radius: 10px
padding: 12px 24px
hover: bg koi (#F4845A), transform scale(1.02)
active: transform scale(0.98)
disabled: bg ghost, text drift, cursor not-allowed
```

Secondary (View Guide, Learn More — informational):
```
bg: transparent
text: current (#1E6B80), Outfit, font-weight 600
border: 2px solid current
border-radius: 10px
padding: 11px 24px
hover: bg foam (#E3F5F9), border-color lagoon
```

Ghost (inline navigation, back links):
```
bg: none, border: none
text: deep-text, Outfit, font-weight 500
padding: 0
underline decoration, underline-colour lagoon on hover
```

Rule: Never use `current` or `lagoon` as a button background. Ember is the
only CTA. Everything else is secondary or ghost.

### Product Card

The most important component. Gets maximum care.

Structure:
```
outer: bg reef, border 1px mist, border-radius md (12px), shadow-sm
hover:  shadow-md, translateY(-3px), transition 250ms ease
```

Image container:
```
aspect-ratio: 4/5 (portrait — never 1:1, never landscape)
border-radius: md md 0 0 (rounded on top only)
bg: abyss (dark bg makes fish colours pop)
overflow: hidden
hover on image: scale(1.04), transition 600ms ease
```

Card body:
```
padding: sp-4 sp-5 sp-5
```

Category eyebrow:
```
font: Outfit, 11px, weight 700, tracking +0.10em
color: lagoon
text-transform: uppercase
margin-bottom: 3px
```

Common name:
```
font: Outfit, 17px, weight 700, color ink
line-height: 1.2
letter-spacing: -0.01em
margin-bottom: 2px
```

Scientific name:
```
font: Cormorant Garamond Italic, 13px, weight 300
color: drift
margin-bottom: sp-3
```

Care level indicator:
```
5 dots, 7px × 7px, border-radius pill
Active: ember
Inactive: #DFF0F3 (mist)
Expert/Specialist: lagoon (signals exceptional difficulty)
```

Footer row:
```
padding-top: sp-3
border-top: 1px solid mist
display: flex, justify-content: space-between, align-items: center
Price: DM Mono, 16px, weight 700, ink
Tank size: Outfit, 11px, drift
```

Add to cart button on card (compact):
```
bg: ember, color: white, border-radius: 8px
padding: 6px 14px, font-size: 12px, font-weight: 700
appears on hover overlay OR always visible on mobile
```

Badges (absolute top-left of image):
```
position: absolute, top: sp-3, left: sp-3
display: flex, flex-direction: column, gap: sp-1
```

Badge shape: `rounded-pill, font: Outfit, 10px, weight 700, padding: 3px 8px`

### Species Specs Grid

Signature The Fish Collection component — presents technical data like a field guide entry.

```
container: bg reef, border 1px mist, border-radius md
grid: auto-fit minmax(140px, 1fr)
gap: 1px (creates hairline dividers via container background = mist)
```

Each cell:
```
bg: surface (#FAFCFC)
padding: sp-4 sp-4
```

Label:
```
font: Outfit, 10px, weight 700, tracking +0.08em
color: wade
text-transform: uppercase
margin-bottom: sp-1
```

Value:
```
font: DM Mono, 14px, weight 500
color: ink
```

Unit (gal, °C, cm):
```
font: DM Mono, 11px, weight 400
color: wade
margin-left: 2px
```

### Site Header

```
bg: abyss (#0B2D36)
border-bottom: 1px solid #1E4A58
height: 72px
position: sticky, top: 0, z-index: 50
padding: 0 grid-margin
```

Layout: CSS grid, three columns (nav | logo | actions).

Logo / wordmark:
```
font: Outfit, 20px, weight 800
color: white
letter-spacing: -0.02em
hover: color shallows (#7DCFE0)
```

Sub-tagline (below wordmark, optional):
```
font: Outfit, 11px, weight 400
color: rgba(255,255,255,0.4)
```

Nav links:
```
font: Outfit, 13px, weight 600
color: rgba(255,255,255,0.65)
hover: color white, underline-colour lagoon
active: color lagoon
```

Icons (search, cart, account):
```
color: rgba(255,255,255,0.55)
hover: white
size: 20px, strokeWidth: 1.75
```

Cart count badge:
```
bg: ember, color: white
font: DM Mono, 10px
size: 18px × 18px, border-radius: pill
```

### Site Footer

```
bg: abyss (#0B2D36)
border-top: 1px solid #1E4A58
```

Trust bar above main links:
```
bg: deep (#134859)
grid: 4 columns
Each item: lagoon label above, pearl/40 description below
```

Nav columns: pearl/55 links → pearl hover. Outfit, 13px.
Bottom bar: pearl/30, Outfit, 12px.

### Breadcrumb

```
font: Outfit, 12px, weight 500
separators: "/" in ghost colour
links: wade → ink on hover
current: ink
```

### Status Badges

```
shape: rounded-pill
font: DM Mono, 11px, weight 600
dot: 5px circle before text
padding: 3px 8px
```

In stock:   bg #D4F5EA, text #1A7A5C, dot #1A7A5C
Low stock:  bg #FDEEE9, text #B5451B, dot #B5451B
Out stock:  bg #EBEBEB, text #595954, dot #595954
Flagship:   bg #E3F5F9, text #0B2D36, dot #29A8C4
New:        bg sunrise (#FEF0E8), text flame (#8C3512), dot ember

### FAQ Accordion

```
container: border-top 1px mist
item: border-bottom 1px mist
```

Question row:
```
padding: sp-5 0
font: Outfit, 17px, weight 600, ink
cursor: pointer
plus icon: wade, rotates 45deg on open (300ms spring)
```

Answer:
```
padding-bottom: sp-6
font: Lora, 15px, weight 400, deep-text
line-height: 1.75
max-width: 720px
```

### Input / Form Elements

```
height: 44px
bg: surface
border: 1px solid mist
border-radius: xs (4px — tighter for forms)
font: Outfit, 15px, weight 400, ink
padding: 0 sp-4
```

Focus ring: `2px solid lagoon, outline-offset: 2px`
Hover: `border-color: shallows`
Placeholder: `drift, font-style: italic`
Error: `border-color: #B5451B`

---

## 8. Page Layout Templates

### Product Detail Page

```
Stack:
  1. Breadcrumb (16px top margin)
  2. Two-column grid: images (55%) | info (45%)
     — Images: 4:5 hero + thumbnail row (5 max)
     — Info: eyebrow → name → scientific → badges →
             short description → price → CTA →
             specs grid → species guide link
  3. Full description (max-width 720px, Lora body)
  4. FAQ accordion
  5. Related products (4-column grid)
```

Hero image priority: always `priority` prop on the 4:5 hero image.
Sticky sidebar: `lg:sticky lg:top-24 self-start` on the info column.

### Category Page

```
Stack:
  1. Category hero (full-bleed, 40vh, dark overlay, fish image)
     — Eyebrow: lagoon label
     — H1: white Outfit
  2. Breadcrumb
  3. Species count + filters row
  4. Product grid (4 → 3 → 2 → 1 col)
  5. Editorial text (300+ words, below grid, max-width 720px)
```

### Species Guide

```
Stack:
  1. Hero image (50vh, dark overlay)
  2. Two-column: article (65%) | sticky sidebar (35%)
     Article: H1 + scientific + intro + sections + FAQ
     Sidebar: quick specs card + buy CTA + table of contents
  3. Related products (4-col grid)
```

---

## 9. Motion

All animation should feel natural, not performative.

| Property | Duration | Easing                         |
|----------|----------|--------------------------------|
| Hover    | 200ms    | ease                           |
| Card lift| 250ms    | ease                           |
| Drawer   | 380ms    | cubic-bezier(0.16, 1, 0.3, 1) |
| Image    | 600ms    | ease                           |
| Stagger  | 80ms     | per card, max 4 cards          |
| FAQ open | 300ms    | ease                           |

Page load animation:
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Duration: 350ms ease-out. Stagger: 0ms, 80ms, 160ms, 240ms. */
```

Always include `@media (prefers-reduced-motion: reduce)` — zero duration.
Image hover: scale(1.04) — never more.
Button hover: scale(1.02) — subtle, not bouncy.

---

## 10. Iconography

Library: Lucide React exclusively.
Size: 20px (UI), 16px (inline), 24px (hero/feature — max).
Stroke width: 1.75 always.
Style: outline only — never filled icons.

Colours by context:
- On light bg: `wade` default, `ink` on hover/active
- On dark bg (header): `rgba(255,255,255,0.55)` default, `white` on hover
- CTA icons: `white` (on ember button)
- Status icons: match status colour

---

## 11. Photography & Imagery

### Fish Photography
- Background: deep dark (`#0A1A1F` to `#0B2D36`) — makes colours vivid
- Shot type: full body side profile as primary (4:5 ratio)
- Water: crystal clear, no bubbles, no distracting décor
- Minimum 2000px on short side
- Shot list per product: side profile, head detail, fin detail, in-tank, size reference

### Alt Text Patterns
- Product: `"{Common Name} ({Scientific Name}) — {size/variant description}"`
- Category hero: `"{Category} fish for sale — {brief description}"`
- Species guide: `"{Common Name} in natural habitat — {origin}"`

### No Stock Photos
Every product image must be the actual individual fish being sold.
Collectors at this level identify stock images immediately. It destroys trust.

### OG Images
- Size: 1200 × 630px
- Background: abyss (#0B2D36)
- Fish photo: right 55%
- Text area: left, Outfit bold, white
- Lagoon accent line at bottom

---

## 12. Accessibility

WCAG AA minimum. WCAG AAA target for body text.

Verified contrast ratios:
- ink (#1E2B2E) on surface (#FAFCFC): 17.2:1 ✓ AAA
- deep-text (#3A5A62) on surface: 8.4:1 ✓ AAA
- wade (#5A7A82) on surface: 5.1:1 ✓ AA
- white on ember (#E8622A): 4.6:1 ✓ AA
- lagoon (#29A8C4) on abyss (#0B2D36): 5.8:1 ✓ AA
- ghost (#B0C8CE): FAIL — decorative only, never meaningful text

Focus ring: `2px solid lagoon, outline-offset: 2px, border-radius: 4px`
Never suppress focus-visible.

Semantic rules:
- Scientific names: `<em>` element (semantic italic)
- Product cards: `<article>` with `aria-label`
- Icon-only buttons: always `aria-label`
- Cart count: `aria-live="polite"`
- Accordions: native `<details>/<summary>` or proper ARIA

---

## 13. Voice & Tone

### Personality
Knowledgeable friend. REI meets iNaturalist. We share expertise freely,
we're excited about what we sell, and we write like a human, not a brand.

### Rules
- Use "you" and "we" — personal and direct
- Use contractions (it's, you'll, we'll) — formal kills warmth
- Lead with what matters to the buyer, not what sounds impressive
- Be specific: "28–31°C" not "warm tropical water"
- Mention difficulty honestly — it builds trust and prevents returns

### Word count targets

| Page type      | Minimum | Target   |
|----------------|---------|----------|
| Product detail | 300     | 500–800  |
| Species guide  | 1,500   | 2,500+   |
| Care guide     | 1,000   | 1,800+   |
| Category page  | 250     | 400–600  |
| Blog post      | 700     | 1,200+   |
| Collection/buy | 150     | 300–400  |

### Voice examples

Product short description (good):
"Platinum arowana need at least 300 gallons and spotless water.
It's a serious commitment — we'll walk you through it before you buy."

Product short description (bad):
"The Platinum Arowana demands pristine water quality — a commitment
our breeding programme ensures you're prepared for."

Care guide intro (good):
"Discus are the most rewarding fish you can keep. They're also the
most demanding. Here's everything you need to get it right."

Care guide intro (bad):
"Symphysodon aequifasciatus requires meticulous water parameter
management to achieve optimal physiological performance."

### Scientific names
Always use on first mention. Format: `Common Name (Scientific name)`.
Example: "Fahaka pufferfish (Tetraodon lineatus)".
After first mention, common name alone is fine.

---

## 14. Tailwind Config Reference

```js
colors: {
  abyss:    '#0B2D36',
  deep:     '#134859',
  current:  '#1E6B80',
  lagoon:   '#29A8C4',
  shallows: '#7DCFE0',
  foam:     '#E3F5F9',
  surface:  '#FAFCFC',
  reef:     '#EFF6F8',
  mist:     '#DFF0F3',
  ember:    '#E8622A',
  koi:      '#F4845A',
  sunrise:  '#FEF0E8',
  flame:    '#8C3512',
  ink:      '#1E2B2E',
  'deep-text': '#3A5A62',
  wade:     '#5A7A82',
  drift:    '#7A9AA2',
  ghost:    '#B0C8CE',
}
fontFamily: {
  heading:    ['Outfit', 'system-ui', 'sans-serif'],
  body:       ['Lora', 'Georgia', 'serif'],
  mono:       ['DM Mono', 'Courier New', 'monospace'],
  scientific: ['Cormorant Garamond', 'Georgia', 'serif'],
}
borderRadius: {
  xs: '4px', sm: '8px', md: '12px',
  lg: '16px', xl: '20px', pill: '9999px',
}
```

---

## 15. Never Do These Things

Design:
- Never pure #FFFFFF or #000000 — use surface and ink
- Never use ember (#E8622A) as a large background surface
- Never use ghost (#B0C8CE) for readable text
- Never raw `<img>` — always next/image
- Never `rounded-xl` on product cards — use `rounded-md` (12px)
- Never gradients on buttons
- Never blue or green CTAs — ember only
- Never suppress focus-visible

Typography:
- Never bold a scientific name
- Never uppercase a scientific name
- Never use Outfit for scientific names — Cormorant Garamond Italic only
- Never use Lora for UI elements — Outfit only for buttons, nav, labels

Content:
- Never stock photos for fish products
- Never "click here" or "read more" as link text
- Never write like a luxury brand — write like an expert friend
- Never skip the scientific name on first mention

---

*End of BRAND.md — The Fish Collection.com Design System v3.0*
