import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

import { GoogleGenAI } from "@google/genai";
import sharp from "sharp";
import { writeFile, mkdir } from "fs/promises";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const MODEL = "imagen-4.0-generate-001";
const BASE_DIR = path.resolve(__dirname, "../public/images/brand");
const DELAY_MS = 2000; // pause between requests to avoid rate limits

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface ImageSpec {
  filename: string;
  prompt: string;
  dir: string;
  width: number;
  height: number;
  format: "jpg" | "png";
  quality: number;
  aspectRatio: string;
}

// ---------------------------------------------------------------------------
// Master style prefix — prepended to every prompt
// ---------------------------------------------------------------------------
const STYLE_PREFIX =
  "Painterly naturalistic illustration. Scientific field guide quality. Soft directional lighting from above-left. Subtle caustic water light ripples on fish. Anatomically accurate — real proportions, real colouration, no exaggerated or cartoon features. Slight painterly brushwork texture visible in backgrounds, smooth rendering on the fish itself. Natural history museum print quality. Think National Geographic meets Pixar art department concept art. Never: cartoon eyes, smiling expressions, cute rounded proportions, studio product-photo style, photorealistic CGI render. ";

// ---------------------------------------------------------------------------
// Aspect-ratio helper
// ---------------------------------------------------------------------------
function getAspectRatio(w: number, h: number): string {
  const ratio = w / h;
  if (Math.abs(ratio - 16 / 9) < 0.15) return "16:9";
  if (Math.abs(ratio - 4 / 3) < 0.1) return "4:3";
  if (Math.abs(ratio - 3 / 2) < 0.1) return "4:3"; // closest available
  if (Math.abs(ratio - 1) < 0.05) return "1:1";
  return "16:9"; // fallback
}

// ---------------------------------------------------------------------------
// All 44 image definitions
// ---------------------------------------------------------------------------
const images: ImageSpec[] = [
  // ── BATCH 1 — Hero images ──────────────────────────────────────────────
  {
    filename: "hero-platinum-arowana.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Platinum arowana (Scleropages formosus), full body side profile swimming horizontally left to right. Pure silver-white scales with subtle iridescence. No yellow tint — this is the platinum variant, pure white. Barbels visible. Deep teal-black water background (#0B2D36). Soft caustic light ripples from the water surface above. 16:9 landscape format.",
  },
  {
    filename: "hero-gem-tang.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "G.E.M. Tang (Zebrasoma gemmatum), full body side profile. Black body covered in vivid white polka dots. Oval disc-shaped body characteristic of Zebrasoma. Yellow tail fin. Deep teal-black water (#0B2D36). Caustic light from above. 16:9 landscape format.",
  },
  {
    filename: "hero-discus.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Cobalt blue discus fish (Symphysodon aequifasciatus), full body side profile showing perfect disc shape. Vivid metallic blue colouration with faint vertical stripes. Red eye. Deep teal-black water (#0B2D36). Soft caustic light from above. 16:9 landscape format.",
  },
  {
    filename: "hero-wolf-fish.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Wolf fish (Hoplias malabaricus), full body side profile. Powerful muscular body, large jaw with visible teeth slightly parted. Olive-brown mottled colouration. Intense predatory eye. Deep teal-black water (#0B2D36). Dramatic side lighting. 16:9 landscape format.",
  },
  {
    filename: "hero-peppermint-angelfish.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Peppermint angelfish (Centropyge boylei), full body side profile. Vivid alternating red-orange and white vertical stripes. Small compact oval body. Deep teal-black water (#0B2D36) with subtle caustic light. 16:9 landscape format.",
  },
  {
    filename: "hero-fahaka-puffer.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Fahaka pufferfish (Tetraodon lineatus), full body side profile. Golden-yellow body with dark brown horizontal stripe pattern. Characterful round eye. Beak-like mouth visible. Deep teal-black water (#0B2D36). Soft lighting. 16:9 landscape format.",
  },
  {
    filename: "hero-flowerhorn.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Flowerhorn cichlid, full body side profile. Large distinctive red nuchal hump (kok) on forehead. Vivid red-orange body with dark lateral spots and markings. Deep teal-black water (#0B2D36). Dramatic lighting. 16:9 landscape format.",
  },
  {
    filename: "hero-albino-alligator-gar.jpg",
    dir: "hero",
    width: 1920, height: 1080, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Albino alligator gar (Atractosteus spatula), full body side profile. Elongated prehistoric body, distinctive dual-rowed teeth visible in long snout. Leucistic golden-white colouration. Deep teal-black water (#0B2D36). Dramatic side lighting showing the prehistoric silhouette. 16:9 landscape format.",
  },

  // ── BATCH 2 — Category icons ───────────────────────────────────────────
  {
    filename: "category-arowana.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Platinum arowana fish, full body side profile swimming right. Pure white background, no shadow. Scientifically accurate anatomy. Silver-white colouration. Square format, fish centred with generous padding.",
  },
  {
    filename: "category-discus.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Cobalt blue discus fish, full body side profile. Pure white background, no shadow. Perfect disc-shaped body. Vivid blue colouration. Field guide illustration style. Square format.",
  },
  {
    filename: "category-catfish.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Shovelnose tiger catfish (Pseudoplatystoma tigrinum), full body side profile. Pure white background. Distinctive elongated flat head, tiger stripe pattern. Square format.",
  },
  {
    filename: "category-cichlid.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Flowerhorn cichlid, full body side profile. Pure white background. Large nuchal hump, vivid red-orange colouration. Field guide illustration. Square format.",
  },
  {
    filename: "category-pufferfish.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Fahaka pufferfish, full body side profile. Pure white background. Round characteristic puffer body, golden stripe pattern. Square format.",
  },
  {
    filename: "category-knife-fish.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Black ghost knife fish (Apteronotus albifrons), full body side profile. Pure white background. Distinctive blade-shaped transparent body with black and white markings. Field guide illustration. Square format.",
  },
  {
    filename: "category-gar.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Alligator gar, full body side profile. Pure white background. Long prehistoric body with distinctive long snout. Olive-grey colouration. Square format.",
  },
  {
    filename: "category-angelfish.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Altum angelfish (Pterophyllum altum), full body side profile. Pure white background. Tall triangular body shape with long flowing fins. Silver body with dark vertical stripes. Field guide illustration. Square format.",
  },
  {
    filename: "category-pleco.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Vampire pleco (Leporacanthicus galaxias), full body side profile. Pure white background. Armoured body with white spots on dark background. Sucker mouth visible. Square format.",
  },
  {
    filename: "category-tang.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "G.E.M. tang, full body side profile. Pure white background. Black body with white polka dots. Yellow tail. Field guide illustration. Square format.",
  },
  {
    filename: "category-wolffish.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Wolf fish (Hoplias malabaricus), full body side profile. Pure white background. Muscular elongated body, large mouth. Olive-brown colouration. Square format.",
  },
  {
    filename: "category-piranha.png",
    dir: "category",
    width: 800, height: 800, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Red-bellied piranha (Pygocentrus nattereri), full body side profile. Pure white background. Deep-bodied fish, vivid orange-red belly, silver upper body. Powerful jaw visible. Field guide illustration. Square format.",
  },

  // ── BATCH 3 — Species guide headers ────────────────────────────────────
  {
    filename: "species-platinum-arowana.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "Platinum arowana (Scleropages formosus), dramatic 3/4 front angle, head and upper body prominent. Silver-white scales catching light. Eye in sharp focus with golden-green iris. Deep teal-black water background (#0B2D36). Caustic light patterns. Moody dramatic lighting. Landscape format.",
  },
  {
    filename: "species-gem-tang.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "G.E.M. tang close-up, 3/4 angle showing body pattern. White polka dots on black body vivid and sharp. Yellow tail fins visible. Eye prominent. Deep water background (#0B2D36). Dramatic lighting. Field guide illustration.",
  },
  {
    filename: "species-discus.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "Cobalt blue discus, close-up showing full disc profile. Metallic blue colouration richly detailed. Vertical stripe pattern visible. Red eye prominent. Deep teal-black background (#0B2D36). Soft caustic light.",
  },
  {
    filename: "species-wolf-fish.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "Wolf fish close-up, dramatic front-facing angle. Powerful jaw prominent, teeth slightly visible. Intense golden eye. Mottled brown-olive scales detailed. Deep dark water (#0B2D36). High contrast lighting.",
  },
  {
    filename: "species-peppermint-angelfish.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "Peppermint angelfish close-up, showing vivid red and white stripes in full detail. Small compact body. Deep water background (#0B2D36). Dramatic lighting highlighting the stripe contrast. Field guide illustration.",
  },
  {
    filename: "species-fahaka-puffer.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "Fahaka pufferfish, dramatic 3/4 front angle. Round expressive body, golden-yellow colouration. Distinctive beak-like mouth. Characterful eye in focus. Deep dark water (#0B2D36). Warm lighting.",
  },
  {
    filename: "species-arapaima.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "Arapaima (Arapaima gigas), full body showing massive scale. Elongated powerful body, mosaic scale pattern with orange-red edges on dark scales near tail. Deep teal water (#0B2D36). Dramatic scale showing the enormous size.",
  },
  {
    filename: "species-alligator-gar.jpg",
    dir: "species",
    width: 1200, height: 800, format: "jpg", quality: 95,
    aspectRatio: "4:3",
    prompt: "Albino alligator gar, dramatic side profile showing full prehistoric silhouette. Long tooth-filled snout prominent. Leucistic golden-white colouration. Dark water background (#0B2D36). Moody dramatic lighting.",
  },

  // ── BATCH 4 — Care guide illustrations ─────────────────────────────────
  {
    filename: "care-tank-setup-arowana.jpg",
    dir: "care",
    width: 1200, height: 675, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Cross-section illustration of a large aquarium tank, cutaway view. Arowana swimming near water surface. Long horizontal tank showing substrate layer, minimal decor, tight-fitting lid. Caustic light from surface. Educational natural history illustration style, warm and informative. Landscape format.",
  },
  {
    filename: "care-tank-setup-discus.jpg",
    dir: "care",
    width: 1200, height: 675, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Cross-section illustration of a tall aquarium, cutaway view. Group of 6 discus fish swimming mid-water. Dark substrate, minimal plants, heater visible. Warm amber lighting filtering through. Educational illustration style. Landscape format.",
  },
  {
    filename: "care-feeding-guide.jpg",
    dir: "care",
    width: 1200, height: 675, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Flat lay illustration of aquarium fish food items arranged neatly: bloodworms, small feeder fish, snail, prawn, pellets. Arranged on a clean white-aqua background. Each item clearly detailed. Botanical illustration style — precise and beautiful. Landscape format.",
  },
  {
    filename: "care-water-parameters.jpg",
    dir: "care",
    width: 1200, height: 675, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Minimalist illustration of a water testing kit with test tubes showing pH, temperature gauge, and water sample vials against a clean teal-white background. Scientific field guide illustration style. Clean, informative. Landscape format.",
  },
  {
    filename: "care-puffer-teeth.jpg",
    dir: "care",
    width: 1200, height: 675, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Close-up illustration of a pufferfish beak and teeth, showing the distinctive fused dental plates. Scientific cross-section style showing the beak structure. Educational natural history illustration style. Clean white-aqua background. Landscape format.",
  },
  {
    filename: "care-arowana-jump.jpg",
    dir: "care",
    width: 1200, height: 675, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Illustration of an arowana leaping from the water surface, dramatic moment frozen. Water droplets scattering. Dark water below, bright surface light above. Shows why a tight lid is essential. Dynamic composition. Landscape format.",
  },

  // ── BATCH 5 — Brand textures ───────────────────────────────────────────
  {
    filename: "texture-fish-scales.jpg",
    dir: "textures",
    width: 1200, height: 1200, format: "jpg", quality: 90,
    aspectRatio: "1:1",
    prompt: "Macro close-up illustration of overlapping fish scales. Colours: deep teal #0B2D36 and electric aqua #29A8C4. Each scale shows subtle iridescence and fine detail. Seamlessly tileable pattern. No individual fish visible — pure abstract scale texture. Square format.",
  },
  {
    filename: "texture-caustic-light.jpg",
    dir: "textures",
    width: 1200, height: 1200, format: "jpg", quality: 90,
    aspectRatio: "1:1",
    prompt: "Abstract underwater caustic light pattern. Rippling distorted light on deep teal-black water. Electric aqua and lighter blue light caustics. No fish, no objects — pure abstract underwater light texture. Square format. Seamlessly tileable background.",
  },
  {
    filename: "texture-water-surface.jpg",
    dir: "textures",
    width: 1200, height: 1200, format: "jpg", quality: 90,
    aspectRatio: "1:1",
    prompt: "Looking-up view from below the water surface. Distorted silvery-aqua surface tension pattern with light refracting through. Deep teal water colour. Abstract, beautiful, calming. Square format.",
  },

  // ── BATCH 6 — Empty states ─────────────────────────────────────────────
  {
    filename: "empty-404.png",
    dir: "empty-states",
    width: 600, height: 600, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Friendly naturalistic fish illustration — a small curious fish (loosely based on a clown loach) looking directly at viewer with head slightly tilted, as if confused. White background. Naturalistic but with a warm, approachable quality — achieved through lighting and composition, not cartoon exaggeration. Square format.",
  },
  {
    filename: "empty-no-results.png",
    dir: "empty-states",
    width: 600, height: 600, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Small naturalistic fish illustration looking into an empty fishbowl or empty space. White background. The fish should appear curious and slightly puzzled — natural expression achieved through body posture and eye angle, not cartoon features. Square format.",
  },
  {
    filename: "empty-loading.png",
    dir: "empty-states",
    width: 600, height: 600, format: "png", quality: 100,
    aspectRatio: "1:1",
    prompt: "Simple elegant illustration of a single fish egg or small juvenile fish — something small and delicate suggesting waiting and growth. White background. Clean illustration style. Square format.",
  },

  // ── BATCH 7 — OG images ────────────────────────────────────────────────
  {
    filename: "og-default.jpg",
    dir: "og",
    width: 1200, height: 630, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Brand hero image: multiple exotic fish silhouettes arranged elegantly against deep teal-black water (#0B2D36). Arowana, discus, gem tang visible. Dramatic underwater lighting. Space on left for text overlay. 1200×630px landscape.",
  },
  {
    filename: "og-arowana.jpg",
    dir: "og",
    width: 1200, height: 630, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Platinum arowana side profile, dramatic, against deep teal-black background (#0B2D36). Silver scales catching light. Space on left side for text. Wide landscape format 1200×630px.",
  },
  {
    filename: "og-discus.jpg",
    dir: "og",
    width: 1200, height: 630, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Group of three discus fish, different colour morphs, swimming together. Deep teal-black water (#0B2D36). Warm caustic light. Space for text on left. 1200×630px landscape.",
  },
  {
    filename: "og-rare-fish.jpg",
    dir: "og",
    width: 1200, height: 630, format: "jpg", quality: 95,
    aspectRatio: "16:9",
    prompt: "Collage-style arrangement of rare marine fish: gem tang, peppermint angelfish, bladefin basslet, against deep dark ocean water. Each fish clearly identifiable. Dramatic lighting. Space on left for text. 1200×630px landscape.",
  },
];

// ---------------------------------------------------------------------------
// Generation
// ---------------------------------------------------------------------------

interface Result {
  filename: string;
  dir: string;
  width: number;
  height: number;
  status: "success" | "failed";
  fileSize?: number;
  error?: string;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function generateImage(spec: ImageSpec): Promise<Result> {
  const fullPrompt = STYLE_PREFIX + spec.prompt;
  const outDir = path.join(BASE_DIR, spec.dir);
  const outPath = path.join(outDir, spec.filename);

  try {
    await mkdir(outDir, { recursive: true });

    console.log(`  Generating: ${spec.dir}/${spec.filename} ...`);

    const response = await ai.models.generateImages({
      model: MODEL,
      prompt: fullPrompt,
      config: {
        numberOfImages: 1,
        aspectRatio: spec.aspectRatio as any,
      },
    });

    const imageData = response.generatedImages?.[0]?.image?.imageBytes;
    if (!imageData) {
      throw new Error("No image data returned from API");
    }

    const rawBuffer = Buffer.from(imageData, "base64");

    // Post-process with sharp: resize to exact dimensions + format conversion
    let pipeline = sharp(rawBuffer).resize(spec.width, spec.height, {
      fit: "cover",
      position: "centre",
    });

    let finalBuffer: Buffer;
    if (spec.format === "jpg") {
      finalBuffer = await pipeline.jpeg({ quality: spec.quality }).toBuffer();
    } else {
      finalBuffer = await pipeline.png().toBuffer();
    }

    await writeFile(outPath, finalBuffer);
    const fileSize = finalBuffer.length;

    console.log(`  ✓ ${spec.dir}/${spec.filename} (${(fileSize / 1024).toFixed(0)} KB)`);

    return {
      filename: spec.filename,
      dir: spec.dir,
      width: spec.width,
      height: spec.height,
      status: "success",
      fileSize,
    };
  } catch (err: any) {
    const msg = err?.message || String(err);
    console.error(`  ✗ ${spec.dir}/${spec.filename} — ${msg}`);
    return {
      filename: spec.filename,
      dir: spec.dir,
      width: spec.width,
      height: spec.height,
      status: "failed",
      error: msg,
    };
  }
}

async function main() {
  console.log(`\nThe Fish Collection Brand Image Generator`);
  console.log(`Model: ${MODEL}`);
  console.log(`Output: ${BASE_DIR}`);
  console.log(`Total images: ${images.length}\n`);

  const results: Result[] = [];

  // Group images by batch for logging
  const batches = [
    { name: "Batch 1 — Hero images", start: 0, count: 8 },
    { name: "Batch 2 — Category icons", start: 8, count: 12 },
    { name: "Batch 3 — Species guide headers", start: 20, count: 8 },
    { name: "Batch 4 — Care guide illustrations", start: 28, count: 6 },
    { name: "Batch 5 — Brand textures", start: 34, count: 3 },
    { name: "Batch 6 — Empty states", start: 37, count: 3 },
    { name: "Batch 7 — OG images", start: 40, count: 4 },
  ];

  for (const batch of batches) {
    console.log(`\n── ${batch.name} ──`);
    const batchImages = images.slice(batch.start, batch.start + batch.count);

    for (const spec of batchImages) {
      const result = await generateImage(spec);
      results.push(result);
      await sleep(DELAY_MS);
    }
  }

  // ── Summary ──────────────────────────────────────────────────────────
  const successes = results.filter((r) => r.status === "success");
  const failures = results.filter((r) => r.status === "failed");

  console.log("\n\n══════════════════════════════════════════════════════");
  console.log("  GENERATION SUMMARY");
  console.log("══════════════════════════════════════════════════════\n");

  // Table header
  console.log(
    "Filename".padEnd(42) +
      "Dimensions".padEnd(14) +
      "Size".padEnd(10) +
      "Status"
  );
  console.log("─".repeat(75));

  for (const r of results) {
    const dims = `${r.width}×${r.height}`;
    const size = r.fileSize ? `${(r.fileSize / 1024).toFixed(0)} KB` : "—";
    const status = r.status === "success" ? "OK" : `FAIL: ${r.error?.slice(0, 30)}`;
    console.log(
      `${r.dir}/${r.filename}`.padEnd(42) +
        dims.padEnd(14) +
        size.padEnd(10) +
        status
    );
  }

  console.log("─".repeat(75));
  console.log(`\nSuccessful: ${successes.length} / ${results.length}`);
  console.log(`Failed:     ${failures.length} / ${results.length}`);

  if (failures.length > 0) {
    console.log("\nFailed files:");
    for (const f of failures) {
      console.log(`  - ${f.dir}/${f.filename}: ${f.error}`);
    }
  }

  // ── Write index.json ─────────────────────────────────────────────────
  const indexData = {
    generated: new Date().toISOString(),
    model: MODEL,
    total: results.length,
    successful: successes.length,
    failed: failures.length,
    images: results.map((r) => ({
      path: `/images/brand/${r.dir}/${r.filename}`,
      directory: r.dir,
      filename: r.filename,
      width: r.width,
      height: r.height,
      status: r.status,
      fileSize: r.fileSize || null,
    })),
  };

  const indexPath = path.join(BASE_DIR, "index.json");
  await mkdir(BASE_DIR, { recursive: true });
  await writeFile(indexPath, JSON.stringify(indexData, null, 2));
  console.log(`\nIndex written to: ${indexPath}`);
  console.log("\nDone!\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
