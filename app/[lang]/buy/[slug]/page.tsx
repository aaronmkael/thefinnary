import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFAQ, organizationSchema } from '@/lib/seo/jsonLd';
import { ProductGrid } from '@/components/product/ProductGrid';
import { products } from '@/lib/data/products';

/* ── Marine-species helper ──────────────────────────────────────────── */
const MARINE_CATEGORIES = new Set(['tang', 'grouper']);
const MARINE_SLUGS = new Set([
  'peppermint-angelfish',
  'clarion-angelfish',
  'snowflake-moray-eel',
]);
const isMarine = (p: typeof products[0]) =>
  MARINE_CATEGORIES.has(p.category) || MARINE_SLUGS.has(p.slug);

/* ── Collection type ────────────────────────────────────────────────── */
interface CollectionFAQ {
  question: string;
  answer: string;
}

interface Collection {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  filter?: (p: typeof products[0]) => boolean;
  faqs: CollectionFAQ[];
}

/* ── Collections ────────────────────────────────────────────────────── */
export const collections: Record<string, Collection> = {
  /* ---------------------------------------------------------------- *
   * EXISTING COLLECTIONS                                             *
   * ---------------------------------------------------------------- */
  'exotic-fish-for-sale': {
    title: 'Buy Exotic Fish Online — Live Arrival Guaranteed',
    description:
      'Buy exotic fish online from The Fish Collection — the collector\'s source for rare and unusual aquarium species. From the legendary Platinum Arowana to the elusive Peppermint Angelfish, every fish is expert-bred with live arrival guaranteed and free overnight shipping. Browse our full catalog and order with confidence.',
    metaTitle:
      'Buy Exotic Fish Online | Live Arrival Guaranteed | The Fish Collection',
    metaDescription:
      'Buy exotic fish online — 200+ rare species. Platinum arowana, gem tang, peppermint angelfish & more. Live arrival guaranteed. Free overnight shipping USA.',
    faqs: [
      {
        question: 'Do you ship exotic fish nationwide?',
        answer:
          'Yes, The Fish Collection ships to all US states where the species is legal to own. We use temperature-controlled overnight shipping to ensure live arrival.',
      },
      {
        question: 'What is your live arrival guarantee?',
        answer:
          'Every fish purchased from The Fish Collection is covered by our 100% live arrival guarantee. If a fish does not arrive alive and in good health, we will replace it or issue a full refund.',
      },
      {
        question: 'How are exotic fish shipped?',
        answer:
          'Our fish are shipped in insulated, temperature-controlled containers with oxygenated water. We ship via overnight express carriers and monitor conditions throughout transit.',
      },
      {
        question: 'Are exotic fish legal to own in the United States?',
        answer:
          'Most species we sell are fully legal in all US states. A small number — including certain Arowana species — require CITES documentation or are restricted in specific states. Each product page lists any legal requirements, and our team will confirm legality for your state before shipping.',
      },
    ],
  },

  'rare-fish-for-sale': {
    title: 'Rare Fish for Sale',
    description:
      'The Fish Collection\'s curated selection of the rarest aquarium fish available to private collectors. Each fish represents exceptional genetic quality and provenance.',
    metaTitle:
      'Rare Fish for Sale | Collector-Grade Fish | The Fish Collection',
    metaDescription:
      'Buy rare fish online — collector-grade fish from $75 to $28,500. Peppermint angelfish, platinum arowana & more. Live arrival guaranteed.',
    filter: (p) => p.priceUSD >= 1000,
    faqs: [
      {
        question: 'How are rare fish shipped safely?',
        answer:
          'Every rare fish is shipped in double-insulated, temperature-controlled containers with medical-grade oxygenated water. High-value fish travel via dedicated overnight couriers — never bulk freight — with real-time temperature monitoring throughout transit.',
      },
      {
        question: 'What guarantee covers rare fish purchases?',
        answer:
          'The Fish Collection\'s 100% live arrival guarantee applies to every order regardless of value. If a rare fish arrives in anything less than perfect health, we will replace it with an equivalent fish or issue a full refund — no exceptions, no fine print.',
      },
      {
        question: 'How should I acclimate a rare fish after delivery?',
        answer:
          'We include a species-specific acclimation guide with every shipment. In general, float the sealed bag for 15 to 20 minutes to equalize temperature, then drip-acclimate over 45 to 60 minutes to match your tank\'s pH and hardness. For ultra-high-value fish, our aquarist team is available by phone to guide you through the process in real time.',
      },
      {
        question: 'Are rare and endangered fish legal to buy?',
        answer:
          'The Fish Collection operates exclusively within federal and state legal frameworks. Species listed under CITES are sold with full documentation and permits. Certain species — such as Asian Arowana — are restricted in specific jurisdictions; our compliance team verifies legality for your state before any shipment is dispatched.',
      },
    ],
  },

  /* ---------------------------------------------------------------- *
   * NEW COLLECTIONS                                                  *
   * ---------------------------------------------------------------- */
  'freshwater-fish-for-sale': {
    title: 'Freshwater Fish for Sale',
    description:
      'The Fish Collection presents an authoritative collection of freshwater aquarium fish for the discerning collector — a curated portfolio spanning the legendary Platinum Arowana, iridescent Blue Diamond Discus, formidable Red Tail Catfish, and dozens of additional species that represent the pinnacle of freshwater fishkeeping. Every fish in this collection originates from verified breeding programs or sustainably managed wild-harvest operations, and each arrives at your door with the provenance documentation serious aquarists demand.\n\nFreshwater species have captivated collectors for centuries, and for good reason. The sheer diversity of form, color, and behavior found in rivers, lakes, and tributaries worldwide is unmatched by any marine environment of equivalent size. From the predatory elegance of an Alligator Gar patrolling a 500-gallon display to the jewel-like precision of a school of Denison Barbs threading through planted driftwood, freshwater fish offer an unrivaled palette for aquascaping and vivarium design. At The Fish Collection, we have assembled what we believe to be the most compelling selection of freshwater species available from any single source in the United States.\n\nOur husbandry standards are exacting. Every fish is quarantined for a minimum of fourteen days before listing, during which time it is observed for signs of disease, treated prophylactically against common parasites, and transitioned to a staple diet that ensures peak coloration and vitality upon arrival. Water chemistry is matched to species-specific parameters — soft acidic conditions for Amazonian species, harder alkaline water for African cichlids — because we understand that a fish conditioned in optimal water will acclimate to your system faster and with less stress.\n\nShipping is where many retailers cut corners; we do the opposite. Every freshwater fish leaves our facility in a double-insulated, temperature-controlled container with medical-grade oxygen and a heat or cold pack calibrated to current weather conditions along the transit route. We ship exclusively via overnight express, and every package is tracked in real time from our door to yours. Our 100% live arrival guarantee is not a marketing slogan — it is a contractual commitment backed by immediate replacement or full refund.',
    metaTitle:
      'Freshwater Fish for Sale | Buy Live Freshwater Fish Online | The Fish Collection',
    metaDescription:
      'Buy 100+ freshwater fish species online — arowana, discus, cichlids, catfish & more. Expert-bred, live arrival guaranteed. Free overnight shipping USA.',
    filter: (p) => !isMarine(p),
    faqs: [
      {
        question: 'How are freshwater fish shipped to my door?',
        answer:
          'Every freshwater fish is shipped in a double-insulated container with medical-grade oxygenated water and a heat or cold pack calibrated to current weather along the transit route. We use overnight express carriers exclusively — never standard ground freight — and every package is tracked in real time from our facility to your address.',
      },
      {
        question: 'What does your live arrival guarantee cover for freshwater fish?',
        answer:
          'Our 100% live arrival guarantee covers every freshwater species we sell, regardless of price. If a fish does not arrive alive and in good health, we will replace it with an equivalent fish or issue a full refund. Simply photograph the fish in the unopened bag within two hours of delivery and contact our support team.',
      },
      {
        question: 'How should I acclimate freshwater fish after delivery?',
        answer:
          'Float the sealed bag in your aquarium for 15 to 20 minutes to equalize temperature. Then open the bag and drip-acclimate by adding small amounts of your tank water over 30 to 45 minutes until the bag volume has roughly doubled. Net the fish into the tank and discard the shipping water. For sensitive species like discus or stingrays, we recommend extending the drip phase to 60 minutes.',
      },
      {
        question: 'Are there legal restrictions on buying freshwater fish online?',
        answer:
          'The vast majority of freshwater species we sell are fully legal in all US states. A small number — including Asian Arowana (CITES Appendix I) and certain Snakehead species — are restricted in specific states or require permits. Each product page lists applicable legal requirements, and our compliance team verifies legality for your state before dispatching any order.',
      },
    ],
  },

  'live-fish-for-sale': {
    title: 'Live Fish for Sale',
    description:
      'Welcome to the definitive marketplace for live aquarium fish — a single, comprehensive catalog encompassing every exotic and rare species The Fish Collection has to offer. Whether your collection leans toward the warm, tannin-stained waters of Amazonia or the crystalline reefs of the Indo-Pacific, this page presents our full inventory: freshwater predators, marine showpieces, nano-tank jewels, and everything in between, all available for overnight delivery to your door.\n\nThe Fish Collection was founded on a straightforward conviction: serious fishkeepers deserve a source that treats live fish with the same care and transparency that the best specialists in the world provide. Every fish listed here has been quarantined for a minimum of fourteen days, examined for disease and parasites, and conditioned on a species-appropriate diet before it ever appears on our shelves. We photograph each animal individually so you see the exact fish you are purchasing — no stock images, no bait-and-switch.\n\nOur logistics are built for live cargo. Double-insulated containers, medical-grade oxygen, and weather-calibrated heat or cold packs ensure stable conditions from the moment a fish leaves our facility until it arrives at your doorstep. We ship via overnight express only, track every package in real time, and back every order with an unconditional 100% live arrival guarantee. If anything goes wrong in transit, we make it right — full stop.\n\nPrices in our catalog range from under ten dollars for robust community species to five figures for museum-quality collector fish. Regardless of the price tag, every fish receives the same standard of husbandry, the same shipping protocol, and the same guarantee. Browse the grid below, filter by category or price, and build the collection you have been envisioning. Our aquarist team is available seven days a week to answer questions about compatibility, tank requirements, or acclimation — just reach out.',
    metaTitle:
      'Live Fish for Sale | Buy Exotic & Rare Fish Online | The Fish Collection',
    metaDescription:
      'Buy live fish online — exotic freshwater & marine species from $6. Live arrival guaranteed, free overnight shipping. Expert-bred at The Fish Collection.',
    faqs: [
      {
        question: 'How does The Fish Collection ship live fish?',
        answer:
          'Every live fish is shipped in a double-insulated, temperature-controlled container with medical-grade oxygenated water. We include heat or cold packs calibrated to real-time weather conditions along the transit route and ship exclusively via overnight express carriers. Each package is tracked from our facility to your door.',
      },
      {
        question: 'What is The Fish Collection\'s live arrival guarantee?',
        answer:
          'Every fish we sell — from a six-dollar Tiger Barb to a five-figure Arowana — is covered by our unconditional 100% live arrival guarantee. If a fish does not arrive alive and in visibly good health, we will replace it or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team.',
      },
      {
        question: 'How do I acclimate live fish after they arrive?',
        answer:
          'Float the sealed bag in your aquarium for 15 to 20 minutes to equalize temperature, then drip-acclimate by slowly adding tank water to the bag over 30 to 60 minutes. Net the fish into the tank and discard the shipping water. We include a species-specific acclimation guide with every order, and our aquarist team is available by phone or chat for real-time guidance.',
      },
      {
        question: 'Are all the fish you sell legal to own?',
        answer:
          'The Fish Collection sells only species that are legal under US federal law, and we verify state-level legality before dispatching every order. A small number of species — such as Asian Arowana — require CITES permits or are restricted in certain states. Legal requirements are clearly listed on each product page, and our compliance team will contact you if any issue arises before shipment.',
      },
    ],
  },

  'saltwater-fish-for-sale': {
    title: 'Saltwater Fish for Sale',
    description:
      'The Fish Collection\'s saltwater collection represents some of the most coveted marine fish in the global aquarium trade — fish that have eluded casual hobbyists and captivated serious collectors for decades. From the electric purple of a Gem Tang sourced from the deep reefs of Mauritius to the near-mythical Peppermint Angelfish harvested at depth from the Cook Islands, every marine fish we offer has been acclimated to captive conditions, quarantined, and verified healthy before listing.\n\nMarine fishkeeping demands precision, and we respect that by holding our saltwater inventory to uncompromising standards. Each fish is maintained in species-appropriate salinity (1.020–1.026 specific gravity), temperature (72–78 degrees Fahrenheit for most species), and lighting conditions that replicate its native reef environment. Quarantine protocols include prophylactic treatment for marine ich, flukes, and bacterial infections — the trio of pathogens that account for the vast majority of losses in newly imported marine fish.\n\nOur shipping protocol for saltwater species is engineered to maintain stable salinity and temperature throughout transit. Double-insulated containers, oxygenated saltwater matched to the fish\'s holding parameters, and heat or cold packs calibrated to real-time weather data along the transit route ensure that your fish arrives in the same condition it left our facility. We ship overnight, track every package, and guarantee live arrival without exception.\n\nThe marine fish featured below include reef-safe species for established reef tanks, predatory display fish for fish-only systems, and ultra-rare deepwater fish that surface on the market only a handful of times each year. Whether you are completing a reef centerpiece or adding a once-in-a-lifetime fish to a dedicated species tank, The Fish Collection is the source that collectors trust.',
    metaTitle:
      'Saltwater Fish for Sale | Buy Rare Marine Fish Online | The Fish Collection',
    metaDescription:
      'Buy rare saltwater fish online — gem tang, peppermint angelfish, neptune grouper & more. Live arrival guaranteed. Free overnight shipping.',
    filter: (p) => isMarine(p),
    faqs: [
      {
        question: 'How are saltwater fish shipped without harming them?',
        answer:
          'Each marine fish is shipped in oxygenated saltwater matched to its holding parameters inside a double-insulated, temperature-controlled container. Heat or cold packs are calibrated to real-time weather along the transit route. We ship overnight only and track every package in real time — our protocols are designed to maintain stable salinity and temperature from our facility to your door.',
      },
      {
        question: 'Does the live arrival guarantee apply to saltwater fish?',
        answer:
          'Absolutely. Every saltwater fish we sell is covered by our unconditional 100% live arrival guarantee. If a marine fish does not arrive alive and in good health, we will replace it with an equivalent fish or issue a full refund. Simply photograph the fish in the unopened bag within two hours of delivery and notify our support team.',
      },
      {
        question: 'What is the recommended acclimation process for saltwater fish?',
        answer:
          'Float the sealed bag in your sump or display tank for 15 to 20 minutes to equalize temperature. Open the bag and drip-acclimate by adding tank water slowly over 45 to 60 minutes — marine fish are particularly sensitive to sudden changes in salinity and pH. For deepwater species like Peppermint Angelfish, we recommend extending drip acclimation to 90 minutes and dimming tank lights for the first 24 hours.',
      },
      {
        question: 'Are there legal restrictions on buying saltwater fish online?',
        answer:
          'Most marine species we sell are legal in all US states without special permits. Certain species may be subject to CITES regulations or state-level restrictions on marine wildlife. We verify legality for your state before every shipment. If a species requires documentation — such as a CITES export permit for Appendix II listed fish — we handle the paperwork and include it with your order.',
      },
    ],
  },

  'luxury-fish-for-sale': {
    title: 'Luxury Fish for Sale',
    description:
      'This is the collection for collectors who do not compromise. The Fish Collection\'s luxury tier assembles every fish in our catalog priced at one thousand dollars and above — a rarefied selection that represents the absolute zenith of the global aquarium trade. These are not simply expensive animals; they are living works of art whose value is determined by genetics, provenance, rarity, and the irreplaceable time required to bring them to market-ready condition.\n\nThe Platinum Arowana, priced in the tens of thousands, is perhaps the most iconic entry in this collection — a fish so revered in Southeast Asian culture that it is insured, microchipped, and accompanied by lineage documentation rivaling that of a thoroughbred racehorse. The Peppermint Angelfish, harvested by specialist divers at depths exceeding 300 feet in the Cook Islands, appears on the open market only a handful of times per decade. The Gem Tang, once relatively common but now heavily restricted due to collection bans, commands prices that have tripled in the past five years alone.\n\nAt this level, our service is bespoke. A dedicated aquarist is assigned to your order the moment you purchase. They will contact you within two hours to confirm your tank parameters, review your acclimation setup, and coordinate a delivery window that ensures someone is home to receive the shipment. High-value fish travel in custom-built, reinforced shipping containers with redundant insulation, backup oxygen, and GPS tracking. We do not hand these fish to a carrier and hope for the best — we manage every link in the chain.\n\nOur 100% live arrival guarantee applies to every fish regardless of price. In the unlikely event that a luxury fish does not arrive in perfect condition, we replace it or refund the full purchase price. No deductibles, no depreciation adjustments, no arguments. When you invest at this level, the guarantee must be absolute — and ours is.',
    metaTitle:
      'Luxury Fish for Sale | Collector-Grade Rare Fish | The Fish Collection',
    metaDescription:
      'Luxury aquarium fish for serious collectors — platinum arowana, peppermint angelfish & more. From $1,000. Live arrival guaranteed. The Fish Collection.',
    filter: (p) => p.priceUSD >= 1000,
    faqs: [
      {
        question: 'How are luxury fish shipped at this price point?',
        answer:
          'High-value fish travel in custom-built, reinforced shipping containers with redundant insulation, backup oxygen supplies, and GPS tracking. A dedicated aquarist coordinates your delivery window to ensure someone is home to receive the shipment. We never hand a five-figure fish to a standard carrier — every link in the logistics chain is managed directly by our team.',
      },
      {
        question: 'What guarantee protects a luxury fish purchase?',
        answer:
          'Our 100% live arrival guarantee applies to every fish regardless of price — including fish valued at tens of thousands of dollars. If a luxury fish does not arrive alive and in perfect condition, we replace it with an equivalent animal or issue a full refund. No deductibles, no depreciation adjustments, no exceptions.',
      },
      {
        question: 'How should I acclimate a high-value fish?',
        answer:
          'A member of our aquarist team will call you before delivery to review your tank parameters and walk you through a species-specific acclimation protocol. In general, float the sealed container for 20 minutes to equalize temperature, then drip-acclimate over 60 to 90 minutes. For ultra-sensitive species, we may recommend dimming lights and isolating the fish in a quarantine tank for 24 to 48 hours before introducing it to the main display.',
      },
      {
        question: 'Are luxury fish like Arowana legal to purchase in the US?',
        answer:
          'Legality varies by species and state. Asian Arowanas are CITES Appendix I listed and their import is restricted under the US Endangered Species Act — The Fish Collection sells only to buyers in jurisdictions where ownership is permitted, with full CITES paperwork included. Other luxury species such as Gem Tang and Peppermint Angelfish are legal nationwide. Our compliance team verifies every order before shipment.',
      },
    ],
  },

  'catfish-for-sale': {
    title: 'Catfish for Sale',
    description:
      'The Fish Collection\'s catfish collection showcases some of the most charismatic and formidable bottom-dwellers in the freshwater aquarium world. The order Siluriformes encompasses an astonishing diversity of form — from the armored, algae-grazing plecos of Brazil\'s Rio Xingu to the massive predatory Red Tail Catfish that patrol the flooded forests of the Amazon basin. We have curated a selection that spans this spectrum, offering fish suited to planted community tanks, dedicated species displays, and large-format predator setups alike.\n\nWhat unites every catfish in our inventory is the standard of care applied before they reach your tank. Each fish is quarantined for a minimum of fourteen days upon arrival at our facility. During quarantine, we treat prophylactically for common catfish ailments — including bacterial infections, gill flukes, and the internal parasites that frequently accompany wild-caught Siluriformes. We transition every fish to a staple captive diet so it arrives at your door feeding confidently on readily available foods rather than requiring a stressful dietary adjustment.\n\nCatfish present unique shipping considerations due to their spines and stress responses. We use oversized bags to prevent spine punctures, double-bag every fish, and line the interior of each container with a protective foam sleeve. Oxygenated water, temperature-controlled insulation, and overnight express shipping ensure that even the most sensitive species — such as the Zebra Pleco, which demands pristine water quality — arrive in optimal condition.\n\nOur catalog ranges from the tank-busting Red Tail Catfish, which can exceed four feet in captivity and commands a 500-gallon-minimum display, to the exquisite Zebra Pleco, a six-inch jewel that thrives in a well-maintained 30-gallon setup. Every purchase includes our 100% live arrival guarantee and access to ongoing care support from our aquarist team. Browse the selection below and add some genuine character to your collection.',
    metaTitle: 'Catfish for Sale | Buy Exotic Catfish Online | The Fish Collection',
    metaDescription:
      'Buy exotic catfish online — red tail catfish, shovelnose tiger, irwini & more. Expert-bred, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'catfish',
    faqs: [
      {
        question: 'How are catfish safely shipped without spine damage?',
        answer:
          'Catfish are shipped in oversized, double-layered bags to prevent their spines from puncturing the packaging. Each bag is placed inside a foam-lined, insulated container with oxygenated water and a heat or cold pack. We ship overnight express only, and our packing protocol has been refined specifically for Siluriformes to ensure zero puncture-related losses.',
      },
      {
        question: 'Does the live arrival guarantee cover catfish?',
        answer:
          'Yes. Every catfish we sell — from a Zebra Pleco to a Red Tail Catfish — is covered by our unconditional 100% live arrival guarantee. If your catfish does not arrive alive and in good health, we will replace it or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team.',
      },
      {
        question: 'How should I acclimate catfish after delivery?',
        answer:
          'Float the sealed bag in your tank for 15 to 20 minutes to equalize temperature. Open the bag and drip-acclimate by adding small amounts of tank water over 30 to 45 minutes. Catfish are generally hardy acclimators, but species like Zebra Pleco benefit from an extended 60-minute drip phase due to their sensitivity to pH swings. Dim the tank lights for the first 12 hours to reduce stress.',
      },
      {
        question: 'Are exotic catfish legal to own in all US states?',
        answer:
          'The catfish species we sell are legal in the vast majority of US states. However, a small number of large predatory catfish species may be restricted in certain states that regulate non-native fish to protect local waterways. Each product page lists any applicable restrictions, and our compliance team confirms legality for your specific state before shipping.',
      },
    ],
  },

  'discus-fish-for-sale': {
    title: 'Buy Discus Fish Online',
    description:
      'No freshwater fish commands the reverence of a perfectly kept discus. Known universally as the King of the Aquarium, the genus Symphysodon has inspired generations of aquarists to master soft-water husbandry, refine their feeding regimens, and design tank environments that showcase these disc-shaped cichlids in all their chromatic glory. The Fish Collection\'s discus collection features hand-selected fish — from the electric Cobalt Blue Diamond to the painterly Pigeon Blood — each bred in the soft, acidic conditions that produce the deepest color saturation and cleanest patterning.\n\nDiscus are not beginner fish, and we make no apologies for saying so. They demand stable water chemistry — a temperature range of 82 to 86 degrees Fahrenheit, a pH between 5.5 and 6.8, and near-zero nitrogenous waste. They require multiple small feedings per day of high-protein food: beef heart blends, frozen bloodworms, and quality pellets formulated specifically for discus. They are social fish that thrive in groups of six or more, meaning a proper discus display starts at 75 gallons and scales up from there. What you receive in return for this commitment is a living aquarium centerpiece of unparalleled beauty — a fish that recognizes its keeper, feeds from your hand, and displays color so intense it seems impossible for a freshwater animal.\n\nEvery discus in our inventory has been quarantined for a minimum of twenty-one days — longer than our standard protocol — because discus are uniquely susceptible to internal parasites and hexamita infections that can be asymptomatic during shorter observation periods. We treat prophylactically, verify appetite and coloration stability, and transition each fish to a feeding schedule that mirrors what a conscientious keeper will maintain at home. When a discus leaves our facility, it is eating aggressively, displaying full color, and conditioned for the stress of overnight transit.\n\nShipping discus requires meticulous temperature control. These fish cannot tolerate drops below 78 degrees Fahrenheit without risk of stress-induced disease. We use heavy-duty heat packs, double-insulated containers, and route-specific weather calibration to maintain stable tropical temperatures throughout transit. Our 100% live arrival guarantee applies without reservation — if your discus does not arrive in perfect condition, we replace it or refund in full.',
    metaTitle:
      'Buy Discus Fish Online | Live Discus for Sale | The Fish Collection',
    metaDescription:
      'Buy discus fish online — cobalt blue, pigeon blood, wild-caught & more. Expert-bred in soft acidic water. Live arrival guaranteed. From $80. Free shipping.',
    filter: (p) => p.category === 'discus',
    faqs: [
      {
        question: 'How are discus fish shipped to maintain their temperature?',
        answer:
          'Discus cannot tolerate temperature drops below 78 degrees Fahrenheit, so we use heavy-duty heat packs, double-insulated containers, and route-specific weather calibration to maintain stable tropical temperatures throughout transit. We ship overnight express only and monitor weather forecasts along the transit route to determine the optimal ship date.',
      },
      {
        question: 'What does the live arrival guarantee cover for discus?',
        answer:
          'Every discus we sell is covered by our unconditional 100% live arrival guarantee. If your discus does not arrive alive and in visibly good health — displaying normal color and upright posture — we will replace it with an equivalent fish or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery.',
      },
      {
        question: 'How should I acclimate discus fish after delivery?',
        answer:
          'Float the sealed bag for 20 minutes to equalize temperature — this step is critical for discus. Then drip-acclimate by adding small amounts of your tank water over 60 to 90 minutes; discus are highly sensitive to pH and hardness changes. Keep tank lights off for the first six to eight hours and avoid feeding until the following day to allow the fish to settle without additional stress.',
      },
      {
        question: 'Are discus fish legal to buy and own in the US?',
        answer:
          'Discus (Symphysodon spp.) are fully legal to own, buy, and ship in all fifty US states. They are captive-bred tropical fish with no CITES restrictions or endangered-species designations. No permits or special documentation are required — your order ships with standard commercial invoicing.',
      },
    ],
  },

  'axolotl-for-sale': {
    title: 'Axolotl for Sale',
    description:
      'The Fish Collection\'s curated axolotl selection brings together the most sought-after color morphs of Ambystoma mexicanum — the captivating Mexican walking fish that has become one of the most popular exotic pets in the world. Our inventory includes the classic Leucistic with its pale pink body and feathery red gills, the striking Golden Albino with warm yellow-gold tones, and the mesmerizing GFP (Green Fluorescent Protein) varieties that glow vivid green under blue or UV light. Every axolotl we sell is premium captive-bred from established, genetically diverse bloodlines — never wild-caught.\n\nWe take axolotl husbandry seriously. Each specimen is raised in cool, pristine water between 60 and 68 degrees Fahrenheit, fed a high-protein diet of earthworms and pellets, and quarantined for a minimum of fourteen days before listing. We inspect for limb deformities, gill health, and appetite before any axolotl is approved for sale. When your axolotl ships, it travels in a temperature-controlled, insulated container via overnight express with our unconditional 100% live arrival guarantee. Whether you are a first-time keeper or a seasoned breeder expanding your colony, The Fish Collection is the trusted source for healthy, vibrant axolotls delivered safely to your door.',
    metaTitle: 'Axolotl for Sale | Buy Live Axolotls Online | The Fish Collection',
    metaDescription:
      'Buy axolotls online — Leucistic, Golden Albino & GFP varieties. Captive-bred, live arrival guaranteed. From $45. Free overnight shipping.',
    filter: (p) => p.category === 'axolotl',
    faqs: [
      {
        question: 'How are axolotls shipped safely?',
        answer:
          'Each axolotl is shipped in a temperature-controlled, double-insulated container with cold packs to maintain the cool water temperatures these animals require. We use overnight express shipping exclusively and include oxygenated water matched to the axolotl\'s holding parameters. Every order is backed by our 100% live arrival guarantee.',
      },
      {
        question: 'Is it legal to buy axolotls online in the United States?',
        answer:
          'Axolotls are legal to own in most US states. However, they are currently prohibited in California, New Jersey, Maine, and Virginia, and require a permit in New Mexico. Our compliance team verifies legality for your state before processing any order and will notify you if restrictions apply.',
      },
      {
        question: 'What do I need to set up an axolotl tank?',
        answer:
          'Axolotls thrive in a 20-gallon or larger aquarium with cool water maintained between 60 and 68 degrees Fahrenheit. They require a gentle filter, no direct lighting, and a fine sand substrate or bare bottom — gravel can be ingested and cause impaction. Feed a diet of earthworms, bloodworms, and sinking pellets two to three times per week.',
      },
    ],
  },

  'betta-fish-for-sale': {
    title: 'Betta Fish for Sale',
    description:
      'The Fish Collection specializes in rare and show-quality betta fish that you will not find at your local pet store. Our betta collection features exceptional specimens — Galaxy Koi Bettas with their marbled red, white, and blue patterns, Samurai Bettas displaying dramatic metallic dragon scaling, Alien Betta hybrids bred from wild Betta species for iridescent otherworldly coloration, and Giant Bettas that reach three to four inches in body length. Each betta is individually selected for finnage quality, color intensity, and overall health.\n\nEvery betta in our inventory is quarantined for a minimum of fourteen days, during which we verify appetite, inspect for fin damage and disease, and photograph the exact fish you will receive — no stock photos, no substitutions. Our bettas are conditioned on a varied diet of frozen bloodworms, brine shrimp, and premium pellets to ensure peak coloration and vitality upon arrival. Shipping is handled with meticulous care: each betta travels in an individual insulated container with a heat pack calibrated to current weather conditions, and every order ships overnight with our 100% live arrival guarantee. Whether you are building a show collection or seeking a stunning centerpiece for a planted nano tank, The Fish Collection delivers the rare bettas serious keepers demand.',
    metaTitle: 'Betta Fish for Sale | Buy Rare Bettas Online | The Fish Collection',
    metaDescription:
      'Buy rare betta fish online — Galaxy Koi, Samurai, Alien & Giant varieties. Show-quality, live arrival guaranteed. From $35. Free overnight shipping.',
    filter: (p) => p.category === 'betta',
    faqs: [
      {
        question: 'What rare betta varieties does The Fish Collection carry?',
        answer:
          'We specialize in hard-to-find varieties including Galaxy Koi, Samurai, Alien Betta hybrids, Giant Betta, Hellboy, and Copper Dragon. Our inventory rotates frequently as we source from top breeders in Thailand and Indonesia. Each fish is individually photographed so you see the exact betta you are purchasing.',
      },
      {
        question: 'How are betta fish shipped safely?',
        answer:
          'Each betta is shipped individually in an insulated container with a heat pack calibrated to real-time weather along the transit route. We use overnight express shipping exclusively and include oxygenated water at the correct temperature. Every betta order is protected by our unconditional 100% live arrival guarantee.',
      },
      {
        question: 'What basic care do rare bettas need?',
        answer:
          'Rare bettas require the same foundational care as any betta — a heated tank maintained at 76 to 82 degrees Fahrenheit, gentle filtration, and a varied diet of pellets and frozen foods. A 5-gallon or larger tank is recommended for a single betta. Giant Bettas benefit from a 10-gallon or larger setup due to their size. Avoid housing males together as they are territorial.',
      },
    ],
  },

  'goldfish-for-sale': {
    title: 'Luxury Goldfish for Sale',
    description:
      'The Fish Collection\'s goldfish collection is not what you remember from the county fair. We offer show-grade fancy goldfish — meticulously bred specimens that represent the highest tier of ornamental goldfish keeping. Our selection includes Ranchu with their distinctive lionhead wen growth and egg-shaped bodies, Thai Oranda prized for massive hood development and metallic scales, classic Oranda in red, calico, and blue colorways, regal Lionhead, and the deep-bodied Ryukin with flowing double tails. These are premium fish bred by specialist farms in Japan, Thailand, and China.\n\nEvery goldfish in our inventory is quarantined for a minimum of fourteen days upon arrival. During quarantine we treat for common goldfish ailments including flukes, ich, and bacterial infections, and transition each fish to a staple diet of sinking pellets and gel food. We inspect for body symmetry, wen development, and finnage quality — only fish that meet our show-grade standards are approved for sale. Goldfish ship in oversized bags with ample oxygenated water, double-insulated containers, and temperature packs calibrated to seasonal conditions. Our 100% live arrival guarantee covers every goldfish we sell. If you are serious about fancy goldfish, The Fish Collection is your source for specimens that compete at the highest level.',
    metaTitle:
      'Goldfish for Sale | Buy Show-Quality Goldfish Online | The Fish Collection',
    metaDescription:
      'Buy luxury goldfish online — Ranchu, Oranda, Lionhead & Thai Oranda. Show-grade specimens, live arrival guaranteed. From $60.',
    filter: (p) => p.category === 'goldfish',
    faqs: [
      {
        question: 'What is the difference between fancy goldfish and common goldfish?',
        answer:
          'Common goldfish are the slim-bodied, single-tailed fish most people recognize — hardy but bred for quantity, not quality. Fancy goldfish like Ranchu, Oranda, and Ryukin are selectively bred over generations for specific traits including body shape, wen development, finnage, and coloration. Show-grade specimens can take years to develop and are valued for their conformity to breed standards.',
      },
      {
        question: 'How are fancy goldfish shipped safely?',
        answer:
          'Each goldfish ships in an oversized bag with ample oxygenated water inside a double-insulated, temperature-controlled container. We include heat or cold packs calibrated to seasonal weather conditions and ship overnight express only. Goldfish are hardy shippers, but we take every precaution to ensure they arrive stress-free and in full color.',
      },
      {
        question: 'What tank setup do fancy goldfish require?',
        answer:
          'Fancy goldfish need a minimum of 20 gallons for the first fish and 10 additional gallons per fish after that. They prefer cooler water between 65 and 75 degrees Fahrenheit with strong filtration — goldfish are heavy waste producers. Avoid sharp decorations that can damage flowing fins, and use sand or smooth gravel as substrate. A well-maintained fancy goldfish can live 10 to 15 years or more.',
      },
    ],
  },

  'arowana-for-sale': {
    title: 'Arowana for Sale',
    description:
      'The Fish Collection\'s arowana collection represents the pinnacle of freshwater fishkeeping — a curated selection of the world\'s most revered predatory fish. The family Osteoglossidae includes some of the most visually striking and culturally significant aquarium species on the planet: the iridescent Silver Arowana of the Amazon basin, the prehistoric-looking Black Arowana, the coveted Jardini Arowana from Australia, and the legendary Asian Arowana varieties prized across Southeast Asia as symbols of prosperity and power. Each arowana in our inventory is hand-selected for body conformation, scale quality, and coloration that meets the exacting standards serious collectors demand.\n\nArowana husbandry is not for the faint of heart. These are large, powerful fish that require spacious accommodations — a minimum of 250 gallons for most species, with Silver Arowanas and Asian varieties ultimately demanding 500 gallons or more as they mature past two feet in length. They are apex predators that feed on pellets, shrimp, and market fish, and they possess a remarkable jumping ability that requires a secure, weighted lid on every tank. What they reward you with is a living centerpiece unlike anything else in the freshwater hobby — a fish that patrols its domain with effortless authority, recognizes its keeper, and displays coloration that shifts and deepens over years of dedicated care.\n\nEvery arowana we sell is quarantined for a minimum of twenty-one days upon arrival at our facility. During quarantine we monitor for anchor worm, gill flukes, and the drop-eye condition common in captive arowanas. We verify that each fish is feeding aggressively on a varied diet and displaying the confident, surface-patrolling behavior that indicates excellent health. Shipping is handled with extreme care: arowanas travel in oversized, reinforced bags inside custom-built insulated containers with oxygenated water and temperature regulation. Our 100% live arrival guarantee covers every arowana we sell — if your fish does not arrive alive and in excellent condition, we replace it or refund in full.',
    metaTitle: 'Arowana for Sale | Buy Arowana Online | The Fish Collection',
    metaDescription:
      'Buy arowana online — Silver, Black, Jardini & Asian varieties. Hand-selected, quarantined, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'arowana',
    faqs: [
      {
        question: 'How are arowanas shipped safely given their size?',
        answer:
          'Arowanas are shipped in oversized, reinforced bags inside custom-built insulated containers with ample oxygenated water. We use heavy-duty heat or cold packs calibrated to seasonal weather and ship overnight express only. Each bag is placed inside a rigid inner liner to prevent puncture from sudden movement during transit. Our packing protocol for arowanas has been refined over years to ensure zero losses.',
      },
      {
        question: 'Does the live arrival guarantee cover arowanas?',
        answer:
          'Yes. Every arowana we sell is covered by our unconditional 100% live arrival guarantee. If your arowana does not arrive alive and in good health, we will replace it with an equivalent specimen or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team immediately.',
      },
      {
        question: 'How should I acclimate an arowana after delivery?',
        answer:
          'Float the sealed bag in your tank for 20 minutes to equalize temperature. Then drip-acclimate by adding small amounts of tank water over 45 to 60 minutes. Arowanas are sensitive to sudden changes in pH and hardness, so a slow transition is essential. Keep the tank lights off for the first 12 to 24 hours and ensure the lid is securely weighted — arowanas are powerful jumpers, especially when stressed.',
      },
      {
        question: 'Are arowanas legal to own in the United States?',
        answer:
          'Silver Arowanas, Black Arowanas, and Jardini Arowanas are legal to own in most US states. Asian Arowanas (Scleropages formosus) are CITES Appendix I listed and their import into the United States is restricted under the Endangered Species Act. The Fish Collection sells Asian Arowanas only to buyers in jurisdictions where ownership is permitted and includes full CITES documentation with every order. Our compliance team verifies legality for your state before shipping.',
      },
    ],
  },

  'koi-for-sale': {
    title: 'Buy Koi Fish Online',
    description:
      'The Fish Collection\'s koi collection brings together some of the finest Nishikigoi available outside of Japan — hand-selected specimens bred for the vivid coloration, precise patterning, and robust body conformation that define championship-caliber koi. Our inventory spans the most celebrated varieties: the bold red-and-white Kohaku, the tri-color Sanke and Showa, the metallic brilliance of Ogon and Hikarimuji, and the ethereal platinum glow of the Gin Rin class. Whether you are stocking a new pond or adding a show-quality centerpiece to an established collection, every koi we offer has been evaluated against the same criteria used by Japanese breeders at the All Japan Koi Show.\n\nKoi keeping is a pursuit measured in decades, not months. These fish can live forty years or more and reach lengths exceeding three feet in well-maintained ponds. They require a minimum of 1,000 gallons per fish for proper development — serious collectors maintain ponds of 5,000 gallons and above — with robust biological filtration, aeration, and regular water changes. What they return for this investment is a living garden of color that deepens and evolves with each passing season, a fish that feeds from your hand and develops a genuine bond with its keeper.\n\nEvery koi in our inventory is quarantined for a minimum of twenty-one days upon arrival at our holding facility. During quarantine we treat prophylactically for Koi Herpesvirus exposure, bacterial infections, and parasites including costia and trichodina. We verify appetite, inspect skin and gill condition, and evaluate color stability before any fish is approved for sale. Koi ship in oversized, oxygenated bags inside insulated containers with temperature packs sized for the transit duration and seasonal conditions. Our 100% live arrival guarantee covers every koi we sell. The Fish Collection is the trusted source for serious koi collectors who demand verified quality and safe delivery.',
    metaTitle: 'Koi for Sale | Buy Koi Fish Online | The Fish Collection',
    metaDescription:
      'Buy koi fish online — Kohaku, Sanke, Showa, Ogon & more. Show-quality Nishikigoi, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'koi',
    faqs: [
      {
        question: 'How are koi fish shipped safely?',
        answer:
          'Each koi is shipped in an oversized, oxygenated bag inside a double-insulated container with heat or cold packs calibrated to current weather conditions. We ship overnight express only and size the bag and water volume to the specific fish to ensure ample oxygen and stable water chemistry throughout transit. Our 100% live arrival guarantee covers every koi order.',
      },
      {
        question: 'Does the live arrival guarantee cover koi?',
        answer:
          'Yes. Every koi we sell is protected by our unconditional 100% live arrival guarantee. If your koi does not arrive alive and in good health, we will replace it with an equivalent fish or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team.',
      },
      {
        question: 'How should I acclimate koi after delivery?',
        answer:
          'Float the sealed bag in your pond or quarantine tank for 20 to 30 minutes to equalize temperature. Open the bag and drip-acclimate by gradually adding pond water over 30 to 45 minutes. We strongly recommend holding new koi in a separate quarantine tank for two to three weeks before introducing them to your main pond to protect your existing collection from potential pathogens.',
      },
      {
        question: 'Are koi fish legal to buy and own in all US states?',
        answer:
          'Koi (Cyprinus rubrofuscus) are legal to buy, own, and ship in all fifty US states. They are domesticated ornamental fish with no CITES restrictions or endangered-species designations. Some municipalities may have local ordinances regarding outdoor pond construction or water features, but the fish themselves require no permits or special documentation.',
      },
    ],
  },

  'cichlid-for-sale': {
    title: 'Cichlid for Sale',
    description:
      'The Fish Collection\'s cichlid collection spans the extraordinary diversity of the family Cichlidae — from the electric blues and yellows of Lake Malawi\'s mbuna to the regal Frontosa of Lake Tanganyika, the fiery Oscar and Jack Dempsey of Central and South America, and the delicate Apistogramma dwarf cichlids prized by planted-tank enthusiasts. Cichlids are among the most intelligent and behaviorally complex fish in the freshwater hobby, displaying territorial aggression, pair bonding, and parental care that rival marine species in their sophistication. Our curated inventory focuses on species and color morphs that deliver maximum visual impact and behavioral interest.\n\nCichlid keeping rewards the aquarist who understands the specific water chemistry and social dynamics each species demands. African Rift Lake cichlids thrive in hard, alkaline water with pH values between 7.5 and 8.5, while South American species prefer soft, acidic conditions between 5.5 and 7.0. Tank size requirements range from a 20-gallon setup for a pair of Apistogramma to 125 gallons or more for a properly stocked mbuna community or a group of Frontosa. We provide detailed care guidance with every order to help you match species to your existing setup.\n\nEvery cichlid in our inventory is quarantined for a minimum of fourteen days upon arrival. During quarantine we treat prophylactically for Malawi bloat, hole-in-the-head disease, and the internal parasites that commonly accompany wild-caught and imported cichlids. We verify that each fish is feeding aggressively and displaying the bold coloration and confident behavior that signal excellent health. Cichlids are shipped in insulated containers with oxygenated water and temperature packs via overnight express. Our 100% live arrival guarantee covers every cichlid we sell — browse the collection below and discover why The Fish Collection is the go-to source for serious cichlid keepers.',
    metaTitle: 'Cichlids for Sale | Buy Cichlids Online | The Fish Collection',
    metaDescription:
      'Buy cichlids online — African, South American, dwarf & show-grade varieties. Quarantined, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'cichlid',
    faqs: [
      {
        question: 'How are cichlids shipped safely?',
        answer:
          'Each cichlid is shipped in an individually bagged, insulated container with oxygenated water and a heat or cold pack calibrated to current weather. Aggressive species are bagged separately to prevent injury during transit. We ship overnight express only, and our packing protocol accounts for the territorial nature of cichlids to ensure they arrive stress-free and in full color.',
      },
      {
        question: 'Does the live arrival guarantee cover cichlids?',
        answer:
          'Yes. Every cichlid we sell — from a two-inch Apistogramma to a twelve-inch Frontosa — is covered by our unconditional 100% live arrival guarantee. If your cichlid does not arrive alive and in good health, we will replace it or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team.',
      },
      {
        question: 'How should I acclimate cichlids after delivery?',
        answer:
          'Float the sealed bag in your tank for 15 to 20 minutes to equalize temperature. Open the bag and drip-acclimate by adding small amounts of tank water over 30 to 45 minutes. African Rift Lake cichlids are particularly sensitive to pH differences between shipping water and tank water, so a gradual transition is essential. Dim the lights and rearrange decorations before adding new cichlids to reduce territorial aggression from existing tank inhabitants.',
      },
      {
        question: 'Are exotic cichlids legal to own in all US states?',
        answer:
          'The cichlid species we sell are legal in all fifty US states. Cichlids are widely kept ornamental fish with no CITES restrictions or federal endangered-species designations affecting the species in our inventory. A small number of states restrict certain non-native fish species to protect local ecosystems — our compliance team confirms legality for your state before processing each order.',
      },
    ],
  },

  'stingray-for-sale': {
    title: 'Stingray for Sale',
    description:
      'The Fish Collection\'s freshwater stingray collection features some of the most spectacular and sought-after specimens in the aquarium trade. The genus Potamotrygon — native to the river systems of South America — produces freshwater rays of breathtaking beauty: the obsidian-black body of the Black Diamond Stingray studded with brilliant white spots, the honeycomb patterning of the Motoro, the dramatic contrast of the Pearl Stingray, and the ultra-rare Leopoldi hybrid crosses that command premium prices among collectors worldwide. These are not casual pets — they are living works of art that transform any large aquarium into a world-class display.\n\nStingray keeping demands serious commitment. These bottom-dwelling elasmobranchs require a minimum of 180 gallons for a single juvenile, with adults of most species eventually needing 300 to 500 gallons or more. Tank footprint matters more than height — a wide, shallow tank with a fine sand substrate is ideal. Stingrays are messy eaters that produce significant bioload, requiring robust filtration and frequent water changes to maintain the pristine, low-nitrate conditions they demand. They feed on a diet of earthworms, shrimp, silversides, and quality pellets, and they are surprisingly interactive — many keepers report that their rays learn to recognize them and beg for food at the surface.\n\nEvery stingray in our inventory is quarantined for a minimum of twenty-one days upon arrival. During quarantine we treat prophylactically for internal and external parasites, monitor for the bacterial infections that commonly affect wild-caught rays, and verify that each specimen is feeding aggressively on captive-appropriate foods. Stingrays are shipped in oversized, reinforced bags with ample oxygenated water inside rigid, insulated containers to prevent barb punctures. Temperature packs are calibrated for the transit route and current weather. Our 100% live arrival guarantee covers every stingray we sell — The Fish Collection is the trusted source for collectors who demand verified-healthy rays delivered safely to their door.',
    metaTitle: 'Stingrays for Sale | Buy Stingrays Online | The Fish Collection',
    metaDescription:
      'Buy freshwater stingrays online — Black Diamond, Motoro, Pearl & more. Quarantined, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'stingray',
    faqs: [
      {
        question: 'How are freshwater stingrays shipped safely?',
        answer:
          'Stingrays are shipped in oversized, reinforced bags placed inside rigid, insulated containers to prevent barb-related punctures during transit. Each bag contains ample oxygenated water and is cushioned with foam padding. We include heat or cold packs calibrated to seasonal weather and ship overnight express only. Our packing protocol for stingrays has been refined specifically for elasmobranchs to ensure safe delivery.',
      },
      {
        question: 'Does the live arrival guarantee cover stingrays?',
        answer:
          'Yes. Every freshwater stingray we sell is covered by our unconditional 100% live arrival guarantee. If your stingray does not arrive alive and in good condition — displaying normal disc posture and responsive movement — we will replace it or issue a full refund. Photograph the ray in the unopened bag within two hours of delivery and contact our team immediately.',
      },
      {
        question: 'How should I acclimate a stingray after delivery?',
        answer:
          'Float the sealed bag in your tank for 20 minutes to equalize temperature. Then drip-acclimate by adding small amounts of tank water over 60 to 90 minutes — stingrays are highly sensitive to changes in pH, hardness, and nitrate levels. Transfer the ray to the tank using a soft net or by gently guiding it out of the bag. Keep lights off for the first 12 to 24 hours and offer food only after the ray has settled and begun exploring the substrate.',
      },
      {
        question: 'Are freshwater stingrays legal to own in the United States?',
        answer:
          'Freshwater stingrays are legal to own in most US states. However, they are currently prohibited in Arizona, Arkansas, California, Florida, Georgia, Hawaii, Mississippi, Nevada, Oklahoma, Texas, and Utah, among others. Regulations change periodically, so our compliance team verifies legality for your specific state before processing every order and will notify you of any restrictions.',
      },
    ],
  },

  'piranha-for-sale': {
    title: 'Piranha for Sale',
    description:
      'The Fish Collection\'s piranha collection brings together the most impressive species of the subfamily Serrasalminae — the notorious predators of South America\'s river systems that have captivated aquarists and nature enthusiasts for generations. Our inventory features the classic Red-Bellied Piranha with its silvery body and vivid crimson underside, the imposing Black Piranha (Serrasalmus rhombeus) prized by serious predator keepers for its raw power and dark metallic coloration, and the spectacular Piraya Piranha — the largest piranha species, reaching over 18 inches and displaying stunning red and gold tones. These are not novelty fish — they are apex predators that demand respect, proper housing, and experienced care.\n\nPiranha keeping requires a clear understanding of these animals\' social dynamics and physical needs. Red-Bellied Piranhas are shoaling fish that should be kept in groups of five or more in tanks of 125 gallons minimum, while the solitary Black Piranha and Piraya require dedicated single-specimen setups of 75 gallons or larger. All piranhas produce significant waste and require robust filtration with frequent water changes to maintain low nitrate levels. They feed on a diet of raw fish fillets, shrimp, earthworms, and quality pellets — we wean every piranha onto captive-appropriate foods before listing to ensure a smooth transition to your care.\n\nEvery piranha in our inventory is quarantined for a minimum of fourteen days upon arrival. During quarantine we treat prophylactically for the internal parasites and bacterial infections common in wild-caught Serrasalminae, verify that each fish is feeding aggressively, and assess body condition and fin integrity. Piranhas are shipped in oversized, opaque bags to minimize stress, inside insulated containers with oxygenated water and temperature regulation. Our 100% live arrival guarantee covers every piranha we sell. Explore the collection below and add one of the aquarium world\'s most legendary predators to your setup.',
    metaTitle: 'Piranha for Sale | Buy Piranhas Online | The Fish Collection',
    metaDescription:
      'Buy piranhas online — Red-Bellied, Black, Piraya & more. Quarantined, feeding on captive diet, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'piranha',
    faqs: [
      {
        question: 'How are piranhas shipped safely?',
        answer:
          'Each piranha is shipped in an oversized, opaque bag to minimize visual stress, inside an insulated container with oxygenated water and a heat or cold pack calibrated to current weather. Piranhas are bagged individually to prevent aggression during transit. We ship overnight express only, and our packing protocol accounts for the powerful bite force of these fish to prevent bag punctures.',
      },
      {
        question: 'Does the live arrival guarantee cover piranhas?',
        answer:
          'Yes. Every piranha we sell — from a juvenile Red-Bellied to an adult Piraya — is covered by our unconditional 100% live arrival guarantee. If your piranha does not arrive alive and in good health, we will replace it or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team.',
      },
      {
        question: 'How should I acclimate piranhas after delivery?',
        answer:
          'Float the sealed bag in your tank for 15 to 20 minutes to equalize temperature. Open the bag and drip-acclimate by adding small amounts of tank water over 30 to 45 minutes. When transferring the piranha to the tank, use a net with caution — piranhas can bite through thin netting. Dim the tank lights for the first 12 hours and do not attempt to feed until the following day to allow the fish to acclimate without additional stress.',
      },
      {
        question: 'Are piranhas legal to own in the United States?',
        answer:
          'Piranha legality varies by state. They are legal to own in many states including New York, New Jersey, and most of the Midwest and Northeast. However, piranhas are prohibited in California, Arizona, Texas, Florida, Hawaii, and several other states that restrict non-native predatory fish. Our compliance team verifies legality for your specific state before processing every order.',
      },
    ],
  },

  'pufferfish-for-sale': {
    title: 'Pufferfish for Sale',
    description:
      'The Fish Collection\'s pufferfish collection showcases some of the most intelligent, personable, and visually distinctive fish available in the freshwater and brackish aquarium hobby. Pufferfish — members of the family Tetraodontidae — are renowned for their curious, dog-like personalities, their ability to recognize and interact with their keepers, and the remarkable inflation defense mechanism that makes them unlike anything else in your tank. Our inventory features the vibrant Fahaka Puffer from the Nile basin, the spotted charm of the Green Spotted Puffer, the tiny but ferocious Pea Puffer ideal for nano setups, and the imposing Mbu Puffer — one of the largest freshwater puffers in the world, reaching over two feet in length.\n\nPufferfish care varies significantly by species, but all puffers share one critical dietary requirement: hard-shelled foods. Snails, clams, mussels, and shrimp with shell intact are essential for wearing down the continuously growing beak-like teeth that define the order Tetraodontiformes. Without regular access to these foods, a puffer\'s teeth will overgrow and require manual trimming — a stressful procedure best avoided through proper diet. Tank requirements range from a 5-gallon setup for a single Pea Puffer to 500 gallons or more for an adult Mbu Puffer. Many species require brackish water, and we provide detailed care sheets with every order specifying the exact salinity, pH, and temperature parameters your species requires.\n\nEvery pufferfish in our inventory is quarantined for a minimum of fourteen days upon arrival. During quarantine we treat for the internal parasites that commonly accompany wild-caught puffers, verify that each specimen is feeding on captive-appropriate hard-shelled foods, and assess tooth condition. Puffers are shipped in opaque bags to minimize stress — these fish are prone to inflation when startled, and darkness during transit helps prevent this. Each order ships overnight in insulated containers with our 100% live arrival guarantee. Discover what makes pufferfish the most engaging freshwater fish you will ever keep.',
    metaTitle: 'Pufferfish for Sale | Buy Puffers Online | The Fish Collection',
    metaDescription:
      'Buy pufferfish online — Fahaka, Green Spotted, Pea Puffer & Mbu. Quarantined, feeding well, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'pufferfish',
    faqs: [
      {
        question: 'How are pufferfish shipped without triggering inflation?',
        answer:
          'Pufferfish are shipped in opaque bags to minimize visual stimulation and prevent the stress-triggered inflation response. Each bag is placed in a dark, insulated container with oxygenated water and a temperature pack. We ship overnight express only and use extra-large bags to provide ample water volume in case of minor inflation during handling. Our packing protocol has been specifically refined for Tetraodontidae.',
      },
      {
        question: 'Does the live arrival guarantee cover pufferfish?',
        answer:
          'Yes. Every pufferfish we sell is covered by our unconditional 100% live arrival guarantee. If your pufferfish does not arrive alive and in good health, we will replace it or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team. This guarantee applies to all species from Pea Puffers to Mbu Puffers.',
      },
      {
        question: 'How should I acclimate a pufferfish after delivery?',
        answer:
          'Keep the bag in darkness and float it in your tank for 15 to 20 minutes to equalize temperature. Open the bag and drip-acclimate by adding small amounts of tank water over 45 to 60 minutes — pufferfish are sensitive to salinity and pH changes. Transfer the puffer gently without exposing it to air, as air ingestion during netting can cause inflation. Keep lights off for the first 12 hours and offer food only after the puffer is exploring comfortably.',
      },
      {
        question: 'Are pufferfish legal to own in all US states?',
        answer:
          'The freshwater and brackish pufferfish species we sell are legal to own in all fifty US states. They carry no CITES restrictions or federal endangered-species designations. Some species such as the Fahaka Puffer are classified as invasive risks in certain southern states with warm waterways — our compliance team verifies legality for your specific state before shipping every order.',
      },
    ],
  },

  'pleco-for-sale': {
    title: 'Pleco for Sale',
    description:
      'The Fish Collection\'s pleco collection features the most coveted species and variants of the family Loricariidae — the armored catfish of South America that have become some of the most prized fish in the freshwater aquarium hobby. Far beyond the common pleco found at big-box pet stores, our inventory showcases true collector-grade specimens: the legendary Zebra Pleco (L046) with its striking black-and-white banding, the brilliantly patterned Snowball Pleco (L201), the massive and majestic Royal Pleco (L190) with its intricate maze-like markings, the vivid orange and black of the Cactus Pleco (L177), and the rare Blue Phantom Pleco (L128) with its ethereal blue-grey coloration. Each pleco we sell is individually evaluated for pattern quality, body condition, and feeding response.\n\nPleco care requirements vary dramatically by species. The Zebra Pleco is a shy, carnivorous cave-dweller that thrives in a 30-gallon tank with warm water between 82 and 86 degrees Fahrenheit, strong flow, and a diet of frozen bloodworms and protein-rich pellets. The Royal Pleco, by contrast, is a wood-eating herbivore that requires driftwood in its tank as both a food source and shelter, prefers slightly cooler water, and can grow to over 16 inches in a 125-gallon or larger setup. We provide species-specific care sheets with every order to ensure your pleco thrives from day one.\n\nEvery pleco in our inventory is quarantined for a minimum of fourteen days upon arrival. During quarantine we treat prophylactically for the bacterial infections and internal parasites that commonly accompany wild-caught Loricariidae, and we transition each fish to a reliable captive diet. Plecos are shipped in oversized bags with foam-lined inner packaging to protect their armored scutes and prevent injury during transit. Each order ships overnight in temperature-controlled, insulated containers with our 100% live arrival guarantee. Whether you are seeking a rare L-number for your collection or a showpiece pleco for a planted display, The Fish Collection delivers verified-quality specimens to your door.',
    metaTitle: 'Plecos for Sale | Buy Rare Plecos Online | The Fish Collection',
    metaDescription:
      'Buy rare plecos online — Zebra, Snowball, Royal, Blue Phantom & more. L-number specialists, live arrival guaranteed. Free overnight shipping.',
    filter: (p) => p.category === 'pleco',
    faqs: [
      {
        question: 'How are plecos shipped safely?',
        answer:
          'Each pleco is shipped in an oversized bag with foam-lined inner packaging to protect their armored bodies and prevent abrasion during transit. The bag is placed inside an insulated container with oxygenated water and a heat or cold pack calibrated to current weather conditions. We ship overnight express only. Sensitive species like the Zebra Pleco receive extra water volume and extended oxygen saturation to ensure pristine conditions upon arrival.',
      },
      {
        question: 'Does the live arrival guarantee cover plecos?',
        answer:
          'Yes. Every pleco we sell — from a Zebra Pleco to a Royal Pleco — is covered by our unconditional 100% live arrival guarantee. If your pleco does not arrive alive and in good health, we will replace it with an equivalent specimen or issue a full refund. Photograph the fish in the unopened bag within two hours of delivery and contact our team.',
      },
      {
        question: 'How should I acclimate a pleco after delivery?',
        answer:
          'Float the sealed bag in your tank for 15 to 20 minutes to equalize temperature. Open the bag and drip-acclimate by adding small amounts of tank water over 30 to 45 minutes. Plecos from warm-water habitats such as the Zebra Pleco benefit from an extended 60-minute drip phase to gradually adjust to your tank\'s parameters. Dim the lights for the first 12 hours and provide hiding spots — most plecos are nocturnal and will settle more quickly when caves or driftwood shelters are available.',
      },
      {
        question: 'Are rare plecos legal to own in all US states?',
        answer:
          'The pleco species we sell are legal to own in all fifty US states. Loricariidae are widely kept ornamental fish with no CITES restrictions or federal endangered-species designations affecting the species in our inventory. Some species like the Zebra Pleco (L046) are export-restricted from Brazil, but captive-bred specimens and legally imported individuals are fully legal to buy and own in the United States.',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const collection = collections[params.slug];
  if (!collection) return {};
  return buildMetadata({
    title: collection.metaTitle,
    description: collection.metaDescription,
    path: `/buy/${params.slug}/`,
    lang: params.lang,
  });
}

export const revalidate = 600;

export default async function BuyCollectionPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const dict = await getDictionary(params.lang as Lang);
  const collection = collections[params.slug];
  if (!collection) {
    return <p>Collection not found.</p>;
  }

  const filtered = collection.filter
    ? products.filter(collection.filter)
    : products;

  const faqs = collection.faqs;

  return (
    <>
      <JsonLd data={[organizationSchema, buildFAQ(faqs)]} />
      <div className="page-container py-6">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: collection.title, href: `/buy/${params.slug}/` },
          ]}
        />

        {/* Header */}
        <section className="mb-12">
          <h1 className="font-heading text-h1 md:text-display-md tracking-tight text-ink mb-2">
            {collection.title}
          </h1>
          <p className="font-body text-base text-deep-text leading-relaxed max-w-readable mt-6 whitespace-pre-line">
            {collection.description}
          </p>
        </section>

        {/* Filterable product grid */}
        <ProductGrid products={filtered} lang={params.lang} />

        {/* FAQs */}
        <section className="mt-20 max-w-readable">
          <div className="w-12 h-[2px] bg-lagoon/40 mx-auto mb-8" />
          <h2 className="font-heading text-h2 text-ink mb-6">
            {dict.product?.frequentlyAskedQuestions ?? 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="faq-accordion border border-mist rounded-md"
              >
                <summary className="flex items-center justify-between px-5 py-4 font-heading text-lg text-ink cursor-pointer hover:bg-reef/60 transition-colors">
                  {faq.question}
                </summary>
                <div className="px-5 pb-4">
                  <p className="font-body text-base text-deep-text leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Trust bar */}
        <section className="mt-16 pt-12 border-t border-mist">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: dict.trust?.liveArrival ?? 'Live Arrival Guaranteed',
                detail: dict.trust?.liveArrivalDesc ?? 'Every fish, every order. No exceptions.',
              },
              {
                title: dict.trust?.freeShipping ?? 'Free Overnight Shipping',
                detail: dict.trust?.freeShippingDesc ?? 'Temperature-controlled, insulated transit.',
              },
              {
                title: dict.common?.expertSupport ?? 'Expert Support',
                detail: 'Ongoing care guidance from our aquarists.',
              },
            ].map((signal) => (
              <div key={signal.title}>
                <p className="font-heading text-label tracking-widest text-ink mb-1 uppercase font-semibold">
                  {signal.title}
                </p>
                <p className="font-body text-sm text-wade">
                  {signal.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
