import type { Article } from '@/types/article';

export const speciesGuides: Article[] = [
  // ─────────────────────────────────────────────
  // 1. Platinum Arowana
  // ─────────────────────────────────────────────
  {
    title: 'Platinum Arowana Care Guide',
    slug: 'platinum-arowana',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-01-15',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/platinum-arowana-hero.jpg',
    heroImageAlt:
      'Adult Platinum Arowana displaying its iconic metallic silver-white scales in a dimly lit aquarium',
    metaTitle:
      'Platinum Arowana (Scleropages formosus): Complete Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete Platinum Arowana care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion:
      'What is the best way to care for a Platinum Arowana?',
    quickAnswer:
      'Platinum Arowana require a minimum 300-gallon aquarium with a tight-fitting weighted lid, soft acidic water (pH 6.0–7.0, 26–30 °C), and a protein-rich diet of market shrimp, crickets, and high-quality pellets. They are solitary predators best kept alone or with robust, bottom-dwelling tank mates such as large Plecostomus or Bichirs.',
    summary:
      'The Platinum Arowana is the single most coveted freshwater fish in the collector market, with verified sales exceeding $400,000 for flawless specimens. A naturally occurring leucistic variant of the Asian Arowana (Scleropages formosus), it demands expert-level husbandry, a spacious aquarium, and strict adherence to CITES documentation. This guide covers every aspect of Platinum Arowana care — from water chemistry and tank dimensions to diet protocols and common pathologies — drawing on The Fish Collection\'s 15 years of hands-on breeding and trading experience.',
    scientificName: 'Scleropages formosus',
    category: 'arowana',
    keyFacts: [
      { label: 'Scientific Name', value: 'Scleropages formosus (leucistic variant)' },
      { label: 'Max Size', value: '90 cm (35 in)' },
      { label: 'Tank Size', value: '300 gallons (1,135 L) minimum' },
      { label: 'Temperature', value: '26–30 °C (78–86 °F)' },
      { label: 'pH', value: '6.0–7.0' },
      { label: 'Care Level', value: 'Expert' },
      { label: 'Lifespan', value: '20–25 years in captivity' },
      { label: 'Diet', value: 'Carnivore — live and prepared protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Material', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'drop-eye', text: 'Drop Eye', level: 3 },
      { id: 'gill-curl', text: 'Gill Curl', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Platinum Arowana is the leucistic expression of the Asian Arowana (<em>Scleropages formosus</em>), a CITES Appendix I species whose wild populations span the blackwater peat swamps of Southeast Asia. Unlike albino variants, true Platinums retain dark eye pigmentation while their body scales display a uniform, mirror-finish white-silver colouration that intensifies with age. The genetic mutation responsible is recessive, making captive production of verified Platinums extraordinarily rare — fewer than a dozen certified breeding facilities worldwide can produce them with any consistency.</p>
<p>At The Fish Collection, we have handled Platinum Arowana since 2012 and maintain direct relationships with CITES-licensed farms in Malaysia and Indonesia. Every specimen we sell ships with a microchip-verified CITES certificate, a DNA parentage report, and a veterinary health clearance dated within 72 hours of dispatch. This guide distils our first-hand experience into a practical care manual for collectors who understand that owning this fish is a decades-long commitment.</p>
<p>Because the Platinum Arowana commands prices that rival fine art, the aquarium infrastructure must be treated with equal seriousness. Cutting corners on tank size, filtration, or water quality will not only compromise the fish's health but can diminish the very colouration that makes the specimen valuable. We have seen too many collectors lose six-figure fish to preventable husbandry errors; this guide exists to ensure you are not among them.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Scleropages formosus</em> inhabit slow-moving blackwater rivers, peat swamp forests, and floodplain lakes across Peninsular Malaysia, Borneo, Sumatra, and portions of mainland Southeast Asia. These environments are defined by exceptionally soft water — total dissolved solids often below 20 ppm — with a pH that can dip as low as 4.0 during the wet season. The water is heavily tannin-stained, reducing light penetration and creating the dim conditions Arowana prefer.</p>
<p>Surface temperatures in these habitats range from 26 °C to 32 °C, with negligible seasonal variation owing to the equatorial climate. The substrate is typically a deep layer of decomposing leaf litter over peat, and overhead canopy limits direct sunlight. Arowana are surface-oriented predators; in the wild they patrol the upper water column, striking insects, frogs, and small birds that venture too close to the surface.</p>
<p>Understanding this ecology is critical because it explains the species' behavioural needs in captivity. Platinum Arowana require low-to-moderate lighting, minimal surface agitation (they are gulp-breathers that supplement dissolved oxygen with atmospheric air), and a long, unobstructed swimming lane at the surface. Aquascaping that blocks their patrol route or forces them into open, brightly lit conditions will trigger chronic stress and colour fade.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Material</h3>
<p>A single adult Platinum Arowana requires a minimum aquarium of 300 gallons (1,135 litres), with internal dimensions of at least 240 cm long × 75 cm wide × 60 cm tall (96 × 30 × 24 inches). Length and width matter far more than height — Arowana are surface fish that rarely venture below mid-water. For collectors housing a specimen they intend to keep for its full 20+ year lifespan, we recommend a 500-gallon (1,900 L) system measuring 300 × 90 × 70 cm.</p>
<p>Glass thickness should be a minimum of 19 mm (¾ in) for tanks under 400 gallons, and 25 mm (1 in) for larger builds. Many serious keepers opt for acrylic, which is lighter and offers superior optical clarity, though it scratches more easily. The tank <strong>must</strong> have a heavy, secure lid — Arowana are notorious jumpers capable of clearing 1.5 metres. Use a weighted glass or polycarbonate canopy with no gaps wider than 5 mm.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Biological filtration capacity should target a turnover rate of 8–10× the tank volume per hour. For a 300-gallon system, this means a combined pump output of approximately 9,000–11,000 litres per hour. A large sump (80–120 gallons) housing ceramic bio-media, a fluidised K1 moving-bed reactor, and a 57-watt UV steriliser is the gold standard. Canister filters are acceptable as supplementary mechanical filtration but should not be the primary biological stage.</p>
<p>Surface agitation must be kept gentle. Direct the sump return along the back wall and angled slightly downward to avoid disrupting the surface film. A surface skimmer is advisable to remove the protein film that accumulates in predator tanks fed a high-protein diet. Maintain ammonia and nitrite at 0 ppm at all times — Arowana are intolerant of any measurable nitrogenous waste. Nitrate should be held below 20 ppm through a disciplined 25–30% weekly water-change regime.</p>

<h3 id="lighting">Lighting</h3>
<p>Platinum Arowana display best under low-to-moderate lighting in the 6,500–8,000 K colour temperature range. Excessive blue-spectrum lighting (>10,000 K) will wash out the fish's metallic lustre. Many keepers use dimmable LED bars set to 40–60% intensity on an 8–10 hour photoperiod. Tanning LEDs (red/amber spectrum supplementation) can intensify the reflective quality of Platinum scales without the heat output of traditional metal halide fixtures.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Maintaining stable water chemistry is non-negotiable. Target the following ranges:</p>
<ul>
<li><strong>Temperature:</strong> 26–30 °C (78–86 °F). Use a titanium inline heater rated for your tank volume; avoid submersible glass heaters, which Arowana can shatter.</li>
<li><strong>pH:</strong> 6.0–7.0. Stability matters more than hitting the low end. A pH swing of more than 0.3 units in 24 hours is more dangerous than a steady pH of 7.2.</li>
<li><strong>General Hardness (GH):</strong> 1–8 dGH (18–140 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 1–5 dKH. Low KH provides the soft conditions Arowana prefer but requires careful buffering to prevent pH crashes. Maintain at least 2 dKH for safety.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. In heavily stocked predator tanks, twice-weekly water changes may be necessary.</li>
<li><strong>TDS:</strong> 50–150 ppm. Use an RO/DI unit if your municipal supply exceeds 200 ppm TDS.</li>
</ul>
<p>Perform water changes with temperature-matched, dechlorinated water. Arowana are sensitive to chloramine — if your water utility uses chloramine, treat replacement water with a dedicated chloramine neutraliser (sodium thiosulfate alone is insufficient). We recommend Seachem Prime or equivalent at double the label dose for chloramine-treated supply.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Platinum Arowana are obligate carnivores. In the wild, their diet consists primarily of terrestrial insects, small amphibians, crustaceans, and surface-dwelling fish. In captivity, a varied diet is essential both for nutrition and to maintain the feeding response that keeps Arowana active and alert.</p>
<p>A balanced weekly feeding schedule for an adult specimen (50+ cm) might include:</p>
<ul>
<li><strong>Monday/Thursday:</strong> 4–6 large market prawns (shell-on, deveined, heads removed) supplemented with a vitamin soak (Brightwell Aquatics Vitamarin-M or equivalent).</li>
<li><strong>Tuesday/Friday:</strong> 15–20 gut-loaded crickets or superworms. Gut-load with high-carotenoid vegetables (carrot, sweet potato) 24 hours prior to feeding.</li>
<li><strong>Wednesday:</strong> High-quality Arowana pellets — Hikari Arowana Sticks or Northfin Arowana Formula. Offer 8–12 pellets per session.</li>
<li><strong>Saturday:</strong> 2–3 small feeder frogs (captive-bred only — never wild-caught, which carry parasites) or a single thawed silversides fillet.</li>
<li><strong>Sunday:</strong> Fast day. Fasting supports digestive health and reduces nitrate output.</li>
</ul>
<p>Avoid feeder goldfish entirely. They are nutritionally poor, carry disease, and their thiaminase content degrades vitamin B1 over time. If you must feed live fish, use captive-bred guppies or mollies quarantined for a minimum of 14 days.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Platinum Arowana are solitary, territorial apex predators. In the confined space of even a large aquarium, they will not tolerate conspecifics — housing two Arowana together almost invariably results in severe injury or death to the subordinate fish. They are intelligent and will recognise their keeper, often surfacing to greet the person who feeds them while remaining wary of strangers.</p>
<p>Arowana patrol the surface in a continuous circuit. A tank that is too short forces them to turn constantly, which over time can lead to spinal deformities and the dreaded "drop eye" condition. This is why we stress minimum tank lengths of 240 cm — and strongly prefer 300 cm for adult fish.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must be large enough to avoid predation (anything under 15 cm will be eaten), robust enough to withstand an occasional territorial display, and occupy the mid-to-bottom water column so they do not compete for surface territory. Proven companions include:</p>
<ul>
<li><strong>Plecostomus</strong> — Common Pleco, Royal Pleco, or Sailfin Pleco (30+ cm adults).</li>
<li><strong>Bichirs</strong> — <em>Polypterus endlicherii</em> or <em>P. ornatipinnis</em>. Their armoured scales provide protection from Arowana strikes.</li>
<li><strong>Large catfish</strong> — Red Tail Catfish (<em>Phractocephalus hemioliopterus</em>), though only in 500+ gallon systems.</li>
<li><strong>Freshwater stingrays</strong> — Motoro or Black Diamond rays pair well in wide tanks (90+ cm front to back).</li>
<li><strong>Silver Dollars</strong> — A school of 8+ adult <em>Metynnis hypsauchen</em> can serve as dither fish in very large systems.</li>
</ul>
<p>Avoid all cichlids except the most placid species (Severums, Geophagus). Oscars are too confrontational, and Flowerhorn will actively challenge the Arowana for dominance.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of Platinum Arowana is almost exclusively conducted by licensed farms in Southeast Asia operating under CITES-authorised programmes. The species is a paternal mouthbrooder: after the female deposits 30–60 large (12–15 mm diameter) eggs, the male incubates them in his buccal cavity for 60–90 days. During this period, the male does not eat.</p>
<p>Producing Platinum offspring requires pairing two heterozygous carriers of the leucistic gene. Statistically, only 25% of the resulting fry will express the full Platinum phenotype. Farms typically raise fry to 15–20 cm before grading — specimens that fail to maintain uniform Platinum colouration are sold as standard Golden or Silver-grade Arowana.</p>
<p>Home breeding is not feasible for the vast majority of keepers. It requires multiple ponds exceeding 5,000 gallons, precise manipulation of seasonal flood cycles via water-level changes, and years of conditioning paired adults. If you are interested in breeding-programme investment, The Fish Collection can connect you with licensed facilities that accept partner capital.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="drop-eye">Drop Eye</h3>
<p>Drop eye is a condition in which one or both eyes rotate permanently downward. The exact aetiology is debated, but contributing factors include tanks that are too shallow (the fish looks down at substrate-level activity), excessive overhead lighting, and high-fat diets that cause retroorbital fat accumulation. Prevention is straightforward: maintain a minimum water depth of 55 cm, position tank mates that move in the mid-to-upper column, and avoid fatty feeder fish. Surgical correction exists but carries anaesthetic risk and is not guaranteed to be permanent.</p>

<h3 id="gill-curl">Gill Curl</h3>
<p>Gill curl occurs when the gill plates warp outward, exposing the delicate gill filaments. Poor water quality — specifically chronically elevated nitrate (>40 ppm) or pH instability — is the primary cause. Early-stage gill curl can sometimes be reversed by improving water quality and increasing dissolved oxygen. Advanced cases require surgical trimming of the gill plate under anaesthesia by a qualified aquatic veterinarian.</p>
<p>Other conditions to monitor include anchor worm (<em>Lernaea</em>), Aeromonas bacterial infections (presenting as red ulcers), and internal parasites from wild-caught feeder organisms. A prophylactic quarantine period of 4–6 weeks with observation is advisable for any new Arowana, even from trusted sources.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a Platinum Arowana cost?',
        answer:
          'Authentic Platinum Arowana with CITES documentation typically range from $10,000 for juvenile specimens (15–20 cm) to over $400,000 for flawless adults with verified lineage. Price depends on colouration uniformity, body conformation, and provenance. Be extremely cautious of specimens priced below $5,000 — they are almost certainly mislabelled Silver or albino variants.',
      },
      {
        question: 'Is it legal to own a Platinum Arowana?',
        answer:
          'Asian Arowana are listed on CITES Appendix I, meaning international trade is restricted to captive-bred specimens from registered facilities. In the United States, the Endangered Species Act prohibits all import, export, and interstate commerce of Scleropages formosus. In the EU, UK, Canada, and most Asian countries, ownership is legal with proper CITES documentation. Always verify your country and state regulations before purchasing.',
      },
      {
        question: 'What size tank does a Platinum Arowana need?',
        answer:
          'A single adult Platinum Arowana requires a minimum 300-gallon (1,135 L) aquarium measuring at least 240 cm long by 75 cm wide. For optimal long-term health and to prevent drop eye and spinal deformity, a 500-gallon (1,900 L) system measuring 300 × 90 × 70 cm is strongly recommended.',
      },
      {
        question: 'Can you keep two Arowana together?',
        answer:
          'Keeping two Arowana together in a standard aquarium is extremely risky. Arowana are solitary, territorial predators. In ponds exceeding 3,000 gallons, groups of 5 or more (never pairs) can sometimes coexist by diffusing aggression, but this requires expert management and is not recommended for home aquariums.',
      },
      {
        question: 'What do Platinum Arowana eat?',
        answer:
          'Platinum Arowana thrive on a varied carnivorous diet including market prawns, gut-loaded crickets, superworms, high-quality pellets (Hikari, Northfin), and occasional captive-bred feeder frogs. Avoid feeder goldfish — they carry disease and contain thiaminase, which depletes vitamin B1. Feed adults 5–6 times per week with one fasting day.',
      },
      {
        question: 'How long do Platinum Arowana live?',
        answer:
          'With proper care, Platinum Arowana live 20–25 years in captivity. Some verified specimens have exceeded 30 years. Lifespan is directly correlated with water quality, diet variety, and tank size — fish kept in undersized aquariums with inconsistent maintenance rarely survive beyond 10–12 years.',
      },
    ],
    sources: [
      {
        title: 'Scleropages formosus (Müller & Schlegel, 1844)',
        url: 'https://www.fishbase.se/summary/Scleropages-formosus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Captive Breeding and Conservation of the Asian Arowana, Scleropages formosus',
        url: 'https://doi.org/10.1111/j.1095-8649.2007.01505.x',
        publisher: 'Journal of Fish Biology',
      },
      {
        title:
          'CITES Trade Database: Scleropages formosus',
        url: 'https://trade.cites.org/',
        publisher: 'CITES Secretariat',
      },
      {
        title:
          'Water Quality Requirements for Ornamental Fish Species of Economic Importance',
        url: 'https://doi.org/10.1016/j.aquaculture.2019.734442',
        publisher: 'Aquaculture',
      },
      {
        title:
          'Asian Arowana Husbandry Manual',
        url: 'https://www.oata.co.uk/resources',
        publisher: 'Ornamental Aquatic Trade Association (OATA)',
      },
    ],
    relatedSlugs: [
      'gem-tang',
      'flowerhorn-cichlid',
      'wolf-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Gem Tang
  // ─────────────────────────────────────────────
  {
    title: 'Gem Tang Care Guide',
    slug: 'gem-tang',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-01-18',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/gem-tang-hero.jpg',
    heroImageAlt:
      'Gem Tang displaying brilliant white spots against its jet-black body in a mature reef aquarium',
    metaTitle:
      'Gem Tang (Zebrasoma gemmatum): Complete Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete Gem Tang care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion: 'What is the best way to care for a Gem Tang?',
    quickAnswer:
      'Gem Tang thrive in mature reef aquariums of 180+ gallons with stable water chemistry (pH 8.1–8.4, 24–26 °C, salinity 1.025 sg). They are herbivorous grazers requiring abundant live rock for algae foraging, supplemented with nori sheets and high-quality marine algae preparations. Provide strong flow, excellent oxygenation, and introduce them as the last tang species to minimise territorial aggression.',
    summary:
      'The Gem Tang (<em>Zebrasoma gemmatum</em>) is widely considered the holy grail of marine aquarium fish, with specimens routinely commanding $2,000–$4,000 at retail. Endemic to a narrow band of the western Indian Ocean — primarily around Mauritius, Réunion, and Madagascar — its limited collection range, deepwater habitat, and export restrictions make it one of the rarest tangs in the trade. This guide provides collector-grade care instructions based on The Fish Collection\'s direct experience maintaining and shipping this extraordinary surgeonfish.',
    scientificName: 'Zebrasoma gemmatum',
    category: 'tang',
    keyFacts: [
      { label: 'Scientific Name', value: 'Zebrasoma gemmatum' },
      { label: 'Max Size', value: '22 cm (8.5 in)' },
      { label: 'Tank Size', value: '180 gallons (680 L) minimum' },
      { label: 'Temperature', value: '24–26 °C (75–79 °F)' },
      { label: 'pH', value: '8.1–8.4' },
      { label: 'Care Level', value: 'Advanced' },
      { label: 'Lifespan', value: '12–20 years in captivity' },
      { label: 'Diet', value: 'Herbivore — algae, nori, prepared foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascaping', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'ich-and-marine-velvet', text: 'Ich & Marine Velvet', level: 3 },
      { id: 'hlle', text: 'Head & Lateral Line Erosion (HLLE)', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Gem Tang (<em>Zebrasoma gemmatum</em>) belongs to the family Acanthuridae and is the most valuable member of the <em>Zebrasoma</em> genus. Its common name derives from the scattering of brilliant white spots across a jet-black body — a pattern reminiscent of gemstones set against dark velvet. Unlike its more common relatives (the Yellow Tang <em>Z. flavescens</em> or Sailfin Tang <em>Z. veliferum</em>), the Gem Tang's restricted geographic range and deepwater collection requirements keep supply perpetually below demand.</p>
<p>Specimens entering the trade are almost exclusively collected around Mauritius, where divers must reach depths of 25–60 metres on mixed-gas or rebreather rigs to access the species' preferred rocky reef habitat. Collection quotas are tightly regulated by Mauritian fisheries authorities, and export permits are limited. The result is a fish that may appear at a handful of reputable marine wholesalers only a few times per year — and when it does, it moves within hours.</p>
<p>Despite its rarity and price, the Gem Tang is not an inherently fragile fish. In fact, once properly acclimated, it is among the hardiest <em>Zebrasoma</em> species. The challenge lies in sourcing a healthy specimen, executing a stress-free acclimation, and providing the stable, mature reef environment this fish requires. Get those three things right, and the Gem Tang will reward you with decades of jaw-dropping beauty.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Zebrasoma gemmatum</em> is found in the western Indian Ocean, with confirmed populations around Mauritius, Réunion, southern Madagascar, and the Mozambique Channel. Unconfirmed sightings extend to the Comoros and northern KwaZulu-Natal. It inhabits rocky reef slopes and rubble zones at depths of 10–60 metres, though collection for the aquarium trade occurs primarily between 25 and 45 metres where population density is highest.</p>
<p>Water conditions in these habitats are remarkably stable — temperature ranges from 23 °C to 27 °C, salinity is a consistent 35 ppt (specific gravity 1.025–1.026), and pH remains at 8.2–8.4. Strong oceanic currents deliver excellent oxygenation and constant nutrient flow across the reef, supporting the algae and biofilm on which Gem Tang graze throughout the day.</p>
<p>The deepwater preference explains the species' tolerance for moderate lighting in captivity, though they adapt readily to the higher PAR values typical of modern SPS reef systems. In the wild, Gem Tang are typically encountered singly or in pairs, sheltering in reef crevices and emerging to graze during daylight hours.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascaping</h3>
<p>A minimum 180-gallon (680 L) reef aquarium is required for a single Gem Tang. The tank should measure at least 180 cm long × 60 cm wide × 60 cm tall (72 × 24 × 24 inches). If you plan to house the Gem Tang alongside other tang species — which is possible in well-designed systems — scale up to 300 gallons or more.</p>
<p>Aquascaping should provide abundant live rock (a minimum of 1 kg per 4 litres of net water volume) arranged to create multiple grazing surfaces, swim-throughs, and bolt holes. Gem Tang will claim a specific cave or overhang as their sleeping spot and retreat there when stressed. Ensure the rockwork creates at least 3–4 distinct territories if housing multiple tangs to allow line-of-sight breaks.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>This species demands high dissolved oxygen levels and strong, turbulent flow. Target a combined turnover rate of 15–20× tank volume per hour using a combination of return pump, powerheads, and gyre-style wavemakers. A protein skimmer rated for 1.5–2× your system volume is essential — Gem Tang produce moderate bioload for their size, and skimmate removal keeps dissolved organic carbon low.</p>
<p>A refugium with a reverse-daylight Chaetomorpha or Caulerpa crop provides natural nitrate and phosphate export while cultivating pods and micro-algae that supplement the tang's diet. UV sterilisation (40–80 watt, sized for your flow rate) adds an extra layer of pathogen control — particularly important during the first 30 days after introduction.</p>

<h3 id="lighting">Lighting</h3>
<p>Gem Tang adapt to a wide range of lighting conditions, from moderate fish-only setups to high-PAR mixed reef systems exceeding 350 µmol at the sand bed. Their white-on-black colouration appears most striking under 14,000–20,000 K blue-white LED lighting — the current standard for SPS-dominant reefs. A 10–12 hour photoperiod with a 60-minute dawn/dusk ramp is ideal.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Gem Tang require the stable, pristine water chemistry that any SPS reef demands. Target the following:</p>
<ul>
<li><strong>Temperature:</strong> 24–26 °C (75–79 °F). Avoid exceeding 27 °C; elevated temperatures reduce dissolved oxygen and increase metabolic stress.</li>
<li><strong>Salinity:</strong> 1.025–1.026 specific gravity (35 ppt). Use a refractometer calibrated with 35 ppt calibration fluid — not a swing-arm hydrometer.</li>
<li><strong>pH:</strong> 8.1–8.4. Maintain via a kalkwasser reactor or CO₂-driven calcium reactor. Avoid pH swings greater than 0.2 units over 24 hours.</li>
<li><strong>Alkalinity:</strong> 7–9 dKH. Stability is paramount — dose two-part or use a calcium reactor to hold dKH within ±0.5 of your target.</li>
<li><strong>Calcium:</strong> 400–450 ppm.</li>
<li><strong>Magnesium:</strong> 1,280–1,350 ppm.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;10 ppm. Ideally 1–5 ppm in a reef system (some nitrate supports coralline and macro-algae growth).</li>
<li><strong>Phosphate:</strong> 0.01–0.05 ppm.</li>
</ul>
<p>Weekly water changes of 10–15% using high-quality synthetic salt (Red Sea Coral Pro, Tropic Marin Pro Reef, or Fritz RPM) maintain trace element levels and dilute accumulated metabolites. Test alkalinity, calcium, and magnesium weekly; test for nitrate and phosphate biweekly.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Gem Tang are primarily herbivorous grazers. In the wild, they spend the majority of daylight hours cropping algae and biofilm from rock surfaces. In captivity, replicating this constant grazing behaviour is critical for long-term health and for preventing head and lateral line erosion (HLLE).</p>
<ul>
<li><strong>Nori sheets:</strong> Offer dried nori (unseasoned, sushi-grade) on a veggie clip 2–3 times daily. Rotate between green, red, and brown nori for nutritional variety.</li>
<li><strong>Frozen herbivore preparations:</strong> LRS Reef Frenzy Herbivore, PE Mysis enriched with Spirulina, or Ocean Nutrition Formula Two. Feed once daily.</li>
<li><strong>Pellets:</strong> New Life Spectrum Marine Fish Formula or Hikari Marine-S. These are useful for targeted vitamin delivery — soak in Selcon or Vitachem before feeding.</li>
<li><strong>Live rock grazing:</strong> A mature reef with abundant coralline and film algae provides continuous supplemental nutrition between feedings. This is the single most important "food source" for long-term tang health.</li>
</ul>
<p>Vitamin supplementation is essential for tang species. Soak all prepared foods in a marine vitamin complex (Brightwell Aquatics Vitamarin-M, Selcon) at least 3 times per week. Vitamin C (ascorbic acid) at 500 mg per litre of food soak water helps prevent HLLE.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Gem Tang are moderately territorial, particularly toward congeneric species (other <em>Zebrasoma</em>). They will vigorously defend their claimed section of rockwork and can inflict damage with the scalpel-like spine at the base of their caudal peduncle — a feature shared by all surgeonfishes. That said, aggression is predictable and manageable with proper planning.</p>
<p>When introducing a Gem Tang to a system that already houses tangs, always add it last. The established residents will have claimed their territories, and the newcomer will find unclaimed space rather than attempting to displace a resident. In large systems (300+ gallons), it is possible to keep a Gem Tang alongside a Yellow Tang, a Powder Blue Tang (<em>Acanthurus leucosternon</em>), and a Naso Tang — provided each species differs in body shape and colour, which reduces conspecific aggression triggers.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<ul>
<li><strong>Tangs (different genera):</strong> <em>Acanthurus</em> spp. (Powder Blue, Achilles), <em>Paracanthurus hepatus</em> (Blue Hippo), <em>Naso</em> spp. — in 300+ gallon systems.</li>
<li><strong>Wrasses:</strong> Fairy wrasses (<em>Cirrhilabrus</em>), Flasher wrasses (<em>Paracheilinus</em>) — peaceful and occupy different niches.</li>
<li><strong>Clownfish:</strong> <em>Amphiprion ocellaris</em> or <em>A. percula</em> pairs. No conflict.</li>
<li><strong>Anthias:</strong> <em>Pseudanthias</em> spp. add colour and movement with zero tang aggression risk.</li>
<li><strong>Angelfish:</strong> Dwarf angels (<em>Centropyge</em>) in larger systems. Avoid large Pomacanthidae in tanks under 300 gallons.</li>
</ul>
<p>Avoid housing Gem Tang with other <em>Zebrasoma</em> species in tanks under 300 gallons, and never house two Gem Tang together unless the system exceeds 500 gallons and is heavily aquascaped with line-of-sight breaks.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of <em>Zebrasoma gemmatum</em> has not been commercially achieved as of early 2026. While researchers at the Oceanic Institute of Hawai'i Pacific University and Rising Tide Conservation have successfully bred related species (<em>Z. flavescens</em>, <em>Z. desjardinii</em>), the Gem Tang's extreme rarity in captive collections has limited breeding attempts. The species is a pelagic spawner — pairs rise into the water column at dusk, releasing eggs and sperm into the current. Larvae undergo an extended planktonic phase (50–80 days), feeding on microscopic plankton before settling onto reef substrate.</p>
<p>Any future breakthrough in Gem Tang aquaculture would dramatically alter the species' market dynamics. Until then, all specimens in the trade are wild-caught, making responsible collection practices and export quotas critical for long-term sustainability.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="ich-and-marine-velvet">Ich & Marine Velvet</h3>
<p>Tangs as a family are notoriously susceptible to <em>Cryptocaryon irritans</em> (marine ich) and <em>Amyloodinium ocellatum</em> (marine velvet). The stress of collection, shipping, and acclimation makes newly acquired Gem Tang particularly vulnerable. A strict quarantine protocol is non-negotiable.</p>
<p>We recommend a minimum 30-day quarantine in a bare-bottom hospital tank (40–75 gallons for a single tang) treated prophylactically with copper sulphate (Copper Power or Coppersafe) maintained at 2.0–2.5 ppm free copper, verified daily with a copper test kit. Alternatively, a 76-day tank transfer method (TTM) provides a copper-free option for keepers who plan to house invertebrates in quarantine. Never introduce a new tang directly into a display reef — the cost of a marine velvet outbreak in a mature reef system dwarfs the cost of a quarantine tank.</p>

<h3 id="hlle">Head & Lateral Line Erosion (HLLE)</h3>
<p>HLLE presents as pitting and erosion of the skin around the head and along the lateral line. In Gem Tang, it manifests as grey, depigmented patches that destroy the otherwise flawless black colouration. Contributing factors include activated carbon use (which may leach impurities), vitamin deficiency (particularly A and C), stray voltage in the aquarium, and poor diet.</p>
<p>Prevention: feed a varied, vitamin-enriched herbivore diet; use high-quality granular activated carbon (bituminous, acid-washed) or eliminate carbon in favour of GFO and biopellets; install a grounding probe; and maintain nitrate below 10 ppm. Early-stage HLLE is fully reversible with dietary correction and improved water quality.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Why are Gem Tang so expensive?',
        answer:
          'Gem Tang command $2,000–$4,000 because they are endemic to a small area of the western Indian Ocean (primarily Mauritius), require deep-water mixed-gas diving to collect, and are subject to strict export quotas. Supply is extremely limited — most wholesalers receive only a handful of specimens per year.',
      },
      {
        question: 'Can you keep a Gem Tang in a fish-only tank?',
        answer:
          'Yes. Gem Tang do not require corals, though they thrive best in mature reef systems with abundant live rock for grazing. A fish-only-with-live-rock (FOWLR) setup of 180+ gallons with stable water chemistry and strong flow is perfectly acceptable. Ensure the live rock supports algae growth for natural grazing.',
      },
      {
        question: 'How do you acclimate a Gem Tang?',
        answer:
          'We recommend a 60–90 minute drip acclimation to match temperature, salinity, and pH between the shipping water and your quarantine tank. Float the sealed bag for 15 minutes for temperature equilibration, then drip-acclimate at 3–4 drops per second. Dim the lights during introduction. Do not add shipping water to your system — net the fish and release into quarantine.',
      },
      {
        question: 'Can Gem Tang live with other tangs?',
        answer:
          'Yes, in sufficiently large systems (300+ gallons). Choose tangs from different genera to reduce aggression — for example, pairing a Gem Tang (Zebrasoma) with a Powder Blue (Acanthurus) and a Naso Tang (Naso). Avoid housing two Zebrasoma species together in tanks under 300 gallons. Always add the Gem Tang last.',
      },
      {
        question: 'What do Gem Tang eat?',
        answer:
          'Gem Tang are herbivorous grazers. Feed dried nori sheets 2–3 times daily, supplement with frozen herbivore preparations (LRS, PE Mysis with Spirulina), and provide high-quality marine pellets soaked in a vitamin supplement. Mature live rock with natural algae growth is essential for continuous grazing between feedings.',
      },
      {
        question: 'How long do Gem Tang live in captivity?',
        answer:
          'With proper care, Gem Tang can live 12–20 years in captivity. Anecdotal reports from public aquariums suggest lifespans exceeding 20 years are possible. Key factors are stable water chemistry, a vitamin-rich herbivore diet, low stress, and a mature reef environment with ample grazing surfaces.',
      },
    ],
    sources: [
      {
        title: 'Zebrasoma gemmatum (Valenciennes, 1835)',
        url: 'https://www.fishbase.se/summary/Zebrasoma-gemmatum.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Depth distribution and habitat utilisation of surgeonfishes in the western Indian Ocean',
        url: 'https://doi.org/10.1007/s00338-017-1612-0',
        publisher: 'Coral Reefs',
      },
      {
        title:
          'Captive Breeding of Marine Ornamental Fishes: Progress and Challenges',
        url: 'https://doi.org/10.1111/raq.12235',
        publisher: 'Reviews in Aquaculture',
      },
      {
        title:
          'Rising Tide Conservation: Zebrasoma Breeding Programme Updates',
        url: 'https://risingtideconservation.org/',
        publisher: 'Rising Tide Conservation',
      },
    ],
    relatedSlugs: [
      'peppermint-angelfish',
      'platinum-arowana',
      'flowerhorn-cichlid',
    ],
  },

  // ─────────────────────────────────────────────
  // 3. Peppermint Angelfish
  // ─────────────────────────────────────────────
  {
    title: 'Peppermint Angelfish Care Guide',
    slug: 'peppermint-angelfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-01-21',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/peppermint-angelfish-hero.jpg',
    heroImageAlt:
      'Peppermint Angelfish with its distinctive red and white striping swimming among deep-reef corals',
    metaTitle:
      'Peppermint Angelfish (Centropyge boylei): Complete Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete Peppermint Angelfish care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion:
      'What is the best way to care for a Peppermint Angelfish?',
    quickAnswer:
      'Peppermint Angelfish require a mature, dimly lit reef aquarium of at least 75 gallons with cooler water temperatures (21–24 °C), stable pH of 8.1–8.4, and abundant live rock providing caves and overhangs. They are shy, deepwater fish that need low-light zones, a varied diet of frozen mysis, enriched brine shrimp, and sponge-based preparations, and peaceful tank mates that will not outcompete them for food.',
    summary:
      'The Peppermint Angelfish (<em>Centropyge boylei</em>) is arguably the rarest marine aquarium fish in the world, with only a handful of specimens ever collected for the trade. First described in 1992 from deep reefs around the Cook Islands, this diminutive angelfish lives at depths of 55–120 metres, making collection exceptionally difficult and expensive. Specimens that have entered the aquarium trade have sold for $20,000–$30,000, cementing the Peppermint Angelfish as the ultimate prize for elite marine collectors. This guide consolidates what is known about its captive care from the few successful long-term keepers and public aquarium holdings.',
    scientificName: 'Centropyge boylei',
    category: 'angelfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Centropyge boylei' },
      { label: 'Max Size', value: '7 cm (2.75 in)' },
      { label: 'Tank Size', value: '75 gallons (285 L) minimum' },
      { label: 'Temperature', value: '21–24 °C (70–75 °F)' },
      { label: 'pH', value: '8.1–8.4' },
      { label: 'Care Level', value: 'Expert' },
      { label: 'Lifespan', value: '10–15+ years (estimated)' },
      { label: 'Diet', value: 'Omnivore — sponge, algae, frozen preparations' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascaping', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'acclimation-protocol', text: 'Acclimation Protocol', level: 3 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'decompression-stress', text: 'Decompression Stress', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Peppermint Angelfish (<em>Centropyge boylei</em>) is a deepwater dwarf angelfish first described by Pyle and Randall in 1992 from specimens collected at Rarotonga, Cook Islands. Its vivid alternating bands of orange-red and white — reminiscent of a peppermint sweet — make it instantly recognisable and utterly unlike any other member of the <em>Centropyge</em> genus. At a maximum size of just 7 cm, it is physically small but carries an outsized reputation as the most exclusive marine aquarium fish in existence.</p>
<p>The species' extreme depth range (55–120 metres) places it firmly in the mesophotic zone, where collection requires technical mixed-gas diving with extensive decompression obligations. Only a handful of collectors worldwide possess the skills, permits, and equipment to safely bring specimens to the surface. The Waikiki Aquarium in Honolulu has maintained a Peppermint Angelfish since 2012, providing the longest-running dataset on captive care. A small number of private collectors — estimated at fewer than ten globally — have successfully kept specimens long-term.</p>
<p>The Fish Collection has facilitated the sale of two Peppermint Angelfish since 2018, both sourced through licensed Cook Islands collectors and accompanied by full chain-of-custody documentation. This guide represents our compiled knowledge from those transactions, supplemented by data shared by institutional and private keepers.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Centropyge boylei</em> is known from the Cook Islands (particularly Rarotonga and Aitutaki) and possibly Tonga and the Society Islands, though confirmed records are limited due to the difficulty of surveying its depth range. It inhabits steep outer reef walls and drop-offs, typically found in caves, overhangs, and crevices on hard coral substrate between 55 and 120 metres depth.</p>
<p>At these depths, water temperature is significantly cooler than the shallow reef — typically 20–24 °C — and light levels are reduced to approximately 1–5% of surface intensity. The prevailing spectrum is heavily blue-shifted, with virtually no red or green light penetrating below 60 metres. The fish's red and white colouration, which appears so striking to us, likely serves as cryptic camouflage at depth, where red wavelengths are absorbed and the fish would appear dark or muted against the reef.</p>
<p>Current exposure at these depths is moderate to strong, driven by deep oceanic swells passing over the reef wall. The substrate supports a community of deep-reef sponges, non-photosynthetic corals, and encrusting algae that form the primary diet of mesophotic <em>Centropyge</em> species.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascaping</h3>
<p>Despite its small adult size, a Peppermint Angelfish should be housed in a minimum 75-gallon (285 L) aquarium. This recommendation is driven not by swimming space but by the need for a mature, biologically stable environment with ample live rock for grazing and hiding. A 90–120 gallon system is preferable, particularly if housing other fish.</p>
<p>Aquascaping must prioritise caves, overhangs, and shaded retreat areas. Stack live rock to create multiple cave systems with entrances just large enough for the angelfish (3–5 cm openings). The Peppermint Angelfish is a retiring species that will spend much of its time in or near cover, particularly during the first weeks in captivity. Without adequate hiding spots, chronic stress will suppress feeding and immune function.</p>
<p>A deep sand bed (10–12 cm) of fine aragonite sand provides additional microfaunal food sources and supports the cool, stable conditions this species prefers. The sand bed should be well-established (6+ months) with an active population of copepods, amphipods, and micro-worms.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>A moderate flow regime — 10–15× tank volume turnover per hour — replicates the deep-reef conditions the Peppermint Angelfish favours. Avoid laminar blast-style flow directed at the fish's preferred shelter areas; instead, use randomised wave patterns from gyre-style pumps. A protein skimmer rated for 1.5× system volume and a refugium with Chaetomorpha are standard filtration recommendations.</p>
<p>A chiller is almost certainly required. Maintaining 21–24 °C in a typical room-temperature environment means the aquarium must be actively cooled. Size the chiller for your full system volume plus a 20% safety margin. An inline titanium chiller on the sump return is the most efficient configuration.</p>

<h3 id="lighting">Lighting</h3>
<p>This is the single most important environmental consideration. Peppermint Angelfish come from a light-deprived environment and are photophobic in captivity. The display tank should provide shaded zones where PAR readings at the rock surface do not exceed 50 µmol. A standard reef lighting setup (200–400 µmol at the sandbed) is far too intense unless the aquascaping creates deep caves where the angelfish can retreat entirely from the light cone.</p>
<p>Dedicated Peppermint Angelfish systems often use low-wattage blue LED strips (420–460 nm) at 10–20% intensity on a 10-hour photoperiod with extended dawn/dusk ramps (90+ minutes each). The deep blue spectrum replicates the mesophotic light environment and reduces photostress while still allowing the keeper to observe the fish.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 21–24 °C (70–75 °F). This is cooler than standard reef parameters (24–26 °C) and is non-negotiable. Exceeding 25 °C chronically will shorten the fish's lifespan.</li>
<li><strong>Salinity:</strong> 1.025–1.026 sg (35 ppt).</li>
<li><strong>pH:</strong> 8.1–8.4.</li>
<li><strong>Alkalinity:</strong> 7–9 dKH.</li>
<li><strong>Calcium:</strong> 400–440 ppm.</li>
<li><strong>Magnesium:</strong> 1,280–1,350 ppm.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;5 ppm. Mesophotic species are adapted to ultra-low nutrient environments.</li>
<li><strong>Phosphate:</strong> &lt;0.03 ppm.</li>
</ul>
<p>Water changes of 10% weekly using temperature-matched, RO/DI-based synthetic seawater are recommended. The cool operating temperature means the chiller must have sufficient capacity to maintain temperature during and after water changes — adding 20 litres of 22 °C water to a 300 L system will not cause significant fluctuation, but adding 60 litres of 25 °C water will.</p>

<h3 id="acclimation-protocol">Acclimation Protocol</h3>
<p>Acclimation of a deepwater species demands extraordinary care. Specimens arriving from the collector have already undergone a slow decompression process during collection (staged ascent over 12–24 hours), but shipping stress compounds the challenge. Follow this protocol:</p>
<ul>
<li>Dim all room and tank lights. Work in near-darkness.</li>
<li>Float the sealed bag for 20 minutes to equalise temperature.</li>
<li>Open the bag and begin a drip acclimation at 2 drops per second, targeting a 90–120 minute acclimation period.</li>
<li>Test the bag water and your tank water for temperature, salinity, and pH. All three must be within 0.2 units / 0.001 sg / 0.5 °C before transfer.</li>
<li>Net the fish gently and release into the quarantine tank. Do not add shipping water.</li>
<li>Leave lights off for a minimum of 48 hours. Offer food (live brine shrimp nauplii) after 24 hours but do not be alarmed if the fish does not eat for 3–5 days.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Peppermint Angelfish are omnivorous grazers with a strong preference for sponge material, tunicates, and encrusting algae. In captivity, weaning onto prepared foods is the primary husbandry challenge. Successful long-term keepers report the following diet progression:</p>
<ul>
<li><strong>Week 1–2 (quarantine):</strong> Live enriched brine shrimp (<em>Artemia</em> nauplii gut-loaded with Selcon and Spirulina) offered 3–4 times daily in small quantities near the fish's preferred hiding spot.</li>
<li><strong>Week 2–4:</strong> Introduce frozen mysis shrimp (PE Mysis, Hikari Mysis) alongside the live brine shrimp. Soak in Vitachem and garlic extract (Brightwell Garlic Power) to stimulate feeding response.</li>
<li><strong>Week 4+:</strong> Gradually replace live foods with frozen preparations: LRS Fish Frenzy, Rod's Food Original, and sponge-based angelfish preparations (Ocean Nutrition Formula Two with sponge, or Two Little Fishies Julian Sprung's SeaVeggies).</li>
<li><strong>Long-term maintenance:</strong> Frozen mysis, enriched brine shrimp, finely chopped market shrimp, sponge-based angel preparations, and live copepods from the refugium. Feed 2–3 small meals per day rather than one large feeding.</li>
</ul>
<p>A thriving copepod and amphipod population in the live rock and refugium provides constant supplemental nutrition. Consider seeding the system with Tisbe and Tigriopus copepod cultures every 2–3 months.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Peppermint Angelfish are shy, retiring fish — a behavioural profile consistent with deep-reef dwelling species that rely on cryptic camouflage rather than speed to avoid predation. In captivity, expect the fish to spend considerable time within the rockwork, particularly during the first 1–3 months. Over time, as the fish becomes accustomed to the keeper's presence and feeding schedule, it will venture out more frequently, though it will never be a bold, front-of-tank swimmer like a clownfish or tang.</p>
<p>They are not aggressive toward other fish but can be territorial toward congeneric <em>Centropyge</em> species in small tanks. Intraspecific aggression (two Peppermint Angelfish together) is essentially untested in captivity due to the extreme rarity and cost of specimens, and we strongly advise against attempting it.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must be chosen with the Peppermint Angelfish's timidity in mind. Avoid aggressive feeders that will outcompete it at mealtimes and boisterous species that will stress it.</p>
<ul>
<li><strong>Ideal:</strong> Small, peaceful reef fish — Firefish (<em>Nemateleotris magnifica</em>), Royal Gramma (<em>Gramma loreto</em>), Banggai Cardinalfish (<em>Pterapogon kauderni</em>), small fairy wrasses (<em>Cirrhilabrus</em> spp.).</li>
<li><strong>Acceptable:</strong> Peaceful clownfish pairs (<em>Amphiprion ocellaris</em>), small gobies (<em>Gobiodon</em>, <em>Trimma</em>), Mandarin Dragonets (<em>Synchiropus splendidus</em> — only in systems with robust pod populations).</li>
<li><strong>Avoid:</strong> Large tangs, triggerfish, large wrasses (<em>Thalassoma</em>, <em>Halichoeres</em>), dottybacks (<em>Pseudochromis</em>), hawkfish, and any fish that may bully or outcompete the angelfish for food.</li>
</ul>

<h2 id="breeding">Breeding</h2>
<p>No confirmed captive breeding of <em>Centropyge boylei</em> has been recorded. Like other <em>Centropyge</em> species, it is presumed to be a protogynous hermaphrodite — all individuals mature as females, with the dominant fish in a social group transitioning to male. Spawning in congeners involves a dusk courtship ascent with pelagic egg release.</p>
<p>Given that captive populations number in the single digits worldwide, breeding efforts remain aspirational. Researchers at the Waikiki Aquarium have expressed interest in pairing their specimen but acquiring a second fish has proven logistically and financially challenging. Any breakthrough in captive propagation would be a landmark event in marine aquaculture.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="decompression-stress">Decompression Stress</h3>
<p>The most significant health risk is decompression-related injury sustained during collection. Responsible collectors employ a slow, staged ascent over 12–24 hours, allowing the fish's swim bladder to gradually adjust to decreasing pressure. Poorly collected specimens may exhibit swim bladder overinflation, buoyancy disorders, or internal haemorrhaging. Always source from collectors with documented slow-ascent protocols.</p>
<p>Other health concerns mirror those of dwarf angelfish generally: marine ich (<em>Cryptocaryon irritans</em>), marine velvet (<em>Amyloodinium ocellatum</em>), and bacterial infections secondary to handling stress. A 30-day quarantine with prophylactic copper treatment (1.5–2.0 ppm — use the lower end for this delicate species) or a hyposalinity protocol (1.009 sg for 4 weeks) is advisable. Monitor carefully for signs of copper sensitivity — rapid breathing, loss of colour, or erratic swimming — and reduce concentration if observed.</p>
<p>Long-term, nutritional deficiency is the primary health risk. A Peppermint Angelfish that is not eating a varied, vitamin-enriched diet will gradually lose colour intensity and condition. The feeding protocols described above, combined with a biologically rich reef environment, are the best preventive medicine.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a Peppermint Angelfish cost?',
        answer:
          'Peppermint Angelfish have sold for $20,000–$30,000 in the private market. The price reflects extreme rarity — only a handful of specimens are collected per year due to the species\' deep-water habitat (55–120 metres) and the technical diving required. Public aquariums have reportedly paid similar sums for display specimens.',
      },
      {
        question: 'Where can I buy a Peppermint Angelfish?',
        answer:
          'Peppermint Angelfish are not available through standard aquarium retail channels. They appear occasionally through specialist rare-fish dealers and brokers like The Fish Collection, typically by arrangement with licensed Cook Islands collectors. Wait times of 6–18 months are common, and availability cannot be guaranteed.',
      },
      {
        question: 'What temperature do Peppermint Angelfish need?',
        answer:
          'Peppermint Angelfish require cooler-than-standard reef temperatures of 21–24 °C (70–75 °F), reflecting their deep-water origins. A chiller is required in most setups. Exceeding 25 °C chronically will stress the fish and reduce its lifespan.',
      },
      {
        question:
          'Can you keep a Peppermint Angelfish in a standard reef tank?',
        answer:
          'Yes, with modifications. The reef must provide shaded caves with low light intensity (PAR below 50 µmol), the temperature must be maintained at 21–24 °C (which may affect coral selection — avoid heat-loving SPS species), and tank mates must be peaceful and non-competitive. A dedicated species tank is often a better choice.',
      },
      {
        question: 'Are Peppermint Angelfish reef safe?',
        answer:
          'Peppermint Angelfish carry the same "reef safe with caution" designation as other Centropyge species. They may nip at LPS coral mantles, clam mantles, and soft coral polyps, particularly if underfed. In well-fed specimens within systems rich in live rock and microfauna, coral nipping is typically minimal. Monitor closely during the first weeks.',
      },
      {
        question: 'How rare is the Peppermint Angelfish?',
        answer:
          'The Peppermint Angelfish is widely regarded as the rarest marine aquarium fish in the world. Fewer than 20 specimens are estimated to have been collected for the aquarium trade since the species was described in 1992. Its deep-water habitat (55–120 m), restricted geographic range (Cook Islands), and technical collection requirements make it extraordinarily scarce.',
      },
    ],
    sources: [
      {
        title: 'Centropyge boylei, a new species of angelfish from the Cook Islands',
        url: 'https://doi.org/10.5281/zenodo.10234',
        publisher: 'Revue française d\'Aquariologie et Herpétologie',
      },
      {
        title: 'Centropyge boylei (Pyle & Randall, 1992)',
        url: 'https://www.fishbase.se/summary/Centropyge-boylei.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Mesophotic Coral Ecosystems: A Lifeboat for Coral Reefs?',
        url: 'https://doi.org/10.1007/978-3-319-92735-0',
        publisher: 'Springer',
      },
      {
        title:
          'Husbandry and Acclimation of Deep-Reef Fishes for Public Aquarium Display',
        url: 'https://doi.org/10.1002/zoo.21420',
        publisher: 'Zoo Biology',
      },
    ],
    relatedSlugs: [
      'gem-tang',
      'platinum-arowana',
      'flowerhorn-cichlid',
    ],
  },

  // ─────────────────────────────────────────────
  // 4. Wolf Fish
  // ─────────────────────────────────────────────
  {
    title: 'Wolf Fish Care Guide',
    slug: 'wolf-fish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-01-24',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/wolf-fish-hero.jpg',
    heroImageAlt:
      'Adult Wolf Fish (Hoplias malabaricus) resting among submerged driftwood in a blackwater aquarium setup',
    metaTitle:
      'Wolf Fish (Hoplias malabaricus): Complete Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete Wolf Fish care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion: 'What is the best way to care for a Wolf Fish?',
    quickAnswer:
      'Wolf Fish (<em>Hoplias malabaricus</em>) require a minimum 125-gallon aquarium with a secure lid, soft acidic water (pH 5.5–7.5, 24–28 °C), and a carnivorous diet of fish fillets, shrimp, and earthworms. They are powerful ambush predators best kept alone or with equally robust, non-competing species. Handle with extreme caution — their teeth can inflict serious wounds.',
    summary:
      'The Wolf Fish (<em>Hoplias malabaricus</em>) is the apex freshwater predator of South America, found in virtually every river system from the Orinoco to the Paraná. Known in its native range as "Traíra," this robust characiform is built for one purpose: to hunt. With a mouth full of canine-like teeth, explosive strike speed, and the tenacity to survive in oxygen-depleted swamps, the Wolf Fish is the ultimate predator-keeper\'s fish. This guide covers everything from tank requirements and feeding protocols to breeding behaviour and safe handling practices.',
    scientificName: 'Hoplias malabaricus',
    category: 'cichlid',
    keyFacts: [
      { label: 'Scientific Name', value: 'Hoplias malabaricus' },
      { label: 'Max Size', value: '50 cm (20 in) in captivity; 65 cm (26 in) wild' },
      { label: 'Tank Size', value: '125 gallons (475 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '5.5–7.5' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '15–20 years in captivity' },
      { label: 'Diet', value: 'Carnivore — fish, shrimp, invertebrates' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Décor', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'safe-handling', text: 'Safe Handling', level: 3 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Wolf Fish (<em>Hoplias malabaricus</em>), known throughout South America as "Traíra," is a member of the family Erythrinidae — a group of predatory characins that have evolved to dominate the still and slow-moving waters of the Neotropical region. What the Arowana is to surface predation, the Wolf Fish is to ambush hunting. Its morphology tells the story: a broad, flattened head housing a mouth filled with interlocking canine teeth, a thick cylindrical body optimised for explosive lunges rather than sustained swimming, and a camouflage pattern of dark mottled brown that renders it invisible against a substrate of leaf litter and submerged wood.</p>
<p><em>Hoplias malabaricus</em> is actually a species complex — recent genetic analysis has identified multiple cryptic species within what was traditionally considered a single taxon. For aquarium purposes, most specimens entering the trade are collected from the Amazon, Orinoco, or Paraná basins and conform to the broadly defined <em>H. malabaricus</em> morphotype. Rarer congeners such as <em>H. aimara</em> (the Giant Wolf Fish, reaching 1 metre) and <em>H. curupira</em> are occasionally available from specialist importers.</p>
<p>Wolf Fish are not a beginner's fish, but nor do they demand the extreme water chemistry precision of Discus or the sheer space requirements of Arowana. They are remarkably tough, adaptable predators that thrive under conditions that would stress many ornamental species. For the predator enthusiast who wants a genuinely interactive fish with an unmistakable personality, the Wolf Fish is hard to beat.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Hoplias malabaricus</em> has one of the broadest geographic ranges of any Neotropical freshwater fish, occurring from Costa Rica south through the Amazon, Orinoco, São Francisco, and Paraná-Paraguay river systems to northern Argentina. It inhabits still or slow-moving waters: swamps, floodplain lakes (várzea and igapó), sluggish tributary creeks, and roadside ditches. It is notably tolerant of hypoxic conditions — Wolf Fish are obligate air-breathers that gulp atmospheric air to supplement gill respiration, allowing them to survive in stagnant, deoxygenated pools where other predators cannot.</p>
<p>Water conditions across this range vary enormously — from tannin-stained blackwater with a pH below 5.0 and near-zero hardness, to neutral or slightly alkaline white-water rivers with moderate hardness. Temperature ranges from 22 °C in southern populations to 32 °C in equatorial lowland habitats. This ecological flexibility translates directly to captive hardiness.</p>
<p>In the wild, Wolf Fish are solitary ambush predators. They position themselves among submerged roots, leaf litter, or aquatic vegetation and wait motionless for prey — primarily small fish, frogs, crustaceans, and large aquatic invertebrates — to pass within strike distance. The attack is explosive: a lunge covering 1–2 body lengths in a fraction of a second, powered by the thick caudal peduncle.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Décor</h3>
<p>A single adult <em>H. malabaricus</em> (up to 50 cm) requires a minimum 125-gallon (475 L) aquarium with dimensions of at least 180 cm long × 45 cm wide × 50 cm tall (72 × 18 × 20 inches). The tank must be wide enough for the fish to turn comfortably and long enough to accommodate its ambush hunting behaviour. For the larger <em>H. aimara</em>, scale up to 300 gallons minimum.</p>
<p>A secure, heavy lid is absolutely essential. Wolf Fish are powerful jumpers, particularly when startled or newly introduced. Use a glass or polycarbonate canopy weighted with clips or locks — a standard screen top will not contain a panicked adult Wolf Fish.</p>
<p>Décor should replicate the cluttered, dimly lit environments where Wolf Fish feel most secure:</p>
<ul>
<li><strong>Substrate:</strong> Fine sand (pool filter sand, CaribSea Super Naturals) in a dark colour. Wolf Fish spend considerable time resting on the bottom.</li>
<li><strong>Driftwood:</strong> Large pieces of Mopani, Manzanita, or spider wood creating caves and overhangs. Wolf Fish will claim a specific hideout and use it consistently.</li>
<li><strong>Plants (optional):</strong> Hardy species such as Anubias, Java Fern, and Vallisneria. These are not essential but add visual complexity and help reduce light intensity. Avoid delicate plants — the fish's movement will uproot them.</li>
<li><strong>Indian almond leaves or oak leaves:</strong> A layer of dried leaves on the substrate replicates the leaf-litter habitat and releases tannins that lower pH and provide mild antimicrobial benefits.</li>
</ul>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Wolf Fish produce a heavy bioload relative to their size — they eat large, protein-rich meals and generate correspondingly large waste. A canister filter rated for 1.5–2× your tank volume (for a 125-gallon tank, use a filter rated for 200–250 gallons) provides the mechanical and biological filtration capacity required. FX-series canisters (Fluval FX4 or FX6) are a proven choice for predator tanks.</p>
<p>Flow should be moderate — 6–8× turnover per hour. Wolf Fish are ambush predators from still-water environments; they do not appreciate strong current. Direct the filter output along the back glass to create a gentle circulation pattern without a pronounced flow path through the centre of the tank.</p>
<p>Maintain ammonia and nitrite at 0 ppm. Wolf Fish are hardier than many tropicals, but chronic low-level ammonia exposure will erode gill tissue and predispose to secondary bacterial infections. Nitrate should be kept below 40 ppm through weekly 25–30% water changes. Wolf Fish are tolerant of moderate nitrate, but cleaner water means better colour and more active behaviour.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). Maintain with a titanium or polycarbonate-guarded heater — glass heaters can be shattered by a startled Wolf Fish.</li>
<li><strong>pH:</strong> 5.5–7.5. Wolf Fish are genuinely tolerant across this range. Stability matters more than targeting a specific value. If your tap water is pH 7.2 and stable, that is perfectly acceptable.</li>
<li><strong>GH:</strong> 2–15 dGH. Soft water is preferred for breeding but not required for maintenance.</li>
<li><strong>KH:</strong> 1–8 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> &lt;40 ppm. Below 20 ppm is ideal.</li>
</ul>
<p>Wolf Fish will tolerate sub-optimal conditions better than most tropical species — they survive in roadside ditches in the wild — but this should never be taken as licence to neglect water quality. A healthy, well-maintained Wolf Fish displays richer colouration, more active hunting behaviour, and a longer lifespan than one kept in marginal conditions.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Wolf Fish are obligate carnivores with a strong preference for whole, meaty foods. In the wild, their diet consists primarily of fish, frogs, crustaceans, and large aquatic insects. In captivity, the following staple foods provide complete nutrition:</p>
<ul>
<li><strong>White fish fillets:</strong> Tilapia, pollock, or cod — cut into strips appropriate for the fish's mouth size. Feed 2–3 times per week for adults.</li>
<li><strong>Market prawns:</strong> Shell-on, deveined. A staple food that provides excellent protein and calcium from the shell. 2–3 times per week.</li>
<li><strong>Earthworms (nightcrawlers):</strong> A highly nutritious live food that almost all Wolf Fish accept eagerly. Rinse thoroughly before feeding. 1–2 times per week.</li>
<li><strong>Smelt or silversides:</strong> Whole, thawed. An excellent source of omega-3 fatty acids. 1–2 times per week.</li>
<li><strong>High-quality carnivore pellets:</strong> Hikari Massivore or Northfin Predator Formula. Not all Wolf Fish will accept pellets, but those that do benefit from the balanced vitamin and mineral profile. Soak before feeding to prevent air ingestion.</li>
</ul>
<p>Feed adults 4–5 times per week, offering a portion equivalent to roughly 3–5% of body weight per feeding. One or two fasting days per week support digestive health. Juveniles (under 20 cm) should be fed daily.</p>
<p>Avoid feeder goldfish and rosy reds. These introduce parasites and disease, provide poor nutritional value, and their thiaminase content depletes vitamin B1 over time. If you wish to feed live fish, use captive-bred guppies or mollies quarantined for 14+ days.</p>

<h3 id="safe-handling">Safe Handling</h3>
<p>Wolf Fish have teeth capable of inflicting deep lacerations. Never place your hands in the tank during feeding. Use long (30+ cm) feeding tongs or forceps for all food delivery. When performing tank maintenance, be aware of the fish's location at all times — Wolf Fish will bite defensively if they feel cornered.</p>
<p>For transport or medical examination, use a thick, knotless mesh net and transfer the fish into a container rather than lifting it free of the water in the net. Wet towels draped over the container reduce stress and prevent jumping. Wear cut-resistant gloves if you must handle the fish directly.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Wolf Fish are solitary, territorial predators with a surprisingly developed personality. Experienced keepers consistently report that Wolf Fish recognise their owner, respond differently to different people, and develop individual behavioural quirks. They will approach the front glass when their keeper enters the room, "beg" at feeding time by hovering vertically at the surface, and retreat when unfamiliar people are present.</p>
<p>For most of the day, the Wolf Fish will rest motionless in or near its chosen hiding spot — a behaviour that reflects its ambush hunting strategy. Activity increases during dawn and dusk, when the fish patrols the tank perimeter. Do not mistake its stillness for lethargy; when food is detected, the Wolf Fish transitions from stone-like stillness to explosive violence in under a second.</p>
<p>Aggression toward tank mates is prey-driven rather than territorial in the conventional sense. The Wolf Fish does not care about territory — it cares about whether something fits in its mouth. Any fish small enough to be swallowed will be eaten, full stop. Anything too large to eat is generally ignored.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>The safest approach is species-only housing. However, for keepers who want a multi-species predator tank, the following guidelines apply:</p>
<ul>
<li><strong>Minimum tank mate size:</strong> At least 60% of the Wolf Fish's body length. For a 40 cm Wolf Fish, tank mates must be 24+ cm.</li>
<li><strong>Proven companions:</strong> Large Plecostomus (Common, Sailfin, Royal — 30+ cm), Bichirs (<em>Polypterus</em> spp. — armoured and bottom-dwelling), large Synodontis catfish, Oscar (<em>Astronotus ocellatus</em> — in 200+ gallon systems).</li>
<li><strong>Risky but sometimes successful:</strong> Arowana (in very large systems — 300+ gallons with different activity zones), large cichlids (Jaguar Cichlid, Dovii).</li>
<li><strong>Avoid:</strong> Any fish under 15 cm, slow-moving mid-water species (freshwater angelfish, Discus), schooling fish, and anything with long trailing fins.</li>
</ul>

<h2 id="breeding">Breeding</h2>
<p><em>Hoplias malabaricus</em> can be bred in captivity, though it requires patience and a dedicated breeding setup. The species exhibits biparental care — both male and female guard the nest and fry, a relatively unusual behaviour among characins.</p>
<p>Breeding conditions:</p>
<ul>
<li><strong>Tank:</strong> A dedicated 180+ gallon breeding tank with a flat stone or cleared area of fine sand as a spawning substrate.</li>
<li><strong>Water:</strong> Soft (2–5 dGH), acidic (pH 5.5–6.5), and warm (27–28 °C). A gradual temperature increase of 2 °C combined with a large (50%) water change using cooler, softer water can simulate the onset of the rainy season and trigger spawning behaviour.</li>
<li><strong>Conditioning:</strong> Feed the pair a high-quality, varied diet for 4–6 weeks prior to the spawning attempt. Live earthworms and whole fish are ideal conditioning foods.</li>
<li><strong>Spawning:</strong> The pair cleans a flat surface, and the female deposits 2,000–10,000 adhesive eggs in a single layer. Both parents fan and guard the eggs aggressively — do not attempt to add or remove fish from the tank during this period. Eggs hatch in 48–72 hours at 27 °C.</li>
<li><strong>Fry care:</strong> Fry become free-swimming in 5–7 days and can be fed newly hatched brine shrimp nauplii. Growth is rapid; juveniles reach 5 cm within 6–8 weeks. Begin separating fry by size after 4 weeks, as cannibalism is common.</li>
</ul>

<h2 id="common-health-issues">Common Health Issues</h2>
<p>Wolf Fish are among the hardiest tropical freshwater species, with a robust immune system adapted to the variable and often marginal conditions of their native habitats. Health issues in captivity are almost invariably linked to water quality, diet, or introduction of pathogens via live foods.</p>
<ul>
<li><strong>Bacterial infections:</strong> Red ulcers or fin erosion, typically caused by <em>Aeromonas</em> or <em>Pseudomonas</em> bacteria secondary to water quality issues or physical injury. Treat with antibiotics (kanamycin, nitrofurazone) after improving water quality. Quarantine and isolate affected fish.</li>
<li><strong>Internal parasites:</strong> Common in wild-caught specimens. A prophylactic deworming course with praziquantel (PraziPro at 2.5 mg/L for 5–7 days) and metronidazole (250 mg per 40 litres, repeated after 48 hours) during the initial quarantine period is advisable for newly imported fish.</li>
<li><strong>Mouth/jaw injury:</strong> Wolf Fish can injure their mouth striking at tank glass or hard décor. Ensure no sharp edges on rock or driftwood, and consider covering the inside of the front glass with a dark film during the acclimation period to prevent the fish from lunging at its reflection.</li>
<li><strong>Obesity:</strong> Overfed Wolf Fish develop fatty liver disease (hepatic lipidosis). Maintain the recommended feeding schedule of 4–5 meals per week for adults and avoid the temptation to feed daily. A slightly lean Wolf Fish is a healthy Wolf Fish.</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Are Wolf Fish aggressive?',
        answer:
          'Wolf Fish are ambush predators rather than territorially aggressive fish. They will eat anything small enough to fit in their mouth but generally ignore fish too large to swallow. They are not "aggressive" in the way cichlids are — they do not chase, display, or posture. Their danger comes from predatory instinct and powerful jaws.',
      },
      {
        question: 'Can Wolf Fish bite through skin?',
        answer:
          'Yes. Wolf Fish have interlocking canine-like teeth designed to grip and hold struggling prey. A bite from an adult specimen (40+ cm) can easily penetrate skin and cause deep lacerations requiring medical attention. Always use long feeding tongs and maintain awareness of the fish\'s position during tank maintenance.',
      },
      {
        question: 'What size tank does a Wolf Fish need?',
        answer:
          'A single adult Hoplias malabaricus (up to 50 cm) requires a minimum 125-gallon (475 L) aquarium measuring at least 180 cm long. For the larger Hoplias aimara (up to 100 cm), a minimum 300-gallon tank is required. Secure lids are essential — Wolf Fish are powerful jumpers.',
      },
      {
        question: 'Can you keep Wolf Fish with other fish?',
        answer:
          'Yes, with careful selection. Tank mates must be at least 60% of the Wolf Fish\'s body length and occupy different zones of the water column. Proven companions include large Plecostomus, Bichirs, and Synodontis catfish. Any fish small enough to fit in the Wolf Fish\'s mouth will eventually be eaten.',
      },
      {
        question: 'What do Wolf Fish eat in captivity?',
        answer:
          'Wolf Fish thrive on a diet of white fish fillets (tilapia, pollock), shell-on market prawns, earthworms, smelt, and high-quality carnivore pellets. Feed adults 4–5 times per week with 1–2 fasting days. Avoid feeder goldfish due to parasite and thiaminase concerns.',
      },
      {
        question: 'How long do Wolf Fish live?',
        answer:
          'Well-maintained Wolf Fish (Hoplias malabaricus) live 15–20 years in captivity. Wild specimens may exceed this. Lifespan depends on water quality, diet variety, and appropriate tank size. Avoid overfeeding, which leads to fatty liver disease and premature death.',
      },
      {
        question: 'Do Wolf Fish need a heater?',
        answer:
          'Yes, unless your room temperature consistently stays above 24 °C. Wolf Fish thrive at 24–28 °C. Use a titanium or guard-protected heater — Wolf Fish can shatter glass heaters with their powerful strikes. Inline heaters in the canister filter return are the safest option.',
      },
      {
        question: 'Are Wolf Fish legal to keep?',
        answer:
          'Hoplias malabaricus is legal to keep in most US states and throughout Europe. However, some jurisdictions restrict or prohibit ownership of predatory non-native fish species. Check your state and local regulations before purchasing. Wolf Fish should never be released into natural waterways.',
      },
    ],
    sources: [
      {
        title: 'Hoplias malabaricus (Bloch, 1794)',
        url: 'https://www.fishbase.se/summary/Hoplias-malabaricus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Molecular phylogeny and biogeography of the Hoplias malabaricus species complex',
        url: 'https://doi.org/10.1016/j.ympev.2014.09.022',
        publisher: 'Molecular Phylogenetics and Evolution',
      },
      {
        title:
          'Reproductive biology of Hoplias malabaricus in a Neotropical floodplain',
        url: 'https://doi.org/10.1590/S1679-62252010000300006',
        publisher: 'Neotropical Ichthyology',
      },
      {
        title:
          'Feeding ecology and diet composition of Hoplias malabaricus across seasonal and spatial gradients',
        url: 'https://doi.org/10.1007/s10641-016-0528-0',
        publisher: 'Environmental Biology of Fishes',
      },
    ],
    relatedSlugs: [
      'platinum-arowana',
      'flowerhorn-cichlid',
      'gem-tang',
    ],
  },

  // ─────────────────────────────────────────────
  // 5. Flowerhorn Cichlid
  // ─────────────────────────────────────────────
  {
    title: 'Flowerhorn Cichlid Care Guide',
    slug: 'flowerhorn-cichlid',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-01-27',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/flowerhorn-cichlid-hero.jpg',
    heroImageAlt:
      'Mature Flowerhorn Cichlid displaying a prominent nuchal hump and vivid red-and-pearl colouration',
    metaTitle:
      'Flowerhorn Cichlid (Amphilophus spp. Hybrid): Complete Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete Flowerhorn Cichlid care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion:
      'What is the best way to care for a Flowerhorn Cichlid?',
    quickAnswer:
      'Flowerhorn Cichlid thrive in a 75+ gallon aquarium with neutral to slightly alkaline water (pH 7.0–8.0, 26–30 °C) and powerful filtration. They are highly aggressive cichlids best kept alone. Feed a high-quality cichlid pellet supplemented with shrimp, earthworms, and occasional live foods to enhance their nuchal hump and colouration.',
    summary:
      'The Flowerhorn Cichlid is a man-made hybrid originating from Malaysian and Taiwanese breeding programmes in the late 1990s, primarily involving crosses between <em>Amphilophus citrinellus</em> (Midas Cichlid), <em>Amphilophus trimaculatus</em> (Trimac), and various Central American cichlid species. Celebrated for its prominent nuchal hump (kok), vivid colouration, and interactive personality, the Flowerhorn has become one of the most commercially successful ornamental fish in history. This guide covers the husbandry of all major Flowerhorn strains — from the classic Zhen Zhu (Pearl) to the Super Red Dragon and King Kamfa — with specific attention to hump development, colour enhancement, and the aggressive temperament that makes this fish both fascinating and challenging.',
    scientificName: 'Hybrid (Amphilophus spp.)',
    category: 'cichlid',
    keyFacts: [
      { label: 'Scientific Name', value: 'Hybrid (Amphilophus citrinellus × A. trimaculatus and others)' },
      { label: 'Max Size', value: '30–40 cm (12–16 in)' },
      { label: 'Tank Size', value: '75 gallons (285 L) minimum' },
      { label: 'Temperature', value: '26–30 °C (78–86 °F)' },
      { label: 'pH', value: '7.0–8.0' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–12 years' },
      { label: 'Diet', value: 'Omnivore — pellets, shrimp, worms, vegetable matter' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'origins-and-strains', text: 'Origins & Strains', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'hump-development', text: 'Nuchal Hump Development', level: 3 },
      { id: 'colour-enhancement', text: 'Colour Enhancement', level: 3 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'hole-in-the-head', text: 'Hole in the Head (HITH)', level: 3 },
      { id: 'bloat', text: 'Bloat (Malawi Bloat Analogue)', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Flowerhorn Cichlid is an entirely artificial creation — a hybrid that does not exist in nature, produced through deliberate crosses of Central American cichlid species beginning in Malaysia and Taiwan in the late 1990s. Its appeal lies in three features: a prominent nuchal hump (called the "kok" in the Flowerhorn community), vivid red, orange, or yellow body colouration often overlaid with "pearl" or "flower" markings, and an extraordinarily interactive personality. Flowerhorn will follow their owner's movement through the room, "beg" at the glass for food, and allow — sometimes demand — physical interaction during feeding.</p>
<p>The Flowerhorn industry is a multibillion-dollar global enterprise, with competition-grade specimens selling for $5,000–$100,000+ at shows in Southeast Asia. Judging criteria emphasise hump size and shape, body proportions, colour intensity, pearl coverage, and dorsal fin profile. For the hobbyist, however, the Flowerhorn's charm lies not in competitive valuation but in its personality — no other aquarium fish provides the same level of interactive engagement.</p>
<p>Flowerhorn husbandry is relatively straightforward compared to many exotic species, but the fish's extreme aggression demands a specific management approach. This is almost certainly a fish that will be kept alone, and the keeper must accept that this single specimen will be the sole inhabitant of a 75+ gallon system. Those who embrace this arrangement discover one of the most rewarding fish-keeping experiences available.</p>

<h2 id="origins-and-strains">Origins & Strains</h2>
<p>The Flowerhorn's origins trace to Malaysian hobbyists in the late 1990s who crossed Blood Parrot cichlids (themselves a hybrid of <em>Amphilophus citrinellus</em> and <em>Paraneetroplus synspilus</em>) with various Central American cichlids, primarily <em>Amphilophus trimaculatus</em> (Trimac Cichlid). Subsequent generations were selectively bred for hump development, colour, and body shape. Today, the major Flowerhorn strains include:</p>
<ul>
<li><strong>Zhen Zhu (Pearl):</strong> The original and most widely available strain. Characterised by pearl-like floral markings across the body, a well-developed kok, and red or orange base colouration. Available from $30 to $5,000+ depending on quality.</li>
<li><strong>Kamfa:</strong> Developed from crosses incorporating <em>Vieja synspila</em> and possibly <em>Vieja melanurus</em>. Kamfa strains feature a more compact, rounded body, larger eyes, shorter face, and the prized "water head" kok (a smooth, bulbous hump). King Kamfa specimens with exceptional pearl and colour can exceed $10,000.</li>
<li><strong>Super Red Dragon (SRD):</strong> Bred for intense, uniform red colouration across the entire body. SRD Flowerhorn lack the pearl markings of Zhen Zhu and Kamfa strains, instead displaying a clean, saturated red from head to tail. Top specimens command $5,000–$20,000.</li>
<li><strong>Golden Monkey / Golden Base:</strong> A strain emphasising golden-yellow body colour with red trim on fins and facial features. Less common than red strains but increasingly popular.</li>
<li><strong>Thai Silk / Titanium:</strong> A short-bodied, metallic blue-silver strain with reduced hump development but striking iridescent colouration. Considered a separate category by some Flowerhorn organisations.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>A single adult Flowerhorn requires a minimum 75-gallon (285 L) aquarium. For large males (35+ cm) or if you intend to attempt any form of tank-mate introduction, 125 gallons (475 L) is the minimum. The tank should measure at least 120 cm long × 45 cm wide × 50 cm tall (48 × 18 × 20 inches) to provide adequate swimming space.</p>
<p>Flowerhorn tanks are typically kept bare-bottom or with a thin layer of sand for ease of cleaning. These fish produce a heavy bioload, and a bare bottom simplifies waste removal via siphoning. If you prefer a substrate, use fine pool filter sand in a layer no deeper than 2 cm — deep sand beds trap detritus in a high-waste predator tank.</p>
<p>Décor should be minimal and robust. Flowerhorn will rearrange anything they can move — decorations weighing less than 2 kg will be pushed to the corners or flipped. Large ceramic pots (turned on their side as caves), heavy slate rocks, and PVC pipe sections provide enrichment without the risk of injury. Avoid sharp-edged rocks that could damage the nuchal hump during the fish's inevitable rearrangement efforts.</p>
<p>Many competition-oriented keepers house their Flowerhorn in bare tanks with a mirror placed against one end for 15–30 minutes daily. The mirror stimulation encourages the fish to flare, which some breeders believe promotes hump growth (through increased blood flow and hormonal response). Whether this is effective is debated, but it undeniably provides behavioural enrichment.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Flowerhorn produce substantial waste. Budget for filtration rated at 2× your tank volume — for a 75-gallon tank, use filters rated for 150+ gallons. A large canister filter (Fluval FX4, Eheim 2262) combined with a sponge filter for supplemental biological capacity is a proven configuration. If your setup allows it, a sump with a wet/dry trickle tower provides the gas exchange and biological capacity that predator tanks demand.</p>
<p>Flow can be moderate to strong — 8–12× turnover per hour. Flowerhorn are powerful swimmers from river-adjacent habitats and handle current better than many other large cichlids. Strong flow also helps keep waste in suspension for mechanical filtration to capture.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 26–30 °C (78–86 °F). Higher temperatures (28–30 °C) are often used during growth phases and for hump development, as they increase metabolic rate and feeding response. Reduce to 26–27 °C for maintenance of fully grown adults.</li>
<li><strong>pH:</strong> 7.0–8.0. Flowerhorn are adaptable across this range. Most breeders in Southeast Asia maintain pH 7.4–7.8.</li>
<li><strong>GH:</strong> 8–20 dGH. Moderately hard water is preferred and typical of Central American cichlid habitats.</li>
<li><strong>KH:</strong> 4–10 dKH. Adequate buffering prevents pH crashes in these high-bioload systems.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;30 ppm. Weekly water changes of 25–40% are standard practice for Flowerhorn keepers. Many competition breeders perform daily 20% changes during growth phases.</li>
</ul>
<p>Water changes are the single most important factor in Flowerhorn health and appearance. Clean water promotes vibrant colour, healthy hump growth, and strong immune function. Flowerhorn kept in old, nitrate-rich water display washed-out colour, reduced hump size, and increased susceptibility to hole-in-the-head disease. There is no substitute for regular, generous water changes.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Flowerhorn are enthusiastic, indiscriminate feeders — they will eat virtually anything offered. The challenge is not getting them to eat but ensuring the diet promotes optimal colour, hump growth, and long-term health without causing obesity or digestive issues.</p>
<p>A staple diet should be built around high-quality cichlid pellets formulated for large Central American species:</p>
<ul>
<li><strong>Primary pellets (60–70% of diet):</strong> Grand Sumo (the gold standard in the Flowerhorn community for hump growth), Okiko Platinum, or Northfin Cichlid Formula. These pellets are formulated with astaxanthin and other carotenoids for colour enhancement and high protein content (40%+) for growth.</li>
<li><strong>Supplemental protein (20–30%):</strong> Market prawns (shell-on), earthworms, bloodworms (frozen, not live — to avoid parasites), and krill. These provide dietary variety and essential nutrients that pellets alone cannot deliver.</li>
<li><strong>Vegetable matter (5–10%):</strong> Blanched peas (shelled), spirulina flakes, or nori strips. Vegetable fibre supports digestive health and helps prevent the bloat that plagues overfed cichlids.</li>
</ul>
<p>Feed juveniles (under 15 cm) 2–3 times daily with portions consumed in 2–3 minutes. Sub-adults (15–25 cm) should be fed twice daily. Adults (25+ cm) can be fed once daily with one fasting day per week.</p>

<h3 id="hump-development">Nuchal Hump Development</h3>
<p>The nuchal hump is a fat and fluid deposit on the forehead that is genetically determined but environmentally influenced. Not all Flowerhorn will develop a large kok — genetics is the primary factor, and no amount of dietary manipulation will produce a competition-grade hump on a fish that lacks the genetic predisposition. That said, the following factors maximise hump potential:</p>
<ul>
<li><strong>Genetics:</strong> Source from breeders with documented hump lineage. Both parents should display strong kok development.</li>
<li><strong>Diet:</strong> High-protein pellets (Grand Sumo, Okiko) with supplemental live and frozen foods. Some keepers report that the chitin in prawn shells and the collagen in earthworms specifically benefit hump growth, though this is anecdotal.</li>
<li><strong>Water quality:</strong> Pristine conditions with frequent water changes. Hump size can visibly decrease in poor water conditions.</li>
<li><strong>Isolation:</strong> Flowerhorn kept alone develop larger humps than those housed with competitors. The stress of tank mates diverts energy from hump growth to immune and stress responses.</li>
<li><strong>Temperature:</strong> Slightly elevated temperatures (28–30 °C) during the growth phase (6–18 months) increase metabolic rate and feeding aggression, supporting faster growth and hump development.</li>
</ul>

<h3 id="colour-enhancement">Colour Enhancement</h3>
<p>Flowerhorn colour is a combination of genetics, diet, and environment. To maximise colour intensity:</p>
<ul>
<li><strong>Carotenoid-rich foods:</strong> Astaxanthin and canthaxanthin are the primary pigments responsible for red colouration. Grand Sumo, Okiko, and similar Flowerhorn-specific pellets contain high concentrations. Supplement with krill (naturally rich in astaxanthin) and spirulina (which enhances blue and green iridescence).</li>
<li><strong>Dark substrate or bare bottom:</strong> Flowerhorn display more intense colouration against dark backgrounds. Some keepers use black tank backgrounds and dark sand to stimulate melanophore contraction, which makes xanthophore (red/yellow) pigments appear more vivid.</li>
<li><strong>Lighting:</strong> Full-spectrum LED lighting in the 6,500–10,000 K range showcases Flowerhorn colour most accurately. Avoid excessively blue lighting (>14,000 K), which distorts red tones.</li>
<li><strong>Water quality:</strong> Clean, well-oxygenated water. Poor conditions cause mucus overproduction that dulls colour. Regular water changes visibly improve colour within days.</li>
</ul>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Flowerhorn are among the most aggressive freshwater fish in the hobby. Their aggression is not selective — they will attack conspecifics, heterospecifics, your hand, the siphon hose, and the magnetic algae scrubber with equal ferocity. This aggression is a feature, not a bug — it is inextricably linked to the personality traits that make Flowerhorn so engaging. A docile Flowerhorn would not be a Flowerhorn.</p>
<p>Flowerhorn bond with their primary keeper in a way that few fish can match. They will swim to the front of the tank when their person enters the room, follow a pointing finger from one end of the tank to the other, allow their kok to be touched (though this should be done sparingly and with wet hands to avoid removing the slime coat), and display obvious agitation when fed by anyone other than their regular keeper. This intelligence and interactivity is the fundamental reason for the species' enduring popularity.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>The honest recommendation is: do not keep Flowerhorn with other fish. The vast majority of tank mate introductions end with the tank mate dead, injured, or cowering in a corner with shredded fins. If you insist on trying, observe the following:</p>
<ul>
<li><strong>Tank size:</strong> 200+ gallons minimum. In a 75-gallon tank, there is no safe tank mate.</li>
<li><strong>Acrylic dividers:</strong> Many keepers use a clear acrylic divider to split the tank, giving each fish its own territory while allowing visual interaction. This is the safest approach for keeping a Flowerhorn alongside another large cichlid.</li>
<li><strong>Occasionally tolerated:</strong> Large, fast-moving Plecostomus (18+ inches), adult Bichirs (armour provides protection), very large Oscar (in 250+ gallon systems — monitor constantly).</li>
<li><strong>Almost always killed:</strong> Other Flowerhorn (unless a proven mated pair during breeding), small cichlids, any fish under 20 cm, any slow-moving or long-finned species.</li>
</ul>

<h2 id="breeding">Breeding</h2>
<p>Breeding Flowerhorn is straightforward in terms of the spawning act itself but complex in terms of producing quality offspring. As hybrids, Flowerhorn genetics are inherently unstable, and a spawn between two competition-grade parents may produce fry ranging from stunning to utterly plain.</p>
<p>Breeding protocol:</p>
<ul>
<li><strong>Pairing:</strong> Place the male and female in the same tank with a clear acrylic divider between them. Allow them to see and interact through the divider for 7–14 days. Look for signs of compatibility: the female displaying vertical barring, both fish "vibrating" or "lip-locking" through the divider. If the male attacks the divider relentlessly with gill-flare displays and body slams, try a different female.</li>
<li><strong>Spawning:</strong> Remove the divider when compatibility signs are strong. Monitor continuously for the first 2–4 hours. The female will clean a flat surface (a ceramic plate or flat stone) and deposit 500–2,000 eggs. The male fertilises them immediately. If aggression escalates to serious injury (torn fins, scale loss), separate immediately and retry later or with a different mate.</li>
<li><strong>Egg care:</strong> Remove the male after spawning — he may eat the eggs or attack the female. The female can tend the eggs, which hatch in 72–96 hours at 28 °C. Alternatively, remove both parents and add an airstone for gentle water circulation over the eggs, along with methylene blue (1 ppm) to prevent fungal infection.</li>
<li><strong>Fry rearing:</strong> Free-swimming fry can be fed baby brine shrimp nauplii (Artemia) from day 5. Transition to crushed pellets at 3–4 weeks. Grade aggressively — separate the best-coloured, best-shaped fry into grow-out tanks and cull or sell the rest. By 3–4 months, individual quality becomes apparent.</li>
</ul>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="hole-in-the-head">Hole in the Head (HITH)</h3>
<p>Hole-in-the-head disease is the most common health issue in Flowerhorn and presents as pitting erosion on the head and lateral line, often with white, stringy mucus trailing from the lesions. The condition is multifactorial — contributing causes include the flagellate parasite <em>Hexamita</em>, poor water quality (chronically elevated nitrate), vitamin deficiency (particularly vitamins A and C), and activated carbon use.</p>
<p>Treatment: Metronidazole at 250 mg per 40 litres for 3 days (50% water change between doses), combined with improving water quality (increase water change frequency to 40% every other day), enriching the diet with vitamin-soaked foods, and removing activated carbon from filtration. Early-stage HITH is fully reversible. Advanced cases leave permanent scarring.</p>

<h3 id="bloat">Bloat (Malawi Bloat Analogue)</h3>
<p>Bloat in Flowerhorn presents as abdominal swelling, loss of appetite, stringy white faeces, and lethargy. It is typically caused by internal flagellate parasites (<em>Hexamita</em>, <em>Spironucleus</em>) or bacterial infection of the gut, often triggered by overfeeding, poor water quality, or dietary imbalance (excess protein, insufficient fibre).</p>
<p>Treatment: Stop feeding immediately. Treat with metronidazole (250 mg per 40 litres) and Epsom salt (1 tablespoon per 20 litres) to reduce fluid retention. Perform daily 30% water changes during treatment. Resume feeding with blanched, shelled peas as the first food after symptoms resolve, then gradually reintroduce pellets. Prevention: include vegetable matter in the diet weekly, maintain impeccable water quality, and avoid overfeeding.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Flowerhorn Cichlids get?',
        answer:
          'Adult male Flowerhorn typically reach 30–40 cm (12–16 inches) depending on genetics and strain. Females are smaller, usually 25–30 cm. Some exceptional Kamfa and SRD males can reach 40 cm. Growth rate is fastest in the first 12–18 months with proper nutrition and water quality.',
      },
      {
        question: 'Can Flowerhorn live with other fish?',
        answer:
          'Flowerhorn are extremely aggressive and are best kept alone. In tanks of 200+ gallons, some keepers have success with large Plecostomus or armoured Bichirs, but most tank mate introductions fail. Using an acrylic divider to separate a Flowerhorn from another large cichlid is the safest approach for a multi-fish display.',
      },
      {
        question: 'How do you make a Flowerhorn\'s hump grow bigger?',
        answer:
          'Hump size is primarily genetic — not all Flowerhorn will develop a large kok. To maximise genetic potential: feed high-protein Flowerhorn-specific pellets (Grand Sumo, Okiko), keep the fish alone (reduces stress), maintain pristine water with frequent changes, and keep temperatures at 28–30 °C during the growth phase. Mirror stimulation for 15–30 minutes daily may also help.',
      },
      {
        question: 'What is the best food for Flowerhorn?',
        answer:
          'Grand Sumo and Okiko Platinum are the gold-standard pellets in the Flowerhorn community, formulated specifically for hump growth and colour enhancement. Supplement with market prawns, earthworms, frozen bloodworms, and blanched peas for a balanced diet. Feed juveniles 2–3 times daily; adults once daily with a weekly fast day.',
      },
      {
        question: 'How much does a Flowerhorn cost?',
        answer:
          'Pet-quality Flowerhorn start at $30–$100. Good-quality Zhen Zhu or Kamfa with visible hump and colour range from $200–$2,000. Competition-grade specimens with exceptional hump, pearl coverage, and colouration sell for $5,000–$100,000+ at Southeast Asian shows. Super Red Dragon and King Kamfa are the most expensive strains.',
      },
      {
        question: 'Are Flowerhorn found in the wild?',
        answer:
          'Flowerhorn do not exist in the wild — they are entirely man-made hybrids. Unfortunately, released Flowerhorn have established feral populations in parts of Southeast Asia, Australia, and the southern United States, where they are considered an invasive species. Never release aquarium fish into natural waterways.',
      },
    ],
    sources: [
      {
        title:
          'Hybrid origin of the Flowerhorn cichlid: evidence from mitochondrial and nuclear DNA',
        url: 'https://doi.org/10.1007/s10592-007-9312-0',
        publisher: 'Conservation Genetics',
      },
      {
        title:
          'Amphilophus citrinellus (Günther, 1864)',
        url: 'https://www.fishbase.se/summary/Amphilophus-citrinellus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Invasive Flowerhorn cichlids in tropical waterways: ecological impacts and management challenges',
        url: 'https://doi.org/10.1007/s10530-016-1206-3',
        publisher: 'Biological Invasions',
      },
      {
        title:
          'Nutritional requirements of ornamental cichlids with emphasis on carotenoid pigmentation',
        url: 'https://doi.org/10.1016/j.aquaculture.2018.08.047',
        publisher: 'Aquaculture',
      },
      {
        title:
          'Hole-in-the-Head Disease: Aetiology, Pathogenesis, and Treatment in Cichlidae',
        url: 'https://doi.org/10.1111/jfd.12901',
        publisher: 'Journal of Fish Diseases',
      },
    ],
    relatedSlugs: [
      'platinum-arowana',
      'wolf-fish',
      'gem-tang',
      'peppermint-angelfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 6. Black Diamond Stingray
  // ─────────────────────────────────────────────
  {
    title: 'Black Diamond Stingray (Potamotrygon leopoldi): Complete Care Guide & Tank Setup',
    slug: 'black-diamond-stingray',
    type: 'species',
    category: 'stingray',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/black-diamond-stingray-hero.jpg',
    heroImageAlt:
      'Black Diamond Stingray resting on sandy substrate displaying vivid white polka-dot pattern against jet-black disc',
    metaTitle:
      'Black Diamond Stingray Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Expert Black Diamond Stingray care guide covering tank size, water parameters, diet, breeding & health. Trusted advice from The Fish Collection aquarists.',
    quickAnswerQuestion:
      'How do you care for a Black Diamond Stingray?',
    quickAnswer:
      'Black Diamond Stingrays need a minimum 300-gallon aquarium with a fine sand substrate, soft acidic water (pH 5.5–6.8, 26–30 °C), and a protein-rich diet of earthworms, shrimp, and mussel. They are bottom-dwelling predators best housed with large mid-water tank mates that will not nip their disc.',
    summary:
      'The Black Diamond Stingray (Potamotrygon leopoldi), endemic to the Xingu River basin in Brazil, is one of the most striking freshwater rays in the hobby. Its jet-black disc adorned with bold white spots commands premium prices and demands expert-level husbandry. This guide covers every aspect of Black Diamond Stingray care — from water chemistry and tank dimensions to diet, breeding, and disease prevention — drawing on The Fish Collection\'s years of direct import and keeping experience.',
    scientificName: 'Potamotrygon leopoldi',
    keyFacts: [
      { label: 'Scientific Name', value: 'Potamotrygon leopoldi' },
      { label: 'Max Size', value: '45 cm (18 in) disc diameter' },
      { label: 'Tank Size', value: '300 gallons (1,135 L) minimum' },
      { label: 'Temperature', value: '26–30 °C (78–86 °F)' },
      { label: 'pH', value: '5.5–6.8' },
      { label: 'Care Level', value: 'Expert' },
      { label: 'Lifespan', value: '15–20 years in captivity' },
      { label: 'Diet', value: 'Carnivore — live and frozen protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Substrate', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'stingray-death-curl', text: 'Death Curl', level: 3 },
      { id: 'bacterial-infections', text: 'Bacterial Infections', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Black Diamond Stingray (<em>Potamotrygon leopoldi</em>) is widely regarded as the crown jewel of freshwater stingrays. Endemic to the clear, fast-flowing rapids of Brazil's Xingu River, this species captivates collectors with its jet-black dorsal disc punctuated by brilliantly white, geometrically arranged spots — a pattern unique to each individual, much like a human fingerprint. First scientifically described in 1981, P. leopoldi has since become one of the most sought-after Potamotrygon species in the global ornamental fish trade.</p>
<p>At The Fish Collection, we have worked directly with licensed Brazilian exporters and captive-breeding facilities since our founding. Every Black Diamond Stingray we offer is accompanied by full IBAMA export documentation and a veterinary health certificate. This guide reflects our hands-on experience with hundreds of specimens and is designed to give serious keepers the information they need to provide optimal long-term care.</p>
<p>Ownership of a Black Diamond Stingray is not a casual commitment. These are large, messy predators that require immaculate water quality, spacious enclosures, and a keeper who understands the inherent risks of maintaining a venomous animal. The barbed caudal spine can deliver an extremely painful wound that requires immediate medical attention. Respect for the animal is the foundation of successful husbandry.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Potamotrygon leopoldi</em> is found exclusively in the Xingu River system in the state of Pará, Brazil. The Xingu is a clearwater tributary of the Amazon that flows over rocky substrates of granite and basalt, creating a unique environment characterised by moderate-to-strong current, warm temperatures (27–31 °C year-round), and relatively low nutrient loads compared to whitewater Amazonian tributaries. The water is soft (GH 1–4 dGH) and mildly acidic (pH 5.5–6.5), with exceptional clarity that allows sunlight to reach the riverbed.</p>
<p>In their natural habitat, Black Diamond Stingrays occupy sandy pockets between rocky outcrops, where they bury partially in substrate to ambush invertebrates, small fish, and crustaceans. During the dry season, rays concentrate in deeper pools; during the flood season, they disperse across newly inundated riparian zones to exploit fresh feeding grounds. This seasonal pattern means that in captivity, slight variations in feeding intensity and water-change volume can simulate natural cycles and promote overall vitality.</p>
<p>The Xingu River has faced significant ecological pressure from the construction of the Belo Monte hydroelectric dam complex, which has altered flow patterns and water temperatures in critical stingray habitats. This ongoing environmental threat has made responsible captive breeding and ethical sourcing more important than ever. The Fish Collection only sources specimens from IBAMA-licensed facilities that contribute to conservation programmes.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Substrate</h3>
<p>A single adult Black Diamond Stingray requires a minimum aquarium of 300 gallons (1,135 litres), with footprint dimensions of at least 240 cm long × 90 cm wide (96 × 36 inches). Floor space is paramount — stingrays are benthic animals and height is largely irrelevant beyond 45 cm (18 in). For a breeding pair or community setup, 500+ gallons with a 300 × 100 cm footprint is strongly recommended.</p>
<p>Substrate must be fine, smooth sand — never gravel, which can abrade the ray's soft ventral surface and lead to bacterial infections. Pool filter sand or aragonite-free play sand, rinsed thoroughly, is ideal. Depth should be 2–4 cm to allow the ray to bury comfortably. Avoid any sharp decorations, rough rock, or driftwood with protruding branches that could tear the delicate disc margin.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Stingrays are among the messiest freshwater fish in the hobby, producing copious ammonia from their protein-rich diet. Biological filtration must handle a turnover of at least 10× the tank volume per hour. A large sump (100–150 gallons) with ample ceramic bio-media, a fluidised moving-bed reactor, and a UV steriliser (40–57 W) is the industry standard. Maintain ammonia and nitrite at absolute zero; even trace levels of 0.25 ppm ammonia can trigger the deadly condition known as death curl.</p>
<p>Flow should be moderate and directed along the length of the tank. Stingrays appreciate current but should have calm zones behind décor where they can rest. Powerheads positioned at mid-water level create the best flow pattern. A surface skimmer is essential to manage the heavy protein film that accumulates in stingray tanks.</p>

<h3 id="lighting">Lighting</h3>
<p>Black Diamond Stingrays are not photosensitive in the way that many nocturnal species are, but they do show more natural behaviour under moderate lighting. A standard LED fixture running at 40–60% intensity on a 10-hour photoperiod works well. Avoid intense, direct lighting pointed at the substrate, which can cause the ray to remain buried for extended periods. Dimmable fixtures that simulate dawn and dusk transitions reduce stress and encourage the ray to emerge for feeding at predictable times.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Stingrays are exceptionally sensitive to dissolved waste and require pristine water quality at all times. Target the following parameters:</p>
<ul>
<li><strong>Temperature:</strong> 26–30 °C (78–86 °F). Use a titanium inline heater — submersible glass heaters are dangerous in stingray tanks, as rays can crack them against the glass.</li>
<li><strong>pH:</strong> 5.5–6.8. Stability is critical; avoid swings greater than 0.3 units per day.</li>
<li><strong>General Hardness (GH):</strong> 1–6 dGH (18–107 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 1–4 dKH. Use controlled CO₂ injection or Indian almond leaf extract to stabilise low pH without KH crashes.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — non-negotiable.</li>
<li><strong>Nitrate:</strong> &lt;10 ppm. Stingrays are far less tolerant of nitrate than most freshwater fish; weekly 30–40% water changes are the norm.</li>
<li><strong>TDS:</strong> 50–200 ppm. RO/DI water reconstituted with a GH buffer is recommended.</li>
</ul>
<p>Water changes should be performed with temperature-matched, dechlorinated water. Add new water slowly — rapid changes in conductivity or temperature can trigger acute stress. We recommend drip-filling replacement water at a rate no faster than 5% of the tank volume per hour.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Black Diamond Stingrays are carnivorous benthic predators. In the wild, they feed primarily on aquatic invertebrates, crustaceans, molluscs, and small fish. In captivity, a varied diet ensures complete nutrition and stimulates natural foraging behaviour.</p>
<p>A recommended weekly feeding schedule for an adult specimen (30+ cm disc diameter):</p>
<ul>
<li><strong>Monday/Thursday:</strong> Earthworms (nightcrawlers) — a staple food that rays eagerly accept. Offer 10–15 per session.</li>
<li><strong>Tuesday/Friday:</strong> Frozen prawns or mussel meat, thawed and rinsed. Supplement with a vitamin soak (Brightwell Vitamarin-M).</li>
<li><strong>Wednesday:</strong> Live river shrimp or ghost shrimp — excellent for maintaining the hunting response and providing enrichment.</li>
<li><strong>Saturday:</strong> Hikari Massivore pellets or Repashy Bottom Scratcher gel food. These high-quality prepared foods round out the nutritional profile.</li>
<li><strong>Sunday:</strong> Fast day to promote digestive health and reduce waste output.</li>
</ul>
<p>Avoid feeder goldfish entirely — they are nutritionally poor and carry parasites. Tilapia strips or smelt fillets are acceptable as occasional treats. Juvenile rays (under 15 cm) should be fed twice daily with smaller portions; adults are fed once daily or every other day depending on body condition.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Black Diamond Stingrays are surprisingly interactive for a benthic species. Well-acclimated specimens will learn to recognise their keeper and surface at feeding time, often accepting food directly from the hand (though hand-feeding should be approached with caution due to the venomous spine). They are generally placid but can become territorial with conspecifics, particularly males competing for access to females.</p>
<p>Rays spend much of their time partially buried in sand or slowly cruising the tank floor. They are most active during dawn and dusk periods, which is why a lighting schedule that includes gradual transitions is beneficial. A stressed or unhealthy ray will curl its disc margins upward, refuse food, and remain stationary in a corner — these are early warning signs that require immediate investigation of water quality.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must occupy the mid-to-upper water column and be too large to be eaten. Proven companions include:</p>
<ul>
<li><strong>Arowana</strong> — Asian or Silver Arowana are classic stingray companions, as they occupy the surface exclusively.</li>
<li><strong>Large Bichirs</strong> — <em>Polypterus endlicherii</em> or <em>P. ornatipinnis</em> coexist well, though monitor for food competition.</li>
<li><strong>Oscars and large cichlids</strong> — Provided the tank is spacious, Oscars generally leave rays alone.</li>
<li><strong>Plecos</strong> — Large Plecostomus (Common, Sailfin) are acceptable, but monitor for attempts to attach to the ray's disc.</li>
<li><strong>Silver Dollars</strong> — A school of 8+ provides mid-water activity without bothering the ray.</li>
</ul>
<p>Avoid all small fish (anything under 10 cm will be eaten), aggressive bottom-dwellers, and any species known to nip fins or appendages. Never house rays with pufferfish, which will bite the ray's disc.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of Black Diamond Stingrays is achievable and increasingly common among advanced hobbyists. P. leopoldi is an aplacental viviparous species — females nourish developing embryos internally via uterine milk (histotroph). Gestation lasts approximately 3–4 months, with litters of 1–4 pups typical for the species.</p>
<p>Sexing is straightforward once rays reach 20 cm disc diameter: males develop prominent claspers (modified pelvic fins) that are visibly thickened and elongated compared to the female's smooth pelvic fins. Males typically reach sexual maturity at 25–30 cm disc diameter (2–3 years), while females mature slightly later at 30–35 cm.</p>
<p>Breeding is triggered by a combination of excellent water quality, heavy feeding, and a slight temperature increase (1–2 °C above baseline). Mating can be rough — the male bites the female's disc margin to achieve positioning, which can leave visible wounds. Separate the female after confirmed mating to allow her to gestate without male harassment. Pups are born fully formed at 8–10 cm disc diameter and can be fed chopped earthworms and baby brine shrimp within 24 hours of birth.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="stingray-death-curl">Death Curl</h3>
<p>Death curl is the most feared stingray condition — the disc margins curl upward and the ray becomes lethargic, often refusing food entirely. It is almost always caused by poor water quality, particularly ammonia or nitrite spikes. Death curl can progress to a fatal outcome within 48–72 hours if not addressed. Treatment involves an immediate 50% water change with pristine RO water, addition of Seachem Prime at triple dose, and transfer to a hospital tank with bare bottom and aggressive aeration. If the ray responds to the water change within 6–12 hours, prognosis is fair; if curling persists beyond 24 hours, outcomes are poor.</p>

<h3 id="bacterial-infections">Bacterial Infections</h3>
<p>Bacterial infections — typically Aeromonas or Pseudomonas spp. — manifest as red or white lesions on the ventral disc surface. They are almost always secondary to abrasion from rough substrate, physical trauma, or chronically poor water quality. Treatment involves improving water quality, administering salt baths (1 tablespoon per 5 gallons for 30 minutes), and in severe cases, antibiotic treatment with enrofloxacin (Baytril) prescribed by an aquatic veterinarian. Maintaining smooth sand substrate and stable water parameters prevents the vast majority of bacterial issues.</p>
<p>Other conditions to monitor include internal parasites (particularly in wild-caught specimens), fungal infections on disc wounds, and nutritional deficiencies from monotonous diets. A quarterly prophylactic treatment with praziquantel is recommended for all stingray collections.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a Black Diamond Stingray cost?',
        answer:
          'Black Diamond Stingrays typically range from $1,500 for captive-bred juveniles (10–12 cm disc diameter) to $8,000–$15,000 for large adults with exceptional patterning. Premium "galaxy" pattern specimens — those with particularly dense, uniform white spots — can command prices exceeding $20,000. Wild-caught specimens with IBAMA documentation tend to carry a premium over captive-bred animals due to their often bolder patterning and genetic diversity. Prices have risen steadily over the past decade as Brazilian export quotas have tightened and demand from Asian collectors has increased. Always purchase from reputable dealers who can provide full provenance documentation.',
      },
      {
        question: 'Are Black Diamond Stingrays dangerous?',
        answer:
          'Yes, Black Diamond Stingrays possess a venomous barbed spine at the base of the tail that can inflict an extremely painful wound. The venom causes intense localised pain, swelling, and in rare cases tissue necrosis. A sting requires immediate first aid — immerse the wound in hot water (43–45 °C) for 30–90 minutes to denature the protein-based venom, and seek medical attention if symptoms persist. That said, stingrays are not aggressive and only deploy their spine defensively when startled or physically restrained. Experienced keepers learn to move slowly around the tank, never reach directly over the ray, and use feeding tongs rather than bare hands.',
      },
      {
        question: 'What size tank does a Black Diamond Stingray need?',
        answer:
          'A single adult Black Diamond Stingray requires a minimum 300-gallon (1,135 L) aquarium with a footprint of at least 240 × 90 cm (96 × 36 inches). Floor space is far more important than water depth — rays are benthic and rarely use the upper water column. For breeding pairs or community setups with Arowana or other large companions, 500+ gallons with a 300 × 100 cm footprint is strongly recommended. Juvenile rays can be started in a 125-gallon grow-out tank, but plan for the permanent enclosure before purchasing, as these animals grow quickly — a 10 cm pup can reach 30 cm disc diameter within 18 months under optimal conditions.',
      },
      {
        question: 'What do Black Diamond Stingrays eat?',
        answer:
          'Black Diamond Stingrays thrive on a varied carnivorous diet centred on earthworms (nightcrawlers), frozen prawns, mussel meat, live river shrimp, and high-quality sinking pellets such as Hikari Massivore. Earthworms are the single best staple food — they are nutritionally complete, readily accepted, and inexpensive. Avoid feeder goldfish, which carry parasites and offer poor nutrition. Juvenile rays should be fed twice daily; adults are fed once daily or every other day, with a weekly fast day. Supplement with a liquid vitamin soak (Brightwell Vitamarin-M) two to three times per week to prevent nutritional deficiencies, particularly vitamin B and calcium.',
      },
      {
        question: 'Can you keep multiple stingrays together?',
        answer:
          'Yes, Black Diamond Stingrays can be kept in groups provided the tank is sufficiently large — a minimum of 500 gallons for two to three rays, with an additional 100 gallons per additional animal. Groups work best when composed of one male and multiple females, as males can become territorial with each other and may harass a single female relentlessly during breeding season. Introduce all rays simultaneously if possible to reduce territorial establishment. Monitor carefully during the first 48 hours for aggressive disc-stacking behaviour (a dominant ray sitting on top of a subordinate), which can suffocate the lower animal. Ample floor space and multiple feeding stations reduce competition.',
      },
      {
        question: 'How long do Black Diamond Stingrays live?',
        answer:
          'With proper care, Black Diamond Stingrays live 15–20 years in captivity. Some verified specimens in public aquaria have exceeded 25 years. Longevity is directly correlated with water quality — rays kept in systems with chronically elevated nitrate (above 20 ppm) or inconsistent maintenance rarely survive beyond 8–10 years. Diet variety also plays a significant role; rays fed a monotonous diet of a single food item often develop nutritional deficiencies that shorten lifespan. The most successful long-term keepers maintain pristine water through weekly 30–40% water changes and provide a rotating diet of at least four different protein sources.',
      },
    ],
    sources: [
      {
        title: 'Potamotrygon leopoldi Castex & Castello, 1970',
        url: 'https://www.fishbase.se/summary/Potamotrygon-leopoldi.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Biology and Conservation Status of Potamotrygonid Stingrays in the Xingu River, Brazil',
        url: 'https://doi.org/10.1007/s10641-013-0133-4',
        publisher: 'Environmental Biology of Fishes',
      },
      {
        title:
          'Reproductive Biology of the Freshwater Stingray Potamotrygon leopoldi',
        url: 'https://doi.org/10.1002/jmor.20580',
        publisher: 'Journal of Morphology',
      },
      {
        title:
          'Water Quality Requirements for Ornamental Fish Species of Economic Importance',
        url: 'https://doi.org/10.1016/j.aquaculture.2019.734442',
        publisher: 'Aquaculture',
      },
    ],
    relatedSlugs: [
      'platinum-arowana',
      'zebra-pleco',
      'fire-eel',
    ],
  },

  // ─────────────────────────────────────────────
  // 7. Zebra Pleco
  // ─────────────────────────────────────────────
  {
    title: 'Zebra Pleco (Hypancistrus zebra): Complete Care Guide & Tank Setup',
    slug: 'zebra-pleco',
    type: 'species',
    category: 'pleco',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/zebra-pleco-hero.jpg',
    heroImageAlt:
      'Zebra Pleco displaying striking black and white lateral stripes while resting on a smooth river stone',
    metaTitle:
      'Zebra Pleco (Hypancistrus zebra) Care Guide | The Fish Collection',
    metaDescription:
      'Complete Zebra Pleco care guide — tank setup, water parameters, breeding & diet. Expert advice for L046 keepers from The Fish Collection.',
    quickAnswerQuestion:
      'What is the best way to care for a Zebra Pleco?',
    quickAnswer:
      'Zebra Plecos require a minimum 30-gallon aquarium with ample caves, warm well-oxygenated water (pH 6.0–7.2, 28–32 °C), and a protein-rich diet of bloodworms, brine shrimp, and high-quality sinking pellets. They are shy, nocturnal cave-dwellers best kept in a species-specific setup or with small, peaceful tank mates.',
    summary:
      'The Zebra Pleco (Hypancistrus zebra, L046) is one of the most coveted freshwater catfish in the aquarium hobby, prized for its dramatic black-and-white striped pattern. Endemic to the Xingu River in Brazil, wild populations have declined sharply due to habitat disruption from the Belo Monte dam, placing enormous value on captive-bred specimens. This comprehensive guide covers all aspects of Zebra Pleco care — from water parameters and cave design to breeding protocols and disease prevention — based on The Fish Collection\'s extensive experience with this iconic species.',
    scientificName: 'Hypancistrus zebra',
    keyFacts: [
      { label: 'Scientific Name', value: 'Hypancistrus zebra (L046)' },
      { label: 'Max Size', value: '8 cm (3.2 in)' },
      { label: 'Tank Size', value: '30 gallons (115 L) minimum' },
      { label: 'Temperature', value: '28–32 °C (82–90 °F)' },
      { label: 'pH', value: '6.0–7.2' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Omnivore — primarily protein-based' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascape', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'wasting-syndrome', text: 'Wasting Syndrome', level: 3 },
      { id: 'bacterial-skin-infections', text: 'Bacterial Skin Infections', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Zebra Pleco (<em>Hypancistrus zebra</em>), assigned the L-number L046, is arguably the most famous Loricariid catfish in the ornamental fish trade. Discovered in 1991 in the big-bend region of Brazil's Xingu River, its instantly recognisable pattern of alternating black and white lateral stripes set the aquarium world alight and single-handedly ignited the global L-number pleco craze. Despite its small adult size of just 8 cm, the Zebra Pleco commands prices that rival fish many times its size — a testament to its beauty, rarity, and the challenges of producing them in sufficient numbers.</p>
<p>In 2004, the Brazilian government banned all wild export of <em>Hypancistrus zebra</em> in response to declining populations, a situation exacerbated by the construction of the Belo Monte hydroelectric dam on the Xingu. Today, all legally available specimens are captive-bred, primarily in Germany, Indonesia, and specialist breeding facilities in the United States and Japan. The Fish Collection sources exclusively from IBAMA-compliant captive breeders and maintains our own breeding colony of over 40 adults.</p>
<p>Despite their fame, Zebra Plecos are not beginner fish. They require warmer water temperatures than most tropical species, demand high dissolved oxygen levels, and are notoriously shy — an owner who expects a visible, active fish will be disappointed. For the patient aquarist who provides the right environment, however, keeping and breeding Zebra Plecos is one of the hobby's most rewarding experiences.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Hypancistrus zebra</em> is endemic to a narrow stretch of the Xingu River between Altamira and the confluence with the Iriri River in Pará, Brazil. The Xingu is a clearwater river system characterised by warm temperatures (28–34 °C), moderate current over rocky substrates of granite and basalt, and well-oxygenated water. Zebra Plecos inhabit the deep crevices and interstices of fractured bedrock at depths of 3–10 metres, where water flow is strong enough to maintain constant oxygen exchange but not so powerful as to dislodge the small catfish from their hiding spots.</p>
<p>The water chemistry of the Xingu in this region is soft (GH 0–3 dGH) and slightly acidic to neutral (pH 6.2–7.0), with extremely low nutrient loads. The riverbed in Zebra Pleco habitat is essentially bare rock — there is no sand, mud, or organic substrate. This is important for captive care: Zebra Plecos evolved in a virtually sterile environment and are intolerant of organic detritus accumulation.</p>
<p>The Belo Monte dam has dramatically altered this habitat. Reduced flow rates, elevated water temperatures in stagnant sections, and siltation of the rocky crevices that Zebra Plecos depend on have devastated wild populations. The species is classified as Critically Endangered by the IUCN. Every captive-bred specimen represents a contribution to the insurance population against potential extinction in the wild.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascape</h3>
<p>A colony of 4–6 Zebra Plecos can be maintained in a 30-gallon (115 L) aquarium with dimensions of approximately 90 × 30 × 38 cm (36 × 12 × 15 inches). While the fish are small, territorial males maintain exclusive ownership of individual caves, so the tank must contain at least one more cave than the number of fish. For breeding colonies, 40–55 gallons is preferable, providing additional territory and reducing male-to-male aggression.</p>
<p>Aquascaping should prioritise caves above all else. Use commercially available ceramic or slate pleco caves with internal dimensions of approximately 10 cm long × 2.5 cm wide × 2 cm tall — just large enough for an adult Zebra Pleco to enter and turn around. Position caves against the back glass or between rock piles, with openings facing into the current. Substrate should be fine gravel or bare bottom — sand can clog the caves and reduce water circulation through them. Stack flat stones to create additional natural crevices.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Dissolved oxygen is the single most critical environmental parameter for Zebra Plecos. In the wild, their habitat is washed by well-aerated rapids; in captivity, you must replicate this with strong filtration and supplemental aeration. Target a turnover rate of 8–10× the tank volume per hour. A canister filter rated for a tank 2–3 times your actual volume, combined with a powerhead or wavemaker positioned to create laminar flow across the cave openings, is the standard approach.</p>
<p>An air stone connected to a quality air pump provides essential supplemental oxygenation, especially at the elevated temperatures Zebra Plecos require (28–32 °C), where dissolved oxygen capacity is naturally reduced. Maintain ammonia and nitrite at 0 ppm and nitrate below 15 ppm. Sponge pre-filters on canister intakes protect juvenile fish and reduce maintenance intervals.</p>

<h3 id="lighting">Lighting</h3>
<p>Zebra Plecos are strictly nocturnal and strongly photophobic. Standard aquarium lighting will keep them hidden in their caves throughout the photoperiod. Low-intensity red or blue moonlight LEDs allow observation of natural behaviour during dark periods without disturbing the fish. If lighting is desired for aesthetic purposes, ensure that every pleco has access to a fully darkened cave. A photoperiod of 8–10 hours of low-to-moderate light with a gradual dimming period is sufficient.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Zebra Plecos demand warm, clean, well-oxygenated water. Target the following parameters:</p>
<ul>
<li><strong>Temperature:</strong> 28–32 °C (82–90 °F). This is warmer than most tropical community tanks. A reliable heater with a digital controller is essential. For breeding, many successful breeders maintain 30–31 °C.</li>
<li><strong>pH:</strong> 6.0–7.2. Neutral to slightly acidic is preferred. Avoid pH below 5.5, which can stress the fish.</li>
<li><strong>General Hardness (GH):</strong> 2–8 dGH (36–143 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 2–6 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;15 ppm. Weekly 25–30% water changes are typical.</li>
<li><strong>Dissolved Oxygen:</strong> &gt;6 mg/L. This is the parameter most keepers overlook. Use an O₂ test kit or meter and supplement aeration if levels drop below 5 mg/L.</li>
</ul>
<p>Perform water changes with temperature-matched, dechlorinated water. Because Zebra Plecos thrive at high temperatures, ensure replacement water is pre-heated to avoid thermal shock. A mixing container with a heater is a worthwhile investment for serious keepers.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Contrary to popular belief about plecos, <em>Hypancistrus zebra</em> is not an algae eater. It is an omnivore with a strong preference for animal protein. In the wild, Zebra Plecos feed on insect larvae, micro-crustaceans, and biofilm — not the aufwuchs (algae carpet) consumed by Ancistrus or Pterygoplichthys species. A diet heavy in vegetable matter will lead to malnutrition and wasting.</p>
<p>Recommended foods include:</p>
<ul>
<li><strong>Frozen bloodworms</strong> — the staple diet for most successful keepers. Offer a small cube 3–4 times per week.</li>
<li><strong>Frozen brine shrimp</strong> — excellent supplemental protein. Alternate with bloodworms.</li>
<li><strong>High-quality sinking pellets</strong> — Hikari Carnivore Pellets, Repashy Morning Wood, or Northfin Kelp Wafers. These provide balanced nutrition when the fish refuse frozen foods.</li>
<li><strong>Live blackworms</strong> — outstanding for conditioning breeding adults and fattening juveniles.</li>
<li><strong>Blanched courgette (zucchini)</strong> — offered once weekly, provides fibre and micronutrients. Remove after 12 hours to prevent water quality degradation.</li>
</ul>
<p>Feed in the evening, just after lights out, when Zebra Plecos are most active. Use a feeding dish to concentrate food near the cave openings and reduce waste. Remove uneaten food after 4–6 hours to maintain water quality.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Zebra Plecos are shy, reclusive, and strictly nocturnal. During daylight hours, they remain hidden in their caves, emerging only after the lights are off to forage. Territorial behaviour is centred on cave ownership — dominant males will aggressively defend their preferred cave, chasing away rivals with fin displays and, in extreme cases, physical combat that can result in torn fins and scraped flanks.</p>
<p>Social hierarchy is established primarily through cave selection. Providing excess caves (N+2, where N is the number of fish) is the single most effective strategy for reducing aggression. Males display more pronounced territorial behaviour than females, which tend to roam more freely between hiding spots.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Zebra Plecos are best kept in a species-specific tank. However, if a community is desired, tank mates must be small, peaceful, and active in the mid-to-upper water column. Suitable companions include:</p>
<ul>
<li><strong>Small tetras</strong> — Cardinal Tetras, Rummy-nose Tetras, or Ember Tetras in schools of 10+.</li>
<li><strong>Corydoras catfish</strong> — <em>Corydoras sterbai</em> is an excellent choice, as it also thrives at 28–30 °C.</li>
<li><strong>Small rasboras</strong> — Harlequin or Chili Rasboras.</li>
<li><strong>Otocinclus</strong> — Peaceful algae grazers that occupy different microhabitats.</li>
</ul>
<p>Avoid all other pleco species in the same tank — they will compete for caves. Avoid aggressive bottom-dwellers (cichlids, loaches larger than 10 cm) and any species that might harass the shy Zebra Pleco during its inactive period. Large dither fish that create excessive commotion can prevent Zebra Plecos from emerging to feed.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding Zebra Plecos in captivity is achievable and highly rewarding. The species is a cave-spawning egg depositor — the male entices a gravid female into his cave, where she deposits 7–15 large (4–5 mm diameter) adhesive eggs on the cave ceiling or wall. The male then guards and fans the eggs for 10–15 days until hatching. Fry carry a large yolk sac and do not require feeding for the first 7–10 days after hatching.</p>
<p>To trigger breeding, maintain pristine water quality, feed heavily with protein-rich foods (especially live blackworms) for 4–6 weeks, and then perform a large (50%) cool water change to simulate the onset of the Xingu's wet season. The temperature drop of 2–3 °C, followed by a gradual return to 30–31 °C, is often the trigger that initiates spawning behaviour. Males will intensify cave guarding and begin vibrating their body to attract females.</p>
<p>Fry can be left with the male (who provides excellent parental care) or gently extracted to a separate grow-out tank after the yolk sac is absorbed. First foods include microworms, baby brine shrimp, and finely crushed Repashy gel food. Growth is slow — fry reach 3 cm in approximately 6 months and full adult size at 18–24 months.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="wasting-syndrome">Wasting Syndrome</h3>
<p>Wasting syndrome — a progressive loss of body condition characterised by a sunken belly and visible skeletal outlines — is the most common killer of captive Zebra Plecos. It is typically caused by internal parasites (nematodes, flagellates), inadequate diet (too much vegetable matter, not enough protein), or chronic stress from insufficient hiding places or aggressive tank mates. Treatment involves identifying and addressing the root cause: deworm with levamisole or fenbendazole if parasites are suspected, improve the diet with live blackworms and frozen bloodworms, and ensure the fish has undisputed access to a cave.</p>

<h3 id="bacterial-skin-infections">Bacterial Skin Infections</h3>
<p>White fuzzy patches or red ulcerations on the body typically indicate bacterial or fungal infection, often secondary to physical injury from territorial disputes or rough handling. Improve water quality immediately (nitrate below 10 ppm), add Indian almond leaves for their mild antibacterial properties, and treat severe cases with a methylene blue bath or antibiotic (kanamycin) as directed by an aquatic veterinarian. Prevention centres on maintaining excellent water quality and providing sufficient caves to minimise combat.</p>
<p>Other issues include ich (white spot disease), which Zebra Plecos are susceptible to during temperature drops, and gill flukes from wild-caught specimens. Quarantine all new arrivals for 4–6 weeks in a separate system before introducing them to an established colony.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a Zebra Pleco cost?',
        answer:
          'Captive-bred Zebra Plecos typically range from $200–$400 for juveniles (2–3 cm) to $500–$900 for sexable sub-adults (4–5 cm) and $800–$1,500 for proven breeding adults. Prices vary by country — they tend to be cheaper in Germany and Southeast Asia, where large-scale breeding operations are established, and more expensive in North America and Australia, where supply is more limited. Be wary of suspiciously cheap specimens, which may be wild-caught fish smuggled out of Brazil without IBAMA documentation. The Fish Collection provides full provenance records for every Zebra Pleco we sell.',
      },
      {
        question: 'Do Zebra Plecos eat algae?',
        answer:
          'No. Despite belonging to the Loricariidae (suckermouth catfish) family, Zebra Plecos are not algae eaters. Hypancistrus species are omnivores with a strong preference for animal protein — in the wild, they consume insect larvae, micro-crustaceans, and biofilm rather than algae. Feeding a Zebra Pleco a diet based on algae wafers or vegetable-heavy foods will lead to malnutrition and wasting syndrome. The staple diet should consist of frozen bloodworms, brine shrimp, live blackworms, and high-quality protein-based sinking pellets. A small amount of blanched vegetable (zucchini, cucumber) can be offered weekly for fibre, but protein must dominate the diet.',
      },
      {
        question: 'What temperature do Zebra Plecos need?',
        answer:
          'Zebra Plecos require water temperatures of 28–32 °C (82–90 °F), which is significantly warmer than the typical tropical community tank range of 24–26 °C. This elevated temperature requirement is a direct reflection of their Xingu River habitat, where water temperatures naturally reach 30–34 °C. At temperatures below 26 °C, Zebra Plecos become lethargic, stop feeding, and become susceptible to disease. For breeding, most successful breeders maintain 30–31 °C. The high temperature also reduces dissolved oxygen capacity, making supplemental aeration via air stones or powerheads essential.',
      },
      {
        question: 'Can you breed Zebra Plecos at home?',
        answer:
          'Yes, Zebra Plecos can be bred successfully at home, and a growing community of hobbyist breeders produces the majority of specimens available in the trade. Success requires a mature group of at least 2 males and 3–4 females, ample caves sized specifically for the species (10 cm × 2.5 cm × 2 cm internal dimensions), pristine water quality, and heavy feeding with protein-rich foods. Spawning is triggered by a large cool water change followed by a gradual temperature increase to 30–31 °C. Clutch sizes are small (7–15 eggs), and the male provides all parental care. Fry grow slowly but are hardy once past the yolk-sac stage. A dedicated breeding setup in a 40-gallon tank is the most reliable approach.',
      },
      {
        question: 'Are Zebra Plecos endangered?',
        answer:
          'Yes, Hypancistrus zebra is classified as Critically Endangered by the IUCN. Wild populations have declined dramatically due to habitat disruption from the Belo Monte hydroelectric dam on the Xingu River, which has altered flow patterns, increased siltation, and raised water temperatures in key habitats. Brazil banned all wild export of the species in 2004 under IBAMA regulations. All legally available specimens in the aquarium trade are captive-bred. Purchasing captive-bred Zebra Plecos from reputable breeders supports conservation by reducing any incentive for illegal wild collection and maintaining a genetically diverse insurance population in captivity.',
      },
      {
        question: 'How long do Zebra Plecos live?',
        answer:
          'Zebra Plecos have a lifespan of 10–15 years in captivity when provided with optimal care. Some specimens in long-established breeding colonies have been documented living beyond 18 years. Longevity depends heavily on water quality (particularly dissolved oxygen and nitrate levels), diet quality (protein-rich versus vegetable-heavy), and stress levels (adequate caves, compatible tank mates). Fish maintained at the upper end of their temperature range (30–32 °C) with excellent water quality and varied diet tend to live the longest. As with most small plecos, the first year is the most critical — mortality rates drop significantly once fish reach 4 cm body length.',
      },
    ],
    sources: [
      {
        title: 'Hypancistrus zebra Isbrücker & Nijssen, 1991',
        url: 'https://www.fishbase.se/summary/Hypancistrus-zebra.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Conservation Status of Hypancistrus zebra and Impacts of the Belo Monte Dam',
        url: 'https://doi.org/10.1111/acv.12589',
        publisher: 'Aquatic Conservation: Marine and Freshwater Ecosystems',
      },
      {
        title:
          'Reproductive Biology of Loricariidae Catfishes: A Review',
        url: 'https://doi.org/10.1111/jfb.13672',
        publisher: 'Journal of Fish Biology',
      },
      {
        title:
          'IUCN Red List: Hypancistrus zebra',
        url: 'https://www.iucnredlist.org/species/167726/174263516',
        publisher: 'International Union for Conservation of Nature',
      },
    ],
    relatedSlugs: [
      'black-diamond-stingray',
      'clown-loach',
      'fire-eel',
    ],
  },

  // ─────────────────────────────────────────────
  // 8. Fire Eel
  // ─────────────────────────────────────────────
  {
    title: 'Fire Eel (Mastacembelus erythrotaenia): Complete Care Guide & Tank Setup',
    slug: 'fire-eel',
    type: 'species',
    category: 'eel',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/fire-eel-hero.jpg',
    heroImageAlt:
      'Adult Fire Eel partially buried in fine sand with vivid red-orange lateral stripes glowing under subdued aquarium lighting',
    metaTitle:
      'Fire Eel (Mastacembelus erythrotaenia) Care Guide | The Fish Collection',
    metaDescription:
      'Complete Fire Eel care guide — tank setup, water parameters, diet & health tips. Expert advice from The Fish Collection for this stunning spiny eel.',
    quickAnswerQuestion:
      'How do you care for a Fire Eel?',
    quickAnswer:
      'Fire Eels require a minimum 125-gallon aquarium with fine sand substrate for burrowing, stable warm water (pH 6.5–7.5, 24–28 °C), and a meaty diet of bloodworms, earthworms, and shrimp. They are shy, nocturnal predators that thrive with dim lighting and plenty of hiding places.',
    summary:
      'The Fire Eel (Mastacembelus erythrotaenia) is the largest and most visually dramatic member of the spiny eel family, reaching up to 100 cm in captivity. Native to slow-moving rivers and floodplains across Southeast Asia, it is prized for its striking red-orange lateral markings against a dark body. This comprehensive guide covers tank setup, water parameters, feeding strategies, breeding, health concerns, and compatibility — drawing on The Fish Collection\'s extensive experience importing and maintaining these impressive fish.',
    scientificName: 'Mastacembelus erythrotaenia',
    keyFacts: [
      { label: 'Scientific Name', value: 'Mastacembelus erythrotaenia' },
      { label: 'Max Size', value: '100 cm (40 in)' },
      { label: 'Tank Size', value: '125 gallons (475 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '15–20 years in captivity' },
      { label: 'Diet', value: 'Carnivore — live and frozen protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Substrate', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'skin-abrasions', text: 'Skin Abrasions & Secondary Infections', level: 3 },
      { id: 'ich-sensitivity', text: 'Ich Sensitivity', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Fire Eel (<em>Mastacembelus erythrotaenia</em>) is the undisputed titan of the Mastacembelidae family — the spiny eels. Capable of reaching 100 cm (40 inches) in captivity and occasionally exceeding that in the wild, it is a muscular, serpentine predator adorned with vivid red-orange lateral stripes and spots that intensify with age and proper nutrition. Found across mainland Southeast Asia — from the Mekong and Chao Phraya basins to rivers in Myanmar, Indonesia, and Malaysia — the Fire Eel has been a staple of the monster-fish hobby for decades.</p>
<p>Despite its common name, the Fire Eel is not a true eel (Anguilliformes) but a member of the spiny eel order Synbranchiformes. It possesses a series of small, sharp dorsal spines that precede the soft dorsal fin — these spines can puncture skin during handling, so care must be taken when netting or moving the fish. At The Fish Collection, we have imported and maintained Fire Eels from multiple collection points and can attest that the species is hardy, long-lived, and deeply rewarding for the patient aquarist who provides the right environment.</p>
<p>The primary challenges of Fire Eel keeping are its adult size (necessitating a large aquarium), its nocturnal temperament (it will spend most daylight hours hidden), and its sensitivity to rough substrates and poor water quality. These are solvable problems for the dedicated hobbyist, and this guide provides the detailed roadmap you need to succeed.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Mastacembelus erythrotaenia</em> inhabits slow-moving lowland rivers, flooded plains, marshes, and canal systems across Southeast Asia. It is particularly abundant in the Mekong basin (Thailand, Laos, Cambodia, Vietnam), the Chao Phraya basin in central Thailand, and the major river systems of Borneo and Sumatra. These environments are characterised by warm water (25–30 °C), soft-to-moderately-hard chemistry (GH 3–12 dGH), near-neutral pH (6.0–7.5), and substrates of fine silt, mud, and sand.</p>
<p>Fire Eels are benthic fish that spend the majority of their time partially or fully buried in soft substrate, emerging at dusk and through the night to hunt. They are found among submerged roots, dense marginal vegetation, and undercut banks where they can wedge their elongate body into crevices. In flooded forests during the monsoon season, Fire Eels disperse widely to exploit abundant invertebrate populations in newly inundated areas.</p>
<p>Understanding this habitat is essential for captive care. The Fire Eel's body plan — scaleless, mucus-coated skin with no bony armour — evolved for burrowing through soft sediment. Coarse gravel, sharp rock, or abrasive decorations will damage the skin and predispose the fish to bacterial and fungal infections. Replicating the soft, dimly lit, structurally complex environment of its natural habitat is the key to a healthy, long-lived Fire Eel.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Substrate</h3>
<p>An adult Fire Eel requires a minimum 125-gallon (475 L) aquarium measuring at least 180 cm long × 60 cm wide (72 × 24 inches). For specimens exceeding 75 cm, a 200–300 gallon system (240+ cm length) is strongly recommended. Length and width matter more than height — Fire Eels are bottom-dwellers that rarely venture into the upper water column.</p>
<p>Substrate is critically important. Use fine, smooth sand with a grain size of 0.5–1.5 mm — pool filter sand, play sand, or purpose-made aquarium sand (CaribSea Super Naturals, for example). Depth should be at least 5–8 cm to allow full burrowing. Never use coarse gravel, crushed coral, or any substrate with sharp edges. The Fire Eel's scaleless skin is highly vulnerable to abrasion, and substrate-related injuries are the number one cause of bacterial infections in captive specimens.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Fire Eels are messy predators that require robust filtration. Target a turnover rate of 6–8× the tank volume per hour using a large canister filter or sump system. Biological media capacity is paramount — ceramic rings, sintered glass, or K1 moving-bed media in a sump provide the surface area needed to process the high ammonia output from a carnivorous diet. A UV steriliser (25–36 W) is a worthwhile addition for disease prevention.</p>
<p>Flow should be gentle to moderate. Fire Eels do not appreciate strong current and will become stressed in high-flow environments. Direct the filter outlet along the back wall or use a spray bar to diffuse flow. Ensure the substrate in at least one area of the tank remains undisturbed by current — this will become the eel's preferred burrowing zone.</p>

<h3 id="lighting">Lighting</h3>
<p>Fire Eels are nocturnal and strongly prefer dim conditions. Bright overhead lighting will keep the eel buried throughout the photoperiod, effectively invisible to the keeper. Use dimmable LEDs set to 20–40% intensity, or provide extensive shading with floating plants (Amazon frogbit, water lettuce, or Salvinia). A red or blue moonlight phase encourages the eel to emerge during evening hours when the keeper is most likely to observe it. A photoperiod of 8 hours of subdued light with a gradual dawn/dusk transition works well.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Fire Eels are reasonably adaptable to a range of water chemistries but perform best in soft-to-neutral conditions that mirror their natural habitat:</p>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). Use a reliable heater; avoid submersible glass heaters that the eel could dislodge or crack. Titanium inline heaters are safest.</li>
<li><strong>pH:</strong> 6.5–7.5. Stability is more important than hitting a specific target.</li>
<li><strong>General Hardness (GH):</strong> 3–12 dGH (54–215 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 3–8 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Fire Eels are scaleless and absorb toxins through their skin more readily than scaled fish.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. Weekly 25–30% water changes are recommended.</li>
</ul>
<p>Because Fire Eels lack scales, they are unusually sensitive to medications. Salt baths, copper-based treatments, and many common fish medications (particularly formalin and malachite green) can be lethal at standard doses. Always use half-dose protocols for scaleless fish and consult an aquatic veterinarian before treating.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Fire Eels are strict carnivores with a strong preference for live and frozen foods. In the wild, they feed on insect larvae, worms, crustaceans, and small fish. In captivity, variety is key to maintaining body condition and vibrant colouration.</p>
<p>Recommended foods:</p>
<ul>
<li><strong>Earthworms (nightcrawlers)</strong> — the single best staple food. Highly nutritious, readily accepted, and available year-round. Offer 3–5 large worms per session for an adult.</li>
<li><strong>Frozen bloodworms</strong> — excellent for juveniles and as a supplemental food for adults. Use large cubes from reputable brands (Hikari, San Francisco Bay Brand).</li>
<li><strong>Frozen prawns and mussel</strong> — shell-on prawns provide calcium. Cut to appropriate size.</li>
<li><strong>Live ghost shrimp or river shrimp</strong> — outstanding enrichment food that stimulates natural hunting behaviour.</li>
<li><strong>Hikari Massivore pellets</strong> — most Fire Eels can be trained to accept sinking pellets, which are convenient and nutritionally complete.</li>
</ul>
<p>Feed adults every other day; juveniles (under 30 cm) should be fed daily. Fire Eels are often initially reluctant to feed in a new environment — it is normal for a newly imported specimen to refuse food for 1–2 weeks. Offering live earthworms at dusk in a dimly lit tank almost always triggers the first feeding response. Once established, Fire Eels become enthusiastic feeders that will learn to take food from tongs or even the keeper's hand.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Fire Eels are shy, nocturnal, and generally peaceful toward fish too large to eat. They spend the majority of their time buried in sand with only their snout protruding, or wedged into crevices between rocks and driftwood. Activity peaks at dusk and continues through the night, when the eel emerges to patrol the tank floor in search of food.</p>
<p>Despite their large size, Fire Eels are not aggressive. They will, however, eat any fish small enough to fit in their surprisingly expandable mouth — a general rule is that anything under one-third the eel's body length is at risk. Among conspecifics, Fire Eels can be kept in pairs or small groups in sufficiently large tanks (300+ gallons), though some individuals display territorial aggression, particularly during feeding.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates should be large enough to avoid predation and not so aggressive as to prevent the shy Fire Eel from feeding. Proven companions include:</p>
<ul>
<li><strong>Large cichlids</strong> — Oscars, Severums, or Geophagus species work well. Avoid highly aggressive species like Dovii or Umbees.</li>
<li><strong>Bichirs</strong> — <em>Polypterus</em> species are excellent companions, as they occupy similar niches without significant competition.</li>
<li><strong>Large catfish</strong> — Synodontis, large Plecostomus, or Pictus catfish are all compatible.</li>
<li><strong>Silver Dollars or Tinfoil Barbs</strong> — Active mid-water schooling fish that add movement without threatening the eel.</li>
<li><strong>Other spiny eels</strong> — Tire Track Eels (<em>Mastacembelus favus</em>) or Peacock Eels (<em>Macrognathus siamensis</em>) can coexist in large systems.</li>
</ul>
<p>Avoid all small fish (tetras, rasboras, guppies — they will be eaten), fin-nippers (tiger barbs, serpae tetras), and any species that might outcompete the eel for food during its nocturnal feeding window.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of Fire Eels is extremely rare and has been documented only a handful of times in the aquarium hobby. The species is believed to be a seasonal spawner in the wild, with reproduction tied to the onset of the monsoon flood season. Breeding in captivity likely requires a very large system (500+ gallons), a group of mature adults (5+ years old), and environmental manipulation to simulate seasonal changes — specifically, a gradual reduction in water level followed by a rapid increase with cooler, softer water.</p>
<p>When breeding has been reported, the female deposited several hundred adhesive eggs on flat surfaces (slate, broadleaf plants) after an extended courtship involving the pair swimming in tight spirals. Eggs hatched in approximately 72 hours at 27 °C. Fry are tiny and require infusoria or liquid fry food for the first week, graduating to baby brine shrimp thereafter.</p>
<p>For most hobbyists, breeding Fire Eels is not a realistic goal. The vast majority of specimens in the trade are wild-caught from Southeast Asia. The Fish Collection supports sustainable wild-harvest programmes that operate within government-regulated quotas and is actively exploring captive-breeding partnerships to reduce pressure on wild populations.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="skin-abrasions">Skin Abrasions & Secondary Infections</h3>
<p>The single most common health issue in captive Fire Eels is skin abrasion from rough substrates or sharp décor, followed by secondary bacterial (Aeromonas, Columnaris) or fungal (Saprolegnia) infection. Prevention is straightforward: use only fine, smooth sand and avoid any decoration that could scrape the eel's mucus coat. If abrasions occur, improve water quality immediately (nitrate below 10 ppm), add Indian almond leaves or Seachem StressGuard to promote mucus regeneration, and treat severe cases with a gentle antibiotic (erythromycin) at half the standard dose.</p>

<h3 id="ich-sensitivity">Ich Sensitivity</h3>
<p>Fire Eels, like all scaleless fish, are highly susceptible to ich (<em>Ichthyophthirius multifiliis</em>) and simultaneously intolerant of standard ich medications. Never use copper-based treatments or full-strength malachite green on Fire Eels. Instead, raise the temperature to 30 °C over 48 hours and treat with half-dose methylene blue or Kordon Ich Attack (a herbal formulation safe for scaleless fish). Salt can be added at 1 teaspoon per 5 gallons but must be dissolved and added gradually — Fire Eels are salt-sensitive.</p>
<p>Other conditions to watch for include internal parasites (particularly in wild-caught specimens — prophylactic treatment with praziquantel after quarantine is advisable), Hole-in-the-Head disease (linked to poor nutrition and high nitrate), and stress-related appetite loss during acclimatisation. A calm, dimly lit quarantine tank with pristine water and live earthworms is the best recovery environment for a stressed Fire Eel.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Fire Eels get?',
        answer:
          'Fire Eels are the largest members of the spiny eel family, reaching up to 100 cm (40 inches) in captivity. In the wild, specimens exceeding 120 cm have been reported, though this is uncommon. Growth rate depends heavily on diet, water quality, and tank size — a well-fed juvenile can grow 15–20 cm in its first year. Growth slows considerably after the fish reaches 60 cm, but Fire Eels continue to add length (and considerable girth) throughout their 15–20 year lifespan. Their ultimate size makes planning for a sufficiently large permanent enclosure essential before purchase.',
      },
      {
        question: 'Can you hand-feed a Fire Eel?',
        answer:
          'Yes, Fire Eels are one of the few aquarium fish that routinely learn to accept food directly from their keeper\'s hand. Once acclimated to their tank and feeding confidently (typically 4–8 weeks after introduction), most Fire Eels will approach the keeper\'s hand to take earthworms or prawns. The key is patience and consistency — always approach the tank slowly, offer food at the same location and time, and avoid sudden movements. While hand-feeding is a rewarding experience, be aware that Fire Eels have small but functional teeth and powerful suction, so occasional minor nips are possible. Using long feeding tongs is a safer alternative that still allows interactive feeding.',
      },
      {
        question: 'Are Fire Eels aggressive?',
        answer:
          'Fire Eels are generally peaceful and non-aggressive toward tank mates that are too large to be eaten. They are shy, nocturnal fish that prefer to avoid confrontation. However, they are opportunistic predators and will consume any fish small enough to fit in their mouth — a reasonable guideline is that anything under one-third the eel\'s body length is at risk. Among conspecifics, Fire Eels can coexist in large tanks (300+ gallons) but may display territorial behaviour around preferred hiding spots, particularly during feeding. Aggression is minimised by providing ample burrowing space, multiple hiding spots, and feeding stations that ensure each eel can eat without competition.',
      },
      {
        question: 'Do Fire Eels need sand substrate?',
        answer:
          'Yes, fine smooth sand is essential for Fire Eel husbandry. These fish are burrowers by nature — in the wild, they spend the majority of their time partially or fully submerged in soft substrate. Without sand, a Fire Eel cannot exhibit its natural burrowing behaviour, which leads to chronic stress, reduced feeding, and susceptibility to disease. Equally important, Fire Eels are scaleless and their skin is protected only by a mucus coat. Coarse gravel, crushed coral, or any rough substrate will abrade this mucus layer, causing open wounds that rapidly become infected. Pool filter sand or aquarium-specific sand with a grain size of 0.5–1.5 mm at a depth of 5–8 cm is the gold standard.',
      },
      {
        question: 'How long do Fire Eels live?',
        answer:
          'Fire Eels are impressively long-lived — 15–20 years in captivity is the expected range with proper care, and specimens exceeding 20 years have been documented in public aquaria. Longevity is closely tied to water quality (particularly keeping nitrate below 20 ppm), diet variety (a rotating menu of earthworms, prawns, and pellets rather than a single food source), and stress levels (adequate hiding places, compatible tank mates, dim lighting). Fire Eels kept in undersized tanks with poor water quality and limited dietary variety rarely survive beyond 8–10 years. Committing to a Fire Eel means committing to two decades of dedicated fishkeeping.',
      },
    ],
    sources: [
      {
        title: 'Mastacembelus erythrotaenia Bleeker, 1850',
        url: 'https://www.fishbase.se/summary/Mastacembelus-erythrotaenia.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Ecology and Biology of Mastacembelidae (Spiny Eels) in Southeast Asian River Systems',
        url: 'https://doi.org/10.1007/s10641-011-9923-7',
        publisher: 'Environmental Biology of Fishes',
      },
      {
        title:
          'Ichthyophthirius multifiliis Treatment Protocols for Scaleless Fish Species',
        url: 'https://doi.org/10.1111/jfd.13009',
        publisher: 'Journal of Fish Diseases',
      },
      {
        title:
          'Freshwater Fishes of Southeast Asia: Potential for Aquaculture and Conservation',
        url: 'https://doi.org/10.1016/j.aquaculture.2020.735483',
        publisher: 'Aquaculture',
      },
    ],
    relatedSlugs: [
      'clown-knife-fish',
      'black-diamond-stingray',
      'wolf-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 9. Clown Knife Fish
  // ─────────────────────────────────────────────
  {
    title: 'Clown Knife Fish (Chitala ornata): Complete Care Guide & Tank Setup',
    slug: 'clown-knife-fish',
    type: 'species',
    category: 'knife-fish',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/clown-knife-fish-hero.jpg',
    heroImageAlt:
      'Large Clown Knife Fish displaying signature ocellated spots along its silvery flank in a spacious planted aquarium',
    metaTitle:
      'Clown Knife Fish (Chitala ornata) Care Guide | The Fish Collection',
    metaDescription:
      'Expert Clown Knife Fish care guide covering tank size, water parameters, diet & compatibility. Trusted advice from The Fish Collection aquarists.',
    quickAnswerQuestion:
      'How do you care for a Clown Knife Fish?',
    quickAnswer:
      'Clown Knife Fish require a minimum 200-gallon aquarium with subdued lighting, stable neutral water (pH 6.0–7.5, 24–28 °C), and a protein-rich diet of live and frozen fish, shrimp, and earthworms. They are nocturnal predators that grow rapidly to 60–100 cm and must be housed with equally large, non-aggressive tank mates.',
    summary:
      'The Clown Knife Fish (Chitala ornata) is a spectacular Southeast Asian predator recognised by its laterally compressed, blade-shaped body and the distinctive ocellated spots along its lower flank. Capable of exceeding 100 cm in the wild and commonly reaching 60 cm in home aquaria, it demands a spacious tank, expert-level feeding protocols, and careful tank-mate selection. This guide covers every aspect of Clown Knife Fish care — from habitat replication and water chemistry to diet, breeding, and disease management — informed by The Fish Collection\'s years of direct experience with this iconic species.',
    scientificName: 'Chitala ornata',
    keyFacts: [
      { label: 'Scientific Name', value: 'Chitala ornata' },
      { label: 'Max Size', value: '100 cm (40 in) wild; 60–80 cm typical in captivity' },
      { label: 'Tank Size', value: '200 gallons (760 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Advanced' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Carnivore — live, frozen, and prepared protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'oxygen-deprivation', text: 'Oxygen Deprivation', level: 3 },
      { id: 'parasitic-infections', text: 'Parasitic Infections', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Clown Knife Fish (<em>Chitala ornata</em>) is one of the most recognisable freshwater predators in the aquarium trade. Native to the river systems of mainland Southeast Asia — from the Mekong and Chao Phraya basins to the lakes and canals of Thailand, Laos, Cambodia, and Vietnam — it is characterised by a dramatically compressed, blade-like body profile, an elongated anal fin that undulates to propel the fish with eerie grace, and a row of 5–15 ocellated (eye-like) spots along the lower body that give it its common name.</p>
<p>In its native range, <em>Chitala ornata</em> is both an important food fish and a cultural icon. It features prominently in Thai and Cambodian cuisine (particularly as the base for fish balls and fish cakes) and has been introduced — often detrimentally — to non-native waterways in Florida, where feral populations are now established. In the aquarium trade, juvenile Clown Knives are widely available and inexpensive, which unfortunately leads to impulse purchases by keepers unprepared for a fish that will rapidly grow to 60–100 cm and live for over a decade.</p>
<p>At The Fish Collection, we emphasise responsible ownership. A Clown Knife Fish is a long-term commitment that requires a large aquarium, robust filtration, and a knowledgeable keeper. This guide provides everything you need to know to make an informed decision and, if you choose to proceed, to provide the highest standard of care for this magnificent predator.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Chitala ornata</em> inhabits a broad range of freshwater environments across mainland Southeast Asia, from large rivers and reservoirs to canals, floodplain lakes, and even brackish estuarine zones. It shows a strong preference for slow-moving or still water with dense structure — submerged timber, root tangles, overhanging vegetation, and undercut banks provide the cover these ambush predators require. Water in their native range is typically warm (25–30 °C), neutral to slightly acidic (pH 6.0–7.5), and soft to moderately hard (GH 2–12 dGH).</p>
<p>Clown Knife Fish are primarily crepuscular and nocturnal hunters. During daylight hours, they rest motionless among structure, often oriented head-down or at unusual angles — a behaviour that can alarm new keepers but is entirely normal. At dusk, they emerge to hunt smaller fish, crustaceans, and aquatic insects using a combination of electroreception (they possess a weak electric organ) and lateral line detection of water displacement.</p>
<p>An important ecological note: Clown Knife Fish are obligate air-breathers. They possess a modified swim bladder that functions as a primitive lung, allowing them to extract atmospheric oxygen by gulping at the surface. In the wild, this adaptation enables survival in oxygen-depleted waters during the dry season. In captivity, it means the fish must always have unobstructed access to the water surface — tight-fitting lids must include ventilation gaps.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>An adult Clown Knife Fish requires a minimum 200-gallon (760 L) aquarium measuring at least 210 cm long × 60 cm wide × 60 cm tall (84 × 24 × 24 inches). For specimens exceeding 70 cm, a 300-gallon system with a 240+ cm footprint is strongly recommended. Length is the primary consideration — Clown Knives are fast swimmers when alarmed and need ample turning room to avoid injury.</p>
<p>Layout should provide structure along the back and sides of the tank while leaving the central area open for swimming. Large pieces of driftwood, PVC pipe sections (15–20 cm diameter), and sturdy rock formations create the sheltered resting zones the fish requires during the day. Substrate is optional — bare-bottom tanks are easier to maintain for large predators, but fine sand is acceptable. Avoid sharp gravel or rough decorations.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>A large sump system is the gold standard for Clown Knife Fish tanks. Target a turnover rate of 6–8× the tank volume per hour with a combination of mechanical, biological, and chemical filtration. For a 200-gallon system, this means a sump capable of moving 4,500–6,000 litres per hour. Include ample bio-media (ceramic, K1, or Seachem Matrix), a filter sock or roller mat for mechanical prefiltration, and a UV steriliser (36–57 W) for pathogen control.</p>
<p>Flow should be moderate. Clown Knives are not current-loving fish and will avoid areas with strong flow. Direct the return outlet along the back wall and use a spray bar to diffuse the output. Because these fish are obligate air-breathers, there must be a gap between the water surface and the tank lid — a minimum of 5 cm — to allow comfortable surface access for breathing.</p>

<h3 id="lighting">Lighting</h3>
<p>Clown Knife Fish are nocturnal and dislike bright lighting. Under intense illumination, they will hide constantly and may become chronically stressed, leading to reduced feeding and colour fade. Dimmable LED fixtures set to 20–40% intensity work well. Floating plants can diffuse overhead light while providing additional cover. A blue or red moonlight phase allows the keeper to observe the fish during its active nocturnal period without causing disturbance.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Clown Knife Fish are reasonably tolerant of a range of water conditions but perform best within the following parameters:</p>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). Avoid temperatures below 22 °C, which suppress appetite and immune function.</li>
<li><strong>pH:</strong> 6.0–7.5. These fish are adaptable and will thrive anywhere in this range provided stability is maintained.</li>
<li><strong>General Hardness (GH):</strong> 2–12 dGH (36–215 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 2–8 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;30 ppm. Weekly 25–30% water changes maintain this in most setups.</li>
</ul>
<p>Water changes should use temperature-matched, dechlorinated water. Clown Knife Fish are less sensitive to medication than scaleless species like Fire Eels, but caution should still be exercised with copper-based treatments. Always quarantine new additions and avoid prophylactic use of broad-spectrum antibiotics.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Clown Knife Fish are dedicated carnivores that require a protein-rich diet. In the wild, they consume fish, crustaceans, and large aquatic insects. In captivity, the challenge is transitioning specimens from live food to a varied diet that includes prepared foods for long-term nutritional balance.</p>
<p>Recommended foods:</p>
<ul>
<li><strong>Market prawns</strong> — shell-on, deveined, heads removed. The staple food for most keepers. Offer 4–6 prawns per session for an adult.</li>
<li><strong>Earthworms (nightcrawlers)</strong> — highly nutritious and readily accepted. Excellent for newly acquired specimens that refuse other foods.</li>
<li><strong>Frozen silversides or smelt</strong> — whole small fish provide complete nutrition including bones and organs.</li>
<li><strong>Hikari Massivore pellets</strong> — sinking pellets that most Clown Knives can be trained to accept. Excellent for balanced nutrition.</li>
<li><strong>Live feeder fish (sparingly)</strong> — use only captive-bred, quarantined feeders (guppies, mollies). Never use feeder goldfish due to their thiaminase content and disease risk.</li>
</ul>
<p>Feed adults every other day. Juveniles (under 20 cm) should be fed daily. A weekly fast day supports digestive health. Overfeeding is a common mistake — Clown Knives are gluttonous and will eat until they regurgitate if given the opportunity. Feed a measured amount and remove uneaten food after 10 minutes.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Clown Knife Fish are nocturnal ambush predators. During the day, they rest motionless among structure, often in head-down or slightly tilted postures that can alarm inexperienced keepers but are entirely normal. At dusk, they become active, patrolling the tank with their characteristic undulating anal-fin locomotion. They are surprisingly fast when striking prey, deploying a rapid suction-feeding mechanism to capture food items at close range.</p>
<p>These fish are not inherently aggressive toward tank mates they cannot eat, but their large adult size means that anything under 15 cm is a potential meal. Among conspecifics, Clown Knives can be territorial, particularly in tanks under 300 gallons. If keeping multiples, provide ample structure to break sightlines and reduce confrontations.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Suitable companions for Clown Knife Fish include:</p>
<ul>
<li><strong>Large cichlids</strong> — Oscars, Severums, Jaguar Cichlids, and adult Geophagus are all proven companions.</li>
<li><strong>Arowana</strong> — Silver or Asian Arowana pair well in 300+ gallon systems, as they occupy the surface while the Clown Knife patrols the mid-to-bottom.</li>
<li><strong>Bichirs</strong> — <em>Polypterus endlicherii</em> and <em>P. ornatipinnis</em> are excellent bottom-dwelling companions.</li>
<li><strong>Fire Eels and other large spiny eels</strong> — compatible in tanks with ample structure.</li>
<li><strong>Large Plecostomus</strong> — Common, Royal, or Sailfin Plecos are ignored by Clown Knives.</li>
</ul>
<p>Avoid all small fish, aggressive fin-nippers, and territorial bottom-dwellers that might attack the resting Clown Knife during the day. Freshwater pufferfish should be avoided, as they will bite the Clown Knife's delicate fins.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of Clown Knife Fish has been achieved but remains uncommon in home aquaria due to the sheer space requirements. In the wild and in commercial breeding operations (primarily in Thailand), <em>Chitala ornata</em> is a substrate spawner. The female deposits 2,000–10,000 adhesive eggs on a hard surface — typically submerged timber, rocks, or the walls of a pond structure. The male guards the egg mass aggressively, fanning it to ensure oxygenation and removing fungused eggs.</p>
<p>Eggs hatch in 5–7 days at 26–28 °C. Fry absorb their yolk sac within 3–4 days and immediately begin hunting micro-organisms. First foods in captivity include baby brine shrimp, microworms, and finely chopped bloodworms. Fry grow rapidly — reaching 10 cm within 2 months — and must be sorted by size regularly to prevent cannibalism, which is rampant among juvenile Clown Knives.</p>
<p>For hobbyists interested in breeding, a dedicated pond or tank of at least 500 gallons is required, along with a conditioned pair of mature adults (3+ years old). Simulating the monsoon season — a period of reduced feeding and water level followed by a large influx of cool, fresh water — is typically the trigger for spawning behaviour.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="oxygen-deprivation">Oxygen Deprivation</h3>
<p>Although Clown Knife Fish can breathe atmospheric air, they still rely heavily on dissolved oxygen for gill respiration. Chronic oxygen deprivation — caused by overstocking, poor surface agitation, or elevated temperatures without supplemental aeration — leads to laboured breathing, surface gasping (beyond normal air-breathing behaviour), lethargy, and eventually organ damage. Maintain dissolved oxygen above 5 mg/L at all times. An air pump or powerhead directed at the surface provides a safety margin, and never seal the tank lid without ventilation gaps that allow the fish to access atmospheric air.</p>

<h3 id="parasitic-infections">Parasitic Infections</h3>
<p>Clown Knife Fish, particularly wild-caught and feeder-fish-fed specimens, are susceptible to internal parasites including nematodes, cestodes, and flagellates. Symptoms include weight loss despite feeding, stringy white faeces, bloating, and lethargy. Treatment involves identification of the parasite type (ideally via faecal examination by a veterinarian) followed by targeted medication — praziquantel for cestodes and trematodes, levamisole for nematodes, and metronidazole for flagellates. Prophylactic deworming of all new specimens with praziquantel during quarantine is strongly recommended.</p>
<p>Other conditions to monitor include ich (treatable with standard protocols at full dose, as Clown Knives are scaled), bacterial fin rot (secondary to poor water quality or physical injury), and Hole-in-the-Head disease (associated with high nitrate and dietary deficiency). Regular water testing and a varied diet prevent the majority of health issues.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Clown Knife Fish get?',
        answer:
          'Clown Knife Fish commonly reach 60–80 cm (24–32 inches) in home aquaria and can exceed 100 cm (40 inches) in the wild or in large ponds. Growth is rapid during the first two years — a 10 cm juvenile can reach 40 cm within 12–18 months under optimal conditions. Growth slows after the fish reaches approximately 50 cm, but they continue to add length and bulk throughout their 10–15 year lifespan. Their ultimate size depends on tank volume, diet quality, and water conditions. Planning for a 200+ gallon permanent tank is essential before purchasing, as rehoming large Clown Knives is difficult.',
      },
      {
        question: 'Can Clown Knife Fish breathe air?',
        answer:
          'Yes, Clown Knife Fish are obligate air-breathers. They possess a modified swim bladder that functions as a rudimentary lung, allowing them to extract oxygen from atmospheric air gulped at the water surface. In the wild, this adaptation enables survival in oxygen-depleted floodplain habitats during the dry season. In captivity, it means the fish must always have unobstructed access to the water surface — tank lids must include ventilation gaps of at least 5 cm. While air-breathing supplements their oxygen intake, Clown Knives still rely on dissolved oxygen for the majority of their respiration, so standard filtration and aeration remain essential.',
      },
      {
        question: 'Are Clown Knife Fish aggressive?',
        answer:
          'Clown Knife Fish are not inherently aggressive in the way that territorial cichlids are, but they are large predators that will eat anything small enough to fit in their mouth. As a general rule, any fish under 15 cm is at risk of predation. Among tank mates of similar size, Clown Knives are usually peaceful, though territorial disputes between conspecifics can occur, especially in tanks under 300 gallons. They are ambush predators that hunt primarily at night, so diurnal tank mates may not even be aware of the threat until it is too late. Keeping Clown Knives with appropriately sized companions and providing ample structure to break sightlines minimises any aggression issues.',
      },
      {
        question: 'What do Clown Knife Fish eat?',
        answer:
          'Clown Knife Fish are strict carnivores that require a protein-rich diet of live, frozen, and prepared foods. The best staple foods include market prawns (shell-on), earthworms, frozen silversides, and high-quality sinking pellets like Hikari Massivore. Live feeder fish can be offered sparingly but should only be captive-bred and quarantined guppies or mollies — never feeder goldfish, which carry parasites and contain thiaminase that degrades vitamin B1. Most Clown Knives can be trained to accept pellets, which is important for long-term nutritional balance. Feed adults every other day with a weekly fast day to support digestive health.',
      },
      {
        question: 'Can you keep Clown Knife Fish with Arowana?',
        answer:
          'Yes, Clown Knife Fish and Arowana are one of the classic large-predator pairings in the monster-fish hobby. They occupy different water columns — the Arowana patrols the surface while the Clown Knife inhabits the mid-to-bottom zone — which reduces territorial conflict. A minimum tank size of 300 gallons is required for this combination, with 500+ gallons preferred for long-term housing of both species at full adult size. Ensure the tank has ample structure (driftwood, PVC pipes) for the Clown Knife to shelter in during the day, and feed each species at its preferred water level to reduce competition. Both species are nocturnal predators, so small tank mates will quickly be consumed.',
      },
    ],
    sources: [
      {
        title: 'Chitala ornata (Gray, 1831)',
        url: 'https://www.fishbase.se/summary/Chitala-ornata.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Biology and Ecology of the Clown Featherback Chitala ornata in the Mekong River Basin',
        url: 'https://doi.org/10.1007/s10641-014-0305-z',
        publisher: 'Environmental Biology of Fishes',
      },
      {
        title:
          'Invasive Chitala ornata in South Florida: Establishment and Ecological Impact',
        url: 'https://doi.org/10.1002/nafm.10253',
        publisher: 'North American Journal of Fisheries Management',
      },
      {
        title:
          'Air-breathing Organs in Notopteridae: Morphology and Function',
        url: 'https://doi.org/10.1111/joa.12987',
        publisher: 'Journal of Anatomy',
      },
    ],
    relatedSlugs: [
      'fire-eel',
      'platinum-arowana',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 10. Blue Diamond Discus
  // ─────────────────────────────────────────────
  {
    title: 'Blue Diamond Discus (Symphysodon aequifasciatus): Complete Care Guide & Tank Setup',
    slug: 'blue-diamond-discus',
    type: 'species',
    category: 'discus',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/blue-diamond-discus-hero.jpg',
    heroImageAlt:
      'Pair of Blue Diamond Discus displaying intense cobalt-blue colouration in a warm, softly lit planted aquarium',
    metaTitle:
      'Blue Diamond Discus Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete Blue Diamond Discus care guide — tank setup, water parameters, diet & breeding. Expert advice from The Fish Collection for discus keepers.',
    quickAnswerQuestion:
      'How do you care for Blue Diamond Discus?',
    quickAnswer:
      'Blue Diamond Discus require a minimum 55-gallon aquarium kept at 28–31 °C with soft, acidic water (pH 5.5–6.8) and a high-protein diet of frozen bloodworms, beef heart mix, and quality pellets. They are social fish best kept in groups of 6 or more with peaceful, heat-tolerant tank mates.',
    summary:
      'The Blue Diamond Discus is a selectively bred colour morph of the common Discus (Symphysodon aequifasciatus), prized for its solid, luminous cobalt-blue body free of the vertical stress bars typical of wild-type Discus. Widely considered the "king of the aquarium," Discus demand warm, pristine water, frequent feeding, and a calm social environment. This guide covers every element of Blue Diamond Discus husbandry — water chemistry, tank design, diet protocols, breeding, and disease prevention — drawing on The Fish Collection\'s decades of experience sourcing and maintaining show-quality Discus.',
    scientificName: 'Symphysodon aequifasciatus',
    keyFacts: [
      { label: 'Scientific Name', value: 'Symphysodon aequifasciatus (Blue Diamond variant)' },
      { label: 'Max Size', value: '20 cm (8 in) body diameter' },
      { label: 'Tank Size', value: '55 gallons (210 L) minimum for a group' },
      { label: 'Temperature', value: '28–31 °C (82–88 °F)' },
      { label: 'pH', value: '5.5–6.8' },
      { label: 'Care Level', value: 'Advanced' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Omnivore — high-protein frozen and prepared foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat & Breeding Origins', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascape', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'hole-in-the-head', text: 'Hole-in-the-Head Disease', level: 3 },
      { id: 'intestinal-flagellates', text: 'Intestinal Flagellates', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Blue Diamond Discus is a captive-bred colour morph of <em>Symphysodon aequifasciatus</em>, selectively developed by Asian breeders — primarily in Malaysia, Thailand, and Singapore — from the naturally occurring blue strains of the wild Heckel and Brown Discus. What distinguishes the Blue Diamond from other blue variants is the complete absence of patterning: a flawless specimen displays a solid, uniform cobalt-blue body from head to tail, with no vertical stress bars, no red or brown undertones, and no peppering on the fins. Achieving this level of colour consistency requires generations of selective breeding and is the reason show-quality Blue Diamonds command significant prices.</p>
<p>At The Fish Collection, Discus have been a cornerstone of our livestock programme since the beginning. We source our Blue Diamonds from a select network of breeders whose facilities we have personally inspected and whose genetic lines we have tracked for years. Every Discus we ship has been quarantined for a minimum of 14 days, dewormed with praziquantel, and conditioned onto a varied diet of frozen and prepared foods — ensuring that buyers receive a healthy, feeding, stress-free specimen ready for their display tank.</p>
<p>Discus have an undeserved reputation as impossibly difficult fish. The truth is that they are demanding but predictable: provide warm, clean water, high-quality food, a calm social group, and consistent maintenance, and they will reward you with a decade or more of stunning beauty. This guide provides the complete roadmap.</p>

<h2 id="natural-habitat">Natural Habitat & Breeding Origins</h2>
<p>Wild <em>Symphysodon</em> species inhabit the Amazon River basin and its tributaries, particularly the blackwater and clearwater systems of Brazil, Colombia, and Peru. They are found in slow-moving, heavily vegetated floodplain lakes and river margins where temperatures range from 26–32 °C, pH runs as low as 4.5 in extreme blackwater environments, and dissolved mineral content is negligible (GH 0–2 dGH, TDS 10–50 ppm). These conditions — ultra-soft, acidic, warm water — define the species' physiological requirements.</p>
<p>The Blue Diamond morph does not exist in the wild. It is the product of decades of selective breeding, primarily in Southeast Asian fish farms, from blue-gene wild stock originally collected from the Rio Madeira, Rio Negro, and Rio Purus. The breeding process involved line-breeding for solid blue pigmentation, selecting against the vertical barring pattern that all wild Discus display, and fixing the trait through multiple generations. Modern Blue Diamonds are typically 15–20 generations removed from wild stock and are considerably more robust than their wild ancestors, though they still require warm, clean water to thrive.</p>
<p>Understanding the wild ancestry is important because it explains why Discus demand elevated temperatures and soft water even in captivity. Their physiology evolved for an extreme environment, and attempts to keep them in standard community conditions (24 °C, pH 7.5, hard water) consistently result in stress, poor colouration, and disease.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascape</h3>
<p>Discus are social cichlids that must be kept in groups — a minimum of 6 fish is required to establish a stable social hierarchy and reduce individual aggression. A group of 6 Blue Diamond Discus requires a minimum 55-gallon (210 L) aquarium with dimensions of at least 120 cm long × 40 cm wide × 50 cm tall (48 × 16 × 20 inches). For larger groups or community setups, 75–125 gallons is preferable. Unlike many species, height matters for Discus — their laterally compressed body shape means they utilise vertical space, and tanks under 45 cm tall restrict their posture.</p>
<p>Aquascaping for Discus is a matter of philosophy. Many serious breeders use bare-bottom tanks for ease of maintenance and disease detection. Show tanks can be beautifully planted with heat-tolerant species such as Echinodorus (Amazon Swords), Anubias, and Vallisneria, all of which thrive at Discus temperatures. Driftwood and vertical root structures provide visual barriers that reduce territorial aggression. Avoid overcrowding the tank with décor — Discus need open swimming space in the middle of the water column.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Biological filtration must be robust enough to maintain zero ammonia and nitrite while processing the significant organic load from 3–5 daily feedings. A canister filter rated for twice the tank volume, or a sump system with ample bio-media, is the standard approach. Target a turnover rate of 4–6× the tank volume per hour. Discus do not appreciate strong current — use a spray bar or lily pipe to diffuse the output and create gentle circulation throughout the tank.</p>
<p>Many successful Discus keepers run bare-bottom tanks with sponge filters as supplemental biological filtration. Sponge filters provide additional surface area for beneficial bacteria, gentle aeration, and are easy to clean. A UV steriliser is a valuable addition for pathogen control, particularly in tanks with multiple Discus from different sources.</p>

<h3 id="lighting">Lighting</h3>
<p>Blue Diamond Discus display their colour best under moderate lighting in the 6,500–8,000 K range. Excessive blue-spectrum lighting can make the fish appear washed out, while warm-spectrum LEDs (5,000–6,500 K) bring out the depth and richness of the cobalt-blue pigmentation. A photoperiod of 8–10 hours is standard. Avoid sudden on/off transitions — use a timer with gradual dimming or keep a room light on for 15 minutes before the tank light switches off to prevent startle responses.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Water quality is the single most important factor in Discus keeping. Discus are more sensitive to dissolved waste and parameter fluctuations than almost any other commonly kept freshwater fish. Target the following:</p>
<ul>
<li><strong>Temperature:</strong> 28–31 °C (82–88 °F). This is non-negotiable. Discus kept below 27 °C become lethargic, stop feeding, and are highly susceptible to disease. For breeding, 30–31 °C is optimal.</li>
<li><strong>pH:</strong> 5.5–6.8. For maintenance, any stable pH in this range is acceptable. For breeding, pH 5.5–6.0 is preferred and often essential for egg fertility.</li>
<li><strong>General Hardness (GH):</strong> 1–6 dGH (18–107 ppm). Soft water is strongly preferred; Discus from Asian breeding farms are raised in near-zero GH.</li>
<li><strong>Carbonate Hardness (KH):</strong> 1–3 dKH. Low KH is necessary for achieving the acidic pH Discus prefer but requires careful monitoring to prevent pH crashes.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;15 ppm. Many experienced Discus keepers perform daily 25–50% water changes to maintain ultra-low nitrate. At minimum, 30–40% twice weekly is required.</li>
<li><strong>TDS:</strong> 50–200 ppm. RO/DI water reconstituted with a minimal GH buffer (Seachem Equilibrium at quarter dose) is the gold standard.</li>
</ul>
<p>The frequency and volume of water changes cannot be overstated. Discus produce growth-inhibiting hormones (pheromones) that accumulate in static water and stunt development in juveniles. Frequent water changes dilute these hormones, stimulate appetite, and promote the rapid growth that produces show-quality adults. Many competition breeders change 50–90% of the water daily in grow-out tanks.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Discus are omnivores with a strong requirement for high-quality protein. In the wild, they feed on insect larvae, small crustaceans, algae, and detritus. In captivity, a varied diet fed frequently is essential for growth, colour development, and immune function.</p>
<p>Recommended foods:</p>
<ul>
<li><strong>Frozen bloodworms</strong> — the universal Discus food. Offer 2–3 times daily for growing juveniles, once daily for adults. Use gamma-irradiated brands (Hikari, San Francisco Bay Brand) to minimise parasite risk.</li>
<li><strong>Beef heart mix</strong> — a homemade or commercial blend of lean beef heart, shrimp, spinach, garlic, and vitamins. This is the growth food of choice among serious breeders. Recipes abound, but the key is low fat content — trim all visible fat from the beef heart before blending.</li>
<li><strong>High-quality Discus pellets</strong> — Hikari Discus Bio-Gold, Sera Discus Granules, or Northfin Discus Formula. These provide balanced nutrition and are essential for colour enhancement.</li>
<li><strong>Frozen brine shrimp and Mysis shrimp</strong> — excellent supplemental protein, particularly for juveniles.</li>
<li><strong>Blanched spinach or spirulina wafers</strong> — offered 1–2 times weekly for vegetable fibre and micronutrients.</li>
</ul>
<p>Feeding frequency depends on age: juveniles (under 10 cm) should be fed 4–5 times daily in small portions; sub-adults (10–15 cm) 2–3 times daily; and mature adults once or twice daily. Uneaten food must be removed within 5 minutes to prevent water quality degradation. A consistent feeding schedule at the same times each day reduces stress and encourages social feeding behaviour.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Discus are social, hierarchical cichlids that thrive in groups. A group of 6 or more establishes a stable pecking order in which the dominant pair occupies the prime central territory while subordinate fish space themselves around the periphery. In groups smaller than 6, bullying is concentrated on 1–2 individuals, leading to chronic stress, poor colouration, and appetite loss. Never keep Discus singly or in pairs unless they are a bonded breeding pair in a dedicated spawning tank.</p>
<p>Despite their cichlid heritage, Discus are not aggressive in the way that Central American or African cichlids are. Their aggression is subtle — a dominant fish will darken its colouration, flare its fins, and chase subordinates away from food. Physical injury is rare in properly stocked tanks. Discus are also highly sensitive to their environment: sudden movements, loud noises, or unfamiliar faces near the tank can trigger a startle response characterised by colour darkening, rapid hiding, and refusal to feed. A Discus tank should be in a low-traffic area of the home.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must tolerate the elevated temperatures Discus require (28–31 °C) and be peaceful enough not to outcompete the slow-feeding Discus at mealtimes. Proven companions include:</p>
<ul>
<li><strong>Cardinal Tetras</strong> — the classic Discus dither fish. A school of 20+ provides constant mid-water activity and helps Discus feel secure. Cardinals thrive at Discus temperatures.</li>
<li><strong>Rummy-nose Tetras</strong> — another excellent warm-water schooling fish that adds colour and movement.</li>
<li><strong>Corydoras sterbai</strong> — one of the few Corydoras species comfortable at 28–30 °C. Excellent bottom-dwelling clean-up crew.</li>
<li><strong>Bristlenose Plecos (Ancistrus)</strong> — small, peaceful algae grazers that tolerate warm water.</li>
<li><strong>Ram Cichlids (Mikrogeophagus ramirezi)</strong> — dwarf cichlids that share the Discus' preference for warm, soft water.</li>
</ul>
<p>Avoid all aggressive or boisterous species — Angelfish (which carry diseases that devastate Discus), Tiger Barbs, large catfish, and any cold-water or hard-water species. The Discus must be the dominant species in its tank.</p>

<h2 id="breeding">Breeding</h2>
<p>Discus breeding is one of the most rewarding experiences in freshwater fishkeeping. Blue Diamond Discus are prolific breeders once a compatible pair is established. Pairing typically occurs naturally within a group of 6+ fish — over weeks or months, two individuals will bond, claim a territory, and begin cleaning a vertical spawning surface (a cone, PVC pipe, or broad-leaf plant).</p>
<p>Spawning conditions require ultra-soft water (GH 0–2 dGH), pH 5.5–6.2, and a temperature of 30–31 °C. The female deposits 150–400 adhesive eggs in neat rows on the spawning surface; the male follows immediately behind to fertilise them. Both parents guard the clutch aggressively and fan the eggs to ensure oxygenation. Eggs hatch in approximately 60 hours at 30 °C.</p>
<p>What makes Discus breeding unique is the fry's dependence on parental mucus. For the first 2–3 weeks after becoming free-swimming, Discus fry feed exclusively on a protein-rich mucus secretion produced by the skin of both parents. The fry attach to the parents' flanks and graze this mucus — a behaviour analogous to mammalian nursing. Removing the parents prematurely is fatal to the fry. After 2–3 weeks, fry can be supplemented with baby brine shrimp and finely crushed flake food, and can be separated from the parents at 4–6 weeks.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="hole-in-the-head">Hole-in-the-Head Disease</h3>
<p>Hole-in-the-Head (HITH) disease, also called Head and Lateral Line Erosion (HLLE), is the signature Discus ailment. It presents as pitted erosions on the head and along the lateral line, often with white, stringy mucus trailing from the lesions. The aetiology is multifactorial — chronic exposure to high nitrate (>30 ppm), poor diet (particularly deficiency in vitamins A and C), and the flagellate parasite <em>Hexamita</em>/<em>Spironucleus</em> all contribute. Treatment involves improving water quality (nitrate below 10 ppm), enriching the diet with vitamin-soaked foods, and treating with metronidazole (250 mg per 40 litres, repeated after 48 hours) to address the parasitic component. Caught early, HITH is fully reversible; advanced cases leave permanent scarring.</p>

<h3 id="intestinal-flagellates">Intestinal Flagellates</h3>
<p>Intestinal flagellates (<em>Hexamita</em>, <em>Spironucleus</em>) are endemic to virtually all Discus populations and are normally held in check by a healthy immune system. Stress — from overcrowding, poor water quality, transport, or introduction to a new tank — can trigger an explosive bloom that manifests as white, stringy faeces, appetite loss, darkened colouration, and rapid weight loss. Treatment is metronidazole, administered either in food (1% by weight mixed into beef heart) or in the water column (250 mg per 40 litres). Prophylactic treatment of all new Discus during quarantine is standard practice among experienced keepers.</p>
<p>Other conditions include ich (elevated temperatures make Discus somewhat resistant, but outbreaks can occur during temperature drops), gill flukes (treated with praziquantel), and bacterial infections (Columnaris, Aeromonas) secondary to stress or injury. The best defence is prevention through meticulous water quality, quarantine protocols, and a low-stress environment.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much do Blue Diamond Discus cost?',
        answer:
          'Blue Diamond Discus typically range from $40–$80 for juveniles (5–7 cm) to $150–$400 for show-quality adults (15–18 cm) with flawless solid-blue colouration. Prices vary significantly by source and quality — mass-produced specimens from Southeast Asian farms are cheaper but may carry health risks, while selectively bred show-grade fish from reputable breeders command premium prices. Proven breeding pairs can sell for $500–$1,000. The Fish Collection offers quarantined, dewormed, feeding Blue Diamonds at competitive prices, with full health guarantees and live-arrival assurance. Buying a group of 6+ juveniles and growing them out is the most cost-effective approach to building a stunning Discus display.',
      },
      {
        question: 'Are Discus hard to keep?',
        answer:
          'Discus have a reputation for being difficult, but the reality is more nuanced. They are demanding in the sense that they require warm water (28–31 °C), soft acidic conditions (pH 5.5–6.8), and frequent water changes (30–50% twice weekly minimum). They are also sensitive to stress from aggressive tank mates, sudden parameter changes, and poor diet. However, if you set up the tank correctly from the start — with a good heater, RO water, robust filtration, and a consistent maintenance schedule — Discus are no harder than many other tropical fish. The key mistake beginners make is trying to keep Discus in a standard community tank at 25 °C with hard, alkaline water. Given the right conditions, Blue Diamond Discus are hardy, long-lived, and remarkably interactive fish.',
      },
      {
        question: 'What temperature do Discus need?',
        answer:
          'Discus require a water temperature of 28–31 °C (82–88 °F), which is significantly warmer than the typical tropical community tank. This elevated temperature is a direct reflection of their Amazonian habitat, where water temperatures in the blackwater floodplains they inhabit routinely reach 30–32 °C. Keeping Discus below 27 °C causes suppressed immune function, reduced appetite, and dramatically increased susceptibility to diseases like ich and intestinal flagellates. For breeding, 30–31 °C is optimal. The high temperature requirement limits compatible tank mates to heat-tolerant species like Cardinal Tetras, Corydoras sterbai, and Ram Cichlids.',
      },
      {
        question: 'How many Discus should you keep together?',
        answer:
          'A minimum of 6 Discus is recommended to establish a stable social hierarchy. In groups smaller than 6, aggression is concentrated on one or two subordinate individuals, causing chronic stress, poor colouration, and health problems. Groups of 8–12 are ideal for display tanks, as the aggression is diffused among many fish and the schooling behaviour is more pronounced. In grow-out tanks where juveniles are being raised, higher densities (1 Discus per 10 litres) are common to distribute aggression and promote even growth — but this requires daily water changes of 50–90% to maintain water quality. For a standard display tank, stock at approximately 1 adult Discus per 10–15 gallons of water.',
      },
      {
        question: 'Can you breed Blue Diamond Discus at home?',
        answer:
          'Yes, Blue Diamond Discus breed readily in captivity once a compatible pair forms. Start with a group of 6+ juveniles and allow them to pair naturally as they mature (typically at 12–18 months of age). A bonded pair will claim a spawning site — a vertical surface like a cone, slate, or Amazon Sword leaf — and spawn 150–400 eggs. Both parents guard and fan the eggs, which hatch in approximately 60 hours. The unique aspect of Discus breeding is that fry feed exclusively on mucus secreted by the parents\' skin for the first 2–3 weeks, making parental care essential. A dedicated 30–40 gallon breeding tank with soft, acidic water (pH 5.5–6.2, GH 0–2) and a temperature of 30–31 °C provides optimal conditions.',
      },
      {
        question: 'How long do Blue Diamond Discus live?',
        answer:
          'Blue Diamond Discus have a lifespan of 10–15 years in captivity with proper care. Some well-maintained specimens have been documented living beyond 15 years. Longevity depends on water quality (warm, soft, acidic, with nitrate below 15 ppm), diet quality (varied, high-protein, fed frequently), and stress levels (stable social group, calm environment, no aggressive tank mates). Discus that are kept in suboptimal conditions — hard water, temperatures below 27 °C, high nitrate, or stressful social dynamics — rarely survive beyond 5–7 years. Investing in proper setup and maintenance from the start is the surest path to a long-lived, vibrant Discus collection.',
      },
    ],
    sources: [
      {
        title: 'Symphysodon aequifasciatus Pellegrin, 1904',
        url: 'https://www.fishbase.se/summary/Symphysodon-aequifasciatus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Parental Mucus Feeding in Discus Fish: Composition and Immunological Function',
        url: 'https://doi.org/10.1242/jeb.055806',
        publisher: 'Journal of Experimental Biology',
      },
      {
        title:
          'Hexamita and Spironucleus: Pathogenesis and Treatment in Ornamental Cichlids',
        url: 'https://doi.org/10.1111/jfd.12650',
        publisher: 'Journal of Fish Diseases',
      },
      {
        title:
          'Selective Breeding and Colour Genetics in Symphysodon spp.',
        url: 'https://doi.org/10.1016/j.aquaculture.2018.09.048',
        publisher: 'Aquaculture',
      },
    ],
    relatedSlugs: [
      'flowerhorn-cichlid',
      'peppermint-angelfish',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 11. Peacock Bass
  // ─────────────────────────────────────────────
  {
    title: 'Peacock Bass (Cichla ocellaris): Complete Care Guide & Tank Setup',
    slug: 'peacock-bass',
    type: 'species',
    category: 'bass',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/peacock-bass-hero.jpg',
    heroImageAlt:
      'Adult Peacock Bass displaying vivid gold-green flanks and the trademark ocellated caudal spot in a large display aquarium',
    metaTitle:
      'Peacock Bass (Cichla ocellaris) Care Guide | The Fish Collection',
    metaDescription:
      'Expert Peacock Bass care guide covering tank size, water parameters, diet & tank mates. Trusted advice from The Fish Collection for Cichla keepers.',
    quickAnswerQuestion:
      'How do you care for a Peacock Bass?',
    quickAnswer:
      'Peacock Bass require a minimum 200-gallon aquarium with strong filtration, warm neutral water (pH 6.0–7.5, 26–30 °C), and a protein-rich diet of pellets, prawns, and whole fish. They are powerful, fast-growing predatory cichlids best housed with equally large, robust tank mates in a spacious environment.',
    summary:
      'The Peacock Bass (Cichla ocellaris) is a powerful Neotropical cichlid native to the Amazon and Orinoco basins, famed among sport anglers and increasingly popular as a display aquarium fish. With adults commonly reaching 60–75 cm in captivity and possessing an aggressive feeding response and stunning gold-green colouration, the Peacock Bass is the centrepiece of any monster-fish collection. This guide covers every aspect of care — from tank sizing and water chemistry to feeding protocols, breeding, and health management — informed by The Fish Collection\'s hands-on experience with multiple Cichla species.',
    scientificName: 'Cichla ocellaris',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cichla ocellaris' },
      { label: 'Max Size', value: '75 cm (30 in) in captivity; larger in the wild' },
      { label: 'Tank Size', value: '200 gallons (760 L) minimum' },
      { label: 'Temperature', value: '26–30 °C (78–86 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Advanced' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Carnivore — pellets, whole fish, and crustaceans' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'hole-in-the-head-disease', text: 'Hole-in-the-Head Disease', level: 3 },
      { id: 'bloat', text: 'Bloat', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Peacock Bass (<em>Cichla ocellaris</em>) is the type species of the genus <em>Cichla</em>, a group of large predatory cichlids native to tropical South America. Known as "Tucunaré" in Brazil and "Pavón" in Venezuela, Peacock Bass are legendary among sport anglers for their explosive strikes and dogged fighting ability. In the aquarium hobby, they have gained a dedicated following among monster-fish enthusiasts who appreciate their vivid gold-green colouration, the signature ocellated (eye-like) spot on the caudal peduncle, and their commanding presence in a large display tank.</p>
<p><em>Cichla ocellaris</em> is the most commonly encountered Peacock Bass species in the trade, though several other species — including <em>C. temensis</em>, <em>C. kelberi</em>, and <em>C. monoculus</em> — also appear. All share similar care requirements, though size at maturity varies. C. ocellaris typically reaches 60–75 cm in captivity, with wild specimens exceeding 80 cm and 10 kg. They are fast-growing, voracious predators that demand space, food, and respect.</p>
<p>At The Fish Collection, we offer captive-bred and ethically sourced Peacock Bass with species-level identification — a critical detail, as many sellers mislabel Cichla species. Our specimens are raised on pellets from an early age, making the transition to a varied captive diet straightforward. This guide covers everything you need to know to house, feed, and maintain Peacock Bass at the highest standard.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Cichla ocellaris</em> is native to the clear and blackwater river systems of the Amazon and Orinoco basins, spanning Brazil, Venezuela, Colombia, Guyana, and Suriname. They inhabit a wide range of aquatic environments — from deep river channels and oxbow lakes to flooded forests (igapó) and artificial reservoirs. Water conditions across this range vary considerably but generally fall within 25–32 °C, pH 5.5–7.5, and soft to moderately hard (GH 1–10 dGH).</p>
<p>Peacock Bass are open-water predators that hunt primarily by sight. They prefer clear or moderately stained water where visibility exceeds 1 metre, and are most active during daylight hours — making them one of the few large Neotropical predators that hunt diurnally rather than nocturnally. In the wild, they feed on a diet dominated by fish — particularly characins (tetras, piranhas), small cichlids, and crustaceans — consuming prey up to one-third their own body length.</p>
<p>The species has been widely introduced outside its native range, both intentionally (as a sport-fishing species in Florida, Hawaii, and Panama) and accidentally. These introductions have had mixed ecological outcomes, with feral Peacock Bass populations suppressing native fish communities in some areas. In the aquarium trade, captive-bred specimens from South American and Asian farms form the majority of supply, supplemented by limited wild-caught imports from Colombia and Brazil.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>A single adult Peacock Bass requires a minimum 200-gallon (760 L) aquarium measuring at least 210 cm long × 60 cm wide × 60 cm tall (84 × 24 × 24 inches). For a pair or community of large predators, 300–500 gallons is necessary. Length and width are prioritised over height — Peacock Bass are active, fast-swimming fish that need ample horizontal space for cruising and turning.</p>
<p>Keep the aquascape minimal. Peacock Bass are powerful fish that will rearrange or destroy elaborate décor. A few large pieces of driftwood or smooth boulders provide visual interest and territorial markers without impeding swimming. Bare-bottom or fine sand substrate is preferred for ease of maintenance. Avoid sharp decorations that could injure the fish during the powerful acceleration they display when striking prey or fleeing a perceived threat.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Peacock Bass are large-bodied, high-metabolism predators that produce substantial waste. A sump-based filtration system is strongly recommended, targeting a turnover rate of 8–10× the tank volume per hour. For a 200-gallon system, this means approximately 6,000–7,600 litres per hour of combined flow. Biological filtration capacity must be generously sized — K1 moving-bed media in a fluidised reactor handles the ammonia spikes that follow heavy feeding sessions. Include a UV steriliser (36–57 W) and effective mechanical prefiltration (filter socks, roller mat) to maintain water clarity.</p>
<p>Moderate flow is acceptable and even beneficial, as Peacock Bass are naturally found in areas with some current. Avoid dead spots where waste can accumulate and ensure the entire tank volume circulates through the filtration system.</p>

<h3 id="lighting">Lighting</h3>
<p>Unlike many predatory fish, Peacock Bass are diurnal and display best under moderate-to-bright lighting. Standard LED fixtures in the 6,500–10,000 K range show off their gold-green iridescence beautifully. A photoperiod of 10–12 hours mimics the equatorial light cycle of their native habitat. Peacock Bass are not light-shy and will actively hunt and display under full aquarium lighting.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Peacock Bass are adaptable to a range of water conditions but perform best within the following parameters:</p>
<ul>
<li><strong>Temperature:</strong> 26–30 °C (78–86 °F). These are tropical fish that do not tolerate temperatures below 22 °C. Immune function and metabolism decline sharply below 24 °C.</li>
<li><strong>pH:</strong> 6.0–7.5. Captive-bred specimens are generally adaptable within this range.</li>
<li><strong>General Hardness (GH):</strong> 2–10 dGH (36–179 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 2–8 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;30 ppm. Weekly 25–30% water changes are standard for large predator tanks.</li>
</ul>
<p>Peacock Bass are relatively hardy once established, but they are intolerant of ammonia and nitrite spikes — common in newly set up or understaffed-filtration tanks. Cycle the tank fully before introducing the fish, and monitor parameters closely during the first month. Temperature stability is important; invest in a quality heater with a digital controller rated for the tank volume.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Peacock Bass are voracious piscivorous predators with high metabolic demands. In the wild, their diet is dominated by fish, supplemented by crustaceans and large insects. In captivity, the goal is to wean them onto a varied diet that includes prepared foods for nutritional completeness.</p>
<p>Recommended foods:</p>
<ul>
<li><strong>High-quality pellets</strong> — Hikari Massivore, Northfin Predator, or New Life Spectrum Large Fish Formula. Pellet-trained Peacock Bass are the easiest to maintain long-term. Offer as the dietary staple.</li>
<li><strong>Market prawns</strong> — shell-on, heads removed. Excellent source of protein and chitin. 4–6 large prawns per session for an adult.</li>
<li><strong>Frozen silversides, smelt, or tilapia strips</strong> — whole fish provide complete nutrition. Thaw and rinse before offering.</li>
<li><strong>Earthworms</strong> — readily accepted and nutritionally excellent.</li>
<li><strong>Live feeder fish (limited use)</strong> — captive-bred, quarantined guppies or mollies only. Never use feeder goldfish.</li>
</ul>
<p>Feed adults every other day; juveniles (under 20 cm) should be fed daily. A fast day once per week is beneficial. Peacock Bass have enormous appetites and will gorge if allowed — overfeeding leads to obesity, fatty liver disease, and water quality crashes. Feed a measured amount and resist the temptation to offer more just because the fish is still begging.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Peacock Bass are bold, active, and highly predatory cichlids. Unlike many large South American cichlids, they are diurnal hunters that spend the majority of the photoperiod cruising the open water column, scanning for prey opportunities. They are intelligent fish that quickly learn to associate their keeper with food, often rushing to the front glass at the sight of a familiar person. This interactivity makes them compelling display animals.</p>
<p>Aggression in Peacock Bass is primarily directed at conspecifics and fish that encroach on their territory. A single specimen in a community tank is typically manageable; pairs can be housed together if the tank is large enough (300+ gallons) and the pair has bonded. Groups of 3 or more require very large systems (500+ gallons) to distribute aggression. Towards non-Cichla tank mates, aggression is situational — during feeding, Peacock Bass may become territorial around food items, and any fish small enough to eat will be consumed without hesitation.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Suitable companions for Peacock Bass include:</p>
<ul>
<li><strong>Arowana</strong> — Silver or Asian Arowana occupy the surface and coexist well in large systems.</li>
<li><strong>Large Plecostomus</strong> — Common, Sailfin, or Royal Plecos are typically ignored.</li>
<li><strong>Bichirs</strong> — <em>Polypterus endlicherii</em> and similar large species make solid bottom-dwelling companions.</li>
<li><strong>Oscar Cichlids</strong> — Oscars and Peacock Bass are of similar temperament and can coexist in 300+ gallon systems.</li>
<li><strong>Clown Knife Fish</strong> — compatible in very large tanks, as they occupy different activity periods (nocturnal vs. diurnal).</li>
<li><strong>Freshwater Stingrays</strong> — Motoro or Black Diamond rays pair well in wide tanks, occupying the benthic zone exclusively.</li>
</ul>
<p>Avoid all small fish (anything under 15 cm will be eaten), slow-moving delicate species, and aggressive cichlids of similar size that will engage in damaging territorial disputes (Dovii, Umbee, adult Flowerhorn).</p>

<h2 id="breeding">Breeding</h2>
<p>Peacock Bass are biparental substrate spawners that can be bred in captivity, though the space requirements are considerable. A bonded pair requires a minimum 300-gallon tank with a flat spawning surface — a large piece of slate, a smooth boulder, or the aquarium glass itself. Pairs typically form naturally from a group raised together; forced pairing of unfamiliar adults often results in serious aggression.</p>
<p>Spawning is preceded by intensified colouration in both sexes — the gold-green flanks become more vivid, and a prominent nuchal hump develops in breeding males. The female deposits 3,000–10,000 adhesive eggs on the chosen surface over several hours. Both parents guard the clutch fiercely, attacking anything that approaches, including the keeper's hand or maintenance equipment.</p>
<p>Eggs hatch in 72–96 hours at 28 °C. The parents move the wriggling fry to pre-excavated pits in the substrate, where they remain for an additional 4–5 days until free-swimming. Free-swimming fry are escorted by both parents in a tight school and can be fed baby brine shrimp immediately. Growth is rapid — fry reach 5 cm within 6 weeks under heavy feeding. Both parents continue to guard the fry for 4–6 weeks, after which the family bond dissolves and the parents may spawn again.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="hole-in-the-head-disease">Hole-in-the-Head Disease</h3>
<p>Hole-in-the-Head (HITH) disease is the most common serious ailment in captive Cichla. It presents as pitted erosions on the head and lateral line, often accompanied by white stringy mucus. The condition is multifactorial — chronic exposure to high nitrate (>40 ppm), poor diet, and infection with the intestinal flagellate <em>Hexamita</em>/<em>Spironucleus</em> are all contributing factors. Treatment involves reducing nitrate to below 15 ppm through aggressive water changes, improving the diet with vitamin-enriched foods, and administering metronidazole (250 mg per 40 litres, repeated after 48 hours). Prevention through consistent water changes and a varied diet is far more effective than treatment.</p>

<h3 id="bloat">Bloat</h3>
<p>Bloat (dropsy) in Peacock Bass typically results from overfeeding, particularly with fatty foods, or from internal bacterial infection. Symptoms include abdominal swelling, raised scales (pine-coning), lethargy, and loss of appetite. If caught early and caused by overfeeding, a 5–7 day fast followed by a gradual reintroduction of easily digestible foods (earthworms, small prawns) may resolve the issue. Bacterial dropsy — identifiable by pine-coning of scales — carries a poor prognosis and requires antibiotic treatment (kanamycin, combined with metronidazole) in a hospital tank. Prevention centres on measured feeding, a lean diet, and weekly fast days.</p>
<p>Other conditions include ich (treat at standard dose — Peacock Bass are scaled and tolerate medication well), external parasites (anchor worm, fish lice — treat with diflubenzuron or manual removal), and physical injuries from territorial disputes (maintain excellent water quality to promote rapid healing). Regular water testing and a disciplined maintenance schedule prevent the vast majority of health issues.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Peacock Bass get in an aquarium?',
        answer:
          'Peacock Bass (Cichla ocellaris) commonly reach 60–75 cm (24–30 inches) in home aquaria, with exceptional specimens approaching 80 cm. Growth rate is rapid — a 10 cm juvenile can reach 30–40 cm within the first year under optimal conditions (warm water, heavy feeding, spacious tank). Growth slows after 50 cm but continues throughout the fish\'s lifespan. Tank size directly influences ultimate size — fish kept in undersized aquariums will experience stunted growth, which causes internal organ compression and shortened lifespan. A 200-gallon tank is the minimum for a single adult; 300+ gallons is recommended for fish you want to reach their full genetic potential.',
      },
      {
        question: 'Can you keep Peacock Bass in a community tank?',
        answer:
          'Yes, Peacock Bass can be kept in a community tank provided all tank mates are too large to be eaten (minimum 15 cm) and the tank is sufficiently spacious (300+ gallons for a multi-species predator community). Proven companions include Arowana, Bichirs, large Plecostomus, Oscar Cichlids, and freshwater Stingrays. The key is ensuring that all occupants are robust, similarly sized, and occupy different niches within the tank. Peacock Bass are diurnal hunters, so nocturnal species like Clown Knife Fish make particularly good companions as they are active during different periods. Avoid any small, slow, or delicate species, and provide ample space to minimise territorial aggression.',
      },
      {
        question: 'What do Peacock Bass eat?',
        answer:
          'Peacock Bass are voracious carnivores. The ideal captive diet centres on high-quality sinking pellets (Hikari Massivore, Northfin Predator) as the staple, supplemented with market prawns, frozen silversides or smelt, and earthworms. Live feeder fish should be used sparingly and only captive-bred, quarantined species — never feeder goldfish, which carry disease and contain thiaminase. Most Peacock Bass raised on pellets from a young age will readily accept them as adults, making long-term nutrition management straightforward. Feed adults every other day with a weekly fast day. Overfeeding is the most common dietary mistake — these fish will eat until they are physically unable to consume more, leading to obesity and water quality problems.',
      },
      {
        question: 'Are Peacock Bass legal to own?',
        answer:
          'Peacock Bass are legal to own in most jurisdictions, but some states and countries have restrictions due to their invasive potential. In the United States, Cichla species are legal in most states but may be restricted or require permits in states with warm climates where escaped fish could establish feral populations — notably parts of the southern US. Florida, where feral Peacock Bass populations already exist, allows ownership. Always check your local and state regulations before purchasing. In the UK, EU, Canada, and Australia, regulations vary by species and jurisdiction. The Fish Collection ships only to jurisdictions where the species is legal and can provide guidance on local regulations upon request.',
      },
      {
        question: 'How long do Peacock Bass live in captivity?',
        answer:
          'Peacock Bass have a lifespan of 10–15 years in captivity with proper care. Some specimens in public aquaria and dedicated private collections have exceeded 15 years. Longevity depends on tank size (fish in undersized tanks experience chronic stress and stunted growth that shortens lifespan), water quality (consistent low-nitrate conditions through regular water changes), and diet (a varied, lean diet prevents fatty liver disease, one of the leading causes of premature death in captive Cichla). The first two years — during the rapid-growth phase — are when husbandry standards matter most. Peacock Bass that survive to 30+ cm with good body condition and no chronic health issues typically go on to live a full lifespan.',
      },
      {
        question: 'Can you breed Peacock Bass at home?',
        answer:
          'Breeding Peacock Bass at home is achievable but requires a large tank (300+ gallons minimum) and a compatible pair. Pairs form naturally from groups raised together — forced pairing of unfamiliar adults usually results in serious aggression. The species is a biparental substrate spawner that deposits 3,000–10,000 eggs on flat surfaces. Both parents guard the eggs and fry aggressively. Fry are free-swimming within 7–10 days and can be fed baby brine shrimp immediately. Growth is rapid, and fry must be sorted by size to prevent cannibalism. The main challenge is space — a breeding pair with fry occupies an entire 300-gallon tank, and the fry grow quickly enough to need a separate grow-out system within weeks.',
      },
    ],
    sources: [
      {
        title: 'Cichla ocellaris Bloch & Schneider, 1801',
        url: 'https://www.fishbase.se/summary/Cichla-ocellaris.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Systematics and Biogeography of the Genus Cichla (Perciformes: Cichlidae)',
        url: 'https://doi.org/10.1590/S1679-62252006000200002',
        publisher: 'Neotropical Ichthyology',
      },
      {
        title:
          'Invasive Peacock Bass Cichla spp.: Global Distribution and Ecological Impact',
        url: 'https://doi.org/10.1007/s10530-019-02021-2',
        publisher: 'Biological Invasions',
      },
      {
        title:
          'Hole-in-the-Head Disease: Aetiology, Pathogenesis, and Treatment in Cichlidae',
        url: 'https://doi.org/10.1111/jfd.12901',
        publisher: 'Journal of Fish Diseases',
      },
    ],
    relatedSlugs: [
      'clown-knife-fish',
      'flowerhorn-cichlid',
      'platinum-arowana',
    ],
  },

  // ─────────────────────────────────────────────
  // 12. Clown Loach
  // ─────────────────────────────────────────────
  {
    title: 'Clown Loach (Chromobotia macracanthus): Complete Care Guide & Tank Setup',
    slug: 'clown-loach',
    type: 'species',
    category: 'loach',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-01',
    updatedAt: '2026-03-20',
    heroImage: '/images/species/clown-loach-hero.jpg',
    heroImageAlt:
      'School of Clown Loaches displaying bright orange bodies with bold black wedge-shaped bands resting among driftwood',
    metaTitle:
      'Clown Loach (Chromobotia macracanthus) Care Guide | The Fish Collection',
    metaDescription:
      'Complete Clown Loach care guide — tank size, water parameters, diet & social needs. Expert advice from The Fish Collection for this iconic schooling fish.',
    quickAnswerQuestion:
      'How do you care for Clown Loaches?',
    quickAnswer:
      'Clown Loaches require a minimum 125-gallon aquarium for a group of 5+, warm soft water (pH 6.0–7.5, 26–30 °C), and a varied diet of sinking pellets, frozen bloodworms, and snails. They are highly social schooling fish that must be kept in groups and given ample hiding places among driftwood and caves.',
    summary:
      'The Clown Loach (Chromobotia macracanthus) is one of the most beloved freshwater aquarium fish worldwide, cherished for its vivid orange-and-black banding, playful social behaviour, and impressive potential size of 30 cm or more. Native to the rivers of Borneo and Sumatra in Indonesia, this long-lived species demands a spacious tank, a social group of conspecifics, and careful attention to water quality. This guide covers every aspect of Clown Loach care — from tank setup and water chemistry to diet, breeding challenges, and disease prevention — informed by The Fish Collection\'s years of experience sourcing and maintaining these iconic fish.',
    scientificName: 'Chromobotia macracanthus',
    keyFacts: [
      { label: 'Scientific Name', value: 'Chromobotia macracanthus' },
      { label: 'Max Size', value: '30 cm (12 in); occasionally larger' },
      { label: 'Tank Size', value: '125 gallons (475 L) minimum for a group' },
      { label: 'Temperature', value: '26–30 °C (78–86 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '20–25 years in captivity' },
      { label: 'Diet', value: 'Omnivore — sinking pellets, frozen foods, and snails' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascape', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'ich-white-spot', text: 'Ich (White Spot Disease)', level: 3 },
      { id: 'skinny-disease', text: 'Skinny Disease', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Clown Loach (<em>Chromobotia macracanthus</em>) is arguably the most popular loach in the freshwater aquarium hobby and one of the most recognisable tropical fish of any kind. Its bold pattern of bright orange body colour intersected by three jet-black wedge-shaped bands, combined with its active social behaviour and endearing "playing dead" habit (lying on its side — completely normal), has made it a favourite among hobbyists for over half a century.</p>
<p>What many new keepers do not realise, however, is that Clown Loaches are not the small, easy community fish they appear to be in the shop. They grow slowly but steadily to 25–30 cm (10–12 inches) over a decade, with some exceptional specimens reaching 40 cm in large aquaria. They are highly social and must be kept in groups of at least 5, which means the eventual tank requirement is substantial — 125 gallons at minimum. And they are extraordinarily long-lived, with lifespans of 20–25 years well documented. A Clown Loach is a multi-decade commitment.</p>
<p>At The Fish Collection, we have sourced Clown Loaches from licensed Indonesian exporters for years and understand the nuances of their care from acclimatisation through long-term maintenance. This guide provides the comprehensive information you need to keep these magnificent fish thriving for their full, impressive lifespan.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Chromobotia macracanthus</em> is endemic to the large river systems of the Indonesian islands of Borneo (Kalimantan) and Sumatra. They inhabit the main channels and tributaries of rivers such as the Kapuas, Kahayan, and Barito in Borneo and the Batang Hari and Musi in Sumatra. These are warm (26–30 °C), soft (GH 2–8 dGH), slightly acidic to neutral (pH 5.5–7.0) tropical rivers that flow through dense equatorial rainforest.</p>
<p>In their natural habitat, Clown Loaches are found in moderate current over substrates of sand, pebbles, and submerged woody debris. They are benthic fish that use their sensitive barbels to forage among the substrate for insect larvae, worms, crustaceans, and snails. During the monsoon season, they migrate upstream into flooded forest areas and tributary streams to spawn — a seasonal migration that has so far prevented reliable captive breeding.</p>
<p>The vast majority of Clown Loaches in the aquarium trade are wild-caught from Borneo and Sumatra and exported through Jakarta-based fish farms that hold and condition the fish before shipment. Indonesia regulates the harvest through seasonal quotas, and The Fish Collection works exclusively with exporters who operate within these legal frameworks. Understanding the wild origin of these fish is important for providing appropriate water chemistry and reducing acclimatisation stress.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascape</h3>
<p>A group of 5–6 Clown Loaches requires a minimum 125-gallon (475 L) aquarium measuring at least 180 cm long × 45 cm wide × 50 cm tall (72 × 18 × 20 inches). For larger groups or to allow the fish to reach their full adult size potential, 200–300 gallons is preferable. Length is the primary consideration — Clown Loaches are active swimmers that spend hours cruising the bottom third of the tank in their social group.</p>
<p>Aquascaping should provide abundant hiding places. Clown Loaches are most confident — and display the best colouration — when they have access to sheltered retreats. Stacked driftwood, coconut shells, PVC pipe sections, and commercial loach caves all work well. The fish will pile into a single hiding spot in a tight cluster, a charming social behaviour that requires caves large enough to accommodate the entire group. Substrate should be fine sand or smooth gravel — Clown Loaches have sensitive barbels that can be damaged by rough substrate. Live plants are compatible; Java Fern, Anubias, and Cryptocoryne species tolerate the low-to-moderate lighting Clown Loaches prefer.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Clown Loaches appreciate moderate water flow that replicates their riverine habitat. A canister filter rated for 1.5–2× the tank volume, or a sump system, provides the mechanical and biological filtration needed for a group of messy omnivores. Target a turnover rate of 6–8× the tank volume per hour. Ensure the filter output creates a gentle current along the length of the tank, with calmer zones behind driftwood for resting.</p>
<p>Biological filtration must be well-established before introducing Clown Loaches — these fish are highly sensitive to ammonia and nitrite, particularly during the acclimatisation period. A fully cycled tank with established bacterial colonies is non-negotiable. Supplemental aeration via air stones is beneficial, particularly at the upper end of the temperature range where dissolved oxygen levels naturally decrease.</p>

<h3 id="lighting">Lighting</h3>
<p>Clown Loaches prefer subdued lighting. In their natural habitat, the rainforest canopy filters most direct sunlight, creating a dappled, low-light environment at the riverbed. Standard LED fixtures at 30–50% intensity, or tanks with extensive floating plant cover, replicate these conditions well. Under bright lighting, Clown Loaches will hide for extended periods and display washed-out colouration. A gradual dawn/dusk light transition encourages natural behaviour and reduces startle responses.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Clown Loaches perform best in warm, soft, slightly acidic water that mirrors their Indonesian river habitat:</p>
<ul>
<li><strong>Temperature:</strong> 26–30 °C (78–86 °F). The warmer end of this range (28–30 °C) promotes the best colouration and activity. Temperatures below 24 °C suppress immune function and increase ich susceptibility dramatically.</li>
<li><strong>pH:</strong> 6.0–7.5. Stability is more important than hitting a specific target. Avoid pH swings greater than 0.3 units per day.</li>
<li><strong>General Hardness (GH):</strong> 2–10 dGH (36–179 ppm). Soft to moderately hard water is preferred.</li>
<li><strong>Carbonate Hardness (KH):</strong> 2–6 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Clown Loaches are especially sensitive to nitrogenous waste.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. Weekly 25–30% water changes maintain this in most setups.</li>
</ul>
<p>An important note on medication sensitivity: Clown Loaches have tiny, embedded scales and are functionally similar to scaleless fish in terms of medication tolerance. They are extremely sensitive to copper, formalin, malachite green, and potassium permanganate. Always use half-dose protocols when treating Clown Loaches and never add copper-based medications to a Clown Loach tank.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Clown Loaches are true omnivores with a particular fondness for snails — they are, in fact, one of the most effective biological snail-control agents available to aquarists. Their diet in the wild consists of insect larvae, worms, small crustaceans, plant matter, and molluscs, which they locate using their sensitive barbels.</p>
<p>Recommended foods:</p>
<ul>
<li><strong>Sinking pellets and wafers</strong> — Hikari Sinking Wafers, Northfin Kelp Wafers, or Repashy Bottom Scratcher gel food. These should form the dietary base, offered daily.</li>
<li><strong>Frozen bloodworms</strong> — a favourite food that Clown Loaches devour enthusiastically. Offer 2–3 times per week.</li>
<li><strong>Frozen brine shrimp and Mysis shrimp</strong> — excellent supplemental protein.</li>
<li><strong>Snails</strong> — Malaysian Trumpet Snails, Ramshorn Snails, and small pond snails. Clown Loaches will systematically eliminate pest snails, extracting them from their shells with remarkable dexterity. Providing a regular snail supply is both enrichment and nutrition.</li>
<li><strong>Blanched vegetables</strong> — cucumber, courgette (zucchini), and spinach. Offered 1–2 times weekly for fibre and vitamins. Remove after 12 hours.</li>
<li><strong>Earthworms</strong> — chopped nightcrawlers are readily accepted and highly nutritious.</li>
</ul>
<p>Feed Clown Loaches once or twice daily, ideally in the evening when they are most active. Use a feeding dish or scatter food near their preferred hiding spots to ensure all group members get a share. Clown Loaches feed by methodically sifting through substrate, so sinking foods that settle on the bottom are more appropriate than floating options.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Clown Loaches are among the most socially complex freshwater fish commonly kept in aquaria. They are obligate schoolers — individuals kept alone or in pairs become stressed, reclusive, and prone to disease. A group of 5 or more displays a rich repertoire of social behaviours: group foraging, communal sleeping in piles within caves, hierarchical displays involving lateral body vibrations, and the famous "Clown Loach death fake," in which the fish lies motionless on its side or even upside-down, apparently lifeless, only to spring to action when disturbed. This behaviour is completely normal and not a sign of illness, though it understandably alarms new owners.</p>
<p>Clown Loaches are crepuscular — most active during dawn and dusk periods, with moderate activity throughout the day if the tank is appropriately dim. They produce audible clicking sounds using their pharyngeal teeth, a communication behaviour that is most often heard during feeding or social interactions.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Clown Loaches are peaceful, non-aggressive fish that integrate well into community setups with similarly sized, non-aggressive species. Suitable companions include:</p>
<ul>
<li><strong>Large tetras and barbs</strong> — Congo Tetras, Denison Barbs, Roseline Sharks, and Tinfoil Barbs are all compatible.</li>
<li><strong>Rainbowfish</strong> — Boesemani and Turquoise Rainbowfish are excellent mid-water companions that appreciate similar water parameters.</li>
<li><strong>Corydoras catfish</strong> — peaceful bottom-dwellers that coexist well, provided both species have adequate floor space.</li>
<li><strong>Gouramis</strong> — Pearl Gouramis and Moonlight Gouramis are calm top-water companions.</li>
<li><strong>Medium cichlids</strong> — Severums, Geophagus, and Angelfish are compatible in large tanks. Avoid aggressive cichlids.</li>
<li><strong>Other loaches</strong> — Yo-yo Loaches, Zebra Loaches, and Kuhli Loaches can coexist in spacious tanks.</li>
</ul>
<p>Avoid highly aggressive species (large Central American cichlids, Red-Bellied Piranhas), very small fish that might stress the Clown Loaches during their active periods, and fin-nippers. Clown Loaches possess a sharp suborbital spine beneath each eye that can be erected defensively — this spine can become entangled in nets (always use a container to catch Clown Loaches, never a net) and can injure aggressive tank mates that attempt to bully them.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of Clown Loaches remains one of the great unsolved challenges in freshwater aquaculture. Despite their enormous popularity and decades of effort by hobbyists and commercial farms alike, reliable captive propagation has not been achieved. Virtually all Clown Loaches in the trade are wild-caught from Borneo and Sumatra.</p>
<p>In the wild, Clown Loaches are seasonal migratory spawners. They travel upstream into tributary streams and flooded forest areas during the monsoon season, where females release thousands of small, non-adhesive eggs into the current. The eggs drift downstream and develop without parental care. This pelagic spawning strategy is extremely difficult to replicate in aquaria.</p>
<p>A few commercial operations in Indonesia and the Czech Republic have reported limited success using hormonal induction (injections of Ovaprim or similar gonadotropin-releasing hormone analogues) to trigger spawning in conditioned adults. However, yields are low and the process requires veterinary expertise. For the foreseeable future, sustainable wild harvest from managed Indonesian fisheries remains the primary source of Clown Loaches for the aquarium trade.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="ich-white-spot">Ich (White Spot Disease)</h3>
<p>Clown Loaches are notoriously susceptible to ich (<em>Ichthyophthirius multifiliis</em>) — they are often the first fish in a community tank to show symptoms and the most heavily infested. Their tiny embedded scales offer less physical protection against the parasite than the fully scaled bodies of most other aquarium fish. Treatment must account for their medication sensitivity: never use copper-based treatments or full-strength malachite green. The safest and most effective approach is to raise the temperature to 30–32 °C over 48 hours (which accelerates the parasite's life cycle) and treat with half-dose malachite green/formaldehyde combination (Kordon Rid Ich Plus at 50% label dose) or Kordon Ich Attack (herbal formula safe for sensitive species). Maintain elevated temperatures for 10–14 days to ensure all life stages of the parasite are eliminated.</p>

<h3 id="skinny-disease">Skinny Disease</h3>
<p>Skinny disease — progressive wasting characterised by a sunken belly and visible spine despite continued feeding — is a common and frustrating condition in Clown Loaches. It is typically caused by internal flagellate parasites (<em>Hexamita</em>, <em>Spironucleus</em>) or intestinal nematodes, often acquired during the wild-harvest and export process. Treatment involves identifying the parasite (a faecal sample examination by a veterinarian is ideal) and administering targeted medication: metronidazole (250 mg per 40 litres, repeated after 48 hours) for flagellates, or levamisole/fenbendazole for nematodes. Prophylactic deworming with praziquantel during quarantine is strongly recommended for all newly acquired Clown Loaches.</p>
<p>Other health concerns include Columnaris (bacterial infection presenting as white fuzzy patches, particularly at low temperatures — maintain 28+ °C as prevention), fin rot (secondary to poor water quality), and sensitivity to medications. The single best health strategy for Clown Loaches is prevention through warm water, pristine quality, a varied diet, and a proper quarantine period of 4–6 weeks for all new arrivals.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Clown Loaches get?',
        answer:
          'Clown Loaches commonly reach 25–30 cm (10–12 inches) in home aquaria, with exceptional specimens exceeding 35 cm in very large tanks. Growth is notably slow compared to most aquarium fish — it can take 5–8 years to reach 20 cm. In the wild, specimens up to 40 cm have been recorded. Their slow growth misleads many new keepers who purchase small (5 cm) juveniles without realising the eventual size and tank requirements. A group of 5 adult Clown Loaches at 25+ cm each requires substantial floor space — hence the 125-gallon minimum tank recommendation. Planning for their adult size before purchase is essential.',
      },
      {
        question: 'Why does my Clown Loach lie on its side?',
        answer:
          'The "Clown Loach death fake" is one of the species\' most distinctive and alarming behaviours, particularly for new owners. Clown Loaches regularly lie on their sides, wedge themselves upside-down in caves, or sprawl motionless on the substrate — behaviours that would indicate severe distress in most other fish. For Clown Loaches, this is entirely normal resting behaviour. When disturbed or when food is offered, the fish will spring to activity immediately. It is believed to be a form of energy-conserving rest behaviour, possibly also related to gas bladder regulation. However, if a Clown Loach lies on its side and shows additional symptoms — loss of colour, rapid breathing, refusal to eat, or failure to respond to stimulation — then illness should be investigated.',
      },
      {
        question: 'Do Clown Loaches eat snails?',
        answer:
          'Yes, Clown Loaches are one of the most effective biological snail control agents in the aquarium hobby. They consume pest snails with remarkable efficiency, extracting the soft body from the shell using their specialised mouth and pharyngeal teeth. Malaysian Trumpet Snails, Ramshorn Snails, and small pond snails are all eagerly consumed. A group of 5+ Clown Loaches will typically eliminate a snail infestation within 2–4 weeks. However, Clown Loaches should never be purchased solely for snail control — they are large, long-lived, social fish that require a permanent, spacious home. If you need temporary snail control in a small tank, Assassin Snails are a more appropriate choice.',
      },
      {
        question: 'Can you keep a single Clown Loach?',
        answer:
          'No, keeping a single Clown Loach is strongly discouraged. Chromobotia macracanthus is an obligate schooling species that requires a minimum group of 5 conspecifics to display normal social behaviour and maintain physical health. Solitary Clown Loaches typically become reclusive, lose colour intensity, refuse food intermittently, and are significantly more susceptible to stress-related diseases like ich and skinny disease. In groups, they are bold, active, and display a rich repertoire of fascinating social behaviours. If you cannot accommodate a group of 5+ in a tank of at least 125 gallons, the Clown Loach is not the right fish for your setup.',
      },
      {
        question: 'How long do Clown Loaches live?',
        answer:
          'Clown Loaches are among the longest-lived freshwater aquarium fish commonly kept by hobbyists. Lifespans of 20–25 years are well documented, and some aquarists report specimens exceeding 30 years in long-established setups. Their longevity is comparable to some marine fish and exceeds many popular dog breeds. This extraordinary lifespan means that purchasing Clown Loaches is a serious long-term commitment. The fish you buy as a 5 cm juvenile may still be alive and thriving when you retire. Longevity depends on water quality (warm, clean, low nitrate), diet variety, social group size, and tank volume. Fish kept in undersized tanks with poor maintenance rarely survive beyond 8–10 years.',
      },
      {
        question: 'Why are Clown Loaches so expensive?',
        answer:
          'Clown Loach prices vary from $10–$15 for small juveniles (4–5 cm) to $50–$150 for medium specimens (10–15 cm) and $200–$500+ for large adults (20+ cm). The pricing reflects several factors: virtually all Clown Loaches are wild-caught from Indonesian rivers (captive breeding has not been reliably achieved), export is regulated by seasonal quotas, and the fish experience significant mortality during collection and transport. Larger specimens are disproportionately expensive because they are older (often 5–10+ years), harder to collect without injury, and represent years of growth that the seller has invested in. Captive-bred Clown Loaches, when occasionally available, command premium prices due to their rarity and typically superior health upon arrival.',
      },
    ],
    sources: [
      {
        title: 'Chromobotia macracanthus (Bleeker, 1852)',
        url: 'https://www.fishbase.se/summary/Chromobotia-macracanthus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Biology, Fisheries, and Conservation of Chromobotia macracanthus in Indonesian River Systems',
        url: 'https://doi.org/10.1007/s10641-008-9348-y',
        publisher: 'Environmental Biology of Fishes',
      },
      {
        title:
          'Induced Spawning of the Clown Loach, Chromobotia macracanthus, Using Ovaprim',
        url: 'https://doi.org/10.1111/jai.12653',
        publisher: 'Journal of Applied Ichthyology',
      },
      {
        title:
          'Ichthyophthirius multifiliis: Treatment Considerations for Medication-Sensitive Species',
        url: 'https://doi.org/10.1111/jfd.13009',
        publisher: 'Journal of Fish Diseases',
      },
      {
        title:
          'Trade in Ornamental Freshwater Fish from Southeast Asia: Sustainability and Conservation',
        url: 'https://doi.org/10.1016/j.biocon.2012.07.012',
        publisher: 'Biological Conservation',
      },
    ],
    relatedSlugs: [
      'zebra-pleco',
      'blue-diamond-discus',
      'fire-eel',
    ],
  },

  // ─────────────────────────────────────────────
  // 13. Elephantnose Fish
  // ─────────────────────────────────────────────
  {
    title: 'Elephantnose Fish (Gnathonemus petersii): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'elephantnose-fish',
    type: 'species',
    category: 'goby',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-25',
    updatedAt: '2026-03-25',
    heroImage: '/images/species/elephantnose-fish-hero.jpg',
    heroImageAlt:
      'Elephantnose Fish probing the sandy substrate with its elongated chin barbel in a dimly lit planted aquarium',
    metaTitle:
      'Elephantnose Fish Care Guide — Tank, Diet & Setup',
    metaDescription:
      'Complete Elephantnose Fish care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection\'s specialist aquarists.',
    quickAnswerQuestion:
      'How do you care for an Elephantnose Fish?',
    quickAnswer:
      'Elephantnose Fish need a minimum 55-gallon aquarium with fine sand substrate, dim lighting, and plenty of hiding spots. They require pristine water (pH 6.0–7.5, 24–28 °C) and a diet centred on live or frozen bloodworms, blackworms, and tubifex — they rarely accept dry foods.',
    summary:
      'The Elephantnose Fish (Gnathonemus petersii) is one of the most intellectually fascinating freshwater species available to aquarists. Equipped with a weakly electric organ that generates a continuous electric field for navigation and communication, this West African mormyrid navigates pitch-dark environments with astonishing precision. Their elongated chin appendage — the "trunk" — is packed with electroreceptors and is used to probe substrate for buried invertebrates. While not a beginner fish, the Elephantnose rewards patient keepers with remarkable behaviour that borders on interactive intelligence. This guide draws on The Fish Collection\'s extensive experience importing and maintaining these sensitive electrogenic fish.',
    scientificName: 'Gnathonemus petersii',
    keyFacts: [
      { label: 'Scientific Name', value: 'Gnathonemus petersii' },
      { label: 'Max Size', value: '25 cm (10 in)' },
      { label: 'Tank Size', value: '55 gallons (210 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '6–10 years in captivity' },
      { label: 'Diet', value: 'Carnivore — live and frozen invertebrates' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-tank-mates', text: 'Behaviour & Tank Mates', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'electrosensory-stress', text: 'Electrosensory Stress', level: 3 },
      { id: 'skin-infections', text: 'Skin Infections', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Elephantnose Fish (<em>Gnathonemus petersii</em>) belongs to the family Mormyridae, a group of weakly electric fishes endemic to Africa. The species' most striking feature is its elongated, trunk-like extension of the lower jaw — technically a chin appendage called the Schnauzenorgan — which is densely packed with electroreceptor cells. This organ, combined with a specialised electric organ located near the caudal peduncle, allows the fish to generate and interpret weak electric fields for navigation, prey detection, and social communication in total darkness.</p>
<p>What makes the Elephantnose particularly compelling for advanced aquarists is its cognitive capacity. Studies at the University of Bonn have demonstrated that <em>G. petersii</em> possesses one of the highest brain-to-body-mass ratios of any fish — comparable to humans by proportion. They can learn to navigate mazes, recognise individual tank mates by their unique electric organ discharge (EOD) signatures, and discriminate between objects using electrolocation alone. In a properly maintained aquarium, keepers often report interactive behaviour that surpasses most other freshwater species.</p>
<p>At The Fish Collection, we have worked with mormyrids for over a decade and consider the Elephantnose Fish one of the most rewarding species in our catalogue. However, their sensitivity to water quality, medication, and social stress means they demand a keeper who is willing to invest in proper husbandry. This guide provides everything you need to succeed.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>The Elephantnose Fish is native to the slow-moving, turbid rivers and floodplain pools of West and Central Africa, with its range spanning from the Niger River basin through the Congo system. These waterways are characterised by dark, tannin-stained water with visibility often under 30 cm, a soft muddy or sandy substrate, and dense stands of submerged vegetation and fallen timber. The fish are strictly nocturnal in the wild, emerging from daytime refugia at dusk to probe the substrate methodically for chironomid larvae, tubificid worms, and small crustaceans.</p>
<p>Water chemistry in their native habitats is typically soft and slightly acidic to neutral — pH 6.0–7.2, with general hardness below 10 dGH and conductivity in the range of 50–200 µS/cm. Temperatures remain stable between 24 °C and 28 °C year-round. The low-visibility environment is precisely why the electric sense evolved: where eyes fail, electrolocation provides a three-dimensional "image" of the surroundings in real time.</p>
<p>Replicating these conditions in captivity is essential. Bright lighting, sharp gravel substrates, and boisterous tank mates all work against the Elephantnose's biology. A successful setup mimics the dim, sheltered, substrate-rich environment of a West African backwater — and the fish will reward you with confident, exploratory behaviour rather than the chronic hiding that plagues poorly maintained specimens.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>A single Elephantnose Fish requires a minimum aquarium of 55 gallons (210 litres) with dimensions of at least 120 cm long × 40 cm wide × 45 cm tall. The footprint matters more than height — these fish spend their time along the bottom, probing every centimetre of substrate. For a small group (3–5 individuals, which is recommended for reducing conspecific aggression), upgrade to 100 gallons (380 L) or larger.</p>
<p>The substrate must be fine sand — never gravel, crushed coral, or sharp-edged materials. The Schnauzenorgan is delicate living tissue packed with electroreceptors, and abrasive substrates will cause chronic damage that impairs feeding ability and can lead to secondary infection. We recommend play sand or pool-filter sand, rinsed thoroughly before use, to a depth of 5–8 cm.</p>
<p>Provide abundant cover in the form of PVC pipe sections, coconut half-shells, driftwood tangles, and dense plantings of low-light species such as <em>Anubias</em>, Java Fern, and <em>Cryptocoryne</em>. Each Elephantnose in the group needs its own dedicated hiding spot to establish a territory and reduce stress-related aggression. Arrange décor to create multiple line-of-sight breaks throughout the tank.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Target a turnover rate of 6–8× the tank volume per hour using a canister filter or sump system. Elephantnose Fish are extremely sensitive to dissolved nitrogenous waste — ammonia and nitrite must be undetectable at all times, and nitrate should remain below 15 ppm. Incorporate high-quality biological media such as sintered glass or ceramic rings, and add a pre-filter sponge to prevent small worms or food particles from being drawn into the impeller.</p>
<p>Flow should be moderate and diffused. Avoid strong directional currents, which stress these fish and interfere with their electrosensory perception. A spray bar positioned along the back panel distributes flow evenly. Supplement with an air-driven sponge filter for gentle additional biological filtration — the fine pores also harbour the microfauna that Elephantnose fish graze on between meals.</p>

<h3 id="lighting">Lighting</h3>
<p>Dim lighting is not optional — it is a fundamental requirement. In bright conditions, Elephantnose Fish will remain hidden indefinitely and refuse to feed, leading to gradual starvation. Use a low-intensity LED fixture at 20–40% brightness, or employ floating plants such as Amazon Frogbit, Salvinia, or <em>Ceratopteris</em> to diffuse overhead light. A moonlight or red-spectrum LED on a timer is an excellent addition, as it allows you to observe natural nocturnal foraging behaviour without disturbing the fish. Photoperiod should be 8–10 hours of dim daylight followed by 14–16 hours of darkness or moonlight-only illumination.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Elephantnose Fish demand pristine, stable water conditions. Target the following:</p>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). Use a reliable inline or titanium heater. Avoid temperature swings greater than 1 °C per day.</li>
<li><strong>pH:</strong> 6.0–7.5. A steady pH of 7.0 is ideal for most community setups.</li>
<li><strong>General Hardness (GH):</strong> 3–12 dGH (54–214 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 2–8 dKH. Maintain at least 3 dKH to buffer against pH crashes.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — non-negotiable. Even trace ammonia causes gill and skin irritation in mormyrids.</li>
<li><strong>Nitrate:</strong> &lt;15 ppm. Perform 25–30% water changes twice weekly if stocking density is moderate.</li>
<li><strong>Conductivity:</strong> 100–300 µS/cm. High conductivity above 500 µS/cm interferes with electrolocation and causes behavioural stress.</li>
</ul>
<p>An important note for mormyrid keepers: water conductivity directly affects the performance of the electric sense. In highly conductive water (high TDS/mineral content), the electric field generated by the fish becomes "short-circuited," reducing the effective range of electrolocation. Conversely, extremely soft water with very low conductivity amplifies the field but can cause pH instability. The sweet spot for <em>G. petersii</em> is 150–250 µS/cm, achievable by blending RO water with dechlorinated tap water.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Feeding is the single greatest challenge in Elephantnose Fish care. These are specialised benthic invertivores with small mouths adapted for extracting worms and larvae from sediment. The overwhelming majority will not accept flake food, pellets, or any floating dry food — and attempting to train them onto such foods is usually futile and risks starvation.</p>
<p>The dietary staples for <em>G. petersii</em> are:</p>
<ul>
<li><strong>Live blackworms (Lumbriculus variegatus):</strong> The single best food. Maintain a culture or purchase weekly. Place worms directly on the substrate; the Elephantnose will locate them via electrolocation.</li>
<li><strong>Frozen bloodworms (Chironomus larvae):</strong> An acceptable daily staple. Thaw in a small cup of tank water and distribute across the substrate using a turkey baster.</li>
<li><strong>Live or frozen tubifex worms:</strong> Excellent nutrition but ensure they are sourced from clean cultures to avoid introducing pathogens.</li>
<li><strong>Frozen brine shrimp:</strong> A useful supplementary food but lower in nutritional density than worms.</li>
<li><strong>Live daphnia and moina:</strong> Good for enrichment and stimulating natural hunting behaviour.</li>
</ul>
<p>Feed once or twice daily, offering only what is consumed within 10–15 minutes. Elephantnose Fish are slow, methodical feeders — they cannot compete with fast-moving tank mates for food, which is a critical consideration when selecting companions. Uneaten food must be removed promptly to prevent ammonia spikes. In well-established tanks with sand substrates, a healthy population of microfauna (copepods, nematodes, seed shrimp) will develop naturally and provide continuous supplemental grazing between scheduled meals.</p>

<h2 id="behaviour-and-tank-mates">Behaviour & Tank Mates</h2>
<p>Elephantnose Fish display a complex social hierarchy mediated by their electric organ discharges. Each individual produces a unique EOD waveform — essentially an electric "fingerprint" — that conveys species identity, sex, size, and emotional state. When two Elephantnose Fish encounter each other, they engage in rapid-fire electrical exchanges that can be detected with a simple AM radio held near the tank. This electrocommunication system is one of the most sophisticated non-visual signalling systems in the animal kingdom.</p>
<p>In captivity, conspecific interactions range from peaceful coexistence to intense territorial aggression, depending on tank size and the number of individuals. The worst configuration is a pair — one fish will invariably dominate and relentlessly harass the subordinate, often to death. Groups of 1 or 5+ are strongly recommended. In groups of 5 or more, aggression is diffused across multiple individuals and a stable hierarchy forms. Each fish claims a hiding spot and defends a small territory, but outright combat is rare.</p>
<p>Monitor for signs of chronic subordination: a fish that remains permanently hidden, shows pale or mottled colouration, or has a visibly thinner body condition than its group mates may be experiencing sustained social stress. If this occurs, provide additional hiding spots or rehome the individual.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Ideal tank mates are peaceful, moderate-sized species that occupy different water column zones and will not outcompete the Elephantnose for food. Good choices include:</p>
<ul>
<li><strong>Congo Tetras (<em>Phenacogrammus interruptus</em>):</strong> A natural co-inhabitant from the same geographic range. Peaceful, appropriately sized, and tolerant of dim lighting.</li>
<li><strong>Corydoras species:</strong> Bottom-dwelling catfish that coexist peacefully, though ensure they are not outcompeting the Elephantnose for substrate-level foods.</li>
<li><strong>Butterfly Fish (<em>Pantodon buchholzi</em>):</strong> A surface-dwelling African species that occupies a completely different niche.</li>
<li><strong>Rope Fish (<em>Erpetoichthys calabaricus</em>):</strong> Another West African nocturnal species; an excellent companion in dimly lit setups.</li>
<li><strong>Small to medium <a href="/exotic-fish/goby/">Synodontis catfish</a>:</strong> Peaceful species like <em>S. nigriventris</em> are compatible.</li>
</ul>
<p>Avoid aggressive cichlids, large barbs, or any fish that nips fins. Also avoid other weakly electric fish (e.g., Black Ghost Knife Fish) — their overlapping electric fields create sensory interference that stresses both species.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding <em>Gnathonemus petersii</em> in captivity is exceptionally rare and has only been documented a handful of times under controlled research conditions. The species is gonochoristic (separate sexes) but externally monomorphic — males and females are visually identical. Sexing can be achieved by analysing the EOD waveform, as male and female discharges differ subtly in duration and frequency, though this requires specialised equipment.</p>
<p>In the wild, spawning is triggered by the onset of the rainy season, which brings rising water levels, decreased conductivity, and increased turbidity. Research teams that have achieved spawning in captivity used large (500+ litre) heavily planted tanks, simulated a dry-to-wet season transition by gradually increasing water volume and reducing conductivity over several weeks, and provided a diet enriched with live foods. Eggs were scattered among fine-leaved plants and hatched in approximately 10–14 days at 26 °C. The fry are tiny and require infusoria followed by newly hatched brine shrimp nauplii.</p>
<p>For the home aquarist, breeding Elephantnose Fish is not a realistic goal. All specimens in the trade are wild-caught, primarily from Nigerian and Cameroonian export facilities. Focus your efforts on providing the best possible care for your wild-caught individuals rather than attempting reproduction.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="electrosensory-stress">Electrosensory Stress</h3>
<p>The most underappreciated health risk for Elephantnose Fish is sensory overload from electromagnetic interference (EMI). Powerheads with poorly shielded motors, electronic ballasts, stray voltage from faulty equipment, and even nearby wireless routers can generate electromagnetic fields that interfere with the fish's electrolocation system. Symptoms include erratic swimming, loss of appetite, chronic hiding, and a noticeable increase in EOD frequency (detectable with a hydrophone or AM radio). Mitigate EMI by using equipment with properly grounded wiring, positioning pumps outside the main tank where possible, and ensuring no stray voltage enters the water — a grounding probe is strongly recommended.</p>

<h3 id="skin-infections">Skin Infections</h3>
<p>Elephantnose Fish are highly susceptible to bacterial and fungal skin infections, particularly on the Schnauzenorgan. Damage from rough substrates or aggressive tank mates creates entry points for <em>Columnaris</em> (Flavobacterium columnare) and <em>Saprolegnia</em> fungus. Infected tissue appears whitish, frayed, or cottony. Treatment is complicated by the species' extreme sensitivity to many common medications — <strong>never</strong> use copper-based treatments, formalin, or potassium permanganate with mormyrids. Methylene blue at half dose and Seachem KanaPlex (kanamycin) are safer alternatives. Prevention through pristine water quality and appropriate substrate is always preferable to treatment.</p>
<p>Elephantnose Fish are also vulnerable to <em>Ichthyophthirius multifiliis</em> (ich), and treatment must be approached carefully. Raise temperature to 30 °C gradually (1 °C per day) and use half-dose methylene blue or Kordon Ich Attack (a herbal formulation). Avoid malachite green and formalin — both are lethal to mormyrids at standard dosing.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Can Elephantnose Fish see in the dark?',
        answer:
          'Elephantnose Fish do not "see" in the dark in the conventional sense, but they perceive their environment with remarkable precision through electrolocation — a sense analogous to sonar but using self-generated electric fields rather than sound. The fish\'s electric organ, located near the tail, emits a continuous stream of weak electrical pulses (200–500 per second). Objects in the environment distort this electric field, and the electroreceptors concentrated on the Schnauzenorgan and body surface detect these distortions, creating a three-dimensional electrical "image" of the surroundings. This system is so sensitive that Elephantnose Fish can distinguish between objects of different materials, sizes, and shapes in complete darkness — and can even detect the heartbeat of buried prey items.',
      },
      {
        question: 'Why does my Elephantnose Fish hide all day?',
        answer:
          'Daytime hiding is completely normal for Elephantnose Fish and reflects their strictly nocturnal lifestyle in the wild. However, if the fish also hides at night and refuses to emerge for feeding, the environment likely needs adjustment. The most common causes are excessive lighting (install floating plants or reduce LED intensity to below 30%), lack of adequate hiding spots (each fish needs its own dedicated refuge), aggressive tank mates that intimidate the Elephantnose during its active period, or elevated water conductivity that impairs electrolocation. Installing a red or moonlight LED on a timer allows you to observe natural nocturnal behaviour. A healthy Elephantnose will emerge within minutes of lights-off and systematically probe the entire substrate.',
      },
      {
        question: 'What do Elephantnose Fish eat?',
        answer:
          'Elephantnose Fish are specialised benthic invertivores that strongly prefer live and frozen worm-type foods. The dietary staples are live blackworms (Lumbriculus variegatus), frozen bloodworms (Chironomus larvae), and frozen or live tubifex worms. Live daphnia and brine shrimp are accepted as supplemental foods. The critical point is that most Elephantnose Fish will never accept dry foods — flakes and pellets are almost universally refused. Keepers must commit to a regular supply of live or frozen invertebrate foods before purchasing this species. Place food directly on the sandy substrate where the fish can locate it using electrolocation; floating foods are ignored.',
      },
      {
        question: 'Can you keep Elephantnose Fish with other electric fish?',
        answer:
          'Keeping Elephantnose Fish with other weakly electric species such as Black Ghost Knife Fish (Apteronotus albifrons) is generally discouraged. Both species generate continuous electric fields for navigation and communication, and when housed together, their overlapping fields create sensory interference — analogous to two people trying to hold separate conversations in a small room. This electromagnetic "jamming" causes chronic stress, reduced feeding, and increased aggression in both species. If you must house multiple electrogenic species, the tank must be very large (150+ gallons) with dense visual and physical barriers between territories. Even then, some individuals may never tolerate the presence of another electric fish.',
      },
      {
        question: 'How big do Elephantnose Fish get?',
        answer:
          'In captivity, Elephantnose Fish typically reach 20–25 cm (8–10 inches) total length, including the Schnauzenorgan. Growth rate is moderate — expect a 7 cm juvenile to reach full size in approximately 2–3 years under optimal conditions. Maximum recorded size in the wild is approximately 35 cm, though this is exceptional. Growth is heavily influenced by diet quality (live foods promote faster, healthier growth than frozen-only diets), water quality (chronic elevated nitrate stunts growth), and social dynamics (subordinate individuals in aggressive groups often show reduced growth rates). A healthy adult in a spacious, well-maintained aquarium will be an impressively substantial fish with a distinctive, intelligent presence.',
      },
    ],
    sources: [
      {
        title: 'Gnathonemus petersii (Günther, 1862)',
        url: 'https://www.fishbase.se/summary/Gnathonemus-petersii.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Active Electrolocation in Gnathonemus petersii: Sensory Performance and Object Recognition',
        url: 'https://doi.org/10.1007/s00359-003-0408-9',
        publisher: 'Journal of Comparative Physiology A',
      },
      {
        title:
          'Electric Fish: New Insights Into Weakly Electric Fish Biology',
        url: 'https://doi.org/10.1016/j.cub.2019.08.062',
        publisher: 'Current Biology',
      },
      {
        title:
          'Brain Size and Cognitive Abilities in Mormyrid Electric Fish',
        url: 'https://doi.org/10.1007/s00429-011-0328-2',
        publisher: 'Brain Structure and Function',
      },
    ],
    relatedSlugs: [
      'fire-eel',
      'clown-knife-fish',
      'clown-loach',
    ],
  },

  // ─────────────────────────────────────────────
  // 14. Albino Shark
  // ─────────────────────────────────────────────
  {
    title: 'Albino Shark (Epalzeorhynchos munense): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'albino-shark',
    type: 'species',
    category: 'barb',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-25',
    updatedAt: '2026-03-25',
    heroImage: '/images/species/albino-shark-hero.jpg',
    heroImageAlt:
      'Albino Shark displaying its pale cream body and striking red-orange fins against a naturalistic aquarium backdrop with driftwood',
    metaTitle:
      'Albino Shark Care Guide — Tank, Diet & Setup',
    metaDescription:
      'Complete Albino Shark care guide — tank size, water parameters, diet & compatibility. Expert advice from The Fish Collection\'s specialist aquarists.',
    quickAnswerQuestion:
      'How do you care for an Albino Shark fish?',
    quickAnswer:
      'Albino Sharks require a minimum 55-gallon aquarium with strong filtration, numerous hiding spots, and moderate current. They thrive at pH 6.5–7.5 and 24–27 °C, and should be kept singly or in groups of 5+ to diffuse territorial aggression toward conspecifics.',
    summary:
      'The Albino Shark (Epalzeorhynchos munense) — also frequently sold under the name Albino Rainbow Shark — is a popular semi-aggressive cyprinid prized for its striking contrast of creamy-white body and vivid red-orange fins. While their "shark" moniker and bold personality make them an eye-catching centrepiece, they are also one of the most commonly mismanaged aquarium fish. Undersized tanks and incompatible tankmates are the root of most aggression problems attributed to the species. This care guide from The Fish Collection provides authoritative, experience-based advice on housing, feeding, and managing this territorial but manageable fish.',
    scientificName: 'Epalzeorhynchos munense',
    keyFacts: [
      { label: 'Scientific Name', value: 'Epalzeorhynchos munense' },
      { label: 'Max Size', value: '15 cm (6 in)' },
      { label: 'Tank Size', value: '55 gallons (210 L) minimum' },
      { label: 'Temperature', value: '24–27 °C (75–81 °F)' },
      { label: 'pH', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Beginner to Intermediate' },
      { label: 'Lifespan', value: '5–8 years in captivity' },
      { label: 'Diet', value: 'Omnivore — algae, prepared foods, small invertebrates' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascaping', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-tank-mates', text: 'Behaviour & Tank Mates', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'aggression-management', text: 'Aggression Management', level: 3 },
      { id: 'ich-and-skin-parasites', text: 'Ich & Skin Parasites', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Albino Shark is the leucistic colour morph of <em>Epalzeorhynchos munense</em>, a cyprinid native to the river systems of Thailand and mainland Southeast Asia. Despite the common name, it bears no relation to true sharks — the moniker derives from its upright dorsal fin, torpedo-shaped body, and assertive territorial behaviour. The albino variant retains the species' characteristic fin shape and personality while replacing the dark grey-green body pigmentation with a pale cream-to-white colouration, making the red-orange fins even more visually striking.</p>
<p>This species is one of the most widely available semi-aggressive freshwater fish in the hobby, sold in virtually every aquarium retailer worldwide. Unfortunately, its ubiquity has led to widespread misunderstanding. Pet-store staff routinely sell Albino Sharks for 10-gallon tanks or recommend them as community-safe, which leads to severe aggression problems as the fish matures. In reality, the Albino Shark is a highly territorial bottom-dweller that needs careful tankmate selection and sufficient space to establish a home range without constant conflict.</p>
<p>At The Fish Collection, we consider the Albino Shark an excellent species for intermediate aquarists who enjoy watching assertive, personality-driven fish. With the right setup, their territorial displays are entertaining rather than destructive, and their constant activity level makes them a genuine centrepiece species. This guide covers everything needed for successful long-term care, drawing on our experience with hundreds of specimens across retail and private collections. For more on related <a href="/exotic-fish/barb/">barb and cyprinid species</a>, see our dedicated category page.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Epalzeorhynchos munense</em> inhabit the fast-flowing tributaries and main channels of river systems in Thailand, Laos, and Cambodia. Their preferred microhabitat is the rocky, gravel-bottomed runs where moderate-to-strong current flows over cobbles and boulders — zones that support biofilm and algae growth, the species' primary natural food source. During the wet season, they move into flooded marginal areas, but they consistently select zones with significant current and structure.</p>
<p>Water conditions in these habitats are characterised by moderate hardness (5–15 dGH), slightly acidic to neutral pH (6.5–7.5), and temperatures of 24–27 °C. Dissolved oxygen levels are high owing to the current, and water clarity is variable — ranging from clear during the dry season to turbid during monsoon floods. The substrate is predominantly gravel and cobble interspersed with sand deposits.</p>
<p>In the wild, these fish are solitary and strongly territorial. Individual fish claim a boulder or rock crevice and defend a surrounding area of 1–2 square metres against all conspecifics and similarly shaped intruders. This territorial imperative is hardwired and persists in captivity regardless of how long the fish has been in an aquarium. Understanding this behaviour is the key to managing aggression: the fish is not "mean" — it is following a survival strategy that works well in a Southeast Asian river but can be problematic in a glass box.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascaping</h3>
<p>A minimum aquarium of 55 gallons (210 litres) with dimensions of at least 120 cm long × 40 cm wide is essential for a single Albino Shark. The footprint is critical — these are bottom-oriented, highly active fish that patrol a defined territory. Tanks shorter than 120 cm do not provide enough linear space for the fish to establish a territory while leaving room for other inhabitants. For community setups with multiple bottom-dwelling species, a 75-gallon (280 L) or larger tank is strongly recommended.</p>
<p>Aquascaping should prioritise structure and sight-line breaks. Create distinct territories using clusters of rocks, driftwood, and dense plant stands spaced along the tank's length. Each "zone" should include at least one cave or overhang — the Albino Shark will claim one as its home base and defend the surrounding area. By creating 3–4 visually isolated zones in a 55-gallon tank, you allow other bottom-dwelling fish to exist outside the Shark's perceived territory. Avoid open, unstructured layouts, which force the Shark into a single contiguous territory that encompasses the entire tank floor — a recipe for relentless harassment of all bottom-oriented tank mates.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Target a turnover rate of 8–10× the tank volume per hour. Albino Sharks are riverine fish that appreciate moderate-to-strong flow and high dissolved oxygen. A large canister filter (e.g., Fluval FX4 for a 55-gallon, FX6 for 75+ gallons) with the outlet directed along the tank's length creates the longitudinal current these fish prefer. Supplement with a circulation pump or wavemaker if needed to eliminate dead spots.</p>
<p>Biological filtration should be robust. Ceramic bio-media or sintered glass in the canister, combined with an internal sponge filter for supplementary biological capacity, provides the redundancy needed to maintain zero ammonia and nitrite in a moderately stocked community. Perform 25% water changes weekly — these fish produce moderate bioload for their size, and consistent water quality is essential for fin colouration and immune health.</p>

<h3 id="lighting">Lighting</h3>
<p>Moderate lighting is ideal. Albino Sharks tolerate a broader range of lighting intensities than many other species profiled in this series, but note that the albino morph lacks normal skin pigmentation and may be more photosensitive than wild-type specimens. Providing shaded areas via floating plants (Amazon Frogbit, Water Sprite) or overhanging driftwood gives the fish the option to retreat from bright zones. Standard aquarium LED lighting at 60–80% intensity on a 10-hour photoperiod works well and supports algae growth on rocks — a natural food source the Shark will graze throughout the day.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Albino Sharks are hardy and adaptable compared to many species in our collection, but consistent parameters promote optimal health and colouration:</p>
<ul>
<li><strong>Temperature:</strong> 24–27 °C (75–81 °F). They tolerate a wider range (22–30 °C) but prolonged extremes compromise immunity.</li>
<li><strong>pH:</strong> 6.5–7.5. Most tap water in this range is fine without modification.</li>
<li><strong>General Hardness (GH):</strong> 5–15 dGH (89–268 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 3–10 dKH. Higher KH provides pH stability, which is more important than hitting a specific number.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm always.</li>
<li><strong>Nitrate:</strong> &lt;30 ppm. These fish are more tolerant of moderate nitrate than many species but still benefit from keeping levels low.</li>
</ul>
<p>The Albino Shark is often recommended as one of the more forgiving species in terms of water chemistry, and this is broadly accurate. Where they are not forgiving is in the consistency of those parameters. Sudden shifts in pH or temperature — as commonly occurs during large, unmixed water changes — trigger stress, immune suppression, and ich outbreaks. Always temperature-match and dechlorinate replacement water before adding it to the tank, and limit individual water changes to 25–30% of total volume.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Albino Sharks are true omnivores with a dietary profile that leans slightly toward vegetarian in the wild (biofilm, algae, detritus) but readily accepts a wide range of foods in captivity. This dietary flexibility is one of the species' most appealing qualities — they are not picky eaters.</p>
<p>A well-rounded diet should include:</p>
<ul>
<li><strong>Sinking algae wafers:</strong> The daily staple. Hikari Algae Wafers, Northfin Veggie Formula, or similar products provide the plant-based nutrition that should form 40–50% of the diet.</li>
<li><strong>High-quality sinking pellets:</strong> Northfin Community or Hikari Micro Pellets. Offer 3–4 times per week.</li>
<li><strong>Blanched vegetables:</strong> Zucchini medallions, cucumber slices, shelled peas, and spinach leaves are eagerly accepted. Blanch briefly (30 seconds in boiling water) to soften, then weight them down with a veggie clip or stainless steel plant anchor.</li>
<li><strong>Frozen foods:</strong> Bloodworms, brine shrimp, and daphnia provide protein enrichment. Offer 2–3 times per week as a treat, not a staple.</li>
<li><strong>Natural biofilm grazing:</strong> In a tank with moderate lighting and rock surfaces, biofilm and green algae will grow naturally. The Albino Shark will graze these surfaces continuously throughout the day — this natural foraging behaviour is excellent for both nutrition and behavioural enrichment.</li>
</ul>
<p>Feed once or twice daily, offering amounts consumed within 3–5 minutes. Drop sinking foods near the Shark's preferred territory during the first feeding — this helps reinforce the territory as the food source and can reduce the fish's motivation to patrol aggressively into other zones.</p>

<h2 id="behaviour-and-tank-mates">Behaviour & Tank Mates</h2>
<p>The defining behavioural trait of the Albino Shark is territorial aggression directed primarily at bottom-dwelling fish with similar body shapes. This aggression is not random or malicious — it is a highly specific response triggered by conspecifics, fish with similar silhouettes (other "sharks," loaches, Corydoras, Plecostomus), and anything that enters the established territory around the home cave. Mid-water and surface-dwelling fish are typically ignored entirely.</p>
<p>Aggression follows a predictable pattern: the Shark establishes a home cave within the first 48 hours, begins patrolling an expanding perimeter, and chases intruders with a combination of lateral displays, fin flaring, and direct charges. In most cases, the display is sufficient to drive off the intruder without physical contact. However, in undersized tanks where the harassed fish cannot escape to a zone outside the Shark's territory, the relentless chasing causes chronic stress, fin damage, and immune suppression in the victim.</p>
<p>The key management principle: provide enough space and structure so that the Shark's territory is a subset of the total tank floor, not the entire thing. In a well-aquascaped 55+ gallon tank, the Shark will claim one end and leave the rest largely uncontested.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>The best tank mates for Albino Sharks are mid-water and surface-dwelling species that do not compete for bottom territory:</p>
<ul>
<li><strong>Tiger Barbs (<em>Puntigrus tetrazona</em>):</strong> Fast, robust schooling fish that inhabit the mid-water column. Their speed and group dynamics make them effectively immune to the Shark's territorial displays.</li>
<li><strong>Giant Danios (<em>Devario aequipinnatus</em>):</strong> Energetic upper-water schoolers too fast and too indifferent to be bothered by bottom-zone aggression.</li>
<li><strong>Rainbowfish (<em>Melanotaenia</em> spp.):</strong> Peaceful, colourful mid-water fish that pair beautifully with the Shark's colouration.</li>
<li><strong>Medium-sized <a href="/exotic-fish/barb/">barb species</a>:</strong> Rosy Barbs, Odessa Barbs, and Gold Barbs occupy the mid-water zone and add excellent colour.</li>
<li><strong>Bristlenose Pleco (<em>Ancistrus</em> spp.):</strong> One of the few bottom-dwellers that coexists reasonably well — their heavy armour and nocturnal habits reduce conflict. Provide separate caves for each.</li>
</ul>
<p>Avoid: other "shark" species (Rainbow Sharks, Red-Tail Sharks), <a href="/exotic-fish/cichlid/">territorial cichlids</a>, slow-moving bottom fish with similar profiles, and any species with long, trailing fins that invite nipping.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding Albino Sharks in home aquaria is exceptionally difficult and rarely achieved. The vast majority of specimens in the trade are produced via hormone-induced spawning (using synthetic gonadotropins) at commercial farms in Thailand and Indonesia. Natural spawning behaviour is poorly documented, but is believed to involve seasonal migration to specific spawning grounds in the wild — conditions essentially impossible to replicate in a home aquarium.</p>
<p>The few successful home breedings that have been reported involved very large tanks (200+ gallons), a group of 6+ mature adults aged 3+ years, and a combination of environmental triggers: a simulated dry season (reduced water changes, slight temperature increase) followed by a "rainy season" simulation (large cool water changes, increased flow, reduced photoperiod). Eggs are scattered over gravel substrates and hatch in approximately 48–72 hours. Fry are free-swimming within 3–4 days and accept infusoria and powdered fry food.</p>
<p>For the vast majority of keepers, breeding is not a realistic objective. Focus on providing excellent care for commercially produced specimens, and enjoy the Albino Shark for its personality and visual impact rather than its reproductive potential.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="aggression-management">Aggression Management</h3>
<p>The most common "health" issue with Albino Sharks is actually a husbandry issue: aggression-induced stress in tank mates. Signs include shredded fins, pale colouration, hiding behaviour, and refusal to eat in the victim fish. The root cause is almost always insufficient space or lack of structure. Solutions include adding more sight-line breaks (driftwood, rocks, tall plants), rearranging the aquascape to "reset" territories, upgrading to a larger tank, or rehoming incompatible bottom-dwellers. In extreme cases where a single Shark is terrorising the entire community, temporary isolation in a breeder box for 48 hours can reset territorial behaviour when the fish is reintroduced to a rearranged aquascape.</p>

<h3 id="ich-and-skin-parasites">Ich & Skin Parasites</h3>
<p>Albino Sharks are moderately susceptible to <em>Ichthyophthirius multifiliis</em> (ich), particularly following temperature fluctuations or transport stress. The albino morph's pale skin makes white spot lesions harder to detect visually than on wild-type fish — look for behavioural signs such as flashing (rubbing against surfaces), rapid gill movement, and clamped fins. Treatment with standard ich medications (malachite green + formalin at label dose) is effective, as this species does not show the medication sensitivity seen in scaleless fish. Elevating temperature to 30 °C accelerates the parasite's life cycle and improves treatment efficacy. Maintain excellent water quality throughout treatment and add supplemental aeration, as medications reduce dissolved oxygen.</p>
<p>Skin flukes (<em>Gyrodactylus</em> and <em>Dactylogyrus</em> spp.) are occasionally encountered in newly imported specimens. Symptoms include excessive mucus production, flashing, and grey patches on the skin. Praziquantel (PraziPro) is the treatment of choice and is well-tolerated by this species at standard dosing.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Are Albino Sharks aggressive?',
        answer:
          'Albino Sharks are territorial rather than broadly aggressive. Their aggression is specifically directed at fish that enter their established bottom-zone territory — particularly other bottom-dwelling species with similar body shapes such as other "sharks," loaches, and Corydoras. Mid-water and surface-dwelling fish are usually ignored completely. The severity of aggression is directly proportional to the available space: in tanks under 55 gallons, the Shark may claim the entire substrate as its territory, making life miserable for all bottom-dwellers. In properly sized tanks (55+ gallons) with ample structure and sight-line breaks, territorial behaviour is manageable and even entertaining to observe. The key is providing enough space that the Shark\'s territory is a portion of the tank, not all of it.',
      },
      {
        question: 'Can you keep two Albino Sharks together?',
        answer:
          'Keeping exactly two Albino Sharks together is the worst possible configuration and is strongly discouraged. One fish will inevitably dominate, and the subordinate will be relentlessly chased, often resulting in severe stress, fin damage, weight loss, and eventually death. This is because with only two individuals, all territorial aggression is focused on a single target with no opportunity for dilution. If you want multiple Albino Sharks, keep a group of 5 or more in a large tank (100+ gallons) with abundant hiding spots — in larger groups, aggression is distributed among many individuals and a stable hierarchy forms. Alternatively, keep a single specimen, which eliminates conspecific aggression entirely.',
      },
      {
        question: 'How big do Albino Sharks get?',
        answer:
          'Albino Sharks reach a maximum size of approximately 15 cm (6 inches) total length in captivity, though 12–13 cm is more typical for aquarium specimens. They grow relatively quickly, reaching near-adult size within 12–18 months under good conditions. Despite their modest maximum size, they are highly active, fast-swimming fish that require more space than their length alone would suggest — a 55-gallon minimum is recommended not because they are large, but because they need extensive linear swimming space and enough territory to avoid constant conflict with tank mates. In well-maintained aquariums with varied diets and clean water, they live 5–8 years.',
      },
      {
        question: 'Do Albino Sharks eat algae?',
        answer:
          'Yes, Albino Sharks are natural algae grazers and will consume green algae, biofilm, and diatoms from rock surfaces, driftwood, and glass throughout the day. In the wild, biofilm and algae constitute a significant portion of their diet. However, they should not be purchased solely as "algae eaters" — they are far less effective at algae control than dedicated species like Bristlenose Plecos, Otocinclus, or Amano Shrimp. Their primary value is as a characterful centrepiece fish, with algae grazing as a beneficial secondary behaviour. Supplement their natural grazing with sinking algae wafers and blanched vegetables to ensure adequate plant-based nutrition, as aquarium algae growth alone is rarely sufficient.',
      },
      {
        question: 'What is the difference between an Albino Shark and a Red-Tail Shark?',
        answer:
          'The Albino Shark and Red-Tail Shark (Epalzeorhynchos bicolor) are closely related cyprinids with similar body shapes and territorial behaviour, but they are different species. The Red-Tail Shark has a jet-black body with a vivid red caudal fin, while the Albino Shark has a cream-white body with red-orange fins on all appendages. Behaviourally, both are territorial bottom-dwellers, but Red-Tail Sharks are generally considered slightly more aggressive and grow marginally larger (up to 15 cm). Care requirements are virtually identical: both need 55+ gallon tanks, abundant structure, and careful tankmate selection. They should never be housed together, as their similar appearance triggers maximum territorial aggression in both species, invariably resulting in severe conflict.',
      },
    ],
    sources: [
      {
        title: 'Epalzeorhynchos munense (Smith, 1934)',
        url: 'https://www.fishbase.se/summary/Epalzeorhynchos-munense.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Territorial Behaviour and Social Organization in Epalzeorhynchos Species',
        url: 'https://doi.org/10.1111/jfb.13478',
        publisher: 'Journal of Fish Biology',
      },
      {
        title:
          'Ornamental Fish Farming in Thailand: Production and Trade Statistics',
        url: 'https://doi.org/10.1016/j.aquaculture.2018.06.024',
        publisher: 'Aquaculture',
      },
      {
        title:
          'Induced Spawning Techniques for Cyprinid Ornamental Fish',
        url: 'https://doi.org/10.1111/jai.13244',
        publisher: 'Journal of Applied Ichthyology',
      },
    ],
    relatedSlugs: [
      'clown-loach',
      'flowerhorn-cichlid',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 15. Electric Eel
  // ─────────────────────────────────────────────
  {
    title: 'Electric Eel (Electrophorus electricus): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'electric-eel',
    type: 'species',
    category: 'eel',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/electric-eel-hero.jpg',
    heroImageAlt:
      'Adult Electric Eel resting on a sandy substrate in a spacious dimly lit aquarium showing its elongated dark olive body',
    metaTitle:
      'Electric Eel Care Guide — Tank, Diet & Setup',
    metaDescription:
      'Complete Electric Eel care guide covering tank size, water parameters, safety protocols & diet. Expert advice from The Fish Collection\'s specialist aquarists.',
    quickAnswerQuestion:
      'Can you keep an Electric Eel in a home aquarium?',
    quickAnswer:
      'Electric Eels can be kept in captivity but require a minimum 500-gallon aquarium, strict electrical safety protocols, soft acidic water (pH 6.0–7.0, 25–28 °C), and a diet of live or frozen fish and invertebrates. They are solitary, reach over 2 metres, and can discharge up to 860 volts — ownership is restricted in many jurisdictions.',
    summary:
      'The Electric Eel (Electrophorus electricus) is not a true eel but a knifefish (order Gymnotiformes) and one of the most extraordinary freshwater organisms on Earth. Capable of generating electrical discharges exceeding 860 volts at 1 ampere — enough to incapacitate a horse — it has fascinated scientists since the 18th century. Recent taxonomic revision has split the genus into three species, but E. electricus sensu stricto remains the most commonly encountered in the aquarium trade. Keeping an Electric Eel is a serious undertaking that demands industrial-grade infrastructure, rigorous safety protocols, and legal compliance. This The Fish Collection guide provides the definitive roadmap for the rare aquarist prepared to house one of nature\'s most powerful living batteries.',
    scientificName: 'Electrophorus electricus',
    keyFacts: [
      { label: 'Scientific Name', value: 'Electrophorus electricus' },
      { label: 'Max Size', value: '250 cm (8.2 ft)' },
      { label: 'Tank Size', value: '500 gallons (1,900 L) minimum' },
      { label: 'Temperature', value: '25–28 °C (77–82 °F)' },
      { label: 'pH', value: '6.0–7.0' },
      { label: 'Care Level', value: 'Expert — safety hazard' },
      { label: 'Lifespan', value: '15–22 years in captivity' },
      { label: 'Diet', value: 'Carnivore — fish, crustaceans, invertebrates' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Construction', level: 3 },
      { id: 'electrical-safety', text: 'Electrical Safety Protocols', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'skin-lesions', text: 'Skin Lesions & Bacterial Infections', level: 3 },
      { id: 'respiratory-problems', text: 'Respiratory Problems', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Electric Eel (<em>Electrophorus electricus</em>) is arguably the most formidable freshwater fish a private aquarist can legally own — though "legally" comes with significant caveats depending on jurisdiction. Despite its common name, it is not a true eel (order Anguilliformes) but a South American knifefish in the order Gymnotiformes, more closely related to catfish and carp than to moray eels or congers. What sets it apart from every other aquarium species is its three specialised electric organs — the Main organ, Hunter's organ, and Sach's organ — which together comprise roughly 80% of its body mass and can generate discharges of 860 volts at peak amplitude.</p>
<p>In 2019, a landmark paper by de Santana et al. in <em>Nature Communications</em> split the single species <em>Electrophorus electricus</em> into three: <em>E. electricus</em> sensu stricto (the original Linnean species from the Guiana Shield drainages), <em>E. voltai</em> (from the Brazilian Shield, capable of the highest recorded voltage), and <em>E. varii</em> (lowland Amazon basin). Most specimens entering the aquarium trade are <em>E. varii</em> or <em>E. electricus</em> s.s., though positive identification requires genetic analysis. For practical husbandry purposes, care requirements are identical across the three species.</p>
<p>At The Fish Collection, we have housed Electric Eels in our display systems since 2014 and have advised zoological institutions on exhibit design. We treat this species with the same respect an electrician gives high-voltage cabling — because the physiological reality demands it. A full-grown specimen can deliver a shock that causes involuntary muscle contraction severe enough to cause drowning if the keeper's hand is submerged. This guide is written for experienced aquarists who have the infrastructure, budget, and discipline to keep this animal responsibly.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Electrophorus</em> species inhabit the slow-moving, oxygen-poor waterways of the Amazon and Orinoco River basins — murky floodplain streams, swamp margins, and seasonally inundated forest pools across Venezuela, the Guianas, Brazil, Colombia, Ecuador, and Peru. These environments are characterised by extremely low dissolved-oxygen levels (often below 1 mg/L), warm temperatures (25–30 °C year-round), acidic blackwater chemistry (pH 5.0–7.0), and near-zero visibility due to tannin staining and suspended sediment.</p>
<p>The low-oxygen environment is precisely why the Electric Eel evolved obligate air breathing. Every 10–15 minutes, it rises to the surface to gulp atmospheric air into a highly vascularised oral cavity that functions as a primitive lung. This adaptation means the species is essentially independent of dissolved oxygen — a trait that simplifies one aspect of captive care but introduces the requirement for unrestricted surface access at all times.</p>
<p>In the wild, Electric Eels are apex predators that use low-voltage pulses (roughly 10 V from Sach's organ) for continuous electrolocation — mapping their environment in total darkness much like <a href="/species/elephantnose-fish/">Elephantnose Fish</a> — and high-voltage volleys from the Main and Hunter's organs to stun prey and deter predators. They are solitary except during breeding season, and individual home ranges can span several hundred metres of stream channel. The substrate in their preferred habitat is soft mud and leaf litter over clay, with submerged root tangles providing the primary structural element.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Construction</h3>
<p>An adult Electric Eel exceeding 2 metres in length requires a minimum aquarium of 500 gallons (1,900 litres) with internal dimensions of at least 300 cm long × 90 cm wide × 70 cm tall. Juveniles (under 60 cm) can be started in 125-gallon grow-out tanks, but growth is rapid — expect to reach the 500-gallon threshold within 3–4 years. Ideally, plan for 750–1,000 gallons to accommodate a full-grown adult comfortably.</p>
<p>Tank construction deserves special consideration. Glass aquaria are acceptable but must be a minimum of 19 mm thick with eurobraced tops; acrylic is preferred for large builds owing to superior impact resistance. The tank <strong>must not</strong> have a sealed top — Electric Eels are obligate air breathers and will drown if denied surface access. Use a mesh or grated lid that prevents escape (they are capable climbers) while allowing unrestricted air exchange. Leave a minimum 10 cm air gap between the water surface and the lid.</p>
<p>The substrate should be fine sand or bare bottom. Avoid gravel, which traps waste beneath a fish that produces a heavy bioload. Décor should be limited to large PVC pipe sections (15 cm diameter or larger) and smooth driftwood for hiding. Electric Eels are clumsy swimmers and will damage themselves on sharp rock edges or tightly fitted caves.</p>

<h3 id="electrical-safety">Electrical Safety Protocols</h3>
<p>This section is not optional — it is the single most critical aspect of Electric Eel husbandry. A high-voltage discharge conducted through aquarium water can travel up the keeper's arm and across the chest, with potentially fatal cardiac consequences. Implement the following without exception:</p>
<ul>
<li><strong>Rubber gauntlet gloves:</strong> Wear electrician-rated insulating gloves (Class 0 minimum, rated to 1,000 V) for any interaction involving hands in the water — feeding, maintenance, catching the fish.</li>
<li><strong>GFCI protection:</strong> Every electrical device on the tank circuit must be protected by a ground-fault circuit interrupter. This protects against stray voltage from the eel entering equipment wiring.</li>
<li><strong>Grounding probe:</strong> Install a titanium grounding probe connected to an earth ground to dissipate stray voltage from the water column.</li>
<li><strong>Never work alone:</strong> Always have a second person present when performing tank maintenance. If you are incapacitated by a shock, you need someone who can pull you clear and call emergency services.</li>
<li><strong>Signage:</strong> Post visible warning signage on the tank. If the aquarium is accessible to children or uninformed visitors, consider a locking lid mechanism.</li>
<li><strong>Feeding tools:</strong> Use long (60 cm+) insulated feeding tongs. Never hand-feed an Electric Eel under any circumstances.</li>
</ul>
<p>We have personally experienced minor shocks from juvenile specimens and can attest that even a 200 V discharge from a 50 cm juvenile is profoundly unpleasant — comparable to grabbing a live household wire. An adult discharge at 860 V is in a different category entirely and must be treated as a genuine life-safety hazard.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Despite the species' tolerance of hypoxic water, captive Electric Eels produce a substantial bioload and require robust mechanical and biological filtration. Target 6–8× turnover per hour through a large sump system (100–150 gallons) with multiple stages: coarse foam for mechanical pre-filtration, ceramic bio-media for nitrification, and activated carbon for odour and dissolved organic compound removal. A 57-watt UV steriliser in the return line reduces bacterial counts and helps manage the chronically murky water that protein-rich feeding regimes produce.</p>
<p>Flow should be gentle. Electric Eels are poor swimmers — their propulsion comes entirely from an undulating anal fin, and strong currents cause fatigue and stress. Diffuse the sump return through a wide spray bar or manifold to distribute flow evenly without creating directional jets. Surface agitation should be minimal to avoid disrupting the air-breathing behaviour.</p>
<p>Water changes of 25–30% weekly are essential. Use temperature-matched, dechlorinated water and add it slowly via a drip system to avoid sudden parameter shifts. The high bioload of a carnivorous fish exceeding 2 metres means nitrate accumulation is rapid — monitoring with a reliable test kit (API or Salifert) should be performed twice weekly.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Electric Eels are relatively tolerant of a range of water chemistry, reflecting the variable conditions in Amazonian floodplains, but the following ranges promote optimal health:</p>
<ul>
<li><strong>Temperature:</strong> 25–28 °C (77–82 °F). Use a titanium inline heater protected from direct contact with the fish — a curious eel investigating a glass heater can shatter it.</li>
<li><strong>pH:</strong> 6.0–7.0. Soft, slightly acidic conditions mimic the blackwater origin. Indian almond leaf extract or peat filtration can help buffer to the low end.</li>
<li><strong>General Hardness (GH):</strong> 1–8 dGH (18–143 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 1–4 dKH. Low KH is natural for this species but requires careful monitoring to prevent pH crashes.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;30 ppm. The species tolerates moderate nitrate better than many Amazonian fish, but keeping levels below 20 ppm is ideal.</li>
</ul>
<p>Because the Electric Eel breathes atmospheric air, dissolved oxygen is less critical than for gill-dependent species. However, maintaining reasonable oxygenation (>4 mg/L) supports the biological filter and any tank mates. Aeration through the sump return is typically sufficient.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Electric Eels are opportunistic carnivores. In the wild, their diet consists of fish, amphibians, crustaceans, and occasionally small mammals and birds that fall into the water. In captivity, the primary dietary challenge is weaning juveniles off live prey and onto prepared and frozen foods — a transition that is worth the effort for both convenience and biosecurity.</p>
<p>A feeding protocol for captive <em>Electrophorus</em>:</p>
<ul>
<li><strong>Juveniles (under 60 cm):</strong> Feed daily. Offer live earthworms (nightcrawlers), frozen silversides, frozen lance fish, and frozen shrimp. Begin pellet training early by soaking Hikari Massivore or Northfin Monster pellets in garlic guard and offering on feeding tongs alongside frozen items.</li>
<li><strong>Sub-adults (60–120 cm):</strong> Feed every 2–3 days. Whole frozen tilapia fillets, jumbo shrimp (shell-on), smelt, and squid strips form the staple. Supplement with earthworms for variety. Most sub-adults will accept pellets by this stage.</li>
<li><strong>Adults (120+ cm):</strong> Feed 2–3 times per week. Offer whole frozen fish (tilapia, trout, or mackerel), large prawns, and crayfish. An adult Electric Eel consuming a 200 g tilapia fillet produces a correspondingly large waste load — factor this into your water-change schedule.</li>
</ul>
<p>Always use long insulated feeding tongs. Present food at the water's surface and allow the eel to locate it via electrolocation — they will detect the electrical field generated by the metal tongs and the bioelectric signature of the food item. Never drop food directly onto the eel, as this can provoke a defensive discharge. Remove uneaten food within 30 minutes to prevent water quality deterioration.</p>
<p>Vitamin supplementation is recommended: soak frozen food items in a multivitamin solution (Brightwell Aquatics Vitamarin-M or Seachem Nourish) twice weekly to compensate for nutrient loss during the freezing process.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Electric Eels are predominantly nocturnal, spending daylight hours resting in hides or lying motionless on the substrate. At dusk, they become active, slowly patrolling the tank perimeter using low-voltage electrolocation pulses to map their surroundings. Despite their fearsome electrical capability, they are generally placid animals that reserve high-voltage discharges for feeding and self-defence. Unprovoked discharges in a well-managed tank are rare.</p>
<p>They are surprisingly intelligent. Captive specimens learn to associate their keeper with food within weeks and will rise to the surface in anticipation when the keeper approaches. They can be conditioned to feeding stations and will tolerate routine maintenance without discharging, provided movements are slow and predictable. Sudden movements, vibrations from tank tapping, or attempts to net the fish are the primary triggers for defensive discharges.</p>
<p>Electric Eels are solitary and should be housed alone except in very large systems (1,000+ gallons) where two individuals have been introduced simultaneously. Even then, conspecific aggression is possible, and high-voltage "duels" between rival eels can damage equipment and stress both animals.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>The safest approach is to keep an Electric Eel as a solitary specimen. Any tank mate small enough to be stunned and swallowed (virtually any fish under 25 cm) will eventually be eaten. Species that have been housed successfully with adult Electric Eels in large systems include:</p>
<ul>
<li><strong><a href="/species/arapaima/">Arapaima</a></strong> — Too large to be eaten and tolerant of the same water conditions. Requires an enormous system (2,000+ gallons).</li>
<li><strong>Large Plecostomus</strong> — Armoured catfish like <em>Pterygoplichthys</em> species (40+ cm) are generally ignored, as their bony plates provide some insulation from electrical discharge.</li>
<li><strong><a href="/species/peacock-bass/">Peacock Bass</a></strong> — Large <em>Cichla</em> species (30+ cm) are fast enough to avoid predation and robust enough to tolerate the electrical environment, though minor behavioural effects from ambient low-voltage pulses have been observed.</li>
</ul>
<p>Under no circumstances should small or mid-sized community fish be housed with an Electric Eel. The eel will systematically stun and consume every fish it can fit in its mouth, which for an adult specimen means anything under approximately 20 cm.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding <em>Electrophorus</em> in captivity has been achieved only in a handful of zoological institutions and research facilities. In the wild, breeding occurs during the dry season in shallow, isolated pools. Males construct foam nests using oral secretions, and females deposit eggs into the nest. The male guards the nest and newly hatched fry, which feed on a mucus secretion from the father's skin — a form of parental care unique among knifefishes. Early-stage fry reportedly also prey on late-laid eggs and smaller siblings.</p>
<p>The logistical requirements for captive breeding are beyond the scope of private aquaria: paired adults require a 2,000+ gallon system with the ability to simulate seasonal water-level changes, and the high-voltage discharges during courtship and nest defence make the process genuinely dangerous for personnel. All specimens in the aquarium trade are wild-caught from South American export facilities.</p>
<p>If you acquire a juvenile Electric Eel, plan for a 15–22 year commitment. These are long-lived animals that grow continuously for the first 8–10 years before reaching maximum size. Rehoming an adult specimen is extremely difficult — zoos and public aquaria have limited space, and few private keepers have appropriate infrastructure. Plan for the full lifespan before purchasing.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="skin-lesions">Skin Lesions & Bacterial Infections</h3>
<p>The most common health issue in captive Electric Eels is bacterial dermatitis — red, ulcerated patches on the skin caused by <em>Aeromonas</em> or <em>Pseudomonas</em> bacteria. The root cause is almost always poor water quality, particularly elevated nitrate and organic waste levels. The species' thick, mucus-coated skin is naturally resistant to infection, but chronic exposure to degraded water overwhelms this defence. Treatment involves aggressive water quality improvement (daily 25% water changes for 7–10 days), salt baths (5 g/L for 15 minutes, administered in a separate container — wearing insulating gloves), and antibiotic treatment with kanamycin (Seachem KanaPlex) if lesions do not resolve within a week. Avoid copper-based medications.</p>

<h3 id="respiratory-problems">Respiratory Problems</h3>
<p>Because Electric Eels are obligate air breathers, any obstruction of surface access is a medical emergency. A sealed lid, a surface covered in floating plants, or a tankmate that aggressively defends the surface zone can cause the eel to suffocate even in well-oxygenated water. Symptoms of respiratory distress include increasingly frantic surfacing attempts, lethargy, loss of appetite, and abnormal body positioning (floating vertically with the head at the surface). Ensure the tank lid allows free air access at all times, and maintain at least 10 cm of airspace between the water surface and any covering.</p>
<p>Chronic respiratory issues can also arise from poor air quality above the tank. Chemical fumes, tobacco smoke, aerosol sprays, and paint vapours in the room can irritate the eel's oral respiratory lining. House the aquarium in a well-ventilated room free from airborne contaminants.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Can an Electric Eel kill a human?',
        answer:
          'A single discharge from an adult Electric Eel is unlikely to kill a healthy adult directly, but it can absolutely cause death indirectly. The shock (up to 860 V, 1 A) causes involuntary muscle contraction that can cause a person to lose motor control — if their hand or arm is submerged, they may be unable to withdraw it, leading to repeated shocks or drowning. People with cardiac conditions, pacemakers, or other electrical medical devices are at significantly elevated risk. There are documented cases of fatalities associated with Electric Eel encounters in South America, primarily involving fishermen who fell into the water after being shocked. In a captive setting, strict adherence to safety protocols — insulating gloves, GFCI protection, never working alone — reduces risk to manageable levels.',
      },
      {
        question: 'Is it legal to own an Electric Eel?',
        answer:
          'Legality varies by jurisdiction. In the United States, Electric Eels are not federally restricted, but several states (including New York, Georgia, and Hawaii) prohibit or restrict ownership. In the UK, no specific legislation bans ownership, but the Dangerous Wild Animals Act 1976 may apply depending on local authority interpretation. In the EU, regulations vary by member state. Australia bans import and ownership entirely. Always check national, state/provincial, and municipal regulations before purchasing. Some jurisdictions require permits, liability insurance, or specific enclosure standards. The Fish Collection provides jurisdiction-specific guidance upon request for any prospective buyer.',
      },
      {
        question: 'How big do Electric Eels get?',
        answer:
          'Electric Eels are among the largest freshwater fish in South America, reaching a maximum recorded length of 250 cm (8.2 feet) and weights exceeding 20 kg (44 lbs). In captivity, most specimens reach 150–200 cm within 8–10 years. Growth rate is heavily influenced by feeding frequency and tank size — specimens in larger systems with generous feeding regimes grow faster and larger. The species continues to grow throughout its life, though the rate slows significantly after reaching sexual maturity at approximately 120 cm. An adult Electric Eel is a genuinely massive animal that requires industrial-scale aquarium infrastructure.',
      },
      {
        question: 'What do Electric Eels eat in captivity?',
        answer:
          'Captive Electric Eels are fed a diet of whole frozen fish (tilapia, trout, smelt, mackerel), large prawns, squid, earthworms, and crayfish. Juveniles can be started on live earthworms, frozen bloodworms, and small silversides before transitioning to larger prey items. Many specimens can be trained to accept high-quality carnivore pellets (Hikari Massivore, Northfin Monster), which simplifies feeding logistics. Feed juveniles daily, sub-adults every 2–3 days, and adults 2–3 times per week. Always use long insulated feeding tongs — never hand-feed. Vitamin supplementation by soaking frozen foods in a multivitamin solution is recommended twice weekly.',
      },
      {
        question: 'Do Electric Eels shock themselves?',
        answer:
          'Electric Eels have evolved multiple adaptations that protect them from their own discharges. The vital organs — brain, heart, and the electric organs themselves — are insulated by layers of connective tissue and fat that act as electrical insulation. The electric organs are arranged so that current flows primarily outward through the surrounding water rather than through the eel\'s own body. Additionally, the skin has a high electrical resistance compared to the surrounding water, directing the discharge along the path of least resistance (through the water) rather than through the eel\'s tissues. However, in very shallow water where the eel\'s body curves back on itself, some self-stimulation can occur — this is why wild eels typically discharge while swimming in a straight line.',
      },
    ],
    sources: [
      {
        title: 'Electrophorus electricus (Linnaeus, 1766)',
        url: 'https://www.fishbase.se/summary/Electrophorus-electricus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Unexpected Species Diversity in Electric Eels with a Description of the Strongest Living Bioelectricity Generator',
        url: 'https://doi.org/10.1038/s41467-019-11690-z',
        publisher: 'Nature Communications',
      },
      {
        title:
          'Electric Eels Concentrate Their Electric Field to Induce Involuntary Fatigue in Struggling Prey',
        url: 'https://doi.org/10.1016/j.cub.2015.10.018',
        publisher: 'Current Biology',
      },
      {
        title:
          'The Shocking Predatory Strike of the Electric Eel',
        url: 'https://doi.org/10.1126/science.1260807',
        publisher: 'Science',
      },
    ],
    relatedSlugs: [
      'elephantnose-fish',
      'fire-eel',
      'arapaima',
    ],
  },

  // ─────────────────────────────────────────────
  // 16. Arapaima
  // ─────────────────────────────────────────────
  {
    title: 'Arapaima (Arapaima gigas): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'arapaima',
    type: 'species',
    category: 'gar',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/arapaima-hero.jpg',
    heroImageAlt:
      'Massive Arapaima gigas cruising near the surface of a large indoor pond displaying its iconic red-tinged scales and primitive head shape',
    metaTitle:
      'Arapaima Care Guide — Tank, Diet & Setup',
    metaDescription:
      'Complete Arapaima gigas care guide — pond size, water parameters, feeding & legal status. Expert guidance from The Fish Collection\'s specialist aquarists.',
    quickAnswerQuestion:
      'Can you keep an Arapaima in a home aquarium?',
    quickAnswer:
      'Arapaima gigas can technically be kept in captivity, but they require a heated indoor pond of at least 2,000 gallons — and realistically 5,000+ gallons for an adult exceeding 2 metres. They need warm, soft water (pH 6.0–7.5, 26–30 °C), a high-protein diet, and unrestricted surface access for obligate air breathing. Ownership is restricted or banned in many jurisdictions.',
    summary:
      'The Arapaima (Arapaima gigas) is the largest scaled freshwater fish on Earth, with wild specimens exceeding 3 metres and 200 kg. A living fossil whose lineage predates the breakup of Gondwana, it is an obligate air breather that surfaces every 10–20 minutes to gulp atmospheric air through a modified swim bladder. For the ultrarare private aquarist with the resources to maintain a heated indoor pond, the Arapaima is the ultimate display specimen — a prehistoric leviathan that eats from the hand and recognises its keeper. This The Fish Collection guide covers the full spectrum of Arapaima husbandry, from legal compliance and pond construction to diet protocols and disease prevention, drawing on our consultation work with private collectors and public aquaria across three continents.',
    scientificName: 'Arapaima gigas',
    keyFacts: [
      { label: 'Scientific Name', value: 'Arapaima gigas' },
      { label: 'Max Size', value: '300+ cm (10 ft); 200 kg (440 lbs)' },
      { label: 'Tank Size', value: '2,000 gal (7,570 L) min; 5,000+ gal recommended' },
      { label: 'Temperature', value: '26–30 °C (79–86 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Expert — requires pond-scale infrastructure' },
      { label: 'Lifespan', value: '15–20 years in captivity' },
      { label: 'Diet', value: 'Carnivore — whole fish, pellets, crustaceans' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'legal-status', text: 'Legal Status & CITES', level: 2 },
      { id: 'pond-requirements', text: 'Pond Requirements', level: 2 },
      { id: 'pond-dimensions', text: 'Pond Dimensions & Construction', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'heating', text: 'Heating', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'bacterial-infections', text: 'Bacterial Infections', level: 3 },
      { id: 'jump-injuries', text: 'Jump Injuries', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Arapaima (<em>Arapaima gigas</em>) is the undisputed giant of the freshwater world. Belonging to the ancient family Arapaimidae — part of the superorder Osteoglossomorpha that includes <a href="/species/platinum-arowana/">Arowana</a> — this Amazonian megafish represents an unbroken evolutionary lineage stretching back over 100 million years. Adults routinely exceed 2 metres in length and 100 kg in weight, with the largest verified specimens approaching 3 metres and 200 kg. The species' common names — Pirarucu in Brazil, Paiche in Peru — are household words across South America, where it has been the most important commercial freshwater fishery species for centuries.</p>
<p>What makes the Arapaima uniquely compelling for the ultra-specialist aquarist is the combination of primordial aesthetics and genuine interactivity. Their armour-like scales — each one a composite of collagen and hydroxyapatite harder than tooth enamel, evolved to resist piranha bites — display an extraordinary crimson-and-olive gradient along the posterior body. Their head is flattened, bony, and unmistakably ancient. And unlike most large predatory fish, captive Arapaima are remarkably personable: they learn to hand-feed within weeks, recognise individual keepers, and will surface on cue for food or interaction.</p>
<p>At The Fish Collection, we do not sell Arapaima casually. Every prospective buyer undergoes a consultation to verify that their facility meets our minimum standards — because we have seen too many juveniles purchased impulsively by keepers who do not grasp the scale of the commitment. A 15 cm juvenile available for $200 will, within five years, become a 150 cm animal requiring a heated concrete pond. This guide exists to ensure that every Arapaima placed through our network receives the lifelong care it deserves.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Arapaima gigas</em> is native to the Amazon and Essequibo River basins, inhabiting the vast floodplain lakes (várzea and igapó) that characterise lowland Amazonia. These are shallow, warm, oxygen-poor water bodies that expand enormously during the annual flood cycle — a single floodplain lake can cover hundreds of square kilometres during the wet season and contract to a fraction of that area in the dry months. Water temperatures remain consistently warm (26–32 °C) throughout the year, and pH ranges from mildly acidic (5.5) in blackwater igapó to near-neutral (7.0) in whitewater várzea systems.</p>
<p>The defining ecological adaptation of the Arapaima is obligate air breathing. The swim bladder is extensively vascularised and functions as a true respiratory organ — the fish must surface every 10–20 minutes to gulp air, producing the characteristic explosive "bouff" sound that indigenous fishers have used to locate Arapaima for millennia. In the wild, this surfacing behaviour makes the species vulnerable to harpoon fishing, which, combined with gill-net overharvest, has severely depleted wild populations across much of the Amazon basin.</p>
<p>The species' natural diet consists primarily of fish, but Arapaima are opportunistic predators that also take crabs, birds, and small mammals. Their feeding strike is a powerful suction event — the bony tongue (from which the order Osteoglossiformes gets its name) clamps prey against the palate with crushing force. In captivity, this feeding mechanism means the Arapaima can consume surprisingly large prey items relative to its mouth size.</p>

<h2 id="legal-status">Legal Status & CITES</h2>
<p><em>Arapaima gigas</em> is listed on CITES Appendix II, meaning international trade is permitted but requires export permits and proof that trade is not detrimental to wild populations. However, national and local regulations vary enormously and are often more restrictive than CITES alone would suggest:</p>
<ul>
<li><strong>United States:</strong> Federal law does not prohibit Arapaima ownership, but several states ban or restrict large exotic fish. Check your state fish and wildlife agency before purchasing.</li>
<li><strong>European Union:</strong> Legal to own with CITES documentation in most member states. Germany and the Netherlands have additional enclosure-size requirements.</li>
<li><strong>United Kingdom:</strong> Legal with CITES documentation. No specific permit required for private ownership.</li>
<li><strong>Australia:</strong> Prohibited. Import and ownership are banned under the Environment Protection and Biodiversity Conservation Act.</li>
<li><strong>Brazil:</strong> Domestic trade in farmed Arapaima is regulated by IBAMA. Wild-caught specimens require specific harvest permits.</li>
</ul>
<p>All Arapaima sold through The Fish Collection are captive-bred specimens from licensed farms in Peru, Colombia, or Southeast Asia (where the species has been introduced for aquaculture). Each fish ships with complete CITES documentation and a health certificate. We strongly advise buyers to consult a legal professional familiar with exotic animal regulations in their jurisdiction before committing to a purchase.</p>

<h2 id="pond-requirements">Pond Requirements</h2>
<h3 id="pond-dimensions">Pond Dimensions & Construction</h3>
<p>Let us be unequivocal: a standard glass or acrylic aquarium is wholly inadequate for an adult Arapaima. Juveniles under 60 cm can be temporarily housed in 300–500 gallon aquaria, but an adult requires a heated indoor pond with a minimum volume of 2,000 gallons (7,570 litres) and a realistic target of 5,000–10,000 gallons. Minimum water dimensions should be 500 cm long × 200 cm wide × 90 cm deep (16 × 6.5 × 3 feet). Depth beyond 120 cm provides diminishing returns — Arapaima are surface-oriented and rarely descend below mid-water.</p>
<p>Construction materials for indoor ponds include poured reinforced concrete with a fibreglass or epoxy liner (the gold standard), above-ground fibreglass stock tanks (economical for the 2,000–3,000 gallon range), or purpose-built insulated pond systems from aquaculture suppliers. The pond must have a secure net or frame cover — Arapaima are explosive jumpers capable of clearing 1.5 metres vertically, and an adult's 100+ kg body mass hitting a concrete floor is catastrophic for both the fish and the floor.</p>
<p>Substrate is unnecessary and complicates cleaning. A bare-bottom pond with a central drain and gentle slope toward a bottom drain simplifies waste removal enormously. If aesthetic considerations demand substrate, use a thin layer (2–3 cm) of fine sand, and plan for frequent vacuuming. Décor should be limited to smooth, large-diameter PVC pipe sections or fibreglass hollow logs — the fish needs unobstructed swimming space above all else.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>A 5,000-gallon Arapaima pond requires industrial-grade filtration. The most practical approach is a multi-chamber external sump or a purpose-built moving-bed bioreactor (MBBR) system rated for aquaculture-scale bioloads. Target a minimum turnover of 4–6× the pond volume per hour — for a 5,000-gallon system, this means pump output of 20,000–30,000 gallons per hour across all filtration stages.</p>
<p>A recommended filtration sequence: mechanical pre-filtration (drum filter or large-mesh foam), biological stage (K1 or K3 moving-bed media with dedicated aeration), polishing stage (fine mechanical filtration or sand filter), and UV sterilisation (120+ watts for a 5,000-gallon system). Protein skimmers adapted from aquaculture systems can be beneficial for managing the dissolved organic compounds produced by heavy feeding.</p>
<p>Flow within the pond should be gentle and non-directional. Arapaima are ambush predators, not endurance swimmers, and strong currents cause stress and energy waste. Distribute return flow through multiple low-velocity outlets positioned around the pond perimeter.</p>

<h3 id="heating">Heating</h3>
<p>Maintaining 26–30 °C in a 5,000-gallon pond in a temperate climate is a significant engineering and energy challenge. Titanium inline heaters rated for the system volume are the standard solution — expect to install 3,000–6,000 watts of heating capacity depending on ambient room temperature and insulation quality. Heat-pump systems (air-to-water or ground-source) are far more energy-efficient for large volumes and are strongly recommended for ponds exceeding 2,000 gallons. Insulating the pond walls and floor with closed-cell foam (50 mm minimum) reduces heat loss dramatically.</p>
<p>Temperature stability is more important than hitting a specific number. A pond that fluctuates between 24 °C and 30 °C daily is far more harmful than one that sits steadily at 25 °C. Install a redundant temperature monitoring system with audible alarms — a heater failure in winter can drop pond temperature below the species' tolerance within 24–48 hours in an unheated building.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Arapaima are robust fish from variable Amazonian environments, but the following parameters represent the optimal range for long-term health:</p>
<ul>
<li><strong>Temperature:</strong> 26–30 °C (79–86 °F). They tolerate brief excursions to 22 °C but prolonged cold exposure causes immune suppression.</li>
<li><strong>pH:</strong> 6.0–7.5. Stability is more important than the exact value.</li>
<li><strong>General Hardness (GH):</strong> 2–12 dGH (36–214 ppm).</li>
<li><strong>Carbonate Hardness (KH):</strong> 2–6 dKH. Sufficient buffering to prevent pH crashes in a system with high organic loading.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. The massive bioload of an Arapaima makes biological filtration capacity the single most important engineering parameter of the pond system.</li>
<li><strong>Nitrate:</strong> &lt;40 ppm. In heavily stocked predator ponds, twice-weekly water changes of 20–25% may be necessary.</li>
</ul>
<p>Water quality management in a large Arapaima pond is closer to aquaculture practice than traditional aquarium keeping. Invest in a continuous-monitoring system (Neptune Apex, GHL ProfiLux, or similar) with automated alerts for temperature, pH, and conductivity. The cost of such a system is trivial compared to the value of the animal and the consequences of a water quality crash.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Arapaima are voracious carnivores with a metabolism that demands substantial input. A 150 cm adult consumes approximately 2–3% of its body weight per feeding, 3–4 times per week. For a 50 kg animal, this translates to 1–1.5 kg of food per session — a significant ongoing cost and logistical consideration.</p>
<p>Optimal diet components:</p>
<ul>
<li><strong>Whole fish:</strong> Frozen tilapia, trout, smelt, and mackerel are the dietary backbone. Whole fish provide complete nutrition including bones (calcium), organs (vitamins), and skin (fats). Avoid oily fish like salmon as a staple — occasional inclusion is fine, but the high fat content can cause hepatic lipidosis with chronic overfeeding.</li>
<li><strong>Aquaculture pellets:</strong> High-quality floating pellets designed for large carnivorous fish (Hikari Massivore, Coppens Catfish pellets, or dedicated Arapaima feed from aquaculture suppliers) can constitute 40–50% of the diet. Floating pellets are ideal because they exploit the Arapaima's natural surface-feeding behaviour.</li>
<li><strong>Shrimp and crustaceans:</strong> Whole prawns (shell-on) and crayfish provide chitin, carotenoids, and dietary variety.</li>
<li><strong>Enrichment items:</strong> Whole squid, mussels, and occasional feeder crayfish provide behavioural stimulation and nutritional variety.</li>
</ul>
<p>Juveniles (under 60 cm) should be fed daily; sub-adults (60–120 cm) every other day; adults (120+ cm) three times per week. Fasting one day per week supports digestive health. Arapaima grow extraordinarily fast when well-fed — a 15 cm juvenile can reach 60 cm within the first year and 120 cm by year three. Underfeeding stunts growth and causes skeletal deformities; overfeeding pollutes water and causes obesity.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Despite their enormous size and predatory nature, captive Arapaima are among the most interactive freshwater fish available. They are intelligent, curious, and quickly learn to associate their keeper with food. Hand-feeding is feasible (with caution — their suction strike is powerful enough to injure fingers) and is one of the most remarkable experiences in the fishkeeping hobby. Many keepers report that their Arapaima responds to voice, allows gentle physical contact on the head, and actively solicits attention by surfacing and splashing when the keeper enters the room.</p>
<p>Their surfacing behaviour for air breathing is the defining rhythm of Arapaima keeping. Every 10–20 minutes, the fish rises to the surface, opens its massive mouth, gulps air with an audible "bouff," and descends. This behaviour is completely normal and essential for survival — any interference with surface access is life-threatening. The sound of an Arapaima breathing becomes the ambient soundtrack of the fish room and is, for many keepers, one of the most satisfying aspects of the experience.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>In pond-scale systems, Arapaima can be housed with other large, robust species:</p>
<ul>
<li><strong>Large Plecostomus</strong> — Common Plecos, Sailfin Plecos, and Royal Plecos (30+ cm) serve as cleanup crew and are generally ignored.</li>
<li><strong><a href="/species/peacock-bass/">Peacock Bass</a></strong> — <em>Cichla</em> species of appropriate size (30+ cm) coexist well in warm, large-volume systems.</li>
<li><strong>Redtail Catfish</strong> — <em>Phractocephalus hemioliopterus</em> is a classic companion for monster-fish setups, though both species need enormous space.</li>
<li><strong>Silver Arowana</strong> — <em>Osteoglossum bicirrhosum</em> occupies the surface zone alongside the Arapaima and adds visual diversity. Ensure the Arowana is too large to be eaten (60+ cm).</li>
<li><strong><a href="/species/freshwater-stingray/">Freshwater Stingrays</a></strong> — Large <em>Potamotrygon</em> species complement the Arapaima's surface orientation with bottom-zone activity.</li>
</ul>
<p>Any fish under 25 cm will be eaten. Plan tank-mate sizes accordingly and always introduce companions simultaneously or before adding the Arapaima to reduce territorial aggression.</p>

<h2 id="breeding">Breeding</h2>
<p>Arapaima exhibit biparental care that is extraordinary among fish. Breeding occurs during the low-water season in shallow, cleared nests excavated by the male in sandy substrate. After the female deposits eggs — typically 50,000 or more — both parents guard the nest and newly hatched fry. The male secretes a pheromone-laden mucus from glands on his head that attracts fry into a tight school, providing protection from predation. Fry remain with the parents for 4–6 months, an unusually long period of parental investment for any fish.</p>
<p>Captive breeding has been accomplished at commercial aquaculture facilities in Brazil, Peru, Colombia, and Thailand. Requirements include paired adults in ponds of at least 10,000 gallons with sand substrate, natural photoperiod cycles, and water-level manipulation to simulate seasonal flooding. Home breeding is not realistic for any but the most committed and well-resourced private keepers.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="bacterial-infections">Bacterial Infections</h3>
<p>The primary health concern for captive Arapaima is bacterial infection, typically <em>Aeromonas hydrophila</em> or <em>Pseudomonas</em> species, presenting as red ulcers, fin erosion, or cloudy eyes. The root cause is invariably water quality — the massive bioload of a carnivorous fish exceeding 50 kg means that filtration failure or missed water changes can degrade conditions rapidly. Treatment involves improving water quality immediately (daily 25% water changes), salt addition (3–5 g/L), and systemic antibiotics (oxytetracycline or enrofloxacin) administered in food for advanced cases. Consult an aquatic veterinarian for dosing — Arapaima are large enough that a veterinary relationship is both practical and advisable.</p>

<h3 id="jump-injuries">Jump Injuries</h3>
<p>Arapaima are explosive jumpers, and collisions with covers, walls, or the floor are a common cause of injury. Symptoms range from superficial scale loss and abrasions to jaw fractures and spinal injuries. A secure, padded cover system is essential. Many keepers suspend a layer of closed-cell foam beneath the rigid cover to cushion impact. If a jump injury occurs, maintain pristine water quality to prevent secondary infection of wounds, and add salt (2–3 g/L) as a prophylactic antimicrobial measure. Most superficial injuries heal within 2–4 weeks in clean water.</p>
<p>Sudden loud noises, flashing lights, and the introduction of new tank mates are the most common triggers for panic jumping. Minimise disturbances and introduce changes gradually — including new keepers or maintenance personnel, whose unfamiliar presence can trigger a flight response.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How fast do Arapaima grow?',
        answer:
          'Arapaima are among the fastest-growing freshwater fish on Earth. A 15 cm juvenile can reach 60 cm within its first year, 100–120 cm by the end of year two, and 150–180 cm by year four under optimal feeding and water conditions. Growth continues throughout life, though the rate slows significantly after 5–6 years. This explosive growth rate is precisely why prospective buyers must have large-scale infrastructure planned before acquiring a juvenile — the transition from "fits in a 300-gallon tank" to "needs a 5,000-gallon pond" happens faster than most people anticipate.',
      },
      {
        question: 'How much does an Arapaima cost?',
        answer:
          'Captive-bred juvenile Arapaima (15–25 cm) typically range from $150–$500 depending on source and availability. However, the purchase price is trivial compared to the infrastructure and ongoing costs. A purpose-built heated indoor pond system with adequate filtration can cost $10,000–$50,000+ depending on size and materials. Annual operating costs — electricity for heating, filtration, and lighting, plus food — can range from $3,000–$8,000 for a modestly sized system. Prospective buyers should budget for the full 15–20 year lifespan before committing.',
      },
      {
        question: 'What tank size does an Arapaima need?',
        answer:
          'The term "tank" is somewhat misleading for Arapaima — adults require a heated indoor pond. Juveniles under 60 cm can be temporarily housed in a 300–500 gallon aquarium, but an adult needs a minimum of 2,000 gallons (7,570 litres), and 5,000–10,000 gallons is strongly recommended for specimens exceeding 150 cm. Minimum water dimensions should be 500 cm long × 200 cm wide × 90 cm deep. The pond must have unrestricted surface access (no sealed lids), as Arapaima are obligate air breathers that will drown if denied the ability to surface.',
      },
      {
        question: 'Are Arapaima dangerous?',
        answer:
          'Arapaima are not aggressive toward humans, but their size and power demand respect. An adult exceeding 100 kg can deliver a tail strike or headbutt capable of breaking bones — this typically occurs during netting or transport, not routine care. Their suction feeding strike can injure fingers during hand-feeding, though this is rarely serious. The primary danger is to the fish itself: an Arapaima panicked during maintenance can launch itself out of the water with enough force to injure itself and damage equipment. Calm, slow movements and minimal disturbance are essential when working around these animals.',
      },
      {
        question: 'Can you eat Arapaima?',
        answer:
          'Arapaima is one of the most commercially important food fish in South America. The flesh is firm, white, mild-flavoured, and virtually boneless, making it highly prized in Amazonian cuisine and increasingly in international markets. Sustainable Arapaima aquaculture has expanded dramatically in Brazil, Peru, and Colombia, and farmed Arapaima fillets are available in upscale fish markets in Europe and North America. However, this guide is about keeping Arapaima as display animals, not producing them for the table. The connection to the food industry is relevant primarily because it supports the captive breeding programmes that produce the juveniles available to aquarists.',
      },
    ],
    sources: [
      {
        title: 'Arapaima gigas (Schinz, 1822)',
        url: 'https://www.fishbase.se/summary/Arapaima-gigas.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Biology, Conservation and Sustainable Development of the Arapaima (Arapaima gigas)',
        url: 'https://doi.org/10.1007/978-3-030-32697-0',
        publisher: 'Springer',
      },
      {
        title:
          'Arapaima gigas Scales: Tough Biological Armor with Hierarchical Structure',
        url: 'https://doi.org/10.1038/ncomms1062',
        publisher: 'Nature Communications',
      },
      {
        title:
          'CITES Appendices I, II and III — Arapaima gigas',
        url: 'https://cites.org/eng/app/appendices.php',
        publisher: 'CITES Secretariat',
      },
    ],
    relatedSlugs: [
      'platinum-arowana',
      'electric-eel',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 17. Blue Zaire Frontosa
  // ─────────────────────────────────────────────
  {
    title: 'Blue Zaire Frontosa (Cyphotilapia frontosa): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'blue-zaire-frontosa',
    type: 'species',
    category: 'cichlid',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/blue-zaire-frontosa-hero.jpg',
    heroImageAlt:
      'Mature Blue Zaire Frontosa displaying its deep indigo body bands and prominent nuchal hump in a rocky Lake Tanganyika biotope aquarium',
    metaTitle:
      'Blue Zaire Frontosa Care — Tank, Diet & Setup',
    metaDescription:
      'Complete Blue Zaire Frontosa care guide — tank size, water chemistry, diet & colony management. Expert advice from The Fish Collection\'s cichlid specialists.',
    quickAnswerQuestion:
      'How do you care for a Blue Zaire Frontosa?',
    quickAnswer:
      'Blue Zaire Frontosa require a minimum 125-gallon aquarium with hard, alkaline water (pH 7.8–9.0, GH 12–20 dGH, 25–27 °C), rocky aquascaping, and a high-protein diet of krill, shrimp, and quality pellets. They are best kept in a harem of 1 male to 4–5 females in a species-dedicated or Lake Tanganyika community setup.',
    summary:
      'The Blue Zaire Frontosa is the most coveted geographic variant of Cyphotilapia frontosa, a majestic cichlid endemic to Lake Tanganyika in East Africa. Distinguished from other Frontosa variants by its extraordinarily deep cobalt-blue body colouration between the characteristic black vertical bars, the "Zaire Blue" commands premium prices and devoted collector followings worldwide. Wild populations inhabit the deep rocky zones of the Congolese (formerly Zaire) coastline at depths of 30–70 metres — making them one of the deepest-dwelling cichlids in the lake. This The Fish Collection guide provides comprehensive care instructions for this slow-growing, long-lived, and deeply rewarding species, drawing on our experience breeding and maintaining Frontosa colonies for over a decade.',
    scientificName: 'Cyphotilapia frontosa',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cyphotilapia frontosa' },
      { label: 'Max Size', value: '35 cm (14 in)' },
      { label: 'Tank Size', value: '125 gallons (475 L) minimum' },
      { label: 'Temperature', value: '25–27 °C (77–81 °F)' },
      { label: 'pH', value: '7.8–9.0' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '15–25 years in captivity' },
      { label: 'Diet', value: 'Carnivore — krill, shrimp, cichlid pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat & Variants', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascaping', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-colony-management', text: 'Behaviour & Colony Management', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'bloat', text: 'Malawi Bloat', level: 3 },
      { id: 'hole-in-the-head', text: 'Hole-in-the-Head Disease', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Frontosa cichlid (<em>Cyphotilapia frontosa</em>) is the undisputed king of Lake Tanganyika — a slow-moving, deep-bodied predator whose prominent nuchal hump and bold black-and-white (or black-and-blue) banding make it one of the most recognisable and desirable freshwater fish in the world. Among the numerous geographic variants available, the "Blue Zaire" — collected from the deep rocky shores along the Democratic Republic of Congo's Tanganyikan coastline near Kapampa, Kitumba, and Moba — is universally regarded as the most spectacular, exhibiting a saturated indigo-blue colouration between the six or seven black vertical bars that far surpasses any other locality variant.</p>
<p>What elevates the Frontosa beyond mere aesthetic appeal is its personality. These are intelligent, deliberate fish with an almost regal bearing. They do not dart, dash, or chase in the frantic manner of Malawi mbuna. Instead, they patrol their territory with measured, dignified sweeps, interact socially through subtle body-language cues, and develop strong individual relationships with their keeper. Long-lived specimens (15–25 years) become genuine companion animals — many veteran keepers describe their Frontosa colony as the most rewarding fishkeeping experience of their career.</p>
<p>At The Fish Collection, we maintain dedicated Frontosa breeding colonies and have worked with Zaire Blue bloodlines since 2013. We import exclusively from trusted suppliers in Mpulungu (Zambia) and Bujumbura (Burundi) who use sustainable collection practices, and we maintain a closed breeding programme that preserves the intense Zaire Blue colouration through careful line selection. This guide represents our accumulated knowledge on the species, with particular emphasis on the Blue Zaire variant. For our broader <a href="/exotic-fish/cichlid/">cichlid species guides</a>, see the dedicated category page.</p>

<h2 id="natural-habitat">Natural Habitat & Variants</h2>
<p><em>Cyphotilapia frontosa</em> is endemic to Lake Tanganyika, the second-oldest and second-deepest lake on Earth, stretching 673 km along the East African Rift Valley. Unlike most Tanganyikan cichlids that inhabit the shallow littoral zone (0–20 metres), Frontosa are deep-water specialists found at depths of 30–70 metres along rocky slopes and boulder fields. At these depths, ambient light is minimal, water temperature is stable at 24–26 °C, and dissolved oxygen is lower than at the surface — conditions that have shaped the species' slow metabolism, deliberate behaviour, and tolerance of relatively dim lighting in captivity.</p>
<p>The species exhibits significant geographic variation in colouration. Major variants include: Burundi (6-band, moderate blue), Kigoma (7-band, sky-blue tones), Mpimbwe (intense blue frontal hump and body, 6-band), Kapampa/Zaire (extremely deep indigo-blue, 6-band — the subject of this guide), and Kipili (lighter blue with wider bars). These are not separate species but geographic colour morphs maintained by the lake's vast size and the species' site-fidelity — individual Frontosa rarely disperse more than a few kilometres from their birth site. In the aquarium trade, variant integrity is maintained through separate breeding lines, and responsible breeders never cross-breed variants.</p>
<p>In the wild, Frontosa are nocturnal ambush predators that prey primarily on sleeping <em>Cyprichromis</em> and other small pelagic cichlids. At dawn and dusk, they ascend from the deep substrate to the mid-water column where schools of Cyprichromis roost for the night, using their large mouth and powerful suction strike to engulf prey. Understanding this predatory strategy explains why captive Frontosa are most active during low-light periods and prefer whole, meaty food items over processed flakes.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascaping</h3>
<p>A Frontosa colony (1 male, 4–5 females) requires a minimum aquarium of 125 gallons (475 litres) with dimensions of at least 180 cm long × 45 cm wide × 55 cm tall. For mixed Tanganyika communities or larger colonies with multiple males, upgrade to 180–240 gallons. The tank's depth is more important for Frontosa than for most cichlids — they are deep-water fish that feel more secure in taller tanks that provide a vertical buffer from overhead disturbance.</p>
<p>Aquascaping should mimic the rocky slopes of Lake Tanganyika's deep littoral zone. Stack large, smooth river rocks or limestone to create caves, overhangs, and tunnels along the back and sides of the tank. Each female needs a dedicated cave or alcove that she can retreat to — dominant males will claim the largest central territory. Leave an open swimming area in the front third of the tank for the colony's display behaviour. Avoid sharp-edged rocks that can damage the prominent nuchal hump during territorial disputes.</p>
<p>Substrate should be fine sand (aragonite or pool-filter sand), which buffers pH upward and allows natural digging behaviour — brooding females will often excavate small pits near their caves. Avoid gravel, which traps waste and provides poor buffering.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Lake Tanganyika is an exceptionally stable environment, and Frontosa are intolerant of measurable ammonia, nitrite, or significant nitrate accumulation. Target a turnover rate of 8–10× the tank volume per hour using a large canister filter (Fluval FX6 or equivalent) supplemented with an internal sponge filter or secondary canister for biological redundancy. Ceramic bio-media or sintered glass provides the surface area needed for robust nitrification.</p>
<p>Flow should be moderate and well-distributed. Frontosa do not appreciate strong directional currents — they are adapted to the still, deep waters of the lake. A spray bar along the back panel distributes flow evenly without creating zones of high turbulence. Aim for gentle, consistent circulation rather than powerful jets.</p>
<p>Maintain ammonia and nitrite at 0 ppm at all times. Nitrate should be kept below 20 ppm — lower is better, as Tanganyikan species are adapted to the lake's ultra-low nitrate environment. Weekly 25% water changes with temperature- and pH-matched water are the minimum; many successful Frontosa breeders perform twice-weekly 20% changes.</p>

<h3 id="lighting">Lighting</h3>
<p>Moderate to low lighting is ideal. Frontosa naturally inhabit depths where ambient light is heavily attenuated, and bright lighting can cause stress, colour washout, and chronic hiding behaviour. A dimmable LED fixture at 30–50% intensity on an 8-hour photoperiod works well. Many keepers use a dawn/dusk ramping programme that gradually increases and decreases light over 30–60 minutes, which encourages natural emergence behaviour. Moonlight LEDs or blue-spectrum supplementation during the dark period can reveal the dramatic nocturnal activity when Frontosa are most confident and display their deepest colouration.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Frontosa require hard, alkaline water that replicates the mineral-rich conditions of Lake Tanganyika:</p>
<ul>
<li><strong>Temperature:</strong> 25–27 °C (77–81 °F). Frontosa prefer the cooler end of the tropical range — temperatures above 28 °C for extended periods increase metabolic stress and reduce lifespan.</li>
<li><strong>pH:</strong> 7.8–9.0. The target should be 8.0–8.5 for most setups. Aragonite substrate and limestone décor naturally buffer to this range.</li>
<li><strong>General Hardness (GH):</strong> 12–20 dGH (214–357 ppm). If your tap water is soft, use a Tanganyika salt mix (Seachem Tanganyika Buffer + Cichlid Lake Salt, or equivalent) to raise mineral content.</li>
<li><strong>Carbonate Hardness (KH):</strong> 10–18 dKH. High KH provides the pH stability essential for Tanganyikan cichlids.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. Tanganyikan species are notably less tolerant of nitrate than Malawi cichlids.</li>
</ul>
<p>Consistency is the overriding principle. Lake Tanganyika is one of the most chemically stable bodies of water on Earth — pH, temperature, and mineral content vary negligibly across seasons or depths. Captive Frontosa thrive when parameters remain rock-steady, and they struggle when subjected to fluctuations that would barely register for less specialised species. An auto-top-off system to compensate for evaporation (which concentrates minerals and raises pH) is a worthwhile investment.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>In the wild, Frontosa are piscivorous — their diet consists almost entirely of small cichlids (<em>Cyprichromis</em>, <em>Paracyprichromis</em>) captured during nocturnal ambush raids. In captivity, the dietary goal is to provide high-quality protein that supports the slow, steady growth and intense colouration the species is known for, while avoiding the high-fat, high-phosphorus diets that contribute to Malawi bloat — a misnomer, as the condition affects Tanganyikan cichlids equally.</p>
<p>Recommended dietary staples:</p>
<ul>
<li><strong>Frozen krill:</strong> The single best food for Frontosa. Krill provides high-quality protein, natural carotenoids (astaxanthin) that enhance blue colouration, and the appropriate fat profile. Offer 3–4 times per week as the primary food.</li>
<li><strong>Frozen mysis shrimp:</strong> An excellent secondary protein source, lower in fat than krill. Feed 2–3 times per week.</li>
<li><strong>High-quality cichlid pellets:</strong> Northfin Cichlid Formula, New Life Spectrum, or Hikari Bio-Gold+ are all proven options. Pellets provide a balanced nutritional baseline and can form 30–40% of the diet.</li>
<li><strong>Frozen silversides or lance fish:</strong> Whole small fish mimic the natural diet and provide complete nutrition. Offer once weekly.</li>
<li><strong>Fresh market prawns:</strong> Chopped raw prawn (shell removed) is eagerly accepted and provides dietary variety.</li>
</ul>
<p>Feed once daily, offering only what the colony consumes within 3–5 minutes. Frontosa have a slow feeding pace — they observe food before committing to strike, and subordinate individuals wait for the dominant male to feed first. Avoid overfeeding, which contributes to water quality deterioration and obesity-related health problems. Fast one day per week.</p>
<p>Critical dietary warnings: <strong>never</strong> feed beefheart, mammalian protein, or high-fat foods to Frontosa. The species' digestive system is not adapted to saturated animal fats, and chronic feeding of mammalian protein is a primary risk factor for bloat. Avoid also tubifex worms from unknown sources, feeder goldfish, and any food with artificial colour enhancers.</p>

<h2 id="behaviour-and-colony-management">Behaviour & Colony Management</h2>
<p>Frontosa are polygamous colonial fish that function best in a harem structure: one dominant male with 4–6 females. The dominant male occupies the largest cave or rock formation in the centre of the tank and patrols a territory that encompasses the entire colony's range. Subordinate females each claim a smaller cave within the male's territory. Social hierarchy is maintained through subtle displays — gill flaring, lateral body presentation, colour intensification — rather than the violent physical combat seen in many Malawi cichlids.</p>
<p>Aggression in a properly structured Frontosa colony is remarkably low. The dominant male will occasionally chase a female that strays too far from the colony or gently mouth-spar with a subordinate male (if present), but injuries are rare in appropriately sized tanks. Problems arise when:</p>
<ul>
<li><strong>The tank is too small:</strong> Subordinate fish have no space to retreat, and the dominant male becomes a relentless bully.</li>
<li><strong>The sex ratio is wrong:</strong> Two males in a 125-gallon tank will result in constant conflict. Either keep one male with females, or house 3+ males in a 240+ gallon system where aggression is distributed.</li>
<li><strong>The colony is too small:</strong> A single pair is the worst configuration. Frontosa need the social dynamics of a group to express natural behaviour.</li>
</ul>
<p>Frontosa grow slowly — a 5 cm juvenile may take 3–4 years to reach sexual maturity at 15–18 cm. Males continue growing to 30–35 cm and develop the iconic nuchal hump (cranial crest) over a period of 5–8 years. Patience is an absolute requirement. The species rewards long-term commitment with decades of regal, interactive behaviour that few other aquarium fish can match.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Frontosa are best kept in a species-only colony, but they can coexist with other large, non-aggressive Tanganyikan species in sufficiently large tanks (180+ gallons):</p>
<ul>
<li><strong><em>Cyprichromis leptosoma</em>:</strong> A school of 12+ Cyprichromis occupies the open mid-water column and actually replicates the Frontosa's natural prey species (though adults in the aquarium are too large to be eaten). They add movement and colour without triggering territorial responses.</li>
<li><strong><em>Altolamprologus calvus</em> / <em>A. compressiceps</em>:</strong> These deep-bodied shell-dwellers and crevice-dwellers occupy different microhabitats and are too large and laterally compressed for Frontosa to swallow.</li>
<li><strong>Large Synodontis catfish:</strong> <em>Synodontis multipunctatus</em> or <em>S. petricola</em> are Tanganyikan natives that coexist peacefully as bottom-zone scavengers.</li>
</ul>
<p>Avoid all Malawi cichlids (different water chemistry requirements and incompatible aggression styles), aggressive Tanganyikan species (<em>Tropheus</em>, large <em>Petrochromis</em>), and any fish small enough to be swallowed (under 8 cm).</p>

<h2 id="breeding">Breeding</h2>
<p>Frontosa are maternal mouthbrooders. After a subtle courtship dance in which the male displays his cranial hump and flares his fins, the female deposits 20–50 large eggs (5–6 mm diameter) on a flat surface near the male's cave. The male fertilises them, and the female gathers the eggs into her buccal cavity. She then retreats to her cave and incubates the eggs for an extraordinarily long 28–35 days — one of the longest mouthbrooding periods of any cichlid. During this time, she does not eat.</p>
<p>Released fry are large (12–15 mm), fully formed, and immediately capable of accepting crushed pellets and baby brine shrimp. The female continues to accept fry back into her mouth for several days after release if she perceives a threat. Survival rates are high compared to free-spawning species, but brood sizes are small. A healthy colony may produce a spawn every 6–8 weeks from the dominant female, with subordinate females breeding less frequently.</p>
<p>Triggering breeding requires patience, stable water chemistry, and a mature colony. Fish under 4 years of age rarely breed, and wild-caught individuals may take 1–2 years to acclimate before spawning. Do not rush the process — Frontosa that are stressed by overcrowding, poor water quality, or aggressive tank mates will not reproduce regardless of other conditions.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="bloat">Malawi Bloat</h3>
<p>Despite its name, "Malawi bloat" affects Tanganyikan cichlids including Frontosa. The condition presents as rapid abdominal swelling, loss of appetite, white or stringy faeces, and lethargy. The aetiology is debated, but it is most closely associated with a flagellate protozoan (<em>Cryptobia</em> or <em>Hexamita</em>) that proliferates opportunistically when the fish's immune system is compromised — typically by dietary stress from inappropriate foods (beefheart, high-fat diets), poor water quality, or chronic social stress.</p>
<p>Treatment must be aggressive and immediate, as bloat can be fatal within 48–72 hours. Isolate the affected fish, raise temperature to 28 °C, and administer metronidazole at 250 mg per 40 litres (in the water column) or 1% by weight mixed into food for fish that are still eating. Epsom salt (magnesium sulfate) at 1 tablespoon per 20 litres can help reduce swelling. Prevention is always preferable: maintain pristine water quality, feed an appropriate diet free of mammalian protein, and manage social stress through proper colony structure.</p>

<h3 id="hole-in-the-head">Hole-in-the-Head Disease</h3>
<p>Hole-in-the-head disease (HITH), also known as lateral line erosion, manifests as pitting and erosion of the head and lateral line, typically beginning as small white pits on the forehead that gradually enlarge into cratered lesions. It is strongly associated with <em>Hexamita</em> protozoan infection, elevated nitrate levels (>40 ppm), activated carbon use (which may deplete trace minerals), and vitamin/mineral deficiency. Frontosa are particularly susceptible owing to their long lifespan and sensitivity to water quality degradation.</p>
<p>Treatment involves removing activated carbon, improving water quality (target nitrate below 10 ppm), enriching the diet with vitamin-soaked foods (Selcon or Brightwell Aquatics Vitamarin-M), and treating with metronidazole if pitting is active and progressive. Early-stage HITH is reversible with environmental improvement alone. Advanced cases may leave permanent scarring even after the infection resolves.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a Blue Zaire Frontosa cost?',
        answer:
          'Blue Zaire Frontosa are the most expensive Frontosa variant owing to their deep indigo colouration and limited availability. Wild-caught adults (15–20 cm) typically range from $100–$300 per fish depending on collection locality, colour intensity, and sex (males command a premium). Captive-bred juveniles (5–8 cm) from quality bloodlines range from $30–$80 each. Premium "show quality" males with exceptional colour and fully developed cranial humps can command $500+ at specialist auctions. Because Frontosa are colony fish, budget for a minimum of 6 individuals — a starter colony of quality Zaire Blues typically costs $300–$600.',
      },
      {
        question: 'How big do Frontosa get?',
        answer:
          'Male Blue Zaire Frontosa reach a maximum size of approximately 35 cm (14 inches) total length, with females slightly smaller at 25–28 cm (10–11 inches). Males develop a significantly larger cranial hump (nuchal crest) that continues to grow throughout their life and becomes the dominant visual feature of a mature specimen. Growth is slow — expect a 5 cm juvenile to reach 15 cm in approximately 2–3 years and full adult size in 5–8 years. This slow growth is part of the species\' appeal: each centimetre of growth represents months of dedicated care, and a fully mature male Frontosa is a genuine achievement.',
      },
      {
        question: 'Can you keep Frontosa with Malawi cichlids?',
        answer:
          'Mixing Frontosa with Malawi cichlids is generally not recommended for several reasons. First, the water chemistry requirements differ — Lake Tanganyika water is harder and more alkaline (pH 8.0–9.0, GH 12–20) than Lake Malawi water (pH 7.5–8.5, GH 6–12), and while there is some overlap, neither species group thrives at a compromise midpoint. Second, Malawi mbuna are hyperactive, aggressive fish that stress the slow-moving, deliberate Frontosa through constant harassment and competition for caves. Third, Frontosa feed slowly and will be consistently outcompeted for food by the faster Malawi species. The result is chronic stress, suppressed colouration, reduced lifespan, and failure to breed. Keep Frontosa in species-only or Tanganyika-community setups.',
      },
      {
        question: 'Why is my Frontosa hiding all the time?',
        answer:
          'Chronic hiding in Frontosa almost always indicates environmental stress. The most common causes are: excessive lighting (reduce LED intensity to 30–40% or add floating plants), aggressive tank mates that intimidate the Frontosa during their slow, deliberate movements, an insufficient number of hiding spots (each fish needs its own dedicated cave), a newly introduced fish that has not yet acclimated (allow 2–4 weeks for wild-caught specimens to settle), or recent changes to the aquascape that disrupted established territories. Frontosa are naturally more active during dawn, dusk, and nighttime hours — dim the lights and observe during these periods before concluding the fish is hiding excessively. Installing a moonlight or blue LED on a timer often reveals a colony that is far more active and interactive than the keeper realised.',
      },
      {
        question: 'How long do Frontosa live?',
        answer:
          'Frontosa are one of the longest-lived cichlid species, with verified lifespans of 20–25 years in captivity and anecdotal reports of specimens exceeding 30 years. This extraordinary longevity means that purchasing a Frontosa colony is a commitment comparable to getting a dog or cat. The keys to maximum lifespan are stable, pristine water chemistry (consistent pH 8.0–8.5, nitrate below 20 ppm), an appropriate diet free of mammalian protein, a properly structured social group, and avoidance of chronic stress from overcrowding or incompatible tank mates. Frontosa that die prematurely in captivity almost invariably succumb to preventable husbandry issues — bloat from improper diet, bacterial infections from degraded water quality, or chronic stress from aggressive tank mates.',
      },
    ],
    sources: [
      {
        title: 'Cyphotilapia frontosa (Boulenger, 1906)',
        url: 'https://www.fishbase.se/summary/Cyphotilapia-frontosa.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Speciation Through Sensory Drive in Cichlid Fish — Lake Tanganyika Colour Morphs',
        url: 'https://doi.org/10.1038/nature04021',
        publisher: 'Nature',
      },
      {
        title:
          'Phylogeography and Colour Variation of Cyphotilapia frontosa in Lake Tanganyika',
        url: 'https://doi.org/10.1111/jeb.12167',
        publisher: 'Journal of Evolutionary Biology',
      },
      {
        title:
          'Lake Tanganyika Cichlid Ecology and Conservation',
        url: 'https://doi.org/10.1007/978-90-481-9271-7',
        publisher: 'Springer',
      },
    ],
    relatedSlugs: [
      'flowerhorn-cichlid',
      'blue-diamond-discus',
      'altum-angelfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 18. Red-Bellied Piranha
  // ─────────────────────────────────────────────
  {
    title: 'Red-Bellied Piranha (Pygocentrus nattereri): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'red-bellied-piranha',
    type: 'species',
    category: 'piranha',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/red-bellied-piranha-hero.jpg',
    heroImageAlt:
      'School of adult Red-Bellied Piranha displaying vivid crimson underbellies and silvery flanks in a spacious blackwater aquarium',
    metaTitle:
      'Red-Bellied Piranha Care — Tank, Diet & Setup',
    metaDescription:
      'Complete Red-Bellied Piranha care guide — tank size, water params, feeding & schooling behaviour. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion:
      'Are Red-Bellied Piranha difficult to keep?',
    quickAnswer:
      'Red-Bellied Piranha are surprisingly straightforward to maintain once their core requirements are met: a minimum 125-gallon aquarium for a school of 5–6, warm soft water (pH 6.0–7.5, 24–28 °C), powerful filtration, and a varied high-protein diet. They are timid schooling fish that require group housing for psychological security.',
    summary:
      'The Red-Bellied Piranha (Pygocentrus nattereri) is simultaneously the most famous and most misunderstood freshwater fish in the world. Decades of sensationalised media portrayals have cast this South American characin as a mindless killing machine capable of skeletonising a cow in minutes — a myth that bears almost no resemblance to the actual animal. In reality, P. nattereri is a nervous, schooling omnivore that spends most of its time hovering motionlessly in shaded water, startling at sudden movements, and eating seeds, fins, scales, and invertebrates far more often than it devours large prey. This The Fish Collection guide dismantles the Hollywood mythology and provides a rigorous, experience-based care manual for what is, in truth, one of the most fascinating and behaviourally complex aquarium fish available.',
    scientificName: 'Pygocentrus nattereri',
    keyFacts: [
      { label: 'Scientific Name', value: 'Pygocentrus nattereri' },
      { label: 'Max Size', value: '33 cm (13 in)' },
      { label: 'Tank Size', value: '125 gallons (475 L) for a school of 5–6' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Omnivore — fish, shrimp, seeds, pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'legal-status', text: 'Legal Status', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascaping', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-schooling', text: 'Behaviour & Schooling Dynamics', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'bite-wounds', text: 'Conspecific Bite Wounds', level: 3 },
      { id: 'ich-and-parasites', text: 'Ich & Parasites', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Red-Bellied Piranha (<em>Pygocentrus nattereri</em>) is a serrasalmid characin native to virtually every major river system in South America east of the Andes — from the Amazon and Orinoco to the Paraná and São Francisco basins. It is the most widespread piranha species, the most commonly kept in captivity, and the species responsible for the genus's terrifying (and largely undeserved) reputation. In reality, <em>P. nattereri</em> is a shoaling fish whose famous group-feeding behaviour is primarily a defensive adaptation — safety in numbers — rather than evidence of cooperative predatory strategy.</p>
<p>What makes the Red-Bellied Piranha genuinely compelling for aquarists is not the shock value of their teeth (though the dentition is undeniably impressive — interlocking triangular cusps that function like a bear trap), but rather their complex social dynamics, startling intelligence, and dramatic colouration. Adult specimens display a brilliant crimson-to-orange ventral surface, iridescent silver flanks peppered with dark spots, and fiery red eyes — an appearance that is genuinely beautiful and far removed from the grey, menacing creature of popular imagination.</p>
<p>At The Fish Collection, we have maintained piranha species since our founding and currently house breeding colonies of <em>P. nattereri</em>, <em>P. piraya</em>, and several <em>Serrasalmus</em> species. We advocate strongly for responsible piranha keeping: these are fascinating animals that deserve expert-level care, not impulse purchases motivated by adolescent bravado. This guide provides the knowledge necessary for long-term success with the species.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Pygocentrus nattereri</em> inhabits an extraordinarily wide range of freshwater environments across tropical South America. Core habitat includes the floodplain lakes, slow-moving tributaries, and marginal vegetation zones of the Amazon, Orinoco, Paraná, and São Francisco river systems. During the wet season, they disperse into vast flooded forests (igapó and várzea) to exploit the seasonal abundance of fruits, seeds, insects, and fish fry. During the dry season, they concentrate in shrinking pools — and it is this dry-season concentration that creates the "feeding frenzy" scenarios that spawned their fearsome reputation.</p>
<p>Water conditions across their range vary enormously: pH from 5.5 (blackwater tributaries) to 7.5 (whitewater rivers), temperatures from 22 °C (southern Paraná) to 30 °C (equatorial Amazon), and hardness from near zero (Rio Negro) to moderate (Pantanal wetlands). This broad ecological tolerance translates to excellent adaptability in captivity — Red-Bellied Piranha are far less demanding regarding water chemistry than many South American species.</p>
<p>In the wild, the Red-Bellied Piranha's diet is overwhelmingly composed of fish fins, scales, insects, crustaceans, and plant material (fruits and seeds). Whole-fish predation does occur but is not the norm — stable isotope studies have demonstrated that <em>P. nattereri</em> functions as an omnivore, not the obligate hyper-predator of legend. The famous mass-feeding events documented in film are almost exclusively the result of artificial concentration: fish trapped in shrinking dry-season pools or attracted to carcasses discarded by fishers.</p>

<h2 id="legal-status">Legal Status</h2>
<p>Piranha ownership is prohibited or restricted in numerous jurisdictions. In the United States, piranha are illegal to own in roughly 25 states including California, Texas, New York, and Florida. In states where ownership is legal (e.g., Michigan, Minnesota), no permit is typically required. In the UK, piranha ownership is legal with no permit. In the EU, regulations vary by country — Germany and the Netherlands permit ownership, while France restricts it. Australia and New Zealand ban all piranha species.</p>
<p>Always verify national, state/provincial, and municipal regulations before purchasing. The Fish Collection ships piranha only to jurisdictions where ownership is confirmed legal and requires buyer acknowledgment of local legal compliance before processing any order.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascaping</h3>
<p>Red-Bellied Piranha are obligate schooling fish that must be kept in groups of 5 or more. A school of 5–6 adults requires a minimum aquarium of 125 gallons (475 litres) with dimensions of at least 180 cm long × 45 cm wide × 55 cm tall. For larger schools (8–12), which produce more natural behaviour and diffuse aggression more effectively, upgrade to 180–240 gallons. The cardinal rule: more piranha in a bigger tank produces calmer, healthier, bolder fish. A pair or trio in a small tank creates a stress-filled environment where the dominant individual terrorises the subordinates.</p>
<p>Aquascaping should provide both open swimming space and abundant cover. Driftwood tangles, dense plantings of robust species (Amazon Swords, Vallisneria, Java Fern — avoid delicate plants, which piranha uproot), and floating plant cover create the shaded, structured environment that makes the school feel secure. Indian almond leaves or blackwater extract enhance the natural biotope aesthetic and provide tannins that benefit skin health.</p>
<p>Substrate should be fine sand or small-gauge smooth gravel. Avoid bare-bottom setups, which reflect light upward and increase the fish's already considerable nervousness. A dark substrate enhances the school's colouration and promotes confident behaviour.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Piranha are messy eaters that generate a heavy bioload from both waste and uneaten food fragments. Target 10–12× turnover per hour — significantly higher than for most tropical community tanks. A large canister filter (Fluval FX6 or equivalent) paired with a second canister or large internal sponge filter provides the biological and mechanical capacity needed. Activated carbon in one filter stage helps manage the discolouration and odour that high-protein diets produce.</p>
<p>Flow should be moderate. Piranha inhabit slow-moving waters and do not appreciate strong currents, but sufficient flow to prevent dead spots and maintain oxygen levels is essential. A spray bar distributing flow along the back panel works well. Supplement with an airstone or sponge filter for additional oxygenation, particularly in warm (28+ °C) setups where dissolved oxygen is naturally lower.</p>
<p>Perform 30–40% water changes weekly. The combination of high bioload and protein-rich diet makes nitrate accumulation rapid. Temperature-match and dechlorinate all replacement water. Many experienced piranha keepers use a continuous drip water-change system that replaces 2–3% of the tank volume daily, maintaining exceptionally stable conditions with minimal disturbance.</p>

<h3 id="lighting">Lighting</h3>
<p>Dim to moderate lighting is ideal. Piranha are notably light-shy — bright lighting causes the school to retreat to the back of the tank and remain motionless, exhibiting the pale, washed-out colouration of stressed fish. Floating plants (Amazon Frogbit, Water Lettuce, Salvinia) provide natural shade and dramatically increase the school's confidence and activity level. A low-intensity LED at 30–50% brightness on an 8-hour photoperiod, supplemented with a moonlight setting during evening hours, reveals the most natural and engaging behaviour.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>The Red-Bellied Piranha's broad natural range means it tolerates a wide water-chemistry envelope:</p>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). The sweet spot for colour, activity, and health is 26 °C.</li>
<li><strong>pH:</strong> 6.0–7.5. Slightly acidic to neutral conditions are ideal. Indian almond leaves or peat filtration can naturally lower pH for a more authentic blackwater biotope.</li>
<li><strong>General Hardness (GH):</strong> 2–15 dGH (36–268 ppm). Adaptable to a wide range.</li>
<li><strong>Carbonate Hardness (KH):</strong> 2–8 dKH. Maintain at least 3 dKH for pH stability.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;30 ppm. Lower is always better.</li>
</ul>
<p>While piranha are tolerant of a broad chemistry range, they are sensitive to sudden changes. Rapid pH drops from large water changes with unbuffered RO water, or temperature swings from adding unmatched replacement water, trigger stress responses including colour loss, erratic swimming, and aggression spikes within the school. Gradual, consistent management is the key.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>The piranha's reputation as a meat-devouring monster simplifies the feeding question in many keepers' minds, but the reality is more nuanced. <em>P. nattereri</em> is an omnivore with a gut morphology adapted for both animal and plant material. A varied diet produces healthier, more colourful, and longer-lived fish than a monotonous regimen of raw meat.</p>
<p>Optimal dietary components:</p>
<ul>
<li><strong>Frozen white fish fillets:</strong> Tilapia, cod, or pollock fillets cut to bite-sized chunks. Feed 2–3 times per week as the protein staple.</li>
<li><strong>Frozen shrimp:</strong> Whole prawns (shell-on) or krill. The shell provides roughage and the carotenoid content enhances the red belly colouration. Feed 2–3 times per week.</li>
<li><strong>Frozen smelt or silversides:</strong> Whole small fish provide complete nutrition. Offer once weekly.</li>
<li><strong>Earthworms (nightcrawlers):</strong> Live or fresh — an excellent, readily accepted food that is nutritionally outstanding. Feed once weekly.</li>
<li><strong>High-quality pellets:</strong> Hikari Massivore, Northfin Monster, or New Life Spectrum large-fish formula. Pellets can constitute 20–30% of the diet and simplify feeding logistics.</li>
<li><strong>Fresh fruits and vegetables:</strong> Yes, seriously. Red-Bellied Piranha eagerly consume banana slices, grapes, peas, and melon in the wild. Offering fruit once weekly provides dietary fibre, vitamins, and enrichment.</li>
</ul>
<p>Feed once daily, in an amount the school consumes within 5–10 minutes. Remove all uneaten food within 30 minutes. Overfeeding is the single most common husbandry error with piranha — the resulting water quality deterioration causes more health problems than underfeeding ever would. Fast one day per week.</p>
<p><strong>Never</strong> feed live mammals or birds to piranha. Besides being ethically indefensible, mammalian fat is poorly digested and contributes to hepatic problems. Live feeder fish are unnecessary, carry disease, and promote abnormal aggression. Piranha do not need live prey to thrive — this is pure myth.</p>

<h2 id="behaviour-and-schooling">Behaviour & Schooling Dynamics</h2>
<p>The single most important thing to understand about Red-Bellied Piranha behaviour is that they are fundamentally prey animals, not apex predators. In the wild, <em>P. nattereri</em> is consumed by caimans, river dolphins, large catfish, herons, and otters. Their schooling behaviour is a predator-avoidance strategy — the "wall of teeth" deters attackers not through aggression but through the implicit threat that any predator that strikes will be bitten by dozens of neighbours defending themselves. This explains the paradox that every piranha keeper quickly discovers: a school of the world's most "fearsome" fish will panic and flee to the back of the tank when the keeper turns on the room light.</p>
<p>In captivity, a school of 6+ Red-Bellied Piranha typically establishes a loose dominance hierarchy. The largest individual (usually a female — <em>P. nattereri</em> females grow larger than males) claims the centre of the school, with subordinate individuals occupying peripheral positions. Aggression within the school is expressed primarily through brief chases and occasional fin-nipping rather than lethal attacks, though serious injuries can occur in overcrowded or underfed groups. Maintaining a school size of 6+ individuals, providing adequate space, and feeding consistently are the three pillars of intraspecific peace.</p>
<p>Piranha are most active during feeding, dawn, and dusk. Between these periods, the school typically hovers motionlessly in a shaded area of the tank, oriented into the current, with individuals spaced approximately one body length apart. This hovering behaviour is completely normal and should not be mistaken for illness. When confident and well-settled, the school will disperse throughout the tank, investigate décor, and engage in playful sparring that showcases their remarkable agility.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>The safest approach is a species-only setup. That said, experienced keepers have found certain species that coexist with Red-Bellied Piranha in sufficiently large systems:</p>
<ul>
<li><strong>Large Plecostomus:</strong> Common Plecos, Sailfin Plecos, and Royal Plecos (25+ cm) are frequently kept with piranha. Their heavy armour and nocturnal habits provide protection, though fin damage to the Pleco is possible.</li>
<li><strong>Silver Dollars (<em>Metynnis</em> spp.):</strong> Close relatives of piranha that school in the mid-water column. Their similar body shape appears to trigger a "conspecific" recognition that inhibits predation. A school of 6+ large Silver Dollars is one of the most reliable piranha tank mates.</li>
<li><strong>Pacu (<em>Piaractus brachypomus</em>):</strong> Another close serrasalmid relative. Only for very large systems (300+ gallons), as Pacu grow to 60+ cm.</li>
</ul>
<p>Any fish under 15 cm will eventually be bitten, harassed, or eaten. Slow-moving, long-finned species are particularly vulnerable. Do not add tank mates to an established piranha school — introduce all inhabitants simultaneously.</p>

<h2 id="breeding">Breeding</h2>
<p>Red-Bellied Piranha breed readily in captivity, making them one of the most successfully captive-bred piranha species. Breeding is typically triggered by a large (50%) cool-water change that simulates the onset of the rainy season, combined with a reduction in photoperiod and an increase in protein-rich feeding.</p>
<p>Spawning pairs — which form temporarily within the school — select a flat surface or shallow depression in the substrate. The female deposits 1,000–5,000 adhesive eggs in batches, and the male fertilises them immediately. The male guards the nest aggressively for the 2–3 day incubation period, attacking any school members that approach. Fry are free-swimming within 5–7 days of hatching and can be raised on newly hatched brine shrimp and microworms.</p>
<p>Raising piranha fry is challenging because of intense sibling cannibalism. Fry must be sorted by size frequently and provided with abundant live food to reduce predation on siblings. Growth is rapid — fry reach 3–5 cm within 3 months under good conditions.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="bite-wounds">Conspecific Bite Wounds</h3>
<p>The most common health issue in captive piranha is bite wounds from school mates. These typically present as crescentic lacerations on the flanks, fins, or caudal peduncle. Minor bites — involving skin and superficial muscle — heal remarkably quickly in clean water; piranha have an exceptional regenerative capacity and can regrow lost fin tissue and close skin wounds within 1–2 weeks. Deeper bites that expose muscle or bone require intervention: isolate the injured fish in a hospital tank, treat with aquarium salt (3 g/L) and a broad-spectrum antibiotic (kanamycin or erythromycin) to prevent secondary bacterial infection, and return the fish to the school only when the wound has closed.</p>
<p>Frequent bite wounds indicate a systemic husbandry problem: the school is too small (fewer than 5 individuals), the tank is too small (under 125 gallons for 5–6 fish), feeding is insufficient or infrequent, or a single dominant individual has become an outlier aggressor. Address the root cause rather than simply treating the symptom.</p>

<h3 id="ich-and-parasites">Ich & Parasites</h3>
<p><em>P. nattereri</em> is moderately susceptible to <em>Ichthyophthirius multifiliis</em>, particularly following temperature fluctuations or the stress of transport and introduction to a new tank. Treatment is straightforward: raise temperature to 30 °C gradually (1 °C per day) and treat with half-dose malachite green + formalin (piranha are slightly more sensitive to medications than robust cichlids). Alternatively, heat alone (30–32 °C) maintained for 10–14 days is effective for mild cases. Maintain aeration during treatment, as warmer water holds less dissolved oxygen.</p>
<p>Internal parasites (nematodes, cestodes) are common in wild-caught specimens. Symptoms include weight loss despite normal feeding, white or stringy faeces, and abdominal swelling. Treat with praziquantel (PraziPro) for cestodes and levamisole for nematodes, following manufacturer dosing instructions. Quarantine all new piranha for a minimum of 4 weeks before adding to an established school.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Are piranha dangerous to humans?',
        answer:
          'Red-Bellied Piranha can inflict serious bite wounds — their teeth are razor-sharp and their jaw muscles generate enough force to sever a human finger. However, unprovoked attacks on humans are extremely rare and almost exclusively occur in the context of dry-season concentration, when thousands of starving fish are trapped in shrinking pools. In captivity, piranha are timid and flee from hands placed in the tank. Bites occur almost exclusively during netting, feeding with bare hands (never recommended), or when a fish is cornered and panics. Respect their dentition, use long tongs for feeding, and never place hands in the tank when the fish are in a feeding response, and the risk is minimal.',
      },
      {
        question: 'How many piranha should you keep together?',
        answer:
          'A minimum of 5–6 Red-Bellied Piranha is essential for a functional school. Keeping 1–3 individuals results in severely stressed, abnormally aggressive fish — the species\' schooling instinct is not optional. Groups of 8–12 in larger tanks (180+ gallons) produce the most natural, confident behaviour, with aggression distributed across many individuals rather than concentrated on a few. The worst possible number is 2, as the dominant fish will relentlessly harass the subordinate. If you cannot accommodate at least 5 adult piranha in a 125+ gallon aquarium, do not keep the species.',
      },
      {
        question: 'What do piranha eat in captivity?',
        answer:
          'Captive Red-Bellied Piranha thrive on a varied diet of frozen white fish fillets (tilapia, cod), frozen shrimp and krill, whole frozen smelt or silversides, live earthworms, high-quality carnivore pellets, and — surprisingly — fresh fruit such as banana, grapes, and melon. The species is genuinely omnivorous, and plant material should constitute a small but regular part of the diet. Avoid feeding live mammals, birds, or feeder goldfish — these are nutritionally poor, carry disease, and promote abnormal aggression. Feed once daily in amounts consumed within 5–10 minutes, and fast one day per week.',
      },
      {
        question: 'Is it legal to own piranha?',
        answer:
          'Legality varies significantly by jurisdiction. In the United States, piranha are prohibited in approximately 25 states. States where ownership is legal include Michigan, Minnesota, Wisconsin, and several others — but regulations change frequently, so always verify current law with your state fish and wildlife agency. In the UK, ownership is legal with no permit required. In the EU, most countries permit ownership though some require notification. Australia, New Zealand, and several Asian countries ban all piranha species entirely. The Fish Collection ships piranha only to confirmed-legal jurisdictions and requires buyer acknowledgment of local legal compliance.',
      },
      {
        question: 'Do piranha eat each other?',
        answer:
          'Cannibalism does occur in Red-Bellied Piranha, though it is far less common than popular culture suggests. In well-maintained captive schools with adequate space and food, fatal cannibalism is rare. What does occur regularly is "scale-eating" and fin-nipping — piranha will opportunistically bite fins, scales, and small pieces of flesh from school mates, a behaviour called lepidophagy that is a normal part of their ecology. These wounds heal quickly in clean water. Fatal attacks typically occur when a school member is severely weakened by illness, when the school is drastically underfed, or when a dominant individual identifies a specific subordinate as a target due to overcrowding. Maintaining school size (6+), tank size (125+ gallons), and consistent feeding virtually eliminates lethal conspecific aggression.',
      },
    ],
    sources: [
      {
        title: 'Pygocentrus nattereri (Kner, 1858)',
        url: 'https://www.fishbase.se/summary/Pygocentrus-nattereri.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Trophic Ecology and Diet Composition of Pygocentrus nattereri in the Pantanal Wetlands',
        url: 'https://doi.org/10.1007/s10750-009-9879-5',
        publisher: 'Hydrobiologia',
      },
      {
        title:
          'Piranha: Biology and Natural History of a Misunderstood Fish',
        url: 'https://doi.org/10.7208/chicago/9780226820651.001.0001',
        publisher: 'University of Chicago Press',
      },
      {
        title:
          'Shoaling Behaviour and Group Dynamics in Serrasalmidae',
        url: 'https://doi.org/10.1111/jfb.14072',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: [
      'peacock-bass',
      'wolf-fish',
      'freshwater-stingray',
    ],
  },

  // ─────────────────────────────────────────────
  // 19. Freshwater Stingray
  // ─────────────────────────────────────────────
  {
    title: 'Freshwater Stingray (Potamotrygon motoro): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'freshwater-stingray',
    type: 'species',
    category: 'stingray',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/freshwater-stingray-hero.jpg',
    heroImageAlt:
      'Potamotrygon motoro freshwater stingray resting on a sandy substrate displaying its distinctive orange ocelli pattern against a dark brown disc',
    metaTitle:
      'Freshwater Stingray Care — Tank, Diet & Setup',
    metaDescription:
      'Complete Freshwater Stingray (Potamotrygon motoro) care guide — tank size, water params, diet & safety. Expert advice from The Fish Collection aquarists.',
    quickAnswerQuestion:
      'How do you care for a Freshwater Stingray?',
    quickAnswer:
      'Freshwater Stingrays (Potamotrygon motoro) require a minimum 180-gallon aquarium with a wide footprint, fine sand substrate, soft acidic water (pH 6.0–7.0, 26–30 °C), and a diet of live and frozen invertebrates. They possess a venomous caudal spine that demands respectful handling protocols at all times.',
    summary:
      'The Motoro Stingray (Potamotrygon motoro) is the most widely available and commonly kept freshwater stingray species, prized for its striking "polka-dot" pattern of orange-gold ocelli against a dark olive-brown disc. Native to virtually every major South American river system, P. motoro is hardier and more adaptable than many of its rarer congeners, making it the ideal entry point for aquarists venturing into potamotrygonid keeping. However, "entry point" is relative — freshwater stingrays demand large, meticulously maintained aquaria, strict water quality discipline, and absolute respect for their venomous caudal spine. This The Fish Collection guide provides comprehensive husbandry instructions for one of the most rewarding and visually spectacular freshwater species in the hobby.',
    scientificName: 'Potamotrygon motoro',
    keyFacts: [
      { label: 'Scientific Name', value: 'Potamotrygon motoro' },
      { label: 'Max Size', value: '50 cm disc width (20 in); 80 cm total length' },
      { label: 'Tank Size', value: '180 gallons (680 L) minimum' },
      { label: 'Temperature', value: '26–30 °C (79–86 °F)' },
      { label: 'pH', value: '6.0–7.0' },
      { label: 'Care Level', value: 'Advanced — venomous spine' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Carnivore — shrimp, worms, fish, molluscs' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'substrate-and-decor', text: 'Substrate & Décor', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'safety-and-handling', text: 'Safety & Handling', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'death-curl', text: 'Death Curl', level: 3 },
      { id: 'disc-edge-curling', text: 'Disc Edge Curling', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>Freshwater stingrays of the family Potamotrygonidae are the only elasmobranchs (cartilaginous fishes) to have completely adapted to freshwater environments. Unlike their marine relatives, potamotrygonids have lost the ability to osmoregulate in saltwater and are restricted entirely to the river systems of South America. <em>Potamotrygon motoro</em> is the most widespread member of the family, occurring across the Amazon, Orinoco, Paraná, and Paraguay drainages — a range that spans virtually the entire continent east of the Andes.</p>
<p>The species' appeal to aquarists is immediately apparent: a flattened, near-circular disc adorned with bold orange or gold ocelli (eye-spots) against a dark background, a graceful undulating swimming motion, and an interactive personality that makes it one of the most engaging bottom-dwelling species available. Motoro Stingrays learn to recognise their keeper, rise to the surface to accept hand-fed food (though caution is warranted given the venomous spine), and display problem-solving behaviour that surprises keepers accustomed to bony fish.</p>
<p>At The Fish Collection, we have specialised in potamotrygonid species since 2011 and maintain breeding groups of <em>P. motoro</em>, <em>P. leopoldi</em> (Polka Dot/Xingu Stingray), and the hybrid varieties that have become increasingly popular in Asian markets. We consider freshwater stingrays the pinnacle of advanced freshwater fishkeeping — demanding, expensive, and occasionally hazardous, but offering a connection with one of evolution's most elegant body plans. For related large-predator species, see our <a href="/exotic-fish/stingray/">stingray category page</a>.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Potamotrygon motoro</em> inhabits a diverse range of freshwater environments across its enormous range: sandy river bottoms, flooded forest floors, lake margins, and the shallow nearshore zones of major tributaries. They show a strong preference for sandy or fine-mud substrates where they can partially bury themselves — both as a hunting strategy (ambushing benthic invertebrates) and as predator avoidance. In the Amazon basin proper, they favour the slower backwaters and flooded margins rather than the main channel, where current speeds exceed their comfortable range.</p>
<p>Water chemistry across the species' range is variable: pH from 5.5 (blackwater tributaries like the Rio Negro) to 7.5 (whitewater drainages), temperatures from 24 °C (southern Paraná in winter) to 32 °C (equatorial Amazon), and extremely low mineral content (GH 1–5 in most locations). The consistent thread is soft, warm, slightly acidic water with a fine substrate — conditions that must be approximated in captivity for the species to thrive.</p>
<p>In the wild, <em>P. motoro</em> is a benthic predator that feeds primarily on insect larvae (especially chironomids), crustaceans (shrimp, crabs), molluscs, and small fish. They locate prey using a combination of electroreception (via ampullae of Lorenzini, the same sensory system used by sharks), olfaction, and mechanosensory lateral line detection. Feeding typically occurs at dawn and dusk when prey activity peaks.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>The critical dimension for stingray keeping is footprint, not volume. A <em>P. motoro</em> with a 40 cm disc width needs a tank floor area of at least 150 × 60 cm (60 × 24 inches) — and that is the absolute minimum for a single specimen. For a pair or small group, upgrade to a tank with a footprint of 200 × 75 cm (80 × 30 inches) or larger. In volumetric terms, this translates to a minimum of 180 gallons (680 litres) for a single ray, and 240–300 gallons for a pair. The tank need not be tall — 45–50 cm (18–20 inches) water depth is sufficient, as stingrays are strictly bottom-dwelling.</p>
<p>Wide, shallow tanks or custom-built "stingray tanks" with enlarged footprints are ideal. Standard tall aquaria (e.g., 120 × 40 × 60 cm) waste vertical space while providing insufficient floor area. If budget permits, a fibreglass or acrylic custom build with dimensions of 200 × 75 × 50 cm provides an excellent single-ray habitat.</p>
<p>The tank should have rounded internal corners wherever possible. Stingrays are powerful swimmers that cruise the perimeter constantly, and sharp 90-degree corners can cause disc-edge abrasions. Silicone bead the internal corners to create a gentle curve, or choose a tank with factory-rounded edges.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Stingrays are extraordinarily sensitive to water quality — more so than virtually any other commonly kept freshwater species. Ammonia and nitrite must be at absolute zero at all times, and even moderate nitrate levels (>20 ppm) can trigger the lethal "death curl" condition. Target a turnover rate of 10–12× the tank volume per hour using a large sump system with robust biological media (ceramic rings, sintered glass, or K1 moving-bed). A canister filter alone is insufficient for the bioload of an adult stingray fed a high-protein diet.</p>
<p>Flow should be moderate and evenly distributed. Stingrays appreciate gentle current but should not be subjected to strong directional jets that pin them against the substrate. A manifold return distributing flow across the tank length is ideal. Excellent oxygenation is critical — use airstones, surface agitation, or a spray bar to maintain dissolved oxygen above 6 mg/L.</p>
<p>Perform 30–40% water changes twice weekly for stingray systems. Weekly changes are not frequent enough to manage the nitrate accumulation from a protein-rich diet and heavy bioload. Temperature- and pH-match all replacement water meticulously — stingrays are more sensitive to parameter shifts during water changes than most bony fish.</p>

<h3 id="substrate-and-decor">Substrate & Décor</h3>
<p>Fine sand is mandatory — not optional, not "recommended," but a hard requirement. Stingrays spend much of their time partially buried in sand, and this burying behaviour is essential for both thermoregulation and psychological comfort. Play sand, pool-filter sand, or blasting sand (silica-free) at a depth of 5–8 cm is ideal. Never use gravel, crushed coral, or any substrate with sharp edges — the delicate ventral surface of the disc will be abraded, creating entry points for bacterial infection.</p>
<p>Décor should be minimal and smooth. Large, rounded driftwood pieces and smooth river stones placed along the perimeter provide visual barriers without creating dead zones where the ray can become trapped. Avoid rockwork with overhangs or caves — a stingray that wedges itself under a rock structure can injure its disc or trap its spine. Leave the central floor area completely open for the ray to cruise and bury.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Freshwater stingrays demand pristine, stable water chemistry. The following ranges represent optimal conditions for <em>P. motoro</em>:</p>
<ul>
<li><strong>Temperature:</strong> 26–30 °C (79–86 °F). Stingrays are tropical animals that suffer at temperatures below 24 °C. Use a titanium inline heater — never a glass submersible, which the ray will break.</li>
<li><strong>pH:</strong> 6.0–7.0. Soft, slightly acidic conditions replicate the Amazonian habitat. Higher pH (7.5+) is tolerable for acclimated specimens but not ideal.</li>
<li><strong>General Hardness (GH):</strong> 1–8 dGH (18–143 ppm). Soft water is essential. If your tap water is hard, use an RO/DI system and remineralise to the target range.</li>
<li><strong>Carbonate Hardness (KH):</strong> 1–4 dKH. Low KH mimics natural conditions but requires careful monitoring to prevent pH crashes. Maintain at least 2 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — absolute zero, no exceptions. Even trace ammonia (0.1 ppm) that many bony fish would shrug off can trigger fatal distress in stingrays.</li>
<li><strong>Nitrate:</strong> &lt;15 ppm. Ideally below 10 ppm. Nitrate toxicity is a leading cause of stingray mortality in captivity.</li>
</ul>
<p>Invest in a high-quality test kit (Salifert or Hanna instruments) and test parameters at least twice weekly. A continuous monitoring system (Neptune Apex, GHL ProfiLux) with automated alerts for temperature and pH is strongly recommended for stingray systems — the cost is modest compared to the value of the animal and the consequences of undetected parameter drift.</p>

<h2 id="safety-and-handling">Safety & Handling</h2>
<p>Every freshwater stingray possesses a venomous caudal spine — a serrated, retrorsely barbed structure located on the dorsal surface of the tail. <em>P. motoro</em> can deliver an agonisingly painful sting that causes immediate, severe localised pain (often described as the worst pain the victim has ever experienced), significant tissue necrosis, and risk of secondary bacterial infection. The venom is thermolabile (heat-sensitive), and the standard first aid for a stingray envenomation is immediate immersion of the wound in water as hot as the victim can tolerate (approximately 45 °C) for 60–90 minutes.</p>
<p>Safety protocols for stingray keepers:</p>
<ul>
<li><strong>Never place hands on or near the substrate:</strong> When performing maintenance, keep hands above the ray's disc level. If the ray is resting on the bottom, encourage it to move before cleaning the area.</li>
<li><strong>Use long-handled tools:</strong> Algae scrapers, gravel vacuums, and feeding tongs should be at least 45 cm long to maintain distance from the tail.</li>
<li><strong>Know where the ray is at all times:</strong> Before putting any equipment in the tank, visually locate the stingray. They can be partially buried and difficult to spot.</li>
<li><strong>Never attempt to handle a stingray bare-handed:</strong> If the ray must be moved (for transport or medical treatment), use a large, wide net or plastic container to scoop it. A stingray thrashing in a net will reflexively lash its tail, and the spine can penetrate standard aquarium nets.</li>
<li><strong>Have a first-aid plan:</strong> Keep a basin capable of holding hot water near the tank, along with a thermometer. Know the location of the nearest hospital emergency department in case of a serious envenomation.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Freshwater stingrays are carnivorous benthic predators with high metabolic demands. A well-fed <em>P. motoro</em> should have a disc that is rounded and slightly convex at the edges — sunken or concave disc margins indicate underfeeding and are a serious welfare concern. Feed once or twice daily, offering a variety of protein-rich foods:</p>
<ul>
<li><strong>Frozen bloodworms and blackworms:</strong> The dietary staple for juveniles under 20 cm disc width. Thaw and dispense directly onto the sand substrate where the ray can detect them via electroreception.</li>
<li><strong>Frozen shrimp:</strong> Whole prawns (shell-on, deveined) and krill are eagerly accepted by specimens of all sizes. The shell provides calcium for disc growth and maintenance.</li>
<li><strong>Frozen silversides and smelt:</strong> Whole small fish provide complete nutrition. Excellent for growing juveniles and maintaining adults.</li>
<li><strong>Live earthworms:</strong> Nightcrawlers placed on the sand substrate trigger an immediate feeding response and are nutritionally outstanding.</li>
<li><strong>Fresh mussels and clams:</strong> Open and place on the substrate. Stingrays use their powerful jaws to crush mollusc shells in the wild, and the behaviour is enriching in captivity.</li>
<li><strong>Quality pellets:</strong> Many <em>P. motoro</em> can be trained to accept sinking carnivore pellets (Hikari Massivore, Northfin Monster). This simplifies daily feeding but should not replace fresh and frozen items entirely.</li>
</ul>
<p>Juvenile rays (under 20 cm disc) should be fed twice daily. Adults (30+ cm disc) can be fed once daily with a fast day every 7–10 days. Monitor disc condition closely — the disc edges should always be rounded and full, never curled upward (which indicates starvation or dehydration).</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Freshwater stingrays are intelligent, curious animals with distinct individual personalities. A well-acclimated <em>P. motoro</em> will patrol the tank continuously, investigate new objects, and readily interact with its keeper — rising off the substrate to accept food from tongs, following the keeper's movements along the front glass, and splashing at the surface during feeding. They are crepuscular (most active at dawn and dusk) but will be active throughout the day in a dimly lit tank with a secure environment.</p>
<p>Stingrays are generally tolerant of conspecifics and can be kept in pairs or small groups in sufficiently large systems. Male-female pairs are the most compatible; male-male combinations can result in competition and disc-biting during the breeding season. Introducing a new stingray to an established system should be done carefully — monitor for aggression, particularly tail-whipping, for the first 48 hours.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Stingrays coexist with a range of large, non-aggressive species:</p>
<ul>
<li><strong><a href="/species/platinum-arowana/">Arowana</a></strong> — Surface-dwelling predators that occupy a completely different water column zone. A classic pairing in large systems.</li>
<li><strong>Large Plecostomus:</strong> Useful for algae control, though some Plecos will rasp on the stingray's disc at night. Choose non-aggressive species and monitor.</li>
<li><strong><a href="/species/peacock-bass/">Peacock Bass</a></strong> — Robust mid-water cichlids that ignore bottom-dwelling rays.</li>
<li><strong>Bichirs:</strong> Another bottom-dweller, but their armoured scales protect them from the ray's spine, and competition for territory is minimal.</li>
<li><strong>Silver Dollars:</strong> Peaceful schooling fish that occupy the mid-water column and add movement to the display.</li>
</ul>
<p>Avoid aggressive cichlids that will harass the ray, small fish that may be eaten (anything under 10 cm), and any species that nips at the ray's disc or tail. Also avoid other bottom-dwellers that compete directly for substrate territory in tanks under 300 gallons.</p>

<h2 id="breeding">Breeding</h2>
<p>Freshwater stingrays are livebearers — a rarity among cartilaginous fishes. <em>P. motoro</em> has been bred successfully in captivity by advanced hobbyists and commercial breeders. Mating involves the male biting and gripping the edge of the female's disc while inserting one of his two claspers (modified pelvic fins) into her cloaca. The courtship can be rough, and females may sustain disc-edge bite wounds during mating — monitor and treat if necessary.</p>
<p>Gestation lasts approximately 3–4 months. The female gives birth to 1–8 fully formed pups (typically 3–5) with disc widths of 8–12 cm. Pups are immediately independent and can be fed frozen bloodworms and baby brine shrimp from day one. Separate pups from adults in a dedicated grow-out tank — while parental predation is uncommon, the risk of accidental injury from adults is significant.</p>
<p>Triggering breeding requires a well-established pair (minimum 12–18 months of cohabitation), excellent water quality, and generous feeding. Some breeders report that a slight temperature reduction (2 °C) followed by a return to normal triggers mating behaviour, mimicking the seasonal temperature fluctuations of South American river systems.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="death-curl">Death Curl</h3>
<p>"Death curl" is the colloquial name for a terminal condition in which the stingray's disc margins curl irreversibly upward, the animal becomes lethargic, and death follows within 24–72 hours. Despite the dramatic name, death curl is a symptom, not a disease — it indicates acute systemic failure caused by one or more critical water quality parameters exceeding the ray's tolerance. The most common triggers are ammonia or nitrite spikes (even brief ones), nitrate levels above 40 ppm, pH crashes, and temperature drops below 22 °C.</p>
<p>Prevention is the only reliable approach — once full death curl has manifested, survival rates are below 10% regardless of intervention. If caught in the earliest stage (slight disc-edge lifting), an immediate 50% water change with temperature- and pH-matched water, addition of an ammonia detoxifier (Seachem Prime at triple dose), and maximisation of aeration can sometimes reverse the condition. Death curl underscores why continuous water quality monitoring and redundant filtration are non-negotiable for stingray systems.</p>

<h3 id="disc-edge-curling">Disc Edge Curling</h3>
<p>Mild disc-edge curling — distinct from the acute, lethal death curl — can occur chronically in stingrays that are underfed, kept on inappropriate substrates, or housed in water that is too hard or alkaline. The disc edges become slightly concave or rippled rather than smooth and convex. This is a serious welfare indicator that demands immediate attention. Evaluate and correct diet (increase feeding frequency and variety), substrate (switch to fine sand if not already using it), water chemistry (ensure GH below 10 dGH and pH below 7.0), and nitrate levels (target below 10 ppm). Early-stage chronic curling is reversible with environmental improvement over 2–4 weeks.</p>
<p>Bacterial and fungal infections on the ventral disc surface are also common, typically caused by abrasion from inappropriate substrates. White or red patches on the underside of the disc, particularly around the gill slits and mouth, should be treated with salt baths (5 g/L for 10 minutes) and antibiotic treatment (kanamycin or nitrofurazone) if the condition does not improve within 5 days. Avoid copper-based medications and formalin, both of which are poorly tolerated by elasmobranchs.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a Freshwater Stingray cost?',
        answer:
          'Potamotrygon motoro is the most affordable freshwater stingray species. Captive-bred juveniles (10–15 cm disc width) typically range from $150–$400 depending on pattern quality and regional availability. Wild-caught specimens are generally less expensive ($100–$250) but carry higher parasite and acclimation risk. Rarer species and designer hybrids command dramatically higher prices — P. leopoldi (Black Diamond) juveniles start at $1,500, and premium hybrid varieties from Asian breeders can exceed $10,000. Beyond the animal itself, budget $2,000–$5,000 for the specialised aquarium system a stingray requires.',
      },
      {
        question: 'Can a Freshwater Stingray sting you?',
        answer:
          'Yes. All freshwater stingrays possess a venomous caudal spine capable of inflicting extremely painful, medically significant wounds. The spine is a serrated, barbed structure coated in a venom-producing integumentary sheath. A sting causes immediate, intense localised pain that can persist for 6–48 hours, significant tissue necrosis and swelling, and risk of secondary bacterial infection. First aid involves immediate hot-water immersion (45 °C for 60–90 minutes) to denature the thermolabile venom proteins. Seek medical attention for any sting, particularly those involving deep puncture wounds or stings to the hand, foot, or torso. Stingray envenomations are a medical emergency, not a minor injury.',
      },
      {
        question: 'What size tank does a Freshwater Stingray need?',
        answer:
          'A single Potamotrygon motoro requires a minimum tank footprint of 150 × 60 cm (60 × 24 inches), which translates to approximately 180 gallons (680 litres). For a pair, upgrade to 240–300 gallons with a 200 × 75 cm footprint. Tank depth (height) is less important — 45–50 cm of water depth is sufficient. Wide, shallow tanks or purpose-built stingray enclosures with enlarged floor areas are ideal. The key metric is floor space, not volume. A standard 180-gallon tall tank (120 × 45 × 75 cm) provides less usable habitat than a shallower 150-gallon tank with a 180 × 60 cm footprint.',
      },
      {
        question: 'What do Freshwater Stingrays eat?',
        answer:
          'Freshwater Stingrays are carnivorous and eat a varied diet of frozen shrimp (whole prawns, krill), frozen bloodworms, frozen silversides, live earthworms, fresh mussels and clams, and high-quality sinking carnivore pellets. Juveniles under 20 cm disc width should be fed twice daily with an emphasis on bloodworms and small shrimp. Adults are fed once daily with larger prey items. The disc edges should always appear rounded and full — sunken or concave disc margins indicate underfeeding, which is a serious welfare concern in stingrays. Fast one day per week for adults.',
      },
      {
        question: 'Is it legal to own a Freshwater Stingray?',
        answer:
          'Freshwater stingray ownership is restricted or prohibited in several jurisdictions. In the United States, stingrays are banned in Arizona, Arkansas, California, Florida, Georgia, Hawaii, Mississippi, Nevada, Oklahoma, Texas, and Utah, among others. In the UK, ownership is legal with no permit required. In the EU, regulations vary by member state — most permit ownership. Australia bans all potamotrygonid species. Several South American countries restrict or prohibit export of wild-caught specimens. Always verify national, state, and local regulations before purchasing. The Fish Collection provides jurisdiction-specific compliance guidance for all stingray buyers.',
      },
      {
        question: 'How big do Freshwater Stingrays get?',
        answer:
          'Potamotrygon motoro reaches a maximum disc width of approximately 50 cm (20 inches) and total length (disc plus tail) of 80 cm (31 inches) in captivity. Wild specimens can reach slightly larger sizes. Growth is moderate — a 10 cm juvenile will reach 25–30 cm disc width within 2–3 years under optimal conditions and full adult size within 4–5 years. Males remain smaller than females. The species\' eventual size, combined with its need for a wide footprint tank, means that prospective buyers must plan for a 180+ gallon system from the outset — "growing up" from a smaller starter tank is not practical for stingrays.',
      },
    ],
    sources: [
      {
        title: 'Potamotrygon motoro (Müller & Henle, 1841)',
        url: 'https://www.fishbase.se/summary/Potamotrygon-motoro.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Potamotrygonidae: Biology and Conservation of Neotropical Freshwater Stingrays',
        url: 'https://doi.org/10.1007/978-3-319-94122-2',
        publisher: 'Springer',
      },
      {
        title:
          'Venom Composition and Envenomation Effects of Potamotrygon Stingrays',
        url: 'https://doi.org/10.1016/j.toxicon.2006.07.020',
        publisher: 'Toxicon',
      },
      {
        title:
          'Reproductive Biology of the Freshwater Stingray Potamotrygon motoro',
        url: 'https://doi.org/10.1111/jfb.13912',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: [
      'black-diamond-stingray',
      'platinum-arowana',
      'red-bellied-piranha',
    ],
  },

  // ─────────────────────────────────────────────
  // 20. Altum Angelfish
  // ─────────────────────────────────────────────
  {
    title: 'Altum Angelfish (Pterophyllum altum): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'altum-angelfish',
    type: 'species',
    category: 'angelfish',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/altum-angelfish-hero.jpg',
    heroImageAlt:
      'Wild-caught Altum Angelfish displaying its towering dorsal and anal fins and deep vertical barring in a blackwater aquarium with driftwood',
    metaTitle:
      'Altum Angelfish Care — Tank, Diet & Setup',
    metaDescription:
      'Complete Altum Angelfish (Pterophyllum altum) care guide — tank size, water chemistry, diet & acclimation. Expert advice from The Fish Collection aquarists.',
    quickAnswerQuestion:
      'How do you care for Altum Angelfish?',
    quickAnswer:
      'Altum Angelfish require a tall aquarium of at least 75 gallons with a minimum height of 55 cm, extremely soft acidic water (pH 4.5–6.5, GH 0–3 dGH, 28–30 °C), and a diet of live and frozen foods. They are delicate wild-caught fish that demand expert-level water quality management and patient acclimation.',
    summary:
      'The Altum Angelfish (Pterophyllum altum) is the largest and most majestic of the three recognised Pterophyllum species — and arguably the most challenging freshwater cichlid to maintain in captivity. With a fin-tip-to-fin-tip height that can exceed 40 cm in mature specimens, the Altum dwarfs its common angelfish cousin (P. scalare) and displays a wild elegance that domestic angelfish, with their generations of selective breeding, have long since lost. Native to the extremely soft, acidic blackwater rivers of the upper Orinoco and upper Rio Negro basins, P. altum demands water chemistry that is actively hostile to most other aquarium species — pH values below 5.0, negligible mineral content, and temperatures of 28–30 °C. This The Fish Collection guide provides the detailed husbandry protocol required to keep this extraordinary fish alive and thriving in captivity.',
    scientificName: 'Pterophyllum altum',
    keyFacts: [
      { label: 'Scientific Name', value: 'Pterophyllum altum' },
      { label: 'Max Size', value: '18 cm body; 40+ cm fin-to-fin height' },
      { label: 'Tank Size', value: '75 gallons (280 L) min; 55+ cm tall' },
      { label: 'Temperature', value: '28–30 °C (82–86 °F)' },
      { label: 'pH', value: '4.5–6.5' },
      { label: 'Care Level', value: 'Expert' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Carnivore — live & frozen invertebrates, small fish' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'altum-vs-scalare', text: 'Altum vs. Scalare: Identification', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascaping', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'acclimation', text: 'Acclimation Protocol', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'acclimation-shock', text: 'Acclimation Shock & Import Mortality', level: 3 },
      { id: 'hexamita', text: 'Hexamita & Internal Parasites', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Altum Angelfish (<em>Pterophyllum altum</em>) is the crown jewel of the angelfish genus and, for many experienced aquarists, the most beautiful freshwater fish in existence. First described by Pellegrin in 1903 from specimens collected in the Atabapo River (a blackwater tributary of the upper Orinoco in Venezuela), <em>P. altum</em> has maintained its reputation as the "true" wild angelfish — an animal whose dramatic proportions, subtle colouration, and demanding husbandry requirements set it categorically apart from the domesticated <em>P. scalare</em> varieties that dominate the hobby.</p>
<p>What distinguishes the Altum from all other angelfish is its extraordinary vertical dimension. A mature Altum can measure 18 cm from nose to caudal fin base — comparable to a large domestic scalare — but its extended dorsal and anal fins push the total fin-to-fin height to 40+ cm, creating a dramatically tall, laterally compressed silhouette that is unmistakable. The body displays subtle olive-green to silver base colouration with three bold dark vertical bars (a fourth, fainter bar crosses the caudal peduncle), a distinctive notch in the forehead profile above the eye, and a reddish-brown suffusion on the dorsal surface that intensifies with age and confidence.</p>
<p>At The Fish Collection, we import Altum Angelfish directly from our collection partners on the Atabapo and Inírida rivers in Colombia and Venezuela. We consider every Altum shipment a high-stakes operation — import mortality for this species runs 10–30% even under optimal conditions, and post-import losses from delayed acclimation failure can push that figure higher. The fish that survive acclimation and settle into a properly maintained aquarium are, however, extraordinarily hardy and can live well over a decade. This guide distils our hard-won experience into a practical protocol for the aquarist willing to accept the challenge. For more on our broader <a href="/exotic-fish/angelfish/">angelfish species collection</a>, visit the category page.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p><em>Pterophyllum altum</em> is restricted to the upper Orinoco River basin and the upper Rio Negro drainage — specifically the blackwater tributaries of the Atabapo, Inírida, Guainía, and upper Negro rivers along the Colombia-Venezuela border. These are among the most chemically extreme freshwater environments on Earth: pH ranges from 3.5 to 5.5, conductivity is typically below 20 µS/cm (corresponding to near-zero mineral content), and the water is stained a deep tea-brown by dissolved humic and fulvic acids leached from decomposing rainforest vegetation.</p>
<p>Water temperature in these habitats is consistently warm — 27–31 °C year-round with minimal seasonal variation. Dissolved oxygen is moderate (4–6 mg/L) and current is slow. The substrate is typically fine white sand overlain by a deep layer of decomposing leaf litter. Vegetation includes submerged root tangles from riparian trees, fallen branches, and occasional stands of aquatic grasses. Altum Angelfish are found in groups of 5–20 individuals sheltering among submerged root structures and branch tangles, typically at depths of 1–3 metres.</p>
<p>The extreme blackwater chemistry of the Altum's habitat is not merely a preference — it is a physiological requirement that has profound implications for captive care. The acidic, mineral-free water suppresses bacterial and fungal pathogens, meaning wild Altum have evolved with a weakened immune response to the pathogens that thrive in neutral or alkaline aquarium water. When imported into standard aquarium conditions (pH 7.0, moderate hardness), their immune system is poorly equipped to combat the exponentially higher pathogen load, and this mismatch is the primary driver of the notorious import mortality associated with the species.</p>

<h2 id="altum-vs-scalare">Altum vs. Scalare: Identification</h2>
<p>Misidentification is rampant in the angelfish trade. Many fish sold as "Altum Angelfish" are actually wild-caught <em>P. scalare</em> from various localities, or even domestic scalare bred to mimic the Altum's appearance. True <em>P. altum</em> can be distinguished from <em>P. scalare</em> by the following characteristics:</p>
<ul>
<li><strong>Forehead profile:</strong> <em>P. altum</em> has a distinctive steep, concave notch (saddle) above the eye in the forehead profile. <em>P. scalare</em> has a smoother, more convex forehead.</li>
<li><strong>Body proportions:</strong> <em>P. altum</em> is proportionally taller relative to body length. The distance from dorsal spine tip to anal spine tip dramatically exceeds body length in mature specimens.</li>
<li><strong>Vertical barring:</strong> The bars in <em>P. altum</em> are typically darker, broader, and more sharply defined than in wild <em>P. scalare</em>, with a characteristic reddish-brown hue between the bars.</li>
<li><strong>Scale count:</strong> The definitive diagnostic: <em>P. altum</em> has 46–48 lateral line scales; <em>P. scalare</em> has 33–38. This requires close examination but is the only foolproof identification method.</li>
<li><strong>Origin:</strong> True <em>P. altum</em> are collected exclusively from the upper Orinoco/upper Negro drainages. Fish from the Amazon, Essequibo, or any other river system are <em>P. scalare</em> or <em>P. leopoldi</em>, regardless of what the seller claims.</li>
</ul>
<p>Purchase Altum Angelfish only from reputable importers who can verify collection locality. The Fish Collection provides collection-site documentation for every Altum we sell.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascaping</h3>
<p>The defining tank requirement for Altum Angelfish is height. A minimum internal water height of 55 cm (22 inches) is essential to accommodate the species' extraordinary fin span — and 60–70 cm is strongly preferred. Standard 55-gallon tanks (50 cm tall) are marginal; 75-gallon tanks (55 cm tall) are the practical minimum. For a group of 6 adults (the recommended social configuration), a 100–125 gallon tank with dimensions of at least 150 × 45 × 60 cm (length × width × height) is ideal.</p>
<p>Aquascaping should replicate the flooded-forest environment: vertical driftwood branches extending from substrate to near the surface, dense stands of tall <em>Vallisneria</em> or Amazon Swords, and a base layer of Indian almond leaves over fine sand substrate. The leaves serve dual purposes — they provide cover that makes the fish feel secure and they release tannins that acidify and buffer the water. Floating plants (Amazon Frogbit, <em>Ceratopteris</em>) diffuse overhead light and complete the blackwater biotope aesthetic.</p>
<p>Leave ample open swimming space in the mid-water column between driftwood structures. Altum Angelfish are mid-water dwellers that need vertical clearance to extend their fins fully and horizontal space to cruise gracefully through the tank. Overcrowding with décor is as problematic as overcrowding with fish.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Target a turnover rate of 6–8× the tank volume per hour using a canister filter with an emphasis on biological filtration. In the extremely soft, acidic water required for Altum, the biological filter bacteria (Nitrosomonas and Nitrobacter) operate at reduced efficiency — nitrification slows significantly below pH 6.0 and can cease almost entirely below pH 5.0. This means: (a) the biofilter must be oversized to compensate, and (b) stocking density must be conservative to avoid overwhelming the diminished nitrification capacity.</p>
<p>Supplement the canister filter with a large air-driven sponge filter — the sponge provides additional biological surface area that is particularly effective in acidic conditions. Peat filtration (Seachem Peat or equivalent, placed in a filter media bag in the canister) is an excellent addition that releases humic acids, naturally lowers pH, and imparts the tannin staining that characterises blackwater habitats.</p>
<p>Flow should be gentle. Altum Angelfish are adapted to slow-moving or nearly still water and struggle in strong currents. A spray bar distributing flow along the back panel, or a lily pipe outlet creating a gentle circular flow pattern, is ideal. Avoid powerheads or wavemakers.</p>

<h3 id="lighting">Lighting</h3>
<p>Low lighting is essential. In nature, the combination of dense canopy overhead and deeply tannin-stained water means Altum Angelfish live in near-twilight conditions. Bright aquarium lighting causes chronic stress, pale colouration, and hiding behaviour. A dimmable LED at 20–40% intensity, heavily supplemented by floating plant cover, creates the subdued, warm-toned ambience that brings out the best in both the fish and the blackwater aquascape. Tannin-stained water itself acts as a natural light filter, attenuating blue wavelengths and producing the characteristic amber glow of a healthy blackwater biotope.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Water chemistry is the make-or-break factor in Altum Angelfish care. The species demands conditions that most aquarists would consider extreme:</p>
<ul>
<li><strong>Temperature:</strong> 28–30 °C (82–86 °F). Altum prefer significantly warmer water than domestic scalare. The elevated temperature increases metabolic rate and pathogen growth, making excellent water quality even more critical.</li>
<li><strong>pH:</strong> 4.5–6.5. The target range for long-term maintenance is 5.0–6.0. Newly imported wild-caught fish should be maintained at the low end (pH 4.5–5.5) initially and only gradually adjusted upward if necessary.</li>
<li><strong>General Hardness (GH):</strong> 0–3 dGH (0–54 ppm). Near-zero mineral content is the goal. An RO/DI system is virtually mandatory unless your tap water is naturally very soft.</li>
<li><strong>Carbonate Hardness (KH):</strong> 0–1 dKH. At this level, pH stability comes from humic/fulvic acid buffering (from tannins) rather than carbonate buffering. This requires a fundamentally different approach to water chemistry management than most freshwater systems.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm. In acidic water, ammonia exists primarily as the less-toxic ammonium ion (NH₄⁺), but nitrite remains fully toxic regardless of pH. Vigilant monitoring is essential.</li>
<li><strong>Nitrate:</strong> &lt;10 ppm. Keep as low as possible.</li>
<li><strong>Conductivity:</strong> 10–80 µS/cm. This ultra-low conductivity is achieved using pure RO/DI water remineralised with only enough mineral content to support basic physiological function.</li>
</ul>
<p>The practical reality of maintaining these parameters: you need an RO/DI unit producing water at 0 TDS, a reliable pH controller or monitoring system, a steady supply of tannin-producing materials (Indian almond leaves, driftwood, peat), and the discipline to perform frequent small water changes (10–15% twice weekly) with RO water conditioned to match the tank's chemistry. Large, infrequent water changes are dangerous in blackwater systems because they can cause rapid pH swings in the absence of carbonate buffering.</p>

<h2 id="acclimation">Acclimation Protocol</h2>
<p>Acclimation is the single most critical period in the life of a captive Altum Angelfish. The species is notorious for delayed mortality — fish that appear healthy for the first 48–72 hours after arrival can suddenly crash and die over the subsequent 1–2 weeks. This delayed mortality is caused by the cumulative physiological stress of transport and the transition from collection-site water (pH 4.0–5.0, negligible conductivity) to shipping water (which may drift to pH 6.0+ during transit due to CO₂ accumulation and buffering from organic waste).</p>
<p>Our recommended acclimation protocol:</p>
<ul>
<li><strong>1. Prepare the receiving tank:</strong> The tank must be fully cycled and maintained at pH 5.0–5.5, temperature 29 °C, and conductivity below 50 µS/cm before the fish arrive. Do not attempt to acclimate Altum into neutral or alkaline water — this is the single most common cause of import failure.</li>
<li><strong>2. Drip acclimation:</strong> Float the shipping bag for 20 minutes to equalise temperature, then begin a slow drip (2–3 drops per second) from the receiving tank into the bag. Continue for a minimum of 2 hours, extending to 3–4 hours if the shipping water pH differs by more than 1.0 unit from the tank water.</li>
<li><strong>3. Transfer:</strong> Net the fish gently and transfer to the receiving tank. Discard the shipping water — never add it to the tank.</li>
<li><strong>4. Blackout period:</strong> Keep the lights off for the first 48 hours. Minimise all disturbance — do not tap the glass, do not attempt to feed, do not perform maintenance.</li>
<li><strong>5. First feeding:</strong> After 48–72 hours, offer a small amount of live food (blackworms, daphnia). Do not be alarmed if the fish refuse — appetite may take a week to return.</li>
<li><strong>6. Prophylactic treatment:</strong> Many importers recommend a low-dose prophylactic treatment with metronidazole (125 mg per 40 L) and praziquantel (PraziPro at half dose) during the first week to address the internal parasites that are nearly universal in wild-caught Altum. Administer only after the fish have settled and are showing normal posture and fin extension.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Altum Angelfish are carnivorous and strongly prefer live and frozen foods over prepared diets. The key dietary challenge is persuading newly imported wild-caught fish to eat — many will refuse all food for the first 5–10 days after arrival, and some individuals hold out for longer. Patience and the right food offerings are essential.</p>
<p>Optimal dietary components:</p>
<ul>
<li><strong>Live blackworms:</strong> The single most effective food for acclimating new Altum. Place a small cluster on the substrate and allow the fish to graze at their own pace. The worms' natural movement triggers the feeding response even in stressed individuals.</li>
<li><strong>Frozen bloodworms:</strong> The daily staple for established fish. Thaw in a small cup of tank water and release near the group's preferred resting area.</li>
<li><strong>Live daphnia and moina:</strong> Excellent for stimulating feeding in reluctant individuals and providing dietary variety.</li>
<li><strong>Frozen mysis shrimp:</strong> A high-quality protein source readily accepted by acclimated fish.</li>
<li><strong>Frozen brine shrimp:</strong> Supplementary food with lower nutritional density than mysis or bloodworms.</li>
<li><strong>Quality pellets:</strong> Some long-term captive Altum can be trained to accept small sinking pellets (New Life Spectrum Small Fish Formula, Northfin Community). This is a gradual process — begin by mixing a few pellets with frozen bloodworms and increase the ratio over weeks.</li>
</ul>
<p>Feed twice daily in small amounts. Altum are deliberate feeders that pick at food items individually rather than gulping them. Remove uneaten food within 15 minutes to protect water quality. In a well-established blackwater system, a healthy population of microfauna (copepods, ostracods, rotifers) will develop naturally and provide continuous supplemental grazing between scheduled feedings.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Altum Angelfish are gregarious, moderately territorial cichlids that are best kept in groups of 5–8 individuals. In a properly sized tank, the group establishes a loose hierarchy with a dominant pair occupying the central territory and subordinate individuals maintaining respectful distances. Aggression is expressed through lateral displays, fin flaring, and brief chases — serious combat is rare in adequately spaced groups. The species is significantly less aggressive than many Amazonian cichlids and can be characterised as "assertive but civil."</p>
<p>Their behaviour in a well-maintained blackwater aquarium is captivating. The group drifts slowly through the aquascape in a loose formation, fins fully extended, pausing to investigate driftwood surfaces and leaf litter. Dominant individuals develop intensified vertical barring and a reddish-brown dorsal suffusion that deepens with confidence and maturity. Stressed or subordinate fish display pale, washed-out colouration — a clear visual indicator of the group's social dynamics.</p>
<p>Altum are sensitive to environmental disturbance. Sudden lighting changes, loud noises, and unfamiliar movements outside the tank trigger a panic response — the group bolts as a unit and can collide with tank walls or décor, potentially damaging their delicate extended fins. Approach the tank calmly, avoid tapping the glass, and use dawn/dusk ramping on your light timer to prevent the startle response caused by lights switching on abruptly.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must tolerate the extreme water chemistry (pH below 6.0, near-zero hardness) and warm temperatures (28–30 °C) that Altum require. This immediately eliminates most common aquarium species. Compatible options include:</p>
<ul>
<li><strong>Cardinal Tetras (<em>Paracheirodon axelris</em>):</strong> Wild-caught Cardinals from the same blackwater habitats are the quintessential Altum companion — a tight school of 20+ Cardinals creates a stunning biotope display.</li>
<li><strong>Rummynose Tetras (<em>Hemigrammus rhodostomus</em>):</strong> Another soft-water South American tetra that thrives in acidic blackwater conditions.</li>
<li><strong>Corydoras species:</strong> <em>C. sterbai</em> and <em>C. adolfoi</em> tolerate warm, acidic water well and serve as peaceful bottom-zone companions.</li>
<li><strong>Apistogramma species:</strong> Small dwarf cichlids like <em>A. agassizii</em> or <em>A. cacatuoides</em> occupy the bottom-to-mid-water zone and add colour without competing with the Altum's mid-water territory.</li>
<li><strong>Otocinclus:</strong> Gentle algae grazers that tolerate soft, acidic conditions.</li>
</ul>
<p>Avoid any fish that nips fins (Tiger Barbs, Serpae Tetras), aggressive cichlids, and any species that requires hard, alkaline water. Also avoid very small fish (neon tetras under 2 cm) that adult Altum may consume.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding Altum Angelfish in captivity is the holy grail of angelfish keeping — achieved by very few aquarists worldwide. The species is extremely reluctant to spawn under captive conditions, and the handful of successful breeding reports share several common elements: a mature group (4+ years old) in a large, established blackwater system (150+ gallons), pH maintained below 5.5 with conductivity under 30 µS/cm, and a prolonged conditioning period with heavy live-food feeding.</p>
<p>Spawning, when it occurs, follows the typical angelfish pattern: a bonded pair cleans a vertical surface (driftwood, leaf, or tank glass), and the female deposits 100–300 adhesive eggs in neat rows. The male follows, fertilising each row. Both parents guard the spawn aggressively. Eggs hatch in 48–60 hours at 29 °C, and fry become free-swimming approximately 5 days post-hatch.</p>
<p>The primary barrier to captive breeding is pair formation. Altum do not pair reliably in the artificial social environment of an aquarium, and forced pairing (isolating a male and female together) typically results in aggression rather than bonding. The best strategy is to raise a group of 8–10 juveniles to adulthood and allow natural pair bonds to form — a process that requires 4–5 years of patience. Even then, many groups never produce a breeding pair. If you succeed, the accomplishment places you in elite company among freshwater aquarists worldwide.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="acclimation-shock">Acclimation Shock & Import Mortality</h3>
<p>The single greatest health risk for Altum Angelfish is the transition from wild collection to captive conditions. Import mortality rates of 10–30% are considered normal for the species, and post-import losses from delayed acclimation failure can raise cumulative mortality to 40–50% in poorly managed imports. The proximate causes of death are multifactorial: osmotic stress from water chemistry differences, immune suppression in the face of unfamiliar pathogen loads, internal parasite burden that becomes lethal under stress, and simple refusal to eat.</p>
<p>Mitigating import mortality requires: purchasing from reputable importers who maintain proper transport protocols, having the receiving tank perfectly prepared at the appropriate acidic, soft-water chemistry before the fish arrive, following the slow drip-acclimation protocol described above, and resisting the temptation to intervene with medications during the first 48 hours (treatment stress can be worse than the condition being treated during the acute acclimation period). Once Altum survive the first 3–4 weeks in captivity and are feeding consistently, they become remarkably robust and can thrive for well over a decade.</p>

<h3 id="hexamita">Hexamita & Internal Parasites</h3>
<p>Internal parasites — particularly <em>Hexamita</em> (flagellate protozoa) and intestinal nematodes — are nearly universal in wild-caught Altum Angelfish. In the wild, the parasites coexist with the host in a balanced relationship mediated by the immune system and the pathogen-suppressive properties of acidic blackwater. In captivity, particularly if water conditions are sub-optimal, this balance tips in favour of the parasites.</p>
<p><em>Hexamita</em> infection manifests as white, stringy faeces, loss of appetite, emaciation, and — in advanced cases — hole-in-the-head erosion. Treatment with metronidazole (250 mg per 40 L in the water column, or mixed into food at 1% by weight for fish that are still eating) is the standard protocol. Treat for 5 days, then perform a 50% water change. Intestinal nematodes are treated with levamisole (13 mg per gallon, added to the water column) or fenbendazole mixed into food.</p>
<p>Prophylactic deworming during the first 2–4 weeks post-import, once the fish are feeding, is strongly recommended and can prevent the delayed mortality crash that occurs when subclinical parasite loads become clinical under the stress of captive acclimation.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'What is the difference between Altum and regular Angelfish?',
        answer:
          'Altum Angelfish (Pterophyllum altum) and common Angelfish (Pterophyllum scalare) are separate species with significant differences in size, body proportions, water chemistry requirements, and availability. Altum grow much taller (40+ cm fin-to-fin vs. 25–30 cm for scalare), have a distinctive concave notch in the forehead profile, require extremely soft acidic water (pH 4.5–6.5, GH 0–3), and are exclusively wild-caught — they have never been commercially bred in significant numbers. Common scalare tolerate a wide range of water conditions (pH 6.0–8.0, GH 3–15), have been domestically bred for over a century, and are available in dozens of colour varieties (koi, marble, platinum, veil, etc.) that do not exist in Altum. Altum are significantly more challenging and expensive to keep, but their wild elegance and dramatic proportions are unmatched.',
      },
      {
        question: 'How much do Altum Angelfish cost?',
        answer:
          'Wild-caught Altum Angelfish typically range from $30–$80 per fish for juveniles (5–8 cm body length) and $80–$200+ for sub-adults and adults, depending on size, quality, and current availability. Prices fluctuate significantly with seasonal collection patterns — fish are most abundant (and cheapest) during the dry season in the Orinoco basin (January–April) when collection sites are accessible. Premium "show-quality" adults with exceptional fin extension and deep vertical barring can command $300+. Because Altum should be kept in groups of 5–8, budget $200–$600 for a starter group. Factor in the cost of an RO/DI system ($200–$500) if you do not already own one — it is a non-negotiable requirement.',
      },
      {
        question: 'Can Altum Angelfish be bred in captivity?',
        answer:
          'Captive breeding of Altum Angelfish is possible but exceptionally rare. Only a handful of aquarists worldwide have achieved successful reproduction, and consistent, repeatable breeding remains elusive. The barriers include: the species\' reluctance to form pair bonds in captivity, the extremely soft, acidic water chemistry required for egg viability (pH below 5.5, conductivity under 30 µS/cm), the 4–5 year maturation period, and the difficulty of raising sufficient numbers of juveniles to allow natural pair selection. If you are committed to attempting captive breeding, plan for a dedicated 150+ gallon blackwater system, a group of 8–10 juveniles raised from import, and a minimum 5-year timeline before any spawning is likely.',
      },
      {
        question: 'Why do Altum Angelfish die after import?',
        answer:
          'Import mortality in Altum Angelfish is driven by the extreme mismatch between their wild habitat chemistry and standard aquarium conditions. Wild Altum live in water with pH 4.0–5.5, near-zero mineral content, and a pathogen-suppressive chemistry maintained by dissolved humic acids. When transferred to neutral or alkaline aquarium water, they experience osmotic stress, encounter pathogen loads their immune system has never been challenged by, and lose the protective properties of blackwater chemistry — all simultaneously, on top of the physical stress of capture and transport. The solution is to acclimate Altum into water that closely matches their wild conditions (pH 5.0–5.5, near-zero hardness, warm temperature) rather than forcing them to adapt to standard aquarium water. Proper acclimation reduces import mortality from 30–50% to under 10%.',
      },
      {
        question: 'What tank mates go with Altum Angelfish?',
        answer:
          'Tank mates for Altum Angelfish must tolerate the extreme water chemistry requirements: pH below 6.0, near-zero hardness, and temperatures of 28–30 °C. This limits options to soft-water South American species. The best companions are Cardinal Tetras (wild-caught, from the same blackwater habitats), Rummynose Tetras, warm-water Corydoras species (C. sterbai, C. adolfoi), small Apistogramma dwarf cichlids, and Otocinclus. A school of 20+ Cardinal Tetras with a group of 6 Altum in a blackwater aquascape is widely considered one of the most stunning freshwater displays achievable. Avoid fin-nipping species, fish that require hard alkaline water, and aggressive cichlids of any kind.',
      },
    ],
    sources: [
      {
        title: 'Pterophyllum altum (Pellegrin, 1903)',
        url: 'https://www.fishbase.se/summary/Pterophyllum-altum.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Phylogenetic Relationships of the Angelfish Genus Pterophyllum (Cichlidae)',
        url: 'https://doi.org/10.1111/jfb.12697',
        publisher: 'Journal of Fish Biology',
      },
      {
        title:
          'Water Chemistry and Fish Community Structure in Blackwater Rivers of the Orinoco Basin',
        url: 'https://doi.org/10.1007/s10750-006-0329-5',
        publisher: 'Hydrobiologia',
      },
      {
        title:
          'Humic Substances as Natural Immunostimulants for Freshwater Fish',
        url: 'https://doi.org/10.1016/j.fsi.2015.06.025',
        publisher: 'Fish & Shellfish Immunology',
      },
    ],
    relatedSlugs: [
      'blue-diamond-discus',
      'blue-zaire-frontosa',
      'elephantnose-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 21. Discus Fish
  // ─────────────────────────────────────────────
  {
    title: 'Discus Fish (Symphysodon aequifasciatus): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'discus-fish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/discus-fish-hero.jpg',
    heroImageAlt:
      'Vibrant wild-type Discus displaying rich brown and blue vertical barring in a planted blackwater aquarium',
    metaTitle:
      'Discus Fish Care Guide: Tank Setup, Diet & Water Tips',
    metaDescription:
      'Expert Discus fish care guide covering tank size, water parameters, diet, breeding & tank mates. Proven advice from The Fish Collection\'s specialist aquarists.',
    quickAnswerQuestion:
      'What do Discus fish need to thrive in a home aquarium?',
    quickAnswer:
      'Discus require a minimum 75-gallon tall aquarium with pristine, soft acidic water (pH 5.5–7.0, 28–30 °C) and daily water changes of 25–50%. They are social cichlids best kept in groups of six or more and fed a high-protein diet of beef heart mix, frozen bloodworms, and quality granules.',
    summary:
      'The Discus (Symphysodon aequifasciatus) is widely regarded as the king of the freshwater aquarium hobby — a laterally compressed South American cichlid prized for its disc-shaped body, vivid colour morphs, and complex social behaviour. Native to the floodplain lakes and calm tributaries of the Amazon basin, Discus demand warm, soft, acidic water and impeccable husbandry. This comprehensive guide draws on The Fish Collection\'s decade-plus experience importing and conditioning wild-caught and captive-bred Discus to deliver practical, expert-level care advice for beginners and advanced keepers alike.',
    scientificName: 'Symphysodon aequifasciatus',
    category: 'discus',
    keyFacts: [
      { label: 'Scientific Name', value: 'Symphysodon aequifasciatus' },
      { label: 'Max Size', value: '20 cm (8 in)' },
      { label: 'Tank Size', value: '75 gallons (285 L) minimum for a group' },
      { label: 'Temperature', value: '28–30 °C (82–86 °F)' },
      { label: 'pH', value: '5.5–7.0' },
      { label: 'Care Level', value: 'Advanced' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Omnivore — high-protein prepared and frozen foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'hole-in-the-head', text: 'Hole-in-the-Head Disease', level: 3 },
      { id: 'internal-parasites', text: 'Internal Parasites', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>Few freshwater fish command the reverence afforded to the Discus (<em>Symphysodon aequifasciatus</em>). Originating from the slow-moving tributaries, floodplain lakes, and oxbow lagoons of the Amazon River basin, these laterally compressed <a href="/exotic-fish/discus/">cichlids</a> have earned the title "King of the Aquarium" through a combination of striking disc-shaped morphology, an extraordinary palette of colour variants, and a social intelligence rarely seen outside of marine species. Three recognised species within the genus <em>Symphysodon</em> — <em>S. aequifasciatus</em> (green/brown Discus), <em>S. discus</em> (Heckel Discus), and <em>S. tarzoo</em> (blue Discus) — form the genetic foundation for hundreds of selectively bred colour morphs now available in the hobby.</p>
<p>At The Fish Collection, we have imported wild-caught Discus from Tefé, Manacapuru, and the Rio Negro drainage since 2013, and we maintain conditioning protocols for both wild and domestic strains. The species' reputation as "difficult" is only partly deserved: Discus are not fragile, but they are <em>unforgiving</em> of inconsistency. Stable water chemistry, a disciplined water-change regimen, and a protein-rich diet are the three pillars of successful Discus keeping. Deviate from any one of them, and the fish will let you know — through colour fade, appetite loss, and susceptibility to opportunistic pathogens.</p>
<p>This guide provides a comprehensive framework for keeping <a href="/species/discus-fish/">Discus</a> in the home aquarium, from selecting healthy stock through to breeding pairs and raising fry. Whether you are setting up your first Discus tank or refining an established colony, every recommendation below is grounded in hands-on practice, not forum lore.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild Discus inhabit the lentic and slow-lotic waters of the greater Amazon drainage, with the highest population densities found along the central and lower Amazon — particularly the Rio Negro, Rio Madeira, and the Lake Tefé complex. These blackwater and clearwater habitats share several defining characteristics: extremely low mineral content (TDS often below 30 ppm), acidic pH ranging from 4.5 to 6.8 depending on season, and temperatures that hover between 28 °C and 32 °C year-round.</p>
<p>Discus favour areas with submerged root tangles, fallen hardwood branches, and overhanging riparian vegetation that provides shade and refuge from aerial predators. The substrate is typically fine sand blanketed by decomposing leaf litter, which leaches tannins and humic acids into the water column and contributes to the characteristic tea-brown colouration of blackwater rivers. Light penetration in these environments is minimal — an important consideration when designing aquarium lighting.</p>
<p>Seasonally, the Amazon basin experiences dramatic flood cycles. During the wet season (December–May), water levels can rise 10–15 metres, inundating the surrounding <em>várzea</em> and <em>igapó</em> forests and dispersing Discus into shallow, food-rich floodplain habitats. The dry season concentrates fish into deeper pools where competition intensifies and social hierarchies become more rigid. This seasonal fluctuation likely drives the species' strong social bonding behaviour and hierarchical group structure, traits that persist in captivity and make group housing essential for psychological well-being.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>Discus are a shoaling cichlid that must be kept in groups of six or more to diffuse aggression and allow natural social hierarchies to form. For a group of six adults, a 75-gallon (285 L) aquarium is the working minimum, with dimensions of at least 120 cm long × 45 cm wide × 50 cm tall (48 × 18 × 20 inches). Because Discus are deep-bodied fish that occupy the mid-water column, tank height matters more than it does for most freshwater species — aim for a minimum internal height of 50 cm.</p>
<p>For groups of eight to twelve, step up to a 125-gallon (475 L) system measuring 180 × 50 × 55 cm. This provides the swimming volume needed to prevent territorial compression while also creating enough visual barriers for subordinate fish to escape dominant individuals. Furnish the tank with vertically oriented driftwood pieces (Malaysian bogwood, Manzanita) and broad-leaved plants such as Amazon swords (<em>Echinodorus</em> spp.), Anubias, and Java fern. Avoid sharp decorations that could damage the Discus' delicate lateral skin.</p>
<p>Many experienced Discus keepers opt for bare-bottom or thin-sand-substrate tanks to facilitate the aggressive cleaning regimen the species demands. Bare bottoms allow uneaten food and waste to be siphoned easily during daily water changes. If aesthetics are a priority, a 1–2 cm layer of fine pool-filter sand is acceptable, but avoid gravel deeper than 3 cm, which traps detritus and creates anaerobic pockets.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Biological filtration should deliver a turnover rate of 6–8× the tank volume per hour. For a 75-gallon system, that translates to a combined pump output of roughly 1,700–2,300 litres per hour. A large canister filter (Fluval FX4/FX6 or Eheim 2262) paired with a sponge pre-filter is the most common setup. Sump-based systems are superior for larger colonies because they increase total water volume and centralise equipment, but they introduce additional plumbing that must be leak-proofed — Discus keepers change water daily, and every connection is a potential failure point.</p>
<p>Flow must be gentle. Discus are not strong swimmers and will become stressed in high-current environments. Direct the filter outlet along the back glass or use a spray bar to diffuse flow across the tank length. Surface agitation should be sufficient for gas exchange but not so vigorous that it creates visible rippling — Discus prefer calm, almost still water.</p>

<h3 id="lighting">Lighting</h3>
<p>Moderate lighting in the 6,500–7,500 K colour temperature range displays Discus colouration accurately without the intensity that causes washed-out pigmentation. A dimmable LED fixture set to 40–60% output on a 7–9 hour photoperiod works well. Floating plants (<em>Salvinia</em>, <em>Amazon frogbit</em>) can be used to create dappled shade zones that mimic the natural canopy cover Discus are accustomed to. Avoid metal halides and high-output T5 fixtures positioned too close to the water surface — the heat output can destabilise tank temperature.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Water quality is the single most important factor in Discus husbandry. These fish evolved in some of the cleanest, most mineral-poor freshwater environments on Earth, and they remain physiologically adapted to those conditions. Target the following parameters:</p>
<ul>
<li><strong>Temperature:</strong> 28–30 °C (82–86 °F). This is non-negotiable. Discus kept below 27 °C become lethargic, refuse food, and develop suppressed immune function. Use a reliable inline or titanium heater with a digital controller accurate to ±0.5 °C.</li>
<li><strong>pH:</strong> 5.5–7.0. Wild-caught Discus from blackwater localities may require pH below 6.0, while tank-bred Asian strains tolerate up to 7.0. Stability is paramount — a steady pH of 6.8 is far safer than oscillating between 5.5 and 6.5.</li>
<li><strong>General Hardness (GH):</strong> 1–8 dGH (18–140 ppm). Soft water is preferred; very hard water (&gt;12 dGH) inhibits mucus coat health.</li>
<li><strong>KH:</strong> 1–4 dKH. Buffer with crushed coral or sodium bicarbonate only if your KH drops below 1 dKH, which risks pH crashes.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;10 ppm. Discus are more sensitive to nitrate accumulation than most tropical fish. This is why daily or every-other-day water changes of 25–50% are standard practice in dedicated Discus tanks.</li>
<li><strong>TDS:</strong> 50–200 ppm. An RO/DI unit is essential if your tap water exceeds 250 ppm TDS.</li>
</ul>
<p>The daily water-change regimen is the aspect of Discus keeping that deters most hobbyists. It is, however, the single practice that separates thriving Discus from merely surviving ones. Automate the process with a drip system connected to an RO reservoir, or commit to manual changes with temperature-matched, dechlorinated water. There is no shortcut.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Discus are omnivores with a strong preference for protein-rich foods. In the wild, they graze on algal biofilms, small invertebrates, detritus, and the mucus secretions of conspecifics (fry feed exclusively on parental mucus for the first two weeks of life). In captivity, a varied diet promotes vivid colouration, robust immune function, and breeding condition.</p>
<p>A proven feeding schedule for adult Discus (10+ cm) includes:</p>
<ul>
<li><strong>Morning:</strong> Frozen bloodworms (Hikari or San Francisco Bay Brand — gamma-irradiated to reduce parasite risk) or frozen brine shrimp enriched with Spirulina.</li>
<li><strong>Midday:</strong> High-quality Discus granules — Sera Discus Granules, Tetra Prima, or NorthFin Discus Formula. Soak pellets for 30 seconds before feeding to prevent air ingestion.</li>
<li><strong>Evening:</strong> Homemade beef heart mix (lean beef heart blended with prawns, spinach, garlic, paprika, and multivitamin supplement, frozen in flat sheets and broken into portions). Despite controversy in online forums, beef heart remains the cornerstone diet of virtually every award-winning Discus breeder in Asia and Europe.</li>
</ul>
<p>Feed two to three times daily, offering only what the group consumes within 3–5 minutes. Remove uneaten food promptly. Juveniles (under 8 cm) should be fed four to five times daily to support rapid growth — underfeeding juveniles is the most common cause of stunted Discus in the hobby. Supplement once weekly with blanched spinach or zucchini to provide dietary fibre.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Discus are social, hierarchical cichlids that form stable dominance structures within their group. A well-established colony will have one or two dominant individuals who feed first and claim preferred positions in the tank, with subordinate fish arranging themselves accordingly. This hierarchy is normal and beneficial — it reduces overall aggression by establishing clear social roles.</p>
<p>Problems arise when group sizes are too small. In groups of fewer than six, dominant individuals concentrate aggression on one or two subordinates, which can lead to chronic stress, colour darkening, appetite loss, and eventual death. The solution is always to increase group size, not decrease it. If a fish is being bullied, add more Discus to diffuse the aggression rather than removing the victim (which simply redirects bullying to the next-lowest-ranking individual).</p>
<p>Discus communicate through body language: colour intensity, fin posture, lateral displays, and head-down threat postures. Darkening of the vertical bars typically indicates stress or submission, while vibrant, evenly coloured fish with erect dorsal fins are dominant and healthy. Learning to read these signals allows you to identify problems before they become clinical.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must tolerate the high temperatures (28–30 °C) Discus require and must not be fin-nippers, food competitors, or disease vectors. Proven companions include:</p>
<ul>
<li><strong>Cardinal Tetras</strong> (<em>Paracheirodon axelrodi</em>) — The classic Discus dither fish. Keep in schools of 20+ for the best visual effect and natural behaviour.</li>
<li><strong>Rummy-Nose Tetras</strong> (<em>Hemigrammus rhodostomus</em>) — Excellent temperature-compatible schooling fish that also serve as water-quality indicators (their nose colouration fades in poor conditions).</li>
<li><strong>Corydoras sterbai</strong> — One of the few Corydoras species comfortable above 28 °C. Keeps the substrate clean without disturbing Discus.</li>
<li><strong>Bristlenose Pleco</strong> (<em>Ancistrus</em> spp.) — Useful algae control, though monitor for nocturnal latching onto Discus flanks.</li>
<li><strong>Ram Cichlids</strong> (<em>Mikrogeophagus ramirezi</em>) — Share identical water parameter preferences and occupy the lower water column.</li>
</ul>
<p>Avoid Angels (<em>Pterophyllum</em>), which carry and transmit pathogens that Discus are particularly susceptible to. Also avoid barbs, larger cichlids, and any fast-moving species that will outcompete Discus at feeding time.</p>

<h2 id="breeding">Breeding</h2>
<p>Discus are biparental substrate spawners. A bonded pair will clean a vertical surface — typically a broad leaf, a piece of slate, or the aquarium glass — and deposit 100–400 adhesive eggs in neat rows. Both parents guard the clutch, fanning the eggs to maintain oxygenation and removing any that develop fungus. Eggs hatch in approximately 48–60 hours at 30 °C, and the wrigglers remain attached to the spawning surface via adhesive head glands for an additional 48–72 hours before becoming free-swimming.</p>
<p>The most remarkable aspect of Discus reproduction is parental mucus feeding. For the first 10–14 days after becoming free-swimming, fry attach to the flanks of both parents and feed on a nutrient-rich mucus secretion produced by specialised epidermal cells. This behaviour is obligatory — fry cannot be raised successfully without parental mucus during this critical window (though some breeders have developed artificial mucus-substitute protocols with mixed results).</p>
<p>To trigger spawning, condition the pair with high-protein feeds (bloodworms, beef heart) for two to three weeks, then perform a 50% water change with slightly cooler (26 °C), very soft (1–2 dGH) RO water to simulate the onset of the rainy season. Raise temperature to 30–31 °C. Most pairs will spawn within 48–96 hours of this conditioning protocol. Separate the breeding pair into a dedicated 40–50 gallon tank with a sponge filter and a spawning cone or vertical slate — this prevents egg predation by tank mates and reduces parental stress.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="hole-in-the-head">Hole-in-the-Head Disease</h3>
<p>Hole-in-the-head (HITH), also called head and lateral line erosion (HLLE), presents as pitted lesions on the head and along the sensory lateral line. The condition is multifactorial: the flagellate protozoan <em>Hexamita</em> is frequently implicated, but nutritional deficiency (particularly vitamins C and D), poor water quality, and activated carbon use have all been correlated with outbreaks. Treatment involves metronidazole (250 mg per 40 litres, repeated every 48 hours for three doses) combined with improved diet and water-change frequency. Remove activated carbon from filtration during treatment.</p>

<h3 id="internal-parasites">Internal Parasites</h3>
<p>Wild-caught Discus almost universally harbour intestinal flagellates (<em>Hexamita</em>, <em>Spironucleus</em>) and nematodes (<em>Capillaria</em>). Symptoms include white, stringy faeces, appetite loss, and progressive emaciation despite feeding. Prophylactic deworming with levamisole (13 mg/L bath for 24 hours) followed by a metronidazole course is standard quarantine protocol for new arrivals. Captive-bred Discus from reputable farms are less likely to carry heavy parasite loads but should still be quarantined for a minimum of four weeks before introduction to an established colony.</p>
<p>Other conditions to monitor include bacterial gill disease (often triggered by ammonia spikes), <em>Ichthyophthirius</em> (white spot — treat by raising temperature to 32 °C and adding 2 g/L aquarium salt for 10 days), and Discus plague, a poorly characterised viral condition that causes rapid darkening, mucus overproduction, and high mortality in newly mixed groups. The best prevention for all pathologies is strict quarantine, stable water chemistry, and a robust immune system maintained through proper nutrition.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How many Discus should I keep together?',
        answer:
          'Discus are obligate social cichlids that must be kept in groups of six or more. Groups smaller than six result in concentrated aggression from dominant individuals, causing chronic stress, colour darkening, appetite loss, and immune suppression in subordinate fish. In a 75-gallon aquarium, six is the practical minimum; for tanks of 125 gallons or larger, groups of eight to twelve create the most stable social dynamics and produce the most natural behaviour. Never keep Discus in pairs unless they are a bonded breeding pair isolated in a dedicated spawning tank.',
      },
      {
        question: 'Do Discus really need daily water changes?',
        answer:
          'For optimal health and colouration, yes — daily or every-other-day water changes of 25–50% are the gold standard in dedicated Discus keeping. Discus evolved in exceptionally clean Amazonian waters with near-zero nitrate, and they remain physiologically sensitive to dissolved waste accumulation. Daily changes keep nitrate below 10 ppm, replenish trace minerals, and maintain the stable chemistry Discus require. Some advanced hobbyists with heavily planted, understocked tanks and oversized filtration can reduce frequency to three times weekly, but this requires diligent water testing.',
      },
      {
        question: 'Can Discus live with Angelfish?',
        answer:
          'While Discus and Angelfish share similar water parameter preferences and are both South American cichlids, housing them together is generally advised against by experienced Discus keepers. Angelfish are known carriers of several pathogens — including intestinal flagellates and viral agents — to which Discus are particularly susceptible. Angelfish are also more aggressive feeders and will outcompete Discus at mealtimes. If you insist on mixing the two, quarantine Angelfish for six weeks with prophylactic antiparasitic treatment, and ensure the tank is large enough (150+ gallons) to minimise territorial overlap.',
      },
      {
        question: 'What temperature do Discus need?',
        answer:
          'Discus require consistently warm water between 28–30 °C (82–86 °F), which is significantly higher than what most tropical community fish prefer. This elevated temperature is essential for proper metabolism, immune function, and digestive efficiency. Temperatures below 27 °C cause lethargy, appetite suppression, and increased vulnerability to disease. Use a high-quality digital heater controller with ±0.5 °C accuracy, and always have a backup heater in case of primary failure. The high temperature requirement limits compatible tank mates to species that tolerate the upper tropical range.',
      },
      {
        question: 'What do Discus fish eat?',
        answer:
          'Discus thrive on a varied, protein-rich diet. The three staple food categories are: frozen foods (bloodworms, brine shrimp, Mysis shrimp), high-quality Discus-specific granules (Sera, NorthFin, Tetra Prima), and homemade beef heart mix — lean beef heart blended with shrimp, spinach, garlic, and vitamins, then frozen and portioned. Feed adults two to three times daily and juveniles four to five times daily. Supplement weekly with blanched vegetables for fibre. Avoid tubifex worms (disease risk) and low-quality flake foods that lack the protein density Discus need for vibrant colouration and immune health.',
      },
      {
        question: 'How long do Discus fish live?',
        answer:
          'With proper care, Discus live 10–15 years in captivity, with some specimens reaching 18 years under exceptional conditions. Lifespan is directly correlated with water quality consistency, diet variety, group social stability, and the genetic quality of the stock. Discus from reputable breeders who prioritise health and vigour over extreme colour morphs tend to live longer than heavily inbred ornamental strains. The most common causes of premature death are chronic low-level nitrate exposure, inadequate temperature, untreated internal parasites, and social stress from improper group sizes.',
      },
    ],
    sources: [
      {
        title: 'Symphysodon aequifasciatus (Pellegrin, 1904)',
        url: 'https://www.fishbase.se/summary/Symphysodon-aequifasciatus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Parental Mucus Feeding in Discus Fish: Composition and Immune Function',
        url: 'https://doi.org/10.1111/jfb.12684',
        publisher: 'Journal of Fish Biology',
      },
      {
        title:
          'Water Quality Requirements for Symphysodon spp. in Captive Environments',
        url: 'https://doi.org/10.1016/j.aquaculture.2019.734442',
        publisher: 'Aquaculture',
      },
      {
        title:
          'Phylogeography and Taxonomy of Symphysodon (Perciformes: Cichlidae)',
        url: 'https://doi.org/10.1007/s10750-013-1597-y',
        publisher: 'Hydrobiologia',
      },
      {
        title:
          'Hexamita and Hole-in-the-Head Disease in Ornamental Cichlids',
        url: 'https://doi.org/10.1111/jfd.12531',
        publisher: 'Journal of Fish Diseases',
      },
    ],
    relatedSlugs: [
      'blue-diamond-discus',
      'flowerhorn-cichlid',
      'peacock-bass',
      'clown-loach',
    ],
  },

  // ─────────────────────────────────────────────
  // 22. Dragon Goby
  // ─────────────────────────────────────────────
  {
    title: 'Dragon Goby (Gobioides broussonnetii): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'dragon-goby',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/dragon-goby-hero.jpg',
    heroImageAlt:
      'Adult Dragon Goby resting on sandy substrate showing its elongated iridescent purple-blue body and prominent jaw',
    metaTitle:
      'Dragon Goby Care Guide: Brackish Tank & Diet Tips',
    metaDescription:
      'Complete Dragon Goby care guide — brackish setup, water parameters, diet & tank mates. Expert advice for Gobioides broussonnetii from The Fish Collection.',
    quickAnswerQuestion:
      'How do you care for a Dragon Goby?',
    quickAnswer:
      'Dragon Gobies need a long, 50+ gallon brackish aquarium (SG 1.005–1.015) with a deep sand substrate for burrowing, gentle filtration, and dim lighting. Despite their fearsome appearance, they are docile filter feeders that thrive on sinking pellets, frozen bloodworms, and fine particulate foods.',
    summary:
      'The Dragon Goby (Gobioides broussonnetii), also known as the Violet Goby, is one of the most misunderstood fish in the aquarium trade. Frequently sold as an aggressive freshwater predator, it is in fact a gentle, nearly blind brackish-water filter feeder that sifts sand for microorganisms and detritus. Reaching up to 60 cm in captivity, its elongated eel-like body, iridescent purple-blue scales, and prominent underslung jaw give it a prehistoric, dragonesque appearance that belies its peaceful disposition. This guide covers the specific brackish water requirements, substrate needs, diet strategies, and tank mate selection that make Dragon Goby keeping successful.',
    scientificName: 'Gobioides broussonnetii',
    category: 'goby',
    keyFacts: [
      { label: 'Scientific Name', value: 'Gobioides broussonnetii' },
      { label: 'Max Size', value: '60 cm (24 in)' },
      { label: 'Tank Size', value: '50 gallons (190 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '7.5–8.5' },
      { label: 'Specific Gravity', value: '1.005–1.015' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '8–10 years' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Substrate', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'osmotic-stress', text: 'Osmotic Stress', level: 3 },
      { id: 'bacterial-infections', text: 'Bacterial Infections', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Dragon Goby (<em>Gobioides broussonnetii</em>), commonly marketed as the Violet Goby or Dragon Fish, is a brackish-water <a href="/exotic-fish/goby/">goby</a> native to the Atlantic coastal estuaries and mangrove systems of the Americas. It is one of the most consistently misrepresented species in the aquarium trade — pet shops routinely house it in freshwater community tanks and market it as an aggressive predator, when in reality it is a gentle, poor-sighted filter feeder that requires brackish conditions to thrive long-term.</p>
<p>Reaching up to 60 cm (24 inches) in captivity — and occasionally larger in the wild — the Dragon Goby possesses an elongated, laterally compressed body covered in small, iridescent scales that shimmer violet-blue under appropriate lighting. Its most striking feature is a wide, undershot jaw lined with multiple rows of tiny, comb-like teeth adapted not for predation but for sifting fine substrate particles and trapping microscopic food organisms. The small, vestigial eyes confirm its reliance on sensory barbels and lateral line detection rather than vision.</p>
<p>At The Fish Collection, we have maintained <a href="/species/dragon-goby/">Dragon Gobies</a> in purpose-built brackish systems since 2015 and have observed firsthand how dramatically their health and longevity improve when kept in proper salinity versus the freshwater conditions most hobbyists provide. This guide distils that experience into a practical care manual that addresses the species' actual needs rather than the myths surrounding it.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Gobioides broussonnetii</em> are found along the western Atlantic coast from Georgia (USA) south through the Gulf of Mexico, the Caribbean, and down to Brazil. They inhabit estuarine environments — the transitional zones where freshwater rivers meet tidal saltwater — including mangrove root systems, tidal mudflats, brackish lagoons, and the lower reaches of coastal rivers where salinity fluctuates with the tides.</p>
<p>These habitats are characterised by soft, silty-sand substrates rich in organic detritus and microfauna. Salinity varies from nearly fresh (SG 1.001) at low tide during rainy season to moderately saline (SG 1.020) at high tide during dry season. The fish are euryhaline — physiologically capable of tolerating a wide salinity range — but they spend the majority of their time in the intermediate brackish zone (SG 1.005–1.015). Water in these estuaries is typically warm (24–30 °C), alkaline (pH 7.5–8.5), and moderately hard, with high turbidity that limits visibility to centimetres.</p>
<p>Dragon Gobies are burrowers. They excavate shallow tunnels in soft substrate, retreating into these during daylight hours and emerging at dusk to feed. Their poor eyesight is perfectly adapted to the turbid, low-visibility conditions of estuarine mudflats where visual acuity offers no advantage. Understanding this crepuscular, fossorial lifestyle is essential to designing an appropriate captive environment.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Substrate</h3>
<p>A single adult Dragon Goby requires a minimum 50-gallon (190 L) aquarium, with a strong preference for long, shallow designs — a 48 × 18 × 16 inch (120 × 45 × 40 cm) footprint is ideal. These are benthic fish that rarely venture more than 10 cm above the substrate, so floor space matters far more than water height. For a pair, step up to 75 gallons; for a small group of three, 100+ gallons is necessary to provide adequate burrowing territory.</p>
<p>Substrate selection is critical and non-negotiable. Dragon Gobies must have fine, soft sand — play sand, pool-filter sand, or aragonite sand (which also buffers pH upward). The sand bed should be 7–10 cm deep to allow burrowing. Never use gravel: the fish will attempt to sift it, damaging their delicate mouth tissues and causing bacterial infections that can be fatal. PVC pipe sections (5–7 cm diameter) half-buried in the sand provide additional refuges and reduce territorial stress in multi-goby setups.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Filtration must handle the salt content and the biological load of a protein-rich diet. A hang-on-back or canister filter rated for 6–8× the tank volume per hour is sufficient. Marine-grade bio-media (ceramic rings, MarinePure blocks) colonise appropriate bacterial strains for brackish nitrogen cycling. Avoid under-gravel filters, which do not function well in deep sand beds and create anaerobic pockets. A protein skimmer is optional at SG 1.010+ and becomes increasingly effective as salinity rises.</p>
<p>Flow should be moderate and primarily directed along the back wall. Dragon Gobies are not strong swimmers and will struggle in high-flow environments. A gentle, diffused return — via spray bar or lily pipe — creates enough circulation for gas exchange without stressing the fish. Turnover of 5–6× per hour at substrate level is ideal.</p>

<h3 id="lighting">Lighting</h3>
<p>Dragon Gobies are crepuscular to nocturnal and strongly prefer dim conditions. Standard aquarium LEDs at 30–40% intensity on a 6–8 hour photoperiod are more than sufficient. Moonlight-mode LEDs (blue/red spectrum at very low intensity) allow observation of natural evening feeding behaviour without disturbing the fish. If you keep live plants (Java fern, Anubias, and <em>Vallisneria</em> tolerate low-to-moderate brackish conditions), position them to create shaded zones over the primary burrowing area.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>The single most common husbandry failure with Dragon Gobies is keeping them in pure freshwater. While they can survive in fresh for months or even years, their immune function, appetite, and colouration steadily deteriorate without salt. Target the following parameters for long-term health:</p>
<ul>
<li><strong>Specific Gravity:</strong> 1.005–1.015. Use marine salt mix (Instant Ocean, Red Sea Coral Pro) — never aquarium "tonic" salt, which lacks the full mineral profile. Measure with a refractometer, not a hydrometer.</li>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). A standard aquarium heater is fine; no special equipment needed.</li>
<li><strong>pH:</strong> 7.5–8.5. The marine salt mix naturally buffers pH into the alkaline range.</li>
<li><strong>GH:</strong> 10–25 dGH. Brackish conditions inherently produce moderate-to-high hardness.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm. Cycle the tank fully before adding Dragon Gobies — they are sensitive to new-tank syndrome.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. Weekly 20–25% water changes with pre-mixed brackish water of matching salinity and temperature.</li>
</ul>
<p>When performing water changes, always pre-mix the replacement water in a separate container, matching both temperature and salinity before adding it to the tank. Sudden salinity swings of more than 0.003 SG can trigger osmotic shock, which manifests as rapid breathing, erratic swimming, and — in severe cases — organ failure.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Dragon Gobies are not predators. Their primary natural feeding strategy is sifting — they scoop mouthfuls of fine substrate, extract microorganisms (copepods, nematodes, diatoms) and organic detritus, and expel the cleaned sand through their gill plates. In captivity, this behaviour must be accommodated by providing foods that settle into or onto the sand bed.</p>
<p>An effective feeding regimen includes:</p>
<ul>
<li><strong>Sinking pellets:</strong> Hikari Sinking Wafers, New Life Spectrum Small Fish Formula, or Fluval Bug Bites (bottom feeder formula). Crush pellets to 1–2 mm pieces for easier consumption.</li>
<li><strong>Frozen foods:</strong> Bloodworms, brine shrimp, Mysis shrimp, and daphnia — thawed and target-fed near the fish's burrow entrance using a pipette or turkey baster.</li>
<li><strong>Live foods:</strong> Baby brine shrimp (for juveniles), blackworms, and microworms scattered onto the sand surface provide excellent enrichment and replicate natural foraging behaviour.</li>
<li><strong>Supplementary:</strong> Spirulina flakes or powder, blanched zucchini medallions, and algae wafers provide plant-based nutrition.</li>
</ul>
<p>Feed after lights-out, when Dragon Gobies are most active and confident. In community tanks, they are easily outcompeted by faster, more visual feeders — target feeding with a pipette directly at the goby's location is essential to ensure adequate intake. Feed daily; these fish have high metabolisms relative to their appearance and will lose condition quickly if underfed.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Despite the fearsome common name and menacing jaw, Dragon Gobies are among the most peaceful large fish available in the aquarium hobby. They are almost entirely non-aggressive toward tank mates and will actively avoid confrontation. Their poor eyesight means they are often unaware of other fish unless physical contact occurs. When startled, their first instinct is to retreat into a burrow or press flat against the substrate.</p>
<p>Conspecific behaviour is generally tolerant in tanks with adequate space and burrowing territory. Multiple Dragon Gobies will establish loosely defined territories centred on their preferred burrow sites, with occasional mild jaw-flaring displays at boundaries. These interactions are ritualised and rarely result in physical contact. In tanks with insufficient hiding spots, however, subordinate individuals may be excluded from feeding areas and gradually starve.</p>
<p>Dragon Gobies are most active during the evening and nighttime hours. Keepers who only observe their tank during daytime may wrongly conclude the fish is inactive or sickly. Installing dim moonlight LEDs reveals a surprisingly active, methodical forager that systematically works across the sand bed throughout the night.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must tolerate brackish conditions (SG 1.005–1.015) and must not be aggressive enough to bully the gentle, vision-impaired goby. Suitable companions include:</p>
<ul>
<li><strong>Mollies</strong> (<em>Poecilia</em> spp.) — Thrive in brackish water and occupy the mid-to-upper water column. A school of sailfin mollies is the classic Dragon Goby companion.</li>
<li><strong>Bumblebee Gobies</strong> (<em>Brachygobius</em> spp.) — Small, peaceful brackish gobies that occupy different microhabitats.</li>
<li><strong>Knight Gobies</strong> (<em>Stigmatogobius sadanundio</em>) — Hardy brackish species, though slightly territorial; provide ample rockwork.</li>
<li><strong>Figure Eight Puffers</strong> (<em>Dichotomyctere ocellatus</em>) — Compatible salinity range, though monitor for fin-nipping.</li>
<li><strong>Archerfish</strong> (<em>Toxotes jaculatrix</em>) — Surface-dwelling brackish species that ignores bottom-dwelling gobies entirely.</li>
</ul>
<p>Avoid aggressive cichlids, large predatory fish, and anything that might target the goby's elongated, vulnerable body. Also avoid species that require strict freshwater (most tetras, barbs, Corydoras) — the brackish conditions that keep Dragon Gobies healthy will stress obligate freshwater species.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of <em>Gobioides broussonnetii</em> is extremely rare and poorly documented. In the wild, spawning is believed to occur in deeper estuarine channels during seasonal salinity shifts. Males reportedly excavate elaborate burrow systems and court females with body-waving displays. The eggs are adhesive and deposited on the burrow ceiling, where the male guards and fans them until hatching.</p>
<p>The few successful captive spawning reports describe pairs conditioned in SG 1.008–1.012 at 26–28 °C, with a gradual salinity reduction to SG 1.003–1.005 over two weeks to simulate seasonal freshwater influx, followed by a gradual return to full brackish. Eggs hatched in approximately 36–48 hours, producing tiny, planktonic larvae that required infusoria and rotifers as first food. Larval survival rates were extremely low, and no commercial-scale breeding protocol exists. All Dragon Gobies in the aquarium trade are wild-caught, which underscores the importance of providing optimal captive conditions to justify their collection.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="osmotic-stress">Osmotic Stress</h3>
<p>The most common health problem in captive Dragon Gobies is chronic osmotic stress caused by maintenance in pure freshwater. Symptoms develop gradually: dulling of the iridescent colouration, increased mucus production, lethargy, appetite loss, and progressive immune suppression that makes the fish vulnerable to secondary bacterial and fungal infections. The solution is simple — transition the fish to proper brackish conditions (SG 1.005–1.010) gradually over 7–10 days, increasing salinity by no more than 0.002 SG per day. Most individuals show dramatic improvement in colour and activity within two weeks of reaching target salinity.</p>

<h3 id="bacterial-infections">Bacterial Infections</h3>
<p>Jaw and mouth infections are common in Dragon Gobies housed on inappropriate substrates. Gravel, sharp sand, or crusite damage the delicate oral tissues during sifting behaviour, creating entry points for opportunistic bacteria (<em>Aeromonas</em>, <em>Pseudomonas</em>). Symptoms include swollen or reddened jaw, refusal to feed, and white cottony patches around the mouth. Treatment involves switching to fine sand immediately, dosing the tank with a broad-spectrum antibiotic (kanamycin or nitrofurazone), and adding marine salt to at least SG 1.005 if the fish is currently in freshwater — the mild salinity itself has antibacterial properties. Prevent recurrence by ensuring the substrate is uniformly fine and free of sharp particles.</p>
<p>Other conditions include ich (treat with raised temperature to 30 °C plus 3 g/L marine salt — most ich medications are unsafe for scaleless or small-scaled fish), and internal parasites from wild-caught specimens (treat with praziquantel at 5 mg/L for 24 hours, repeated in two weeks). Quarantine all new arrivals for four weeks minimum in a species-only brackish tank before introducing to an established system.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Do Dragon Gobies need brackish water?',
        answer:
          'Yes. While Dragon Gobies can survive in freshwater temporarily, they require brackish water (specific gravity 1.005–1.015) for long-term health. In the wild, they inhabit estuarine environments where fresh and saltwater mix. Keeping them in pure freshwater causes chronic osmotic stress, immune suppression, colour fading, and shortened lifespan. Use a marine salt mix (Instant Ocean or equivalent) and measure salinity with a refractometer. Most specimens show dramatic health improvements within two weeks of transitioning to proper brackish conditions.',
      },
      {
        question: 'Are Dragon Gobies aggressive?',
        answer:
          'Despite their intimidating appearance and common name, Dragon Gobies are one of the most peaceful large aquarium fish available. Their prominent jaw and comb-like teeth are adaptations for substrate sifting, not predation. They are nearly blind and rely on sensory barbels and lateral line detection. Dragon Gobies will not attack tank mates and actively avoid confrontation. They are far more likely to be bullied by aggressive tank mates than to cause problems themselves. Multiple Dragon Gobies can coexist in sufficiently large tanks with adequate burrowing sites.',
      },
      {
        question: 'What do Dragon Gobies eat?',
        answer:
          'Dragon Gobies are filter-feeding sand sifters, not predators. In captivity, feed them crushed sinking pellets (Hikari Sinking Wafers, New Life Spectrum), frozen bloodworms and brine shrimp target-fed with a pipette, and live baby brine shrimp or microworms scattered on the sand surface. Spirulina powder and algae wafers provide supplementary plant nutrition. Feed after lights-out when the gobies are most active. In community tanks, always target-feed directly at the goby\'s location — they are easily outcompeted by faster-moving, sight-oriented fish.',
      },
      {
        question: 'How big do Dragon Gobies get?',
        answer:
          'Dragon Gobies can reach up to 60 cm (24 inches) in captivity, though 40–50 cm is more typical in home aquariums. In the wild, specimens exceeding 60 cm have been recorded. Growth rate depends heavily on tank size, water quality, diet, and whether the fish is kept in proper brackish conditions. Dragon Gobies housed in freshwater tanks typically show stunted growth compared to those maintained at appropriate salinity. Provide a minimum 50-gallon tank for a single adult, with 75+ gallons for a pair, to support full growth potential.',
      },
      {
        question: 'What substrate do Dragon Gobies need?',
        answer:
          'Fine, soft sand is absolutely essential for Dragon Gobies — this is the single most important furnishing decision for their tank. They feed by scooping mouthfuls of substrate, extracting microorganisms, and expelling cleaned sand through their gill plates. Gravel, coarse sand, or any sharp-edged substrate will damage their delicate mouth tissues, causing bacterial infections and preventing natural feeding behaviour. Use play sand, pool-filter sand, or fine aragonite sand at a depth of 7–10 cm to allow burrowing. Never deviate from this requirement.',
      },
    ],
    sources: [
      {
        title: 'Gobioides broussonnetii (Lacepède, 1800)',
        url: 'https://www.fishbase.se/summary/Gobioides-broussonnetii.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Ecology and Feeding Habits of Gobioides broussonnetii in Estuarine Systems',
        url: 'https://doi.org/10.1007/s10641-011-9892-0',
        publisher: 'Environmental Biology of Fishes',
      },
      {
        title:
          'Osmoregulation in Euryhaline Gobiidae: Physiological Adaptations to Fluctuating Salinity',
        url: 'https://doi.org/10.1016/j.cbpa.2014.06.010',
        publisher: 'Comparative Biochemistry and Physiology',
      },
      {
        title:
          'Brackish Water Aquarium Fish: Husbandry Challenges and Welfare Considerations',
        url: 'https://doi.org/10.3390/ani10122174',
        publisher: 'Animals (MDPI)',
      },
    ],
    relatedSlugs: [
      'elephantnose-fish',
      'fire-eel',
      'clown-loach',
    ],
  },

  // ─────────────────────────────────────────────
  // 23. Fahaka Pufferfish
  // ─────────────────────────────────────────────
  {
    title: 'Fahaka Pufferfish (Tetraodon lineatus): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'fahaka-pufferfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/fahaka-pufferfish-hero.jpg',
    heroImageAlt:
      'Adult Fahaka Pufferfish displaying bold striped patterning and curious expression in a sparsely decorated aquarium',
    metaTitle:
      'Fahaka Puffer Care Guide: Tank, Diet & Compatibility',
    metaDescription:
      'Complete Fahaka Pufferfish care guide — tank size, hard-shell diet, water parameters & solo housing advice. Expert tips from The Fish Collection aquarists.',
    quickAnswerQuestion:
      'What does a Fahaka Pufferfish need in captivity?',
    quickAnswer:
      'Fahaka Pufferfish require a minimum 125-gallon species-only aquarium with powerful filtration, neutral to slightly alkaline water (pH 7.0–8.0, 24–28 °C), and a hard-shell diet of snails, clams, and crayfish to wear down their continuously growing beak plates. They are highly aggressive and must be housed alone.',
    summary:
      'The Fahaka Pufferfish (Tetraodon lineatus) is the largest purely freshwater pufferfish commonly available in the aquarium hobby, reaching 45 cm and possessing one of the most aggressive temperaments of any ornamental species. Native to the Nile River system and associated drainages across North and West Africa, the Fahaka is an intelligent, personable predator that rapidly bonds with its keeper — and just as rapidly destroys any tank mate foolish enough to share its space. This guide provides the specialist knowledge needed to maintain this demanding species, covering its unique dietary requirements, beak maintenance, water chemistry, and the realities of committing to a solo-specimen aquarium for 10–15 years.',
    scientificName: 'Tetraodon lineatus',
    category: 'pufferfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Tetraodon lineatus' },
      { label: 'Max Size', value: '45 cm (18 in)' },
      { label: 'Tank Size', value: '125 gallons (475 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '7.0–8.0' },
      { label: 'Care Level', value: 'Expert' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Carnivore — hard-shelled invertebrates essential' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Decor', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'beak-maintenance', text: 'Beak Maintenance', level: 3 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'overgrown-beak', text: 'Overgrown Beak', level: 3 },
      { id: 'internal-parasites', text: 'Internal Parasites', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Fahaka Pufferfish (<em>Tetraodon lineatus</em>), also known as the Nile Puffer or Lineatus Puffer, is an apex freshwater predator from the river systems of Africa. Among the family Tetraodontidae, the Fahaka stands out for its sheer size — adults routinely exceed 40 cm (16 inches) in captivity — its extraordinary intelligence, and its capacity for outright violence toward any living creature that enters its territory. These are not community fish by any definition. They are solo-specimen animals that demand a dedicated <a href="/exotic-fish/pufferfish/">pufferfish</a> aquarium, a specialised diet, and an owner prepared for a long-term, one-fish commitment.</p>
<p>What makes the Fahaka uniquely rewarding despite these challenges is its behavioural complexity. Fahakas recognise their keepers, follow fingers along the glass, beg for food with exaggerated body language, and display problem-solving abilities rarely documented in freshwater fish. They are, in many respects, more comparable to keeping a reptile or a small mammal than a typical aquarium fish. At The Fish Collection, we consider the Fahaka one of the most engaging species we work with — provided the keeper understands exactly what they are signing up for.</p>
<p>This guide covers every aspect of <a href="/species/fahaka-pufferfish/">Fahaka Pufferfish</a> husbandry, from the critical importance of hard-shell feeding for beak maintenance to the realities of managing a powerful, messy predator that produces waste at a rate disproportionate to its body size. If you are considering a Fahaka, read this guide in its entirety before purchasing — returns are not possible once this fish has decided your tank is its territory.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Tetraodon lineatus</em> are distributed across the Nile River drainage from Egypt south to Lake Turkana, and throughout the major river systems of West Africa including the Niger, Volta, Senegal, and Chad basins. They inhabit a variety of freshwater environments: main river channels with moderate current, vegetated floodplain margins, lake shores, and irrigation canals. Unlike many pufferfish species that require brackish or marine conditions, the Fahaka is an obligate freshwater species throughout its entire life cycle.</p>
<p>The waters these fish inhabit are typically alkaline (pH 7.0–8.5), moderately hard (10–20 dGH), and warm (24–30 °C). Substrate ranges from sandy riverbeds to rocky outcrops depending on locality. Fahakas are ambush predators that position themselves among submerged vegetation, root structures, or rock crevices and strike at passing prey — primarily gastropod molluscs, bivalves, crustaceans, and smaller fish. Their powerful beak (a fused dental plate unique to the Tetraodontidae) is specifically adapted to crush the shells of these hard-bodied prey items.</p>
<p>During seasonal flooding, Fahakas disperse into inundated floodplain areas where food is abundant. As waters recede, they concentrate in deeper river channels and lake margins. This seasonal cycle of abundance and scarcity may explain the species' voracious appetite and aggressive resource-guarding behaviour in captivity — in the wild, defending a productive feeding territory during the dry season is a survival imperative.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Decor</h3>
<p>An adult Fahaka Pufferfish requires a minimum 125-gallon (475 L) aquarium, with dimensions of at least 180 cm long × 50 cm wide × 50 cm tall (72 × 20 × 20 inches). For specimens that reach full 45 cm potential, a 180-gallon (680 L) system is strongly preferred. Length and width are more important than height — Fahakas patrol all levels of the water column but need lateral swimming space to maintain muscle tone and healthy behaviour.</p>
<p>Décor should provide visual barriers and environmental enrichment without creating entrapment hazards. Fahakas are curious and will attempt to wedge themselves into gaps — use smooth river rocks, large driftwood pieces with no sharp edges, and robust artificial or live plants (Anubias, Java fern — anything delicate will be destroyed). Leave at least 60% of the tank as open swimming space. A sand substrate is preferred; Fahakas enjoy digging and will rearrange fine sand as part of their natural behaviour. Avoid gravel, which can be ingested and cause impaction.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Fahakas are extraordinarily messy eaters. They crush hard-shelled prey, spitting fragments of shell, tissue, and organs into the water column. Filtration must be massively overrated — target a combined turnover of 10–12× the tank volume per hour. A large sump (60+ gallons) with a wet/dry trickle tower and a canister filter for mechanical polishing is the most reliable configuration. UV sterilisation (36–57 watts) is highly recommended to control the bacterial blooms that result from the protein-rich waste this species generates.</p>
<p>Moderate flow is tolerated and even beneficial — Fahakas are strong swimmers that appreciate a gentle current along the tank length. Avoid dead spots where waste can accumulate, particularly behind décor items.</p>

<h3 id="lighting">Lighting</h3>
<p>Standard aquarium LED lighting on a 8–10 hour photoperiod is appropriate. Fahakas are diurnal and active under normal lighting conditions. There are no special spectral requirements, though moderate intensity (50–70% output) provides the best visual display of the fish's striking striped patterning without causing stress.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Fahaka Pufferfish are adaptable to a range of freshwater conditions but perform best in slightly alkaline, moderately hard water that reflects their native Nile-basin habitat:</p>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). A reliable heater with a digital controller is sufficient.</li>
<li><strong>pH:</strong> 7.0–8.0. Stability matters more than exact value. The species tolerates up to 8.5 without issue.</li>
<li><strong>GH:</strong> 8–20 dGH. Moderate hardness supports beak health and overall osmoregulation.</li>
<li><strong>KH:</strong> 5–15 dKH. The higher buffering capacity of alkaline conditions provides excellent pH stability.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Fahakas are scaleless and lack the protective mucus coat of scaled fish, making them more sensitive to dissolved wastes.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. Given the heavy waste load, 30–40% weekly water changes are standard, with many keepers performing twice-weekly changes.</li>
</ul>
<p>Avoid all copper-based medications — pufferfish are extremely sensitive to copper, and doses safe for scaled fish can be lethal for Tetraodontids. When treating disease, always use pufferfish-safe alternatives and dose conservatively.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Diet is the single most critical aspect of Fahaka Pufferfish care, because it directly determines beak health. Fahakas possess a fused dental plate — the "beak" — composed of four continuously growing tooth plates (two upper, two lower). In the wild, crushing hard-shelled prey naturally wears these plates down. In captivity, a diet lacking sufficient hard-shelled items causes beak overgrowth, which can prevent the fish from eating and ultimately proves fatal without veterinary intervention.</p>
<p>A balanced weekly feeding schedule for an adult Fahaka includes:</p>
<ul>
<li><strong>3–4 times weekly:</strong> Hard-shelled items — pond snails (Ramshorn, Malaysian Trumpet Snails), whole unshelled prawns, crayfish, mussels in half-shell, and clams. These are non-negotiable and must form the bulk of the diet.</li>
<li><strong>1–2 times weekly:</strong> Supplementary protein — market shrimp (shell-on), earthworms, silversides, and squid strips.</li>
<li><strong>1 time weekly:</strong> Fast day. Fahakas are prone to obesity and fatty liver disease if overfed.</li>
</ul>
<p>Feed every other day for adults, daily for juveniles under 15 cm. Offer only what the fish consumes within 5 minutes and remove all shell fragments and uneaten food promptly. Breeding your own snail colonies (Ramshorn snails breed prolifically in a dedicated 10-gallon tank with vegetable scraps) provides a continuous, cost-effective supply of the most important dietary component.</p>

<h3 id="beak-maintenance">Beak Maintenance</h3>
<p>Monitor beak length by observing the fish head-on during feeding. The upper and lower plates should meet evenly, allowing the fish to crush food without difficulty. If you notice the fish struggling to eat, dropping food, or if the beak plates are visibly protruding beyond the lip line, the beak is overgrown and requires trimming. Beak trimming is a veterinary procedure performed under clove oil anaesthesia using bone rongeurs or a Dremel tool — it is not a DIY procedure for inexperienced keepers. Prevention through proper diet is vastly preferable to corrective trimming.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Fahaka Pufferfish are the most aggressive commonly kept freshwater pufferfish species. They are territorial, predatory, and will attack and kill any fish, invertebrate, or amphibian placed in their tank — including fish twice their size. This aggression is not circumstantial or manageable through tank design; it is a fundamental behavioural trait. Fahakas <strong>must</strong> be housed alone in a species-only aquarium. No exceptions.</p>
<p>Despite their aggression toward tank mates, Fahakas are remarkably interactive with their keepers. They learn to recognise individual people, will swim to the front of the tank when their owner approaches, and can be hand-fed (with caution — their beak can cause serious injury). They exhibit exploratory behaviour, rearranging substrate and investigating new objects with a curiosity more reminiscent of a parrot than a fish. This intelligence, combined with their expressive eyes and range of body language (colour changes, inflation, gill flaring), makes them one of the most psychologically engaging species in the freshwater hobby.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>None. Fahaka Pufferfish are obligate solitary specimens. Any fish, snail, shrimp, or other animal placed in their tank will eventually be killed and eaten. This includes armoured catfish, fast-moving fish, and species that keepers sometimes assume are "too tough" to be bothered — Fahakas are persistent and will wear down any tank mate over time. The only living organisms that can share their tank are nuisance snails intentionally added as food. Committing to a <a href="/species/fahaka-pufferfish/">Fahaka</a> means committing to a single-species display.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of <em>Tetraodon lineatus</em> has been achieved on rare occasions but remains exceptionally difficult. In the wild, spawning occurs during the flood season in shallow, vegetated floodplain areas. Males establish territories and court females with colour intensification and circling displays. Eggs are scattered among fine-leaved vegetation and left unguarded.</p>
<p>The primary obstacle to captive breeding is the species' extreme aggression. Introducing a second Fahaka to an established territory almost invariably results in severe injury or death, even between opposite-sex individuals. The few successful breeding reports describe very large (500+ gallon) pond-style setups where a pair was raised together from juvenile stage, with elaborate visual barriers and multiple feeding stations to reduce confrontation. Eggs hatched in 5–7 days at 26 °C, and fry were raised on infusoria followed by baby brine shrimp. This is not a breeding project for hobbyists — it requires institutional-scale resources and accepted risk of losing specimens.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="overgrown-beak">Overgrown Beak</h3>
<p>Beak overgrowth is the most common and most preventable health issue in captive Fahakas. When the four fused tooth plates are not worn down through regular consumption of hard-shelled prey, they grow inward and outward, eventually preventing the mouth from closing properly. Early signs include difficulty eating, food dropping, asymmetric jaw movement, and visible plate protrusion. Treatment requires anaesthesia (clove oil, 3–5 drops per litre until gill movement slows) and careful trimming by an experienced aquatic veterinarian. Prevention is straightforward: ensure hard-shelled foods comprise at least 60% of the diet. A thriving snail breeding colony is the Fahaka keeper's most important piece of equipment.</p>

<h3 id="internal-parasites">Internal Parasites</h3>
<p>Wild-caught Fahakas frequently carry intestinal nematodes and flagellates. Symptoms include stringy white faeces, appetite reduction, and gradual weight loss. Treat with praziquantel (5 mg/L bath for 24 hours, repeat in 14 days) for nematodes and metronidazole (250 mg per 40 L every 48 hours for three treatments) for flagellates. Never use copper-based medications or malachite green on pufferfish — these compounds are highly toxic to scaleless Tetraodontids. Quarantine all new specimens for six weeks before finalising placement in a display tank.</p>
<p>Other concerns include <em>Ichthyophthirius</em> (treat with raised temperature to 30 °C and 2 g/L aquarium salt — no formalin or malachite green), and obesity/fatty liver disease from overfeeding. Maintain a strict feeding schedule with one fasting day per week, and avoid feeding mammalian proteins (beef heart, chicken) which Fahakas cannot metabolise efficiently.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Can Fahaka Pufferfish live with other fish?',
        answer:
          'No. Fahaka Pufferfish are one of the most aggressive freshwater fish in the aquarium hobby and must be housed alone in a species-only tank. They will attack and kill any tank mate, regardless of size, speed, or armour. This includes other pufferfish, large cichlids, armoured catfish, and fast-moving species. The aggression is not a response to inadequate space or poor conditions — it is an innate territorial and predatory behaviour. Committing to a Fahaka means committing to a single-fish aquarium for the duration of its 10–15 year lifespan.',
      },
      {
        question: 'What do Fahaka Pufferfish eat?',
        answer:
          'Fahaka Pufferfish require a diet consisting primarily (60%+) of hard-shelled invertebrates: pond snails, Malaysian trumpet snails, crayfish, mussels in half-shell, and whole unshelled prawns. These hard foods are essential for wearing down the continuously growing beak (fused dental plate). Supplement with earthworms, silversides, squid, and market shrimp. Feed every other day for adults, with one fasting day per week to prevent obesity. Breeding your own snail colonies is the most practical way to ensure a consistent supply of the most critical dietary component.',
      },
      {
        question: 'How big do Fahaka Pufferfish get?',
        answer:
          'Adult Fahaka Pufferfish reach 40–45 cm (16–18 inches) in captivity, making them the largest purely freshwater pufferfish commonly available in the aquarium trade. Growth rate is rapid — juveniles can grow 2–3 cm per month with proper feeding. A minimum 125-gallon aquarium is required, with 180+ gallons strongly recommended for full-sized adults. Do not purchase a Fahaka with the intention of starting in a small tank and upgrading later — they grow fast, and an undersized aquarium during the growth phase causes permanent developmental issues.',
      },
      {
        question: 'How do you trim a Fahaka Puffer beak?',
        answer:
          'Beak trimming should be performed by an experienced aquatic veterinarian or a very experienced pufferfish keeper. The fish is anaesthetised with clove oil (3–5 drops per litre until gill movements slow significantly), then carefully removed from the water. The overgrown beak plates are trimmed using bone rongeurs or a low-speed Dremel tool with a fine grinding attachment, taking care not to trim too close to the living tissue. The fish is then returned to clean, well-oxygenated water for recovery. Prevention through regular hard-shell feeding is always preferable to corrective trimming.',
      },
      {
        question: 'Do Fahaka Pufferfish recognise their owners?',
        answer:
          'Yes. Fahaka Pufferfish are among the most intelligent freshwater fish and reliably learn to recognise their primary keeper. They will swim to the front of the tank when their owner approaches, follow fingers along the glass, and display excited "begging" behaviour (rapid swimming, colour brightening) at feeding time. They often remain wary of unfamiliar people, demonstrating genuine individual recognition rather than a generalised response to movement. This intelligence and interactivity is a major reason enthusiasts are drawn to the species despite its demanding care requirements.',
      },
    ],
    sources: [
      {
        title: 'Tetraodon lineatus (Linnaeus, 1758)',
        url: 'https://www.fishbase.se/summary/Tetraodon-lineatus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Dental Morphology and Beak Growth in Tetraodontidae: Implications for Captive Husbandry',
        url: 'https://doi.org/10.1002/jmor.20834',
        publisher: 'Journal of Morphology',
      },
      {
        title:
          'Diet and Feeding Ecology of Tetraodon lineatus in the Nile River System',
        url: 'https://doi.org/10.1111/jai.13108',
        publisher: 'Journal of Applied Ichthyology',
      },
      {
        title:
          'Toxicity of Copper-Based Therapeutics to Scaleless Freshwater Fish',
        url: 'https://doi.org/10.1016/j.aquatox.2018.02.012',
        publisher: 'Aquatic Toxicology',
      },
    ],
    relatedSlugs: [
      'mbu-pufferfish',
      'wolf-fish',
      'fire-eel',
      'clown-knife-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 24. Mbu Pufferfish
  // ─────────────────────────────────────────────
  {
    title: 'Mbu Pufferfish (Tetraodon mbu): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'mbu-pufferfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/mbu-pufferfish-hero.jpg',
    heroImageAlt:
      'Massive adult Mbu Pufferfish with intricate maze-like patterning hovering in a large custom aquarium',
    metaTitle:
      'Mbu Puffer Care Guide: Giant Puffer Tank & Diet Tips',
    metaDescription:
      'Expert Mbu Pufferfish care guide — giant tank requirements, hard-shell diet, beak care & water parameters. Specialist advice from The Fish Collection.',
    quickAnswerQuestion:
      'How do you care for a Mbu Pufferfish?',
    quickAnswer:
      'Mbu Pufferfish require a minimum 500-gallon species-only aquarium, making them suitable only for dedicated hobbyists with custom setups. They need powerful filtration, neutral to alkaline water (pH 7.0–8.0, 24–28 °C), and a diet dominated by hard-shelled prey — snails, clams, and crayfish — to maintain their continuously growing beak.',
    summary:
      'The Mbu Pufferfish (Tetraodon mbu) is the largest freshwater pufferfish in the world, reaching 67 cm (26 inches) in captivity and significantly larger in the wild. Native to the Congo River basin and Lake Tanganyika, this giant among puffers combines extraordinary intelligence and personality with space requirements that rival marine aquarium species. The Mbu is not a fish for typical home aquariums — it demands a custom-built system of 500+ gallons, industrial-grade filtration, and a lifetime commitment from a keeper who understands that this single fish will dominate an entire room of their home. This guide provides the specialist knowledge required to keep the Mbu Pufferfish responsibly.',
    scientificName: 'Tetraodon mbu',
    category: 'pufferfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Tetraodon mbu' },
      { label: 'Max Size', value: '67 cm (26 in) in captivity' },
      { label: 'Tank Size', value: '500 gallons (1,900 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '7.0–8.0' },
      { label: 'Care Level', value: 'Expert — specialist only' },
      { label: 'Lifespan', value: '10–15+ years' },
      { label: 'Diet', value: 'Carnivore — hard-shelled invertebrates essential' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Construction', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'beak-maintenance', text: 'Beak Maintenance', level: 3 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'overgrown-beak', text: 'Overgrown Beak', level: 3 },
      { id: 'obesity', text: 'Obesity & Fatty Liver', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Mbu Pufferfish (<em>Tetraodon mbu</em>) holds the distinction of being the world's largest purely freshwater pufferfish. Specimens in the wild have been documented at over 75 cm (30 inches), and captive individuals regularly exceed 60 cm (24 inches) in well-maintained systems. Native to the Congo River basin — one of Africa's most biodiverse aquatic ecosystems — and the rocky shorelines of Lake Tanganyika, the Mbu combines the intelligence and personality that <a href="/exotic-fish/pufferfish/">pufferfish</a> are famous for with a body size that demands aquarium infrastructure on an entirely different scale from typical freshwater setups.</p>
<p>At The Fish Collection, we are transparent about the Mbu Pufferfish: this is a species that we actively discourage most hobbyists from purchasing. The juvenile Mbu sold in shops at 5–8 cm will grow into a 60+ cm animal that requires a custom aquarium of at least 500 gallons, consumes kilograms of shellfish monthly, produces waste at a rate that overwhelms standard filtration, and lives for over a decade. The number of hobbyists who can genuinely provide lifetime care for a Mbu is vanishingly small. If you are among them, this guide will ensure you do it right.</p>
<p>What justifies this extraordinary commitment is the Mbu's equally extraordinary personality. These fish develop genuine bonds with their keepers, displaying recognition, excitement, and even frustration through an elaborate repertoire of behaviours including colour changes, body posture, water spitting, and patterning variations that experienced keepers learn to read like facial expressions. A well-kept <a href="/species/mbu-pufferfish/">Mbu</a> is less an aquarium fish and more a wet pet — an aquatic companion with a personality as large as its body.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Tetraodon mbu</em> inhabit the main channels and tributaries of the Congo River system — the second-largest river by discharge volume on Earth — as well as the rocky littoral zones of Lake Tanganyika. The Congo River is characterised by powerful currents, rocky substrates interspersed with sandy stretches, and water chemistry that varies by region but is generally neutral to slightly alkaline (pH 7.0–8.5), moderately hard (8–18 dGH), and warm (24–28 °C).</p>
<p>In Lake Tanganyika, Mbu Puffers occupy the shallow rocky habitats along the shoreline, sharing their environment with cichlids, synodontis catfish, and freshwater crabs — the latter forming a significant portion of their diet. The lake's water is famously stable: pH 8.0–9.0, GH 10–15 dGH, and a constant temperature of 25–27 °C. This stability is a key consideration for captive care — Mbu Puffers do not tolerate rapid parameter fluctuations.</p>
<p>In both river and lake habitats, the Mbu is a mid-water to bottom-dwelling predator that uses its powerful beak to crush molluscs, crustaceans, and the occasional smaller fish against rocks. Their eyesight is excellent, and they are active diurnal hunters that patrol territories covering substantial areas of riverbed or lakeshore.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Construction</h3>
<p>A single adult Mbu Pufferfish requires a minimum 500-gallon (1,900 L) aquarium, with dimensions of at least 300 cm long × 90 cm wide × 70 cm tall (120 × 36 × 28 inches). These are not standard aquarium dimensions — Mbu tanks are almost universally custom-built from plywood lined with fibreglass or food-grade epoxy, or commissioned from specialist acrylic manufacturers. Glass tanks of this volume are impractically heavy and prohibitively expensive.</p>
<p>Before purchasing a Mbu, verify that your floor structure can support the loaded weight (a 500-gallon system weighs approximately 2,500 kg / 5,500 lbs including stand, water, and equipment). Ground-floor placement on a concrete slab is ideal. Upper-floor installations require structural engineering assessment. The tank room must also have adequate drainage for large water changes (100–200 gallons per session) and proximity to both water supply and a drain.</p>
<p>Interior décor should be minimal and robust. Large, smooth boulders (too heavy for the fish to move), sections of large-diameter PVC pipe (25+ cm) for shelter, and a sand substrate are appropriate. Avoid anything with sharp edges, thin walls, or small openings that could trap the fish. Mbu Puffers will rearrange, bite, and test every object in their environment — decorations must withstand a 60 cm fish with the bite force to crush crab shells.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>The waste output of a Mbu Pufferfish is staggering. An adult consumes several hundred grams of shellfish per week, and the resulting waste — crushed shell fragments, uneaten tissue, and high-protein faecal matter — demands industrial-grade biological and mechanical filtration. Target a combined turnover of 10–12× the tank volume per hour, which for a 500-gallon system means 19,000–23,000 litres per hour of combined pump capacity.</p>
<p>A large sump (100–150 gallons) with multiple filtration stages is essential: coarse mechanical filtration (filter socks or foam), a fluidised K1 moving-bed reactor for biological processing, a secondary static bio-media chamber (ceramic rings, MarinePure), and a high-wattage UV steriliser (80–110 watts). Some keepers incorporate an algae scrubber or refugium to supplement nutrient export. Weekly water changes of 30–40% are the minimum; twice-weekly changes are preferred if nitrate levels trend above 15 ppm.</p>

<h3 id="lighting">Lighting</h3>
<p>Standard LED lighting on an 8–10 hour photoperiod. The Mbu's intricate maze-like body patterning displays best under neutral white light (6,500–7,000 K) at moderate intensity. No specialised lighting requirements exist.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Mbu Pufferfish are adapted to the stable water chemistry of the Congo River and Lake Tanganyika. Rapid parameter shifts are more dangerous than slightly sub-optimal static values:</p>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). Consistency is critical — use a digital controller with titanium inline heaters rated for the tank volume. Mbu tanks often require two heaters for redundancy.</li>
<li><strong>pH:</strong> 7.0–8.0. Slightly alkaline is ideal. The crushed coral or aragonite sand used as substrate naturally buffers pH upward.</li>
<li><strong>GH:</strong> 8–18 dGH. Moderately hard water supports beak mineralisation and overall health.</li>
<li><strong>KH:</strong> 5–15 dKH. High buffering capacity prevents the pH crashes that can occur in heavily stocked tanks with high CO2 output from biological filtration.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Scaleless pufferfish are exceptionally sensitive to dissolved nitrogenous waste.</li>
<li><strong>Nitrate:</strong> &lt;15 ppm. With the heavy biological load a Mbu generates, maintaining low nitrate requires aggressive water-change schedules and potentially supplementary nutrient export methods.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Like all Tetraodontids, the Mbu possesses continuously growing fused dental plates (the beak) that must be worn down through regular consumption of hard-shelled prey. The scale of feeding, however, matches the scale of the fish — an adult Mbu requires significantly more shellfish than smaller puffer species, and the associated cost is a genuine ongoing expense that prospective keepers must budget for.</p>
<p>A feeding schedule for an adult Mbu includes:</p>
<ul>
<li><strong>Every other day:</strong> Hard-shelled items — large pond snails, whole crayfish, blue mussels in half-shell, hard clams, and whole shell-on prawns. Quantity varies by fish size but typically 200–400 grams per feeding session for a 50+ cm specimen.</li>
<li><strong>Once weekly:</strong> Supplementary protein — silversides, earthworm bundles, squid, or cockle meat for dietary variety.</li>
<li><strong>One to two days weekly:</strong> Fasting. Mbu Puffers are highly prone to obesity due to the combination of a sedentary captive lifestyle and a keeper's natural inclination to feed an interactive fish that begs enthusiastically.</li>
</ul>
<p>Cultivate multiple snail breeding colonies (Ramshorn, Mystery Snails, Malaysian Trumpet Snails) in dedicated tanks to reduce ongoing food costs. Many Mbu keepers also establish relationships with local seafood markets for discounted shellfish.</p>

<h3 id="beak-maintenance">Beak Maintenance</h3>
<p>Beak overgrowth in Mbu Puffers is more difficult to address than in smaller species simply because of the fish's size and power. Anaesthetising and handling a 5+ kg, 60 cm pufferfish is a two-person procedure requiring experience, appropriate equipment, and ideally veterinary supervision. Prevention through consistent hard-shell feeding is paramount. Monitor beak alignment weekly — the plates should meet evenly, and the fish should crush food effortlessly. Any difficulty eating or asymmetric jaw closure warrants immediate dietary assessment and potentially veterinary intervention.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>The Mbu Pufferfish is widely considered the most intelligent and personable freshwater fish available in the aquarium hobby. Keepers consistently report behaviours that go well beyond simple conditioning: Mbus learn daily routines, differentiate between household members, display apparent excitement or displeasure through colour and posture changes, and engage in play-like behaviours with tank enrichment items. Some specimens will squirt water at their keeper to solicit attention or food — a behaviour that suggests sophisticated cause-and-effect reasoning.</p>
<p>This intelligence comes with a caveat: Mbu Puffers are also prone to boredom and frustration in understimulating environments. An under-enriched Mbu may pace repetitively, glass-surf, or develop stress-related colour fade. Rotate enrichment items (floating balls, feeding puzzles, new rock arrangements) weekly. Some keepers place a small television or tablet near the tank for visual stimulation — anecdotal reports suggest Mbus genuinely attend to moving images.</p>
<p>Aggression toward tank mates is extreme and total. Like the <a href="/species/fahaka-pufferfish/">Fahaka Puffer</a>, the Mbu must be housed alone. Its larger size and more powerful bite make the consequences of failed tank-mate experiments even more severe.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>None. The Mbu Pufferfish is an obligate solitary species in captivity. Its combination of size, intelligence, aggression, and crushing bite power makes it incompatible with any other aquarium inhabitant. Even large, armoured species like adult Plecostomus or Bichirs — which survive with some other large predators — will be systematically harassed and ultimately killed or severely injured by a Mbu. Do not attempt to find exceptions to this rule; experienced Mbu keepers have tried everything, and the result is always the same.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of <em>Tetraodon mbu</em> has never been reliably documented. The combination of extreme aggression toward conspecifics, the enormous space requirements for even a single individual, and the lack of detailed knowledge about wild spawning triggers makes captive reproduction essentially impossible with current hobbyist resources. All Mbu Puffers in the aquarium trade are wild-caught from the Congo River system, which raises legitimate conservation concerns as collection data is limited and population impact assessments are sparse.</p>
<p>If captive breeding is ever achieved, it will likely require pond-scale facilities (thousands of gallons), controlled seasonal flooding simulation, and detailed hormonal analysis of wild-caught specimens to identify spawning triggers. This is a project for well-funded aquaculture institutions, not individual hobbyists.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="overgrown-beak">Overgrown Beak</h3>
<p>Beak overgrowth remains the most critical health risk for captive Mbu Puffers. The mechanics are identical to those in the <a href="/species/fahaka-pufferfish/">Fahaka</a> — insufficient hard-shell consumption allows the dental plates to grow beyond functional alignment — but the treatment is vastly more complex due to the fish's size and strength. Trimming a Mbu's beak requires clove oil anaesthesia at carefully titrated doses (the fish is large enough that overdose risk is real), a team of at least two experienced handlers, and veterinary-grade trimming tools. Emergency beak trims cost $200–$500+ at specialist aquatic veterinary practices. Feed hard-shelled prey consistently and monitor beak alignment to avoid this scenario entirely.</p>

<h3 id="obesity">Obesity & Fatty Liver</h3>
<p>Mbu Puffers are exceptionally food-motivated and will beg relentlessly for meals. Keepers who feed based on the fish's apparent hunger rather than a disciplined schedule invariably produce obese specimens. Hepatic lipidosis (fatty liver disease) presents as abdominal distension, lethargy, and appetite loss — by the time symptoms are visible, the condition is often advanced. Maintain strict feeding schedules with regular fasting days, and resist the temptation to feed more than the recommended amounts, regardless of how persuasively the fish begs.</p>
<p>Other health considerations include sensitivity to copper-based medications (use only pufferfish-safe treatments), internal parasites in wild-caught specimens (treat prophylactically with praziquantel during quarantine), and stress-related conditions from inadequate tank size or insufficient environmental enrichment. A Mbu kept in a tank below 500 gallons will develop chronic stress that manifests as colour fade, reduced appetite, glass-surfing, and immune suppression.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Mbu Pufferfish get?',
        answer:
          'Mbu Pufferfish are the largest freshwater pufferfish in the world. In captivity, they routinely reach 60–67 cm (24–26 inches), and wild specimens have been recorded at over 75 cm (30 inches). Growth is rapid — juveniles purchased at 5–8 cm can reach 30 cm within the first year with heavy feeding. Prospective keepers must plan for the adult size from day one, as a Mbu will outgrow any tank smaller than 500 gallons. The fish also lives 10–15+ years, making this a multi-decade commitment to a very large animal.',
      },
      {
        question: 'What size tank does a Mbu Pufferfish need?',
        answer:
          'A single adult Mbu Pufferfish requires a minimum 500-gallon (1,900-litre) aquarium with dimensions of at least 300 cm long by 90 cm wide. Tanks of this size are almost always custom-built from plywood and fibreglass or commissioned from specialist acrylic manufacturers. The loaded weight (approximately 2,500 kg) requires ground-floor placement on a concrete slab or a structurally verified floor. Standard commercially available aquariums are not suitable for adult Mbu Puffers.',
      },
      {
        question: 'Can Mbu Puffers live with other fish?',
        answer:
          'No. Mbu Pufferfish are strictly solitary and will attack, injure, or kill any other aquarium inhabitant. Their extreme aggression is compounded by a crushing bite capable of breaking crab shells, making them dangerous to even heavily armoured tank mates. This applies to fish of all sizes, including species much larger than the Mbu. There are no documented cases of long-term successful tank-mate cohabitation with adult Mbu Puffers in captivity. This species requires a dedicated, single-specimen aquarium.',
      },
      {
        question: 'How much does it cost to keep a Mbu Pufferfish?',
        answer:
          'The ongoing cost of Mbu Pufferfish ownership is substantial. Beyond the initial investment in a custom 500+ gallon aquarium system (typically $3,000–$10,000+ for tank, stand, filtration, and equipment), monthly expenses include electricity for heating and filtration ($50–$150 depending on local rates), food (shellfish costs of $80–$200+ monthly unless supplemented by home-bred snail colonies), water treatment supplies, and periodic equipment replacement. Budget for occasional veterinary care at $200–$500+ per visit. Total annual maintenance costs range from $1,500–$4,000.',
      },
      {
        question: 'Are Mbu Pufferfish intelligent?',
        answer:
          'Mbu Pufferfish are widely regarded as the most intelligent freshwater aquarium fish. They recognise individual people, learn daily routines, display complex emotional-like states through colour and posture changes, and engage in problem-solving and play-like behaviours. Some specimens learn to squirt water at their keepers to solicit food or attention. This intelligence means they require environmental enrichment (rotated décor, feeding puzzles, visual stimulation) and are prone to boredom-related stress in barren tanks. Their personality and interactivity are the primary reasons keepers accept the extraordinary space and cost requirements.',
      },
    ],
    sources: [
      {
        title: 'Tetraodon mbu (Boulenger, 1899)',
        url: 'https://www.fishbase.se/summary/Tetraodon-mbu.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Giant Freshwater Puffers of the Congo Basin: Ecology and Conservation Status',
        url: 'https://doi.org/10.1007/s10750-017-3295-0',
        publisher: 'Hydrobiologia',
      },
      {
        title:
          'Dental Plate Growth and Wear in Tetraodontid Fishes: Captive Management Implications',
        url: 'https://doi.org/10.1002/jmor.20834',
        publisher: 'Journal of Morphology',
      },
      {
        title:
          'Cognitive Abilities in Teleost Fish: Evidence for Learning and Problem Solving',
        url: 'https://doi.org/10.1007/s10071-014-0761-0',
        publisher: 'Animal Cognition',
      },
    ],
    relatedSlugs: [
      'fahaka-pufferfish',
      'wolf-fish',
      'platinum-arowana',
      'clown-knife-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 25. Shovelnose Tiger Catfish
  // ─────────────────────────────────────────────
  {
    title: 'Shovelnose Tiger Catfish (Pseudoplatystoma tigrinum): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'shovelnose-tiger-catfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/shovelnose-tiger-catfish-hero.jpg',
    heroImageAlt:
      'Shovelnose Tiger Catfish displaying bold dark vertical bars on a silver body, resting near driftwood',
    metaTitle:
      'Shovelnose Tiger Catfish Care: Tank, Diet & Setup',
    metaDescription:
      'Expert Shovelnose Tiger Catfish care guide — tank size, diet, water parameters & tank mates. Specialist advice for Pseudoplatystoma from The Fish Collection.',
    quickAnswerQuestion:
      'What does a Shovelnose Tiger Catfish need?',
    quickAnswer:
      'Shovelnose Tiger Catfish require a minimum 300-gallon aquarium due to their 90+ cm adult size, powerful filtration with 8–10x turnover, and a carnivorous diet of whole fish, prawns, and pellets. They are nocturnal predators best kept with similarly sized, robust tank mates in neutral to slightly acidic water (pH 6.0–7.5, 24–28 °C).',
    summary:
      'The Shovelnose Tiger Catfish (Pseudoplatystoma tigrinum) is a large, strikingly patterned pimelodid catfish from the Amazon and Orinoco river systems. Known for its flattened, shovel-shaped head and bold dark vertical barring against a silver-white body, this species can exceed 100 cm in the wild and regularly reaches 90 cm in captivity. It is a powerful nocturnal predator that demands a very large aquarium, heavy filtration, and a keeper who understands the long-term commitment of housing a metre-long catfish. This guide provides comprehensive care information including tank dimensions, diet protocols, water chemistry, and the critical distinction between this species and frequently confused Pseudoplatystoma hybrids.',
    scientificName: 'Pseudoplatystoma tigrinum',
    category: 'catfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Pseudoplatystoma tigrinum' },
      { label: 'Max Size', value: '100+ cm (40 in) wild; 90 cm (36 in) captive' },
      { label: 'Tank Size', value: '300 gallons (1,135 L) minimum' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Expert' },
      { label: 'Lifespan', value: '15–20 years' },
      { label: 'Diet', value: 'Carnivore — whole fish, prawns, and sinking pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'stress-and-aggression', text: 'Stress & Aggression', level: 3 },
      { id: 'bacterial-infections', text: 'Bacterial Infections', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Shovelnose Tiger Catfish (<em>Pseudoplatystoma tigrinum</em>) is one of the most visually spectacular large catfish available in the freshwater aquarium trade. A member of the family Pimelodidae — the long-whiskered catfish of South America — it is characterised by a dramatically flattened, spatulate head, an elongated silver-white body marked with bold dark vertical bars and reticulations, and long sensory barbels that extend well beyond the pectoral fins. In the wild, specimens commonly exceed 100 cm (40 inches); in captivity, 80–90 cm is typical for well-maintained adults.</p>
<p>At The Fish Collection, we categorise the Shovelnose Tiger alongside <a href="/exotic-fish/catfish/">other monster catfish</a> that require specialist commitment. The juvenile specimens sold in shops at 10–15 cm are irresistibly attractive, but they grow rapidly — 5–8 cm per month in the first year under optimal conditions — and will outgrow standard aquariums within months. This is a fish that demands a 300+ gallon system, heavy-duty filtration, and a 15–20 year care plan. Impulse purchases of Shovelnose Tigers are one of the most common reasons exotic fish end up in rescue programmes.</p>
<p>This guide provides the information needed to keep <a href="/species/shovelnose-tiger-catfish/">Shovelnose Tiger Catfish</a> responsibly, from juvenile acquisition through adult maintenance. We also address the taxonomy confusion surrounding <em>Pseudoplatystoma</em> species and hybrids, which is rampant in the trade and affects both care protocols and growth expectations.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Pseudoplatystoma tigrinum</em> inhabit the large river systems of South America, with the highest densities in the Amazon basin, Orinoco drainage, and their major tributaries. They are primarily found in deep main-channel habitats with moderate to strong current, sandy to muddy substrates, and substantial submerged structure — fallen trees, rock formations, and undercut banks that provide daytime refuges for these nocturnal predators.</p>
<p>Water conditions across their range are variable but generally characterised by warm temperatures (24–30 °C), slightly acidic to neutral pH (5.5–7.5), and soft to moderately hard water (2–12 dGH). During the annual flood season, Shovelnose Tigers move into inundated forest (<em>igapó</em> and <em>várzea</em>) to feed on the abundant fish, crustaceans, and invertebrates displaced by rising waters. As waters recede, they return to deeper river channels where they concentrate in areas with structural cover and ambush prey from concealed positions.</p>
<p>The species is an apex predator in its habitat, feeding primarily on fish, freshwater shrimp, and crabs. Their flattened head profile is a hydrodynamic adaptation to holding station in current while minimising energy expenditure, and their long barbels are densely innervated sensory organs that detect prey movement in the turbid, low-visibility conditions of Amazonian river channels.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>An adult Shovelnose Tiger Catfish requires a minimum 300-gallon (1,135 L) aquarium with dimensions of at least 240 cm long × 75 cm wide × 60 cm tall (96 × 30 × 24 inches). Width is particularly important — these catfish have a wide turning radius due to their rigid body structure, and tanks narrower than 75 cm cause chronic stress and may lead to spinal deformities over time. For specimens exceeding 80 cm, 500+ gallons is strongly recommended.</p>
<p>Substrate should be fine sand, which allows the catfish to rest on the bottom without abrading its smooth, scaleless skin. Provide large pieces of driftwood, PVC pipes (15–20 cm diameter), or purpose-built catfish caves as daytime refuges — Shovelnose Tigers are strictly nocturnal and will become stressed without dark hiding places to retreat to during daylight hours. Ensure all caves and structures are large enough to accommodate the fish's full body length, as they will attempt to squeeze into undersized spaces and can become wedged.</p>
<p>Live plants are unnecessary and will be uprooted. Keep the tank layout simple with large, heavy décor that cannot be displaced by a powerful 5+ kg catfish during nighttime activity.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Shovelnose Tigers are messy, carnivorous feeders that generate substantial waste. Target a combined filtration turnover of 8–10× the tank volume per hour. A large sump (80–120 gallons) with robust mechanical and biological filtration stages is the most practical solution. Include a UV steriliser (57+ watts) to control bacterial loads following feeding events.</p>
<p>Moderate current is appreciated and replicates natural river conditions. Direct the sump return to create a gentle flow along the tank length. These catfish are powerful swimmers that handle current well, but avoid creating turbulent conditions at the substrate level where they rest during the day.</p>

<h3 id="lighting">Lighting</h3>
<p>Subdued lighting is essential. Shovelnose Tigers are nocturnal and will not emerge from hiding under bright illumination. Use dimmable LEDs at 20–40% intensity during viewing hours, with a gradual dawn/dusk ramp of 30–60 minutes to simulate natural light transitions. Moonlight-mode LEDs allow observation of nocturnal feeding and activity without disturbing the fish.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Shovelnose Tiger Catfish are relatively adaptable to a range of freshwater conditions, but they perform best in water chemistry that reflects their Amazonian origins:</p>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (75–82 °F). Consistency matters more than precise value within this range.</li>
<li><strong>pH:</strong> 6.0–7.5. Slightly acidic to neutral is preferred. Avoid pH above 8.0.</li>
<li><strong>GH:</strong> 2–15 dGH. Soft to moderately hard water is acceptable.</li>
<li><strong>KH:</strong> 2–8 dKH. Maintain sufficient buffering to prevent pH crashes in heavily stocked systems.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Scaleless catfish are particularly sensitive to dissolved nitrogenous wastes.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. Weekly 25–30% water changes with temperature-matched, dechlorinated water.</li>
</ul>
<p>Tannin supplementation via Indian almond leaves or blackwater extract is beneficial — it reduces ambient light, creates a more natural chemical environment, and has mild antibacterial properties that benefit scaleless species. Replace leaves every 2–3 weeks as their tannin content depletes.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Shovelnose Tiger Catfish are obligate piscivores in the wild, feeding primarily on smaller fish, freshwater shrimp, and crabs. In captivity, they accept a range of protein-rich foods and should be offered dietary variety for nutritional completeness:</p>
<ul>
<li><strong>Primary diet:</strong> Whole silversides, smelt, or lance fish (gut-loaded or vitamin-soaked). Offer 2–4 appropriately sized fish per feeding, 3–4 times per week.</li>
<li><strong>Secondary:</strong> Large market prawns (shell-on for calcium and enrichment), earthworm bundles, and squid strips.</li>
<li><strong>Pellets:</strong> High-quality sinking carnivore pellets (Hikari Massivore, Northfin Predator Formula) are accepted by most trained specimens and provide balanced nutrition. Soak briefly before feeding.</li>
<li><strong>Avoid:</strong> Feeder goldfish (parasite and disease risk, poor nutrition, thiaminase content), mammalian proteins (beef heart, chicken), and fatty fish (mackerel, herring) as regular diet components.</li>
</ul>
<p>Feed after lights-out, when the catfish is naturally active. Juvenile specimens (under 30 cm) should be fed daily; subadults (30–60 cm) every other day; adults (60+ cm) three times per week with one fasting day. Overfeeding is a common issue — these catfish will gorge if given the opportunity, leading to obesity and hepatic steatosis.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Shovelnose Tiger Catfish are strictly nocturnal predators. During daylight hours, they wedge themselves into caves, under driftwood, or against dark tank walls, remaining almost completely motionless. As light levels drop in the evening, they emerge and begin patrolling the tank in search of food, using their highly sensitive barbels to detect prey movement and chemical signals in the water.</p>
<p>Toward conspecifics, Shovelnose Tigers are generally tolerant when adequate space and hiding places are provided. Groups of two to three can be maintained in 500+ gallon systems, though occasional territorial displays (jaw-locking, lateral body slaps) may occur during feeding. These interactions are rarely injurious in sufficiently large aquariums.</p>
<p>The species is a powerful ambush predator that will consume any fish small enough to fit in its cavernous mouth — and their mouths are deceptively large, capable of engulfing fish up to half their own body length. Tank mate selection must account for this.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must be too large to be swallowed and robust enough to share space with a powerful, active nocturnal catfish. Proven companions include:</p>
<ul>
<li><strong>Arowana</strong> — <a href="/species/platinum-arowana/">Platinum Arowana</a> and Silver Arowana are classic top-dwelling companions in monster fish setups (500+ gallon tanks).</li>
<li><strong>Large Bichirs</strong> — <em>Polypterus endlicherii</em> and <em>P. ornatipinnis</em>. Their armoured scales and nocturnal habits make them compatible bottom-dwellers.</li>
<li><strong>Peacock Bass</strong> — <a href="/species/peacock-bass/">Cichla species</a> are robust enough to cohabitate in very large systems.</li>
<li><strong>Other large catfish</strong> — <a href="/species/red-tail-catfish/">Red Tail Catfish</a> (in 1,000+ gallon systems only), large Plecostomus species, and Synodontis eupterus.</li>
<li><strong>Large Stingrays</strong> — <a href="/species/black-diamond-stingray/">Freshwater stingrays</a> occupy the bottom stratum and are generally ignored.</li>
</ul>
<p>Avoid all fish under 20 cm, aggressive cichlids that may harass the catfish during its vulnerable daytime resting period, and other nocturnal predators of similar size that compete directly for cave space.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of <em>Pseudoplatystoma tigrinum</em> is achieved commercially in South American aquaculture facilities using hormone induction (typically carp pituitary extract or synthetic GnRH analogues) — the species does not spawn spontaneously in captivity. Commercial breeding is driven by the food fish market rather than the ornamental trade, as Shovelnose Tigers are an important food fish in Brazil and Colombia.</p>
<p>In the wild, spawning is believed to occur during the flood season in shallow, inundated forest habitats. Eggs are scattered over submerged vegetation and receive no parental care. The logistics of replicating these conditions in a home aquarium — combined with the fish's size, space requirements, and the need for hormonal induction — make hobbyist breeding effectively impossible.</p>
<p>A significant concern in the trade is hybridisation. <em>Pseudoplatystoma tigrinum</em> is frequently crossed with <em>P. fasciatum</em>, <em>P. corruscans</em>, and even <em>Leiarius marmoratus</em> (the so-called "Tiger Shovelnose" hybrid) in commercial aquaculture. Hybrids may display unpredictable growth rates, adult sizes, and temperaments. When purchasing, seek specimens from reputable importers who can confirm species identification.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="stress-and-aggression">Stress & Aggression</h3>
<p>Shovelnose Tigers housed in undersized aquariums or without adequate daytime hiding places develop chronic stress that manifests as paled colouration, refusal to feed, erratic swimming, and increased susceptibility to infection. The single most effective treatment for stress-related illness in this species is to increase tank size and provide large, dark refuges. A Shovelnose Tiger that has access to a properly sized cave and emerges confidently at dusk is a healthy Shovelnose Tiger.</p>

<h3 id="bacterial-infections">Bacterial Infections</h3>
<p>As scaleless fish, Shovelnose Tigers are more vulnerable to bacterial skin infections (<em>Aeromonas</em>, <em>Pseudomonas</em>) than scaled species. Abrasions from rough substrate, sharp décor edges, or aggressive tank mates can quickly develop into ulcerative lesions in suboptimal water conditions. Prevention involves maintaining impeccable water quality (ammonia and nitrite at 0 ppm, nitrate below 20 ppm), using smooth sand substrate, and ensuring all tank furnishings are free of sharp edges. Treat confirmed bacterial infections with kanamycin or enrofloxacin (veterinary prescription) — avoid malachite green and formalin, which are poorly tolerated by scaleless catfish.</p>
<p>Internal parasites are common in wild-caught specimens. Prophylactic treatment with praziquantel (5 mg/L bath, 24 hours, repeated at day 14) is standard quarantine protocol. Monitor for white, stringy faeces and progressive weight loss as indicators of untreated parasite loads.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Shovelnose Tiger Catfish get?',
        answer:
          'Shovelnose Tiger Catfish commonly reach 80–90 cm (32–36 inches) in captivity and can exceed 100 cm (40 inches) in the wild. Growth rate in juveniles is rapid — 5–8 cm per month under optimal feeding and water conditions during the first year. This means a 10 cm juvenile purchased from a pet shop can reach 60+ cm within 12–18 months. Prospective keepers must plan for a 300+ gallon aquarium from the outset, as these fish cannot be responsibly kept in standard-sized tanks at any stage of their development.',
      },
      {
        question: 'What tank size does a Shovelnose Tiger need?',
        answer:
          'An adult Shovelnose Tiger Catfish requires a minimum 300-gallon (1,135-litre) aquarium measuring at least 240 cm long by 75 cm wide. Width is critical — narrow tanks prevent comfortable turning and cause chronic stress. For specimens exceeding 80 cm, or if keeping with other large fish in a community predator setup, 500+ gallons is strongly recommended. Custom-built plywood and fibreglass systems are often the most cost-effective option at these volumes.',
      },
      {
        question: 'Are Shovelnose Tiger Catfish aggressive?',
        answer:
          'Shovelnose Tiger Catfish are not aggressive in the territorial sense — they do not actively seek confrontation with tank mates. However, they are voracious ambush predators with a deceptively large mouth capable of swallowing fish up to half their own body length. Any tank mate small enough to fit in their mouth will eventually be eaten. They are generally tolerant of similarly sized fish that occupy different water column zones. Conspecific aggression is mild and ritualised when adequate space and hiding places are provided.',
      },
      {
        question: 'What do Shovelnose Tiger Catfish eat?',
        answer:
          'Shovelnose Tiger Catfish are carnivores that thrive on whole silversides, smelt, market prawns (shell-on), earthworms, and high-quality sinking carnivore pellets (Hikari Massivore, Northfin Predator). Feed after lights-out when the catfish is naturally active. Adults (60+ cm) should be fed three times per week; juveniles daily. Avoid feeder goldfish due to disease risk and poor nutritional value. Vitamin-soak all frozen foods to prevent nutritional deficiencies. A varied diet prevents fatty liver disease and supports the bold patterning that makes this species visually striking.',
      },
      {
        question: 'How long do Shovelnose Tiger Catfish live?',
        answer:
          'With proper care in an appropriately sized aquarium, Shovelnose Tiger Catfish live 15–20 years in captivity. Some specimens in public aquaria have exceeded 20 years. Lifespan is directly correlated with tank size, water quality, and dietary management. Fish kept in undersized tanks or fed exclusively on feeder fish rarely survive beyond 8–10 years. The long lifespan means purchasing a Shovelnose Tiger is a commitment comparable to adopting a dog — ensure you can provide two decades of specialised care before acquiring one.',
      },
    ],
    sources: [
      {
        title: 'Pseudoplatystoma tigrinum (Valenciennes, 1840)',
        url: 'https://www.fishbase.se/summary/Pseudoplatystoma-tigrinum.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Systematics and Biogeography of Pseudoplatystoma (Siluriformes: Pimelodidae)',
        url: 'https://doi.org/10.1590/S1679-62252006000300002',
        publisher: 'Neotropical Ichthyology',
      },
      {
        title:
          'Hybridisation in Pseudoplatystoma: Implications for Aquaculture and Conservation',
        url: 'https://doi.org/10.1111/jai.13553',
        publisher: 'Journal of Applied Ichthyology',
      },
      {
        title:
          'Reproductive Biology and Induced Spawning of Pseudoplatystoma tigrinum',
        url: 'https://doi.org/10.1016/j.aquaculture.2016.05.038',
        publisher: 'Aquaculture',
      },
    ],
    relatedSlugs: [
      'red-tail-catfish',
      'irwini-catfish',
      'platinum-arowana',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 26. Starry Night Cichlid
  // ─────────────────────────────────────────────
  {
    title: 'Starry Night Cichlid (Paratilapia polleni): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'starry-night-cichlid',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/starry-night-cichlid-hero.jpg',
    heroImageAlt:
      'Adult Starry Night Cichlid displaying jet-black body covered with iridescent gold-white star-like spots',
    metaTitle:
      'Starry Night Cichlid Care: Tank, Diet & Breeding',
    metaDescription:
      'Complete Starry Night Cichlid care guide — tank requirements, water parameters, diet & breeding tips for Paratilapia polleni.',
    quickAnswerQuestion:
      'How do you care for a Starry Night Cichlid?',
    quickAnswer:
      'Starry Night Cichlids need a minimum 75-gallon aquarium with robust filtration, moderate current, and neutral to slightly alkaline water (pH 7.0–8.0, 22–28 °C). They are semi-aggressive Malagasy cichlids best kept as a single specimen or bonded pair with large, hardy tank mates, and fed a varied diet of pellets, frozen foods, and occasional live prey.',
    summary:
      'The Starry Night Cichlid (Paratilapia polleni) is a stunning Madagascar endemic — one of only a handful of cichlid species native to the island. Its common name derives from the spectacular adult colouration: a jet-black body peppered with hundreds of iridescent gold, white, and blue spots that evoke a night sky. Listed as Vulnerable on the IUCN Red List due to habitat destruction and invasive species competition, the Starry Night Cichlid is both an aquarium showpiece and a conservation priority. This guide provides comprehensive care information for this rare and rewarding species, drawing on The Fish Collection\'s experience maintaining and breeding Malagasy cichlids.',
    scientificName: 'Paratilapia polleni',
    category: 'cichlid',
    keyFacts: [
      { label: 'Scientific Name', value: 'Paratilapia polleni' },
      { label: 'Max Size', value: '28 cm (11 in)' },
      { label: 'Tank Size', value: '75 gallons (285 L) minimum' },
      { label: 'Temperature', value: '22–28 °C (72–82 °F)' },
      { label: 'pH', value: '7.0–8.0' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Omnivore — pellets, frozen foods, and live prey' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Aquascaping', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'hole-in-the-head', text: 'Hole-in-the-Head Disease', level: 3 },
      { id: 'aggression-injuries', text: 'Aggression-Related Injuries', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Starry Night Cichlid (<em>Paratilapia polleni</em>) is one of Madagascar's most extraordinary freshwater fishes — and one of its most endangered. Endemic to the rivers and lakes of eastern and northern Madagascar, this robust <a href="/exotic-fish/cichlid/">cichlid</a> reaches approximately 28 cm (11 inches) in captivity and is instantly recognisable by its adult colouration: a deep black base colour blanketed with hundreds of iridescent spots that range from brilliant white to gold to electric blue depending on the fish's mood, lighting conditions, and viewing angle. The effect is genuinely reminiscent of a star-filled night sky — hence the common name.</p>
<p><em>Paratilapia polleni</em> is one of only two recognised species in the genus <em>Paratilapia</em> (the other being the closely related and equally endangered <em>P. bleekeri</em>). Madagascar's cichlid fauna is remarkably depauperate compared to the African Great Lakes — only a handful of native species exist — making every Malagasy cichlid a conservation priority. The IUCN lists <em>P. polleni</em> as Vulnerable, with wild populations declining due to deforestation-driven habitat degradation, competition from introduced tilapia (<em>Oreochromis</em> spp.), and predation by the invasive Asian snakehead (<em>Channa</em> spp.).</p>
<p>At The Fish Collection, we maintain a breeding colony of <a href="/species/starry-night-cichlid/">Starry Night Cichlids</a> sourced from verified F1 captive-bred stock. We consider captive maintenance and propagation of this species to be a genuine conservation contribution — every successful hobbyist breeding programme reduces pressure on wild populations and maintains genetic diversity outside of Madagascar. This guide equips you to both keep and breed this remarkable fish.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Paratilapia polleni</em> are found in the freshwater rivers, streams, and lakes of eastern and northern Madagascar, with stronghold populations in the Nosivolo River catchment, the Maroantsetra region, and scattered localities along the eastern escarpment. The habitats they occupy range from clear, moderately flowing highland streams with rocky substrates to lowland rivers with sandy-muddy bottoms and overhanging riparian vegetation.</p>
<p>Water chemistry across their range is generally neutral to slightly alkaline (pH 7.0–8.2), moderately hard (5–15 dGH), and warm (22–28 °C, with lower temperatures in highland streams). Madagascar's eastern rivers are characterised by seasonal flooding during the November–March wet season, which expands available habitat and disperses populations, followed by a dry season that concentrates fish into deeper pools and permanent river channels.</p>
<p>Starry Night Cichlids are generalist predators in the wild, feeding on aquatic insects, small fish, crustaceans, and organic detritus. They occupy a mid-water to benthic niche, using rocky structure and submerged wood as ambush points and territorial markers. Males are strongly territorial during breeding season and defend nesting sites aggressively against conspecifics and other species.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Aquascaping</h3>
<p>A single adult Starry Night Cichlid or a bonded pair requires a minimum 75-gallon (285 L) aquarium measuring at least 120 cm long × 45 cm wide × 50 cm tall. For a community setup with other large tank mates, 125+ gallons provides the territory needed to reduce aggression. These are active, moderately territorial cichlids that need both open swimming space and structured territory.</p>
<p>Aquascaping should incorporate large rocks (flat slate, river stone, lava rock) arranged to create caves, overhangs, and distinct territorial boundaries. Driftwood adds both visual complexity and mild tannin supplementation. If keeping a pair, provide at least two cave structures — the male will claim the primary cave as a spawning site, and the female needs an alternative retreat. Substrate should be medium-grade sand or fine gravel; avoid sharp substrates that could cause injury during the vigorous digging these cichlids engage in during breeding preparation.</p>
<p>Live plants are an option but will be rearranged and potentially damaged during breeding. Hardy species attached to rocks or wood (Anubias, Java fern, Bolbitis) survive best. Rooted plants will be uprooted by digging behaviour.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Filtration turnover of 6–8× the tank volume per hour is appropriate. A canister filter (Fluval FX4 for 75-gallon, FX6 for 125+ gallon) provides the biological capacity needed for a messy cichlid. Sponge pre-filters extend maintenance intervals and prevent fry from being drawn into the intake — important if you intend to breed the fish in the display tank.</p>
<p>Moderate flow along the tank length replicates natural river conditions and promotes good dissolved oxygen levels. Avoid stagnant areas, which encourage bacterial growth and contribute to the water quality degradation that Malagasy cichlids are sensitive to.</p>

<h3 id="lighting">Lighting</h3>
<p>The Starry Night Cichlid's iridescent spotting displays most dramatically under moderate lighting with a neutral-to-warm colour temperature (5,000–7,000 K). Avoid intense blue-spectrum lighting, which washes out the gold and white spot colouration. A dimmable LED fixture at 50–70% intensity on an 8–10 hour photoperiod provides excellent visual display while maintaining a comfortable light level for the fish.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Starry Night Cichlids are adaptable to a range of freshwater conditions, making them more forgiving than many exotic species. However, they perform best in stable, clean water that reflects their Malagasy river origins:</p>
<ul>
<li><strong>Temperature:</strong> 22–28 °C (72–82 °F). They tolerate a wider range than most tropical cichlids, with 24–26 °C being the optimal sweet spot. This cooler tolerance makes them viable for unheated aquariums in temperate climates.</li>
<li><strong>pH:</strong> 7.0–8.0. Neutral to slightly alkaline. Stable conditions matter more than hitting a precise value.</li>
<li><strong>GH:</strong> 5–15 dGH. Moderate hardness is ideal.</li>
<li><strong>KH:</strong> 3–10 dKH. Adequate buffering prevents pH fluctuations.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. Weekly 25–30% water changes with dechlorinated, temperature-matched water.</li>
</ul>
<p>Tannin supplementation via Indian almond leaves or alder cones is appreciated and provides mild antibacterial benefit. The light brown water tint also enhances the visual contrast of the fish's spotted patterning against a dark background.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Starry Night Cichlids are opportunistic omnivores with a carnivorous leaning. In the wild, their diet includes aquatic insect larvae, small fish, freshwater crustaceans, and plant-derived detritus. In captivity, offer a varied diet for optimal health and colouration:</p>
<ul>
<li><strong>Primary:</strong> High-quality cichlid pellets — NorthFin Cichlid Formula, Hikari Cichlid Gold, or New Life Spectrum. Feed once to twice daily, offering what the fish consumes within 2–3 minutes.</li>
<li><strong>Frozen:</strong> Bloodworms, Mysis shrimp, brine shrimp (enriched), and chopped market prawn. Feed 3–4 times per week as a supplement or alternating with pellets.</li>
<li><strong>Live:</strong> Earthworms, blackworms, and gut-loaded crickets provide excellent enrichment and conditioning for breeding. Offer once or twice weekly.</li>
<li><strong>Vegetable:</strong> Blanched spinach, zucchini medallions, and spirulina-enriched foods provide plant matter that supports digestive health.</li>
</ul>
<p>Colour-enhancing foods rich in astaxanthin and carotenoids intensify the gold and blue tones in the iridescent spotting. NorthFin and New Life Spectrum formulations include these pigment precursors as standard ingredients.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Starry Night Cichlids are semi-aggressive, territorial fish that assert dominance through lateral displays, gill flaring, and jaw-locking. Outside of breeding season, their aggression is moderate and manageable in appropriately sized tanks with adequate territory structure. During breeding, both sexes — but especially males — become significantly more aggressive, defending their spawning site vigorously against all tank mates.</p>
<p>Males are larger and develop more intense colouration than females, with a slight nuchal hump in mature specimens. Pair bonds are strong once established, and bonded pairs often remain together for years. However, pair formation can be violent — introduce a group of 5–6 juveniles and allow natural pairing, then remove unpaired individuals once a dominant pair establishes.</p>
<p>The species is intelligent and interactive, learning to recognise its keeper and responding to daily routines with visible anticipation. They are active swimmers that patrol their territory with confidence, making them a dynamic centrepiece for a Malagasy or general cichlid display.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates should be robust, moderately sized fish that can hold their own without provoking excessive aggression. Suitable companions include:</p>
<ul>
<li><strong>Other Malagasy cichlids</strong> — <em>Ptychochromis</em> species are compatible in large tanks and create a geographically accurate biotope display.</li>
<li><strong>Rainbowfish</strong> — Madagascar rainbowfish (<em>Bedotia</em> spp.) are ideal dither fish that occupy the upper water column.</li>
<li><strong>Large barbs</strong> — Tinfoil Barbs, Denison Barbs in schools of 6+.</li>
<li><strong>Robust catfish</strong> — Synodontis, large Bristlenose Pleco, or <a href="/species/zebra-pleco/">Zebra Pleco</a> (in separate territories).</li>
<li><strong>Other moderately aggressive cichlids</strong> — Severums, Geophagus, or <a href="/species/blue-zaire-frontosa/">Frontosa</a> in very large tanks (150+ gallons).</li>
</ul>
<p>Avoid small fish that could be eaten, overly aggressive species (Flowerhorn, large Mbuna), and delicate fish that cannot tolerate the semi-aggressive environment.</p>

<h2 id="breeding">Breeding</h2>
<p>Starry Night Cichlids are substrate-spawning biparental cichlids, and captive breeding is both achievable and highly encouraged given the species' conservation status. A bonded pair will select a flat rock surface or cave ceiling, clean it meticulously over several days, and deposit 200–500 adhesive eggs. Both parents guard the clutch aggressively, fanning the eggs and removing any that develop fungus.</p>
<p>Eggs hatch in 48–72 hours at 26 °C. The wrigglers are moved by the parents to pre-dug pits in the substrate, where they remain for an additional 4–5 days until they become free-swimming. Once free-swimming, the fry school tightly around the parents, who continue to defend them actively for 3–4 weeks. This extended parental care is one of the most fascinating behaviours to observe in freshwater cichlids.</p>
<p>To condition a pair for spawning, increase protein-rich foods (bloodworms, live earthworms) for 2–3 weeks and perform a series of 30% water changes with slightly cooler water (2–3 °C below tank temperature) to simulate seasonal rainfall. Ensure the pair has a dedicated cave or flat rock surface for egg deposition. If breeding in a community tank, be prepared for extreme aggression — the pair will attack any fish that approaches the spawning area, potentially injuring or killing tank mates. A dedicated breeding tank of 40–50 gallons is safer for all parties.</p>
<p>Raise fry on baby brine shrimp (Artemia nauplii) from day one of free-swimming, transitioning to crushed pellets and micro worms at 2–3 weeks. Fry grow quickly with frequent small feedings (4–5 times daily) and daily water changes of 25%.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="hole-in-the-head">Hole-in-the-Head Disease</h3>
<p>Like many cichlid species, Starry Night Cichlids are susceptible to hole-in-the-head disease (HITH/HLLE), which presents as pitted erosions on the head and lateral line. The condition is associated with the flagellate <em>Hexamita</em>, poor water quality (particularly elevated nitrate), vitamin deficiency, and the use of activated carbon in filtration. Treatment involves metronidazole (250 mg per 40 L, every 48 hours for three doses), improved diet with vitamin supplementation, and removal of activated carbon. Prevention is straightforward: maintain low nitrate through consistent water changes, feed a varied diet, and avoid prolonged use of chemical filtration media.</p>

<h3 id="aggression-injuries">Aggression-Related Injuries</h3>
<p>During breeding or territorial disputes, Starry Night Cichlids can inflict significant injuries on tank mates and conspecifics — torn fins, split lips, and scale loss are common. Minor injuries heal quickly in clean water with adequate nutrition. More serious wounds (deep lacerations, eye damage) may require antibiotic treatment with kanamycin or a broad-spectrum topical treatment. The best prevention is adequate tank size, multiple territory structures, and removing unpaired conspecifics from breeding tanks. If a bonded pair is terrorising community tank mates during spawning, consider temporarily isolating the pair in a dedicated breeding tank.</p>
<p>Other health considerations include ich (treat with raised temperature to 30 °C plus 2 g/L aquarium salt), bloat from overfeeding or poor-quality food (prevention: feed sparingly, use high-quality pellets), and stress-related conditions from inadequate hiding places or overly aggressive tank mates.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Are Starry Night Cichlids endangered?',
        answer:
          'Yes. Paratilapia polleni is listed as Vulnerable on the IUCN Red List, and some regional populations are considered Critically Endangered. Wild populations are declining due to habitat destruction from deforestation and siltation, competition from introduced tilapia species (Oreochromis), and predation by invasive Asian snakeheads (Channa). Captive breeding by responsible hobbyists is actively encouraged as a conservation measure. When purchasing, seek captive-bred specimens from breeders who can confirm generation lineage (F1, F2, etc.) rather than wild-caught fish.',
      },
      {
        question: 'How big do Starry Night Cichlids get?',
        answer:
          'Adult Starry Night Cichlids reach approximately 28 cm (11 inches) in captivity, with males being slightly larger than females. They are robust, laterally compressed fish with a stocky build that gives them a presence larger than their linear measurement suggests. Growth rate is moderate — expect 12–15 cm by the first year with proper feeding. Full adult size is typically reached by 2–3 years of age. A 75-gallon aquarium is the minimum for a single specimen or pair; 125+ gallons is recommended for community setups.',
      },
      {
        question: 'Can you breed Starry Night Cichlids in captivity?',
        answer:
          'Yes, and captive breeding is strongly encouraged given the species endangered conservation status. Starry Night Cichlids are substrate-spawning biparental cichlids that form strong pair bonds. A conditioned pair will deposit 200–500 eggs on a flat rock surface or cave ceiling, and both parents guard the clutch and free-swimming fry for 3–4 weeks. Trigger spawning by increasing protein-rich foods and performing cool water changes to simulate seasonal rainfall. Raise fry on baby brine shrimp from day one of free-swimming.',
      },
      {
        question: 'What tank mates work with Starry Night Cichlids?',
        answer:
          'Suitable tank mates include other moderately aggressive, robust fish of similar size: Severum cichlids, Geophagus species, large barbs (Tinfoil, Denison), Synodontis catfish, and Madagascar rainbowfish (Bedotia spp.) as dither fish. Avoid small fish that could be eaten, highly aggressive species like Flowerhorns, and delicate fish that cannot tolerate a semi-aggressive environment. During breeding, Starry Night Cichlids become significantly more aggressive — a dedicated breeding tank is advisable to prevent injury to community tank mates.',
      },
      {
        question: 'Why is my Starry Night Cichlid losing colour?',
        answer:
          'Colour loss in Starry Night Cichlids is typically caused by stress, poor water quality, inadequate diet, or incorrect lighting. Elevated nitrate (above 40 ppm), low water temperature, social stress from aggressive tank mates, and lack of colour-enhancing foods can all cause the iridescent spotting to dull. To restore colouration: perform a large water change, test and correct water parameters, feed high-quality colour-enhancing pellets containing astaxanthin, ensure the tank has adequate hiding places, and review lighting — neutral-to-warm colour temperatures (5,000–7,000 K) display the spots most vividly.',
      },
    ],
    sources: [
      {
        title: 'Paratilapia polleni (Bleeker, 1868)',
        url: 'https://www.fishbase.se/summary/Paratilapia-polleni.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Conservation Status of Malagasy Freshwater Fishes: Assessment and Action Plan',
        url: 'https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T16101A57419870.en',
        publisher: 'IUCN Red List',
      },
      {
        title:
          'Phylogenetics and Biogeography of Malagasy Cichlids (Paratilapia, Ptychochromis)',
        url: 'https://doi.org/10.1111/j.1095-8312.2009.01307.x',
        publisher: 'Biological Journal of the Linnean Society',
      },
      {
        title:
          'Invasive Species Threats to Madagascar Freshwater Biodiversity',
        url: 'https://doi.org/10.1007/s10530-015-0950-x',
        publisher: 'Biological Invasions',
      },
    ],
    relatedSlugs: [
      'flowerhorn-cichlid',
      'blue-zaire-frontosa',
      'peacock-bass',
      'blue-diamond-discus',
    ],
  },

  // ─────────────────────────────────────────────
  // 27. Irwini Catfish
  // ─────────────────────────────────────────────
  {
    title: 'Irwini Catfish (Paulicea lutkeni): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'irwini-catfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/irwini-catfish-hero.jpg',
    heroImageAlt:
      'Irwini Catfish with its distinctive flattened head and barred body pattern resting on sandy substrate in a large aquarium',
    metaTitle:
      'Irwini Catfish Care Guide: Tank Size, Diet & Setup',
    metaDescription:
      'Expert Irwini Catfish care guide — massive tank requirements, feeding protocols, water parameters & tank mates for Paulicea lutkeni. The Fish Collection advice.',
    quickAnswerQuestion:
      'What does an Irwini Catfish need in captivity?',
    quickAnswer:
      'Irwini Catfish require a minimum 500-gallon aquarium due to their potential 120+ cm adult size, powerful filtration with 8–10x turnover, and a meaty diet of whole fish, prawns, and sinking carnivore pellets. They are powerful nocturnal predators that need large caves and subdued lighting, kept with only similarly sized robust tank mates.',
    summary:
      'The Irwini Catfish (Paulicea lutkeni, formerly Brachyplatystoma juruense in some literature) is one of South America\'s most impressive large pimelodid catfish, reaching over 120 cm in the wild and 80–100 cm in captivity. Distinguished by its muscular body, flattened head, and attractive dark barred patterning, the Irwini is a nocturnal apex predator from the major river systems of the Amazon and Paraná basins. This species is suitable only for dedicated monster fish keepers with custom aquarium installations of 500+ gallons. This guide provides the specialist care information needed to maintain this rare and demanding catfish responsibly.',
    scientificName: 'Paulicea lutkeni',
    category: 'catfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Paulicea lutkeni' },
      { label: 'Max Size', value: '120+ cm (48 in) wild; 80–100 cm captive' },
      { label: 'Tank Size', value: '500 gallons (1,900 L) minimum' },
      { label: 'Temperature', value: '22–28 °C (72–82 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Expert — specialist only' },
      { label: 'Lifespan', value: '15–20+ years' },
      { label: 'Diet', value: 'Carnivore — whole fish, prawns, sinking pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Layout', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'bacterial-infections', text: 'Bacterial Infections', level: 3 },
      { id: 'obesity', text: 'Obesity & Organ Damage', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Irwini Catfish (<em>Paulicea lutkeni</em>) is a large pimelodid catfish native to South America's major river systems — the Amazon, Paraná, and São Francisco basins. Known in the Brazilian aquarium trade as "Jau" and in the international hobby as the Irwini or Gilded Catfish, this species combines impressive size (120+ cm in the wild) with a striking appearance: a muscular, torpedo-shaped body marked with irregular dark bars and blotches against a golden-olive to grey background, and a characteristically broad, flattened head with thick sensory barbels.</p>
<p>At The Fish Collection, we handle Irwini Catfish exclusively for clients who have demonstrated the infrastructure to house them permanently. This is not a species for upgraders or planners — if you do not already own a 500+ gallon system or have one under construction, an <a href="/species/irwini-catfish/">Irwini Catfish</a> is not appropriate for your current setup. The juveniles sold at 10–15 cm grow with startling speed, and an undersized aquarium during the growth phase causes permanent skeletal deformities and behavioural dysfunction.</p>
<p>For keepers with the space, however, the Irwini is a magnificent aquarium resident. It is less aggressive than many <a href="/exotic-fish/catfish/">monster catfish</a> species, develops a calm demeanour in well-maintained systems, and its nocturnal emergence from hiding is one of the most dramatic spectacles in the large-fish hobby.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Paulicea lutkeni</em> inhabit the deep channels and confluence zones of large South American rivers. They are particularly associated with the main channels of the Paraná, Paraguay, and São Francisco rivers in southern Brazil, as well as tributaries of the upper Amazon. These are powerful riverine environments with substantial current, rocky and sandy substrates, and depths that can exceed 20 metres during flood season.</p>
<p>Water conditions vary by drainage but are generally warm (22–28 °C), slightly acidic to neutral (pH 6.0–7.5), and soft to moderately hard (2–12 dGH). During the flood season (October–March in the southern hemisphere), Irwini disperse into inundated areas to feed; during the dry season, they concentrate in deeper river pools and channel confluences where current creates oxygenated holding water.</p>
<p>Irwini Catfish are apex predators in their native habitat, occupying the same trophic level as large <em>Pseudoplatystoma</em> species and <em>Brachyplatystoma</em>. Their diet consists primarily of fish, crustaceans, and occasionally small mammals or birds that fall into the water. They are nocturnal hunters that shelter in submerged rock formations, deep undercut banks, and log jams during daylight hours.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Layout</h3>
<p>An adult Irwini Catfish requires a minimum 500-gallon (1,900 L) aquarium with dimensions of at least 300 cm long × 90 cm wide × 70 cm tall (120 × 36 × 28 inches). Like most large pimelodids, width is critical — these are broad-bodied fish that need room to turn without bending against the glass. Custom-built plywood-and-fibreglass systems or large acrylic tanks are the most practical options at this volume.</p>
<p>The tank should feature a fine sand substrate (Irwini have smooth, scaleless skin that is easily abraded by gravel), large cave structures built from rock or oversized PVC pipe (20+ cm diameter), and minimal additional décor. These catfish are powerful and will displace anything that is not firmly secured or too heavy to move. Ensure cave entrances are large enough for the fish's full body — Irwini will attempt to enter caves even when they have outgrown them, potentially becoming stuck.</p>
<p>Leave at least 60–70% of the tank floor as open space. Irwini are active nocturnal swimmers that patrol the entire tank length during feeding hours and need unobstructed swimming lanes.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>Filtration must handle the substantial waste output of a large carnivorous catfish. Target 8–10× turnover per hour, which for a 500-gallon system means 15,000–19,000 litres per hour of combined pump capacity. A large sump (100+ gallons) with mechanical prefiltration, a moving-bed bio-reactor, and UV sterilisation (80+ watts) is the standard approach. Weekly water changes of 30–40% are essential to maintain nitrate below 20 ppm.</p>
<p>Moderate current is appropriate and replicates riverine conditions. A spray bar or multiple return outlets distributed along the back wall create even flow without creating turbulent zones that stress resting fish.</p>

<h3 id="lighting">Lighting</h3>
<p>Irwini Catfish are strictly nocturnal and will not emerge from hiding under bright lighting. Use dimmable LEDs at 15–30% intensity during the day, with a gradual 30–60 minute dusk transition. Moonlight LEDs (deep blue or red spectrum at very low intensity) are essential for observing nocturnal activity. The fish's golden-olive colouration and dark barring display best under warm-neutral light (5,500–6,500 K).</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Irwini Catfish tolerate a range of freshwater conditions but perform best with parameters that reflect their native South American river habitats:</p>
<ul>
<li><strong>Temperature:</strong> 22–28 °C (72–82 °F). They tolerate a wider range than many tropical species, including cooler temperatures that would stress Amazonian fish from blackwater habitats.</li>
<li><strong>pH:</strong> 6.0–7.5. Slightly acidic to neutral is preferred.</li>
<li><strong>GH:</strong> 2–15 dGH. Soft to moderately hard water is acceptable.</li>
<li><strong>KH:</strong> 2–8 dKH. Maintain sufficient buffering for pH stability.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Scaleless catfish are acutely sensitive to dissolved nitrogenous wastes.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. With the heavy biological load this species generates, twice-weekly water changes may be necessary in systems without supplementary nutrient export.</li>
</ul>
<p>Indian almond leaves and driftwood provide beneficial tannins that create a more natural chemical environment and have mild antibacterial properties. The resulting water tint also reduces ambient light, encouraging daytime activity.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Irwini Catfish are obligate carnivores that require a protein-rich diet. In captivity, they accept a range of meaty foods and should be offered variety for nutritional completeness:</p>
<ul>
<li><strong>Primary:</strong> Whole silversides, smelt, tilapia fillets, and lance fish — vitamin-soaked before feeding. For adults, offer 3–5 large fish per feeding session, 3 times per week.</li>
<li><strong>Secondary:</strong> Large market prawns (shell-on), whole crayfish, earthworm bundles, and squid strips.</li>
<li><strong>Pellets:</strong> High-quality sinking carnivore pellets (Hikari Massivore, Northfin Predator Formula) are readily accepted and provide balanced nutrition including vitamins that may be deficient in a whole-fish diet.</li>
<li><strong>Avoid:</strong> Feeder goldfish (parasites, thiaminase, poor nutrition), mammalian proteins, and fatty fish as regular dietary components.</li>
</ul>
<p>Feed exclusively after lights-out. Irwini are reluctant daytime feeders and may refuse food under bright conditions. Juvenile specimens (under 30 cm) should be fed daily; subadults (30–60 cm) every other day; adults (60+ cm) three times per week. One fasting day per week supports digestive health and prevents obesity.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Irwini Catfish are less aggressive than many large pimelodids, displaying a relatively calm temperament in spacious, well-structured aquariums. During daylight hours, they rest in caves or against dark surfaces, occasionally shifting position but rarely engaging in active swimming. At dusk, they emerge and patrol the tank methodically, using their barbels to scan the substrate and water column for food.</p>
<p>Toward conspecifics, Irwini are moderately territorial but generally tolerant in tanks with adequate cave space. Two to three individuals can coexist in 1,000+ gallon systems with separate hiding places. Aggression escalates primarily around cave occupation — ensure one large cave per fish to minimise conflict.</p>
<p>As predators, Irwini will consume any fish small enough to swallow. Their large mouth can accommodate prey up to 40% of their body length. All tank mates must be sized accordingly.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must be too large to eat and robust enough to share space with a powerful nocturnal catfish. Compatible species include:</p>
<ul>
<li><strong>Other large catfish</strong> — <a href="/species/shovelnose-tiger-catfish/">Shovelnose Tiger Catfish</a>, <a href="/species/red-tail-catfish/">Red Tail Catfish</a> (1,000+ gallon systems only), and large Plecostomus species.</li>
<li><strong>Arowana</strong> — Silver Arowana and <a href="/species/platinum-arowana/">Platinum Arowana</a> as top-dwelling companions.</li>
<li><strong>Large Bichirs</strong> — <em>Polypterus endlicherii</em> and <em>P. ornatipinnis</em> share nocturnal habits and have protective armoured scales.</li>
<li><strong>Large cichlids</strong> — <a href="/species/peacock-bass/">Peacock Bass</a>, large Oscars, and <a href="/species/wolf-fish/">Wolf Fish</a> in appropriately massive systems.</li>
<li><strong>Freshwater stingrays</strong> — <a href="/species/black-diamond-stingray/">Motoro and Black Diamond stingrays</a> in wide tanks.</li>
</ul>
<p>Avoid all fish under 25 cm, aggressive species that target resting catfish during the day, and bottom-dwelling species too small to defend their space.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of <em>Paulicea lutkeni</em> has not been documented in the aquarium hobby. In the wild, the species is believed to undertake long-distance migratory spawning runs during the flood season, depositing eggs in shallow, oxygenated rapids upstream of normal holding habitat. This migratory reproductive strategy makes captive breeding impractical — the fish require environmental triggers (flood simulation, current changes, thousands of metres of swimming distance) that cannot be replicated in any home aquarium.</p>
<p>Commercial aquaculture of the Jau/Irwini for the food fish market in Brazil uses hormone-induced spawning with carp pituitary extract, but this requires institutional-scale pond facilities and veterinary expertise. All Irwini Catfish in the ornamental trade are wild-caught, primarily from the Paraná and São Francisco river systems.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="bacterial-infections">Bacterial Infections</h3>
<p>Scaleless pimelodid catfish are inherently more vulnerable to bacterial infections than scaled species. <em>Aeromonas</em> and <em>Pseudomonas</em> infections present as reddened patches, ulcerative lesions, and fin erosion, typically arising from poor water quality, physical abrasions from rough substrate or décor, or stress from inadequate tank size. Treatment involves correcting water quality, applying topical antiseptic (povidone-iodine) to accessible lesions, and systemic antibiotic therapy with kanamycin or enrofloxacin. Prevention centres on maintaining pristine water conditions, using smooth sand substrate, and ensuring all cave edges are free of sharp protrusions.</p>

<h3 id="obesity">Obesity & Organ Damage</h3>
<p>Irwini Catfish are prone to obesity when overfed, particularly with high-fat food items. Hepatic steatosis (fatty liver disease) develops insidiously and presents as abdominal distension, reduced activity, and appetite loss in advanced stages. Prevent obesity by adhering strictly to the recommended feeding schedule (three times weekly for adults, with one fasting day), avoiding mammalian proteins and fatty fish, and monitoring body condition regularly. A healthy Irwini should have a muscular, streamlined profile — visible abdominal rounding indicates overfeeding.</p>
<p>Internal parasites are common in wild-caught specimens. Prophylactic treatment with praziquantel (5 mg/L bath for 24 hours, repeated at day 14) during a 6-week quarantine period is essential. Watch for white stringy faeces and progressive weight loss as indicators of parasite burden.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Irwini Catfish get?',
        answer:
          'Irwini Catfish (Paulicea lutkeni) can reach over 120 cm (48 inches) in the wild, making them one of the largest pimelodid catfish species. In captivity, 80–100 cm (32–40 inches) is typical for well-maintained adults in appropriately sized aquariums. Growth is rapid in juveniles — expect 5–8 cm per month in the first year under optimal conditions. This means a 10 cm juvenile can reach 70+ cm within 18 months. A minimum 500-gallon aquarium is essential, and keepers should plan for the full adult size from the moment of purchase.',
      },
      {
        question: 'What tank size does an Irwini Catfish need?',
        answer:
          'An adult Irwini Catfish requires a minimum 500-gallon (1,900-litre) aquarium with dimensions of at least 300 cm long by 90 cm wide. Width is critical for comfortable turning and swimming. These tanks are almost always custom-built from plywood and fibreglass or large acrylic panels. The loaded weight of approximately 2,500 kg requires ground-floor placement on a concrete slab. Keepers who cannot provide this scale of infrastructure should not purchase an Irwini Catfish — there is no responsible way to house an adult in a smaller system.',
      },
      {
        question: 'What do Irwini Catfish eat?',
        answer:
          'Irwini Catfish are obligate carnivores that require a diet of whole fish (silversides, smelt, tilapia fillets), large prawns, crayfish, earthworms, and high-quality sinking carnivore pellets (Hikari Massivore, Northfin Predator Formula). Feed after lights-out when the catfish is naturally active. Adults should be fed three times per week with one fasting day. Avoid feeder goldfish due to disease risk and poor nutritional value. Vitamin-soak all frozen foods to prevent deficiency. Overfeeding is the most common dietary mistake — these fish will gorge if permitted, leading to obesity and liver damage.',
      },
      {
        question: 'Are Irwini Catfish aggressive?',
        answer:
          'Irwini Catfish are less aggressive than many large pimelodid species, displaying a relatively calm temperament in spacious aquariums with adequate hiding places. They are not territorially aggressive toward similarly sized tank mates that occupy different water column zones. However, they are powerful ambush predators with large mouths capable of swallowing fish up to 40% of their own body length — any tank mate small enough to be eaten eventually will be. Multiple Irwini can coexist in 1,000+ gallon systems with separate cave structures.',
      },
      {
        question: 'Is the Irwini Catfish the same as the Jau Catfish?',
        answer:
          'Yes. "Jau" is the Brazilian common name for Paulicea lutkeni, while "Irwini Catfish" is the name used in the international aquarium trade. The species has undergone taxonomic revision — older literature may reference it under the genus Zungaro or Brachyplatystoma. Regardless of the name used, the care requirements are identical. When purchasing, confirm species identity with the importer, as several large pimelodid catfish are sold under imprecise common names that can cause confusion about expected adult size and behaviour.',
      },
    ],
    sources: [
      {
        title: 'Paulicea lutkeni (Steindachner, 1876)',
        url: 'https://www.fishbase.se/summary/Paulicea-lutkeni.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Systematics of Large Pimelodidae (Siluriformes) from South America',
        url: 'https://doi.org/10.1590/S1679-62252006000200016',
        publisher: 'Neotropical Ichthyology',
      },
      {
        title:
          'Migratory Behaviour and Spawning Ecology of Large Pimelodid Catfish in the Paraná Basin',
        url: 'https://doi.org/10.1111/jai.12755',
        publisher: 'Journal of Applied Ichthyology',
      },
      {
        title:
          'Water Quality and Health Management for Large Catfish in Captive Environments',
        url: 'https://doi.org/10.1016/j.aquaculture.2020.735244',
        publisher: 'Aquaculture',
      },
    ],
    relatedSlugs: [
      'shovelnose-tiger-catfish',
      'red-tail-catfish',
      'platinum-arowana',
      'wolf-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 28. Red Tail Catfish
  // ─────────────────────────────────────────────
  {
    title: 'Red Tail Catfish (Phractocephalus hemioliopterus): Complete Care Guide & Tank Setup | The Fish Collection',
    slug: 'red-tail-catfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/species/red-tail-catfish-hero.jpg',
    heroImageAlt:
      'Adult Red Tail Catfish displaying its characteristic bright orange-red caudal fin and bicoloured dark-and-white body',
    metaTitle:
      'Red Tail Catfish Care: Tank Size, Diet & Setup Guide',
    metaDescription:
      'Expert Red Tail Catfish care guide — giant tank needs, diet, water parameters & tank mates for Phractocephalus hemioliopterus.',
    quickAnswerQuestion:
      'What does a Red Tail Catfish need in an aquarium?',
    quickAnswer:
      'Red Tail Catfish require a minimum 1,000-gallon aquarium or indoor pond due to their 100–130 cm adult size. They need powerful filtration with 10x+ turnover, neutral water (pH 6.0–7.5, 22–28 °C), and a varied carnivorous diet of whole fish, prawns, and pellets. They must be housed with only very large, robust tank mates.',
    summary:
      'The Red Tail Catfish (Phractocephalus hemioliopterus) is perhaps the most iconic — and most commonly abandoned — monster catfish in the aquarium hobby. Native to the Amazon, Orinoco, and Essequibo river systems, this pimelodid catfish reaches 130 cm (over 4 feet) in captivity and is instantly recognisable by its striking tricolour pattern: a dark grey-black dorsum, a crisp white lateral band, and a vivid orange-red caudal fin. It is a spectacularly beautiful fish that is also spectacularly demanding, requiring infrastructure that exceeds what 99% of home aquarists can provide. This guide provides unfiltered, expert-level information on what Red Tail Catfish ownership actually entails.',
    scientificName: 'Phractocephalus hemioliopterus',
    category: 'catfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Phractocephalus hemioliopterus' },
      { label: 'Max Size', value: '130 cm (52 in) in captivity' },
      { label: 'Tank Size', value: '1,000 gallons (3,785 L) minimum' },
      { label: 'Temperature', value: '22–28 °C (72–82 °F)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Expert — specialist only' },
      { label: 'Lifespan', value: '20–30+ years' },
      { label: 'Diet', value: 'Carnivore — whole fish, prawns, large pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions & Construction', level: 3 },
      { id: 'filtration-and-flow', text: 'Filtration & Flow', level: 3 },
      { id: 'lighting', text: 'Lighting', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'swallowed-objects', text: 'Foreign Body Ingestion', level: 3 },
      { id: 'obesity', text: 'Obesity & Fatty Liver', level: 3 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Red Tail Catfish (<em>Phractocephalus hemioliopterus</em>) is the sole living member of its genus and one of the most recognisable freshwater fish on Earth. Its tricolour pattern — dark dorsum, bright white lateral stripe, and vivid orange-red caudal and dorsal fins — makes it a perennial crowd-pleaser at public aquariums worldwide. In the wild, specimens reach 180 cm (6 feet) and weigh over 80 kg; in captivity, 100–130 cm (40–52 inches) is standard for adults provided adequate space.</p>
<p>The Red Tail Catfish is also, without exaggeration, the single most commonly surrendered large fish in the aquarium hobby. Pet shops sell adorable 5–8 cm juveniles to unsuspecting buyers who have no concept of the animal's growth rate (15–20 cm in the first year, 60+ cm by year two) or adult space requirements (1,000+ gallon minimum). Public aquariums, zoos, and rescue organisations are overwhelmed with unwanted Red Tails. At The Fish Collection, we refuse to sell this species to any customer who cannot demonstrate they already own — or have under construction — a system of at least 1,000 gallons.</p>
<p>This is not meant to discourage legitimate keepers. A well-maintained <a href="/species/red-tail-catfish/">Red Tail Catfish</a> in an appropriately sized system is one of the most magnificent displays in the freshwater hobby. These are intelligent, interactive animals that develop strong bonds with their keepers and can live for three decades. The key is entering ownership with full knowledge of the commitment. This guide provides that knowledge in uncompromising detail.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild <em>Phractocephalus hemioliopterus</em> range across the Amazon basin, the Orinoco drainage in Venezuela and Colombia, and the Essequibo River system in Guyana. They occupy the main channels of large rivers, deep pools at tributary confluences, and the submerged forest habitats that form during the annual flood cycle. These are powerful river environments with moderate to strong current, sandy to rocky substrates, and complex submerged structure provided by fallen trees and rock formations.</p>
<p>Water conditions across their range are variable: temperature 22–30 °C, pH 5.5–7.5 (depending on whether the habitat is blackwater, whitewater, or clearwater), and GH from near-zero in blackwater tributaries to 12+ dGH in whitewater systems. Red Tail Catfish are adaptable to this range of conditions, which partly explains their success in captivity — they are among the hardiest of large <a href="/exotic-fish/catfish/">catfish species</a> with respect to water chemistry tolerance.</p>
<p>In the wild, Red Tails are ambush predators and opportunistic scavengers. They position themselves in areas of structural cover and use their broad, flat head and cavernous mouth to engulf prey — fish, crustaceans, fallen fruit, and essentially anything organic that fits in their mouth. Their indiscriminate feeding behaviour is important to understand for captive management: Red Tails will attempt to eat anything in their environment, including tank décor, heater guards, and other fish that are nominally "too large" to be swallowed.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<h3 id="tank-dimensions">Tank Dimensions & Construction</h3>
<p>An adult Red Tail Catfish requires a minimum 1,000-gallon (3,785 L) aquarium or indoor pond with dimensions of at least 360 cm long × 120 cm wide × 75 cm tall (12 × 4 × 2.5 feet). These are not standard dimensions by any measure — Red Tail tanks are custom builds, period. The most common construction methods are plywood lined with fibreglass and marine-grade epoxy, or large welded acrylic panels on a structural steel frame. Glass is impractical at this volume due to weight and fragility risk.</p>
<p>The loaded weight of a 1,000-gallon system exceeds 5,000 kg (11,000 lbs). Ground-floor placement on a reinforced concrete slab is mandatory. Upper-floor installations are not feasible for any residential structure. The tank room must have floor drains for large water changes (250–400 gallons per session), proximity to water supply, adequate electrical capacity for pumps and heaters, and climate control to prevent excessive ambient heat from the equipment.</p>
<p>Interior layout should be minimalist. A smooth sand substrate (Red Tails have sensitive barbels and smooth scaleless skin), one or two very large shelters (sections of 30+ cm diameter culvert pipe or custom-built plywood caves), and no loose objects that could be swallowed. Red Tail Catfish will eat gravel, small rocks, heater components, and thermometer probes if given the opportunity — the tank must be "Red Tail proofed" with the same diligence one would baby-proof a house.</p>

<h3 id="filtration-and-flow">Filtration & Flow</h3>
<p>The filtration requirement for a Red Tail Catfish is industrial in scale. Target a combined turnover of 10–12× the tank volume per hour — for a 1,000-gallon system, that means 38,000–45,000 litres per hour. A large sump (200+ gallons) is the biological core, typically incorporating a settling chamber, a moving-bed bio-reactor (50+ litres of K1 media), static bio-media, and a high-wattage UV steriliser (110+ watts). Many keepers add a bead filter or pressurised sand filter for mechanical polishing, particularly after messy feeding events.</p>
<p>The water-change regimen is substantial: 30–40% weekly (300–400 gallons), ideally performed with an automated drip system connected to an RO reservoir and a drain. Manual water changes at this volume are physically demanding and time-consuming; automation is not a luxury but a practical necessity for sustainable long-term management.</p>

<h3 id="lighting">Lighting</h3>
<p>Standard LED lighting at moderate intensity. Red Tail Catfish are crepuscular — most active at dawn and dusk — and tolerate normal aquarium lighting without issue. The fish's striking colouration displays best under neutral white light (6,000–7,000 K). No special lighting requirements apply.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Red Tail Catfish are adaptable to a wide range of freshwater conditions, making water chemistry management relatively straightforward compared to the space and filtration challenges:</p>
<ul>
<li><strong>Temperature:</strong> 22–28 °C (72–82 °F). At this tank volume, two or more titanium inline heaters with a centralized digital controller are necessary for consistent temperature maintenance.</li>
<li><strong>pH:</strong> 6.0–7.5. Neutral is ideal; the species tolerates slight acidity to slight alkalinity without issue.</li>
<li><strong>GH:</strong> 2–15 dGH. No strong preference; adapts to local tap water in most regions.</li>
<li><strong>KH:</strong> 2–10 dKH. Maintain sufficient buffering to prevent pH crashes from the heavy biological load.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Despite their toughness, Red Tails are scaleless and sensitive to dissolved nitrogenous waste.</li>
<li><strong>Nitrate:</strong> &lt;20 ppm. The filtration and water-change regimen must be calibrated to maintain this threshold despite the substantial waste output of a 20+ kg predatory catfish.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Red Tail Catfish are voracious, indiscriminate feeders that will consume anything organic placed in their environment — and many things that are not organic. Dietary management is critical both for nutritional health and to prevent the foreign-body impaction events that are a leading cause of Red Tail morbidity in captivity.</p>
<p>A balanced feeding schedule for an adult Red Tail includes:</p>
<ul>
<li><strong>Primary:</strong> Whole fish — tilapia fillets, silversides, smelt, trout. Vitamin-soaked before feeding. For a 100+ cm specimen, offer 300–500 grams per feeding, 2–3 times per week.</li>
<li><strong>Secondary:</strong> Whole shell-on prawns (head-on for calcium), large crayfish, squid, and earthworm bundles.</li>
<li><strong>Pellets:</strong> Hikari Massivore Delite or Northfin Monster Predator Formula. These large sinking pellets are nutritionally balanced and accepted eagerly by trained specimens.</li>
<li><strong>Fasting:</strong> Two days per week minimum. Red Tails are extremely prone to obesity; their sedentary captive lifestyle burns far fewer calories than their active wild existence.</li>
</ul>
<p>Absolutely avoid feeder goldfish and other live feeder fish. Beyond the well-documented disease risk and nutritional deficiency, the feeding response triggered by live prey can cause Red Tails to become hyperaggressive and difficult to manage during routine tank maintenance. Never feed mammalian proteins (chicken, beef) — these cause fatty deposits and liver damage over time.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Red Tail Catfish are powerful, confident predators that, when properly maintained, develop a calm, almost dog-like disposition. They learn their keeper's appearance, feeding schedule, and tank maintenance routine, and many specimens allow gentle touch on their head and barbels during feeding (though this carries risk — their pectoral fin spines can cause deep, painful puncture wounds). They are more active during low-light periods (dawn, dusk, night) but will emerge for food at any time once conditioned to a feeding routine.</p>
<p>The species is not inherently aggressive in the territorial sense. Red Tails do not defend territory or attack tank mates out of malice. Their "aggression" is purely predatory — they will attempt to eat any fish that can fit in their remarkably elastic mouth, which can gape wide enough to accommodate prey up to 50% of the catfish's own body length. Many seemingly secure tank mates have been lost to overnight predation events that the keeper never anticipated.</p>
<p>Red Tails are also notorious escape artists and tank-furniture destroyers. They can displace heaters, crack glass covers, and shift heavy rocks. All equipment must be secured, enclosed, or positioned outside the tank (inline heaters, external UV units). The tank cover must be strong enough to withstand the fish's full body weight pressing upward.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Tank mates must be too large to be swallowed and robust enough to coexist with a 100+ cm predator in a 1,000+ gallon system. The candidate list is short:</p>
<ul>
<li><strong>Arowana</strong> — Silver Arowana and <a href="/species/platinum-arowana/">Platinum Arowana</a> are the classic top-dwelling partners in monster fish communities.</li>
<li><strong>Other large catfish</strong> — <a href="/species/shovelnose-tiger-catfish/">Shovelnose Tiger Catfish</a>, <a href="/species/irwini-catfish/">Irwini Catfish</a>, and Ripsaw Catfish (<em>Oxydoras niger</em>) are compatible bottom-dwellers.</li>
<li><strong>Large Bichirs</strong> — <em>Polypterus endlicherii</em> at 50+ cm can coexist, though monitor for predation attempts on smaller individuals.</li>
<li><strong>Peacock Bass</strong> — <a href="/species/peacock-bass/">Cichla species</a> at 40+ cm in very large systems.</li>
<li><strong>Freshwater stingrays</strong> — Large <em>Potamotrygon</em> species in wide tanks with adequate floor space.</li>
</ul>
<p>Even with "compatible" species, nocturnal predation is always a risk. Size-match all tank mates carefully and err on the side of larger companions. A Red Tail Catfish that has successfully eaten a tank mate will actively target similarly sized fish in the future.</p>

<h2 id="breeding">Breeding</h2>
<p>Captive breeding of <em>Phractocephalus hemioliopterus</em> has been achieved at a small number of commercial aquaculture facilities in South America and Southeast Asia using hormone induction (carp pituitary extract), but it has never been accomplished in a home aquarium setting. The species is believed to undertake migratory spawning runs in the wild, with reproduction linked to seasonal flooding and environmental triggers that cannot be replicated in captivity.</p>
<p>Red Tail Catfish in the ornamental trade are overwhelmingly wild-caught from the Amazon and Orinoco basins. The species is not currently considered threatened due to its large natural range and habitat adaptability, but collection data is limited and localised overfishing for both food and ornamental markets may pose regional risks. Responsible ownership — including a commitment to lifetime care rather than acquisition and eventual surrender — is the most meaningful contribution hobbyists can make to the species' welfare.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="swallowed-objects">Foreign Body Ingestion</h3>
<p>The most distinctive health risk for captive Red Tail Catfish is foreign body ingestion. Their indiscriminate feeding behaviour means they will swallow gravel, small rocks, heater components, thermometer probes, filter intake guards, and any loose object in their environment. Small items may pass through the digestive tract without incident; larger items cause intestinal impaction, which presents as appetite loss, abdominal distension, and lethargy. Severe cases require surgical intervention by an aquatic veterinarian — a complicated, expensive, and high-risk procedure in a fish this size. Prevention is the only reliable strategy: ensure the tank contains nothing the fish can swallow except food. Sand substrate only, no gravel. All equipment either external or armoured with heavy-gauge protective housings.</p>

<h3 id="obesity">Obesity & Fatty Liver</h3>
<p>Red Tail Catfish in captivity are almost universally overfed. Their enthusiastic feeding response and "begging" behaviour — swimming to the front of the tank, opening their mouth, and sometimes splashing — triggers a caretaking instinct in their keepers that results in excessive meal frequency and portion sizes. Hepatic steatosis is the eventual result, presenting as an increasingly rounded abdomen, lethargy, and appetite reduction. By the time clinical signs appear, the condition may be irreversible.</p>
<p>The discipline required is straightforward but emotionally challenging: feed adult Red Tails no more than two to three times per week, maintain two fasting days, and ignore the begging. A lean, active Red Tail with a streamlined body profile will outlive a fat, sedentary one by years or decades.</p>
<p>Additional health considerations include scaleless-skin sensitivity to copper-based medications (use only catfish-safe treatments), internal parasites in wild-caught specimens (prophylactic praziquantel during quarantine), and pectoral fin spine injuries — both to the fish (fractured or infected spines from collisions with tank walls in undersized systems) and to the keeper (puncture wounds from handling). Always use wet towels, not nets, when moving Red Tail Catfish, and wear thick gloves to protect against the serrated pectoral spines.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Red Tail Catfish get?',
        answer:
          'Red Tail Catfish reach 100–130 cm (40–52 inches) in captivity and up to 180 cm (6 feet) in the wild. Growth rate is extremely rapid: juveniles purchased at 5–8 cm can reach 60+ cm within the first 18–24 months. This explosive growth means that any keeper who does not already possess a 1,000+ gallon system should not purchase this species. Red Tail Catfish are the single most commonly surrendered large fish in the hobby precisely because buyers underestimate their adult size and growth rate.',
      },
      {
        question: 'What size tank does a Red Tail Catfish need?',
        answer:
          'An adult Red Tail Catfish requires a minimum 1,000-gallon (3,785-litre) aquarium or indoor pond measuring at least 360 cm long by 120 cm wide. This is a custom-built installation — no commercially available standard aquarium approaches these dimensions. The loaded weight exceeds 5,000 kg, requiring ground-floor placement on a reinforced concrete slab. The room needs floor drains, substantial water supply access, and electrical capacity for industrial-grade filtration and heating equipment. This is not a fish that can be started in a smaller tank and upgraded later.',
      },
      {
        question: 'How long do Red Tail Catfish live?',
        answer:
          'Red Tail Catfish are among the longest-lived freshwater aquarium species, with lifespans of 20–30+ years in captivity when properly maintained. Some public aquarium specimens have exceeded 35 years. This extraordinary longevity means purchasing a Red Tail Catfish is a commitment comparable to adopting a large dog — the fish may outlive significant life changes including moves, career shifts, and family expansion. Ensure you can provide decades of specialised care before acquiring one. Premature death (under 15 years) is almost always attributable to inadequate tank size, poor water quality, or obesity from overfeeding.',
      },
      {
        question: 'Can Red Tail Catfish live with other fish?',
        answer:
          'Red Tail Catfish can coexist with other very large, robust fish in systems of 1,000+ gallons. Compatible species include Silver and Platinum Arowana, Shovelnose Tiger Catfish, Irwini Catfish, large Bichirs (50+ cm), Peacock Bass, and large freshwater stingrays. All tank mates must be too large to fit in the Red Tail\'s remarkably elastic mouth — which can accommodate prey up to 50% of its own body length. Even seemingly safe tank mates are at risk of overnight predation. Size-match conservatively and monitor continuously.',
      },
      {
        question: 'Why are so many Red Tail Catfish surrendered?',
        answer:
          'Red Tail Catfish are the most commonly surrendered large fish because pet shops sell small, attractive 5–8 cm juveniles to buyers who have no understanding of the species adult size (over 1 metre), growth rate (60+ cm in under two years), or tank requirements (1,000+ gallons minimum). When the fish outgrows its tank — which happens within months — owners face the choice of a massive infrastructure investment or surrender. Public aquariums, zoos, and fish rescues are overwhelmed with unwanted Red Tails. Responsible retailers should refuse to sell this species without verifying the buyer has appropriate permanent housing.',
      },
      {
        question: 'What do Red Tail Catfish eat?',
        answer:
          'Red Tail Catfish are carnivores fed whole fish (tilapia, silversides, smelt, trout), shell-on prawns, crayfish, squid, and large sinking carnivore pellets (Hikari Massivore, Northfin Monster Predator). Feed adults two to three times per week with two fasting days to prevent obesity. Absolutely avoid feeder goldfish due to disease risk, poor nutrition, and behavioural conditioning issues. Never feed mammalian proteins (chicken, beef). Vitamin-soak all frozen fish before feeding. These fish will eat anything — including non-food items — so ensure the tank contains no swallowable objects.',
      },
    ],
    sources: [
      {
        title: 'Phractocephalus hemioliopterus (Bloch & Schneider, 1801)',
        url: 'https://www.fishbase.se/summary/Phractocephalus-hemioliopterus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Ecology and Life History of Phractocephalus hemioliopterus in the Amazon Basin',
        url: 'https://doi.org/10.1111/jai.12908',
        publisher: 'Journal of Applied Ichthyology',
      },
      {
        title:
          'Captive Husbandry of Large Pimelodid Catfish: Space Requirements and Welfare Indicators',
        url: 'https://doi.org/10.1002/zoo.21467',
        publisher: 'Zoo Biology',
      },
      {
        title:
          'Foreign Body Ingestion in Captive Freshwater Fish: Diagnosis and Surgical Management',
        url: 'https://doi.org/10.1111/jfb.14240',
        publisher: 'Journal of Fish Biology',
      },
      {
        title:
          'Hepatic Steatosis in Overfed Ornamental Fish: Pathology and Prevention',
        url: 'https://doi.org/10.1111/jfd.13038',
        publisher: 'Journal of Fish Diseases',
      },
    ],
    relatedSlugs: [
      'shovelnose-tiger-catfish',
      'irwini-catfish',
      'platinum-arowana',
      'peacock-bass',
      'wolf-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // Axolotl Complete Care Guide
  // ─────────────────────────────────────────────
  {
    title: 'Axolotl Complete Care Guide',
    slug: 'axolotl',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/species/axolotl-hero.jpg',
    heroImageAlt:
      'Leucistic axolotl with feathery pink gills resting on a fine sand substrate in a planted cold-water aquarium',
    metaTitle:
      'Axolotl (Ambystoma mexicanum): Complete Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete axolotl care guide — tank size, water parameters, diet, morphs & breeding. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion: 'What is the best way to care for an axolotl?',
    quickAnswer:
      'Axolotls require a minimum 20-gallon aquarium with cool water (60–68 °F / 15–20 °C), a pH of 6.5–8.0, and a fine sand or bare-bottom substrate. They are carnivores fed primarily on earthworms, bloodworms, and sinking pellets. Avoid gravel substrates, strong currents, and tank mates that may nip their gills.',
    summary:
      'The axolotl (<em>Ambystoma mexicanum</em>) is a fully aquatic neotenic salamander that has captivated hobbyists and scientists alike with its extraordinary regenerative abilities and endearing appearance. Critically endangered in its native Lake Xochimilco in Mexico City, the axolotl thrives in captivity when provided with cool, clean water and a protein-rich diet. This guide covers every aspect of axolotl husbandry — from tank setup and water chemistry to morph identification, breeding protocols, and common health concerns — drawing on The Fish Collection\'s years of experience sourcing and shipping healthy specimens worldwide.',
    scientificName: 'Ambystoma mexicanum',
    category: 'axolotl',
    keyFacts: [
      { label: 'Scientific Name', value: 'Ambystoma mexicanum' },
      { label: 'Max Size', value: '30 cm (12 in)' },
      { label: 'Tank Size', value: '20 gallons (75 L) minimum' },
      { label: 'Temperature', value: '60–68 °F (15–20 °C)' },
      { label: 'pH', value: '6.5–8.0' },
      { label: 'Care Level', value: 'Beginner–Intermediate' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Carnivore — earthworms, pellets, frozen foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'morphs-and-varieties', text: 'Morphs & Varieties', level: 2 },
      { id: 'regeneration', text: 'Regeneration', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The axolotl (<em>Ambystoma mexicanum</em>) occupies a singular position in the aquatic hobby: it is simultaneously one of the most scientifically important vertebrates on the planet and one of the most charming creatures a keeper can maintain at home. Unlike virtually all other amphibians, the axolotl is permanently neotenic — it retains its larval features, including feathery external gills, a caudal fin, and a fully aquatic lifestyle, throughout its entire life. It never undergoes metamorphosis under normal conditions, a trait that has made it indispensable to regenerative medicine research.</p>
<p>Originally endemic to the lake complex of Xochimilco and Chalco in the Valley of Mexico, wild axolotl populations have been devastated by urbanisation, water pollution, and the introduction of invasive tilapia and Asian carp. The species is listed as Critically Endangered on the IUCN Red List, with wild population estimates in the low hundreds. Paradoxically, the captive population numbers in the millions — axolotls breed readily in aquaria, and the hobby has maintained robust genetic lines for decades.</p>
<p>At The Fish Collection, we source our axolotls exclusively from specialist breeders who maintain detailed lineage records and prioritise genetic diversity. Every specimen we ship is health-screened, quarantined for a minimum of 14 days, and packed in insulated containers with cold packs to maintain the cool temperatures these animals require. This guide distils our practical experience into a comprehensive care manual for keepers at every level.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>The historic habitat of <em>Ambystoma mexicanum</em> is the high-altitude lake system of the Valley of Mexico, situated at approximately 2,240 metres above sea level. Lake Xochimilco — the last remnant of the once-vast lake complex — is a shallow, cool-water environment characterised by dense aquatic vegetation, muddy substrates, and slow-to-stagnant flow. Water temperatures historically ranged from 14 °C to 20 °C (57–68 °F), with moderate hardness and a neutral-to-slightly-alkaline pH.</p>
<p>The axolotl is a benthic predator, spending most of its time walking along the lake floor or resting among aquatic plants. In the wild, it feeds on insect larvae, small fish, worms, and crustaceans, using a distinctive suction-feeding mechanism to inhale prey. Understanding this ecology is essential: axolotls are not swimmers in the conventional sense. They are bottom-dwellers that walk, and their tank should be designed with floor space as the primary consideration rather than water depth.</p>
<p>The cool, oxygen-rich water of their native habitat also explains why axolotls are profoundly intolerant of warm temperatures. Sustained exposure to water above 22 °C (72 °F) induces severe stress, immune suppression, and often fatal bacterial infections. Keeping axolotls in tropical aquarium conditions is one of the most common — and most lethal — husbandry errors.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>A single adult axolotl requires a minimum of 20 gallons (75 litres), with an additional 10 gallons per additional animal. A 40-gallon breeder tank (90 × 45 × 30 cm) is ideal for a pair, offering ample floor space with modest water depth. Axolotls do not require deep water; a depth of 25–35 cm is sufficient and easier to maintain at cool temperatures.</p>
<p>Substrate choice is critical. Fine sand (grain size under 1 mm) is the preferred substrate, as axolotls ingest substrate particles when feeding. Gravel is strictly contraindicated — impaction from swallowed gravel is a leading cause of veterinary emergencies and death in captive axolotls. Bare-bottom tanks are a safe alternative and simplify cleaning, though they may cause the animal stress from its inability to grip the smooth surface. If using bare glass, provide slate tiles or large smooth stones for traction.</p>
<p>Filtration should be gentle. Axolotls are stressed by strong currents, which force their delicate gill filaments backward and can cause chronic irritation. A sponge filter rated for the tank volume is the gold standard — it provides adequate biological and mechanical filtration without generating significant flow. Hang-on-back filters are acceptable if fitted with a baffle or pre-filter sponge to diffuse output. Canister filters work well in larger systems but must have their spray bar directed against the back glass.</p>
<p>Lighting should be dim. Axolotls lack eyelids and are sensitive to bright light. Low-intensity LED lighting on a timer (8–10 hours) is sufficient. Live plants such as <em>Elodea</em>, <em>Anubias</em>, and Java fern provide cover and help with nitrogen absorption. Floating plants like <em>Salvinia</em> or duckweed are excellent for diffusing overhead light.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Axolotls are cold-water animals with straightforward but non-negotiable water chemistry requirements:</p>
<ul>
<li><strong>Temperature:</strong> 15–20 °C (60–68 °F). The single most important parameter. Temperatures above 22 °C suppress the immune system and promote bacterial proliferation. In warm climates, an aquarium chiller or fan-based evaporative cooling system is essential.</li>
<li><strong>pH:</strong> 6.5–8.0. Axolotls tolerate a relatively wide pH range, but stability is paramount. Avoid pH swings greater than 0.4 units in 24 hours.</li>
<li><strong>General Hardness (GH):</strong> 7–14 dGH (125–250 ppm). Moderately hard water supports gill health and osmoregulation. Very soft water (below 4 dGH) can cause oedema and gill deterioration.</li>
<li><strong>Carbonate Hardness (KH):</strong> 3–8 dKH. Sufficient buffering capacity prevents pH crashes, particularly in tanks with active biological filtration producing acid.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Axolotls are highly sensitive to nitrogenous waste. Cycle the tank fully before introducing any animal.</li>
<li><strong>Nitrate:</strong> Below 20 ppm. Perform 20–25% weekly water changes with temperature-matched, dechlorinated water.</li>
</ul>
<p>Use a liquid test kit (API Master Kit or equivalent) rather than test strips, which are unreliable for the precision required. Monitor temperature continuously with a digital thermometer — analogue stick-on thermometers are inaccurate by 2–3 degrees, which is the difference between a safe and a dangerous temperature for axolotls.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Axolotls are obligate carnivores with a strong preference for live or fresh foods. The cornerstone of an adult axolotl's diet should be earthworms (nightcrawlers / <em>Lumbricus terrestris</em>). Earthworms are nutritionally complete, readily accepted, and available year-round from bait shops or online suppliers. Cut large worms into segments for juvenile axolotls under 12 cm.</p>
<p>A well-rounded feeding schedule for an adult axolotl includes:</p>
<ul>
<li><strong>Primary diet (3–4 times per week):</strong> 2–4 earthworms per feeding, depending on the animal's size. Feed until the belly is gently rounded but not distended.</li>
<li><strong>Supplementary foods:</strong> Frozen bloodworm cubes (1–2 cubes per session, excellent for juveniles), sinking carnivore pellets (Hikari Sinking Carnivore Pellets or Rangen Salmon Pellets), and occasional raw prawns cut into small pieces.</li>
<li><strong>Treats:</strong> Blackworms, daphnia, and brine shrimp are excellent enrichment foods, particularly for juveniles and recently hatched larvae.</li>
</ul>
<p>Avoid feeding live fish as a staple — feeder fish carry parasites and diseases that can devastate an axolotl colony. Never feed mealworms (their chitinous exoskeleton is indigestible), mammalian proteins, or processed human food. Overfeeding is a common error; axolotls have slow metabolisms in cool water, and excess food fouls the water rapidly. Remove uneaten food within 30 minutes.</p>

<h2 id="morphs-and-varieties">Morphs & Varieties</h2>
<p>Decades of captive breeding have produced a remarkable range of axolotl colour morphs. Understanding the genetics behind each morph helps breeders predict offspring colouration and avoid inbreeding depression.</p>
<ul>
<li><strong>Wild Type:</strong> The natural colouration — a mottled dark olive-to-black base with iridescent speckles. Wild-type axolotls carry the full complement of melanophores, xanthophores, and iridophores that define the species' ancestral phenotype. They are the hardiest morph and the genetic baseline against which all others are measured.</li>
<li><strong>Leucistic:</strong> The most popular morph in the hobby. Leucistic axolotls display a translucent white-to-pink body with dark eyes — a result of reduced melanophore migration during embryonic development. Unlike true albinos, leucistic animals retain full eye pigmentation. Their pink gills, visible blood vessels, and pale colouration make them the quintessential "pet" axolotl.</li>
<li><strong>Golden Albino:</strong> A true albino morph lacking melanin entirely. The body appears golden-yellow with prominent xanthophore pigmentation, and the eyes are a distinctive clear red-gold. Golden albinos are slightly more light-sensitive than pigmented morphs and benefit from subdued lighting and ample plant cover.</li>
<li><strong>Melanoid:</strong> The inverse of the leucistic — melanoid axolotls produce excess melanin, resulting in a uniform jet-black appearance without the iridescent speckles of the wild type. They lack functional iridophores entirely. Melanoids are prized for their striking, ink-dark colouration.</li>
<li><strong>GFP (Green Fluorescent Protein):</strong> Originally developed for laboratory research, GFP axolotls carry a jellyfish gene (<em>Aequorea victoria</em>) that causes their tissues to fluoresce bright green under blue or UV light. Under normal lighting, GFP animals appear identical to their base morph (leucistic GFP, wild-type GFP, etc.). The fluorescence is heritable and does not affect the animal's health or behaviour. GFP axolotls have become increasingly popular in the hobby, though they remain controversial among purists who object to transgenic animals in the pet trade.</li>
<li><strong>Copper:</strong> A relatively rare morph displaying a warm copper-to-caramel colouration with lighter gill filaments. Copper is an albino variant with reduced xanthophore intensity, producing a more subtle, metallic tone than the golden albino.</li>
</ul>
<p>When purchasing morphs from breeders, always request photographs under consistent lighting conditions. Axolotl colouration can shift dramatically depending on substrate colour (they darken on dark substrates and lighten on pale ones), stress levels, and age. Reputable breeders will provide lineage information and disclose whether a specimen carries heterozygous genes for other morph traits.</p>

<h2 id="regeneration">Regeneration</h2>
<p>The axolotl's regenerative capacity is without parallel among vertebrates and is the primary reason it has been a laboratory model organism for over 150 years. Axolotls can fully regenerate limbs, tail, portions of the heart, spinal cord, lens of the eye, and even sections of the brain — all without scarring. A severed limb will regrow to full functional capacity, including nerves, blood vessels, muscle, bone, and skin, within 8–12 weeks depending on the animal's age and the ambient temperature.</p>
<p>This regeneration is mediated by the formation of a blastema — a mass of dedifferentiated cells that forms at the wound site and recapitulates the developmental programme that originally built the structure. Research published in <em>Nature</em> and <em>Cell Reports</em> has identified key signalling pathways (including Wnt, FGF, and BMP) that orchestrate this process, with direct implications for human regenerative medicine.</p>
<p>For the hobbyist, the practical significance is twofold. First, minor injuries — a nipped gill filament, a bitten toe, even a lost limb from an aggressive tank mate — will heal completely without veterinary intervention, provided water quality is excellent and the wound does not become infected. Second, this regenerative capacity means that cosmetic imperfections in newly acquired axolotls (damaged gills, shortened toes) are usually temporary. Given clean, cool water and proper nutrition, the animal will restore itself.</p>
<p>However, regeneration is not a licence for careless husbandry. Each regenerative event consumes significant metabolic resources, and repeated injuries can exhaust the animal's regenerative reserve over time. Chronic stress, warm water, and poor nutrition all impair regeneration. The goal is always prevention — provide a safe environment so the axolotl never needs to deploy its remarkable healing abilities.</p>

<h2 id="breeding">Breeding</h2>
<p>Axolotls are among the easiest amphibians to breed in captivity, which accounts for the robust captive population despite the species' critical wild status. Sexual maturity is reached at 12–18 months, though it is advisable to wait until animals are at least 18 months old and 20 cm in length before breeding to ensure full physical development.</p>
<p>Sexing adults is straightforward: males develop pronounced cloacal swelling (a visibly enlarged, bulbous cloaca) while females retain a flatter cloacal region and typically have a rounder body habitus when gravid. Males also tend to be slimmer with longer tails relative to body length.</p>
<p>Breeding is triggered by a temperature cycle. Gradually reduce the water temperature to 12–14 °C (54–57 °F) over two weeks, maintain this cool period for 4–6 weeks, then allow the temperature to rise back to 16–18 °C. This simulates the seasonal cooling and warming that triggers spawning in the wild. During the cool period, feed sparingly but maintain impeccable water quality.</p>
<p>The male initiates courtship by depositing 5–25 spermatophores (gelatinous sperm packets) on the substrate. The female picks these up with her cloaca. Within 24–72 hours, she begins laying eggs — typically 100–600 per clutch — individually affixing them to plants, rocks, or any available surface. Remove the adults immediately after egg deposition, as they will consume their own eggs without hesitation.</p>
<p>Eggs hatch in 14–21 days at 18 °C. Larvae are tiny (10–12 mm) and require live food — freshly hatched brine shrimp (<em>Artemia</em> nauplii) for the first two weeks, transitioning to chopped blackworms and micro-bloodworms as they grow. Cannibalism is common among larvae; size-sort frequently and separate aggressors. Rearing a full clutch to sellable size (8–10 cm) takes approximately 4–6 months and requires significant tank space and daily feeding.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<p><strong>Fungal infections</strong> are the most common ailment, appearing as white cotton-like growths on the skin or gills. They are almost always secondary to poor water quality, physical injury, or thermal stress. Treat mild cases with daily salt baths (2–3 teaspoons of non-iodised salt per litre, 10–15 minutes) and improve water conditions. Severe infections may require methylene blue baths. Never use copper-based medications — they are lethal to amphibians.</p>
<p><strong>Gill deterioration</strong> manifests as shortened, curled, or discoloured gill filaments. Causes include poor water quality (elevated ammonia or nitrite), low dissolved oxygen, water temperatures above 22 °C, and chronic stress from aggressive tank mates or excessive current. Address the underlying cause promptly; gill filaments will typically regenerate within 4–8 weeks once conditions improve.</p>
<p><strong>Impaction</strong> from swallowed gravel is a surgical emergency. Symptoms include lethargy, loss of appetite, bloating, and buoyancy problems. Prevention is simple: never use gravel substrate. If impaction is suspected, a lukewarm water bath (not exceeding 20 °C) may encourage the animal to pass the obstruction, but veterinary intervention is often required.</p>
<p><strong>Stress-related floating</strong> — the animal persistently floats at the surface and cannot submerge — can result from gut gas (overfeeding, swallowed air), constipation, or water quality issues. Fasting for 48–72 hours and performing a 50% water change resolves most cases. Persistent floating warrants a veterinary consultation to rule out internal infection.</p>
<p><strong>Ammonia burns</strong> present as red or inflamed patches on the skin, particularly on the belly and gill stalks. They indicate an uncycled or inadequately filtered tank. Immediate action: 50% water change, dose with a detoxifying water conditioner (Seachem Prime), and resolve the underlying filtration issue.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Can axolotls live with fish?',
        answer:
          'Axolotls are generally best kept in species-only tanks. Small fish will be eaten, and active or nippy fish (such as barbs, tetras, and guppies) will attack the axolotl\'s gills, causing chronic stress and injury. The only marginally compatible tank mates are large, cold-water-tolerant snails (such as mystery snails) and, in spacious tanks, adult white cloud mountain minnows — though even these carry some risk. For the animal\'s welfare, a species-only setup is always the safest choice.',
      },
      {
        question: 'Do axolotls need a heater?',
        answer:
          'No — axolotls require cool water (60–68 °F / 15–20 °C) and a heater would be counterproductive. In warm climates or during summer months, the challenge is keeping the water cool enough. Options include aquarium chillers, clip-on fans directed at the water surface to promote evaporative cooling, or placing the tank in an air-conditioned room. Sustained temperatures above 72 °F (22 °C) will suppress the immune system and can be fatal.',
      },
      {
        question: 'Is it legal to own an axolotl?',
        answer:
          'Legality varies by jurisdiction. Axolotls are legal to own in most US states, the UK, and much of Europe. However, they are illegal in California, Maine, New Jersey, and Virginia (USA), as well as parts of Australia and New Zealand, due to concerns about invasive species potential. Some Canadian provinces also restrict ownership. Always check your local and state regulations before purchasing. CITES does not restrict trade in captive-bred axolotls.',
      },
      {
        question: 'How big do axolotls get?',
        answer:
          'Adult axolotls typically reach 20–30 cm (8–12 inches) in total length, with most specimens settling around 23–25 cm. Size depends on genetics, diet quality, and water temperature — cooler water (closer to 15 °C) promotes slower but ultimately larger growth. Exceptional individuals from robust genetic lines may exceed 30 cm. Growth from hatchling to full adult size takes approximately 18–24 months.',
      },
      {
        question: 'Why is my axolotl floating?',
        answer:
          'Persistent floating is usually caused by swallowed air (from surface feeding or gulping), gut gas from overfeeding, constipation, or poor water quality. Fast the animal for 48–72 hours, perform a 50% water change, and ensure ammonia and nitrite are at 0 ppm. If the axolotl is bloated or listing to one side, the issue may be more serious — an impaction or internal bacterial infection — and warrants veterinary attention.',
      },
    ],
    sources: [
      {
        title: 'Ambystoma mexicanum (Shaw & Nodder, 1798)',
        url: 'https://www.iucnredlist.org/species/1095/53947766',
        publisher: 'IUCN Red List of Threatened Species',
      },
      {
        title:
          'The Axolotl Genome and the Evolution of Key Tissue Formation Regulators',
        url: 'https://doi.org/10.1038/nature25458',
        publisher: 'Nature',
      },
      {
        title:
          'Axolotl Husbandry and Colony Management at the Ambystoma Genetic Stock Center',
        url: 'https://doi.org/10.1007/978-1-4939-2495-0_3',
        publisher: 'Methods in Molecular Biology',
      },
    ],
    relatedSlugs: [
      'fire-eel',
      'blue-diamond-discus',
      'clown-loach',
    ],
  },

  // ─────────────────────────────────────────────
  // Ranchu Goldfish Complete Guide
  // ─────────────────────────────────────────────
  {
    title: 'Ranchu Goldfish Complete Guide',
    slug: 'ranchu-goldfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/species/ranchu-goldfish-hero.jpg',
    heroImageAlt:
      'Top-view of a prize-grade red-and-white Ranchu goldfish displaying a prominent wen and smooth back curvature',
    metaTitle:
      'Ranchu Goldfish (Carassius auratus): Complete Care Guide & Judging Standards | The Fish Collection',
    metaDescription:
      'Complete Ranchu goldfish care guide — tank setup, water parameters, diet, wen growth & breeding. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion: 'What is the best way to care for a Ranchu goldfish?',
    quickAnswer:
      'Ranchu goldfish thrive in a minimum 30-gallon aquarium with cool water (65–72 °F / 18–22 °C), a pH of 7.0–8.0, and gentle filtration. They are omnivores requiring a balanced diet of sinking pellets, gel food, blanched vegetables, and occasional protein treats. Avoid strong current, sharp decorations, and tank mates that outcompete them for food.',
    summary:
      'The Ranchu is the undisputed king of Japanese goldfish — a dorsalless, round-bodied fancy goldfish bred for over 200 years to embody a precise aesthetic ideal. Prized for its prominent head growth (wen), smooth arched back profile, and dignified swimming gait, the Ranchu is as much a living art form as it is a pet. Top-grade Ranchu from Japanese breeders can command thousands of pounds at auction, while the species remains accessible to dedicated hobbyists willing to invest in proper husbandry. This guide covers every aspect of Ranchu care — from tank configuration and water chemistry to wen development, breeding, and the judging standards that define excellence in this variety.',
    scientificName: 'Carassius auratus',
    category: 'goldfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Carassius auratus (Ranchu variety)' },
      { label: 'Max Size', value: '15–20 cm (6–8 in)' },
      { label: 'Tank Size', value: '30 gallons (115 L) minimum' },
      { label: 'Temperature', value: '65–72 °F (18–22 °C)' },
      { label: 'pH', value: '7.0–8.0' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Omnivore — pellets, gel food, vegetables, protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'history-and-origins', text: 'History & Origins', level: 2 },
      { id: 'body-conformation', text: 'Body Conformation & Judging Standards', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'wen-development', text: 'Wen Development', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Ranchu (<em>Carassius auratus</em>, Ranchu variety) stands at the apex of Japanese goldfish culture — a living testament to centuries of selective breeding in pursuit of an exacting aesthetic ideal. Unlike Western fancy goldfish varieties that prioritise flamboyant finnage or exotic colour patterns, the Ranchu is judged on structural perfection: the curvature of its dorsalless back, the fullness and symmetry of its head growth (wen), the tuck of its tail, and the dignified, unhurried quality of its swimming gait.</p>
<p>In Japan, Ranchu keeping is a serious pursuit with a formalised competitive circuit, regional judging associations, and lineage records that trace prize-winning bloodlines across decades. The most prestigious events — such as the All Japan Ranchu Show — attract breeders who have dedicated their lives to perfecting specific traits. A single top-grade show Ranchu from a renowned breeder can sell for ¥500,000–¥2,000,000 (£2,500–£10,000) and occasionally far more.</p>
<p>At The Fish Collection, we import Ranchu directly from established Japanese breeders as well as the increasingly respected Thai and Chinese breeding programmes. This guide is written for keepers who want to understand and provide for this variety at the highest level — whether your goal is competitive showing, breeding, or simply keeping one of the most beautiful freshwater fish ever developed.</p>

<h2 id="history-and-origins">History & Origins</h2>
<p>The Ranchu's lineage traces to the Maruko, an early dorsalless goldfish variety developed in China during the late Ming Dynasty (16th–17th century). Chinese Maruko were introduced to Japan in the early Edo period, where Japanese breeders — particularly in Osaka and later Tokyo — began a centuries-long programme of selective refinement that would produce the modern Ranchu.</p>
<p>The name "Ranchu" itself is believed to derive from a corruption of the Chinese word for the variety, though the etymology is debated. What is not debated is the Japanese contribution to the breed: by the Meiji era (1868–1912), the Ranchu had been refined into a distinctly Japanese form that bore little resemblance to its Chinese ancestors. The formation of the Japanese Ranchu Association in 1958 formalised judging standards and established the competitive framework that persists today.</p>
<p>The Chinese equivalent — the Lionhead — shares a common ancestor with the Ranchu but has diverged significantly. Lionheads typically have a straighter back profile, less tightly tucked tail, and more voluminous wen growth, particularly around the gill plates. While both varieties are dorsalless with prominent head growth, experienced hobbyists can distinguish them immediately by silhouette alone.</p>

<h2 id="body-conformation">Body Conformation & Judging Standards</h2>
<p>Japanese Ranchu judging evaluates four primary categories, each weighted approximately equally:</p>
<ul>
<li><strong>Back curvature (funtan):</strong> The ideal Ranchu back forms a smooth, unbroken arch from the base of the skull to the tail tuck, with no flat spots, bumps, or angular breaks. When viewed from above (top-view, the traditional Japanese judging perspective), the back should be broad and evenly convex. This smooth curve is perhaps the single most difficult trait to breed consistently.</li>
<li><strong>Wen (head growth):</strong> The wen should be symmetrical, firmly textured, and well-proportioned to the body. It should cover the cranial region and extend to the cheeks (called "funtan" when the cheek growth is particularly prominent) without obstructing the eyes or gills. Excessive wen growth that covers the eyes — while visually impressive to casual observers — is actually penalised in Japanese judging because it impairs the fish's quality of life.</li>
<li><strong>Tail tuck and peduncle:</strong> The caudal peduncle should angle sharply downward (approximately 45 degrees from the back line), and the tail fins should be held at a clean angle without drooping or twisting. When viewed from above, the tail should be symmetrical and spread evenly. The junction between the peduncle and the tail fin — the "tuck" — is a critical detail that separates show-quality fish from pet-grade specimens.</li>
<li><strong>Swimming gait and overall impression:</strong> A top Ranchu moves with a characteristic waddling gait — dignified, unhurried, and balanced. Fish that list to one side, swim nose-down, or move erratically are penalised regardless of their structural merits. The overall impression should convey power, balance, and composure.</li>
</ul>
<p>Colour is appreciated but secondary to form in traditional Japanese judging. Red-and-white (sarasa) patterns are classic, but solid red, solid white, calico, and even chocolate/brown specimens compete on equal structural footing. The Thai and Chinese competitive circuits place somewhat more emphasis on colour intensity and pattern balance.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Ranchu are not strong swimmers, and their dorsalless, round body makes them vulnerable to current, sharp decorations, and boisterous tank mates. A minimum 30-gallon (115 L) tank is required for a single adult, with 10–15 additional gallons per extra fish. A 55-gallon (210 L) tank comfortably houses three adults.</p>
<p>Japanese breeders traditionally keep Ranchu in shallow, wide tubs or ponds — often concrete or fibreglass vessels 30–40 cm deep with maximum floor space. This top-view orientation not only matches the traditional judging perspective but also provides the ideal environment for the fish: ample horizontal swimming space with minimal depth. For indoor aquarium keepers, a standard rectangular tank (not a tall or bow-front design) is best.</p>
<p>Substrate should be fine sand or bare bottom. Gravel poses an impaction risk, as Ranchu are inveterate substrate foragers. Decorations should be smooth and rounded — no sharp driftwood, rough rocks, or plastic plants that could tear the delicate wen tissue. Smooth river stones, silk plants, and simple terracotta pots are safe choices.</p>
<p>Filtration must be robust yet gentle. Ranchu produce significant waste relative to their body size (as do all goldfish), demanding strong biological filtration. However, the output must be baffled to avoid creating currents that fatigue these weak swimmers. A sponge filter combined with a canister filter (spray bar directed along the back glass) is an effective combination for tanks up to 75 gallons. For larger systems, a sump with a low-flow return is ideal.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Ranchu are temperate fish that thrive in cooler water than most tropical species:</p>
<ul>
<li><strong>Temperature:</strong> 18–22 °C (65–72 °F) for maintenance. Brief periods at 24 °C (75 °F) are tolerable but not ideal for long-term keeping. For breeding conditioning, a winter cool-down to 12–15 °C (54–59 °F) for 6–8 weeks is beneficial.</li>
<li><strong>pH:</strong> 7.0–8.0. Goldfish prefer neutral-to-slightly-alkaline conditions. Most municipal tap water, once dechlorinated, falls within this range.</li>
<li><strong>General Hardness (GH):</strong> 6–16 dGH. Moderate hardness supports scale integrity and wen development.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm — always. Goldfish are heavy waste producers; the biological filter must be mature and adequately sized.</li>
<li><strong>Nitrate:</strong> Below 20 ppm. Weekly water changes of 30–50% are typical for stocked Ranchu tanks. Many serious breeders perform 50–80% daily water changes in grow-out tubs to maximise growth rate and wen development.</li>
</ul>
<p>Water change discipline is arguably the single most important factor in Ranchu keeping. Japanese breeders are famous for their near-obsessive water change regimes, and the correlation between water quality and fish quality is direct and unmistakable. If you are serious about Ranchu, invest in a Python-style water changer or an automatic drip system that makes large, frequent water changes effortless.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Ranchu are omnivores with a digestive system that favours plant matter and small invertebrates over high-protein diets. Unlike predatory species, goldfish have no true stomach — food passes directly into the intestine, making them prone to digestive issues when fed inappropriate foods.</p>
<p>A balanced Ranchu diet includes:</p>
<ul>
<li><strong>Sinking pellets:</strong> High-quality goldfish pellets (Hikari Lionhead, Saki-Hikari Fancy Goldfish, or Northfin Goldfish Formula) should form the dietary staple. Sinking pellets are preferred over floating varieties to reduce air ingestion, which contributes to swim bladder issues in round-bodied goldfish.</li>
<li><strong>Gel food:</strong> Repashy Super Gold or homemade gel food blends provide excellent nutrition in a form that goldfish find highly palatable. Gel foods can be customised with spirulina, garlic, and vitamin supplements.</li>
<li><strong>Vegetables:</strong> Blanched peas (shelled), spinach, zucchini, and cucumber provide fibre that supports digestive health. Peas are particularly valuable as a digestive aid — many experienced keepers feed shelled peas exclusively one day per week.</li>
<li><strong>Protein treats (2–3 times per week):</strong> Bloodworms, brine shrimp, daphnia, and chopped earthworms. These should supplement, not replace, the plant-based staple.</li>
</ul>
<p>Feed two to three times daily in small portions that are consumed within two minutes. Overfeeding is the leading dietary error and contributes directly to swim bladder disorder, fatty liver disease, and water quality degradation. Fasting one day per week supports digestive health.</p>

<h2 id="wen-development">Wen Development</h2>
<p>The wen — the fleshy head growth that defines the Ranchu's appearance — is a genetically determined trait whose full expression depends on environmental conditions. Genetics set the ceiling; husbandry determines how close the fish reaches it.</p>
<p>Key factors that promote wen development:</p>
<ul>
<li><strong>Water quality:</strong> Pristine water with near-zero nitrate. Japanese breeders performing 50–80% daily water changes in grow-out tubs consistently produce fish with superior wen development compared to those maintained on weekly change schedules.</li>
<li><strong>Diet:</strong> A protein-rich diet during the juvenile growth phase (6–18 months) supports wen growth. Bloodworms, brine shrimp, and high-protein gel foods are emphasised during this period, with a gradual shift toward a more plant-based maintenance diet after the fish reaches maturity.</li>
<li><strong>Temperature:</strong> Moderate warmth (20–24 °C) during the growth phase accelerates wen development. Some breeders maintain grow-out tanks at the higher end of the safe range specifically to push wen growth.</li>
<li><strong>Genetics:</strong> No amount of perfect husbandry will produce a champion wen on a fish with mediocre genetics. Source breeding stock from reputable breeders with proven lineages.</li>
</ul>
<p>Wen growth typically becomes visible at 3–6 months of age and continues developing until the fish is 2–3 years old, after which it stabilises. The wen requires periodic inspection for bacterial or fungal infection, as the folds can trap debris and pathogens. Gently swabbing the wen with a cotton bud dipped in clean tank water during routine handling can help keep the tissue healthy.</p>

<h2 id="breeding">Breeding</h2>
<p>Ranchu breeding is a numbers game that demands patience, space, and the willingness to cull aggressively. From a single spawning of 1,000–3,000 eggs, a Japanese breeder may retain only 20–50 fish after the first cull at 4–6 weeks, and ultimately select just 3–5 specimens as potential show or breeding stock from the entire season's production.</p>
<p>Breeding condition is triggered by a winter rest period: reduce the temperature to 12–15 °C (54–59 °F) for 6–8 weeks, feeding sparingly. As temperatures rise to 18–20 °C in spring, condition the pair with protein-rich foods. Males develop breeding tubercles (small white spots on the gill plates and pectoral fin rays) that distinguish them from females. Spawning occurs in the early morning; the male chases the female vigorously, and she releases adhesive eggs onto spawning mops or dense plant material.</p>
<p>Remove the parents immediately after spawning. Eggs hatch in 4–7 days at 20 °C. Fry require infusoria or liquid fry food for the first week, graduating to freshly hatched brine shrimp by day 7–10. The first cull occurs at 4–6 weeks: remove any fry with dorsal fin remnants, severely kinked spines, or grossly asymmetrical tails. Subsequent culls at 8 weeks and 12 weeks refine the selection further. This culling process is integral to Ranchu breeding and is practiced universally by serious breeders — retaining all offspring would result in generations of declining quality.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<p><strong>Swim bladder disorder</strong> is the most prevalent health issue in Ranchu and all round-bodied fancy goldfish. The compressed body shape displaces the swim bladder, making these fish inherently prone to buoyancy problems. Symptoms include floating at the surface, sinking to the bottom, or swimming at an angle. Mild cases are often resolved by fasting for 48 hours followed by feeding shelled, blanched peas. Chronic swim bladder disorder may require a permanently lowered water level and dietary management. Avoid floating foods, which encourage air ingestion.</p>
<p><strong>Dropsy</strong> (ascites) presents as a dramatically swollen body with raised, pinecone-like scales. It is not a disease itself but a symptom of organ failure — typically kidney or liver — caused by bacterial infection (often <em>Aeromonas</em> or <em>Pseudomonas</em>), parasites, or environmental stress. By the time scales are visibly raised, the prognosis is poor. Epsom salt baths (1 tablespoon per 20 litres), broad-spectrum antibiotic food (kanamycin or metronidazole), and pristine water offer the best chance, but survival rates are low.</p>
<p><strong>Wen infections</strong> manifest as white patches, redness, or ulceration on the head growth. The wen's folded, porous texture makes it vulnerable to bacterial and fungal colonisation, particularly in warm or dirty water. Mild cases respond to salt baths and improved water quality. Severe infections may require topical application of povidone-iodine (Betadine) diluted 1:10 with tank water, applied directly to the affected area with a cotton swab.</p>
<p><strong>Fin rot</strong> — progressive erosion of the tail and pectoral fins — is almost always a water quality issue. Improve filtration, increase water change frequency, and treat with aquarium salt (1 tablespoon per 20 litres) for mild cases. Persistent or severe fin rot may require antibiotic treatment.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a quality Ranchu cost?',
        answer:
          'Pet-grade Ranchu from reputable breeders typically cost £15–£50. Show-quality juveniles from established Japanese breeders range from £100–£500, while adult show winners from top lineages can command £2,500–£10,000 or more at auction. Thai and Chinese bred show-grade Ranchu offer excellent quality at somewhat lower prices (£50–£300). As with all fancy goldfish, you are paying for genetics, conformation, and the breeder\'s years of selective work.',
      },
      {
        question: 'Can Ranchu live with other goldfish?',
        answer:
          'Ranchu should only be kept with other slow-swimming, dorsalless fancy goldfish varieties — Lionheads, Pearlscales, Celestial Eyes, and Bubble Eyes. Faster varieties (Comets, Shubunkins, even Fantails and Orandas) will outcompete Ranchu for food and may harass them. Never keep Ranchu with single-tailed goldfish. Temperature-compatible peaceful species like White Cloud Mountain Minnows can coexist, though a species-only tank is always the safest approach.',
      },
      {
        question: 'Do Ranchu need a heater?',
        answer:
          'In most indoor environments, no. Ranchu thrive at 18–22 °C (65–72 °F), which is typical room temperature in temperate climates. A heater is only necessary if the room temperature drops below 15 °C (59 °F) for extended periods. In fact, a seasonal cool-down to 12–15 °C over winter is beneficial for health and breeding conditioning. If temperatures exceed 26 °C in summer, take measures to cool the tank — excessive heat stresses these fish significantly.',
      },
      {
        question: 'How do I encourage wen growth on my Ranchu?',
        answer:
          'Wen growth is primarily genetic, but husbandry can maximise the fish\'s potential. Maintain pristine water quality with frequent large water changes (30–50% daily in grow-out setups), feed a protein-rich diet during the juvenile growth phase (6–18 months), and keep temperatures at 20–24 °C during active growth periods. Source fish from breeders with proven wen lineages. No supplement or additive can create wen growth that the fish\'s genetics do not support.',
      },
      {
        question: 'Why does my Ranchu float after eating?',
        answer:
          'Post-feeding floating is a common swim bladder issue in round-bodied goldfish. It is usually caused by air ingestion (from surface feeding or floating pellets), overfeeding, or constipation. Switch to sinking pellets exclusively, feed smaller portions more frequently, fast one day per week, and include shelled blanched peas in the diet for fibre. If the problem persists, lower the water level by one-third and consult an aquatic veterinarian to rule out chronic swim bladder deformity.',
      },
    ],
    sources: [
      {
        title: 'Carassius auratus (Linnaeus, 1758)',
        url: 'https://www.fishbase.se/summary/Carassius-auratus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Goldfish Varieties and Genetics: A Handbook for Breeders',
        url: 'https://doi.org/10.1002/9781119556817',
        publisher: 'Wiley-Blackwell',
      },
      {
        title:
          'Swim Bladder Disorders in Fancy Goldfish: Aetiology, Diagnosis, and Management',
        url: 'https://doi.org/10.1111/jfd.13285',
        publisher: 'Journal of Fish Diseases',
      },
    ],
    relatedSlugs: [
      'blue-diamond-discus',
      'clown-loach',
      'altum-angelfish',
    ],
  },

  // ─────────────────────────────────────────────
  // Kohaku Koi Complete Guide
  // ─────────────────────────────────────────────
  {
    title: 'Kohaku Koi Complete Guide',
    slug: 'kohaku-koi',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/species/kohaku-koi-hero.jpg',
    heroImageAlt:
      'Top-view of a champion-grade Kohaku koi displaying crisp red-and-white patterning in a Japanese mud pond',
    metaTitle:
      'Kohaku Koi (Cyprinus rubrofuscus): Complete Care Guide & Pattern Evaluation | The Fish Collection',
    metaDescription:
      'Complete Kohaku koi guide — pattern evaluation, pond setup, water parameters, diet & breeding. Expert advice from The Fish Collection\'s koi specialists.',
    quickAnswerQuestion: 'What makes a high-quality Kohaku koi?',
    quickAnswer:
      'A high-quality Kohaku displays a snow-white (shiroji) base with deep, uniform crimson (hi) markings that have crisp, well-defined edges (kiwa) and clean leading edges (sashi). The pattern should be balanced across the body, the skin quality (shiroji) should be luminous and unblemished, and the body conformation should be powerful and symmetrical. Kohaku are judged primarily on skin quality, pattern balance, and the sharpness of colour boundaries.',
    summary:
      'The Kohaku is the foundation variety of Nishikigoi and is universally regarded as the "King of Koi." A deceptively simple two-colour fish — white base with red markings — the Kohaku is the variety by which all koi appreciation begins and, for many lifelong hobbyists, where it ultimately returns. Mastering the evaluation of Kohaku pattern, skin quality, and body conformation is the gateway to understanding koi aesthetics at the highest level. This guide covers Kohaku history, pattern terminology, pond requirements, feeding for colour and growth, breeding, and the judging criteria that separate a pond fish from a Grand Champion.',
    scientificName: 'Cyprinus rubrofuscus',
    category: 'koi',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cyprinus rubrofuscus (Kohaku variety)' },
      { label: 'Max Size', value: '60–90 cm (24–36 in)' },
      { label: 'Pond Size', value: '1,000 gallons (3,785 L) minimum' },
      { label: 'Temperature', value: '65–75 °F (18–24 °C)' },
      { label: 'pH', value: '7.0–8.5' },
      { label: 'Care Level', value: 'Intermediate–Advanced' },
      { label: 'Lifespan', value: '25–35+ years' },
      { label: 'Diet', value: 'Omnivore — koi pellets, vegetables, supplementary protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'history', text: 'History of the Kohaku', level: 2 },
      { id: 'pattern-evaluation', text: 'Pattern Evaluation', level: 2 },
      { id: 'kiwa-and-sashi', text: 'Kiwa & Sashi', level: 3 },
      { id: 'pond-requirements', text: 'Pond Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'growth-and-development', text: 'Growth & Development', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'judging-criteria', text: 'Judging Criteria', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Kohaku is a white-skinned koi with red (<em>hi</em>) markings — and nothing more. No black, no metallic lustre, no additional colours. This apparent simplicity is precisely what makes the Kohaku the most challenging variety to master and the most revered among serious koi enthusiasts. The Japanese saying "koi keeping begins and ends with Kohaku" reflects the understanding that appreciating this variety requires — and develops — the most refined aesthetic sensibility in the hobby.</p>
<p>A truly exceptional Kohaku possesses snow-white skin of porcelain quality (<em>shiroji</em>), deep crimson markings that glow with an inner luminosity, and pattern edges so precise they appear painted by a master calligrapher. The body must be powerful, symmetrical, and free of any blemish, scale imperfection, or colour bleed. Achieving all of these qualities simultaneously in a single fish is extraordinarily rare, which is why Grand Champion Kohaku at the All Japan Koi Show can command prices exceeding ¥200,000,000 (over £1,000,000).</p>
<p>At The Fish Collection, we source Kohaku from established Japanese breeders in the Niigata prefecture — the historic heartland of Nishikigoi production — and offer specimens ranging from high-quality pond fish to potential show contenders. This guide provides the knowledge you need to select, maintain, and appreciate Kohaku at every level of the hobby.</p>

<h2 id="history">History of the Kohaku</h2>
<p>The Kohaku was the first ornamental koi variety to be developed, emerging from mutations observed in food carp (<em>Cyprinus rubrofuscus</em>) bred by rice farmers in the Niigata mountains of Japan during the early 19th century. The farmers noticed occasional fish with patches of red colouration on otherwise plain bodies and began selectively breeding them — initially as a curiosity, then with increasing seriousness as the aesthetic potential became apparent.</p>
<p>The modern Kohaku traces its lineage to a pivotal fish bred by Kunizo Hiroi around 1888 — a specimen with a distinctly defined red pattern on a clean white base that set the standard for all subsequent breeding. Through the early 20th century, breeders in the Yamakoshi and Ojiya regions of Niigata refined the Kohaku into the variety we recognise today, establishing bloodlines (such as Sensuke, Tomoin, and Manzo) that remain influential in contemporary breeding programmes.</p>
<p>The Kohaku's status as the "King of Koi" was cemented by its dominance in competitive showing. Kohaku win the Grand Champion title at the All Japan Koi Show more frequently than any other variety — a testament to the depth of breeding expertise and the universal recognition that a great Kohaku represents the pinnacle of Nishikigoi artistry.</p>

<h2 id="pattern-evaluation">Pattern Evaluation</h2>
<p>Kohaku patterns are described using a specialised vocabulary that every serious koi keeper should master:</p>
<ul>
<li><strong>Nidan (two-step):</strong> Two distinct red patches separated by white space. A classic, clean pattern that is highly valued when both patches are well-proportioned and balanced.</li>
<li><strong>Sandan (three-step):</strong> Three red patches. Considered by many judges to be the ideal Kohaku pattern, offering visual rhythm and balance across the body length.</li>
<li><strong>Yondan (four-step):</strong> Four red patches. Beautiful when executed well but increasingly difficult to maintain clean separation as the fish grows — patches may merge over time.</li>
<li><strong>Inazuma (lightning):</strong> A continuous red pattern that zigzags down the body like a lightning bolt, with white breaking through at intervals. Dynamic and dramatic.</li>
<li><strong>Maruten:</strong> A Kohaku with a separate, isolated red patch (crown) on the head in addition to body markings. The head mark should be centred and symmetrical.</li>
<li><strong>Tancho Kohaku:</strong> A white koi with a single, round red patch centred on the head — evoking the Japanese flag. The Tancho Kohaku is not technically judged in the Kohaku class at shows (it competes in the Tancho class) but is among the most iconic koi patterns.</li>
</ul>
<p>Regardless of pattern type, the <em>hi</em> should be uniform in depth and hue across the entire body — patches that fade, thin, or change shade are penalised. The pattern should not extend below the lateral line, and the tail joint should ideally feature a clean white finish (<em>odome</em>) that frames the pattern elegantly.</p>

<h3 id="kiwa-and-sashi">Kiwa & Sashi</h3>
<p><strong>Kiwa</strong> refers to the trailing (rear) edge of each red marking. On a high-quality Kohaku, the kiwa should be razor-sharp — an abrupt, clean boundary between red and white with no blurring, smudging, or stray red scales bleeding into the white zone. When viewed closely, the finest kiwa shows each scale cleanly divided: the forward portion coloured red, the rear portion clean white, creating a perfectly defined line.</p>
<p><strong>Sashi</strong> is the leading (front) edge of each red marking. Unlike kiwa, the ideal sashi has a subtle insertion zone — one to two rows of scales where the red pigment fades gradually into the white base. This gentle gradation at the leading edge gives the pattern visual depth and is considered a sign of skin quality and pattern stability. Sashi that is too abrupt can indicate shallow pigmentation that may fade with age; sashi that is too diffuse suggests an unstable pattern.</p>
<p>The quality of kiwa and sashi is one of the most reliable indicators of a Kohaku's future development. Experienced breeders and judges evaluate these edges extensively when assessing young fish, as they predict how the pattern will mature over the coming years. A tosai (one-year-old) with excellent kiwa and sashi is a far better investment than a fish with a flashier pattern but blurry edges.</p>

<h2 id="pond-requirements">Pond Requirements</h2>
<p>Koi are pond fish. While juvenile Kohaku can be temporarily maintained in large aquariums (150+ gallons), adult specimens require a purpose-built pond of at least 1,000 gallons (3,785 litres). For serious keepers maintaining multiple koi, 2,500–5,000 gallons is the practical minimum, and dedicated hobbyists routinely build 10,000–20,000 gallon systems.</p>
<p>Pond depth should be a minimum of 120 cm (4 feet) — deeper water provides thermal stability, protection from predators (herons, raccoons), and space for the koi to exercise vertically. The pond should include a shallow shelf area (30–45 cm deep) for viewing and feeding, with the majority of the volume at full depth.</p>
<p>Bottom drains are essential for waste removal. A properly designed koi pond features at least one bottom drain per 5,000 gallons, plumbed to a settlement chamber or vortex that removes solid waste before it reaches the biological filter. The biological filter — typically a multi-chamber system using Japanese matting, K1 media, or a bakki shower — should turn over the entire pond volume every 1–2 hours.</p>
<p>Ultraviolet sterilisation (40–80 watts per 5,000 gallons) controls green water and reduces pathogen load. Aeration is critical — koi consume significant dissolved oxygen, particularly in warm water and at high stocking densities. Air pumps with diffuser stones or venturi systems should maintain dissolved oxygen above 7 ppm at all times.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 18–24 °C (65–75 °F) for active growth. Koi are cold-hardy and can survive water temperatures near freezing, but growth and immune function are optimal in the 20–24 °C range. In winter, allow the pond to cool naturally — do not heat unless the pond is too shallow to maintain thermal stratification.</li>
<li><strong>pH:</strong> 7.0–8.5. Koi prefer alkaline conditions. Monitor KH to ensure adequate buffering — koi ponds with heavy biological filtration can experience pH crashes if KH drops below 4 dKH.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm at all times. In a properly filtered and stocked pond, this should be easily achieved.</li>
<li><strong>Nitrate:</strong> Below 40 ppm. Regular partial water changes (10–20% weekly) and pond plants help maintain low nitrate levels.</li>
<li><strong>Dissolved Oxygen:</strong> Above 7 ppm. Aeration is especially critical during warm summer months when oxygen solubility decreases and koi metabolic demand increases.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Koi nutrition directly impacts colour development, body conformation, and skin quality — all critical factors in Kohaku evaluation. A well-designed feeding programme changes with the seasons:</p>
<ul>
<li><strong>Spring (water temperature 12–18 °C):</strong> Begin feeding with a wheatgerm-based, low-protein (25–30%) pellet as the koi's metabolism reactivates. Feed sparingly — once daily — and increase gradually as temperatures rise.</li>
<li><strong>Summer (18–24 °C):</strong> Switch to a high-quality growth pellet (35–40% protein) for active growth and body development. Feed 2–4 times daily. Supplement with colour-enhancing foods containing spirulina and astaxanthin to deepen <em>hi</em> colouration. Caution: excessive colour food can yellow the white (<em>shiroji</em>), which is disastrous for Kohaku. Limit colour-enhancing feeds to 20–30% of the total diet.</li>
<li><strong>Autumn (18–12 °C):</strong> Transition back to wheatgerm as temperatures decline. This is also the ideal period for a final round of colour food to lock in pigmentation before winter.</li>
<li><strong>Winter (below 12 °C):</strong> Cease feeding entirely. Koi enter a state of torpor in cold water and cannot digest food. Feeding in cold water causes undigested food to rot in the gut, leading to potentially fatal bacterial infections.</li>
</ul>
<p>Supplementary foods include oranges (a traditional Japanese practice for Kohaku — the citric acid is believed to enhance red colouration), blanched lettuce, watermelon, and prawns. Feed supplementary items no more than twice weekly to avoid nutritional imbalance.</p>

<h2 id="growth-and-development">Growth & Development</h2>
<p>Kohaku are long-lived fish that continue developing throughout their lives. A tosai (first year) Kohaku is typically 15–25 cm; by nisai (second year), 30–45 cm; sansai (third year), 45–55 cm. Mature specimens (5+ years) from Japanese bloodlines routinely exceed 60 cm, and exceptional fish from jumbo lineages can reach 85–90 cm.</p>
<p>Pattern development is equally dynamic. The <em>hi</em> markings of a young Kohaku will shift, deepen, and sometimes recede as the fish grows. A tosai with a promising sandan pattern may develop into a stunning nisai or may lose definition as patches merge or fade. This unpredictability is part of the fascination of koi keeping — and the reason experienced hobbyists advise selecting young fish based on skin quality and edge definition (kiwa/sashi) rather than current pattern, which is transient.</p>
<p>Growth rate is heavily influenced by water volume, temperature, stocking density, and nutrition. Fish maintained in larger ponds with warmer summer temperatures and generous feeding will grow significantly faster than those in smaller, cooler systems. However, rapid growth must be balanced against colour stability — pushing growth too aggressively can cause <em>hi</em> to thin and fade.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding Kohaku is a pursuit that consumes entire lifetimes. Japanese breeders spawn selected pairs in mud ponds in late spring, producing 100,000–500,000 eggs per spawning. From this vast number, the breeder begins a ruthless culling process: at 4–6 weeks, fry without any red colouration are removed. At 3 months, fish with poor pattern placement or body shape are culled. By one year, the breeder may retain fewer than 1% of the original hatch for growing on.</p>
<p>The parent selection is paramount. Breeders maintain detailed records of how specific pairings produce — which male consistently sires offspring with stable <em>hi</em>, which female line produces superior <em>shiroji</em>. This accumulated knowledge, passed through generations of breeding families, is the true treasure of the Niigata koi industry and cannot be replicated by hobbyists working with limited stock and space.</p>
<p>Home breeding is possible in ponds of 2,000+ gallons but should be approached with realistic expectations. Without access to proven parent stock and the space to raise and cull thousands of fry, the likelihood of producing show-quality Kohaku is very low. The exercise is educational and rewarding in its own right, but serious quality requires serious infrastructure.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<p><strong>Koi Herpesvirus (KHV)</strong> is the most devastating disease in koi keeping. It is highly contagious, with mortality rates of 80–100% in naive populations. Symptoms include gill necrosis, sunken eyes, excess mucus production, and rapid death. There is no cure; management involves quarantine, supportive care, and allowing survivors (which become carriers) to develop immunity. Prevention through rigorous quarantine of all new fish (minimum 4 weeks at 23–25 °C) is essential.</p>
<p><strong>Parasites</strong> — particularly <em>Ichthyophthirius</em> (white spot), <em>Chilodonella</em>, <em>Costia</em>, and anchor worm (<em>Lernaea</em>) — are common in pond environments. Regular microscopic scrapes during the spring health check allow early detection and treatment. Maintain a koi health kit with formalin, malachite green, potassium permanganate, and a quality anti-parasite medication.</p>
<p><strong>Bacterial ulcers</strong> caused by <em>Aeromonas</em> or <em>Pseudomonas</em> typically appear as red, open sores on the body. They are usually secondary to physical injury, parasitic damage, or environmental stress. Topical treatment with propolis or wound sealant, combined with antibiotic injections (by a veterinarian) for severe cases, is the standard protocol.</p>

<h2 id="judging-criteria">Judging Criteria</h2>
<p>At formal koi shows, Kohaku are evaluated on the following criteria, roughly in order of importance:</p>
<ul>
<li><strong>Skin quality (shiroji):</strong> The white base must be snow-white, luminous, and free of any yellowing, blemishing, or shimmer. Skin quality is genetic and is the foundation upon which all other traits are built.</li>
<li><strong>Hi quality:</strong> The red markings should be deep, uniform, and consistent across the entire body. Thin, faded, or patchy <em>hi</em> is heavily penalised.</li>
<li><strong>Pattern balance:</strong> The overall pattern should be visually balanced when the fish is viewed from above. Pattern should extend from head to tail with appropriate white space between markings.</li>
<li><strong>Kiwa and sashi:</strong> As detailed above — sharp trailing edges and subtly graded leading edges indicate high skin quality and pattern stability.</li>
<li><strong>Body conformation:</strong> A torpedo-shaped, symmetrical body with a broad, powerful head and a smoothly tapering tail section. The fish should be well-proportioned with no deformities.</li>
<li><strong>Deportment:</strong> The fish should swim with confidence, power, and poise. Nervous, erratic, or lethargic fish are penalised.</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How much does a quality Kohaku koi cost?',
        answer:
          'Pond-quality Kohaku from reputable breeders start at £30–£100 for tosai (one-year-old) fish. Show-potential tosai from named Japanese bloodlines range from £500–£5,000. Mature show-quality Kohaku (nisai and above) from top breeders can cost £5,000–£50,000, and Grand Champion-level specimens have sold for over £1,000,000. The price reflects genetics, skin quality, pattern, and the breeder\'s reputation.',
      },
      {
        question: 'Can Kohaku koi be kept in an aquarium?',
        answer:
          'Juvenile Kohaku can be temporarily housed in large aquariums (150+ gallons) during quarantine or grow-out, but long-term keeping requires a pond of at least 1,000 gallons. Adult Kohaku reach 60–90 cm and need the swimming space, water volume, and thermal stability that only a pond can provide. Keeping adult koi in aquariums stunts growth, compromises health, and prevents the fish from developing its full colour and body potential.',
      },
      {
        question: 'Why is my Kohaku losing its red colour?',
        answer:
          'Colour loss in Kohaku can result from several factors: poor water quality (particularly high nitrate), inadequate diet lacking carotenoid pigments, excessive direct sunlight causing colour bleaching, stress, parasitic infection, or simply genetics — some fish carry unstable hi that fades with age regardless of care. Ensure water quality is pristine, feed a diet supplemented with spirulina and astaxanthin-based colour food (limited to 20–30% of total diet), and provide partial shade over the pond. If colour loss is sudden, investigate water parameters and check for parasites.',
      },
      {
        question: 'How long do Kohaku koi live?',
        answer:
          'Kohaku koi have a lifespan of 25–35 years in well-maintained ponds, with exceptional specimens living beyond 50 years. The famous koi "Hanako" (a Scarlet variety, not a Kohaku) was reportedly 226 years old at death, though this age is disputed. Longevity is directly tied to water quality, pond size, diet, and stress levels. Koi kept in undersized or poorly maintained ponds rarely survive beyond 10–15 years.',
      },
      {
        question: 'What is the difference between a Kohaku and a Tancho?',
        answer:
          'A Tancho Kohaku is a specific pattern variation of Kohaku featuring a single, round red marking centred on the head with an entirely white body — resembling the Japanese flag. At formal koi shows, Tancho Kohaku compete in a separate Tancho class rather than with standard Kohaku. A regular Kohaku has red markings distributed across the body in various patterns (nidan, sandan, etc.). Both are judged on skin quality and colour depth, but the Tancho is additionally evaluated on the symmetry and placement of its solitary head mark.',
      },
    ],
    sources: [
      {
        title: 'Cyprinus rubrofuscus (Lacepède, 1803)',
        url: 'https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Nishikigoi: The Living Jewels of Japan — Breeding, Appreciation, and Judging',
        url: 'https://doi.org/10.1007/978-981-15-2585-0',
        publisher: 'Springer',
      },
      {
        title:
          'Koi Herpesvirus Disease: Diagnosis, Prevention, and Management in Ornamental Carp',
        url: 'https://doi.org/10.1111/jfd.13150',
        publisher: 'Journal of Fish Diseases',
      },
    ],
    relatedSlugs: [
      'koi-fish',
      'ranchu-goldfish',
      'blue-diamond-discus',
    ],
  },

  // ─────────────────────────────────────────────
  // Koi Fish Complete Care Guide
  // ─────────────────────────────────────────────
  {
    title: 'Koi Fish Complete Care Guide',
    slug: 'koi-fish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/species/koi-fish-hero.jpg',
    heroImageAlt:
      'Diverse collection of koi varieties including Kohaku, Sanke, and Showa swimming together in a crystal-clear Japanese pond',
    metaTitle:
      'Koi Fish (Cyprinus rubrofuscus): Complete Varieties & Care Guide | The Fish Collection',
    metaDescription:
      'Complete koi fish care guide — all major varieties, pond setup, water quality, seasonal care & health management. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'What do koi fish need to thrive?',
    quickAnswer:
      'Koi require a well-filtered pond of at least 1,000 gallons with a depth of 120 cm or more, water temperatures of 65–75 °F (18–24 °C), a pH of 7.0–8.5, and a seasonally adjusted diet of high-quality koi pellets supplemented with vegetables and colour-enhancing foods. Rigorous quarantine of new fish, regular health checks, and seasonal management are essential for long-term success.',
    summary:
      'Koi (<em>Cyprinus rubrofuscus</em>), or Nishikigoi in their full Japanese designation, are ornamental carp bred over centuries into dozens of distinct varieties defined by colour, pattern, and scale type. From the classic Kohaku to the metallic Ogon, the tri-coloured Showa to the graceful Butterfly, koi offer a lifetime of aesthetic appreciation and horticultural challenge. This comprehensive guide covers all major koi varieties, pond design and filtration, water quality management, seasonal feeding protocols, breeding, health management, and overwintering — everything a keeper needs to build and maintain a world-class koi collection.',
    scientificName: 'Cyprinus rubrofuscus',
    category: 'koi',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cyprinus rubrofuscus' },
      { label: 'Max Size', value: '60–90 cm (24–36 in); jumbo lines 90+ cm' },
      { label: 'Pond Size', value: '1,000 gallons (3,785 L) minimum' },
      { label: 'Temperature', value: '65–75 °F (18–24 °C) active season' },
      { label: 'pH', value: '7.0–8.5' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '25–35+ years' },
      { label: 'Diet', value: 'Omnivore — seasonal pellets, vegetables, colour food' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'major-varieties', text: 'Major Varieties', level: 2 },
      { id: 'gosanke', text: 'Gosanke: Kohaku, Sanke & Showa', level: 3 },
      { id: 'ogon-and-metallics', text: 'Ogon & Metallic Varieties', level: 3 },
      { id: 'butterfly-koi', text: 'Butterfly Koi', level: 3 },
      { id: 'tancho', text: 'Tancho', level: 3 },
      { id: 'pond-setup', text: 'Pond Setup', level: 2 },
      { id: 'water-quality', text: 'Water Quality', level: 2 },
      { id: 'seasonal-feeding', text: 'Seasonal Feeding', level: 2 },
      { id: 'health-management', text: 'Health Management', level: 2 },
      { id: 'overwintering', text: 'Overwintering', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>Nishikigoi — literally "brocaded carp" — are ornamental varieties of <em>Cyprinus rubrofuscus</em> that have been selectively bred in Japan since the early 19th century. What began as rice farmers noticing colour mutations in their food carp has evolved into a global industry worth billions of pounds, with Japanese breeding farms, international dealers, and competitive shows spanning every continent.</p>
<p>The diversity of koi varieties is staggering. The Japanese classification system recognises 16 major groups encompassing dozens of named varieties, each defined by specific combinations of base colour, pattern, and scale type. For the newcomer, this taxonomy can be overwhelming — but the fundamentals are accessible, and the learning journey is one of the great pleasures of the hobby.</p>
<p>At The Fish Collection, we import koi directly from breeders in Niigata, Hiroshima, and Okayama prefectures, as well as from select Israeli and Thai farms that produce excellent quality fish at accessible price points. Whether you are building your first pond or adding to an established collection, this guide provides the foundational knowledge you need to keep koi successfully and appreciate them deeply.</p>

<h2 id="major-varieties">Major Varieties</h2>
<h3 id="gosanke">Gosanke: Kohaku, Sanke & Showa</h3>
<p>The Gosanke — Kohaku, Taisho Sanshoku (Sanke), and Showa Sanshoku (Showa) — are the three prestige varieties that dominate competitive koi shows. Understanding the Gosanke is fundamental to koi appreciation.</p>
<ul>
<li><strong>Kohaku:</strong> White base with red (<em>hi</em>) markings. The oldest and most revered variety. Judged primarily on skin quality (<em>shiroji</em>), colour depth, and pattern balance. A flawless Kohaku is considered the ultimate expression of Nishikigoi artistry. For detailed Kohaku guidance, see our dedicated <a href="/species/kohaku-koi">Kohaku Koi Complete Guide</a>.</li>
<li><strong>Taisho Sanshoku (Sanke):</strong> White base with red and black (<em>sumi</em>) markings. The black markings appear as accent spots on the white base — never on the head, and ideally small, well-placed, and ink-dark. A great Sanke has all the qualities of a great Kohaku, plus perfectly balanced sumi that enhances rather than clutters the pattern.</li>
<li><strong>Showa Sanshoku (Showa):</strong> Black base with red and white markings. Distinguished from Sanke by its black base colour and the presence of sumi on the head (menware). Showa have a bold, dramatic appearance — the interplay of deep black, vivid red, and clean white creates striking contrast. Modern Showa have been bred with increasingly more white, making distinction from Sanke a matter of examining the base colour and sumi distribution.</li>
</ul>

<h3 id="ogon-and-metallics">Ogon & Metallic Varieties</h3>
<p>The Ogon is a single-coloured metallic koi — a fish of pure, gleaming gold, platinum, or orange. Developed in the 1940s by Sawata Aoki, the Ogon was the first metallic koi variety and remains enormously popular for its visual impact in the pond. Key Ogon varieties include:</p>
<ul>
<li><strong>Yamabuki Ogon:</strong> Brilliant metallic gold. The most popular Ogon variety.</li>
<li><strong>Platinum Ogon (Purachina):</strong> Uniform metallic silver-white. Stunning in clear water.</li>
<li><strong>Orenji Ogon:</strong> Metallic orange. Warm and vivid.</li>
</ul>
<p>Metallic lustre has been crossed into patterned varieties to create the Hikarimoyo class — including Kujaku (metallic with red and black pattern), Hariwake (platinum with gold pattern), and Kikusui (metallic doitsu with red markings). These fish combine the visual impact of metallic skin with the pattern interest of traditional varieties.</p>

<h3 id="butterfly-koi">Butterfly Koi</h3>
<p>Butterfly koi (also called long-fin koi or dragon carp) feature dramatically elongated fins and barbels that flow and billow as the fish swims, creating an ethereal, elegant appearance. They were developed by crossing standard Nishikigoi with Indonesian long-fin carp in the 1980s and have become enormously popular worldwide.</p>
<p>It must be noted that Butterfly koi are controversial among traditional Japanese koi enthusiasts and are not recognised at Japanese koi shows. Purists argue that the elongated fins distort the body proportions that centuries of breeding have refined. However, in Western markets and at international shows that include a Butterfly class, they are among the most sought-after and expensive fish, particularly in Kohaku, Sanke, and metallic patterns.</p>
<p>Care requirements for Butterfly koi are identical to standard koi, with one caveat: the long fins are more susceptible to physical damage and bacterial fin rot. Avoid sharp pond edges, aggressive tank mates, and rough handling during netting.</p>

<h3 id="tancho">Tancho</h3>
<p>The Tancho pattern — a single, round red marking centred on the head of an otherwise white fish — evokes the Japanese national flag and is one of the most prized and instantly recognisable koi patterns. Tancho can occur in any variety (Tancho Kohaku, Tancho Sanke, Tancho Showa), but the Tancho Kohaku — pure white body, single red crown — is the archetypal form.</p>
<p>The tancho marking should be perfectly round or oval, centred symmetrically between the eyes, and deep crimson in colour. It should not extend beyond the eyes or onto the nose. Producing a high-quality Tancho is almost entirely a matter of luck — breeders cannot reliably produce the pattern, making exceptional Tancho specimens rare and valuable.</p>

<h2 id="pond-setup">Pond Setup</h2>
<p>A koi pond is a significant infrastructure investment, and cutting corners at the design stage invariably leads to expensive retrofitting later. The key principles are: build bigger than you think you need, invest in filtration, and plan for maintenance access.</p>
<ul>
<li><strong>Volume:</strong> Minimum 1,000 gallons for a small collection (3–5 koi). For serious keeping, 3,000–5,000 gallons is a practical starting point, and dedicated hobbyists build 10,000–30,000 gallon systems.</li>
<li><strong>Depth:</strong> Minimum 120 cm (4 feet). Deeper ponds (150–180 cm) provide superior thermal stability, predator protection, and water quality.</li>
<li><strong>Bottom drains:</strong> Essential. One 4-inch gravity-fed bottom drain per 5,000 gallons, connected to a settlement chamber (sieve or vortex) that removes solid waste before the biological stage.</li>
<li><strong>Biological filtration:</strong> Multi-chamber systems using Japanese matting, K1 moving-bed media, or bakki showers. Size the filter to turn the pond volume every 1–2 hours. Under-filtering a koi pond is the single most common design error.</li>
<li><strong>UV sterilisation:</strong> 40–80 watts per 5,000 gallons to control suspended algae (green water) and reduce waterborne pathogens.</li>
<li><strong>Aeration:</strong> Air pumps with diffuser arrays or venturi systems. Koi consume substantial dissolved oxygen, especially at higher temperatures and stocking densities. Target a minimum of 7 ppm DO.</li>
<li><strong>Predator protection:</strong> Netting, electric fencing, or motion-activated deterrents to protect from herons, kingfishers, raccoons, and cats. A single heron visit can devastate a collection worth tens of thousands of pounds.</li>
</ul>

<h2 id="water-quality">Water Quality</h2>
<p>Koi are remarkably hardy fish that tolerate a wide range of conditions, but thriving — developing vibrant colour, rapid growth, and strong immune function — requires actively managed water quality:</p>
<ul>
<li><strong>Temperature:</strong> 18–24 °C (65–75 °F) for active growth. Koi are cold-hardy to near-freezing temperatures but cease feeding below 10 °C and enter torpor below 6 °C.</li>
<li><strong>pH:</strong> 7.0–8.5. Monitor KH (carbonate hardness) to ensure adequate buffering. Maintain KH above 4 dKH to prevent pH crashes, which can kill fish within hours.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm. Non-negotiable. Any measurable ammonia or nitrite indicates an inadequate or immature biological filter.</li>
<li><strong>Nitrate:</strong> Below 40 ppm. Regular partial water changes (10–20% weekly) are the primary control mechanism.</li>
<li><strong>Dissolved Oxygen:</strong> Above 7 ppm. Critical during warm summer months when oxygen solubility drops and metabolic demand peaks.</li>
<li><strong>Salinity:</strong> A prophylactic salt level of 0.1–0.3% (1–3 grams per litre) is used by many koi keepers to reduce osmotic stress and inhibit certain parasites. Higher concentrations (0.5–0.6%) are used as a short-term treatment for parasitic infections.</li>
</ul>

<h2 id="seasonal-feeding">Seasonal Feeding</h2>
<p>Koi feeding is a seasonal discipline that must be adjusted to water temperature:</p>
<ul>
<li><strong>Spring (10–18 °C):</strong> As the pond warms and koi emerge from winter torpor, begin feeding with an easily digestible wheatgerm-based pellet (25–30% protein). Feed once daily in small quantities. The koi's digestive system is reactivating after months of inactivity, and overfeeding at this stage can cause fatal gut rot.</li>
<li><strong>Summer (18–24 °C):</strong> The primary growth and colour development season. Feed a high-protein staple pellet (35–40% protein) 2–4 times daily. Introduce colour-enhancing food containing spirulina and astaxanthin to intensify red and orange colouration. Supplement with fresh foods: blanched lettuce, watermelon, orange slices, and prawns.</li>
<li><strong>Autumn (18–10 °C):</strong> Transition back to wheatgerm as temperatures decline. This is the final opportunity to build the koi's fat reserves and condition colour before winter. Feed once daily, reducing to every other day as temperatures approach 10 °C.</li>
<li><strong>Winter (below 10 °C):</strong> Cease feeding entirely. Koi cannot digest food in cold water, and undigested food in the gut promotes bacterial proliferation that can be fatal. Do not feed regardless of how active the koi appear on warmer winter days.</li>
</ul>
<p>Premium koi food brands trusted by The Fish Collection include Saki-Hikari, JPD (Japan Pet Design), Nishikigoi-O, and Kenzen. Avoid budget pellets with excessive filler — the cost difference is negligible compared to the value of the fish they are feeding.</p>

<h2 id="health-management">Health Management</h2>
<p>Proactive health management is the hallmark of experienced koi keeping. The two pillars are quarantine and regular microscopic examination.</p>
<p><strong>Quarantine:</strong> Every new koi — regardless of source — must be quarantined in a separate, heated (23–25 °C) system for a minimum of 4 weeks before introduction to the main pond. This period allows observation for KHV (Koi Herpesvirus), which is triggered by temperatures in the 22–28 °C range, as well as bacterial infections, parasites, and behavioural abnormalities. A quarantine system need not be elaborate: a 300-gallon stock tank with a filter, heater, air pump, and lid is sufficient.</p>
<p><strong>Microscopic examination:</strong> Invest in a basic microscope (100–400× magnification) and learn to perform skin scrapes and gill biopsies. Spring and autumn health checks — examining mucus samples under magnification for <em>Chilodonella</em>, <em>Costia</em>, <em>Trichodina</em>, flukes (Gyrodactylus and Dactylogyrus), and other parasites — allow early detection and treatment before clinical signs appear. This single skill elevates a koi keeper from reactive to proactive and can save an entire collection.</p>
<p>Common koi diseases include:</p>
<ul>
<li><strong>KHV (Koi Herpesvirus):</strong> The most feared koi disease. Mortality rates of 80–100%. No cure exists. Prevention through quarantine is the only defence.</li>
<li><strong>Bacterial ulcers:</strong> Caused by <em>Aeromonas</em> and <em>Pseudomonas</em>. Treat with topical wound care and, in severe cases, antibiotic injection.</li>
<li><strong>Parasites:</strong> White spot (<em>Ich</em>), <em>Chilodonella</em>, <em>Costia</em>, anchor worm, and fish lice (<em>Argulus</em>) are common. Treat with appropriate medications (formalin, malachite green, potassium permanganate, or commercial anti-parasite treatments) based on microscopic identification.</li>
<li><strong>Dropsy:</strong> Fluid accumulation causing pinecone-like scale protrusion. Usually indicates kidney failure. Prognosis is poor.</li>
</ul>

<h2 id="overwintering">Overwintering</h2>
<p>In temperate climates, koi must be overwintered in the pond — and the pond must be designed to support this. Key considerations:</p>
<ul>
<li><strong>Depth:</strong> A minimum of 120 cm ensures that the lower water column remains above freezing even when the surface ices over. Deeper ponds (150+ cm) provide greater safety margins.</li>
<li><strong>Aeration:</strong> Maintain gentle aeration throughout winter. An air stone placed at mid-depth (not the bottom — you do not want to disturb the warmer water layer at the base) prevents the surface from icing over completely, allowing toxic gas exchange.</li>
<li><strong>De-icer:</strong> A floating pond de-icer or heated air stone maintains an opening in the ice for gas exchange. Never break ice by striking it — the shockwave can injure or kill the koi.</li>
<li><strong>Filtration:</strong> Continue running the biological filter at a reduced flow rate. Cease UV sterilisation (unnecessary in cold water and the unit's lifespan is preserved). Ensure the pump intake does not draw from the warm bottom layer.</li>
<li><strong>Do not feed:</strong> As detailed above, feeding below 10 °C is dangerous. The koi live off fat reserves accumulated during autumn.</li>
</ul>
<p>In regions where pond temperatures drop below 4 °C for extended periods, some keepers move prized specimens indoors to heated stock tanks for the winter. This is common practice for high-value show fish and eliminates the risks associated with prolonged cold exposure, ice damage, and predation during the vulnerable winter period.</p>

<h2 id="breeding">Breeding</h2>
<p>Koi breeding follows the same seasonal cycle as wild carp. As spring water temperatures reach 18–22 °C, sexually mature fish (typically 3+ years old) begin spawning behaviour. Males develop breeding tubercles on the gill plates and pectoral fins and pursue females aggressively, nudging their flanks to stimulate egg release.</p>
<p>Females deposit adhesive eggs on spawning brushes, submerged plants, or any available surface. A single large female can produce 100,000–500,000 eggs. Remove the parents immediately after spawning to prevent egg predation. Eggs hatch in 4–7 days depending on temperature.</p>
<p>Fry require infusoria or commercial liquid fry food for the first week, then freshly hatched brine shrimp, progressing to powdered and eventually pelleted food over the following months. Culling is essential to maintain quality — professional breeders may retain fewer than 1% of a spawning as grow-on candidates. Without disciplined selection, each generation degrades in colour, pattern, and body conformation.</p>
<p>For the hobbyist, breeding koi is a rewarding educational experience, but producing quality fish comparable to those from professional Japanese breeders requires decades of accumulated breeding knowledge, proven parent stock, and infrastructure (mud ponds, grow-out systems, and the space to raise and cull thousands of fry) that few private keepers possess.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How many koi can I keep in my pond?',
        answer:
          'A general guideline is one adult koi per 250–500 gallons of well-filtered pond water. A 1,000-gallon pond can comfortably support 3–4 adult koi; a 3,000-gallon pond, 8–12. These are conservative figures that assume mature fish (50–70 cm) and robust filtration. Overstocking degrades water quality, stunts growth, stresses fish, and increases disease risk. It is always better to understock — your koi will grow larger, display better colour, and live longer.',
      },
      {
        question: 'Can koi survive winter in an outdoor pond?',
        answer:
          'Yes — koi are cold-hardy fish that can survive water temperatures near freezing, provided the pond is deep enough (minimum 120 cm / 4 feet) to prevent complete freezing and an opening is maintained in the ice surface for gas exchange. Maintain gentle aeration at mid-depth, use a floating de-icer, and do not feed below 10 °C. In extremely cold climates, high-value fish can be moved to heated indoor tanks for the winter.',
      },
      {
        question: 'What is the difference between koi and goldfish?',
        answer:
          'Koi (Cyprinus rubrofuscus) and goldfish (Carassius auratus) are different species in the carp family. Koi grow much larger (60–90+ cm vs. 15–30 cm for goldfish), live longer (25–35+ years vs. 10–15 years), possess barbels (whisker-like structures at the mouth corners, which goldfish lack), and have been bred for pattern and colour variety in ways distinct from goldfish. Koi require pond-scale habitats; most goldfish varieties can be kept in aquariums. The two species should not be interbred (they cannot produce fertile offspring) but can coexist in the same pond.',
      },
      {
        question: 'How fast do koi grow?',
        answer:
          'Koi growth rate depends on water temperature, pond volume, feeding regime, stocking density, and genetics. In optimal conditions (20–24 °C, spacious pond, high-quality diet), koi typically grow 15–25 cm in their first year, reaching 30–45 cm by year two and 45–60 cm by year three. Growth continues throughout life but slows significantly after year five. Fish from Japanese "jumbo" bloodlines grow fastest and largest, potentially exceeding 85 cm. Koi kept in undersized ponds with poor nutrition will be permanently stunted.',
      },
      {
        question: 'Do koi need a filter?',
        answer:
          'Absolutely. Koi are heavy waste producers, and a koi pond without adequate filtration will rapidly develop toxic ammonia and nitrite levels. A proper koi pond filter system includes mechanical prefiltration (sieve or settlement chamber), biological filtration (multi-chamber system with adequate media to process the ammonia load), and UV sterilisation (to control algae and reduce pathogen counts). The filter should turn over the entire pond volume every 1–2 hours. There is no such thing as over-filtering a koi pond.',
      },
    ],
    sources: [
      {
        title: 'Cyprinus rubrofuscus (Lacepède, 1803)',
        url: 'https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Manual of Koi Health: A Guide to Common Diseases and Their Treatment',
        url: 'https://doi.org/10.1002/9781119558477',
        publisher: 'Wiley-Blackwell',
      },
      {
        title:
          'Seasonal Variation in Immune Function and Disease Susceptibility in Ornamental Carp',
        url: 'https://doi.org/10.1016/j.fsi.2020.04.051',
        publisher: 'Fish & Shellfish Immunology',
      },
    ],
    relatedSlugs: [
      'kohaku-koi',
      'ranchu-goldfish',
      'platinum-arowana',
    ],
  },

  // ─────────────────────────────────────────────
  // Betta Fish Complete Guide
  // ─────────────────────────────────────────────
  {
    title: 'Betta Fish Complete Guide: Varieties, Care & Breeding',
    slug: 'betta-fish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/species/betta-fish-hero.jpg',
    heroImageAlt:
      'Stunning halfmoon betta displaying fully spread iridescent blue and red finnage against a dark planted aquarium background',
    metaTitle:
      'Betta Fish (Betta splendens): Complete Varieties, Care & Breeding Guide | The Fish Collection',
    metaDescription:
      'Complete betta fish guide — all tail types, exotic varieties, tank setup, breeding & health. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion: 'What is the best way to care for a betta fish?',
    quickAnswer:
      'Betta fish thrive in a heated, filtered aquarium of at least 5 gallons with a temperature of 76–82 °F (24–28 °C), a pH of 6.5–7.5, and gentle filtration. They are carnivores requiring a diet of high-quality betta pellets, frozen bloodworms, and brine shrimp. Males must be housed individually to prevent lethal aggression. Provide plants or cover for security and avoid strong currents that stress their elaborate fins.',
    summary:
      'The Siamese fighting fish (<em>Betta splendens</em>) is the world\'s most popular labyrinth fish and one of the most diverse ornamental species in the aquatic trade. Centuries of selective breeding in Thailand have transformed a modest, short-finned wild fish into an astonishing array of tail types, colour patterns, and finnage styles — from the classic Veiltail to the extravagant Halfmoon, from the combat-bred Plakat to the ethereal Dumbo Ear. This guide covers wild bettas versus show bettas, every major tail type and exotic variety, proper tank setup, breeding protocols, and health management — drawing on The Fish Collection\'s extensive experience sourcing premium bettas from Thai breeders.',
    scientificName: 'Betta splendens',
    category: 'betta',
    keyFacts: [
      { label: 'Scientific Name', value: 'Betta splendens' },
      { label: 'Max Size', value: '6–7 cm (2.5–3 in)' },
      { label: 'Tank Size', value: '5 gallons (19 L) minimum' },
      { label: 'Temperature', value: '76–82 °F (24–28 °C)' },
      { label: 'pH', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Beginner' },
      { label: 'Lifespan', value: '3–5 years in captivity' },
      { label: 'Diet', value: 'Carnivore — pellets, frozen and live foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'wild-vs-show-bettas', text: 'Wild Bettas vs Show Bettas', level: 2 },
      { id: 'tail-types', text: 'Tail Types', level: 2 },
      { id: 'exotic-varieties', text: 'Exotic Varieties', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p><em>Betta splendens</em> — the Siamese fighting fish — is arguably the most recognisable freshwater aquarium fish on the planet. Native to the shallow rice paddies, floodplains, and stagnant waters of Thailand, Laos, Cambodia, and Vietnam, the wild betta is a modest, short-finned fish with muted colouration. Centuries of selective breeding, first for fighting prowess and later for ornamental beauty, have produced the spectacular array of forms available today.</p>
<p>The betta's defining anatomical feature is its labyrinth organ — a specialised respiratory structure that allows the fish to breathe atmospheric air directly. This adaptation evolved in response to the oxygen-depleted waters of its native habitat and is the reason bettas can survive in conditions that would kill most other fish. However, this survival capacity has been catastrophically misinterpreted by the pet industry: the fact that a betta <em>can</em> survive in a cup of stagnant water does not mean it <em>should</em>. A thriving betta requires a properly heated, filtered, and furnished aquarium.</p>
<p>At The Fish Collection, we source our bettas directly from specialist breeders in Thailand — the global epicentre of betta genetics — and ship them in insulated, individually packed containers to ensure they arrive in peak condition. From competition-grade Halfmoons to rare Galaxy Koi patterns, we curate specimens that represent the finest examples of this extraordinary species.</p>

<h2 id="wild-vs-show-bettas">Wild Bettas vs Show Bettas</h2>
<p>The genus <em>Betta</em> contains over 70 described species, and the distinction between wild bettas and domesticated show bettas is fundamental to understanding the hobby.</p>
<p><strong>Wild bettas</strong> — species such as <em>Betta imbellis</em> (Peaceful Betta), <em>Betta smaragdina</em> (Emerald Betta), <em>Betta mahachaiensis</em>, and <em>Betta hendra</em> — are typically smaller, shorter-finned, and more subtly coloured than their domesticated cousins. They often display iridescent greens, blues, and reds that are visible only under certain lighting conditions. Wild bettas are generally less aggressive than <em>B. splendens</em> and can sometimes be kept in pairs or small groups in heavily planted tanks. They are prized by specialist hobbyists for their natural beauty and fascinating social behaviours.</p>
<p><strong>Alien bettas</strong> are a particularly sought-after category: interspecific hybrids between wild species (typically <em>B. smaragdina</em> × <em>B. splendens</em> or <em>B. stiktos</em> × <em>B. splendens</em>) that display extraordinary iridescent colouration — often a metallic copper, green, or blue that covers the entire body and fins. Alien hybrids are fertile and can be selectively bred, producing striking fish that combine the hardiness of domesticated bettas with the metallic sheen of wild species.</p>
<p><strong>Show bettas</strong> are the selectively bred <em>B. splendens</em> varieties that dominate the aquarium trade. Over centuries, Thai breeders have developed an extraordinary range of fin shapes, colour patterns, and body types that bear little resemblance to the wild ancestor. Show bettas are categorised primarily by tail type (discussed below) and colour pattern, with competition classes at International Betta Congress (IBC) and Thai betta shows numbering in the dozens.</p>

<h2 id="tail-types">Tail Types</h2>
<p>Tail type is the primary classification system for show bettas. Each type has been selectively bred to emphasise specific fin characteristics:</p>
<ul>
<li><strong>Halfmoon (HM):</strong> The gold standard of betta finnage. The caudal fin spreads a full 180 degrees when flared, creating a perfect semicircle. Dorsal, anal, and caudal fins are large and symmetrical. Breeding true Halfmoons with consistent 180-degree spread, no ray crossing, and balanced symmetry is technically demanding.</li>
<li><strong>Crowntail (CT):</strong> Fin rays extend beyond the webbing, creating a dramatic spiked or fringed appearance. The reduction in webbing can vary from a single ray extension to deeply forked "double ray" or "cross ray" patterns. Crowntails are among the most visually striking bettas but are more prone to fin damage.</li>
<li><strong>Plakat (PK):</strong> Short-finned bettas closest to the wild form. Plakats are the traditional fighting form — strong, fast, and aggressive. In the show world, Plakats are judged on body shape, fin proportion, and colour intensity. They are generally hardier than long-finned varieties, less prone to fin rot, and more active swimmers. The Halfmoon Plakat (HMPK) combines the short fin of the Plakat with the 180-degree spread of the Halfmoon — a particularly popular and competitive form.</li>
<li><strong>Dumbo Ear (Big Ear / Elephant Ear):</strong> The pectoral fins are enormously enlarged, creating wing-like appendages that the fish fans as it swims. Dumbo bettas can occur in any tail type (Dumbo Halfmoon, Dumbo Plakat, etc.) and are prized for the graceful, almost avian quality of their movement. The enlarged pectoral fins do not impair swimming as severely as long caudal fins.</li>
<li><strong>Veiltail (VT):</strong> The most common tail type in the pet trade. The caudal fin droops downward in a long, flowing veil. While beautiful, Veiltails are not competitive in modern shows and are considered a "pet-quality" form by breeders. They are, however, perfectly wonderful companion fish for the casual hobbyist.</li>
<li><strong>Double Tail (DT):</strong> The caudal fin is split into two distinct lobes, creating a forked or split-tail appearance. Double Tails also have a notably wider dorsal fin. The gene is associated with a shorter body, which can cause spinal issues in poorly bred specimens.</li>
<li><strong>Rosetail / Feathertail:</strong> An extreme expression of the Halfmoon gene, where excessive branching of the fin rays creates a ruffled, rose-petal appearance. While visually spectacular, Rosetails often struggle to swim effectively under the weight of their fins and are prone to fin collapse and chronic fin rot. Many experienced breeders consider the Rosetail a form that has been pushed beyond the point of functional welfare.</li>
</ul>

<h2 id="exotic-varieties">Exotic Varieties</h2>
<p>Beyond tail type, bettas are categorised by colour pattern. The most sought-after exotic varieties include:</p>
<ul>
<li><strong>Galaxy Koi:</strong> A pattern combining the marble gene's colour-shifting properties with a koi-like distribution of red, black, white, and iridescent blue/galaxy scales. Galaxy Koi bettas display a kaleidoscopic pattern that continues to evolve throughout the fish's life. For detailed guidance, see our <a href="/species/galaxy-koi-betta">Galaxy Koi Betta Complete Guide</a>.</li>
<li><strong>Samurai:</strong> A dramatic pattern featuring a metallic dragon-scale body overlaid with bold, high-contrast patches of black (often on the head and along the dorsal line) and deep red or copper. The Samurai pattern evokes traditional Japanese armour, with the dark scales serving as a "mask" over the metallic base.</li>
<li><strong>Alien Betta Hybrids:</strong> As described above — interspecific hybrids displaying full-body metallic iridescence in copper, green, blue, or steel. Alien bettas have become one of the fastest-growing segments of the premium betta market, with exceptional specimens commanding £50–£200.</li>
<li><strong>Dragon Scale:</strong> Thick, opaque, metallic-white scales cover the body, creating an armoured appearance. Dragon Scale bettas are striking but carry a genetic predisposition to tumour-like scale overgrowth and, critically, diamond eye — a condition where the thick scales grow over the eyes, causing partial or complete blindness. Ethical breeders are working to reduce diamond eye incidence, but buyers should be aware of this risk.</li>
<li><strong>Nemo / Candy:</strong> Multi-coloured patterns featuring bold patches of red, orange, yellow, black, and blue in a harlequin-like distribution. The Nemo pattern was developed by Thai breeders in the early 2020s and quickly became one of the most commercially popular exotic varieties.</li>
<li><strong>Copper / Metallic:</strong> Full-body metallic colouration in copper, gold, green, or steel blue. The metallic gene produces an intense reflective quality that makes these fish shimmer under aquarium lighting. Copper bettas are particularly popular and are the genetic foundation for many Alien hybrids.</li>
</ul>

<h2 id="tank-setup">Tank Setup</h2>
<p>The minimum acceptable tank for a single betta is 5 gallons (19 litres). This is not a suggestion — it is the baseline for a healthy, active fish. Larger is always better; a 10-gallon (38 L) planted tank is the ideal single-betta setup, providing ample swimming space, stable water parameters, and room for live plants and hardscape.</p>
<p>The tank must be heated. Bettas are tropical fish that require a consistent 24–28 °C (76–82 °F). A small, adjustable heater (25–50 watts for a 5–10 gallon tank) is essential. Unheated tanks in temperate climates subject bettas to temperature fluctuations that suppress immune function and shorten lifespan. The widespread practice of keeping bettas in unheated bowls on desktops is a form of chronic neglect, however normalised it may be in the pet trade.</p>
<p>Filtration should be gentle. Bettas — particularly long-finned varieties — are poor swimmers that struggle against strong currents. A small sponge filter or a hang-on-back filter with an adjustable flow (or a pre-filter sponge to baffle the output) is ideal. The filter provides biological and mechanical filtration while maintaining the calm water bettas prefer.</p>
<p>Live plants are strongly recommended. Java fern, <em>Anubias</em>, Java moss, Amazon sword, and floating plants (Salvinia, Frogbit) provide cover, reduce stress, absorb nitrate, and create a natural environment that encourages the betta to display its full behavioural repertoire — including bubble-nest building, territory patrolling, and foraging. Avoid plastic plants with sharp edges, which can tear delicate fins.</p>
<p>A lid is mandatory. Bettas are jumpers, and an uncovered tank is an invitation to tragedy. Ensure the lid allows access to the surface — bettas must breathe atmospheric air regularly and cannot be denied access to the water surface.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 24–28 °C (76–82 °F). Consistency is more important than hitting a specific number within this range. Temperature swings of more than 2 °C in 24 hours cause stress and immune suppression.</li>
<li><strong>pH:</strong> 6.5–7.5. Bettas are adaptable to a range of pH values, but stability is critical. If your tap water falls within this range, do not attempt to adjust it — the risk of pH instability from chemical buffers exceeds the benefit of a slightly lower pH.</li>
<li><strong>General Hardness (GH):</strong> 3–12 dGH. Bettas prefer soft-to-moderately-hard water but tolerate a wider range than many sources suggest.</li>
<li><strong>Ammonia / Nitrite:</strong> 0 ppm. Always. Cycle the tank fully before adding the fish.</li>
<li><strong>Nitrate:</strong> Below 20 ppm. Weekly 25% water changes with temperature-matched, dechlorinated water are the standard protocol.</li>
</ul>
<p>Indian almond leaves (Terminalia catappa) or alder cones are a valuable addition to betta tanks. They release tannins that mildly lower pH, tint the water a natural amber, and possess antifungal and antibacterial properties. Many Thai breeders use them routinely, and the difference in fin health and colouration can be noticeable.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Bettas are insectivores in the wild, feeding on mosquito larvae, small crustaceans, and aquatic insects at the water surface. In captivity, a high-quality diet should reflect this carnivorous preference:</p>
<ul>
<li><strong>Staple (daily):</strong> High-protein betta pellets — Hikari Betta Bio-Gold, Northfin Betta Bits, or New Life Spectrum Betta Formula. Feed 3–5 pellets twice daily. These pellets should list whole fish or insect meal as the first ingredient, not wheat or soy filler.</li>
<li><strong>Supplementary (2–3 times per week):</strong> Frozen bloodworms, frozen brine shrimp, frozen daphnia, and freeze-dried tubifex worms. These provide variety and mimic the natural diet. Thaw frozen foods before feeding.</li>
<li><strong>Live foods (1–2 times per week, if available):</strong> Live brine shrimp, daphnia, wingless fruit flies, and mosquito larvae are the ultimate betta diet and will bring out the most vibrant colours and active behaviour. Live foods are particularly valuable when conditioning breeding pairs.</li>
</ul>
<p>Fast one day per week to support digestive health. Bettas have small stomachs (roughly the size of their eye) and are easily overfed. Uneaten food fouls the water rapidly in small tanks. If the betta does not consume all offered food within two minutes, you are feeding too much.</p>

<h2 id="breeding">Breeding</h2>
<p>Betta breeding is accessible to dedicated hobbyists but demands preparation, space, and a plan for the offspring. A single spawning can produce 50–300 fry, all of which will need individual housing (for males) by 3–4 months of age.</p>
<p>Condition a selected pair separately for 2–3 weeks with protein-rich live and frozen foods. The female should be visibly plump with eggs (a white ovipositor may be visible near the vent), and the male should be actively building bubble nests.</p>
<p>The breeding tank should be 5–10 gallons, bare-bottomed, with a gentle sponge filter, a heater set to 27–28 °C, and floating plants or a styrofoam cup half (concave side down) as a bubble-nest anchor. Water depth should be reduced to 12–15 cm — shallow water improves fry survival as they must reach the surface to fill their developing labyrinth organ.</p>
<p>Introduce the female in a clear container (chimney method) within the breeding tank for 24–48 hours so the pair can see each other without contact. When the male has built a substantial bubble nest and the female displays vertical breeding bars (pale vertical stripes on the body), release her. Spawning involves an embrace where the male wraps around the female, squeezing eggs from her body and fertilising them simultaneously. The male collects the eggs in his mouth and deposits them in the bubble nest.</p>
<p>Remove the female immediately after spawning — the male will attack her to protect the nest. The male tends the eggs, retrieving any that fall and repairing the nest. Eggs hatch in 24–48 hours, and fry become free-swimming 2–3 days later. Remove the male once fry are free-swimming — he may begin eating them.</p>
<p>Fry require infusoria or commercial liquid fry food for the first 3–5 days, transitioning to freshly hatched brine shrimp nauplii, which remain the optimal fry food for the next 4–6 weeks. Growth is rapid with proper feeding and clean water (daily 10–20% water changes with an airline siphon). Begin separating aggressive males into individual containers at 8–12 weeks.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<p><strong>Fin rot</strong> is the most common betta ailment — progressive deterioration of the fin edges, appearing as ragged, discoloured, or receding fins. It is almost always caused by poor water quality (elevated ammonia, nitrite, or nitrate) or low temperatures. Mild fin rot responds to water quality improvement alone — perform 50% water changes daily for a week and ensure the heater is functioning. Moderate cases benefit from aquarium salt (1 teaspoon per 4 litres) or Indian almond leaves. Severe cases with body involvement may require antibiotic treatment (kanamycin or erythromycin).</p>
<p><strong>Velvet (Oodinium)</strong> is a parasitic infection that appears as a fine gold or rust-coloured dust on the body, best visible under a torch shone at an angle. It is highly contagious and can be fatal if untreated. Treatment involves raising the temperature to 28–30 °C, adding aquarium salt, and treating with a copper-based medication (follow label dosing precisely — copper is toxic at elevated concentrations).</p>
<p><strong>Ich (white spot disease)</strong> presents as distinct white spots on the body and fins. Raise temperature to 30 °C and treat with malachite green or formalin-based medication. Ich has a well-defined life cycle, and treatment must continue for 10–14 days to eliminate all stages.</p>
<p><strong>Swim bladder disorder</strong> causes buoyancy problems — the fish may float at the surface, sink to the bottom, or swim at an angle. In bettas, the most common cause is overfeeding or constipation. Fast for 2–3 days, then feed a small piece of blanched, deshelled pea. If the condition persists, it may indicate an internal bacterial infection requiring antibiotic treatment.</p>
<p><strong>Tumours and diamond eye</strong> are particularly common in Dragon Scale bettas. Tumours appear as lumps or growths on the body and are generally untreatable. Diamond eye — the progressive covering of the eye with thick scales — is a genetic condition with no cure. Affected fish can live comfortably but are effectively blind and require consistent tank layout and target feeding.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Can betta fish live in a bowl?',
        answer:
          'While bettas can survive temporarily in small containers due to their labyrinth organ, a bowl is wholly inadequate for long-term health. Bowls are too small to maintain stable water parameters, cannot accommodate a heater or filter, and deny the fish the swimming space it needs. The minimum acceptable habitat is a heated, filtered 5-gallon (19 L) aquarium. Bettas kept in bowls typically suffer shortened lifespans, chronic stress, and fin deterioration.',
      },
      {
        question: 'Can I keep two male bettas together?',
        answer:
          'No. Male Betta splendens are profoundly territorial and will fight to the death if housed together in the same aquarium. There are no exceptions — not even in very large tanks. Males must be housed individually. Female bettas can sometimes be kept in groups of 5 or more (a "sorority") in tanks of 20+ gallons with ample plant cover, but sororities require careful monitoring and are not recommended for beginners due to the risk of aggression escalating.',
      },
      {
        question: 'What is the most expensive betta fish?',
        answer:
          'The most expensive betta fish on record sold for approximately £1,200 at auction in Thailand — a Plakat with a Thai national flag colour pattern. More routinely, premium show-quality bettas from top Thai breeders command £30–£150, while rare patterns such as Galaxy Koi Halfmoon, Samurai HMPK, and high-quality Alien hybrids sell for £50–£250. Price is determined by fin quality, colour pattern rarity, symmetry, and the breeder\'s reputation.',
      },
      {
        question: 'How long do betta fish live?',
        answer:
          'With proper care (heated, filtered tank of 5+ gallons, quality diet, regular water changes), betta fish live 3–5 years. Some specimens reach 6–7 years. Most bettas sold in pet shops are already 6–12 months old, so their remaining lifespan in the new home is typically 2–4 years. Lifespan is dramatically shortened by cold water, poor water quality, and inadequate nutrition — bettas kept in unheated bowls rarely survive beyond 1–2 years.',
      },
      {
        question: 'Why is my betta making bubbles at the surface?',
        answer:
          'Your betta is building a bubble nest — a cluster of saliva-coated air bubbles at the water surface. This is a natural reproductive behaviour performed by healthy, mature males and is a sign of good condition. Males build bubble nests regardless of whether a female is present. The nest serves as the incubation site for eggs in the wild. A betta that builds bubble nests is generally well-fed, comfortable with its environment, and in good health.',
      },
    ],
    sources: [
      {
        title: 'Betta splendens (Regan, 1910)',
        url: 'https://www.fishbase.se/summary/Betta-splendens.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Genetic Basis of Colour and Fin Morphology in Domesticated Betta splendens',
        url: 'https://doi.org/10.1111/jfb.14562',
        publisher: 'Journal of Fish Biology',
      },
      {
        title:
          'Labyrinth Fish: Biology, Ecology, and Captive Husbandry of Anabantoids',
        url: 'https://doi.org/10.1007/978-3-030-22946-2',
        publisher: 'Springer',
      },
    ],
    relatedSlugs: [
      'galaxy-koi-betta',
      'blue-diamond-discus',
      'altum-angelfish',
    ],
  },

  // ─────────────────────────────────────────────
  // Galaxy Koi Betta Complete Guide
  // ─────────────────────────────────────────────
  {
    title: 'Galaxy Koi Betta Complete Guide',
    slug: 'galaxy-koi-betta',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/species/galaxy-koi-betta-hero.jpg',
    heroImageAlt:
      'Galaxy Koi Halfmoon betta displaying vivid red, black, and iridescent blue-galaxy patterning with fully spread fins',
    metaTitle:
      'Galaxy Koi Betta (Betta splendens): Complete Care Guide & Genetics | The Fish Collection',
    metaDescription:
      'Complete Galaxy Koi betta guide — pattern genetics, colour development, marble gene, sourcing & care. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'What is a Galaxy Koi betta?',
    quickAnswer:
      'A Galaxy Koi betta is a colour variety of Betta splendens that combines a koi-like pattern of red, black, and white with an overlay of iridescent blue or teal "galaxy" scales. The pattern is driven by the marble gene (a transposon), which causes colours to shift and evolve throughout the fish\'s life. Galaxy Koi bettas require the same care as all bettas: a heated, filtered tank of at least 5 gallons, 76–82 °F water, and a protein-rich diet.',
    summary:
      'The Galaxy Koi betta is one of the most visually spectacular and commercially sought-after colour varieties in the modern betta hobby. Combining the tri-colour koi pattern (red, black, and white) with an iridescent blue-teal "galaxy" overlay, these fish display a kaleidoscopic appearance that is never quite the same from one week to the next — thanks to the marble gene that drives their colour expression. This guide explains the genetics behind the Galaxy Koi pattern, how colour develops and changes over time, care requirements, how to source quality specimens, and what to expect from breeding projects involving the marble gene.',
    scientificName: 'Betta splendens',
    category: 'betta',
    keyFacts: [
      { label: 'Scientific Name', value: 'Betta splendens (Galaxy Koi variety)' },
      { label: 'Max Size', value: '6–7 cm (2.5–3 in)' },
      { label: 'Tank Size', value: '5 gallons (19 L) minimum' },
      { label: 'Temperature', value: '76–82 °F (24–28 °C)' },
      { label: 'pH', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Beginner' },
      { label: 'Lifespan', value: '3–5 years in captivity' },
      { label: 'Diet', value: 'Carnivore — pellets, frozen and live foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'origins-and-genetics', text: 'Origins & Genetics', level: 2 },
      { id: 'marble-gene', text: 'The Marble Gene', level: 3 },
      { id: 'colour-development', text: 'Colour Development Over Time', level: 2 },
      { id: 'care-requirements', text: 'Care Requirements', level: 2 },
      { id: 'sourcing-quality-specimens', text: 'Sourcing Quality Specimens', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Galaxy Koi betta represents one of the most exciting developments in ornamental betta breeding of the past decade. The variety emerged from Thai breeding programmes in the mid-2010s, combining three genetic components into a single, visually spectacular package: a koi-like pattern of red (<em>hi</em>), black (<em>sumi</em>), and white/cellophane base colours; the marble gene (a jumping transposon that causes colour patterns to shift over time); and an iridescent blue-teal overlay — the "galaxy" component — that blankets portions of the body and fins with shimmering, almost metallic scales.</p>
<p>The result is a fish that looks different every time you examine it closely. The interplay of warm koi tones and cool iridescent galaxy scales creates a depth and complexity of colour that is unmatched in the betta world. Combined with the marble gene's tendency to rearrange the pattern over weeks and months, a Galaxy Koi betta is genuinely a living, evolving work of art.</p>
<p>At The Fish Collection, Galaxy Koi bettas are among our most requested varieties. We source them from specialist Thai breeders who have stabilised the pattern to a degree that ensures consistently stunning specimens — though, as we discuss below, "stable" is a relative term when the marble gene is involved. This guide covers everything you need to know about selecting, keeping, and breeding these extraordinary fish.</p>

<h2 id="origins-and-genetics">Origins & Genetics</h2>
<p>The Galaxy Koi pattern is the product of multiple genetic layers interacting simultaneously:</p>
<p><strong>Koi base pattern:</strong> The "koi" component refers to a colour distribution that mimics the red, black, and white patterning of ornamental koi carp. In betta genetics, this is achieved through a combination of the marble gene (which creates the patchy, asymmetrical colour distribution), red pigmentation genes, and melano or dark-body genes that contribute the black elements. The white or cellophane areas are regions where the marble gene has silenced pigment production.</p>
<p><strong>Galaxy (iridescent) overlay:</strong> The "galaxy" element is produced by dense iridophore layers — cells containing crystalline guanine platelets that reflect light to produce blue, teal, green, or purple iridescence. In Galaxy Koi bettas, this iridescent layer is selectively distributed across parts of the body and fins, creating a shimmering overlay that interacts with the underlying koi colours. The genetic control of iridophore density and distribution is polygenic (controlled by multiple genes) and not yet fully mapped.</p>

<h3 id="marble-gene">The Marble Gene</h3>
<p>The marble gene is the most fascinating — and most unpredictable — element of Galaxy Koi genetics. Identified as a transposable element (transposon, or "jumping gene"), the marble gene can insert itself into or excise itself from pigmentation genes, activating or silencing colour production in individual cells and their descendant cell lines. This is the molecular mechanism behind the colour changes that marble bettas undergo throughout their lives.</p>
<p>The practical implications are significant:</p>
<ul>
<li><strong>Colour will change:</strong> A Galaxy Koi betta purchased as a juvenile will almost certainly look different as an adult. Red patches may expand or contract, black areas may intensify or recede, iridescent coverage may shift, and white/cellophane areas may gain or lose pigmentation. This is normal, expected, and — for most keepers — part of the appeal.</li>
<li><strong>Changes are unpredictable:</strong> There is no reliable way to predict how a specific marble betta's colour will evolve. Two siblings from the same spawning may develop in completely different directions. Some fish stabilise relatively quickly (within 6–12 months); others continue shifting throughout their lives.</li>
<li><strong>Photography timing matters:</strong> When purchasing online, understand that the fish you receive may look noticeably different from the listing photograph within weeks. Reputable sellers photograph fish as close to the shipping date as possible and disclose the marble gene's dynamic nature.</li>
</ul>
<p>The marble gene is dominant, meaning a fish needs only one copy to express the colour-changing phenotype. However, the degree of instability varies — some marble lines produce fish with relatively stable patterns, while others produce fish that change dramatically and frequently. Breeders who have worked with the gene for many generations have developed lines with somewhat more predictable colour development, though complete stability is not achievable with the marble gene present.</p>

<h2 id="colour-development">Colour Development Over Time</h2>
<p>Understanding the typical colour development trajectory of a Galaxy Koi betta helps set realistic expectations for new keepers:</p>
<p><strong>Juvenile (6–10 weeks):</strong> Young Galaxy Koi bettas are often predominantly dark — heavy black and muted red with the iridescent layer just beginning to appear. At this stage, the pattern is raw and undefined. Experienced breeders select promising juveniles based on the quality and distribution of early iridescence rather than the overall pattern, which will change substantially.</p>
<p><strong>Sub-adult (3–5 months):</strong> This is often the most dramatic developmental phase. The marble gene becomes increasingly active, and colours begin to separate and define themselves. Red areas intensify, black may concentrate into bolder patches, and the galaxy iridescence spreads and brightens. Many fish go through a phase where they appear to "lose" colour — large areas turn cellophane/white — before pigment re-emerges in new patterns.</p>
<p><strong>Adult (6–12 months):</strong> The pattern typically reaches its most visually striking expression in the first year. Red is at peak intensity, galaxy scales are fully developed, and the contrast between warm and cool tones is at its highest. This is the period when the fish is most photogenic and most closely resembles the breeder's listing photographs.</p>
<p><strong>Mature adult (12+ months):</strong> Some Galaxy Koi bettas stabilise and maintain their pattern with only minor shifts from this point forward. Others continue to evolve — a common trajectory is the gradual expansion of iridescent coverage at the expense of red, eventually producing a fish that appears more "galaxy" than "koi." Dark melanin patches may also spread or fade. This later-life colour shift is a characteristic of the marble gene and does not indicate a health problem.</p>
<p>Environmental factors also influence colour expression. Warm water (26–28 °C) and a protein-rich diet tend to intensify red pigmentation. Low-stress environments with appropriate cover and lighting allow the iridescent layer to display at its best. Conversely, cold water, poor nutrition, and chronic stress can wash out colours across the spectrum.</p>

<h2 id="care-requirements">Care Requirements</h2>
<p>Galaxy Koi bettas have identical care requirements to all <em>Betta splendens</em> varieties. For comprehensive care instructions, please refer to our <a href="/species/betta-fish">Betta Fish Complete Guide</a>. The key points are summarised here:</p>
<ul>
<li><strong>Tank size:</strong> 5 gallons (19 L) minimum, 10 gallons ideal. Heated to 24–28 °C (76–82 °F) with gentle filtration.</li>
<li><strong>Water parameters:</strong> pH 6.5–7.5, GH 3–12 dGH, ammonia and nitrite 0 ppm, nitrate below 20 ppm.</li>
<li><strong>Diet:</strong> High-quality betta pellets supplemented with frozen bloodworms, brine shrimp, and daphnia. Fast one day per week.</li>
<li><strong>Environment:</strong> Live plants, floating cover, dim-to-moderate lighting, and Indian almond leaves for tannin benefits. Avoid strong currents.</li>
<li><strong>Housing:</strong> Males must be kept individually. Galaxy Koi females can potentially be kept in sorority setups (5+, 20-gallon minimum) but require careful monitoring.</li>
</ul>
<p>One care consideration specific to Galaxy Koi and other heavily iridescent bettas: strong, direct overhead lighting can wash out the iridescent layer visually, making the galaxy scales appear dull. Side lighting or angled LED spotlights will showcase the iridescence far more effectively. Many hobbyists use a combination of moderate overhead light for plant growth and a small directional LED to highlight the betta's metallic scales.</p>

<h2 id="sourcing-quality-specimens">Sourcing Quality Specimens</h2>
<p>The explosive popularity of Galaxy Koi bettas has inevitably led to market saturation with low-quality, poorly bred specimens. Knowing what to look for — and what to avoid — is essential for acquiring a fish that will be a genuine specimen.</p>
<p><strong>What to look for:</strong></p>
<ul>
<li><strong>Balanced colour distribution:</strong> The best Galaxy Koi bettas display a harmonious balance of red, black/dark, white, and iridescent galaxy scales. Fish that are overwhelmingly one colour (mostly red, mostly black, or mostly iridescent) may be marketed as Galaxy Koi but lack the multi-tonal interplay that defines the variety.</li>
<li><strong>Dense, bright iridescence:</strong> The "galaxy" layer should be vivid — bright blue, teal, or green that catches the light clearly, not a faint, washed-out shimmer. Dense iridescence indicates strong iridophore genetics.</li>
<li><strong>Clean fin type:</strong> Galaxy Koi is a colour pattern, not a fin type, so it can be expressed in any tail form. The most desirable combinations are Galaxy Koi Halfmoon (GKHM) and Galaxy Koi Halfmoon Plakat (GKHMPK). Ensure the fin type is well-formed — 180-degree spread for Halfmoons, symmetrical proportions for Plakats — independent of the colour assessment.</li>
<li><strong>Health indicators:</strong> Clear eyes, intact fins (no rot or clamping), active behaviour, and a visible appetite. Avoid fish with clamped fins, visible parasites, or lethargic posture.</li>
</ul>
<p><strong>What to avoid:</strong></p>
<ul>
<li><strong>Pet-shop Galaxy Koi:</strong> Mass-market bettas labelled "Galaxy Koi" or "Koi" in chain pet shops are often low-grade marble bettas with minimal iridescence and poor fin form. They may look vaguely koi-like but bear little resemblance to breeder-quality Galaxy Koi specimens.</li>
<li><strong>Heavily filtered photographs:</strong> Online sellers who oversaturate images or use blue LED lighting to enhance the appearance of iridescence artificially. Request video of the fish under white light before purchasing.</li>
<li><strong>Very young fish:</strong> Juveniles under 3 months are too young to evaluate meaningfully. The pattern will change so dramatically that the fish you receive may look entirely different from its adult form. Purchase sub-adults (4–6 months) or adults for the most accurate representation.</li>
</ul>
<p>The Fish Collection sources Galaxy Koi bettas from a network of specialist Thai breeders with whom we have multi-year relationships. Every fish is photographed under standardised white lighting, and video is available on request. We ship with heat packs in insulated packaging to maintain tropical temperatures throughout transit.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding Galaxy Koi bettas is straightforward in terms of spawning technique — the process is identical to breeding any <em>Betta splendens</em> (see our <a href="/species/betta-fish">Betta Fish Complete Guide</a> for the full protocol). The challenge lies in the genetics.</p>
<p>Because the Galaxy Koi pattern involves multiple interacting genes (marble transposon, red pigmentation, melano/dark genes, and polygenic iridophore distribution), spawnings produce highly variable offspring. A pairing of two stunning Galaxy Koi parents will produce fry that range from solid-coloured (red, black, or cellophane) to beautifully patterned Galaxy Koi, with every intermediate expression represented. Expect roughly 20–40% of a spawning to develop patterns that merit the "Galaxy Koi" designation; the remainder will be attractive marble or koi bettas of varying quality.</p>
<p>The marble gene adds an additional layer of complexity: offspring may look unpromising as juveniles, only to develop spectacular patterns at 4–6 months. Conversely, juveniles with promising early patterns may shift into less desirable expressions as the marble gene continues to rearrange pigmentation. For this reason, experienced breeders grow out all fry to at least 3–4 months before making culling or selection decisions.</p>
<p>Selective breeding over multiple generations can increase the proportion of high-quality Galaxy Koi offspring. Select breeding stock that maintained their Galaxy Koi pattern through to maturity (indicating relative marble gene stability), displayed dense iridescence, and had strong fin form. Back-crossing to proven Galaxy Koi lines helps reinforce the desired trait combination, but the inherent variability of the marble gene means that no line will breed entirely true.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Will my Galaxy Koi betta change colour?',
        answer:
          'Almost certainly, yes. Galaxy Koi bettas carry the marble gene — a transposon that causes colour patterns to shift throughout the fish\'s life. Changes can be subtle (slight expansion or contraction of red patches) or dramatic (entire colour transformation from koi-dominant to galaxy-dominant). This is a feature of the variety, not a defect. Most colour changes occur in the first 12 months, with many fish stabilising thereafter, but some continue shifting for life.',
      },
      {
        question: 'How much does a Galaxy Koi betta cost?',
        answer:
          'Pet-grade Galaxy Koi bettas range from £10–£25. Breeder-quality specimens with balanced patterns, dense iridescence, and excellent fin form (Halfmoon or HMPK) from reputable Thai breeders cost £30–£80. Exceptional show-quality specimens — particularly Halfmoon males with perfectly balanced galaxy-over-koi patterns — can command £100–£250. Females are generally less expensive (£15–£50 for quality specimens) but are essential for breeding projects.',
      },
      {
        question: 'Is the Galaxy Koi pattern natural?',
        answer:
          'The Galaxy Koi pattern does not occur in wild Betta splendens — it is entirely the product of selective breeding by Thai aquarists. However, the underlying genetic mechanisms (the marble transposon, iridophore pigmentation, and melano genes) are all naturally occurring in the species. Breeders have combined and intensified these traits through selective pairing over many generations. No genetic modification or artificial intervention is involved.',
      },
      {
        question: 'Can I breed Galaxy Koi bettas at home?',
        answer:
          'Yes, the breeding process is identical to standard Betta splendens breeding. The challenge is genetic: spawnings produce highly variable offspring, with only 20–40% typically developing true Galaxy Koi patterns. You will need space to house dozens of individual males (in separate containers from 8–12 weeks of age) and patience to grow fry out for 3–4 months before evaluating pattern quality. If you have the space and dedication, it is a deeply rewarding project.',
      },
    ],
    sources: [
      {
        title: 'Betta splendens (Regan, 1910)',
        url: 'https://www.fishbase.se/summary/Betta-splendens.html',
        publisher: 'FishBase',
      },
      {
        title:
          'Transposable Elements and Colour Pattern Variation in Ornamental Fish: The Marble Gene in Betta splendens',
        url: 'https://doi.org/10.1093/genetics/iyab087',
        publisher: 'Genetics (Oxford Academic)',
      },
    ],
    relatedSlugs: [
      'betta-fish',
      'blue-diamond-discus',
      'altum-angelfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 35. Tiger Oscar
  // ─────────────────────────────────────────────
  {
    title: 'Tiger Oscar: Complete Species & Care Guide',
    slug: 'tiger-oscar',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/tiger-oscar-hero.jpg',
    heroImageAlt:
      'Adult Tiger Oscar displaying bold orange and black tiger-stripe patterning in a large planted aquarium',
    metaTitle:
      'Tiger Oscar (Astronotus ocellatus): Complete Care Guide & Tank Setup | The Fish Collection',
    metaDescription:
      'Complete Tiger Oscar care guide — tank size, water parameters, diet, behaviour & breeding. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion: 'How do you care for a Tiger Oscar?',
    quickAnswer:
      'Tiger Oscars need a minimum 75-gallon aquarium (125+ gallons for a pair), robust filtration turning over 6–8× the tank volume per hour, water at 74–81 °F (23–27 °C) and pH 6.0–8.0, and a high-protein diet of pellets, frozen shrimp, and occasional live foods. They are intelligent, territorial cichlids that bond with their owners but can be aggressive toward tank mates.',
    summary:
      'The Tiger Oscar is the most popular colour variant of Astronotus ocellatus — a large, intelligent South American cichlid prized for its bold orange-and-black patterning, interactive personality, and impressive size. Capable of reaching 35 cm (14 in) in captivity, Tiger Oscars demand spacious tanks, powerful filtration, and a keeper who appreciates a fish with genuine character. This guide covers every aspect of Tiger Oscar husbandry — from tank dimensions and water chemistry to feeding protocols, breeding, and common health issues.',
    scientificName: 'Astronotus ocellatus',
    category: 'oscar',
    keyFacts: [
      { label: 'Scientific Name', value: 'Astronotus ocellatus (Tiger variant)' },
      { label: 'Max Size', value: '35 cm (14 in)' },
      { label: 'Tank Size', value: '75 gallons (284 L) minimum' },
      { label: 'Temperature', value: '74–81 °F (23–27 °C)' },
      { label: 'pH', value: '6.0–8.0' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Omnivore — pellets, frozen, and live protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat', level: 2 },
      { id: 'appearance', text: 'Appearance & Colour Variants', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour-and-temperament', text: 'Behaviour & Temperament', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Tiger Oscar is the iconic colour form of <em>Astronotus ocellatus</em>, one of the most recognisable and widely kept cichlids in the freshwater hobby. Characterised by a deep olive-to-black base overlaid with vivid orange or red irregular markings — the "tiger stripes" — this fish commands attention in any aquarium. Originally native to the Amazon, Orinoco, and Paraná river basins, Oscars have been captive-bred for decades, producing several colour variants of which the Tiger remains the most popular.</p>
<p>What truly sets Oscars apart is their intelligence and personality. They recognise their keepers, beg for food, rearrange tank décor to their liking, and display a range of behaviours more commonly associated with pets than fish. This interactivity makes them enduringly popular despite their significant space and maintenance requirements.</p>

<h2 id="natural-habitat">Natural Habitat</h2>
<p>Wild Oscars inhabit slow-moving rivers, floodplain lakes, and forest streams throughout tropical South America. During the wet season, they move into flooded forests to exploit the abundance of fallen fruit, insects, and crustaceans. The water is typically warm (25–28 °C), slightly acidic to neutral (pH 6.0–7.5), and often tannin-stained from decomposing leaf litter. Substrates range from sand to mud with abundant submerged wood and root structures.</p>
<p>In captivity, replicating these conditions is straightforward: warm, well-filtered water with moderate hardness and plenty of open swimming space. Oscars do not require blackwater conditions but benefit from driftwood and subdued lighting that mimics their natural environment.</p>

<h2 id="appearance">Appearance & Colour Variants</h2>
<p>The Tiger Oscar's defining feature is its orange-and-black patterning. The base colour is a dark olive to jet black, broken by bold, irregular patches of bright orange, red-orange, or copper that extend across the body and into the fins. Each fish has a unique pattern — no two Tiger Oscars look identical. The caudal fin displays the characteristic ocellus (eye spot) that gives the species its name, a black spot ringed in orange or red that likely serves as a predator-deterrent.</p>
<p>Beyond the standard Tiger, commercially available Oscar variants include:</p>
<ul>
<li><strong>Red Oscar:</strong> Predominantly red-orange with minimal black — essentially a Tiger with expanded orange coverage.</li>
<li><strong>Albino Oscar:</strong> Lacking melanin, displaying white/cream base with red or orange markings and pink eyes.</li>
<li><strong>Albino Tiger Oscar:</strong> Combines the Tiger pattern with the albino gene — cream base with intense red-orange markings.</li>
<li><strong>Lemon Oscar:</strong> Yellow-gold variant selectively bred from the orange colour morph.</li>
<li><strong>Long-fin Oscar:</strong> Standard colouring with extended, flowing finnage.</li>
</ul>
<p>All colour variants are the same species and require identical care.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Oscars grow quickly — from 2.5 cm (1 in) juveniles to 25+ cm (10+ in) within their first year — and their tank must accommodate this rapid growth. Starting juveniles in small tanks and "upgrading later" is a common mistake that stunts growth and causes health problems.</p>
<ul>
<li><strong>Single adult:</strong> 75 gallons (284 L) absolute minimum; 100 gallons (378 L) recommended.</li>
<li><strong>Pair:</strong> 125 gallons (473 L) minimum.</li>
<li><strong>Community with other large cichlids:</strong> 180+ gallons (680+ L).</li>
</ul>
<p><strong>Filtration:</strong> Oscars are messy eaters that produce substantial waste. Canister filters rated for 6–8× the tank volume per hour are essential. Many keepers run dual canisters or a canister plus a large HOB for redundancy. Weekly 30–40% water changes are non-negotiable.</p>
<p><strong>Décor:</strong> Keep it minimal and heavy. Oscars rearrange everything they can move — plants will be uprooted, lightweight decorations tossed around. Use large river rocks, heavy driftwood, and potted or weighted plants (Anubias, Java Fern attached to wood) if you want greenery. Leave ample open swimming space in the centre of the tank.</p>
<p><strong>Substrate:</strong> Fine sand or smooth gravel. Oscars sift substrate when feeding, so avoid sharp or coarse materials that could damage their mouths.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Oscars are adaptable fish that tolerate a wide range of water chemistry, which is one reason they have thrived in captivity worldwide:</p>
<ul>
<li><strong>Temperature:</strong> 74–81 °F (23–27 °C). Aim for 77 °F (25 °C) for most situations.</li>
<li><strong>pH:</strong> 6.0–8.0. Captive-bred Oscars tolerate higher pH than wild specimens.</li>
<li><strong>GH:</strong> 5–20 dGH.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm (critical — Oscars are sensitive to ammonia spikes due to their high bioload).</li>
<li><strong>Nitrate:</strong> Below 40 ppm; below 20 ppm ideal.</li>
</ul>
<p>The most important parameter for Oscars is water cleanliness. Their heavy bioload means ammonia and nitrate can rise quickly without adequate filtration and water changes. Invest in a reliable liquid test kit and test weekly.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Oscars are opportunistic omnivores with a strong preference for protein. In the wild, they consume insects, crustaceans, small fish, fallen fruit, and plant matter. In captivity:</p>
<ul>
<li><strong>Staple:</strong> High-quality cichlid pellets (Hikari Cichlid Gold, Northfin Cichlid, or similar) — these should form 60–70% of the diet.</li>
<li><strong>Supplementary protein:</strong> Frozen or thawed market shrimp (shell-on for juveniles, peeled for adults), bloodworms, earthworms, crickets, and mealworms.</li>
<li><strong>Occasional treats:</strong> Fresh fruit (small pieces of banana, melon, or grape — Oscars enjoy these), blanched peas, and spirulina-based foods.</li>
<li><strong>Avoid:</strong> Feeder goldfish — they carry parasites, are nutritionally poor, and create a dependency on live prey that makes pellet training difficult.</li>
</ul>
<p>Feed adults once daily, an amount they consume in 2–3 minutes. Fast one day per week. Juveniles can be fed 2–3 times daily in smaller portions to support rapid growth.</p>

<h2 id="behaviour-and-temperament">Behaviour & Temperament</h2>
<p>Oscars are among the most intelligent and interactive freshwater fish available. They quickly learn to recognise their owners, will swim to the front of the tank when approached, and can be trained to accept food from the hand. Many keepers describe them as having "puppy-like" personalities.</p>
<p>However, that intelligence comes with territorial aggression, particularly during breeding or when defending their preferred area of the tank. Oscars will attack and kill fish they perceive as rivals or prey. They are also capable of sulking — refusing food, lying on their side, or darkening their colours when stressed or displeased with environmental changes.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Choosing tank mates for Oscars requires careful consideration of size, temperament, and territory. Suitable options include:</p>
<ul>
<li><strong>Large Plecostomus</strong> (Sailfin, Common, or Royal Pleco) — bottom-dwellers that stay out of the Oscar's way.</li>
<li><strong>Silver Dollars</strong> — fast-moving, schooling fish too large to be eaten and too quick to be caught.</li>
<li><strong>Large Bichirs</strong> (Senegal or Ornate) — armoured, bottom-dwelling fish that coexist well.</li>
<li><strong>Jack Dempsey Cichlids</strong> — similarly sized and tempered, though individual compatibility varies.</li>
<li><strong>Severum Cichlids</strong> — peaceful large cichlids that can hold their own.</li>
<li><strong>Firemouth Cichlids</strong> — in sufficiently large tanks (180+ gallons) with adequate territory.</li>
</ul>
<p>Avoid small fish (anything under 10 cm), slow-moving species, and overly aggressive cichlids that could injure the Oscar. Never house Oscars with African cichlids — the water parameter requirements and aggression profiles are incompatible.</p>

<h2 id="breeding">Breeding</h2>
<p>Oscars form monogamous pairs that can remain bonded for life. Breeding is achievable in captivity but requires patience, space, and a proven pair.</p>
<p><strong>Pairing:</strong> The most reliable method is to raise a group of 6–8 juveniles together in a large tank (180+ gallons) and allow them to pair naturally. Oscars reach sexual maturity at 12–18 months. Sexing is extremely difficult externally — the only reliable method is examining the genital papillae during spawning, where the female's ovipositor is wider and more blunt than the male's.</p>
<p><strong>Spawning:</strong> A bonded pair will clean a flat surface (rock, clay pot, or bare tank bottom), then the female deposits 1,000–3,000 eggs in rows while the male follows to fertilise. Both parents guard the eggs fiercely. Eggs hatch in 3–4 days at 27 °C, and fry become free-swimming 4–5 days later.</p>
<p><strong>Fry care:</strong> Oscar parents are generally excellent — they fan eggs, remove fungused eggs, and actively guard free-swimming fry. Fry can be started on baby brine shrimp and crushed pellets. Growth is rapid; fry reach 2.5 cm within 6–8 weeks.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<ul>
<li><strong>Hole-in-the-Head (HITH):</strong> The most common Oscar health problem. Presents as pitting erosion around the head and lateral line. Caused by poor water quality, inadequate diet (vitamin C and D deficiency), or parasitic infection (Hexamita). Treatment: improve water quality, supplement diet with vitamin-enriched foods, and treat with metronidazole if parasites are suspected.</li>
<li><strong>Ich (White Spot Disease):</strong> Oscars are moderately susceptible. Raise temperature to 86 °F (30 °C) and treat with aquarium salt (1 tbsp per 5 gallons) or a formalin-based medication.</li>
<li><strong>Fin rot:</strong> Usually secondary to poor water quality or injury. Improve water conditions; treat with antibacterial medication if severe.</li>
<li><strong>Bloat:</strong> Often caused by overfeeding or ingestion of gravel. Fast the fish for 48–72 hours; offer blanched peas. If swelling persists, treat with Epsom salt baths and consider internal bacterial infection.</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Tiger Oscars get?',
        answer:
          'Tiger Oscars typically reach 30–35 cm (12–14 inches) in captivity, with exceptional specimens occasionally exceeding 38 cm (15 in). They reach most of their adult size within the first 2 years, growing from 2.5 cm (1 in) juveniles to 25 cm (10 in) within the first year alone. This rapid growth rate is why starting with an appropriately sized tank is critical.',
      },
      {
        question: 'Can Tiger Oscars live with other fish?',
        answer:
          'Yes, but only with carefully chosen tank mates in sufficiently large tanks (125+ gallons for a pair, 180+ for a community). Suitable companions include large Plecostomus, Silver Dollars, Bichirs, Severums, and similarly sized robust cichlids. Avoid small fish (anything that can fit in the Oscar\'s mouth), slow-moving species, and African cichlids.',
      },
      {
        question: 'How long do Tiger Oscars live?',
        answer:
          'Well-cared-for Tiger Oscars typically live 10–15 years in captivity, with some documented cases reaching 18–20 years. Lifespan is strongly influenced by water quality, diet, and tank size. Fish kept in undersized tanks with poor water conditions rarely exceed 8 years.',
      },
    ],
    sources: [
      {
        title: 'Astronotus ocellatus (Agassiz, 1831)',
        url: 'https://www.fishbase.se/summary/Astronotus-ocellatus.html',
        publisher: 'FishBase',
      },
      {
        title: 'Feeding Ecology of Astronotus ocellatus in the Central Amazon',
        url: 'https://doi.org/10.1007/s10641-006-9096-5',
        publisher: 'Environmental Biology of Fishes',
      },
    ],
    relatedSlugs: [
      'peacock-bass',
      'flowerhorn-cichlid',
      'red-tail-catfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 36. Albino Oscar
  // ─────────────────────────────────────────────
  {
    title: 'Albino Oscar: Complete Species & Care Guide',
    slug: 'albino-oscar',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/albino-oscar-hero.jpg',
    heroImageAlt:
      'Adult Albino Oscar with bright white body and red-orange patterning in a spacious aquarium',
    metaTitle:
      'Albino Oscar (Astronotus ocellatus): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Albino Oscar care guide — tank size, water parameters, light sensitivity, diet & breeding. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for an Albino Oscar?',
    quickAnswer:
      'Albino Oscars require the same care as standard Oscars — 75+ gallon tank, powerful filtration, water at 74–81 °F and pH 6.0–8.0, with a high-protein pellet-based diet. The key difference is light sensitivity: albino variants lack melanin pigmentation in their eyes, so they benefit from subdued lighting, floating plants for shade, and careful placement away from direct sunlight.',
    summary:
      'The Albino Oscar is a leucistic colour morph of Astronotus ocellatus that replaces the species\' typical dark pigmentation with a striking white or cream base highlighted by vivid red-orange markings. Pink eyes confirm the absence of melanin. While care requirements mirror those of standard Oscars, albino specimens have specific light-sensitivity considerations and can be slightly more susceptible to stress in brightly lit environments. This guide covers everything specific to Albino Oscar care, with reference to our Tiger Oscar guide for shared husbandry fundamentals.',
    scientificName: 'Astronotus ocellatus',
    category: 'oscar',
    keyFacts: [
      { label: 'Scientific Name', value: 'Astronotus ocellatus (Albino variant)' },
      { label: 'Max Size', value: '35 cm (14 in)' },
      { label: 'Tank Size', value: '75 gallons (284 L) minimum' },
      { label: 'Temperature', value: '74–81 °F (23–27 °C)' },
      { label: 'pH', value: '6.0–8.0' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years in captivity' },
      { label: 'Diet', value: 'Omnivore — pellets, frozen, and live protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'genetics-and-appearance', text: 'Genetics & Appearance', level: 2 },
      { id: 'light-sensitivity', text: 'Light Sensitivity', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Albino Oscar is a captive-bred colour morph of <em>Astronotus ocellatus</em> distinguished by the complete absence of melanin pigmentation. Where the Tiger Oscar displays dark olive-to-black base colours, the Albino Oscar presents a clean white, cream, or pale pink body decorated with bold red, orange, or copper markings. The eyes are characteristically pink or red — the hallmark of true albinism, revealing the blood vessels behind the unpigmented iris.</p>
<p>First produced by selective breeding in the 1960s, Albino Oscars quickly became a staple of the ornamental fish trade. They share the same intelligence, personality, and interactive behaviour as their normally pigmented counterparts — the only significant differences relate to light sensitivity and visual acuity.</p>

<h2 id="genetics-and-appearance">Genetics & Appearance</h2>
<p>Albinism in Oscars is an autosomal recessive trait — both parents must carry the albino gene for offspring to express the phenotype. When two albino Oscars are crossed, 100% of offspring will be albino. Crossing an albino with a normally pigmented Oscar that does not carry the gene produces 100% normally pigmented offspring that are heterozygous carriers.</p>
<p>Several distinct Albino Oscar lines exist in the trade:</p>
<ul>
<li><strong>Standard Albino:</strong> White/cream base with diffuse red-orange markings. The pattern is less defined than the Tiger variant.</li>
<li><strong>Albino Tiger:</strong> The albino gene expressed on the Tiger pattern — cream base with bold, defined red-orange Tiger markings. The most visually striking albino variant.</li>
<li><strong>Albino Red:</strong> Extensive red-orange coverage with minimal white — essentially a Red Oscar with the albino gene removing all dark pigmentation.</li>
<li><strong>Albino Lemon:</strong> Yellow-gold markings on a white base, replacing the orange pigmentation.</li>
</ul>

<h2 id="light-sensitivity">Light Sensitivity</h2>
<p>The most important care consideration specific to Albino Oscars is photosensitivity. Without melanin in the iris, albino eyes cannot regulate light intake as effectively as normal eyes. This has practical implications:</p>
<ul>
<li><strong>Reduce lighting intensity:</strong> Use dimmable LED fixtures or lower wattage. If using standard aquarium LEDs, keep intensity at 40–60% of maximum.</li>
<li><strong>Provide shade:</strong> Floating plants (Amazon Frogbit, Water Lettuce, Salvinia) create shaded zones where the fish can retreat from overhead light. Driftwood overhangs and cave structures also help.</li>
<li><strong>Avoid direct sunlight:</strong> Position the tank away from windows where direct sunlight could create intense illumination.</li>
<li><strong>Night feeding option:</strong> Some keepers of Albino Oscars find their fish are more active feeders and less skittish with the main lights off, using only ambient room lighting during feeding times.</li>
</ul>
<p>With appropriate lighting management, Albino Oscars display the same bold, interactive personality as their pigmented counterparts. They are not inherently more timid — any shyness observed in Albino Oscars is almost always a lighting issue rather than a temperamental difference.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Tank requirements for Albino Oscars are identical to those for <a href="/species/tiger-oscar">Tiger Oscars</a>: 75 gallons minimum for a single adult, 125+ gallons for a pair, with robust canister filtration rated at 6–8× turnover per hour. The only modification is the lighting adjustments described above.</p>
<p>Décor considerations are the same — minimal, heavy, and Oscar-proof. Albino Oscars are equally enthusiastic about redecorating their tanks. Use securely positioned driftwood, heavy rocks, and weighted or attached plants (Anubias, Java Fern, Bolbitis).</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Identical to standard Oscars: 74–81 °F (23–27 °C), pH 6.0–8.0, GH 5–20 dGH. Ammonia and nitrite must be maintained at 0 ppm, with nitrate below 40 ppm (ideally below 20). Weekly 30–40% water changes are essential given the Oscar's high bioload.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Albino Oscars have identical nutritional requirements to standard Oscars. High-quality cichlid pellets should form the dietary staple (60–70%), supplemented with frozen shrimp, bloodworms, earthworms, and occasional fruit or vegetable matter. Some keepers supplement with carotenoid-rich foods (astaxanthin pellets, paprika-enriched foods) to enhance the intensity of the red-orange markings — albino fish can still produce carotenoid pigments, and dietary supplementation noticeably brightens their colour.</p>
<p>One dietary consideration: vitamin A is particularly important for eye health in albino animals. Ensure the pellet diet contains adequate vitamin A, or supplement with foods naturally rich in beta-carotene (sweet potato, spirulina, carrot).</p>

<h2 id="behaviour">Behaviour</h2>
<p>Albino Oscars display the same intelligent, interactive behaviour as Tiger Oscars. They recognise their keepers, accept hand-feeding, and demonstrate the full range of Oscar personality traits — from enthusiastic greeting displays to sulky refusal to eat when conditions change. The reduced visual acuity of albino eyes may make them slightly less responsive to visual stimuli at distance, but in the confined environment of an aquarium this difference is negligible.</p>
<p>Tank mate compatibility follows the same principles: large, robust species that can coexist with a territorial cichlid. Albino Oscars are not at a competitive disadvantage with normally pigmented tank mates — their reduced vision is compensated by their lateral line system, and their aggression levels are equivalent.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding Albino Oscars follows the same protocol as standard Oscars (see our <a href="/species/tiger-oscar">Tiger Oscar guide</a> for the complete breeding protocol). The genetic consideration is that albinism is recessive: crossing two Albino Oscars produces 100% albino fry, while crossing an Albino with a heterozygous carrier produces approximately 50% albino and 50% normally pigmented offspring. Crossing an Albino with a non-carrier produces 100% normally pigmented carriers.</p>
<p>Albino Oscar parents are as attentive as their pigmented counterparts. Despite reduced visual acuity, they successfully guard eggs, fan them for water circulation, and protect free-swimming fry.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Are Albino Oscars harder to keep than regular Oscars?',
        answer:
          'No — the only additional consideration is light sensitivity. Reduce lighting intensity, provide floating plants or other shade, and avoid placing the tank in direct sunlight. With these adjustments, Albino Oscars are equally hardy, long-lived, and interactive as their normally pigmented counterparts. They are not more disease-prone or more delicate in any meaningful way.',
      },
      {
        question: 'Do Albino Oscars have vision problems?',
        answer:
          'Albino Oscars have reduced visual acuity compared to normally pigmented fish, particularly in bright light. They lack melanin in the iris, which means they cannot control light entering the eye as effectively. In practice, this means they may be slightly less responsive to distant visual stimuli and more sensitive to sudden lighting changes. However, in the aquarium environment, their lateral line system compensates well, and they navigate, hunt, and interact normally.',
      },
      {
        question: 'Can Albino and Tiger Oscars live together?',
        answer:
          'Yes, they are the same species and can coexist in a sufficiently large tank (125+ gallons minimum for two adults). They may even pair and breed, producing normally pigmented offspring that carry the albino gene. There is no colour-based aggression — individual compatibility depends on personality and available territory, not pigmentation.',
      },
    ],
    sources: [
      {
        title: 'Astronotus ocellatus (Agassiz, 1831)',
        url: 'https://www.fishbase.se/summary/Astronotus-ocellatus.html',
        publisher: 'FishBase',
      },
      {
        title: 'Colour Genetics in Ornamental Cichlids',
        url: 'https://doi.org/10.1007/978-3-642-10311-7_14',
        publisher: 'Springer',
      },
    ],
    relatedSlugs: [
      'tiger-oscar',
      'flowerhorn-cichlid',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 37. Denison Barb
  // ─────────────────────────────────────────────
  {
    title: 'Denison Barb: Complete Species & Care Guide',
    slug: 'denison-barb',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/denison-barb-hero.jpg',
    heroImageAlt:
      'School of Denison Barbs displaying their distinctive red and black lateral stripes in a planted aquarium with moderate current',
    metaTitle:
      'Denison Barb (Sahyadria denisonii): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Denison Barb care guide — schooling behaviour, tank setup, water parameters, diet & breeding. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for Denison Barbs?',
    quickAnswer:
      'Denison Barbs need a 55+ gallon tank (75+ ideal for a school of 6–8), moderate to strong water flow, temperature of 65–77 °F (18–25 °C), and pH 6.5–7.8. They are active schooling fish that require a group of at least 6 and a high-protein diet of quality flakes, frozen foods, and small live foods. They prefer well-oxygenated water with some current.',
    summary:
      'The Denison Barb (Sahyadria denisonii), also known as the Roseline Shark or Red-Lined Torpedo Barb, is one of the most visually striking cyprinids in the freshwater hobby. Native to the fast-flowing hill streams of Kerala and Karnataka in India\'s Western Ghats, this torpedo-shaped fish displays a bold black lateral line overlaid by a vivid red stripe running from snout to mid-body, with a flash of yellow-green on the caudal fin. Listed as Endangered on the IUCN Red List due to overcollection and habitat loss, the species is now increasingly available from captive-bred sources. This guide covers all aspects of Denison Barb husbandry.',
    scientificName: 'Sahyadria denisonii',
    category: 'barb',
    keyFacts: [
      { label: 'Scientific Name', value: 'Sahyadria denisonii' },
      { label: 'Max Size', value: '15 cm (6 in)' },
      { label: 'Tank Size', value: '55 gallons (208 L) minimum' },
      { label: 'Temperature', value: '65–77 °F (18–25 °C)' },
      { label: 'pH', value: '6.5–7.8' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '5–8 years in captivity' },
      { label: 'Diet', value: 'Omnivore — flakes, frozen and live foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat & Conservation', level: 2 },
      { id: 'appearance', text: 'Appearance', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour & Schooling', level: 2 },
      { id: 'compatible-tank-mates', text: 'Compatible Tank Mates', level: 3 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Denison Barb burst onto the international aquarium scene in the late 1990s and quickly became one of the most sought-after freshwater species in the hobby. Its combination of vivid colouration, torpedo-shaped body, active swimming behaviour, and peaceful temperament made it an instant classic. The fish is marketed under several common names — Roseline Shark (a misnomer, as it is a cyprinid, not a shark), Red-Lined Torpedo Barb, and Miss Kerala — but <em>Sahyadria denisonii</em> is the accepted scientific name following the genus' separation from <em>Puntius</em> in 2012.</p>
<p>The species' rapid rise in popularity had a darker side: massive overcollection from wild populations in India's Western Ghats led to significant population declines, resulting in an IUCN Red List classification of Endangered. Today, responsible aquarists source captive-bred specimens, and Indian authorities have implemented collection quotas and seasonal bans to protect remaining wild populations.</p>

<h2 id="natural-habitat">Natural Habitat & Conservation</h2>
<p>Denison Barbs are endemic to the rivers and hill streams of the Western Ghats mountain range in Kerala and Karnataka, southern India. They inhabit clear, fast-flowing, well-oxygenated streams with rocky substrates, typically at elevations of 100–1,000 metres. Water temperatures in these habitats are notably cooler than tropical lowland rivers — typically 18–25 °C — which is an important consideration for captive care.</p>
<p>The Western Ghats is a UNESCO World Heritage Site and one of the world's 36 biodiversity hotspots. Denison Barbs share their habitat with several other endemic species, and the ecosystem is under pressure from deforestation, agriculture, dam construction, and — historically — the ornamental fish trade.</p>
<p><strong>Conservation status:</strong> IUCN Red List — Endangered (EN). Export of wild-caught specimens from India is now regulated under the Wildlife Protection Act. Captive breeding programmes in Southeast Asia and Europe have significantly reduced collection pressure, and the majority of Denison Barbs in the aquarium trade today are farm-bred. When purchasing, always confirm that your specimens are captive-bred.</p>

<h2 id="appearance">Appearance</h2>
<p>The Denison Barb's appearance is distinctive and unmistakable:</p>
<ul>
<li><strong>Body shape:</strong> Elongated, torpedo-shaped, laterally compressed — built for strong currents.</li>
<li><strong>Base colour:</strong> Silver with a golden-olive tinge along the dorsal surface.</li>
<li><strong>Lateral markings:</strong> A bold black horizontal stripe runs from the snout through the eye to the caudal peduncle. Above this, a vivid red stripe extends from the tip of the snout to approximately the midpoint of the body (often reaching the dorsal fin origin). The red stripe is the species' signature feature.</li>
<li><strong>Caudal fin:</strong> Forked, with bold black and yellow-green bands on the upper and lower lobes.</li>
<li><strong>Dorsal fin:</strong> Bears a red leading edge in well-conditioned specimens.</li>
</ul>
<p>Males and females are nearly identical in appearance, though mature females tend to be slightly deeper-bodied when in spawning condition. Colour intensity is influenced by diet, water quality, and stress level — well-maintained fish in a school display significantly more vivid red and sharper contrast than stressed or isolated individuals.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Denison Barbs are active, fast-swimming fish that need space to school and exercise:</p>
<ul>
<li><strong>Minimum tank size:</strong> 55 gallons (208 L) for a school of 6; 75 gallons (284 L) preferred; 100+ gallons for schools of 10+.</li>
<li><strong>Tank dimensions:</strong> Length is more important than height — choose the longest tank available. A 48-inch (120 cm) minimum length is recommended.</li>
<li><strong>Water flow:</strong> Moderate to strong. Denison Barbs come from fast-flowing streams and thrive with a powerhead or wavemaker creating directional current. They will actively swim into the flow.</li>
<li><strong>Oxygenation:</strong> Excellent gas exchange is essential. Surface agitation from the filter return and/or a separate air stone ensures high dissolved oxygen levels.</li>
<li><strong>Substrate:</strong> Fine gravel or sand, mimicking their natural rocky stream habitat. Rounded river pebbles and smooth stones add authenticity.</li>
<li><strong>Plants:</strong> Hardy species that tolerate current — Anubias, Java Fern, Vallisneria, and Cryptocoryne are excellent choices. Dense planting along the sides and back provides visual barriers that reduce stress.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<p>The critical detail that many keepers miss is temperature — Denison Barbs are subtropical, not tropical:</p>
<ul>
<li><strong>Temperature:</strong> 65–77 °F (18–25 °C). They tolerate the lower end of this range well and may be stressed by sustained temperatures above 80 °F (27 °C). A heater set to 72–74 °F (22–23 °C) is ideal for most setups.</li>
<li><strong>pH:</strong> 6.5–7.8.</li>
<li><strong>GH:</strong> 5–15 dGH.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> Below 20 ppm.</li>
</ul>
<p>These fish are sensitive to poor water quality — particularly elevated nitrate and low oxygen. Weekly 30% water changes and diligent filter maintenance are essential. In warmer climates, consider using a chiller or positioning the tank in the coolest room of the house.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Denison Barbs are omnivores that accept a wide range of foods:</p>
<ul>
<li><strong>Staple:</strong> High-quality flake or small pellet food with a protein content of 40%+.</li>
<li><strong>Frozen:</strong> Bloodworms, brine shrimp, daphnia, and mysis shrimp — offered 3–4 times per week.</li>
<li><strong>Live:</strong> Small insects, daphnia, and baby brine shrimp are eagerly consumed and promote natural foraging behaviour.</li>
<li><strong>Vegetable:</strong> Blanched spinach, spirulina flakes, and algae wafers. In the wild, they graze on algae and biofilm — vegetable matter should compose 20–30% of the diet.</li>
</ul>
<p>Feed 2–3 times daily in amounts consumed within 2 minutes. The fast current in their tank means food disperses quickly, so ensure all fish in the school have access.</p>

<h2 id="behaviour">Behaviour & Schooling</h2>
<p>Denison Barbs are obligate schooling fish — they <strong>must</strong> be kept in groups of at least 6, with 8–12 being ideal. In smaller numbers, they become skittish, lose colour, and hide excessively. In a proper school, they display their full behavioural repertoire: synchronised swimming, playful chasing, and bold exploration of the entire tank.</p>
<p>Despite their active nature, Denison Barbs are peaceful community fish. They do not nip fins, harass tank mates, or show significant territorial behaviour. Occasional in-group chasing is normal social behaviour and not a cause for concern — it establishes a loose hierarchy within the school.</p>

<h3 id="compatible-tank-mates">Compatible Tank Mates</h3>
<p>Their peaceful disposition and preference for cooler water make them compatible with:</p>
<ul>
<li><strong>Other subtropical cyprinids:</strong> White Cloud Mountain Minnows, Cherry Barbs, Gold Barbs.</li>
<li><strong>Loaches:</strong> Clown Loach, Yoyo Loach, Zebra Loach (all appreciate similar current and temperature).</li>
<li><strong>Corydoras catfish:</strong> Bottom-dwellers that stay out of the barbs' mid-water territory.</li>
<li><strong>Rainbowfish:</strong> Active, similarly sized, and colourful — an excellent pairing.</li>
<li><strong>Bristlenose Pleco:</strong> Peaceful algae control that tolerates the moderate current.</li>
</ul>
<p>Avoid very small fish that might be outcompeted at feeding time, slow-moving long-finned species, and aggressive cichlids.</p>

<h2 id="breeding">Breeding</h2>
<p>Breeding Denison Barbs in captivity is uncommon and considered moderately difficult. Most commercial captive breeding occurs on farms in Southeast Asia using hormone induction.</p>
<p>Natural spawning has been reported in large, well-established aquariums (100+ gallons) with the following conditions: a group of at least 10 fish, cool-water conditioning at 65–68 °F (18–20 °C) for several weeks followed by a gradual temperature increase to 77 °F (25 °C) simulating the monsoon season, a diet rich in live foods, and dense fine-leaved plants (Java Moss, Hornwort) for egg deposition.</p>
<p>Eggs are scattered among plants and are not guarded. Adults will eat eggs if given the opportunity, so either remove adults after spawning or use a separate breeding tank with a mesh bottom that allows eggs to fall through. Eggs hatch in 24–48 hours, and fry become free-swimming within 3–4 days. Start fry on infusoria, transitioning to baby brine shrimp and micro-worms as they grow.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How many Denison Barbs should be kept together?',
        answer:
          'A minimum of 6, with 8–12 being ideal. Denison Barbs are obligate schooling fish — keeping fewer than 6 causes chronic stress, faded colours, and excessive hiding. In larger groups, they display bolder behaviour, more vivid colouration, and the spectacular synchronised swimming that makes the species so appealing.',
      },
      {
        question: 'Are Denison Barbs endangered?',
        answer:
          'Yes — Sahyadria denisonii is classified as Endangered on the IUCN Red List due to overcollection for the aquarium trade and habitat degradation in their native Western Ghats. However, extensive captive breeding programmes in Southeast Asia and Europe now supply the majority of fish in the trade. Always purchase captive-bred specimens to avoid contributing to wild population pressure.',
      },
      {
        question: 'Do Denison Barbs need a heater?',
        answer:
          'It depends on your room temperature. Denison Barbs are subtropical fish that prefer 65–77 °F (18–25 °C) — cooler than most tropical species. In heated homes, they may not need a heater at all. If your room temperature drops below 65 °F (18 °C), use a heater set to 70–72 °F (21–22 °C). Avoid sustained temperatures above 80 °F (27 °C), which can stress them.',
      },
    ],
    sources: [
      {
        title: 'Sahyadria denisonii (Day, 1865)',
        url: 'https://www.fishbase.se/summary/Sahyadria-denisonii.html',
        publisher: 'FishBase',
      },
      {
        title: 'Sahyadria denisonii — IUCN Red List',
        url: 'https://www.iucnredlist.org/species/169662/6664918',
        publisher: 'IUCN',
      },
    ],
    relatedSlugs: [
      'clown-loach',
      'blue-diamond-discus',
      'altum-angelfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 38. Alligator Gar
  // ─────────────────────────────────────────────
  {
    title: 'Alligator Gar: Complete Species & Care Guide',
    slug: 'alligator-gar',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/alligator-gar-hero.jpg',
    heroImageAlt:
      'Adult Alligator Gar displaying its distinctive broad snout and ganoid scales in a large tank',
    metaTitle:
      'Alligator Gar (Atractosteus spatula): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Alligator Gar care guide — tank requirements, water parameters, diet & legal considerations. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'Can you keep an Alligator Gar in a home aquarium?',
    quickAnswer:
      'Alligator Gar can technically be kept in captivity, but they grow to 1.8–3 metres (6–10 feet) and require custom-built tanks or indoor ponds of 1,000+ gallons. They need warm water (60–84 °F), protein-rich diet, and powerful filtration. Legal restrictions apply in many jurisdictions — check your local regulations before acquiring one. This species is best suited to public aquaria, zoo facilities, or dedicated monster-fish keepers with appropriate infrastructure.',
    summary:
      'The Alligator Gar (Atractosteus spatula) is the largest species in the gar family and one of the largest freshwater fish in North America, capable of exceeding 3 metres (10 feet) in length and 140 kg (300 lb) in the wild. Named for its broad, alligator-like snout and double row of upper teeth, this prehistoric predator belongs to a lineage dating back over 100 million years. While their ancient lineage and imposing appearance make them fascinating aquarium subjects, their extreme adult size means they are only suitable for keepers with custom-built facilities. This guide covers the species\' biology, care requirements, legal considerations, and realistic expectations for private keeping.',
    scientificName: 'Atractosteus spatula',
    category: 'gar',
    keyFacts: [
      { label: 'Scientific Name', value: 'Atractosteus spatula' },
      { label: 'Max Size', value: '3 m (10 ft) wild; 1.2–1.8 m (4–6 ft) captive typical' },
      { label: 'Tank Size', value: '1,000+ gallons (indoor pond recommended)' },
      { label: 'Temperature', value: '60–84 °F (16–29 °C)' },
      { label: 'pH', value: '6.5–8.0' },
      { label: 'Care Level', value: 'Expert — requires custom facilities' },
      { label: 'Lifespan', value: '50–75+ years' },
      { label: 'Diet', value: 'Carnivore — whole fish, shrimp, crayfish' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat & Range', level: 2 },
      { id: 'appearance', text: 'Appearance & Anatomy', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour', level: 2 },
      { id: 'legal-considerations', text: 'Legal Considerations', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Alligator Gar is a living fossil — a member of the family Lepisosteidae, whose lineage predates the dinosaurs. These ancient fish retain several primitive characteristics lost in most modern teleosts: thick, diamond-shaped ganoid scales that function as body armour, a vascularised swim bladder that allows them to breathe atmospheric air, and a heterocercal tail that provides powerful thrust. The combination of these features has remained essentially unchanged for over 100 million years.</p>
<p>In the aquarium hobby, Alligator Gar are the ultimate "monster fish" — juveniles are readily available and inexpensive, with their prehistoric appearance and predatory behaviour attracting keepers who want something extraordinary. However, the species' extreme adult size (routinely exceeding 1.5 metres in captivity) makes long-term keeping a serious commitment that requires purpose-built facilities.</p>

<h2 id="natural-habitat">Natural Habitat & Range</h2>
<p>Alligator Gar are native to the lower Mississippi River Valley and Gulf Coast drainages of the southern United States, extending into northeastern Mexico. They inhabit large, slow-moving rivers, reservoirs, bayous, estuaries, and coastal brackish waters. They are remarkably euryhaline, tolerating salinities from fresh to nearly full marine conditions.</p>
<p>Historically, Alligator Gar ranged as far north as Ohio and Iowa, but overharvest and habitat modification reduced their range significantly. Conservation efforts in the 21st century have restored populations in several states, and the species is now recognised as ecologically important for controlling invasive carp populations in many waterways.</p>

<h2 id="appearance">Appearance & Anatomy</h2>
<p>The Alligator Gar's appearance is unmistakable:</p>
<ul>
<li><strong>Snout:</strong> Broad and flattened, with two rows of large, conical teeth in the upper jaw — this "alligator" snout distinguishes it from other gar species, which have narrower, more cylindrical rostrums.</li>
<li><strong>Scales:</strong> Thick, interlocking ganoid scales composed of ganoine (an enamel-like substance over bone). These scales are so tough that Native Americans used them as arrowheads and tools.</li>
<li><strong>Colour:</strong> Olive to dark brown dorsally, fading to lighter flanks and a white belly. Juveniles display bold black spots on the body and fins that fade with age.</li>
<li><strong>Air breathing:</strong> The vascularised swim bladder functions as a primitive lung, allowing Alligator Gar to gulp air at the surface. This adaptation enables them to survive in oxygen-depleted waters where other fish would perish.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>This is where most Alligator Gar keeping plans fall apart. Juveniles are small (15–20 cm / 6–8 inches when sold) and manageable in standard aquariums, but they grow rapidly — reaching 30–60 cm (1–2 feet) within the first year and 90–120 cm (3–4 feet) by year three.</p>
<ul>
<li><strong>Juvenile (under 30 cm):</strong> 125-gallon tank minimum. This is temporary housing — plan for upgrades.</li>
<li><strong>Sub-adult (30–90 cm):</strong> 300–500 gallon tank. Custom-built or stock tanks.</li>
<li><strong>Adult (90+ cm):</strong> 1,000+ gallons. Realistically, this means an indoor pond, custom plywood tank with viewing window, or dedicated fish room with stock tanks.</li>
</ul>
<p><strong>Filtration:</strong> Massive — turnover of 4–6× the total volume per hour using commercial-grade sump filtration, pond filters, or multiple large canister filters. Alligator Gar are surprisingly clean for their size (they don't eat daily once adult), but their bioload during feeding is enormous.</p>
<p><strong>Décor:</strong> Minimal. Open swimming space is the priority. Large pieces of driftwood or smooth boulders for structure, but nothing that restricts turning radius. Gar need to be able to turn around comfortably — the tank must be at least 1.5× the fish's body length in its shortest dimension.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Alligator Gar are among the most adaptable freshwater fish regarding water chemistry:</p>
<ul>
<li><strong>Temperature:</strong> 60–84 °F (16–29 °C). They tolerate a wide thermal range but are most active and feed most readily at 72–80 °F (22–27 °C).</li>
<li><strong>pH:</strong> 6.5–8.0. Highly adaptable.</li>
<li><strong>Hardness:</strong> Not critical — adapts to soft through hard water.</li>
<li><strong>Salinity:</strong> Tolerates brackish conditions up to 15 ppt, though this is unnecessary in captivity.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Alligator Gar are ambush predators that feed primarily on fish, crustaceans, and occasionally small mammals and waterfowl in the wild. In captivity:</p>
<ul>
<li><strong>Juveniles:</strong> Live or frozen silversides, lance fish, shrimp, and smelt. Feed daily.</li>
<li><strong>Sub-adults:</strong> Whole frozen fish (tilapia fillets, smelt, sardines), large shrimp, and crayfish. Feed every 2–3 days.</li>
<li><strong>Adults:</strong> Whole frozen fish, large shrimp, and occasional fresh-caught fish. Adults may only feed once or twice per week — Alligator Gar have slow metabolisms and will naturally reduce feeding frequency as they grow.</li>
</ul>
<p>Never use live feeder goldfish — they carry parasites, have poor nutritional value, and introduce disease risk. Frozen, thawed whole fish are the safest and most nutritious option.</p>

<h2 id="behaviour">Behaviour</h2>
<p>Alligator Gar are ambush predators — they spend most of their time hovering motionless near the surface or mid-water, then strike with explosive speed when prey comes within range. This means they are not active swimmers in the traditional sense; most of their time is spent in a quiet, watchful state. Surface breathing is normal and should be expected — gar will regularly rise to gulp air, even in well-oxygenated water.</p>
<p>Despite their fearsome appearance, Alligator Gar are generally not aggressive toward tank mates they cannot eat. They coexist well with other large species — large catfish, other gar species, large cichlids — provided all fish are too large to be swallowed. However, anything that fits in the gar's mouth will eventually be eaten.</p>

<h2 id="legal-considerations">Legal Considerations</h2>
<p>Alligator Gar ownership is restricted or prohibited in several jurisdictions due to their invasive potential and large adult size:</p>
<ul>
<li><strong>United Kingdom:</strong> Not currently restricted, but may require a licence depending on local authority interpretation of non-native species regulations.</li>
<li><strong>Several US states</strong> prohibit or restrict private ownership of Alligator Gar.</li>
<li><strong>Australia, New Zealand, and some European countries</strong> prohibit the species entirely.</li>
</ul>
<p>Always verify your local and national regulations before purchasing. The Fish Collection ships Alligator Gar only to jurisdictions where private keeping is legal and will require verification of appropriate facilities.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Alligator Gar get in captivity?',
        answer:
          'In properly sized facilities, captive Alligator Gar routinely reach 1.2–1.8 metres (4–6 feet) and can exceed 2 metres (6.5 feet). Growth rate depends on feeding, water temperature, and space — fish in undersized tanks may grow slower but will eventually outgrow any standard aquarium. Wild specimens reach 3 metres (10 feet) and 140 kg (300 lb).',
      },
      {
        question: 'How long do Alligator Gar live?',
        answer:
          'Alligator Gar are exceptionally long-lived. In the wild, individuals over 50 years old have been confirmed, with unverified reports of specimens exceeding 75–100 years. In captivity, with proper care, a lifespan of 50+ years is realistic. This extreme longevity must be factored into any keeping decision — acquiring an Alligator Gar is a multi-decade commitment.',
      },
      {
        question: 'Are Alligator Gar dangerous to humans?',
        answer:
          'No. Despite their intimidating appearance and large teeth, there are no confirmed cases of Alligator Gar attacking humans. They are not aggressive toward people and will generally avoid contact. The teeth are designed for gripping slippery fish, not for biting — they lack the jaw mechanics to inflict a dangerous bite on a human. However, common-sense caution is warranted when hand-feeding large specimens.',
      },
    ],
    sources: [
      {
        title: 'Atractosteus spatula (Lacepède, 1803)',
        url: 'https://www.fishbase.se/summary/Atractosteus-spatula.html',
        publisher: 'FishBase',
      },
      {
        title: 'Biology and Conservation of the Alligator Gar',
        url: 'https://doi.org/10.1080/03632415.2019.1629382',
        publisher: 'Fisheries (AFS)',
      },
    ],
    relatedSlugs: [
      'arapaima',
      'red-tail-catfish',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 39. Platinum Gar
  // ─────────────────────────────────────────────
  {
    title: 'Platinum Gar: Complete Species & Care Guide',
    slug: 'platinum-gar',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/platinum-gar-hero.jpg',
    heroImageAlt:
      'Platinum Gar displaying its characteristic pale silver-white body and elongated snout',
    metaTitle:
      'Platinum Gar: Complete Care Guide & Pricing | The Fish Collection',
    metaDescription:
      'Complete Platinum Gar guide — identification, care requirements, pricing & availability. Expert advice from The Fish Collection\'s aquarists.',
    quickAnswerQuestion: 'What is a Platinum Gar?',
    quickAnswer:
      'A Platinum Gar is a leucistic or xanthic colour variant of any gar species — most commonly the Florida Gar (Lepisosteus platyrhincus) or Spotted Gar (Lepisosteus oculatus). The platinum mutation produces a pale silver-white, cream, or gold body that lacks the typical dark spotting. They require the same care as their normally pigmented counterparts: 125+ gallon tank, moderate current, 70–82 °F water, and a carnivorous diet.',
    summary:
      'The term "Platinum Gar" refers to leucistic, xanthic, or albino colour variants of various gar species — most commonly the Florida Gar (Lepisosteus platyrhincus), Spotted Gar (Lepisosteus oculatus), or Shortnose Gar (Lepisosteus platostomus). These colour morphs produce striking silver-white, cream, or gold-toned fish that contrast dramatically with the typical dark olive-and-spotted wild-type appearance. Highly prized by collectors and monster-fish enthusiasts, Platinum Gar command premium prices and are among the most sought-after colour morphs in the predatory fish hobby.',
    scientificName: 'Lepisosteus spp.',
    category: 'gar',
    keyFacts: [
      { label: 'Scientific Name', value: 'Lepisosteus spp. (platinum colour morph)' },
      { label: 'Max Size', value: '45–120 cm (18–48 in) depending on species' },
      { label: 'Tank Size', value: '125 gallons (473 L) minimum' },
      { label: 'Temperature', value: '70–82 °F (21–28 °C)' },
      { label: 'pH', value: '6.5–8.0' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '15–25 years in captivity' },
      { label: 'Diet', value: 'Carnivore — whole fish, shrimp, crayfish' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'species-and-identification', text: 'Species & Identification', level: 2 },
      { id: 'colour-genetics', text: 'Colour Genetics', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour & Tank Mates', level: 2 },
      { id: 'pricing-and-availability', text: 'Pricing & Availability', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>Platinum Gar are among the most prized colour morphs in the predatory fish hobby. The platinum mutation — which can be leucistic (reduced melanin), xanthic (lacking dark pigment while retaining yellow/gold), or fully albino (lacking all melanin, with red/pink eyes) — transforms the typically dark, spotted gar into a luminous silver-white or golden fish that commands immediate attention in any tank. These fish are rare in the wild and even rarer in captivity, as the colour mutation makes them more visible to predators and less likely to survive to adulthood in natural habitats.</p>
<p>The Fish Collection sources Platinum Gar from specialist breeders in the United States and Southeast Asia who have established captive-bred lines of these colour morphs, reducing dependence on wild-caught specimens and ensuring healthier, better-adapted fish for the aquarium trade.</p>

<h2 id="species-and-identification">Species & Identification</h2>
<p>The term "Platinum Gar" is applied to several gar species. The most common in the aquarium trade are:</p>
<ul>
<li><strong>Platinum Florida Gar (<em>Lepisosteus platyrhincus</em>):</strong> The most frequently available platinum gar. Wild-type Florida Gar are olive-brown with dark spots; platinum variants are solid silver-white or cream. Adults reach 45–60 cm (18–24 in), making them the most manageable gar for home aquariums.</li>
<li><strong>Platinum Spotted Gar (<em>Lepisosteus oculatus</em>):</strong> Similar size to the Florida Gar (45–75 cm / 18–30 in). Platinum specimens lack the characteristic dark body spots, appearing as uniform silver-white with occasional faint ghost patterning visible under certain lighting.</li>
<li><strong>Platinum Shortnose Gar (<em>Lepisosteus platostomus</em>):</strong> A compact species reaching 60–75 cm (24–30 in). Less commonly available in platinum form.</li>
<li><strong>Platinum Longnose Gar (<em>Lepisosteus osseus</em>):</strong> The largest of the common Lepisosteus species at 90–120 cm (36–48 in). Platinum variants are extremely rare and command the highest prices.</li>
</ul>
<p>It is important to identify the species correctly when purchasing, as adult size varies significantly. The Florida Gar and Spotted Gar are the most practical choices for home aquariums due to their relatively moderate adult size.</p>

<h2 id="colour-genetics">Colour Genetics</h2>
<p>Several genetic mechanisms can produce the platinum phenotype in gar:</p>
<ul>
<li><strong>Leucism:</strong> Reduced melanin production throughout the body, resulting in a pale silver-white or cream colour with normally pigmented (dark) eyes. This is the most common "platinum" type.</li>
<li><strong>Xanthism:</strong> Absence of melanin combined with normal or enhanced xanthophore (yellow pigment cell) expression, producing a golden or butter-yellow fish. Sometimes marketed as "Golden Gar."</li>
<li><strong>Albinism:</strong> Complete absence of melanin, producing a white or cream body with pink or red eyes. True albino gar are the rarest and most valuable.</li>
</ul>
<p>All three types are recessive mutations, meaning both parents must carry the gene for offspring to express the phenotype. In captive breeding programmes, establishing and maintaining platinum lines requires careful line-breeding over multiple generations.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Tank size depends on the species, but all gar need long, rectangular tanks that provide adequate turning room:</p>
<ul>
<li><strong>Florida / Spotted Gar:</strong> 125 gallons (473 L) minimum for a single adult; 180+ gallons for a pair or community. Tank length of at least 6 feet (180 cm).</li>
<li><strong>Longnose Gar:</strong> 300+ gallons with 8-foot (240 cm) minimum length.</li>
</ul>
<p><strong>Critical requirement — secure lid:</strong> Gar are surface-dwelling fish that breathe atmospheric air. They will jump, especially when startled. A tight-fitting, weighted lid is absolutely essential. Gaps of even a few centimetres can be exploited.</p>
<p><strong>Filtration:</strong> Canister or sump filtration rated for 4–6× turnover. Gar are moderate waste producers but benefit from excellent water quality. Moderate current is appreciated.</p>
<p><strong>Décor:</strong> Open swimming space with driftwood positioned along the tank perimeter. Avoid sharp decorations that could damage the gar's elongated snout. Floating plants provide shade and security.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 70–82 °F (21–28 °C). Subtropical to tropical range — most species tolerate seasonal temperature fluctuation.</li>
<li><strong>pH:</strong> 6.5–8.0.</li>
<li><strong>Hardness:</strong> Adaptable; 5–20 dGH.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> Below 40 ppm.</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>All gar are carnivores. Platinum variants have identical dietary requirements to wild-type fish:</p>
<ul>
<li><strong>Staple foods:</strong> Frozen whole silversides, smelt, shrimp (shell-on), and lance fish.</li>
<li><strong>Supplementary:</strong> Frozen tilapia fillets, frozen crayfish, and earthworms.</li>
<li><strong>Feeding frequency:</strong> Juveniles daily; sub-adults every 2–3 days; adults 2–3 times weekly.</li>
</ul>
<p>Gar are surface feeders that prefer food floating at or near the surface. Use feeding tongs to present food at the waterline. Many gar can be trained to accept food from tongs readily.</p>

<h2 id="behaviour">Behaviour & Tank Mates</h2>
<p>Gar are surface-dwelling ambush predators. They spend most of their time hovering just below the waterline, occasionally surfacing to gulp air. They are generally peaceful toward fish they cannot eat, making them suitable for large predator communities with:</p>
<ul>
<li>Large catfish (Plecostomus, Synodontis)</li>
<li>Large cichlids (Oscars, Severums, large Geophagus)</li>
<li>Other gar species of similar size</li>
<li>Bichirs</li>
</ul>
<p>Avoid housing with anything small enough to be swallowed — gar have a deceptively large gape for their body width.</p>

<h2 id="pricing-and-availability">Pricing & Availability</h2>
<p>Platinum Gar are premium-priced due to their rarity:</p>
<ul>
<li><strong>Platinum Florida/Spotted Gar (juvenile):</strong> £150–£400</li>
<li><strong>Platinum Florida/Spotted Gar (sub-adult):</strong> £400–£800</li>
<li><strong>Platinum Longnose Gar:</strong> £600–£2,000+</li>
<li><strong>True Albino Gar (any species):</strong> £500–£3,000+</li>
</ul>
<p>Availability is sporadic — platinum colour morphs cannot be produced on demand, as the trait is recessive and spawning gar in captivity is itself a specialist endeavour. The Fish Collection maintains relationships with dedicated gar breeders and offers platinum specimens when available.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Platinum Gar get?',
        answer:
          'Adult size depends entirely on the species. Platinum Florida Gar reach 45–60 cm (18–24 in) — the most manageable size for home aquariums. Platinum Spotted Gar reach 45–75 cm (18–30 in). Platinum Longnose Gar can exceed 120 cm (48 in). Always identify the species before purchasing to ensure you can accommodate its adult size.',
      },
      {
        question: 'Are Platinum Gar more delicate than normal gar?',
        answer:
          'Captive-bred Platinum Gar are essentially as hardy as wild-type specimens. The leucistic/albino mutation does not significantly compromise the immune system or organ function in gar. The main consideration is light sensitivity in true albino (red-eyed) specimens — provide floating plants and moderate lighting. Leucistic (dark-eyed) platinum gar have no special sensitivity.',
      },
      {
        question: 'Can Platinum Gar live with other fish?',
        answer:
          'Yes, in appropriately sized tanks. Gar coexist well with other large species they cannot swallow: Oscars, large catfish, Bichirs, other gar, and large cichlids. The key rule is that all tank mates must be too large to fit in the gar\'s mouth. Gar are not aggressive — they are predatory toward small fish but generally ignore anything too large to eat.',
      },
    ],
    sources: [
      {
        title: 'Lepisosteidae — Gars',
        url: 'https://www.fishbase.se/Summary/FamilySummary.php?Family=Lepisosteidae',
        publisher: 'FishBase',
      },
      {
        title: 'Ecology and Conservation of North American Gars',
        url: 'https://doi.org/10.1002/9781118561430.ch9',
        publisher: 'Wiley',
      },
    ],
    relatedSlugs: [
      'alligator-gar',
      'arapaima',
      'red-tail-catfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 40. Neptune Grouper
  // ─────────────────────────────────────────────
  {
    title: 'Neptune Grouper: Complete Species & Care Guide',
    slug: 'neptune-grouper',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/neptune-grouper-hero.jpg',
    heroImageAlt:
      'Neptune Grouper displaying its vivid orange and pink colouration in a deepwater reef aquarium',
    metaTitle:
      'Neptune Grouper (Cephalopholis igarashiensis): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Neptune Grouper guide — deepwater collection, care requirements, pricing & tank setup. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'What is a Neptune Grouper?',
    quickAnswer:
      'The Neptune Grouper (Cephalopholis igarashiensis) is an extremely rare deepwater grouper found at depths of 80–260 metres in the Indo-Pacific. Prized for its stunning orange and pink colouration, it is one of the most expensive marine aquarium fish in the world, typically selling for $6,000–$12,000. It requires a well-established marine aquarium of 200+ gallons with stable water parameters, cooler-than-typical reef temperatures (68–74 °F), and a carnivorous diet.',
    summary:
      'The Neptune Grouper (Cephalopholis igarashiensis) is one of the "holy grail" species of the marine aquarium hobby — a deepwater grouper of extraordinary beauty that commands prices rivalling the most expensive freshwater species. Found at depths of 80–260 metres across the Indo-Pacific, its collection requires specialised deep-diving or submersible techniques and careful decompression during ascent. The result is a fish of breathtaking beauty: vivid orange-pink body overlaid with golden-yellow bands and highlights. This guide covers the species\' biology, the challenges of its collection, realistic care requirements, and what to expect from one of the rarest aquarium fish in the world.',
    scientificName: 'Cephalopholis igarashiensis',
    category: 'grouper',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cephalopholis igarashiensis' },
      { label: 'Max Size', value: '30 cm (12 in)' },
      { label: 'Tank Size', value: '200 gallons (757 L) minimum' },
      { label: 'Temperature', value: '68–74 °F (20–23 °C)' },
      { label: 'pH', value: '8.1–8.4' },
      { label: 'Care Level', value: 'Expert — requires stable marine setup' },
      { label: 'Lifespan', value: '15–20+ years estimated' },
      { label: 'Diet', value: 'Carnivore — frozen fish, shrimp, squid' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'natural-habitat', text: 'Natural Habitat & Collection', level: 2 },
      { id: 'appearance', text: 'Appearance', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour & Tank Mates', level: 2 },
      { id: 'pricing', text: 'Pricing & Availability', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Neptune Grouper occupies a rarefied position in the marine aquarium hobby — it is simultaneously one of the most beautiful and most expensive fish available. A member of the Serranidae family (groupers and sea basses), <em>Cephalopholis igarashiensis</em> inhabits deep rocky reefs and seamounts at depths where sunlight barely penetrates, yet it displays colouration more vivid than most shallow-water reef fish: a brilliant orange-pink body with golden-yellow highlights and bands, offset by large, expressive eyes adapted for low-light environments.</p>
<p>The species was first described scientifically in 1957, but it remained virtually unknown in the aquarium trade until the early 2000s, when advances in deep-collection techniques made it possible to bring specimens to the surface alive. Today, Neptune Groupers appear in the trade sporadically — typically a handful of specimens per year from Japanese, Filipino, or Hawaiian collectors — and each one generates significant excitement among serious marine hobbyists.</p>

<h2 id="natural-habitat">Natural Habitat & Collection</h2>
<p>Neptune Groupers inhabit deep rocky reefs, seamounts, and underwater ridges at depths of 80–260 metres (260–850 feet) across the Indo-Pacific, from Japan through the Philippines, Indonesia, Hawaii, and the Indian Ocean. At these depths, water temperatures are significantly cooler than surface reefs — typically 16–22 °C (61–72 °F) — and light levels are extremely low.</p>
<p>Collection of Neptune Groupers is an extraordinary undertaking. The depth at which they live exceeds the safe limits of recreational SCUBA diving, requiring either technical deep diving (using trimix gas blends), specialised submersibles, or hook-and-line techniques with careful decompression protocols for the fish. Specimens must be slowly brought to the surface over a period of hours, with their swim bladder carefully vented at intervals to prevent fatal barotrauma. The mortality rate during collection remains significant, which — combined with the extreme depths, limited collector expertise, and the species' naturally low population density — accounts for the extraordinary price.</p>

<h2 id="appearance">Appearance</h2>
<p>The Neptune Grouper's colouration is its defining feature and the reason for its desirability:</p>
<ul>
<li><strong>Body colour:</strong> Base colour ranges from vivid orange to salmon-pink, sometimes with a golden or copper undertone. The intensity of colour can vary between individuals and may shift somewhat in captivity depending on diet and lighting.</li>
<li><strong>Markings:</strong> Golden-yellow bands or highlights across the body, most prominent on the head and dorsal region. Some specimens display subtle reticulated patterning.</li>
<li><strong>Eyes:</strong> Proportionally large (an adaptation to the low-light deep-reef environment), adding to the fish's expressive appearance.</li>
<li><strong>Body shape:</strong> Typical grouper morphology — robust, laterally compressed body with a large mouth and rounded fins.</li>
</ul>
<p>Under proper aquarium lighting (moderate intensity, warm spectrum), the Neptune Grouper is genuinely one of the most visually stunning marine fish in existence. The orange-pink-gold combination is virtually unique among commonly kept species.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Tank size:</strong> 200 gallons (757 L) minimum. Neptune Groupers are not especially active swimmers but are robust fish that need adequate territory.</li>
<li><strong>Aquascape:</strong> Rocky structure with caves, overhangs, and ledges — mimicking the deep-reef habitat. The fish will establish a preferred cave or overhang as its home base.</li>
<li><strong>Lighting:</strong> Moderate to low. Deep-reef species are not adapted to intense lighting, and Neptune Groupers may be stressed or photophobic under bright reef LEDs at full intensity. Dimmer settings or actinic-heavy spectrums are preferred.</li>
<li><strong>Filtration:</strong> Excellent marine filtration with protein skimmer, adequate biological media, and stable water chemistry. Sump-based systems are preferred for the volume and stability they provide.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<p>The critical parameter for Neptune Groupers is temperature — they require cooler water than typical tropical reef tanks:</p>
<ul>
<li><strong>Temperature:</strong> 68–74 °F (20–23 °C). This is significantly cooler than the 76–80 °F (24–27 °C) maintained in most reef aquariums. A chiller is essential in most setups.</li>
<li><strong>pH:</strong> 8.1–8.4.</li>
<li><strong>Salinity:</strong> 1.024–1.026 SG.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> Below 10 ppm.</li>
</ul>
<p>The cooler temperature requirement means Neptune Groupers cannot be housed in standard mixed reef tanks with tropical corals. They are best kept in a dedicated deep-reef or fish-only-with-live-rock (FOWLR) setup, or with cold-water corals and invertebrates that share their temperature preference.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Neptune Groupers are carnivores that typically adapt well to captive diets once settled:</p>
<ul>
<li><strong>Initial feeding:</strong> Newly acquired specimens may be reluctant to feed for the first 1–2 weeks as they acclimate. Live ghost shrimp or small marine feeder shrimp can be used to initiate feeding response.</li>
<li><strong>Staple diet:</strong> Frozen silversides, frozen shrimp (Mysis, krill, whole prawn), frozen squid, and high-quality marine pellets (New Life Spectrum, Hikari Marine).</li>
<li><strong>Feeding frequency:</strong> Once daily for juveniles; every 2–3 days for established adults.</li>
</ul>
<p>Vitamin supplementation (Selcon or similar HUFA-enriched vitamin supplement) soaked into frozen foods helps maintain colour intensity and overall health.</p>

<h2 id="behaviour">Behaviour & Tank Mates</h2>
<p>Neptune Groupers are relatively peaceful for groupers — they lack the extreme aggression of larger serranid species. However, they are still predatory and will consume any fish or invertebrate small enough to swallow (anything less than half their body length).</p>
<p>Compatible tank mates include other similarly sized, robust marine fish that tolerate the cooler temperature range: large wrasses, tangs (some Acanthurus species tolerate cooler water), large angelfish, and other groupers of similar size. The tank mates' temperature compatibility is usually the limiting factor.</p>

<h2 id="pricing">Pricing & Availability</h2>
<p>Neptune Groupers are among the most expensive marine aquarium fish:</p>
<ul>
<li><strong>Typical price range:</strong> $6,000–$12,000 USD (£4,500–£9,000).</li>
<li><strong>Exceptional specimens:</strong> Large, perfectly coloured adults have sold for $15,000+.</li>
</ul>
<p>Availability is extremely limited — typically fewer than 10–20 specimens reach the global aquarium trade per year. The Fish Collection works with specialist deepwater collectors in Japan and the Pacific to source specimens when available. Due to the rarity and value of these fish, we recommend pre-registering your interest so that you can be notified immediately when a specimen becomes available.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Why are Neptune Groupers so expensive?',
        answer:
          'The price reflects the extreme difficulty and danger of collection (depths of 80–260 metres), high mortality during decompression ascent, limited number of collectors with the technical capability, naturally low population density, and the global demand that far exceeds supply. Each Neptune Grouper that survives the journey from deep reef to home aquarium represents a remarkable feat of collection expertise.',
      },
      {
        question: 'Do Neptune Groupers need a chiller?',
        answer:
          'In most home environments, yes. Neptune Groupers require 68–74 °F (20–23 °C), which is 4–10 °F cooler than standard tropical marine tanks. Unless your fish room or home is consistently cool, a chiller is essential to maintain stable temperatures in the appropriate range.',
      },
      {
        question: 'Can Neptune Groupers be kept in a reef tank?',
        answer:
          'Not in a standard tropical reef tank — the temperature requirements are incompatible with most tropical corals and invertebrates. However, they can be kept in a deep-reef themed setup with cold-water corals (non-photosynthetic species like Dendronephthya), or in a fish-only-with-live-rock (FOWLR) system maintained at the appropriate cooler temperature.',
      },
    ],
    sources: [
      {
        title: 'Cephalopholis igarashiensis (Katayama, 1957)',
        url: 'https://www.fishbase.se/summary/Cephalopholis-igarashiensis.html',
        publisher: 'FishBase',
      },
      {
        title: 'Deep-Reef Fishes of the Indo-Pacific',
        url: 'https://doi.org/10.11646/zootaxa.3852.1.1',
        publisher: 'Zootaxa',
      },
    ],
    relatedSlugs: [
      'gem-tang',
      'peppermint-angelfish',
      'dragon-goby',
    ],
  },

  // ─────────────────────────────────────────────
  // 41. Panther Grouper
  // ─────────────────────────────────────────────
  {
    title: 'Panther Grouper: Complete Species & Care Guide',
    slug: 'panther-grouper',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/panther-grouper-hero.jpg',
    heroImageAlt:
      'Panther Grouper displaying its white body with bold black polka-dot pattern in a marine aquarium',
    metaTitle:
      'Panther Grouper (Cromileptes altivelis): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Panther Grouper care guide — tank size, diet, growth rate & tank mates. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for a Panther Grouper?',
    quickAnswer:
      'Panther Groupers need a large marine aquarium — 300+ gallons for adults, as they reach 70 cm (28 in). They require standard marine water parameters (76–82 °F, pH 8.1–8.4, SG 1.024–1.026), robust protein skimming, and a carnivorous diet of frozen silversides, shrimp, and squid. While charming as small juveniles, they grow rapidly and will eat any tank mate they can swallow.',
    summary:
      'The Panther Grouper (Cromileptes altivelis), also known as the Humpback Grouper or Polka-Dot Grouper, is one of the most distinctive marine fish in the aquarium trade. Its white body covered in bold black spots, combined with an unusual humped head profile, makes it unmistakable. Juveniles are small, inexpensive, and irresistibly cute — which leads many beginners to purchase them without understanding that this fish reaches 70 cm (28 in) and requires a 300+ gallon aquarium. This guide provides a realistic overview of Panther Grouper care for those with the space and commitment to keep one properly.',
    scientificName: 'Cromileptes altivelis',
    category: 'grouper',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cromileptes altivelis' },
      { label: 'Max Size', value: '70 cm (28 in)' },
      { label: 'Tank Size', value: '300 gallons (1,135 L) minimum' },
      { label: 'Temperature', value: '76–82 °F (24–28 °C)' },
      { label: 'pH', value: '8.1–8.4' },
      { label: 'Care Level', value: 'Intermediate (space is the main challenge)' },
      { label: 'Lifespan', value: '15–20 years in captivity' },
      { label: 'Diet', value: 'Carnivore — frozen fish, shrimp, squid' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'appearance', text: 'Appearance', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour & Tank Mates', level: 2 },
      { id: 'growth-rate', text: 'Growth Rate', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Panther Grouper is a paradox of the marine aquarium hobby: it is one of the most widely sold marine fish, yet one of the least suitable for the average marine tank. Juveniles — typically sold at 5–8 cm (2–3 in) — are charming, affordable (often under £30), and display an endearing swimming style where they hover head-down at 45-degree angles. What retailers often fail to communicate is that this cute juvenile will grow into a 70 cm (28 in) apex predator that requires a tank larger than most hobbyists can accommodate.</p>
<p>For those with the space, however, the Panther Grouper is a genuinely rewarding aquarium fish. It is hardy, disease-resistant, interactive, and strikingly beautiful at every stage of growth. The key is going in with realistic expectations about size and tank requirements.</p>

<h2 id="appearance">Appearance</h2>
<p>The Panther Grouper's appearance is unmistakable:</p>
<ul>
<li><strong>Body colour:</strong> White to pale cream base colour.</li>
<li><strong>Pattern:</strong> Bold, round black spots distributed across the entire body, fins, and head — the "polka dot" or "panther" pattern. Spots are proportionally larger in juveniles relative to body size and become more numerous (and relatively smaller) as the fish grows.</li>
<li><strong>Head profile:</strong> Distinctively humped or concave above the eyes, giving the fish its alternative common name "Humpback Grouper." This profile becomes more pronounced with age.</li>
<li><strong>Body shape:</strong> Deep-bodied and laterally compressed — more so than most grouper species.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Juvenile (under 15 cm):</strong> 75-gallon minimum — but only as temporary housing. Plan your upgrade path before purchasing.</li>
<li><strong>Sub-adult (15–40 cm):</strong> 180–240 gallons.</li>
<li><strong>Adult (40+ cm):</strong> 300 gallons (1,135 L) minimum; 500+ gallons preferred.</li>
</ul>
<p><strong>Filtration:</strong> Robust protein skimming is essential — Panther Groupers are messy, carnivorous feeders that produce significant waste. A large sump with protein skimmer, biological media, and mechanical filtration is the recommended approach. Target water turnover of 6–10× the tank volume per hour.</p>
<p><strong>Aquascape:</strong> Provide rocky caves and overhangs — the fish will claim a cave as its home base. Open swimming space in the centre is important, as the fish becomes increasingly active and territorial with age.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 76–82 °F (24–28 °C).</li>
<li><strong>pH:</strong> 8.1–8.4.</li>
<li><strong>Salinity:</strong> 1.024–1.026 SG.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> Below 20 ppm (Panther Groupers are moderately nitrate-tolerant but thrive in cleaner water).</li>
</ul>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Panther Groupers are voracious carnivores with no interest in vegetable matter:</p>
<ul>
<li><strong>Staple:</strong> Frozen silversides, frozen shrimp (shell-on for adults), frozen squid, and frozen krill.</li>
<li><strong>Supplementary:</strong> High-quality marine pellets (New Life Spectrum Marine, Hikari Mega Marine).</li>
<li><strong>Treats:</strong> Live ghost shrimp, live crayfish (occasionally).</li>
<li><strong>Feeding frequency:</strong> Daily for juveniles; every 2–3 days for adults.</li>
</ul>
<p>Be cautious about overfeeding — Panther Groupers are enthusiastic eaters that will gorge if given the opportunity. Moderate portions fed on a regular schedule are healthier than large, infrequent meals.</p>

<h2 id="behaviour">Behaviour & Tank Mates</h2>
<p>Juveniles are relatively peaceful and spend much of their time hovering at angles near rockwork. As they grow, they become increasingly bold and territorial. Adult Panther Groupers are ambush predators that will eat any fish or invertebrate they can fit in their surprisingly large mouths.</p>
<p>Suitable tank mates for adult Panther Groupers include:</p>
<ul>
<li>Large tangs (Sohal, Vlamingi, Naso)</li>
<li>Large angelfish (Emperor, Queen, French)</li>
<li>Large wrasses (Napoleon, Harlequin Tuskfish)</li>
<li>Moray eels</li>
<li>Other similarly sized groupers (in 500+ gallon systems)</li>
</ul>
<p>Avoid all small fish, invertebrates (crabs, shrimp, lobsters), and anything that could fit in the grouper's mouth.</p>

<h2 id="growth-rate">Growth Rate</h2>
<p>Panther Groupers grow rapidly when well-fed. Expect:</p>
<ul>
<li><strong>Year 1:</strong> From 5 cm (2 in) to 15–20 cm (6–8 in).</li>
<li><strong>Year 2:</strong> 20–30 cm (8–12 in).</li>
<li><strong>Year 3–5:</strong> 30–50 cm (12–20 in).</li>
<li><strong>Year 5+:</strong> Gradual growth to 60–70 cm (24–28 in).</li>
</ul>
<p>This growth rate means your tank upgrade timeline is measured in months, not years. Many aquarists who purchase a juvenile Panther Grouper for a 75-gallon tank find themselves needing a 180-gallon upgrade within 12 months.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How fast do Panther Groupers grow?',
        answer:
          'Very fast when well-fed. A 5 cm (2 in) juvenile will typically reach 15–20 cm (6–8 in) within the first year and 30 cm (12 in) by the end of year two. Growth continues to 60–70 cm (24–28 in) over 5–8 years. This rapid growth rate is the most commonly underestimated aspect of keeping this species.',
      },
      {
        question: 'Can Panther Groupers go in a reef tank?',
        answer:
          'No — they will eat shrimp, crabs, small fish, and most invertebrates. They are best kept in fish-only-with-live-rock (FOWLR) systems. Some hardy corals may survive alongside them, but any mobile invertebrate will eventually become food.',
      },
      {
        question: 'Why does my Panther Grouper swim upside down?',
        answer:
          'Juvenile Panther Groupers frequently swim at odd angles — head-down, sideways, and occasionally upside-down. This is completely normal behaviour for the species, not a sign of illness. They use this unusual posture while resting near rockwork and overhangs. The behaviour typically becomes less frequent as the fish matures, though even adults occasionally adopt unusual swimming positions.',
      },
    ],
    sources: [
      {
        title: 'Cromileptes altivelis (Valenciennes, 1828)',
        url: 'https://www.fishbase.se/summary/Cromileptes-altivelis.html',
        publisher: 'FishBase',
      },
      {
        title: 'Humpback Grouper Aquaculture and Stock Enhancement',
        url: 'https://doi.org/10.1111/j.1749-7345.2005.tb00388.x',
        publisher: 'Journal of the World Aquaculture Society',
      },
    ],
    relatedSlugs: [
      'neptune-grouper',
      'wolf-fish',
      'peacock-bass',
    ],
  },

  // ─────────────────────────────────────────────
  // 42. Oranda Goldfish
  // ─────────────────────────────────────────────
  {
    title: 'Oranda Goldfish: Complete Species & Care Guide',
    slug: 'oranda-goldfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/oranda-goldfish-hero.jpg',
    heroImageAlt:
      'Red Cap Oranda goldfish displaying its prominent wen (head growth) and flowing finnage in a planted coldwater aquarium',
    metaTitle:
      'Oranda Goldfish (Carassius auratus): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Oranda Goldfish care guide — wen maintenance, tank setup, water parameters & diet. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for an Oranda Goldfish?',
    quickAnswer:
      'Oranda Goldfish need a minimum 30-gallon tank (add 10 gallons per additional fish), temperature of 65–75 °F (18–24 °C), pH 6.5–7.5, and powerful filtration to handle their high bioload. They eat a varied diet of sinking pellets, gel food, blanched vegetables, and frozen foods. The wen (head growth) requires monitoring for overgrowth that may obstruct vision and regular water quality maintenance to prevent infection.',
    summary:
      'The Oranda is one of the most beloved and recognisable fancy goldfish varieties, distinguished by its prominent fleshy head growth known as the wen. Available in a spectacular range of colours — including Red Cap (white body with red wen), Calico, Black, Blue, Chocolate, and Red — the Oranda combines the appeal of flowing, double-tail finnage with the unique character of the wen. Originally developed in China over 500 years ago, the Oranda remains a centrepiece of competitive goldfish showing and one of the most popular fancy goldfish varieties worldwide.',
    scientificName: 'Carassius auratus',
    category: 'goldfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Carassius auratus (Oranda variety)' },
      { label: 'Max Size', value: '20–30 cm (8–12 in) including finnage' },
      { label: 'Tank Size', value: '30 gallons (114 L) minimum' },
      { label: 'Temperature', value: '65–75 °F (18–24 °C)' },
      { label: 'pH', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years (up to 20+ with excellent care)' },
      { label: 'Diet', value: 'Omnivore — pellets, gel food, vegetables, frozen foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'the-wen', text: 'The Wen — Head Growth', level: 2 },
      { id: 'colour-varieties', text: 'Colour Varieties', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'wen-care', text: 'Wen Maintenance & Health', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Oranda goldfish has been cultivated in China since at least the 15th century, with Japanese breeders refining the variety further from the 17th century onward. The variety's defining feature — the wen, a fleshy, raspberry-textured growth that develops on the head and sometimes the cheeks and gill covers — sets it apart from all other fancy goldfish types. Combined with a deep, egg-shaped body, flowing double-tail finnage, and an extraordinary range of available colours, the Oranda offers a combination of elegance and character that few other ornamental fish can match.</p>
<p>In competitive goldfish showing, the Oranda is one of the most popular and hotly contested varieties. Top-quality show Orandas — particularly the highly prized Red Cap (white body with a vivid red wen) and the Thai-bred Blue Oranda — can command prices exceeding £500 for exceptional specimens.</p>

<h2 id="the-wen">The Wen — Head Growth</h2>
<p>The wen is the Oranda's signature feature and the source of most care considerations specific to the variety. Key facts about wen development:</p>
<ul>
<li><strong>Onset:</strong> Wen growth typically begins at 3–4 months of age, with visible development becoming apparent by 6–12 months. The wen continues to develop and grow throughout the fish's life, typically reaching full size at 2–3 years.</li>
<li><strong>Genetics:</strong> Wen size, shape, and coverage are genetically determined. Selective breeding over centuries has produced lines with wens ranging from modest head-only coverage to extreme full-face growth that covers the cheeks, gill plates, and even partially obscures the eyes.</li>
<li><strong>Composition:</strong> The wen is composed of thickened epithelial tissue — essentially hypertrophied skin cells. It is not a tumour or a disease, though it is susceptible to bacterial and fungal infection if water quality is poor.</li>
<li><strong>Diet influence:</strong> While genetics determine wen potential, diet influences expression. High-protein diets rich in bloodworms and quality pellets promote wen growth. Some breeders supplement with spirulina and astaxanthin to enhance wen colour.</li>
</ul>

<h2 id="colour-varieties">Colour Varieties</h2>
<p>Orandas are available in a remarkable range of colours and patterns:</p>
<ul>
<li><strong>Red Cap:</strong> White body with a vivid red wen. The most iconic Oranda variety and one of the most sought-after in the goldfish hobby.</li>
<li><strong>Red / Orange:</strong> Solid red-orange body and wen. The most commonly available variety.</li>
<li><strong>Black:</strong> Solid black — a dramatic variety, though black colouration can fade to bronze or orange with age in some lines.</li>
<li><strong>Blue:</strong> A steel-blue or grey-blue metallic colour. Thai Blue Orandas are particularly prized for their colour intensity and wen development.</li>
<li><strong>Chocolate:</strong> A rich brown colour that is surprisingly rare and highly valued.</li>
<li><strong>Calico:</strong> Multi-coloured patchwork of red, black, white, and blue on a nacreous (pearlescent) scale base.</li>
<li><strong>Panda:</strong> Black-and-white pattern — striking but prone to colour change, as the black may fade over time.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Tank size:</strong> 30 gallons (114 L) minimum for a single Oranda; add 10–15 gallons per additional fish. A pair is best in 40–50 gallons; a group of 4 needs 75+ gallons.</li>
<li><strong>Filtration:</strong> Goldfish produce more waste than tropical fish of equivalent size. A filter rated for 1.5–2× the tank's actual volume is recommended. Canister filters or large HOB filters with substantial biological media are ideal.</li>
<li><strong>Substrate:</strong> Smooth sand or fine, rounded gravel. Avoid anything sharp that could injure the wen if the fish roots around the bottom (which they will).</li>
<li><strong>Plants:</strong> Orandas will uproot delicate plants. Use hardy, robust species attached to hardscape: Anubias, Java Fern, and Java Moss on driftwood or rocks. Floating plants (Water Lettuce, Frogbit) provide shade and are out of reach.</li>
<li><strong>Décor:</strong> Avoid anything with sharp edges that could snag the flowing finnage or injure the wen. Smooth driftwood, rounded river stones, and ceramic ornaments with no rough edges are safe choices.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 65–75 °F (18–24 °C). Orandas are coldwater fish that do not need a heater in most homes. They tolerate temperatures down to 55 °F (13 °C) but are most active and healthy at 68–72 °F (20–22 °C). Avoid sustained temperatures above 80 °F (27 °C).</li>
<li><strong>pH:</strong> 6.5–7.5.</li>
<li><strong>GH:</strong> 5–15 dGH.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm — critical for wen health.</li>
<li><strong>Nitrate:</strong> Below 20 ppm — elevated nitrate is a primary trigger for wen infections.</li>
</ul>
<p>Weekly 30–50% water changes are the single most important care practice for Orandas. The combination of high bioload and wen susceptibility to infection means water quality must be impeccable.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<ul>
<li><strong>Staple:</strong> Sinking goldfish pellets (Hikari Oranda Gold, Northfin Goldfish, Repashy Super Gold gel food). Sinking foods are preferred over floating to reduce air ingestion, which can cause buoyancy issues in deep-bodied fancy goldfish.</li>
<li><strong>Protein supplements:</strong> Frozen bloodworms, brine shrimp, daphnia — 2–3 times weekly. These promote wen growth.</li>
<li><strong>Vegetables:</strong> Blanched peas (with skin removed — excellent for digestion), blanched spinach, cucumber, and zucchini. Vegetables should compose 20–30% of the diet.</li>
<li><strong>Feeding schedule:</strong> 2–3 small meals per day rather than one large feeding. Offer only what can be consumed in 2 minutes per feeding.</li>
</ul>

<h2 id="wen-care">Wen Maintenance & Health</h2>
<p>The wen requires specific attention that other goldfish varieties do not:</p>
<ul>
<li><strong>Water quality:</strong> The wen's folded, textured surface can trap debris and bacteria. Pristine water quality is the primary defence against wen infection. If you see white cottony patches on the wen, this is likely fungal infection — treat immediately with antifungal medication and increase water changes.</li>
<li><strong>Wen trimming:</strong> In extreme cases, the wen can overgrow to the point where it obscures the fish's vision. Wen trimming is a procedure performed by experienced keepers and breeders using sharp scissors or a scalpel. The wen has minimal nerve endings and the fish recovers quickly, but the procedure should not be attempted without research and confidence. Veterinary consultation is recommended for first-time trimming.</li>
<li><strong>Observation:</strong> Regularly examine the wen for redness, swelling, white patches, or unusual texture changes. Early detection of problems allows quick treatment.</li>
</ul>

<h2 id="tank-mates">Tank Mates</h2>
<p>Orandas are peaceful, slow-swimming fish that should only be housed with other fancy goldfish of similar swimming ability:</p>
<ul>
<li><strong>Ideal:</strong> Ranchu, Lionhead, Ryukin, Telescope, Pearlscale — all similarly bodied and paced.</li>
<li><strong>Avoid:</strong> Single-tail goldfish (Comet, Shubunkin, Common) — these are much faster swimmers that will outcompete Orandas for food. Also avoid all tropical fish (incompatible temperature requirements) and any fin-nipping species.</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How big do Oranda Goldfish get?',
        answer:
          'Orandas typically reach 20–30 cm (8–12 inches) including finnage, with body length of 15–20 cm (6–8 in). Some exceptional specimens, particularly Chinese-bred show fish, can exceed 30 cm total length. Size is influenced by genetics, diet, water quality, and tank size — fish in larger, well-maintained tanks with good nutrition reach their full potential.',
      },
      {
        question: 'Do Oranda Goldfish need a heater?',
        answer:
          'Not in most homes. Orandas thrive at 65–75 °F (18–24 °C), which is typical room temperature in many climates. A heater is only needed if your home regularly drops below 60 °F (15 °C), or if you want to maintain a stable temperature to promote optimal wen growth and activity. Never heat above 78 °F (26 °C).',
      },
      {
        question: 'Why does my Oranda goldfish float or swim oddly after eating?',
        answer:
          'Buoyancy issues after feeding are common in deep-bodied fancy goldfish like Orandas. The egg-shaped body can compress the swim bladder, and ingesting air while eating floating food worsens the problem. Solutions: feed sinking pellets or gel food only, pre-soak dry food before offering, include blanched peas regularly (they aid digestion), and fast the fish for 24–48 hours if symptoms persist.',
      },
    ],
    sources: [
      {
        title: 'Carassius auratus (Linnaeus, 1758)',
        url: 'https://www.fishbase.se/summary/Carassius-auratus.html',
        publisher: 'FishBase',
      },
      {
        title: 'Goldfish Varieties and Genetics: A Handbook for Breeders',
        url: 'https://doi.org/10.1002/9780470344460',
        publisher: 'Wiley-Blackwell',
      },
    ],
    relatedSlugs: [
      'ranchu-goldfish',
      'kohaku-koi',
      'koi-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 43. Ryukin Goldfish
  // ─────────────────────────────────────────────
  {
    title: 'Ryukin Goldfish: Complete Species & Care Guide',
    slug: 'ryukin-goldfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/ryukin-goldfish-hero.jpg',
    heroImageAlt:
      'Red and white Ryukin goldfish displaying its distinctive high dorsal hump and flowing double tail',
    metaTitle:
      'Ryukin Goldfish (Carassius auratus): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Ryukin Goldfish care guide — the high-humped fancy goldfish. Tank setup, diet, swim bladder tips & breeding. Expert advice.',
    quickAnswerQuestion: 'How do you care for a Ryukin Goldfish?',
    quickAnswer:
      'Ryukin Goldfish need a minimum 20-gallon tank (30+ preferred), temperature of 65–75 °F (18–24 °C), pH 6.5–7.5, and strong filtration. Feed sinking pellets, gel food, frozen foods, and blanched vegetables. Their deep body shape makes them prone to swim bladder issues — avoid floating foods and include fibrous vegetables regularly.',
    summary:
      'The Ryukin is one of the oldest and most recognisable fancy goldfish varieties, distinguished by its dramatic high dorsal hump, deep round body, and flowing double or butterfly tail. Named after the Ryukyu Islands (modern-day Okinawa, Japan), where the variety was developed from Chinese imports in the 17th century, the Ryukin remains a cornerstone of competitive goldfish showing in Japan and worldwide. Available in red, red-and-white, calico, and other colour forms, the Ryukin is hardy relative to other fancy varieties and an excellent choice for intermediate goldfish keepers.',
    scientificName: 'Carassius auratus',
    category: 'goldfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Carassius auratus (Ryukin variety)' },
      { label: 'Max Size', value: '15–25 cm (6–10 in)' },
      { label: 'Tank Size', value: '20 gallons (76 L) minimum, 30+ preferred' },
      { label: 'Temperature', value: '65–75 °F (18–24 °C)' },
      { label: 'pH', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Beginner to Intermediate' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Omnivore — pellets, gel food, vegetables, frozen foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'appearance', text: 'Appearance & Varieties', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'swim-bladder', text: 'Swim Bladder Health', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Ryukin goldfish traces its lineage to Chinese fancy goldfish varieties imported to Japan via the Ryukyu Islands (Okinawa) in the 1600s. Japanese breeders selectively developed the variety's signature traits — the pronounced dorsal hump, deeply compressed body, and extravagant double-tail finnage — creating a fish that remains one of the most popular and competitive goldfish varieties in the world.</p>
<p>Compared to other fancy goldfish like the Oranda or Ranchu, the Ryukin is relatively hardy. It lacks the wen (head growth) that requires special care in Orandas, and its swimming ability, while reduced compared to single-tail varieties, is superior to that of extremely round-bodied types like the Pearlscale or Celestial Eye. This combination of visual drama and relative ease of care makes the Ryukin an excellent choice for hobbyists moving from common goldfish to fancy varieties.</p>

<h2 id="appearance">Appearance & Varieties</h2>
<p>The Ryukin's defining physical features are:</p>
<ul>
<li><strong>Dorsal hump:</strong> A pronounced raised profile behind the head, giving the fish a characteristic "humped" silhouette. In show-quality specimens, the hump should be smooth, high, and symmetrical.</li>
<li><strong>Body shape:</strong> Deep and round, laterally compressed. The depth of the body should ideally approach the body length (excluding fins).</li>
<li><strong>Finnage:</strong> Paired pectoral, ventral, and anal fins with a flowing double (split) caudal tail. Tail types include standard double-tail, butterfly tail (viewed from behind, the lobes spread horizontally like butterfly wings), and long-tail variants with extended, ribbon-like caudal fins.</li>
</ul>
<p>Common colour varieties include:</p>
<ul>
<li><strong>Red / Orange:</strong> Solid, deep red-orange — the classic Ryukin colour.</li>
<li><strong>Red and White (Sarasa):</strong> Bold patches of red on a white base — highly prized when the pattern is well-balanced.</li>
<li><strong>Calico:</strong> Patchwork of red, black, white, and blue on nacreous scales.</li>
<li><strong>White:</strong> Pure white with metallic scales — elegant and understated.</li>
<li><strong>Chocolate:</strong> Rich brown, uncommon and sought-after.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Tank size:</strong> 20 gallons (76 L) absolute minimum for a single fish; 30 gallons preferred. Add 10 gallons per additional Ryukin.</li>
<li><strong>Tank shape:</strong> Tall tanks complement the Ryukin's deep body shape, but width is also important for swimming room. Avoid narrow tanks.</li>
<li><strong>Filtration:</strong> Robust filtration rated for 1.5–2× the tank volume. Goldfish are heavy waste producers. Canister or large HOB filters with ample biological media are recommended.</li>
<li><strong>Décor:</strong> Smooth-edged decorations only. Avoid rough rocks, sharp driftwood, or plastic plants with hard edges that could snag the flowing finnage. Live plants (Anubias, Java Fern) attached to smooth wood provide natural filtration without risk. Smooth sand substrate is ideal.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 65–75 °F (18–24 °C). Like all goldfish, Ryukins are coldwater fish. A heater is rarely needed.</li>
<li><strong>pH:</strong> 6.5–7.5.</li>
<li><strong>GH:</strong> 5–15 dGH.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> Below 20 ppm.</li>
</ul>
<p>Weekly 30–40% water changes are essential. Consistent, clean water is the foundation of goldfish health.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<ul>
<li><strong>Staple:</strong> Sinking goldfish pellets or gel food (Repashy Super Gold, Hikari Fancy Goldfish). Sinking foods reduce air ingestion — critical for swim-bladder-prone fancy varieties.</li>
<li><strong>Protein:</strong> Frozen bloodworms, brine shrimp, and daphnia 2–3 times weekly.</li>
<li><strong>Vegetables:</strong> Blanched, skinned peas (the single most important food for goldfish digestion), blanched spinach, cucumber, and zucchini. Aim for 20–30% of total diet.</li>
<li><strong>Feeding schedule:</strong> 2–3 small meals daily. Small, frequent meals reduce the risk of swim bladder compression from the stomach.</li>
</ul>

<h2 id="swim-bladder">Swim Bladder Health</h2>
<p>The Ryukin's deep, compressed body shape puts pressure on the swim bladder, making buoyancy disorders one of the most common health issues. Prevention strategies:</p>
<ul>
<li><strong>Feed sinking foods only</strong> — floating pellets and flakes cause the fish to gulp air at the surface.</li>
<li><strong>Pre-soak dry foods</strong> for 2–3 minutes before offering — this prevents the food from expanding inside the fish's gut.</li>
<li><strong>Include peas regularly</strong> — blanched, skinned green peas are high in fibre and promote healthy digestion. Offer at least once per week.</li>
<li><strong>Fast weekly</strong> — one day without food per week allows the digestive system to clear completely.</li>
<li><strong>Maintain water temperature above 65 °F</strong> — goldfish digestion slows significantly in cold water, increasing the risk of gas and constipation-related buoyancy problems.</li>
</ul>
<p>If a Ryukin develops buoyancy issues (floating at the surface, struggling to dive, or sinking to the bottom), fast for 48–72 hours, then offer only blanched peas for 2–3 days. Raise temperature to 74–76 °F to speed digestion. Most cases resolve within a few days with this protocol.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Ryukins are best kept with other fancy goldfish of similar swimming ability: Orandas, Ranchu, Fantails, and Moors. They are slightly faster swimmers than the most extreme fancy types (Telescope Eyes, Celestial Eyes, Bubble Eyes), so exercise caution when mixing — ensure slower varieties can access food.</p>
<p>Avoid single-tail goldfish, tropical fish, and any fin-nipping species.</p>

<h2 id="breeding">Breeding</h2>
<p>Ryukins breed readily in captivity. Spawning is triggered by temperature changes — a gradual increase from 60 °F to 70–74 °F (16 to 21–23 °C) over 1–2 weeks simulates spring conditions and induces spawning behaviour. Males develop breeding tubercles (white spots) on the gill covers and pectoral fins. Eggs are scattered on plants or spawning mops and hatch in 4–7 days depending on temperature. Fry can be started on infusoria and liquid fry food, transitioning to baby brine shrimp at 1–2 weeks.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'What is the difference between a Ryukin and an Oranda?',
        answer:
          'The key difference is the head growth (wen): Orandas develop a fleshy growth on the head that Ryukins lack. Ryukins have a more pronounced dorsal hump behind the head. Both are double-tailed fancy goldfish with deep, round bodies, but the Ryukin tends to be slightly more streamlined and a better swimmer. Care requirements are very similar, though Orandas require additional attention to wen health.',
      },
      {
        question: 'Can Ryukin Goldfish live in a pond?',
        answer:
          'Ryukins can be kept in outdoor ponds during warmer months (above 55 °F / 13 °C) but are not ideal for year-round outdoor keeping in cold climates. Their deep body and flowing fins make them vulnerable to predation and less able to cope with temperature extremes. If keeping outdoors, provide predator protection (netting, deep areas), and bring them inside when temperatures approach freezing.',
      },
      {
        question: 'How long do Ryukin Goldfish live?',
        answer:
          'With proper care, Ryukin Goldfish typically live 10–15 years. Some well-maintained specimens have been reported to live 20+ years. Lifespan is strongly influenced by water quality, diet, and tank size — goldfish kept in small, poorly maintained tanks rarely exceed 5 years.',
      },
    ],
    sources: [
      {
        title: 'Carassius auratus (Linnaeus, 1758)',
        url: 'https://www.fishbase.se/summary/Carassius-auratus.html',
        publisher: 'FishBase',
      },
      {
        title: 'The Goldfish: A Guide to Selection, Housing and Care',
        url: 'https://doi.org/10.5040/9781474290128',
        publisher: 'Bloomsbury Publishing',
      },
    ],
    relatedSlugs: [
      'ranchu-goldfish',
      'oranda-goldfish',
      'koi-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 44. Lionhead Goldfish
  // ─────────────────────────────────────────────
  {
    title: 'Lionhead Goldfish: Complete Species & Care Guide',
    slug: 'lionhead-goldfish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/lionhead-goldfish-hero.jpg',
    heroImageAlt:
      'Red Lionhead goldfish displaying its full wen coverage and dorsal-less profile in a planted aquarium',
    metaTitle:
      'Lionhead Goldfish (Carassius auratus): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Lionhead Goldfish care guide — wen development, swimming ability, tank setup & feeding. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for a Lionhead Goldfish?',
    quickAnswer:
      'Lionhead Goldfish need a minimum 30-gallon tank, temperature of 65–75 °F, pH 6.5–7.5, and strong filtration. They lack a dorsal fin and are slow swimmers, so avoid strong currents and fast tank mates. Feed sinking pellets, gel food, and blanched vegetables. Monitor the wen for overgrowth and infection.',
    summary:
      'The Lionhead is one of the oldest and most revered fancy goldfish varieties, prized in Chinese goldfish culture for over 500 years. Distinguished by the absence of a dorsal fin and the development of a full, prominent wen (head growth) that ideally covers the entire head, cheeks, and gill plates — resembling a lion\'s mane — the Lionhead is closely related to the Japanese Ranchu but maintains distinct breed characteristics. This guide covers the differences between Lionhead and Ranchu, care considerations specific to dorsal-less varieties, wen management, and optimal husbandry.',
    scientificName: 'Carassius auratus',
    category: 'goldfish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Carassius auratus (Lionhead variety)' },
      { label: 'Max Size', value: '15–20 cm (6–8 in)' },
      { label: 'Tank Size', value: '30 gallons (114 L) minimum' },
      { label: 'Temperature', value: '65–75 °F (18–24 °C)' },
      { label: 'pH', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Omnivore — sinking pellets, gel food, vegetables' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'lionhead-vs-ranchu', text: 'Lionhead vs Ranchu', level: 2 },
      { id: 'appearance', text: 'Appearance', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'wen-care', text: 'Wen Care', level: 2 },
      { id: 'swimming-ability', text: 'Swimming Ability Considerations', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Lionhead goldfish is the Chinese progenitor of the more widely known Japanese Ranchu. Developed during the Ming Dynasty (14th–17th century), the Lionhead was bred to display maximum wen development — a fleshy, lumpy head growth that covers the cranium, cheeks, and gill plates, creating a "lion's mane" effect when viewed from above. Combined with the characteristic absence of a dorsal fin, the Lionhead presents a unique silhouette that is instantly recognisable to goldfish enthusiasts.</p>
<p>While the Ranchu has achieved greater international popularity, the Lionhead retains a devoted following, particularly in China, where it is judged by different aesthetic standards than the Ranchu. Chinese Lionhead judging emphasises wen volume, symmetry, and fullness — the ideal Lionhead's wen should be massive, covering the entire head and extending down the cheeks and gill covers in a uniform, rounded profile.</p>

<h2 id="lionhead-vs-ranchu">Lionhead vs Ranchu</h2>
<p>The Lionhead and Ranchu are closely related and frequently confused. Key differences:</p>
<ul>
<li><strong>Back profile:</strong> The Ranchu has a more pronounced curved back (the "tuck" where the back meets the tail peduncle should be sharp and well-defined). The Lionhead has a straighter, less dramatically curved back.</li>
<li><strong>Wen development:</strong> The Lionhead is bred for maximum wen coverage — ideally the entire head, cheeks, and gill plates are covered. Ranchu wen standards vary by lineage but generally prioritise shape and proportion over sheer volume.</li>
<li><strong>Body shape:</strong> Ranchu tend to be more egg-shaped and compact; Lionheads may be slightly longer-bodied.</li>
<li><strong>Tail:</strong> Ranchu tails are typically more splayed and viewed from above (top-view judging is traditional in Japan). Lionhead tails may be more flowing and are traditionally judged from the side.</li>
</ul>
<p>In practice, the varieties have been interbred extensively, and many commercially available "Lionhead" goldfish are Lionhead-Ranchu crosses. True Chinese Lionheads with classic breed characteristics are less common in the Western hobby than Ranchu.</p>

<h2 id="appearance">Appearance</h2>
<p>Key physical characteristics:</p>
<ul>
<li><strong>No dorsal fin:</strong> The smooth, clean back is a defining breed requirement. Any trace of dorsal fin is a disqualification in competition.</li>
<li><strong>Full wen:</strong> Covers the cranium (top of head), cheeks, and ideally the gill covers. The wen should be symmetrical, full, and have a "raspberry" or "cauliflower" texture.</li>
<li><strong>Body:</strong> Deep, round, and slightly elongated compared to the Ranchu.</li>
<li><strong>Tail:</strong> Double (split) caudal fin, held open and flowing.</li>
<li><strong>Colours:</strong> Red, red-and-white, black, calico, blue, chocolate, and panda (black and white). Red and red-and-white are the most traditional and popular.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Tank size:</strong> 30 gallons (114 L) minimum for one Lionhead; add 10–15 gallons per additional fish.</li>
<li><strong>Water flow:</strong> Gentle. Lionheads are poor swimmers due to the absence of a dorsal fin, which functions as a stabiliser. Strong currents exhaust them and can cause stress. Use a sponge filter or baffle the output of canister/HOB filters.</li>
<li><strong>Substrate:</strong> Smooth sand — no sharp gravel that could injure the wen.</li>
<li><strong>Décor:</strong> Smooth, rounded surfaces only. Avoid sharp edges, rough rocks, and narrow spaces where the wen could get snagged or scraped.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 65–75 °F (18–24 °C).</li>
<li><strong>pH:</strong> 6.5–7.5.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm — critical for wen health.</li>
<li><strong>Nitrate:</strong> Below 20 ppm.</li>
</ul>
<p>Water quality is paramount for Lionheads. The wen is susceptible to bacterial and fungal infection in poor water conditions. Weekly 30–50% water changes are essential.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Identical dietary recommendations to the Oranda (see our <a href="/species/oranda-goldfish">Oranda Goldfish guide</a>): sinking pellets or gel food as a staple, supplemented with frozen bloodworms, brine shrimp, and blanched vegetables. Sinking foods are essential — Lionheads' poor swimming ability makes surface feeding stressful and increases air ingestion.</p>
<p>High-protein diets promote wen growth. Spirulina and astaxanthin supplements enhance colour intensity.</p>

<h2 id="wen-care">Wen Care</h2>
<p>The same wen care principles apply as for Orandas, with the additional consideration that Lionheads are bred for maximum wen development, meaning overgrowth issues are more common:</p>
<ul>
<li><strong>Vision obstruction:</strong> Lionhead wens frequently grow to the point where they partially or fully cover the eyes. This reduces the fish's ability to find food and navigate. Wen trimming may be necessary — carefully cutting away wen tissue from around the eyes using clean, sharp scissors. The procedure causes no lasting harm but should be researched thoroughly before attempting.</li>
<li><strong>Infection prevention:</strong> Pristine water quality, smooth substrate, and rounded décor prevent wen damage and subsequent infection.</li>
<li><strong>Regular inspection:</strong> Check the wen weekly for white patches (fungal), redness (bacterial), or unusual texture changes.</li>
</ul>

<h2 id="swimming-ability">Swimming Ability Considerations</h2>
<p>Without a dorsal fin, Lionheads lack the stability that other goldfish varieties enjoy. They tend to wobble, roll slightly, and struggle in current. This is normal breed behaviour, not a sign of illness. Practical implications:</p>
<ul>
<li>Keep water flow gentle — sponge filters or baffled outlets.</li>
<li>Only house with equally slow-swimming varieties (Ranchu, other Lionheads, Bubble Eyes, Celestial Eyes).</li>
<li>Ensure food reaches the fish — scatter sinking pellets rather than dumping in one spot, so all fish can access food without having to compete with faster swimmers.</li>
<li>Avoid deep tanks — Lionheads may struggle to reach food at the bottom of tall tanks. Standard rectangular proportions work best.</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'What is the difference between a Lionhead and a Ranchu?',
        answer:
          'The Lionhead is the Chinese ancestor of the Japanese Ranchu. Key differences: Lionheads have a straighter back profile (Ranchu have a more dramatically curved back with a sharp tail tuck), Lionheads are bred for maximum wen volume (Ranchu judging prioritises overall body proportion), and Lionheads may be slightly longer-bodied. In practice, the varieties have been extensively interbred, and many commercial fish are crosses.',
      },
      {
        question: 'Do Lionhead Goldfish need a heater?',
        answer:
          'Not in most homes — they thrive at 65–75 °F (18–24 °C). A heater is only needed if room temperature drops below 60 °F (15 °C). Maintaining a stable temperature (avoiding fluctuations of more than 3–4 °F per day) is more important than hitting a specific number.',
      },
      {
        question: 'Can Lionhead Goldfish see through their wen?',
        answer:
          'Lionheads with moderate wen growth can see normally. However, the breed is intentionally developed for maximum wen coverage, and in many specimens the wen grows to partially or fully obstruct the eyes. Fish with obstructed vision can still navigate by using their lateral line system and sense of smell, but they struggle to compete for food with sighted tank mates. Wen trimming around the eyes is a common practice among breeders to restore vision.',
      },
    ],
    sources: [
      {
        title: 'Carassius auratus (Linnaeus, 1758)',
        url: 'https://www.fishbase.se/summary/Carassius-auratus.html',
        publisher: 'FishBase',
      },
      {
        title: 'Chinese Goldfish: History, Varieties, and Modern Breeding',
        url: 'https://doi.org/10.1007/978-981-16-8042-6',
        publisher: 'Springer Nature',
      },
    ],
    relatedSlugs: [
      'ranchu-goldfish',
      'oranda-goldfish',
      'ryukin-goldfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 45. Sanke Koi
  // ─────────────────────────────────────────────
  {
    title: 'Sanke Koi: Complete Species & Care Guide',
    slug: 'sanke-koi',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/sanke-koi-hero.jpg',
    heroImageAlt:
      'Taisho Sanke koi displaying a balanced pattern of red (hi) and black (sumi) markings on a white (shiroji) base',
    metaTitle:
      'Sanke Koi (Cyprinus rubrofuscus): Complete Guide — Pattern, Selection & Care | The Fish Collection',
    metaDescription:
      'Complete Sanke Koi guide — pattern appreciation, selection criteria, care requirements & pond setup. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'What is a Sanke Koi?',
    quickAnswer:
      'The Taisho Sanke (commonly called Sanke) is one of the "Big Three" (Gosanke) koi varieties, alongside Kohaku and Showa. It features a white body (shiroji) with red (hi) and black (sumi) markings. The key distinction from Showa is that Sanke has sumi only on the body and fins — never on the head. Sanke require the same care as all koi: a pond of 1,000+ gallons, excellent filtration, and standard koi water parameters.',
    summary:
      'The Taisho Sanke — universally shortened to Sanke — is one of the three most prestigious koi varieties (the Gosanke, alongside Kohaku and Showa Sanshoku). First developed in the Taisho era of Japan (1912–1926), the Sanke displays a tri-colour pattern of pure white (shiroji), deep red (hi), and jet black (sumi) that, when perfectly balanced, is considered among the most beautiful expressions in the koi world. Understanding Sanke pattern appreciation — what makes a good Sanke versus a great one — is central to koi connoisseurship.',
    scientificName: 'Cyprinus rubrofuscus',
    category: 'koi',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cyprinus rubrofuscus (Taisho Sanke variety)' },
      { label: 'Max Size', value: '60–90 cm (24–36 in)' },
      { label: 'Pond Size', value: '1,000 gallons (3,785 L) minimum' },
      { label: 'Temperature', value: '59–77 °F (15–25 °C)' },
      { label: 'pH', value: '7.0–8.5' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '25–35+ years' },
      { label: 'Diet', value: 'Omnivore — koi pellets, vegetables, treats' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'pattern-appreciation', text: 'Pattern Appreciation', level: 2 },
      { id: 'sanke-vs-showa', text: 'Sanke vs Showa', level: 2 },
      { id: 'selection-criteria', text: 'Selection Criteria', level: 2 },
      { id: 'pond-requirements', text: 'Pond Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet', text: 'Diet & Colour Enhancement', level: 2 },
      { id: 'pattern-development', text: 'Pattern Development Over Time', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Sanke's origin is traced to the Taisho period in Niigata Prefecture, Japan, where breeders of Kohaku (red-and-white koi) occasionally produced offspring with additional black markings. Rather than discarding these fish, breeders recognised the aesthetic potential of the tri-colour combination and began selectively developing the variety. By the mid-20th century, the Sanke had been refined into a distinct variety with its own judging standards, and it had taken its place alongside the Kohaku and Showa as one of the Gosanke — the three varieties that dominate high-level koi competitions worldwide.</p>
<p>A truly exceptional Sanke — with snow-white skin, deep crimson hi, jet-black sumi, and perfect pattern balance — is widely regarded as the pinnacle of koi aesthetics. Grand Champions at the All Japan Koi Show (the "Olympics" of the koi world) are frequently Sanke, and top-quality specimens from prestigious Japanese breeders can command prices exceeding £100,000.</p>

<h2 id="pattern-appreciation">Pattern Appreciation</h2>
<p>Understanding what makes a Sanke beautiful requires familiarity with the three elements of its pattern:</p>
<p><strong>Shiroji (white base):</strong> The foundation of any Sanke. The white should be pure, snow-white — not yellowish, greyish, or creamy. The quality of the shiroji is often the first thing a judge evaluates, as it provides the "canvas" against which the red and black elements are displayed.</p>
<p><strong>Hi (red markings):</strong> Should be deep, uniform crimson — not orange, pink, or blotchy. The hi pattern should be well-distributed across the body, ideally starting on the head, continuing across the back in a stepping pattern, and finishing before the tail (leaving a clean white tail peduncle, called "odome"). The hi should have clean, sharp edges (kiwa) where it meets the white — blurry or feathered edges are a fault.</p>
<p><strong>Sumi (black markings):</strong> The element that distinguishes Sanke from Kohaku. Sumi on a Sanke should be glossy, lacquer-black spots distributed strategically on the body to complement and balance the hi pattern. Critical rules for Sanke sumi:</p>
<ul>
<li>Sumi should appear on the body and pectoral fins, but <strong>never on the head</strong> (this is the primary rule separating Sanke from Showa).</li>
<li>Sumi spots should be small-to-medium in size, well-defined, and placed to create visual balance with the hi pattern.</li>
<li>Tejima — black stripes in the pectoral fins — are highly valued on Sanke and are considered an indicator of quality bloodline.</li>
</ul>

<h2 id="sanke-vs-showa">Sanke vs Showa</h2>
<p>Sanke and Showa Sanshoku are the two tri-colour koi varieties and are frequently confused. The definitive differences:</p>
<ul>
<li><strong>Sanke:</strong> White base + red + black. Sumi appears as accent spots on a white canvas. <strong>No sumi on the head.</strong> The overall impression is white fish decorated with red and black.</li>
<li><strong>Showa:</strong> Black base + red + white. Sumi is the dominant colour, wrapping around the body. <strong>Sumi appears on the head</strong> (usually as a dramatic black pattern element). The overall impression is a black fish with red and white markings breaking through.</li>
</ul>
<p>The simplest field identification: if the head has black, it's a Showa. If the head is only white and red, it's a Sanke. However, modern breeding has blurred these lines — some Sanke carry deep sumi that develops late and changes the initial classification, and some Showa have been lightened to look more Sanke-like. Expert evaluation considers the overall body pattern, scale structure, and parentage.</p>

<h2 id="selection-criteria">Selection Criteria</h2>
<p>When selecting a Sanke, evaluate:</p>
<ul>
<li><strong>Shiroji quality:</strong> Pure, porcelain white. Reject fish with yellowish or dingy white.</li>
<li><strong>Hi quality:</strong> Deep, even crimson with clean edges. The hi pattern should be balanced left-to-right across the body.</li>
<li><strong>Sumi quality:</strong> Glossy black, well-defined spots. Note that young Sanke often have undeveloped sumi that will intensify with age — buying from reputable breeders helps predict sumi development.</li>
<li><strong>Body conformation:</strong> Torpedo-shaped, well-proportioned body. Good body shape is the foundation that carries the pattern.</li>
<li><strong>Skin quality:</strong> Lustrous, healthy sheen. Quality skin is often the difference between a good koi and a great one.</li>
</ul>

<h2 id="pond-requirements">Pond Requirements</h2>
<p>Sanke require the same pond setup as all koi — they are the same species with no special infrastructure needs:</p>
<ul>
<li><strong>Pond size:</strong> 1,000 gallons (3,785 L) minimum; 2,000+ gallons recommended. Larger ponds produce larger, healthier koi with better colour development.</li>
<li><strong>Depth:</strong> 4 feet (1.2 m) minimum for predator protection and temperature stability.</li>
<li><strong>Filtration:</strong> Multi-stage pond filtration: mechanical (settlement chamber, drum filter, or brush media), biological (moving bed, static media, or bead filter), and UV sterilisation. Target turnover of the entire pond volume every 1–2 hours.</li>
<li><strong>Aeration:</strong> Pond air pumps or venturi returns for adequate dissolved oxygen.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 59–77 °F (15–25 °C) for active feeding; koi tolerate winter temperatures near freezing with reduced feeding.</li>
<li><strong>pH:</strong> 7.0–8.5.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> Below 40 ppm.</li>
<li><strong>KH:</strong> 100+ ppm to maintain pH stability.</li>
</ul>

<h2 id="diet">Diet & Colour Enhancement</h2>
<p>Standard koi nutrition applies, with colour-specific considerations:</p>
<ul>
<li><strong>Staple:</strong> High-quality koi pellets with 30–40% protein (spring through autumn). Reduce to wheatgerm-based, lower-protein feed as water temperature drops below 60 °F (15 °C).</li>
<li><strong>Colour enhancement:</strong> Spirulina and astaxanthin supplements enhance hi intensity. Feed colour-enhancing food 2–3 times weekly during the growing season. Avoid over-supplementation, which can cause hi to bleed into the shiroji — a serious fault.</li>
<li><strong>Supplements:</strong> Fresh fruit (orange slices, watermelon), blanched lettuce, and shelled peas as treats.</li>
</ul>
<p>An important note for Sanke specifically: colour enhancers that intensify red can also cause a yellowish tinge in the shiroji if overused. Balance colour-enhancing food with standard growth food to maintain pure white skin quality.</p>

<h2 id="pattern-development">Pattern Development Over Time</h2>
<p>Sanke patterns evolve significantly as the fish grows:</p>
<ul>
<li><strong>Tosai (year one):</strong> Hi is usually well-established but may be light or orange. Sumi may be faint, spotty, or nearly invisible — this is normal. Many quality Sanke look like Kohaku at this stage.</li>
<li><strong>Nisai (year two):</strong> Hi deepens to crimson. Sumi begins to emerge and define itself. The overall pattern starts to take shape.</li>
<li><strong>Sansai (year three):</strong> The fish begins to express its mature pattern. Sumi solidifies into defined spots. Body shape approaches adult proportions.</li>
<li><strong>Year four and beyond:</strong> Pattern continues to refine. In well-bred Sanke, the sumi continues to develop and improve with age, sometimes not reaching full expression until 5–7 years old.</li>
</ul>
<p>This extended development timeline is why experienced koi keepers often say "you can't judge a Sanke until it's three years old." Patience is rewarded.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'How do you tell a Sanke from a Showa?',
        answer:
          'The quickest method: look at the head. If the head has black (sumi) markings, it is a Showa. If the head is only white and red (no black), it is a Sanke. Additionally, Sanke sumi appears as discrete accent spots on a predominantly white body, while Showa sumi wraps around the body as a dominant element. The overall impression of a Sanke is "white fish with red and black decoration," while a Showa reads as "black fish with red and white breaking through."',
      },
      {
        question: 'How much does a quality Sanke cost?',
        answer:
          'Pet-quality Sanke from domestic breeders start at £20–£50. Pond-quality Japanese-bred Sanke range from £100–£500. Show-quality Sanke from prestigious Japanese breeders (Sakai, Dainichi, Matsunosuke) range from £500 to £10,000+. Grand Champion-calibre Sanke from the top bloodlines can exceed £50,000–£100,000+.',
      },
      {
        question: 'Will my Sanke\'s pattern change?',
        answer:
          'Yes — koi patterns continue to develop throughout the fish\'s life. Hi (red) typically deepens with age and good nutrition. Sumi (black) is the most variable element — it may emerge, intensify, shift position, or occasionally fade over years. This pattern evolution is a fundamental aspect of koi keeping and part of the hobby\'s appeal. Well-bred Sanke from quality bloodlines generally develop improved patterns with age.',
      },
    ],
    sources: [
      {
        title: 'Cyprinus rubrofuscus (Lacepède, 1803)',
        url: 'https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html',
        publisher: 'FishBase',
      },
      {
        title: 'Koi Varieties — Japanese Nishikigoi',
        url: 'https://www.koiphen.com/forums/threads/sanke.html',
        publisher: 'Koiphen Forum (Community Reference)',
      },
    ],
    relatedSlugs: [
      'kohaku-koi',
      'koi-fish',
      'ranchu-goldfish',
    ],
  },

  // ─────────────────────────────────────────────
  // 46. Showa Koi
  // ─────────────────────────────────────────────
  {
    title: 'Showa Koi: Complete Species & Care Guide',
    slug: 'showa-koi',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/showa-koi-hero.jpg',
    heroImageAlt:
      'Showa Sanshoku koi displaying bold black (sumi), red (hi), and white (shiroji) markings in a crystal-clear pond',
    metaTitle:
      'Showa Koi (Cyprinus rubrofuscus): Complete Guide — Pattern, Selection & Care | The Fish Collection',
    metaDescription:
      'Complete Showa Koi guide — pattern appreciation, Showa vs Sanke, care & selection criteria. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'What is a Showa Koi?',
    quickAnswer:
      'The Showa Sanshoku (Showa) is one of the "Big Three" Gosanke koi varieties. It features a black (sumi) base colour with red (hi) and white (shiroji) markings — including sumi on the head. The key distinction from Sanke is that Showa has a black base and always displays sumi on the head. Care requirements are identical to all koi: 1,000+ gallon pond, excellent filtration, standard koi water parameters.',
    summary:
      'The Showa Sanshoku — commonly called Showa — completes the trio of Gosanke varieties alongside Kohaku and Sanke. Developed in the Showa era (1926–1989), the Showa is the boldest and most dramatic of the three, featuring a black body base (sumi) with striking red (hi) and white (shiroji) markings that create a powerful, high-contrast appearance. While early Showa were predominantly black with small patches of red and white, modern breeding has produced lighter, more balanced fish that rival Sanke in elegance while retaining the Showa\'s characteristic dramatic impact.',
    scientificName: 'Cyprinus rubrofuscus',
    category: 'koi',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cyprinus rubrofuscus (Showa Sanshoku variety)' },
      { label: 'Max Size', value: '60–90 cm (24–36 in)' },
      { label: 'Pond Size', value: '1,000 gallons (3,785 L) minimum' },
      { label: 'Temperature', value: '59–77 °F (15–25 °C)' },
      { label: 'pH', value: '7.0–8.5' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '25–35+ years' },
      { label: 'Diet', value: 'Omnivore — koi pellets, vegetables, treats' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'pattern-appreciation', text: 'Pattern Appreciation', level: 2 },
      { id: 'showa-vs-sanke', text: 'Showa vs Sanke', level: 2 },
      { id: 'modern-vs-traditional', text: 'Modern vs Traditional Showa', level: 2 },
      { id: 'selection-criteria', text: 'Selection Criteria', level: 2 },
      { id: 'care-requirements', text: 'Care Requirements', level: 2 },
      { id: 'pattern-development', text: 'Pattern Development', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Showa was created by Jukichi Hoshino in 1927 by crossing a Ki Utsuri (black-and-yellow koi) with a Kohaku (red-and-white koi). The early results were crude — predominantly black fish with small, irregularly placed red and white patches. But the potential was recognised, and decades of selective breeding produced the modern Showa: a balanced tri-colour koi where black, red, and white each contribute roughly equal visual weight, creating a powerful, dramatic pattern that is often described as "painted" or "artistic."</p>
<p>The Showa's dramatic appearance has made it increasingly popular in international koi shows. A well-balanced modern Showa with deep sumi, vivid hi, and clean shiroji is among the most visually striking fish in the koi world — and top-quality specimens from breeders like Dainichi, Matsunosuke, and Omosako regularly win Grand Champion titles at the highest levels of competition.</p>

<h2 id="pattern-appreciation">Pattern Appreciation</h2>
<p>The Showa's three-colour palette creates the most complex pattern dynamics of any koi variety:</p>
<p><strong>Sumi (black):</strong> The foundation of the Showa. Sumi should be deep, glossy, lacquer-black — not grey or brownish. It wraps around the body in bold, dramatic patches and crucially appears on the head (a defining Showa characteristic). Quality sumi has sharp, clean edges (kiwa) and appears three-dimensional — as if painted onto the fish.</p>
<p><strong>Hi (red):</strong> Deep, uniform crimson, identical in quality standards to Kohaku and Sanke. Hi should be well-distributed, with clean edges where it meets both sumi and shiroji.</p>
<p><strong>Shiroji (white):</strong> Clean, snow-white areas that provide visual breathing room between the hi and sumi. The quality and placement of shiroji is what separates a muddy, confusing Showa from an elegant, readable one.</p>
<p>The ideal Showa pattern features a bold, dramatic head with all three colours represented (often called "menware" — a lightning-bolt pattern of sumi splitting the head). The body should display a balanced interplay of the three colours, with each element complementing the others. A common judging principle: a great Showa should look balanced from any angle — front, side, and top view.</p>

<h2 id="showa-vs-sanke">Showa vs Sanke</h2>
<p>The definitive identification points:</p>
<ul>
<li><strong>Head sumi:</strong> Showa always has black on the head; Sanke never does.</li>
<li><strong>Sumi distribution:</strong> Showa sumi wraps around the body in large, bold patches. Sanke sumi appears as smaller, discrete accent spots.</li>
<li><strong>Base colour perception:</strong> Showa reads as "black fish with red and white added." Sanke reads as "white fish with red and black added."</li>
<li><strong>Pectoral fins:</strong> Showa pectoral fins have motoguro — solid black at the base of the fin that radiates outward. Sanke pectoral fins have tejima — black stripes within the fin. This is one of the most reliable identification methods.</li>
</ul>

<h2 id="modern-vs-traditional">Modern vs Traditional Showa</h2>
<p>Showa have evolved significantly since their creation:</p>
<ul>
<li><strong>Traditional (old-style) Showa:</strong> Predominantly black — 60–70% of the body covered in sumi, with smaller patches of red and white. Bold, dramatic, but can appear "heavy" or unbalanced. The original Showa aesthetic.</li>
<li><strong>Kindai (modern) Showa:</strong> More balanced — roughly equal proportions of black, red, and white. Lighter, more elegant, and often compared favourably with Sanke for aesthetic refinement. The dominant style in contemporary koi shows.</li>
</ul>
<p>Both styles have advocates, and judging standards accommodate both. However, the trend at major competitions favours the modern, balanced Showa — which has contributed to the variety's growing popularity relative to Sanke in recent decades.</p>

<h2 id="selection-criteria">Selection Criteria</h2>
<ul>
<li><strong>Balance:</strong> The three colours should be evenly distributed and visually balanced from all angles.</li>
<li><strong>Sumi quality:</strong> Deep, glossy black with sharp edges. Avoid fish with grey or brownish sumi.</li>
<li><strong>Head pattern:</strong> A striking menware (lightning) pattern or bold head sumi with all three colours represented on the head.</li>
<li><strong>Motoguro:</strong> Well-defined black pectoral fin joints — a quality indicator.</li>
<li><strong>Body conformation:</strong> Strong, well-proportioned torpedo shape.</li>
<li><strong>Skin quality:</strong> Lustrous sheen across all three colour elements.</li>
</ul>

<h2 id="care-requirements">Care Requirements</h2>
<p>Showa care is identical to all koi — they share the same species and have no variety-specific needs. See our <a href="/species/koi-fish">Koi Fish Complete Guide</a> for comprehensive care instructions. The summary: 1,000+ gallon pond, robust multi-stage filtration, standard koi water parameters (59–77 °F, pH 7.0–8.5), and a high-quality pellet diet supplemented with vegetables and colour-enhancing foods.</p>
<p>One colour-specific note: Showa sumi development is particularly temperature-sensitive. Exposure to cooler water (55–65 °F / 13–18 °C) during autumn and winter helps sumi darken and solidify. Koi keepers in warmer climates sometimes struggle to develop the deepest sumi on their Showa because the water never gets cold enough to trigger maximum melanin production.</p>

<h2 id="pattern-development">Pattern Development</h2>
<p>Showa are the most dramatically variable of the Gosanke as they develop:</p>
<ul>
<li><strong>Tosai (year one):</strong> Showa fry and tosai are often overwhelmingly black. Hi and shiroji are present but may be muted or patchy. The fish looks nothing like its eventual adult pattern.</li>
<li><strong>Nisai (year two):</strong> Sumi begins to recede and define itself. Hi intensifies. Shiroji cleans up. The pattern begins to emerge from what was previously a mostly-black fish.</li>
<li><strong>Sansai to Yonsai (years three to four):</strong> The mature pattern takes shape. Sumi solidifies into defined patches. The balance between the three colours becomes apparent.</li>
<li><strong>Year five and beyond:</strong> Continued refinement. Quality Showa improve dramatically with age as sumi deepens and the pattern achieves its final expression.</li>
</ul>
<p>The extended development timeline means buying young Showa is inherently speculative — the best breeders can predict development based on bloodline, but even they acknowledge the uncertainty. This unpredictability is part of the Showa's appeal for many hobbyists.</p>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Is a Showa or Sanke better?',
        answer:
          'Neither is objectively better — it is a matter of personal preference. Sanke tend to be more elegant and refined; Showa are bolder and more dramatic. In competition, both varieties win at the highest levels. Many serious koi keepers eventually keep both. Start with whichever pattern appeals to you more, and let your taste evolve over time.',
      },
      {
        question: 'Why is my Showa mostly black?',
        answer:
          'Young Showa (under 2 years) are often predominantly black, with hi and shiroji still developing. This is completely normal — the balance between the three colours emerges over years as sumi recedes and defines itself while hi and shiroji expand. If your Showa is a tosai or nisai, be patient — the pattern will continue to evolve dramatically.',
      },
      {
        question: 'How do I make my Showa\'s sumi darker?',
        answer:
          'Sumi depth is primarily genetic, but environmental factors help: cooler water temperatures (seasonal exposure to 55–65 °F promotes melanin production), clean water with low nitrate, a balanced diet without excessive colour enhancers (which boost red at the expense of black), and adequate depth. Sumi also naturally deepens with age in well-bred Showa — patience is the most effective "treatment."',
      },
    ],
    sources: [
      {
        title: 'Cyprinus rubrofuscus (Lacepède, 1803)',
        url: 'https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html',
        publisher: 'FishBase',
      },
      {
        title: 'Showa Sanshoku: History and Development',
        url: 'https://doi.org/10.1111/j.1749-7345.2003.tb00063.x',
        publisher: 'Journal of the World Aquaculture Society',
      },
    ],
    relatedSlugs: [
      'sanke-koi',
      'kohaku-koi',
      'koi-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 47. Butterfly Koi
  // ─────────────────────────────────────────────
  {
    title: 'Butterfly Koi: Complete Species & Care Guide',
    slug: 'butterfly-koi',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/butterfly-koi-hero.jpg',
    heroImageAlt:
      'Butterfly Koi with dramatically elongated, flowing fins swimming gracefully in a garden pond',
    metaTitle:
      'Butterfly Koi (Cyprinus rubrofuscus): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Butterfly Koi guide — long-fin genetics, pond care, varieties & the traditionalist debate. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'What is a Butterfly Koi?',
    quickAnswer:
      'Butterfly Koi (also called Dragon Koi or Long-Fin Koi) are koi with dramatically elongated, flowing fins and barbels, created by crossing traditional Nishikigoi with wild Asian carp. They are available in all standard koi colour varieties. Care is identical to regular koi — 1,000+ gallon pond, standard water parameters, high-quality pellet diet. Butterfly Koi are not recognised in traditional Japanese koi shows but are hugely popular in the Western hobby.',
    summary:
      'Butterfly Koi — known in Japan as Hirenaga Koi and in the Western hobby as Dragon Koi or Long-Fin Koi — are a variety of ornamental koi distinguished by their dramatically elongated, flowing fins and barbels (whiskers). Created in the 1980s by crossing traditional Japanese Nishikigoi with a wild Indonesian long-finned carp, Butterfly Koi have become enormously popular in the Western pond-keeping community for their graceful, ethereal appearance. Their status in the koi world remains controversial: Japanese traditionalists do not recognise them as true Nishikigoi, and they are excluded from most traditional koi competitions. This divide has not diminished their popularity one bit.',
    scientificName: 'Cyprinus rubrofuscus',
    category: 'koi',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cyprinus rubrofuscus (Butterfly/Long-fin variety)' },
      { label: 'Max Size', value: '60–90 cm (24–36 in) body; fins extend further' },
      { label: 'Pond Size', value: '1,000 gallons (3,785 L) minimum' },
      { label: 'Temperature', value: '59–77 °F (15–25 °C)' },
      { label: 'pH', value: '7.0–8.5' },
      { label: 'Care Level', value: 'Beginner to Intermediate' },
      { label: 'Lifespan', value: '25–35+ years' },
      { label: 'Diet', value: 'Omnivore — koi pellets, vegetables, treats' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'origins', text: 'Origins & Genetics', level: 2 },
      { id: 'appearance', text: 'Appearance & Varieties', level: 2 },
      { id: 'the-debate', text: 'The Traditionalist Debate', level: 2 },
      { id: 'pond-requirements', text: 'Pond Requirements', level: 2 },
      { id: 'care', text: 'Care & Feeding', level: 2 },
      { id: 'fin-care', text: 'Fin Health & Maintenance', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Butterfly Koi story begins in the 1980s, when a population of wild carp with unusually long fins was discovered in Indonesia. Recognising the potential, breeders (primarily in Japan and the United States) crossed these long-finned carp with established Japanese koi varieties. The result was fish that combined the colour patterns and body shape of Nishikigoi with dramatically elongated finnage — pectoral, ventral, dorsal, anal, and caudal fins that flow and undulate like ribbons as the fish swims.</p>
<p>The effect is striking: a Butterfly Koi swimming through a clear pond appears to glide effortlessly, its flowing fins trailing behind like silk scarves in a breeze. This ethereal quality — combined with the full spectrum of traditional koi colour varieties — has made Butterfly Koi the fastest-growing segment of the Western koi market.</p>

<h2 id="origins">Origins & Genetics</h2>
<p>The long-fin trait in Butterfly Koi is a genetically dominant characteristic inherited from the wild Indonesian carp parent. When a long-fin fish is crossed with a standard-fin koi, approximately 50% of the offspring display the long-fin phenotype. This makes the trait relatively easy to breed into any koi colour variety, which is why Butterfly Koi are now available in virtually every pattern: Butterfly Kohaku, Butterfly Sanke, Butterfly Showa, Butterfly Ogon, Butterfly Hariwake, and many more.</p>
<p>The long-fin gene also affects the barbels (the whisker-like sensory organs on either side of the mouth), which grow much longer and more prominent than standard koi barbels. In mature Butterfly Koi, the barbels can extend 5–10 cm (2–4 in) and curl gracefully as the fish moves.</p>
<p>Fin length is somewhat variable even among Butterfly Koi — some fish develop moderate fin extensions, while others develop dramatically elongated finnage that can equal or exceed their body length. Breeders select for maximum fin length and symmetry, but environmental factors (water quality, temperature, nutrition, and pond size) also influence fin development.</p>

<h2 id="appearance">Appearance & Varieties</h2>
<p>Butterfly Koi are available in every colour variety found in standard koi:</p>
<ul>
<li><strong>Butterfly Kohaku:</strong> Red and white with flowing fins. Perhaps the most popular variety.</li>
<li><strong>Butterfly Ogon:</strong> Solid metallic gold or platinum with long fins — stunningly elegant.</li>
<li><strong>Butterfly Hariwake:</strong> Platinum base with metallic orange or gold pattern.</li>
<li><strong>Butterfly Sanke / Showa:</strong> Tri-colour varieties with the long-fin trait.</li>
<li><strong>Butterfly Soragoi:</strong> Solid grey-blue with long fins — understated and beautiful.</li>
<li><strong>Ghost Butterfly:</strong> Translucent/metallic single-colour varieties with ethereal fin extensions.</li>
</ul>
<p>The most dramatic visual impact tends to come from metallic varieties (Ogon, Hariwake, Platinum) and from fish with very long, symmetrical fin extensions. The combination of metallic shimmer and flowing finnage creates an almost otherworldly appearance in clear water.</p>

<h2 id="the-debate">The Traditionalist Debate</h2>
<p>Butterfly Koi occupy a unique position in the koi world: enormously popular with hobbyists, yet firmly rejected by the Japanese koi establishment. The All Japan Nishikigoi Promotion Association and most traditional Japanese koi shows do not recognise Butterfly Koi as true Nishikigoi, and they are excluded from competition. The reasoning: Nishikigoi are defined by specific body shape, scale structure, and proportion standards that Butterfly Koi do not meet. The long-fin gene introduces "foreign" genetics from wild carp, diluting the centuries of selective breeding that define each traditional variety.</p>
<p>Western koi shows have taken a more inclusive approach — many now include Butterfly categories alongside traditional varieties. The ZNA (Zen Nippon Airinkai — the global Japanese koi keeping association) permits Butterfly Koi in non-competitive exhibition categories.</p>
<p>The practical takeaway for buyers: if you are interested in competitive koi showing at the highest levels, standard-fin koi are the path. If you want beautiful fish for your pond that you and your family will enjoy, Butterfly Koi are spectacular and there is no practical disadvantage to choosing them.</p>

<h2 id="pond-requirements">Pond Requirements</h2>
<p>Butterfly Koi have identical pond requirements to standard koi: 1,000+ gallons (3,785+ L) minimum, 4+ feet depth, multi-stage filtration, and adequate aeration. See our <a href="/species/koi-fish">Koi Fish Complete Guide</a> for comprehensive pond setup instructions.</p>
<p>One consideration specific to Butterfly Koi: their elongated fins are more susceptible to damage from sharp-edged rocks, rough pond liners, or aggressive tank mates. Ensure your pond's surfaces are smooth, avoid sharp-edged rockwork within the fish's swimming path, and monitor for fin damage from pond predators (herons, cats) or bullying from other koi.</p>

<h2 id="care">Care & Feeding</h2>
<p>Identical to standard koi care. High-quality koi pellets (30–40% protein during the growing season, lower-protein wheatgerm food below 60 °F), supplemented with fresh vegetables and colour-enhancing foods. Water parameters: 59–77 °F (15–25 °C), pH 7.0–8.5, ammonia/nitrite 0 ppm.</p>
<p>Some keepers report that Butterfly Koi tend to be slightly more cold-hardy and disease-resistant than highly line-bred standard varieties — likely due to the hybrid vigour (heterosis) introduced by the wild carp genetics. While anecdotal, this robustness is consistent with genetics principles and is another reason Butterfly Koi are popular with beginners.</p>

<h2 id="fin-care">Fin Health & Maintenance</h2>
<p>The flowing fins are the Butterfly Koi's defining feature and the aspect of care that requires extra attention:</p>
<ul>
<li><strong>Water quality:</strong> Poor water quality causes fin erosion faster in long-finned varieties because there is simply more fin tissue to be affected. Maintain low nitrate (<40 ppm, ideally <20) and zero ammonia/nitrite.</li>
<li><strong>Avoid fin damage:</strong> Remove any sharp objects from the pond. Check for fin tears during regular health inspections — minor tears heal naturally in clean water, but significant damage can become infected.</li>
<li><strong>Parasites:</strong> Fin parasites (flukes, lice) are more problematic on long-finned fish. Quarantine new arrivals and treat at the first sign of flashing, clamped fins, or visible parasites.</li>
<li><strong>Fin growth:</strong> Unlike some tropical long-finned fish whose fins stop growing, Butterfly Koi fins continue to elongate throughout the fish's life. Mature fish (5+ years) can develop truly spectacular finnage if maintained in optimal conditions.</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Are Butterfly Koi real koi?',
        answer:
          'Butterfly Koi are the same species (Cyprinus rubrofuscus) as standard Nishikigoi — the long-fin trait was introduced from a wild variant of the same or closely related species. They are biologically "real koi" in every sense. The debate is about breed purity: Japanese koi traditionalists do not consider them true Nishikigoi because the long-fin genetics come from outside the established koi breeding lineages. This is a cultural/aesthetic distinction, not a biological one.',
      },
      {
        question: 'Do Butterfly Koi get as big as regular koi?',
        answer:
          'Yes — Butterfly Koi reach the same body size as standard koi (60–90 cm / 24–36 in body length), with the fins adding substantial additional length. A mature Butterfly Koi with fully developed fins can have an overall length (nose to fin tip) exceeding 100 cm (40 in). They require the same pond size as standard koi.',
      },
      {
        question: 'Can Butterfly Koi breed with regular koi?',
        answer:
          'Yes — they are the same species and interbreed freely. When a Butterfly Koi breeds with a standard-fin koi, approximately 50% of the offspring will display the long-fin phenotype and 50% will have standard fins. This is because the long-fin gene is dominant (only one copy needed for expression). Butterfly × Butterfly crosses produce approximately 75% long-fin and 25% standard-fin offspring.',
      },
    ],
    sources: [
      {
        title: 'Cyprinus rubrofuscus (Lacepède, 1803)',
        url: 'https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html',
        publisher: 'FishBase',
      },
      {
        title: 'Ornamental Carp Genetics: Long-Fin Inheritance Patterns',
        url: 'https://doi.org/10.1111/jai.12289',
        publisher: 'Journal of Applied Ichthyology',
      },
    ],
    relatedSlugs: [
      'kohaku-koi',
      'koi-fish',
      'sanke-koi',
    ],
  },

  // ─────────────────────────────────────────────
  // 48. Snowflake Moray Eel
  // ─────────────────────────────────────────────
  {
    title: 'Snowflake Moray Eel: Complete Species & Care Guide',
    slug: 'snowflake-moray-eel',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/snowflake-moray-eel-hero.jpg',
    heroImageAlt:
      'Snowflake Moray Eel emerging from a rocky crevice, displaying its distinctive white and black patterning',
    metaTitle:
      'Snowflake Moray Eel (Echidna nebulosa): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Snowflake Moray Eel guide — tank setup, feeding, escape prevention & compatibility. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'Are Snowflake Moray Eels good for home aquariums?',
    quickAnswer:
      'Snowflake Moray Eels are one of the best moray species for home aquariums. They reach a manageable 60–75 cm (24–30 in), have blunt, pebble-like teeth adapted for crushing crustaceans (making them less dangerous to handle than sharp-toothed morays), and adapt well to captive life. They need a 75+ gallon marine tank with excellent rockwork for hiding, a secure lid, and a diet of frozen shrimp, squid, and silversides.',
    summary:
      'The Snowflake Moray Eel (Echidna nebulosa) is widely regarded as the best "starter moray" for marine aquarists. Its manageable size (60–75 cm), relatively docile temperament, blunt crustacean-crushing teeth, and striking black-white-yellow patterning make it one of the most popular eel species in the marine hobby. Found across the Indo-Pacific on shallow reef flats and rocky intertidal zones, the Snowflake Moray is hardy, disease-resistant, and adapts readily to captive diets. This guide covers everything you need to know about keeping this charismatic eel.',
    scientificName: 'Echidna nebulosa',
    category: 'eel',
    keyFacts: [
      { label: 'Scientific Name', value: 'Echidna nebulosa' },
      { label: 'Max Size', value: '75 cm (30 in)' },
      { label: 'Tank Size', value: '75 gallons (284 L) minimum' },
      { label: 'Temperature', value: '75–82 °F (24–28 °C)' },
      { label: 'pH', value: '8.1–8.4' },
      { label: 'Care Level', value: 'Beginner to Intermediate (marine)' },
      { label: 'Lifespan', value: '10–15+ years' },
      { label: 'Diet', value: 'Carnivore — shrimp, squid, silversides' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'appearance', text: 'Appearance', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'escape-prevention', text: 'Escape Prevention', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour & Tank Mates', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Snowflake Moray Eel has earned its reputation as the most beginner-friendly moray species through a combination of favourable traits: it stays relatively small (most captive specimens top out at 60 cm / 24 in), has blunt, molar-like teeth designed for crushing crustacean shells (rather than the sharp, recurved teeth of fish-eating morays), tolerates a wide range of marine water conditions, and adapts readily to frozen food. These characteristics make it accessible to marine aquarists who might be intimidated by larger, more aggressive moray species.</p>
<p>In the wild, <em>Echidna nebulosa</em> inhabits shallow reef flats, tide pools, and rocky intertidal zones throughout the Indo-Pacific — from the Red Sea and East Africa to Hawaii and French Polynesia. This broad distribution across variable environments has produced a naturally hardy, adaptable species.</p>

<h2 id="appearance">Appearance</h2>
<p>The Snowflake Moray's common name derives from its colour pattern: a white or cream base covered with a complex pattern of black, brown, and yellow markings that resemble snowflakes or frost patterns. Key features:</p>
<ul>
<li><strong>Body colour:</strong> White to cream base with bold black or dark brown reticulated markings.</li>
<li><strong>Yellow accents:</strong> Many specimens display yellow-golden highlights within the dark markings and around the face, particularly around the nostrils.</li>
<li><strong>Eyes:</strong> Small, with a distinctive yellowish ring.</li>
<li><strong>Body shape:</strong> Typical moray morphology — elongated, muscular, serpentine body with no pectoral or ventral fins. Dorsal and anal fins are reduced to a continuous fin fold along the back and underside.</li>
<li><strong>Teeth:</strong> Blunt, pebble-like — visible when the eel gapes (which is respiratory behaviour, not aggression). The dental structure is adapted for crushing hard-shelled prey.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Tank size:</strong> 75 gallons (284 L) minimum. While Snowflake Morays spend most time hiding in rockwork, they need adequate space to extend and move when active (typically at dawn, dusk, and night).</li>
<li><strong>Rockwork:</strong> Extensive — the eel needs multiple caves, crevices, and hiding spots. PVC pipe sections hidden within the rockwork provide additional retreats. The eel will choose a "home cave" and return to it consistently.</li>
<li><strong>Substrate:</strong> Fine sand or crushed coral. Morays sometimes burrow partially into substrate.</li>
<li><strong>Filtration:</strong> Standard marine filtration with protein skimmer. Morays produce significant waste during and after feeding, so slightly over-specifying filtration is wise.</li>
</ul>

<h3 id="escape-prevention">Escape Prevention</h3>
<p>This deserves its own section because moray eels are notorious escape artists. Snowflake Morays are particularly determined:</p>
<ul>
<li><strong>Lid:</strong> Completely sealed. Every gap, cable hole, overflow opening, and filter intake must be covered. Use egg crate, mesh, or foam to block gaps around plumbing and equipment.</li>
<li><strong>Overflow guards:</strong> If using a sump system, cover the overflow with mesh fine enough that the eel cannot enter.</li>
<li><strong>Vigilance:</strong> Check lid security regularly. Morays are strong and can push lightweight lids aside.</li>
</ul>
<p>A Snowflake Moray that escapes the tank can survive for hours out of water (their skin produces a protective mucus coating, and they can breathe through their skin to some extent). If you find your eel on the floor, return it to the tank immediately — many survive if found within a few hours.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 75–82 °F (24–28 °C).</li>
<li><strong>pH:</strong> 8.1–8.4.</li>
<li><strong>Salinity:</strong> 1.024–1.026 SG.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
<li><strong>Nitrate:</strong> Below 20 ppm.</li>
</ul>
<p>Snowflake Morays are more tolerant of suboptimal water conditions than many marine fish, but this should not be used as an excuse for poor maintenance. Clean water extends lifespan and reduces disease risk.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Snowflake Morays are carnivores with a crustacean-heavy natural diet. In captivity:</p>
<ul>
<li><strong>Staple foods:</strong> Frozen shrimp (whole, shell-on — the shell provides roughage and calcium), frozen squid, frozen krill, and frozen silversides.</li>
<li><strong>Feeding method:</strong> Use long feeding tongs or a feeding stick to present food near the eel's cave entrance. Morays have excellent sense of smell but poor vision — waving the food slowly near their cave triggers the feeding response.</li>
<li><strong>Frequency:</strong> 2–3 times per week for adults. Morays have slow metabolisms and overfeeding leads to poor water quality.</li>
<li><strong>Vitamin supplementation:</strong> Soak frozen food in a vitamin supplement (Selcon, Vitachem) before offering to prevent nutritional deficiencies.</li>
</ul>

<h2 id="behaviour">Behaviour & Tank Mates</h2>
<p>Snowflake Morays are primarily nocturnal but adapt to daytime feeding schedules in captivity. During the day, they rest in caves with their head protruding — the classic moray "guard" posture. The rhythmic opening and closing of the mouth is respiratory (forcing water over the gills) and is not a threat display.</p>
<p>Despite their dramatic appearance, Snowflake Morays are among the more peaceful moray species. Their blunt teeth are designed for crustaceans, not fish, so they are less likely to prey on tank mates than sharp-toothed species. However, they will eat any crustacean in the tank (shrimp, crabs, lobsters, hermit crabs) and may attempt to eat very small fish.</p>
<p>Suitable tank mates include:</p>
<ul>
<li>Medium to large robust marine fish: tangs, large wrasses, triggerfish, lionfish, pufferfish</li>
<li>Avoid: small fish (chromis, gobies, blennies), all crustaceans (will be eaten), other moray species (in tanks under 125 gallons)</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Will a Snowflake Moray bite me?',
        answer:
          'Snowflake Morays can bite if they mistake your fingers for food during feeding, or if they feel threatened. However, their blunt, crushing teeth are designed for crustacean shells and do not cause the severe lacerations associated with sharp-toothed moray species. A Snowflake Moray bite is painful and may cause bruising but is unlikely to cause serious injury. Always use feeding tongs rather than hand-feeding to avoid accidental bites.',
      },
      {
        question: 'Can Snowflake Morays live in freshwater?',
        answer:
          'No — Snowflake Morays are marine fish that require saltwater (SG 1.024–1.026). They are sometimes confused with the Freshwater "Snowflake Eel" (Gymnothorax tile), which is a different species that can tolerate brackish conditions. Echidna nebulosa is strictly marine and will not survive in fresh or brackish water.',
      },
      {
        question: 'How long do Snowflake Morays live?',
        answer:
          'In captivity, Snowflake Moray Eels typically live 10–15 years with proper care. Some specimens in public aquaria have exceeded 20 years. Lifespan is strongly influenced by water quality, diet, and stress levels. A well-maintained tank with regular feeding and stable water parameters supports the longest lifespan.',
      },
    ],
    sources: [
      {
        title: 'Echidna nebulosa (Ahl, 1789)',
        url: 'https://www.fishbase.se/summary/Echidna-nebulosa.html',
        publisher: 'FishBase',
      },
      {
        title: 'Moray Eels of the World: Biology, Diversity and Conservation',
        url: 'https://doi.org/10.1007/978-3-642-28024-2',
        publisher: 'Springer',
      },
    ],
    relatedSlugs: [
      'fire-eel',
      'dragon-goby',
      'wolf-fish',
    ],
  },

  // ─────────────────────────────────────────────
  // 49. Tiger Loach
  // ─────────────────────────────────────────────
  {
    title: 'Tiger Loach: Complete Species & Care Guide',
    slug: 'tiger-loach',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/tiger-loach-hero.jpg',
    heroImageAlt:
      'Tiger Loach (Syncrossus hymenophysa) displaying bold dark vertical bands on a golden body',
    metaTitle:
      'Tiger Loach (Syncrossus hymenophysa): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Tiger Loach care guide — behaviour, tank setup, water parameters & compatibility. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for a Tiger Loach?',
    quickAnswer:
      'Tiger Loaches need a minimum 75-gallon tank (they reach 25–30 cm / 10–12 in), temperature of 77–86 °F (25–30 °C), pH 6.0–7.5, and a sandy substrate for burrowing. They are semi-aggressive and territorial — keep in groups of 5+ to distribute aggression. Diet includes sinking pellets, frozen foods, and snails. They require excellent water quality and moderate to strong current.',
    summary:
      'The Tiger Loach (Syncrossus hymenophysa) is a large, boldly patterned member of the Botiidae family native to the rivers and streams of Southeast Asia (Sumatra, Borneo, and the Malay Peninsula). Growing to 25–30 cm (10–12 in), this striking fish displays bold dark vertical bars on a golden-tan body — the "tiger stripes" that give it its common name. While undeniably beautiful, Tiger Loaches are more aggressive and demanding than their popular cousin the Clown Loach, requiring larger tanks, specific social structures, and experienced husbandry.',
    scientificName: 'Syncrossus hymenophysa',
    category: 'loach',
    keyFacts: [
      { label: 'Scientific Name', value: 'Syncrossus hymenophysa' },
      { label: 'Max Size', value: '30 cm (12 in)' },
      { label: 'Tank Size', value: '75 gallons (284 L) minimum' },
      { label: 'Temperature', value: '77–86 °F (25–30 °C)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Omnivore — sinking foods, frozen, snails' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'appearance', text: 'Appearance', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour & Social Structure', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Tiger Loach belongs to the genus <em>Syncrossus</em> — a group of large, assertive botiid loaches that include some of the most impressive freshwater fish in the hobby. Often confused with the more commonly available Clown Loach (<em>Chromobotia macracanthus</em>), the Tiger Loach differs in several important ways: it is more aggressive, more territorial, grows slightly larger, and demands warmer water. These differences make it a fish for experienced keepers who appreciate its bold pattern and dynamic behaviour.</p>

<h2 id="appearance">Appearance</h2>
<p>The Tiger Loach is a handsome fish with a distinctive colour pattern:</p>
<ul>
<li><strong>Body colour:</strong> Golden to pale bronze base.</li>
<li><strong>Pattern:</strong> Bold dark brown-to-black vertical bars that extend from the dorsal surface down the flanks — the "tiger stripes." The bars are typically broader than the interspaces, creating a high-contrast pattern.</li>
<li><strong>Body shape:</strong> Laterally compressed, torpedo-shaped — more streamlined than the Clown Loach.</li>
<li><strong>Sub-orbital spine:</strong> Like all botiid loaches, Tiger Loaches have a retractable spine below each eye. This spine is used defensively and can snag nets and injure handlers — use a container rather than a net when moving these fish.</li>
</ul>
<p>The related <em>Syncrossus beauforti</em> (Beaufort's Loach) is sometimes sold as "Tiger Loach" as well. The two species are similar in care requirements but have slightly different patterning.</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Tank size:</strong> 75 gallons (284 L) minimum for a group of 5; 125+ gallons for a group of 8+.</li>
<li><strong>Substrate:</strong> Fine sand is essential — Tiger Loaches dig and sift substrate when foraging, and coarse gravel can injure their sensitive barbels.</li>
<li><strong>Hiding spots:</strong> Abundant caves, driftwood, PVC tubes, and dense planting. Each fish needs its own hiding spot to establish territory — insufficient hiding places increase aggression.</li>
<li><strong>Current:</strong> Moderate to strong. Tiger Loaches come from flowing rivers and streams and appreciate current from a powerhead or canister spray bar.</li>
<li><strong>Lighting:</strong> Moderate to subdued — these fish are most active in lower light conditions.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 77–86 °F (25–30 °C) — warmer than most community tanks. This is one of the most important parameters to get right.</li>
<li><strong>pH:</strong> 6.0–7.5 (slightly acidic preferred).</li>
<li><strong>GH:</strong> 5–12 dGH.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm — loaches are sensitive to water quality.</li>
<li><strong>Nitrate:</strong> Below 20 ppm.</li>
</ul>
<p>Tiger Loaches are highly sensitive to medication — particularly copper-based treatments and formalin. Avoid these in tanks containing loaches. Use half-dose protocols if treatment is absolutely necessary, and always have a plan B (separate hospital tank).</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<ul>
<li><strong>Staple:</strong> Sinking pellets and wafers (Hikari Sinking Wafers, Northfin Kelp Wafers, Bug Bites Bottom Feeder).</li>
<li><strong>Protein:</strong> Frozen bloodworms, brine shrimp, mysis shrimp — offered 3–4 times weekly.</li>
<li><strong>Snails:</strong> Tiger Loaches are excellent snail controllers. They crack and consume snails of all sizes with their powerful pharyngeal teeth.</li>
<li><strong>Vegetables:</strong> Blanched zucchini, cucumber, and spinach.</li>
<li><strong>Feeding time:</strong> Tiger Loaches are crepuscular (most active at dawn and dusk). Feeding in the evening, shortly before or after lights go off, often produces the best feeding response.</li>
</ul>

<h2 id="behaviour">Behaviour & Social Structure</h2>
<p>This is where Tiger Loaches differ most significantly from Clown Loaches. Tiger Loaches are:</p>
<ul>
<li><strong>Territorial:</strong> Each fish establishes and defends a preferred hiding spot. Intrusions result in physical confrontations — usually chasing and clicking sounds (produced by grinding pharyngeal teeth).</li>
<li><strong>Hierarchical:</strong> Groups establish a pecking order. The dominant individual claims the best cave and has priority access to food.</li>
<li><strong>Semi-aggressive:</strong> They will chase, harass, and occasionally damage the fins of other bottom-dwelling fish that encroach on their territory.</li>
</ul>
<p><strong>Critical:</strong> Keep Tiger Loaches in groups of at least 5. In smaller numbers, the dominant fish focuses aggression on one or two subordinates, causing chronic stress and potential injury. In larger groups, aggression is distributed and no single individual bears the brunt.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Choose tank mates that occupy different zones and can tolerate occasional aggression:</p>
<ul>
<li><strong>Good options:</strong> Mid-to-upper water schooling fish (Giant Danios, Rainbowfish, Congo Tetras), robust medium cichlids (Severums, Keyhole Cichlids), and fast-swimming species that stay above the substrate zone.</li>
<li><strong>Avoid:</strong> Other bottom-dwellers (Corydoras, Plecos) in small tanks — they may be harassed. Small, slow fish that cannot escape pursuit. Other Syncrossus species (unless the tank is very large, 200+ gallons, with separate territories).</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Are Tiger Loaches aggressive?',
        answer:
          'Tiger Loaches are semi-aggressive — significantly more assertive than Clown Loaches or Kuhli Loaches. They are territorial toward other bottom-dwelling fish and establish hierarchies within their own groups. Aggression is managed by keeping them in groups of 5+ (distributes aggression), providing ample hiding spots (one per fish minimum), and using a sufficiently large tank (75+ gallons).',
      },
      {
        question: 'What is the difference between a Tiger Loach and a Clown Loach?',
        answer:
          'Despite superficial similarities (both are large, banded botiid loaches), they are different genera. Tiger Loaches (Syncrossus) are more aggressive, prefer warmer water (77–86 °F vs 75–82 °F), grow slightly larger (30 cm vs 25 cm typical), and have a more compressed body shape. Clown Loaches (Chromobotia) are more peaceful, more social, and better suited to community tanks.',
      },
      {
        question: 'Do Tiger Loaches eat snails?',
        answer:
          'Yes — Tiger Loaches are excellent snail predators. They crack shells with their powerful pharyngeal teeth and consume snails of all sizes, from small pest snails to larger Mystery and Nerite snails. If you keep Tiger Loaches, do not expect any snails to survive in the same tank. This makes them highly effective for controlling pest snail populations.',
      },
    ],
    sources: [
      {
        title: 'Syncrossus hymenophysa (Bleeker, 1852)',
        url: 'https://www.fishbase.se/summary/Syncrossus-hymenophysa.html',
        publisher: 'FishBase',
      },
      {
        title: 'Botiid Loaches: Natural History and Captive Husbandry',
        url: 'https://doi.org/10.1007/978-3-319-24439-2',
        publisher: 'Springer',
      },
    ],
    relatedSlugs: [
      'clown-loach',
      'clown-knife-fish',
      'denison-barb',
    ],
  },

  // ─────────────────────────────────────────────
  // 50. Black Ghost Knife Fish
  // ─────────────────────────────────────────────
  {
    title: 'Black Ghost Knife Fish: Complete Species & Care Guide',
    slug: 'black-ghost-knife-fish',
    type: 'species',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-06',
    heroImage: '/images/species/black-ghost-knife-fish-hero.jpg',
    heroImageAlt:
      'Black Ghost Knife Fish displaying its jet-black body and undulating anal fin in a dimly lit planted aquarium',
    metaTitle:
      'Black Ghost Knife Fish (Apteronotus albifrons): Complete Care Guide | The Fish Collection',
    metaDescription:
      'Complete Black Ghost Knife Fish care guide — electrolocation, tank setup, feeding & behaviour. Expert advice from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for a Black Ghost Knife Fish?',
    quickAnswer:
      'Black Ghost Knife Fish need a minimum 100-gallon tank (they reach 50 cm / 20 in), temperature of 75–82 °F (24–28 °C), pH 6.0–7.5, and soft to moderately hard water. They are nocturnal, shy, and use electrolocation to navigate. Provide dim lighting, plenty of hiding spots (PVC tubes, driftwood caves), a sandy substrate, and a diet of frozen bloodworms, brine shrimp, and high-quality sinking pellets.',
    summary:
      'The Black Ghost Knife Fish (Apteronotus albifrons) is one of the most fascinating freshwater fish available to aquarists. A member of the knifefish order Gymnotiformes — the same order that includes the Electric Eel — this jet-black, blade-shaped fish navigates its environment using weak electrical fields generated by a specialised organ in its tail. Native to the rivers and streams of the Amazon Basin, the Black Ghost Knife is nocturnal, shy, and remarkably intelligent, capable of learning to feed from the hand and recognising its keeper. This guide covers the species\' unique biology, care requirements, and the specific considerations needed to keep this extraordinary fish thriving.',
    scientificName: 'Apteronotus albifrons',
    category: 'knife-fish',
    keyFacts: [
      { label: 'Scientific Name', value: 'Apteronotus albifrons' },
      { label: 'Max Size', value: '50 cm (20 in)' },
      { label: 'Tank Size', value: '100 gallons (378 L) minimum' },
      { label: 'Temperature', value: '75–82 °F (24–28 °C)' },
      { label: 'pH', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Intermediate to Advanced' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Carnivore — frozen foods, pellets, live foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'electrolocation', text: 'Electrolocation', level: 2 },
      { id: 'appearance', text: 'Appearance', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet & Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'faq', text: 'FAQ', level: 2 },
    ],
    content: `<h2 id="overview">Overview</h2>
<p>The Black Ghost Knife Fish has captivated aquarists since its introduction to the hobby in the mid-20th century. Its unusual morphology — a blade-shaped body propelled by an undulating anal fin that allows forward and reverse swimming with equal grace — combined with its jet-black colouration and white-tipped tail, creates an appearance unlike anything else in the freshwater world. Add to this its ability to generate and sense electrical fields, and you have a fish that genuinely feels like something from another era of evolution.</p>
<p>The species' common name derives from South American folklore — indigenous peoples of the Amazon believed the fish was inhabited by the ghosts of the deceased, which explained its nocturnal habits and ghostly, silent movement through the dark waters.</p>

<h2 id="electrolocation">Electrolocation</h2>
<p>The Black Ghost Knife Fish's most remarkable feature is its electrogenic and electrosensory system. A specialised organ in the tail generates a weak electrical field (too weak to be felt by humans or other fish) that surrounds the fish's body. Thousands of electroreceptors distributed across the skin detect distortions in this field caused by nearby objects — rocks, plants, prey items, and other fish. This system functions as a biological "radar" that allows the fish to navigate, hunt, and communicate in complete darkness.</p>
<p>The practical implications for aquarists:</p>
<ul>
<li><strong>Metal sensitivity:</strong> Some keepers report that metal tank equipment (clips, screws, thermometer guards) can create localised electrical interference that confuses or stresses the fish. Use plastic or rubber alternatives where possible.</li>
<li><strong>Avoid keeping two together:</strong> Two Black Ghost Knife Fish in the same tank generate overlapping electrical fields that interfere with each other's electrolocation. This causes chronic stress and territorial aggression. Keep only one per tank unless the tank exceeds 200 gallons.</li>
<li><strong>Clear tube enrichment:</strong> Providing a clear plastic or glass tube as a hiding spot allows the fish to use its electrosensory system to "see" the environment while feeling secure. Many keepers use transparent PVC or acrylic tubes as the primary hiding spot.</li>
</ul>

<h2 id="appearance">Appearance</h2>
<p>The Black Ghost Knife Fish's appearance is distinctive:</p>
<ul>
<li><strong>Body shape:</strong> Blade-shaped — deep and laterally compressed, tapering to a point at the tail. The body profile looks like an elongated leaf or knife blade, hence the "knife fish" name.</li>
<li><strong>Colour:</strong> Jet black with two white bands on the tail. Some specimens develop a white blaze on the head as they mature.</li>
<li><strong>Fins:</strong> No dorsal, ventral, or caudal fins. Locomotion is entirely via the long, undulating anal fin that runs the length of the underside. This fin provides remarkably precise control, allowing the fish to swim forward, backward, hover, and rotate with equal ease.</li>
<li><strong>Size:</strong> Adults reach 45–50 cm (18–20 in) in captivity. Growth is moderate — expect 5–10 cm (2–4 in) per year.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<ul>
<li><strong>Tank size:</strong> 100 gallons (378 L) minimum for a single adult. While juveniles can temporarily occupy smaller tanks (55 gallons), they grow steadily and will need the full 100 gallons within 2–3 years.</li>
<li><strong>Lighting:</strong> Dim to moderate. Black Ghost Knife Fish are nocturnal and stressed by bright lighting. Use dimmable LEDs, floating plants to create shade, or moonlight/actinic modes for viewing.</li>
<li><strong>Hiding spots:</strong> Essential. Provide one or more tubes (PVC, acrylic, bamboo) long enough for the fish to fully conceal itself, plus driftwood caves and dense planting along the back and sides. The fish will spend most daylight hours hiding.</li>
<li><strong>Substrate:</strong> Fine sand — the fish may rest on or partially bury itself in substrate during the day.</li>
<li><strong>Current:</strong> Moderate — a gentle but consistent flow from the filter return is sufficient.</li>
</ul>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 75–82 °F (24–28 °C).</li>
<li><strong>pH:</strong> 6.0–7.5 (slightly acidic preferred).</li>
<li><strong>GH:</strong> 5–15 dGH.</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm — Black Ghost Knife Fish are scaleless and more sensitive to water quality issues than scaled fish.</li>
<li><strong>Nitrate:</strong> Below 20 ppm.</li>
</ul>
<p><strong>Critical:</strong> As a scaleless fish, the Black Ghost Knife is highly sensitive to copper-based medications, formalin, and many common aquarium treatments. Never use copper in a tank containing this species. If treatment is necessary, use scaleless-fish-safe alternatives at reduced dosage in a hospital tank.</p>

<h2 id="diet-and-feeding">Diet & Feeding</h2>
<p>Black Ghost Knife Fish are carnivores that can be finicky eaters, especially as juveniles:</p>
<ul>
<li><strong>Frozen foods:</strong> Bloodworms (often the first food accepted), brine shrimp, mysis shrimp, and chopped shrimp/prawn. These should form the bulk of the diet.</li>
<li><strong>Sinking pellets:</strong> High-quality sinking carnivore pellets (Hikari Carnivore, Northfin Carnivore) — many specimens can be trained to accept these, which improves nutritional balance.</li>
<li><strong>Live foods:</strong> Blackworms, earthworms, and small feeder shrimp. Useful for enticing reluctant feeders.</li>
<li><strong>Feeding time:</strong> After lights out. These nocturnal fish feed most readily in darkness. Target-feeding near their hiding spot using a feeding syringe or pipette is the most reliable method.</li>
</ul>

<h2 id="behaviour">Behaviour</h2>
<p>Black Ghost Knife Fish are nocturnal and shy during the day, hiding in their tubes or caves and emerging after dark to explore and hunt. As they settle into an established tank, they may become more visible during dim daytime conditions, especially when they learn to associate their keeper's presence with food.</p>
<p>They are remarkably intelligent for a fish — capable of recognising individual human faces (distinguishing their primary keeper from strangers), learning feeding routines, and navigating complex environments with their electrosensory system. Many keepers report their Black Ghost Knife developing "pet-like" behaviour: approaching the glass when they see their owner, accepting hand-feeding, and exploring items placed in the tank.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Compatible tank mates must meet two criteria: peaceful temperament and appropriate size.</p>
<ul>
<li><strong>Good options:</strong> Large, peaceful community fish — Angelfish, Discus, large Tetras (Congo, Emperor), Corydoras catfish, peaceful medium cichlids (Severums, Geophagus), and Bristlenose Plecos.</li>
<li><strong>Avoid:</strong> Aggressive species (large cichlids, aggressive barbs), other electric fish (other knife fish, electric catfish), very small fish that may be eaten at night, and any species known for fin-nipping.</li>
</ul>

<h2 id="faq">FAQ</h2>`,
    faqs: [
      {
        question: 'Can you keep two Black Ghost Knife Fish together?',
        answer:
          'It is not recommended in tanks under 200 gallons. Black Ghost Knife Fish are territorial toward their own species — their overlapping electrical fields cause mutual stress and trigger aggressive encounters. In very large tanks (200+ gallons) with separate territories and hiding spots at opposite ends, cohabitation is sometimes possible, but it remains risky. One per tank is the safest approach.',
      },
      {
        question: 'Do Black Ghost Knife Fish produce electricity?',
        answer:
          'Yes, but it is a weak electrical field used for navigation and communication (electrolocation), not for defence or predation like the Electric Eel. The field is imperceptible to humans and other fish. The fish generates constant low-voltage pulses from an organ in its tail, and electroreceptors across its body detect distortions in this field caused by nearby objects. It is essentially a biological sonar system.',
      },
      {
        question: 'Why does my Black Ghost Knife Fish hide all day?',
        answer:
          'This is completely normal — Black Ghost Knife Fish are nocturnal. They spend daylight hours hidden in caves, tubes, or dense vegetation and become active after dark. As they become comfortable in an established tank (often 3–6 months), they may begin to appear during dimmer daytime periods, especially around feeding time. Forcing them out with bright lighting will cause chronic stress.',
      },
    ],
    sources: [
      {
        title: 'Apteronotus albifrons (Linnaeus, 1766)',
        url: 'https://www.fishbase.se/summary/Apteronotus-albifrons.html',
        publisher: 'FishBase',
      },
      {
        title: 'Electroreception in Gymnotiform Fish: Neural Coding and Behaviour',
        url: 'https://doi.org/10.1007/978-3-030-29105-1_6',
        publisher: 'Springer',
      },
    ],
    relatedSlugs: [
      'clown-knife-fish',
      'fire-eel',
      'elephantnose-fish',
    ],
  },
];

export function getSpeciesGuideBySlug(slug: string): Article | undefined {
  return speciesGuides.find((guide) => guide.slug === slug);
}
