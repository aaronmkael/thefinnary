Generate all The Fish Collection brand image assets using the Gemini image generation API.

---

## STYLE — apply to every single image

All images use this master style. Never deviate.

Style: painterly naturalistic illustration. Scientific field guide quality. Soft directional lighting from above-left. Subtle caustic water light ripples on fish. Anatomically accurate — real proportions, real colouration, no exaggerated or cartoon features. Slight painterly brushwork texture visible in backgrounds, smooth rendering on the fish itself. Natural history museum print quality. Think National Geographic meets Pixar art department concept art.

Fish on dark backgrounds: deep teal-black water (#0B2D36). No grey, no gradient for these.
Icon/white-bg assets: pure white or transparent background, no shadow.

Never: cartoon eyes, smiling expressions, cute rounded proportions, studio product-photo style, photorealistic CGI render.

---

## API SETUP

Use the Gemini imagen API with the project's existing GEMINI_API_KEY.
Model: imagen-3.0-generate-002 (or latest available imagen model).
Save all files to /public/images/brand/ in the project.
Create subdirectories as specified per asset type.
Log each generated file path to console as it completes.
If a generation fails, log the error and continue — do not stop the whole batch.

---

## OUTPUT SPECIFICATIONS

hero/         — 1920×1080px, JPG, quality 95
category/     — 800×800px, PNG, transparent background
icons/        — 512×512px, PNG, transparent background
species/      — 1200×800px, JPG, quality 95
care/         — 1200×675px, JPG, quality 95
textures/     — 1200×1200px, JPG, quality 90
og/           — 1200×630px, JPG, quality 95
empty-states/ — 600×600px, PNG, transparent background

---

## BATCH 1 — Hero images (save to /public/images/brand/hero/)

These are the large brand images for homepage, category headers, and OG images.
Dark teal-black background on all. Full body visible. Caustic light from above.

Generate these 8 files:

hero-platinum-arowana.jpg
Prompt: "Platinum arowana (Scleropages formosus), full body side profile swimming horizontally left to right. Pure silver-white scales with subtle iridescence. No yellow tint — this is the platinum variant, pure white. Barbels visible. Deep teal-black water background. Soft caustic light ripples from the water surface above. Painterly naturalistic illustration, field guide quality, natural history museum print style. 16:9 landscape format."

hero-gem-tang.jpg
Prompt: "G.E.M. Tang (Zebrasoma gemmatum), full body side profile. Black body covered in vivid white polka dots. Oval disc-shaped body characteristic of Zebrasoma. Yellow tail fin. Deep teal-black water. Caustic light from above. Painterly naturalistic illustration, field guide quality. 16:9 landscape format."

hero-discus.jpg
Prompt: "Cobalt blue discus fish (Symphysodon aequifasciatus), full body side profile showing perfect disc shape. Vivid metallic blue colouration with faint vertical stripes. Red eye. Deep teal-black water. Soft caustic light from above. Painterly naturalistic field guide illustration. 16:9 landscape format."

hero-wolf-fish.jpg
Prompt: "Wolf fish (Hoplias malabaricus), full body side profile. Powerful muscular body, large jaw with visible teeth slightly parted. Olive-brown mottled colouration. Intense predatory eye. Deep teal-black water. Dramatic side lighting. Painterly naturalistic illustration. 16:9 landscape format."

hero-peppermint-angelfish.jpg
Prompt: "Peppermint angelfish (Centropyge boylei), full body side profile. Vivid alternating red-orange and white vertical stripes. Small compact oval body. Deep teal-black water with subtle caustic light. Painterly naturalistic illustration, field guide quality. 16:9 landscape format."

hero-fahaka-puffer.jpg
Prompt: "Fahaka pufferfish (Tetraodon lineatus), full body side profile. Golden-yellow body with dark brown horizontal stripe pattern. Characterful round eye. Beak-like mouth visible. Deep teal-black water. Soft lighting. Painterly naturalistic illustration. 16:9 landscape format."

hero-flowerhorn.jpg
Prompt: "Flowerhorn cichlid, full body side profile. Large distinctive red nuchal hump (kok) on forehead. Vivid red-orange body with dark lateral spots and markings. Deep teal-black water. Painterly naturalistic illustration, dramatic lighting. 16:9 landscape format."

hero-albino-alligator-gar.jpg
Prompt: "Albino alligator gar (Atractosteus spatula), full body side profile. Elongated prehistoric body, distinctive dual-rowed teeth visible in long snout. Leucistic golden-white colouration. Deep teal-black water. Dramatic side lighting showing the prehistoric silhouette. Painterly naturalistic illustration. 16:9 landscape format."

---

## BATCH 2 — Category icons (save to /public/images/brand/category/)

Single fish, full body, white/transparent background. No shadow. Clean.
Square 800×800px. Used in navigation and category grid.

Generate these 12 files:

category-arowana.png
Prompt: "Platinum arowana fish, full body side profile swimming right. Pure white background, no shadow. Painterly illustration style, scientifically accurate anatomy. Silver-white colouration. Square format, fish centred with generous padding."

category-discus.png
Prompt: "Cobalt blue discus fish, full body side profile. Pure white background, no shadow. Perfect disc-shaped body. Vivid blue colouration. Painterly field guide illustration style. Square format."

category-catfish.png
Prompt: "Shovelnose tiger catfish (Pseudoplatystoma tigrinum), full body side profile. Pure white background. Distinctive elongated flat head, tiger stripe pattern. Painterly illustration style. Square format."

category-cichlid.png
Prompt: "Flowerhorn cichlid, full body side profile. Pure white background. Large nuchal hump, vivid red-orange colouration. Painterly field guide illustration. Square format."

category-pufferfish.png
Prompt: "Fahaka pufferfish, full body side profile. Pure white background. Round characteristic puffer body, golden stripe pattern. Painterly illustration style. Square format."

category-knife-fish.png
Prompt: "Black ghost knife fish (Apteronotus albifrons), full body side profile. Pure white background. Distinctive blade-shaped transparent body with black and white markings. Painterly field guide illustration. Square format."

category-gar.png
Prompt: "Alligator gar, full body side profile. Pure white background. Long prehistoric body with distinctive long snout. Olive-grey colouration. Painterly illustration style. Square format."

category-angelfish.png
Prompt: "Altum angelfish (Pterophyllum altum), full body side profile. Pure white background. Tall triangular body shape with long flowing fins. Silver body with dark vertical stripes. Painterly field guide illustration. Square format."

category-pleco.png
Prompt: "Vampire pleco (Leporacanthicus galaxias), full body side profile. Pure white background. Armoured body with white spots on dark background. Sucker mouth visible. Painterly illustration style. Square format."

category-tang.png
Prompt: "G.E.M. tang, full body side profile. Pure white background. Black body with white polka dots. Yellow tail. Painterly field guide illustration. Square format."

category-wolffish.png
Prompt: "Wolf fish (Hoplias malabaricus), full body side profile. Pure white background. Muscular elongated body, large mouth. Olive-brown colouration. Painterly illustration style. Square format."

category-piranha.png
Prompt: "Red-bellied piranha (Pygocentrus nattereri), full body side profile. Pure white background. Deep-bodied fish, vivid orange-red belly, silver upper body. Powerful jaw visible. Painterly field guide illustration. Square format."

---

## BATCH 3 — Species guide headers (save to /public/images/brand/species/)

Dramatic close-up or 3/4 profile. Dark background. For use at top of species guide pages.
1200×800px JPG.

Generate these 8 files:

species-platinum-arowana.jpg
Prompt: "Platinum arowana (Scleropages formosus), dramatic 3/4 front angle, head and upper body prominent. Silver-white scales catching light. Eye in sharp focus with golden-green iris. Deep teal-black water background. Caustic light patterns. Painterly naturalistic illustration, moody dramatic lighting. Landscape format."

species-gem-tang.jpg
Prompt: "G.E.M. tang close-up, 3/4 angle showing body pattern. White polka dots on black body vivid and sharp. Yellow tail fins visible. Eye prominent. Deep water background. Dramatic lighting. Painterly naturalistic field guide illustration."

species-discus.jpg
Prompt: "Cobalt blue discus, close-up showing full disc profile. Metallic blue colouration richly detailed. Vertical stripe pattern visible. Red eye prominent. Deep teal-black background. Soft caustic light. Painterly naturalistic illustration."

species-wolf-fish.jpg
Prompt: "Wolf fish close-up, dramatic front-facing angle. Powerful jaw prominent, teeth slightly visible. Intense golden eye. Mottled brown-olive scales detailed. Deep dark water. High contrast lighting. Painterly naturalistic illustration."

species-peppermint-angelfish.jpg
Prompt: "Peppermint angelfish close-up, showing vivid red and white stripes in full detail. Small compact body. Deep water background. Dramatic lighting highlighting the stripe contrast. Painterly naturalistic field guide illustration."

species-fahaka-puffer.jpg
Prompt: "Fahaka pufferfish, dramatic 3/4 front angle. Round expressive body, golden-yellow colouration. Distinctive beak-like mouth. Characterful eye in focus. Deep dark water. Painterly naturalistic illustration with warm lighting."

species-arapaima.jpg
Prompt: "Arapaima (Arapaima gigas), full body showing massive scale. Elongated powerful body, mosaic scale pattern with orange-red edges on dark scales near tail. Deep teal water. Dramatic scale showing the enormous size. Painterly naturalistic illustration."

species-alligator-gar.jpg
Prompt: "Albino alligator gar, dramatic side profile showing full prehistoric silhouette. Long tooth-filled snout prominent. Leucistic golden-white colouration. Dark water background. Moody dramatic lighting. Painterly naturalistic illustration."

---

## BATCH 4 — Care guide illustrations (save to /public/images/brand/care/)

Educational illustration style. Slightly more diagrammatic than hero images.
Warm, informative, clear. 1200×675px JPG.

Generate these 6 files:

care-tank-setup-arowana.jpg
Prompt: "Cross-section illustration of a large aquarium tank, cutaway view. Arowana swimming near water surface. Long horizontal tank showing substrate layer, minimal decor, tight-fitting lid. Caustic light from surface. Educational natural history illustration style, warm and informative. Landscape format."

care-tank-setup-discus.jpg
Prompt: "Cross-section illustration of a tall aquarium, cutaway view. Group of 6 discus fish swimming mid-water. Dark substrate, minimal plants, heater visible. Warm amber lighting filtering through. Educational illustration style, painterly. Landscape format."

care-feeding-guide.jpg
Prompt: "Flat lay illustration of aquarium fish food items arranged neatly: bloodworms, small feeder fish, snail, prawn, pellets. Arranged on a clean white-aqua background. Each item clearly detailed. Botanical illustration style — precise and beautiful. Landscape format."

care-water-parameters.jpg
Prompt: "Minimalist illustration of a water testing kit with test tubes showing pH, temperature gauge, and water sample vials against a clean teal-white background. Scientific field guide illustration style. Clean, informative. Landscape format."

care-puffer-teeth.jpg
Prompt: "Close-up illustration of a pufferfish beak and teeth, showing the distinctive fused dental plates. Scientific cross-section style showing the beak structure. Educational natural history illustration style. Clean white-aqua background."

care-arowana-jump.jpg
Prompt: "Illustration of an arowana leaping from the water surface, dramatic moment frozen. Water droplets scattering. Dark water below, bright surface light above. Shows why a tight lid is essential. Painterly naturalistic illustration with dynamic composition."

---

## BATCH 5 — Brand textures (save to /public/images/brand/textures/)

Abstract decorative assets. 1200×1200px JPG.

Generate these 3 files:

texture-fish-scales.jpg
Prompt: "Macro close-up illustration of overlapping fish scales. Colours: deep teal #0B2D36 and electric aqua #29A8C4. Each scale shows subtle iridescence and fine detail. Seamlessly tileable pattern. No individual fish visible — pure abstract scale texture. Square format. Painterly style."

texture-caustic-light.jpg
Prompt: "Abstract underwater caustic light pattern. Rippling distorted light on deep teal-black water. Electric aqua and lighter blue light caustics. No fish, no objects — pure abstract underwater light texture. Painterly style. Square format. Can be used as a seamlessly tileable background."

texture-water-surface.jpg
Prompt: "Looking-up view from below the water surface. Distorted silvery-aqua surface tension pattern with light refracting through. Deep teal water colour. Abstract, beautiful, calming. Painterly illustration style. Square format."

---

## BATCH 6 — Empty states & UI illustrations (save to /public/images/brand/empty-states/)

Friendly but not cartoon. 600×600px PNG transparent background.

Generate these 3 files:

empty-404.png
Prompt: "Friendly naturalistic fish illustration — a small curious fish (loosely based on a clown loach) looking directly at viewer with head slightly tilted, as if confused. Transparent background. Naturalistic but with a warm, approachable quality — achieved through lighting and composition, not cartoon exaggeration. Square format."

empty-no-results.png
Prompt: "Small naturalistic fish illustration looking into an empty fishbowl or empty space. Transparent background. The fish should appear curious and slightly puzzled — natural expression achieved through body posture and eye angle, not cartoon features. Painterly illustration style. Square format."

empty-loading.png
Prompt: "Simple elegant illustration of a single fish egg or small juvenile fish — something small and delicate suggesting waiting and growth. Transparent background. Clean painterly illustration style. Square format."

---

## BATCH 7 — OG images (save to /public/images/brand/og/)

Social sharing images. 1200×630px JPG. Dark background, brand colours.

Generate these 4 files:

og-default.jpg
Prompt: "Brand hero image: multiple exotic fish silhouettes arranged elegantly against deep teal-black water. Arowana, discus, gem tang visible. Dramatic underwater lighting. Space on left for text overlay. Painterly naturalistic illustration. 1200×630px landscape."

og-arowana.jpg
Prompt: "Platinum arowana side profile, dramatic, against deep teal-black background. Silver scales catching light. Space on left side for text. Painterly naturalistic illustration. Wide landscape format 1200×630px."

og-discus.jpg
Prompt: "Group of three discus fish, different colour morphs, swimming together. Deep teal-black water. Warm caustic light. Space for text on left. Painterly naturalistic illustration. 1200×630px landscape."

og-rare-fish.jpg
Prompt: "Collage-style arrangement of rare marine fish: gem tang, peppermint angelfish, bladefin basslet, against deep dark ocean water. Each fish clearly identifiable. Dramatic lighting. Space on left for text. Painterly naturalistic illustration. 1200×630px."

---

## AFTER GENERATION

When all images are generated:

1. Print a summary table showing: filename | dimensions | file size | status (success/failed)
2. Create /public/images/brand/index.json listing all generated files with their paths, dimensions, and intended use
3. Print the total count of successful generations vs failures
4. If any failed, print the list of failed files so they can be retried

Total expected: 44 image files across 7 directories.
