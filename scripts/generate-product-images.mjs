import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT, 'public', 'images', 'products');

// Load API key from .env.local or fallback
let API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  try {
    const envFile = fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8');
    const match = envFile.match(/GEMINI_API_KEY=(.+)/);
    if (match) API_KEY = match[1].trim();
  } catch {}
}
if (!API_KEY) {
  console.error('Missing GEMINI_API_KEY');
  process.exit(1);
}

fs.mkdirSync(PRODUCTS_DIR, { recursive: true });

// ─── Species-specific visual descriptors ────────────────────────────────────
// Each key matches a product slug. The descriptor tells Gemini exactly what
// the fish looks like so it renders anatomically correct.
const speciesDescriptors = {
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

  // ─── Axolotls ─────────────────────────────────────────────────────────────
  'leucistic-axolotl': 'Plump aquatic salamander with a broad flat head and wide permanent smile. Leucistic variant — pale pinkish-white translucent body with visible pink blood vessels beneath the skin. Prominent feathery external gills (three pairs) in bright pink-red extending from behind the head. Four short stubby limbs with tiny digits. Long flat paddle-like tail. Large dark eyes.',
  'golden-albino-axolotl': 'Plump aquatic salamander with a broad flat head. Golden albino variant — bright golden-yellow to peach-orange body colour. Pink-red eyes (albino trait). Prominent feathery external gills in golden-pink colour. Four short stubby limbs. Long flat paddle-like tail. Translucent golden skin with visible gill filaments.',
  'gfp-leucistic-axolotl': 'Plump aquatic salamander with a broad flat head and wide smile. GFP (green fluorescent protein) leucistic variant — pale white body that glows vivid fluorescent green under blue/UV light. Show the axolotl with a subtle green fluorescent glow emanating from the body and gills. Feathery external gills. Dark eyes. Four stubby limbs.',
  'melanoid-axolotl': 'Plump aquatic salamander with a broad flat head. Melanoid variant — solid dark black to charcoal-grey body colour with no iridescent speckles. Dark eyes that blend with the body colour. Prominent feathery external gills in dark grey-black. Four short stubby limbs. Long dark paddle-like tail.',

  // ─── Koi ──────────────────────────────────────────────────────────────────
  'kohaku-koi': 'Large robust deep-bodied ornamental carp. Kohaku pattern — pure snow-white base body colour with bold red (hi) patches arranged symmetrically on the head and body. Clean sharp edges between red and white. Large prominent scales. Two pairs of barbels. Rounded full body shape. Long flowing tail fin.',
  'sanke-koi': 'Large robust deep-bodied ornamental carp. Sanke (Taisho Sanshoku) pattern — white base body with red (hi) patches and small black (sumi) accents scattered on the body (not on the head). Three-colour pattern: white, red, black. Large scales visible. Two pairs of barbels. Flowing fins.',
  'showa-koi': 'Large robust deep-bodied ornamental carp. Showa (Showa Sanshoku) pattern — black base body with bold red (hi) and white (shiroji) patches creating a dramatic three-colour pattern. Black extends onto the head. Sumi wraps around the body. Large scales. Two pairs of barbels.',
  'butterfly-koi': 'Elegant elongated ornamental carp with dramatically long flowing fins — much longer than standard koi. Butterfly-like fin extensions trailing gracefully. Metallic multicolour body (gold, orange, white mix). Long flowing pectoral, pelvic, and caudal fins that billow like silk. Graceful swimming posture.',
  'platinum-ogon-koi': 'Large robust deep-bodied ornamental carp. Platinum Ogon variety — solid uniform metallic platinum-silver colouration across the entire body. Brilliant mirror-like metallic lustre on every scale. No other colours or markings — pure clean metallic white-silver. Two pairs of barbels. Full rounded body.',
  'tancho-koi': 'Large robust deep-bodied ornamental carp. Tancho pattern — pure snow-white body with a single perfectly circular red (hi) patch centred on the top of the head — resembling the Japanese flag. No other red markings on the body. Clean white body. Large scales. Two pairs of barbels.',

  // ─── Goldfish ─────────────────────────────────────────────────────────────
  'ranchu-goldfish': 'Compact egg-shaped fancy goldfish with NO dorsal fin — distinctive smooth curved back profile. Prominent raspberry-like head growth (wen) covering the top of the head and cheeks. Deep red-orange to gold body colour. Short stubby double tail fin. Round plump body. Small downturned mouth.',
  'oranda-goldfish': 'Deep-bodied egg-shaped fancy goldfish with a prominent large raspberry-like head growth (wen) covering the entire top of the head. Rich orange-red body colour with metallic sheen. Long flowing double tail fin. Small dorsal fin. Round plump body. Large eyes partially framed by the wen.',
  'thai-oranda-goldfish': 'Deep-bodied fancy goldfish — Thai-bred premium variant. Exceptionally large and well-developed wen (head growth) extending over the entire head. Brilliant red-orange to deep crimson body colour. Short compact body with an extremely full wen. Flowing double tail fin. Luxurious rounded proportions.',
  'lionhead-goldfish': 'Compact egg-shaped fancy goldfish with NO dorsal fin. Massive dense wen (head growth) covering the entire head, cheeks, and gill covers — creating a lion-like mane appearance. Red-orange to gold body colour. Short double tail fin. Round plump body. Eyes nearly hidden by the dense wen growth.',
  'ryukin-goldfish': 'Deep-bodied fancy goldfish with a distinctive high-arched back creating a pronounced hump behind the head. Pointed head with a small mouth. Vivid red and white (or solid red) colouration. Long flowing double or triple tail fin. Short compact body with deep belly. Dorsal fin tall and upright.',

  // ─── Betta varieties ──────────────────────────────────────────────────────
  'galaxy-koi-plakat-betta': 'Short-finned plakat-style betta with a compact muscular body. Galaxy koi colouration — multicolour patches of vivid red, blue-black, and cream-white in irregular koi-like splotches. Iridescent galaxy blue-green scaling scattered across darker patches. SHORT fins (plakat, not longfin). Aggressive athletic body shape.',
  'samurai-betta': 'Plakat-style short-finned betta with a powerful compact body. Samurai colouration — dramatic metallic scaling with copper-gold to platinum dragon-scale body and contrasting dark (black/blue) head creating a helmet-like pattern. Short rounded fins. Intense metallic dragon-scale texture visible on each scale.',
  'alien-betta': 'Wild-type hybrid betta with an elongated sleek body — NOT the typical Betta splendens shape. Iridescent green-blue to teal metallic sheen covering the body and gill covers. Short natural fins. Elongated body more like a wild Betta species. Intense iridescent scaling. Smaller head relative to body.',
  'giant-betta': 'Oversized betta fish — approximately 2-3 times the size of a standard Betta splendens. Robust heavy body. Deep royal blue with red wash. Moderate-length fins proportional to the larger body. Powerful jaw. Impressive size distinguishes it from standard bettas.',
  'crowntail-betta': 'Distinctive betta with dramatically spiked fin rays — the webbing between fin rays is reduced, creating a crown-like or spiky appearance. Deep rich colour (dark blue to red). Caudal fin rays extend well beyond the webbing like a crown or comb. Spiky dorsal and anal fins. Compact torpedo body.',
  'dumbo-ear-betta': 'Distinctive betta with enormously oversized pectoral fins that extend outward like large elephant ears or wings. Pectoral fins are 2-3x normal size, often brightly coloured or multicoloured. Pastel blue-white body with colourful oversized pectoral fins. Long flowing caudal and dorsal fins.',
};

// ─── Prompt builder ─────────────────────────────────────────────────────────
function buildPrompt(product) {
  const descriptor = speciesDescriptors[product.slug] || '';

  // Construct a highly specific prompt
  const parts = [
    // Subject identification
    `${product.name} (${product.sci}).`,

    // Species-specific visual descriptor
    descriptor,

    // Composition — zoomed out, full body, centred for product card
    'Full body visible from head to tail tip, swimming in a gentle left-to-right orientation.',
    'Fish positioned in the centre of the frame, occupying approximately 45-50% of the total frame height.',
    'Generous clear water space above, below, and on both sides of the fish — the fish must NOT be cropped or touching any edge.',

    // Background
    'Background: deep flat uniform teal-black water, solid colour #0B2D36.',
    'No gradient, no seafloor, no rocks, no plants, no bubbles, no other fish, no decorations.',

    // Lighting
    'Soft directional lighting from the upper left. Subtle caustic water light ripples cast across the fish body.',
    'Gentle rim light along the top edge of the fish separating it from the dark background.',

    // Style
    'Style: painterly naturalistic illustration in the manner of a 19th-century scientific field guide plate.',
    'Visible soft brushwork texture in the water background. Smooth precise rendering on the fish body itself.',
    'Anatomically correct proportions, scientifically accurate species colouration and markings.',
    'Natural history museum print quality.',

    // Negative guidance
    'NOT photorealistic, NOT CGI render, NOT cartoon, NOT cute, NOT stylised.',
    'No text, no labels, no watermarks.',

    // Format
    'Portrait orientation, 3:4 aspect ratio.',
  ];

  return parts.filter(Boolean).join(' ');
}

// ─── Load products from TypeScript source ────────────────────────────────────
function extractProducts() {
  const src = fs.readFileSync(path.join(ROOT, 'lib', 'data', 'products.ts'), 'utf8');
  const items = [];
  const re = /commonName:\s*'([^']+)'[\s\S]*?scientificName:\s*'([^']+)'[\s\S]*?slug:\s*'([^']+)'[\s\S]*?url:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(src))) {
    items.push({ name: m[1], sci: m[2], slug: m[3], url: m[4] });
  }
  return items;
}

const allProducts = extractProducts();

// Deduplicate by URL
const seen = new Set();
const unique = allProducts.filter(p => {
  if (seen.has(p.url)) return false;
  seen.add(p.url);
  return true;
});

console.log(`\nTheFinnery Product Image Generator — Pro Prompts`);
console.log(`Model: imagen-4.0-generate-001`);
console.log(`Products: ${unique.length}`);
console.log(`Output: ${PRODUCTS_DIR}\n`);

const results = [];

async function generateImage(prompt, retries = 3) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '3:4',
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    if (res.status === 429 && retries > 0) {
      const waitSec = Math.pow(2, 4 - retries) * 15; // 15s, 30s, 60s
      console.log(`    ⏳ Rate limited, waiting ${waitSec}s (${retries} retries left)...`);
      await new Promise(r => setTimeout(r, waitSec * 1000));
      return generateImage(prompt, retries - 1);
    }
    throw new Error(`API ${res.status}: ${text.slice(0, 200)}`);
  }

  const data = await res.json();
  if (!data.predictions?.length) throw new Error('No predictions returned');
  return Buffer.from(data.predictions[0].bytesBase64Encoded, 'base64');
}

async function processProduct(p, index) {
  const filename = path.basename(p.url);
  const filePath = path.join(PRODUCTS_DIR, filename);
  const prompt = buildPrompt(p);

  try {
    console.log(`[${index + 1}/${unique.length}] ${filename}...`);
    const buffer = await generateImage(prompt);
    fs.writeFileSync(filePath, buffer);
    const sizeKB = (buffer.length / 1024).toFixed(1);
    console.log(`  ✓ ${sizeKB} KB`);
    results.push({ file: filename, status: 'success', size: `${sizeKB} KB` });
  } catch (err) {
    console.error(`  ✗ ${err.message}`);
    results.push({ file: filename, status: 'FAILED', error: err.message });
  }
}

// ─── Run generation ─────────────────────────────────────────────────────────
for (let i = 0; i < unique.length; i++) {
  await processProduct(unique[i], i);
  // Delay between requests to respect rate limits
  if (i + 1 < unique.length) {
    await new Promise(r => setTimeout(r, 4000));
  }
}

// ─── Summary ────────────────────────────────────────────────────────────────
const successes = results.filter(r => r.status === 'success');
const failures = results.filter(r => r.status === 'FAILED');

console.log('\n' + '═'.repeat(70));
console.log('  GENERATION SUMMARY');
console.log('═'.repeat(70));
console.log(`\n  Total: ${results.length} | Success: ${successes.length} | Failed: ${failures.length}\n`);

console.log('  ' + 'File'.padEnd(50) + 'Size'.padEnd(12) + 'Status');
console.log('  ' + '─'.repeat(68));
for (const r of results) {
  const status = r.status === 'success' ? '✓' : `✗ ${r.error?.slice(0, 30)}`;
  console.log('  ' + r.file.padEnd(50) + (r.size || '—').padEnd(12) + status);
}

if (failures.length > 0) {
  console.log('\n  Failed files:');
  for (const f of failures) {
    console.log(`    ${f.file}: ${f.error}`);
  }

  // Write failed list for easy retry
  const failedList = failures.map(f => f.file).join('\n');
  fs.writeFileSync(path.join(PRODUCTS_DIR, '_failed.txt'), failedList);
  console.log(`\n  Failed list saved to ${PRODUCTS_DIR}/_failed.txt`);
}

console.log('\nDone!\n');
