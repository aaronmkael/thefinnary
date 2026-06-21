#!/usr/bin/env node

/**
 * generate-all-images.mjs
 *
 * Unified image generation script for The Fish Collection.
 * Generates ALL missing images across 4 categories:
 *   - Products (3:4 portrait, 800×1000)
 *   - Species Guides (16:9 landscape, 1200×800)
 *   - Care Guides (16:9 landscape, 1200×675)
 *   - Blog Posts (16:9 landscape, 1200×675)
 *
 * Uses Google Gemini Imagen 4.0 API + sharp for post-processing.
 *
 * Usage:
 *   GEMINI_API_KEY=... node scripts/generate-all-images.mjs
 *   node scripts/generate-all-images.mjs              # reads from .env.local
 *   node scripts/generate-all-images.mjs --category products
 *   node scripts/generate-all-images.mjs --category care
 *   node scripts/generate-all-images.mjs --category blog
 *   node scripts/generate-all-images.mjs --category species
 *   node scripts/generate-all-images.mjs --force      # regenerate even existing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── CLI Args ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const categoryFilter = args.find((_, i, a) => a[i - 1] === '--category') || null;

// ─── API Key ─────────────────────────────────────────────────────────────────
let API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  try {
    const envFile = fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8');
    const match = envFile.match(/GEMINI_API_KEY=(.+)/);
    if (match) API_KEY = match[1].trim();
  } catch {}
}
if (!API_KEY) {
  console.error('Missing GEMINI_API_KEY — set it in .env.local or as an env var');
  process.exit(1);
}

// ─── Output directories ─────────────────────────────────────────────────────
const DIRS = {
  products: path.join(ROOT, 'public', 'images', 'products'),
  care: path.join(ROOT, 'public', 'images', 'care'),
  blog: path.join(ROOT, 'public', 'images', 'blog'),
  species: path.join(ROOT, 'public', 'images', 'species'),
};
for (const dir of Object.values(DIRS)) {
  fs.mkdirSync(dir, { recursive: true });
}

// ─── Target dimensions per category ──────────────────────────────────────────
const DIMENSIONS = {
  products: { width: 800, height: 1000 },
  care: { width: 1200, height: 675 },
  blog: { width: 1200, height: 675 },
  species: { width: 1200, height: 800 },
};

const ASPECT_RATIOS = {
  products: '3:4',
  care: '16:9',
  blog: '16:9',
  species: '16:9',
};

// ═════════════════════════════════════════════════════════════════════════════
// DATA EXTRACTION — Parse TypeScript files with regex
// ═════════════════════════════════════════════════════════════════════════════

function readTSFile(filename) {
  return fs.readFileSync(path.join(ROOT, 'lib', 'data', filename), 'utf8');
}

function extractProducts() {
  const src = readTSFile('products.ts');
  const products = [];
  const re = /commonName:\s*'([^']+)'[\s\S]*?scientificName:\s*'([^']+)'[\s\S]*?slug:\s*'([^']+)'[\s\S]*?url:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(src))) {
    products.push({
      commonName: m[1],
      scientificName: m[2],
      slug: m[3],
      imageUrl: m[4],
    });
  }
  return products;
}

function extractArticles(filename, imageDir) {
  const src = readTSFile(filename);
  const articles = [];
  // Match title, slug, heroImage, and optionally scientificName
  const blocks = src.split(/(?=\{[\s\n]+title:)/);
  for (const block of blocks) {
    const titleMatch = block.match(/title:\s*'([^']+)'/);
    const slugMatch = block.match(/slug:\s*'([^']+)'/);
    const heroMatch = block.match(/heroImage:\s*'([^']+)'/);
    const sciMatch = block.match(/scientificName:\s*'([^']+)'/);
    if (titleMatch && slugMatch && heroMatch) {
      articles.push({
        title: titleMatch[1],
        slug: slugMatch[1],
        heroImage: heroMatch[1],
        scientificName: sciMatch ? sciMatch[1] : null,
      });
    }
  }
  return articles;
}

// ═════════════════════════════════════════════════════════════════════════════
// SPECIES DESCRIPTORS — Visual descriptions for anatomically correct renders
// ═════════════════════════════════════════════════════════════════════════════

const speciesDescriptors = {
  // ─── Original products (from generate-product-images.mjs) ─────────────────
  'platinum-arowana': 'Elongated torpedo-shaped body with large metallic silver-white scales arranged in precise rows. Long barbels extending from the lower jaw. Large upturned mouth. Dorsal and anal fins set far back near the tail. Pure platinum-white colouration with no yellow or gold tint — mirror-like iridescent sheen across every scale.',
  'gem-tang': 'Oval disc-shaped surgeonfish body (Zebrasoma body plan). Jet-black velvety body covered in bright white polka dots of varying sizes. Bright yellow tail fin contrasting sharply with the black body. Small terminal mouth. Sharp scalpel spine at the tail base.',
  'peppermint-angelfish': 'Small compact dwarf angelfish body, oval-shaped. Vivid alternating vertical bands of deep red-orange and crisp white. Five to six red-orange bands separated by white interspaces. Small mouth, large dark eye. Rounded dorsal and anal fins with red-orange edging.',
  'albino-alligator-gar': 'Very elongated cylindrical prehistoric body. Extremely long broad snout filled with rows of sharp teeth. Leucistic golden-white to pale cream colouration. Diamond-shaped ganoid scales visible along the body. Short rounded dorsal fin set far back near the heterocercal tail.',
  'dragon-goby': 'Very elongated eel-like body. Prominent bulging pale blue eyes on top of a blunt rounded head. Purple-grey to violet-brown body with iridescent blue-gold sheen. Long continuous dorsal fin running the full length of the back. Tiny pectoral fins. Large downturned mouth.',
  'fahaka-pufferfish': 'Robust torpedo-shaped pufferfish body. Golden-yellow to olive base colour with bold dark brown horizontal stripes running along the flanks. Large prominent round golden eye. Distinctive beak-like fused dental plates forming a parrot-like mouth. Short rounded fins. Rough sandpaper-like skin texture.',
  'flowerhorn-cichlid': 'Deep-bodied robust cichlid with a prominent large round nuchal hump (kok) protruding from the forehead. Vivid red-orange to crimson base body colour with scattered dark irregular lateral markings and spots. Thick lips. Long trailing extensions on dorsal and anal fins. Intense red eyes.',
  'wolf-fish': 'Powerful muscular elongated predatory body. Large broad head with strong protruding jaw and visible interlocking teeth. Olive-brown to dark mottled colouration with darker blotches. Intense golden-amber predatory eyes. Rounded caudal fin. Continuous dorsal fin along the back.',
  'red-tail-catfish': 'Massive broad-headed catfish with a flat wide mouth and three pairs of long barbels (whiskers). Dark brown-black upper body with a bold white horizontal band along the midline. Vivid orange-red tail fin and dorsal fin tip. Huge adipose fin. Smooth scaleless skin.',
  'piranha': 'Deep laterally compressed body with a pronounced convex forehead. Silver body with dark spots on the flanks. Powerful protruding lower jaw with visible razor-sharp interlocking triangular teeth. Dark reddish eye. Short strong caudal peduncle.',
  'red-bellied-piranha': 'Deep laterally compressed body. Silver-grey upper body transitioning to vivid orange-red belly and lower jaw. Powerful jutting lower jaw with razor-sharp triangular teeth visible. Red eye. Short strong caudal fin. Dark spots scattered on silver flanks.',
  'clarion-angelfish': 'Medium-sized marine angelfish with a tall oval body. Brilliant orange body with electric blue vertical stripes and highlights. Blue ring around the eye. Rounded dorsal and anal fins with blue edging. Bright orange to yellow tail fin.',
  'mbu-pufferfish': 'Massive rotund pufferfish body — the largest freshwater puffer. Complex intricate maze-like pattern of dark brown-green lines and golden-olive interspaces covering the entire body. Large intelligent round golden eyes. Fused beak-like dental plates. Thick rubbery skin.',
  'black-diamond-stingray': 'Perfectly circular flattened disc-shaped body — a freshwater stingray viewed from above at slight angle showing the disc shape. Jet-black body covered in bright white circular spots of uniform size arranged evenly. Long thin whip-like tail extending behind. Small eyes on top of disc.',
  'motoro-stingray': 'Circular flattened disc-shaped freshwater stingray. Brown to olive-tan base colour with concentric orange-ringed dark ocelli (eye spots) arranged across the disc. Cream-white underside visible at edges. Long thin tail. Small eyes protruding from top of disc.',
  'black-ghost-knife-fish': 'Distinctive elongated blade-shaped body that tapers to a point at the tail. Jet-black body with two white ring bands near the tail and a white blaze on the snout. Long continuous undulating anal fin running the entire underside. No dorsal fin. Flattened head.',
  'clown-knife-fish': 'Large elongated laterally compressed body with a distinctive humped back profile. Silver-grey body with a row of large black ocelli (eye spots) ringed in white along the lower flank. Long undulating anal fin. Sharply upturned small mouth. Small dorsal fin.',
  'clown-loach': 'Torpedo-shaped bottom-dwelling body with a pointed snout. Vivid orange to deep amber body with three bold black vertical wedge-shaped bands — one through the eye, one behind the head, one at the dorsal fin. Bright red-orange fins. Sub-inferior mouth with small barbels.',
  'zebra-loach': 'Small elongated body with a slightly compressed profile. Alternating vertical bands of golden-green and dark brown to black running across the entire body — creating a striking zebra-like pattern. Pointed snout with small barbels. Transparent to yellowish fins.',
  'zebra-pleco': 'Small armoured pleco with a flattened ventral profile. Bold alternating black and white zebra stripes running laterally across the entire body and all fins. Pronounced sucker mouth on the underside. Large sail-like dorsal fin with zebra pattern. Bony plate armor visible.',
  'royal-pleco': 'Large armoured catfish with a flattened ventral profile. Grey-green to olive body with bold dark horizontal wavy lines and vermiculations. Large sail-like dorsal fin. Prominent sucker mouth. Red-orange eyes. Heavy bony plate armour covering the body.',
  'denison-barb': 'Sleek torpedo-shaped schooling fish body. Silver body with a bold black horizontal stripe from snout to tail and a vivid red stripe above it running from snout to mid-body. Forked tail fin with black and yellow lobes. Green-olive back. Bright red marking on the dorsal fin base.',
  'tiger-barb': 'Small deep-bodied laterally compressed barb. Golden-amber body with four bold vertical black bands — at the head, two on the mid-body, and one at the tail base. Bright red-orange snout and fin edges. Forked tail. Large dark eye.',
  'tiger-oscar': 'Large robust oval-bodied cichlid. Dark brown-black base colour with bold irregular orange-red tiger-like mottled markings and patterns across the flanks and head. Prominent dark ocellus (eye spot) ringed in orange at the tail base. Large thick lips. Intense reddish eye.',
  'albino-oscar': 'Large robust oval-bodied cichlid — albino variant. Creamy white to pale peach base body colour with soft orange-red mottled patterns visible across the flanks. Red-pink eyes (albino trait). Same heavy body shape as a standard oscar. Prominent lips.',
  'platinum-white-betta': 'Elaborate flowing finnage — halfmoon or over-halfmoon tail spread. Pure opaque white to platinum-white body and fins. Extremely long flowing dorsal fin, caudal (tail) fin spread to 180 degrees, long ventral fins. Compact torpedo-shaped body beneath the massive finnage.',
  'galaxy-koi-betta': 'Elaborate flowing finnage — halfmoon or rosetail. Multicolour koi-pattern body with patches of vivid red, blue-black, and white/cream in irregular splotches like a koi fish. Galaxy iridescent blue-green scaling scattered across dark patches. Long flowing spread fins echoing the body colours.',
  'fire-eel': 'Very long sinuous eel-like body. Dark brown-black base colour with vivid red-orange to scarlet lateral stripe or series of dashes running along each flank. Pointed elongated snout with small tube-like nostrils. Continuous dorsal fin as small spines along the back.',
  'snowflake-moray-eel': 'Thick muscular serpentine eel body. White to cream base colour covered in a dense pattern of dark brown-black snowflake-like blotches and mottling creating a reticulated pattern. Prominent tubular nostrils. Large mouth with visible blunt teeth. Beady yellow eye.',
  'peacock-bass': 'Robust powerful elongated body with a large mouth — bass body plan. Green-gold to olive body with three dark vertical bars on the flanks. Prominent black ocellus (eye spot) with a gold ring on the tail base. Red-orange eye. Powerful forked caudal fin.',
  'australian-bass': 'Moderate-sized streamlined perch-like body. Silver-green to olive-bronze body with subtle darker horizontal scale rows. Large mouth. Distinct lateral line. Moderately forked tail. Soft golden-green iridescence on the gill covers.',
  'panther-grouper': 'Deep robust grouper body with a large head and wide mouth. White to cream base colour densely covered in round dark brown-black polka dots of varying sizes. Rounded tail fin and large pectoral fins — all spotted. Large upturned mouth.',
  'miniatus-grouper': 'Robust deep-bodied grouper. Vivid coral-red to orange-red base body colour covered in small bright blue spots arranged in lines across the entire body, head, and all fins. Large wide mouth. Rounded caudal fin. Bold intense colouration.',
  'blue-diamond-discus': 'Perfect disc-shaped laterally compressed body — the hallmark of discus. Brilliant solid metallic cobalt-blue colouration covering the entire body with minimal striping. Red eye. Short rounded fins flush with the body shape. Small terminal mouth.',
  'pigeon-blood-discus': 'Perfect disc-shaped body. Creamy white to peach base colour with irregular red-orange "pigeon blood" spotting and peppering scattered across the body and fins. Red eye. Some individuals show blue iridescent striation on the forehead.',
  'shovelnose-tiger-catfish': 'Long powerful streamlined catfish body with a dramatically flattened broad shovel-shaped snout. Dark grey to silver body with bold black tiger-like vertical bands or stripes. Three pairs of long trailing barbels. Deeply forked caudal fin. Smooth scaleless skin.',
  'irwini-catfish': 'Large powerful elongated catfish body. Dark grey to brownish body with lighter marbled pattern. Broad flat head with wide mouth. Long barbels. Forked tail fin with elongated filaments on the upper lobe. Smooth scaleless skin. Prominent adipose fin.',
  'marble-achara-catfish': 'Large elongated catfish with a broad flat head. Dark grey to black body with light grey to white irregular marble-like mottled patches and spots. Long trailing barbels. Deeply forked caudal fin. Prominent adipose fin. Wide terminal mouth.',
  'bumblebee-catfish': 'Small stocky catfish with a broad flat head. Bold alternating bands of dark brown-black and bright yellow creating a bumblebee pattern. Flat ventral profile. Wide mouth with small barbels. Short rounded fins with the same banding pattern.',
  'black-lancer-catfish': 'Elongated sleek catfish with a pointed snout. Jet-black to very dark brown uniform body colour. Distinctive tall dorsal fin with a long trailing filament (the lancer spine). Long barbels. Deeply forked tail. Smooth scaleless skin.',
  'grass-cutter-catfish': 'Robust deep-bodied silvery fish with a small sub-terminal mouth and fleshy lips. Silver body with subtle horizontal striping and a dark spot behind the gill cover. Forked tail fin with dark edges. Large prominent scales. Slightly humped profile.',
  'starry-night-cichlid': 'Robust oval-bodied cichlid. Jet-black body densely speckled with tiny bright golden-white spots across the entire body, head, and fins — resembling a starry night sky. Dark fins also spotted. Large prominent eye. Strong jaw.',
  'dovii-cichlid': 'Large powerful elongated cichlid with a massive jaw. Males: golden-green to yellow-gold body with scattered dark purple-blue spots and a dark lateral band. Bright blue lower jaw and head markings. Intense amber eye. Heavy muscular body.',
  'blue-zaire-frontosa': 'Deep-bodied robust cichlid with a prominent nuchal hump on the forehead (especially in males). White to powder-blue body with 6-7 bold black vertical bars. Blue iridescence on the scales between bars. Large prominent eye. Elongated trailing tips on dorsal and pelvic fins.',
  'macaw-cichlid': 'Elongated pike-like cichlid body (Crenicichla body plan). Vivid multicolour pattern — orange-red body with dark horizontal band, bright blue-green spotting on the head and gill covers. Long torpedo-shaped profile. Large mouth. Continuous dorsal fin along the back.',
  'turquoise-severum-cichlid': 'Large round-bodied disc-like cichlid. Turquoise-green to blue-green iridescent body with faint darker vertical bars. Warm amber-orange breast and belly. Gentle rounded head profile. Peacock-like iridescent scales on the flanks. Red eye.',
  'gold-severum-cichlid': 'Large round-bodied disc-like cichlid — golden morph. Bright golden-yellow to orange body colour with minimal or no barring. Warm amber eye. Gentle rounded profile. Slight green-gold iridescence on the scales. Peaceful expression.',
  'elephantnose-fish': 'Distinctive elongated body with a long curved trunk-like proboscis extending downward from the lower jaw. Dark chocolate-brown to black body with a lighter band between the dorsal and anal fins creating a two-toned look. Small beady eyes. Deeply forked tail.',
  'electric-eel': 'Very long cylindrical eel-like body (actually a knifefish). Dark olive-grey to brown body with lighter cream-orange throat and underside. Blunt rounded head with small eyes. Long continuous anal fin along the entire underside. No dorsal or pelvic fins.',
  'vampire-fish-payara': 'Powerful streamlined predatory body with an extremely pronounced lower jaw bearing two enormous fang-like teeth that protrude upward even when the mouth is closed. Silver body with darker back. Large intense eye. Forked powerful tail. Adipose fin present.',
  'freshwater-stingray': 'Circular flattened disc-shaped freshwater stingray. Brown to olive-tan body with orange-ringed dark ocelli (eye spots) arranged evenly across the disc — identical to Potamotrygon motoro pattern. Long thin whip-like tail. Eyes protruding from top of disc.',
  'tiger-loach': 'Elongated bottom-dwelling loach body. Bold alternating bands of bright orange-yellow and dark brown-black vertical bars running across the body, similar to tiger stripes. Pointed snout with small barbels. Sub-inferior mouth. Transparent to orange-tinted fins.',
  'lungfish': 'Extremely elongated eel-like body with a rounded head and small eyes. Olive-brown to grey-brown mottled body. Distinctive long thread-like paired pectoral and pelvic fins (limb-like). Continuous dorsal fin merging into the rounded caudal fin. Fleshy paired fins.',
  'golden-basslet': 'Tiny elongated basslet body. Brilliant golden-yellow colouration across the entire body and all fins — a uniform vivid gold. Small delicate proportions. Large eye relative to body. Slightly translucent golden fins. Small terminal mouth.',
  'roseline-barb': 'Sleek torpedo-shaped body — very similar to Denison barb (same species). Silver body with a bold black lateral stripe from snout to tail and a vivid red stripe running from the snout through the eye to mid-body. Green-olive back. Forked tail with black and yellow markings.',
  'albino-shark': 'Streamlined torpedo-shaped body with a distinctive shark-like triangular dorsal fin. Albino variant — pale cream to white body with red-pink eyes. Prominent upright dorsal fin. Forked tail. Sleek hydrodynamic body shape. Sub-terminal downturned mouth.',
  'bichir': 'Primitive elongated cylindrical body with thick armoured rhomboid (diamond) ganoid scales. Olive-green to brown body with darker mottled banding and intricate ornate patterning on each scale. Series of separate spiny dorsal finlets along the back. Fleshy pectoral fins. Rounded lobed tail.',
  'distichodus-sexfasciatus': 'Deep laterally compressed body with a small terminal mouth. Golden-orange to amber body with six bold black vertical bars spaced evenly along the flanks. Bright red fins — especially the caudal and anal fins. Large prominent scales.',
  'flagtail-prochilodus': 'Deep laterally compressed silvery body. Silver body with fine horizontal scale rows. Distinctive boldly patterned tail fin with alternating black and white horizontal stripes. Fleshy protrusible lips. Large prominent scales. Forked caudal fin.',
  'cobalt-blue-zebra': 'Small robust deep-bodied mbuna cichlid. Vivid solid cobalt-blue colouration across the entire body. Faint darker vertical bars visible. Multiple yellow-orange egg spots on the anal fin. Strong jaw. Compact powerful body typical of rock-dwelling cichlids.',
  'electric-blue-jack-dempsey': 'Medium robust cichlid body. Brilliant electric neon blue iridescent colouration covering the entire body — far brighter than standard Jack Dempsey. Scattered blue metallic spangles. Dark base visible beneath the blue. Prominent brow. Thick lips.',
  'short-body-albino-silver-arowana': 'Compact shortened arowana body — selectively bred short-body variant. Albino colouration — pure white to cream body with pink-red eyes. Large metallic scales. Long barbels from lower jaw. Upturned large mouth. Dorsal and anal fins set far back. Proportionally deeper body than standard arowana.',
  'golden-arowana': 'Elongated torpedo-shaped arowana body with large metallic scales. Rich deep gold to 24-karat golden colouration across every scale with intense metallic lustre. Long barbels extending from lower jaw. Large upturned mouth. Dorsal and anal fins set far back near the tail.',
  'red-arowana-blood-red': 'Elongated torpedo-shaped arowana body. Deep blood-red to crimson colouration across the scales, especially intense along the lower body and fins. Metallic sheen. Long barbels. Large upturned mouth. Red-tinted fins. Full-bodied metallic red scales.',
  'super-red-arowana': 'Elongated torpedo-shaped arowana body. Vivid intense super-red to cherry-red colouration saturating every scale. Maximum red intensity variant — redder than blood-red. Metallic fiery scales. Long barbels. Large upturned mouth. All fins tinted deep red.',
  'cobalt-blue-discus': 'Perfect disc-shaped laterally compressed body. Vivid cobalt blue metallic colouration with electric blue horizontal striations on the head and forehead. Faint darker vertical bars. Red eye. Small terminal mouth. Short rounded fins flush with body contour.',
  'wild-discus': 'Perfect disc-shaped body. Natural wild-type colouration — brown to olive-green base with prominent dark vertical bars and subtle blue-green iridescent horizontal striations on the head and body. Red eye. More earth-toned and muted than domestic varieties.',
  'red-turquoise-discus': 'Perfect disc-shaped body. Turquoise-blue base body colour with vivid red vermiculated (worm-like) patterns and striations covering the body and head. Red eye. Blue and red in striking contrast. Short rounded fins.',
  'golden-discus': 'Perfect disc-shaped body. Bright solid golden-yellow colouration across the entire body with minimal patterning. Clean warm gold. Red eye. Some subtle orange tint on the forehead. Short rounded fins. Clean luminous golden appearance.',
  'checkerboard-discus': 'Perfect disc-shaped body. Red-brown to orange base colour with a distinctive checkerboard or reticulated pattern of fine turquoise-blue lines creating a grid-like pattern across the body. Red eye. Blue striation pattern on the forehead.',
  'leopard-skin-discus': 'Perfect disc-shaped body. Cream to white base colour densely covered in red-orange to crimson spots of varying sizes creating a leopard-skin pattern across the entire body and fins. Red eye. Spotted pattern extends onto the head.',
  'white-butterfly-discus': 'Perfect disc-shaped body. Pure white to cream-white body — a nearly albino-white discus with minimal patterning. Translucent white fins with faint blue-white iridescence. Red eye visible. Delicate ethereal appearance. Clean white body.',
  'royal-blue-discus': 'Perfect disc-shaped body. Deep royal blue to sapphire-blue base colour with vivid electric blue horizontal striations across the head and forehead. Darker blue body with metallic sheen. Red eye. Intense saturated blue colouration.',
  'figure-eight-puffer-fish': 'Small rounded pufferfish body. Olive-green to dark green back with a distinctive pattern of golden-yellow lines forming figure-eight or circular markings on the upper body. White to cream belly. Large curious round dark eyes. Small beak-like mouth.',
  'cross-river-puffer': 'Medium robust pufferfish body. Olive to grey-green body with complex dark mottled marbling and barred pattern. Cream to white belly. Large round eyes set high on the head. Beak-like fused dental plates. Rough textured skin.',
  'avocado-puffer': 'Small teardrop-shaped pufferfish body. Olive-green to golden-green body colour — the "avocado" colour. White to cream belly. Small bright curious eyes. Tiny beak-like mouth. Smooth skin. Compact rounded body shape. Subtle darker mottling on the back.',
  'aba-aba-knife-fish': 'Very long elongated blade-shaped knifefish body — one of the largest knifefish. Dark grey to olive-brown uniform body colour. Long continuous dorsal fin running the entire length of the back (unlike other knifefish). No anal or caudal fin. Large mouth. Small eyes.',
  'brown-knife-fish': 'Elongated laterally compressed blade-shaped body. Uniform brown to dark chocolate-brown body colour. Long continuous anal fin along the underside. Small head with beady eyes. No dorsal fin visible. Tapered pointed tail. Ghost-like swimming posture.',
  'glass-knifefish': 'Elongated transparent to translucent body — partially see-through allowing internal organs to be faintly visible. Pale olive to yellowish-green translucent body. Long continuous anal fin. Small head. No dorsal fin. Subtle iridescent sheen.',
  'platinum-gar': 'Very elongated cylindrical body with the classic gar body plan. Platinum-white to silver-white colouration — a leucistic variant. Long narrow snout filled with teeth. Diamond-shaped ganoid scales. Short dorsal fin set far back near the tail. Heterocercal tail.',
  'arapaima': 'Massive elongated torpedo-shaped body — one of the largest freshwater fish in the world. Dark olive-green to grey upper body with distinctive red-orange coloured scale edges becoming more vivid near the tail. Mosaic-like large thick scales. Upturned mouth. Small head relative to massive body.',
  'snowball-pleco': 'Small armoured pleco with a flattened bottom profile. Dark brown to black body densely covered in bright white round spots — like snowballs. Prominent sucker mouth underneath. Bony armour plating. Sail-like dorsal fin also spotted. Orange-red eye ring.',
  'blue-panaque-pleco': 'Medium armoured pleco body. Blue-grey to slate-blue colouration with darker wavy horizontal lines. Large prominent sucker mouth with distinctive teeth for eating wood. Heavy bony plate armour. Sail-like dorsal fin. Blue-grey iridescent sheen.',
  'vampire-pleco': 'Medium armoured pleco. Dark grey to black body with bright white to yellowish spots scattered across the body and fins. Prominent sucker mouth with distinctive pointed teeth. Large sail-like dorsal fin with spotted pattern. Intense orange-red eye.',
  'three-beacon-pleco': 'Medium armoured pleco. Dark brown-black body with three distinctive bright white to yellow spots — one at the dorsal fin base, one on the upper tail base, and one on the tip of the dorsal fin (the three beacons). Spotted body pattern. Sucker mouth.',
  'longfin-albino-bristlenose-pleco': 'Small pleco with dramatically elongated flowing fins — longfin variant. Albino variant — golden-yellow to peach-orange body with pink-red eyes. Males have prominent bushy bristle-like tentacles on the snout. Long flowing dorsal, caudal and pectoral fins trailing behind.',
  'altum-angelfish': 'Very tall laterally compressed triangular body — the tallest of all angelfish species. Silver body with three bold dark vertical bands. Extremely tall dorsal and anal fins extending far above and below the body creating an imposing diamond silhouette. Long thread-like pelvic fins.',
  'starfire-red-angelfish': 'Tall laterally compressed triangular angelfish body. Vivid solid red to orange-red colouration covering the entire body — a selectively bred red variant. Long flowing dorsal and anal fins. Thread-like pelvic fin extensions. Intense solid red colour.',
  'angel-koi-fish': 'Tall laterally compressed triangular angelfish body. Koi-patterned colouration — irregular patches of orange-red, black, and white-gold creating a calico/koi pattern. Each fish uniquely marked. Long flowing fins. Thread-like pelvic fin extensions.',
  'neptune-grouper': 'Deep-bodied robust grouper. Vivid pink to rose-red body colour transitioning to bright yellow-orange on the belly — a striking bicolour pattern. Large wide mouth. Rounded fins. One of the rarest and most colourful deep-water groupers.',
  'bladefin-basslet': 'Tiny elongated deep-reef basslet. Orange-red body with a distinctive extremely tall blade-like dorsal fin spine extending upward — much taller than the body depth. Translucent fins with white edges. Large eye. Delicate small body with dramatic dorsal extension.',

  // ─── New products: Axolotls ───────────────────────────────────────────────
  'leucistic-axolotl': 'Plump aquatic salamander with a broad flat head and wide permanent smile. Leucistic variant — pale pinkish-white translucent body with visible pink blood vessels beneath the skin. Prominent feathery external gills (three pairs) in bright pink-red extending from behind the head. Four short stubby limbs with tiny digits. Long flat paddle-like tail. Large dark eyes.',
  'golden-albino-axolotl': 'Plump aquatic salamander with a broad flat head. Golden albino variant — bright golden-yellow to peach-orange body colour. Pink-red eyes (albino trait). Prominent feathery external gills in golden-pink colour. Four short stubby limbs. Long flat paddle-like tail. Translucent golden skin with visible gill filaments.',
  'gfp-leucistic-axolotl': 'Plump aquatic salamander with a broad flat head and wide smile. GFP (green fluorescent protein) leucistic variant — pale white body that glows vivid fluorescent green under blue/UV light. Show the axolotl with a subtle green fluorescent glow emanating from the body and gills. Feathery external gills. Dark eyes. Four stubby limbs.',
  'melanoid-axolotl': 'Plump aquatic salamander with a broad flat head. Melanoid variant — solid dark black to charcoal-grey body colour with no iridescent speckles. Dark eyes that blend with the body colour. Prominent feathery external gills in dark grey-black. Four short stubby limbs. Long dark paddle-like tail.',

  // ─── New products: Koi ────────────────────────────────────────────────────
  'kohaku-koi': 'Large robust deep-bodied ornamental carp. Kohaku pattern — pure snow-white base body colour with bold red (hi) patches arranged symmetrically on the head and body. Clean sharp edges between red and white. Large prominent scales. Two pairs of barbels. Rounded full body shape. Long flowing tail fin.',
  'sanke-koi': 'Large robust deep-bodied ornamental carp. Sanke (Taisho Sanshoku) pattern — white base body with red (hi) patches and small black (sumi) accents scattered on the body (not on the head). Three-colour pattern: white, red, black. Large scales visible. Two pairs of barbels. Flowing fins.',
  'showa-koi': 'Large robust deep-bodied ornamental carp. Showa (Showa Sanshoku) pattern — black base body with bold red (hi) and white (shiroji) patches creating a dramatic three-colour pattern. Black extends onto the head. Sumi wraps around the body. Large scales. Two pairs of barbels.',
  'butterfly-koi': 'Elegant elongated ornamental carp with dramatically long flowing fins — much longer than standard koi. Butterfly-like fin extensions trailing gracefully. Metallic multicolour body (gold, orange, white mix). Long flowing pectoral, pelvic, and caudal fins that billow like silk. Graceful swimming posture.',
  'platinum-ogon-koi': 'Large robust deep-bodied ornamental carp. Platinum Ogon variety — solid uniform metallic platinum-silver colouration across the entire body. Brilliant mirror-like metallic lustre on every scale. No other colours or markings — pure clean metallic white-silver. Two pairs of barbels. Full rounded body.',
  'tancho-koi': 'Large robust deep-bodied ornamental carp. Tancho pattern — pure snow-white body with a single perfectly circular red (hi) patch centred on the top of the head — resembling the Japanese flag. No other red markings on the body. Clean white body. Large scales. Two pairs of barbels.',

  // ─── New products: Goldfish ───────────────────────────────────────────────
  'ranchu-goldfish': 'Compact egg-shaped fancy goldfish with NO dorsal fin — distinctive smooth curved back profile. Prominent raspberry-like head growth (wen) covering the top of the head and cheeks. Deep red-orange to gold body colour. Short stubby double tail fin. Round plump body. Small downturned mouth. Distinctive wadding swimming style.',
  'oranda-goldfish': 'Deep-bodied egg-shaped fancy goldfish with a prominent large raspberry-like head growth (wen) covering the entire top of the head. Rich orange-red body colour with metallic sheen. Long flowing double tail fin. Small dorsal fin. Round plump body. Large eyes partially framed by the wen.',
  'thai-oranda-goldfish': 'Deep-bodied fancy goldfish — Thai-bred premium variant. Exceptionally large and well-developed wen (head growth) extending over the entire head. Brilliant red-orange to deep crimson body colour. Short compact body with an extremely full wen. Flowing double tail fin. Luxurious rounded proportions.',
  'lionhead-goldfish': 'Compact egg-shaped fancy goldfish with NO dorsal fin. Massive dense wen (head growth) covering the entire head, cheeks, and gill covers — creating a lion-like mane appearance. Red-orange to gold body colour. Short double tail fin. Round plump body. Eyes nearly hidden by the dense wen growth.',
  'ryukin-goldfish': 'Deep-bodied fancy goldfish with a distinctive high-arched back creating a pronounced hump behind the head. Pointed head with a small mouth. Vivid red and white (or solid red) colouration. Long flowing double or triple tail fin. Short compact body with deep belly. Dorsal fin tall and upright.',

  // ─── New products: Betta varieties ────────────────────────────────────────
  'galaxy-koi-plakat-betta': 'Short-finned plakat-style betta with a compact muscular body. Galaxy koi colouration — multicolour patches of vivid red, blue-black, and cream-white in irregular koi-like splotches. Iridescent galaxy blue-green scaling scattered across darker patches. SHORT fins (plakat, not longfin) — rounded caudal, short dorsal. Aggressive athletic body shape.',
  'samurai-betta': 'Plakat-style short-finned betta with a powerful compact body. Samurai colouration — dramatic metallic scaling with copper-gold to platinum dragon-scale body and contrasting dark (black/blue) head creating a helmet-like pattern. Short rounded fins. Intense metallic dragon-scale texture visible on each scale. Strong jaw.',
  'alien-betta': 'Wild-type hybrid betta with an elongated sleek body — NOT the typical Betta splendens shape. Iridescent green-blue to teal metallic sheen covering the body and gill covers. Short natural fins. Elongated body more like a wild Betta species. Intense iridescent scaling. Smaller head relative to body.',
  'giant-betta': 'Oversized betta fish — approximately 2-3 times the size of a standard Betta splendens. Robust heavy body. Can be any colour — shown in deep royal blue with red wash. Moderate-length fins proportional to the larger body. Powerful jaw. Impressive size distinguishes it from standard bettas.',
  'crowntail-betta': 'Distinctive betta with dramatically spiked fin rays — the webbing between fin rays is reduced, creating a crown-like or spiky appearance. Deep rich colour (dark blue to red). Caudal fin rays extend well beyond the webbing like a crown or comb. Spiky dorsal and anal fins. Compact torpedo body.',
  'dumbo-ear-betta': 'Distinctive betta with enormously oversized pectoral fins that extend outward like large elephant ears or wings. Pectoral fins are 2-3x normal size, often brightly coloured or multicoloured. Body colour varies — shown in pastel blue-white with colourful oversized pectoral fins. Long flowing caudal and dorsal fins complement the signature large "ear" fins.',

  // ─── Additional descriptors for species guides not matching product slugs ──
  'discus-fish': 'Perfect disc-shaped laterally compressed body — the classic discus shape. Shown as a group of multiple discus varieties swimming together — blue, red, turquoise. Warm amber tones. Red eyes. Gentle peaceful expression. Short rounded fins flush with the body contour.',
  'axolotl': 'Plump aquatic salamander (neotenic, retains larval features). Broad flat head with wide mouth in a permanent smile. Prominent feathery external gills (three pairs) extending from behind the head. Leucistic variant — pale pinkish-white body. Four short stubby limbs with tiny digits. Long flat paddle-like tail. Large dark eyes.',
  'koi-fish': 'Group of ornamental koi carp swimming together showing variety of patterns — Kohaku (red-white), Sanke (red-white-black), Showa (black-red-white). Large robust deep-bodied carp with prominent scales. Two pairs of barbels. Flowing fins. Viewed from slightly above in clear pond water.',
  'betta-fish': 'Magnificent halfmoon betta with full 180-degree tail spread. Deep rich royal blue body with red wash on fins. Elaborate flowing finnage — long dorsal fin, massive spread caudal tail, long ventral fins. Compact torpedo-shaped body beneath the stunning finnage. Intense colours.',
  'galaxy-koi-betta': 'Elaborate flowing finnage — halfmoon or rosetail. Multicolour koi-pattern body with patches of vivid red, blue-black, and white/cream in irregular splotches. Galaxy iridescent blue-green scaling scattered across dark patches. Long flowing spread fins echoing the body colours.',
  'ranchu-goldfish': 'Compact egg-shaped fancy goldfish with NO dorsal fin — smooth curved back. Prominent raspberry-like head growth (wen). Deep red-orange to gold body. Short double tail fin. Round plump body.',
  'kohaku-koi': 'Large ornamental carp. Kohaku pattern — pure snow-white base with bold red (hi) patches. Clean edges between red and white. Swimming in a serene pond environment.',
  'alligator-gar': 'Enormous prehistoric freshwater fish with a very broad, flattened alligator-like snout bearing double rows of conical teeth. Elongated cylindrical body covered in thick diamond-shaped ganoid scales. Olive-brown to dark green colouration fading to lighter belly. Short rounded dorsal fin set far back near the heterocercal tail. Massive powerful build.',
};

// ═════════════════════════════════════════════════════════════════════════════
// CARE GUIDE SCENE DESCRIPTIONS
// ═════════════════════════════════════════════════════════════════════════════

const careGuideScenes = {
  'arowana-tank-setup': 'A professional 300-gallon arowana aquarium setup — long rectangular tank with a sump filtration system visible below, subdued LED lighting, minimal hardscape with a single piece of driftwood, dark bare bottom, and a secure weighted lid. A magnificent arowana patrols the surface of the crystal-clear water.',
  'pufferfish-diet-feeding': 'A Fahaka pufferfish enthusiastically crunching a snail shell with its powerful beak-like mouth inside a well-maintained aquarium. Nearby on a small feeding dish are diced prawns and a clam. Clear water, sandy substrate, minimal decoration.',
  'cichlid-water-parameters': 'A vibrant African cichlid aquarium filled with colourful Malawi mbuna cichlids — cobalt blue zebras, yellow labs, and red zebras — swimming among stacked limestone rocks. A digital thermometer and pH monitor are subtly visible. Crystal-clear water with bright lighting.',
  'stingray-tank-setup': 'A large shallow freshwater stingray aquarium viewed from above. A Motoro stingray rests on fine sand substrate. The tank has smooth river pebble edges, a powerful canister filter outlet, and warm ambient lighting. Wide footprint tank with plenty of swimming room.',
  'discus-water-parameters': 'A planted discus aquarium with soft, tannin-tinted amber water. Several discus fish in blue and red varieties swim gracefully among Amazon sword plants and driftwood. A temperature display reads 28°C. Gentle water movement. Warm subdued lighting.',
  'pleco-care-guide': 'A Zebra Pleco clinging to a piece of natural driftwood inside a dimly lit aquarium with smooth river stones and a sand substrate. Small cave openings visible. Gentle water current from a spray bar. Nocturnal aquarium atmosphere.',
  'betta-tank-setup': 'A beautifully aquascaped 10-gallon betta tank with live plants — java fern, anubias, floating salvinia. A single stunning halfmoon betta in deep blue-red swims among the plants. Small gentle sponge filter. Warm LED lighting. No sharp decorations.',
  'predatory-fish-feeding-guide': 'A feeding scene showing a large predatory fish (red-tail catfish or arowana) striking at a market prawn being offered with feeding tongs in a clean aquarium. Other prepared foods visible: pellets in a dish, frozen silversides thawing in a cup. Professional aquarium setting.',
  'platinum-arowana-water-parameters': 'Close-up of an arowana aquarium\'s water testing station — an API Master Test Kit with test tubes showing ideal colours for pH (6.5), ammonia (0), nitrite (0), and nitrate (low yellow). In the blurred background, a Platinum Arowana swims in pristine clear water.',
  'platinum-arowana-feeding-guide': 'A Platinum Arowana lunging at a gut-loaded cricket at the water surface. The fish is captured mid-strike with its large mouth open. Nearby floating on the surface are high-quality arowana pellets. Clean aquarium with dark background.',
  'discus-fish-tank-size': 'A comparison showing a small 30-gallon tank with cramped discus (looking stressed) next to a large 75-gallon tank with healthy, vibrant discus swimming freely. The larger tank has proper planted aquascape with warm lighting. Educational visual showing why tank size matters.',
  'discus-fish-tank-mates': 'A harmonious community aquarium featuring discus fish swimming alongside compatible tank mates — cardinal tetras schooling in the midground, corydoras catfish on the sandy bottom, and a bristlenose pleco on driftwood. Lush planted aquarium with warm lighting.',
  'discus-fish-feeding-guide': 'Discus fish eagerly feeding on homemade beefheart mix at a feeding station inside a planted aquarium. The food is offered on a small dish. Clear water, healthy bright discus in various colour varieties. Some frozen bloodworms visible nearby.',
  'discus-fish-breeding-guide': 'A bonded pair of discus fish guarding their eggs on a vertical breeding cone inside an aquarium. Tiny discus fry visible clinging to the parents\' flanks, feeding on parental mucus. Intimate close-up scene with warm lighting. The parent fish display protective posture.',
  'wolf-fish-care-guide': 'A powerful wolf fish (Hoplias malabaricus) in a dimly lit predator aquarium with large driftwood and subdued lighting. The fish displays its characteristic large head and visible teeth. Dark sandy substrate. Robust filtration visible. Moody atmospheric lighting.',
  'fahaka-pufferfish-care-guide': 'A Fahaka pufferfish in a spacious species-only aquarium with sand substrate. The puffer displays its golden-striped body and intelligent round eyes. A snail shell (recently crunched) sits on the sand. Clean minimal setup appropriate for an aggressive pufferfish.',
  'mbu-pufferfish-care-guide': 'A massive MBU pufferfish — the largest freshwater puffer — in an enormous aquarium. The fish displays its intricate maze-like body pattern. Large tank visible (200+ gallon feel). Sandy substrate with a few smooth rocks. Powerful filtration outlet visible. The sheer size of the fish is the focal point.',
  'flowerhorn-cichlid-care-guide': 'A prize-quality Flowerhorn cichlid with a massive nuchal hump (kok) and vivid red-orange body in a clean, brightly lit aquarium. Bare bottom tank for easy maintenance. The fish faces the viewer, displaying its impressive head growth and metallic scaling. Vibrant colours.',
  'red-tail-catfish-care-guide': 'A Red-tail catfish resting on the bottom of a very large aquarium. Its distinctive white lateral stripe and vivid orange-red tail are prominent. Massive fish in a massive tank (300+ gallon feel). Minimal decoration. Powerful filtration system visible. Long whisker-like barbels extended.',
  'dragon-goby-care-guide': 'A Dragon Goby hovering in a brackish aquarium setup — slightly murky water with salt-tolerant plants (java fern). The goby displays its purple-blue iridescent body and characteristic bulging blue eyes. Sandy substrate. Brackish water feel with subtle marine salt presence.',
  'axolotl-tank-setup': 'A beautiful axolotl tank setup — cool-water aquarium with fine sand substrate, live aquatic plants (java moss, marimo balls), terracotta hides, and a gentle sponge filter. A leucistic axolotl with pink feathery gills rests on the sandy bottom. Cool blue-white lighting. No heater visible — cold water setup.',
  'axolotl-feeding-guide': 'A leucistic axolotl eating a nightcrawler worm, captured mid-gulp with its mouth wide open. The worm dangles from the axolotl\'s mouth. Nearby on the sand substrate are other food options: blackworms, frozen bloodworms in a dish, and sinking pellets. Clean cold-water aquarium.',
  'koi-pond-setup': 'An aerial view of a beautifully designed koi pond under construction transitioning to a finished pond. One half shows the excavation with liner and plumbing being installed. The other half shows the completed pond with clear water, koi fish swimming, aquatic marginal plants, and a small waterfall feature. Japanese garden aesthetic.',
  'betta-complete-care-guide': 'A stunning gallery-style display of a single betta fish in a properly maintained planted aquarium. The betta — a vivid halfmoon in deep blue and red — swims among java fern and floating plants. Warm lighting. Small heater and sponge filter visible. The perfect betta habitat.',
  'ich-treatment-guide': 'A tropical fish (an angelfish or gourami) displaying visible white spot disease (ich) — small white cyst-like dots scattered across the body and fins. The fish is in a hospital/quarantine tank with clear water, an air stone bubbling, and a small heater set to 30°C. A bottle of ich medication nearby.',
  'fin-rot-treatment-guide': 'A betta fish with visible fin rot — the edges of the caudal and dorsal fins are ragged, discoloured, and deteriorating with dark edges. The fish is in a clean hospital tank with an air stone. Nearby are aquarium salt, clean water for changes, and antibacterial medication. Diagnostic close-up feel.',
  'fish-quarantine-guide': 'A simple quarantine tank setup — a bare-bottom 20-gallon aquarium with a sponge filter, a small heater, an air stone, and a PVC pipe for hiding. A newly arrived fish (a colourful cichlid in a bag) is floating in the tank for temperature acclimation. Clean clinical setup.',
  'aquarium-parasite-treatment': 'Microscope-view style close-up of fish parasites — gill flukes and anchor worms visible on a fish\'s body. Split view: one side showing the parasites, other side showing treatment setup with medication bottles (praziquantel, potassium permanganate). Clinical educational feel.',
  'fish-disease-prevention': 'A pristine, healthy community aquarium representing the gold standard of disease prevention. Crystal-clear water, vibrant healthy fish with perfect fins, lush live plants, clean glass, and visible maintenance equipment (gravel vacuum, water change bucket) nearby. The image of a well-maintained tank.',
  'nitrogen-cycle-guide': 'Cross-section diagram-style view of an established aquarium showing the nitrogen cycle — beneficial bacteria colonies visualised on filter media and substrate. Arrows showing ammonia to nitrite to nitrate flow. Clear water with a few healthy tropical fish and live plants. Educational scientific illustration style.',
  'water-testing-guide': 'A flat-lay arrangement of aquarium water testing equipment — an API Master Test Kit open with colour-matched test tubes, a TDS meter, a digital pH pen, a refractometer, and a notebook with recorded parameters. Clean white background with a few aquarium plants for colour.',
  'water-chemistry-guide': 'An artistic representation of water chemistry — beakers and test tubes with different coloured water samples (yellow for pH, blue for GH, pink for KH). Chemical formulas subtly visible. An aquarium in the background with healthy fish. Science-meets-aquarium aesthetic.',
  'arowana-tank-mates': 'A large community predator aquarium featuring an Arowana swimming at the surface with compatible tank mates: a large Bichir resting on the bottom, a Plecostomus on driftwood, and a Silver Dollar school in the mid-water. Peaceful coexistence in a spacious 300+ gallon tank.',
  'cichlid-tank-mates': 'A vibrant African cichlid community aquarium with multiple compatible species swimming among rock formations — different-coloured mbuna cichlids (blue, yellow, orange) sharing territory. Stacked limestone rocks creating caves and territories. Bright lighting. Active lively scene.',
  'betta-tank-mates': 'A planted community aquarium with a betta fish peacefully coexisting with compatible tank mates — a school of ember tetras, a few corydoras catfish on the bottom, and nerite snails on the glass. Lush planted environment. Warm lighting. Peaceful harmonious scene.',
  'pufferfish-tank-mates': 'A brackish community aquarium featuring a Figure Eight puffer with compatible tank mates — bumblebee gobies, mollies, and a few nerite snails. Brackish-appropriate plants (java fern). Sandy substrate. The puffer is curious but not aggressive. Peaceful scene.',
  'aquarium-filter-guide': 'A comparison display of different aquarium filter types arranged side by side — a hang-on-back filter, a canister filter (open showing media trays), a sponge filter with air pump, and a sump system. Each filter is clean and clearly visible. Educational product-style arrangement.',
  'aquarium-heater-guide': 'A comparison of aquarium heater types — a submersible glass heater, a titanium inline heater connected to tubing, and a thermostat controller with temperature probe. Arranged near a beautiful aquarium. Digital thermometer showing 26°C. Educational equipment display.',
  'aquarium-lighting-guide': 'An aquarium shown under three different lighting conditions in a triptych format: cool white daylight, warm planted-tank spectrum with rich greens, and blue moonlight mode. The same aquarium and fish visible under each light. Demonstrates how lighting transforms an aquarium.',
  'arowana-breeding-guide': 'A pair of Asian Arowana in a large breeding pond or tank. The male is performing a mouthbrooding display with a subtly enlarged throat pouch. The female is nearby. Eggs or early-stage fry visible in the male\'s mouth. Intimate breeding scene. Warm subdued lighting.',
  'betta-breeding-guide': 'A male betta fish building a bubble nest at the water surface — a cluster of tiny bubbles formed into a raft under a floating leaf. The female betta is visible in a separate container/chimney nearby. Shallow warm water. Intimate breeding setup. Romantic warm lighting.',
  'axolotl-breeding-guide': 'A pair of axolotls during courtship — the male depositing a spermatophore on a flat stone while the female follows behind. Tiny axolotl eggs visible on aquatic plants and mesh. Cool water. Gentle lighting. Reproductive scene showing the unique amphibian breeding process.',
  'koi-breeding-guide': 'Koi fish spawning in a shallow pond area — a female koi releasing eggs while males follow closely. Spawning mops or aquatic plants are covered in small translucent koi eggs. Dawn lighting over a pond. Active splashing movement captured. Natural breeding scene.',
  'fish-acclimation-guide': 'The drip acclimation method shown step by step — a fish in a bag floating in an aquarium (temperature matching), then the bag open with a drip line running from the tank into a bucket containing the fish and mixed water. Clean setup with an airline tube used as a drip line. Educational step-by-step feel.',
  'oscar-care-guide': 'A healthy Tiger Oscar in a spacious 125-gallon aquarium with minimal heavy décor — large river rocks, a single piece of driftwood. Sandy substrate. The Oscar displays vibrant orange-and-black colouration. Powerful canister filter visible. Warm lighting.',
  'goldfish-care-guide': 'A beautiful group of fancy goldfish — Orandas, Ranchu, and Ryukin — swimming in a well-maintained cold-water aquarium with live plants (anubias, java fern) and a sand substrate. Cool white-blue lighting. Clean water. No heater visible. Gentle sponge filter.',
  'koi-care-guide': 'An aerial view of a crystal-clear koi pond with several varieties of koi — Kohaku, Sanke, Showa, and Ogon — swimming in formation. Aquatic marginal plants border the edges. A biological filter waterfall is visible. Japanese garden aesthetic. Serene morning light.',
  'piranha-care-guide': 'A school of Red-Bellied Piranhas in a large aquarium with driftwood, dim lighting, and leaf-litter substrate mimicking an Amazonian blackwater habitat. The piranhas display their distinctive red bellies and silver bodies. Tannin-stained amber water. Powerful filtration visible.',
  'gar-care-guide': 'A Florida Gar or Spotted Gar hovering near the surface of a large aquarium. The fish displays its elongated snout and diamond-shaped ganoid scales. The tank has a secure weighted lid, moderate current, and minimal décor. The gar is poised to gulp air at the surface.',
  'eel-care-guide': 'A Fire Eel partially buried in sandy substrate with its distinctive red-orange lateral stripes visible. The aquarium has smooth driftwood, dim lighting, and a secure lid. The eel\'s pointed snout protrudes from the sand. Nocturnal moody atmosphere.',
  'barb-care-guide': 'A vibrant school of Denison Barbs (Roseline Sharks) swimming in formation through a planted aquarium with moderate current from a canister spray bar. The fish display their bold red-and-black lateral stripes. Well-planted tank with Vallisneria and rocks. Bright clean lighting.',
  'loach-care-guide': 'A group of Clown Loaches and Tiger Loaches in a spacious planted aquarium with sandy substrate and plenty of caves. The loaches display their distinctive banded patterns — orange and black. Some are investigating caves, others schooling mid-water. Warm subtropical lighting.',
  'tang-care-guide': 'A Gem Tang (Zebrasoma gemmatum) swimming in a pristine reef aquarium. The tang\'s jet-black body with white polka dots and bright yellow tail is striking against a backdrop of colourful coral. Crystal-clear marine water. Professional reef lighting.',
  'stingray-care-guide': 'A freshwater Motoro stingray gliding over fine sand in a large, wide aquarium. The ray\'s beautiful eye-spot pattern is visible from above. Wide shallow tank setup with smooth edges. Powerful filtration outlet visible. Warm overhead lighting illuminating the ray\'s disc.',
  'knife-fish-care-guide': 'A Black Ghost Knife Fish hovering inside a clear acrylic tube in a planted aquarium with dim lighting. The jet-black fish with white tail bands is partially visible inside its hiding tube. Sandy substrate, driftwood, and low-light plants. Nocturnal atmosphere.',
  'oscar-tank-mates': 'A successful Oscar community tank — a Tiger Oscar sharing space with a Sailfin Pleco, a school of Silver Dollars, and a Severum Cichlid. Large 180-gallon tank with minimal heavy décor. All fish healthy and coexisting. Warm lighting.',
  'goldfish-tank-mates': 'A peaceful goldfish community aquarium with Orandas, Ranchu, and Ryukin goldfish swimming together. All similarly sized and paced. Cold-water planted tank with Anubias and Java Fern on driftwood. Smooth sand substrate. Gentle sponge filtration.',
  'grouper-care-guide': 'A Panther Grouper (Cromileptes altivelis) in a large marine aquarium with rock formations and cave structures. The grouper displays its white body with bold black polka dots. FOWLR setup with protein skimmer visible. Marine blue lighting.',
};

// ═════════════════════════════════════════════════════════════════════════════
// BLOG POST SCENE DESCRIPTIONS
// ═════════════════════════════════════════════════════════════════════════════

const blogPostScenes = {
  'most-expensive-fish-world': 'A dramatic collection of the world\'s most expensive aquarium fish arranged in a gallery-like display — a Platinum Arowana swimming centre stage, flanked by a Peppermint Angelfish, a Bladefin Basslet, and a Black Diamond Stingray. Dark moody background with spotlight lighting on each fish. Museum-quality presentation.',
  'exotic-fish-tank-setup': 'A stunning exotic fish aquarium being set up — mid-construction view showing a large modern rimless tank on a sleek cabinet stand, with filtration plumbing being connected, substrate being added, and professional LED lighting being mounted. Tools and equipment arranged nearby. Aspirational aquascaping scene.',
  'arowana-care-guide': 'A majestic Asian Arowana (golden variety) swimming in a pristine aquarium, photographed from a slightly low angle to emphasise its dragon-like presence. The fish\'s metallic golden scales shimmer under carefully placed LED lighting. Dark background. Single specimen, museum-quality presentation.',
  'best-exotic-fish-beginners': 'A colourful array of beginner-friendly exotic fish arranged in a vibrant community aquarium — Clown Loaches, Tiger Barbs, Denison Barbs, and a Bristlenose Pleco all swimming in a lush planted tank. Bright cheerful lighting. Welcoming, accessible feel. Variety of colours and shapes.',
  'arowana-cost-pricing-guide': 'An artistic representation of arowana pricing — three arowana varieties arranged left to right: a Silver Arowana (modest tank), a Super Red Arowana (premium tank), and a Platinum Arowana (museum-grade tank). Each fish\'s relative size and tank quality increases. Price tag aesthetic.',
  'freshwater-stingray-care-guide': 'A Black Diamond stingray gliding gracefully over fine sand substrate in a large, shallow aquarium. The stingray\'s jet-black disc with perfect white polka dots is the focal point. Warm ambient lighting from above. Clean minimal aquarium. Wide landscape composition.',
  'rare-fish-legal-to-own-us': 'A dramatic montage of rare but legally ownable fish in the US — a Zebra Pleco, a Clarion Angelfish, a Flowerhorn Cichlid, and a Black Diamond Stingray — arranged in a collector\'s gallery format. Each fish in its own spotlight. American flag colours subtly in the background. Legal/official aesthetic.',
  'most-colorful-freshwater-fish': 'An explosion of colour — the most vibrant freshwater aquarium fish arranged together: neon tetras, discus, bettas, killifish, and GloFish in an iridescent rainbow arrangement. Painted with vivid saturated colours against a dark background. Celebratory, eye-catching composition.',
  'most-expensive-aquarium-fish-world': 'A luxurious private aquarium room featuring a massive wall-mounted tank with a Platinum Arowana as the centrepiece. Expensive modern furniture, mood lighting, and the aquarium glowing as living art. High-end collector lifestyle. Aspirational and exclusive atmosphere.',
  'rarest-fish-aquarium-hobby': 'A mysterious deep-reef scene showing several of the rarest aquarium fish — a Peppermint Angelfish, a Neptune Grouper, and a Golden Basslet — emerging from dark deep-water coral formations. Dramatic lighting from above suggesting depth. Rare and precious atmosphere.',
  'platinum-arowana-price-guide': 'A Platinum Arowana swimming in a premium aquarium, shot from a dramatic angle. The fish\'s mirror-like platinum scales reflect light spectacularly. Subtle price tag or auction gavel imagery in the composition. Luxury collector aesthetic. Dark moody lighting with dramatic highlights on the fish.',
  'discus-fish-beginners-guide': 'A welcoming planted aquarium with a small group of colourful discus fish — blue, red, and pigeon blood varieties — swimming peacefully. Lush aquatic plants, warm lighting, and clear water. Approachable and beautiful. Beginner-friendly atmosphere — not intimidating.',
  'wolf-fish-complete-guide': 'A powerful wolf fish (Hoplias malabaricus) photographed head-on showing its impressive jaw and teeth. Dark moody aquarium with driftwood. The fish\'s amber predatory eyes stare directly at the viewer. Dramatic low-key lighting. Powerful and commanding presence.',
  'exotic-fish-for-sale-guide': 'A stylised online shopping scene for exotic fish — a laptop or tablet screen showing fish listings, with actual live fish in bags and insulated shipping boxes nearby. Professional aquatics shipping setup with oxygen-injected bags, heat packs, and insulated containers. E-commerce meets aquarium.',
  'best-large-freshwater-fish-aquarium': 'A massive predator community aquarium featuring an impressive collection of large freshwater fish — an Arowana at the surface, an Arapaima in mid-water, a Red-tail Catfish on the bottom, and a large Oscar. Enormous tank with minimal decoration. Showcase of impressive large-bodied fish.',
  'flowerhorn-cichlid-guide': 'A competition-grade Flowerhorn cichlid displayed in a show tank — the fish has a massive nuchal hump, vivid red body, and metallic pearling across the flanks. Front-facing view showing the impressive kok. Clean blue background typical of competition photography. Show-quality presentation.',
  'fahaka-pufferfish-complete-guide': 'A Fahaka pufferfish swimming in a spacious aquarium, its golden-striped body and intelligent eyes prominently displayed. The puffer is slightly inflated, showing its characteristic rounded shape. Sandy substrate with a cracked snail shell nearby. Warm lighting. Personality-filled portrait.',
  'gem-tang-ultimate-guide': 'A Gem Tang (Zebrasoma gemmatum) swimming in a pristine reef aquarium. Its jet-black body covered in white polka dots and bright yellow tail are strikingly visible. Colourful coral reef background. Crystal-clear water with perfect lighting. One of the ocean\'s most beautiful fish.',
  'types-of-catfish': 'A diverse collection of catfish species arranged in an aquarium setting — a Zebra Pleco, a Red-tail Catfish, a Corydoras, a Bristlenose Pleco, and a Bumblebee Catfish. Each species at its natural position (plecos on wood, corydoras on sand, etc.). Educational variety display.',
  'types-of-cichlids': 'A stunning array of cichlid diversity — Malawi mbuna, a Flowerhorn, an Oscar, a Discus, an Angelfish, and a Frontosa arranged in a visual mosaic or grid layout. Each fish in its own lighting. Showcases the incredible variety within the cichlid family. Colourful educational display.',
  'common-fish-diseases-treatment': 'A diagnostic reference image showing common fish diseases — a split view with a healthy vibrant fish on one side and a fish showing disease symptoms (white spots, fin rot, cloudy eye) on the other. Medical/clinical feel with a subtle red cross or health symbol. Educational diagnostic image.',
  'best-tank-mates-exotic-fish': 'A harmonious large community aquarium showing exotic fish living together peacefully — an Arowana at the surface, a school of Silver Dollars in the mid-water, a Bichir on the bottom, and a Pleco on driftwood. Peaceful coexistence. Large spacious tank with warm lighting.',
  'best-aquarium-equipment-guide': 'A flat-lay or product display of essential aquarium equipment — a canister filter, LED light bar, heater, test kit, gravel vacuum, fish net, water conditioner bottle, and thermometer — all arranged neatly on a clean surface. Equipment catalogue aesthetic. Professional and organised.',
  'oscar-vs-flowerhorn': 'A Tiger Oscar cichlid and a Flowerhorn cichlid facing each other from opposite sides of the frame, separated by a subtle dividing line of light. Both fish shown at similar scale. The Oscar displays its tiger markings; the Flowerhorn shows its massive kok and red colouration. Versus/comparison layout.',
  'discus-vs-angelfish': 'A Blue Diamond Discus and an Altum Angelfish facing each other from opposite sides. The discus shows its perfect disc shape and cobalt colouration; the angelfish displays its dramatic tall triangular silhouette. Both elegant. Comparison layout with soft planted-tank background.',
  'freshwater-vs-saltwater-aquarium': 'Split composition — left half shows a lush planted freshwater aquarium with discus and neon tetras among Amazon sword plants and driftwood. Right half shows a vibrant saltwater reef tank with colourful coral formations and marine tangs. Both equally beautiful but distinctly different. Clear dividing line.',
  'arowana-vs-flowerhorn': 'A golden Asian Arowana and a vivid red Flowerhorn cichlid on opposite sides of the frame. The Arowana displays its length and metallic scales; the Flowerhorn shows its massive nuchal hump and pearled body. Both alpha fish. Dramatic confrontational layout with dark background.',
  'betta-vs-gourami': 'A stunning halfmoon Betta and a Pearl Gourami facing each other in a planted aquarium setting. The betta displays its flowing fins and vivid colours; the gourami shows its pearl-spotted body and thread-like pelvic fins. Both labyrinth fish. Gentle comparison with warm planted-tank backdrop.',

  // ─── New comparison blog posts ────────────────────────────────────────────
  'koi-vs-goldfish': 'A side-by-side comparison of a vibrant Kohaku koi and a Ranchu goldfish, each in their ideal environment — the koi in a clear pond, the goldfish in a planted aquarium. Size difference is apparent. Split-frame composition with clean dividing line.',
  'oscar-vs-jack-dempsey': 'A Tiger Oscar and an Electric Blue Jack Dempsey facing each other in a dramatic versus layout. The Oscar is larger with orange-black markings; the Jack Dempsey shimmers with electric blue iridescence. Both large cichlids. Dark background.',
  'flowerhorn-vs-blood-parrot': 'A Flowerhorn cichlid with massive nuchal hump facing a Blood Parrot cichlid with its distinctive beak-like mouth. Both colourful, both cichlid hybrids. Red-orange tones dominate. Comparison layout.',
  'axolotl-vs-mudpuppy': 'A leucistic axolotl with pink feathery gills next to a brown mudpuppy with shorter gills. Both aquatic salamanders but visibly different. The axolotl is pale and exotic; the mudpuppy is wild and earthy. Educational comparison.',
  'discus-vs-flowerhorn': 'A Blue Diamond Discus — elegant, disc-shaped, serene — opposite a Flowerhorn cichlid — bold, humped, aggressive. The contrast between peaceful elegance and raw power. Dark moody background. Versus layout.',
  'pleco-vs-corydoras': 'A Zebra Pleco clinging to driftwood facing a group of Corydoras catfish on sandy substrate. Bottom-dweller comparison — one armoured and solitary, the other social and active. Warm planted-tank backdrop.',
  'arowana-vs-snakehead': 'A Golden Arowana swimming near the surface facing a Channa (Snakehead) hovering mid-water. Both apex freshwater predators. The arowana is metallic and elegant; the snakehead is muscular and stealthy. Predator versus layout.',
  'betta-vs-paradise-fish': 'A halfmoon Betta splendens with flowing fins facing a Paradise Fish (Macropodus opercularis) with its distinctive blue-red striping. Both labyrinth fish, both beautiful, both territorial. Planted aquarium backdrop.',
  'stingray-freshwater-vs-saltwater': 'Split frame — left shows a freshwater Motoro stingray on sand substrate in an aquarium, right shows a marine Blue Spotted Ray on a coral reef. Both rays but completely different habitats. Clear environmental contrast.',
  'koi-vs-arowana': 'A majestic Kohaku koi in a serene pond facing a Platinum Arowana in a premium aquarium. Two of the most expensive ornamental fish categories. The koi represents tranquility; the arowana represents power. Split-frame comparison.',

  // ─── New price guide blog posts ───────────────────────────────────────────
  'discus-fish-price-guide': 'An array of discus fish arranged by quality tier — from a common blue discus to a show-quality Checkerboard Discus — with increasing visual quality left to right. Price tag or money aesthetic. Warm planted-tank background.',
  'stingray-price-guide': 'A collection of freshwater stingrays of varying rarity — a common Motoro, a Black Diamond, and a rare hybrid — arranged by value. The most expensive ray is centre stage. Dark dramatic background. Collector aesthetic.',
  'koi-fish-price-guide': 'Koi arranged by quality and price tier — a pet-grade koi, a Japanese-bred pond koi, and a Grand Champion Show koi — with increasing quality and size left to right. Pond water. Clean natural lighting.',
  'flowerhorn-price-guide': 'Flowerhorn cichlids arranged by grade — from a common Flowerhorn to a competition champion with massive kok and vivid pearling. Each fish progressively more impressive. Show-tank blue backgrounds. Collector display.',
  'gem-tang-price-guide': 'A single Gem Tang swimming in a pristine reef tank, with subtle price-related imagery — the fish is clearly the star. Its rarity and beauty justify the price. Crystal-clear water. Museum-quality presentation.',
  'betta-fish-price-guide': 'A progression of Betta splendens from a pet-shop veiltail to a championship Halfmoon Galaxy Koi, showing increasing quality, colour intensity, and finnage. Each in a small individual display. Warm lighting.',
  'axolotl-price-guide': 'Different axolotl colour morphs arranged by rarity — wild-type, leucistic, golden albino, melanoid, and GFP. The rarest morphs are centre stage. Cool-water aquarium. Educational and commercial feel.',
  'goldfish-price-guide': 'Fancy goldfish arranged by rarity and value — from a common pet-shop Oranda to a championship Thai Blue Oranda and a rare Ranchu. Increasing quality left to right. Cold-water elegance.',

  // ─── New beginner guide blog posts ────────────────────────────────────────
  'best-cichlids-beginners': 'A colourful selection of beginner-friendly cichlids swimming together — Electric Yellow Labs, Kribensis, German Blue Rams, and Firemouth Cichlids. Bright planted community aquarium. Welcoming, accessible feel.',
  'best-catfish-beginners': 'A collection of beginner catfish species — Bristlenose Pleco on driftwood, Corydoras school on sand, and a Pictus Catfish mid-water. Warm planted community aquarium. Friendly educational feel.',
  'best-plecos-beginners': 'Several beginner pleco species displayed together — a Bristlenose, a Clown Pleco, and a Rubber Lip Pleco — each in their natural position on driftwood or glass. Planted aquarium. Approachable and informative.',
  'best-betta-beginners': 'A variety of beginner-friendly betta types displayed in individual nano tanks — a veiltail, a crown tail, and a plakat — each in a small but properly set up planted tank. Warm welcoming lighting. Accessible and beautiful.',
  'best-koi-beginners': 'A garden pond with several beginner-friendly koi varieties — Ogon, Kohaku, and Chagoi — swimming peacefully. Modest but well-maintained pond setup. Serene garden setting. Approachable for newcomers.',
  'best-goldfish-beginners': 'A group of hardy, beginner-friendly goldfish varieties in a spacious tank — Fantails, Ryukins, and a common goldfish. Well-maintained cold-water setup. Bright cheerful lighting. Welcoming and accessible.',
  'best-pufferfish-beginners': 'A small selection of beginner-friendly pufferfish — a Pea Puffer in a nano tank and a Figure Eight Puffer in a brackish setup. Curious expressive faces. Small but properly maintained aquariums. Charming and engaging.',
};

// ═════════════════════════════════════════════════════════════════════════════
// PROMPT BUILDERS
// ═════════════════════════════════════════════════════════════════════════════

function buildProductPrompt(product) {
  const descriptor = speciesDescriptors[product.slug] || '';
  return [
    `${product.commonName} (${product.scientificName}).`,
    descriptor,
    'Full body visible from head to tail tip, swimming in a gentle left-to-right orientation.',
    'Fish positioned in the centre of the frame, occupying approximately 45-50% of the total frame height.',
    'Generous clear water space above, below, and on both sides of the fish — the fish must NOT be cropped or touching any edge.',
    'Background: deep flat uniform teal-black water, solid colour #0B2D36.',
    'No gradient, no seafloor, no rocks, no plants, no bubbles, no other fish, no decorations.',
    'Soft directional lighting from the upper left. Subtle caustic water light ripples cast across the fish body.',
    'Gentle rim light along the top edge of the fish separating it from the dark background.',
    'Style: painterly naturalistic illustration in the manner of a 19th-century scientific field guide plate.',
    'Visible soft brushwork texture in the water background. Smooth precise rendering on the fish body itself.',
    'Anatomically correct proportions, scientifically accurate species colouration and markings.',
    'Natural history museum print quality.',
    'NOT photorealistic, NOT CGI render, NOT cartoon, NOT cute, NOT stylised.',
    'No text, no labels, no watermarks.',
    'Portrait orientation, 3:4 aspect ratio.',
  ].filter(Boolean).join(' ');
}

function buildSpeciesGuidePrompt(article) {
  const descriptor = speciesDescriptors[article.slug] || '';
  const sciName = article.scientificName ? ` (${article.scientificName})` : '';
  return [
    `${article.title}${sciName}.`,
    descriptor,
    'Full body swimming left-to-right in a naturalistic aquatic environment.',
    'Hints of natural habitat — soft blurred aquatic plants or driftwood in the far background.',
    'Background fades to deep teal-blue water. Fish is the clear focal point.',
    'Soft directional lighting from upper left with subtle caustic light patterns.',
    'Style: painterly naturalistic illustration, National Geographic field guide quality.',
    'Anatomically correct proportions, scientifically accurate species colouration.',
    'Landscape orientation, 16:9 aspect ratio.',
    'No text, no labels, no watermarks.',
  ].filter(Boolean).join(' ');
}

function buildCareGuidePrompt(article) {
  const scene = careGuideScenes[article.slug] || `A well-maintained aquarium scene related to: ${article.title}. Tropical fish, clean water, professional equipment.`;
  return [
    scene,
    'Scene set inside or around a well-maintained aquarium with soft ambient lighting.',
    'Style: painterly naturalistic illustration, warm tones, educational feel.',
    'Landscape orientation, 16:9 aspect ratio.',
    'No text, no labels, no watermarks, no humans, no hands.',
  ].join(' ');
}

function buildBlogPostPrompt(article) {
  const scene = blogPostScenes[article.slug] || `A wide cinematic aquarium scene related to: ${article.title}. Atmospheric lighting, rich colours, editorial photography feel.`;
  return [
    scene,
    'Wide cinematic composition, atmospheric aquarium photography feel.',
    'Style: painterly naturalistic illustration with rich colour palette.',
    'Landscape orientation, 16:9 aspect ratio.',
    'No text, no labels, no watermarks.',
  ].join(' ');
}

// ═════════════════════════════════════════════════════════════════════════════
// IMAGE GENERATION VIA GEMINI IMAGEN API
// ═════════════════════════════════════════════════════════════════════════════

async function generateImage(prompt, aspectRatio, retries = 3) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    if (res.status === 429 && retries > 0) {
      const waitSec = Math.pow(2, 4 - retries) * 15; // 15s, 30s, 60s
      console.log(`    ⏳ Rate limited, waiting ${waitSec}s (${retries} retries left)...`);
      await new Promise(r => setTimeout(r, waitSec * 1000));
      return generateImage(prompt, aspectRatio, retries - 1);
    }
    throw new Error(`API ${res.status}: ${text.slice(0, 300)}`);
  }

  const data = await res.json();
  if (!data.predictions?.length) throw new Error('No predictions returned');
  return Buffer.from(data.predictions[0].bytesBase64Encoded, 'base64');
}

// ═════════════════════════════════════════════════════════════════════════════
// POST-PROCESSING WITH SHARP
// ═════════════════════════════════════════════════════════════════════════════

async function postProcess(buffer, { width, height }) {
  return sharp(buffer)
    .resize(width, height, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();
}

// ═════════════════════════════════════════════════════════════════════════════
// BUILD GENERATION QUEUE
// ═════════════════════════════════════════════════════════════════════════════

function buildQueue() {
  const queue = [];

  // ─── Products ──────────────────────────────────────────────────────────────
  if (!categoryFilter || categoryFilter === 'products') {
    const products = extractProducts();
    for (const p of products) {
      const filename = path.basename(p.imageUrl);
      const filePath = path.join(DIRS.products, filename);
      if (!FORCE && fs.existsSync(filePath)) continue;
      queue.push({
        category: 'products',
        name: p.commonName,
        filename,
        filePath,
        prompt: buildProductPrompt(p),
        aspectRatio: ASPECT_RATIOS.products,
        dimensions: DIMENSIONS.products,
      });
    }
  }

  // ─── Species Guides ────────────────────────────────────────────────────────
  if (!categoryFilter || categoryFilter === 'species') {
    const species = extractArticles('species-guides.ts', 'species');
    for (const a of species) {
      const filename = path.basename(a.heroImage);
      const filePath = path.join(DIRS.species, filename);
      if (!FORCE && fs.existsSync(filePath)) continue;
      queue.push({
        category: 'species',
        name: a.title,
        filename,
        filePath,
        prompt: buildSpeciesGuidePrompt(a),
        aspectRatio: ASPECT_RATIOS.species,
        dimensions: DIMENSIONS.species,
      });
    }
  }

  // ─── Care Guides ───────────────────────────────────────────────────────────
  if (!categoryFilter || categoryFilter === 'care') {
    const care = extractArticles('care-guides.ts', 'care');
    for (const a of care) {
      const filename = path.basename(a.heroImage);
      const filePath = path.join(DIRS.care, filename);
      if (!FORCE && fs.existsSync(filePath)) continue;
      queue.push({
        category: 'care',
        name: a.title,
        filename,
        filePath,
        prompt: buildCareGuidePrompt(a),
        aspectRatio: ASPECT_RATIOS.care,
        dimensions: DIMENSIONS.care,
      });
    }
  }

  // ─── Blog Posts ────────────────────────────────────────────────────────────
  if (!categoryFilter || categoryFilter === 'blog') {
    const blog = extractArticles('blog-posts.ts', 'blog');
    for (const a of blog) {
      const filename = path.basename(a.heroImage);
      const filePath = path.join(DIRS.blog, filename);
      if (!FORCE && fs.existsSync(filePath)) continue;
      queue.push({
        category: 'blog',
        name: a.title,
        filename,
        filePath,
        prompt: buildBlogPostPrompt(a),
        aspectRatio: ASPECT_RATIOS.blog,
        dimensions: DIMENSIONS.blog,
      });
    }
  }

  return queue;
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═════════════════════════════════════════════════════════════════════════════

const queue = buildQueue();

// Summary of what we're about to do
const byCat = {};
for (const item of queue) {
  byCat[item.category] = (byCat[item.category] || 0) + 1;
}

console.log('\n═══════════════════════════════════════════════════════════════════');
console.log('  The Fish Collection — Unified Image Generator');
console.log('  Model: imagen-4.0-generate-001');
console.log('═══════════════════════════════════════════════════════════════════');
console.log(`\n  Total to generate: ${queue.length}`);
for (const [cat, count] of Object.entries(byCat)) {
  console.log(`    ${cat}: ${count}`);
}
if (queue.length === 0) {
  console.log('\n  ✓ All images already exist! Nothing to generate.\n');
  process.exit(0);
}
const estMinutes = Math.ceil((queue.length * 6) / 60);
console.log(`\n  Estimated time: ~${estMinutes} minutes`);
console.log('  (4s delay between requests + generation time)\n');

const results = [];
let successCount = 0;
let failCount = 0;

for (let i = 0; i < queue.length; i++) {
  const item = queue[i];
  const progress = `[${i + 1}/${queue.length}]`;
  const catLabel = `[${item.category}]`;

  try {
    console.log(`${progress} ${catLabel} ${item.filename}...`);

    // Generate
    const rawBuffer = await generateImage(item.prompt, item.aspectRatio);

    // Post-process with sharp
    const processed = await postProcess(rawBuffer, item.dimensions);

    // Save
    fs.writeFileSync(item.filePath, processed);
    const sizeKB = (processed.length / 1024).toFixed(1);
    console.log(`  ✓ ${sizeKB} KB (${item.dimensions.width}×${item.dimensions.height})`);

    results.push({ ...item, status: 'success', size: sizeKB });
    successCount++;
  } catch (err) {
    console.error(`  ✗ ${err.message}`);
    results.push({ ...item, status: 'FAILED', error: err.message });
    failCount++;
  }

  // Delay between requests (skip after last)
  if (i + 1 < queue.length) {
    await new Promise(r => setTimeout(r, 4000));
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// SUMMARY REPORT
// ═════════════════════════════════════════════════════════════════════════════

console.log('\n' + '═'.repeat(70));
console.log('  GENERATION SUMMARY');
console.log('═'.repeat(70));
console.log(`\n  Total: ${results.length} | Success: ${successCount} | Failed: ${failCount}\n`);

// Per-category summary
const catSummary = {};
for (const r of results) {
  if (!catSummary[r.category]) catSummary[r.category] = { success: 0, failed: 0 };
  if (r.status === 'success') catSummary[r.category].success++;
  else catSummary[r.category].failed++;
}
for (const [cat, s] of Object.entries(catSummary)) {
  console.log(`  ${cat}: ${s.success} success, ${s.failed} failed`);
}

// List failures
const failures = results.filter(r => r.status === 'FAILED');
if (failures.length > 0) {
  console.log('\n  Failed files:');
  for (const f of failures) {
    console.log(`    [${f.category}] ${f.filename}: ${f.error}`);
  }

  // Write failed list per category
  for (const cat of Object.keys(DIRS)) {
    const catFailures = failures.filter(f => f.category === cat);
    if (catFailures.length > 0) {
      const failedList = catFailures.map(f => f.filename).join('\n');
      fs.writeFileSync(path.join(DIRS[cat], '_failed.txt'), failedList);
    }
  }
  console.log('\n  Failed lists saved to _failed.txt in each image directory.');
}

// Final image counts
console.log('\n  Current image counts:');
for (const [cat, dir] of Object.entries(DIRS)) {
  try {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
    console.log(`    ${cat}: ${files.length} images`);
  } catch {
    console.log(`    ${cat}: directory not found`);
  }
}

console.log('\nDone!\n');
