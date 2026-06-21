import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BRAND_DIR = path.join(ROOT, 'public', 'images', 'brand');
const API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyClntj5JaYhEuVJcMdGrnk6bTShPQ9IJyo';

const STYLE_PREFIX = `Painterly naturalistic illustration. Scientific field guide quality. Soft directional lighting from above-left. Subtle caustic water light ripples on fish. Anatomically accurate — real proportions, real colouration, no exaggerated or cartoon features. Slight painterly brushwork texture visible in backgrounds, smooth rendering on the fish itself. Natural history museum print quality. `;

const batches = [
  {
    dir: 'hero',
    images: [
      { file: 'hero-platinum-arowana.jpg', prompt: 'Platinum arowana (Scleropages formosus), full body side profile swimming horizontally left to right. Pure silver-white scales with subtle iridescence. No yellow tint — this is the platinum variant, pure white. Barbels visible. Deep teal-black water background (#0B2D36). Soft caustic light ripples from the water surface above. Painterly naturalistic illustration, field guide quality, natural history museum print style. 16:9 landscape format.', ratio: '16:9' },
      { file: 'hero-gem-tang.jpg', prompt: 'G.E.M. Tang (Zebrasoma gemmatum), full body side profile. Black body covered in vivid white polka dots. Oval disc-shaped body characteristic of Zebrasoma. Yellow tail fin. Deep teal-black water (#0B2D36). Caustic light from above. Painterly naturalistic illustration, field guide quality. 16:9 landscape format.', ratio: '16:9' },
      { file: 'hero-discus.jpg', prompt: 'Cobalt blue discus fish (Symphysodon aequifasciatus), full body side profile showing perfect disc shape. Vivid metallic blue colouration with faint vertical stripes. Red eye. Deep teal-black water (#0B2D36). Soft caustic light from above. Painterly naturalistic field guide illustration. 16:9 landscape format.', ratio: '16:9' },
      { file: 'hero-wolf-fish.jpg', prompt: 'Wolf fish (Hoplias malabaricus), full body side profile. Powerful muscular body, large jaw with visible teeth slightly parted. Olive-brown mottled colouration. Intense predatory eye. Deep teal-black water (#0B2D36). Dramatic side lighting. Painterly naturalistic illustration. 16:9 landscape format.', ratio: '16:9' },
      { file: 'hero-peppermint-angelfish.jpg', prompt: 'Peppermint angelfish (Centropyge boylei), full body side profile. Vivid alternating red-orange and white vertical stripes. Small compact oval body. Deep teal-black water (#0B2D36) with subtle caustic light. Painterly naturalistic illustration, field guide quality. 16:9 landscape format.', ratio: '16:9' },
      { file: 'hero-fahaka-puffer.jpg', prompt: 'Fahaka pufferfish (Tetraodon lineatus), full body side profile. Golden-yellow body with dark brown horizontal stripe pattern. Characterful round eye. Beak-like mouth visible. Deep teal-black water (#0B2D36). Soft lighting. Painterly naturalistic illustration. 16:9 landscape format.', ratio: '16:9' },
      { file: 'hero-flowerhorn.jpg', prompt: 'Flowerhorn cichlid, full body side profile. Large distinctive red nuchal hump (kok) on forehead. Vivid red-orange body with dark lateral spots and markings. Deep teal-black water (#0B2D36). Painterly naturalistic illustration, dramatic lighting. 16:9 landscape format.', ratio: '16:9' },
      { file: 'hero-albino-alligator-gar.jpg', prompt: 'Albino alligator gar (Atractosteus spatula), full body side profile. Elongated prehistoric body, distinctive dual-rowed teeth visible in long snout. Leucistic golden-white colouration. Deep teal-black water (#0B2D36). Dramatic side lighting showing the prehistoric silhouette. Painterly naturalistic illustration. 16:9 landscape format.', ratio: '16:9' },
    ],
  },
  {
    dir: 'category',
    images: [
      { file: 'category-arowana.png', prompt: 'Platinum arowana fish, full body side profile swimming right. Pure white background, no shadow. Painterly illustration style, scientifically accurate anatomy. Silver-white colouration. Square format, fish centred with generous padding.', ratio: '1:1' },
      { file: 'category-discus.png', prompt: 'Cobalt blue discus fish, full body side profile. Pure white background, no shadow. Perfect disc-shaped body. Vivid blue colouration. Painterly field guide illustration style. Square format.', ratio: '1:1' },
      { file: 'category-catfish.png', prompt: 'Shovelnose tiger catfish (Pseudoplatystoma tigrinum), full body side profile. Pure white background. Distinctive elongated flat head, tiger stripe pattern. Painterly illustration style. Square format.', ratio: '1:1' },
      { file: 'category-cichlid.png', prompt: 'Flowerhorn cichlid, full body side profile. Pure white background. Large nuchal hump, vivid red-orange colouration. Painterly field guide illustration. Square format.', ratio: '1:1' },
      { file: 'category-pufferfish.png', prompt: 'Fahaka pufferfish, full body side profile. Pure white background. Round characteristic puffer body, golden stripe pattern. Painterly illustration style. Square format.', ratio: '1:1' },
      { file: 'category-knife-fish.png', prompt: 'Black ghost knife fish (Apteronotus albifrons), full body side profile. Pure white background. Distinctive blade-shaped transparent body with black and white markings. Painterly field guide illustration. Square format.', ratio: '1:1' },
      { file: 'category-gar.png', prompt: 'Alligator gar, full body side profile. Pure white background. Long prehistoric body with distinctive long snout. Olive-grey colouration. Painterly illustration style. Square format.', ratio: '1:1' },
      { file: 'category-angelfish.png', prompt: 'Altum angelfish (Pterophyllum altum), full body side profile. Pure white background. Tall triangular body shape with long flowing fins. Silver body with dark vertical stripes. Painterly field guide illustration. Square format.', ratio: '1:1' },
      { file: 'category-pleco.png', prompt: 'Vampire pleco (Leporacanthicus galaxias), full body side profile. Pure white background. Armoured body with white spots on dark background. Sucker mouth visible. Painterly illustration style. Square format.', ratio: '1:1' },
      { file: 'category-tang.png', prompt: 'G.E.M. tang, full body side profile. Pure white background. Black body with white polka dots. Yellow tail. Painterly field guide illustration. Square format.', ratio: '1:1' },
      { file: 'category-wolffish.png', prompt: 'Wolf fish (Hoplias malabaricus), full body side profile. Pure white background. Muscular elongated body, large mouth. Olive-brown colouration. Painterly illustration style. Square format.', ratio: '1:1' },
      { file: 'category-piranha.png', prompt: 'Red-bellied piranha (Pygocentrus nattereri), full body side profile. Pure white background. Deep-bodied fish, vivid orange-red belly, silver upper body. Powerful jaw visible. Painterly field guide illustration. Square format.', ratio: '1:1' },
    ],
  },
  {
    dir: 'species',
    images: [
      { file: 'species-platinum-arowana.jpg', prompt: 'Platinum arowana (Scleropages formosus), dramatic 3/4 front angle, head and upper body prominent. Silver-white scales catching light. Eye in sharp focus with golden-green iris. Deep teal-black water background (#0B2D36). Caustic light patterns. Painterly naturalistic illustration, moody dramatic lighting. Landscape format.', ratio: '4:3' },
      { file: 'species-gem-tang.jpg', prompt: 'G.E.M. tang close-up, 3/4 angle showing body pattern. White polka dots on black body vivid and sharp. Yellow tail fins visible. Eye prominent. Deep water background (#0B2D36). Dramatic lighting. Painterly naturalistic field guide illustration.', ratio: '4:3' },
      { file: 'species-discus.jpg', prompt: 'Cobalt blue discus, close-up showing full disc profile. Metallic blue colouration richly detailed. Vertical stripe pattern visible. Red eye prominent. Deep teal-black background (#0B2D36). Soft caustic light. Painterly naturalistic illustration.', ratio: '4:3' },
      { file: 'species-wolf-fish.jpg', prompt: 'Wolf fish close-up, dramatic front-facing angle. Powerful jaw prominent, teeth slightly visible. Intense golden eye. Mottled brown-olive scales detailed. Deep dark water (#0B2D36). High contrast lighting. Painterly naturalistic illustration.', ratio: '4:3' },
      { file: 'species-peppermint-angelfish.jpg', prompt: 'Peppermint angelfish close-up, showing vivid red and white stripes in full detail. Small compact body. Deep water background (#0B2D36). Dramatic lighting highlighting the stripe contrast. Painterly naturalistic field guide illustration.', ratio: '4:3' },
      { file: 'species-fahaka-puffer.jpg', prompt: 'Fahaka pufferfish, dramatic 3/4 front angle. Round expressive body, golden-yellow colouration. Distinctive beak-like mouth. Characterful eye in focus. Deep dark water (#0B2D36). Painterly naturalistic illustration with warm lighting.', ratio: '4:3' },
      { file: 'species-arapaima.jpg', prompt: 'Arapaima (Arapaima gigas), full body showing massive scale. Elongated powerful body, mosaic scale pattern with orange-red edges on dark scales near tail. Deep teal water (#0B2D36). Dramatic scale showing the enormous size. Painterly naturalistic illustration.', ratio: '4:3' },
      { file: 'species-alligator-gar.jpg', prompt: 'Albino alligator gar, dramatic side profile showing full prehistoric silhouette. Long tooth-filled snout prominent. Leucistic golden-white colouration. Dark water background (#0B2D36). Moody dramatic lighting. Painterly naturalistic illustration.', ratio: '4:3' },
    ],
  },
  {
    dir: 'care',
    images: [
      { file: 'care-tank-setup-arowana.jpg', prompt: 'Cross-section illustration of a large aquarium tank, cutaway view. Arowana swimming near water surface. Long horizontal tank showing substrate layer, minimal decor, tight-fitting lid. Caustic light from surface. Educational natural history illustration style, warm and informative. Landscape format.', ratio: '16:9' },
      { file: 'care-tank-setup-discus.jpg', prompt: 'Cross-section illustration of a tall aquarium, cutaway view. Group of 6 discus fish swimming mid-water. Dark substrate, minimal plants, heater visible. Warm amber lighting filtering through. Educational illustration style, painterly. Landscape format.', ratio: '16:9' },
      { file: 'care-feeding-guide.jpg', prompt: 'Flat lay illustration of aquarium fish food items arranged neatly: bloodworms, small feeder fish, snail, prawn, pellets. Arranged on a clean white-aqua background. Each item clearly detailed. Botanical illustration style — precise and beautiful. Landscape format.', ratio: '16:9' },
      { file: 'care-water-parameters.jpg', prompt: 'Minimalist illustration of a water testing kit with test tubes showing pH, temperature gauge, and water sample vials against a clean teal-white background. Scientific field guide illustration style. Clean, informative. Landscape format.', ratio: '16:9' },
      { file: 'care-puffer-teeth.jpg', prompt: 'Close-up illustration of a pufferfish beak and teeth, showing the distinctive fused dental plates. Scientific cross-section style showing the beak structure. Educational natural history illustration style. Clean white-aqua background.', ratio: '16:9' },
      { file: 'care-arowana-jump.jpg', prompt: 'Illustration of an arowana leaping from the water surface, dramatic moment frozen. Water droplets scattering. Dark water below, bright surface light above. Shows why a tight lid is essential. Painterly naturalistic illustration with dynamic composition.', ratio: '16:9' },
    ],
  },
  {
    dir: 'textures',
    images: [
      { file: 'texture-fish-scales.jpg', prompt: 'Macro close-up illustration of overlapping fish scales. Colours: deep teal #0B2D36 and electric aqua #29A8C4. Each scale shows subtle iridescence and fine detail. Seamlessly tileable pattern. No individual fish visible — pure abstract scale texture. Square format. Painterly style.', ratio: '1:1' },
      { file: 'texture-caustic-light.jpg', prompt: 'Abstract underwater caustic light pattern. Rippling distorted light on deep teal-black water. Electric aqua and lighter blue light caustics. No fish, no objects — pure abstract underwater light texture. Painterly style. Square format. Can be used as a seamlessly tileable background.', ratio: '1:1' },
      { file: 'texture-water-surface.jpg', prompt: 'Looking-up view from below the water surface. Distorted silvery-aqua surface tension pattern with light refracting through. Deep teal water colour. Abstract, beautiful, calming. Painterly illustration style. Square format.', ratio: '1:1' },
    ],
  },
  {
    dir: 'empty-states',
    images: [
      { file: 'empty-404.png', prompt: 'Friendly naturalistic fish illustration — a small curious fish (loosely based on a clown loach) looking directly at viewer with head slightly tilted, as if confused. Transparent background. Naturalistic but with a warm, approachable quality — achieved through lighting and composition, not cartoon exaggeration. Square format.', ratio: '1:1' },
      { file: 'empty-no-results.png', prompt: 'Small naturalistic fish illustration looking into an empty fishbowl or empty space. Transparent background. The fish should appear curious and slightly puzzled — natural expression achieved through body posture and eye angle, not cartoon features. Painterly illustration style. Square format.', ratio: '1:1' },
      { file: 'empty-loading.png', prompt: 'Simple elegant illustration of a single fish egg or small juvenile fish — something small and delicate suggesting waiting and growth. Transparent background. Clean painterly illustration style. Square format.', ratio: '1:1' },
    ],
  },
  {
    dir: 'og',
    images: [
      { file: 'og-default.jpg', prompt: 'Brand hero image: multiple exotic fish silhouettes arranged elegantly against deep teal-black water (#0B2D36). Arowana, discus, gem tang visible. Dramatic underwater lighting. Space on left for text overlay. Painterly naturalistic illustration. 1200x630px landscape.', ratio: '16:9' },
      { file: 'og-arowana.jpg', prompt: 'Platinum arowana side profile, dramatic, against deep teal-black background (#0B2D36). Silver scales catching light. Space on left side for text. Painterly naturalistic illustration. Wide landscape format 1200x630px.', ratio: '16:9' },
      { file: 'og-discus.jpg', prompt: 'Group of three discus fish, different colour morphs, swimming together. Deep teal-black water (#0B2D36). Warm caustic light. Space for text on left. Painterly naturalistic illustration. 1200x630px landscape.', ratio: '16:9' },
      { file: 'og-rare-fish.jpg', prompt: 'Collage-style arrangement of rare marine fish: gem tang, peppermint angelfish, bladefin basslet, against deep dark ocean water (#0B2D36). Each fish clearly identifiable. Dramatic lighting. Space on left for text. Painterly naturalistic illustration. 1200x630px.', ratio: '16:9' },
    ],
  },
];

const results = [];

async function generateImage(prompt, aspectRatio) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`;
  const body = {
    instances: [{ prompt: STYLE_PREFIX + prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: aspectRatio || '1:1',
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text.slice(0, 300)}`);
  }

  const data = await res.json();
  if (!data.predictions || data.predictions.length === 0) {
    throw new Error('No predictions returned');
  }
  return Buffer.from(data.predictions[0].bytesBase64Encoded, 'base64');
}

async function processImage(batch, img) {
  const dir = path.join(BRAND_DIR, batch.dir);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, img.file);
  const relPath = `/public/images/brand/${batch.dir}/${img.file}`;

  try {
    console.log(`  Generating: ${img.file}...`);
    const buffer = await generateImage(img.prompt, img.ratio);
    fs.writeFileSync(filePath, buffer);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`  ✓ ${img.file} (${sizeKB} KB)`);
    results.push({ file: relPath, status: 'success', size: `${sizeKB} KB` });
  } catch (err) {
    console.error(`  ✗ ${img.file}: ${err.message}`);
    results.push({ file: relPath, status: 'FAILED', size: '-', error: err.message });
  }
}

async function run() {
  console.log('TheFinnery Brand Image Generation');
  console.log('==================================\n');

  for (const batch of batches) {
    console.log(`\nBatch: ${batch.dir}/ (${batch.images.length} images)`);
    console.log('-'.repeat(50));

    // Process 2 at a time to avoid rate limits
    for (let i = 0; i < batch.images.length; i += 2) {
      const chunk = batch.images.slice(i, i + 2);
      await Promise.all(chunk.map(img => processImage(batch, img)));
      // Small delay between pairs to respect rate limits
      if (i + 2 < batch.images.length) {
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }

  // Summary
  console.log('\n\n==================================');
  console.log('GENERATION SUMMARY');
  console.log('==================================\n');

  const successes = results.filter(r => r.status === 'success');
  const failures = results.filter(r => r.status === 'FAILED');

  console.log(`Total: ${results.length} | Success: ${successes.length} | Failed: ${failures.length}\n`);

  console.log('File'.padEnd(60) + 'Size'.padEnd(12) + 'Status');
  console.log('-'.repeat(80));
  for (const r of results) {
    console.log(r.file.padEnd(60) + (r.size || '-').padEnd(12) + r.status);
  }

  if (failures.length > 0) {
    console.log('\nFailed files:');
    for (const f of failures) {
      console.log(`  ${f.file}: ${f.error}`);
    }
  }

  // Create index.json
  const indexPath = path.join(BRAND_DIR, 'index.json');
  const index = results
    .filter(r => r.status === 'success')
    .map(r => ({ path: r.file.replace('/public', ''), size: r.size }));
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log(`\nIndex written to ${indexPath}`);
}

run().catch(console.error);
