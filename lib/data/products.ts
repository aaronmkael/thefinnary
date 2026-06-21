import type { Product } from '@/types/product';

export const products: Product[] = [
  // ──────────────────────────────────────────────
  // 1. Platinum Arowana
  // ──────────────────────────────────────────────
  {
    commonName: 'Platinum Arowana',
    scientificName: 'Scleropages formosus',
    slug: 'platinum-arowana',
    category: 'arowana',
    sku: 'TF-ARO-PLAT-001',
    priceUSD: 28500,
    images: [
      {
        url: '/images/products/platinum-arowana-hero.jpg',
        alt: 'Platinum Arowana (Scleropages formosus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Platinum Arowana stands as the undisputed apex of freshwater fishkeeping — a living sculpture of molten silver that has commanded six-figure prices at auction and inspired collectors across three continents to redesign entire rooms around a single specimen. At The Fish Collection, we source only verified platinum-grade individuals whose scales exhibit the pure, unbroken metallic sheen that distinguishes a true platinum from the more common gold or silver variants. Every fish we offer has been documented from juvenile stage, with lineage paperwork tracing its breeding line back to CITES-certified farms in Southeast Asia.

What makes the Platinum Arowana genuinely extraordinary is the absence of pigmentation across its entire body. Unlike the Super Red or Cross Back Golden varieties — both spectacular in their own right — the platinum morph carries a genetic condition that eliminates dark pigment entirely, leaving every scale a uniform, mirror-like white-gold. Under properly calibrated LED lighting, the fish appears to glow from within, an effect that intensifies as the specimen matures and its scales thicken. Our current offering measures approximately twenty-two inches and displays flawless finnage with no curl, no drop-eye, and no scale imperfections — criteria that separate a five-figure fish from a mid-range one.

Housing a Platinum Arowana is a serious commitment. We require a minimum 300-gallon aquarium, though we strongly recommend 500 gallons or larger for a full-grown adult that can reach thirty-six inches in total length. The tank must be covered — arowanas are powerful jumpers capable of launching themselves several feet into the air. Filtration should turn the entire water volume at least six times per hour; we typically spec sumps rated for twice the tank's capacity. Water chemistry is forgiving relative to the fish's price tag: a temperature range of 75 to 82 degrees Fahrenheit and a pH between 6.0 and 7.0 will keep the fish comfortable. Weekly water changes of 25 to 30 percent are non-negotiable.

Diet is where many keepers under-deliver. In the wild, Scleropages formosus is an ambush predator that feeds on insects, smaller fish, and the occasional small vertebrate that strays too close to the surface. In captivity, we recommend a rotation of gut-loaded crickets, mealworms, market shrimp, and high-quality floating pellets formulated for large predatory fish. Feeder fish should be used sparingly and only from quarantined sources — introducing parasites to a fish of this value is a catastrophic and entirely preventable mistake.

Culturally, the Asian Arowana occupies a singular place in Feng Shui tradition. Known colloquially as the Dragon Fish, it is believed to bring prosperity, power, and protection to its owner. The platinum variant, with its association to purity and precious metal, is considered the most auspicious of all color morphs. Serious collectors in Singapore, Hong Kong, Tokyo, and increasingly in North America treat these fish as both living art and tangible assets, with specimens appreciating in value over their twenty-to-twenty-five-year lifespan.

The Fish Collection ships every Arowana via dedicated climate-controlled courier — never standard overnight freight. The fish is triple-bagged in insulated, oxygen-injected containers with a battery-powered heat pack calibrated to transit time. A member of our aquatics team will contact you within two hours of purchase to coordinate delivery logistics, confirm your tank parameters, and walk you through our acclimation protocol. Our live arrival guarantee is absolute: if anything goes wrong in transit, we replace the specimen or issue a full refund. No exceptions, no fine print.

This is not a fish for casual hobbyists. It is a centerpiece animal that demands expert-level husbandry, significant infrastructure, and a genuine reverence for one of the most ancient and magnificent freshwater species on Earth. If that describes you, we would be honored to place this Platinum Arowana in your care.`,
    seoDescription:
      'Platinum Arowana for sale — the rarest freshwater fish on Earth. Live arrival guaranteed, overnight shipping. From $28,500. Expert-bred at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 300,
    maxSizeInches: 36,
    origin: 'Southeast Asia',
    diet: 'Carnivore — live foods, insects, small fish',
    temperament: 'Semi-aggressive',
    lifespan: '20-25 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'How much does a Platinum Arowana cost?',
        answer:
          'Platinum Arowanas typically range from $15,000 to over $100,000 depending on size, scale quality, and lineage documentation. Our current specimen is priced at $28,500, reflecting its flawless platinum coloration and certified breeding history. Auction records for exceptional individuals have exceeded $300,000 in Asian markets.',
      },
      {
        question: 'How big does a Platinum Arowana get?',
        answer:
          'A fully grown Platinum Arowana reaches 30 to 36 inches in captivity, with exceptional specimens occasionally exceeding that in pond environments. Growth is steady — expect roughly 2 inches per month during the first year, tapering to slower gains after 18 months. Full adult size is typically achieved by age 4 to 5 years.',
      },
      {
        question: 'Is it legal to own a Platinum Arowana?',
        answer:
          'Asian Arowanas are CITES Appendix I listed, meaning international trade requires permits and microchip documentation. In the United States, import and interstate sale of Scleropages formosus is prohibited under the Endangered Species Act. The Fish Collection operates exclusively within legal frameworks, and all our Arowanas are sold with full CITES paperwork to buyers in jurisdictions where ownership is permitted.',
      },
      {
        question: 'What tank size does a Platinum Arowana need?',
        answer:
          'We require a minimum 300-gallon aquarium, though 500 gallons or larger is strongly recommended for long-term housing. The tank should be at least 8 feet long and 2.5 feet wide to allow comfortable turning. A secure, weighted lid is mandatory — Arowanas are powerful jumpers capable of clearing several feet.',
      },
      {
        question: 'What do Platinum Arowanas eat?',
        answer:
          'Platinum Arowanas are obligate carnivores that thrive on a varied diet of gut-loaded crickets, mealworms, market shrimp, and high-quality pellets. We feed ours three to four times weekly, rotating protein sources to ensure complete nutrition. Feeder fish should only come from quarantined sources to prevent parasite introduction.',
      },
      {
        question: 'How long does a Platinum Arowana live?',
        answer:
          'With proper care, Platinum Arowanas live 20 to 25 years in captivity, with some documented specimens exceeding 30 years. Longevity depends heavily on water quality, diet variety, and tank size. These are generational pets that can outlive many dog and cat breeds by a significant margin.',
      },
    ],
    relatedSlugs: ['gem-tang', 'peppermint-angelfish', 'clarion-angelfish'],
    speciesGuideSlug: 'platinum-arowana',
    ratingAverage: 4.9,
    reviewCount: 12,
  },

  // ──────────────────────────────────────────────
  // 2. Gem Tang
  // ──────────────────────────────────────────────
  {
    commonName: 'Gem Tang',
    scientificName: 'Zebrasoma gemmatum',
    slug: 'gem-tang',
    category: 'tang',
    sku: 'TF-TNG-GEM-001',
    priceUSD: 3200,
    images: [
      {
        url: '/images/products/gem-tang-hero.jpg',
        alt: 'Gem Tang (Zebrasoma gemmatum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Gem Tang is the most coveted surgeonfish in the marine aquarium hobby, and for good reason. Zebrasoma gemmatum combines a velvety jet-black body with a constellation of brilliant white spots that look as though they were placed by hand — a pattern so striking that even seasoned reef keepers stop mid-sentence when they see one in person for the first time. The Fish Collection sources our Gem Tangs directly from licensed collectors operating in the waters off Mauritius and the coast of Mozambique, the only two regions where this species is found in meaningful numbers.

What drives the Gem Tang's price is not merely its beauty — it is scarcity compounded by collection difficulty. Zebrasoma gemmatum inhabits deep, current-swept reefs in the western Indian Ocean, typically between 30 and 60 meters of depth. Collecting at those depths requires mixed-gas diving, specialized decompression protocols, and a level of expertise that only a handful of operations worldwide possess. The result is that total annual exports rarely exceed a few hundred specimens globally. When one becomes available, it sells quickly. Our current specimen arrived in excellent condition, eating frozen mysis and nori within 48 hours of acclimation — a strong indicator of a healthy, well-handled fish.

In the aquarium, the Gem Tang is a model citizen for a large reef system. At a maximum size of 8.5 inches, it requires a minimum 180-gallon tank with ample live rock for grazing and territorial retreat. Like all Zebrasoma species, it is primarily herbivorous, spending the majority of its day picking at algae on rock surfaces. We supplement with sheets of dried nori, spirulina-enriched flake, and frozen preparations that include marine algae. A well-fed Gem Tang maintains its deep black coloration and develops increasingly vivid spotting as it matures.

Temperament sits in the semi-aggressive range — typical for tangs. A Gem Tang will establish territory and may chase similarly shaped fish, particularly other tangs introduced after it has settled in. The standard approach is to add the Gem Tang last if you plan to keep multiple surgeonfish, or to introduce all tangs simultaneously in a sufficiently large system. Aggression is manageable and rarely escalates to injury in a properly sized aquarium with adequate structure.

Water parameters should track standard reef conditions: 74 to 80 degrees Fahrenheit, pH of 8.1 to 8.4, specific gravity around 1.025, and stable alkalinity. Gem Tangs are not unusually sensitive, but they do not tolerate nitrate spikes or sudden parameter swings — conditions that can trigger lateral line erosion, a disfiguring condition common in tangs kept in suboptimal water quality. Weekly water changes of 10 to 15 percent and a quality protein skimmer are essential.

With a lifespan of 10 to 15 years, the Gem Tang is a long-term investment in both financial and emotional terms. The fish you purchase today will be a cornerstone of your reef for over a decade. The Fish Collection ships all marine specimens in insulated, oxygen-saturated containers with thermal regulation packs sized to transit duration. Our live arrival guarantee covers every shipment, and our marine biologist team is available post-purchase to advise on acclimation, quarantine, and long-term husbandry.

If you have been waiting for a Gem Tang to become available, the wait is over. This is a specimen-grade fish from one of the most reliable collection streams in the Indian Ocean, and it will not last long.`,
    seoDescription:
      'Gem Tang for sale — the rarest surgeonfish in the hobby. Live arrival guaranteed, overnight shipping. From $3,200. Expert-bred at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 180,
    maxSizeInches: 8.5,
    origin: 'Indian Ocean (Mauritius, Mozambique)',
    diet: 'Herbivore — marine algae, nori, spirulina',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 74,
      tempMax: 80,
      phMin: 8.1,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'How much does a Gem Tang cost?',
        answer:
          'Gem Tangs typically sell for $2,500 to $5,000 depending on size and condition. Our current specimen is priced at $3,200, reflecting its excellent health and feeding response. Prices have remained elevated for over a decade due to extremely limited collection from deep reefs in the western Indian Ocean.',
      },
      {
        question: 'How big does a Gem Tang get?',
        answer:
          'Gem Tangs reach a maximum size of approximately 8.5 inches in captivity. They grow at a moderate pace, reaching near-adult size within 2 to 3 years. Their compact body shape means they carry their size well without appearing bulky in the aquarium.',
      },
      {
        question: 'What tank size does a Gem Tang need?',
        answer:
          'A minimum of 180 gallons is required for a single Gem Tang, with 250 gallons or more recommended if you plan to keep it alongside other tangs. The tank should have extensive live rock for grazing and multiple sight-line breaks to reduce territorial aggression.',
      },
      {
        question: 'What do Gem Tangs eat?',
        answer:
          'Gem Tangs are herbivores that graze on algae throughout the day. In captivity, offer dried nori sheets, spirulina-enriched flake or pellet food, and frozen preparations containing marine algae. A varied plant-based diet maintains their deep black coloration and overall health.',
      },
      {
        question: 'Can a Gem Tang live with other fish?',
        answer:
          'Yes, Gem Tangs coexist well with most reef-safe species including clownfish, wrasses, and dwarf angelfish. They can be semi-aggressive toward other tangs, especially similar-shaped Zebrasoma species. Adding the Gem Tang last or introducing all tangs simultaneously minimizes territorial disputes.',
      },
      {
        question: 'Where can I buy a Gem Tang?',
        answer:
          'Gem Tangs are available through select specialty retailers like The Fish Collection who maintain direct relationships with licensed Indian Ocean collectors. Due to extreme rarity, most local fish stores cannot source them. We recommend purchasing only from vendors who provide live arrival guarantees and post-purchase husbandry support.',
      },
    ],
    relatedSlugs: ['peppermint-angelfish', 'clarion-angelfish', 'platinum-arowana'],
    speciesGuideSlug: 'gem-tang',
    ratingAverage: 5.0,
    reviewCount: 8,
  },

  // ──────────────────────────────────────────────
  // 3. Peppermint Angelfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Peppermint Angelfish',
    scientificName: 'Centropyge boylei',
    slug: 'peppermint-angelfish',
    category: 'angelfish',
    sku: 'TF-ANG-PEP-001',
    priceUSD: 22000,
    images: [
      {
        url: '/images/products/peppermint-angelfish-hero.jpg',
        alt: 'Peppermint Angelfish (Centropyge boylei) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Peppermint Angelfish is widely regarded as the holy grail of marine fishkeeping — a species so rare that fewer than a dozen specimens have ever been offered for private sale worldwide. Centropyge boylei inhabits the deep reef slopes surrounding the Cook Islands at depths of 55 to 120 meters, far beyond the reach of conventional SCUBA equipment. Collection requires advanced technical diving with closed-circuit rebreathers, slow decompression ascents, and immediate transfer to pressurized holding systems that gradually acclimate the fish to surface pressure over a period of days. The logistical chain from reef to tank is extraordinarily complex, which is precisely why this fish commands the prices it does.

What you see when a Peppermint Angelfish enters your aquarium is unlike anything else in the hobby. The body is a vivid reddish-orange marked with bold white vertical bars — a color combination that inspired its common name. At just three inches fully grown, it is among the smallest fish to carry a five-figure price tag, yet its visual impact is inversely proportional to its size. Under reef lighting, the red intensifies to an almost neon brilliance, and the white bands fluoresce subtly, creating an effect that photographs cannot fully capture.

Despite its extraordinary rarity, the Peppermint Angelfish is surprisingly adaptable once properly decompressed and acclimated. In its natural habitat it feeds on sponges, tunicates, and algae growing on deep rock faces. In captivity, well-acclimated specimens transition to a diet of frozen mysis, enriched brine shrimp, finely chopped seafood, and high-quality angelfish preparations that include sponge material. Our current specimen is eating aggressively and shows no signs of decompression stress — a critical indicator that the collection and acclimation process was handled correctly.

Housing requirements are modest by rare-fish standards. A 125-gallon reef aquarium with stable parameters provides an ideal environment. Water temperature should be maintained between 72 and 78 degrees Fahrenheit — slightly cooler than typical tropical reef setups, reflecting the fish's deep-water origins. pH should hold steady between 8.1 and 8.4. The Peppermint Angelfish is peaceful by nature, making it compatible with a wide range of reef inhabitants including corals, invertebrates, and other non-aggressive fish. We do advise against housing it with larger, boisterous species that might outcompete it for food.

There is an important conservation dimension to this purchase. Every Peppermint Angelfish collected for the aquarium trade is taken under strict permit from Cook Islands fisheries authorities, with collection quotas that ensure population sustainability. The extreme depth and difficulty of collection acts as a natural limiter — there is no possibility of overcollection when each dive yields at most one or two specimens. By purchasing through The Fish Collection, you are supporting a collection model that prioritizes species preservation over volume.

Our shipping protocol for this specimen involves a dedicated courier service with real-time temperature and dissolved-oxygen monitoring throughout transit. A member of our marine biology team will personally coordinate the delivery window with you and remain available by phone during the entire acclimation process. Our live arrival guarantee applies without reservation.

The Peppermint Angelfish is not merely a fish — it is a once-in-a-career acquisition for the collector who has seen everything else. If this listing is active, the specimen is available. We do not expect it to remain so for long.`,
    seoDescription:
      'Peppermint Angelfish for sale — the rarest marine fish in the world. Live arrival guaranteed, overnight shipping. From $22,000. Expert-bred at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 125,
    maxSizeInches: 3,
    origin: 'Cook Islands (deep reef 55-120m)',
    diet: 'Omnivore — sponges, algae, prepared foods',
    temperament: 'Peaceful',
    lifespan: '8-12 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 78,
      phMin: 8.1,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'How much does a Peppermint Angelfish cost?',
        answer:
          'Peppermint Angelfish typically sell for $20,000 to $30,000, with the famous Waikiki Aquarium specimen reportedly valued at over $30,000. Our current offering is priced at $22,000. The extreme collection depth and rarity make this one of the most expensive marine fish in the world.',
      },
      {
        question: 'How big does a Peppermint Angelfish get?',
        answer:
          'The Peppermint Angelfish is a dwarf angelfish that reaches a maximum of just 3 inches in total length. Despite its small size, its vivid red-and-white coloration makes it one of the most visually striking fish in any reef aquarium. Full size is typically reached within 2 years.',
      },
      {
        question: 'Why is the Peppermint Angelfish so expensive?',
        answer:
          'The extreme price reflects three factors: the fish lives at depths of 55 to 120 meters requiring technical rebreather diving, it is found only around the Cook Islands with very limited collection permits, and the decompression and acclimation process takes days of careful work. Fewer than a dozen have ever been sold privately.',
      },
      {
        question: 'What tank size does a Peppermint Angelfish need?',
        answer:
          'A minimum 125-gallon reef aquarium is recommended. Despite its small size, the Peppermint Angelfish benefits from stable water volume and ample live rock for grazing and shelter. A mature reef system with established microfauna provides the best long-term environment.',
      },
      {
        question: 'Can a Peppermint Angelfish live in a reef tank?',
        answer:
          'Yes, the Peppermint Angelfish is considered reef-safe with caution. Like most dwarf angelfish, it may occasionally nip at soft coral polyps, but well-fed specimens typically leave corals alone. It is peaceful toward tankmates and does well with other non-aggressive reef species.',
      },
      {
        question: 'How long does a Peppermint Angelfish live?',
        answer:
          'In captivity, Peppermint Angelfish are expected to live 8 to 12 years with proper care. Due to so few specimens being kept privately, long-term data is limited, but related Centropyge species in ideal conditions routinely exceed a decade. Stable water parameters and varied diet are key to longevity.',
      },
    ],
    relatedSlugs: ['clarion-angelfish', 'gem-tang', 'platinum-arowana'],
    speciesGuideSlug: 'peppermint-angelfish',
    ratingAverage: 5.0,
    reviewCount: 3,
  },

  // ──────────────────────────────────────────────
  // 4. Albino Alligator Gar
  // ──────────────────────────────────────────────
  {
    commonName: 'Albino Alligator Gar',
    scientificName: 'Atractosteus spatula',
    slug: 'albino-alligator-gar',
    category: 'gar',
    sku: 'TF-GAR-ALB-001',
    priceUSD: 1800,
    images: [
      {
        url: '/images/products/albino-alligator-gar-hero.jpg',
        alt: 'Albino Alligator Gar (Atractosteus spatula) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Albino Alligator Gar is a living fossil wrapped in ivory — a fish whose lineage predates the dinosaurs, now presented in a striking leucistic form that transforms an already imposing predator into something genuinely otherworldly. Atractosteus spatula is the largest freshwater fish in North America, capable of exceeding six feet in length and 200 pounds in the wild. The albino variant, with its pale cream-to-white body and pinkish-red eyes, represents an exceedingly rare genetic expression that occurs in fewer than one in ten thousand wild hatches. The Fish Collection's specimens are captive-bred from proven albino bloodlines, ensuring the consistent, full-body albinism that collectors demand.

At its current size of approximately ten inches, our offering is a juvenile that will grow rapidly under proper care. Alligator Gar are remarkably fast growers — expect six to twelve inches of growth per year during the first several years, with the rate tapering as the fish approaches maturity. This growth trajectory is precisely why we are transparent about the tank requirements: a 500-gallon aquarium is the minimum for long-term housing, and serious keepers often graduate to indoor ponds or custom-built systems exceeding 1,000 gallons. If you cannot commit to housing a six-foot predator for potentially fifty years or more, this is not the fish for you. We say this not to discourage, but to ensure every Alligator Gar we sell goes to a keeper who understands the full scope of the commitment.

In the aquarium, the Albino Alligator Gar is a surprisingly calm presence. Despite its fearsome appearance — the broad, alligator-like snout packed with needle-sharp teeth — it spends much of its time hovering motionless near the surface, occasionally drifting forward with subtle undulations of its abbreviated dorsal fin. Feeding is dramatic and efficient: the gar positions itself alongside prey, then executes a lightning-fast lateral snap that is among the quickest strike mechanisms in the freshwater world. Diet should include live feeder fish from quarantined sources, large shrimp, smelt, and eventually whole fish appropriate to the gar's size. We begin weaning our juveniles onto frozen silversides and prawns early to simplify long-term feeding logistics.

Water chemistry is one of the Alligator Gar's greatest strengths from a husbandry perspective. This species tolerates a remarkably broad range of conditions — temperatures from 60 to 75 degrees Fahrenheit, pH from 6.5 to 8.0, and moderate to hard water. They can even tolerate brackish conditions, reflecting their natural habitat in coastal bayous and estuaries. Filtration should be robust and oversized; canister filters rated for twice the tank volume, or a sump system, will handle the considerable bioload of a large predatory fish.

The Alligator Gar has undergone a significant conservation reappraisal in recent years. Once vilified as a trash fish and actively culled in many states, it is now recognized as a keystone predator essential to healthy river ecosystems. Several states have implemented strict harvest regulations, and captive breeding programs — including the lines from which our specimens descend — play a role in maintaining genetic diversity. Owning an Albino Alligator Gar is not just an aquarium decision; it is participation in the ongoing story of one of North America's most ancient and resilient species.

The Fish Collection ships all gar specimens in reinforced, oxygen-enriched containers designed for large-bodied fish. Our live arrival guarantee applies to every shipment.`,
    seoDescription:
      'Albino Alligator Gar for sale — a rare leucistic living fossil. Live arrival guaranteed, overnight shipping. From $1,800. Expert-bred at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 500,
    maxSizeInches: 72,
    origin: 'North America (Mississippi River basin)',
    diet: 'Carnivore — live fish, shrimp, frozen foods',
    temperament: 'Predatory',
    lifespan: '50+ years',
    waterParameters: {
      tempMin: 60,
      tempMax: 75,
      phMin: 6.5,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How much does an Albino Alligator Gar cost?',
        answer:
          'Albino Alligator Gar range from $1,200 to $3,000 depending on size and source quality. Our captive-bred specimens are priced at $1,800, reflecting verified albino genetics and healthy growth. Wild-caught albinos are virtually unobtainable due to their extreme rarity in nature.',
      },
      {
        question: 'How big does an Alligator Gar get?',
        answer:
          'Alligator Gar can reach 72 inches (6 feet) in captivity and over 8 feet in the wild, with weights exceeding 200 pounds. In a 500-gallon aquarium, most specimens reach 4 to 5 feet. Growth is rapid in the first few years at 6 to 12 inches annually, then slows significantly.',
      },
      {
        question: 'Is it legal to own an Alligator Gar?',
        answer:
          'Legality varies by state. Alligator Gar ownership is permitted in most U.S. states, but some — including California, Arizona, and several northeastern states — prohibit or restrict possession of gar species. Always check your state and local regulations before purchasing. The Fish Collection will verify legality for your shipping address.',
      },
      {
        question: 'What tank size does an Alligator Gar need?',
        answer:
          'A minimum of 500 gallons is required, with 1,000 gallons or an indoor pond strongly recommended for full-grown adults. The tank must be at least 10 feet long and 3 feet wide. Robust filtration rated for twice the tank volume is essential to manage the significant bioload of this large predator.',
      },
      {
        question: 'How long does an Alligator Gar live?',
        answer:
          'Alligator Gar are among the longest-lived freshwater fish, with wild specimens documented at over 95 years. In captivity, 50 years or more is realistic with proper care. This is a multi-generational commitment — many keepers include gar care provisions in estate planning.',
      },
      {
        question: 'What do Alligator Gar eat?',
        answer:
          'Alligator Gar are ambush predators that eat live fish, large shrimp, smelt, and whole prey items. Our juveniles are weaned onto frozen silversides and prawns for convenience. Feed every 2 to 3 days for juveniles, tapering to once or twice weekly for adults. Always source feeder fish from quarantined suppliers.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'wolf-fish', 'piranha'],
    ratingAverage: 4.7,
    reviewCount: 6,
  },

  // ──────────────────────────────────────────────
  // 5. Dragon Goby
  // ──────────────────────────────────────────────
  {
    commonName: 'Dragon Goby',
    scientificName: 'Gobioides broussonnetii',
    slug: 'dragon-goby',
    category: 'goby',
    sku: 'TF-GBY-DRG-001',
    priceUSD: 45,
    images: [
      {
        url: '/images/products/dragon-goby-hero.jpg',
        alt: 'Dragon Goby (Gobioides broussonnetii) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Dragon Goby is one of the most misunderstood fish in the aquarium trade — and one of the most rewarding once you understand what it actually needs. Gobioides broussonnetii looks like something conjured from mythology: an elongated, eel-like body covered in iridescent blue-violet scales, a massive head studded with rows of tiny, fang-like teeth, and small, almost vestigial eyes that give it a perpetually fierce expression. First-time viewers invariably assume it is a vicious predator. In reality, the Dragon Goby is a gentle filter-feeder that uses those imposing teeth to sift through substrate for algae, detritus, and tiny invertebrates. It is, fundamentally, a vacuum cleaner with the face of a dragon.

The Fish Collection sources our Dragon Gobies from sustainable collection operations along the Atlantic coasts of Central and South America. Each specimen is acclimated through our brackish-water quarantine protocol before being offered for sale. This last point is critical: the Dragon Goby is a brackish species that requires a specific gravity of 1.005 to 1.015 for long-term health. Keeping it in pure freshwater — as many uninformed retailers recommend — leads to chronic stress, immune suppression, and a dramatically shortened lifespan. We include detailed brackish setup instructions with every purchase and our team is available to help you dial in the salinity.

At a maximum length of 24 inches, the Dragon Goby needs more space than its modest price tag might suggest. We recommend a minimum 50-gallon aquarium with a soft, sandy substrate — the fish spends significant time burrowing and sifting through the bottom, and coarse gravel can damage its delicate mouth and gill structures. Provide multiple hiding spots using PVC pipes, clay pots, or stacked rock formations; Dragon Gobies are nocturnal by nature and appreciate dark retreats during daylight hours.

Diet is straightforward but requires attention to the fish's feeding mechanics. Because the Dragon Goby is essentially a substrate sifter, it does not compete well for floating food with faster tankmates. Target-feed by placing sinking pellets, frozen bloodworms, and brine shrimp directly near its hiding spots. Many experienced keepers use a turkey baster to deliver thawed frozen foods to the substrate surface near the goby's territory. Supplemental algae wafers provide additional nutrition and mimic the natural biofilm the species grazes on in the wild.

Water parameters are flexible within the brackish range: 74 to 82 degrees Fahrenheit, pH of 7.0 to 8.5, and moderate hardness. The Dragon Goby is peaceful to the point of being easily bullied — choose tankmates carefully. Ideal companions include other brackish-tolerant species like Mollies, Bumblebee Gobies, and Knight Gobies. Avoid aggressive cichlids or any fish large enough to view the goby as food.

The Dragon Goby is proof that spectacular aquarium fish do not require a spectacular budget. At $45, it delivers visual drama, fascinating behavior, and genuine conversational value that punches far above its price class. For the keeper willing to provide correct brackish conditions and a sandy substrate, Gobioides broussonnetii is one of the most satisfying fish in the hobby.`,
    seoDescription:
      'Dragon Goby for sale — stunning 24-inch brackish water predator look. Live arrival guaranteed, overnight shipping. From $45. Expert-bred at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 50,
    maxSizeInches: 24,
    origin: 'Atlantic coast (North & South America)',
    diet: 'Omnivore — algae, brine shrimp, bloodworms',
    temperament: 'Peaceful',
    lifespan: '8-10 years',
    waterParameters: {
      tempMin: 74,
      tempMax: 82,
      phMin: 7.0,
      phMax: 8.5,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'How much does a Dragon Goby cost?',
        answer:
          'Dragon Gobies are one of the most affordable exotic-looking fish in the hobby, typically priced between $20 and $60 depending on size and source. Our specimens are priced at $45, quarantine-acclimated and feeding well. Their low cost relative to their dramatic appearance makes them exceptional value.',
      },
      {
        question: 'How big does a Dragon Goby get?',
        answer:
          'Dragon Gobies reach up to 24 inches in captivity, though 15 to 18 inches is more typical in aquarium conditions. Growth is gradual over 3 to 4 years. Despite their length, they have a slender, eel-like body and do not produce the bioload of a comparably long robust fish.',
      },
      {
        question: 'Are Dragon Gobies aggressive?',
        answer:
          'Despite their fearsome appearance and fang-like teeth, Dragon Gobies are remarkably peaceful. Those teeth are designed for sifting substrate, not attacking other fish. They are actually one of the most docile species in the hobby and can be easily bullied by aggressive tankmates.',
      },
      {
        question: 'Do Dragon Gobies need brackish water?',
        answer:
          'Yes, Dragon Gobies require brackish water with a specific gravity of 1.005 to 1.015 for long-term health. Keeping them in pure freshwater leads to chronic stress and shortened lifespan. Marine salt mix added to dechlorinated water achieves the correct salinity — we include setup instructions with every purchase.',
      },
      {
        question: 'What do Dragon Gobies eat?',
        answer:
          'Dragon Gobies are substrate sifters that eat algae, biofilm, bloodworms, brine shrimp, and sinking pellets. They feed by taking mouthfuls of sand and filtering out food particles. Target-feed with a turkey baster near their hiding spots, as they cannot compete with faster surface-feeding tankmates.',
      },
      {
        question: 'How long does a Dragon Goby live?',
        answer:
          'With proper brackish water conditions, Dragon Gobies live 8 to 10 years in captivity. Fish kept in incorrect freshwater setups rarely survive beyond 2 to 3 years. Longevity is directly tied to maintaining appropriate salinity, providing sandy substrate, and ensuring adequate nutrition through target feeding.',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish', 'wolf-fish', 'flowerhorn-cichlid'],
    ratingAverage: 4.6,
    reviewCount: 22,
  },

  // ──────────────────────────────────────────────
  // 6. Fahaka Pufferfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Fahaka Pufferfish',
    scientificName: 'Tetraodon lineatus',
    slug: 'fahaka-pufferfish',
    category: 'pufferfish',
    sku: 'TF-PUF-FAH-001',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/fahaka-pufferfish-hero.jpg',
        alt: 'Fahaka Pufferfish (Tetraodon lineatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Fahaka Pufferfish is the most personable predator in freshwater fishkeeping — an 18-inch ball of intelligence, aggression, and undeniable charm that will recognize its keeper, beg for food like a puppy, and systematically destroy any tankmate unfortunate enough to share its space. Tetraodon lineatus is not a community fish. It is not a peaceful fish. It is, however, one of the most interactive and rewarding species you will ever keep, provided you respect what it is: a specialized, solitary predator with a beak powerful enough to crack open clam shells and the temperament to use it on anything within reach.

The Fish Collection sources our Fahaka Pufferfish from established captive-breeding operations that produce robust, well-socialized juveniles. Our current specimens are approximately four inches long, actively feeding on snails, shrimp, and frozen krill, and already displaying the species' characteristic curiosity toward humans outside the glass. This early socialization is important — a Fahaka that learns to associate its keeper with food becomes remarkably interactive, following your movements across the room, puffing up in excitement at feeding time, and even allowing gentle hand-feeding once trust is established.

Housing a Fahaka requires a dedicated, single-species setup of at least 120 gallons. This is a fish that reaches 18 inches in length, produces substantial waste, and has zero tolerance for tankmates of any species, including other pufferfish. The aquarium should include robust filtration — we recommend a sump or canister filters rated for twice the tank volume — along with sand substrate and a scattering of rock or driftwood structures. Live plants are generally destroyed, so artificial decor or hardy species like Java Fern attached to hardscape are better options.

The cornerstone of Fahaka Pufferfish care is diet. Tetraodon lineatus possesses a fused beak that grows continuously throughout its life, much like a rodent's incisors. Without regular hard-shelled food items to wear down the beak, it will overgrow, preventing the fish from eating and eventually causing starvation. Snails — pond snails, ramshorn snails, Malaysian trumpet snails — should form the backbone of the diet, supplemented with shell-on shrimp, crayfish, clams, and mussels. We maintain dedicated snail-breeding colonies specifically for our pufferfish and recommend our clients do the same.

Water parameters are straightforward: 75 to 82 degrees Fahrenheit, pH of 7.0 to 8.0, and moderate hardness. The Fahaka is a pure freshwater species — no salt required. Despite originating from the Nile River system and Lake Chad in Africa, it adapts well to a range of tap water chemistries common in North American households. Weekly water changes of 30 to 40 percent are recommended given the species' high waste output.

The Fahaka Pufferfish lives 10 to 15 years and will become, without exaggeration, a genuine pet. Keepers routinely describe their Fahakas as the most interactive fish they have ever owned — more responsive than oscars, more curious than flowerhorns, and more demanding of attention than either. If you are looking for a fish with personality that eclipses its considerable beauty, the Fahaka is your answer.`,
    seoDescription:
      'Fahaka Pufferfish for sale — the most interactive freshwater predator. Live arrival guaranteed, overnight shipping. From $120. Expert-bred at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 120,
    maxSizeInches: 18,
    origin: 'Africa (Nile River, Lake Chad)',
    diet: 'Carnivore — snails, shellfish, frozen foods',
    temperament: 'Highly aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 7.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How much does a Fahaka Pufferfish cost?',
        answer:
          'Fahaka Pufferfish typically cost $80 to $200 depending on size. Our specimens are priced at $120 and are captive-bred juveniles already feeding on snails and frozen foods. The true cost of ownership includes a dedicated 120-gallon setup and ongoing snail/shellfish supply for beak maintenance.',
      },
      {
        question: 'Can a Fahaka Pufferfish live with other fish?',
        answer:
          'No. The Fahaka Pufferfish is one of the most aggressive freshwater species in the hobby and must be kept alone. It will attack and kill any tankmate regardless of size or species, including other pufferfish. A dedicated, single-species aquarium is absolutely non-negotiable for this fish.',
      },
      {
        question: 'How big does a Fahaka Pufferfish get?',
        answer:
          'Fahaka Pufferfish reach 18 inches in captivity with a thick, robust body. They grow steadily, reaching 10 to 12 inches within 2 years and full size by age 4 to 5. Their impressive bulk at maturity is one reason a 120-gallon minimum tank is required.',
      },
      {
        question: 'What do Fahaka Pufferfish eat?',
        answer:
          'The diet must include hard-shelled foods — snails, clams, mussels, shell-on shrimp, and crayfish — to wear down the continuously growing beak. Without regular crunchy items, the beak overgrows and the fish can starve. Supplement with frozen krill, silversides, and high-quality carnivore pellets.',
      },
      {
        question: 'Do Fahaka Pufferfish recognize their owners?',
        answer:
          'Yes, Fahaka Pufferfish are among the most interactive freshwater fish and readily learn to recognize their keeper. They will follow your movements, swim excitedly at feeding time, and many accept hand-feeding. This intelligence and personality is a primary reason they are so popular despite their aggressive nature.',
      },
      {
        question: 'How long does a Fahaka Pufferfish live?',
        answer:
          'Fahaka Pufferfish live 10 to 15 years in captivity with proper care. Key longevity factors include regular hard-shelled foods for beak maintenance, clean water through consistent water changes, and a spacious tank that allows natural swimming behavior. Poorly kept specimens rarely survive beyond 5 years.',
      },
    ],
    relatedSlugs: ['mbu-pufferfish', 'dragon-goby', 'wolf-fish'],
    ratingAverage: 4.8,
    reviewCount: 15,
  },

  // ──────────────────────────────────────────────
  // 7. Flowerhorn Cichlid
  // ──────────────────────────────────────────────
  {
    commonName: 'Flowerhorn Cichlid',
    scientificName: 'Hybrid (Amphilophus spp.)',
    slug: 'flowerhorn-cichlid',
    category: 'cichlid',
    sku: 'TF-CIC-FLH-001',
    priceUSD: 350,
    images: [
      {
        url: '/images/products/flowerhorn-cichlid-hero.jpg',
        alt: 'Flowerhorn Cichlid (Hybrid Amphilophus spp.) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Flowerhorn Cichlid is the aquarium hobby's most successful deliberate creation — a man-made hybrid that combines the aggression and hardiness of Central American cichlids with a nuchal hump so pronounced and colorful that it has become a cultural icon across Southeast Asia and, increasingly, worldwide. The Fish Collection's Flowerhorns are sourced from elite breeding lines that prioritize the three qualities serious collectors evaluate: kok size (the nuchal hump), body coloration intensity, and pearl markings (the iridescent spots that pattern the flanks). Our current offering displays a massive, well-formed kok, vivid red-to-orange base coloration, and dense pearl coverage across the body and fins — a competition-grade specimen by any standard.

The Flowerhorn's origin story is uniquely modern. In the late 1990s, Malaysian and Taiwanese breeders began crossing Blood Parrots with various Amphilophus species — primarily Trimacs and Midas Cichlids — to produce a fish with exaggerated features. The resulting hybrids were selectively bred across dozens of generations, producing the distinct Flowerhorn strains we know today: Kamfa, Zhen Zhu, Golden Monkey, and King Kong, among others. Each strain emphasizes different traits, but all share the signature nuchal hump, vibrant coloration, and aggressive personality that define the Flowerhorn experience.

Housing a Flowerhorn is straightforward but requires commitment. A 75-gallon aquarium is the minimum for a single specimen, and this fish must be kept alone or with carefully chosen tankmates robust enough to withstand its territorial aggression. Many keepers maintain Flowerhorns in solo displays, which allows the fish to direct its considerable personality entirely at its human audience. And make no mistake — Flowerhorns are extraordinarily interactive fish. They recognize their keepers, respond to hand gestures, and often perform a vigorous "greeting dance" when someone approaches the tank. This responsiveness, combined with their otherworldly appearance, is what converts casual hobbyists into dedicated Flowerhorn enthusiasts.

Diet should be varied and high in protein. We feed our Flowerhorns a rotation of quality cichlid pellets (Hikari, NorthFin, and similar premium brands), supplemented with frozen shrimp, bloodworms, and occasional live foods. Color-enhancing pellets containing astaxanthin help maintain and intensify the red and orange tones. Feed two to three times daily for juveniles, tapering to once or twice daily for adults. Overfeeding is the most common husbandry mistake — it leads to bloating, reduced coloration, and shortened lifespan.

Water conditions are forgiving: 78 to 86 degrees Fahrenheit, pH of 7.0 to 8.0, and moderate to hard water. Flowerhorns are messy eaters that produce significant waste, so robust filtration and weekly 30-percent water changes are essential. The substrate should be bare-bottom or fine sand — Flowerhorns rearrange their environment constantly, and gravel will be moved into filter intakes and against heater elements.

With a lifespan of 10 to 12 years and a personality that rivals many traditional pets, the Flowerhorn Cichlid offers an aquarium experience unlike any other. This is a fish that will learn your schedule, demand your attention, and reward your care with one of the most visually spectacular displays in freshwater fishkeeping.`,
    seoDescription:
      'Flowerhorn Cichlid for sale — competition-grade specimen with massive kok. Live arrival guaranteed, overnight shipping. From $350. Expert-bred at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 75,
    maxSizeInches: 16,
    origin: 'Hybrid (Southeast Asian breeding)',
    diet: 'Omnivore — pellets, shrimp, bloodworms',
    temperament: 'Aggressive',
    lifespan: '10-12 years',
    waterParameters: {
      tempMin: 78,
      tempMax: 86,
      phMin: 7.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'How much does a Flowerhorn Cichlid cost?',
        answer:
          'Flowerhorn prices range from $30 for juvenile pet-quality fish to over $5,000 for competition-grade adults with exceptional kok development and coloration. Our specimen is priced at $350, reflecting its superior genetics and show-quality traits. Record auction prices for elite Flowerhorns have exceeded $100,000 in Asian markets.',
      },
      {
        question: 'How big does a Flowerhorn Cichlid get?',
        answer:
          'Flowerhorn Cichlids reach 12 to 16 inches in captivity, with males typically larger than females and developing more prominent nuchal humps. Most of the growth occurs in the first 2 years, with the kok continuing to develop and enlarge through age 3 to 4.',
      },
      {
        question: 'Can Flowerhorn Cichlids live with other fish?',
        answer:
          'Flowerhorns are highly aggressive and are best kept alone. Some keepers house them with equally robust species like large Plecos, Oscars, or other big cichlids in 150-gallon-plus tanks, but aggression and injury are always risks. A solo display in a 75-gallon tank is the safest and most rewarding approach.',
      },
      {
        question: 'What do Flowerhorn Cichlids eat?',
        answer:
          'Feed high-quality cichlid pellets as the staple diet, supplemented with frozen shrimp, bloodworms, and occasional live foods. Color-enhancing pellets with astaxanthin intensify red and orange tones. Feed juveniles 2 to 3 times daily and adults once or twice daily, avoiding overfeeding which causes bloat and dulls coloration.',
      },
      {
        question: 'How do I make my Flowerhorn\'s kok bigger?',
        answer:
          'Kok (nuchal hump) size is primarily genetic — no amount of feeding or supplementation will produce a large kok on a fish without the genetic predisposition. However, maintaining optimal water quality, feeding a high-protein diet, and keeping the fish stress-free allows the kok to reach its full genetic potential.',
      },
      {
        question: 'How long does a Flowerhorn Cichlid live?',
        answer:
          'Flowerhorn Cichlids live 10 to 12 years with proper care. Longevity depends on water quality, diet moderation, and adequate tank size. The most common life-shortening factors are overfeeding leading to organ damage and poor water quality from inadequate filtration or infrequent water changes.',
      },
      {
        question: 'Are Flowerhorn Cichlids natural or man-made?',
        answer:
          'Flowerhorns are entirely man-made hybrids, first created in Malaysia and Taiwan in the late 1990s by crossing Blood Parrots with various Amphilophus cichlid species. They do not exist in the wild. Decades of selective breeding have produced distinct strains including Kamfa, Zhen Zhu, Golden Monkey, and King Kong varieties.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'fahaka-pufferfish', 'piranha'],
    speciesGuideSlug: 'flowerhorn-cichlid',
    ratingAverage: 4.7,
    reviewCount: 28,
  },

  // ──────────────────────────────────────────────
  // 8. Wolf Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Wolf Fish',
    scientificName: 'Hoplias malabaricus',
    slug: 'wolf-fish',
    category: 'cichlid',
    sku: 'TF-WLF-RED-001',
    priceUSD: 280,
    images: [
      {
        url: '/images/products/wolf-fish-hero.jpg',
        alt: 'Wolf Fish (Hoplias malabaricus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Wolf Fish is the Amazon basin's answer to the question "what would happen if you gave a largemouth bass a mouthful of fangs and the temperament of a cornered wolverine?" Hoplias malabaricus is a sit-and-wait predator of extraordinary patience and explosive violence — a fish that can remain motionless for hours, then strike with a speed and ferocity that leaves even experienced monster-fish keepers momentarily stunned. At The Fish Collection, we source our Wolf Fish from trusted South American exporters who collect sustainably from Amazonian tributaries where the species is abundant and ecologically stable.

What distinguishes the Wolf Fish from other predatory species is the sheer mechanical efficiency of its feeding apparatus. The jaws are lined with interlocking, canine-like teeth that grip prey with a force disproportionate to the fish's size. A two-foot Wolf Fish can subdue prey nearly half its own length — a capability that makes tankmate selection not just important but existential. Any fish that fits in the Wolf Fish's mouth — and several that you would assume do not — will eventually be eaten. This is a species that should be kept alone or with equally large, robust predators in a tank spacious enough to establish separate territories.

Our current specimens are approximately six inches long, healthy, feeding aggressively on frozen silversides and live feeders, and displaying the characteristic mottled brown-and-olive patterning that provides camouflage in their natural leaf-litter habitat. As they grow — and they will reach 24 inches in a suitably sized aquarium — the coloration deepens and individual variation becomes more pronounced. Some specimens develop a reddish undertone that is particularly striking under warm lighting.

A 150-gallon aquarium is the minimum for an adult Wolf Fish. The tank should feature subdued lighting, a dark substrate, and ample cover in the form of driftwood tangles, rock caves, and dense plant clusters (real or artificial). Wolf Fish are predominantly nocturnal and will spend daylight hours hidden in their chosen ambush site. Watching a Wolf Fish emerge at dusk, patrol its territory with deliberate, measured movements, and then snap into strike mode is one of the most dramatic behavioral displays in predatory fishkeeping.

Water chemistry is undemanding: 75 to 82 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. The species tolerates a range of conditions and is generally hardy once established. Filtration should be robust — canister filters or a sump rated well above the tank's volume — as the Wolf Fish produces significant waste after large meals. Weekly water changes of 25 to 30 percent maintain the clean conditions this species deserves.

Diet consists of live and frozen fish, shrimp, and other meaty items. We begin weaning our juveniles onto frozen foods early, and most of our specimens readily accept thawed silversides, smelt, and prawn by the time they ship. Live feeders from quarantined sources can be offered as enrichment, but a Wolf Fish that accepts frozen foods is significantly easier and safer to maintain long-term.

With a lifespan of 15 to 20 years, the Wolf Fish is a long-term companion for the dedicated predatory fish enthusiast. It is not flashy, it is not colorful, and it will never beg for attention like a Flowerhorn. What it offers instead is primal, unfiltered predatory behavior — the raw mechanics of ambush hunting, distilled into an aquarium-sized package. For keepers who appreciate that, there is nothing else quite like it.`,
    seoDescription:
      'Wolf Fish for sale — apex ambush predator from the Amazon. Live arrival guaranteed, overnight shipping. From $280. Expert-bred at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 150,
    maxSizeInches: 24,
    origin: 'South America (Amazon basin)',
    diet: 'Carnivore — live fish, shrimp, frozen foods',
    temperament: 'Highly aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How much does a Wolf Fish cost?',
        answer:
          'Wolf Fish (Hoplias malabaricus) typically range from $150 to $400 depending on size and collection locality. Our specimens are priced at $280, sustainably collected from Amazonian tributaries and already feeding on frozen foods. Rarer Hoplias species like H. aimara command significantly higher prices.',
      },
      {
        question: 'How big does a Wolf Fish get?',
        answer:
          'Hoplias malabaricus reaches approximately 24 inches in captivity with a thick, powerful body. Growth is moderate, with most specimens reaching full size in 4 to 5 years. The closely related Hoplias aimara can exceed 36 inches, but malabaricus is the more commonly available and manageably sized species.',
      },
      {
        question: 'Can Wolf Fish live with other fish?',
        answer:
          'Wolf Fish are highly aggressive ambush predators that will eat anything they can fit in their mouth — and their mouth is surprisingly large relative to body size. They should be kept alone or only with equally large, robust species in tanks of 250 gallons or more. Solo housing in a 150-gallon tank is the safest approach.',
      },
      {
        question: 'What do Wolf Fish eat?',
        answer:
          'Wolf Fish eat live and frozen fish, shrimp, smelt, silversides, and other meaty foods. Our specimens are weaned onto frozen foods before sale for convenience and safety. Feed every 2 to 3 days, offering prey items roughly 20 to 30 percent of the fish\'s body length. Always quarantine live feeders to prevent disease introduction.',
      },
      {
        question: 'Are Wolf Fish aggressive?',
        answer:
          'Yes, Wolf Fish are among the most aggressive freshwater predators available in the aquarium trade. They are ambush hunters that strike with explosive speed and possess powerful jaws lined with canine-like teeth. Aggression is directed at any fish perceived as prey, which includes most tankmates regardless of species.',
      },
      {
        question: 'How long does a Wolf Fish live?',
        answer:
          'Wolf Fish live 15 to 20 years in captivity with proper care. Their longevity, combined with relatively straightforward water requirements, makes them a rewarding long-term species for dedicated predatory fish keepers. Consistent water quality and a varied diet are the primary factors in achieving maximum lifespan.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'flowerhorn-cichlid', 'piranha'],
    speciesGuideSlug: 'wolf-fish',
    ratingAverage: 4.8,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 9. Red Tail Catfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Red Tail Catfish',
    scientificName: 'Phractocephalus hemioliopterus',
    slug: 'red-tail-catfish',
    category: 'catfish',
    sku: 'TF-CAT-RTC-001',
    priceUSD: 180,
    images: [
      {
        url: '/images/products/red-tail-catfish-hero.jpg',
        alt: 'Red Tail Catfish (Phractocephalus hemioliopterus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Red Tail Catfish is the flagship monster fish of the Amazon — a species that has converted more hobbyists into dedicated predatory-fish keepers than perhaps any other. Phractocephalus hemioliopterus combines a striking tricolor pattern of jet-black dorsum, pristine white belly, and vivid orange-red tail with a personality so engaging that keepers routinely describe it as the most dog-like fish they have ever owned. At The Fish Collection, we sell Red Tail Catfish exclusively to buyers who demonstrate the capacity to house a fish that will eventually reach four feet in length and the temperament of a perpetually hungry Labrador Retriever.

Our current specimens are approximately five inches long — adorable, manageable, and deceptively small compared to the four-foot adult they will become within five to seven years. This is the most important conversation we have with every potential Red Tail Catfish buyer: this species grows fast, grows large, and cannot be rehomed easily once it outgrows a standard aquarium. A 500-gallon tank is the minimum for a full-grown adult, and many serious keepers invest in custom-built systems of 1,000 gallons or more. Indoor ponds with robust filtration represent the gold standard for long-term Red Tail Catfish housing. If your current setup tops out at 200 gallons, this is not the fish for you — no matter how captivating that juvenile looks in the bag.

For those with the infrastructure, the Red Tail Catfish is an extraordinary aquarium inhabitant. It is a gulp feeder — meaning it inhales prey whole by creating a powerful suction with its oversized mouth. In the wild, adults consume fish, crabs, fruits, and essentially anything organic that fits in their cavernous maw. In captivity, diet should include high-quality sinking catfish pellets as a staple, supplemented with whole market shrimp, smelt, tilapia fillets, and occasional feeder fish from quarantined sources. Feed juveniles daily; taper to every two to three days for sub-adults and twice weekly for full-grown adults. Overfeeding is the most common and most dangerous husbandry mistake — these fish have voracious appetites and will eat until their stomachs are distended, which can cause fatal digestive blockages.

Water parameters are forgiving: 72 to 79 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. The Red Tail Catfish is a hardy, adaptable species that tolerates a range of conditions, but its massive bioload demands exceptional filtration. Sump systems rated for two to three times the tank volume, supplemented with mechanical and biological media, are the standard approach. Weekly water changes of 30 to 50 percent are non-negotiable for maintaining the water quality a fish of this size requires.

The Red Tail Catfish's personality is its greatest asset and its most effective sales pitch. These fish learn to recognize their keeper within weeks, will follow your hand across the glass, and often surface at feeding time with a head-bobbing behavior that experienced keepers call "begging." Their long barbels — sensory organs used to navigate murky Amazonian waters — give them an expressive, almost mammalian face that humans find instinctively endearing.

With a lifespan exceeding 20 years, the Red Tail Catfish is a generational commitment. It is also a generational reward — a living centerpiece that grows alongside your skill and infrastructure, becoming more impressive with every passing year. The Fish Collection is proud to offer this species to qualified keepers who understand and embrace the scale of the undertaking.`,
    seoDescription:
      'Red Tail Catfish for sale — the Amazon\'s iconic monster catfish. Live arrival guaranteed, overnight shipping. From $180. Expert-bred at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 500,
    maxSizeInches: 48,
    origin: 'South America (Amazon, Orinoco basins)',
    diet: 'Carnivore — live fish, pellets, frozen foods',
    temperament: 'Predatory',
    lifespan: '20+ years',
    waterParameters: {
      tempMin: 72,
      tempMax: 79,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How much does a Red Tail Catfish cost?',
        answer:
          'Red Tail Catfish juveniles typically sell for $100 to $300 depending on size. Our specimens are priced at $180 and are healthy, feeding juveniles approximately 5 inches long. The low purchase price is deceptive — the true cost is the 500-gallon-plus setup and ongoing food and filtration expenses required for a 4-foot adult.',
      },
      {
        question: 'How big does a Red Tail Catfish get?',
        answer:
          'Red Tail Catfish reach 48 inches (4 feet) in captivity and can exceed 5 feet in the wild. Growth is rapid — expect 12 to 18 inches within the first year under optimal conditions. They are one of the fastest-growing freshwater fish in the hobby, which catches many unprepared keepers off guard.',
      },
      {
        question: 'What tank size does a Red Tail Catfish need?',
        answer:
          'A minimum of 500 gallons is required for a full-grown Red Tail Catfish, with 1,000 gallons or an indoor pond strongly recommended. The tank must be at least 10 feet long and 4 feet wide. Juveniles can start in smaller tanks but will outgrow a 200-gallon setup within 2 years.',
      },
      {
        question: 'Can Red Tail Catfish live with other fish?',
        answer:
          'Red Tail Catfish will eat any fish that fits in their enormous mouth, which includes surprisingly large tankmates. Compatible companions include similarly sized Arowana, large Gar, and other catfish in tanks of 1,000 gallons or more. In a 500-gallon minimum setup, solo housing is the safest approach.',
      },
      {
        question: 'What do Red Tail Catfish eat?',
        answer:
          'Feed high-quality sinking catfish pellets as the staple, supplemented with whole shrimp, smelt, tilapia fillets, and occasional quarantined feeder fish. Juveniles eat daily; adults feed twice weekly. Critical warning: never overfeed — these fish have voracious appetites and overfeeding causes fatal digestive blockages.',
      },
      {
        question: 'How long does a Red Tail Catfish live?',
        answer:
          'Red Tail Catfish live 20 years or more in captivity, with well-maintained specimens potentially reaching 30 years. This is a multi-decade commitment that requires long-term planning for tank upgrades and ongoing care. Many keepers include Red Tail Catfish care provisions in estate planning.',
      },
    ],
    relatedSlugs: ['albino-alligator-gar', 'wolf-fish', 'flowerhorn-cichlid'],
    ratingAverage: 4.5,
    reviewCount: 18,
  },

  // ──────────────────────────────────────────────
  // 10. Red-Bellied Piranha
  // ──────────────────────────────────────────────
  {
    commonName: 'Red-Bellied Piranha',
    scientificName: 'Pygocentrus nattereri',
    slug: 'piranha',
    category: 'piranha',
    sku: 'TF-PIR-RED-001',
    priceUSD: 75,
    images: [
      {
        url: '/images/products/piranha-hero.jpg',
        alt: 'Red-Bellied Piranha (Pygocentrus nattereri) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Red-Bellied Piranha is the most famous freshwater fish on Earth — a species whose reputation precedes it so thoroughly that most people form an opinion about it before they have ever seen one in person. Pygocentrus nattereri has been mythologized by Hollywood, sensationalized by documentaries, and misrepresented by pet stores for decades. The reality, as any experienced keeper will tell you, is more nuanced and far more interesting than the legend. At The Fish Collection, we sell Red-Bellied Piranhas to informed hobbyists who want the real animal, not the movie monster.

The first thing that surprises most new piranha keepers is the shyness. Red-Bellied Piranhas are, individually, nervous and skittish fish that rely on the school for confidence. A solitary piranha will spend most of its time hiding behind decor, flinching at sudden movements, and generally behaving like the opposite of its fearsome reputation. In a properly sized school of six or more, however, the dynamic transforms. The group establishes a hierarchy, patrols the tank with coordinated purpose, and displays the feeding behavior that made the species legendary — a swift, synchronized assault on food items that is genuinely thrilling to watch at feeding time.

Our specimens are captive-bred juveniles approximately three inches long, already schooling cohesively and feeding aggressively on frozen silversides, shrimp, and pellets. We recommend purchasing six or more to establish a functional school, and we offer quantity pricing to support this. A 100-gallon aquarium is the minimum for a school of six, with larger groups requiring proportionally more space. The tank should feature moderate to heavy filtration — piranhas are messy eaters that generate significant waste — and a layout of driftwood and rock that provides sight-line breaks and territorial boundaries within the school.

Diet is the aspect of piranha keeping that most closely matches the mythology, at least visually. Red-Bellied Piranhas are carnivores that eat with remarkable efficiency and enthusiasm. Frozen silversides, shrimp, mussel, and high-protein pellets form the staple diet. Live feeder fish can be offered occasionally from quarantined sources but are not necessary and carry disease risks. The feeding response — triggered by food hitting the water surface — is fast, competitive, and dramatic. This is not a species that picks at its food.

Water parameters should approximate Amazonian blackwater conditions: 75 to 82 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. Tannin-stained water from Indian almond leaves or driftwood is beneficial and replicates natural conditions. Weekly water changes of 25 to 30 percent maintain the pristine conditions that keep piranhas healthy and their red belly coloration vivid — a well-kept Red-Bellied Piranha in clean, slightly acidic water develops a crimson ventral surface that is genuinely beautiful.

At a maximum size of 13 inches and a lifespan of 10 to 15 years, Red-Bellied Piranhas are a manageable and long-term addition to the predatory fish keeper's collection. They are legal in most U.S. states, though several — including California, Hawaii, and Texas — prohibit possession. Always verify your local regulations before purchasing. The Fish Collection confirms legality for your shipping address as part of our standard order process.

The Red-Bellied Piranha delivers an experience that no other aquarium fish can replicate: the raw, coordinated feeding behavior of a pack predator, scaled to fit in your living room. For $75 per specimen, it is one of the most accessible entry points into serious predatory fishkeeping.`,
    seoDescription:
      'Red-Bellied Piranha for sale — captive-bred schooling predators. Live arrival guaranteed, overnight shipping. From $75. Expert-bred at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 100,
    maxSizeInches: 13,
    origin: 'South America (Amazon basin)',
    diet: 'Carnivore — live fish, shrimp, pellets',
    temperament: 'Aggressive (schooling)',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 15,
    faqs: [
      {
        question: 'How much does a Red-Bellied Piranha cost?',
        answer:
          'Red-Bellied Piranhas typically cost $40 to $100 per fish depending on size. Our captive-bred specimens are $75 each, with quantity pricing available for schools of six or more. The total investment includes a 100-gallon-plus tank, robust filtration, and ongoing carnivore diet expenses.',
      },
      {
        question: 'Is it legal to own piranhas?',
        answer:
          'Piranha legality varies by state. They are prohibited in California, Hawaii, Texas, and several other states. Most states allow private possession with no permit required. The Fish Collection verifies legality for your shipping address before processing any piranha order, and we will not ship to restricted jurisdictions.',
      },
      {
        question: 'How many piranhas should I keep together?',
        answer:
          'We recommend a minimum school of 6 Red-Bellied Piranhas in a 100-gallon or larger aquarium. Piranhas are schooling fish that are nervous and stressed when kept individually or in small groups. A school of 6 to 10 in an appropriately sized tank produces the most natural, confident behavior.',
      },
      {
        question: 'How big do Red-Bellied Piranhas get?',
        answer:
          'Red-Bellied Piranhas reach 12 to 13 inches in captivity with a deep, laterally compressed body. They grow steadily, reaching 6 to 8 inches within 2 years. A school of full-grown adults in a well-maintained tank is an impressive display that commands attention.',
      },
      {
        question: 'What do piranhas eat in captivity?',
        answer:
          'Feed frozen silversides, shrimp, mussel, and high-protein carnivore pellets as staple foods. Live feeder fish are not necessary and carry disease risks. Feed the school every 1 to 2 days, removing uneaten food promptly. The feeding response is fast and dramatic — piranhas do not pick at their food.',
      },
      {
        question: 'Are piranhas dangerous to humans?',
        answer:
          'Red-Bellied Piranhas can deliver a serious bite and should be treated with respect during tank maintenance. Use long-handled tools for feeding and cleaning, and avoid putting your hands in the tank during active feeding times. Bites are rare but can require stitches — basic precaution eliminates virtually all risk.',
      },
      {
        question: 'How long do piranhas live?',
        answer:
          'Red-Bellied Piranhas live 10 to 15 years in captivity with proper care. Key factors include maintaining clean water through regular changes, feeding a varied carnivore diet, and keeping them in appropriately sized schools. Well-maintained specimens develop increasingly vivid red coloration as they mature.',
      },
    ],
    relatedSlugs: ['wolf-fish', 'red-tail-catfish', 'flowerhorn-cichlid'],
    ratingAverage: 4.6,
    reviewCount: 35,
  },

  // ──────────────────────────────────────────────
  // 11. Clarion Angelfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Clarion Angelfish',
    scientificName: 'Holacanthus clarionensis',
    slug: 'clarion-angelfish',
    category: 'angelfish',
    sku: 'TF-ANG-CLR-001',
    priceUSD: 6800,
    images: [
      {
        url: '/images/products/clarion-angelfish-hero.jpg',
        alt: 'Clarion Angelfish (Holacanthus clarionensis) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Clarion Angelfish occupies a rarefied position in the marine aquarium world — a species whose vivid orange body, electric-blue fin accents, and extreme geographic limitation combine to produce one of the most sought-after reef fish on the planet. Holacanthus clarionensis is endemic to the Revillagigedo Islands, a volcanic archipelago roughly 400 kilometers off the Pacific coast of Mexico, with small satellite populations around the southern tip of Baja California and Clipperton Island. This narrow distribution, combined with Mexico's strict collection regulations, means that legally obtained Clarion Angelfish enter the aquarium trade in vanishingly small numbers each year.

The Fish Collection's current specimen was acquired through one of the few licensed Mexican marine export operations authorized to collect from the Revillagigedo biosphere reserve. Every Clarion Angelfish we sell comes with complete chain-of-custody documentation tracing its legal collection and export. This paperwork matters — not only for your legal protection but as a guarantee that your purchase supports a regulated, sustainable collection model rather than the black-market trade that has historically plagued this species.

In the aquarium, the Clarion Angelfish is a commanding presence. Adults reach approximately 10 inches and develop the species' full color intensity by age 3 to 4: a uniform warm orange across the body with striking blue edging on the dorsal, anal, and caudal fins. Juveniles display a different pattern entirely — darker orange with blue vertical bars that gradually fade as the fish matures. This ontogenetic color shift is one of the pleasures of raising a Clarion from sub-adult to full maturity; you are essentially watching a different fish reveal itself over the course of several years.

A 180-gallon aquarium is the minimum for an adult Clarion Angelfish. The species is semi-aggressive, establishing a clear territory within the tank and defending it from similarly shaped interlopers — particularly other large angelfish. In a sufficiently spacious system (300 gallons or more), a Clarion can coexist with tangs, wrasses, and other robust reef species. Reef compatibility carries the standard angelfish caveat: while many specimens leave corals alone, some will nip at LPS polyps and clam mantles. A well-fed Clarion with ample grazing opportunities is less likely to develop this behavior, but no guarantee can be made.

Diet is omnivorous, combining marine algae, sponge-based prepared foods, frozen mysis, enriched brine shrimp, and high-quality angelfish pellets. In the wild, Clarion Angelfish feed heavily on sponges and tunicates, so preparations that include these ingredients — New Life Spectrum and LRS are two brands we recommend — provide optimal nutrition. Feed two to three times daily in small portions, which also reduces the likelihood of coral nipping between meals.

Water parameters should match standard reef conditions: 72 to 78 degrees Fahrenheit, pH of 8.1 to 8.4, specific gravity of 1.023 to 1.026, and stable alkalinity. The slightly cooler temperature preference reflects the Clarion's subtropical origin — the Revillagigedo Islands sit at the boundary between tropical and temperate Pacific waters. Robust protein skimming and 10 to 15 percent weekly water changes maintain the pristine conditions this species deserves.

With a lifespan of 15 to 20 years, the Clarion Angelfish is a decade-plus investment that rewards patience. Its coloration deepens, its personality solidifies, and its presence in the aquarium becomes more impressive with every passing year. For the serious marine collector, few species deliver the same combination of beauty, rarity, and long-term satisfaction.`,
    seoDescription:
      'Clarion Angelfish for sale — legally collected from Revillagigedo Islands. Live arrival guaranteed, overnight shipping. From $6,800. Expert-bred at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 180,
    maxSizeInches: 10,
    origin: 'Eastern Pacific (Revillagigedo Islands, Mexico)',
    diet: 'Omnivore — sponges, algae, prepared foods',
    temperament: 'Semi-aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 78,
      phMin: 8.1,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'How much does a Clarion Angelfish cost?',
        answer:
          'Clarion Angelfish typically sell for $5,000 to $10,000 depending on size, coloration, and legal documentation. Our current specimen is priced at $6,800 with full chain-of-custody paperwork. Prices have risen steadily as Mexico has tightened collection quotas from the Revillagigedo biosphere reserve.',
      },
      {
        question: 'Why is the Clarion Angelfish so expensive?',
        answer:
          'The Clarion Angelfish is found only around the Revillagigedo Islands off Mexico, with legal collection permits issued to very few operators under strict annual quotas. This extreme geographic restriction, combined with Mexico\'s tightening export regulations, means fewer than 100 specimens enter the legal trade annually worldwide.',
      },
      {
        question: 'Is the Clarion Angelfish reef safe?',
        answer:
          'The Clarion Angelfish is considered reef-safe with caution. Many specimens coexist peacefully with corals, but some individuals will nip at LPS polyps and clam mantles. A well-fed specimen with ample grazing opportunities is less likely to develop nipping behavior. No absolute guarantee of reef safety can be made for any large angelfish species.',
      },
      {
        question: 'How big does a Clarion Angelfish get?',
        answer:
          'Clarion Angelfish reach approximately 10 inches in captivity, making them one of the larger marine angelfish species. They grow at a moderate pace, reaching near-adult size and full coloration by age 3 to 4. Juveniles display different coloration with blue vertical bars that fade as the fish matures.',
      },
      {
        question: 'What tank size does a Clarion Angelfish need?',
        answer:
          'A minimum of 180 gallons is required for a single Clarion Angelfish. If you plan to keep it with other large fish, especially other angelfish, 300 gallons or more is recommended to allow adequate territory. The tank should include live rock structure for grazing and territorial boundaries.',
      },
      {
        question: 'How long does a Clarion Angelfish live?',
        answer:
          'Clarion Angelfish live 15 to 20 years in captivity with proper care. Their longevity means you are investing in a fish that will be the centerpiece of your reef for well over a decade. Stable water parameters, varied diet including sponge-based foods, and adequate tank size are key to maximum lifespan.',
      },
    ],
    relatedSlugs: ['peppermint-angelfish', 'gem-tang', 'platinum-arowana'],
    ratingAverage: 4.9,
    reviewCount: 5,
  },

  // ──────────────────────────────────────────────
  // 12. Mbu Pufferfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Mbu Pufferfish',
    scientificName: 'Tetraodon mbu',
    slug: 'mbu-pufferfish',
    category: 'pufferfish',
    sku: 'TF-PUF-MBU-001',
    priceUSD: 350,
    images: [
      {
        url: '/images/products/mbu-pufferfish-hero.jpg',
        alt: 'Mbu Pufferfish (Tetraodon mbu) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Mbu Pufferfish is the largest freshwater pufferfish in the world — a 26-inch, tank-busting giant from the Congo River basin that combines the intelligence and personality of its smaller Tetraodon relatives with a size that demands infrastructure most hobbyists associate with public aquariums rather than private collections. At The Fish Collection, we consider the Mbu the single most rewarding freshwater fish we sell, and simultaneously the one we work hardest to ensure goes to the right home. This is not a fish you buy on impulse. It is a fish you plan your fishroom around.

Tetraodon mbu is a visual masterpiece at any size. Juveniles display an intricate maze-like pattern of dark lines on a golden-tan background, punctuated by iridescent green-blue eyes that track movement with an unsettling intelligence. As the fish matures, the pattern becomes bolder, the colors deepen, and the sheer physical presence — a pufferfish the size of a basketball — becomes impossible to ignore. Under the right lighting, the body pattern appears almost three-dimensional, with the dark lines creating an optical illusion of depth across the flanks. No photograph does justice to a full-grown Mbu in person.

The intelligence of the Mbu Pufferfish is not a marketing claim — it is a documented behavioral phenomenon that sets Tetraodon apart from virtually every other freshwater genus. Mbu pufferfish recognize individual humans, learn feeding schedules with precision, respond differently to different people, and display problem-solving behavior that researchers have compared to corvids and primates in its sophistication. They will watch you across a room, follow your movements, and actively solicit interaction by swimming to the glass and making eye contact. Keepers who have maintained both Mbu pufferfish and dogs often remark that the fish is, in meaningful ways, the more engaging companion.

Housing requires a minimum 500-gallon aquarium, and we strongly recommend 750 gallons or more for a full-grown adult. The tank must be robust — Mbu pufferfish are powerful enough to crack aquarium glass if startled into a full-body puff against a panel, and they routinely destroy heaters, thermometers, and any equipment not protected by a sump or external housing. Decor should be limited to large, smooth rocks and heavy driftwood that cannot be toppled. Live plants will be eaten or uprooted. Filtration must be massively oversized — we spec sumps rated for at least three times the tank volume.

Diet is the critical ongoing commitment. Like all pufferfish, the Mbu possesses a continuously growing beak that must be worn down through regular consumption of hard-shelled prey. Snails, clams, mussels, crayfish, and shell-on shrimp should be offered multiple times per week. The Mbu's beak is powerful enough to crush a crayfish carapace like a grape, producing a satisfying crack that becomes one of the hallmarks of feeding time. Supplement with frozen silversides, whole market shrimp, and quality carnivore pellets. A dedicated snail-breeding operation — or a reliable snail supplier — is effectively a prerequisite for Mbu ownership.

Water parameters are straightforward: 75 to 82 degrees Fahrenheit, pH of 7.0 to 8.0, and moderate hardness. The species is a pure freshwater fish — no salt required. Weekly water changes of 30 to 50 percent are essential given the enormous bioload a 26-inch predator generates.

The Mbu Pufferfish lives 10 to 15 years and will become the most memorable aquatic animal you have ever kept. It is intelligent, interactive, visually stunning, and demanding in equal measure. For the keeper with the space, the budget, and the commitment, there is simply nothing else like it in freshwater fishkeeping.`,
    seoDescription:
      'Mbu Pufferfish for sale — the world\'s largest freshwater pufferfish. Live arrival guaranteed, overnight shipping. From $350. Expert-bred at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 500,
    maxSizeInches: 26,
    origin: 'Africa (Congo River basin)',
    diet: 'Carnivore — snails, shellfish, crustaceans',
    temperament: 'Aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 7.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'How much does an Mbu Pufferfish cost?',
        answer:
          'Mbu Pufferfish typically cost $200 to $500 for juveniles. Our specimens are priced at $350 and are healthy, feeding juveniles. The purchase price is a fraction of the total ownership cost — the 500-gallon-plus tank, industrial filtration, and ongoing supply of snails and shellfish represent the real financial commitment.',
      },
      {
        question: 'How big does an Mbu Pufferfish get?',
        answer:
          'The Mbu Pufferfish reaches 26 inches in captivity, making it the largest freshwater pufferfish in the world. At full size, its body is roughly the diameter of a basketball. Growth is steady over 5 to 7 years, which gives keepers time to plan tank upgrades — but those upgrades are inevitable and non-negotiable.',
      },
      {
        question: 'What tank size does an Mbu Pufferfish need?',
        answer:
          'A minimum of 500 gallons is required, with 750 gallons or more strongly recommended for full-grown adults. The tank must be structurally robust — Mbu pufferfish can crack standard glass if they puff against a panel. All equipment should be housed externally or in a sump to prevent destruction.',
      },
      {
        question: 'Can an Mbu Pufferfish live with other fish?',
        answer:
          'Mbu Pufferfish are aggressive and should generally be kept alone. Their powerful beak can inflict severe damage on tankmates of any size. Some keepers house them with large, fast-moving species in 1,000-gallon-plus systems, but injuries are always a risk. Solo housing is the safest and most recommended approach.',
      },
      {
        question: 'What do Mbu Pufferfish eat?',
        answer:
          'Hard-shelled foods are essential: snails, clams, mussels, crayfish, and shell-on shrimp must be offered multiple times weekly to wear down the continuously growing beak. Supplement with frozen silversides, whole shrimp, and carnivore pellets. A reliable snail supply — either bred at home or purchased regularly — is a prerequisite for Mbu ownership.',
      },
      {
        question: 'Do Mbu Pufferfish recognize their owners?',
        answer:
          'Yes, Mbu Pufferfish are among the most intelligent freshwater fish and readily recognize individual humans. They respond differently to different people, learn feeding schedules precisely, and actively seek interaction by swimming to the glass. Researchers have compared their problem-solving abilities to those of corvids and primates.',
      },
      {
        question: 'How long does an Mbu Pufferfish live?',
        answer:
          'Mbu Pufferfish live 10 to 15 years in captivity with proper care. Key longevity factors include regular hard-shelled foods for beak maintenance, massive and consistent filtration, spacious housing, and frequent large water changes. The species is hardy once established but intolerant of poor water quality.',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish', 'red-tail-catfish', 'wolf-fish'],
    ratingAverage: 4.8,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 13. Black Diamond Stingray
  // ──────────────────────────────────────────────
  {
    commonName: 'Black Diamond Stingray',
    scientificName: 'Potamotrygon leopoldi',
    slug: 'black-diamond-stingray',
    category: 'stingray',
    sku: 'TF-STR-BDIA-001',
    priceUSD: 2800,
    images: [
      {
        url: '/images/products/black-diamond-stingray-hero.jpg',
        alt: 'Black Diamond Stingray (Potamotrygon leopoldi) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Black Diamond Stingray is one of the most visually arresting freshwater fish on the planet — a jet-black disc studded with brilliant white spots that look as though someone scattered diamonds across volcanic glass. Potamotrygon leopoldi hails from the Xingu River basin in Brazil, a system renowned for producing some of the hobby's most desirable species. The Fish Collection sources our Black Diamond Stingrays from licensed Brazilian breeding operations that maintain meticulous genetic records, ensuring the high-contrast patterning and disc symmetry that distinguish a premium specimen from an ordinary one.

What makes the Black Diamond genuinely special among Potamotrygon species is the intensity of its coloration. While many freshwater rays display spotted patterns, P. leopoldi exhibits an almost binary contrast — the deepest possible black against the purest possible white. As specimens mature, spots often become more defined and may develop subtle golden halos, adding another layer of visual complexity. Our current offering displays approximately forty to fifty well-defined spots across the dorsal surface, with clean margins and no blurring — characteristics that command the highest prices in the stingray market.

Housing a Black Diamond Stingray requires serious infrastructure. We mandate a minimum 180-gallon aquarium for a single juvenile, but strongly recommend 300 gallons or larger for an adult that can reach a disc width of eighteen inches. The tank footprint matters more than depth — rays need floor space, and a tank that is wide and shallow is preferable to one that is tall and narrow. Substrate should be fine sand to prevent abrasion of the ray's ventral surface. Avoid sharp rocks or ornaments that could injure the disc margin. Filtration must be industrial-grade; we typically recommend sump systems rated for three to four times the tank volume, as rays are both messy eaters and highly sensitive to dissolved waste.

Water parameters need careful attention. Black Diamond Stingrays thrive in soft, acidic to neutral water with temperatures between 78 and 84 degrees Fahrenheit and pH between 6.0 and 7.0. Ammonia and nitrite must remain at zero at all times — rays are among the first fish to show distress from nitrogenous waste. Weekly water changes of thirty to fifty percent are standard practice among serious ray keepers. We also recommend over-filtration and the use of high-quality activated carbon to maintain pristine water clarity.

Diet consists of meaty, protein-rich foods. In the wild, P. leopoldi feeds on invertebrates, small fish, and crustaceans buried in river sediment. In captivity, offer a rotation of live blackworms, earthworms, shrimp, tilapia fillets, and high-quality sinking pellets. Our rays are already trained to accept frozen foods, which simplifies long-term husbandry considerably. Feed daily for juveniles, tapering to every other day for adults. Overfeeding is a common mistake — a slightly hungry ray is a healthy ray.

The Fish Collection ships all stingrays in custom shallow containers designed to minimize disc folding during transit. Each shipment includes a heat pack calibrated to transit time and double-bagged oxygen-enriched water. Our live arrival guarantee covers every ray we sell, and our aquatics team provides post-purchase consultation on setup optimization and long-term care planning.`,
    seoDescription:
      'Black Diamond Stingray for sale — stunning Potamotrygon leopoldi from Brazil. Live arrival guaranteed, overnight shipping. From $2,800 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 180,
    maxSizeInches: 18,
    origin: 'Brazil (Xingu River basin)',
    diet: 'Carnivore — shrimp, worms, small fish, frozen foods',
    temperament: 'Semi-aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 78,
      tempMax: 84,
      phMin: 6.0,
      phMax: 7.0,
      hardnessMin: 1,
      hardnessMax: 8,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'How much does a Black Diamond Stingray cost?',
        answer:
          'Black Diamond Stingrays typically range from $1,500 to $5,000 depending on size, spot pattern quality, and disc symmetry. Exceptional specimens with high spot counts and perfect contrast can exceed $8,000. Our current specimen is priced at $2,800, reflecting its premium patterning and verified Brazilian breeding lineage. Prices have risen steadily over the past decade as Brazil has tightened export regulations, making captive-bred specimens increasingly valuable.',
      },
      {
        question: 'How big does a Black Diamond Stingray get?',
        answer:
          'A fully grown Black Diamond Stingray reaches a disc width of approximately 18 inches, with total length including the tail extending to 24 to 30 inches. Growth is steady in well-maintained aquariums — expect roughly one inch of disc width per month during the first year under optimal feeding and water conditions. Males tend to be slightly smaller than females, with mature females occasionally exceeding 18 inches in exceptional setups.',
      },
      {
        question: 'What tank size does a Black Diamond Stingray need?',
        answer:
          'We require a minimum 180-gallon aquarium for a single juvenile, with 300 gallons or larger strongly recommended for adult housing. Tank footprint is more important than height — a 72-inch by 24-inch floor area is the practical minimum. Many dedicated ray keepers use custom-built shallow tanks or stock tanks that maximize floor space. Fine sand substrate is essential to prevent ventral abrasion, and filtration should be rated for three to four times the tank volume.',
      },
      {
        question: 'Are Black Diamond Stingrays dangerous?',
        answer:
          'Black Diamond Stingrays possess a venomous barb on the tail that can deliver a painful sting if the ray feels threatened. The sting is not life-threatening to healthy adults but requires immediate hot water immersion and may need medical attention. In practice, stings are rare among experienced keepers who use proper handling techniques. Never grab a ray by the tail, and use a flat net or container when moving the animal. Many keepers develop a working relationship with their rays over time, with some specimens becoming tame enough to hand-feed.',
      },
      {
        question: 'What do Black Diamond Stingrays eat?',
        answer:
          'Black Diamond Stingrays are carnivores that thrive on a varied diet of live blackworms, earthworms, shrimp, tilapia fillets, smelt, and high-quality sinking pellets. Our specimens are already trained on frozen foods for convenience. Feed juveniles daily and adults every other day. Variety is key to complete nutrition — rotate protein sources throughout the week and supplement with vitamin-enriched foods periodically. Avoid feeder fish unless from quarantined, disease-free sources.',
      },
    ],
    relatedSlugs: ['motoro-stingray', 'red-tail-catfish', 'platinum-arowana'],
    speciesGuideSlug: 'black-diamond-stingray',
    ratingAverage: 4.9,
    reviewCount: 7,
  },

  // ──────────────────────────────────────────────
  // 14. Motoro Stingray
  // ──────────────────────────────────────────────
  {
    commonName: 'Motoro Stingray',
    scientificName: 'Potamotrygon motoro',
    slug: 'motoro-stingray',
    category: 'stingray',
    sku: 'TF-STR-MOTO-001',
    priceUSD: 650,
    images: [
      {
        url: '/images/products/motoro-stingray-hero.jpg',
        alt: 'Motoro Stingray (Potamotrygon motoro) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Motoro Stingray is the gateway species for freshwater ray keeping — widely available compared to its rarer cousins, yet no less captivating in its own right. Potamotrygon motoro displays a warm brown to olive disc covered in distinctive ocelli — eyespot markings ringed in orange or gold that create a mesmerizing pattern unique to each individual. No two Motoro Stingrays look exactly alike, which gives every specimen a fingerprint-level individuality that collectors find deeply appealing. The Fish Collection selects our Motoro Stingrays for vibrant ocelli contrast, clean disc margins, and robust feeding response — the trifecta that indicates a healthy, well-adjusted ray.

Potamotrygon motoro has the widest natural distribution of any South American freshwater ray, found across the Amazon, Orinoco, and Paraná river basins. This broad range has produced considerable regional variation in color and pattern. Specimens from the upper Amazon tend toward darker base coloration with smaller, more numerous ocelli, while those from the Paraná drainage often display lighter backgrounds with larger, bolder markings. Our current stock derives from captive-bred lines that emphasize high-contrast ocelli on a clean brown background — the most popular aesthetic among ray enthusiasts.

Tank requirements for the Motoro are substantial but less extreme than for some Potamotrygon species. A minimum 125-gallon aquarium is acceptable for a juvenile, but plan for 200 gallons or more as the animal matures to its adult disc width of roughly fifteen inches. As with all rays, floor space trumps water column height. A wide, shallow tank with fine sand substrate provides the ideal environment. Avoid gravel, which can trap waste and harbor bacteria beneath the ray's resting body. Decoration should be minimal — smooth rocks and driftwood positioned around the perimeter, leaving the center open for the ray to patrol and feed.

Water chemistry for P. motoro is forgiving by ray standards. Temperature should range between 76 and 82 degrees Fahrenheit, with pH between 6.0 and 7.5. While Motoro Stingrays tolerate a broader pH range than some congeners, they remain sensitive to ammonia and nitrite — zero tolerance for both is non-negotiable. Weekly water changes of twenty-five to forty percent, combined with oversized biological and mechanical filtration, will maintain the pristine conditions these animals require.

Feeding is straightforward and one of the joys of ray keeping. Motoro Stingrays are enthusiastic eaters that accept a wide variety of meaty foods including earthworms, shrimp, bloodworms, tilapia, and commercial sinking pellets. Our specimens are already eating frozen foods readily, which simplifies daily husbandry. Juveniles should be fed daily, with adults transitioning to an every-other-day schedule. Watch body condition carefully — a ray whose disc edges appear pinched or concave is underfed, while one that looks puffy around the base of the tail may be receiving too much food.

The Fish Collection ships Motoro Stingrays in custom flat containers that prevent disc curling during transit. Each shipment is temperature-regulated and oxygen-enriched, with our standard live arrival guarantee covering the full purchase price. Our team is available post-purchase for setup consultation and ongoing husbandry advice.`,
    seoDescription:
      'Motoro Stingray for sale — the classic freshwater ray with stunning ocelli patterns. Live arrival guaranteed, overnight shipping. From $650 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 125,
    maxSizeInches: 15,
    origin: 'South America (Amazon, Orinoco, Paraná basins)',
    diet: 'Carnivore — shrimp, worms, frozen foods, pellets',
    temperament: 'Semi-aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 12,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How much does a Motoro Stingray cost?',
        answer:
          'Motoro Stingrays are among the most affordable freshwater rays, typically ranging from $300 to $1,200 depending on size and pattern quality. Our current specimen is priced at $650, reflecting excellent ocelli contrast and a healthy feeding response. Exceptional specimens with unusually vivid coloration or rare pattern mutations can command higher prices, but the Motoro remains the most accessible entry point into ray keeping.',
      },
      {
        question: 'Are Motoro Stingrays good for beginners?',
        answer:
          'The Motoro Stingray is considered the best freshwater ray species for newcomers to ray keeping, but it is still an advanced-level fish by general aquarium standards. It tolerates a broader range of water parameters than most Potamotrygon species and adapts readily to captive diets. However, it still requires a large aquarium, pristine water quality, oversized filtration, and a commitment to frequent water changes. We recommend prior experience with large predatory fish before attempting ray keeping.',
      },
      {
        question: 'Can Motoro Stingrays live with other fish?',
        answer:
          'Yes, Motoro Stingrays can coexist with appropriately sized tankmates. Suitable companions include large, mid-to-upper-water-dwelling species like Arowana, large cichlids, and Silver Dollars that stay out of the ray\'s bottom territory. Avoid small fish that could be eaten, bottom-dwelling species that compete for floor space, and aggressive fish that might nip the ray\'s disc. Never house rays with plecostomus, which have been documented attaching to ray discs and causing injury.',
      },
      {
        question: 'How big does a Motoro Stingray get?',
        answer:
          'Motoro Stingrays reach a disc width of approximately 15 inches in captivity, with total length including tail stretching to 20 to 26 inches. Females tend to be slightly larger than males. Growth is moderate — expect about an inch of disc width per month during the first year under optimal conditions, slowing considerably after the second year. Full adult size is typically achieved between ages 3 and 5 depending on diet and tank conditions.',
      },
    ],
    relatedSlugs: ['black-diamond-stingray', 'red-tail-catfish', 'albino-alligator-gar'],
    speciesGuideSlug: 'black-diamond-stingray',
    ratingAverage: 4.7,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 15. Black Ghost Knife Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Black Ghost Knife Fish',
    scientificName: 'Apteronotus albifrons',
    slug: 'black-ghost-knife-fish',
    category: 'knife-fish',
    sku: 'TF-KNF-BGHO-001',
    priceUSD: 25,
    images: [
      {
        url: '/images/products/black-ghost-knife-fish-hero.jpg',
        alt: 'Black Ghost Knife Fish (Apteronotus albifrons) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Black Ghost Knife Fish is one of the most hauntingly beautiful freshwater species available to aquarists — a sleek, jet-black phantom that glides through the water column with an undulating ribbon fin that appears to defy conventional fish locomotion. Apteronotus albifrons belongs to the order Gymnotiformes, the South American knifefish, and possesses a weak electric organ that it uses not for offense but for navigation and communication in the murky, root-tangled waterways of the Amazon basin. Watching a Black Ghost Knife Fish move through a dimly lit aquarium is an experience that borders on the surreal — the fish seems to hover, reverse, and pivot in ways that no other aquarium species can replicate.

The Fish Collection sources our Black Ghost Knife Fish from established breeding facilities in South America that prioritize healthy, well-conditioned specimens. Each fish we offer has been quarantined for a minimum of two weeks and is eating frozen foods enthusiastically before being listed for sale. The specimen you receive will be actively feeding and fully acclimated to captive conditions — a critical advantage over wild-caught fish that may refuse food for weeks after collection.

In the aquarium, the Black Ghost Knife Fish requires a minimum 75-gallon tank, though we recommend 125 gallons for a full-grown adult that can reach 20 inches in length. These are nocturnal fish that spend daylight hours hidden in caves, tubes, or dense vegetation, emerging at dusk to patrol the tank and hunt. Provide plenty of hiding spots — PVC tubes, driftwood caves, and dense plant thickets are all excellent options. A ghost knife that lacks adequate shelter will be perpetually stressed, pale in color, and reluctant to feed.

Water parameters should reflect the species' Amazonian origins. Temperature between 73 and 82 degrees Fahrenheit, pH between 6.0 and 7.5, and soft to moderately hard water will keep the fish comfortable. The electric organ that makes this species so fascinating also makes it unusually sensitive to certain medications — copper-based treatments and many common ich medications are lethal to knifefish. If disease treatment becomes necessary, consult a specialist before adding any chemicals to the tank.

Diet consists primarily of meaty foods. In the wild, A. albifrons feeds on insect larvae, small crustaceans, and worms. In captivity, offer frozen bloodworms, brine shrimp, mysis shrimp, and high-quality sinking pellets. Live blackworms are an excellent conditioning food. Feed after lights-out when the fish is naturally active and hunting. A well-fed Black Ghost Knife Fish develops a robust, slightly rounded body profile — if the fish appears pinched behind the head, increase feeding frequency.

The cultural significance of this species adds another dimension to its appeal. In parts of South America, local communities believe the ghosts of departed loved ones inhabit these fish, hence the common name. Whether or not you subscribe to the folklore, there is something undeniably spectral about watching this fish materialize from the shadows of a darkened aquarium. The Fish Collection ships all knifefish in darkened, insulated containers to minimize transit stress, with our standard live arrival guarantee.`,
    seoDescription:
      'Black Ghost Knife Fish for sale — the electric phantom of the Amazon. Live arrival guaranteed, overnight shipping. From $25 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 75,
    maxSizeInches: 20,
    origin: 'South America (Amazon basin)',
    diet: 'Carnivore — frozen bloodworms, brine shrimp, worms',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'How big does a Black Ghost Knife Fish get?',
        answer:
          'Black Ghost Knife Fish reach approximately 18 to 20 inches in captivity, with exceptional specimens occasionally exceeding that in very large aquariums. Growth is moderate — expect roughly 3 to 4 inches per year under optimal conditions. They reach near-adult size within 4 to 5 years. Despite their length, their laterally compressed body means they carry their size gracefully without appearing bulky, though they still require a spacious tank to move comfortably.',
      },
      {
        question: 'Are Black Ghost Knife Fish aggressive?',
        answer:
          'Black Ghost Knife Fish are generally peaceful toward dissimilar species but can be territorial toward other knifefish or similarly shaped bottom-dwellers. They should be kept singly unless the aquarium is very large with multiple hiding spots. They coexist well with medium to large community fish like angelfish, severums, and larger tetras. Avoid housing them with very small fish that could be eaten or very aggressive species that might harass the knife fish during its vulnerable daytime resting periods.',
      },
      {
        question: 'What do Black Ghost Knife Fish eat?',
        answer:
          'Black Ghost Knife Fish are carnivores that feed primarily on frozen bloodworms, brine shrimp, mysis shrimp, chopped earthworms, and quality sinking pellets. Live blackworms are an excellent supplemental food that encourages natural hunting behavior. Feed after lights-out when the fish is naturally active. Young specimens should be fed daily, while adults do well on an every-other-day schedule. Ensure food reaches the bottom of the tank where the knife fish feeds.',
      },
      {
        question: 'Do Black Ghost Knife Fish produce electricity?',
        answer:
          'Yes, Black Ghost Knife Fish generate a weak electric field using a specialized organ in their tail. This field is used for navigation and communication, not for stunning prey or defense. The electric discharge is far too weak to be felt by humans or to harm other fish. The electrosensory system allows the fish to navigate in complete darkness, detect objects and prey, and communicate with other knifefish. This adaptation is part of what makes their movement so fluid and precise in dimly lit aquariums.',
      },
      {
        question: 'Can Black Ghost Knife Fish live with other fish?',
        answer:
          'Black Ghost Knife Fish coexist well with a variety of medium to large peaceful community fish. Good tankmates include angelfish, discus, larger tetras, peaceful cichlids, and Corydoras catfish. Avoid very small fish that could be mistaken for food, aggressive species like large cichlids or pufferfish, and other knifefish unless the tank exceeds 200 gallons. Bottom-dwelling species like plecos are generally compatible as long as adequate hiding spots are available for both species.',
      },
    ],
    relatedSlugs: ['clown-knife-fish', 'dragon-goby', 'wolf-fish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 18,
  },

  // ──────────────────────────────────────────────
  // 16. Clown Knife Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Clown Knife Fish',
    scientificName: 'Chitala ornata',
    slug: 'clown-knife-fish',
    category: 'knife-fish',
    sku: 'TF-KNF-CLWN-001',
    priceUSD: 35,
    images: [
      {
        url: '/images/products/clown-knife-fish-hero.jpg',
        alt: 'Clown Knife Fish (Chitala ornata) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Clown Knife Fish is a magnificent predator from Southeast Asia that combines dramatic size with striking ornamentation — a silvery, blade-shaped body adorned with bold, dark-rimmed ocelli that give the species both its common name and its unmistakable visual identity. Chitala ornata is a true showpiece fish that grows large, feeds aggressively, and commands attention in any aquarium. The Fish Collection offers carefully selected juvenile specimens that display strong early ocelli development and vigorous feeding response — the markers of a fish that will develop into a spectacular adult.

In the wild, C. ornata inhabits the slow-moving rivers, floodplains, and lakes of Thailand, Cambodia, Vietnam, and surrounding regions. It is a crepuscular predator that hunts at dawn and dusk, using a combination of keen eyesight and lateral line sensitivity to ambush prey in dimly lit water. In captivity, this predatory instinct remains fully intact, making feeding time one of the most dramatic moments in the fishkeeping day. A mature Clown Knife Fish strikes with startling speed, engulfing prey in a cavernous mouth that seems disproportionately large for its streamlined body.

Tank requirements are substantial. While juveniles can be started in a 75-gallon aquarium, adult Clown Knife Fish routinely reach 24 to 36 inches in captivity, necessitating a minimum 200-gallon tank for long-term housing. A 300-gallon system is preferable for a full-grown specimen. The tank should be dimly lit with ample driftwood and root structures that provide both shelter and visual barriers. Clown Knife Fish are surprisingly skittish for their size — a startled specimen can injure itself by slamming into tank walls, so avoid placing the aquarium in high-traffic areas with sudden movement or bright overhead lighting.

Water parameters are notably flexible. Temperature should range between 75 and 85 degrees Fahrenheit, with pH between 6.0 and 7.5. Hardness is relatively unimportant — the species adapts to both soft and moderately hard water without difficulty. Filtration must be robust, as Clown Knife Fish are messy eaters that produce significant bioload. Canister filters or sumps rated for at least twice the tank volume are essential.

Diet transitions as the fish grows. Small juveniles accept frozen bloodworms and brine shrimp. As they grow, introduce chopped market shrimp, silversides, tilapia strips, and eventually whole feeder fish from quarantined sources. Our specimens are trained on frozen foods from an early age, which greatly simplifies long-term feeding management. Feed juveniles daily and adults two to three times per week. Monitor body condition — a healthy Clown Knife Fish has a smoothly convex belly profile without appearing bloated.

The Clown Knife Fish is not a community fish in any conventional sense. Tankmates must be large enough to avoid predation and robust enough to share space with a territorial predator. Large cichlids, full-grown Arowana, and similarly sized catfish are appropriate companions. The Fish Collection ships all Clown Knife Fish in oversized containers with adequate water volume and oxygen supplementation, backed by our live arrival guarantee.`,
    seoDescription:
      'Clown Knife Fish for sale — a striking Southeast Asian predator with bold ocelli. Live arrival guaranteed, overnight shipping. From $35 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 200,
    maxSizeInches: 36,
    origin: 'Southeast Asia (Thailand, Cambodia, Vietnam)',
    diet: 'Carnivore — feeder fish, shrimp, frozen foods',
    temperament: 'Predatory',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 85,
      phMin: 6.0,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 18,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'How big does a Clown Knife Fish get?',
        answer:
          'Clown Knife Fish commonly reach 24 to 36 inches in captivity, with exceptional specimens occasionally exceeding 3 feet in very large aquariums. In the wild, they can grow even larger. Growth is rapid during the first two years — expect 8 to 12 inches of growth per year under optimal feeding conditions. A juvenile purchased at 4 inches can reach 18 inches within its first year if fed generously. This rapid growth rate is why planning for a large tank from the outset is essential.',
      },
      {
        question: 'What tank size does a Clown Knife Fish need?',
        answer:
          'A minimum 200-gallon aquarium is required for an adult Clown Knife Fish, with 300 gallons or larger being optimal. Juveniles can be temporarily housed in 75-gallon tanks, but they outgrow them quickly. The tank should be at least 6 feet long to provide adequate swimming space. Dim lighting, heavy driftwood cover, and a secure lid are essential — Clown Knife Fish are jumpers, especially when startled. Avoid placing the tank in high-traffic areas where sudden movements might spook the fish.',
      },
      {
        question: 'Can Clown Knife Fish live with other fish?',
        answer:
          'Clown Knife Fish can coexist with other large species that are too big to be eaten. Suitable tankmates include large cichlids like Oscars and Flowerhorns, adult Arowana, large catfish, and other robust predators. Any fish that fits in the Clown Knife\'s mouth will eventually be eaten — this includes surprisingly large prey, as the species can engulf fish up to one-third its own body length. Never house with small or medium community fish, slow-moving bottom dwellers that could be ambushed, or aggressive fin-nippers.',
      },
      {
        question: 'What do Clown Knife Fish eat?',
        answer:
          'Clown Knife Fish are voracious predators that eat live feeder fish, market shrimp, silversides, tilapia strips, and frozen foods. Our specimens are pre-trained on frozen foods for convenience. Juveniles should be fed daily with appropriately sized items, while adults do well on two to three feedings per week. Live foods trigger the most dramatic feeding response but should be sourced from quarantined suppliers to prevent disease introduction. Vary the diet to ensure complete nutritional coverage.',
      },
    ],
    relatedSlugs: ['black-ghost-knife-fish', 'wolf-fish', 'red-tail-catfish'],
    speciesGuideSlug: 'clown-knife-fish',
    ratingAverage: 4.5,
    reviewCount: 14,
  },

  // ──────────────────────────────────────────────
  // 17. Clown Loach
  // ──────────────────────────────────────────────
  {
    commonName: 'Clown Loach',
    scientificName: 'Chromobotia macracanthus',
    slug: 'clown-loach',
    category: 'loach',
    sku: 'TF-LCH-CLWN-001',
    priceUSD: 18,
    images: [
      {
        url: '/images/products/clown-loach-hero.jpg',
        alt: 'Clown Loach (Chromobotia macracanthus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Clown Loach is arguably the most beloved loach species in the freshwater aquarium hobby — a bold, sociable fish whose vivid orange-and-black banding and endearing behavioral quirks have earned it a devoted following among aquarists worldwide. Chromobotia macracanthus hails from the rivers and floodplains of Borneo and Sumatra, where it inhabits soft, acidic waterways rich in submerged wood and leaf litter. The Fish Collection sources our Clown Loaches from sustainable collection programs in Indonesia, selecting specimens that exhibit the deepest orange pigmentation and the sharpest black band definition — the visual hallmarks of a healthy, well-nourished fish.

What makes the Clown Loach such a compelling aquarium inhabitant goes far beyond its striking appearance. These are genuinely social fish that thrive in groups and display a repertoire of behaviors that keeps their keepers entertained for years. They play dead — lying motionless on their sides in a way that sends panicked new owners rushing to forums. They click audibly when excited or agitated, producing sounds with their pharyngeal teeth that are clearly audible outside the tank. They wedge themselves into impossibly tight spaces to sleep, stacking on top of one another in communal resting spots. Every Clown Loach keeper has a story about discovering their fish in some improbable location within the tank.

We strongly recommend keeping Clown Loaches in groups of five or more. Solitary specimens become reclusive and stressed, losing their color and spending excessive time hidden. In a properly sized group, the fish establish a loose social hierarchy and spend the majority of their active hours foraging together across the tank bottom. The minimum tank size for a group of juveniles is 75 gallons, but this must be upgraded as the fish grow. Clown Loaches are slow growers by tropical fish standards, but they ultimately reach 10 to 12 inches in captivity, necessitating a 150-gallon or larger tank for an adult group. Plan for the long term — these fish can live over 20 years.

Water parameters should mirror the species' Bornean origins. Temperature between 77 and 86 degrees Fahrenheit, pH between 6.0 and 7.5, and soft to moderately soft water provide ideal conditions. Clown Loaches are notoriously susceptible to ich (white spot disease), especially after transport or sudden temperature drops. We quarantine all our specimens and treat prophylactically before sale, but new owners should maintain stable temperatures and avoid sudden parameter swings during the critical first few weeks after arrival.

Diet is omnivorous and easy to satisfy. Clown Loaches are enthusiastic bottom feeders that accept sinking pellets, wafers, frozen bloodworms, brine shrimp, blanched vegetables, and — famously — snails. If you have a snail problem in any of your aquariums, a group of Clown Loaches will solve it with remarkable efficiency. Our specimens ship in insulated, oxygen-enriched bags with our standard live arrival guarantee.`,
    seoDescription:
      'Clown Loach for sale — the iconic social loach with bold orange-and-black bands. Live arrival guaranteed, overnight shipping. From $18 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 75,
    maxSizeInches: 12,
    origin: 'Indonesia (Borneo, Sumatra)',
    diet: 'Omnivore — sinking pellets, worms, snails, vegetables',
    temperament: 'Peaceful',
    lifespan: '20-25 years',
    waterParameters: {
      tempMin: 77,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 12,
    },
    inStock: true,
    stockCount: 12,
    faqs: [
      {
        question: 'How big does a Clown Loach get?',
        answer:
          'Clown Loaches reach 10 to 12 inches in captivity, though growth is slow compared to many tropical fish. Expect about 1 to 2 inches of growth per year under optimal conditions. In the wild, they can exceed 16 inches. Full adult size in aquariums is typically reached between ages 8 and 12. Despite their slow growth, planning for their eventual size is essential — a group of five adult Clown Loaches requires at least 150 gallons and ideally more.',
      },
      {
        question: 'How many Clown Loaches should be kept together?',
        answer:
          'We strongly recommend a minimum group of five Clown Loaches. These are highly social fish that display natural behaviors — playing, foraging, and communal resting — only when kept in adequate numbers. Solitary Clown Loaches become reclusive, lose color, and often refuse food. Groups of three are marginally acceptable but do not produce the dynamic social interactions that make this species so engaging. Larger groups of eight or more in spacious tanks produce the most natural, active behavior.',
      },
      {
        question: 'Do Clown Loaches eat snails?',
        answer:
          'Yes, Clown Loaches are among the most effective snail predators in the aquarium hobby. They crack snail shells with their pharyngeal teeth and consume the soft body with enthusiasm. A group of Clown Loaches will eliminate a pest snail infestation within days to weeks depending on tank size and snail population. They eat virtually all common pest snail species including Malaysian Trumpet Snails, Ramshorn Snails, and Bladder Snails. Be aware that they will also eat ornamental snails like Nerites and Mystery Snails if given access.',
      },
      {
        question: 'Why is my Clown Loach lying on its side?',
        answer:
          'Clown Loaches are famous for "playing dead" — lying motionless on their sides, sometimes with faded coloration, in a behavior that alarms new owners. This is completely normal resting behavior unique to this species and a few close relatives. The fish will resume normal activity when disturbed or when feeding time approaches. However, if a Clown Loach is lying on its side and also showing signs of illness — rapid breathing, white spots, clamped fins, or refusal to eat — then investigation is warranted. Context is key: a fish that was active and eating normally a few hours ago is almost certainly just napping.',
      },
      {
        question: 'Are Clown Loaches hard to keep?',
        answer:
          'Clown Loaches are moderately challenging. They require stable water parameters, are susceptible to ich, and need large tanks for long-term housing. Their sensitivity to common medications means disease treatment requires careful research. However, their dietary needs are simple, their temperament is peaceful, and their entertaining behavior rewards the effort invested in proper care. The biggest pitfall is underestimating their eventual size and lifespan — these are 20-year commitments to a 12-inch fish that needs a group.',
      },
    ],
    relatedSlugs: ['zebra-loach', 'clown-knife-fish', 'dragon-goby'],
    speciesGuideSlug: 'clown-loach',
    ratingAverage: 4.8,
    reviewCount: 22,
  },

  // ──────────────────────────────────────────────
  // 18. Zebra Loach
  // ──────────────────────────────────────────────
  {
    commonName: 'Zebra Loach',
    scientificName: 'Botia striata',
    slug: 'zebra-loach',
    category: 'loach',
    sku: 'TF-LCH-ZBRA-001',
    priceUSD: 8,
    images: [
      {
        url: '/images/products/zebra-loach-hero.jpg',
        alt: 'Zebra Loach (Botia striata) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Zebra Loach is a compact, beautifully patterned bottom-dweller that brings both visual interest and practical utility to community aquariums. Botia striata features a pale golden body crossed by numerous thin, dark vertical bands that give the species its common name — a pattern that, under good conditions, becomes increasingly defined and attractive as the fish matures. Native to the rivers and streams of the Western Ghats in India, this species occupies a niche in the aquarium hobby as a smaller, more manageable alternative to the Clown Loach, while retaining much of the personality and social behavior that makes loaches so popular.

The Fish Collection selects our Zebra Loaches for crisp band definition, active temperament, and robust body condition. Each specimen has been quarantined and is eating prepared foods readily before being offered for sale. The fish you receive will be healthy, acclimated, and ready to integrate into your aquarium without the prolonged settling-in period that can accompany poorly conditioned imports.

At a maximum size of 3.5 to 4 inches, the Zebra Loach is well-suited to moderately sized community tanks. A minimum of 30 gallons is appropriate for a group of five to six specimens, which is the minimum social unit we recommend. Like all Botia species, Zebra Loaches are social fish that exhibit their most natural and entertaining behaviors when kept in groups. They establish a pecking order through ritualized sparring that involves circling and flank displays — vigorous but harmless interactions that are fascinating to observe. Solitary specimens tend to hide excessively and may develop stress-related health issues.

The aquarium should provide a combination of open swimming space and abundant hiding spots. Rocks, caves, driftwood, and dense planting create the complexity these fish prefer. Substrate should be smooth sand or fine gravel — loaches spend considerable time foraging on and through the substrate, and rough materials can damage their sensitive barbels. Moderate water flow is appreciated, mimicking the flowing streams of their natural habitat.

Water parameters are flexible within tropical freshwater ranges. Temperature between 73 and 79 degrees Fahrenheit, pH between 6.0 and 7.5, and soft to moderately hard water suit the species well. Zebra Loaches are hardier than many loach species and tolerate minor parameter fluctuations better than their more sensitive cousins, making them a good choice for loach keepers building experience before tackling species like the Clown Loach.

Diet is omnivorous and uncomplicated. Sinking pellets and wafers form the staple, supplemented with frozen bloodworms, brine shrimp, blanched zucchini, and — like their larger Botia relatives — snails. Zebra Loaches are effective pest snail controllers, though their smaller mouth size means they target smaller snail species more efficiently than large ones. The Fish Collection ships Zebra Loaches in insulated bags with our live arrival guarantee.`,
    seoDescription:
      'Zebra Loach for sale — a compact, beautifully banded social loach for community tanks. Live arrival guaranteed, overnight shipping. From $8 at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 30,
    maxSizeInches: 4,
    origin: 'India (Western Ghats)',
    diet: 'Omnivore — sinking pellets, worms, snails, vegetables',
    temperament: 'Peaceful',
    lifespan: '8-12 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 79,
      phMin: 6.0,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 10,
    faqs: [
      {
        question: 'How big does a Zebra Loach get?',
        answer:
          'Zebra Loaches reach a maximum of 3.5 to 4 inches in captivity, making them one of the more compact loach species suitable for moderately sized aquariums. Growth is relatively quick — most specimens reach full size within 2 to 3 years under good conditions. Their manageable size is one of their key advantages over larger loach species like the Clown Loach, which can exceed 12 inches.',
      },
      {
        question: 'How many Zebra Loaches should I keep?',
        answer:
          'We recommend a minimum group of five to six Zebra Loaches. These are social fish that display their best behavior — active foraging, playful sparring, and communal resting — only when kept in adequate numbers. Solitary or paired specimens tend to hide excessively and may become stressed. Larger groups of eight or more are even better in appropriately sized tanks, producing more dynamic social interactions and reducing aggression toward any single individual.',
      },
      {
        question: 'Are Zebra Loaches good community fish?',
        answer:
          'Yes, Zebra Loaches are excellent community fish. Their peaceful temperament and bottom-dwelling habits make them compatible with a wide range of tropical species including tetras, rasboras, corydoras, dwarf cichlids, and livebearers. They occupy the bottom stratum of the tank, reducing competition with mid-water and surface-dwelling species. The main consideration is avoiding very small shrimp species, which may be harassed or eaten, and ensuring adequate hiding spots for the loaches to retreat to during rest periods.',
      },
      {
        question: 'Do Zebra Loaches eat snails?',
        answer:
          'Yes, Zebra Loaches are effective pest snail controllers. They readily consume small pest snails including Bladder Snails, small Ramshorn Snails, and juvenile Malaysian Trumpet Snails. Their smaller mouth size compared to Clown Loaches means they are most effective against smaller snail species. A group of six Zebra Loaches will significantly reduce a pest snail population over several weeks. Be aware they may also target small ornamental snails.',
      },
    ],
    relatedSlugs: ['clown-loach', 'dragon-goby', 'black-ghost-knife-fish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 15,
  },

  // ──────────────────────────────────────────────
  // 19. Zebra Pleco
  // ──────────────────────────────────────────────
  {
    commonName: 'Zebra Pleco',
    scientificName: 'Hypancistrus zebra',
    slug: 'zebra-pleco',
    category: 'pleco',
    sku: 'TF-PLC-ZBRA-001',
    priceUSD: 750,
    images: [
      {
        url: '/images/products/zebra-pleco-hero.jpg',
        alt: 'Zebra Pleco (Hypancistrus zebra) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Zebra Pleco is the crown jewel of the L-number plecostomus world — a small, stunningly patterned catfish whose bold black-and-white striping has made it one of the most coveted freshwater fish on the planet. Designated L046, Hypancistrus zebra is endemic to a single stretch of the Rio Xingu in Brazil, where it inhabits warm, fast-flowing water among tumbled rocks and crevices. Export from Brazil has been banned since 2004, making captive-bred specimens the only legal source worldwide and driving prices that would have seemed unthinkable for a three-inch catfish two decades ago. The Fish Collection's Zebra Plecos come from established European and domestic breeding programs with documented lineage.

What makes the Zebra Pleco so visually arresting is the precision of its patterning. Alternating bands of pure white and deep black run across the entire body, head, and fins with a regularity that appears almost artificial. Under magnification, the bands reveal subtle variation — slight undulations, occasional forks, and fine vermiculation at the margins — that give each specimen a unique identity while maintaining the overall geometric impact. Our specimens are selected for high band contrast and clean definition, the two criteria that most influence market value.

Housing a Zebra Pleco is more about water quality than tank size. A single specimen or breeding pair can thrive in a 20-gallon aquarium, though we recommend 30 gallons or larger for the added water stability. The critical requirement is strong water flow and high dissolved oxygen — this is a riverine species adapted to rapids, not a pond fish. Powerheads or wavemakers should generate significant current across the tank floor. Decoration should emphasize caves and crevices using smooth rocks, slate stacks, or purpose-built pleco caves. Each fish should have access to at least one cave it can call its own.

Water parameters must reflect the Xingu's warm, soft-water conditions. Temperature between 82 and 86 degrees Fahrenheit — notably warmer than most tropical fish — with pH between 6.0 and 7.0 and very soft water. The high temperature requirement means Zebra Plecos are best kept in species-specific setups or with carefully chosen tankmates that tolerate the same warmth. Filtration should be oversized with emphasis on biological media and water movement.

Contrary to popular belief, Zebra Plecos are not algae eaters. Hypancistrus species are primarily carnivorous, feeding on insect larvae, small crustaceans, and biofilm in the wild. In captivity, offer high-quality sinking pellets with animal protein content, frozen bloodworms, brine shrimp, and occasional blanched vegetables. Feeding should occur after lights-out, as Zebra Plecos are strictly nocturnal. Ensure food reaches their cave areas — competition from faster daytime feeders is a common cause of malnutrition in community setups.

Breeding Zebra Plecos is achievable but requires patience and specific conditions. Males are slightly broader-headed than females and develop bristle-like odontodes on the pectoral fins and cheeks. Cave spawning is triggered by simulating seasonal water changes — slight cooling followed by warming, combined with increased water flow. Males guard eggs and fry within the cave. The Fish Collection ships all Zebra Plecos in temperature-controlled containers with our live arrival guarantee.`,
    seoDescription:
      'Zebra Pleco (L046) for sale — the iconic black-and-white catfish from Brazil. Live arrival guaranteed, overnight shipping. From $750 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 30,
    maxSizeInches: 3.5,
    origin: 'Brazil (Rio Xingu)',
    diet: 'Carnivore — sinking pellets, bloodworms, brine shrimp',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.0,
      hardnessMin: 1,
      hardnessMax: 6,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How much does a Zebra Pleco cost?',
        answer:
          'Zebra Plecos typically range from $400 to $1,200 depending on size, sex, and band quality. Our current specimens are priced at $750, reflecting excellent band contrast and verified captive-bred origins. Prices have remained high for over a decade due to the Brazilian export ban enacted in 2004, which makes wild-caught specimens illegal to trade internationally. Only captive-bred Zebra Plecos from established breeding programs are legally available.',
      },
      {
        question: 'Do Zebra Plecos eat algae?',
        answer:
          'No, contrary to the common assumption about plecos, Zebra Plecos are not algae eaters. Hypancistrus zebra is primarily carnivorous, feeding on insect larvae, small crustaceans, and protein-rich biofilm in the wild. In captivity, they require high-protein sinking pellets, frozen bloodworms, brine shrimp, and similar meaty foods. Relying on algae as a food source will lead to malnutrition and eventual death. This is one of the most common and dangerous misconceptions about the species.',
      },
      {
        question: 'What temperature do Zebra Plecos need?',
        answer:
          'Zebra Plecos require notably warm water — 82 to 86 degrees Fahrenheit, which is higher than most tropical fish. This reflects their natural habitat in the warm, fast-flowing sections of the Rio Xingu. The high temperature requirement limits compatible tankmates to species that tolerate similar warmth, such as certain Apistogramma species, cardinal tetras, and other Xingu-origin fish. Temperatures below 78 degrees can cause immune suppression and increased disease susceptibility.',
      },
      {
        question: 'Can you breed Zebra Plecos in captivity?',
        answer:
          'Yes, Zebra Plecos can be bred in captivity, and this is the only legal source of specimens since Brazil banned exports in 2004. Breeding requires mature fish aged 2 to 3 years, appropriate cave structures, warm water between 84 and 86 degrees, and seasonal simulation through slight water parameter adjustments. Males guard eggs in caves for approximately 7 days until hatching. Fry absorb their yolk sac over another week before accepting baby brine shrimp and crushed pellets. Success rates improve with experience and dedicated breeding setups.',
      },
      {
        question: 'How big does a Zebra Pleco get?',
        answer:
          'Zebra Plecos reach a maximum size of approximately 3 to 3.5 inches, making them one of the smaller pleco species. Their compact size means they do not require large aquariums — a 30-gallon tank is sufficient for a pair. Despite their small stature, their bold patterning and high value make them premium aquarium inhabitants. Full size is typically reached within 3 to 4 years under optimal conditions with proper diet and water quality.',
      },
    ],
    relatedSlugs: ['royal-pleco', 'clown-loach', 'red-tail-catfish'],
    speciesGuideSlug: 'zebra-pleco',
    ratingAverage: 4.9,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 20. Royal Pleco
  // ──────────────────────────────────────────────
  {
    commonName: 'Royal Pleco',
    scientificName: 'Panaque nigrolineatus',
    slug: 'royal-pleco',
    category: 'pleco',
    sku: 'TF-PLC-ROYL-001',
    priceUSD: 85,
    images: [
      {
        url: '/images/products/royal-pleco-hero.jpg',
        alt: 'Royal Pleco (Panaque nigrolineatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Royal Pleco is a magnificent wood-eating catfish that combines dramatic appearance with one of the most unusual dietary specializations in the freshwater world. Panaque nigrolineatus features a robust, armored body decorated with bold, light-colored stripes on a dark background — a pattern that varies significantly across its wide South American range, giving rise to numerous regional variants and L-numbers that collectors avidly pursue. The Fish Collection offers specimens from the Colombian and Venezuelan drainages, selected for strong stripe contrast and healthy body condition.

What sets Panaque species apart from virtually all other aquarium fish is their ability to digest wood. Royal Plecos possess specialized teeth designed for rasping driftwood and a gut flora adapted to break down cellulose — a trait shared with very few vertebrates. In the aquarium, this means driftwood is not merely decoration but a dietary requirement. The fish will systematically rasp surfaces, producing fine wood shavings that pass through the digestive system. Mopani wood, Malaysian driftwood, and other hardwoods should be present in the tank at all times. The rasping behavior produces a distinctive sound — a rhythmic scraping that experienced keepers find oddly soothing.

Tank requirements scale with the fish's eventual size. Royal Plecos reach 12 to 17 inches in captivity depending on the specific variant, necessitating a minimum 125-gallon aquarium for a single adult. Juveniles can be started in smaller tanks but will need upgrades within one to two years. The aquarium should feature multiple pieces of large driftwood, rock caves, and dim lighting. Royal Plecos are nocturnal and become stressed under bright light without adequate shelter. A heavily shaded tank with subdued lighting produces the most natural behavior.

Water parameters should lean toward the soft, acidic conditions of the species' native rivers. Temperature between 75 and 82 degrees Fahrenheit, pH between 6.5 and 7.5, and soft to moderately hard water are ideal. Filtration must handle the significant amount of wood waste these fish produce — the combination of rasping and normal metabolic waste creates a higher-than-average bioload for a fish of this size. Weekly water changes of twenty-five to thirty percent are essential.

Diet combines wood rasping with supplemental feeding. While wood is the primary food source and gut health maintainer, Royal Plecos also require sinking vegetables — blanched zucchini, cucumber, sweet potato, and algae wafers are all accepted. Some keepers supplement with frozen foods, though the species is primarily herbivorous. Feed in the evening as the fish becomes active.

The Royal Pleco's combination of imposing size, dramatic patterning, unique dietary ecology, and relatively straightforward care requirements makes it one of the most rewarding large pleco species for dedicated aquarists. The Fish Collection ships all Royal Plecos with a piece of their preferred driftwood to minimize transit stress, backed by our live arrival guarantee.`,
    seoDescription:
      'Royal Pleco for sale — the stunning wood-eating armored catfish from South America. Live arrival guaranteed, overnight shipping. From $85 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 125,
    maxSizeInches: 17,
    origin: 'South America (Colombia, Venezuela)',
    diet: 'Herbivore — driftwood, vegetables, algae wafers',
    temperament: 'Peaceful',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'Do Royal Plecos really eat wood?',
        answer:
          'Yes, Royal Plecos are among the very few vertebrates capable of digesting wood. They possess specialized spoon-shaped teeth for rasping driftwood surfaces and gut bacteria that break down cellulose into usable nutrients. Driftwood is not optional — it is a required dietary component. Without access to wood, Royal Plecos develop digestive problems and fail to thrive. Provide multiple pieces of hardwood driftwood such as Mopani or Malaysian driftwood, and replace pieces as they are consumed over months to years.',
      },
      {
        question: 'How big does a Royal Pleco get?',
        answer:
          'Royal Plecos reach 12 to 17 inches in captivity depending on the specific variant and tank conditions. Growth is slow to moderate — expect about 2 to 3 inches per year under good conditions. Full adult size is typically reached between ages 5 and 8. Their robust, armored body means they carry their size with impressive bulk. A full-grown Royal Pleco in a well-maintained aquarium is a genuinely imposing sight that commands attention.',
      },
      {
        question: 'What tank size does a Royal Pleco need?',
        answer:
          'A minimum 125-gallon aquarium is required for a single adult Royal Pleco. Juveniles can be temporarily housed in 55 to 75-gallon tanks, but they will outgrow these within one to two years. The tank should be well-furnished with large pieces of driftwood for both feeding and shelter, rock caves for daytime hiding, and subdued lighting. Strong filtration is essential to handle the wood waste and significant bioload these fish produce.',
      },
      {
        question: 'Are Royal Plecos good algae eaters?',
        answer:
          'Royal Plecos consume some algae but are not efficient algae cleaners compared to species like Bristlenose Plecos or Otocinclus. Their primary food source is wood, supplemented by vegetables and prepared foods. If your primary goal is algae control, a Bristlenose Pleco or a group of Otocinclus would be far more effective. Royal Plecos should be chosen for their impressive appearance and unique ecological niche, not as utility cleaners.',
      },
    ],
    relatedSlugs: ['zebra-pleco', 'red-tail-catfish', 'clown-loach'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 13,
  },

  // ──────────────────────────────────────────────
  // 21. Denison Barb
  // ──────────────────────────────────────────────
  {
    commonName: 'Denison Barb',
    scientificName: 'Sahyadria denisonii',
    slug: 'denison-barb',
    category: 'barb',
    sku: 'TF-BRB-DENI-001',
    priceUSD: 18,
    images: [
      {
        url: '/images/products/denison-barb-hero.jpg',
        alt: 'Denison Barb (Sahyadria denisonii) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Denison Barb — also known as the Roseline Shark or Red Line Torpedo Barb — is one of the most visually striking schooling fish in the freshwater hobby. Sahyadria denisonii features a torpedo-shaped silver body bisected by a bold black horizontal stripe, topped with a vivid red line that runs from the snout through the eye and partway along the flank. The tail is marked with black-and-yellow barring that flashes conspicuously as the school turns and maneuvers. The overall effect is of a fish designed by a graphic artist — clean lines, high contrast, and kinetic energy that fills the tank with motion. The Fish Collection sources our Denison Barbs from sustainable breeding programs in Kerala, India, selecting specimens with the most vivid red coloration and strong body condition.

Native to the fast-flowing rivers and streams of the Western Ghats in southern India, S. denisonii was once so heavily collected for the aquarium trade that wild populations declined precipitously, triggering IUCN Endangered listing and strict export controls. Today, the vast majority of specimens in the trade are captive-bred, and well-managed breeding programs have reduced pressure on wild stocks. Our specimens come from facilities that prioritize genetic diversity and color quality, producing fish that rival or exceed wild-caught individuals in vibrancy.

Denison Barbs are obligate schooling fish that must be kept in groups of six or more. In smaller numbers, they become skittish, lose color, and may develop aggression toward tankmates. A proper school of eight to twelve Denison Barbs in a well-planted tank is one of the most spectacular displays in freshwater aquatics — the fish move in synchronized formation, flashing red and silver as they navigate through vegetation and rockwork. The minimum tank size for a school of six is 55 gallons, though 75 gallons or larger is preferable given the species' active swimming habits and maximum size of five to six inches.

Water parameters should reflect the cool, oxygen-rich streams of the Western Ghats. Temperature between 65 and 77 degrees Fahrenheit — cooler than many tropical species — with pH between 6.5 and 7.8 and moderate hardness. Strong water flow from a powerhead or canister filter return is appreciated. These are active swimmers that thrive in well-oxygenated water with moderate to strong current.

Diet is omnivorous and undemanding. High-quality flake and pellet foods form the staple, supplemented with frozen bloodworms, daphnia, brine shrimp, and blanched vegetable matter. Denison Barbs are enthusiastic surface feeders that create a satisfying feeding frenzy at meal times. Feed twice daily in moderate amounts. The Fish Collection ships all Denison Barbs in temperature-controlled, oxygen-enriched containers with our live arrival guarantee.`,
    seoDescription:
      'Denison Barb for sale — the stunning Red Line Torpedo Barb from India. Live arrival guaranteed, overnight shipping. From $18 at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 55,
    maxSizeInches: 6,
    origin: 'India (Western Ghats, Kerala)',
    diet: 'Omnivore — flake, pellets, frozen foods, vegetables',
    temperament: 'Peaceful',
    lifespan: '5-8 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 77,
      phMin: 6.5,
      phMax: 7.8,
      hardnessMin: 5,
      hardnessMax: 18,
    },
    inStock: true,
    stockCount: 12,
    faqs: [
      {
        question: 'How many Denison Barbs should be kept together?',
        answer:
          'We recommend a minimum group of six Denison Barbs, with eight to twelve being ideal. These are obligate schooling fish that become stressed, lose color, and may develop aggressive tendencies when kept in insufficient numbers. A proper school displays spectacular synchronized swimming behavior and the vivid coloration the species is known for. In groups smaller than six, individuals often hide excessively and fail to thrive. The visual impact of a large school is incomparably superior to a small group.',
      },
      {
        question: 'Are Denison Barbs endangered?',
        answer:
          'Sahyadria denisonii is listed as Endangered on the IUCN Red List due to historical overcollection and habitat degradation in its native Western Ghats. However, the aquarium trade impact has been significantly mitigated by the success of captive breeding programs, primarily in India and Southeast Asia. Most specimens available today are captive-bred, reducing pressure on wild populations. Purchasing captive-bred Denison Barbs, like those offered by The Fish Collection, actively supports sustainable trade practices over wild collection.',
      },
      {
        question: 'What temperature do Denison Barbs need?',
        answer:
          'Denison Barbs prefer cooler temperatures than many tropical fish — 65 to 77 degrees Fahrenheit is the optimal range, with 70 to 75 being the sweet spot. This makes them suitable for unheated aquariums in moderate climates or tanks kept at the lower end of tropical ranges. Sustained temperatures above 80 degrees can cause stress and shortened lifespan. Their cooler temperature preference limits compatible tankmates to species that tolerate similar conditions, such as certain tetras, corydoras, and hillstream loaches.',
      },
      {
        question: 'What tank size do Denison Barbs need?',
        answer:
          'A minimum 55-gallon aquarium is required for a school of six Denison Barbs, with 75 gallons or larger recommended for larger groups or mixed community setups. The tank should be at least 4 feet long to accommodate their active swimming behavior. Strong water flow, good oxygenation, and a mix of open swimming space and planted refuges create the ideal environment. A tight-fitting lid is important as Denison Barbs can jump, especially when startled or during feeding.',
      },
    ],
    relatedSlugs: ['tiger-barb', 'clown-loach', 'zebra-loach'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 19,
  },

  // ──────────────────────────────────────────────
  // 22. Tiger Barb
  // ──────────────────────────────────────────────
  {
    commonName: 'Tiger Barb',
    scientificName: 'Puntigrus tetrazona',
    slug: 'tiger-barb',
    category: 'barb',
    sku: 'TF-BRB-TIGR-001',
    priceUSD: 6,
    images: [
      {
        url: '/images/products/tiger-barb-hero.jpg',
        alt: 'Tiger Barb (Puntigrus tetrazona) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Tiger Barb is one of the most recognizable and popular freshwater aquarium fish in the world — a compact, energetic schooling species whose bold black-and-orange banding has made it a staple of community fishkeeping for over a century. Puntigrus tetrazona originates from the streams and rivers of Borneo and Sumatra, though the species has been captive-bred for so many generations that aquarium strains are far removed from wild populations. The Fish Collection offers premium-grade Tiger Barbs selected for the deepest orange-red coloration and crispest black barring — a marked improvement over the washed-out specimens common in chain pet stores.

The Tiger Barb's reputation as a fin-nipper precedes it, and while not entirely undeserved, this behavior is almost entirely a consequence of improper husbandry. Tiger Barbs are active, boisterous schooling fish that redirect their social energy toward tankmates when kept in insufficient numbers. A solitary Tiger Barb or a group of two or three will almost certainly harass slow-moving, long-finned species like angelfish and bettas. A group of eight or more, however, is typically too occupied with internal social dynamics to bother other fish. The solution to Tiger Barb aggression is always more Tiger Barbs.

We recommend a minimum group of eight, housed in a tank of at least 30 gallons. The aquarium should provide a mix of open swimming space for the school to patrol and planted areas for visual complexity. Moderate water flow and good filtration support the active metabolism of these perpetually moving fish. Lighting can range from moderate to bright — Tiger Barbs are not photosensitive and actually display their best coloration under well-lit conditions that highlight the metallic sheen on their scales.

Water parameters are forgiving. Temperature between 74 and 82 degrees Fahrenheit, pH between 6.0 and 7.5, and soft to moderately hard water cover the species' comfort zone. Tiger Barbs are hardy fish that tolerate minor parameter fluctuations well, making them suitable for aquarists building experience with schooling species. They are not especially disease-prone, though like all tropical fish they benefit from stable conditions and regular water changes.

Diet is omnivorous and completely undemanding. High-quality flake food forms the staple, supplemented with frozen or live bloodworms, daphnia, brine shrimp, and blanched vegetable matter. Tiger Barbs are surface and mid-water feeders with excellent appetites — overfeeding is a more common problem than underfeeding. Two small meals daily is preferable to one large feeding. Varied diet promotes the best coloration, with carotenoid-rich foods particularly effective at enhancing the orange-red pigmentation.

The Tiger Barb has spawned numerous captive-bred color variants including Green Tiger Barb, Albino Tiger Barb, and GloFish varieties. The wild-type coloration remains the most popular and, in our opinion, the most attractive. The Fish Collection ships Tiger Barbs in insulated bags with our live arrival guarantee.`,
    seoDescription:
      'Tiger Barb for sale — premium color-selected specimens of the classic schooling fish. Live arrival guaranteed, overnight shipping. From $6 at The Fish Collection.',
    careLevel: 1,
    careLevelLabel: 'Beginner',
    tankSizeGallons: 30,
    maxSizeInches: 3,
    origin: 'Indonesia (Borneo, Sumatra)',
    diet: 'Omnivore — flake, pellets, frozen foods',
    temperament: 'Semi-aggressive',
    lifespan: '5-7 years',
    waterParameters: {
      tempMin: 74,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 12,
    faqs: [
      {
        question: 'Are Tiger Barbs aggressive fin nippers?',
        answer:
          'Tiger Barbs have a reputation as fin nippers, but this behavior is almost entirely preventable by keeping them in groups of eight or more. In sufficient numbers, their boisterous social energy is directed within the school rather than at tankmates. Problems arise when Tiger Barbs are kept singly, in pairs, or in small groups — understocked fish redirect their social behavior as aggression toward other species, especially slow-moving, long-finned fish like angelfish, bettas, and guppies. The solution is always a larger group.',
      },
      {
        question: 'How many Tiger Barbs should I keep?',
        answer:
          'We recommend a minimum of eight Tiger Barbs, with twelve or more being optimal in a 40-gallon or larger tank. Larger groups produce more dramatic schooling behavior, more vivid coloration driven by social competition, and significantly less aggression toward tankmates. The internal hierarchy of a large Tiger Barb school is endlessly entertaining — fish jostle for position, display to rivals, and occasionally chase one another in ritualized interactions that rarely result in injury.',
      },
      {
        question: 'What fish can live with Tiger Barbs?',
        answer:
          'Good Tiger Barb tankmates are active, robust species without long, trailing fins. Excellent choices include other barbs like Denison Barbs and Cherry Barbs, loaches, Corydoras catfish, rainbowfish, larger tetras, and non-aggressive cichlids like Bolivian Rams. Avoid angelfish, bettas, guppies, fancy goldfish, and any species with flowing fins that invite nipping. Fast-moving, short-finned species are almost never targeted. A species-only Tiger Barb tank in large numbers is also a spectacular and drama-free option.',
      },
      {
        question: 'How big do Tiger Barbs get?',
        answer:
          'Tiger Barbs reach a maximum size of approximately 2.5 to 3 inches in captivity. They grow quickly, reaching near-adult size within 6 to 8 months under good conditions with regular feeding. Despite their small size, their constant activity and bold patterning give them visual presence well beyond what their dimensions suggest. A school of twelve premium Tiger Barbs in a well-planted tank is as visually compelling as many species three times their size.',
      },
    ],
    relatedSlugs: ['denison-barb', 'clown-loach', 'zebra-loach'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.5,
    reviewCount: 25,
  },

  // ──────────────────────────────────────────────
  // 23. Tiger Oscar
  // ──────────────────────────────────────────────
  {
    commonName: 'Tiger Oscar',
    scientificName: 'Astronotus ocellatus',
    slug: 'tiger-oscar',
    category: 'oscar',
    sku: 'TF-OSC-TIGR-001',
    priceUSD: 25,
    images: [
      {
        url: '/images/products/tiger-oscar-hero.jpg',
        alt: 'Tiger Oscar (Astronotus ocellatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Tiger Oscar is the definitive wet pet — a large, intelligent cichlid with a personality so developed that owners routinely describe it as the most interactive fish they have ever kept. Astronotus ocellatus in its tiger morph displays a dark base coloration overlaid with irregular orange-red mottling and a distinctive ocellus — eye spot — near the base of the tail, a feature that gives the genus its scientific name. The pattern varies between individuals and continues to develop throughout the fish's life, meaning the Oscar you buy as a juvenile will look appreciably different — and often more striking — as it matures. The Fish Collection selects our Tiger Oscars for strong orange coloration, clean fin edges, and active temperament.

What elevates the Oscar above most aquarium fish is its behavioral complexity. Oscars recognize their owners, often swimming to the front glass when their preferred person enters the room and ignoring strangers. They can be trained to accept food from the hand, and many keepers report their Oscars responding to voice commands. They rearrange tank decor to their liking, moving gravel, uprooting plants, and repositioning decorations with a deliberateness that suggests planning rather than random activity. This intelligence comes with a caveat — a bored Oscar is a destructive Oscar. Enrichment through varied feeding, rearrangeable decor, and visual stimulation is essential.

Tank requirements are straightforward but non-negotiable. A single Oscar requires a minimum 75-gallon aquarium. A pair demands 125 gallons or more. These fish reach 12 to 14 inches in captivity and produce prodigious amounts of waste, so filtration must be robust — canister filters or sumps rated for twice the tank volume are standard. Decoration should be limited to heavy, unmovable items — rocks too large to shift, secured driftwood, and no live plants unless you consider their destruction a form of enrichment. Oscars are powerful fish that will demolish anything they can move.

Water parameters are forgiving. Temperature between 74 and 81 degrees Fahrenheit, pH between 6.0 and 8.0, and moderate hardness suit the species across its entire range. Oscars are adaptable to a variety of water chemistries, which is part of what makes them such successful aquarium fish. Weekly water changes of thirty percent or more are essential given their high bioload.

Diet should be varied and protein-rich. High-quality cichlid pellets form the staple, supplemented with frozen krill, market shrimp, earthworms, and occasional feeder insects like crickets. Avoid cheap feeder goldfish — they provide poor nutrition and carry disease risk. Our Oscars are raised on premium pellets and accept them readily. Feed once or twice daily for juveniles, once daily for adults. The Fish Collection ships all Oscars in insulated, oxygen-enriched containers with our live arrival guarantee.`,
    seoDescription:
      'Tiger Oscar for sale — the ultimate wet pet with unmatched personality. Live arrival guaranteed, overnight shipping. From $25 at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 75,
    maxSizeInches: 14,
    origin: 'South America (Amazon basin)',
    diet: 'Omnivore — cichlid pellets, shrimp, worms, insects',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 74,
      tempMax: 81,
      phMin: 6.0,
      phMax: 8.0,
      hardnessMin: 5,
      hardnessMax: 20,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'How big does a Tiger Oscar get?',
        answer:
          'Tiger Oscars reach 12 to 14 inches in captivity, with some exceptional specimens approaching 16 inches in very large tanks. Growth is rapid — a 2-inch juvenile can reach 10 inches within its first year under heavy feeding. Full adult size is typically achieved by age 2 to 3. Their substantial size, combined with a heavy, muscular body, means that Oscars produce significant waste and require appropriately sized filtration to maintain water quality.',
      },
      {
        question: 'Can Oscars live with other fish?',
        answer:
          'Oscars can coexist with other large, robust species. Compatible tankmates include other Oscars of similar size, large plecos, Silver Dollars, Jack Dempseys, and other cichlids that can hold their own without being overly aggressive. The cardinal rule is that any fish small enough to fit in an Oscar\'s mouth will eventually be eaten — and Oscars have surprisingly large mouths relative to their body size. Tank size must increase significantly for each additional inhabitant. A community Oscar tank should be 150 gallons minimum.',
      },
      {
        question: 'Do Oscars recognize their owners?',
        answer:
          'Yes, Oscars demonstrably recognize their primary caregivers. They often swim excitedly to the front glass when their preferred person approaches while remaining indifferent or cautious with strangers. Many Oscar owners train their fish to accept food from the hand, respond to tapping patterns on the glass, and even perform simple tricks. This level of interactivity is extremely rare among fish species and is the primary reason Oscars are often described as wet pets rather than mere aquarium inhabitants.',
      },
      {
        question: 'What do Oscars eat?',
        answer:
          'Oscars are omnivores with large appetites. The staple diet should be high-quality cichlid pellets, supplemented with frozen krill, market shrimp, earthworms, crickets, and mealworms. Avoid cheap feeder goldfish, which provide poor nutrition and carry significant disease risk. Blanched vegetables like peas and zucchini are occasionally accepted and provide fiber. Feed juveniles twice daily and adults once daily, offering only what can be consumed within a few minutes to prevent overfeeding and water quality degradation.',
      },
      {
        question: 'What tank size does an Oscar need?',
        answer:
          'A single Oscar requires a minimum 75-gallon aquarium, with 100 gallons being more comfortable for a full-grown adult. A pair needs 125 gallons or more. Larger is always better with Oscars — they are active, messy fish that benefit from water volume both for swimming space and for diluting their substantial waste output. Filtration should be rated for at least twice the tank volume. Heavy decorations that the fish cannot move, secure lids, and reliable heaters are all essential components of an Oscar setup.',
      },
    ],
    relatedSlugs: ['albino-oscar', 'flowerhorn-cichlid', 'wolf-fish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 20,
  },

  // ──────────────────────────────────────────────
  // 24. Albino Oscar
  // ──────────────────────────────────────────────
  {
    commonName: 'Albino Oscar',
    scientificName: 'Astronotus ocellatus',
    slug: 'albino-oscar',
    category: 'oscar',
    sku: 'TF-OSC-ALBI-001',
    priceUSD: 30,
    images: [
      {
        url: '/images/products/albino-oscar-hero.jpg',
        alt: 'Albino Oscar (Astronotus ocellatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Albino Oscar is a luminous variant of the world's most popular large cichlid — a fish whose creamy white body and vivid orange-red markings create a visual impact that rivals far more expensive species. This color morph of Astronotus ocellatus lacks melanin production, resulting in a base coloration that ranges from ivory to pale peach, overlaid with patches of intense orange that appear to glow under proper aquarium lighting. The eyes are a characteristic pinkish-red, the telltale marker of true albinism. The Fish Collection selects our Albino Oscars for maximum orange coverage, clean white background, and the same robust temperament and personality that makes the species so beloved.

The Albino Oscar shares every behavioral trait that makes the standard Oscar the most interactive freshwater fish in the hobby. It recognizes its owner, responds to visual and auditory cues, rearranges its environment to suit its preferences, and develops individual quirks that keepers catalogue with the affection usually reserved for dogs and cats. The albino variant adds a striking visual dimension to this personality — the pale coloration makes the fish more visible in planted or darkly decorated tanks, and the contrast between the white body and orange markings intensifies under blue-spectrum LED lighting.

Tank requirements mirror those of all Oscar variants. A minimum 75-gallon aquarium for a single fish, 125 gallons for a pair, with robust filtration rated at twice the tank volume. Albino Oscars are no more delicate than their normally pigmented counterparts — a common misconception about albino animals in general. Their immune systems, growth rates, and behavioral profiles are identical. The only practical consideration is that albino fish may be slightly more photosensitive, so a mix of bright and shaded areas in the tank is beneficial.

Water parameters are the same forgiving range that makes Oscars accessible to a wide range of keepers. Temperature between 74 and 81 degrees Fahrenheit, pH between 6.0 and 8.0, and moderate to moderately hard water. Weekly water changes of thirty percent are essential to manage the species' considerable waste output. The pale coloration of the albino variant can actually serve as a useful health indicator — stress or illness often manifests as dulling or graying of the white areas before other symptoms appear, giving attentive keepers an early warning system.

Diet is identical to the Tiger Oscar: high-quality cichlid pellets as the staple, supplemented with frozen krill, shrimp, earthworms, and insects. Color-enhancing foods rich in carotenoids — spirulina-enriched pellets, krill, and astaxanthin supplements — will intensify the orange coloration significantly. A well-fed Albino Oscar on a carotenoid-rich diet develops orange patches so vivid they appear almost fluorescent. Feed juveniles twice daily and adults once daily.

The Albino Oscar pairs spectacularly with the Tiger Oscar in a sufficiently large tank, the contrast between the dark and light morphs creating a display that showcases the species' full aesthetic range. The Fish Collection ships all Oscars in insulated, oxygen-enriched containers with our live arrival guarantee.`,
    seoDescription:
      'Albino Oscar for sale — a stunning white-and-orange variant of the iconic wet pet. Live arrival guaranteed, overnight shipping. From $30 at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 75,
    maxSizeInches: 14,
    origin: 'South America (captive-bred)',
    diet: 'Omnivore — cichlid pellets, shrimp, worms, insects',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 74,
      tempMax: 81,
      phMin: 6.0,
      phMax: 8.0,
      hardnessMin: 5,
      hardnessMax: 20,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'Are Albino Oscars more fragile than normal Oscars?',
        answer:
          'No, Albino Oscars are not more fragile than their normally pigmented counterparts. This is a common misconception about albino animals across all species. Albino Oscars have the same immune system, growth rate, lifespan, and behavioral profile as Tiger or Red Oscars. The only practical difference is slightly increased photosensitivity, which is easily addressed by providing a mix of bright and shaded areas in the tank. Their care requirements are identical in every other respect.',
      },
      {
        question: 'How can I make my Albino Oscar more colorful?',
        answer:
          'The orange coloration of Albino Oscars can be significantly enhanced through diet. Foods rich in carotenoid pigments — spirulina-enriched pellets, krill, astaxanthin-supplemented foods, and market shrimp — intensify the orange patches over several weeks of consistent feeding. Water quality also plays a role; clean, well-maintained water supports optimal pigment expression. Proper lighting, particularly full-spectrum LEDs with moderate blue content, makes existing coloration appear more vivid without requiring any dietary changes.',
      },
      {
        question: 'Can I keep an Albino Oscar with a Tiger Oscar?',
        answer:
          'Yes, Albino and Tiger Oscars can be kept together and the contrast between the two morphs creates a spectacular display. Introduce both fish simultaneously at similar sizes to prevent territorial bullying. A minimum 125-gallon tank is required for a pair, with 150 gallons or more recommended. Monitor for aggression during the first few weeks — Oscars establish hierarchies through jaw-locking and flaring displays that are normal and typically resolve without injury in adequately sized tanks.',
      },
      {
        question: 'How much does an Albino Oscar cost?',
        answer:
          'Albino Oscars typically range from $15 to $50 depending on size, color quality, and source. Our specimens are priced at $30, reflecting above-average orange coverage and clean white background coloration. Premium specimens with exceptional orange intensity or unusual pattern distribution can command higher prices from serious collectors. Despite their relatively modest price, Albino Oscars provide visual impact comparable to fish costing many times more.',
      },
    ],
    relatedSlugs: ['tiger-oscar', 'flowerhorn-cichlid', 'wolf-fish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 17,
  },

  // ──────────────────────────────────────────────
  // 25. Platinum White Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Platinum White Betta',
    scientificName: 'Betta splendens',
    slug: 'platinum-white-betta',
    category: 'betta',
    sku: 'TF-BTA-PLAT-001',
    priceUSD: 45,
    images: [
      {
        url: '/images/products/platinum-white-betta-hero.jpg',
        alt: 'Platinum White Betta (Betta splendens) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Platinum White Betta is the embodiment of purity in the betta world — a fish whose entire body and finnage gleams with an unbroken, opaque white that appears almost metallic under proper lighting. This is not a simple white betta; the platinum gene layer adds a reflective, iridescent quality that transforms plain white into something luminous, as though the fish were carved from polished pearl. Betta splendens in its platinum white form represents years of selective breeding by dedicated artisans in Thailand and Vietnam who have refined the trait to a level of consistency that was unimaginable a decade ago. The Fish Collection sources our Platinum White Bettas from competition-grade breeders, selecting only specimens with full opaque coverage, no color leaks, clean fin edges, and vigorous flaring response.

What separates a competition-grade Platinum White Betta from the pale bettas found in chain pet stores is the completeness and uniformity of the coloration. Every surface — body, fins, gill plates, and even the pelvic ventral fins — must be the same consistent platinum white with no wash, no pink transparency, and no stray pigment spots. Achieving this requires careful line-breeding over many generations, as white bettas are genetically prone to color contamination from underlying pigment layers. Our specimens pass a rigorous visual inspection under multiple lighting conditions before being listed.

Housing a Platinum White Betta is accessible even for newcomers, but doing it well requires more thought than the common misconception about bettas in bowls would suggest. A minimum 5-gallon heated, filtered aquarium is required — not a vase, not a bowl, and not an unheated container. Bettas are tropical fish that need water temperatures between 76 and 82 degrees Fahrenheit maintained by a reliable heater. A gentle filter with adjustable flow prevents fin damage while maintaining water quality. Decoration should include live or silk plants that provide resting spots near the surface and visual barriers that reduce stress. Avoid sharp plastic decorations that can tear delicate fins.

Water parameters are straightforward: pH between 6.5 and 7.5, soft to moderately hard water, and stable temperature are the key requirements. Weekly water changes of twenty-five to fifty percent maintain the pristine conditions that keep a Platinum White Betta looking its best. White fish show water quality issues quickly — yellowing or graying of the fins is an early indicator that water conditions need attention.

Diet should be varied and high-quality. Betta-specific pellets form the staple, supplemented with frozen bloodworms, daphnia, and brine shrimp two to three times per week. Feed small amounts twice daily — only what the fish can consume in two minutes. Bettas are prone to bloating from overfeeding, and the white coloration makes abdominal swelling particularly visible.

The Platinum White Betta is a halfmoon tail type, meaning the caudal fin spreads to a full 180-degree arc when flared — a display of such dramatic beauty that it stops visitors mid-conversation. The Fish Collection ships all bettas in individual insulated containers with heat packs and our live arrival guarantee.`,
    seoDescription:
      'Platinum White Betta for sale — competition-grade halfmoon with pure metallic sheen. Live arrival guaranteed, overnight shipping. From $45 at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 5,
    maxSizeInches: 3,
    origin: 'Thailand (captive-bred)',
    diet: 'Carnivore — betta pellets, bloodworms, daphnia',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'How much does a Platinum White Betta cost?',
        answer:
          'Platinum White Bettas range from $20 to $150 depending on fin type, color purity, and breeder reputation. Our competition-grade halfmoon specimens are priced at $45, reflecting complete platinum coverage, clean fin edges, and vigorous health. Show-quality specimens from elite Thai breeders with documented lineage can exceed $200. The key value differentiator is color uniformity — any bleed-through of underlying pigment significantly reduces a platinum betta\'s worth.',
      },
      {
        question: 'Can Platinum White Bettas live with other fish?',
        answer:
          'Male Platinum White Bettas cannot be housed with other male bettas under any circumstances — they will fight to the death. However, they can coexist with peaceful community fish in a sufficiently large tank of 10 gallons or more. Compatible tankmates include Corydoras catfish, small rasboras, snails, and shrimp. Avoid fin-nipping species like Tiger Barbs and anything with long, flowing fins that might trigger territorial aggression. Female bettas are generally more tolerant of community life.',
      },
      {
        question: 'Do Platinum White Bettas change color?',
        answer:
          'Platinum White Bettas from well-bred lines should maintain their white coloration throughout their lives. However, some bettas marketed as platinum white may develop color as they mature if their genetics are not truly stabilized — a phenomenon called "color bleed" where underlying red, blue, or iridescent pigments emerge through the white layer. Our specimens come from lines specifically bred for stable platinum white expression, minimizing the risk of unwanted color development. Stress or poor water quality can also cause temporary dulling.',
      },
      {
        question: 'What tank size does a Betta need?',
        answer:
          'A minimum 5-gallon heated, filtered aquarium is required for a single betta. The widespread belief that bettas can thrive in bowls or vases is a harmful myth — these are tropical fish that need stable temperatures between 76 and 82 degrees, gentle filtration, and enough space to swim and explore. A 10-gallon tank is even better and provides more stable water parameters. The tank should include live or silk plants for resting spots near the surface and visual barriers for enrichment.',
      },
      {
        question: 'How long do Platinum White Bettas live?',
        answer:
          'With proper care, Platinum White Bettas live 3 to 5 years. Most bettas sold in stores are already 6 to 12 months old, so their remaining lifespan in your care may be 2 to 4 years. Longevity depends heavily on water quality, diet variety, tank temperature stability, and stress management. Bettas kept in unheated containers, overfed on cheap pellets, or housed in cramped conditions rarely exceed 2 years. Our specimens are young adults in peak condition.',
      },
    ],
    relatedSlugs: ['galaxy-koi-betta', 'tiger-oscar', 'zebra-loach'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.8,
    reviewCount: 14,
  },

  // ──────────────────────────────────────────────
  // 26. Galaxy Koi Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Galaxy Koi Betta',
    scientificName: 'Betta splendens',
    slug: 'galaxy-koi-betta',
    category: 'betta',
    sku: 'TF-BTA-GLXY-001',
    priceUSD: 85,
    images: [
      {
        url: '/images/products/galaxy-koi-betta-hero.jpg',
        alt: 'Galaxy Koi Betta (Betta splendens) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Galaxy Koi Betta represents the cutting edge of betta breeding artistry — a fish that combines the mottled red, white, and black patterning of the koi phenotype with a galaxy overlay of iridescent blue-black scales that shimmer like stars against a cosmic backdrop. Each Galaxy Koi Betta is a unique composition of color, with no two specimens displaying the same pattern. The interplay of koi marbling and galaxy iridescence creates a fish that shifts in appearance depending on viewing angle and light conditions — a living kaleidoscope in miniature. The Fish Collection sources our Galaxy Koi Bettas from elite Thai breeding houses that specialize in this phenotype, selecting only specimens with balanced color distribution, strong iridescent coverage, and the halfmoon tail spread that maximizes visual impact.

The Galaxy Koi phenotype is among the newest and most sought-after developments in competitive betta breeding. It emerged from the intersection of two popular lines — the koi betta, bred for its mottled cellophane-and-color pattern inspired by Japanese koi fish, and the galaxy type, which adds a dark iridescent overlay that fragments and scatters light across the body and fins. The result is visually complex in a way that simpler solid-color bettas cannot achieve. A Galaxy Koi Betta in a well-lit nano tank is a conversation piece that draws attention even from people who have no interest in fishkeeping.

One characteristic of the koi and galaxy phenotypes that buyers should understand is marbling — the tendency for color patterns to shift over the fish's lifetime. The marble gene responsible for the koi pattern also causes ongoing pigment cell changes, meaning a Galaxy Koi Betta purchased with a particular pattern may look different in six months. Some keepers view this as a feature — the fish is a constantly evolving artwork. Others prefer stable coloration. We photograph each specimen at time of sale and note that color evolution is normal and expected for this phenotype.

Housing requirements match those of all betta varieties. A minimum 5-gallon heated, filtered aquarium with gentle flow, live or silk plants, and stable temperature between 76 and 82 degrees Fahrenheit. The dark iridescent colors of the Galaxy Koi Betta show best against a dark substrate and background — black sand and a dark rear panel make the galaxy overlay pop dramatically. Lighting should include a quality LED with adjustable spectrum; a slight blue bias in the color temperature enhances the iridescent scales without washing out the red and white koi elements.

Diet follows standard betta nutrition: high-quality betta pellets as the staple, supplemented with frozen bloodworms, daphnia, and brine shrimp. Color-enhancing foods rich in astaxanthin and spirulina can intensify the red elements of the koi pattern over time. Feed small amounts twice daily. The Fish Collection ships all bettas individually in insulated containers with heat packs, and our live arrival guarantee covers every fish.`,
    seoDescription:
      'Galaxy Koi Betta for sale — elite Thai-bred halfmoon with cosmic iridescence. Live arrival guaranteed, overnight shipping. From $85 at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 5,
    maxSizeInches: 3,
    origin: 'Thailand (captive-bred)',
    diet: 'Carnivore — betta pellets, bloodworms, brine shrimp',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'Do Galaxy Koi Bettas change color?',
        answer:
          'Yes, Galaxy Koi Bettas carry the marble gene, which causes ongoing pigment cell changes throughout the fish\'s life. The mottled koi pattern — the mix of red, white, and black — will shift over time, and the galaxy iridescent overlay may expand or contract. This is completely normal and is an inherent characteristic of the phenotype. Some keepers enjoy the evolving nature of the pattern, treating each color change as a new chapter in the fish\'s story. If stable coloration is important to you, consider a solid-color betta instead.',
      },
      {
        question: 'How much does a Galaxy Koi Betta cost?',
        answer:
          'Galaxy Koi Bettas typically range from $40 to $200 depending on color balance, iridescent coverage, fin type, and breeder reputation. Our halfmoon specimens are priced at $85, reflecting premium Thai breeding lines with strong galaxy overlay and balanced koi marbling. Exceptional show-quality specimens from elite breeders can exceed $300. The key pricing factors are the quality and extent of the galaxy iridescence and the aesthetic balance of the underlying koi pattern.',
      },
      {
        question: 'What is the difference between a Koi Betta and a Galaxy Koi Betta?',
        answer:
          'A standard Koi Betta displays the mottled red, white, and black (or cellophane) pattern inspired by Japanese koi fish, without significant iridescent overlay. A Galaxy Koi Betta adds a dark iridescent layer — typically blue-black — over the koi pattern, creating scattered, star-like reflective scales across the body and fins. The galaxy overlay adds visual depth and complexity, making the fish appear to shift in color depending on viewing angle and lighting. The galaxy trait is selectively bred and adds significant value over standard koi bettas.',
      },
      {
        question: 'What lighting is best for Galaxy Koi Bettas?',
        answer:
          'Galaxy Koi Bettas look best under full-spectrum LED lighting with a slight blue bias in color temperature. The blue wavelengths enhance the iridescent galaxy scales, making them appear to glow against the darker body areas. A dark substrate and background maximize contrast. Avoid overly warm or yellow-toned lighting, which can mute the iridescent effect. Adjustable LED fixtures that allow you to fine-tune the spectrum are ideal, as you can shift toward bluer tones during viewing hours to showcase the galaxy overlay.',
      },
    ],
    relatedSlugs: ['platinum-white-betta', 'tiger-oscar', 'denison-barb'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.9,
    reviewCount: 10,
  },

  // ──────────────────────────────────────────────
  // 27. Fire Eel
  // ──────────────────────────────────────────────
  {
    commonName: 'Fire Eel',
    scientificName: 'Mastacembelus erythrotaenia',
    slug: 'fire-eel',
    category: 'eel',
    sku: 'TF-EEL-FIRE-001',
    priceUSD: 65,
    images: [
      {
        url: '/images/products/fire-eel-hero.jpg',
        alt: 'Fire Eel (Mastacembelus erythrotaenia) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Fire Eel is the largest and most spectacular member of the spiny eel family — a serpentine predator decorated with vivid red-to-orange lateral stripes and spots that give the species its incendiary common name. Mastacembelus erythrotaenia is native to the rivers and floodplains of Southeast Asia, from Myanmar through Thailand, Vietnam, and Indonesia, where it inhabits muddy substrates and dense vegetation in slow-moving to still water. At The Fish Collection, we source our Fire Eels from established importers who maintain holding facilities with proper quarantine protocols, ensuring each specimen arrives in excellent health with strong feeding response.

What makes the Fire Eel so compelling is the combination of size, pattern, and behavior. This is not a small aquarium curiosity — adult Fire Eels reach 24 to 36 inches in captivity, with a muscular, eel-like body that navigates the tank with fluid, sinuous movements. The fiery markings that give the species its name run along the lateral line in a pattern of broken stripes and spots that varies between individuals and intensifies with age and good nutrition. Under subdued lighting, the red-orange markings appear to glow against the dark brown-to-black body, creating an effect that is truly dramatic.

Tank requirements reflect the species' substantial size. A minimum 125-gallon aquarium is required for an adult Fire Eel, though 180 gallons or larger is preferable. The substrate must be fine sand — spiny eels are obligate burrowers that spend significant time partially or completely buried, and coarse gravel can damage their delicate skin. Provide PVC tubes, rock caves, and dense vegetation as additional hiding spots. A secure, tightly fitted lid with no gaps is absolutely essential — Fire Eels are expert escape artists that can find and exploit openings that seem impossibly small. Even the space around filter intakes and heater cords must be sealed.

Water parameters are flexible. Temperature between 75 and 82 degrees Fahrenheit, pH between 6.5 and 7.5, and soft to moderately hard water suit the species across its range. Fire Eels are sensitive to poor water quality, particularly elevated nitrates, so efficient filtration and consistent water change schedules are important. They are also sensitive to many medications — avoid copper-based treatments entirely.

Diet is carnivorous. Fire Eels feed on live and frozen foods including bloodworms, earthworms, market shrimp, and small fish. Many specimens are reluctant to accept prepared foods initially, though patient keepers can train them onto sinking pellets over time. Our specimens are transitioned to frozen foods during quarantine. Feed after lights-out when the eel is naturally active. A well-fed Fire Eel develops a smooth, rounded body profile — visible spine or rib outlines indicate underfeeding and require immediate dietary attention.

The Fish Collection ships all Fire Eels in tall, narrow containers that accommodate their elongated body shape without forcing coiling, backed by our live arrival guarantee.`,
    seoDescription:
      'Fire Eel for sale — the largest spiny eel with vivid red-orange markings. Live arrival guaranteed, overnight shipping. From $65 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 125,
    maxSizeInches: 36,
    origin: 'Southeast Asia (Myanmar, Thailand, Indonesia)',
    diet: 'Carnivore — bloodworms, earthworms, shrimp, small fish',
    temperament: 'Semi-aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How big does a Fire Eel get?',
        answer:
          'Fire Eels reach 24 to 36 inches in captivity, with exceptional specimens occasionally exceeding 3 feet in very large aquariums. In the wild, they can grow even larger. Growth is steady but not rapid — expect approximately 4 to 6 inches of growth per year under optimal conditions. Full adult size is typically reached between ages 5 and 8 depending on feeding regimen and tank size. Their elongated, muscular body means they need a tank with a large footprint to move comfortably.',
      },
      {
        question: 'Do Fire Eels escape from aquariums?',
        answer:
          'Yes, Fire Eels are notorious escape artists. They can squeeze through surprisingly small openings, including gaps around filter intakes, heater cords, and poorly fitted lids. A tightly sealed aquarium cover with every possible gap blocked is absolutely essential. Many experienced keepers use weighted glass lids with foam strips sealing the edges around equipment cutouts. Check your lid fit carefully before adding a Fire Eel to your system — even a gap of half an inch can be exploited by a determined spiny eel.',
      },
      {
        question: 'What do Fire Eels eat?',
        answer:
          'Fire Eels are carnivores that feed primarily on live and frozen meaty foods. Preferred items include bloodworms, earthworms, market shrimp, silversides, and small feeder fish from quarantined sources. Many specimens initially refuse prepared foods but can be gradually trained to accept high-quality sinking pellets through patient conditioning. Our Fire Eels are already transitioned to frozen foods. Feed after lights-out when the eel is naturally active. Provide enough food two to three times per week to maintain a smooth, rounded body profile.',
      },
      {
        question: 'Can Fire Eels live with other fish?',
        answer:
          'Fire Eels can coexist with medium to large fish that are too big to be eaten and not aggressive enough to harass the eel. Compatible tankmates include large barbs, medium to large cichlids, Arowana, large catfish, and Bichir. Avoid very small fish that could become prey, aggressive bottom-dwellers that might compete for hiding spots, and other spiny eels unless the tank is very large with abundant shelter. Fire Eels are generally peaceful but will eat anything that fits in their mouth.',
      },
      {
        question: 'Do Fire Eels need sand substrate?',
        answer:
          'Yes, fine sand substrate is essential for Fire Eels. They are obligate burrowers that spend significant time partially or completely buried in the substrate, and coarse gravel or sharp substrates can cause serious skin abrasions and infections. Play sand, pool filter sand, or commercial aquarium sand all work well. The sand layer should be at least 2 to 3 inches deep to allow comfortable burrowing. Watching a Fire Eel burrow into sand until only its snout is visible is one of the species\' most characteristic and entertaining behaviors.',
      },
    ],
    relatedSlugs: ['snowflake-moray-eel', 'black-ghost-knife-fish', 'clown-knife-fish'],
    speciesGuideSlug: 'fire-eel',
    ratingAverage: 4.7,
    reviewCount: 12,
  },

  // ──────────────────────────────────────────────
  // 28. Snowflake Moray Eel
  // ──────────────────────────────────────────────
  {
    commonName: 'Snowflake Moray Eel',
    scientificName: 'Echidna nebulosa',
    slug: 'snowflake-moray-eel',
    category: 'eel',
    sku: 'TF-EEL-SNOW-001',
    priceUSD: 55,
    images: [
      {
        url: '/images/products/snowflake-moray-eel-hero.jpg',
        alt: 'Snowflake Moray Eel (Echidna nebulosa) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Snowflake Moray Eel is the most accessible moray species for aquarium keeping — a hardy, beautifully patterned marine eel whose manageable size and relatively docile temperament have made it the go-to choice for hobbyists wanting to experience moray keeping without the extreme infrastructure demands of larger species. Echidna nebulosa features a white to cream body covered in intricate dark brown to black patterning that resembles a network of snowflakes or frost crystals, an ornate design that becomes more refined and detailed as the eel matures. The Fish Collection sources our Snowflake Morays from reputable marine collectors in the Indo-Pacific, selecting specimens with strong feeding response and vivid pattern contrast.

What sets the Snowflake Moray apart from most other moray species in the aquarium trade is its dentition. While many morays possess sharp, fang-like teeth designed for seizing fish, E. nebulosa has blunt, molar-like teeth adapted for crushing crustaceans — shrimp, crabs, and shellfish make up the bulk of its natural diet. This dietary specialization has two practical implications: the eel is less likely to consume fish tankmates, and its bite, while powerful and best avoided, lacks the slashing damage potential of its sharp-toothed relatives. This makes the Snowflake Moray one of the most tankmate-compatible moray species available.

Tank requirements center on secure housing and appropriate water volume. A minimum 55-gallon marine aquarium is suitable for a single Snowflake Moray, with 75 gallons or larger being preferable. The rockwork must include caves and crevices for the eel to inhabit — morays spend the majority of their time with their bodies wedged into rock structures, with only the head visible, surveying their surroundings with constant, rhythmic mouth movements that serve to ventilate the gills. A secure lid is absolutely mandatory — moray eels are among the most determined escape artists in the aquarium hobby, capable of pushing through loose-fitting lids, climbing overflow tubes, and squeezing through gaps that seem impossibly small.

Water parameters follow standard marine tropical conditions. Temperature between 72 and 80 degrees Fahrenheit, pH between 8.1 and 8.4, and specific gravity of 1.020 to 1.025. Salinity flexibility is actually one of the Snowflake Moray's advantages — it tolerates specific gravity as low as 1.016, though full marine salinity is recommended for long-term health. Protein skimming and efficient biological filtration are essential, as eels are messy eaters that generate significant organic waste.

Diet should consist primarily of crustaceans and shellfish. Offer frozen krill, market shrimp with shell, silversides, clam, and squid. Feed two to three times per week using feeding tongs — never hand-feed a moray eel, as their poor eyesight means they locate food primarily by smell, and fingers presented near food smell exactly like food. Our specimens are eating frozen foods enthusiastically. The Fish Collection ships all marine eels in sealed, insulated containers with our live arrival guarantee.`,
    seoDescription:
      'Snowflake Moray Eel for sale — the hardiest marine moray with stunning frost-like patterns. Live arrival guaranteed, overnight shipping. From $55 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 55,
    maxSizeInches: 24,
    origin: 'Indo-Pacific Ocean',
    diet: 'Carnivore — krill, shrimp, clam, squid',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 80,
      phMin: 8.1,
      phMax: 8.4,
      hardnessMin: 8,
      hardnessMax: 12,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'Are Snowflake Moray Eels reef safe?',
        answer:
          'Snowflake Moray Eels are considered reef-safe with caution. They do not eat corals and generally ignore sessile invertebrates. However, they will eat ornamental shrimp, small crabs, and other crustaceans — their primary natural diet. In a reef tank, cleaner shrimp, peppermint shrimp, and emerald crabs are all at risk. Fish tankmates are generally safe if they are too large to eat, as E. nebulosa primarily targets crustaceans rather than fish. Rockwork may be displaced as the eel moves through the aquascape.',
      },
      {
        question: 'Do Snowflake Moray Eels bite?',
        answer:
          'Snowflake Moray Eels can bite if they mistake fingers for food, and their powerful crushing jaws can cause painful injuries. Never hand-feed a moray eel — always use long feeding tongs. Their poor eyesight means they locate food primarily by smell, and any object presented near food is a potential target. Unprovoked bites are rare; most incidents occur during feeding or when a hand is placed in the tank during maintenance near the eel\'s hiding spot. Respect their space and use tools, and bites are easily avoided.',
      },
      {
        question: 'How big does a Snowflake Moray Eel get?',
        answer:
          'Snowflake Moray Eels reach approximately 24 inches in captivity, with rare specimens approaching 30 inches. Their elongated, cylindrical body means they fit comfortably in smaller tanks than their length might suggest. Growth is moderate — expect full size within 3 to 5 years under good conditions. Their manageable adult size is one of the key advantages over larger moray species like the Zebra Moray or Tesselata Moray, which can exceed 5 feet and require massive aquariums.',
      },
      {
        question: 'Can Snowflake Moray Eels live in freshwater?',
        answer:
          'No, Snowflake Moray Eels are marine fish that require saltwater. They tolerate a fairly wide salinity range, with specific gravity as low as 1.016 in some cases, but they cannot survive in freshwater. Despite common confusion in pet stores, there are very few true freshwater moray species, and the Snowflake Moray is not among them. Maintaining proper marine salinity of 1.020 to 1.025 is recommended for long-term health and optimal immune function.',
      },
    ],
    relatedSlugs: ['fire-eel', 'gem-tang', 'clarion-angelfish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 16,
  },

  // ──────────────────────────────────────────────
  // 29. Peacock Bass
  // ──────────────────────────────────────────────
  {
    commonName: 'Peacock Bass',
    scientificName: 'Cichla ocellaris',
    slug: 'peacock-bass',
    category: 'bass',
    sku: 'TF-BAS-PCCK-001',
    priceUSD: 85,
    images: [
      {
        url: '/images/products/peacock-bass-hero.jpg',
        alt: 'Peacock Bass (Cichla ocellaris) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Peacock Bass is one of the most powerful and visually stunning predatory cichlids available to aquarists — a muscular, golden-green fish adorned with bold black vertical bars and a distinctive ocellus on the tail that gives the species its common name. Cichla ocellaris is native to the Amazon basin and has been widely introduced in tropical waters worldwide, where it has earned legendary status among sport fishermen for its explosive strikes and dogged fighting ability. In the aquarium, all of that predatory intensity is on full display in a contained setting that lets you observe one of nature's most efficient freshwater hunters up close. The Fish Collection sources our Peacock Bass from captive breeding programs that produce vibrant, healthy juveniles already acclimated to prepared foods.

What makes the Peacock Bass exceptional as an aquarium fish is the intensity of its predatory behavior combined with genuine intelligence. These are not passive ambush predators — they actively patrol their territory, track movement across the tank, and execute coordinated strikes with a speed and violence that startles even experienced keepers. Feeding time with a Peacock Bass is an event. The fish accelerates from a standing hover to full-speed pursuit in a fraction of a second, engulfing prey with a suction strike that creates an audible pop.

Tank requirements are substantial. Adult Peacock Bass reach 18 to 24 inches in captivity depending on the species variant, necessitating a minimum 180-gallon aquarium for a single fish. Pairs or groups require 300 gallons or more. The tank should be sparsely decorated — open swimming space is more important than cover for this actively cruising predator. Heavy-duty filtration is essential, as Peacock Bass are messy eaters with high metabolic rates. Canister filters or sumps rated for three times the tank volume are standard.

Water parameters are flexible. Temperature between 76 and 86 degrees Fahrenheit, pH between 6.0 and 7.5, and soft to moderately hard water suit the species well. Peacock Bass prefer warmer water than many large cichlids, with 80 to 84 degrees being the sweet spot for optimal color expression and activity level. Weekly water changes of twenty-five to thirty percent maintain water quality.

Diet is exclusively carnivorous. Offer market shrimp, silversides, tilapia fillets, smelt, and high-quality cichlid pellets formulated for predatory species. Our specimens accept pellets readily, which simplifies long-term feeding management. Avoid cheap feeder goldfish — the disease risk and poor nutritional profile make them a poor choice for a premium predator. Feed juveniles daily and adults three to four times per week.

The Peacock Bass is a fish for keepers who appreciate raw predatory power combined with striking coloration. It is not a community fish — tankmates must be large, robust, and capable of coexisting with an apex predator. The Fish Collection ships all Peacock Bass in oversized, insulated containers with our live arrival guarantee.`,
    seoDescription:
      'Peacock Bass for sale — the ultimate predatory cichlid with explosive power. Live arrival guaranteed, overnight shipping. From $85 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 180,
    maxSizeInches: 24,
    origin: 'South America (Amazon basin)',
    diet: 'Carnivore — shrimp, silversides, pellets, whole fish',
    temperament: 'Aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.5,
      hardnessMin: 2,
      hardnessMax: 15,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How big does a Peacock Bass get?',
        answer:
          'Peacock Bass reach 18 to 24 inches in captivity depending on the species and tank size, with some Cichla variants growing even larger. In the wild, certain species exceed 30 inches and 25 pounds. Growth is rapid — expect 8 to 12 inches in the first year under heavy feeding. Full adult size is typically achieved by age 3 to 4. Their muscular, deep-bodied build means they carry significant mass for their length, requiring robust tank infrastructure.',
      },
      {
        question: 'What tank size does a Peacock Bass need?',
        answer:
          'A minimum 180-gallon aquarium is required for a single adult Peacock Bass, with 250 gallons or more recommended for full-grown specimens. Pairs or groups require 300 gallons minimum. The tank should be at least 6 feet long with ample open swimming space — Peacock Bass are active cruisers, not sedentary ambush predators. Sparse decoration, heavy-duty filtration rated for three times the tank volume, and a secure lid are essential components of a proper Peacock Bass setup.',
      },
      {
        question: 'Can Peacock Bass live with other fish?',
        answer:
          'Peacock Bass can coexist with other large, robust fish that are too big to eat. Compatible tankmates include adult Arowana, large Oscars, adult Plecostomus, and similarly sized predatory cichlids. Any fish small enough to fit in the Peacock Bass\'s mouth will be eaten — and their mouth is larger than it appears. Same-species aggression can be intense, especially between males. A species-only setup or a carefully curated predator community in a very large tank are the two most reliable approaches.',
      },
      {
        question: 'Are Peacock Bass legal to own?',
        answer:
          'Peacock Bass ownership is legal in most U.S. states, but some states restrict or prohibit possession of Cichla species due to concerns about establishment in local waterways if released. States with warm climates — particularly Florida, where Peacock Bass have already been deliberately introduced — may have specific regulations. Always check your state and local laws before purchasing. The Fish Collection verifies legality for your shipping address and will advise if any restrictions apply to your location.',
      },
    ],
    relatedSlugs: ['australian-bass', 'tiger-oscar', 'flowerhorn-cichlid'],
    speciesGuideSlug: 'peacock-bass',
    ratingAverage: 4.7,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 30. Australian Bass
  // ──────────────────────────────────────────────
  {
    commonName: 'Australian Bass',
    scientificName: 'Macquaria novemaculeata',
    slug: 'australian-bass',
    category: 'bass',
    sku: 'TF-BAS-AUST-001',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/australian-bass-hero.jpg',
        alt: 'Australian Bass (Macquaria novemaculeata) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Australian Bass is one of the most sought-after native freshwater sportfish of Australia, now available to dedicated aquarists who appreciate a sleek, intelligent predator with subtle bronze-olive coloration and a fighting spirit that belies its modest size. Macquaria novemaculeata inhabits the coastal rivers and estuaries of eastern Australia, from Queensland south to Victoria, where it navigates between freshwater and brackish environments during its life cycle. The Fish Collection sources our Australian Bass from licensed aquaculture facilities that produce specimens adapted to fully freshwater aquarium conditions, eliminating the brackish transition challenges that complicate wild-caught fish.

The Australian Bass lacks the neon flash of many tropical species, but what it offers instead is a refined, understated beauty combined with remarkable intelligence and behavioral complexity. The body is a deep olive-bronze that shifts to silver on the flanks, with a subtle golden sheen under sidelighting. The fins are lightly tinted with amber. The overall impression is of a fish perfectly adapted to its environment — streamlined, alert, and quietly powerful. Australian Bass are visual hunters that track movement with precision, and feeding time reveals a strike speed and accuracy that surprises keepers accustomed to slower-paced tropical species.

Tank requirements reflect the species' active nature. A minimum 100-gallon aquarium is recommended for a single adult that reaches 10 to 14 inches in captivity. Groups require significantly larger systems. The tank should provide open swimming areas combined with rock and wood structure that creates current breaks and territory markers. Moderate to strong water flow from powerheads or a well-designed return system mimics the flowing rivers of the species' native habitat and encourages natural behavior.

Water parameters are notably flexible, reflecting the species' euryhaline nature. Temperature between 64 and 77 degrees Fahrenheit — cooler than most tropical species — with pH between 6.5 and 8.0 and soft to hard water. Australian Bass tolerate a remarkably wide range of conditions, though they show best color and activity levels in clean, well-oxygenated water at moderate temperatures. They are an excellent choice for unheated or mildly heated aquariums in temperate climates.

Diet is carnivorous with an emphasis on live and frozen foods. Offer market shrimp, silversides, earthworms, crickets, and high-quality sinking pellets. Our specimens accept pellets readily. Australian Bass are enthusiastic feeders that strike with impressive speed and precision. Feed every other day for adults, daily for juveniles. Overfeeding leads to water quality issues in the closed system of an aquarium, so portion control is important.

The Fish Collection ships Australian Bass in insulated, temperature-controlled containers with our live arrival guarantee. Import documentation accompanies every shipment.`,
    seoDescription:
      'Australian Bass for sale — the prized native Australian sportfish for advanced aquarists. Live arrival guaranteed, overnight shipping. From $120 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 100,
    maxSizeInches: 14,
    origin: 'Australia (eastern coastal rivers)',
    diet: 'Carnivore — shrimp, silversides, worms, pellets',
    temperament: 'Semi-aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 64,
      tempMax: 77,
      phMin: 6.5,
      phMax: 8.0,
      hardnessMin: 4,
      hardnessMax: 20,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How big does an Australian Bass get?',
        answer:
          'Australian Bass reach 10 to 14 inches in captivity, with wild specimens occasionally exceeding 16 inches and 5 pounds. Growth is moderate — expect 2 to 3 inches per year under good conditions. Full adult size is typically reached between ages 4 and 6. Their deep, laterally compressed body gives them a solid, substantial appearance. In large aquariums or ponds with abundant food, specimens at the upper end of the size range are achievable.',
      },
      {
        question: 'Do Australian Bass need cold water?',
        answer:
          'Australian Bass prefer cooler water than most tropical fish — 64 to 77 degrees Fahrenheit, with the sweet spot around 68 to 74 degrees. They are an excellent choice for unheated aquariums in temperate climates or rooms that stay cool year-round. Sustained temperatures above 80 degrees cause stress and reduced activity. This cooler preference limits compatible tankmates to species with similar requirements, such as certain native Australian species, subtropical cichlids, or temperate community fish.',
      },
      {
        question: 'Can Australian Bass live with other fish?',
        answer:
          'Australian Bass can coexist with similarly sized, robust fish that tolerate the same temperature range. Compatible tankmates include Silver Perch, Murray Cod juveniles, large Rainbow fish, and other Australian native species. Avoid small fish that could be eaten and delicate tropical species that require warmer water. Same-species aggression is manageable in groups of four or more in sufficiently large tanks. Australian Bass establish territories but rarely cause serious injury to appropriately matched tankmates.',
      },
      {
        question: 'Are Australian Bass hard to keep?',
        answer:
          'Australian Bass are moderately challenging. Their cooler temperature preference, need for clean well-oxygenated water, and large tank requirements put them beyond beginner level. However, they are hardy, disease-resistant, and accept prepared foods readily. The biggest challenges are providing adequate tank size, maintaining appropriate temperatures, and sourcing compatible tankmates that share their subtropical preferences. For keepers with experience in predatory or native fish, Australian Bass are rewarding and relatively straightforward.',
      },
    ],
    relatedSlugs: ['peacock-bass', 'tiger-oscar', 'albino-alligator-gar'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.5,
    reviewCount: 6,
  },

  // ──────────────────────────────────────────────
  // 31. Panther Grouper
  // ──────────────────────────────────────────────
  {
    commonName: 'Panther Grouper',
    scientificName: 'Cromileptes altivelis',
    slug: 'panther-grouper',
    category: 'grouper',
    sku: 'TF-GRP-PNTH-001',
    priceUSD: 75,
    images: [
      {
        url: '/images/products/panther-grouper-hero.jpg',
        alt: 'Panther Grouper (Cromileptes altivelis) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Panther Grouper is one of the most visually distinctive marine fish in the hobby — a sleek, high-bodied grouper covered in bold black polka dots on a white to pale grey background that creates an unmistakable dalmatian-like pattern. Cromileptes altivelis, also known as the Humpback Grouper for its distinctive head profile, is found across the Indo-Pacific from the Red Sea to Australia, inhabiting coral reefs and rocky outcrops at moderate depths. The Fish Collection sources our Panther Groupers from reputable marine collectors who practice sustainable harvest methods, selecting specimens with vivid dot contrast and strong feeding response.

What makes the Panther Grouper so popular among marine aquarists is its combination of striking pattern, engaging personality, and relative hardiness. Juveniles are particularly endearing — small, white, and heavily spotted, they swim with an exaggerated head-down posture that appears almost comical, a mimicry behavior thought to imitate a toxic flatworm or nudibranch to deter predators. As the fish matures, the dots become proportionally smaller against the growing body, and the overall coloration may shift toward a darker grey-white. The swimming posture normalizes, and the adult develops a powerful, predatory presence that commands attention in any marine setup.

Tank requirements escalate significantly as the Panther Grouper grows. Juveniles at 2 to 4 inches do fine in a 75-gallon tank, but adults reach 20 to 27 inches in captivity and require a minimum 300-gallon aquarium. This growth trajectory catches many keepers off guard — the adorable 3-inch spotted fish from the store becomes a tank-dominating predator within two to three years. We emphasize long-term planning at point of sale, and strongly recommend that buyers have a 300-gallon or larger system in place or planned before purchasing.

Water parameters follow standard tropical marine conditions. Temperature between 72 and 79 degrees Fahrenheit, pH between 8.1 and 8.4, and specific gravity of 1.020 to 1.025. Panther Groupers are hardy by marine fish standards and tolerate minor parameter fluctuations that would stress more sensitive species. Efficient protein skimming and robust biological filtration are essential to handle the waste output of a large predatory fish.

Diet is carnivorous and aggressive. Panther Groupers eat virtually any meaty food offered — market shrimp, silversides, squid, clam, and high-quality marine pellets. They are not fussy eaters and will consume any tankmate small enough to swallow. Our specimens accept frozen foods enthusiastically. Feed two to three times per week for adults, daily for growing juveniles. Monitor body condition — groupers are prone to obesity in captivity if overfed.

The Fish Collection ships all Panther Groupers in insulated, oxygen-enriched marine containers with our live arrival guarantee.`,
    seoDescription:
      'Panther Grouper for sale — the iconic spotted marine predator for large aquariums. Live arrival guaranteed, overnight shipping. From $75 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 300,
    maxSizeInches: 27,
    origin: 'Indo-Pacific Ocean',
    diet: 'Carnivore — shrimp, silversides, squid, marine pellets',
    temperament: 'Aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 79,
      phMin: 8.1,
      phMax: 8.4,
      hardnessMin: 8,
      hardnessMax: 12,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How big does a Panther Grouper get?',
        answer:
          'Panther Groupers reach 20 to 27 inches in captivity, making them one of the larger marine aquarium fish commonly sold. Growth is rapid — a 3-inch juvenile can reach 12 inches within the first year under heavy feeding. Many keepers are caught off guard by this growth rate, purchasing a small, adorable spotted fish that outgrows their tank within months. Plan for a minimum 300-gallon aquarium before purchasing, and ideally have one already operational.',
      },
      {
        question: 'Are Panther Groupers reef safe?',
        answer:
          'Panther Groupers are not reef safe. While they do not eat corals directly, they will consume any crustacean, small fish, or mobile invertebrate that fits in their mouth — and groupers have disproportionately large mouths for their body size. Cleaner shrimp, small wrasses, gobies, and other small reef inhabitants are all at risk. Panther Groupers are best kept in fish-only-with-live-rock (FOWLR) systems with other large, robust marine species.',
      },
      {
        question: 'What tank size does a Panther Grouper need?',
        answer:
          'Juveniles can be temporarily housed in 75-gallon tanks, but adults require a minimum 300-gallon aquarium. The tank should be at least 8 feet long with substantial rockwork for shelter and open areas for swimming. Efficient protein skimming and oversized biological filtration are essential to handle the waste output of a large marine predator. A tightly fitted lid prevents jumping, though Panther Groupers are less prone to escape attempts than some marine species.',
      },
      {
        question: 'What can I keep with a Panther Grouper?',
        answer:
          'Suitable tankmates for Panther Groupers include other large marine fish like adult moray eels, lionfish, large angelfish, adult tangs, and other grouper species of similar size. Any fish small enough to fit in the grouper\'s mouth will eventually be eaten — this includes surprisingly large prey, as groupers are ambush predators capable of engulfing fish up to half their own length. Same-species aggression is moderate and manageable in very large systems with adequate territory.',
      },
    ],
    relatedSlugs: ['miniatus-grouper', 'snowflake-moray-eel', 'gem-tang'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 32. Miniatus Grouper
  // ──────────────────────────────────────────────
  {
    commonName: 'Miniatus Grouper',
    scientificName: 'Cephalopholis miniata',
    slug: 'miniatus-grouper',
    category: 'grouper',
    sku: 'TF-GRP-MINI-001',
    priceUSD: 110,
    images: [
      {
        url: '/images/products/miniatus-grouper-hero.jpg',
        alt: 'Miniatus Grouper (Cephalopholis miniata) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Miniatus Grouper — also known as the Coral Hind — is among the most vividly colored grouper species available to marine aquarists. Cephalopholis miniata displays a brilliant vermillion-red to orange body densely covered with electric blue spots that create a visual effect so intense it appears almost artificial. Under reef lighting with blue spectrum emphasis, the spots fluoresce with a neon quality that makes the Miniatus Grouper one of the most photogenic fish in any marine system. The Fish Collection sources our Miniatus Groupers from sustainable Indo-Pacific collectors, selecting specimens with the most vivid base coloration and highest density of blue spots.

The Miniatus Grouper occupies a comfortable middle ground in the marine grouper world — large enough to be a commanding presence at a maximum size of 16 to 18 inches, yet small enough to be housed in moderately large home aquariums rather than requiring the warehouse-scale systems that Panther Groupers and Goliath Groupers demand. This manageable size, combined with spectacular coloration and a bold, personable temperament, has made C. miniata one of the most popular grouper species in the marine hobby.

In the aquarium, the Miniatus Grouper is a classic ambush predator that spends much of its time perched on rockwork or nestled in caves, waiting motionless until prey passes within striking distance. The strike itself is a study in precision — a explosive burst of speed followed by a powerful suction gulp that engulfs the target. Feeding time is dramatic and entertaining, though it serves as a constant reminder that any tankmate small enough to swallow is not a tankmate but a meal.

Tank requirements center on adequate water volume and rockwork. A minimum 150-gallon aquarium is required for a single adult, with 200 gallons or larger being preferable. The tank should feature extensive live rock arranged to create caves, ledges, and overhangs that the grouper can claim as its home base. Open swimming lanes between rock structures allow the fish to patrol its territory. Water flow should be moderate — Miniatus Groupers inhabit reef faces with current in the wild but are not current-loving fish in the way that tangs or anthias are.

Water parameters follow standard reef ranges. Temperature between 72 and 78 degrees Fahrenheit, pH between 8.1 and 8.4, and specific gravity of 1.020 to 1.025. Efficient protein skimming is essential, and biological filtration should be oversized to handle the grouper's carnivorous waste output. Weekly water changes of ten to fifteen percent maintain long-term water quality.

Diet is exclusively carnivorous. Market shrimp, silversides, squid, clam, and marine pellets are all accepted eagerly. Our specimens are eating frozen foods enthusiastically. Color-enhancing foods rich in astaxanthin and carotenoids can intensify the red-orange base coloration. Feed two to three times per week for adults. The Fish Collection ships all Miniatus Groupers in insulated marine containers with our live arrival guarantee.`,
    seoDescription:
      'Miniatus Grouper for sale — the vibrant Coral Hind with neon blue spots. Live arrival guaranteed, overnight shipping. From $110 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Moderate',
    tankSizeGallons: 150,
    maxSizeInches: 18,
    origin: 'Indo-Pacific Ocean (Red Sea to Pacific)',
    diet: 'Carnivore — shrimp, silversides, squid, marine pellets',
    temperament: 'Semi-aggressive',
    lifespan: '12-18 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 78,
      phMin: 8.1,
      phMax: 8.4,
      hardnessMin: 8,
      hardnessMax: 12,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'How big does a Miniatus Grouper get?',
        answer:
          'Miniatus Groupers reach 16 to 18 inches in captivity, making them a more manageable size than many grouper species. Growth is moderate — expect about 3 to 4 inches per year under normal feeding conditions. Full adult size is typically reached within 4 to 5 years. Their compact, stocky build means they carry impressive visual mass for their length. The Miniatus Grouper is one of the best grouper choices for keepers who want the grouper experience without committing to a 300-gallon-plus system.',
      },
      {
        question: 'Are Miniatus Groupers reef safe?',
        answer:
          'Miniatus Groupers are not reef safe. While they generally ignore corals, they will eat any small fish, shrimp, crab, or mobile invertebrate that fits in their mouth. In a reef system, ornamental shrimp, small wrasses, gobies, and similar inhabitants are all at risk. Miniatus Groupers are best kept in fish-only-with-live-rock (FOWLR) systems. If you must keep one in a reef, ensure all tankmates are large enough to avoid predation and accept that crustacean cleanup crew members will be consumed.',
      },
      {
        question: 'What do Miniatus Groupers eat?',
        answer:
          'Miniatus Groupers eat a wide variety of meaty marine foods including market shrimp, silversides, squid, clam, lance fish, and high-quality marine carnivore pellets. They are not fussy eaters and typically accept frozen foods within days of acclimation. Feed two to three times per week for adults. Color-enhancing foods rich in astaxanthin and carotenoids help maintain and intensify the vibrant red-orange base coloration. Avoid overfeeding, as groupers are prone to hepatic lipidosis — fatty liver disease — from excessive food intake.',
      },
      {
        question: 'Can I keep multiple Miniatus Groupers together?',
        answer:
          'Keeping multiple Miniatus Groupers is possible in very large systems of 300 gallons or more, but same-species aggression is a real concern. Introducing all specimens simultaneously at similar sizes improves compatibility. In smaller tanks, a single specimen is strongly recommended. If you do attempt a group, ensure abundant rockwork with multiple cave systems so each fish can establish separate territory. Monitor closely during the first few weeks for escalating aggression, and have a backup plan to separate fish if needed.',
      },
    ],
    relatedSlugs: ['panther-grouper', 'snowflake-moray-eel', 'clarion-angelfish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.8,
    reviewCount: 8,
  },

  // ──────────────────────────────────────────────
  // 33. Blue Diamond Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Blue Diamond Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'blue-diamond-discus',
    category: 'discus',
    sku: 'TF-DSC-BLDI-001',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/blue-diamond-discus-hero.jpg',
        alt: 'Blue Diamond Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Blue Diamond Discus is the pinnacle of solid-color discus breeding — a fish whose entire body radiates a uniform, electric cobalt blue that appears almost luminescent under proper aquarium lighting. Symphysodon aequifasciatus in its Blue Diamond form represents decades of selective breeding that has isolated and amplified the blue pigment while suppressing the natural barring and patterning that characterizes wild discus. The result is a disc-shaped fish of almost surreal beauty — a living gemstone that justifies its name with every viewing. The Fish Collection sources our Blue Diamond Discus from established Asian and European breeding facilities that maintain strict quality standards for color uniformity, body shape, and fin symmetry.

What distinguishes a premium Blue Diamond Discus from an ordinary blue discus is the completeness and uniformity of the coloration. A true Blue Diamond shows no stress bars, no residual patterning, and no color gradation — the same intensity of blue from head to tail, gill plate to dorsal fin. The disc shape should be nearly circular when viewed from the side, with proportional finnage that frames the body without appearing overdeveloped. Our specimens are selected against these criteria under multiple lighting conditions, because a fish that looks solid blue under actinic lighting but reveals hidden bars under white light is not a genuine Blue Diamond.

Discus keeping is often described as the summit of freshwater fishkeeping, and the description is not entirely marketing hyperbole. These are fish that reward precise water management with breathtaking beauty and punish neglect with rapid deterioration. Temperature must be maintained between 82 and 88 degrees Fahrenheit — warmer than the vast majority of tropical fish, and the single most common mistake made by new discus keepers is running their tank too cool. A stable 84 to 86 degrees is the sweet spot. pH should be between 6.0 and 7.0, and water must be soft — hardness below 8 dGH is essential. Many successful discus keepers use reverse-osmosis water remineralized to target parameters.

Tank size for a group of discus starts at 55 gallons for a small group of five to six juveniles, with 75 to 100 gallons being more appropriate for adult groups. Discus are social fish that must be kept in groups — solitary specimens become stressed, lose color, and often fail to thrive. A group of six or more in a bare-bottom or fine-sand tank with minimal decoration is the classic discus setup, though many keepers successfully maintain discus in planted aquariums with careful attention to temperature and water chemistry.

Diet should be high-quality and varied. Discus-specific granules, frozen bloodworms, brine shrimp, beef heart preparations, and white worms form the core rotation. Feed three to four times daily for juveniles to promote growth, tapering to twice daily for adults. Our specimens are eating frozen and prepared foods enthusiastically. The Fish Collection ships all discus in insulated, temperature-controlled containers with our live arrival guarantee.`,
    seoDescription:
      'Blue Diamond Discus for sale — the ultimate solid-blue freshwater gem. Live arrival guaranteed, overnight shipping. From $120 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 55,
    maxSizeInches: 8,
    origin: 'South America (captive-bred)',
    diet: 'Omnivore — discus granules, bloodworms, beef heart, brine shrimp',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
      hardnessMin: 1,
      hardnessMax: 8,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'How much does a Blue Diamond Discus cost?',
        answer:
          'Blue Diamond Discus typically range from $60 to $250 depending on size, color uniformity, and breeder reputation. Our specimens are priced at $120, reflecting excellent solid-blue coverage, proper disc shape, and vigorous health. Show-quality specimens from elite breeders with flawless coloration can exceed $300. The key value differentiator is color completeness — any residual barring, stress marks, or color gradation significantly reduces a Blue Diamond\'s market value.',
      },
      {
        question: 'What temperature do Discus need?',
        answer:
          'Discus require warmer water than most tropical fish — 82 to 88 degrees Fahrenheit, with 84 to 86 degrees being the optimal range. This is the single most critical parameter for discus health and the most common mistake made by new keepers. Temperatures below 80 degrees suppress immune function and make discus vulnerable to opportunistic infections. The high temperature requirement limits compatible tankmates to species that tolerate similar warmth, such as Cardinal Tetras, Corydoras sterbai, and certain Apistogramma species.',
      },
      {
        question: 'How many Discus should be kept together?',
        answer:
          'We recommend a minimum group of five to six Discus. These are social fish that establish hierarchies and display natural behaviors — color displays, feeding competition, and pair bonding — only in groups. Solitary Discus become reclusive and stressed, often losing color and refusing food. Larger groups of eight or more distribute aggression more evenly and create more spectacular displays. Each additional fish requires roughly 10 gallons of additional tank volume beyond the base 55-gallon minimum.',
      },
      {
        question: 'Are Discus hard to keep?',
        answer:
          'Discus are genuinely more demanding than most tropical fish. They require precise temperature control, soft acidic water, frequent water changes, high-quality varied diet, and careful attention to tank hygiene. Many keepers use reverse-osmosis water systems and perform daily or every-other-day water changes for growing juveniles. However, the difficulty is often overstated — with proper infrastructure and routine, discus keeping becomes manageable. The investment in equipment and time is rewarded by fish that are among the most beautiful in freshwater aquatics.',
      },
      {
        question: 'Can Discus live in a planted tank?',
        answer:
          'Yes, Discus can thrive in planted aquariums, though plant selection must account for the high temperatures that Discus require. Suitable plants include Anubias, Java Fern, Amazon Swords, Vallisneria, and many stem plants that tolerate 84 to 86 degrees. The planted tank aesthetic is stunning with Discus — the green backdrop enhances their blue coloration dramatically. The tradeoff is that planted tanks are slightly harder to keep pristine than bare-bottom setups, requiring more attention to substrate maintenance and plant health.',
      },
    ],
    relatedSlugs: ['pigeon-blood-discus', 'flowerhorn-cichlid', 'platinum-arowana'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.9,
    reviewCount: 13,
  },

  // ──────────────────────────────────────────────
  // 34. Pigeon Blood Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Pigeon Blood Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'pigeon-blood-discus',
    category: 'discus',
    sku: 'TF-DSC-PGBL-001',
    priceUSD: 95,
    images: [
      {
        url: '/images/products/pigeon-blood-discus-hero.jpg',
        alt: 'Pigeon Blood Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Pigeon Blood Discus is one of the most recognizable and widely admired discus variants in the hobby — a warm-toned fish whose cream-to-orange body is overlaid with irregular red-orange patterning and fine peppering that creates an appearance reminiscent of the gemstone that inspired its name. Symphysodon aequifasciatus in the Pigeon Blood form emerged from Asian breeding programs in the 1990s and rapidly became one of the most commercially successful discus varieties ever produced. Its popularity endures because the coloration is both striking and unique — no other freshwater fish quite replicates the warm, stippled tones of a well-bred Pigeon Blood. The Fish Collection sources our Pigeon Blood Discus from breeding facilities that prioritize clean patterning, strong body shape, and minimal stress-bar visibility.

The Pigeon Blood phenotype is characterized by a base color ranging from creamy white to deep orange, overlaid with red-to-orange stippling and peppering across the body and fins. The intensity and distribution of this peppering varies between individuals and breeding lines — some specimens show heavy, uniform peppering across the entire body, while others display cleaner flanks with peppering concentrated on the head and dorsal region. Our specimens represent a balanced aesthetic with moderate, well-distributed peppering and clean orange base coloration.

One characteristic of the Pigeon Blood line that buyers should understand is black peppering — small dark spots that develop on the body over time, particularly in response to stress, poor water quality, or genetic predisposition. While some degree of dark peppering is inherent to the variety, excessive spotting often indicates suboptimal conditions. Clean water, stable temperature, and low stress minimize dark spot development. Our specimens come from lines bred for reduced dark peppering, though some degree of spot development should be expected as a normal characteristic of the variety.

Care requirements match those of all discus varieties. Temperature is the most critical parameter — maintain between 82 and 88 degrees Fahrenheit, with 84 to 86 degrees being ideal. pH between 6.0 and 7.0, soft water below 8 dGH, and impeccable water quality are all essential. A minimum group of five to six fish in a 55-gallon or larger tank provides the social environment discus require. Bare-bottom tanks facilitate cleaning and are preferred by many serious breeders, though planted setups work well for display purposes.

Diet should be varied and high-quality. Discus-specific granules, frozen bloodworms, brine shrimp, beef heart mix, and white worms provide complete nutrition. Color-enhancing foods with carotenoids and astaxanthin intensify the warm orange-red tones. Feed three to four times daily for growing juveniles, twice daily for adults. Moderate water changes of thirty to fifty percent should be performed at least every other day for juveniles and two to three times per week for adults.

Pigeon Blood Discus pair beautifully with Blue Diamond Discus in mixed groups, the warm and cool tones complementing each other spectacularly. The Fish Collection ships all discus in insulated, temperature-controlled containers with our live arrival guarantee.`,
    seoDescription:
      'Pigeon Blood Discus for sale — the iconic warm-toned discus with stunning stippled pattern. Live arrival guaranteed, overnight shipping. From $95 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 55,
    maxSizeInches: 8,
    origin: 'South America (captive-bred)',
    diet: 'Omnivore — discus granules, bloodworms, beef heart, brine shrimp',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
      hardnessMin: 1,
      hardnessMax: 8,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'Why does my Pigeon Blood Discus have black spots?',
        answer:
          'Black peppering is a normal characteristic of the Pigeon Blood discus variety — it is genetically inherent to the line and to some degree unavoidable. However, the intensity and spread of dark spots is influenced by environmental factors. Stress, poor water quality, low temperature, and aggressive tankmates all increase dark peppering. Clean water, stable temperature at 84 to 86 degrees, a peaceful tank environment, and quality breeding lines all minimize it. Our specimens come from lines selected for reduced dark peppering, though some development over time is expected.',
      },
      {
        question: 'How much does a Pigeon Blood Discus cost?',
        answer:
          'Pigeon Blood Discus typically range from $50 to $200 depending on size, color quality, and breeder reputation. Our specimens are priced at $95, reflecting strong orange base coloration, balanced peppering, and healthy body shape. Show-quality specimens with exceptional pattern and minimal dark spotting from elite breeding lines can exceed $250. The Pigeon Blood is one of the more affordable premium discus varieties, offering outstanding visual impact relative to its price.',
      },
      {
        question: 'Can Pigeon Blood Discus live with Blue Diamond Discus?',
        answer:
          'Yes, Pigeon Blood and Blue Diamond Discus can be kept together and the warm-cool color contrast creates one of the most spectacular freshwater displays possible. All discus varieties are the same species and share identical care requirements. When mixing varieties, introduce all fish simultaneously at similar sizes to prevent bullying. A mixed group of six or more — combining Pigeon Blood, Blue Diamond, and other variants — creates a dynamic, colorful display that showcases the full range of discus breeding achievement.',
      },
      {
        question: 'What are the best tankmates for Pigeon Blood Discus?',
        answer:
          'The best tankmates for Pigeon Blood Discus are species that tolerate the high temperatures discus require (82-88°F) and are peaceful enough not to outcompete them for food. Cardinal Tetras are the classic choice — their blue-and-red coloration complements discus beautifully. Other suitable companions include Rummy Nose Tetras, Corydoras sterbai (one of the few corydoras that tolerates discus temperatures), small Apistogramma species, and Otocinclus for algae control. Avoid fast, aggressive feeders that would monopolize meals.',
      },
      {
        question: 'How often should I change water for Pigeon Blood Discus?',
        answer:
          'Water change frequency depends on tank size, stocking level, and fish age. Growing juveniles benefit from daily or every-other-day water changes of thirty to fifty percent to support rapid growth and maintain pristine conditions. Adult discus in a properly filtered tank do well with two to three water changes per week of twenty-five to thirty percent. The key is consistency — discus respond poorly to erratic maintenance schedules. Use water matched in temperature and chemistry to avoid shocking the fish during changes.',
      },
    ],
    relatedSlugs: ['blue-diamond-discus', 'flowerhorn-cichlid', 'platinum-arowana'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.7,
    reviewCount: 15,
  },

  // ──────────────────────────────────────────────
  // Shovelnose Tiger Catfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Shovelnose Tiger Catfish',
    scientificName: 'Pseudoplatystoma tigrinum',
    slug: 'shovelnose-tiger-catfish',
    category: 'catfish',
    sku: 'TF-CAT-002',
    priceUSD: 200,
    images: [
      {
        url: '/images/products/shovelnose-tiger-catfish-hero.jpg',
        alt: 'Shovelnose Tiger Catfish (Pseudoplatystoma tigrinum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Shovelnose Tiger Catfish is one of the most visually striking large catfish available in the freshwater aquarium hobby. Pseudoplatystoma tigrinum earns its common name from the bold, dark vertical bands that stripe its elongated silver body — a pattern reminiscent of a tiger's coat and unmistakable even from across a room. Native to the Amazon Basin, this apex predator inhabits deep river channels and flooded forests where its flattened, spatulate head and keen sensory barbels allow it to hunt with devastating efficiency in low-visibility waters. At The Fish Collection, we source our Shovelnose Tiger Catfish from trusted South American exporters who prioritize specimen health and clean collection practices.

What sets the Shovelnose Tiger apart from other large predatory catfish is the combination of elegance and power. Unlike the bulkier Red Tail Catfish, the Shovelnose Tiger maintains a streamlined, torpedo-shaped profile throughout its life — a body plan built for speed and ambush predation. Adults reach approximately 51 inches in captivity, making this a true monster fish that demands serious infrastructure. A 300-gallon aquarium is the absolute minimum for a juvenile, and keepers should plan for a 500-gallon or larger system as the fish matures. Custom-built tanks or indoor ponds represent the ideal long-term housing solution.

Feeding a Shovelnose Tiger Catfish is a straightforward but critical aspect of husbandry. This is an obligate carnivore that feeds primarily on live and frozen fish in the wild. In captivity, we recommend a diet built around frozen silversides, smelt, prawns, and high-quality sinking pellets designed for large predatory catfish. Live feeder fish can be offered from quarantined sources but should not constitute the majority of the diet due to disease transmission risks. Feed juveniles every other day and taper to two to three times weekly for adults. These catfish are crepuscular feeders — most active at dawn and dusk — and many keepers find that feeding during low-light periods produces the most enthusiastic response.

Water parameters mirror standard Amazonian conditions: 72 to 82 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. The Shovelnose Tiger is reasonably adaptable but does best in well-oxygenated water with moderate to strong flow, replicating the riverine habitats it occupies in the wild. Filtration must be robust — sump systems rated for at least twice the tank volume, combined with regular 30 to 40 percent weekly water changes, are the baseline for maintaining water quality with a fish that produces a significant bioload.

Temperamentally, the Shovelnose Tiger Catfish is predatory and will consume any tankmate that fits in its remarkably wide mouth. Compatible companions are limited to fish of similar or larger size — Arowana, large Gar, and other hefty catfish species can coexist in sufficiently spacious systems. Many experienced keepers maintain Shovelnose Tigers as solitary specimens, which simplifies husbandry and allows the fish to claim the entire tank as its territory.

With a lifespan of 18 to 25 years, the Shovelnose Tiger Catfish is a long-term commitment that rewards dedicated keepers with one of the most dramatic and beautiful predatory fish in the freshwater hobby. The Fish Collection ships every specimen with our live arrival guarantee and full acclimation support from our aquatics team.`,
    seoDescription:
      'Shovelnose Tiger Catfish for sale — stunning Amazonian predator with bold tiger striping. Live arrival guaranteed, overnight shipping. From $200 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 300,
    maxSizeInches: 51,
    origin: 'Amazon Basin',
    diet: 'Carnivore — live/frozen fish',
    temperament: 'Predatory',
    lifespan: '18-25 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How big does a Shovelnose Tiger Catfish get?',
        answer:
          'Shovelnose Tiger Catfish reach approximately 51 inches (130 cm) in captivity, making them one of the larger Pseudoplatystoma species available in the hobby. Growth is rapid during the first two years, with juveniles gaining several inches per month under optimal feeding and water conditions. Full adult size is typically reached by age five to seven years.',
      },
      {
        question: 'What tank size does a Shovelnose Tiger Catfish need?',
        answer:
          'A minimum of 300 gallons is required, though 500 gallons or larger is strongly recommended for a full-grown adult. The tank should be at least eight feet long to accommodate the fish\'s length and active swimming pattern. Indoor ponds or custom-built systems are the gold standard for long-term housing of this species.',
      },
      {
        question: 'What do Shovelnose Tiger Catfish eat?',
        answer:
          'Shovelnose Tigers are strict carnivores that feed on frozen silversides, smelt, prawns, and sinking predator pellets. Live feeder fish from quarantined sources can supplement the diet but should not be the primary food source. Feed juveniles every other day and adults two to three times per week, preferably during low-light periods when they are most active.',
      },
      {
        question: 'Can Shovelnose Tiger Catfish live with other fish?',
        answer:
          'These catfish are predatory and will eat anything that fits in their wide mouth. Compatible tankmates are limited to similarly sized or larger species such as Arowana, large Gar, and other big catfish. A 500-gallon or larger system is necessary for any community setup. Many keepers house them solo for simplicity and safety.',
      },
      {
        question: 'How long does a Shovelnose Tiger Catfish live?',
        answer:
          'With proper care, Shovelnose Tiger Catfish live 18 to 25 years in captivity. Longevity depends on water quality, diet variety, and adequate tank size. This is a multi-decade commitment that requires planning for tank upgrades as the fish grows.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'irwini-catfish', 'marble-achara-catfish'],
    ratingAverage: 4.6,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // Irwini Catfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Irwini Catfish',
    scientificName: 'Paulicea lutkeni',
    slug: 'irwini-catfish',
    category: 'catfish',
    sku: 'TF-CAT-003',
    priceUSD: 300,
    images: [
      {
        url: '/images/products/irwini-catfish-hero.jpg',
        alt: 'Irwini Catfish (Paulicea lutkeni) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Irwini Catfish is one of the most powerful and imposing freshwater catfish available to dedicated monster-fish keepers. Paulicea lutkeni, also known as the Jau Catfish in its native Brazil, is a true river giant that inhabits the deep channels and rapids of the Parana River system, where it grows to staggering proportions and occupies the apex predator niche alongside the largest pimelodid catfish on Earth. At The Fish Collection, we offer this species exclusively to experienced keepers who understand that an Irwini Catfish is not a casual acquisition — it is a lifelong project that demands expert-level husbandry and serious infrastructure.

What distinguishes the Irwini from other large catfish in the hobby is its sheer physical presence. This is a heavily built, broad-headed species with a muscular body that conveys raw power even at rest. The coloration is a mottled pattern of dark olive, brown, and grey that provides excellent camouflage against rocky river substrates — subtle compared to the bold striping of a Shovelnose Tiger, but undeniably impressive when you consider the scale of the animal. Adults reach approximately 55 inches in captivity, and wild specimens have been documented at significantly larger sizes. The Irwini's mouth is cavernous, perfectly adapted for engulfing large prey items in the swift currents of its native habitat.

A 300-gallon aquarium is the bare minimum for a juvenile Irwini Catfish, and this should be viewed as temporary housing. A full-grown adult requires 500 gallons or more, with indoor ponds being the preferred solution among serious keepers. The tank must feature powerful filtration and strong water movement to replicate the well-oxygenated riverine conditions the species requires. Sump-based filtration rated for at least three times the tank volume, combined with supplementary powerheads, creates the current and dissolved oxygen levels that keep an Irwini in peak condition.

Diet is uncomplicated but must be protein-rich. The Irwini is an ambush carnivore that feeds on fish, crustaceans, and other aquatic organisms in the wild. In captivity, we feed ours a rotation of frozen silversides, whole prawns, smelt, tilapia fillets, and high-quality sinking pellets. Live feeder fish are an option from quarantined sources but are not essential. Feed juveniles daily, tapering to every two to three days for sub-adults and twice weekly for mature adults. As with all large catfish, overfeeding is a serious risk — these fish will gorge if given the opportunity, leading to obesity and organ stress.

Water conditions should reflect the Irwini's natural habitat: 72 to 82 degrees Fahrenheit, pH of 6.5 to 7.5, and soft to moderately hard water. Weekly water changes of 30 to 50 percent are critical given the massive bioload these fish produce. The Irwini is a hardy species that adapts well to captive conditions, but it does not tolerate ammonia or nitrite spikes — robust biological filtration is non-negotiable.

The Irwini Catfish is predatory by nature and will consume any tankmate small enough to fit in its mouth. Housing with other large predatory species is possible in very large systems but requires careful planning. With a lifespan that can exceed 20 years, this is a fish that grows with you and rewards your investment of space, time, and expertise with one of the most commanding presences in freshwater fishkeeping.`,
    seoDescription:
      'Irwini Catfish for sale — massive Parana River predator for expert keepers. Live arrival guaranteed, overnight shipping. From $300 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 300,
    maxSizeInches: 55,
    origin: 'Paraná River system',
    diet: 'Carnivore',
    temperament: 'Predatory',
    lifespan: '20+ years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'How big does an Irwini Catfish get?',
        answer:
          'Irwini Catfish reach approximately 55 inches (140 cm) in captivity, making them one of the largest catfish species available in the aquarium hobby. Wild specimens have been recorded at even larger sizes. Growth is rapid in the first few years, with juveniles gaining several inches per month under optimal conditions.',
      },
      {
        question: 'What tank size does an Irwini Catfish need?',
        answer:
          'A 300-gallon aquarium is the minimum for a juvenile, but a full-grown adult requires 500 gallons or more. Indoor ponds with robust filtration represent the ideal long-term housing. The tank must provide strong water flow and high dissolved oxygen levels to replicate the species\' native riverine environment.',
      },
      {
        question: 'What do Irwini Catfish eat?',
        answer:
          'Irwini Catfish are carnivores that thrive on frozen silversides, prawns, smelt, tilapia fillets, and high-quality sinking pellets. Feed juveniles daily, sub-adults every two to three days, and mature adults twice weekly. Overfeeding is the most common husbandry mistake — these fish will eat until dangerously engorged if permitted.',
      },
      {
        question: 'Are Irwini Catfish aggressive?',
        answer:
          'Irwini Catfish are predatory rather than aggressive in the traditional sense. They will consume any fish small enough to fit in their considerable mouth but are generally indifferent to tankmates too large to eat. Housing with other large predatory species is feasible in systems of 500 gallons or more.',
      },
      {
        question: 'How long does an Irwini Catfish live?',
        answer:
          'With proper care, Irwini Catfish live 20 years or more in captivity. Longevity depends on water quality, diet moderation, and adequate space. This is a generational commitment that requires long-term planning for housing and care.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'shovelnose-tiger-catfish', 'marble-achara-catfish'],
    ratingAverage: 4.7,
    reviewCount: 6,
  },

  // ──────────────────────────────────────────────
  // Marble Achara Catfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Marble Achara Catfish',
    scientificName: 'Leiarius marmoratus',
    slug: 'marble-achara-catfish',
    category: 'catfish',
    sku: 'TF-CAT-004',
    priceUSD: 200,
    images: [
      {
        url: '/images/products/marble-achara-catfish-hero.jpg',
        alt: 'Marble Achara Catfish (Leiarius marmoratus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Marble Achara Catfish is a beautifully patterned Amazonian predator that bridges the gap between manageable large catfish and the true monster-fish league. Leiarius marmoratus is named for its striking marbled pattern of dark brown and tan blotches that cover the body and extend into the fins — a natural camouflage that makes it nearly invisible against the leaf-littered substrate of its native flooded forests. At The Fish Collection, we prize the Marble Achara for its combination of visual appeal, robust constitution, and a manageable adult size that, while still large, does not require the thousand-gallon infrastructure demanded by Red Tail Catfish or Shovelnose Tigers.

Adults reach approximately 24 inches in captivity — substantial enough to command attention in any large aquarium but compact enough to thrive permanently in a well-maintained 300-gallon system. This makes the Marble Achara an excellent choice for keepers who want the predatory catfish experience without committing to the extreme tank sizes that the largest pimelodids require. The fish's body plan is characteristically catfish: a broad, flattened head with prominent barbels, a powerful caudal fin for burst swimming, and a wide mouth capable of engulfing prey items with impressive speed.

The Marble Achara Catfish originates from the Amazon Basin, where it inhabits slow-moving tributaries, flooded forests, and the margins of major river channels. In these environments, it feeds on smaller fish, crustaceans, and fallen fruits — a varied diet that translates well to captive feeding regimens. We recommend a staple diet of high-quality sinking pellets supplemented with frozen prawns, silversides, and smelt. Live foods from quarantined sources can be offered as enrichment. Feed juveniles daily and adults every two to three days, adjusting quantities to maintain a healthy body condition without overfeeding.

Water parameters are straightforward and forgiving: 72 to 82 degrees Fahrenheit, pH of 6.5 to 7.5, and soft to moderately hard water. The Marble Achara is a hardy species that adapts well to a range of conditions, making it somewhat more forgiving than more sensitive large catfish species. Filtration should be rated for at least twice the tank volume, and weekly water changes of 25 to 30 percent are standard practice. The aquarium should include hiding spots in the form of driftwood, caves, or PVC pipe sections, as the Marble Achara is primarily nocturnal and appreciates secure retreats during daylight hours.

Temperamentally, Leiarius marmoratus is semi-aggressive — less overtly predatory than a Shovelnose Tiger but fully capable of consuming any fish small enough to fit in its mouth. It coexists reasonably well with similarly sized or larger tankmates in spacious systems. Many keepers successfully house Marble Acharas alongside Arowana, large cichlids, and other catfish species in community predator setups of 300 gallons or more.

With a lifespan of 15 to 20 years, the Marble Achara Catfish offers a rewarding long-term keeping experience for advanced aquarists who appreciate the beauty and behavior of large South American catfish without the extreme space demands of the very largest species.`,
    seoDescription:
      'Marble Achara Catfish for sale — beautifully patterned Amazonian predator. Live arrival guaranteed, overnight shipping. From $200 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 300,
    maxSizeInches: 24,
    origin: 'Amazon Basin',
    diet: 'Carnivore',
    temperament: 'Semi-aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How big does a Marble Achara Catfish get?',
        answer:
          'Marble Achara Catfish reach approximately 24 inches (60 cm) in captivity. This is considerably more manageable than many other large Amazonian catfish species, making the Marble Achara a popular choice for keepers who want a substantial predatory catfish without committing to a 500-gallon or larger system.',
      },
      {
        question: 'What tank size does a Marble Achara Catfish need?',
        answer:
          'A 300-gallon aquarium is the recommended minimum for a full-grown Marble Achara Catfish. Juveniles can be housed temporarily in smaller tanks of 125 gallons or more, but plan for an upgrade as the fish grows. The tank should include hiding spots such as driftwood caves or PVC sections for daytime retreats.',
      },
      {
        question: 'What do Marble Achara Catfish eat?',
        answer:
          'Feed high-quality sinking pellets as the staple diet, supplemented with frozen prawns, silversides, and smelt. The Marble Achara is a carnivore in captivity, though wild specimens also consume fallen fruits. Feed juveniles daily and adults every two to three days, being careful not to overfeed.',
      },
      {
        question: 'Are Marble Achara Catfish aggressive?',
        answer:
          'The Marble Achara is semi-aggressive — it will eat fish small enough to fit in its mouth but generally coexists well with similarly sized or larger tankmates. Successful community setups include Arowana, large cichlids, and other catfish in systems of 300 gallons or more.',
      },
      {
        question: 'How long does a Marble Achara Catfish live?',
        answer:
          'With proper care, Marble Achara Catfish live 15 to 20 years in captivity. Longevity depends on consistent water quality, a varied diet, and adequate tank size. This is a long-term commitment that rewards keepers with years of enjoyment.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'shovelnose-tiger-catfish', 'irwini-catfish'],
    ratingAverage: 4.5,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // Bumblebee Catfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Bumblebee Catfish',
    scientificName: 'Pseudopimelodus bufonius',
    slug: 'bumblebee-catfish',
    category: 'catfish',
    sku: 'TF-CAT-005',
    priceUSD: 35,
    images: [
      {
        url: '/images/products/bumblebee-catfish-hero.jpg',
        alt: 'Bumblebee Catfish (Pseudopimelodus bufonius) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Bumblebee Catfish is one of the most charming and accessible catfish species in the freshwater hobby — a compact, boldly patterned fish that brings genuine character to medium-sized aquarium setups without demanding the massive infrastructure of its larger relatives. Pseudopimelodus bufonius earns its common name from the striking alternating bands of dark brown or black and bright yellow that wrap around its body, creating a pattern unmistakably reminiscent of its namesake insect. At The Fish Collection, we offer healthy, well-acclimated Bumblebee Catfish that are feeding confidently on prepared foods — a critical indicator of specimen quality in a species that can sometimes be reluctant to accept non-live foods when first imported.

At a maximum size of approximately 6 inches, the Bumblebee Catfish is one of the few predatory catfish that can be comfortably housed in a 50-gallon aquarium for its entire life. This modest space requirement makes it an ideal entry point for fishkeepers who are fascinated by catfish behavior but are not yet ready for the commitment of a 300-gallon monster-fish setup. Despite its small stature, the Bumblebee Catfish exhibits all the classic catfish behaviors — nocturnal foraging, barbel-driven prey detection, and the sudden burst-feeding strikes that make catfish so captivating to watch at feeding time.

Native to river systems across South America, Pseudopimelodus bufonius inhabits rocky substrates and fallen timber in moderate-current environments. In the aquarium, replicate these conditions with a layout of driftwood, caves, and rock formations that provide the secure hiding spots this shy, nocturnal species requires. A bare-bottom or fine sand substrate works best, and moderate water flow from a quality canister filter or hang-on-back unit maintains the oxygenation and water quality the Bumblebee Catfish prefers.

Feeding is straightforward once the fish has acclimated. Bumblebee Catfish are carnivores that accept a variety of frozen and prepared foods including bloodworms, brine shrimp, sinking carnivore pellets, and chopped earthworms. Feed once daily in the evening or after lights-out to align with the species' natural crepuscular and nocturnal feeding rhythm. While the Bumblebee Catfish will consume very small tankmates such as neon tetras, it is generally peaceful toward fish too large to eat and makes a surprisingly good community member when housed with appropriately sized companions.

Water parameters are undemanding: 68 to 77 degrees Fahrenheit, pH of 6.5 to 7.5, and soft to moderately hard water. Weekly water changes of 20 to 25 percent maintain water quality in a 50-gallon setup. The Bumblebee Catfish is a hardy species that tolerates a range of conditions, making it forgiving for intermediate-level keepers who are still refining their husbandry skills.

With a lifespan of 8 to 12 years, the Bumblebee Catfish is a delightful long-term addition to any appropriately sized aquarium. Its bold patterning, engaging behavior, and manageable care requirements make it one of the most rewarding small catfish in the hobby.`,
    seoDescription:
      'Bumblebee Catfish for sale — bold black-and-yellow South American catfish. Live arrival guaranteed, overnight shipping. From $35 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 50,
    maxSizeInches: 6,
    origin: 'South America',
    diet: 'Carnivore — worms, pellets',
    temperament: 'Peaceful',
    lifespan: '8-12 years',
    waterParameters: {
      tempMin: 68,
      tempMax: 77,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'How big does a Bumblebee Catfish get?',
        answer:
          'Bumblebee Catfish reach approximately 6 inches (15 cm) in captivity, making them one of the most compact predatory catfish available. Most growth occurs within the first year, with the fish reaching near-adult size by 12 to 18 months under proper conditions.',
      },
      {
        question: 'What tank size does a Bumblebee Catfish need?',
        answer:
          'A 50-gallon aquarium is sufficient for a single Bumblebee Catfish or a pair. The tank should include plenty of hiding spots such as driftwood caves, rock formations, and PVC pipe sections. These nocturnal fish spend most of the day hidden and become active at dusk and overnight.',
      },
      {
        question: 'What do Bumblebee Catfish eat?',
        answer:
          'Bumblebee Catfish are carnivores that accept frozen bloodworms, brine shrimp, sinking pellets, and chopped earthworms. Feed once daily in the evening or after lights-out to match their nocturnal feeding habits. Ensure food reaches the bottom of the tank where the catfish forages.',
      },
      {
        question: 'Are Bumblebee Catfish good community fish?',
        answer:
          'Bumblebee Catfish are generally peaceful toward fish too large to eat but will prey on very small tankmates like neon tetras. They coexist well with medium-sized community fish, other catfish, and cichlids in appropriately sized aquariums. Their nocturnal habits mean they rarely compete for space during the day.',
      },
      {
        question: 'How long does a Bumblebee Catfish live?',
        answer:
          'With proper care, Bumblebee Catfish live 8 to 12 years in captivity. Longevity depends on water quality, diet variety, and stress-free housing with adequate hiding spots. They are hardy fish that reward consistent care with years of enjoyment.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'black-lancer-catfish', 'marble-achara-catfish'],
    ratingAverage: 4.4,
    reviewCount: 14,
  },

  // ──────────────────────────────────────────────
  // Black Lancer Catfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Black Lancer Catfish',
    scientificName: 'Bagrichthys macracanthus',
    slug: 'black-lancer-catfish',
    category: 'catfish',
    sku: 'TF-CAT-006',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/black-lancer-catfish-hero.jpg',
        alt: 'Black Lancer Catfish (Bagrichthys macracanthus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Black Lancer Catfish is a sleek, jet-black predatory catfish from the Mekong Basin that has earned a devoted following among serious catfish enthusiasts. Bagrichthys macracanthus is named for the dramatically elongated dorsal spine that extends backward along the body like a lance — a distinctive feature that gives this species an unmistakable silhouette and sets it apart from every other catfish in the hobby. At The Fish Collection, we source our Black Lancers from reliable Southeast Asian exporters who handle specimens with the care required to preserve the delicate dorsal spine and ensure the fish arrive in peak condition.

The Black Lancer's appearance is striking in its simplicity. The body is a uniform velvety black with a subtle iridescent sheen that catches light at certain angles, and the impossibly long dorsal filament trails gracefully as the fish moves through the water. Adults reach approximately 16 inches in captivity — a size that commands respect without overwhelming a well-planned aquarium. A 75-gallon tank is the minimum for a single specimen, providing adequate swimming space and room for the hiding structures this predominantly nocturnal species requires.

In the wild, Bagrichthys macracanthus inhabits the deep, slow-moving channels of the Mekong and its tributaries, where it hunts small fish, crustaceans, and aquatic invertebrates under cover of darkness. In the aquarium, this nocturnal lifestyle translates into a fish that is most active and visible during evening and nighttime hours. Providing a dimly lit tank with plenty of driftwood, caves, and overhangs allows the Black Lancer to exhibit natural behavior and reduces stress. Many keepers install moonlight LEDs to observe their Lancers' after-dark activity without disrupting their light-sensitive routine.

Diet is carnivorous and should include frozen bloodworms, brine shrimp, chopped prawns, and sinking carnivore pellets. Feed in the evening when the fish is most active. The Black Lancer is not a competitive feeder, so ensure food reaches the bottom of the tank without being intercepted by more assertive tankmates. In a community setting, target feeding with a turkey baster or feeding tube is an effective strategy.

Water parameters should replicate tropical Southeast Asian river conditions: 72 to 82 degrees Fahrenheit, pH of 6.0 to 7.0, and soft to slightly acidic water. The Black Lancer prefers well-oxygenated water with moderate flow. Filtration should be efficient but not produce overly turbulent conditions — a quality canister filter paired with a sponge pre-filter works well. Weekly water changes of 20 to 25 percent maintain the pristine conditions this species prefers.

Temperamentally, the Black Lancer is predatory toward small fish and invertebrates but otherwise peaceful and retiring. It makes an excellent companion for medium to large community fish that do not occupy the same nocturnal niche. With a lifespan of 10 to 15 years, the Black Lancer Catfish is a rewarding species for advanced keepers who appreciate understated elegance and fascinating nocturnal behavior.`,
    seoDescription:
      'Black Lancer Catfish for sale — sleek Mekong predator with dramatic dorsal lance. Live arrival guaranteed, overnight shipping. From $120 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 16,
    origin: 'Mekong Basin',
    diet: 'Carnivore',
    temperament: 'Predatory',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How big does a Black Lancer Catfish get?',
        answer:
          'Black Lancer Catfish reach approximately 16 inches (40 cm) in captivity. The elongated dorsal filament adds to the visual impression of length but is not included in body size measurements. Most growth occurs within the first two years under proper care.',
      },
      {
        question: 'What tank size does a Black Lancer Catfish need?',
        answer:
          'A 75-gallon aquarium is the minimum for a single Black Lancer Catfish. The tank should include ample hiding spots such as driftwood caves, rock overhangs, and dense planting. Dim lighting or moonlight LEDs are recommended to encourage natural nocturnal activity.',
      },
      {
        question: 'What do Black Lancer Catfish eat?',
        answer:
          'Black Lancers are carnivores that accept frozen bloodworms, brine shrimp, chopped prawns, and sinking pellets. Feed in the evening when the fish becomes active. Target feeding with a turkey baster ensures the food reaches the catfish without being intercepted by daytime-active tankmates.',
      },
      {
        question: 'Are Black Lancer Catfish nocturnal?',
        answer:
          'Yes, Black Lancer Catfish are primarily nocturnal. They spend the majority of the day hidden in caves or under driftwood and become active after lights-out. Installing moonlight LEDs allows keepers to observe their fascinating nighttime foraging behavior without causing stress.',
      },
      {
        question: 'How long does a Black Lancer Catfish live?',
        answer:
          'Black Lancer Catfish live 10 to 15 years with proper care. Maintaining stable water parameters, providing a stress-free environment with adequate hiding spots, and feeding a varied carnivorous diet are the key factors in achieving a full lifespan.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'bumblebee-catfish', 'marble-achara-catfish'],
    ratingAverage: 4.5,
    reviewCount: 7,
  },

  // ──────────────────────────────────────────────
  // Grass Cutter Catfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Grass Cutter Catfish',
    scientificName: 'Prochilodus lineatus',
    slug: 'grass-cutter-catfish',
    category: 'catfish',
    sku: 'TF-CAT-007',
    priceUSD: 65,
    images: [
      {
        url: '/images/products/grass-cutter-catfish-hero.jpg',
        alt: 'Grass Cutter Catfish (Prochilodus lineatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Grass Cutter Catfish is a distinctive and often underappreciated South American species that brings a unique ecological niche to large freshwater aquariums. Prochilodus lineatus, sometimes called the Flannel-Mouth or Streaked Prochilodus, is native to the Rio de la Plata basin and surrounding river systems, where it forms massive migratory schools that play a critical role in riparian ecosystems. Unlike the vast majority of catfish offered in the predatory-fish hobby, the Grass Cutter is primarily an herbivore and detritivore — a biological lawnmower that grazes algae, biofilm, and decaying plant matter from submerged surfaces with its specialized sucker-like mouth.

At a maximum size of approximately 31 inches, the Grass Cutter is a substantial fish that demands a 100-gallon or larger aquarium. Its body is robust and laterally compressed, with silvery flanks marked by faint horizontal striping and fins edged in red or orange — subtle coloration that becomes increasingly attractive as the fish matures. The Grass Cutter is an active, open-water swimmer that appreciates ample horizontal swimming space and moderate to strong water flow that mimics its native riverine habitats.

What makes the Grass Cutter particularly valuable in a mixed-species setup is its dietary role. This fish is a tireless grazer that consumes algae and biofilm from every surface in the aquarium — glass, rocks, driftwood, and equipment alike. While it should not be relied upon as a sole algae-control strategy, a Grass Cutter significantly reduces organic buildup and contributes to overall tank cleanliness. In our facility, we feed a varied diet of blanched vegetables (zucchini, spinach, peas), spirulina-based pellets, algae wafers, and occasional frozen foods. The species accepts a wide range of prepared foods and is easy to feed in captivity.

Water parameters are undemanding: 72 to 82 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. The Grass Cutter is exceptionally hardy and adapts quickly to a range of aquarium conditions. Filtration should be adequate for the tank volume with weekly water changes of 20 to 30 percent. The species tolerates a broad temperature range and is less sensitive to minor parameter fluctuations than many tropical species.

Temperamentally, the Grass Cutter is one of the most peaceful large fish available. It coexists readily with virtually any tankmate it cannot eat — and since it is not predatory, that includes most community species. It is an excellent companion for large cichlids, Arowana, catfish, and other species in mixed predator-community setups. The Grass Cutter adds movement, visual interest, and practical utility to any large aquarium.

One important consideration is that Prochilodus lineatus is a powerful jumper, particularly when startled. A well-fitted, secure lid is essential. In the wild, these fish are known for their spectacular leaping behavior during upstream migrations, and this instinct persists in captivity. With proper precautions and a lifespan of 10 to 15 years, the Grass Cutter Catfish is a rewarding and functional addition to any large freshwater system.`,
    seoDescription:
      'Grass Cutter Catfish for sale — peaceful South American herbivore and algae grazer. Live arrival guaranteed, overnight shipping. From $65 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 100,
    maxSizeInches: 31,
    origin: 'Río de la Plata, South America',
    diet: 'Herbivore/Omnivore',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'How big does a Grass Cutter Catfish get?',
        answer:
          'Grass Cutter Catfish reach approximately 31 inches (80 cm) in captivity. They are robust, laterally compressed fish that require ample swimming space. Most growth occurs within the first three years, with the fish reaching near-adult size by age four under optimal conditions.',
      },
      {
        question: 'What do Grass Cutter Catfish eat?',
        answer:
          'Grass Cutters are primarily herbivores and detritivores that graze on algae, biofilm, and decaying plant matter. In captivity, feed blanched vegetables like zucchini and spinach, spirulina pellets, algae wafers, and occasional frozen foods. They accept a wide variety of prepared foods and are easy to feed.',
      },
      {
        question: 'Are Grass Cutter Catfish good algae eaters?',
        answer:
          'Yes, Grass Cutters are excellent algae grazers that continuously clean surfaces in the aquarium. While they should not be the sole algae-control strategy, they significantly reduce organic buildup on glass, rocks, and driftwood. Their grazing behavior is one of the primary reasons keepers value this species.',
      },
      {
        question: 'Can Grass Cutter Catfish live with other fish?',
        answer:
          'The Grass Cutter is one of the most peaceful large fish available and coexists well with virtually all tankmates. It is not predatory and works excellently in mixed community setups alongside cichlids, Arowana, catfish, and other large species. Its gentle temperament makes it a versatile community member.',
      },
      {
        question: 'Do Grass Cutter Catfish jump?',
        answer:
          'Yes, Grass Cutters are powerful jumpers, especially when startled. A secure, well-fitted lid is absolutely essential. In the wild, Prochilodus lineatus is known for spectacular leaping during upstream migrations, and this behavior persists in captivity. Ensure there are no gaps in the tank cover.',
      },
    ],
    relatedSlugs: ['red-tail-catfish', 'bumblebee-catfish', 'black-lancer-catfish'],
    ratingAverage: 4.3,
    reviewCount: 10,
  },

  // ──────────────────────────────────────────────
  // Starry Night Cichlid
  // ──────────────────────────────────────────────
  {
    commonName: 'Starry Night Cichlid',
    scientificName: 'Paratilapia polleni',
    slug: 'starry-night-cichlid',
    category: 'cichlid',
    sku: 'TF-CIC-002',
    priceUSD: 100,
    images: [
      {
        url: '/images/products/starry-night-cichlid-hero.jpg',
        alt: 'Starry Night Cichlid (Paratilapia polleni) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Starry Night Cichlid is one of the most visually arresting freshwater fish on Earth — a jet-black cichlid scattered with hundreds of brilliant gold or white spots that evoke a clear night sky and have earned it the common name that requires no further explanation. Paratilapia polleni is endemic to Madagascar, one of the most biologically unique islands on the planet, and this geographical isolation has produced a fish that looks and behaves unlike any other cichlid in the hobby. At The Fish Collection, we source our Starry Night Cichlids from captive breeding programs that support conservation efforts for this increasingly threatened species.

The visual impact of a mature Starry Night Cichlid is extraordinary. Juveniles begin as relatively plain silver-grey fish with only hints of spotting, but as they mature, the body darkens to an intense black and the spots emerge in ever-increasing density and brilliance. A fully mature male in breeding condition is one of the most stunning sights in freshwater fishkeeping — the contrast between the coal-black body and the constellation of luminous spots creates an effect that photographs simply cannot capture. This transformation, which unfolds over two to three years, is one of the most rewarding developmental arcs in the hobby.

Adults reach approximately 12 inches in captivity, requiring a 75-gallon or larger aquarium. The Starry Night Cichlid is an active, intelligent fish that establishes and defends territory with considerable vigor. Like many Malagasy cichlids, it is aggressive and is best housed as a single specimen or a confirmed pair in a dedicated setup. Tankmates must be chosen carefully — robust, similarly sized fish that can hold their own are essential. Suitable companions include large catfish, other aggressive cichlids of similar size, and armored species.

Feeding is uncomplicated. The Starry Night Cichlid is a carnivore that thrives on a diet of high-quality cichlid pellets, frozen shrimp, bloodworms, and occasional live foods. Feed once or twice daily, offering only what the fish can consume in a few minutes. Color-enhancing foods with astaxanthin and spirulina can help intensify the spotting pattern and maintain the deep black body coloration.

Water parameters should reflect tropical freshwater conditions: 72 to 81 degrees Fahrenheit, pH of 7.0 to 8.0, and moderate hardness. The Starry Night Cichlid is reasonably adaptable but performs best in clean, well-oxygenated water with efficient filtration. Weekly water changes of 25 to 30 percent are standard. The aquarium should include rock formations and driftwood to create territorial boundaries and visual barriers, reducing aggression in community settings.

Beyond its beauty, the Starry Night Cichlid carries conservation significance. Paratilapia polleni faces habitat loss and competition from introduced species in its native Madagascar. Keeping and breeding this species in captivity contributes to the genetic insurance pool that may one day be critical for species survival. With a lifespan of 10 to 15 years, the Starry Night Cichlid is a visually magnificent and ecologically important addition to any advanced keeper's collection.`,
    seoDescription:
      'Starry Night Cichlid for sale — jet-black Madagascar cichlid with gold constellation spots. Live arrival guaranteed, overnight shipping. From $100 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 12,
    origin: 'Madagascar',
    diet: 'Carnivore',
    temperament: 'Aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 81,
      phMin: 7.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How big does a Starry Night Cichlid get?',
        answer:
          'Starry Night Cichlids reach approximately 12 inches (30 cm) in captivity, with males typically larger than females. The fish undergoes a dramatic transformation from a plain silver-grey juvenile to a jet-black adult covered in brilliant spots — a process that takes two to three years.',
      },
      {
        question: 'Are Starry Night Cichlids aggressive?',
        answer:
          'Yes, Starry Night Cichlids are aggressive and territorial, especially during breeding. They are best kept as single specimens or confirmed pairs. Tankmates must be robust, similarly sized fish capable of withstanding territorial aggression. A 75-gallon or larger tank with visual barriers helps manage aggression.',
      },
      {
        question: 'What do Starry Night Cichlids eat?',
        answer:
          'Starry Night Cichlids are carnivores that thrive on high-quality cichlid pellets, frozen shrimp, bloodworms, and occasional live foods. Color-enhancing foods help maintain the deep black body and intensify the bright spotting pattern. Feed once or twice daily in moderate amounts.',
      },
      {
        question: 'Are Starry Night Cichlids endangered?',
        answer:
          'Paratilapia polleni faces increasing pressure from habitat loss and invasive species in its native Madagascar. While not yet critically endangered, wild populations are declining. Captive breeding contributes to genetic conservation and reduces pressure on wild stocks.',
      },
      {
        question: 'How long does a Starry Night Cichlid live?',
        answer:
          'With proper care, Starry Night Cichlids live 10 to 15 years in captivity. Longevity depends on water quality, diet variety, and a stress-free environment with adequate territory. Their long lifespan allows keepers to enjoy the full development of their spectacular coloration.',
      },
    ],
    relatedSlugs: ['flowerhorn-cichlid', 'dovii-cichlid', 'macaw-cichlid'],
    ratingAverage: 4.6,
    reviewCount: 12,
  },

  // ──────────────────────────────────────────────
  // Dovii Cichlid
  // ──────────────────────────────────────────────
  {
    commonName: 'Dovii Cichlid',
    scientificName: 'Parachromis dovii',
    slug: 'dovii-cichlid',
    category: 'cichlid',
    sku: 'TF-CIC-003',
    priceUSD: 80,
    images: [
      {
        url: '/images/products/dovii-cichlid-hero.jpg',
        alt: 'Dovii Cichlid (Parachromis dovii) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Dovii Cichlid is widely regarded as the most aggressive freshwater fish in the aquarium hobby — a title that Parachromis dovii has earned through sheer, unrelenting territorial dominance that few other species can match. Known colloquially as the Wolf Cichlid, this Central American predator combines a powerful, heavily muscled body with a temperament so ferocious that experienced keepers sometimes describe it as the fish equivalent of keeping a wolf in your living room. At The Fish Collection, we sell Dovii Cichlids exclusively to advanced keepers who understand and respect the level of aggression this species brings to any aquarium it inhabits.

The Dovii's appearance is as imposing as its reputation. Males reach approximately 28 inches in captivity — making this one of the largest cichlids available — with a thick, muscular body, prominent nuchal hump, and a jaw packed with conical teeth designed for seizing and crushing prey. Coloration in males is a striking golden-green with blue-black spotting and an iridescent sheen that intensifies during territorial displays. Females are smaller, reaching around 18 inches, with a predominantly yellow body marked with black lateral banding. Both sexes are genuinely beautiful fish that command attention from across a room.

A 150-gallon aquarium is the absolute minimum for a single Dovii Cichlid, and this recommendation assumes a solo specimen. Attempting to keep a Dovii in a community setup requires a minimum of 300 gallons and an acceptance that injuries and fatalities among tankmates are likely. This is not hyperbole — Dovii Cichlids routinely kill tankmates that other aggressive species would merely chase. Pairing Dovii for breeding is particularly hazardous, as males frequently attack and kill unreceptive females. Many experienced Dovii breeders use dividers to protect the female until spawning behavior is confirmed.

Diet is straightforward: the Dovii is a voracious carnivore that accepts virtually any protein-based food. High-quality cichlid pellets form the staple, supplemented with frozen shrimp, silversides, smelt, and occasional live foods. Feed adults once daily, offering what can be consumed in a few minutes. The Dovii's feeding response is explosive and entertaining — one of the many behaviors that endears this species to keepers despite its challenging temperament.

Water parameters are forgiving: 75 to 86 degrees Fahrenheit, pH of 7.0 to 8.0, and moderate to hard water. Dovii Cichlids are extremely hardy and tolerate a wide range of conditions. Robust filtration is essential given the species' large size and heavy feeding, with weekly water changes of 30 to 40 percent maintaining optimal conditions.

The Dovii Cichlid is not for everyone. It is a specialist fish for keepers who specifically seek the challenge and excitement of maintaining one of the most dominant freshwater predators on Earth. With a lifespan of 15 to 20 years, it is a long-term commitment that rewards dedicated keepers with one of the most personality-rich and visually impressive cichlid experiences available.`,
    seoDescription:
      'Dovii Cichlid for sale — the most aggressive freshwater cichlid, also called Wolf Cichlid. Live arrival guaranteed, overnight shipping. From $80 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 150,
    maxSizeInches: 28,
    origin: 'Central America',
    diet: 'Carnivore',
    temperament: 'Extremely aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 86,
      phMin: 7.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How big does a Dovii Cichlid get?',
        answer:
          'Male Dovii Cichlids reach approximately 28 inches (72 cm) in captivity, making them one of the largest cichlid species available. Females are smaller, typically reaching 18 inches. Growth is rapid during the first two years, with males developing a prominent nuchal hump and intensifying coloration as they mature.',
      },
      {
        question: 'Why are Dovii Cichlids so aggressive?',
        answer:
          'Dovii Cichlids are apex predators in their native Central American rivers, where extreme territorial aggression is a survival advantage. In captivity, this manifests as relentless dominance over tankmates — Dovii routinely injure or kill fish that other aggressive species would merely chase. This behavior is hardwired and cannot be trained out.',
      },
      {
        question: 'What tank size does a Dovii Cichlid need?',
        answer:
          'A 150-gallon aquarium is the minimum for a single Dovii Cichlid. Community setups require 300 gallons or more, with the understanding that tankmate injuries are likely. Breeding pairs need dividers to protect the female until spawning behavior is confirmed, as males frequently attack unreceptive females.',
      },
      {
        question: 'Can Dovii Cichlids live with other fish?',
        answer:
          'Technically yes, but with extreme caution. Only the most robust, similarly sized species have a chance of surviving alongside a Dovii — large Arowana, Gar, and other equally aggressive cichlids in 300-gallon-plus systems. Many experienced keepers maintain Dovii as solo specimens, which is the safest approach.',
      },
      {
        question: 'How long does a Dovii Cichlid live?',
        answer:
          'Dovii Cichlids live 15 to 20 years with proper care. Their longevity, combined with their extreme aggression and large adult size, makes them a serious long-term commitment. Keepers should plan for decades of housing and care before acquiring this species.',
      },
    ],
    relatedSlugs: ['flowerhorn-cichlid', 'starry-night-cichlid', 'macaw-cichlid'],
    speciesGuideSlug: 'flowerhorn-cichlid',
    ratingAverage: 4.5,
    reviewCount: 16,
  },

  // ──────────────────────────────────────────────
  // Blue Zaire Frontosa
  // ──────────────────────────────────────────────
  {
    commonName: 'Blue Zaire Frontosa',
    scientificName: 'Cyphotilapia frontosa',
    slug: 'blue-zaire-frontosa',
    category: 'cichlid',
    sku: 'TF-CIC-004',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/blue-zaire-frontosa-hero.jpg',
        alt: 'Blue Zaire Frontosa (Cyphotilapia frontosa) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Blue Zaire Frontosa is the crown jewel of Lake Tanganyika cichlids — a commanding fish with bold black-and-white vertical banding overlaid with an intense blue sheen that has made it one of the most sought-after African cichlids in the world. Cyphotilapia frontosa from the Zaire (Kapampa) collection point is considered the most desirable geographic variant due to the depth of blue coloration that permeates the entire body, fins, and the distinctive nuchal hump that develops in mature males. At The Fish Collection, our Blue Zaire Frontosas are sourced from established captive-breeding programs that maintain the pure Zaire lineage prized by collectors worldwide.

What distinguishes the Blue Zaire from other Frontosa variants is the intensity and coverage of blue pigmentation. While all Cyphotilapia frontosa display the characteristic black-and-white banding, the Zaire morph layers a rich cobalt-to-powder blue wash across the white bands and into the fins — creating a fish that appears to glow with an inner luminescence under proper lighting. Males develop a prominent cranial hump that increases in size with age, reaching impressive proportions in dominant specimens. This combination of bold banding, vivid blue, and the imposing hump creates a fish that commands attention in any aquarium.

Adults reach approximately 14 inches in captivity, requiring a 150-gallon or larger aquarium. Frontosas are deep-water cichlids in the wild, inhabiting the rocky shelves and sandy slopes of Lake Tanganyika at depths of 30 to 50 meters. This deep-water origin translates into specific aquarium requirements: subdued lighting, stable water chemistry, and a temperature range of 75 to 81 degrees Fahrenheit. The tank should feature a rocky aquascape with caves and overhangs that allow the Frontosa to retreat and establish territory as it would in its native habitat.

Water chemistry is the most critical aspect of Frontosa husbandry. Lake Tanganyika is one of the most alkaline and mineral-rich freshwater bodies on Earth, and Frontosas require conditions that reflect this: pH of 7.8 to 9.0, hard water with high mineral content, and exceptional stability. Parameter swings are more dangerous than slightly imperfect numbers. Invest in a quality buffering substrate or use cichlid-specific mineral supplements to maintain the alkaline conditions Frontosas demand.

Diet should be protein-rich and varied. In the wild, Frontosas are predators that ambush sleeping fish in the pre-dawn hours — a fascinating behavior that has been observed in aquarium settings as well. Feed high-quality cichlid pellets, frozen krill, shrimp, and silversides. Spirulina-enriched foods help maintain the blue coloration. Feed once or twice daily in moderate amounts, avoiding overfeeding which leads to bloating — a condition Frontosas are particularly susceptible to.

Temperamentally, the Blue Zaire Frontosa is semi-aggressive and relatively slow-moving compared to many cichlids. It does well in species-specific groups of one male and several females, or in Tanganyikan community setups with other robust species like Tropheus, larger Lamprologus, and Altolamprologus. With a lifespan of 15 to 25 years, the Blue Zaire Frontosa is a generational fish that grows more beautiful and valuable with each passing year.`,
    seoDescription:
      'Blue Zaire Frontosa for sale — the finest Lake Tanganyika cichlid with intense blue coloration. Live arrival guaranteed, overnight shipping. From $120 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 150,
    maxSizeInches: 14,
    origin: 'Lake Tanganyika',
    diet: 'Carnivore',
    temperament: 'Semi-aggressive',
    lifespan: '15-25 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 81,
      phMin: 7.8,
      phMax: 9.0,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How big does a Blue Zaire Frontosa get?',
        answer:
          'Blue Zaire Frontosas reach approximately 14 inches (35 cm) in captivity. Males are larger than females and develop a prominent cranial hump that continues to grow throughout their life. Full adult size is typically reached by age four to five years under proper conditions.',
      },
      {
        question: 'What tank size does a Blue Zaire Frontosa need?',
        answer:
          'A 150-gallon aquarium is the minimum for a group of Frontosas. These fish do best in species-specific groups of one male and three to five females. The tank should feature subdued lighting, a rocky aquascape with caves, and stable alkaline water chemistry that mirrors Lake Tanganyika conditions.',
      },
      {
        question: 'What water parameters do Frontosas need?',
        answer:
          'Frontosas require alkaline, hard water with a pH of 7.8 to 9.0, temperature of 75 to 81 degrees Fahrenheit, and high mineral content. Stability is more important than hitting exact numbers — parameter swings are the primary cause of stress and disease in Frontosa keeping. Use a buffering substrate or mineral supplements to maintain consistent alkalinity.',
      },
      {
        question: 'Are Blue Zaire Frontosas aggressive?',
        answer:
          'Frontosas are semi-aggressive and relatively slow-moving compared to many cichlids. They establish territory but are not the relentless aggressors that species like Dovii or Flowerhorn are. They do well in groups with one male and multiple females, or in Tanganyikan community setups with other robust species.',
      },
      {
        question: 'How long does a Blue Zaire Frontosa live?',
        answer:
          'Blue Zaire Frontosas live 15 to 25 years with proper care, making them one of the longest-lived cichlids available. Their longevity means the fish you purchase today will be a centerpiece of your aquarium for potentially two decades. Males continue developing their hump and deepening in color throughout their lifespan.',
      },
    ],
    relatedSlugs: ['flowerhorn-cichlid', 'starry-night-cichlid', 'dovii-cichlid'],
    ratingAverage: 4.8,
    reviewCount: 14,
  },

  // ──────────────────────────────────────────────
  // Macaw Cichlid
  // ──────────────────────────────────────────────
  {
    commonName: 'Macaw Cichlid',
    scientificName: 'Crenicichla sp. (Peru)',
    slug: 'macaw-cichlid',
    category: 'cichlid',
    sku: 'TF-CIC-005',
    priceUSD: 180,
    images: [
      {
        url: '/images/products/macaw-cichlid-hero.jpg',
        alt: 'Macaw Cichlid (Crenicichla sp.) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Macaw Cichlid is one of the most visually spectacular pike cichlids in the freshwater hobby — a Peruvian gem that earns its common name from a riot of red, orange, yellow, and blue coloration that rivals the plumage of its avian namesake. Crenicichla sp. from Peru represents one of the most colorful expressions in the entire Crenicichla genus, a group that already includes some of the most vividly pigmented freshwater fish on Earth. At The Fish Collection, our Macaw Cichlids are sourced from trusted Peruvian exporters who specialize in rare pike cichlids and handle specimens with the care required to deliver them in peak color and condition.

The Macaw Cichlid's coloration is its defining feature and the reason collectors pay a premium for quality specimens. Mature males display a base of deep orange to red across the body, overlaid with iridescent blue and green markings on the face, gill plates, and dorsal region. The fins are typically edged in electric blue, and the overall effect — especially under warm, properly calibrated LED lighting — is genuinely breathtaking. Females are smaller and somewhat less intensely colored but still display the vivid orange and blue patterning that makes this species unmistakable.

Adults reach approximately 10 inches, making the Macaw Cichlid a manageable species that fits comfortably in a 75-gallon aquarium. This is a significant advantage over larger pike cichlids that require 150-gallon or larger systems. The tank should be structured with driftwood, rock formations, and caves that provide territorial boundaries and hiding spots. Pike cichlids are ambush predators that appreciate strategic sight-line breaks in their environment — an open, barren tank stresses them and can dull coloration.

Feeding is straightforward for a carnivorous pike cichlid. The Macaw Cichlid thrives on a diet of frozen bloodworms, mysis shrimp, krill, and high-quality sinking pellets. Live foods from quarantined sources can be offered as enrichment but are not essential for maintaining condition or color. Feed once or twice daily, offering small portions that the fish can consume within a few minutes. A well-fed Macaw Cichlid in clean water develops and maintains the intense coloration that makes it one of the most photographed freshwater fish in the hobby.

Water parameters should reflect soft, acidic to neutral Amazonian conditions: 75 to 82 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. Tannin-stained water from Indian almond leaves or driftwood is beneficial and seems to enhance coloration. Filtration should be efficient with moderate water flow — pike cichlids prefer gentle to moderate current rather than the strong flow favored by some riverine species.

Temperamentally, the Macaw Cichlid is aggressive and territorial, particularly toward conspecifics and similarly shaped fish. It is best kept as a single specimen or a confirmed pair in a dedicated setup. Compatible tankmates include robust species of different body shapes — catfish, larger tetras, and bottom-dwelling species tend to fare better than other elongated, mid-water fish. With a lifespan of 8 to 12 years, the Macaw Cichlid offers years of stunning color and engaging predatory behavior for advanced keepers who appreciate the pike cichlid experience.`,
    seoDescription:
      'Macaw Cichlid for sale — the most colorful pike cichlid, with vivid red, orange, and blue. Live arrival guaranteed, overnight shipping. From $180 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 10,
    origin: 'Peru',
    diet: 'Carnivore',
    temperament: 'Aggressive',
    lifespan: '8-12 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How big does a Macaw Cichlid get?',
        answer:
          'Macaw Cichlids reach approximately 10 inches (25 cm) in captivity, with males typically slightly larger than females. This manageable size allows them to be housed in a 75-gallon aquarium — smaller than many other pike cichlid species require.',
      },
      {
        question: 'Why are Macaw Cichlids so colorful?',
        answer:
          'The Macaw Cichlid\'s extraordinary coloration is a combination of genetics, diet, and water quality. The vivid reds, oranges, and blues are expressed through both structural coloration (iridescent scales) and pigment-based coloration. High-quality foods, clean water, and tannin-stained conditions seem to intensify color expression.',
      },
      {
        question: 'What tank size does a Macaw Cichlid need?',
        answer:
          'A 75-gallon aquarium is the minimum for a single Macaw Cichlid or a pair. The tank should include driftwood, rock formations, and caves for territory and ambush points. Pike cichlids are ambush predators that perform best in well-structured environments rather than open, barren tanks.',
      },
      {
        question: 'Are Macaw Cichlids aggressive?',
        answer:
          'Yes, Macaw Cichlids are aggressive and territorial, especially toward conspecifics and similarly shaped fish. They are best kept as single specimens or confirmed pairs. Compatible tankmates include robust species with different body shapes — catfish and bottom-dwellers tend to fare better than other elongated mid-water fish.',
      },
      {
        question: 'How long does a Macaw Cichlid live?',
        answer:
          'With proper care, Macaw Cichlids live 8 to 12 years in captivity. Longevity depends on water quality, a varied diet, and a well-structured tank that allows the fish to express natural territorial and hunting behaviors.',
      },
    ],
    relatedSlugs: ['flowerhorn-cichlid', 'starry-night-cichlid', 'dovii-cichlid'],
    ratingAverage: 4.7,
    reviewCount: 10,
  },

  // ──────────────────────────────────────────────
  // Turquoise Severum Cichlid
  // ──────────────────────────────────────────────
  {
    commonName: 'Turquoise Severum Cichlid',
    scientificName: 'Heros efasciatus',
    slug: 'turquoise-severum-cichlid',
    category: 'cichlid',
    sku: 'TF-CIC-006',
    priceUSD: 50,
    images: [
      {
        url: '/images/products/turquoise-severum-cichlid-hero.jpg',
        alt: 'Turquoise Severum Cichlid (Heros efasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Turquoise Severum Cichlid is one of the most attractive and approachable large cichlids in the freshwater hobby — a South American beauty whose iridescent turquoise-green body has earned it a dedicated following among both experienced cichlid keepers and intermediate hobbyists looking to step up from community fish to something more substantial and personality-rich. Heros efasciatus in its turquoise form displays a mesmerizing interplay of green, blue, and gold tones that shift with the angle of light and the fish's mood, creating a living color display that rivals any saltwater species.

What makes the Turquoise Severum particularly appealing is its temperament. Unlike many large cichlids that require dedicated, single-species setups due to extreme aggression, the Severum occupies a sweet spot: it is large enough to hold its own with medium-aggressive tankmates, yet peaceful enough to coexist with a surprisingly wide range of community species. A well-socialized Turquoise Severum will establish territory without terrorizing its tankmates, making it one of the few large cichlids that works genuinely well in a mixed-species display.

Adults reach approximately 10 inches, requiring a 55-gallon or larger aquarium for a single specimen. The body is round and laterally compressed — a body plan reminiscent of a freshwater discus, which is why Severums are sometimes called the "poor man's discus." This comparison, while common, undersells the Severum considerably. These are beautiful fish in their own right, with a color palette and personality that many keepers prefer to actual discus, at a fraction of the price and with far more forgiving husbandry requirements.

Feeding the Turquoise Severum is easy. This is a true omnivore that accepts virtually any prepared food: cichlid pellets, spirulina flakes, frozen bloodworms, brine shrimp, blanched vegetables, and even some fresh fruits. This dietary flexibility makes it one of the easiest large cichlids to maintain in captivity. Feed once or twice daily, offering a varied rotation that includes both protein and plant-based foods. Spirulina-enriched foods help maintain and intensify the turquoise coloration.

Water parameters are forgiving and span a wide range: 73 to 84 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. The Turquoise Severum adapts readily to most municipal water conditions, making it accessible to keepers who do not have access to reverse-osmosis or specialized water treatment systems. Standard filtration rated for the tank volume, combined with weekly water changes of 20 to 25 percent, maintains the conditions this species thrives in.

The Turquoise Severum is an excellent choice for keepers who want a centerpiece cichlid with real visual impact, genuine personality, and manageable care requirements. It is interactive, hardy, and strikingly beautiful — a combination that explains why Severums have remained one of the most popular large cichlids in the hobby for decades. With a lifespan of 10 to 15 years, it is a long-term companion that grows more beautiful and personable with age.`,
    seoDescription:
      'Turquoise Severum Cichlid for sale — iridescent green South American cichlid, ideal community fish. Live arrival guaranteed, overnight shipping. From $50 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 10,
    origin: 'Amazon Basin',
    diet: 'Omnivore',
    temperament: 'Peaceful to semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 84,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 7,
    faqs: [
      {
        question: 'How big does a Turquoise Severum Cichlid get?',
        answer:
          'Turquoise Severum Cichlids reach approximately 10 inches (25 cm) in captivity. They have a round, laterally compressed body shape that gives them a substantial visual presence. Most growth occurs in the first two years, with coloration continuing to intensify as the fish matures.',
      },
      {
        question: 'Are Turquoise Severum Cichlids aggressive?',
        answer:
          'Turquoise Severums are peaceful to semi-aggressive — they establish territory but generally coexist well with a wide range of tankmates. They are one of the few large cichlids that work genuinely well in mixed-species community setups, making them popular choices for keepers who want a centerpiece cichlid without extreme aggression.',
      },
      {
        question: 'What do Turquoise Severum Cichlids eat?',
        answer:
          'Turquoise Severums are true omnivores that accept virtually any prepared food: cichlid pellets, spirulina flakes, frozen bloodworms, brine shrimp, blanched vegetables, and even some fruits. This dietary flexibility makes them one of the easiest large cichlids to feed. Spirulina-enriched foods help intensify turquoise coloration.',
      },
      {
        question: 'Can Turquoise Severum Cichlids live with other fish?',
        answer:
          'Yes, Turquoise Severums are excellent community fish for medium to large setups. They coexist well with similarly sized cichlids, large tetras, catfish, and other robust community species. Avoid housing with very small fish that could be eaten or very aggressive species that would bully the Severum.',
      },
      {
        question: 'How long does a Turquoise Severum Cichlid live?',
        answer:
          'With proper care, Turquoise Severum Cichlids live 10 to 15 years in captivity. Their longevity, combined with approachable care requirements and stunning coloration, makes them one of the best long-term investments in the freshwater cichlid hobby.',
      },
    ],
    relatedSlugs: ['gold-severum-cichlid', 'flowerhorn-cichlid', 'starry-night-cichlid'],
    speciesGuideSlug: 'flowerhorn-cichlid',
    ratingAverage: 4.6,
    reviewCount: 19,
  },

  // ──────────────────────────────────────────────
  // Gold Severum Cichlid
  // ──────────────────────────────────────────────
  {
    commonName: 'Gold Severum Cichlid',
    scientificName: 'Heros efasciatus',
    slug: 'gold-severum-cichlid',
    category: 'cichlid',
    sku: 'TF-CIC-007',
    priceUSD: 40,
    images: [
      {
        url: '/images/products/gold-severum-cichlid-hero.jpg',
        alt: 'Gold Severum Cichlid (Heros efasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Gold Severum Cichlid is the warm-toned counterpart to the Turquoise Severum — a selectively bred color morph of Heros efasciatus that trades the iridescent green-blue palette for a rich, uniform golden-yellow body that practically radiates warmth under aquarium lighting. This is one of the most popular and widely recognized large cichlids in the freshwater hobby, and for good reason: the Gold Severum combines genuine beauty with an easygoing temperament and care requirements that make it accessible to intermediate keepers while remaining interesting enough to hold the attention of seasoned aquarists.

The Gold Severum's coloration is its signature feature. The body is a deep, saturated gold that covers the flanks, belly, and extends into the fins. In mature specimens, faint orange-red markings often appear on the face and gill plates, adding depth and warmth to the overall appearance. Under proper LED lighting, the scales reflect a subtle metallic sheen that elevates the fish from simply "yellow" to genuinely golden. This coloration is the result of decades of selective breeding that has stabilized the gold phenotype while maintaining the robust health and hardiness of the wild-type Severum.

Adults reach approximately 10 inches and require a 55-gallon or larger aquarium. Like its turquoise sibling, the Gold Severum has a round, discus-like body shape that gives it a substantial visual presence despite its moderate length. The species is an active, intelligent fish that interacts readily with its keeper — recognizing feeding times, responding to movement outside the tank, and displaying a range of color changes that reflect mood and social dynamics.

The Gold Severum's temperament is one of its greatest strengths. It is omnivorous, accepting a wide variety of prepared foods including cichlid pellets, spirulina flakes, frozen bloodworms, brine shrimp, blanched zucchini, and peas. This dietary flexibility simplifies feeding and ensures the fish receives complete nutrition without specialized or expensive food requirements. Feed once or twice daily, rotating between protein and plant-based offerings.

Water parameters are broad and forgiving: 73 to 84 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. The Gold Severum is one of the hardiest large cichlids available, tolerating a range of conditions that would stress more sensitive species. This adaptability makes it an excellent choice for keepers whose water supply does not naturally match the soft, acidic conditions many South American cichlids prefer. Standard filtration and weekly 20 to 25 percent water changes maintain optimal conditions.

In community settings, the Gold Severum is a model citizen. It is peaceful to mildly territorial, holding its own against medium-aggressive tankmates without initiating conflict. It coexists well with other Severums, large tetras, catfish, loaches, and other robust community species. A pair or small group of Gold Severums in a well-planted 75-gallon or larger tank creates one of the most visually striking and harmonious freshwater displays possible.

With a lifespan of 10 to 15 years, the Gold Severum Cichlid is a reliable, beautiful, and personality-rich addition to any freshwater aquarium. Its combination of accessibility, visual appeal, and genuine character has made it a hobby staple for decades — and its popularity shows no signs of waning.`,
    seoDescription:
      'Gold Severum Cichlid for sale — warm golden South American cichlid, hardy and community-friendly. Live arrival guaranteed, overnight shipping. From $40 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 10,
    origin: 'Amazon Basin',
    diet: 'Omnivore',
    temperament: 'Peaceful to semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 84,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 9,
    faqs: [
      {
        question: 'How big does a Gold Severum Cichlid get?',
        answer:
          'Gold Severum Cichlids reach approximately 10 inches (25 cm) in captivity. They have a round, laterally compressed body that gives them a discus-like appearance. Most growth occurs in the first two years, with the golden coloration deepening and intensifying as the fish matures.',
      },
      {
        question: 'What is the difference between Gold and Turquoise Severums?',
        answer:
          'Gold and Turquoise Severums are both color morphs of Heros efasciatus with identical care requirements and adult size. The Gold Severum displays a warm, uniform golden-yellow body, while the Turquoise Severum features iridescent green-blue tones. Both are selectively bred variants — the gold morph has been stabilized through decades of selective breeding.',
      },
      {
        question: 'Are Gold Severum Cichlids good community fish?',
        answer:
          'Gold Severums are excellent community fish for medium to large setups. They are peaceful to mildly territorial and coexist well with other Severums, large tetras, catfish, loaches, and other robust species. They are one of the few large cichlids that work genuinely well in mixed-species displays.',
      },
      {
        question: 'What do Gold Severum Cichlids eat?',
        answer:
          'Gold Severums are omnivores that accept virtually any prepared food: cichlid pellets, spirulina flakes, frozen bloodworms, brine shrimp, blanched zucchini, and peas. This dietary flexibility makes them among the easiest large cichlids to feed. Rotate between protein and plant-based foods for optimal nutrition.',
      },
      {
        question: 'How long does a Gold Severum Cichlid live?',
        answer:
          'Gold Severum Cichlids live 10 to 15 years with proper care. Their combination of longevity, hardiness, and approachable care requirements makes them one of the best long-term investments in the freshwater hobby. Consistent water quality and a varied diet are the keys to a full lifespan.',
      },
    ],
    relatedSlugs: ['turquoise-severum-cichlid', 'flowerhorn-cichlid', 'starry-night-cichlid'],
    speciesGuideSlug: 'flowerhorn-cichlid',
    ratingAverage: 4.5,
    reviewCount: 22,
  },

  // ──────────────────────────────────────────────
  // 47. Elephantnose Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Elephantnose Fish',
    scientificName: 'Gnathonemus petersii',
    slug: 'elephantnose-fish',
    category: 'goby',
    sku: 'TF-GOB-002',
    priceUSD: 35,
    images: [
      {
        url: '/images/products/elephantnose-fish-hero.jpg',
        alt: 'Elephantnose Fish (Gnathonemus petersii) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Elephantnose Fish is one of the most intellectually fascinating freshwater species available to aquarists, possessing a specialized electroreception organ that allows it to navigate, communicate, and hunt in complete darkness. Gnathonemus petersii belongs to the family Mormyridae, a group of weakly electric fish native to the murky, slow-moving rivers and floodplains of Central and West Africa. The elongated, trunk-like extension of its lower jaw — the feature that gives the fish its common name — is densely packed with electroreceptors that function like a biological radar system, detecting minute electrical fields generated by prey items buried in substrate.

At The Fish Collection, we source our Elephantnose Fish from established importers who work directly with collectors in the Niger and Congo river drainages. Each specimen is quarantined and transitioned onto frozen bloodworms and tubifex before being offered for sale. This is a critical step, as wild-caught individuals can be reluctant feeders if not properly acclimated.

Housing an Elephantnose Fish requires a thoughtful setup. A minimum 50-gallon aquarium with fine sand substrate is essential — coarse gravel can damage the sensitive proboscis. Dim lighting, dense planting, and plenty of hiding spots created from driftwood and caves replicate the shadowy environments this species prefers. They are nocturnal by nature and will spend most daylight hours tucked into a favored retreat. Water should be soft to moderately hard, with temperatures between 72 and 82 degrees Fahrenheit and a pH range of 6.0 to 7.5. Excellent filtration is mandatory, but flow should remain gentle.

Temperament is peaceful toward dissimilar species but can be territorial with conspecifics unless the tank is large enough to support multiple territories. Best kept singly or in groups of five or more to disperse aggression. Compatible tankmates include Congo Tetras, Corydoras, and other peaceful species that will not outcompete the Elephantnose for food. Feeding should occur after lights-out using sinking frozen or live foods — bloodworms, blackworms, and brine shrimp are readily accepted. This species rarely takes dry food, so a commitment to frozen and live feeding is necessary.

With a lifespan of 6 to 10 years and a maximum size around 9 inches, the Elephantnose Fish is a rewarding long-term resident for the advanced aquarist who values behavioral complexity over flashy coloration.`,
    seoDescription:
      'Elephantnose Fish for sale — electroreceptive African oddball. Gnathonemus petersii, live arrival guaranteed. From $35 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 50,
    maxSizeInches: 9,
    origin: 'Central and West Africa',
    diet: 'Carnivore — live and frozen worms, bloodworms, tubifex',
    temperament: 'Peaceful but territorial with conspecifics',
    lifespan: '6-10 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'How does the Elephantnose Fish use electricity?',
        answer:
          'The Elephantnose Fish generates a weak electric field from a specialized organ near its tail. Electroreceptors concentrated in its trunk-like proboscis detect distortions in this field caused by nearby objects, prey, or other fish. This electrolocation system allows the fish to navigate, hunt, and communicate in pitch-dark or turbid water where vision is useless — a biological sonar more precise than most man-made instruments.',
      },
      {
        question: 'What do Elephantnose Fish eat?',
        answer:
          'Elephantnose Fish are carnivores that strongly prefer live and frozen foods. Bloodworms, blackworms, tubifex worms, and brine shrimp form the staple diet. They use their elongated proboscis to probe substrate for buried larvae. Most specimens refuse flake and pellet foods entirely, so a reliable supply of frozen or live invertebrates is essential. Feed after lights-out when the fish is most active.',
      },
      {
        question: 'Can you keep multiple Elephantnose Fish together?',
        answer:
          'Keeping multiple Elephantnose Fish is possible but requires careful planning. In pairs or small groups of two to three, they often become territorial and aggressive toward each other. Groups of five or more in a large tank (100 gallons or above) tend to disperse aggression effectively. Provide multiple hiding spots so each fish can establish its own territory without constant confrontation.',
      },
      {
        question: 'What tank setup does an Elephantnose Fish need?',
        answer:
          'An Elephantnose Fish needs a minimum 50-gallon tank with fine sand substrate to protect its sensitive proboscis. Dim lighting is essential — use floating plants or tannin-stained water to reduce brightness. Provide abundant hiding spots with driftwood, caves, and dense plants. Filtration should be excellent but with gentle flow. These are shy, nocturnal fish that stress easily in bright, open, or high-traffic environments.',
      },
    ],
    relatedSlugs: ['dragon-goby', 'black-ghost-knife-fish', 'fire-eel'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 14,
  },

  // ──────────────────────────────────────────────
  // 48. Electric Eel
  // ──────────────────────────────────────────────
  {
    commonName: 'Electric Eel',
    scientificName: 'Electrophorus electricus',
    slug: 'electric-eel',
    category: 'eel',
    sku: 'TF-EEL-003',
    priceUSD: 250,
    images: [
      {
        url: '/images/products/electric-eel-hero.jpg',
        alt: 'Electric Eel (Electrophorus electricus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Electric Eel is arguably the most extraordinary freshwater fish on Earth — a living battery capable of generating discharges exceeding 600 volts, enough to incapacitate prey, deter predators, and navigate the lightless depths of its Amazonian habitat through electrolocation. Despite its common name, Electrophorus electricus is not a true eel but a knifefish, more closely related to catfish and carp than to marine eels. At The Fish Collection, we offer this legendary species exclusively to specialist keepers with the infrastructure and expertise to house what is essentially a biological power plant.

The Electric Eel's body is cylindrical and elongated, reaching up to 8 feet in the wild, though captive specimens typically max out around 6 to 7 feet. Coloration is a deep olive-grey to dark brown, occasionally with orange or yellow mottling on the throat in mature individuals. Three specialized electric organs — the Main organ, Hunter's organ, and Sachs' organ — comprise roughly 80 percent of the body and generate both high-voltage hunting/defense discharges and low-voltage pulses for navigation and communication.

Housing an Electric Eel demands a minimum 300-gallon aquarium, though 500 gallons or larger is strongly preferred for an adult. The tank must be constructed with non-conductive silicone seals and equipped with a secure, heavy lid — Electric Eels are obligate air breathers that surface regularly and can escape through surprisingly small openings. Substrate should be fine sand or bare bottom for easy cleaning. Decorations must be smooth with no sharp edges, as the fish's scaleless skin is vulnerable to abrasion. Water temperature should be maintained between 73 and 82 degrees Fahrenheit with a pH of 6.0 to 8.0.

Feeding is straightforward — Electric Eels are voracious carnivores that accept earthworms, fish fillets, shrimp, and eventually high-quality pellets. Juveniles eat daily; adults can be fed two to three times weekly. Always use long rubber-handled tongs for feeding — direct hand contact with the water during feeding is dangerous and strictly prohibited.

This species is sold only to buyers who can demonstrate appropriate housing and acknowledge the inherent risks of keeping a fish capable of delivering a potentially lethal electrical shock. A liability waiver and housing verification are required before shipment.`,
    seoDescription:
      'Electric Eel for sale — the legendary 600-volt Amazonian predator. Specialist housing required. Live arrival guaranteed. From $250 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 300,
    maxSizeInches: 98,
    origin: 'Amazon Basin, South America',
    diet: 'Carnivore — fish, earthworms, shrimp',
    temperament: 'Predatory — must be housed alone',
    lifespan: '15-22 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 82,
      phMin: 6.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'How much voltage can an Electric Eel produce?',
        answer:
          'An adult Electric Eel can generate discharges exceeding 860 volts at up to 1 ampere, though the typical hunting discharge is around 600 volts. The shock is delivered in rapid pulses lasting a few milliseconds each. While rarely fatal to healthy adult humans, the discharge can cause involuntary muscle contractions, falls, and drowning in water. Always use insulated tools when working in the tank and never submerge bare hands.',
      },
      {
        question: 'What size tank does an Electric Eel need?',
        answer:
          'A minimum 300-gallon aquarium is required, with 500 gallons or larger strongly recommended for an adult that can reach 6 to 8 feet. The tank should be long and wide rather than tall — at least 8 feet in length. A secure, weighted lid is mandatory, as Electric Eels are obligate air breathers that must access the surface. The tank must use non-conductive construction where possible.',
      },
      {
        question: 'Is it legal to keep an Electric Eel?',
        answer:
          'Electric Eels are legal to keep in most US states, though some municipalities and states have restrictions on dangerous exotic animals. Check your local and state regulations before purchasing. The Fish Collection requires buyers to sign a liability waiver and provide documentation of suitable housing before we ship. We do not sell Electric Eels to buyers in jurisdictions where ownership is prohibited.',
      },
      {
        question: 'Can Electric Eels be kept with other fish?',
        answer:
          'No. Electric Eels must be housed alone. Their electrical discharges will stun or kill any tankmates, and they are predatory fish that will consume anything they can overpower. Even large, robust fish cannot safely coexist with an Electric Eel. Some keepers have had short-term success with fast-moving dither fish, but this is risky and not recommended.',
      },
    ],
    relatedSlugs: ['fire-eel', 'snowflake-moray-eel', 'black-ghost-knife-fish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.8,
    reviewCount: 4,
  },

  // ──────────────────────────────────────────────
  // 49. Vampire Fish (Payara)
  // ──────────────────────────────────────────────
  {
    commonName: 'Vampire Fish (Payara)',
    scientificName: 'Hydrolycus scomberoides',
    slug: 'vampire-fish-payara',
    category: 'piranha',
    sku: 'TF-PIR-002',
    priceUSD: 200,
    images: [
      {
        url: '/images/products/vampire-fish-payara-hero.jpg',
        alt: 'Vampire Fish Payara (Hydrolycus scomberoides) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Vampire Fish, known scientifically as Hydrolycus scomberoides and colloquially as the Payara, is the apex predator of the Orinoco and Amazon river systems — a streamlined, silver torpedo armed with two enormous lower fangs that can exceed two inches in length and fit into specialized sockets in the upper jaw when the mouth closes. These fangs are used to impale prey fish in a single explosive strike, making the Payara one of the most efficient hunters in all of freshwater ichthyology. At The Fish Collection, we offer this extraordinary species to specialist aquarists who understand that keeping a Payara is less like traditional fishkeeping and more like maintaining a large aquatic predator.

In the wild, Payara inhabit fast-flowing, well-oxygenated rivers and rapids, reaching lengths of 39 inches or more. Captive specimens typically reach 24 to 30 inches in home aquariums, though even at this size they require immense space. A minimum 300-gallon aquarium is mandatory, and we strongly recommend 500 gallons or larger with powerful water circulation that replicates the high-flow environments the species evolved in. Strong powerheads or closed-loop systems that generate substantial current are essential for keeping a Payara healthy and active.

Water parameters should mirror the soft, acidic conditions of the Orinoco Basin: temperature between 72 and 82 degrees Fahrenheit, pH of 5.5 to 7.0, and very low hardness. Pristine water quality is non-negotiable — Payara are sensitive to dissolved waste and require oversized filtration systems capable of handling the heavy bioload of a large carnivorous fish fed primarily on whole prey.

Diet consists almost exclusively of live fish in the wild. In captivity, Payara can be transitioned to accept fresh fish fillets, whole silversides, and large shrimp, but many specimens stubbornly refuse non-living food. A reliable source of appropriately sized feeder fish from quarantined stock is often necessary, at least during the acclimation period. Feed every two to three days for adults.

The Payara is a notoriously challenging captive — their high-speed swimming and tendency to collide with tank walls during startled flight make them prone to jaw injuries and scale damage. Rounded tank corners, minimal external disturbance, and dimmed lighting all help reduce stress. This is a fish for the dedicated specialist who views the challenge as part of the reward.`,
    seoDescription:
      'Vampire Fish Payara for sale — apex Amazonian predator with iconic fangs. Specialist care required. Live arrival guaranteed. From $200 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 300,
    maxSizeInches: 39,
    origin: 'Orinoco and Amazon Basins, South America',
    diet: 'Carnivore — live fish, fish fillets, silversides',
    temperament: 'Apex predator — aggressive',
    lifespan: '6-12 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 5.5,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'How big does a Vampire Fish Payara get?',
        answer:
          'In the wild, Payara reach up to 39 inches and over 35 pounds. In captivity, most specimens reach 24 to 30 inches, limited by tank size and diet. Growth is rapid in the first two years — expect 8 to 12 inches of growth annually under optimal conditions. Their elongated, muscular body and enormous fangs make them one of the most visually impressive freshwater predators available.',
      },
      {
        question: 'What do Payara eat in captivity?',
        answer:
          'Payara are strict carnivores that naturally feed on live fish. In captivity, many specimens can be weaned onto dead whole fish, fish fillets, and large shrimp, though this transition requires patience and may take weeks. Some individuals never accept non-living food. A quarantined feeder fish supply is often necessary. Feed adults every two to three days with prey roughly one-quarter to one-third of the Payara body length.',
      },
      {
        question: 'Are Payara hard to keep in aquariums?',
        answer:
          'Yes — Payara are among the most challenging freshwater fish to maintain. They require enormous tanks with powerful water flow, pristine water quality, and live or fresh food. Their high-speed swimming makes them prone to impact injuries against tank walls, and they are sensitive to stress from noise, vibration, and sudden light changes. Success rates improve dramatically in tanks over 500 gallons with rounded corners and minimal disturbance.',
      },
      {
        question: 'Can Payara be kept with other fish?',
        answer:
          'Payara will eat anything they can fit in their mouth, which eliminates most tankmates. They can sometimes coexist with other large, robust species of similar size — large catfish, large cichlids, or other Payara — but aggression and predation are constant risks. Most specialist keepers maintain Payara as solitary specimens or with a single large pleco as a tank companion.',
      },
    ],
    relatedSlugs: ['piranha', 'red-bellied-piranha', 'wolf-fish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 5,
  },

  // ──────────────────────────────────────────────
  // 50. Freshwater Stingray
  // ──────────────────────────────────────────────
  {
    commonName: 'Freshwater Stingray (Motoro)',
    scientificName: 'Potamotrygon motoro',
    slug: 'freshwater-stingray',
    category: 'stingray',
    sku: 'TF-STI-003',
    priceUSD: 450,
    images: [
      {
        url: '/images/products/freshwater-stingray-hero.jpg',
        alt: 'Freshwater Stingray Motoro (Potamotrygon motoro) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Freshwater Stingray, specifically Potamotrygon motoro, is the most widely kept and arguably the most beautiful of all freshwater ray species — a living disc of tan, brown, and gold adorned with a mesmerizing pattern of orange-rimmed ocelli (eye-spots) that varies uniquely from individual to individual, making each specimen a one-of-a-kind living artwork. Native to the Amazon and Orinoco river basins, this species has adapted entirely to freshwater over millions of years, losing the salt-regulating physiology of its marine ancestors and developing a flattened body plan perfectly suited to the sandy river bottoms it inhabits.

At The Fish Collection, we source our Motoro Stingrays from reputable breeders and licensed collectors who handle these animals with the specialized care they demand. Every specimen we offer has been quarantined, dewormed, and confirmed feeding on a varied diet before listing. Potamotrygon motoro reaches a disc width of approximately 18 inches in captivity, with exceptional specimens exceeding this in large systems. The total body length including the tail can reach 30 inches or more.

Housing requirements are substantial. A minimum 300-gallon aquarium with a large footprint — wide and shallow rather than tall — is essential. The substrate must be fine, smooth sand that the ray can bury in, and the tank should be free of sharp decorations or rough surfaces that could damage the ray's delicate ventral skin. Powerful filtration rated for at least twice the tank volume is necessary, as stingrays are messy eaters that produce significant waste. Water temperature should be maintained between 75 and 82 degrees Fahrenheit, with a pH of 6.0 to 7.0 and very soft water.

The venomous caudal spine is a serious consideration. Potamotrygon motoro possesses a serrated, venom-coated barb on the tail that can inflict excruciating wounds requiring medical attention. Tank maintenance must always be performed with awareness of the ray's position, and keepers should never reach blindly into the aquarium. Long tools, careful observation, and deliberate movements are mandatory safety protocols.

Diet consists of meaty foods: earthworms, shrimp, mussels, fish fillets, and high-quality sinking pellets. Feed daily for juveniles, every other day for adults. A well-fed Motoro is an active, personable animal that quickly learns to associate its keeper with food and will rise to the surface at feeding time.`,
    seoDescription:
      'Freshwater Stingray Motoro for sale — stunning Amazonian ray with unique ocelli patterning. Expert care, live arrival guaranteed. From $450 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 300,
    maxSizeInches: 18,
    origin: 'Amazon and Orinoco Basins, South America',
    diet: 'Carnivore — earthworms, shrimp, mussels, fish fillets',
    temperament: 'Peaceful — venomous caudal spine',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'Are freshwater stingrays dangerous?',
        answer:
          'Yes — all Potamotrygon species possess a venomous barb on the tail that can inflict extremely painful wounds. The venom causes intense localized pain, swelling, and in rare cases necrosis. Stings require immediate hot-water immersion (to 110°F) and medical evaluation. Never reach blindly into a stingray tank. Use long tools for maintenance and always know where the ray is before putting hands in the water.',
      },
      {
        question: 'How big does a Motoro Stingray get?',
        answer:
          'Potamotrygon motoro reaches a disc width of approximately 18 inches in captivity, with total length including the tail reaching 30 inches or more. Exceptional specimens in very large systems may exceed these dimensions. Growth is steady — expect roughly 2 to 3 inches of disc growth per year under optimal conditions. Full adult size is typically reached by age 5 to 7 years.',
      },
      {
        question: 'What do freshwater stingrays eat?',
        answer:
          'Freshwater stingrays are carnivores that thrive on a varied diet of earthworms, shrimp, mussels, fish fillets, and quality sinking pellets. Juveniles should be fed daily, adults every other day. Rays are messy eaters, so oversized filtration and regular water changes are essential to manage the waste produced during feeding. Our specimens arrive already accepting a varied frozen diet.',
      },
      {
        question: 'Is it legal to keep freshwater stingrays?',
        answer:
          'Freshwater stingray legality varies by state and locality. They are prohibited in Arizona, Arkansas, California, Florida, Georgia, Hawaii, Mississippi, Nevada, Oklahoma, Texas, and Utah, among others. Some states require permits. Always verify your local regulations before purchasing. The Fish Collection confirms legal compliance with every buyer prior to shipment and will not ship to prohibited jurisdictions.',
      },
    ],
    relatedSlugs: ['black-diamond-stingray', 'motoro-stingray', 'red-tail-catfish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.8,
    reviewCount: 8,
  },

  // ──────────────────────────────────────────────
  // 51. Tiger Loach
  // ──────────────────────────────────────────────
  {
    commonName: 'Tiger Loach',
    scientificName: 'Syncrossus hymenophysa',
    slug: 'tiger-loach',
    category: 'loach',
    sku: 'TF-LOA-003',
    priceUSD: 35,
    images: [
      {
        url: '/images/products/tiger-loach-hero.jpg',
        alt: 'Tiger Loach (Syncrossus hymenophysa) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Tiger Loach is one of the most visually striking members of the Botiidae family — a bold, energetic bottom-dweller adorned with dramatic vertical bands of dark brown to black over a golden-yellow base that intensifies with age and proper care. Syncrossus hymenophysa is native to the river systems of the Mekong Basin and the islands of Borneo and Sumatra, where it inhabits clear, well-oxygenated streams with rocky and sandy substrates. At The Fish Collection, we source our Tiger Loaches from trusted Southeast Asian exporters who collect specimens from sustainable populations.

Reaching up to 12 inches in captivity, the Tiger Loach is significantly larger than many commonly kept loach species and requires a minimum 75-gallon aquarium to thrive. The tank should feature a sandy or fine gravel substrate, as Tiger Loaches spend considerable time foraging along the bottom and can damage their sensitive barbels on coarse material. Abundant hiding spots created from smooth rocks, driftwood caves, and PVC pipes are essential — these fish establish territories and retreat to cover when stressed or during the day. Moderate to strong water flow from powerheads replicates their natural riverine habitat.

Water parameters should be maintained between 72 and 82 degrees Fahrenheit, with a pH of 6.5 to 7.5. The Tiger Loach prefers soft to moderately hard water with excellent filtration. Weekly water changes of 25 to 30 percent are recommended, as this species is sensitive to elevated nitrate levels. Good oxygenation is important — consider adding an airstone or ensuring surface agitation from the filter return.

Temperament is semi-aggressive. Tiger Loaches establish clear dominance hierarchies and will chase, nip, and harass subordinate individuals and other bottom-dwelling species. They are best kept in groups of five or more to distribute aggression, or as a single specimen if tank size is limited. Tankmates should be robust, mid-water to upper-water species that will not compete for bottom territory. Avoid slow-moving, long-finned fish that may be harassed.

Diet is omnivorous. Tiger Loaches eagerly accept sinking pellets, algae wafers, frozen bloodworms, brine shrimp, and blanched vegetables. They are also excellent snail predators — a single Tiger Loach will eliminate a pest snail infestation within weeks, making them one of the most effective biological control options available.`,
    seoDescription:
      'Tiger Loach for sale — bold striped Mekong Basin loach. Syncrossus hymenophysa, live arrival guaranteed, overnight shipping. From $35 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 75,
    maxSizeInches: 12,
    origin: 'Mekong Basin, Southeast Asia',
    diet: 'Omnivore — sinking pellets, bloodworms, vegetables, snails',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'How big does a Tiger Loach get?',
        answer:
          'Tiger Loaches reach up to 12 inches in captivity, making them one of the larger commonly kept loach species. Growth is moderate — expect 2 to 3 inches per year under good conditions, with full adult size reached by age 4 to 5 years. Their banded coloration becomes more vivid and contrasted as they mature, with the golden base color deepening significantly in well-maintained aquariums.',
      },
      {
        question: 'Are Tiger Loaches aggressive?',
        answer:
          'Tiger Loaches are semi-aggressive, particularly toward other bottom-dwelling fish and conspecifics. They establish strict dominance hierarchies through chasing and fin-nipping. Keep them in groups of five or more to diffuse aggression across the group, or as a single specimen. Avoid housing them with peaceful bottom-dwellers like Corydoras, which they will bully relentlessly.',
      },
      {
        question: 'Do Tiger Loaches eat snails?',
        answer:
          'Yes — Tiger Loaches are among the most effective snail predators in the aquarium hobby. They will systematically hunt and consume pest snails of all sizes, often eliminating an entire infestation within a few weeks. If you are keeping ornamental snails like Nerites or Mystery Snails, a Tiger Loach will eat those too. This snail-eating ability makes them popular as biological pest control.',
      },
      {
        question: 'What tankmates work with Tiger Loaches?',
        answer:
          'Best tankmates are robust, mid-water to upper-water species that stay out of the bottom zone. Large barbs, rainbowfish, medium cichlids, and other active community fish work well. Avoid slow-moving, long-finned species like angelfish or bettas, and avoid other bottom-dwellers that will compete for territory. Other Syncrossus species can be kept together in large groups if the tank is spacious.',
      },
    ],
    relatedSlugs: ['clown-loach', 'zebra-loach', 'tiger-barb'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.5,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 52. Lungfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Lungfish',
    scientificName: 'Protopterus annectens',
    slug: 'lungfish',
    category: 'eel',
    sku: 'TF-EEL-004',
    priceUSD: 200,
    images: [
      {
        url: '/images/products/lungfish-hero.jpg',
        alt: 'Lungfish (Protopterus annectens) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Lungfish is a living fossil — one of the oldest vertebrate lineages on Earth, with ancestors dating back over 400 million years to the Devonian period. Protopterus annectens, the West African Lungfish, possesses both gills and a pair of functional lungs, allowing it to survive prolonged droughts by burrowing into mud and entering a state of aestivation that can last months or even years. This extraordinary adaptation makes the Lungfish one of the most biologically fascinating species available to aquarists, a direct window into the evolutionary transition from water to land.

At The Fish Collection, we source our Lungfish from established breeders and licensed importers working with populations across Sub-Saharan Africa. Each specimen is quarantined and confirmed feeding before listing. Protopterus annectens reaches up to 39 inches in captivity, with a thick, elongated body, paddle-like pectoral and pelvic fins, and a distinctive external gill structure in juveniles that reabsorbs as the fish matures.

Housing a Lungfish requires a minimum 150-gallon aquarium with a secure, heavy lid — these animals are powerful and surprisingly agile, capable of pushing unsecured covers aside. The tank should have a soft sand substrate and minimal decoration, as Lungfish are clumsy swimmers that can injure themselves on sharp objects. Filtration must be robust but flow should be gentle, as this species inhabits sluggish waterways in the wild. Water temperature should be maintained between 75 and 86 degrees Fahrenheit with a pH of 6.5 to 7.5.

Temperament is aggressive and territorial. Lungfish have powerful jaws lined with crushing tooth plates capable of inflicting serious bites on tankmates and careless keepers alike. They are best kept alone. Diet is carnivorous — offer earthworms, shrimp, mussels, fish fillets, and sinking carnivore pellets. Lungfish are enthusiastic feeders with a powerful bite that can crack shellfish with ease.

The obligate air-breathing behavior is the species' most captivating feature. Lungfish surface regularly to gulp air, and will drown if denied access to the surface. Ensure there is always a gap between the water surface and the tank lid. This breathing behavior, combined with their ancient lineage and unique morphology, makes the Lungfish an unparalleled conversation piece for the expert aquarist.`,
    seoDescription:
      'Lungfish for sale — ancient air-breathing predator from Sub-Saharan Africa. Protopterus annectens, live arrival guaranteed. From $200 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 150,
    maxSizeInches: 39,
    origin: 'Sub-Saharan Africa',
    diet: 'Carnivore — earthworms, shrimp, fish fillets, pellets',
    temperament: 'Aggressive and territorial',
    lifespan: '20-25 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 86,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'Can Lungfish actually breathe air?',
        answer:
          'Yes — Protopterus annectens possesses a pair of functional lungs in addition to gills. The fish surfaces regularly to gulp atmospheric air, which is essential for survival. Unlike most fish that can supplement oxygen through labyrinth organs, Lungfish are obligate air breathers — they will drown if denied surface access. Always maintain a gap between the water level and tank lid to allow breathing.',
      },
      {
        question: 'How big does a Lungfish get?',
        answer:
          'Protopterus annectens reaches up to 39 inches in captivity, with some specimens exceeding this in very large systems. Growth is steady throughout the first five years, tapering after maturity. Their thick, muscular body gives them considerable mass at full size. A 150-gallon tank is the minimum, but 200 gallons or more is recommended for long-term housing of a full-grown individual.',
      },
      {
        question: 'Are Lungfish aggressive?',
        answer:
          'Yes — Lungfish are aggressive and territorial with powerful jaws capable of crushing shellfish and inflicting serious bites. They should be kept alone. Tankmates of any size will eventually be attacked or eaten. Even keepers should exercise caution during tank maintenance — a Lungfish bite can break skin and cause injury. Use long tools and keep hands away from the fish during cleaning.',
      },
      {
        question: 'How long do Lungfish live?',
        answer:
          'Lungfish are exceptionally long-lived, with captive specimens routinely reaching 20 to 25 years. The record for a captive Protopterus exceeds 80 years. This is a generational pet that will outlive most other aquarium fish by a significant margin. Prospective keepers should plan for decades of care, including provisions in case they can no longer maintain the animal.',
      },
    ],
    relatedSlugs: ['fire-eel', 'electric-eel', 'bichir'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 7,
  },

  // ──────────────────────────────────────────────
  // 53. Red-Bellied Piranha
  // ──────────────────────────────────────────────
  {
    commonName: 'Red-Bellied Piranha',
    scientificName: 'Pygocentrus nattereri',
    slug: 'red-bellied-piranha',
    category: 'piranha',
    sku: 'TF-PIR-003',
    priceUSD: 40,
    images: [
      {
        url: '/images/products/red-bellied-piranha-hero.jpg',
        alt: 'Red-Bellied Piranha (Pygocentrus nattereri) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Red-Bellied Piranha is the most iconic freshwater predator in the world — the fish that launched a thousand Hollywood myths and continues to captivate aquarists with its combination of silver-scaled beauty, crimson ventral coloring, and the unmistakable dentition that has made the name "piranha" synonymous with aquatic danger. Pygocentrus nattereri is the most widely distributed piranha species, found throughout the Amazon Basin and its major tributaries, where it lives in large schools that hunt cooperatively and establish complex social hierarchies.

At The Fish Collection, we offer captive-bred Red-Bellied Piranhas that are health-certified, quarantined, and feeding on a varied diet before shipment. Our specimens display the vivid red-orange belly coloration and iridescent silver flanks that characterize healthy, well-conditioned individuals. Maximum size reaches approximately 14 inches in captivity, though most specimens settle around 10 to 12 inches in a well-maintained aquarium.

Keeping Red-Bellied Piranhas successfully requires understanding their social nature. These are schooling predators that must be kept in groups — a minimum of five individuals is recommended to establish a stable hierarchy and reduce aggression toward any single fish. A lone piranha is a stressed piranha, prone to hiding, refusing food, and wasting away. A school of six or more in a 100-gallon or larger aquarium will display natural behaviors including coordinated movement, hierarchical posturing, and group feeding responses that make them one of the most dynamic displays in freshwater fishkeeping.

Water parameters should replicate Amazonian conditions: temperature between 75 and 82 degrees Fahrenheit, pH of 6.0 to 7.5, and soft to moderately hard water. Oversized filtration is essential — piranhas are messy feeders that shred food and scatter debris throughout the tank. A canister filter or sump rated for at least twice the tank volume, combined with weekly 30 percent water changes, will maintain the water quality this species demands.

Diet in captivity should be varied and protein-rich: raw shrimp, fish fillets, earthworms, mussels, and high-quality sinking pellets. Contrary to popular belief, piranhas do not require live feeder fish and are actually healthier on a diet of prepared foods that eliminates parasite transmission risk. Feed every other day for adults, daily for growing juveniles. Feeding time is dramatic — the school converges instantly on food, and a piece of fish disappears in seconds.`,
    seoDescription:
      'Red-Bellied Piranha for sale — iconic Amazonian schooling predator. Captive-bred, live arrival guaranteed, overnight shipping. From $40 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 100,
    maxSizeInches: 14,
    origin: 'Amazon Basin, South America',
    diet: 'Carnivore — shrimp, fish fillets, earthworms, pellets',
    temperament: 'Predatory schooling fish',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 15,
    faqs: [
      {
        question: 'How many Red-Bellied Piranhas should be kept together?',
        answer:
          'A minimum of five Red-Bellied Piranhas is recommended, with six to eight being ideal. Larger groups establish more stable hierarchies and display more natural behavior. Keeping fewer than four often results in the weakest individual being bullied to death. Each piranha needs roughly 15 to 20 gallons of space, so a school of six requires at least 100 gallons. The schooling behavior of a well-kept group is one of the most impressive sights in freshwater fishkeeping.',
      },
      {
        question: 'Do piranhas really eat people?',
        answer:
          'No — the Hollywood depiction of piranhas stripping a person to bone in seconds is fiction. While piranha bites can cause serious lacerations, documented attacks on humans are almost always defensive nips from startled fish, not coordinated predation. Piranhas primarily eat fish, insects, crustaceans, and carrion. In the Amazon, locals swim in piranha-inhabited waters daily without incident. That said, their razor-sharp teeth demand respect during tank maintenance.',
      },
      {
        question: 'Is it legal to keep piranhas?',
        answer:
          'Piranha legality varies by state. They are illegal in Alabama, Alaska, Arizona, Arkansas, California, Colorado, Florida, Georgia, Hawaii, Kentucky, Louisiana, Maine, Massachusetts, Mississippi, Nevada, New Mexico, New York, North Carolina, Oklahoma, South Carolina, Texas, Utah, Virginia, and Washington. Check your state and local laws before purchasing. The Fish Collection verifies legal compliance before shipping.',
      },
      {
        question: 'What do Red-Bellied Piranhas eat?',
        answer:
          'In captivity, Red-Bellied Piranhas thrive on raw shrimp, fish fillets (tilapia and whitefish work well), earthworms, mussels, and quality sinking carnivore pellets. Live feeder fish are unnecessary and actually increase disease risk. Feed adults every other day, juveniles daily. Drop food in and watch the school converge — feeding is fast and dramatic. Remove uneaten food promptly to maintain water quality.',
      },
    ],
    relatedSlugs: ['piranha', 'vampire-fish-payara', 'wolf-fish'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 28,
  },

  // ──────────────────────────────────────────────
  // 54. Golden Basslet
  // ──────────────────────────────────────────────
  {
    commonName: 'Golden Basslet',
    scientificName: 'Liopropoma aureum',
    slug: 'golden-basslet',
    category: 'bass',
    sku: 'TF-BAS-004',
    priceUSD: 10000,
    images: [
      {
        url: '/images/products/golden-basslet-hero.jpg',
        alt: 'Golden Basslet (Liopropoma aureum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Golden Basslet is the holy grail of the marine aquarium hobby — a tiny, luminous jewel of a fish that commands prices rivaling luxury automobiles, not because of size or ferocity, but because of its staggering rarity and the near-impossibility of collecting it alive. Liopropoma aureum inhabits the deep reef walls of the Caribbean at depths between 150 and 250 meters, well beyond the range of conventional scuba diving. Reaching these fish requires specialized mixed-gas rebreather technology, hours of staged decompression, and the expertise to capture a 3-inch fish on a vertical wall in near-total darkness without killing it during the ascent. The handful of specimens that make it to market each year represent the pinnacle of deep-sea fish collection.

At The Fish Collection, we have secured one of the few Golden Basslets available globally this year. This specimen was collected by a licensed deep-reef specialist operating in the Caribbean and has been acclimated through a careful multi-stage decompression protocol. It is currently feeding on enriched frozen mysis, brine shrimp, and finely chopped seafood in our quarantine facility — a critical indicator of long-term survivability.

The fish itself is breathtaking in its simplicity: a uniform, intense golden-orange body that glows under reef lighting like a bar of polished gold, with translucent fins edged in electric blue. At just 3 inches maximum size, it can be housed in a surprisingly modest aquarium — a 40-gallon reef tank with established live rock provides ideal conditions. Water parameters should match standard reef specifications: 72 to 77 degrees Fahrenheit, pH 8.1 to 8.4, specific gravity 1.025, and stable alkalinity.

Despite its extreme price, the Golden Basslet is not a difficult fish to keep once acclimated. It is shy by nature and prefers dimly lit caves and overhangs — provide plenty of small crevices and rockwork retreats. Tankmates should be peaceful and non-competitive: small gobies, assessors, and other docile reef species. Avoid aggressive or boisterous fish that might stress or outcompete the basslet for food. Feed multiple small meals daily of frozen mysis, enriched brine shrimp, and finely diced seafood.

This is a once-in-a-lifetime acquisition for the collector who understands that true rarity transcends size. The Golden Basslet is, inch for inch, one of the most valuable animals on Earth.`,
    seoDescription:
      'Golden Basslet for sale — ultra-rare deep-reef Caribbean gem. Liopropoma aureum, live arrival guaranteed. Only $10,000 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 40,
    maxSizeInches: 3,
    origin: 'Caribbean deep reefs, 150-250m depth',
    diet: 'Carnivore — frozen mysis, brine shrimp, finely diced seafood',
    temperament: 'Peaceful and shy',
    lifespan: '5-10 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 77,
      phMin: 8.1,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'Why is the Golden Basslet so expensive?',
        answer:
          'The Golden Basslet lives at depths of 150 to 250 meters — far beyond the limits of recreational scuba. Collection requires mixed-gas rebreather diving, hours of staged decompression, and specialized techniques to bring a tiny, pressure-sensitive fish to the surface alive. Only a handful of collectors worldwide have the skills and equipment to attempt this. Total annual global supply is typically fewer than a dozen specimens, creating extreme scarcity that drives prices to $5,000-$10,000 or more.',
      },
      {
        question: 'Is the Golden Basslet hard to keep?',
        answer:
          'Surprisingly, no — once successfully acclimated, the Golden Basslet is a hardy, disease-resistant fish that adapts well to captive conditions. It requires standard reef water parameters, a modest 40-gallon tank with live rock and plenty of cave-like retreats, and regular feedings of frozen meaty foods. The difficulty lies entirely in acquisition and initial acclimation, not in long-term husbandry.',
      },
      {
        question: 'What size tank does a Golden Basslet need?',
        answer:
          'A Golden Basslet can thrive in a 40-gallon reef aquarium or larger. The tank should include well-established live rock with small caves and crevices for shelter. Despite its enormous price tag, this is a 3-inch fish that does not require an enormous system. Subdued lighting in the basslet retreat area is ideal, as the fish naturally inhabits dimly lit deep-reef environments.',
      },
      {
        question: 'What fish can live with a Golden Basslet?',
        answer:
          'Ideal tankmates are small, peaceful reef species that will not intimidate or outcompete the basslet. Royal Grammas (in larger tanks), small gobies, firefish, and assessors work well. Avoid tangs, large wrasses, dottybacks, and any aggressive species. The Golden Basslet is shy and retiring — it needs calm tankmates that allow it to feed without competition. A species-only nano reef is the safest option for maximum security.',
      },
    ],
    relatedSlugs: ['peppermint-angelfish', 'gem-tang', 'clarion-angelfish'],
    speciesGuideSlug: undefined,
    ratingAverage: 5.0,
    reviewCount: 2,
  },

  // ──────────────────────────────────────────────
  // 55. Roseline Barb
  // ──────────────────────────────────────────────
  {
    commonName: 'Roseline Barb',
    scientificName: 'Sahyadria denisonii',
    slug: 'roseline-barb',
    category: 'barb',
    sku: 'TF-BAR-003',
    priceUSD: 25,
    images: [
      {
        url: '/images/products/roseline-barb-hero.jpg',
        alt: 'Roseline Barb (Sahyadria denisonii) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Roseline Barb, also known as the Denison Barb or Red-Line Torpedo Barb, is widely regarded as one of the most beautiful and dynamic freshwater schooling fish available to aquarists. Sahyadria denisonii hails from the fast-flowing hill streams of the Western Ghats in Kerala, India — a biodiversity hotspot that has produced some of the hobby's most sought-after species. The fish displays a torpedo-shaped silver body bisected by a bold horizontal black stripe, topped by a brilliant scarlet line that runs from the snout through the eye to the midpoint of the body. The forked caudal fin is marked with striking yellow and black bars. In a school of six or more under proper lighting, the effect is spectacular.

At The Fish Collection, we source our Roseline Barbs from captive-breeding programs that reduce pressure on wild populations, which have been listed as Endangered on the IUCN Red List due to overcollection and habitat degradation. Each fish is quarantined and conditioned on a varied diet before offering. Our specimens display intense coloration and robust body condition that distinguish captive-bred quality from mass-imported stock.

Housing Roseline Barbs requires a minimum 75-gallon aquarium — these are active, fast-swimming fish that need ample open space for schooling. A planted tank with a combination of open swimming lanes and densely vegetated areas provides ideal conditions. Moderate to strong water flow from a canister filter or powerheads replicates their natural hillstream habitat and encourages active swimming behavior. Substrate can be gravel or sand, with smooth river rocks and driftwood for natural aesthetics.

Water parameters should reflect the subtropical origin: temperature between 64 and 77 degrees Fahrenheit (cooler than most tropical community fish), pH of 6.5 to 7.5, and soft to moderate hardness. Roseline Barbs tolerate a range of conditions but show their best color and activity in clean, well-oxygenated water at temperatures below 76 degrees. They are excellent candidates for unheated or lightly heated aquariums in temperate homes.

Diet is omnivorous and straightforward: high-quality flake and pellet foods supplemented with frozen bloodworms, brine shrimp, daphnia, and blanched vegetables. Roseline Barbs are enthusiastic, active feeders that readily accept all offered foods. Feed two to three times daily in small portions. A well-fed school in a planted tank is one of the most satisfying displays in the freshwater hobby.`,
    seoDescription:
      'Roseline Barb for sale — stunning Indian torpedo barb. Sahyadria denisonii, captive-bred, live arrival guaranteed. From $25 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 75,
    maxSizeInches: 6,
    origin: 'Western Ghats, Kerala, India',
    diet: 'Omnivore — flake, pellets, frozen foods, vegetables',
    temperament: 'Peaceful, active schooling fish',
    lifespan: '5-8 years',
    waterParameters: {
      tempMin: 64,
      tempMax: 77,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 18,
    faqs: [
      {
        question: 'How many Roseline Barbs should be kept together?',
        answer:
          'Roseline Barbs are schooling fish that should be kept in groups of at least six, with eight to ten being ideal. Larger groups produce more impressive schooling behavior and more vivid coloration, as the fish feel secure and compete with each other to display. Keeping fewer than four results in shy, stressed fish that hide and lose color. Each fish needs roughly 10 to 15 gallons of space.',
      },
      {
        question: 'Are Roseline Barbs endangered?',
        answer:
          'Yes — Sahyadria denisonii is listed as Endangered on the IUCN Red List due to overcollection for the aquarium trade and habitat degradation in the Western Ghats. The Fish Collection sources exclusively from captive-breeding programs that reduce pressure on wild populations. Buying captive-bred specimens supports conservation efforts and typically yields healthier, more adaptable fish.',
      },
      {
        question: 'What temperature do Roseline Barbs need?',
        answer:
          'Roseline Barbs prefer cooler water than most tropical community fish — 64 to 77 degrees Fahrenheit, with the sweet spot around 68 to 74 degrees. They originate from hillstreams in the Western Ghats where water temperatures are moderate year-round. They can tolerate warmer temperatures briefly but will show stress and reduced activity above 80 degrees. This makes them ideal for unheated or lightly heated aquariums.',
      },
      {
        question: 'What tankmates work with Roseline Barbs?',
        answer:
          'Roseline Barbs are peaceful and compatible with most community fish that share their temperature preferences. Excellent tankmates include other barbs, rainbowfish, loaches, Corydoras, larger tetras, and non-aggressive cichlids. Avoid slow-moving, long-finned species that may be overwhelmed by the barbs active swimming. Their size and speed make them safe from most predation, and they rarely bother other fish.',
      },
    ],
    relatedSlugs: ['denison-barb', 'tiger-barb', 'clown-loach'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 32,
  },

  // ──────────────────────────────────────────────
  // 56. Albino Shark
  // ──────────────────────────────────────────────
  {
    commonName: 'Albino Shark',
    scientificName: 'Epalzeorhynchos munense',
    slug: 'albino-shark',
    category: 'barb',
    sku: 'TF-BAR-004',
    priceUSD: 25,
    images: [
      {
        url: '/images/products/albino-shark-hero.jpg',
        alt: 'Albino Shark (Epalzeorhynchos munense) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Albino Shark is a bold, eye-catching freshwater fish that combines the streamlined, shark-like silhouette of the Cyprinid family with a striking pure white to pale golden body and vivid red eyes — the hallmarks of true albinism. Epalzeorhynchos munense, commonly marketed as the Albino Shark or Albino Rainbow Shark variant, is native to the river systems of Southeast Asia, where it inhabits moderate-flow streams and rivers with rocky substrates and ample hiding spots. At The Fish Collection, we source our Albino Sharks from reputable Southeast Asian breeders who select for robust body conformation and clean albino coloration.

Reaching up to 12 inches in captivity, the Albino Shark is a substantial fish that requires a minimum 75-gallon aquarium with plenty of swimming space and well-defined territorial boundaries. The tank should feature a sandy or fine gravel substrate with abundant rockwork, driftwood caves, and PVC tubes that create multiple hiding spots and territory markers. This species is highly territorial toward bottom-dwelling fish and conspecifics, and providing visual barriers through tank decor is essential for managing aggression in a community setup.

Water parameters are forgiving: temperature between 72 and 82 degrees Fahrenheit, pH of 6.5 to 7.5, and soft to moderately hard water. The Albino Shark adapts to a wide range of conditions, making it one of the more resilient large aquarium fish available. Filtration should be robust with moderate to strong flow, and weekly water changes of 20 to 25 percent maintain optimal conditions.

Diet is omnivorous. Albino Sharks eagerly consume sinking pellets, algae wafers, frozen bloodworms, brine shrimp, blanched zucchini, and spirulina-based foods. They are active algae grazers that will methodically clean rock surfaces and driftwood in the aquarium. This grazing behavior, combined with their striking appearance, makes them both functional and ornamental. Feed once or twice daily, ensuring food reaches the bottom before more aggressive surface-feeding tankmates consume everything.

Temperament is semi-aggressive, particularly as the fish matures. Juveniles are relatively peaceful, but adults establish firm territories and will chase, ram, and harass other bottom-dwelling species. Keep only one per tank unless the aquarium exceeds 150 gallons with extensive visual barriers. Mid-water and surface-dwelling tankmates like large barbs, rainbowfish, and medium cichlids are generally unaffected by the shark's territorial behavior.`,
    seoDescription:
      'Albino Shark for sale — striking white freshwater shark with red eyes. Epalzeorhynchos munense, live arrival guaranteed. From $25 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 75,
    maxSizeInches: 12,
    origin: 'Southeast Asia',
    diet: 'Omnivore — pellets, algae wafers, frozen foods, vegetables',
    temperament: 'Semi-aggressive and territorial',
    lifespan: '8-12 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 7,
    faqs: [
      {
        question: 'How big does an Albino Shark get?',
        answer:
          'Albino Sharks reach up to 12 inches in captivity, though most specimens settle around 8 to 10 inches in a standard aquarium. Growth is steady over the first three years, with the albino coloration remaining pure white to pale gold throughout life. The red eyes become more prominent as the fish grows, creating an increasingly striking appearance as the body fills out and the finnage develops.',
      },
      {
        question: 'Are Albino Sharks really sharks?',
        answer:
          'No — Albino Sharks are not true sharks. They belong to the family Cyprinidae, which includes barbs, carp, and minnows. The "shark" common name refers to their dorsal fin profile and streamlined body shape, which superficially resemble a shark silhouette. They are entirely freshwater fish with no relation to marine sharks. Other "sharks" in the aquarium trade — Rainbow Sharks, Red-Tail Sharks, Bala Sharks — are similarly named cyprinids.',
      },
      {
        question: 'Can you keep multiple Albino Sharks together?',
        answer:
          'Keeping multiple Albino Sharks in the same tank is generally not recommended unless the aquarium exceeds 150 gallons with extensive rockwork and visual barriers. These fish are highly territorial toward conspecifics and will engage in persistent chasing and ramming. In smaller tanks, the dominant individual will stress and eventually injure subordinates. A single specimen per tank is the safest approach.',
      },
      {
        question: 'What tankmates work with Albino Sharks?',
        answer:
          'Best tankmates occupy the mid-water and surface zones, leaving the bottom to the shark. Large barbs, rainbowfish, medium cichlids, and other robust community fish work well. Avoid other bottom-dwellers like Corydoras, plecos, and loaches that will trigger territorial aggression. Slow-moving or timid fish may also be harassed. The key is selecting fish that are fast enough and confident enough to avoid conflict.',
      },
    ],
    relatedSlugs: ['denison-barb', 'tiger-barb', 'roseline-barb'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.4,
    reviewCount: 16,
  },

  // ──────────────────────────────────────────────
  // 57. Bichir
  // ──────────────────────────────────────────────
  {
    commonName: 'Ornate Bichir',
    scientificName: 'Polypterus ornatipinnis',
    slug: 'bichir',
    category: 'eel',
    sku: 'TF-EEL-005',
    priceUSD: 80,
    images: [
      {
        url: '/images/products/bichir-hero.jpg',
        alt: 'Ornate Bichir (Polypterus ornatipinnis) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Ornate Bichir is the crown jewel of the Polypteridae family — a prehistoric predator adorned with an intricate labyrinth of dark brown to black reticulations over a golden-tan base color that makes it the most visually striking of all bichir species. Polypterus ornatipinnis is native to the Congo River basin and Lake Tanganyika's tributaries, where it inhabits the margins of slow-moving rivers, floodplains, and swampy areas rich in vegetation and submerged wood. Like all bichirs, it possesses a primitive lung that supplements gill respiration, requiring regular access to the water surface to gulp atmospheric air.

At The Fish Collection, we source our Ornate Bichirs from established breeders and importers who handle these fish with the care their ancient lineage deserves. Each specimen is quarantined, dewormed, and confirmed feeding before listing. Polypterus ornatipinnis reaches approximately 24 inches in captivity, with the distinctive multi-finlet dorsal structure and armored ganoid scales that identify all members of this 400-million-year-old lineage.

Housing requires a minimum 100-gallon aquarium with a secure, tight-fitting lid. Bichirs are accomplished escape artists that will exploit any gap in the tank cover to slither out — a loose-fitting lid is one of the most common causes of bichir mortality in home aquariums. The substrate should be fine sand, and decorations should include driftwood, large smooth rocks, and PVC pipes that provide ample hiding spots. Dense planting along the tank perimeter creates a natural feel while leaving open floor space for the bichir to patrol.

Water temperature should be maintained between 75 and 86 degrees Fahrenheit, with a pH of 6.5 to 7.5 and soft to moderately hard water. Filtration should be robust with gentle to moderate flow. Bichirs produce significant waste and require powerful biological filtration, but they dislike strong currents that push their elongated body across the tank.

Diet is carnivorous. Offer earthworms, shrimp, fish fillets, sinking carnivore pellets, and frozen bloodworms. Bichirs are nocturnal hunters that rely primarily on their excellent sense of smell to locate food — feed after lights-out for optimal results. Despite their predatory nature, Ornate Bichirs are surprisingly peaceful toward tankmates too large to eat. Compatible companions include large cichlids, sizeable catfish, and other bichir species of similar size. Anything small enough to fit in the bichir's mouth will eventually become a meal.`,
    seoDescription:
      'Ornate Bichir for sale — stunning prehistoric predator from the Congo. Polypterus ornatipinnis, live arrival guaranteed. From $80 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 100,
    maxSizeInches: 24,
    origin: 'Congo River Basin, Central Africa',
    diet: 'Carnivore — earthworms, shrimp, fish fillets, pellets',
    temperament: 'Predatory but peaceful toward large tankmates',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 86,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How big does an Ornate Bichir get?',
        answer:
          'Ornate Bichirs reach approximately 24 inches in captivity, making them one of the larger Polypterus species. Growth is steady — expect 3 to 4 inches per year under optimal conditions, with full adult size reached by age 5 to 7 years. Their elongated body, multi-finlet dorsal, and intricate patterning become increasingly impressive as they mature. A full-grown Ornate Bichir is one of the most visually commanding freshwater fish available.',
      },
      {
        question: 'Do Bichirs breathe air?',
        answer:
          'Yes — all bichirs possess a modified swim bladder that functions as a primitive lung, allowing them to supplement gill respiration with atmospheric air. They surface regularly to gulp air, and this behavior is essential to their health. The tank must always have a gap between the water surface and the lid to allow breathing. However, the lid must be absolutely secure — bichirs are notorious escape artists that will find and exploit any opening.',
      },
      {
        question: 'Can Bichirs be kept with other fish?',
        answer:
          'Ornate Bichirs coexist well with fish too large to eat. Compatible tankmates include large cichlids (Oscars, Severums, Flowerhorns), large catfish, other bichir species of similar size, and robust loaches. The critical rule is size — anything that fits in the bichir mouth will eventually be consumed, including smaller fish added to the tank. Bichirs are nocturnal ambush predators that strike sleeping fish at night.',
      },
      {
        question: 'Why do Bichirs escape from tanks?',
        answer:
          'Bichirs have an instinctive drive to explore their environment and can travel short distances over land using their pectoral fins and serpentine body movement. In the wild, this allows them to move between water bodies during seasonal flooding. In captivity, this translates to a persistent tendency to probe every gap in the tank lid. A weighted, tight-fitting cover with no openings larger than a pencil width is essential. Most bichir deaths in home aquariums are caused by escape through inadequately sealed lids.',
      },
    ],
    relatedSlugs: ['lungfish', 'fire-eel', 'snowflake-moray-eel'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 19,
  },

  // ──────────────────────────────────────────────
  // 58. Distichodus Sexfasciatus
  // ──────────────────────────────────────────────
  {
    commonName: 'Six-Barred Distichodus',
    scientificName: 'Distichodus sexfasciatus',
    slug: 'distichodus-sexfasciatus',
    category: 'barb',
    sku: 'TF-BAR-005',
    priceUSD: 50,
    images: [
      {
        url: '/images/products/distichodus-sexfasciatus-hero.jpg',
        alt: 'Six-Barred Distichodus (Distichodus sexfasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Six-Barred Distichodus is one of the most visually commanding large-bodied characins available to freshwater aquarists — a powerfully built, deep-bodied fish adorned with six bold vertical black bars over a warm orange-red base that intensifies dramatically as the fish matures. Distichodus sexfasciatus is native to the Congo River basin, where it inhabits large rivers, floodplains, and lake margins, feeding primarily on aquatic vegetation and algae. In the wild, these fish reach impressive proportions — up to 30 inches — making them a true centerpiece species for the dedicated large-tank keeper.

At The Fish Collection, we source our Six-Barred Distichodus from trusted African exporters and captive-breeding programs. Each specimen is quarantined and transitioned to a varied diet before listing. Juveniles display a particularly vivid orange-red coloration with sharply defined bars, though adults retain excellent coloration in well-maintained systems. This is a long-lived species that rewards patient keeping with decades of impressive display.

Housing demands are significant. A minimum 200-gallon aquarium is required for a single adult specimen, with 300 gallons or more recommended for groups. The tank should have a heavy, secure lid — Distichodus are powerful fish capable of jumping when startled. Decor must be robust, as this species will uproot delicate plants and rearrange lightweight decorations. Smooth river rocks, large driftwood pieces, and heavy-duty artificial plants are better choices than live plantings, which will be rapidly consumed.

Water parameters should be maintained between 72 and 82 degrees Fahrenheit, pH 6.0 to 7.5, and soft to moderately hard water. Strong filtration is essential given the fish's size and herbivorous diet, which produces substantial waste. Weekly water changes of 25 to 30 percent maintain the clean conditions this species prefers.

Diet is primarily herbivorous with omnivorous tendencies. Offer spirulina pellets, algae wafers, blanched vegetables (zucchini, lettuce, peas, spinach), and occasional protein supplements like frozen bloodworms or shrimp. The Six-Barred Distichodus is an enthusiastic, voracious eater that will decimate any live plant in the aquarium. Temperament is semi-aggressive — individuals establish territories and may chase tankmates, particularly during feeding. Compatible companions include large cichlids, catfish, and other robust species that occupy different zones of the tank.`,
    seoDescription:
      'Six-Barred Distichodus for sale — striking Congo River characin with bold orange and black bars. Live arrival guaranteed. From $50 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 200,
    maxSizeInches: 30,
    origin: 'Congo River Basin, Central Africa',
    diet: 'Herbivore/Omnivore — spirulina, vegetables, algae wafers',
    temperament: 'Semi-aggressive',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'How big does a Six-Barred Distichodus get?',
        answer:
          'Distichodus sexfasciatus reaches up to 30 inches in captivity, making it one of the largest characin species available. Growth is moderate — expect 3 to 5 inches per year under optimal conditions. The fish becomes increasingly deep-bodied and powerfully built as it matures. Full adult size is typically reached by age 6 to 8 years. A 200-gallon aquarium is the minimum; 300 gallons or more is recommended for long-term housing.',
      },
      {
        question: 'Will Distichodus eat live plants?',
        answer:
          'Yes — Distichodus sexfasciatus is a voracious plant eater that will rapidly consume any live vegetation in the aquarium. No plant species is safe. Even tough species like Java Fern and Anubias will be shredded and eaten. If you want greenery in the tank, use high-quality artificial plants or accept that live plants are essentially an expensive food supplement. This is one of the few aquarium fish that makes a planted tank truly impossible.',
      },
      {
        question: 'What do Six-Barred Distichodus eat?',
        answer:
          'Their diet should be primarily plant-based: spirulina pellets, algae wafers, blanched zucchini, romaine lettuce, shelled peas, and spinach form the staple diet. Supplement with occasional protein sources like frozen bloodworms, brine shrimp, and quality omnivore pellets. They are enthusiastic, aggressive feeders that will consume large quantities. Feed two to three times daily, offering enough that food is consumed within a few minutes.',
      },
      {
        question: 'Are Six-Barred Distichodus aggressive?',
        answer:
          'They are semi-aggressive, particularly toward conspecifics and similar-looking species. Dominant individuals establish territories and will chase subordinates, especially during feeding. In groups, a strict hierarchy forms with considerable initial aggression that typically stabilizes over time. Keep either a single specimen or a group of five or more in a large tank to distribute aggression. Compatible tankmates include large cichlids, catfish, and other robust species.',
      },
    ],
    relatedSlugs: ['flagtail-prochilodus', 'denison-barb', 'tiger-barb'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.5,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 59. Flagtail Prochilodus
  // ──────────────────────────────────────────────
  {
    commonName: 'Flagtail Prochilodus',
    scientificName: 'Semaprochilodus taeniurus',
    slug: 'flagtail-prochilodus',
    category: 'barb',
    sku: 'TF-BAR-006',
    priceUSD: 40,
    images: [
      {
        url: '/images/products/flagtail-prochilodus-hero.jpg',
        alt: 'Flagtail Prochilodus (Semaprochilodus taeniurus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Flagtail Prochilodus is one of the Amazon Basin's most charismatic and visually distinctive fish — a silvery, deep-bodied species instantly recognizable by its spectacular caudal fin, which displays bold horizontal stripes of black and vivid red-orange that flare like a semaphore flag when the fish swims. Semaprochilodus taeniurus is a detritivore and herbivore that plays a critical ecological role in Amazonian river systems, consuming algae, biofilm, and decomposing organic matter in vast migratory schools that can number in the millions. In the aquarium, this same feeding behavior makes the Flagtail Prochilodus one of the most effective natural algae control species available for large tanks.

At The Fish Collection, we source our Flagtail Prochilodus from established South American exporters who collect sustainably from abundant wild populations. Each specimen is quarantined and acclimated to prepared foods before listing. These fish reach approximately 12 inches in captivity, with a laterally compressed body that gives them a substantial, impressive presence despite their moderate length.

Housing requires a minimum 200-gallon aquarium for a small group. Flagtail Prochilodus are active, fast-swimming fish that need ample open space for schooling. They are best kept in groups of four or more, as solitary specimens become shy and fail to display their natural behaviors. A secure, heavy lid is mandatory — this species is an enthusiastic jumper that will launch itself out of uncovered tanks with alarming frequency. Substrate can be sand or gravel, and decorations should include large rocks and driftwood that provide algae-growing surfaces.

Water parameters should mirror Amazonian conditions: temperature between 72 and 82 degrees Fahrenheit, pH of 6.0 to 7.0, and soft to moderately soft water. Strong filtration with moderate flow replicates the river environments this species inhabits. Weekly water changes of 25 percent maintain optimal conditions.

Diet is herbivorous. Offer spirulina pellets, algae wafers, blanched vegetables, nori sheets, and fresh vegetable matter. The Flagtail Prochilodus constantly grazes on tank surfaces, consuming biofilm and algae with a specialized sucker-like mouth that is perfectly adapted for scraping. This grazing behavior keeps tank surfaces remarkably clean. Temperament is peaceful — one of the few large Amazonian species that genuinely works in a community setting without posing a threat to smaller tankmates. They school beautifully and add both movement and practical algae control to large displays.`,
    seoDescription:
      'Flagtail Prochilodus for sale — stunning Amazonian flagtail with bold caudal striping. Peaceful schooler, live arrival guaranteed. From $40 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 200,
    maxSizeInches: 12,
    origin: 'Amazon Basin, South America',
    diet: 'Herbivore — spirulina, algae wafers, vegetables, biofilm',
    temperament: 'Peaceful schooling fish',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'How big does a Flagtail Prochilodus get?',
        answer:
          'Flagtail Prochilodus reach approximately 12 inches in captivity, with wild specimens occasionally exceeding 14 inches. Their deep, laterally compressed body gives them a substantial presence despite moderate length. Growth is steady — expect 2 to 3 inches per year. The bold black-and-red caudal fin striping becomes more vivid as the fish matures, reaching its most impressive display in adults over 8 inches.',
      },
      {
        question: 'Do Flagtail Prochilodus eat algae?',
        answer:
          'Yes — Flagtail Prochilodus are among the most effective algae-eating fish available for large aquariums. Their specialized sucker-like mouth constantly scrapes biofilm, algae, and detritus from tank surfaces, rocks, driftwood, and glass. A group of four or more will keep a 200-gallon tank remarkably clean. They also consume prepared vegetable foods, spirulina, and blanched greens, but their natural grazing behavior is their most useful trait.',
      },
      {
        question: 'Are Flagtail Prochilodus jumpers?',
        answer:
          'Yes — Flagtail Prochilodus are notorious jumpers. In the wild, they leap to clear obstacles during their massive seasonal migrations. In captivity, this translates to frequent jumping, particularly when startled or during water changes. A heavy, secure lid with no gaps is absolutely essential. Weighted glass or acrylic tops are recommended. Many keepers lose Flagtail Prochilodus to jumping before learning this lesson — take it seriously from day one.',
      },
      {
        question: 'What tankmates work with Flagtail Prochilodus?',
        answer:
          'Flagtail Prochilodus are peaceful and compatible with a wide range of species. Excellent tankmates include large tetras, Severum cichlids, catfish, peaceful large characins, and other non-aggressive community fish. They school beautifully with their own kind and add constant movement to a display. Avoid housing them with aggressive cichlids that might bully the relatively docile Prochilodus.',
      },
    ],
    relatedSlugs: ['distichodus-sexfasciatus', 'denison-barb', 'roseline-barb'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.6,
    reviewCount: 12,
  },

  // ──────────────────────────────────────────────
  // 60. Cobalt Blue Zebra
  // ──────────────────────────────────────────────
  {
    commonName: 'Cobalt Blue Zebra',
    scientificName: 'Maylandia callainos',
    slug: 'cobalt-blue-zebra',
    category: 'cichlid',
    sku: 'TF-CIC-008',
    priceUSD: 15,
    images: [
      {
        url: '/images/products/cobalt-blue-zebra-hero.jpg',
        alt: 'Cobalt Blue Zebra (Maylandia callainos) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Cobalt Blue Zebra is one of the most intensely colored cichlids in the freshwater hobby — a compact, pugnacious mbuna from Lake Malawi that delivers an electric cobalt-blue coloration so vivid it appears almost luminescent under proper lighting. Maylandia callainos (formerly Pseudotropheus callainos) is endemic to the rocky shoreline habitats of Lake Malawi in East Africa, where it scrapes aufwuchs — a biofilm of algae, microorganisms, and invertebrates — from rock surfaces using specialized jaw morphology. This species is a staple of the African cichlid hobby for good reason: it is hardy, relatively affordable, and produces a color intensity that rivals fish costing ten times its price.

At The Fish Collection, we source our Cobalt Blue Zebras from quality breeders who select for the deepest, most uniform blue coloration. Males display the most intense color, though females also show a pleasant light blue that provides excellent contrast in a mixed group. Each fish is quarantined and conditioned on a varied diet before offering. Maximum size reaches approximately 5 inches in captivity.

Housing requires a minimum 55-gallon aquarium specifically designed for mbuna — a setup fundamentally different from a typical community tank. The entire bottom should be stacked with rocks creating an elaborate cave network with dozens of hiding spots, crevices, and territorial boundaries. This rockwork is not merely decorative — it is essential infrastructure that prevents the constant aggression inherent in mbuna societies from escalating into fatal attacks. Sand substrate allows the fish to sift and dig naturally.

Water parameters must replicate Lake Malawi's hard, alkaline conditions: temperature between 75 and 82 degrees Fahrenheit, pH of 7.5 to 8.5, and high hardness (10-25 dGH). This is the opposite of the soft, acidic water preferred by most South American species. Strong filtration with vigorous surface agitation provides the high oxygenation that these active fish demand.

Temperament is aggressive — typical for mbuna. Males are fiercely territorial and will relentlessly pursue and attack rivals. The standard approach is to overstock the tank (one fish per 3-4 gallons) to distribute aggression across many targets, preventing any single individual from being bullied to death. Keep one male to three or four females. Feed primarily herbivorous foods — spirulina flake, algae wafers, blanched vegetables — with minimal protein to avoid the potentially fatal condition known as Malawi bloat.`,
    seoDescription:
      'Cobalt Blue Zebra cichlid for sale — electric blue Lake Malawi mbuna. Maylandia callainos, live arrival guaranteed. From $15 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 5,
    origin: 'Lake Malawi, East Africa',
    diet: 'Omnivore — primarily herbivorous; spirulina, algae wafers, vegetables',
    temperament: 'Aggressive — typical mbuna territorial behavior',
    lifespan: '8-12 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 7.5,
      phMax: 8.5,
    },
    inStock: true,
    stockCount: 20,
    faqs: [
      {
        question: 'How aggressive are Cobalt Blue Zebra cichlids?',
        answer:
          'Cobalt Blue Zebras are highly aggressive, especially males defending territories. This is normal mbuna behavior and cannot be eliminated — only managed. The standard approach is to overstock the tank with one fish per 3 to 4 gallons, provide extensive rockwork with dozens of caves, and keep one male to three or four females. This distributes aggression across many targets and prevents any single fish from being fatally bullied.',
      },
      {
        question: 'What is Malawi bloat and how do you prevent it?',
        answer:
          'Malawi bloat is a potentially fatal digestive condition caused by feeding high-protein foods to herbivorous mbuna species. Symptoms include abdominal swelling, loss of appetite, and rapid deterioration. Prevention is straightforward: feed a primarily herbivorous diet of spirulina flake, algae wafers, and blanched vegetables. Limit protein-rich foods like bloodworms to occasional treats at most. Some experienced keepers avoid animal protein entirely for mbuna.',
      },
      {
        question: 'What water parameters do Cobalt Blue Zebras need?',
        answer:
          'Cobalt Blue Zebras require hard, alkaline water that replicates Lake Malawi: pH 7.5 to 8.5, temperature 75 to 82°F, and high general hardness of 10 to 25 dGH. This is the opposite of the soft, acidic water preferred by most South American species. If your tap water is soft, you will need to use mineral buffers or crushed coral substrate to maintain appropriate hardness and pH.',
      },
      {
        question: 'How many Cobalt Blue Zebras should I keep?',
        answer:
          'Keep a group of at least eight to twelve in a 55-gallon or larger tank. The male-to-female ratio should be one male to three or four females. Overstocking is a deliberate strategy with mbuna — it spreads aggression across many fish and prevents any single individual from being targeted. A 55-gallon tank can support 12 to 15 mbuna of mixed species with adequate filtration and water changes.',
      },
    ],
    relatedSlugs: ['electric-blue-jack-dempsey', 'blue-zaire-frontosa', 'starry-night-cichlid'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.5,
    reviewCount: 35,
  },

  // ──────────────────────────────────────────────
  // 61. Electric Blue Jack Dempsey
  // ──────────────────────────────────────────────
  {
    commonName: 'Electric Blue Jack Dempsey',
    scientificName: 'Rocio octofasciata',
    slug: 'electric-blue-jack-dempsey',
    category: 'cichlid',
    sku: 'TF-CIC-009',
    priceUSD: 35,
    images: [
      {
        url: '/images/products/electric-blue-jack-dempsey-hero.jpg',
        alt: 'Electric Blue Jack Dempsey (Rocio octofasciata) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Electric Blue Jack Dempsey is a selectively bred color morph of the classic Jack Dempsey cichlid that has taken the freshwater hobby by storm — a fish that replaces the standard species' dark, earthy coloration with a breathtaking iridescent blue that shimmers across the entire body like crushed sapphire under aquarium lighting. Rocio octofasciata originates from the Atlantic slope of Central America, from southern Mexico through Honduras, where the wild-type inhabits slow-moving rivers, canals, and swampy lowlands. The Electric Blue variant was developed through decades of selective breeding, isolating and intensifying a recessive gene that produces the spectacular metallic blue coloration.

At The Fish Collection, we source our Electric Blue Jack Dempseys from dedicated breeders who have stabilized the blue gene across multiple generations. Our specimens display the full-body iridescent blue coverage and sparkling blue facial markings that define a quality Electric Blue — not the partial blue coloration that characterizes lower-grade fish. Each specimen is quarantined and confirmed feeding on a varied diet before listing. Maximum size reaches approximately 10 inches, slightly smaller than the standard Jack Dempsey due to the effects of the selective breeding process.

Housing requires a minimum 55-gallon aquarium for a single adult, with 75 gallons or more recommended for a pair. The tank should feature a sand substrate, moderate rockwork and driftwood for territorial boundaries, and areas of open swimming space. Unlike the standard Jack Dempsey, the Electric Blue variant tends to be somewhat less aggressive — though it is still a cichlid with definite territorial instincts, it can often coexist with a broader range of tankmates than its wild-type counterpart.

Water parameters are forgiving: temperature between 72 and 82 degrees Fahrenheit, pH of 7.0 to 8.0, and soft to moderately hard water. The Electric Blue Jack Dempsey is slightly more sensitive to water quality fluctuations than the standard variety, so consistent maintenance is important. Weekly water changes of 25 percent and robust filtration keep these fish in optimal condition and displaying their best coloration.

Diet is omnivorous. Offer high-quality cichlid pellets, frozen bloodworms, brine shrimp, earthworms, and blanched vegetables. Electric Blue Jack Dempseys are eager feeders that accept virtually all prepared and frozen foods. Feed once or twice daily. Their coloration intensifies noticeably on a varied, high-quality diet — fish fed exclusively on basic flake or pellet tend to show muted blue compared to those receiving a rotation of protein and vegetable-based foods.`,
    seoDescription:
      'Electric Blue Jack Dempsey for sale — stunning iridescent blue cichlid. Rocio octofasciata, live arrival guaranteed. From $35 at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 10,
    origin: 'Central America (selectively bred)',
    diet: 'Omnivore — cichlid pellets, frozen foods, vegetables',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 7.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 10,
    faqs: [
      {
        question: 'What makes Electric Blue Jack Dempseys different from regular Jack Dempseys?',
        answer:
          'The Electric Blue Jack Dempsey is a selectively bred color morph carrying a recessive gene that produces full-body iridescent blue coloration instead of the standard dark olive-brown. They tend to be slightly smaller (up to 10 inches vs. 12+ for standard), somewhat less aggressive, and slightly more sensitive to water quality. The blue coloration is genetic and permanent — it is not the result of dyes, hormones, or temporary treatments.',
      },
      {
        question: 'Are Electric Blue Jack Dempseys aggressive?',
        answer:
          'They are semi-aggressive — territorial but generally less combative than standard Jack Dempseys. They establish territories and may chase fish that intrude, but rarely cause serious injury to appropriately sized tankmates. Compatible companions include other medium cichlids, large barbs, catfish, and plecos. Avoid small fish that could be eaten and avoid other blue-colored fish that might trigger competitive aggression.',
      },
      {
        question: 'How big does an Electric Blue Jack Dempsey get?',
        answer:
          'Electric Blue Jack Dempseys typically reach 8 to 10 inches in captivity, slightly smaller than the standard Jack Dempsey which can exceed 12 inches. Growth is moderate — expect 2 to 3 inches per year. The iridescent blue coloration becomes more intense and extensive as the fish matures, with the best display occurring in adults over 6 inches. Full adult size is usually reached by age 3 to 4 years.',
      },
      {
        question: 'Why is my Electric Blue Jack Dempsey losing color?',
        answer:
          'Color loss in Electric Blue Jack Dempseys is usually caused by stress, poor water quality, inadequate diet, or inappropriate lighting. Ensure water parameters are stable (pH 7.0-8.0, temp 72-82°F), perform regular water changes, and feed a varied diet including color-enhancing foods rich in astaxanthin and spirulina. Appropriate LED lighting that enhances blue tones also makes a significant difference. Stress from aggressive tankmates can also cause color fading.',
      },
    ],
    relatedSlugs: ['cobalt-blue-zebra', 'flowerhorn-cichlid', 'dovii-cichlid'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 24,
  },

  // ──────────────────────────────────────────────
  // 62. Short-Body Albino Silver Arowana
  // ──────────────────────────────────────────────
  {
    commonName: 'Short-Body Albino Silver Arowana',
    scientificName: 'Osteoglossum bicirrhosum',
    slug: 'short-body-albino-silver-arowana',
    category: 'arowana',
    sku: 'TF-ARO-002',
    priceUSD: 1400,
    images: [
      {
        url: '/images/products/short-body-albino-silver-arowana-hero.jpg',
        alt: 'Short-Body Albino Silver Arowana (Osteoglossum bicirrhosum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Short-Body Albino Silver Arowana is one of the most visually arresting genetic variants in the arowana world. Selectively bred from the common Silver Arowana, this morph combines two distinct traits — a compressed, truncated body shape and full albinism — that together produce a fish unlike anything else in the hobby. The result is an animal with brilliant white-gold scales, vivid red eyes, and a stocky, almost discus-like profile that moves through the water with a distinctive undulating gait.

Unlike the standard Silver Arowana, which can reach three feet and requires a correspondingly massive enclosure, the short-body variant typically tops out at around twenty-four inches. That said, this is still a large, powerful fish that demands a minimum 200-gallon aquarium with a secure, weighted lid. Arowanas are legendary jumpers, and the short-body morph retains every ounce of that explosive surface-strike instinct. Filtration should be robust — we recommend a sump or canister system rated for at least twice the tank volume, with weekly water changes of 25 to 30 percent.

Water parameters should be kept within a temperature range of 75 to 86 degrees Fahrenheit and a pH between 6.0 and 7.0. The albino trait makes this fish slightly more sensitive to bright lighting, so subdued or adjustable LED fixtures are advisable. Floating plants can help diffuse overhead light and provide a sense of security.

Diet is straightforward carnivore fare: gut-loaded crickets, mealworms, market shrimp, and high-quality floating pellets. Feed every other day for adults, daily for juveniles. Avoid feeder fish from unquarantined sources, as parasites are a persistent risk with live prey.

This specimen ships via dedicated climate-controlled courier with our absolute live arrival guarantee. The Fish Collection's aquatics team will coordinate delivery logistics and walk you through acclimation protocols before shipment.`,
    seoDescription:
      'Short-Body Albino Silver Arowana for sale. Rare genetic morph with compressed body and full albinism. Live arrival guaranteed. From $1,400.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 200,
    maxSizeInches: 24,
    origin: 'South America',
    diet: 'Carnivore — live foods, insects, small fish',
    temperament: 'Aggressive',
    lifespan: '15 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'What makes a short-body arowana different from a standard Silver Arowana?',
        answer:
          'The short-body trait is a genetic mutation that compresses the spine, producing a truncated, stocky body profile. Combined with albinism, this creates a fish with a dramatically different silhouette and coloration compared to the wild-type Silver Arowana. Short-body specimens typically reach around 24 inches rather than the 36-plus inches of a standard silver.',
      },
      {
        question: 'Is the Short-Body Albino Silver Arowana hard to keep?',
        answer:
          'This fish requires expert-level care. The albino trait makes it more light-sensitive, and the short-body morphology can occasionally predispose the fish to swim bladder issues if water quality lapses. A stable, well-filtered 200-gallon-plus setup with consistent parameters is essential.',
      },
      {
        question: 'What do Short-Body Albino Silver Arowanas eat?',
        answer:
          'They are obligate carnivores that thrive on gut-loaded crickets, mealworms, market shrimp, and high-quality pellets. Feed adults every other day and juveniles daily. Avoid unquarantined feeder fish to prevent parasite introduction.',
      },
      {
        question: 'Can I keep a Short-Body Albino Silver Arowana with other fish?',
        answer:
          'Generally not recommended. Like all arowanas, this species is aggressive and predatory. Any tankmate small enough to fit in its mouth will be eaten. Large, robust bottom-dwellers like adult plecos or large catfish are the safest companions, but a species-only setup is ideal.',
      },
    ],
    relatedSlugs: ['platinum-arowana', 'golden-arowana', 'red-arowana-blood-red'],
    speciesGuideSlug: 'platinum-arowana',
    ratingAverage: 4.7,
    reviewCount: 8,
  },

  // ──────────────────────────────────────────────
  // 63. Golden Arowana
  // ──────────────────────────────────────────────
  {
    commonName: 'Golden Arowana',
    scientificName: 'Scleropages formosus',
    slug: 'golden-arowana',
    category: 'arowana',
    sku: 'TF-ARO-003',
    priceUSD: 12000,
    images: [
      {
        url: '/images/products/golden-arowana-hero.jpg',
        alt: 'Golden Arowana (Scleropages formosus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Golden Arowana — often called the Cross Back Golden or Malaysian Golden — is widely considered the second most coveted color morph of Scleropages formosus, surpassed only by the Platinum variant. What distinguishes a true Cross Back Golden from lesser gold variants is scale coverage: on a premium specimen, the gold coloration extends fully across the back, creating an unbroken mantle of 24-karat brilliance when viewed from above. Our current offering exhibits precisely this trait, with deep, saturated gold scales running from the fifth row down to the belly on both flanks.

In Southeast Asian Feng Shui tradition, the Golden Arowana is synonymous with wealth and prosperity. Collectors in Singapore, Malaysia, and Hong Kong have long regarded these fish as living symbols of financial fortune, and specimens with particularly intense coloration regularly command prices well into five figures. The fish we offer has been microchipped and comes with full CITES documentation tracing its lineage to a certified breeding facility in Peninsular Malaysia.

Housing requirements are substantial. A minimum 300-gallon aquarium is non-negotiable, with 500 gallons or larger preferred for a fish that can reach thirty-five inches at maturity. The tank must be securely covered — arowanas are explosive jumpers. Water temperature should be maintained between 79 and 86 degrees Fahrenheit, with a pH range of 6.5 to 7.5. Filtration should cycle the entire volume at least six times per hour.

Diet consists of a rotation of gut-loaded insects, market shrimp, and premium floating pellets. We supplement with occasional earthworms and river shrimp for variety. Feeder fish are used sparingly and only from quarantined stocks.

The Fish Collection ships this specimen via dedicated climate-controlled courier with triple-bagged, oxygen-injected packaging and a battery-powered heat pack. Our live arrival guarantee is absolute — full replacement or refund with no exceptions.`,
    seoDescription:
      'Golden Arowana for sale — Cross Back Golden with full scale coverage and CITES certification. Live arrival guaranteed. From $12,000 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 300,
    maxSizeInches: 35,
    origin: 'Southeast Asia',
    diet: 'Carnivore — live foods, insects, small fish',
    temperament: 'Predatory',
    lifespan: '20-25 years',
    waterParameters: {
      tempMin: 79,
      tempMax: 86,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'What is a Cross Back Golden Arowana?',
        answer:
          'A Cross Back Golden is a Golden Arowana where the gold coloration extends fully across the back — all six rows of scales show gold. Lesser specimens may only show gold on the lower rows. Cross Back Goldens from Malaysia are considered the finest and most valuable.',
      },
      {
        question: 'How much does a Golden Arowana cost?',
        answer:
          'Prices range from $5,000 for juvenile specimens to $50,000 or more for mature adults with exceptional coloration. Our current specimen at $12,000 reflects its verified Cross Back genetics and full CITES documentation.',
      },
      {
        question: 'Is it legal to buy a Golden Arowana?',
        answer:
          'Golden Arowanas (Scleropages formosus) are CITES Appendix I listed. International trade requires microchip documentation and permits. In the US, import is restricted under the Endangered Species Act. The Fish Collection sells exclusively within legal frameworks with full paperwork.',
      },
      {
        question: 'What tank size does a Golden Arowana need?',
        answer:
          'A minimum of 300 gallons is required, with 500 gallons or larger strongly recommended for adults that can reach 35 inches. The tank should be at least 8 feet long and must have a secure, weighted lid to prevent jumping.',
      },
    ],
    relatedSlugs: ['platinum-arowana', 'red-arowana-blood-red', 'super-red-arowana'],
    speciesGuideSlug: 'platinum-arowana',
    ratingAverage: 4.9,
    reviewCount: 6,
  },

  // ──────────────────────────────────────────────
  // 64. Red Arowana (Blood Red)
  // ──────────────────────────────────────────────
  {
    commonName: 'Red Arowana (Blood Red)',
    scientificName: 'Scleropages formosus',
    slug: 'red-arowana-blood-red',
    category: 'arowana',
    sku: 'TF-ARO-004',
    priceUSD: 18000,
    images: [
      {
        url: '/images/products/red-arowana-blood-red-hero.jpg',
        alt: 'Red Arowana Blood Red (Scleropages formosus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Blood Red Arowana is the crown jewel of Borneo's ancient waterways — a fish whose deep crimson coloration has captivated collectors and cultural enthusiasts for centuries. Among the many red variants of Scleropages formosus, the Blood Red designation is reserved for specimens exhibiting the most intense, uniform red pigmentation across the entire body, including the gill plates, fins, and scales. This is not an orange-tinted fish marketed as red; it is a genuine blood-crimson animal that darkens and intensifies with age.

Our current specimen originates from a CITES-certified breeding program in Borneo, where the finest Blood Red genetics have been carefully maintained across multiple generations. The fish arrives with full microchip documentation, lineage records, and health certification. At approximately twenty-eight inches, it is approaching its full adult size of thirty-five inches and displays the deep, saturated coloration that distinguishes a premium Blood Red from the more common Chili Red or Orange Red variants.

Housing a Blood Red Arowana requires a minimum 300-gallon aquarium, though we recommend 500 gallons or larger for long-term comfort. Temperature should be maintained between 79 and 86 degrees Fahrenheit, with pH between 6.5 and 7.5. Many experienced keepers use tanning agents or Indian almond leaves to create the slightly acidic, tea-stained water conditions that can enhance red pigmentation. The tank must have a secure lid — this is a powerful fish fully capable of launching itself out of an uncovered aquarium.

Feeding is straightforward: gut-loaded insects, market shrimp, and quality floating pellets form the dietary backbone. Some breeders supplement with colour-enhancing foods rich in astaxanthin and carotenoids to support pigment intensity, though genetics remain the primary driver of coloration.

The Fish Collection ships via dedicated climate-controlled courier with our absolute live arrival guarantee.`,
    seoDescription:
      'Blood Red Arowana for sale — genuine deep crimson Scleropages formosus from Borneo. CITES certified, live arrival guaranteed. From $18,000.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 300,
    maxSizeInches: 35,
    origin: 'Borneo',
    diet: 'Carnivore — live foods, insects, small fish',
    temperament: 'Predatory',
    lifespan: '20-25 years',
    waterParameters: {
      tempMin: 79,
      tempMax: 86,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'What makes a Blood Red Arowana different from other red variants?',
        answer:
          'Blood Red Arowanas display the deepest, most uniform crimson coloration of all red variants. Unlike Chili Red or Orange Red specimens, the Blood Red shows intense red across the entire body including gill plates and fins. This coloration intensifies with age and proper husbandry.',
      },
      {
        question: 'How do I enhance the red coloration of my arowana?',
        answer:
          'Genetics are the primary factor, but husbandry helps. Use subdued lighting, dark substrates, and tannin-rich water from Indian almond leaves. Foods containing astaxanthin and carotenoids can support pigment expression. Stress-free environments with stable water chemistry also play a significant role.',
      },
      {
        question: 'How big does a Blood Red Arowana get?',
        answer:
          'Blood Red Arowanas typically reach 30 to 35 inches in captivity. Growth is rapid in the first two years — roughly 2 inches per month — then slows considerably. Full adult size is usually achieved by age 4 to 5 years in a properly sized aquarium.',
      },
      {
        question: 'What tank setup does a Blood Red Arowana need?',
        answer:
          'A minimum 300-gallon tank with a secure, weighted lid is essential. Use dark substrate and subdued lighting to enhance coloration. Filtration should turn the volume 6 times per hour. Weekly 25-30% water changes are mandatory. Temperature 79-86°F, pH 6.5-7.5.',
      },
    ],
    relatedSlugs: ['platinum-arowana', 'golden-arowana', 'super-red-arowana'],
    speciesGuideSlug: 'platinum-arowana',
    ratingAverage: 5.0,
    reviewCount: 4,
  },

  // ──────────────────────────────────────────────
  // 65. Super Red Arowana
  // ──────────────────────────────────────────────
  {
    commonName: 'Super Red Arowana',
    scientificName: 'Scleropages formosus',
    slug: 'super-red-arowana',
    category: 'arowana',
    sku: 'TF-ARO-005',
    priceUSD: 25000,
    images: [
      {
        url: '/images/products/super-red-arowana-hero.jpg',
        alt: 'Super Red Arowana (Scleropages formosus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Super Red Arowana from the Kapuas River system in West Kalimantan, Borneo, represents the absolute pinnacle of red arowana breeding. This is not simply a red fish — it is a living artifact of decades of selective breeding, where the most intensely pigmented specimens from the Kapuas basin have been paired generation after generation to produce fish with coloration so deep and luminous that they appear to radiate light. The term "Super Red" is not marketing; it is a classification earned only by fish whose red pigmentation extends uniformly across all six scale rows, the gill plates, fins, and lips.

Our current specimen is a verified Kapuas River lineage fish from one of the most respected breeding operations in Indonesian Borneo. It arrives with full CITES microchip documentation, genetic lineage records, and a certificate of authenticity. At current size, the fish already displays the hallmark flame-red coloration that will continue to deepen and intensify over the next several years. Mature Super Reds from premium bloodlines can appear almost incandescent under proper lighting conditions.

The aquarium requirements mirror those of other large Scleropages formosus: a minimum 300-gallon tank with a secure lid, robust filtration cycling the volume six times hourly, and stable water chemistry at 79 to 86 degrees Fahrenheit with pH between 6.5 and 7.5. Dark substrates and backgrounds are strongly recommended to bring out the full depth of the red pigmentation. Many collectors use blackwater conditions with tannins from Indian almond leaves or driftwood.

Feeding consists of gut-loaded insects, market shrimp, premium pellets, and occasional earthworms. Colour-enhancing supplements containing astaxanthin can support pigment maintenance but will not create coloration that the genetics do not support.

This is a once-in-a-generation specimen. The Fish Collection ships via dedicated climate-controlled courier with our absolute live arrival guarantee.`,
    seoDescription:
      'Super Red Arowana for sale — Kapuas River lineage, verified genetics, full CITES docs. Live arrival guaranteed. From $25,000 at The Fish Collection.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 300,
    maxSizeInches: 35,
    origin: 'Kapuas River, Borneo',
    diet: 'Carnivore — live foods, insects, small fish',
    temperament: 'Predatory',
    lifespan: '20-25 years',
    waterParameters: {
      tempMin: 79,
      tempMax: 86,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'What makes a Super Red Arowana different from a Blood Red?',
        answer:
          'Super Red Arowanas represent the highest grade of red coloration, with pigment extending uniformly across all six scale rows, fins, gill plates, and lips. Blood Reds are excellent but may show slightly less uniformity. Super Red is a classification reserved for the most intensely pigmented specimens.',
      },
      {
        question: 'Why are Kapuas River Super Reds so valuable?',
        answer:
          'The Kapuas River system in West Kalimantan has historically produced the most intensely colored red arowanas in the world. Decades of selective breeding from this specific gene pool have created bloodlines with unmatched pigmentation depth. Verified Kapuas lineage commands a significant premium.',
      },
      {
        question: 'How do I maintain the red color of my Super Red Arowana?',
        answer:
          'Use dark substrates, subdued lighting, and tannin-rich blackwater conditions. Feed colour-supporting foods with natural astaxanthin and carotenoids. Maintain stress-free conditions with stable water chemistry. Genetics are the primary driver, but proper husbandry maximizes pigment expression.',
      },
      {
        question: 'What is the price range for Super Red Arowanas?',
        answer:
          'Super Red Arowanas range from $10,000 for juveniles to over $50,000 for mature adults with exceptional coloration and verified Kapuas River genetics. Our specimen at $25,000 reflects its premium lineage, current coloration intensity, and complete CITES documentation.',
      },
    ],
    relatedSlugs: ['platinum-arowana', 'golden-arowana', 'red-arowana-blood-red'],
    speciesGuideSlug: 'platinum-arowana',
    ratingAverage: 5.0,
    reviewCount: 3,
  },

  // ──────────────────────────────────────────────
  // 66. Cobalt Blue Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Cobalt Blue Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'cobalt-blue-discus',
    category: 'discus',
    sku: 'TF-DIS-003',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/cobalt-blue-discus-hero.jpg',
        alt: 'Cobalt Blue Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Cobalt Blue Discus is a stunning example of selective breeding at its finest — a fish that transforms any warm, soft-water aquarium into a living canvas of electric blue. Unlike the Blue Diamond variety, which presents a uniform metallic sheen, the Cobalt Blue features intricate striations of deep cobalt overlaid on a slightly lighter base, creating a layered, almost three-dimensional visual effect that shifts and shimmers as the fish moves through the water column.

Discus are schooling fish by nature, and the Cobalt Blue is no exception. We strongly recommend purchasing groups of five or more to see natural social behavior and reduce individual stress. In a properly maintained school, these fish establish gentle hierarchies, display vibrant feeding responses, and engage in the fascinating pair-bonding rituals that make Discus one of the most behaviorally rewarding freshwater species to observe.

Housing requires a minimum 75-gallon aquarium for a small group, with larger tanks always preferred. Temperature is critical — Discus demand a narrow band of 82 to 88 degrees Fahrenheit, significantly warmer than most tropical community setups. pH should be maintained between 6.0 and 7.0, with very soft to moderately soft water. Filtration must be efficient but gentle; Discus dislike strong current. Sponge filters or spray bars that diffuse outflow work exceptionally well.

Diet should include high-quality Discus-specific pellets, frozen bloodworms, brine shrimp, and beef heart preparations. Feed two to three times daily in smaller portions rather than one large feeding. Variety is the key to vibrant coloration and robust immune function.

Weekly water changes of 30 to 50 percent are non-negotiable with Discus. These fish are sensitive to dissolved organics, and pristine water quality is the single most important factor in long-term success.

The Fish Collection ships all Discus with insulated, heat-packed packaging and our live arrival guarantee.`,
    seoDescription:
      'Cobalt Blue Discus for sale — vibrant electric blue striation pattern. Schooling groups available. Live arrival guaranteed. From $120 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 8,
    origin: 'Amazon Basin (captive-bred)',
    diet: 'Carnivore — Discus pellets, bloodworms, brine shrimp, beef heart',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 12,
    faqs: [
      {
        question: 'How many Cobalt Blue Discus should I keep together?',
        answer:
          'We recommend a minimum group of five. Discus are social fish that display natural schooling behavior and reduced stress in groups. Keeping fewer than five often results in bullying, with dominant individuals harassing subordinates. Larger groups of eight or more produce the most harmonious social dynamics.',
      },
      {
        question: 'What temperature do Cobalt Blue Discus need?',
        answer:
          'Discus require warmer water than most tropical fish — 82 to 88°F is the target range. This elevated temperature is non-negotiable and limits compatible tankmates to species that tolerate similar warmth. A reliable heater with a backup is essential for Discus keeping.',
      },
      {
        question: 'Are Cobalt Blue Discus hard to keep?',
        answer:
          'Discus are considered advanced-level fish due to their sensitivity to water quality, narrow temperature requirements, and susceptibility to stress. They reward diligent keepers with extraordinary beauty and fascinating behavior, but they are not forgiving of neglect or inconsistent maintenance.',
      },
      {
        question: 'What do Cobalt Blue Discus eat?',
        answer:
          'Feed a varied diet of Discus-specific pellets, frozen bloodworms, brine shrimp, and beef heart preparations. Two to three small feedings daily produce better results than one large feeding. Dietary variety is critical for maintaining vibrant coloration and strong immune health.',
      },
    ],
    relatedSlugs: ['blue-diamond-discus', 'pigeon-blood-discus', 'red-turquoise-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.8,
    reviewCount: 18,
  },

  // ──────────────────────────────────────────────
  // 67. Wild Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Wild Discus',
    scientificName: 'Symphysodon haraldi',
    slug: 'wild-discus',
    category: 'discus',
    sku: 'TF-DIS-004',
    priceUSD: 250,
    images: [
      {
        url: '/images/products/wild-discus-hero.jpg',
        alt: 'Wild Discus (Symphysodon haraldi) — wild-caught specimen from Rio Purus',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Wild Discus represents something increasingly rare in the modern aquarium hobby — an unaltered, wild-caught specimen displaying the natural color patterns and behavioral repertoire that millions of years of Amazonian evolution have produced. Our current offering is Symphysodon haraldi collected from the Rio Purus system in Peru, a tributary known for producing Discus with extraordinary vertical barring, warm brown-to-olive base coloration, and striking blue-green iridescent highlights along the flanks and fins.

Wild Discus are fundamentally different from their captive-bred counterparts in several important ways. Their coloration is subtler but more complex, with patterns that no selective breeding program has replicated. Their behavior is more cautious and nuanced — these fish have survived in waters shared with piranhas, caimans, and electric eels. And their water chemistry requirements are more exacting: wild specimens demand very soft, acidic water with pH between 5.5 and 6.5 and temperatures from 82 to 90 degrees Fahrenheit.

Housing requires a minimum 75-gallon tank with dim lighting, dark substrate, and abundant driftwood to simulate their blackwater habitat. Tannin-stained water from Indian almond leaves or peat filtration is strongly recommended. These fish are initially shy and may take several weeks to fully acclimate to aquarium life. Patience during this transition period is critical.

Diet in the wild consists of small invertebrates, insect larvae, and organic detritus. In captivity, offer frozen bloodworms, live blackworms, brine shrimp, and high-quality Discus pellets once the fish are settled. Wild specimens may initially refuse prepared foods, so having live and frozen options available during acclimation is essential.

Wild Discus are a specialist-level commitment. They reward experienced keepers with behaviors and beauty that simply cannot be found in tank-bred strains.

The Fish Collection ships with insulated, oxygen-injected packaging and our live arrival guarantee.`,
    seoDescription:
      'Wild Discus for sale — Symphysodon haraldi, wild-caught from Rio Purus, Peru. Specialist-level specimen. Live arrival guaranteed. From $250.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 75,
    maxSizeInches: 9,
    origin: 'Rio Purus, Peru',
    diet: 'Carnivore — bloodworms, blackworms, brine shrimp, Discus pellets',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 90,
      phMin: 5.5,
      phMax: 6.5,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'Are wild Discus harder to keep than captive-bred?',
        answer:
          'Yes. Wild Discus require more precise water chemistry (very soft, acidic water with pH 5.5-6.5), a longer acclimation period, and may initially refuse prepared foods. They are recommended only for experienced Discus keepers who can maintain stable blackwater conditions.',
      },
      {
        question: 'What makes wild Discus special compared to bred varieties?',
        answer:
          'Wild Discus display natural coloration patterns shaped by millions of years of evolution — subtle, complex, and unreplicable through selective breeding. Their behavior is more nuanced, and they represent a direct connection to Amazonian ecosystems. Many serious collectors consider them the purest form of the species.',
      },
      {
        question: 'What water conditions do wild Discus need?',
        answer:
          'Wild Discus demand very soft, acidic water: pH 5.5-6.5, temperature 82-90°F, and near-zero hardness. Tannin-stained blackwater conditions using Indian almond leaves or peat filtration are strongly recommended. RO or RO/DI water is typically necessary to achieve these parameters.',
      },
      {
        question: 'How long does it take wild Discus to acclimate?',
        answer:
          'Expect a 2-4 week acclimation period during which the fish may be shy, hide frequently, and refuse prepared foods. Dim lighting, dark substrate, and the availability of live foods like blackworms and brine shrimp significantly ease this transition. Patience is essential.',
      },
    ],
    relatedSlugs: ['blue-diamond-discus', 'cobalt-blue-discus', 'pigeon-blood-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.9,
    reviewCount: 7,
  },

  // ──────────────────────────────────────────────
  // 68. Red Turquoise Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Red Turquoise Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'red-turquoise-discus',
    category: 'discus',
    sku: 'TF-DIS-005',
    priceUSD: 150,
    images: [
      {
        url: '/images/products/red-turquoise-discus-hero.jpg',
        alt: 'Red Turquoise Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Red Turquoise Discus is one of the most visually complex and sought-after strains in the Discus hobby — a fish that marries deep, warm red-orange base coloration with bold turquoise-blue striations that wind across the body and extend into the dorsal and anal fins. The interplay between these two contrasting color families creates a stained-glass effect that intensifies under proper lighting and against a dark substrate background.

This strain has been selectively refined over decades by Asian and European breeders who have pushed the contrast ratio between red and turquoise to remarkable extremes. The best specimens — including those we select for The Fish Collection — show crisp, well-defined turquoise lines against a uniformly deep red base with no muddy intermediate tones. This clarity of pattern is the hallmark of superior genetics and is what separates a premium Red Turquoise from a merely acceptable one.

As with all Discus, the Red Turquoise is a warm-water, soft-water species that demands disciplined husbandry. Temperature must be maintained between 82 and 88 degrees Fahrenheit — considerably warmer than a standard tropical community tank. pH should sit between 6.0 and 7.0, with soft to moderately soft water. A minimum 75-gallon aquarium is required for a group, and groups are essential; solitary Discus are stressed Discus.

Feed a rotation of Discus-specific pellets, frozen bloodworms, brine shrimp, and beef heart mixtures. The carotenoid content in quality foods directly supports the expression of red pigmentation, so dietary variety is both a health and aesthetic priority. Water changes of 30 to 50 percent weekly are mandatory.

The Fish Collection ships all Discus in insulated, heat-packed containers with our live arrival guarantee. We recommend ordering groups for the best social dynamics and visual impact.`,
    seoDescription:
      'Red Turquoise Discus for sale — vivid red-orange base with turquoise striations. Premium bred strain. Live arrival guaranteed. From $150.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 8,
    origin: 'Amazon Basin (captive-bred)',
    diet: 'Carnivore — Discus pellets, bloodworms, brine shrimp, beef heart',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 10,
    faqs: [
      {
        question: 'What makes Red Turquoise Discus different from other Discus strains?',
        answer:
          'Red Turquoise Discus feature a distinctive dual-color pattern: a deep red-orange base overlaid with bright turquoise-blue striations. This contrast creates a stained-glass effect not found in solid-color strains like Blue Diamond or Pigeon Blood.',
      },
      {
        question: 'How do I enhance the red color in my Red Turquoise Discus?',
        answer:
          'Feed foods rich in natural carotenoids and astaxanthin, such as quality Discus pellets and color-enhancing frozen foods. Dark substrates and backgrounds help display coloration. Stable water conditions and low stress are equally important for maintaining vibrant pigmentation.',
      },
      {
        question: 'Can I mix Red Turquoise Discus with other Discus strains?',
        answer:
          'Absolutely. Different Discus strains have identical care requirements and coexist peacefully. Mixing strains in a group creates a spectacular visual display. Just maintain the recommended minimum group size of five or more fish total.',
      },
      {
        question: 'How often should I change water for Red Turquoise Discus?',
        answer:
          'Weekly water changes of 30-50% are essential for Discus health. Some dedicated breeders perform even more frequent changes. Use temperature-matched, dechlorinated water and avoid dramatic parameter swings during changes. Consistency is more important than perfection.',
      },
    ],
    relatedSlugs: ['cobalt-blue-discus', 'blue-diamond-discus', 'golden-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.7,
    reviewCount: 14,
  },

  // ──────────────────────────────────────────────
  // 69. Golden Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Golden Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'golden-discus',
    category: 'discus',
    sku: 'TF-DIS-006',
    priceUSD: 180,
    images: [
      {
        url: '/images/products/golden-discus-hero.jpg',
        alt: 'Golden Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Golden Discus is a warm, radiant strain that brings the glow of burnished gold to the planted aquarium. Selectively bred for a uniform yellow-gold base coloration with minimal dark barring, the best specimens — like those we source for The Fish Collection — display a clean, luminous body tone that ranges from pale champagne in subdued lighting to deep 18-karat gold under carefully calibrated LEDs. The fins are typically translucent with a golden wash, and the eye is a vivid red-orange that provides a striking focal point.

This strain emerged from decades of selective breeding within the broader Discus hobby, with German and Asian breeders playing pivotal roles in refining the gold coloration to its current level of intensity and uniformity. The challenge has always been eliminating the dark stress bars and vertical barring that Discus naturally display when uncomfortable — the best Golden Discus genetics produce fish that maintain their gold tone even under moderate stress, indicating truly stabilized coloration rather than superficial pigmentation.

Care requirements follow the standard Discus template: a minimum 75-gallon aquarium, water temperature between 82 and 88 degrees Fahrenheit, pH of 6.0 to 7.0, and soft to moderately soft water. Weekly water changes of 30 to 50 percent are essential. Discus are schooling fish, so groups of five or more are necessary for natural social behavior and reduced individual stress. The Golden Discus is peaceful and mixes beautifully with other Discus strains.

Diet should include high-quality Discus pellets, frozen bloodworms, brine shrimp, and beef heart preparations. Foods containing carotenoid pigments can support the gold coloration, though genetics remain the primary driver. Feed two to three small meals daily for optimal health and color intensity.

The Fish Collection ships all Discus with insulated, heat-packed packaging and our absolute live arrival guarantee.`,
    seoDescription:
      'Golden Discus for sale — luminous yellow-gold coloration, premium bred strain. Schooling groups available. Live arrival guaranteed. From $180.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 8,
    origin: 'Amazon Basin (captive-bred)',
    diet: 'Carnivore — Discus pellets, bloodworms, brine shrimp, beef heart',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'What color are Golden Discus?',
        answer:
          'Golden Discus range from pale champagne to deep 18-karat gold, depending on genetics, diet, and lighting. The best specimens show uniform gold across the body with minimal dark barring, red-orange eyes, and translucent golden fins.',
      },
      {
        question: 'Do Golden Discus lose their color?',
        answer:
          'Well-bred Golden Discus maintain their coloration reliably. Temporary color fading can occur during stress, illness, or poor water quality. Dark stress bars may appear but should recede once conditions stabilize. Consistent husbandry and proper diet keep colors at their best.',
      },
      {
        question: 'Can Golden Discus be kept with other Discus strains?',
        answer:
          'Yes, Golden Discus mix perfectly with all other Discus strains. They share identical care requirements and social behavior. A mixed-strain school creates an exceptionally colorful display. Maintain a minimum group of five total fish.',
      },
      {
        question: 'What lighting brings out the best color in Golden Discus?',
        answer:
          'Warm-tone LEDs in the 6500-8000K range enhance gold coloration. Avoid excessively cool or blue lighting which can wash out warm tones. Dimmer capability is useful — moderate intensity brings out the metallic sheen without stressing the fish.',
      },
    ],
    relatedSlugs: ['cobalt-blue-discus', 'pigeon-blood-discus', 'red-turquoise-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.6,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 70. Checkerboard Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Checkerboard Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'checkerboard-discus',
    category: 'discus',
    sku: 'TF-DIS-007',
    priceUSD: 200,
    images: [
      {
        url: '/images/products/checkerboard-discus-hero.jpg',
        alt: 'Checkerboard Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Checkerboard Discus is one of the most distinctive and visually complex patterned strains in the Discus world. Named for the grid-like arrangement of red and turquoise markings that cover the body in an almost tile-like mosaic, this strain takes the familiar Discus disc shape and transforms it into something that resembles hand-painted porcelain. Each fish is unique in its pattern distribution, making every specimen a one-of-a-kind work of living art.

The Checkerboard pattern emerged from careful crossbreeding of turquoise and red strains, with breeders selecting for increasingly defined, regular pattern spacing over many generations. The most prized specimens — the caliber we stock at The Fish Collection — display crisp, well-separated pattern elements with high contrast between the red-orange and blue-turquoise components. Muddy or blurred patterning indicates inferior genetics, and we reject any fish that does not meet our standard of clarity.

Care requirements are identical to all Discus strains: warm water between 82 and 88 degrees Fahrenheit, pH of 6.0 to 7.0, soft water, and a minimum 75-gallon aquarium for a school. The Checkerboard is a gentle, social fish that should always be kept in groups of five or more. Tankmates must tolerate the elevated temperatures that Discus demand; cardinal tetras, rummy-nose tetras, and Corydoras sterbai are among the classic compatible species.

Feeding follows standard Discus protocol: high-quality pellets, frozen bloodworms, brine shrimp, and beef heart preparations served in two to three small daily meals. Weekly water changes of 30 to 50 percent maintain the pristine conditions these fish require.

The Checkerboard Discus is an advanced-level fish that rewards meticulous care with a display no other freshwater species can match. The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Checkerboard Discus for sale — unique mosaic pattern of red and turquoise. One-of-a-kind specimens. Live arrival guaranteed. From $200.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 8,
    origin: 'Amazon Basin (captive-bred)',
    diet: 'Carnivore — Discus pellets, bloodworms, brine shrimp, beef heart',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'What does a Checkerboard Discus look like?',
        answer:
          'Checkerboard Discus display a grid-like mosaic of red-orange and turquoise-blue markings arranged in an almost tile-like pattern across the body. Each fish has a unique pattern, making every specimen one-of-a-kind. The best examples show crisp, high-contrast patterning with well-defined boundaries.',
      },
      {
        question: 'Are all Checkerboard Discus patterned the same?',
        answer:
          'No — each Checkerboard Discus has a unique pattern distribution, much like a fingerprint. While the overall checkerboard character is consistent, the exact arrangement, spacing, and color intensity of individual pattern elements varies from fish to fish.',
      },
      {
        question: 'What tankmates work with Checkerboard Discus?',
        answer:
          'Choose species that tolerate Discus temperatures (82-88°F): cardinal tetras, rummy-nose tetras, Corydoras sterbai, and small peaceful catfish are classic companions. Avoid aggressive or nippy species. Other Discus strains are always compatible.',
      },
      {
        question: 'How big do Checkerboard Discus get?',
        answer:
          'Checkerboard Discus reach approximately 8 inches in diameter when fully grown, which typically takes 18-24 months with proper feeding and water quality. Their circular body shape makes them appear larger than similarly sized elongated fish.',
      },
    ],
    relatedSlugs: ['red-turquoise-discus', 'cobalt-blue-discus', 'leopard-skin-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.8,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 71. Leopard Skin Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Leopard Skin Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'leopard-skin-discus',
    category: 'discus',
    sku: 'TF-DIS-008',
    priceUSD: 160,
    images: [
      {
        url: '/images/products/leopard-skin-discus-hero.jpg',
        alt: 'Leopard Skin Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Leopard Skin Discus is a captivating spotted strain that breaks from the traditional striped and solid-color Discus varieties with a bold, irregular spotting pattern reminiscent of its big-cat namesake. Red-brown spots of varying size are scattered across a lighter cream-to-gold base, creating a wild, organic appearance that stands apart in any Discus collection. The spots extend into the fins, and the overall effect is both elegant and untamed — a look that appeals to collectors seeking something beyond the clean lines of turquoise and pigeon blood strains.

This strain was developed by crossing red-spotted variants and selecting aggressively for spot density, distribution, and contrast over many generations. The finest Leopard Skin specimens — the standard we hold at The Fish Collection — show well-distributed spots with clean edges against a bright, warm base color. Specimens with blotchy or irregular spot boundaries are culled from our selection process.

Husbandry mirrors all Discus varieties: maintain water temperature between 82 and 88 degrees Fahrenheit, pH between 6.0 and 7.0, and soft to moderately soft water. A minimum 75-gallon tank for a group of five or more fish is the baseline. Discus are sensitive to water quality, so efficient biological filtration and weekly water changes of 30 to 50 percent are mandatory rather than optional.

The Leopard Skin Discus is peaceful and compatible with all other Discus strains, making it an excellent addition to a mixed-strain school. Feed high-quality Discus pellets, frozen bloodworms, brine shrimp, and beef heart preparations two to three times daily. A diverse diet supports both immune function and the expression of the spotted pigmentation pattern.

The Fish Collection ships with insulated, heat-packed packaging and our live arrival guarantee. Group discounts are available for orders of five or more.`,
    seoDescription:
      'Leopard Skin Discus for sale — bold spotted pattern on warm gold base. Premium bred strain. Live arrival guaranteed. From $160 at The Fish Collection.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 8,
    origin: 'Amazon Basin (captive-bred)',
    diet: 'Carnivore — Discus pellets, bloodworms, brine shrimp, beef heart',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'What does a Leopard Skin Discus look like?',
        answer:
          'Leopard Skin Discus feature irregular red-brown spots scattered across a cream-to-gold base, resembling leopard print. Spots vary in size and extend into the fins. Each fish has a unique spot pattern, and the overall appearance is wilder and more organic than striped or solid Discus strains.',
      },
      {
        question: 'Do the spots on Leopard Skin Discus change over time?',
        answer:
          'The spot pattern is genetically fixed but can become more defined and vivid as the fish matures. Juvenile Leopard Skins may appear less distinct, with spots sharpening and intensifying at around 4-6 months of age. Proper diet and water quality support the best color expression.',
      },
      {
        question: 'Can Leopard Skin Discus breed with other Discus strains?',
        answer:
          'Yes, all Discus strains can interbreed. Crossing Leopard Skin with other strains will produce hybrid offspring with varying patterns. If you want to maintain the pure Leopard Skin look, keep breeding pairs of the same strain.',
      },
      {
        question: 'Are Leopard Skin Discus good for beginners?',
        answer:
          'No Discus strain is truly beginner-friendly. The Leopard Skin shares the same advanced care requirements as all Discus: precise temperature control, soft acidic water, frequent water changes, and sensitivity to stress. Prior experience with tropical fish is strongly recommended.',
      },
    ],
    relatedSlugs: ['checkerboard-discus', 'red-turquoise-discus', 'pigeon-blood-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.6,
    reviewCount: 10,
  },

  // ──────────────────────────────────────────────
  // 72. White Butterfly Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'White Butterfly Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'white-butterfly-discus',
    category: 'discus',
    sku: 'TF-DIS-009',
    priceUSD: 220,
    images: [
      {
        url: '/images/products/white-butterfly-discus-hero.jpg',
        alt: 'White Butterfly Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The White Butterfly Discus is among the most ethereal and visually striking strains ever developed — a near-pure white fish with delicate, translucent fins that flutter like butterfly wings as it glides through the water column. The body is a clean, luminous white with minimal markings, while the extended dorsal, anal, and caudal fins are diaphanous and softly rounded, giving the fish an almost ghostly elegance that makes it the centerpiece of any Discus display tank.

This strain is the product of extensive selective breeding for both white coloration and extended finnage. Achieving both traits simultaneously in a single fish is exceptionally difficult — many white Discus have standard finnage, and many long-finned varieties carry pigmentation. The White Butterfly represents the successful convergence of both goals, and premium specimens like those we stock at The Fish Collection command a corresponding premium.

Care requirements include a minimum 75-gallon aquarium for a small group, with water temperature maintained between 82 and 88 degrees Fahrenheit and pH between 6.0 and 7.0. The white coloration makes any water quality issues immediately visible — yellowing or discoloration of the body is an early warning sign of elevated dissolved organics. This makes the White Butterfly both a beautiful display fish and an effective biological indicator for tank health.

The extended fins are more prone to damage than standard-length fins, so avoid sharp decorations and aggressive tankmates. Smooth driftwood, rounded stones, and live plants are ideal. Feed Discus-specific pellets, frozen bloodworms, brine shrimp, and beef heart preparations two to three times daily.

Weekly water changes of 30 to 50 percent are non-negotiable. The White Butterfly's pristine appearance demands pristine water. The Fish Collection ships with insulated, heat-packed packaging and our live arrival guarantee.`,
    seoDescription:
      'White Butterfly Discus for sale — ethereal white body with extended butterfly finnage. Premium rare strain. Live arrival guaranteed. From $220.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 8,
    origin: 'Amazon Basin (captive-bred)',
    diet: 'Carnivore — Discus pellets, bloodworms, brine shrimp, beef heart',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'What makes a White Butterfly Discus different from a regular white Discus?',
        answer:
          'The "Butterfly" designation refers to the extended, flowing finnage that gives the dorsal, anal, and caudal fins a diaphanous, butterfly-wing appearance. Regular white Discus have standard-length fins. Combining both white coloration and extended finnage in a single fish is genetically challenging.',
      },
      {
        question: 'Are White Butterfly Discus more delicate than other strains?',
        answer:
          'Somewhat. Their extended fins are more susceptible to damage from sharp decorations or fin-nipping tankmates. The white coloration also makes water quality issues more visible. They require the same careful husbandry as all Discus, with extra attention to fin health.',
      },
      {
        question: 'Why is my White Butterfly Discus turning yellow?',
        answer:
          'Yellowing in white Discus usually indicates elevated dissolved organics in the water. Increase water change frequency and volume, check filtration efficiency, and test for ammonia and nitrate. The white body acts as an early warning system for water quality degradation.',
      },
      {
        question: 'What tankmates are safe with White Butterfly Discus?',
        answer:
          'Choose small, peaceful species that will not nip extended fins: cardinal tetras, rummy-nose tetras, and Corydoras sterbai are ideal. Avoid barbs, serpae tetras, or any species known for fin nipping. Other Discus strains are always compatible.',
      },
    ],
    relatedSlugs: ['blue-diamond-discus', 'golden-discus', 'cobalt-blue-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.9,
    reviewCount: 6,
  },

  // ──────────────────────────────────────────────
  // 73. Royal Blue Discus
  // ──────────────────────────────────────────────
  {
    commonName: 'Royal Blue Discus',
    scientificName: 'Symphysodon aequifasciatus',
    slug: 'royal-blue-discus',
    category: 'discus',
    sku: 'TF-DIS-010',
    priceUSD: 175,
    images: [
      {
        url: '/images/products/royal-blue-discus-hero.jpg',
        alt: 'Royal Blue Discus (Symphysodon aequifasciatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Royal Blue Discus occupies a distinguished place in the Discus hierarchy — a strain that bridges the gap between the intense, solid Blue Diamond and the more patterned turquoise varieties. Its coloration is a deep, regal blue with subtle horizontal striations that add depth and visual complexity without overwhelming the base color. The effect is a fish that appears to shift between solid blue and patterned blue depending on lighting angle and mood, making it endlessly fascinating to observe.

This strain traces its lineage to early German and Asian breeding programs that worked to intensify the natural blue iridescence found in wild Discus. Unlike the Blue Diamond, which was bred for complete pattern elimination, the Royal Blue retains just enough of the ancestral striping to create a nuanced, layered appearance. Many experienced Discus keepers consider it the most elegant of the blue varieties for precisely this reason.

Housing follows standard Discus requirements: a minimum 75-gallon aquarium, water temperature between 82 and 88 degrees Fahrenheit, pH of 6.0 to 7.0, and soft water. Groups of five or more are essential for social wellbeing. The Royal Blue pairs beautifully with contrasting warm-toned strains like Pigeon Blood and Red Turquoise in a mixed school, creating a display that showcases the full color spectrum available in modern Discus breeding.

Diet consists of Discus-specific pellets, frozen bloodworms, brine shrimp, and beef heart preparations. Feed two to three small meals daily. A high-quality, varied diet is critical for maintaining the depth and intensity of the blue coloration over time.

Weekly water changes of 30 to 50 percent are mandatory. Discus are unforgiving of lapsed maintenance, and the Royal Blue is no exception. The Fish Collection ships with insulated, heat-packed packaging and our absolute live arrival guarantee.`,
    seoDescription:
      'Royal Blue Discus for sale — deep regal blue with subtle striations. Premium bred strain, groups available. Live arrival guaranteed. From $175.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 8,
    origin: 'Amazon Basin (captive-bred)',
    diet: 'Carnivore — Discus pellets, bloodworms, brine shrimp, beef heart',
    temperament: 'Peaceful schooling',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 82,
      tempMax: 88,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 9,
    faqs: [
      {
        question: 'How is a Royal Blue Discus different from a Blue Diamond Discus?',
        answer:
          'Blue Diamond Discus are bred for solid, pattern-free blue coloration. Royal Blue Discus retain subtle horizontal striations that add visual depth and complexity. Many Discus enthusiasts consider the Royal Blue more elegant for its nuanced, layered appearance compared to the uniform Blue Diamond.',
      },
      {
        question: 'What brings out the best color in Royal Blue Discus?',
        answer:
          'Cool-toned LED lighting in the 10000-12000K range enhances blue coloration beautifully. Dark substrates and backgrounds provide maximum contrast. A high-quality diet and pristine water conditions are essential for maintaining deep, vibrant blue tones long-term.',
      },
      {
        question: 'Do Royal Blue Discus pair well with other strains?',
        answer:
          'Exceptionally well. The deep blue contrasts beautifully with warm-toned strains like Pigeon Blood, Red Turquoise, and Golden Discus. A mixed-strain school showcasing multiple color families is one of the most spectacular displays in freshwater fishkeeping.',
      },
      {
        question: 'How long do Royal Blue Discus live?',
        answer:
          'With proper care, Royal Blue Discus live 10 to 15 years. Longevity depends heavily on water quality, diet variety, and stress management. Consistent husbandry and a stable social group are the keys to a long, healthy life.',
      },
    ],
    relatedSlugs: ['blue-diamond-discus', 'cobalt-blue-discus', 'red-turquoise-discus'],
    speciesGuideSlug: 'blue-diamond-discus',
    ratingAverage: 4.7,
    reviewCount: 13,
  },

  // ──────────────────────────────────────────────
  // 74. Figure Eight Puffer Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Figure Eight Puffer Fish',
    scientificName: 'Tetraodon biocellatus',
    slug: 'figure-eight-puffer-fish',
    category: 'pufferfish',
    sku: 'TF-PUF-003',
    priceUSD: 30,
    images: [
      {
        url: '/images/products/figure-eight-puffer-fish-hero.jpg',
        alt: 'Figure Eight Puffer Fish (Tetraodon biocellatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Figure Eight Puffer Fish is one of the most accessible and charming members of the pufferfish family — a small, personable species named for the distinctive figure-eight or eyespot pattern on its dorsal surface. With bright yellow-green coloration, bold black markings, and the trademark puffer ability to inflate when threatened, this fish packs an outsized personality into a compact three-inch frame. It is one of the few pufferfish species suitable for intermediate-level aquarists, making it an excellent gateway into the fascinating world of puffer keeping.

A critical detail that many retailers overlook: the Figure Eight Puffer is a brackish water species. While it can survive in pure freshwater for extended periods, it thrives and lives significantly longer in water with a specific gravity of 1.005 to 1.008. This means adding marine salt mix to the aquarium — not aquarium salt, but proper marine-grade salt that provides the full mineral complement these fish require. A hydrometer or refractometer is essential for monitoring salinity.

A minimum 30-gallon aquarium is recommended for a single specimen. Temperature should be maintained between 72 and 79 degrees Fahrenheit, with pH between 7.0 and 8.0. The brackish requirement limits compatible tankmates to species that tolerate or prefer similar conditions: bumblebee gobies, mollies, and certain species of chromides work well.

Diet must include hard-shelled foods to wear down the continuously growing beak-like teeth that all pufferfish possess. Snails, small crustaceans, clams, and mussels should form the dietary backbone, supplemented with frozen bloodworms and krill. Without hard foods, the teeth can overgrow and prevent the fish from eating — a common and entirely preventable problem.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Figure Eight Puffer Fish for sale — charming brackish-water puffer with bold markings. Intermediate-level species. Live arrival guaranteed. $30.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 30,
    maxSizeInches: 3,
    origin: 'Southeast Asia',
    diet: 'Carnivore — snails, crustaceans, frozen bloodworms, krill',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 79,
      phMin: 7.0,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 15,
    faqs: [
      {
        question: 'Is the Figure Eight Puffer freshwater or saltwater?',
        answer:
          'The Figure Eight Puffer is a brackish water species that thrives at a specific gravity of 1.005-1.008. While it can survive in pure freshwater temporarily, it lives longer and healthier in properly maintained brackish conditions using marine salt mix.',
      },
      {
        question: 'What do Figure Eight Puffers eat?',
        answer:
          'Feed a diet heavy in hard-shelled foods: snails, small crustaceans, clams, and mussels. These are essential for wearing down their continuously growing teeth. Supplement with frozen bloodworms and krill. Without hard foods, teeth can overgrow and prevent feeding.',
      },
      {
        question: 'Can Figure Eight Puffers live with other fish?',
        answer:
          'They can, but choose tankmates carefully. Their semi-aggressive nature and brackish water needs limit options. Bumblebee gobies, mollies, and certain chromides are compatible. Avoid slow-moving fish with long fins, as puffers may nip.',
      },
      {
        question: 'How big do Figure Eight Puffers get?',
        answer:
          'Figure Eight Puffers reach approximately 3 inches in captivity. Despite their small size, they need a minimum 30-gallon tank due to their active nature and waste production. They are intelligent, curious fish that use the full aquarium space.',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish', 'mbu-pufferfish', 'cross-river-puffer'],
    ratingAverage: 4.5,
    reviewCount: 28,
  },

  // ──────────────────────────────────────────────
  // 75. Cross River Puffer
  // ──────────────────────────────────────────────
  {
    commonName: 'Cross River Puffer',
    scientificName: 'Tetraodon pustulatus',
    slug: 'cross-river-puffer',
    category: 'pufferfish',
    sku: 'TF-PUF-004',
    priceUSD: 150,
    images: [
      {
        url: '/images/products/cross-river-puffer-hero.jpg',
        alt: 'Cross River Puffer (Tetraodon pustulatus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Cross River Puffer is one of the rarest and most spectacular freshwater pufferfish available in the aquarium trade — a large, boldly patterned species endemic to the Cross River system in southeastern Nigeria. With a dark olive-to-black body covered in vivid yellow-gold spots and lines, and a maximum size of approximately twelve inches, this is a commanding presence in any large aquarium. Its rarity in the wild and the difficulty of collection make it a genuine prize for serious pufferfish enthusiasts.

Tetraodon pustulatus is found only in a limited stretch of the Cross River and its tributaries, making it one of the most geographically restricted pufferfish species in the world. Wild populations face pressure from habitat degradation, and captive breeding has proven extremely difficult. Most specimens in the hobby are wild-caught, and availability is sporadic and unpredictable. When they appear on the market, experienced collectors act quickly.

A minimum 75-gallon aquarium is required for an adult Cross River Puffer. Temperature should be maintained between 75 and 82 degrees Fahrenheit, with pH between 6.5 and 7.5. Unlike some African puffers, this species does best in soft to moderately hard freshwater without salt addition. Strong filtration is essential — pufferfish are messy eaters that produce significant waste.

Diet revolves around hard-shelled foods: snails, crayfish, clams, mussels, and shrimp form the core. Supplemental offerings of frozen krill, silversides, and earthworms round out the menu. As with all pufferfish, regular access to hard-shelled prey is essential for dental maintenance, as the beak-like teeth grow continuously.

This is an aggressive, territorial species best kept alone or with robust, fast-moving tankmates in significantly larger systems.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Cross River Puffer for sale — rare Tetraodon pustulatus from Nigeria. Vivid spotted pattern, 12-inch species. Live arrival guaranteed. From $150.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 12,
    origin: 'Cross River, Nigeria',
    diet: 'Carnivore — snails, crayfish, clams, mussels, frozen krill',
    temperament: 'Aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'Why are Cross River Puffers so rare?',
        answer:
          'Tetraodon pustulatus is endemic to a limited stretch of the Cross River in Nigeria — one of the most geographically restricted pufferfish species on Earth. Wild populations face habitat pressure, captive breeding has proven extremely difficult, and collection is sporadic. Availability in the hobby is unpredictable.',
      },
      {
        question: 'Can Cross River Puffers live with other fish?',
        answer:
          'Generally not recommended. This is an aggressive, territorial species that may attack tankmates. In very large systems (150+ gallons), robust, fast-moving fish may coexist, but a species-only setup is safest. Never house with slow-moving or long-finned species.',
      },
      {
        question: 'What do Cross River Puffers eat?',
        answer:
          'Hard-shelled foods are essential: snails, crayfish, clams, and mussels wear down the continuously growing teeth. Supplement with frozen krill, silversides, and earthworms. Feed every other day for adults. Without hard foods, dental overgrowth can become life-threatening.',
      },
      {
        question: 'How big do Cross River Puffers get?',
        answer:
          'Cross River Puffers reach approximately 12 inches in captivity. They are among the larger freshwater pufferfish species and require a minimum 75-gallon tank, with larger systems preferred for long-term housing.',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish', 'mbu-pufferfish', 'figure-eight-puffer-fish'],
    ratingAverage: 4.8,
    reviewCount: 5,
  },

  // ──────────────────────────────────────────────
  // 76. Avocado Puffer
  // ──────────────────────────────────────────────
  {
    commonName: 'Avocado Puffer',
    scientificName: 'Auriglobus modestus',
    slug: 'avocado-puffer',
    category: 'pufferfish',
    sku: 'TF-PUF-005',
    priceUSD: 45,
    images: [
      {
        url: '/images/products/avocado-puffer-hero.jpg',
        alt: 'Avocado Puffer (Auriglobus modestus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Avocado Puffer is a sleek, torpedo-shaped freshwater pufferfish from Southeast Asia that earns its common name from its distinctive olive-green coloration — a muted, avocado-like hue that sets it apart from the more boldly patterned pufferfish species. What it lacks in flashy markings it more than compensates for with personality: Avocado Puffers are active, intelligent, and endlessly curious, spending their days patrolling every corner of the aquarium with the alert, inquisitive behavior that makes pufferfish among the most engaging fish in the hobby.

At a maximum size of approximately five inches, the Avocado Puffer occupies a middle ground between the tiny dwarf puffers and the massive Mbu and Fahaka species. It requires a minimum 40-gallon aquarium with good filtration and moderate current. Temperature should be maintained between 73 and 81 degrees Fahrenheit, with pH between 6.5 and 7.5. This is a true freshwater species — no brackish conditions are needed or desired.

A word of caution regarding tankmates: despite its modest size, the Avocado Puffer is a determined fin nipper and scale biter. It is best kept as a species-only specimen or with fast, robust fish in a significantly larger tank. Many keepers find that a single Avocado Puffer in a well-decorated 40-gallon tank provides the most rewarding experience, as the fish's intelligence and personality are best appreciated when it becomes the sole focus of attention.

Diet must include hard-shelled foods for dental maintenance: small snails, shrimp, and frozen shellfish are essential. Supplement with frozen bloodworms, krill, and the occasional earthworm. Feed daily for juveniles, every other day for adults.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Avocado Puffer for sale — sleek olive-green freshwater puffer from SE Asia. Active and intelligent species. Live arrival guaranteed. From $45.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 40,
    maxSizeInches: 5,
    origin: 'Southeast Asia',
    diet: 'Carnivore — snails, shrimp, frozen bloodworms, krill',
    temperament: 'Semi-aggressive',
    lifespan: '8-10 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 81,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 7,
    faqs: [
      {
        question: 'Why is it called the Avocado Puffer?',
        answer:
          'The common name refers to its distinctive olive-green coloration, which resembles the color of an avocado. This muted, natural coloring sets it apart from more boldly patterned pufferfish species, though its personality more than compensates for understated looks.',
      },
      {
        question: 'Can Avocado Puffers live with other fish?',
        answer:
          'Avocado Puffers are determined fin nippers and scale biters, making them poor community fish. A species-only setup is recommended for most keepers. In very large tanks, fast, robust fish without flowing fins may coexist, but monitor closely.',
      },
      {
        question: 'What do Avocado Puffers eat?',
        answer:
          'Hard-shelled foods are essential for dental health: small snails, shrimp, and frozen shellfish. Supplement with bloodworms, krill, and earthworms. Feed juveniles daily and adults every other day. Without hard foods, teeth overgrow and can prevent feeding.',
      },
      {
        question: 'How big do Avocado Puffers get?',
        answer:
          'Avocado Puffers reach approximately 5 inches at maturity. They need a minimum 40-gallon tank due to their active swimming behavior and territorial nature. Despite their moderate size, they produce significant waste and require efficient filtration.',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish', 'figure-eight-puffer-fish', 'cross-river-puffer'],
    ratingAverage: 4.4,
    reviewCount: 16,
  },

  // ──────────────────────────────────────────────
  // 77. Aba Aba Knife Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Aba Aba Knife Fish',
    scientificName: 'Gymnarchus niloticus',
    slug: 'aba-aba-knife-fish',
    category: 'knife-fish',
    sku: 'TF-KNI-003',
    priceUSD: 180,
    images: [
      {
        url: '/images/products/aba-aba-knife-fish-hero.jpg',
        alt: 'Aba Aba Knife Fish (Gymnarchus niloticus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Aba Aba Knife Fish is the largest member of the knife fish family and one of the most imposing freshwater predators available in the aquarium trade. Reaching up to sixty-three inches in captivity, Gymnarchus niloticus is a genuine monster fish that demands infrastructure on par with the largest arowanas and arapaima. Native to the Nile Basin and river systems across West Africa, this species has been known to science since the nineteenth century but remains relatively rare in the hobby due to its extreme space requirements and aggressive disposition.

The Aba Aba possesses a unique elongated, eel-like body with a continuous dorsal fin that runs the length of its back and provides the undulating propulsion characteristic of knife fish locomotion. It navigates using a sophisticated electrosensory system that generates weak electrical fields to map its environment — a biological sonar that allows it to hunt with devastating precision in turbid water. In an aquarium setting, watching this fish hunt is a singular experience.

Housing is the primary challenge. A minimum 300-gallon aquarium is the absolute baseline for juvenile specimens, but adults require 500 gallons or larger — ideally a custom-built system of eight feet or more in length. Temperature should be maintained between 72 and 82 degrees Fahrenheit, with pH between 6.5 and 7.5. Filtration must be massively overspecified; we recommend sump systems rated for three times the tank volume.

This is an extremely predatory fish. Any tankmate that can fit in its considerable mouth will be consumed. Even large fish are not safe, as the Aba Aba becomes increasingly territorial and aggressive with age. A species-only setup is the only responsible recommendation.

Diet consists of live and frozen fish, shrimp, earthworms, and large pellets.

The Fish Collection ships via dedicated courier with our live arrival guarantee.`,
    seoDescription:
      'Aba Aba Knife Fish for sale — the largest knife fish species, up to 63 inches. Expert-level predatory specimen. Live arrival guaranteed. $180.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 300,
    maxSizeInches: 63,
    origin: 'Nile Basin, West Africa',
    diet: 'Carnivore — live fish, shrimp, earthworms, large pellets',
    temperament: 'Extremely predatory',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'How big does an Aba Aba Knife Fish get?',
        answer:
          'The Aba Aba is the largest knife fish species, reaching up to 63 inches (over 5 feet) in captivity. This is a true monster fish that requires a minimum 300-gallon tank for juveniles and 500+ gallons for adults. Custom-built systems are often necessary.',
      },
      {
        question: 'Can Aba Aba Knife Fish live with other fish?',
        answer:
          'No. The Aba Aba is extremely predatory and increasingly aggressive with age. Any fish that fits in its mouth will be eaten, and it will attack even larger tankmates. A species-only setup is the only responsible recommendation for this species.',
      },
      {
        question: 'What do Aba Aba Knife Fish eat?',
        answer:
          'Feed live and frozen fish, large shrimp, earthworms, and sinking pellets designed for large predatory fish. Juveniles eat daily; adults can be fed every 2-3 days. Vary the diet to ensure complete nutrition.',
      },
      {
        question: 'Do Aba Aba Knife Fish generate electricity?',
        answer:
          'Yes — Gymnarchus niloticus generates weak electrical fields for navigation and prey detection, not for stunning prey like an electric eel. This electrosensory system allows the fish to map its environment and hunt with precision in murky water.',
      },
    ],
    relatedSlugs: ['black-ghost-knife-fish', 'clown-knife-fish', 'brown-knife-fish'],
    ratingAverage: 4.6,
    reviewCount: 4,
  },

  // ──────────────────────────────────────────────
  // 78. Brown Knife Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Brown Knife Fish',
    scientificName: 'Apteronotus leptorhynchus',
    slug: 'brown-knife-fish',
    category: 'knife-fish',
    sku: 'TF-KNI-004',
    priceUSD: 25,
    images: [
      {
        url: '/images/products/brown-knife-fish-hero.jpg',
        alt: 'Brown Knife Fish (Apteronotus leptorhynchus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Brown Knife Fish, also known as the Brown Ghost Knife Fish, is an elegant and underappreciated member of the Apteronotidae family. While it lacks the dramatic black-and-white contrast of its famous cousin the Black Ghost Knife Fish, the Brown Knife Fish possesses a refined, subtle beauty — a warm chocolate-brown body with a smooth, elongated profile and the characteristic undulating anal fin that allows knife fish to hover, reverse, and maneuver with uncanny precision. For aquarists who appreciate understated elegance over flashy coloration, this species is a revelation.

Like all members of Apteronotus, the Brown Knife Fish possesses an electrosensory system that generates weak electric fields for navigation and communication. In a dimly lit aquarium, you can observe the fish actively scanning its environment, tilting and pivoting to map obstacles and locate prey with its biological sonar. This behavior makes knife fish among the most intellectually engaging species to observe, as their movements clearly indicate active cognition and spatial awareness.

A minimum 75-gallon aquarium is recommended for an adult Brown Knife Fish, which can reach approximately fourteen inches. Temperature should be maintained between 73 and 82 degrees Fahrenheit, with pH between 6.0 and 7.0. Provide plenty of hiding spots using driftwood, PVC pipes, or dense plantings — knife fish are nocturnal and need secure retreats during daylight hours. Dim lighting or floating plants to reduce light intensity will encourage the fish to emerge and feed during viewing hours.

Diet should include frozen bloodworms, brine shrimp, small earthworms, and sinking pellets. Live foods like blackworms are excellent for encouraging natural hunting behavior. Feed primarily in the evening when the fish is most active.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Brown Knife Fish for sale — elegant electrosensory species with warm chocolate coloration. Intermediate care level. Live arrival guaranteed. $25.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 75,
    maxSizeInches: 14,
    origin: 'South America',
    diet: 'Carnivore — frozen bloodworms, brine shrimp, earthworms, sinking pellets',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'How is the Brown Knife Fish different from the Black Ghost Knife Fish?',
        answer:
          'The Brown Knife Fish has warm chocolate-brown coloration rather than the dramatic black-and-white of the Black Ghost. It is typically smaller (14 inches vs 20 inches), somewhat less aggressive, and belongs to the same family (Apteronotidae). Both share electrosensory capabilities and knife-like body shapes.',
      },
      {
        question: 'Are Brown Knife Fish nocturnal?',
        answer:
          'Yes, Brown Knife Fish are primarily nocturnal. They prefer to hide during the day and become active at dusk. Dim lighting, floating plants, and secure hiding spots encourage earlier emergence. Feed primarily in the evening for the best response.',
      },
      {
        question: 'Can Brown Knife Fish live with other fish?',
        answer:
          'Yes, they are generally peaceful and can coexist with similarly sized, non-aggressive species. Avoid housing with very small fish that might be eaten or with aggressive species that could stress or injure them. Other knife fish may trigger territorial disputes.',
      },
      {
        question: 'What do Brown Knife Fish eat?',
        answer:
          'Feed frozen bloodworms, brine shrimp, small earthworms, and quality sinking pellets. Live blackworms are excellent for encouraging natural hunting behavior. Feed primarily in the evening. Newly acquired specimens may initially refuse prepared foods.',
      },
    ],
    relatedSlugs: ['black-ghost-knife-fish', 'clown-knife-fish', 'glass-knifefish'],
    ratingAverage: 4.4,
    reviewCount: 15,
  },

  // ──────────────────────────────────────────────
  // 79. Glass Knifefish
  // ──────────────────────────────────────────────
  {
    commonName: 'Glass Knifefish',
    scientificName: 'Eigenmannia virescens',
    slug: 'glass-knifefish',
    category: 'knife-fish',
    sku: 'TF-KNI-005',
    priceUSD: 20,
    images: [
      {
        url: '/images/products/glass-knifefish-hero.jpg',
        alt: 'Glass Knifefish (Eigenmannia virescens) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Glass Knifefish is one of the most unusual and fascinating species available in the freshwater aquarium trade — a translucent, elongated fish whose internal organs and skeletal structure are clearly visible through its nearly transparent body. Eigenmannia virescens possesses a delicate, greenish-gold translucence that shimmers under aquarium lighting, creating an ethereal presence that is unlike anything else in a planted tank. This is a fish that seems to have been designed for aquarists who value the strange and beautiful in equal measure.

What makes the Glass Knifefish particularly remarkable among knife fish is its social nature. Unlike most knife fish species, which are solitary and territorial, Eigenmannia virescens is a schooling species that naturally aggregates in groups in its native Amazonian habitat. In captivity, keeping a group of five or more transforms the aquarium into a mesmerizing display of synchronized hovering and gentle social interactions. Solitary specimens tend to be shy and stressed; groups are confident and active.

A minimum 75-gallon aquarium is recommended for a school, as individual fish can reach approximately eighteen inches, though twelve to fourteen inches is more typical in captivity. Temperature should be maintained between 73 and 82 degrees Fahrenheit, with pH between 6.0 and 7.5. Moderate current and good oxygenation are appreciated. Provide driftwood and dense plantings for daytime retreats, as Glass Knifefish are primarily crepuscular to nocturnal.

Diet consists of frozen bloodworms, brine shrimp, small earthworms, and quality sinking pellets. Live blackworms are a particular favorite. Feed in the evening for the best response, though established groups will often feed during daytime if food is available.

The Fish Collection ships with insulated packaging and our live arrival guarantee. We recommend ordering groups of five or more.`,
    seoDescription:
      'Glass Knifefish for sale — translucent schooling knife fish from the Amazon. Groups of 5+ recommended. Live arrival guaranteed. From $20.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 75,
    maxSizeInches: 18,
    origin: 'Amazon Basin',
    diet: 'Carnivore — frozen bloodworms, brine shrimp, earthworms, sinking pellets',
    temperament: 'Peaceful schooling',
    lifespan: '8-10 years',
    waterParameters: {
      tempMin: 73,
      tempMax: 82,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 12,
    faqs: [
      {
        question: 'Are Glass Knifefish really transparent?',
        answer:
          'Yes — Eigenmannia virescens has a nearly transparent body through which you can see internal organs and the skeletal structure. The body has a subtle greenish-gold translucence that shimmers under aquarium lighting. This transparency is a natural adaptation, not a bred trait.',
      },
      {
        question: 'Do Glass Knifefish need to be kept in groups?',
        answer:
          'Strongly recommended. Unlike most knife fish, Glass Knifefish are schooling species that naturally aggregate in groups. We recommend five or more for natural social behavior. Solitary specimens tend to be shy, stressed, and less active than those kept in groups.',
      },
      {
        question: 'How big do Glass Knifefish get?',
        answer:
          'Glass Knifefish can reach 18 inches, though 12-14 inches is more typical in captivity. Their elongated, slender body makes them appear less bulky than the measurement suggests. A 75-gallon tank is the minimum for a school.',
      },
      {
        question: 'What do Glass Knifefish eat?',
        answer:
          'Feed frozen bloodworms, brine shrimp, small earthworms, and sinking pellets. Live blackworms are a particular favorite. Feed primarily in the evening, as they are crepuscular to nocturnal. Established groups will also feed during daytime.',
      },
    ],
    relatedSlugs: ['black-ghost-knife-fish', 'brown-knife-fish', 'clown-knife-fish'],
    ratingAverage: 4.5,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 80. Platinum Gar
  // ──────────────────────────────────────────────
  {
    commonName: 'Platinum Gar',
    scientificName: 'Atractosteus sp.',
    slug: 'platinum-gar',
    category: 'gar',
    sku: 'TF-GAR-002',
    priceUSD: 1200,
    images: [
      {
        url: '/images/products/platinum-gar-hero.jpg',
        alt: 'Platinum Gar (Atractosteus sp.) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Platinum Gar is a breathtaking leucistic variant of the Alligator Gar family — a living fossil wrapped in a mantle of pure, metallic white-silver that makes it one of the most visually striking predatory fish available to the serious aquarist. Gar species have remained virtually unchanged for over 100 million years, and the Platinum morph adds a layer of genetic rarity to an already extraordinary lineage. This captive-bred specimen combines the ancient, armored elegance of the gar form with a coloration that would not look out of place in a science fiction film.

The Platinum Gar is a large, powerful fish. Specimens in spacious enclosures can reach seventy-one inches, though growth rate in captivity is highly dependent on tank size and feeding regimen. A minimum 400-gallon aquarium is required — and "minimum" is doing a great deal of work in that sentence. For a fish of this potential size, we strongly recommend custom-built systems of 1000 gallons or larger for long-term housing. The tank must be structurally reinforced; a seventy-inch armored predator can generate significant force during feeding strikes.

Temperature tolerance is remarkably broad for a fish of this value: 61 to 79 degrees Fahrenheit, with pH between 6.5 and 8.0. Gar are extraordinarily hardy once established, tolerating water conditions that would stress most tropical species. Their ganoid scales — thick, diamond-shaped, and composed of an enamel-like substance called ganoine — provide armor-like protection against physical damage.

Diet consists of live and frozen fish, shrimp, and large sinking pellets. Gar are ambush predators that strike with explosive speed from a stationary position. Feed two to three times weekly for adults; overfeeding leads to obesity and liver problems.

The Fish Collection ships via dedicated climate-controlled courier with our absolute live arrival guarantee.`,
    seoDescription:
      'Platinum Gar for sale — rare leucistic Atractosteus, captive-bred living fossil. Specialist-level specimen. Live arrival guaranteed. From $1,200.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 400,
    maxSizeInches: 71,
    origin: 'Captive-bred',
    diet: 'Carnivore — live fish, frozen fish, shrimp, large pellets',
    temperament: 'Predatory',
    lifespan: '25-50 years',
    waterParameters: {
      tempMin: 61,
      tempMax: 79,
      phMin: 6.5,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'How big does a Platinum Gar get?',
        answer:
          'Platinum Gar can reach up to 71 inches (nearly 6 feet) in captivity, though growth is heavily influenced by tank size. A minimum 400-gallon tank is required, with 1000+ gallons strongly recommended for long-term housing. These are true monster fish that require serious infrastructure.',
      },
      {
        question: 'What makes a Platinum Gar different from a regular gar?',
        answer:
          'The Platinum Gar is a leucistic color morph that lacks normal pigmentation, resulting in a striking metallic white-silver appearance. The underlying body structure and behavior are identical to wild-type gar. Leucistic gar are extremely rare in the wild and are primarily produced through selective captive breeding.',
      },
      {
        question: 'Are Platinum Gar hard to keep?',
        answer:
          'Gar are actually remarkably hardy once established, tolerating a wide range of water conditions. The primary challenge is space — providing an adequately sized enclosure for a fish that can exceed 5 feet. They are specialist-level fish due to infrastructure requirements, not water chemistry sensitivity.',
      },
      {
        question: 'How long do Platinum Gar live?',
        answer:
          'Gar are exceptionally long-lived — 25 to 50 years in captivity is well documented, with some specimens reportedly exceeding that. This is a generational commitment that should not be undertaken lightly. Proper space and feeding are the keys to longevity.',
      },
    ],
    relatedSlugs: ['albino-alligator-gar', 'arapaima'],
    ratingAverage: 4.9,
    reviewCount: 3,
  },

  // ──────────────────────────────────────────────
  // 81. Arapaima
  // ──────────────────────────────────────────────
  {
    commonName: 'Arapaima',
    scientificName: 'Arapaima gigas',
    slug: 'arapaima',
    category: 'gar',
    sku: 'TF-GAR-003',
    priceUSD: 2500,
    images: [
      {
        url: '/images/products/arapaima-hero.jpg',
        alt: 'Arapaima (Arapaima gigas) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Arapaima is the undisputed titan of freshwater fishkeeping — the largest freshwater fish in the world, capable of reaching nearly ten feet in length and over 400 pounds in the wild. Arapaima gigas is a genuine living fossil, an obligate air-breather that surfaces every ten to twenty minutes to gulp atmospheric oxygen with an audible, distinctive gasp. In its native Amazon Basin, it is an apex predator of legendary status, revered by indigenous communities and increasingly protected by conservation programs.

Keeping an Arapaima in captivity is not a decision to be made lightly. This fish requires a minimum 1000-gallon aquarium, and even that is a temporary solution for juvenile specimens. Adults demand custom-built indoor ponds or dedicated fish rooms with systems of 3000 gallons or larger. The tank must be structurally reinforced — an Arapaima can generate enough force during a feeding strike or startle response to crack standard aquarium glass. Weighted lids are mandatory, as these fish are powerful jumpers despite their enormous size.

Temperature should be maintained between 75 and 86 degrees Fahrenheit, with pH between 6.5 and 7.5. Despite its imposing size, the Arapaima is relatively tolerant of water chemistry variations, though consistent conditions produce the best growth and coloration. The fish develops beautiful red-orange scaling along its posterior half as it matures — a feature that becomes increasingly dramatic with age and size.

Diet consists of whole fish, large shrimp, and jumbo pellets. Juveniles eat aggressively and grow at an extraordinary rate — several inches per month during the first two years. Feed daily for juveniles, every two to three days for adults. Overfeeding must be carefully avoided.

This is the ultimate monster fish. The Fish Collection ships juvenile specimens via dedicated climate-controlled courier with our absolute live arrival guarantee.`,
    seoDescription:
      'Arapaima for sale — the largest freshwater fish on Earth. Juvenile Arapaima gigas specimens. Specialist-level. Live arrival guaranteed. $2,500.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 1000,
    maxSizeInches: 118,
    origin: 'Amazon Basin',
    diet: 'Carnivore — whole fish, large shrimp, jumbo pellets',
    temperament: 'Predatory',
    lifespan: '15-20 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 86,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'How big does an Arapaima get?',
        answer:
          'Arapaima gigas can reach nearly 10 feet (118 inches) and over 400 pounds in the wild. In captivity, size depends heavily on enclosure size, but specimens in large ponds regularly exceed 6 feet. This is the largest freshwater fish in the world and requires extraordinary infrastructure.',
      },
      {
        question: 'What tank size does an Arapaima need?',
        answer:
          'A minimum 1000-gallon system for juvenile specimens, with adults requiring custom-built indoor ponds of 3000+ gallons. Standard aquariums are temporary solutions at best. The tank must be structurally reinforced and have weighted lids — Arapaima are powerful jumpers.',
      },
      {
        question: 'Do Arapaima need to breathe air?',
        answer:
          'Yes — Arapaima are obligate air-breathers that must surface every 10-20 minutes to gulp atmospheric oxygen. The tank must have adequate surface access and air space above the water line. This air-breathing adaptation allows them to survive in oxygen-poor Amazonian waters.',
      },
      {
        question: 'Is it legal to own an Arapaima?',
        answer:
          'Legality varies by jurisdiction. Arapaima gigas is CITES Appendix II listed, requiring export permits from origin countries. Some US states restrict ownership of large predatory fish. The Fish Collection ships only to jurisdictions where ownership is permitted and provides all necessary documentation.',
      },
    ],
    relatedSlugs: ['platinum-gar', 'albino-alligator-gar'],
    ratingAverage: 5.0,
    reviewCount: 2,
  },

  // ──────────────────────────────────────────────
  // 82. Snowball Pleco
  // ──────────────────────────────────────────────
  {
    commonName: 'Snowball Pleco',
    scientificName: 'Hypancistrus inspector',
    slug: 'snowball-pleco',
    category: 'pleco',
    sku: 'TF-PLE-003',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/snowball-pleco-hero.jpg',
        alt: 'Snowball Pleco (Hypancistrus inspector) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Snowball Pleco is one of the most visually striking members of the Hypancistrus genus — a beautifully patterned catfish adorned with bright white polka dots scattered across a dark black-brown body, creating an effect that looks like fresh snowfall on dark earth. Also known as L201, this species hails from the Rio Negro in Brazil, one of the Amazon's most famous blackwater tributaries, and it brings a touch of that wild, tea-stained river system into the home aquarium.

At a maximum size of approximately seven inches, the Snowball Pleco is a manageable species that fits comfortably in a 40-gallon or larger aquarium. Unlike the common pleco sold in chain pet stores, the Snowball does not grow into a two-foot monster that overwhelms standard setups. It remains compact, beautifully patterned throughout its life, and is one of the most desirable plecos in the L-number collecting community.

Water chemistry should reflect the Rio Negro habitat: warm temperatures between 79 and 86 degrees Fahrenheit, slightly acidic to neutral pH of 6.0 to 7.5, and soft to moderately soft water. The Snowball Pleco is primarily nocturnal, so provide plenty of caves, driftwood crevices, and dark hiding spots. PVC pipe segments and ceramic caves work excellently as dedicated retreats.

An important distinction from common plecos: Hypancistrus species are not algae eaters. The Snowball Pleco is a carnivore/omnivore that requires protein-rich foods — sinking pellets, frozen bloodworms, brine shrimp, and blanched vegetables like zucchini and cucumber. Relying on algae growth to feed this fish will result in malnutrition.

The Snowball Pleco is peaceful and compatible with most community species. It makes an excellent companion for discus, tetras, and other peaceful Amazonian species.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Snowball Pleco (L201) for sale — white-spotted Hypancistrus from Rio Negro, Brazil. Peaceful community species. Live arrival guaranteed. $120.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 40,
    maxSizeInches: 7,
    origin: 'Rio Negro, Brazil',
    diet: 'Omnivore — sinking pellets, frozen bloodworms, brine shrimp, blanched vegetables',
    temperament: 'Peaceful',
    lifespan: '8-10 years',
    waterParameters: {
      tempMin: 79,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'Do Snowball Plecos eat algae?',
        answer:
          'No — despite being a pleco, Hypancistrus species are not algae eaters. Snowball Plecos are carnivores/omnivores that require protein-rich foods: sinking pellets, frozen bloodworms, brine shrimp, and supplemental blanched vegetables. Do not rely on algae to feed this species.',
      },
      {
        question: 'How big do Snowball Plecos get?',
        answer:
          'Snowball Plecos reach approximately 7 inches at maturity, making them a manageable species for 40-gallon or larger tanks. They remain compact and beautifully patterned throughout their lives — very different from common plecos that can exceed 2 feet.',
      },
      {
        question: 'Are Snowball Plecos nocturnal?',
        answer:
          'Primarily yes. They are most active at night and prefer to hide in caves and crevices during the day. Providing dedicated hiding spots like PVC pipes, ceramic caves, and driftwood encourages security and reduces stress. They will emerge more frequently in dimly lit tanks.',
      },
      {
        question: 'Can Snowball Plecos live with other fish?',
        answer:
          'Snowball Plecos are peaceful and compatible with most community species. They pair well with discus, tetras, corydoras, and other non-aggressive Amazonian species. Avoid housing with aggressive bottom-dwellers that might compete for hiding spots.',
      },
    ],
    relatedSlugs: ['zebra-pleco', 'royal-pleco', 'blue-panaque-pleco'],
    ratingAverage: 4.7,
    reviewCount: 14,
  },

  // ──────────────────────────────────────────────
  // 83. Blue Panaque Pleco
  // ──────────────────────────────────────────────
  {
    commonName: 'Blue Panaque Pleco',
    scientificName: 'Panaque cochliodon',
    slug: 'blue-panaque-pleco',
    category: 'pleco',
    sku: 'TF-PLE-004',
    priceUSD: 250,
    images: [
      {
        url: '/images/products/blue-panaque-pleco-hero.jpg',
        alt: 'Blue Panaque Pleco (Panaque cochliodon) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Blue Panaque Pleco is one of the most extraordinary catfish in the aquarium hobby — a large, slate-blue armored pleco from Colombia's Rio Magdalena system that possesses one of the most unusual dietary adaptations in the fish world: it eats wood. Panaque cochliodon is a xylophagous species, meaning it actively consumes and digests driftwood using specialized gut bacteria, a trait shared by only a handful of fish species on Earth. Watching a Blue Panaque methodically rasp through a piece of hardwood with its powerful spoon-shaped teeth is a genuinely singular aquarium experience.

The coloration is distinctive and handsome: a deep blue-grey body with subtle darker patterning and vivid red-orange eyes that provide a striking contrast. At a maximum size of approximately seventeen inches, this is a substantial fish that commands attention in any large aquarium setup. The body is heavily armored with thick, interlocking scutes that give the fish a rugged, prehistoric appearance entirely appropriate for a species whose lineage extends back millions of years.

A minimum 75-gallon aquarium is required, with larger tanks preferred for adult specimens. Temperature should be maintained between 72 and 81 degrees Fahrenheit, with pH between 6.5 and 7.5. The single most important element of the habitat is driftwood — and lots of it. Malaysian driftwood, mopani wood, and other hardwoods should be provided in abundance as both food source and territorial structure. The fish will actively consume and hollow out driftwood over time.

Supplement the wood-based diet with sinking pellets, blanched vegetables (zucchini, sweet potato, cucumber), and occasional frozen bloodworms. Despite being primarily xylophagous, they benefit from dietary variety.

The Blue Panaque is territorial with conspecifics and other large plecos, so provide ample space and multiple driftwood structures.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Blue Panaque Pleco for sale — rare wood-eating pleco from Colombia. Xylophagous Panaque cochliodon, 17-inch species. Live arrival guaranteed. $250.',
    careLevel: 4,
    careLevelLabel: 'Advanced',
    tankSizeGallons: 75,
    maxSizeInches: 17,
    origin: 'Rio Magdalena, Colombia',
    diet: 'Xylophagous — driftwood, sinking pellets, blanched vegetables',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 81,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'Do Blue Panaque Plecos really eat wood?',
        answer:
          'Yes — Panaque cochliodon is a xylophagous species that actively consumes driftwood using specialized spoon-shaped teeth and gut bacteria that break down cellulose. Abundant driftwood is essential in their aquarium. They will visibly rasp and hollow out wood over time.',
      },
      {
        question: 'What kind of driftwood should I provide?',
        answer:
          'Malaysian driftwood, mopani wood, and other dense hardwoods are ideal. Provide multiple large pieces as both food and territorial structures. Softer woods will be consumed more quickly. Replace driftwood as it is consumed to ensure a continuous food source.',
      },
      {
        question: 'How big do Blue Panaque Plecos get?',
        answer:
          'Blue Panaque Plecos reach approximately 17 inches, making them one of the larger pleco species commonly available. A minimum 75-gallon tank is required, with larger systems preferred for adult specimens. They are heavily armored and appear even more substantial than their length suggests.',
      },
      {
        question: 'Are Blue Panaque Plecos aggressive?',
        answer:
          'They are territorial with other large plecos and conspecifics, especially in smaller tanks. Provide ample space and multiple driftwood structures to establish separate territories. They are generally peaceful toward non-pleco tankmates of appropriate size.',
      },
    ],
    relatedSlugs: ['royal-pleco', 'zebra-pleco', 'snowball-pleco'],
    ratingAverage: 4.8,
    reviewCount: 7,
  },

  // ──────────────────────────────────────────────
  // 84. Vampire Pleco
  // ──────────────────────────────────────────────
  {
    commonName: 'Vampire Pleco',
    scientificName: 'Leporacanthicus galaxias',
    slug: 'vampire-pleco',
    category: 'pleco',
    sku: 'TF-PLE-005',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/vampire-pleco-hero.jpg',
        alt: 'Vampire Pleco (Leporacanthicus galaxias) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Vampire Pleco earns its dramatic common name from the pronounced, fang-like odontodes that protrude from its gill covers and pectoral fins — structures that give this striking catfish a genuinely menacing appearance despite its relatively peaceful disposition. Also known as L007 or the Galaxy Pleco, Leporacanthicus galaxias features a jet-black body scattered with bright white or yellow spots that create a starfield pattern against the dark background. The combination of the fanged appearance and celestial patterning makes this one of the most visually compelling L-number plecos available.

Native to the Rio Tocantins in Brazil, the Vampire Pleco inhabits fast-flowing, well-oxygenated waters among rock formations and submerged wood. In the aquarium, replicating these conditions is important: provide strong filtration with moderate to high current, rocky structures with caves, and driftwood for territorial demarcation. A minimum 55-gallon tank is recommended for a single specimen, which can reach approximately nine inches at maturity.

Water conditions should mirror the warm, slightly acidic waters of its origin: temperature between 79 and 86 degrees Fahrenheit, pH between 5.5 and 7.0. Unlike many plecos, the Vampire Pleco is primarily carnivorous — its unusual dentition is adapted for catching and crushing snails and small invertebrates rather than scraping algae. Feed sinking carnivore pellets, frozen bloodworms, brine shrimp, chopped shrimp, and snails. Supplement with occasional blanched vegetables for dietary balance.

The Vampire Pleco is territorial with conspecifics but generally peaceful toward other species. It can be housed with community fish of similar size, other non-competing plecos, and Amazonian species that share its water chemistry preferences.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Vampire Pleco (L007) for sale — fanged Galaxy Pleco from Rio Tocantins, Brazil. Striking spotted carnivorous pleco. Live arrival guaranteed. $120.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 9,
    origin: 'Rio Tocantins, Brazil',
    diet: 'Carnivore — sinking pellets, frozen bloodworms, snails, shrimp',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 79,
      tempMax: 86,
      phMin: 5.5,
      phMax: 7.0,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'Why is it called a Vampire Pleco?',
        answer:
          'The name comes from the pronounced, fang-like odontodes (bony projections) on its gill covers and pectoral fins, which give the fish a vampiric appearance. Despite the menacing look, the Vampire Pleco is relatively peaceful toward non-competing tankmates.',
      },
      {
        question: 'Do Vampire Plecos eat algae?',
        answer:
          'No — unlike common plecos, the Vampire Pleco is primarily carnivorous. Its unusual dentition is adapted for crushing snails and invertebrates. Feed sinking carnivore pellets, frozen bloodworms, shrimp, and snails. Do not rely on algae as a food source.',
      },
      {
        question: 'How big do Vampire Plecos get?',
        answer:
          'Vampire Plecos reach approximately 9 inches at maturity. A 55-gallon tank is the minimum for a single specimen. They are territorial with conspecifics, so larger tanks are needed if keeping multiple individuals.',
      },
      {
        question: 'Are Vampire Plecos aggressive?',
        answer:
          'They are territorial with conspecifics and other similar-looking plecos but generally peaceful toward other species. Provide caves and driftwood to establish territories. In a sufficiently large tank with adequate hiding spots, they coexist well with most community fish.',
      },
    ],
    relatedSlugs: ['zebra-pleco', 'snowball-pleco', 'three-beacon-pleco'],
    ratingAverage: 4.6,
    reviewCount: 10,
  },

  // ──────────────────────────────────────────────
  // 85. Three Beacon Pleco
  // ──────────────────────────────────────────────
  {
    commonName: 'Three Beacon Pleco',
    scientificName: 'Leporacanthicus triactis',
    slug: 'three-beacon-pleco',
    category: 'pleco',
    sku: 'TF-PLE-006',
    priceUSD: 130,
    images: [
      {
        url: '/images/products/three-beacon-pleco-hero.jpg',
        alt: 'Three Beacon Pleco (Leporacanthicus triactis) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Three Beacon Pleco is a striking and relatively uncommon member of the Leporacanthicus genus — closely related to the popular Vampire Pleco but distinguished by its namesake feature: three prominent yellowish-white spots on the dorsal region that stand out like beacons against the dark body. Also known as L091, this species from the Rio Xingu in Brazil combines dramatic visual appeal with the characteristic fanged appearance of its genus, making it a prized addition to any L-number pleco collection.

The body coloration is a deep charcoal-to-black base overlaid with scattered smaller spots and the three distinctive dorsal markings that give the species its common name. The fins carry similar spotted patterning, and the overall effect is bold and eye-catching — particularly under aquarium lighting that highlights the contrast between dark body and light spots. Like its Vampire Pleco cousin, the Three Beacon sports pronounced odontodes on its gill covers and pectoral fins.

Housing requires a minimum 55-gallon aquarium with strong filtration and moderate current to replicate the fast-flowing Rio Xingu habitat. Temperature should be maintained between 79 and 86 degrees Fahrenheit, with pH between 6.0 and 7.5. Provide rocky structures with multiple caves and crevices, as the Three Beacon is nocturnal and territorial — dedicated hiding spots are essential for reducing stress and aggression.

Like all Leporacanthicus species, the Three Beacon is carnivorous rather than algae-eating. Its diet should consist of sinking carnivore pellets, frozen bloodworms, brine shrimp, chopped shrimp, and snails. Occasional blanched vegetables provide supplemental nutrition. Feed primarily in the evening when the fish is most active.

The Three Beacon is a rewarding species for intermediate to advanced aquarists who appreciate the more predatory side of the pleco world.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Three Beacon Pleco (L091) for sale — rare spotted Leporacanthicus from Rio Xingu, Brazil. Carnivorous pleco species. Live arrival guaranteed. $130.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 7,
    origin: 'Rio Xingu, Brazil',
    diet: 'Carnivore — sinking pellets, frozen bloodworms, snails, shrimp',
    temperament: 'Semi-aggressive',
    lifespan: '10-12 years',
    waterParameters: {
      tempMin: 79,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'What are the three beacons on the Three Beacon Pleco?',
        answer:
          'The "three beacons" are three prominent yellowish-white spots on the dorsal region that stand out conspicuously against the dark body. This distinctive marking pattern gives the species its common name and makes it easily identifiable among Leporacanthicus species.',
      },
      {
        question: 'Is the Three Beacon Pleco related to the Vampire Pleco?',
        answer:
          'Yes — both belong to the genus Leporacanthicus and share the characteristic fanged odontodes on gill covers and pectoral fins. The Three Beacon (L091) is distinguished from the Vampire Pleco (L007) primarily by its three distinctive dorsal spots and its Rio Xingu origin.',
      },
      {
        question: 'What does the Three Beacon Pleco eat?',
        answer:
          'Like all Leporacanthicus, the Three Beacon is carnivorous — not an algae eater. Feed sinking carnivore pellets, frozen bloodworms, brine shrimp, chopped shrimp, and snails. Supplement with occasional blanched vegetables. Feed primarily in the evening.',
      },
      {
        question: 'How big does a Three Beacon Pleco get?',
        answer:
          'Three Beacon Plecos reach approximately 7 inches at maturity. A 55-gallon tank is the minimum recommended size. They are smaller than Vampire Plecos but share similar care requirements and territorial behavior with conspecifics.',
      },
    ],
    relatedSlugs: ['vampire-pleco', 'zebra-pleco', 'snowball-pleco'],
    ratingAverage: 4.5,
    reviewCount: 8,
  },

  // ──────────────────────────────────────────────
  // 86. Longfin Albino Bristlenose Pleco
  // ──────────────────────────────────────────────
  {
    commonName: 'Longfin Albino Bristlenose Pleco',
    scientificName: 'Ancistrus sp.',
    slug: 'longfin-albino-bristlenose-pleco',
    category: 'pleco',
    sku: 'TF-PLE-007',
    priceUSD: 25,
    images: [
      {
        url: '/images/products/longfin-albino-bristlenose-pleco-hero.jpg',
        alt: 'Longfin Albino Bristlenose Pleco (Ancistrus sp.) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Longfin Albino Bristlenose Pleco is the perfect intersection of accessibility and visual drama — a hardy, beginner-friendly catfish that looks anything but ordinary. This captive-bred variant of the popular Bristlenose Pleco combines three genetic traits in one fish: the characteristic bushy nose tentacles of the Ancistrus genus, full albinism producing a warm yellow-gold body with red eyes, and dramatically extended flowing fins that billow and trail as the fish moves across the substrate. The overall effect is a small, manageable pleco that draws immediate attention in any aquarium setup.

At a maximum size of approximately six inches, this is one of the most appropriately sized plecos for standard home aquariums. Unlike common plecos that can grow to two feet and overwhelm small tanks, the Bristlenose stays compact and manageable throughout its life. A minimum 30-gallon tank is recommended, though they adapt readily to tanks as small as twenty gallons for a single specimen. They are genuinely one of the best algae-eating species available — efficient, tireless grazers that keep glass, decorations, and plant leaves visibly cleaner.

Water parameters are refreshingly flexible: temperature between 72 and 82 degrees Fahrenheit, pH between 6.5 and 7.5, and moderate hardness. This is a hardy species that tolerates a range of conditions, making it genuinely suitable for beginners. Provide driftwood for grazing and hiding, and supplement the natural algae diet with sinking algae wafers, blanched zucchini, cucumber, and occasional frozen bloodworms.

The extended fins of the longfin variety are more delicate than standard fins, so avoid sharp decorations and aggressive tankmates that might nip. Otherwise, this is a peaceful, community-friendly species that coexists well with virtually any non-aggressive tankmate.

Males develop the characteristic bristle-like tentacles on the nose at maturity, creating an appearance that is endearingly peculiar.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Longfin Albino Bristlenose Pleco for sale — flowing fins, gold body, beginner-friendly algae eater. Peaceful community fish. Live arrival guaranteed. $25.',
    careLevel: 1,
    careLevelLabel: 'Beginner',
    tankSizeGallons: 30,
    maxSizeInches: 6,
    origin: 'Amazon Basin (tank-bred)',
    diet: 'Omnivore — algae, sinking wafers, blanched vegetables, frozen bloodworms',
    temperament: 'Peaceful',
    lifespan: '8-12 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 20,
    faqs: [
      {
        question: 'Are Longfin Albino Bristlenose Plecos good algae eaters?',
        answer:
          'Excellent algae eaters — among the best available. They efficiently graze on glass, decorations, and plant surfaces. Supplement with sinking algae wafers and blanched vegetables to ensure complete nutrition, especially in newer tanks with limited algae growth.',
      },
      {
        question: 'How big do Longfin Albino Bristlenose Plecos get?',
        answer:
          'Maximum size is approximately 6 inches, making them one of the most appropriately sized plecos for standard home aquariums. Unlike common plecos that can reach 2 feet, Bristlenose Plecos stay compact and manageable throughout their lives.',
      },
      {
        question: 'Are Longfin Albino Bristlenose Plecos good for beginners?',
        answer:
          'Yes — this is one of the best beginner fish available. They tolerate a wide range of water conditions, eat readily available foods, stay a manageable size, and provide genuine utility as algae grazers. The longfin variety just adds visual drama to an already excellent species.',
      },
      {
        question: 'Do all Bristlenose Plecos grow bristles?',
        answer:
          'Males develop prominent bristle-like tentacles on the nose at sexual maturity (around 6-12 months). Females may develop smaller bristles along the lip line. The bristles are more prominent in some genetic lines than others and are a normal, healthy feature.',
      },
    ],
    relatedSlugs: ['zebra-pleco', 'snowball-pleco', 'royal-pleco'],
    ratingAverage: 4.8,
    reviewCount: 35,
  },

  // ──────────────────────────────────────────────
  // 87. Altum Angelfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Altum Angelfish',
    scientificName: 'Pterophyllum altum',
    slug: 'altum-angelfish',
    category: 'angelfish',
    sku: 'TF-ANG-003',
    priceUSD: 150,
    images: [
      {
        url: '/images/products/altum-angelfish-hero.jpg',
        alt: 'Altum Angelfish (Pterophyllum altum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Altum Angelfish is the true aristocrat of the freshwater angelfish world — a species so dramatically different from the common aquarium angelfish (Pterophyllum scalare) that seeing one for the first time is a revelation. Pterophyllum altum is taller, more angular, and more intensely colored than its domesticated cousin, with a body profile that extends to a staggering fifteen inches from dorsal tip to ventral tip. The steep forehead, pronounced notch above the snout, and bold, dark vertical bars against a silver-bronze body create an appearance of regal, wild beauty that no tank-bred scalare can match.

Altum Angelfish are found exclusively in the Orinoco River basin and upper Rio Negro, inhabiting some of the softest, most acidic water in the neotropical realm. This is the key to understanding their care requirements: Altum Angels demand water conditions that most tropical fish would find inhospitable. pH must be maintained between 4.5 and 6.0 — genuinely acidic water that requires RO or RO/DI systems for most hobbyists. Temperature should be kept between 81 and 86 degrees Fahrenheit, and hardness should be near zero.

A minimum 75-gallon aquarium is required, but the tank dimensions matter more than volume: Altum Angels need vertical space. A tank that is at least 24 inches tall is essential to accommodate their extended finnage. Filtration should be efficient but gentle — these fish dislike strong current. Tall driftwood structures and Amazonian sword plants complement both the aesthetic and environmental needs.

Diet consists of frozen bloodworms, brine shrimp, quality flake and pellet foods, and live foods. Altum Angels can be initially reluctant to accept prepared foods, especially wild-caught specimens. Patience during the acclimation period is essential.

This is an expert-level species that rewards those who meet its exacting demands with a display fish of incomparable grace.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Altum Angelfish for sale — the true wild angelfish from the Orinoco River. Dramatic 15-inch profile. Expert-level. Live arrival guaranteed. $150.',
    careLevel: 5,
    careLevelLabel: 'Expert',
    tankSizeGallons: 75,
    maxSizeInches: 15,
    origin: 'Orinoco River Basin',
    diet: 'Omnivore — frozen bloodworms, brine shrimp, flake, pellets, live foods',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 81,
      tempMax: 86,
      phMin: 4.5,
      phMax: 6.0,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'How is the Altum Angelfish different from common angelfish?',
        answer:
          'Altum Angelfish are dramatically taller (up to 15 inches tip to tip), more angular, and more intensely colored than domesticated Pterophyllum scalare. They have a pronounced forehead notch, bolder barring, and require much more acidic water (pH 4.5-6.0). They are a wild species, not a bred variety.',
      },
      {
        question: 'What pH do Altum Angelfish need?',
        answer:
          'Altum Angels require genuinely acidic water: pH 4.5-6.0. This is significantly lower than most tropical setups and typically requires RO or RO/DI water. This demanding water chemistry requirement is the primary reason Altum Angels are classified as expert-level fish.',
      },
      {
        question: 'How tall does an Altum Angelfish get?',
        answer:
          'Altum Angelfish can reach 15 inches from dorsal tip to ventral tip — significantly taller than common angelfish. Tanks must be at least 24 inches tall to accommodate their extended finnage. The vertical dimension is more important than length for this species.',
      },
      {
        question: 'Can Altum Angelfish live with other fish?',
        answer:
          'Yes, but tankmates must tolerate the same acidic water conditions. Cardinal tetras, rummy-nose tetras, and certain corydoras species from similar blackwater habitats are compatible. Avoid aggressive species and any fish that might nip their extended fins.',
      },
    ],
    relatedSlugs: ['peppermint-angelfish', 'clarion-angelfish', 'starfire-red-angelfish'],
    ratingAverage: 4.8,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 88. Starfire Red Angelfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Starfire Red Angelfish',
    scientificName: 'Pterophyllum scalare',
    slug: 'starfire-red-angelfish',
    category: 'angelfish',
    sku: 'TF-ANG-004',
    priceUSD: 80,
    images: [
      {
        url: '/images/products/starfire-red-angelfish-hero.jpg',
        alt: 'Starfire Red Angelfish (Pterophyllum scalare) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Starfire Red Angelfish is one of the most vividly colored freshwater angelfish varieties ever produced — a tank-bred Pterophyllum scalare that blazes with intense red-orange coloration covering the entire body, from the forehead through the flanks and into the fins. Unlike the more common Koi Angelfish, which features patchy orange, white, and black markings, the Starfire Red displays a deep, uniform red that has been selectively refined over many generations to produce a fish that looks almost painted with liquid fire.

This strain represents the cutting edge of freshwater angelfish breeding. Achieving consistent, deep red coloration without muddy undertones or blotchy patches requires meticulous genetic selection over many generations. The specimens we offer at The Fish Collection are sourced from breeders who specialize exclusively in red angelfish genetics and select breeding pairs based on coloration intensity, pattern uniformity, and body conformation.

At a maximum height of approximately ten inches from dorsal to ventral tip, the Starfire Red Angelfish makes a commanding presence in any tall aquarium. A minimum 55-gallon tank is recommended, with at least 18 inches of vertical water depth. Temperature should be maintained between 77 and 86 degrees Fahrenheit, with pH between 6.0 and 7.5. Angelfish are generally adaptable to a range of conditions, making the Starfire Red accessible to intermediate-level aquarists.

Diet is straightforward: quality flake foods, sinking pellets, frozen bloodworms, brine shrimp, and the occasional live food treat. Feed two to three times daily. A varied diet rich in carotenoids supports the red coloration, though genetics are the primary driver.

Temperament is typical of Pterophyllum scalare — generally peaceful but capable of territorial behavior, especially during breeding. Avoid housing with fin-nipping species, as the flowing fins are tempting targets.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Starfire Red Angelfish for sale — vivid red-orange Pterophyllum scalare, premium tank-bred strain. Intermediate care. Live arrival guaranteed. $80.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 10,
    origin: 'Tank-bred',
    diet: 'Omnivore — flake food, pellets, frozen bloodworms, brine shrimp',
    temperament: 'Semi-aggressive',
    lifespan: '10-12 years',
    waterParameters: {
      tempMin: 77,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 10,
    faqs: [
      {
        question: 'What makes a Starfire Red Angelfish different from a Koi Angelfish?',
        answer:
          'Starfire Red Angelfish display uniform, deep red-orange coloration across the entire body and fins. Koi Angelfish have patchy orange, white, and black markings. The Starfire Red has been selectively bred for consistent, intense red without the multi-colored patchwork of the Koi variety.',
      },
      {
        question: 'Will my Starfire Red Angelfish keep its red color?',
        answer:
          'Yes, with proper care. The red coloration is genetically stable and will maintain or intensify with age. A diet rich in carotenoids, stable water conditions, and appropriate lighting all support optimal color expression. Stress and poor water quality can temporarily dull coloration.',
      },
      {
        question: 'How big do Starfire Red Angelfish get?',
        answer:
          'Starfire Red Angelfish reach approximately 10 inches from dorsal to ventral fin tip. They need a minimum 55-gallon tank with at least 18 inches of vertical water depth. The tall body profile requires vertical space more than horizontal.',
      },
      {
        question: 'Are Starfire Red Angelfish good community fish?',
        answer:
          'They are generally peaceful but can be territorial, especially during breeding. Avoid fin-nipping species like tiger barbs and serpae tetras. Compatible tankmates include tetras, corydoras, peaceful cichlids, and other non-aggressive species of similar size.',
      },
    ],
    relatedSlugs: ['altum-angelfish', 'angel-koi-fish', 'clarion-angelfish'],
    ratingAverage: 4.6,
    reviewCount: 19,
  },

  // ──────────────────────────────────────────────
  // 89. Angel Koi Fish
  // ──────────────────────────────────────────────
  {
    commonName: 'Angel Koi Fish',
    scientificName: 'Pterophyllum scalare',
    slug: 'angel-koi-fish',
    category: 'angelfish',
    sku: 'TF-ANG-005',
    priceUSD: 50,
    images: [
      {
        url: '/images/products/angel-koi-fish-hero.jpg',
        alt: 'Angel Koi Fish (Pterophyllum scalare) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Angel Koi Fish — more commonly known as the Koi Angelfish — is one of the most popular and recognizable freshwater angelfish varieties, beloved for its striking calico-like pattern of orange, white, and black that evokes the ornamental koi carp of Japanese garden ponds. Each specimen displays a unique arrangement of these three colors, making every fish a one-of-a-kind combination. The orange patches range from pale peach to deep tangerine, the white areas are clean and bright, and the black markings provide bold contrast that ties the pattern together.

This tank-bred strain of Pterophyllum scalare has been developed over many generations of selective breeding, with breeders working to increase the intensity and coverage of the orange coloration while maintaining the distinctive tri-color pattern. Premium specimens — the caliber we select for The Fish Collection — show vibrant, well-distributed color patches with clean transitions between hues. Fish with muddy, brownish orange or excessive black are not selected.

Housing follows standard freshwater angelfish guidelines: a minimum 55-gallon aquarium with at least 18 inches of vertical water depth. Temperature should be maintained between 75 and 86 degrees Fahrenheit, with pH between 6.0 and 7.5. Angelfish are relatively adaptable to a range of water conditions, making the Koi Angelfish suitable for intermediate aquarists who have mastered basic tropical fishkeeping.

Diet is omnivorous and straightforward: quality flake foods, sinking and floating pellets, frozen bloodworms, brine shrimp, and occasional live food treats. Feed two to three times daily. The orange coloration benefits from foods containing natural carotenoids, though pattern and intensity are primarily determined by genetics.

The Koi Angelfish is a perennial favorite for good reason — accessible, beautiful, and endlessly varied.

The Fish Collection ships with insulated packaging and our live arrival guarantee.`,
    seoDescription:
      'Angel Koi Fish for sale — tri-color orange, white, and black angelfish. Each pattern unique. Intermediate care level. Live arrival guaranteed. $50.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 55,
    maxSizeInches: 10,
    origin: 'Tank-bred',
    diet: 'Omnivore — flake food, pellets, frozen bloodworms, brine shrimp',
    temperament: 'Semi-aggressive',
    lifespan: '10-12 years',
    waterParameters: {
      tempMin: 75,
      tempMax: 86,
      phMin: 6.0,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 15,
    faqs: [
      {
        question: 'Are all Koi Angelfish colored the same?',
        answer:
          'No — each Koi Angelfish has a unique arrangement of orange, white, and black patches, similar to ornamental koi. No two fish are identical. This individuality is a major part of their appeal, as every specimen is a one-of-a-kind combination.',
      },
      {
        question: 'Do Koi Angelfish change color as they grow?',
        answer:
          'Somewhat — the orange coloration often intensifies with age, and the black markings may expand or shift. The basic tri-color pattern is established early but continues to develop subtly over the first year. A quality diet and stable conditions support the best color development.',
      },
      {
        question: 'What is the best tank setup for Koi Angelfish?',
        answer:
          'A tall tank of 55 gallons or larger with at least 18 inches of vertical depth. Use moderate lighting, tall driftwood or plants, and avoid sharp decorations. Temperature 75-86°F, pH 6.0-7.5. Angelfish prefer gentle current and some open swimming space.',
      },
      {
        question: 'Can Koi Angelfish live with other fish?',
        answer:
          'Yes, with appropriate companions. Avoid fin-nippers like tiger barbs and very small fish that could be eaten. Good tankmates include tetras (too large to eat), corydoras, peaceful loaches, and other non-aggressive community fish. Angelfish may become territorial during breeding.',
      },
    ],
    relatedSlugs: ['starfire-red-angelfish', 'altum-angelfish', 'clarion-angelfish'],
    ratingAverage: 4.5,
    reviewCount: 26,
  },

  // ──────────────────────────────────────────────
  // 90. Neptune Grouper
  // ──────────────────────────────────────────────
  {
    commonName: 'Neptune Grouper',
    scientificName: 'Cephalopholis igarashiensis',
    slug: 'neptune-grouper',
    category: 'grouper',
    sku: 'TF-GRP-003',
    priceUSD: 4200,
    images: [
      {
        url: '/images/products/neptune-grouper-hero.jpg',
        alt: 'Neptune Grouper (Cephalopholis igarashiensis) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Neptune Grouper is one of the most coveted deep-water reef fish in the marine aquarium hobby — a stunningly colored species whose vivid yellow-to-orange body and electric blue-purple highlights have made it a grail fish for serious marine collectors. Cephalopholis igarashiensis inhabits deep reef slopes throughout the Indo-Pacific at depths of 260 to 800 feet, placing it well beyond the reach of standard SCUBA collection. The extreme depth requirement means that every specimen that reaches the aquarium trade has undergone careful, multi-stage decompression over several days — a process that adds significant cost and limits availability.

The coloration of the Neptune Grouper is genuinely extraordinary. Juveniles display a vivid orange-yellow body with bright blue horizontal lines and fin margins. As the fish matures, the orange deepens and the blue intensifies, creating a color combination that is unique among marine fish. At approximately ten inches, this is a manageable species for a well-equipped marine aquarium — far smaller than most grouper species and suitable for tanks of 120 gallons or larger.

Water conditions must reflect the cool, stable environment of deep reef habitats: temperature between 72 and 77 degrees Fahrenheit — notably cooler than standard reef setups — and pH between 8.1 and 8.4. Specific gravity should be maintained at 1.025. Excellent water quality with zero ammonia and nitrite and minimal nitrate is essential. Subdued lighting is recommended, as this species originates from the twilight zone where ambient light is minimal.

Diet consists of frozen mysis shrimp, quality marine pellets, chopped seafood, and small silversides. Neptune Groupers typically acclimate well to captive feeding once established, though initial reluctance with prepared foods is common.

This is a specialist-level species with a price tag that reflects its rarity and the extraordinary effort required to collect and acclimate it.

The Fish Collection ships via dedicated climate-controlled courier with our live arrival guarantee.`,
    seoDescription:
      'Neptune Grouper for sale — rare deep-water Cephalopholis igarashiensis. Vivid orange and blue coloration. Specialist-level. Live arrival guaranteed.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 120,
    maxSizeInches: 10,
    origin: 'Indo-Pacific deep water',
    diet: 'Carnivore — frozen mysis, marine pellets, chopped seafood, silversides',
    temperament: 'Semi-aggressive',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 77,
      phMin: 8.1,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'Why are Neptune Groupers so expensive?',
        answer:
          'Neptune Groupers live at depths of 260-800 feet, well beyond SCUBA range. Collection requires specialized deep diving or submersible equipment, followed by multi-day decompression protocols. The extreme collection difficulty, high mortality during decompression, and limited supply all contribute to the premium price.',
      },
      {
        question: 'What temperature does a Neptune Grouper need?',
        answer:
          'Neptune Groupers require cooler water than most reef fish: 72-77°F. This is significantly below standard reef temperatures of 78-80°F, reflecting their deep-water origins. A dedicated chiller may be necessary, and tankmates must tolerate cooler conditions.',
      },
      {
        question: 'How big does a Neptune Grouper get?',
        answer:
          'Neptune Groupers reach approximately 10 inches — much smaller than most grouper species. A 120-gallon tank is the minimum. Despite their modest size, they are still predatory and will eat fish small enough to fit in their mouths.',
      },
      {
        question: 'Can Neptune Groupers live in a standard reef tank?',
        answer:
          'Not in a standard reef setup due to their cooler temperature requirements (72-77°F) and subdued lighting preferences. A dedicated deep-water biotope or cool-water fish-only system is ideal. They may eat small ornamental shrimp and very small fish.',
      },
    ],
    relatedSlugs: ['panther-grouper', 'miniatus-grouper', 'bladefin-basslet'],
    ratingAverage: 5.0,
    reviewCount: 2,
  },

  // ──────────────────────────────────────────────
  // 91. Bladefin Basslet
  // ──────────────────────────────────────────────
  {
    commonName: 'Bladefin Basslet',
    scientificName: 'Jeboehlkia gladifer',
    slug: 'bladefin-basslet',
    category: 'bass',
    sku: 'TF-BAS-003',
    priceUSD: 7000,
    images: [
      {
        url: '/images/products/bladefin-basslet-hero.jpg',
        alt: 'Bladefin Basslet (Jeboehlkia gladifer) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Bladefin Basslet is one of the rarest and most expensive marine aquarium fish on Earth — a tiny, exquisite species that commands prices in the thousands of dollars for a fish barely two inches long. Jeboehlkia gladifer is found exclusively in deep Caribbean waters at depths of 500 to 1000 feet, making it one of the most inaccessible aquarium species in existence. The extreme collection depth requires specialized submersible operations and painstaking multi-stage decompression protocols that can take days to complete. The result is a fish that epitomizes the concept of rarity in the marine hobby.

The Bladefin Basslet's appearance is delicate and refined rather than flashy. The body is a translucent pinkish-white with subtle orange-red highlights, and the namesake feature is an elongated, blade-like first dorsal spine that extends well beyond the normal dorsal fin profile — a structure whose biological purpose remains debated among ichthyologists. The overall effect is ethereal and otherworldly, appropriate for a species that spends its natural life in the perpetual twilight of the deep Caribbean reef.

At only two inches maximum size, the Bladefin Basslet requires surprisingly modest housing: a 30-gallon aquarium is sufficient for a single specimen. Water conditions must mirror the cool, pristine environment of its native depth: temperature between 72 and 77 degrees Fahrenheit and pH between 8.1 and 8.4. Like all deep-water species, it prefers subdued lighting. A dedicated nano system with cool water and dim lighting provides the ideal environment.

Diet consists of frozen mysis shrimp, copepods, finely chopped seafood, and small marine pellets. The Bladefin Basslet typically acclimates well to captive feeding once established in a stress-free environment.

This is the ultimate collector's fish — proof that in the marine hobby, rarity and value bear no relationship to size.

The Fish Collection ships via dedicated climate-controlled courier with our live arrival guarantee.`,
    seoDescription:
      'Bladefin Basslet for sale — ultra-rare deep-water Jeboehlkia gladifer from the Caribbean. Specialist-level collector fish. Live arrival guaranteed.',
    careLevel: 5,
    careLevelLabel: 'Specialist',
    tankSizeGallons: 30,
    maxSizeInches: 2,
    origin: 'Caribbean, 150-300m depth',
    diet: 'Carnivore — frozen mysis, copepods, finely chopped seafood, small pellets',
    temperament: 'Peaceful',
    lifespan: '5-10 years',
    waterParameters: {
      tempMin: 72,
      tempMax: 77,
      phMin: 8.1,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'Why is the Bladefin Basslet so expensive?',
        answer:
          'The Bladefin Basslet lives at depths of 500-1000 feet in the Caribbean — accessible only by submersible. Collection requires specialized deep-diving operations and multi-day decompression. Extreme rarity, collection difficulty, and high mortality during acclimation all contribute to prices exceeding $7,000.',
      },
      {
        question: 'How big does a Bladefin Basslet get?',
        answer:
          'The Bladefin Basslet reaches only about 2 inches, making it one of the most expensive fish per inch in the hobby. Despite its tiny size, it commands thousands of dollars due to its extreme rarity and collection difficulty. A 30-gallon tank is sufficient.',
      },
      {
        question: 'What is the blade fin on a Bladefin Basslet?',
        answer:
          'The "blade fin" is an elongated, blade-like first dorsal spine that extends well beyond the normal dorsal fin profile. This distinctive feature gives the species its common name. Its biological function is still debated among scientists but may serve as a species recognition signal in deep water.',
      },
      {
        question: 'What conditions does a Bladefin Basslet need?',
        answer:
          'Cool water (72-77°F), pristine water quality (pH 8.1-8.4), and subdued lighting to replicate deep-water conditions. A dedicated nano system is ideal. Avoid bright reef lighting and aggressive tankmates. Stability is more important than any single parameter.',
      },
    ],
    relatedSlugs: ['peacock-bass', 'australian-bass', 'neptune-grouper'],
    ratingAverage: 5.0,
    reviewCount: 1,
  },

  // ──────────────────────────────────────────────
  // 92. Leucistic Axolotl
  // ──────────────────────────────────────────────
  {
    commonName: 'Leucistic Axolotl',
    scientificName: 'Ambystoma mexicanum',
    slug: 'leucistic-axolotl',
    category: 'axolotl',
    sku: 'TF-AXL-LEUC-001',
    priceUSD: 45,
    images: [
      {
        url: '/images/products/leucistic-axolotl-hero.jpg',
        alt: 'Leucistic Axolotl (Ambystoma mexicanum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Leucistic Axolotl — affectionately known as the "Lucy" among keepers — is the most iconic colour morph of Ambystoma mexicanum and the specimen that has single-handedly propelled axolotls from niche oddity to mainstream fascination. Its translucent, pale pink-white body is punctuated by dark, expressive eyes and a crown of feathery external gills that flush a deep crimson when the animal is well-oxygenated and relaxed. The visual effect is otherworldly: a creature that looks as though it was designed for a fantasy film, yet is entirely real and thriving in properly maintained cold-water aquaria around the globe. The Fish Collection sources our Leucistic Axolotls from established captive-bred lineages descended from verified Mexican stock, ensuring genetic diversity and robust health from the moment they arrive at your door.

Understanding the leucistic morph requires a brief genetics primer. Unlike true albinos, leucistic axolotls retain melanin in their eyes, which is why their pupils are dark rather than the pink-red seen in albino variants. The rest of the body lacks the normal distribution of melanophores that would produce dark pigmentation, resulting in a creamy white to pale pink appearance. The gills, rich in blood vessels, display their natural red colouration unmasked by pigment — a feature that serves as a real-time health barometer. Pale, shrunken gills can indicate poor water quality or stress, while full, deeply red gill filaments confirm that conditions are optimal.

Housing a Leucistic Axolotl is a rewarding exercise in cold-water aquarium keeping — a refreshing departure from the heated tropical setups that dominate the hobby. A minimum 20-gallon long aquarium is required for a single adult, with an additional 10 gallons per extra axolotl if you plan to keep a group. The critical parameter is temperature: axolotls are cold-water animals that require 60 to 68 degrees Fahrenheit year-round. Temperatures above 72 degrees cause chronic stress, suppressed immune function, and eventually fatal fungal infections. In warmer climates, an aquarium chiller or a dedicated cool room is non-negotiable. Substrate should be fine sand or bare-bottom — gravel poses an impaction risk, as axolotls are indiscriminate suction feeders that will ingest anything that fits in their wide mouths.

Filtration must balance mechanical efficiency with gentle flow. Axolotls are not strong swimmers and become stressed in high-current environments. A sponge filter or a canister filter with a spray bar diffuser works well. The nitrogen cycle must be fully established before introducing an axolotl — these animals are sensitive to ammonia and nitrite at any detectable level. Weekly water changes of twenty to thirty percent maintain the pristine conditions that keep a leucistic axolotl's skin clear and gills vibrant.

Diet is straightforward and satisfying to manage. Earthworms (nightcrawlers) are the gold-standard staple — nutritionally complete and eagerly accepted by axolotls of all ages. Supplement with high-quality sinking pellets formulated for aquatic salamanders, frozen bloodworms for juveniles, and the occasional piece of raw, unseasoned shrimp or fish fillet as a treat. Feed juveniles daily and adults every two to three days. Overfeeding is the most common husbandry error; a slightly lean axolotl is far healthier than an obese one.

The Leucistic Axolotl occupies a unique cultural position. Ambystoma mexicanum is critically endangered in its native habitat — the ancient lake system of Xochimilco in Mexico City — making every captive-bred specimen a small act of species preservation. The axolotl's remarkable regenerative abilities, including the capacity to regrow entire limbs, portions of the heart, and even sections of the brain, have made it one of the most studied animals in biomedical research. Owning a leucistic axolotl connects you to a living lineage that stretches back to Aztec mythology, where the creature was associated with the god Xolotl.

The Fish Collection ships all axolotls in insulated cold-pack containers designed to maintain temperatures below 68 degrees throughout transit. Our live arrival guarantee is absolute, and our aquatics team is available post-purchase to advise on setup, feeding, and long-term care.`,
    seoDescription:
      'Leucistic Axolotl (Lucy) for sale — captive-bred Ambystoma mexicanum with vibrant red gills and dark eyes. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 20,
    maxSizeInches: 12,
    origin: 'Captive-Bred (Mexican lineage)',
    diet: 'Carnivore — earthworms, pellets, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 60,
      tempMax: 68,
      phMin: 6.5,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'What is the difference between leucistic and albino axolotls?',
        answer:
          'Leucistic axolotls have dark eyes and a white-to-pink body, while albino axolotls have pink or red eyes due to a complete absence of melanin. The leucistic morph retains melanin specifically in the eyes and occasionally as faint freckles on the body, giving them a more expressive appearance. Both morphs require identical care, but the dark-eyed leucistic is generally considered the most visually striking and is the most popular morph in the hobby.',
      },
      {
        question: 'What temperature do axolotls need?',
        answer:
          'Axolotls require cold water between 60 and 68 degrees Fahrenheit. Temperatures above 72 degrees cause chronic stress, immune suppression, and increased susceptibility to fungal infections that can be fatal. In warm climates, an aquarium chiller is essential — not optional. Many keepers maintain a dedicated cool room or basement setup to avoid the ongoing cost of mechanical cooling.',
      },
      {
        question: 'Can axolotls live with fish?',
        answer:
          'Generally, no. Fish may nip at axolotl gills, causing injury and stress. Small fish will be eaten by the axolotl, while larger or aggressive fish can cause serious harm. The only sometimes-successful tankmate is a group of white cloud mountain minnows in a large, cool tank, but even this carries risk. For the health and safety of your axolotl, a species-only setup is strongly recommended.',
      },
      {
        question: 'How big do leucistic axolotls get?',
        answer:
          'Leucistic axolotls typically reach 10 to 12 inches in total length, with exceptional specimens occasionally reaching 14 inches. Most growth occurs in the first 18 months, with full adult size achieved by age 2. Growth rate depends on feeding frequency, water quality, and temperature — cooler temperatures within the ideal range promote steady, healthy growth.',
      },
      {
        question: 'Do axolotls need a filter?',
        answer:
          'Yes, filtration is essential but must be gentle. Axolotls produce significant waste and are sensitive to ammonia and nitrite. A sponge filter or canister filter with a spray bar to diffuse flow is ideal. Strong currents stress axolotls and can damage their delicate gill filaments. The tank must be fully cycled before introducing an axolotl — never perform a fish-in cycle with these animals.',
      },
    ],
    relatedSlugs: ['golden-albino-axolotl', 'gfp-leucistic-axolotl', 'melanoid-axolotl'],
    speciesGuideSlug: 'leucistic-axolotl',
    ratingAverage: 4.9,
    reviewCount: 22,
  },

  // ──────────────────────────────────────────────
  // 93. Golden Albino Axolotl
  // ──────────────────────────────────────────────
  {
    commonName: 'Golden Albino Axolotl',
    scientificName: 'Ambystoma mexicanum',
    slug: 'golden-albino-axolotl',
    category: 'axolotl',
    sku: 'TF-AXL-GALD-001',
    priceUSD: 55,
    images: [
      {
        url: '/images/products/golden-albino-axolotl-hero.jpg',
        alt: 'Golden Albino Axolotl (Ambystoma mexicanum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Golden Albino Axolotl is a radiant expression of Ambystoma mexicanum that swaps the leucistic morph's pale subtlety for a warm, shimmering gold that catches light like no other axolotl colour form. The body ranges from a rich buttercup yellow to a deeper amber-gold depending on age, diet, and individual genetics, while the eyes glow a distinctive pinkish-red — the hallmark of true albinism. The external gills, unmasked by dark pigment, display their vascular brilliance in vivid crimson, creating a stunning contrast against the golden body. The Fish Collection selects our Golden Albino Axolotls from breeders who have refined the golden tone over multiple generations, producing specimens with deep, consistent colouration rather than the washed-out pale yellow sometimes seen in less carefully managed lines.

The golden albino phenotype results from the absence of melanophores — the dark pigment cells — combined with the retention and enhancement of xanthophores, the yellow pigment cells. This genetic combination produces a living jewel that genuinely appears to glow under proper lighting. The effect is particularly dramatic under warm-toned LED light, which intensifies the golden hue and makes the gill filaments appear almost luminescent. Many keepers find that the golden albino is the most photogenic of all axolotl morphs, producing images that require no colour enhancement to look spectacular.

Because this is a true albino, the Golden Albino Axolotl is somewhat more light-sensitive than its dark-eyed counterparts. While not requiring complete darkness, the tank should offer shaded retreats — PVC hides, terracotta pots, or dense live plants like Java fern and Anubias provide the shelter these animals prefer. Bright overhead lighting can cause visible discomfort, with the axolotl retreating to the darkest corner of the tank. A moderate LED on a timer with a gradual ramp-up and ramp-down cycle simulates natural light transitions and minimises stress.

All other husbandry requirements mirror those of the leucistic morph. Cold water between 60 and 68 degrees Fahrenheit is mandatory — there is no flexibility on this point. A 20-gallon long aquarium with fine sand or bare-bottom substrate, gentle filtration, and zero detectable ammonia or nitrite forms the foundation of proper axolotl care. Weekly water changes of twenty to thirty percent keep parameters stable and the animal's skin and gills in peak condition.

Feeding is identical to other axolotl morphs: earthworms as the primary staple, supplemented with quality sinking pellets, frozen bloodworms for younger specimens, and occasional raw shrimp or fish treats. The golden colouration can be influenced by diet — foods rich in carotenoids, such as certain spirulina-enhanced pellets, may deepen the yellow-gold tones over time, though genetics remain the primary driver of colour intensity.

The Golden Albino Axolotl is an excellent choice for keepers who want the full axolotl experience with a visual presentation that stands apart from the more common leucistic morph. Its warm tones, ethereal gills, and gentle disposition make it a captivating centrepiece for a dedicated cold-water setup. The Fish Collection ships all axolotls in insulated cold-pack containers with our unconditional live arrival guarantee.`,
    seoDescription:
      'Golden Albino Axolotl for sale — captive-bred with rich gold colouration and vibrant red gills. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 20,
    maxSizeInches: 12,
    origin: 'Captive-Bred (Mexican lineage)',
    diet: 'Carnivore — earthworms, pellets, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 60,
      tempMax: 68,
      phMin: 6.5,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'Are golden albino axolotls sensitive to light?',
        answer:
          'Yes, as true albinos they lack melanin in their eyes, making them more light-sensitive than dark-eyed morphs like leucistics or wilds. Provide shaded hides using PVC pipes, terracotta pots, or dense live plants. Avoid intense overhead lighting — a moderate LED on a timer with gradual ramp-up works well. The axolotl will self-regulate by retreating to shade when light is uncomfortable.',
      },
      {
        question: 'Do golden albino axolotls change colour?',
        answer:
          'The golden tone can intensify or lighten slightly depending on diet, age, and environmental conditions. Carotenoid-rich foods may deepen the gold over time, while poor nutrition can cause fading. Juveniles are often paler than adults, with the richest golden colouration developing as the animal matures over its first 12 to 18 months. Genetics remain the primary driver — a well-bred golden albino will maintain its warm tone throughout its life.',
      },
      {
        question: 'How much does a Golden Albino Axolotl cost?',
        answer:
          'Golden Albino Axolotls typically range from $30 to $80 depending on size, colour intensity, and breeder reputation. Our specimens are priced at $55, reflecting deep golden colouration from selectively bred lines. Show-quality specimens with exceptionally rich amber tones from specialist breeders can exceed $100. The key value differentiator is colour depth — a vibrant gold commands a significant premium over a washed-out pale yellow.',
      },
      {
        question: 'Can golden albino axolotls live together?',
        answer:
          'Yes, axolotls of similar size can be housed together in a sufficiently large tank — add 10 gallons per additional axolotl beyond the first. However, juveniles under 6 inches should be separated to prevent nipping, as younger axolotls are more prone to biting tankmates limbs and gills. Adults of similar size coexist peacefully in most cases, though occasional nipping can occur during feeding. Always ensure each animal has its own hide.',
      },
    ],
    relatedSlugs: ['leucistic-axolotl', 'gfp-leucistic-axolotl', 'melanoid-axolotl'],
    speciesGuideSlug: 'golden-albino-axolotl',
    ratingAverage: 4.8,
    reviewCount: 15,
  },

  // ──────────────────────────────────────────────
  // 94. GFP Leucistic Axolotl
  // ──────────────────────────────────────────────
  {
    commonName: 'GFP Leucistic Axolotl',
    scientificName: 'Ambystoma mexicanum',
    slug: 'gfp-leucistic-axolotl',
    category: 'axolotl',
    sku: 'TF-AXL-GFPL-001',
    priceUSD: 75,
    images: [
      {
        url: '/images/products/gfp-leucistic-axolotl-hero.jpg',
        alt: 'GFP Leucistic Axolotl (Ambystoma mexicanum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The GFP Leucistic Axolotl is the single most visually extraordinary variant of Ambystoma mexicanum available in the hobby — a leucistic axolotl that carries the Green Fluorescent Protein gene, causing it to emit an intense, ethereal green glow when exposed to blue or ultraviolet light. Under normal room lighting, this animal looks identical to a standard leucistic: pale pink-white body, dark expressive eyes, crimson gill filaments. But switch on a blue LED or UV lamp, and the transformation is immediate and breathtaking. The entire body — skin, gills, eyes, and even internal structures visible through the translucent skin — fluoresces a vivid, electric green that looks like something from science fiction. The Fish Collection sources our GFP Leucistic Axolotls from specialised breeders who maintain verified GFP-positive lines, ensuring every specimen we ship produces strong, consistent fluorescence.

The Green Fluorescent Protein was originally isolated from the jellyfish Aequorea victoria and has become one of the most important tools in modern molecular biology — its discoverers were awarded the Nobel Prize in Chemistry in 2008. In axolotls, the GFP gene was introduced into laboratory lines during the early 2000s as a research marker and has since been bred into captive populations available to hobbyists. The protein is expressed constitutively in all tissues, which is why the entire animal glows rather than just specific regions. The fluorescence is entirely harmless to the axolotl and has no effect on its health, behaviour, or lifespan — it is simply a visual trait that adds a spectacular dimension to an already remarkable animal.

To appreciate the GFP effect, you will need a blue LED light source in the 450 to 490 nanometre range or a standard blacklight UV lamp. Many aquarium LED fixtures now include a "moonlight" or "actinic" blue mode that works well. A dedicated GFP flashlight — available from scientific supply companies for under twenty dollars — provides the most intense fluorescence for photography and casual viewing. The effect is most dramatic in a darkened room, where the axolotl appears to glow as though lit from within. Under normal white light, the GFP is invisible, and the animal presents as a beautiful standard leucistic.

All care requirements are identical to non-GFP axolotls. Cold water between 60 and 68 degrees Fahrenheit, a 20-gallon long minimum, fine sand or bare-bottom substrate, gentle filtration, and a fully cycled tank. The GFP gene does not alter dietary needs, growth rate, or temperament in any way. Feed earthworms as the staple, supplement with pellets and frozen foods, and maintain pristine water quality through consistent weekly changes.

The GFP Leucistic Axolotl occupies a unique intersection of science, art, and nature. It is simultaneously a living connection to cutting-edge molecular biology, a genuinely beautiful aquarium animal, and a conversation starter unlike anything else in the hobby. Whether you keep the blue light on as a permanent feature or save it for special viewing sessions, the GFP axolotl delivers a sense of wonder that never diminishes. The Fish Collection ships all axolotls in insulated cold-pack containers with our live arrival guarantee.`,
    seoDescription:
      'GFP Leucistic Axolotl for sale — glows vivid green under blue or UV light. Captive-bred Ambystoma mexicanum with live arrival guarantee at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 20,
    maxSizeInches: 12,
    origin: 'Captive-Bred (Mexican lineage)',
    diet: 'Carnivore — earthworms, pellets, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 60,
      tempMax: 68,
      phMin: 6.5,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'What does GFP mean in axolotls?',
        answer:
          'GFP stands for Green Fluorescent Protein, a gene originally from the jellyfish Aequorea victoria. Axolotls carrying this gene produce a protein that fluoresces vivid green when exposed to blue (450-490nm) or ultraviolet light. The GFP is expressed in all tissues, causing the entire animal to glow. Under normal white light, the axolotl looks like a standard leucistic — the fluorescence is only visible under the correct wavelength.',
      },
      {
        question: 'Is the GFP gene harmful to axolotls?',
        answer:
          'No, the Green Fluorescent Protein has no negative effects on the axolotl\'s health, behaviour, lifespan, or reproductive capability. It is a passive visual marker that simply produces a fluorescent protein in the animal\'s cells. GFP axolotls have been maintained in laboratory and hobbyist settings for over two decades with no documented health differences compared to non-GFP animals.',
      },
      {
        question: 'What light do I need to see the GFP glow?',
        answer:
          'You need a blue LED light in the 450-490 nanometre range or a standard UV blacklight. Many aquarium LED fixtures include a blue or actinic mode that works well. For the most intense fluorescence, a dedicated GFP flashlight from a scientific supply company costs under twenty dollars and provides a focused beam ideal for viewing and photography. The glow is most dramatic in a darkened room.',
      },
      {
        question: 'Do GFP axolotls always glow?',
        answer:
          'GFP axolotls only fluoresce visibly when illuminated by the correct wavelength of light — blue (450-490nm) or ultraviolet. Under normal white room lighting or aquarium LEDs, they look identical to non-GFP leucistic axolotls. The fluorescent protein is always present in their cells, but it requires excitation by specific wavelengths to emit visible green light. Think of it as a hidden feature you can reveal on demand.',
      },
      {
        question: 'Can GFP axolotls breed with normal axolotls?',
        answer:
          'Yes, GFP axolotls breed normally with any other axolotl. The GFP gene is inherited in a dominant fashion — approximately half the offspring from a GFP x non-GFP cross will carry the gene and fluoresce. Breeding two GFP carriers together increases the proportion of fluorescent offspring. The trait is stable across generations and does not degrade or weaken over time.',
      },
    ],
    relatedSlugs: ['leucistic-axolotl', 'golden-albino-axolotl', 'melanoid-axolotl'],
    speciesGuideSlug: 'gfp-leucistic-axolotl',
    ratingAverage: 5.0,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 95. Melanoid Axolotl
  // ──────────────────────────────────────────────
  {
    commonName: 'Melanoid Axolotl',
    scientificName: 'Ambystoma mexicanum',
    slug: 'melanoid-axolotl',
    category: 'axolotl',
    sku: 'TF-AXL-MELN-001',
    priceUSD: 50,
    images: [
      {
        url: '/images/products/melanoid-axolotl-hero.jpg',
        alt: 'Melanoid Axolotl (Ambystoma mexicanum) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Melanoid Axolotl is the dark counterpart to the hobby's beloved leucistic — a deeply pigmented variant of Ambystoma mexicanum whose entire body is cloaked in rich, uniform dark brown to black colouration that gives it an undeniable presence in any cold-water setup. Where the leucistic axolotl charms with ethereal translucence, the melanoid commands attention through sheer density of pigment. The gills are dark-tinged yet still reveal their deep red vascular network, creating a moody, dramatic contrast. The eyes, also dark, give the melanoid a more intense, almost predatory expression compared to its lighter relatives. The Fish Collection sources our Melanoid Axolotls from breeders who specialise in deep, consistent melanistic colouration — not the patchy, mottled appearance that characterises wild-type axolotls, but a true, even melanoid phenotype.

Understanding the distinction between melanoid and wild-type is important for informed purchasing. Wild-type axolotls carry a mix of pigment cell types — melanophores (black), xanthophores (yellow), and iridophores (reflective) — producing a mottled olive-brown appearance with golden speckles. Melanoid axolotls, by contrast, have an overabundance of melanophores and a near-complete absence of iridophores. The result is a darker, more uniform animal that lacks the wild-type's reflective sheen but gains a velvety, matte-finish quality that many keepers find more visually striking. Under subdued lighting, a melanoid axolotl against a light sand substrate creates a dramatic high-contrast presentation.

Care requirements are identical to all other axolotl morphs. Cold water between 60 and 68 degrees Fahrenheit is the non-negotiable foundation. A 20-gallon long aquarium with fine sand or bare-bottom substrate, gentle filtration via sponge filter or diffused canister output, and zero detectable ammonia or nitrite. The melanoid morph is no more or less hardy than other colour variants — all Ambystoma mexicanum morphs share the same fundamental biology and environmental needs. Weekly water changes of twenty to thirty percent maintain the conditions that keep the animal's skin healthy and gills fully extended.

One aesthetic advantage of the melanoid morph is its tolerance of — indeed, its enhancement by — varied lighting conditions. While albino and leucistic axolotls can appear washed out under bright light, the melanoid's dark pigmentation absorbs and contrasts beautifully under moderate to bright aquarium LEDs. This makes it an excellent choice for keepers who want a well-lit display tank rather than the subdued setups typically associated with axolotl keeping. The dark body also photographs exceptionally well, producing crisp, high-contrast images without the overexposure challenges common with white-bodied morphs.

Diet follows the standard axolotl protocol: earthworms as the cornerstone, supplemented with quality sinking pellets, frozen bloodworms for juveniles, and occasional treats of raw shrimp or fish. The melanoid's dark colouration is not significantly influenced by diet — it is genetically fixed and remains stable throughout the animal's life, unlike some colour morphs that can fade or shift with age and nutrition.

The Melanoid Axolotl is the choice for keepers who appreciate the axolotl's extraordinary biology and gentle temperament but want a specimen with a bolder, more dramatic visual presence than the pastel-toned morphs. The Fish Collection ships all axolotls in insulated cold-pack containers with our unconditional live arrival guarantee.`,
    seoDescription:
      'Melanoid Axolotl for sale — deep dark captive-bred Ambystoma mexicanum with velvety black colouration. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 20,
    maxSizeInches: 12,
    origin: 'Captive-Bred (Mexican lineage)',
    diet: 'Carnivore — earthworms, pellets, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 60,
      tempMax: 68,
      phMin: 6.5,
      phMax: 8.0,
    },
    inStock: true,
    stockCount: 7,
    faqs: [
      {
        question: 'What is the difference between melanoid and wild-type axolotls?',
        answer:
          'Wild-type axolotls have a mottled olive-brown appearance with golden speckles, produced by a mix of melanophores, xanthophores, and iridophores. Melanoid axolotls have an overabundance of melanophores and virtually no iridophores, resulting in a uniformly dark brown-to-black body with a matte, velvety finish rather than the wild-type\'s reflective sheen. The visual difference is significant — melanoids appear much darker and more uniformly pigmented.',
      },
      {
        question: 'Are melanoid axolotls rare?',
        answer:
          'Melanoid axolotls are less common than leucistic or wild-type morphs in the general pet trade, but they are well-established in specialised breeding programs and readily available from reputable breeders. They are not rare in the same sense as some colour mutations like chimera or mosaic axolotls, which occur unpredictably. A quality melanoid with deep, uniform colouration from a selective breeding program commands a moderate premium over more common morphs.',
      },
      {
        question: 'Do melanoid axolotls need special lighting?',
        answer:
          'No, melanoid axolotls have dark-pigmented eyes and are comfortable under a wider range of lighting conditions than albino morphs. Their dark colouration actually looks best under moderate to bright aquarium LEDs, which highlight the velvety texture of their skin and the contrast between body and gills. This makes them well-suited to display tanks where brighter lighting is desired for aesthetic or plant-growing purposes.',
      },
      {
        question: 'How long do melanoid axolotls live?',
        answer:
          'Melanoid axolotls live 10 to 15 years with proper care, identical to all other Ambystoma mexicanum colour morphs. Some well-maintained specimens have been documented living beyond 15 years. Longevity depends primarily on water temperature stability, water quality, diet, and avoidance of chronic stress. The colour morph has no bearing on lifespan — all axolotl variants share the same fundamental biology.',
      },
    ],
    relatedSlugs: ['leucistic-axolotl', 'golden-albino-axolotl', 'gfp-leucistic-axolotl'],
    speciesGuideSlug: 'melanoid-axolotl',
    ratingAverage: 4.7,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 96. Kohaku Koi
  // ──────────────────────────────────────────────
  {
    commonName: 'Kohaku Koi',
    scientificName: 'Cyprinus rubrofuscus',
    slug: 'kohaku-koi',
    category: 'koi',
    sku: 'TF-KOI-KOHA-001',
    priceUSD: 350,
    images: [
      {
        url: '/images/products/kohaku-koi-hero.jpg',
        alt: 'Kohaku Koi (Cyprinus rubrofuscus) — Japanese import specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Kohaku is the foundation upon which the entire art of Nishikigoi appreciation was built — a koi variety so revered in Japan that the saying goes: "koi keeping begins and ends with Kohaku." This deceptively simple pattern of crimson-red (hi) markings on a snow-white (shiroji) body has captivated breeders and collectors for over a century, and the best Kohaku specimens regularly claim Grand Champion titles at the All Japan Koi Show, the most prestigious competition in the koi world. The Fish Collection sources our Kohaku directly from established Japanese breeders in Niigata Prefecture — the ancestral heartland of koi culture — selecting only specimens with the depth of colour, skin quality, and pattern balance that serious collectors demand.

What makes a great Kohaku is far more nuanced than it appears at first glance. The white base must be a pure, unblemished snow-white — not ivory, not cream, and absolutely free of yellowish tinge or scattered blemishes known as shimi. The red pattern should be a deep, uniform crimson with clearly defined edges (kiwa) that appear almost painted on rather than bleeding into the white. Pattern placement follows aesthetic principles refined over generations: the hi should be balanced across the body, ideally stepping in two to four distinct patches from head to tail, with clean white separations between them. The head should feature a well-placed hi marking that does not extend over the eyes or lips, and the tail joint should finish cleanly with white, giving the pattern a sense of completion.

At 18 to 24 inches, our current Japanese import Kohaku is entering its prime development years. Koi continue to grow and improve throughout their lives, and a well-bred Kohaku in its second to fourth year will deepen in colour and refine in pattern as it matures. This is one of the great pleasures of koi keeping — watching a fish evolve from a promising youngster into a mature masterpiece over a period of years. The best Kohaku achieve their peak expression at 5 to 8 years of age, though they continue to be impressive specimens well beyond that.

Housing a Kohaku Koi requires a purpose-built pond environment. A minimum of 1,000 gallons is necessary for a small collection, with 2,500 gallons or more recommended for long-term keeping of multiple koi. Depth should be at least three feet to provide thermal stability and protection from predators. Filtration is the single most critical infrastructure investment — koi produce enormous amounts of waste relative to their body mass, and the biological filtration system must be sized to handle the full bioload with generous overhead capacity. Multi-chamber gravity-fed systems, bead filters, or moving-bed biofilm reactors are all proven approaches. Water temperature should range from 65 to 75 degrees Fahrenheit during the active season, with koi tolerating cooler temperatures during winter dormancy in regions that experience seasonal cold.

Diet should be a high-quality koi pellet formulated for colour enhancement, supplemented with fresh foods like shelled peas, watermelon, and occasional treats of earthworms or shrimp. Colour-enhancing foods containing spirulina and astaxanthin will deepen the red hi markings over time without affecting the purity of the white base — a balance that quality koi foods are specifically engineered to achieve.

The Fish Collection ships koi in oxygen-saturated, insulated containers designed for the rigours of live fish transport. Our live arrival guarantee covers every shipment, and our koi specialists are available to advise on pond setup, filtration design, and seasonal management.`,
    seoDescription:
      'Kohaku Koi for sale — Japanese import from Niigata breeders with deep hi and snow-white shiroji. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 1000,
    maxSizeInches: 24,
    origin: 'Japan (Niigata Prefecture)',
    diet: 'Omnivore — koi pellets, vegetables, shrimp',
    temperament: 'Peaceful',
    lifespan: '25-35 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 75,
      phMin: 7.0,
      phMax: 8.6,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'What makes a good Kohaku Koi?',
        answer:
          'A quality Kohaku has a pure snow-white base (shiroji) free of yellowing or blemishes, deep uniform crimson red (hi) markings with crisp edges (kiwa), balanced pattern placement stepping from head to tail, and a clean finish at the tail joint. The head should feature a well-placed hi marking that does not cover the eyes or lips. Skin quality — the lustre and texture of the white base — is often the deciding factor at competition level.',
      },
      {
        question: 'How big do Kohaku Koi get?',
        answer:
          'Kohaku Koi from quality Japanese bloodlines can reach 24 to 36 inches in a well-maintained pond environment, with exceptional specimens occasionally exceeding 36 inches. Growth rate depends on water volume, filtration quality, feeding regimen, and genetics. Koi in smaller ponds will not reach the same potential size as those in large, well-filtered systems. Most reach near-full size by age 6 to 8 years.',
      },
      {
        question: 'How long do Kohaku Koi live?',
        answer:
          'Kohaku Koi regularly live 25 to 35 years with proper pond management, and exceptional specimens have been documented living beyond 50 years. The legendary koi Hanako was reportedly over 200 years old at death, though such extreme ages are disputed. Longevity depends on water quality, diet, pond size, and protection from predators and disease. Koi are generational pets that can outlive their owners.',
      },
      {
        question: 'What size pond do Kohaku Koi need?',
        answer:
          'A minimum of 1,000 gallons for a small group, with 2,500 gallons or more strongly recommended. Depth should be at least 3 feet for thermal stability and predator protection. The most common mistake in koi keeping is undersizing the pond — koi produce significant waste and need substantial water volume to maintain stable, healthy conditions. Filtration capacity is equally important and should be rated for at least twice the pond volume.',
      },
      {
        question: 'Can Kohaku Koi live in a tank?',
        answer:
          'While juvenile koi can be temporarily housed in large aquariums, adult Kohaku Koi require a pond environment. A 24-inch koi in a 300-gallon tank will suffer from stunted growth, poor water quality, and chronic stress. Indoor koi keeping is possible in custom-built indoor ponds, but standard aquariums are not suitable for long-term koi housing. Plan for a proper outdoor or indoor pond from the start.',
      },
    ],
    relatedSlugs: ['sanke-koi', 'showa-koi', 'butterfly-koi', 'platinum-ogon-koi', 'tancho-koi'],
    speciesGuideSlug: 'kohaku-koi',
    ratingAverage: 4.9,
    reviewCount: 7,
  },

  // ──────────────────────────────────────────────
  // 97. Sanke Koi
  // ──────────────────────────────────────────────
  {
    commonName: 'Sanke Koi',
    scientificName: 'Cyprinus rubrofuscus',
    slug: 'sanke-koi',
    category: 'koi',
    sku: 'TF-KOI-SNKE-001',
    priceUSD: 400,
    images: [
      {
        url: '/images/products/sanke-koi-hero.jpg',
        alt: 'Sanke Koi (Cyprinus rubrofuscus) — Taisho Sanshoku Japanese import',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Sanke — formally Taisho Sanshoku — is the second pillar of the "Big Three" koi varieties that form the cornerstone of Nishikigoi appreciation, alongside Kohaku and Showa. What distinguishes the Sanke from its Kohaku cousin is the addition of a third colour: small, accent-like patches of black (sumi) that punctuate the red-and-white pattern without dominating it. The effect is one of refined complexity — a Kohaku elevated by strategic black accents that add depth and visual rhythm to the composition. The Fish Collection sources our Sanke from established Japanese breeders in the Niigata region who have spent generations perfecting the balance between the three colours, producing fish with the clarity, depth, and pattern precision that define competition-quality specimens.

The art of evaluating a Sanke lies in understanding the relationship between its three elements. The white base (shiroji) should be the same pure snow-white demanded in Kohaku — luminous, unblemished, and free of yellowing. The red (hi) markings follow Kohaku principles: deep, uniform crimson with crisp edges, balanced across the body. Where the Sanke becomes its own art form is in the sumi. Black markings should appear as small, well-placed accents — primarily on the body above the lateral line and occasionally on the pectoral fins (tejima, which appears as black stripes on the fin joints). Critically, sumi should not appear on the head of a quality Sanke; a clean, sumi-free head with an attractive hi marking is a hallmark of the variety. The black accents should complement the red pattern without overwhelming it — think of sumi as punctuation in a well-written sentence.

Our current Sanke is a Japanese import measuring 18 to 24 inches, displaying the balanced three-colour pattern that Sanke enthusiasts prize. The sumi is well-developed and stable — an important consideration, as black markings in koi can take years to fully emerge and stabilise. Young Sanke often show only faint or partial sumi that strengthens dramatically as the fish matures, a process called sumi development. A Sanke with stable, well-placed sumi at this size is a strong indicator of future show potential.

Pond requirements mirror those of all koi: a minimum 1,000 gallons with robust filtration, though 2,500 gallons or more is recommended for a collection. Water temperature between 65 and 75 degrees Fahrenheit during active months, with pH maintained between 7.0 and 8.6. Sanke are hardy, long-lived fish that thrive in the same conditions as other Nishikigoi varieties. They are peaceful community fish that coexist well with other koi varieties and with goldfish, though koi should not be housed with smaller fish that might be accidentally consumed.

Feeding a Sanke for optimal colour development requires a thoughtful approach. High-quality colour-enhancing koi pellets containing spirulina and astaxanthin will intensify the red hi markings. The sumi benefits from cooler water temperatures during autumn, which is why Japanese breeders often keep Sanke in mountain mud ponds where seasonal temperature drops naturally deepen the black. In Western pond keeping, maintaining good water quality and a varied diet achieves excellent colour results over time.

The Fish Collection ships all koi in oxygen-saturated, temperature-controlled containers with our unconditional live arrival guarantee. Our koi specialists are available for consultation on pond design, water management, and the nuances of Sanke appreciation.`,
    seoDescription:
      'Sanke Koi (Taisho Sanshoku) for sale — Japanese import with balanced red, white, and black pattern. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 1000,
    maxSizeInches: 24,
    origin: 'Japan (Niigata Prefecture)',
    diet: 'Omnivore — koi pellets, vegetables, shrimp',
    temperament: 'Peaceful',
    lifespan: '25-35 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 75,
      phMin: 7.0,
      phMax: 8.6,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'What is the difference between Sanke and Showa Koi?',
        answer:
          'Both are three-colour koi featuring red, white, and black, but their base colour differs fundamentally. Sanke has a white base with red and black accents — think of it as a Kohaku with added black. Showa has a black base with red and white overlaid on it. In practice, Sanke sumi appears as small accents above the lateral line, while Showa sumi wraps around the body and appears on the head. The visual impression is quite different: Sanke feels refined and elegant, while Showa feels bold and powerful.',
      },
      {
        question: 'Should Sanke Koi have black on the head?',
        answer:
          'No — a hallmark of quality Sanke is a clean head free of sumi (black) markings. The head should display only the white base and a well-placed red (hi) marking. Black on the head of a Sanke is considered a significant fault in competition. This is one of the key distinguishing features from Showa, where head sumi is not only acceptable but desirable. If a three-colour koi has black on its head, it is almost certainly a Showa, not a Sanke.',
      },
      {
        question: 'How does Sanke sumi develop over time?',
        answer:
          'Sumi (black markings) in Sanke koi often takes years to fully emerge and stabilise. Young Sanke may show faint or incomplete sumi that darkens and sharpens as the fish matures — a process influenced by water temperature, genetics, and overall health. Cooler water temperatures, particularly seasonal drops in autumn, promote sumi development. A Sanke with well-developed, stable sumi at 18-24 inches is showing strong genetic potential for continued improvement.',
      },
      {
        question: 'How much are quality Sanke Koi?',
        answer:
          'Quality Japanese-bred Sanke range from $200 to several thousand dollars depending on size, pattern quality, bloodline, and breeder reputation. Our current import is priced at $400, reflecting balanced three-colour pattern, stable sumi development, and Niigata breeding lineage. Competition-grade Sanke from elite breeders at the top of their development can command $5,000 to $50,000 or more at auction. The key pricing factors are skin quality, colour depth, pattern balance, and sumi placement.',
      },
    ],
    relatedSlugs: ['kohaku-koi', 'showa-koi', 'butterfly-koi', 'platinum-ogon-koi', 'tancho-koi'],
    speciesGuideSlug: 'sanke-koi',
    ratingAverage: 4.8,
    reviewCount: 5,
  },

  // ──────────────────────────────────────────────
  // 98. Showa Koi
  // ──────────────────────────────────────────────
  {
    commonName: 'Showa Koi',
    scientificName: 'Cyprinus rubrofuscus',
    slug: 'showa-koi',
    category: 'koi',
    sku: 'TF-KOI-SHWA-001',
    priceUSD: 450,
    images: [
      {
        url: '/images/products/showa-koi-hero.jpg',
        alt: 'Showa Koi (Cyprinus rubrofuscus) — Japanese import specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Showa — formally Showa Sanshoku — completes the "Big Three" trilogy of koi varieties and is arguably the most dramatic and visually powerful of the three. Where the Kohaku is elegant simplicity and the Sanke is refined complexity, the Showa is bold, high-contrast artistry. Its defining characteristic is a black (sumi) base colour overlaid with sweeping patches of red (hi) and white (shiroji) that wrap around the body in a pattern of striking intensity. A great Showa commands the eye in a way that no other koi variety can — it is the variety that most often elicits genuine astonishment from first-time viewers. The Fish Collection imports our Showa from the most respected breeding houses in Niigata Prefecture, where the variety has been refined from its relatively rough origins in the early twentieth century into the magnificent fish it is today.

The Showa was first exhibited in 1927 during the Showa era of Japanese imperial history, hence its name. Early Showa were heavy, dark fish with minimal white and muddy red — a far cry from the explosive beauty of modern specimens. Decades of selective breeding transformed the variety, particularly through the work of legendary breeders who introduced stronger red bloodlines and refined the sumi pattern into the bold, wrapping bands that define today's competition Showa. The modern ideal features large, dramatic blocks of all three colours in roughly equal proportion, with the sumi extending from the head (a critical feature — head sumi is essential in Showa) down the body in a pattern that suggests movement and power.

Evaluating a Showa requires understanding how the three colours interact as a composition. The sumi should be deep, lacquer-black — not grey or faded — with clearly defined edges. Red hi should be the same deep, uniform crimson demanded in Kohaku and Sanke. White should be clean and bright, providing contrast that makes the other two colours pop. The pattern should be balanced but not symmetrical — the aesthetic goal is dynamic tension rather than mirror-image regularity. Pectoral fins ideally show motoguro — solid black at the base that transitions to white at the tips — a feature considered highly desirable in quality Showa.

Our current Showa import measures 18 to 24 inches and displays the bold, high-contrast three-colour pattern that defines the variety at its best. The sumi is deep and stable, the hi is rich and uniform, and the white provides clean separation between the darker elements. This is a fish that will continue to develop and improve as it matures — Showa sumi in particular can deepen and sharpen dramatically over the next several years.

Pond requirements are standard for Nishikigoi: minimum 1,000 gallons, robust multi-stage filtration, water temperature between 65 and 75 degrees Fahrenheit, pH 7.0 to 8.6. Showa are hardy, vigorous fish with the same long lifespan potential as other koi varieties. A colour-enhancing diet with spirulina and astaxanthin benefits the hi markings, while cooler autumn temperatures promote sumi development — the same seasonal dynamics that Japanese breeders have leveraged for generations.

The Fish Collection ships all koi in insulated, oxygen-saturated containers with our live arrival guarantee and post-purchase support from our dedicated koi specialists.`,
    seoDescription:
      'Showa Koi (Showa Sanshoku) for sale — bold Japanese import with dramatic black, red, and white pattern. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 1000,
    maxSizeInches: 24,
    origin: 'Japan (Niigata Prefecture)',
    diet: 'Omnivore — koi pellets, vegetables, shrimp',
    temperament: 'Peaceful',
    lifespan: '25-35 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 75,
      phMin: 7.0,
      phMax: 8.6,
    },
    inStock: true,
    stockCount: 2,
    faqs: [
      {
        question: 'What is the difference between Showa and Sanke Koi?',
        answer:
          'The fundamental difference is the base colour. Showa has a black base with red and white overlaid, while Sanke has a white base with red and black accents. Showa sumi wraps around the body in large, bold bands and critically appears on the head — head sumi is a defining feature. Sanke sumi appears as small accents above the lateral line, and a quality Sanke should have a clean, sumi-free head. The visual impression differs dramatically: Showa is bold and powerful, Sanke is refined and elegant.',
      },
      {
        question: 'Do Showa Koi need head sumi?',
        answer:
          'Yes — head sumi is considered essential in a quality Showa and is one of the variety\'s defining features. The ideal Showa head displays a dramatic interplay of all three colours: black, red, and white. A Showa without head sumi appears unfinished to experienced judges. This is the opposite of Sanke, where head sumi is considered a fault. The presence or absence of head sumi is often the quickest way to distinguish between the two varieties.',
      },
      {
        question: 'What is motoguro in Showa Koi?',
        answer:
          'Motoguro refers to solid black colouration at the base of the pectoral fins, transitioning cleanly to white at the tips. It is a highly desirable feature in quality Showa and is one of the points judges evaluate in competition. Strong motoguro adds visual balance and is considered a sign of good breeding. Not all Showa display motoguro, and its presence significantly increases a specimen\'s value and show potential.',
      },
      {
        question: 'How much do quality Showa Koi cost?',
        answer:
          'Quality Japanese-bred Showa range from $300 to several thousand dollars, with competition-grade specimens from elite breeders commanding $10,000 to $100,000 or more at major auctions. Our current import is priced at $450, reflecting its bold pattern, stable sumi, and Niigata breeding lineage. Showa are among the most difficult varieties to breed to competition standard, which contributes to higher prices for truly excellent specimens.',
      },
    ],
    relatedSlugs: ['kohaku-koi', 'sanke-koi', 'butterfly-koi', 'platinum-ogon-koi', 'tancho-koi'],
    speciesGuideSlug: 'showa-koi',
    ratingAverage: 4.9,
    reviewCount: 4,
  },

  // ──────────────────────────────────────────────
  // 99. Butterfly Koi
  // ──────────────────────────────────────────────
  {
    commonName: 'Butterfly Koi',
    scientificName: 'Cyprinus rubrofuscus',
    slug: 'butterfly-koi',
    category: 'koi',
    sku: 'TF-KOI-BTFL-001',
    priceUSD: 250,
    images: [
      {
        url: '/images/products/butterfly-koi-hero.jpg',
        alt: 'Butterfly Koi (Cyprinus rubrofuscus) — long-fin specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Butterfly Koi — also known as Long-Fin Koi or Dragon Carp — is the variety that divides the koi world and enchants everyone else. With its dramatically elongated fins and tail that trail behind the body like silk ribbons in water, the Butterfly Koi moves through a pond with a grace and elegance that standard-fin koi simply cannot replicate. Each swimming motion produces flowing, hypnotic fin movement that transforms a pond from a static display into a living ballet. The Fish Collection sources our Butterfly Koi from breeders who prioritise both fin length and body quality — a combination that purists sometimes claim is impossible but that modern breeding programs have increasingly achieved.

The Butterfly Koi's origin story is one of the hobby's most interesting. In the 1980s, a group of Indonesian long-finned carp of uncertain lineage were imported to a Japanese koi farm. Rather than discarding them, the breeder crossed them with high-quality Nishikigoi, producing offspring with the long fins of the Indonesian fish and the colour patterns of Japanese koi. The result was controversial — Japanese koi purists considered (and some still consider) Butterfly Koi to be outside the true Nishikigoi tradition, and they are not eligible for competition at traditional Japanese koi shows. Yet their popularity among pond keepers worldwide has been extraordinary, and they now command a significant and growing segment of the ornamental fish market. Whether they are "real" koi is a debate for purists; whether they are beautiful is not a debate at all.

Our current Butterfly Koi displays the flowing, symmetrical finnage that defines the best examples of the variety. The fins should be long, evenly matched on both sides, and free of kinks, curls, or damage. The body should be well-proportioned — a common fault in lower-quality Butterfly Koi is a thin, elongated body that lacks the robust, torpedo-shaped form of a well-bred standard koi. Our specimens come from lines where body quality has been a breeding priority alongside fin length, producing fish that look impressive from every angle, not just in profile.

Pond requirements are identical to standard koi: minimum 1,000 gallons with robust filtration, water temperature between 65 and 75 degrees Fahrenheit, and pH of 7.0 to 8.6. One consideration specific to Butterfly Koi is that their long fins can be damaged by rough pond edges, sharp decorations, or aggressive tankmates. A well-designed pond with smooth surfaces and compatible pondmates preserves the finnage that makes these fish special. Predator protection is also important — herons and raccoons can cause irreparable fin damage even if the fish survives the encounter.

Diet follows standard koi nutrition: high-quality koi pellets as the staple, supplemented with vegetables, fruit, and occasional protein treats. Colour-enhancing foods benefit any colour variety of Butterfly Koi, and a varied diet supports the fin growth that is the variety's defining feature.

The Butterfly Koi is the ideal choice for pond keepers who prioritise visual drama and movement over adherence to traditional Japanese koi aesthetics. The Fish Collection ships all koi in insulated, oxygen-saturated containers with our live arrival guarantee.`,
    seoDescription:
      'Butterfly Koi (Long-Fin) for sale — flowing finnage and vibrant colour in a graceful pond fish. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 1000,
    maxSizeInches: 24,
    origin: 'Japan / Southeast Asia (captive-bred)',
    diet: 'Omnivore — koi pellets, vegetables, shrimp',
    temperament: 'Peaceful',
    lifespan: '25-35 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 75,
      phMin: 7.0,
      phMax: 8.6,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'Are Butterfly Koi real koi?',
        answer:
          'Butterfly Koi are Cyprinus rubrofuscus — the same species as standard Nishikigoi — crossed with a long-finned carp variety. They carry the same genetics, require the same care, and live just as long. They are not eligible for traditional Japanese koi shows, which is why purists sometimes dismiss them. However, they are undeniably koi by species classification, and their popularity among pond keepers worldwide continues to grow rapidly.',
      },
      {
        question: 'How long do Butterfly Koi fins get?',
        answer:
          'In well-bred Butterfly Koi, fins can grow to equal or exceed the body length, with the caudal (tail) fin and pectoral fins being the most dramatically elongated. Fin length increases throughout the fish\'s life, with the most impressive finnage developing in mature specimens over 18 inches. Growth depends on genetics, water quality, and diet. Fin damage from rough surfaces or aggressive pondmates can limit maximum length.',
      },
      {
        question: 'Can Butterfly Koi live with regular koi?',
        answer:
          'Yes, Butterfly Koi coexist peacefully with standard-fin koi and share identical pond requirements. The only consideration is that their long fins make them slightly slower and more vulnerable to fin-nipping if housed with particularly boisterous pondmates. In a well-stocked pond with adequate space, they integrate seamlessly with other koi varieties, goldfish, and other pond fish.',
      },
      {
        question: 'Do Butterfly Koi need special care for their fins?',
        answer:
          'The main considerations are avoiding rough pond surfaces that can tear fins, protecting against predators that can cause irreparable fin damage, and maintaining excellent water quality to prevent bacterial fin infections. Smooth pond edges, adequate depth, netting or other predator deterrents, and consistent water management are the keys to preserving the flowing finnage that makes Butterfly Koi special. Damaged fins can regenerate to some extent, but severe tears may not fully recover.',
      },
    ],
    relatedSlugs: ['kohaku-koi', 'sanke-koi', 'showa-koi', 'platinum-ogon-koi', 'tancho-koi'],
    speciesGuideSlug: 'butterfly-koi',
    ratingAverage: 4.8,
    reviewCount: 11,
  },

  // ──────────────────────────────────────────────
  // 100. Platinum Ogon Koi
  // ──────────────────────────────────────────────
  {
    commonName: 'Platinum Ogon Koi',
    scientificName: 'Cyprinus rubrofuscus',
    slug: 'platinum-ogon-koi',
    category: 'koi',
    sku: 'TF-KOI-PTOG-001',
    priceUSD: 300,
    images: [
      {
        url: '/images/products/platinum-ogon-koi-hero.jpg',
        alt: 'Platinum Ogon Koi (Cyprinus rubrofuscus) — premium metallic specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Platinum Ogon Koi is pure, liquid silver brought to life — a single-coloured metallic koi whose entire body gleams with an unbroken, mirror-like platinum sheen that transforms a pond into something approaching a gallery installation. There is no pattern to evaluate, no colour balance to debate. The Platinum Ogon succeeds or fails on one criterion alone: the uniformity, depth, and brilliance of its metallic lustre. A great Platinum Ogon is flawless — every scale reflecting light identically, the head smooth and luminous, the fins translucent with a metallic base that catches sunlight and scatters it across the water's surface. The Fish Collection sources our Platinum Ogon from Japanese breeders who have specialised in the Hikarimuji (single-colour metallic) class for decades, selecting only specimens with the skin quality that serious collectors recognise as exceptional.

The Ogon class was developed in the 1940s by breeder Sawata Aoki, who spent over two decades refining a single golden metallic koi that would eventually become the foundation of all modern Ogon varieties. The Platinum Ogon — a silver-white metallic variant — emerged later and quickly became one of the most popular koi varieties worldwide, prized for its dramatic visual impact and relative ease of appreciation. Unlike multi-coloured varieties where pattern evaluation requires trained judgment, the Platinum Ogon's beauty is immediately accessible to everyone. It is the variety most likely to make a non-koi-keeper stop and stare.

What separates a premium Platinum Ogon from an ordinary one is skin quality. The metallic sheen should be uniform from head to tail with no dull patches, no scale irregularities, and no discolouration. The head — often the most telling indicator of quality — should be smooth and luminous, without the roughness or mottling that plagues lesser specimens. Body shape should be the classic koi torpedo: broad, powerful, and symmetrical. At 18 to 24 inches, our current specimen is in its prime growth phase, and its metallic lustre will continue to intensify as the fish matures and its scales thicken.

Pond requirements are standard for koi: minimum 1,000 gallons, robust filtration capable of handling the significant waste these fish produce, water temperature between 65 and 75 degrees Fahrenheit, and pH of 7.0 to 8.6. The Platinum Ogon is among the hardiest koi varieties and is an excellent choice for keepers new to the hobby who want a visually spectacular fish without the complexity of evaluating multi-coloured patterns. Its bright metallic body also makes it one of the most visible koi in a pond — easy to spot, easy to monitor for health, and easy to enjoy from a distance.

A Platinum Ogon Koi in a well-designed pond is one of the simplest and most effective ways to create visual drama in an outdoor water feature. The Fish Collection ships all koi in insulated, oxygen-saturated containers with our unconditional live arrival guarantee.`,
    seoDescription:
      'Platinum Ogon Koi for sale — flawless metallic silver from Japanese Hikarimuji breeders. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 1000,
    maxSizeInches: 24,
    origin: 'Japan (captive-bred)',
    diet: 'Omnivore — koi pellets, vegetables, shrimp',
    temperament: 'Peaceful',
    lifespan: '25-35 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 75,
      phMin: 7.0,
      phMax: 8.6,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'What makes a good Platinum Ogon Koi?',
        answer:
          'A quality Platinum Ogon has a uniform, mirror-like metallic sheen across the entire body with no dull patches, scale irregularities, or discolouration. The head should be smooth and luminous — head quality is often the most telling indicator of an exceptional specimen. Body shape should be broad, powerful, and symmetrical. Skin lustre should intensify as the fish matures and scales thicken. Any unevenness in the metallic coating is a significant fault.',
      },
      {
        question: 'Are Platinum Ogon Koi good for beginners?',
        answer:
          'Platinum Ogon are among the best koi for pond-keeping beginners. They are hardy, visually spectacular, and their single-colour presentation means there is no complex pattern evaluation to learn. Their bright metallic body makes health monitoring easy — any blemish, wound, or colour change is immediately visible. They also tend to be confident feeders that adapt quickly to their environment, giving new keepers an easy, rewarding first experience with koi.',
      },
      {
        question: 'Do Platinum Ogon Koi lose their shine?',
        answer:
          'A well-bred Platinum Ogon should maintain its metallic lustre throughout its life, with the sheen actually intensifying as the fish matures and its scales thicken. Loss of shine can indicate poor water quality, nutritional deficiency, or genetic inferiority. Fish from cheaper sources often develop dull patches or yellowing as they grow — a sign of weak metallic genetics. Quality Japanese-bred specimens from established Ogon lines maintain their brilliance reliably.',
      },
      {
        question: 'How big do Platinum Ogon Koi get?',
        answer:
          'Platinum Ogon Koi can reach 24 to 36 inches in a well-maintained pond, making them among the more impressive single-colour koi in terms of sheer visual presence. A large Platinum Ogon in sunlight is a genuinely spectacular sight. Growth rate depends on pond size, filtration quality, feeding regimen, and genetics. Most reach near-adult size by age 5 to 7 years in a pond of 2,500 gallons or more.',
      },
    ],
    relatedSlugs: ['kohaku-koi', 'sanke-koi', 'showa-koi', 'butterfly-koi', 'tancho-koi'],
    speciesGuideSlug: 'platinum-ogon-koi',
    ratingAverage: 4.7,
    reviewCount: 8,
  },

  // ──────────────────────────────────────────────
  // 101. Tancho Koi
  // ──────────────────────────────────────────────
  {
    commonName: 'Tancho Koi',
    scientificName: 'Cyprinus rubrofuscus',
    slug: 'tancho-koi',
    category: 'koi',
    sku: 'TF-KOI-TNCH-001',
    priceUSD: 500,
    images: [
      {
        url: '/images/products/tancho-koi-hero.jpg',
        alt: 'Tancho Koi (Cyprinus rubrofuscus) — premium specimen with hi marking',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Tancho Koi is the most symbolically powerful variety in the Nishikigoi world — a snow-white fish bearing a single, perfectly circular red patch on the crown of its head, mirroring the Japanese national flag. Named after the Tancho crane (the red-crowned crane that is one of Japan's most revered natural symbols), this koi variety carries enormous cultural weight in its homeland and commands premium prices that reflect both its rarity and its significance. A true Tancho Kohaku — the most coveted expression — shows absolutely no red anywhere on the body; the hi is confined entirely to the head in a single, round, centred marking. The Fish Collection has sourced our current Tancho from a respected Niigata breeder whose line has produced award-winning specimens at regional and national shows.

The challenge of breeding Tancho Koi is that the pattern cannot be reliably produced. Unlike Kohaku, Sanke, or Showa — where selective breeding can improve colour depth, skin quality, and pattern balance over generations — the Tancho pattern is essentially a happy accident. Breeders can increase the probability by selecting parent fish with head-heavy hi patterns, but the vast majority of offspring will show red on the body as well as the head. A spawn of ten thousand fry might yield only a handful of true Tancho with the single, centred, circular head marking that defines the variety. This statistical rarity is a primary driver of the Tancho's premium pricing — you cannot mass-produce perfection when perfection depends on chance.

Evaluating a Tancho is an exercise in precision. The hi marking should be as close to a perfect circle as nature allows, centred on the head between the eyes, and not extending forward over the nose or backward past the gill plates. Size matters: too small and the marking lacks impact; too large and it overwhelms the head. The red should be deep, uniform crimson with crisp, well-defined edges. The white body must be the same flawless snow-white demanded in all Kohaku varieties — pure, luminous, and free of any secondary red markings, shimi, or discolouration. Our current specimen exhibits a well-centred, near-circular hi marking with excellent depth of colour on a clean white body — the combination that Tancho enthusiasts search for.

Pond requirements are standard for Nishikigoi: minimum 1,000 gallons, robust filtration, water temperature of 65 to 75 degrees Fahrenheit, and pH between 7.0 and 8.6. The Tancho is a peaceful, hardy fish that coexists well with other koi varieties. Its visual simplicity makes it a natural focal point in a mixed collection — the eye is drawn to the single red spot, making the Tancho the fish that visitors notice first and remember longest.

The cultural resonance of the Tancho Koi extends beyond aesthetics. In Japan, the fish is considered an embodiment of national identity — its white-and-red colour scheme literally reflects the Hinomaru flag. Serious Japanese collectors often view the Tancho as a centrepiece fish that represents the highest ideals of the hobby: simplicity, purity, and the pursuit of an aesthetic perfection that nature delivers only rarely and unpredictably.

The Fish Collection ships all koi in insulated, oxygen-saturated containers with our live arrival guarantee. Given the Tancho's rarity and cultural significance, we recommend contacting our koi specialists to discuss this specimen before purchase.`,
    seoDescription:
      'Tancho Koi for sale — iconic single red crown marking on pure white body, Japanese import. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 1000,
    maxSizeInches: 24,
    origin: 'Japan (Niigata Prefecture)',
    diet: 'Omnivore — koi pellets, vegetables, shrimp',
    temperament: 'Peaceful',
    lifespan: '25-35 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 75,
      phMin: 7.0,
      phMax: 8.6,
    },
    inStock: true,
    stockCount: 1,
    faqs: [
      {
        question: 'Why are Tancho Koi so expensive?',
        answer:
          'The Tancho pattern — a single, centred red circle on the head with no red elsewhere on the body — cannot be reliably bred. It occurs by chance in a small fraction of spawns from head-heavy Kohaku lines. A breeding run of ten thousand fry might produce only a handful of true Tancho. This statistical rarity, combined with the cultural significance of the pattern in Japan and high demand from collectors worldwide, drives premium pricing well above most other koi varieties.',
      },
      {
        question: 'What makes a perfect Tancho marking?',
        answer:
          'The ideal Tancho hi marking is a near-perfect circle, centred on the crown of the head between the eyes. It should not extend over the nose, past the gill plates, or off-centre. The red should be deep, uniform crimson with crisp, well-defined edges. Size should be proportional to the head — large enough to have visual impact but not so large that it overwhelms. Perfect symmetry is the standard, though nature rarely produces absolute geometric precision.',
      },
      {
        question: 'Can Tancho Koi lose their marking?',
        answer:
          'The red hi marking on a Tancho is generally stable once the fish is mature, but it can undergo subtle changes over the fish\'s lifetime. The edges may sharpen or soften slightly, and the depth of red can fluctuate with water temperature, diet, and seasonal cycles. Significant fading or spreading of the marking is unusual in well-bred specimens but can occur in fish with genetically unstable hi. Quality Japanese-bred Tancho from established lines tend to maintain their markings reliably.',
      },
      {
        question: 'Why is the Tancho Koi culturally significant in Japan?',
        answer:
          'The Tancho Koi\'s colour scheme — a single red circle on a white body — mirrors the Japanese national flag (Hinomaru). It is also named after the Tancho crane (red-crowned crane), one of Japan\'s most revered symbols of longevity and good fortune. Together, these associations make the Tancho one of the most culturally meaningful koi varieties, often displayed as a centrepiece in Japanese collections and given as prestigious gifts.',
      },
    ],
    relatedSlugs: ['kohaku-koi', 'sanke-koi', 'showa-koi', 'butterfly-koi', 'platinum-ogon-koi'],
    speciesGuideSlug: 'tancho-koi',
    ratingAverage: 5.0,
    reviewCount: 3,
  },

  // ──────────────────────────────────────────────
  // 102. Ranchu Goldfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Ranchu Goldfish',
    scientificName: 'Carassius auratus',
    slug: 'ranchu-goldfish',
    category: 'goldfish',
    sku: 'TF-GLD-RANC-001',
    priceUSD: 120,
    images: [
      {
        url: '/images/products/ranchu-goldfish-hero.jpg',
        alt: 'Ranchu Goldfish (Carassius auratus) — show-grade specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Ranchu Goldfish is the undisputed king of the fancy goldfish world — a variety so revered in Japan that it has earned the title "King of Goldfish" and dominates the country's most prestigious goldfish competitions year after year. What makes the Ranchu immediately recognisable is the complete absence of a dorsal fin, a dramatically arched back profile, and a prominent head growth (wen) that develops as the fish matures, giving it a regal, almost leonine appearance. The body is compact, egg-shaped, and powerful — a form that Japanese breeders have refined over centuries to achieve the specific proportions, curves, and balance that define show-grade excellence. The Fish Collection sources our Ranchu from specialist breeders who maintain competition-quality bloodlines, selecting specimens with the back curvature, wen development, and body proportions that serious collectors demand.

Evaluating a Ranchu is a discipline unto itself, with judging criteria that have been codified over generations of Japanese breeding culture. The back profile — viewed from above — should form a smooth, continuous arc from the head to the tail peduncle, without humps, dips, or asymmetry. The wen should be developing evenly across the head and cheeks without obstructing the eyes or gills. Tail set is critical: the caudal fin should be held at a specific angle relative to the body, splayed symmetrically, and free of kinks or folds. Colour should be deep and uniform, whether the fish is red, red-and-white, calico, or another recognised variety. Our show-grade specimen displays the balanced proportions and developing wen that indicate strong genetic potential for continued improvement.

Housing a Ranchu Goldfish requires more consideration than the casual hobbyist might expect. A minimum 30-gallon aquarium is necessary for a single adult, with an additional 15 gallons per extra fancy goldfish. Ranchu are not strong swimmers — their compact body and absent dorsal fin make them less agile than slim-bodied goldfish varieties. Water flow should be gentle to prevent the fish from being buffeted, and tank decorations should be smooth with no sharp edges that could damage the delicate wen tissue. Bare-bottom or fine sand substrate is preferred, as gravel can trap waste and food in a tank with bottom-dwelling fish that spend considerable time foraging along the substrate.

Water temperature should be maintained between 65 and 72 degrees Fahrenheit — cooler than tropical fish but warmer than the outdoor pond temperatures tolerated by hardy single-tail goldfish. Ranchu are sensitive to rapid temperature swings and benefit from a stable, controlled indoor environment. pH should be between 7.0 and 8.4, with regular water changes of twenty-five to thirty percent weekly to maintain the pristine conditions that keep wen tissue healthy and coloration vibrant.

Diet is a critical factor in Ranchu health. High-quality sinking pellets formulated for fancy goldfish should form the staple — sinking foods are preferred because Ranchu that gulp air at the surface are prone to buoyancy disorders, a common issue in deep-bodied fancy goldfish. Supplement with blanched vegetables, frozen bloodworms, daphnia, and brine shrimp. Feed small amounts multiple times daily rather than one large feeding. Gel foods specifically designed for fancy goldfish are an excellent option that minimises air ingestion.

The Fish Collection ships all goldfish in insulated, oxygen-saturated containers with heat or cold packs as seasonally appropriate. Our live arrival guarantee covers every shipment.`,
    seoDescription:
      'Show-Grade Ranchu Goldfish for sale — the King of Goldfish with developing wen and competition-quality back profile. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 30,
    maxSizeInches: 8,
    origin: 'Japan / China (captive-bred)',
    diet: 'Omnivore — sinking pellets, vegetables, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 72,
      phMin: 7.0,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'Why are Ranchu Goldfish so expensive?',
        answer:
          'Show-grade Ranchu command premium prices because of the difficulty of producing specimens that meet rigorous judging standards. From a typical spawn of thousands, only a tiny fraction will develop the correct back profile, wen growth, tail set, and body proportions that define competition quality. Each generation is hand-culled multiple times by experienced breeders who select the best candidates. This labour-intensive process, combined with decades of breeding expertise, justifies prices well above common goldfish.',
      },
      {
        question: 'Do Ranchu Goldfish need a heater?',
        answer:
          'Ranchu do best in a stable temperature range of 65 to 72 degrees Fahrenheit. In most homes, a heater set to the lower end of this range prevents dangerous temperature swings, especially overnight or during seasonal changes. They do not need tropical temperatures and should not be kept above 75 degrees for extended periods. Temperature stability is more important than any specific number — rapid fluctuations are far more harmful than a slightly cool or warm steady state.',
      },
      {
        question: 'Can Ranchu Goldfish live in a pond?',
        answer:
          'Ranchu can live in outdoor ponds in mild climates, but they are not as cold-hardy or agile as single-tail goldfish varieties. They struggle to compete for food with faster-swimming fish and are more vulnerable to predators due to their limited mobility. If keeping Ranchu outdoors, the pond should be dedicated to fancy varieties only, with adequate depth, gentle filtration, and predator protection. In cold-winter climates, they should be brought indoors.',
      },
      {
        question: 'What is wen growth in Ranchu?',
        answer:
          'The wen is the fleshy head growth that develops on Ranchu and some other fancy goldfish varieties. It typically begins developing around 6 to 12 months of age and continues growing for several years. The wen should develop evenly across the crown and cheeks without obstructing the eyes or gill openings. Wen growth is influenced by genetics, diet, water quality, and temperature. Excessive wen growth occasionally requires trimming by an experienced keeper to maintain the fish\'s vision and breathing.',
      },
    ],
    relatedSlugs: ['oranda-goldfish', 'thai-oranda-goldfish', 'lionhead-goldfish', 'ryukin-goldfish'],
    speciesGuideSlug: 'ranchu-goldfish',
    ratingAverage: 4.9,
    reviewCount: 9,
  },

  // ──────────────────────────────────────────────
  // 103. Oranda Goldfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Oranda Goldfish',
    scientificName: 'Carassius auratus',
    slug: 'oranda-goldfish',
    category: 'goldfish',
    sku: 'TF-GLD-ORAN-001',
    priceUSD: 80,
    images: [
      {
        url: '/images/products/oranda-goldfish-hero.jpg',
        alt: 'Oranda Goldfish (Carassius auratus) — red cap specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Red Cap Oranda Goldfish is one of the most visually striking and immediately recognisable varieties of fancy goldfish — a snow-white fish crowned with a vibrant, raspberry-red wen that sits atop the head like a living cap. The contrast between the pure white body and the deep red head growth is so dramatic that the Red Cap Oranda has become an icon of ornamental fishkeeping, featured in art, advertising, and aquarium displays worldwide. Unlike other Oranda colour varieties where the wen matches the body colour, the Red Cap's appeal lies entirely in the separation of colour — a white canvas with a single, brilliant red accent. The Fish Collection sources our Red Cap Orandas from breeders who have stabilised this colour pattern over multiple generations, ensuring the white body remains clean and the red cap develops with depth and uniformity.

The Oranda is distinguished from other fancy goldfish by its prominent wen — the fleshy growth that covers the head and sometimes extends to the gill plates and cheeks. In the Red Cap variety, the wen is the sole carrier of red pigmentation, creating the signature look. Wen development begins at around six months of age and continues for several years, with the growth becoming more pronounced and textured as the fish matures. A well-developed Red Cap wen should be vibrant crimson, evenly textured, and substantial enough to give the fish its characteristic regal appearance without obstructing vision or gill function.

What separates the Oranda from its close relative the Ranchu is the presence of a dorsal fin. This gives the Oranda better swimming ability and a more upright, graceful swimming posture than the dorsal-less Ranchu. The body should be deep, egg-shaped, and well-proportioned, with flowing fins that complement the wen without being so long that they impede movement. Our current Red Cap Oranda displays the balanced body proportions, clean white coloration, and developing red wen that mark a quality specimen with strong potential for continued improvement.

Housing requirements match those of other fancy goldfish. A minimum 30-gallon aquarium for a single adult, with gentle filtration, stable temperature between 65 and 72 degrees Fahrenheit, and pH of 7.0 to 8.4. The wen tissue is susceptible to bacterial infection if water quality deteriorates, making consistent maintenance particularly important for Orandas. Weekly water changes of twenty-five to thirty percent are the baseline; more frequent changes may be needed in smaller tanks or with multiple fish.

Diet should centre on high-quality sinking or slow-sinking pellets formulated for fancy goldfish, supplemented with blanched vegetables (peas, spinach, zucchini), frozen bloodworms, daphnia, and brine shrimp. Colour-enhancing foods containing astaxanthin and spirulina can intensify the red cap over time. Feed small amounts multiple times daily, and consider gel foods to minimise the air ingestion that contributes to buoyancy problems in deep-bodied goldfish.

The Fish Collection ships all goldfish in insulated, temperature-regulated containers with our unconditional live arrival guarantee.`,
    seoDescription:
      'Red Cap Oranda Goldfish for sale — snow-white body with vibrant crimson wen. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 30,
    maxSizeInches: 10,
    origin: 'China (captive-bred)',
    diet: 'Omnivore — sinking pellets, vegetables, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 72,
      phMin: 7.0,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'Will the red cap stay red and the body stay white?',
        answer:
          'In well-bred Red Cap Orandas from stabilised lines, the colour separation is reliable — the white body remains clean and the red wen maintains its depth. However, some specimens from less carefully bred lines may develop scattered red scales on the body or experience fading of the cap colour over time. Our specimens come from breeders who have specifically selected for clean colour separation over multiple generations, minimising the risk of colour bleed.',
      },
      {
        question: 'How big do Oranda Goldfish get?',
        answer:
          'Oranda Goldfish typically reach 8 to 10 inches in a well-maintained aquarium, with exceptional specimens in large tanks or ponds occasionally exceeding 12 inches. Growth rate depends on tank size, water quality, feeding regimen, and genetics. Orandas continue growing throughout their lives, though the rate slows significantly after the first 2 to 3 years. The wen also continues developing, reaching peak size around age 3 to 5.',
      },
      {
        question: 'Can Oranda Goldfish live with other fish?',
        answer:
          'Orandas coexist well with other fancy goldfish varieties of similar size and swimming ability — Ranchu, Lionheads, Ryukin, and other Orandas make excellent companions. Avoid housing them with single-tail goldfish (Comets, Shubunkin) or tropical fish. Single-tail goldfish are faster and will outcompete Orandas for food, while tropical fish require warmer temperatures than fancy goldfish prefer. The general rule is: fancy goldfish with fancy goldfish only.',
      },
      {
        question: 'How do I care for the wen on my Oranda?',
        answer:
          'Wen health depends primarily on water quality. The fleshy wen tissue is more susceptible to bacterial and fungal infection than normal skin, so pristine water conditions are essential. Maintain low nitrate levels through regular water changes, avoid sharp decorations that could injure the wen, and monitor for any white patches, redness, or swelling that could indicate infection. In rare cases of excessive wen growth obstructing vision, trimming by an experienced fishkeeper may be necessary.',
      },
    ],
    relatedSlugs: ['ranchu-goldfish', 'thai-oranda-goldfish', 'lionhead-goldfish', 'ryukin-goldfish'],
    speciesGuideSlug: 'oranda-goldfish',
    ratingAverage: 4.8,
    reviewCount: 13,
  },

  // ──────────────────────────────────────────────
  // 104. Thai Oranda Goldfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Thai Oranda Goldfish',
    scientificName: 'Carassius auratus',
    slug: 'thai-oranda-goldfish',
    category: 'goldfish',
    sku: 'TF-GLD-THOR-001',
    priceUSD: 150,
    images: [
      {
        url: '/images/products/thai-oranda-goldfish-hero.jpg',
        alt: 'Thai Oranda Goldfish (Carassius auratus) — premium Thai-bred specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Thai Oranda Goldfish represents the pinnacle of modern fancy goldfish breeding — a variety that has been refined by Thailand's dedicated goldfish artisans into something that makes traditional Chinese and Japanese Orandas look almost plain by comparison. Thai Orandas are characterised by their extraordinarily developed wen growth, intense colour saturation, compact powerful bodies, and an overall presence that dominates any tank they inhabit. The wen on a quality Thai Oranda is massive — a deeply textured, bubbly growth that can cover the entire head, cheeks, and gill plates, giving the fish an almost mythical appearance reminiscent of a tiny, swimming lion. The Fish Collection imports our Thai Orandas directly from the most respected breeding farms in Thailand, selecting only specimens that represent the extreme end of wen development and colour quality.

Thailand's ascendancy in the global fancy goldfish market is a relatively recent phenomenon, driven by a cadre of breeders who approached goldfish improvement with the same intensity and scientific rigour that Thai betta breeders brought to Betta splendens decades earlier. The results have been transformative. Thai Orandas now routinely outclass Chinese and Japanese specimens in international competition, with their exaggerated wen, deeper colours, and more compact body proportions setting a new standard that breeders worldwide are striving to match. The secret lies in Thailand's breeding infrastructure: warm, stable climate allows year-round spawning, and breeders maintain vast numbers of fish, enabling extremely aggressive selection from each generation.

Our current Thai Oranda displays the hallmarks of premium Thai breeding: a compact, powerful body with deep girth, an already-impressive wen showing the bubbly, mushroom-like texture that will continue developing for years, and rich, saturated colour that indicates strong genetic pigmentation. The fins are proportional and healthy, and the fish swims with the confident, upright posture that indicates good body balance and swim bladder health.

Housing a Thai Oranda requires the same fundamentals as other fancy goldfish but with particular attention to water quality. The massive wen tissue is more vulnerable to bacterial infection than that of less extreme Oranda varieties — pristine water is not optional, it is survival infrastructure. A minimum 30-gallon aquarium with efficient filtration, stable temperature of 65 to 72 degrees Fahrenheit, and weekly water changes of thirty percent or more. Avoid rough decorations, sharp substrate, and anything that could injure the wen. Bare-bottom tanks or fine sand are strongly preferred.

Diet should be high-quality sinking pellets supplemented with frozen foods, blanched vegetables, and colour-enhancing formulations. Thai Orandas are robust eaters that grow rapidly when well-fed, but overfeeding must be avoided to prevent digestive and buoyancy issues. Feed small portions three to four times daily rather than one or two large meals.

The Thai Oranda is for the goldfish keeper who wants the most extreme, visually impressive fancy goldfish available today. The Fish Collection ships all goldfish in insulated, temperature-regulated containers with our live arrival guarantee.`,
    seoDescription:
      'Thai Oranda Goldfish for sale — extreme wen development and intense colour from Thailand\'s elite breeders. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 30,
    maxSizeInches: 10,
    origin: 'Thailand (captive-bred)',
    diet: 'Omnivore — sinking pellets, vegetables, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 72,
      phMin: 7.0,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'What makes Thai Orandas different from regular Orandas?',
        answer:
          'Thai Orandas have been selectively bred to extremes that exceed traditional Chinese and Japanese lines. They feature significantly larger and more textured wen growth, deeper and more saturated colours, more compact body proportions, and overall greater visual impact. Thailand\'s year-round warm climate allows continuous spawning and aggressive selection from enormous numbers of fry, enabling faster genetic improvement. Thai Orandas now set the standard in international competition.',
      },
      {
        question: 'Is the massive wen on Thai Orandas healthy?',
        answer:
          'The extreme wen development in Thai Orandas is a product of selective breeding and does not inherently indicate health problems, provided water quality is maintained at high standards. However, the extensive wen tissue is more susceptible to bacterial infection than less-developed wen, making pristine water conditions critical. In some cases, wen overgrowth can partially obstruct vision, requiring trimming by an experienced keeper. Regular monitoring and excellent husbandry prevent most wen-related issues.',
      },
      {
        question: 'How much do Thai Orandas cost?',
        answer:
          'Quality Thai Orandas range from $80 to $500 or more depending on wen development, colour intensity, body proportions, and breeder reputation. Our current specimen is priced at $150, reflecting premium Thai breeding with strong wen development and rich colour saturation. Elite show-quality specimens from the most renowned Thai farms can command $1,000 or more. The primary value drivers are wen size and texture, colour depth, and body compactness.',
      },
      {
        question: 'Can Thai Orandas live with other goldfish?',
        answer:
          'Yes, Thai Orandas coexist well with other fancy goldfish of similar size and swimming ability. Ideal tankmates include Ranchu, Lionheads, standard Orandas, and Ryukin. Avoid single-tail goldfish that will outcompete them for food, and avoid any tankmates that might nip at the prominent wen tissue. A dedicated fancy goldfish tank with multiple Thai Orandas makes a spectacular display — their exaggerated features become even more impressive when several are viewed together.',
      },
    ],
    relatedSlugs: ['ranchu-goldfish', 'oranda-goldfish', 'lionhead-goldfish', 'ryukin-goldfish'],
    speciesGuideSlug: 'thai-oranda-goldfish',
    ratingAverage: 5.0,
    reviewCount: 6,
  },

  // ──────────────────────────────────────────────
  // 105. Lionhead Goldfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Lionhead Goldfish',
    scientificName: 'Carassius auratus',
    slug: 'lionhead-goldfish',
    category: 'goldfish',
    sku: 'TF-GLD-LION-001',
    priceUSD: 95,
    images: [
      {
        url: '/images/products/lionhead-goldfish-hero.jpg',
        alt: 'Lionhead Goldfish (Carassius auratus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Lionhead Goldfish is the ancient ancestor of the modern Ranchu — a dorsal-less fancy goldfish variety that originated in China centuries ago and remains one of the most revered forms of Carassius auratus in its homeland. The Lionhead's defining feature is its expansive wen growth, which in quality specimens covers the entire head, cheeks, and gill plates in a dense, textured mass that gives the fish its leonine common name. Compared to the Japanese Ranchu, the Lionhead typically shows a more extreme wen, a less arched back profile, and a straighter tail set — differences that reflect centuries of divergent breeding philosophy between Chinese and Japanese goldfish culture. The Fish Collection sources our Lionheads from specialist breeders who maintain traditional Chinese bloodlines known for exceptional wen development and robust health.

The historical significance of the Lionhead cannot be overstated. It is among the oldest documented fancy goldfish varieties, with references in Chinese aquaculture texts dating back several hundred years. The variety was the foundation stock from which Japanese breeders developed the Ranchu in the late 1800s, refining the back profile and tail set to meet Japanese aesthetic preferences while the Chinese continued to develop their Lionhead along different lines — prioritising wen size and head coverage above all else. Understanding this shared heritage illuminates why the two varieties are so similar in structure yet distinct in emphasis. The Lionhead is the original, the Ranchu its Japanese interpretation.

Our current Lionhead displays the characteristic features of a quality Chinese-line specimen: a compact, egg-shaped body without dorsal fin, a substantial developing wen that promises continued growth, and a well-held double tail. The colour is rich and uniform, and the fish swims with the steady, deliberate pace characteristic of dorsal-less fancy goldfish. This is not a fast-swimming fish — the Lionhead moves through the water with a dignified, unhurried cadence that many keepers find more appealing than the frenetic activity of slim-bodied varieties.

Housing requirements are typical of fancy goldfish. A minimum 30-gallon aquarium with gentle filtration and stable temperature between 65 and 72 degrees Fahrenheit. The absence of a dorsal fin makes the Lionhead a poor swimmer in strong currents, so flow must be gentle and diffused. Smooth decorations, fine sand or bare-bottom substrate, and careful wen maintenance through pristine water quality are all essential. The extensive wen tissue is vulnerable to bacterial infection if water parameters deteriorate — consistent maintenance is the price of keeping these magnificent fish in peak condition.

Diet should focus on sinking foods to minimise air ingestion: quality goldfish pellets, gel foods, blanched vegetables, and frozen treats like bloodworms and daphnia. Feed small amounts multiple times daily. The Lionhead's somewhat limited vision — wen growth can partially obscure the eyes in extreme specimens — means food should be placed where the fish can easily find it. Many experienced Lionhead keepers hand-feed their fish, which builds an interactive bond between keeper and animal.

The Fish Collection ships all goldfish in insulated, temperature-regulated containers with our live arrival guarantee.`,
    seoDescription:
      'Lionhead Goldfish for sale — Chinese-bred with expansive wen growth and traditional bloodlines. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 30,
    maxSizeInches: 8,
    origin: 'China (captive-bred)',
    diet: 'Omnivore — sinking pellets, vegetables, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 72,
      phMin: 7.0,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'What is the difference between a Lionhead and a Ranchu?',
        answer:
          'Both are dorsal-less fancy goldfish with prominent wen growth, but they differ in several key areas. The Lionhead (Chinese origin) typically has a more extensive wen covering, a straighter back profile, and a more horizontally held tail. The Ranchu (Japanese refinement of the Lionhead) has a more dramatically arched back, a downward-angled tail set, and a wen that is usually less extreme but more evenly developed. The differences reflect centuries of divergent breeding preferences between Chinese and Japanese goldfish culture.',
      },
      {
        question: 'How big do Lionhead Goldfish get?',
        answer:
          'Lionhead Goldfish typically reach 5 to 8 inches in a well-maintained aquarium, with exceptional specimens occasionally reaching 10 inches in large tanks. Growth rate depends on water volume, feeding regimen, and genetics. The wen continues developing for several years, reaching maximum size around age 3 to 5. A mature Lionhead with full wen development is significantly more impressive than a juvenile, which is why patient keepers are rewarded.',
      },
      {
        question: 'Are Lionhead Goldfish hard to keep?',
        answer:
          'Lionheads are intermediate-level fish. They require cooler water (65-72°F), pristine water quality for wen health, gentle filtration, sinking foods to prevent buoyancy issues, and regular maintenance. They are not suitable for outdoor ponds in cold climates without winter protection. The main challenges are maintaining water quality sufficient for the sensitive wen tissue and managing the buoyancy issues common to deep-bodied fancy goldfish. With consistent care, they are rewarding and long-lived pets.',
      },
      {
        question: 'Do Lionhead Goldfish have vision problems?',
        answer:
          'In specimens with extreme wen growth, the tissue can partially obstruct the eyes, reducing vision. This is more common in Chinese Lionhead lines that prioritise maximum wen coverage. Affected fish can still find food and navigate their environment using other senses, but they may be slower to respond to visual cues. Severe obstruction can be addressed by careful wen trimming, a procedure best performed by an experienced keeper or veterinarian specialising in fish.',
      },
    ],
    relatedSlugs: ['ranchu-goldfish', 'oranda-goldfish', 'thai-oranda-goldfish', 'ryukin-goldfish'],
    speciesGuideSlug: 'lionhead-goldfish',
    ratingAverage: 4.7,
    reviewCount: 7,
  },

  // ──────────────────────────────────────────────
  // 106. Ryukin Goldfish
  // ──────────────────────────────────────────────
  {
    commonName: 'Ryukin Goldfish',
    scientificName: 'Carassius auratus',
    slug: 'ryukin-goldfish',
    category: 'goldfish',
    sku: 'TF-GLD-RYUK-001',
    priceUSD: 60,
    images: [
      {
        url: '/images/products/ryukin-goldfish-hero.jpg',
        alt: 'Ryukin Goldfish (Carassius auratus) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Ryukin Goldfish is the powerhouse of the fancy goldfish world — a variety defined by its dramatic dorsal hump, deep body, and vigorous swimming style that sets it apart from the more sedate Ranchu and Lionhead varieties. The Ryukin's signature feature is the pronounced hump that rises immediately behind the head, creating a body profile that is deeper than it is long and gives the fish a compact, almost spherical silhouette when viewed from the front. Combined with flowing, voluminous finnage and vibrant colour — typically in red, red-and-white, calico, or chocolate variations — the Ryukin delivers a visual impact that is immediate and undeniable. The Fish Collection sources our Ryukin from breeders who prioritise the deep body, pronounced hump, and balanced finnage that define competition-quality specimens.

The Ryukin takes its name from the Ryukyu Islands (modern Okinawa), through which Chinese fancy goldfish were introduced to mainland Japan centuries ago. Over time, Japanese breeders developed the variety's characteristic hump and body depth to extremes that distinguish it clearly from its Chinese ancestors. The modern Ryukin is a Japanese creation that has been further refined by breeders worldwide, with the best specimens showing a hump that begins immediately behind the gill plates and creates a steep, almost vertical rise before curving over the back.

What makes the Ryukin an excellent entry point into fancy goldfish keeping is its relative hardiness compared to the more delicate wen-bearing varieties. Without the vulnerable wen tissue that Orandas, Ranchu, and Lionheads must maintain, the Ryukin is less susceptible to the bacterial head infections that plague those varieties in suboptimal water conditions. This does not mean water quality is unimportant — no fancy goldfish thrives in poor conditions — but it does mean the Ryukin offers a slightly wider margin of error for developing keepers while still providing the visual spectacle that makes fancy goldfish keeping so rewarding.

Housing a Ryukin requires a minimum 30-gallon aquarium for a single adult. Despite being a more capable swimmer than dorsal-less varieties, the Ryukin's deep body still makes it far less agile than slim-bodied goldfish, and it should not be housed with Comets, Shubunkin, or other single-tail varieties that will outcompete it for food. Water temperature should be stable between 65 and 72 degrees Fahrenheit with pH of 7.0 to 8.4. Filtration should be robust but with moderate flow — the Ryukin can handle slightly more current than a Ranchu but still benefits from a gentler environment than a standard tropical setup.

Diet follows standard fancy goldfish nutrition: quality pellets as the staple, supplemented with vegetables, frozen foods, and occasional treats. The Ryukin is a confident, enthusiastic feeder — a trait that makes feeding time interactive and enjoyable but also means overfeeding must be actively managed to prevent obesity and buoyancy disorders.

The Fish Collection ships all goldfish in insulated containers with temperature regulation and our unconditional live arrival guarantee.`,
    seoDescription:
      'Ryukin Goldfish for sale — dramatic dorsal hump and flowing fins in a hardy fancy goldfish. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 30,
    maxSizeInches: 8,
    origin: 'Japan (captive-bred)',
    diet: 'Omnivore — pellets, vegetables, bloodworms',
    temperament: 'Peaceful',
    lifespan: '10-15 years',
    waterParameters: {
      tempMin: 65,
      tempMax: 72,
      phMin: 7.0,
      phMax: 8.4,
    },
    inStock: true,
    stockCount: 8,
    faqs: [
      {
        question: 'Are Ryukin Goldfish good for beginners?',
        answer:
          'Ryukin are among the best fancy goldfish for beginners. They are hardier than wen-bearing varieties like Orandas and Ranchu, more active and engaging swimmers, and confident feeders that adapt quickly to their environment. Their lack of delicate wen tissue means they are less vulnerable to bacterial head infections in imperfect water conditions. While they still require proper goldfish care — cool water, good filtration, regular changes — they offer a wider margin of error than more specialised varieties.',
      },
      {
        question: 'What is the hump on a Ryukin?',
        answer:
          'The dorsal hump is the Ryukin\'s defining feature — a pronounced rise that begins immediately behind the head and creates a steep, almost vertical profile before curving over the back. The hump is a result of centuries of selective breeding by Japanese breeders and is one of the primary judging criteria in competition. A quality Ryukin should have a hump that is tall, smooth, and symmetrical, creating a body that appears deeper than it is long.',
      },
      {
        question: 'Can Ryukin live with Ranchu?',
        answer:
          'Yes, Ryukin and Ranchu can coexist, though there are considerations. Ryukin are stronger swimmers and may outcompete the slower, dorsal-less Ranchu for food, especially at feeding time. In a shared tank, ensure food reaches all fish by distributing it across multiple locations. A spacious tank with plenty of room reduces competition. Monitor that the Ranchu are eating adequately — if they consistently lose out to the Ryukin, separate feeding areas or feeding times may be necessary.',
      },
      {
        question: 'How big do Ryukin Goldfish get?',
        answer:
          'Ryukin Goldfish typically reach 6 to 8 inches in body length in a well-maintained aquarium, with their deep body and flowing fins making them appear even larger. Exceptional specimens in very large tanks can reach 10 inches. The dorsal hump and body depth continue developing as the fish matures, with the most impressive proportions achieved at age 2 to 4 years. Growth rate depends on tank size, water quality, and feeding regimen.',
      },
    ],
    relatedSlugs: ['ranchu-goldfish', 'oranda-goldfish', 'thai-oranda-goldfish', 'lionhead-goldfish'],
    speciesGuideSlug: 'ryukin-goldfish',
    ratingAverage: 4.8,
    reviewCount: 16,
  },

  // ──────────────────────────────────────────────
  // 107. Galaxy Koi Plakat Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Galaxy Koi Plakat Betta',
    scientificName: 'Betta splendens',
    slug: 'galaxy-koi-plakat-betta',
    category: 'betta',
    sku: 'TF-BET-GKOI-001',
    priceUSD: 45,
    images: [
      {
        url: '/images/products/galaxy-koi-plakat-betta-hero.jpg',
        alt: 'Galaxy Koi Plakat Betta (Betta splendens) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Galaxy Koi Plakat Betta brings the explosive colour palette of the Galaxy Koi phenotype into the short-finned plakat form — and the result is a fish that many experienced betta keepers consider more visually dynamic and physically impressive than its long-finned counterpart. The plakat (from the Thai word "plakad," meaning fighting fish) is the body type closest to wild Betta splendens: compact, muscular, and equipped with short, powerful fins that allow rapid, agile movement. When that athletic frame carries the Galaxy Koi's mottled red, white, and black pattern overlaid with a shimmering iridescent blue-black galaxy scatter, the effect is of a tiny, armoured jewel that flashes colour with every turn. The Fish Collection sources our Galaxy Koi Plakats from Thai breeding houses that specialise in combining premium Galaxy Koi colouration with the robust plakat body type.

The plakat form deserves more recognition than it typically receives in the Western betta hobby, where long, flowing fins have historically dominated popular taste. In Thailand — where betta culture originated — the plakat is the traditional and most respected form. Short-finned bettas are faster, more active, less prone to fin damage and fin rot, and display their colours with a crispness that can be lost in the diaphanous folds of a halfmoon or rosetail. A Galaxy Koi Plakat swimming through a planted nano tank is a study in controlled power — each movement is decisive, and the short fins allow the full complexity of the galaxy iridescence and koi marbling to be seen without the distortion of excessive fin tissue.

Like all Galaxy Koi bettas, the plakat variant carries the marble gene, meaning colour patterns will shift over the fish's lifetime. The koi mottling of red, white, and black will rearrange itself unpredictably, and the galaxy overlay may expand or contract. For plakat keepers, this marbling tendency is particularly rewarding because the shorter fins allow pattern changes to be observed more clearly — every new colour arrangement is on full display rather than hidden in trailing fin folds.

Housing a Galaxy Koi Plakat Betta follows standard betta requirements with one important distinction: plakats are significantly better jumpers than long-finned varieties, and a tight-fitting lid is absolutely essential. A minimum 5-gallon heated, filtered aquarium with gentle flow, stable temperature between 76 and 82 degrees Fahrenheit, and pH of 6.5 to 7.5 provides the ideal environment. Live plants, dark substrate, and a background that contrasts with the fish's colours enhance the visual presentation. The galaxy iridescence shows best under full-spectrum LED lighting with a slight blue bias.

Diet matches all betta varieties: high-quality betta pellets as the staple, supplemented with frozen bloodworms, daphnia, and brine shrimp. Plakats tend to be more enthusiastic and aggressive feeders than their long-finned counterparts, so monitor portion sizes to prevent overfeeding. The Fish Collection ships all bettas individually in insulated containers with heat packs and our live arrival guarantee.`,
    seoDescription:
      'Galaxy Koi Plakat Betta for sale — short-finned with explosive koi marbling and galaxy iridescence. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 5,
    maxSizeInches: 3,
    origin: 'Thailand (captive-bred)',
    diet: 'Carnivore — betta pellets, bloodworms, daphnia',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 6,
    faqs: [
      {
        question: 'What is a plakat betta?',
        answer:
          'A plakat (from Thai "plakad") is a short-finned betta — the body type closest to wild Betta splendens. Plakats have compact, muscular bodies with short, powerful fins that allow faster swimming and greater agility than long-finned varieties like halfmoons or crowntails. In Thailand, the plakat is the traditional and most respected betta form. Short fins also mean less susceptibility to fin damage, fin rot, and swimming difficulties.',
      },
      {
        question: 'Are plakat bettas more aggressive?',
        answer:
          'Plakat bettas can be more assertive and active than long-finned varieties, partly because their short fins allow greater mobility and partly because the plakat form is closer to the fighting fish genetics that bettas were originally bred for. Male-to-male aggression is the same across all betta types — no two males should ever be housed together. Plakats are also stronger jumpers, making a secure lid essential.',
      },
      {
        question: 'Do Galaxy Koi Plakat Bettas change colour?',
        answer:
          'Yes, all Galaxy Koi bettas carry the marble gene that causes ongoing colour changes throughout the fish\'s life. The red, white, and black koi pattern will rearrange unpredictably, and the galaxy iridescent overlay may shift. In plakat bettas, these changes are particularly visible because the short fins allow the full body pattern to be observed clearly. Colour evolution is normal and expected — many keepers enjoy watching their fish transform over time.',
      },
      {
        question: 'How is the Galaxy Koi Plakat different from the Galaxy Koi Halfmoon?',
        answer:
          'The colour genetics are the same — both carry the Galaxy Koi phenotype with koi marbling and galaxy iridescence. The difference is fin type: the plakat has short, compact fins while the halfmoon has long fins that spread to 180 degrees when flared. Plakats are more active swimmers, less prone to fin issues, and display their colours more crisply. Halfmoons offer more dramatic fin displays. Both are excellent — the choice is personal preference.',
      },
    ],
    relatedSlugs: ['samurai-betta', 'alien-betta', 'giant-betta', 'crowntail-betta', 'dumbo-ear-betta'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.8,
    reviewCount: 18,
  },

  // ──────────────────────────────────────────────
  // 108. Samurai Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Samurai Betta',
    scientificName: 'Betta splendens',
    slug: 'samurai-betta',
    category: 'betta',
    sku: 'TF-BET-SAMR-001',
    priceUSD: 55,
    images: [
      {
        url: '/images/products/samurai-betta-hero.jpg',
        alt: 'Samurai Betta (Betta splendens) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Samurai Betta is one of the most dramatic and sought-after phenotypes to emerge from Thailand's competitive breeding scene in recent years — a fish that combines the metallic dragon-scale gene with bold, contrasting colour patterns that evoke the lacquered armour of feudal Japanese warriors. The defining characteristic is the thick, opaque scaling across the body that creates a layered, armour-plated appearance, typically in metallic copper, silver, or gold overlaid on a base of deep blue, red, or black. The scales appear almost individually defined, each one catching light independently and creating a tessellated effect that is unlike anything seen in solid-coloured or iridescent bettas. The Fish Collection sources our Samurai Bettas from elite Thai breeders who have refined this phenotype to exhibition quality, selecting for maximum scale definition, colour contrast, and the aggressive finnage display that makes these fish living works of art.

The Samurai phenotype sits at the intersection of several genetic traits that Thai breeders have skillfully combined. The dragon gene produces the thick, opaque white or metallic scaling that forms the "armour" layer. Beneath this, colour genes provide the contrasting dark base that shows through the scale edges and fins, creating the two-toned warrior aesthetic. The best Samurai Bettas display a sharp delineation between the metallic scale coverage and the underlying colour — the armour should not fully obscure the base, nor should the base bleed through the scales unevenly. It is this balance of contrast that separates a premium Samurai from an ordinary dragon-scale betta.

One important health consideration with dragon-scale bettas, including the Samurai phenotype, is the potential for diamond eye — a condition where the thick scaling grows over the eye, partially or fully obstructing vision. This is a genetic predisposition in heavily scaled lines, not a disease. Reputable breeders select against extreme diamond eye, and The Fish Collection screens all our Samurai Bettas for clear eyes at time of listing. However, mild scale encroachment on the eye margin can develop as the fish matures. Affected fish adapt remarkably well, using lateral line senses and vibration detection to navigate and feed normally, but buyers should be aware of this possibility.

Housing follows standard betta protocol: a minimum 5-gallon heated, filtered aquarium with stable temperature between 76 and 82 degrees Fahrenheit, gentle flow, and pH of 6.5 to 7.5. The Samurai Betta's metallic scales show spectacularly under warm-toned LED lighting, which enhances the copper and gold elements of the armour plating. A dark substrate and background maximise contrast and make the fish appear to glow against its surroundings.

Diet is standard betta fare: quality pellets as the staple, supplemented with frozen bloodworms, daphnia, and brine shrimp. The thick scaling of the Samurai phenotype can make it slightly more difficult to visually assess body condition — look at the belly profile from below rather than relying on side views, where the opaque scales can mask weight changes.

The Fish Collection ships all bettas individually in insulated containers with heat packs and our live arrival guarantee.`,
    seoDescription:
      'Samurai Betta for sale — metallic dragon-scale armour plating with bold colour contrast. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 5,
    maxSizeInches: 3,
    origin: 'Thailand (captive-bred)',
    diet: 'Carnivore — betta pellets, bloodworms, daphnia',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 4,
    faqs: [
      {
        question: 'What is a Samurai Betta?',
        answer:
          'A Samurai Betta is a dragon-scale betta phenotype characterised by thick, metallic scaling that creates an armour-plated appearance reminiscent of Japanese samurai armour. The opaque metallic scales overlay a contrasting dark base colour, producing a dramatic two-toned effect. The phenotype combines the dragon gene for thick scaling with specific colour genetics to achieve the characteristic warrior aesthetic. It is a product of Thai selective breeding.',
      },
      {
        question: 'What is diamond eye in Samurai Bettas?',
        answer:
          'Diamond eye is a condition where the thick dragon scales grow over the eye, partially or fully obstructing vision. It is a genetic predisposition in heavily scaled betta lines, not a disease or infection. Affected fish typically adapt well, using lateral line senses to navigate and feed. Reputable breeders select against extreme cases. The Fish Collection screens for clear eyes at listing, but mild scale encroachment can develop as the fish matures.',
      },
      {
        question: 'How much do Samurai Bettas cost?',
        answer:
          'Samurai Bettas typically range from $30 to $100 depending on scale definition, colour contrast, fin type, and breeder quality. Our specimens are priced at $55, reflecting strong metallic scaling, clean colour contrast, and exhibition-quality breeding. Premium show-grade Samurai Bettas with exceptional armour coverage and rare colour combinations can exceed $150. The key value factors are scale uniformity, colour contrast sharpness, and clear eyes.',
      },
      {
        question: 'What lighting is best for Samurai Bettas?',
        answer:
          'Warm-toned LED lighting enhances the copper and gold metallic elements of the Samurai Betta\'s scaling, making the armour effect most dramatic. A dark substrate and background maximise contrast. Avoid overly cool or blue-toned lighting, which can wash out the warm metallic tones. Adjustable LED fixtures allow you to fine-tune the colour temperature to find the sweet spot where the metallic scales and underlying colour both show at their best.',
      },
    ],
    relatedSlugs: ['galaxy-koi-plakat-betta', 'alien-betta', 'giant-betta', 'crowntail-betta', 'dumbo-ear-betta'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.9,
    reviewCount: 8,
  },

  // ──────────────────────────────────────────────
  // 109. Alien Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Alien Betta',
    scientificName: 'Betta spp. (hybrid)',
    slug: 'alien-betta',
    category: 'betta',
    sku: 'TF-BET-ALIN-001',
    priceUSD: 75,
    images: [
      {
        url: '/images/products/alien-betta-hero.jpg',
        alt: 'Alien Betta (Betta hybrid) — premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Alien Betta is a fish that defies easy classification — a complex hybrid created by crossing wild-type Betta species with domesticated Betta splendens to produce offspring with an otherworldly appearance that justifies their evocative common name. Alien Bettas display iridescent scaling in electric blues, greens, and coppers that shimmer with an intensity and complexity not achievable through Betta splendens genetics alone. The wild-type influence brings a metallic sheen that covers the body in bands and whorls of colour that appear almost holographic under the right lighting, shifting between hues as the fish moves. The body is typically more elongated and streamlined than a standard domestic betta, and the fins are moderate in length — longer than a plakat but shorter than a halfmoon — giving the fish a balanced, athletic silhouette. The Fish Collection sources our Alien Bettas from specialist Thai breeders who maintain carefully managed hybrid lines known for consistent colour expression and robust health.

The genetics behind the Alien Betta are complex and not fully standardised across the hobby. Most Alien Bettas involve crosses between Betta splendens and one or more wild species such as Betta stiktos, Betta mahachaiensis, or Betta smaragdina — species that carry intense iridescent genes not present in domesticated betta lines. The resulting hybrids express these wild-type iridescent traits on a body that retains enough domestic betta influence to be manageable in a standard aquarium setting. However, the wild-type genetics also bring some behavioural differences: Alien Bettas tend to be somewhat more skittish and less human-habituated than pure Betta splendens, particularly during the initial acclimation period. Patience and a well-planted tank with plenty of cover help these fish settle in.

Housing an Alien Betta requires slightly more consideration than a standard domestic betta. A minimum 10-gallon aquarium is recommended — larger than the typical betta minimum — because the wild-type influence makes these fish more active swimmers that benefit from additional space. Dense planting with floating plants that diffuse overhead light helps the fish feel secure and encourages natural behaviour. Water temperature should be stable between 76 and 82 degrees Fahrenheit with pH of 6.5 to 7.5. A tight-fitting lid is essential, as Alien Bettas retain the jumping tendency common to wild betta species.

One characteristic that makes Alien Bettas particularly rewarding is their display behaviour. When settled and comfortable, males will flare and display with a frequency and intensity that exceeds most domestic bettas. The iridescent scaling lights up during display, producing flashes of colour across the body that are genuinely mesmerising. Providing a small mirror for brief, supervised sessions (no more than five minutes at a time) allows you to witness this behaviour without the stress of a permanent visual stimulus.

Diet follows standard betta nutrition but with an emphasis on variety and live or frozen foods. The wild-type influence means Alien Bettas often show a stronger prey drive and may be less enthusiastic about pellets initially. Start with frozen bloodworms and daphnia, then gradually introduce high-quality pellets as the fish settles in. The Fish Collection ships all bettas individually in insulated containers with heat packs and our live arrival guarantee.`,
    seoDescription:
      'Alien Betta (wild-type hybrid) for sale — holographic iridescence from wild Betta species genetics. Live arrival guaranteed at The Fish Collection.',
    careLevel: 3,
    careLevelLabel: 'Intermediate',
    tankSizeGallons: 10,
    maxSizeInches: 3,
    origin: 'Thailand (captive-bred hybrid)',
    diet: 'Carnivore — pellets, bloodworms, live foods',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 3,
    faqs: [
      {
        question: 'What species are used to make Alien Bettas?',
        answer:
          'Alien Bettas are typically hybrids involving Betta splendens crossed with wild species such as Betta stiktos, Betta mahachaiensis, or Betta smaragdina. These wild species carry intense iridescent genes not present in domestic betta lines, producing the holographic colour effect that defines the Alien phenotype. The specific cross varies between breeders, which is why Alien Bettas can look quite different depending on their source. The wild-type influence also brings a more streamlined body shape and moderate fin length.',
      },
      {
        question: 'Are Alien Bettas harder to keep than regular bettas?',
        answer:
          'Alien Bettas require slightly more experience than standard domestic bettas. They benefit from a larger tank (10 gallons minimum versus 5 for domestic bettas), more plant cover, and a quieter environment during acclimation. Their wild-type genetics make them more skittish initially and sometimes less accepting of pellet food at first. However, once settled, they are no more difficult to maintain than any other betta. The additional effort is rewarded by their extraordinary colour and display behaviour.',
      },
      {
        question: 'Can Alien Bettas breed?',
        answer:
          'Alien Bettas can breed, though fertility varies depending on the specific hybrid cross. Some Alien Betta crosses produce fertile offspring, while others may have reduced fertility or produce sterile fry. Breeding Alien Bettas is more challenging than breeding domestic bettas due to the wild-type influence on behaviour — males may be more aggressive during courtship, and the pair may require more acclimation time. This is an advanced breeding project best left to experienced betta breeders.',
      },
      {
        question: 'Why do Alien Bettas need a bigger tank?',
        answer:
          'The wild Betta species in the Alien hybrid\'s genetics were active swimmers in natural habitats — streams, swamps, and rice paddies. This translates to higher activity levels and a need for more swimming space than the heavily domesticated Betta splendens, which has been bred for fin development rather than athletic ability. A 10-gallon planted tank provides the space and environmental complexity that helps Alien Bettas express their natural behaviours and settle in comfortably.',
      },
    ],
    relatedSlugs: ['galaxy-koi-plakat-betta', 'samurai-betta', 'giant-betta', 'crowntail-betta', 'dumbo-ear-betta'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.9,
    reviewCount: 6,
  },

  // ──────────────────────────────────────────────
  // 110. Giant Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Giant Betta',
    scientificName: 'Betta splendens',
    slug: 'giant-betta',
    category: 'betta',
    sku: 'TF-BET-GANT-001',
    priceUSD: 40,
    images: [
      {
        url: '/images/products/giant-betta-hero.jpg',
        alt: 'Giant Betta (Betta splendens) — King Betta premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Giant Betta — also known as the King Betta — is the supersized expression of Betta splendens, a selectively bred variant that reaches 4 to 5 inches in total length, roughly double the size of a standard betta. The first time you see a Giant Betta in person, the scale shift is genuinely surprising — everything about the fish is amplified. The body is thick and powerful, the fins are proportionally larger, and the flaring display is transformed from a charming nano-fish behaviour into something closer to a genuine threat display. Giant Bettas carry the same colour genetics as standard-sized bettas, meaning they are available in the full spectrum of colours and patterns, but the increased body area means there is simply more canvas for colour to express itself. The Fish Collection sources our Giant Bettas from Thai breeders who have established reliable giant lines through years of selective breeding for size without sacrificing colour quality or fin form.

The Giant Betta phenotype was developed in Thailand through a straightforward but patient selective breeding programme: breed the largest individuals from each generation together, cull aggressively for size, and repeat over many generations. The result is a fish that is genetically Betta splendens in every respect — same species, same care requirements, same behaviour — but significantly larger. Giants are not a separate species or a hybrid; they are simply the extreme end of the Betta splendens size distribution, fixed through selective pressure. This means all the colour genetics, fin types, and behavioural traits of standard bettas are available in giant form, though the breeding community for giants is smaller, so the variety of available colours may be more limited at any given time.

Housing a Giant Betta requires scaling up from the standard betta setup. A minimum 10-gallon aquarium is recommended — the 5-gallon tanks suitable for standard bettas feel cramped for a fish of this size. Filtration should be appropriately sized, and the heater must be rated for the larger water volume. Temperature, pH, and general water chemistry requirements are identical to standard bettas: 76 to 82 degrees Fahrenheit, pH 6.5 to 7.5, with weekly water changes of twenty-five to fifty percent. Decorations and plants should be proportional to the fish — what provides adequate cover for a 3-inch betta may feel exposed for a 5-inch giant.

One behavioural note: Giant Bettas can be more aggressive and more physically capable of damaging tankmates than standard-sized bettas. Their larger mouths and stronger jaws mean they can injure or consume small fish and invertebrates that a standard betta might ignore. Tankmate selection requires extra caution, and many giant betta keepers opt for a species-only setup to avoid risk.

Diet follows standard betta nutrition but in larger portions: quality betta pellets (larger pellet sizes are appropriate), frozen bloodworms, brine shrimp, and daphnia. Giants are enthusiastic feeders with correspondingly larger appetites, but overfeeding must still be managed. Feed twice daily, only what the fish consumes in two to three minutes.

The Fish Collection ships all bettas individually in insulated containers with heat packs and our live arrival guarantee.`,
    seoDescription:
      'Giant Betta (King Betta) for sale — supersized Betta splendens reaching 4-5 inches. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 10,
    maxSizeInches: 5,
    origin: 'Thailand (captive-bred)',
    diet: 'Carnivore — betta pellets, bloodworms, brine shrimp',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'How big do Giant Bettas get?',
        answer:
          'Giant Bettas (King Bettas) reach 4 to 5 inches in total length, approximately double the size of a standard Betta splendens. Exceptional individuals from strong giant lines can occasionally exceed 5 inches. Size depends on genetics, diet, and housing — giants in larger tanks with quality food reach their full potential more consistently than those in smaller setups. Full adult size is typically reached by 6 to 8 months of age.',
      },
      {
        question: 'Are Giant Bettas a different species?',
        answer:
          'No, Giant Bettas are the same species as standard bettas — Betta splendens. They were developed through selective breeding, pairing the largest individuals from each generation over many years to fix the giant size trait. All the colour genetics, fin types, and behavioural characteristics of standard bettas apply equally to giants. They are simply the extreme large end of the Betta splendens size spectrum.',
      },
      {
        question: 'What tank size does a Giant Betta need?',
        answer:
          'A minimum 10-gallon aquarium is recommended for a Giant Betta. The standard 5-gallon tanks suitable for normal-sized bettas are too small for a fish that can reach 5 inches. A larger tank provides better swimming space, more stable water parameters, and room for appropriate décor and filtration. A 15 to 20-gallon tank is even better and allows for potential tankmates if carefully selected.',
      },
      {
        question: 'Do Giant Bettas live as long as regular bettas?',
        answer:
          'Giant Bettas have a similar lifespan to standard bettas — approximately 3 to 5 years with proper care. Some keepers report slightly shorter lifespans in giants, possibly due to the metabolic demands of maintaining a larger body, though this is not conclusively established. Quality of care — stable temperature, clean water, varied diet — remains the primary determinant of longevity regardless of size.',
      },
    ],
    relatedSlugs: ['galaxy-koi-plakat-betta', 'samurai-betta', 'alien-betta', 'crowntail-betta', 'dumbo-ear-betta'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.7,
    reviewCount: 12,
  },

  // ──────────────────────────────────────────────
  // 111. Crowntail Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Crowntail Betta',
    scientificName: 'Betta splendens',
    slug: 'crowntail-betta',
    category: 'betta',
    sku: 'TF-BET-CRWN-001',
    priceUSD: 35,
    images: [
      {
        url: '/images/products/crowntail-betta-hero.jpg',
        alt: 'Crowntail Betta (Betta splendens) — show-grade specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Crowntail Betta is one of the most visually distinctive fin types in the betta world — a variety whose fin rays extend well beyond the webbing, creating a dramatic, spiky silhouette that resembles a crown or a burst of flame. When a Crowntail Betta flares, the extended rays fan outward in every direction, producing a display of such theatrical intensity that it remains one of the most photographed and recognisable betta forms decades after its development. Our show-grade Crowntail Bettas are sourced from Thai breeders who have refined the ray extension, colour saturation, and overall symmetry to exhibition standards — these are not the common crowntails found in chain pet stores, but carefully selected specimens that represent the phenotype at its best.

The Crowntail was developed in Indonesia in the early 1990s — the first major betta fin type to originate outside Thailand — and quickly became a sensation in the international betta community. The genetic mutation responsible for the crowntail phenotype causes the fin rays to grow longer than the inter-ray webbing, creating the characteristic spiked appearance. The degree of ray extension is the primary quality metric: in show-grade specimens, the rays extend at least one-third beyond the webbing, with the most extreme examples showing fifty percent or greater extension. Our specimens are selected for consistent, symmetrical ray extension across the caudal, dorsal, and anal fins, with no crossed, kinked, or missing rays.

The aesthetic appeal of the Crowntail is amplified dramatically by colour choice. Dark colours — deep blues, blacks, and metallics — create the most striking visual impact, as the spiked rays appear as dramatic silhouettes against the background. Light colours can make the individual rays less distinct. Our show-grade specimens are selected for colours that maximise the crowntail effect, though we carry a range of colour varieties depending on current breeding availability.

Housing a Crowntail Betta requires one special consideration beyond standard betta care: fin ray protection. The extended rays are more fragile than the fused webbing of other fin types and can be damaged by rough decorations, sharp plastic plants, or strong filter intake suction. Use only silk or live plants, ensure filter intakes are sponge-covered, and avoid any décor with sharp edges. A damaged crowntail fin can regrow, but the regenerated portion may not achieve the same perfect ray extension as the original.

A minimum 5-gallon heated, filtered aquarium with stable temperature between 76 and 82 degrees Fahrenheit and pH of 6.5 to 7.5 is required. Water quality is particularly important for Crowntails because the extended fin rays are susceptible to ray curling — a condition where the tips of the rays curl inward, usually caused by suboptimal water parameters. Regular water changes and stable conditions prevent this issue.

Diet follows standard betta nutrition: quality pellets, frozen bloodworms, daphnia, and brine shrimp. The Fish Collection ships all bettas individually in insulated containers with heat packs and our live arrival guarantee.`,
    seoDescription:
      'Show-Grade Crowntail Betta for sale — dramatic extended fin rays with exhibition-quality symmetry. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 5,
    maxSizeInches: 3,
    origin: 'Thailand (captive-bred)',
    diet: 'Carnivore — betta pellets, bloodworms, daphnia',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 7,
    faqs: [
      {
        question: 'What makes a show-grade Crowntail Betta?',
        answer:
          'Show-grade Crowntails have fin rays that extend at least one-third beyond the webbing, with the best specimens showing fifty percent or greater extension. The rays must be straight, evenly spaced, symmetrical across all fins, and free of kinks, crosses, or missing segments. Colour should be deep and uniform, and the body should be well-proportioned with no deformities. Our specimens are individually selected against these criteria from competition-quality Thai breeding lines.',
      },
      {
        question: 'Do Crowntail Betta fins grow back if damaged?',
        answer:
          'Yes, betta fins can regenerate, including the extended rays of crowntails. However, regenerated fin tissue may not achieve the same perfect ray extension as the original growth, and severe damage can result in permanently altered fin shape. Prevention is better than cure — use silk or live plants only, cover filter intakes with sponge guards, and avoid any sharp décor. Pristine water quality accelerates healing and improves regeneration quality.',
      },
      {
        question: 'What is ray curling in Crowntail Bettas?',
        answer:
          'Ray curling is a condition where the tips of the extended fin rays curl inward rather than remaining straight. It is usually caused by poor water quality — particularly high ammonia, nitrite, or nitrate levels — or by rapid temperature fluctuations. In most cases, improving water conditions through consistent changes and stable parameters will correct mild curling over time. Severe or long-standing curling may be permanent. It is not a genetic defect but an environmental response.',
      },
      {
        question: 'Can Crowntail Bettas live with other fish?',
        answer:
          'Crowntail Bettas can live in community tanks with the same guidelines as other betta varieties — peaceful, non-fin-nipping tankmates in 10 gallons or more. However, the extended fin rays are more vulnerable to nipping damage than other fin types, making tankmate selection particularly important. Avoid known nippers like Tiger Barbs, Serpae Tetras, and most barbs. Corydoras catfish, small rasboras, and snails are generally safe companions.',
      },
    ],
    relatedSlugs: ['galaxy-koi-plakat-betta', 'samurai-betta', 'alien-betta', 'giant-betta', 'dumbo-ear-betta'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.8,
    reviewCount: 20,
  },

  // ──────────────────────────────────────────────
  // 112. Dumbo Ear Betta
  // ──────────────────────────────────────────────
  {
    commonName: 'Dumbo Ear Betta',
    scientificName: 'Betta splendens',
    slug: 'dumbo-ear-betta',
    category: 'betta',
    sku: 'TF-BET-DMBO-001',
    priceUSD: 50,
    images: [
      {
        url: '/images/products/dumbo-ear-betta-hero.jpg',
        alt: 'Dumbo Ear Betta (Betta splendens) — Elephant Ear premium specimen',
        width: 800,
        height: 1000,
      },
    ],
    description: `The Dumbo Ear Betta — also known as the Elephant Ear Betta — is one of the most whimsical and endearing varieties of Betta splendens, distinguished by dramatically oversized pectoral fins that extend outward from the body like a pair of delicate, translucent wings. Where most bettas use their pectoral fins as functional but unremarkable steering aids, the Dumbo Ear's pectorals are a primary visual feature — large, often colourful, and constantly in motion as the fish "rows" through the water with a distinctive, almost bird-like wingbeat. The effect is immediately charming and utterly unique in the betta world. The Fish Collection sources our Dumbo Ear Bettas from Thai breeders who have stabilised the oversized pectoral trait while maintaining strong body colour, fin form, and overall health.

The genetics of the Dumbo Ear phenotype involve a mutation that causes the pectoral fins to grow significantly larger than normal. In the best specimens, the pectoral fins are as large as — or larger than — the fish's head, and they may be solid-coloured, bicoloured, or cellophane (translucent), creating different visual effects depending on the individual. Some of the most prized Dumbo Ears feature pectorals that contrast with the body colour — for example, a deep blue body with white or pastel pectorals creates a striking two-toned effect that highlights the oversized fins as a distinct design element rather than simply enlarged versions of the body colour.

The swimming behaviour of a Dumbo Ear Betta is genuinely different from other betta varieties and is a significant part of their appeal. The oversized pectoral fins create a rowing motion that is more prominent and visible than the subtle pectoral movements of standard bettas. The fish appears to "fly" through the water, with each pectoral stroke clearly visible. This distinctive locomotion, combined with the frequent independent movement of the two pectorals, gives the Dumbo Ear a personality and presence that many keepers describe as more engaging and interactive than other betta types.

Housing follows standard betta requirements with attention to flow considerations. The oversized pectoral fins create more drag than standard fins, meaning Dumbo Ear Bettas are not strong swimmers and struggle in any significant current. Filtration output should be gentle and ideally baffled. A minimum 5-gallon heated aquarium with stable temperature between 76 and 82 degrees Fahrenheit and pH of 6.5 to 7.5 provides the right environment. Plants and décor should be smooth — the large pectorals are vulnerable to snagging on rough surfaces or sharp edges. Silk or live plants are mandatory; never use sharp plastic plants with any long-finned betta, but especially not with a Dumbo Ear whose oversized pectorals are constantly in motion and therefore at constant risk of contact with surrounding objects.

Diet is standard betta fare: quality pellets, frozen bloodworms, daphnia, and brine shrimp. The Dumbo Ear's distinctive feeding behaviour — rowing forward to intercept food with its wingbeat motion — makes feeding time a particularly entertaining daily ritual.

The Fish Collection ships all bettas individually in insulated containers with heat packs and our live arrival guarantee.`,
    seoDescription:
      'Dumbo Ear Betta (Elephant Ear) for sale — oversized pectoral fins with distinctive wingbeat swimming motion. Live arrival guaranteed at The Fish Collection.',
    careLevel: 2,
    careLevelLabel: 'Easy',
    tankSizeGallons: 5,
    maxSizeInches: 3,
    origin: 'Thailand (captive-bred)',
    diet: 'Carnivore — betta pellets, bloodworms, daphnia',
    temperament: 'Aggressive (males toward males)',
    lifespan: '3-5 years',
    waterParameters: {
      tempMin: 76,
      tempMax: 82,
      phMin: 6.5,
      phMax: 7.5,
    },
    inStock: true,
    stockCount: 5,
    faqs: [
      {
        question: 'What are Dumbo Ear Bettas?',
        answer:
          'Dumbo Ear Bettas (also called Elephant Ear Bettas) are a Betta splendens variety with dramatically oversized pectoral fins that resemble wings or elephant ears. The mutation causes the pectoral fins to grow significantly larger than normal, creating a distinctive rowing swimming motion. The oversized pectorals can be solid-coloured, bicoloured, or translucent, and they are in constant motion as the fish swims, giving these bettas a unique, almost bird-like appearance.',
      },
      {
        question: 'Do Dumbo Ear Bettas have trouble swimming?',
        answer:
          'The oversized pectoral fins create more drag, making Dumbo Ears slightly less agile than standard bettas. They compensate with their distinctive rowing motion, which is functional but not fast. Strong currents are problematic — filter output should be gentle and ideally baffled. In a calm, well-planted tank, Dumbo Ears navigate perfectly well. Their swimming style is part of their charm and should not be mistaken for difficulty — it is simply a different mode of locomotion.',
      },
      {
        question: 'Are Dumbo Ear Bettas rare?',
        answer:
          'Dumbo Ear Bettas were once quite rare and expensive, but Thai breeding programs have stabilised the trait sufficiently that they are now regularly available from specialist betta sellers. They remain less common than standard fin types like halfmoons or crowntails, and quality specimens with large, well-formed, colourful pectorals still command a premium. Our specimens are selected for pectoral size, symmetry, and colour to ensure every fish displays the dramatic ear effect the variety is known for.',
      },
      {
        question: 'Can Dumbo Ear pectoral fins grow back if damaged?',
        answer:
          'Yes, pectoral fins can regenerate if damaged, though the regrown tissue may not reach the same size or have the same colour as the original. Prevention is essential — use only smooth decorations and silk or live plants, cover filter intakes, and maintain pristine water quality to prevent bacterial fin infections. The constantly moving pectorals are at higher risk of contact with tank surfaces than other fins, so a smooth, well-planned tank layout is important.',
      },
      {
        question: 'What colours do Dumbo Ear Bettas come in?',
        answer:
          'Dumbo Ear Bettas are available in the full range of betta colours — blue, red, black, white, multicolour, and marble patterns. The pectoral fins can match the body colour or contrast with it. Some of the most sought-after combinations feature contrasting pectorals — for example, a dark body with light or pastel pectoral fins. The cellophane (translucent) pectoral variant is also popular, as it creates a ghostly, wing-like effect that emphasises the shape of the oversized fins.',
      },
    ],
    relatedSlugs: ['galaxy-koi-plakat-betta', 'samurai-betta', 'alien-betta', 'giant-betta', 'crowntail-betta'],
    speciesGuideSlug: undefined,
    ratingAverage: 4.9,
    reviewCount: 14,
  },
];

// ──────────────────────────────────────────────
// Helper Functions
// ──────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
