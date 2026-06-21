import type { Article } from '@/types/article';

export const careGuides: Article[] = [
  // ──────────────────────────────────────────────
  // Care Guide 1 — Arowana Tank Setup
  // ──────────────────────────────────────────────
  {
    title: 'Arowana Tank Setup',
    slug: 'arowana-tank-setup',
    type: 'care',
    category: 'arowana',
    topicCategory: 'tank-setup',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-01-15',
    updatedAt: '2026-03-10',
    heroImage: '/images/care/arowana-tank-setup.jpg',
    heroImageAlt:
      'A professional 300-gallon arowana aquarium with sump filtration, LED lighting, and minimal hardscape',
    metaTitle:
      'Tank Setup Guide for Arowana | Water, Tank & Diet | The Fish Collection',
    metaDescription:
      'Expert arowana tank setup guide. Minimum 240-gallon tank specs, sump filtration, water parameters, substrate, and lighting for Asian and Silver Arowana.',
    quickAnswerQuestion: 'What tank setup does an arowana need?',
    quickAnswer:
      'Arowana need a minimum 240-gallon (900 L) aquarium measuring at least 8 × 3 × 2 feet, with a sump-based filtration system rated for 8–10× turnover per hour. Water should be 26–28 °C, pH 6.5–7.0, and GH 1–8 dGH. A secure weighted lid is mandatory — arowana are powerful jumpers. Use dark or bare substrate, subdued overhead lighting with a tanning light for colour enhancement, and ensure no sharp décor that could damage scales.',
    summary:
      'A detailed, specification-driven guide to building the optimal aquarium system for keeping Asian and Silver Arowana, covering every component from tank dimensions to backup power.',
    keyFacts: [
      { label: 'Minimum Tank Size', value: '240 gal (900 L)' },
      { label: 'Minimum Dimensions', value: '8 × 3 × 2 ft' },
      { label: 'Temperature', value: '26–28 °C (79–82 °F)' },
      { label: 'pH Range', value: '6.5–7.0' },
      { label: 'Filtration Turnover', value: '8–10× tank volume/hr' },
      { label: 'Lid Required', value: 'Yes — weighted or locking' },
    ],
    headings: [
      { id: 'why-tank-setup-matters', text: 'Why Tank Setup Matters for Arowana', level: 2 },
      { id: 'tank-dimensions', text: 'Tank Dimensions and Material', level: 2 },
      { id: 'choosing-dimensions', text: 'Choosing the Right Dimensions', level: 3 },
      { id: 'glass-vs-acrylic-arowana', text: 'Glass vs Acrylic for Arowana', level: 3 },
      { id: 'stand-and-placement', text: 'Stand and Placement', level: 3 },
      { id: 'lid-requirements', text: 'Lid Requirements', level: 2 },
      { id: 'substrate-and-decor', text: 'Substrate and Décor', level: 2 },
      { id: 'filtration-system', text: 'Filtration System', level: 2 },
      { id: 'sump-design', text: 'Sump Design for Arowana', level: 3 },
      { id: 'supplementary-filtration', text: 'Supplementary Filtration', level: 3 },
      { id: 'water-parameters-setup', text: 'Water Parameters and Conditioning', level: 2 },
      { id: 'lighting', text: 'Lighting', level: 2 },
      { id: 'heating-and-temperature', text: 'Heating and Temperature Control', level: 2 },
      { id: 'backup-power', text: 'Backup Power and Redundancy', level: 2 },
      { id: 'cycling-the-tank', text: 'Cycling the Tank Before Adding Arowana', level: 2 },
      { id: 'final-checklist', text: 'Final Setup Checklist', level: 2 },
    ],
    content: `
<h2 id="why-tank-setup-matters">Why Tank Setup Matters for Arowana</h2>
<p>Arowana are not forgiving fish. A Discus might tolerate a temporary parameter swing; an Arowana will develop drop eye, gill curl, or spinal deformity from chronic environmental stress — conditions that are difficult or impossible to reverse. The tank you build is not just a container; it is a life-support system that must maintain hospital-grade stability for a fish that may live 25 years and be worth more than the car in your driveway.</p>
<p>I have inspected hundreds of private Arowana setups over my career, and the pattern is consistent: fish kept in properly engineered systems display superior colour, natural behaviour, and longevity compared to those housed in hastily assembled tanks — regardless of the specimen's genetic quality. Infrastructure is everything.</p>

<h2 id="tank-dimensions">Tank Dimensions and Material</h2>

<h3 id="choosing-dimensions">Choosing the Right Dimensions</h3>
<p>Adult Asian Arowana reach 60–90 cm (24–36 in). Silver Arowana grow even larger, regularly exceeding 100 cm (40 in). These are straight-line patrol swimmers — they pace the length of the tank continuously, turning at each end. If the tank is too short, the fish is forced into tight U-turns that, over months and years, cause permanent spinal curvature.</p>
<p><strong>Minimum dimensions for Asian Arowana:</strong> 8 feet long × 3 feet wide × 2 feet tall (240 × 90 × 60 cm). This yields approximately 240 US gallons (900 litres). For Silver Arowana, extend to 10 × 4 × 2 feet (300 × 120 × 60 cm), approximately 400 gallons.</p>
<p>Width matters nearly as much as length. A tank narrower than 3 feet (90 cm) does not allow a full-sized Asian Arowana to turn comfortably — the fish's body length plus pectoral fin spread exceeds the available width, leading to fin damage and stress.</p>
<p>Height is the least critical dimension. Arowana are surface dwellers and rarely descend to the bottom third of the tank. Two feet (60 cm) is sufficient. Taller tanks waste volume that does not benefit the fish and increase hydrostatic pressure on the bottom panels.</p>

<h3 id="glass-vs-acrylic-arowana">Glass vs Acrylic for Arowana</h3>
<p>At 240+ gallons, acrylic is the preferred material. It weighs approximately 50 % less than glass at equivalent volume, offers 17× greater impact resistance (critical for a fish that can slam into panels when startled), and provides better thermal insulation — reducing heater energy consumption by roughly 15 %.</p>
<p>The downside is scratch susceptibility. Arowana tanks typically use bare or fine-sand substrate, minimising abrasive contact during cleaning. Use only non-abrasive pads (melamine foam or microfibre) for algae removal on acrylic surfaces.</p>
<p>If glass is preferred for aesthetic reasons (higher optical clarity, scratch resistance), use low-iron (starphire) glass in minimum 19 mm thickness for the front panel. Standard float glass produces a green tint at this thickness that distorts the fish's true coloration.</p>

<h3 id="stand-and-placement">Stand and Placement</h3>
<p>A filled 240-gallon system with stand, sump, and equipment weighs approximately 1,200 kg (2,650 lbs). This load must be distributed across the floor — never placed on a single point. Steel or hardwood stands rated for at least 1,500 kg are standard. Verify your floor's load capacity, especially on upper storeys. Reinforced concrete slab (ground floor) is ideal.</p>
<p>Position the tank away from direct sunlight (promotes algae and temperature fluctuations), external doors (drafts cause temperature instability), and high-traffic areas (vibrations stress the fish). Leave at least 60 cm of clearance behind the tank for sump access and plumbing maintenance.</p>

<h2 id="lid-requirements">Lid Requirements</h2>
<p>This cannot be overstated: <strong>Arowana jump</strong>. In the wild, they leap above the water surface to snatch insects and small animals from overhanging branches. In captivity, a startled Arowana can launch 30+ cm out of the water — more than enough to clear an open-top tank and land on the floor, usually resulting in fatal injury.</p>
<p>Your lid must be:</p>
<ul>
  <li><strong>Heavy enough to resist impact.</strong> A 5 kg minimum weight or a locking mechanism that secures the lid to the tank frame.</li>
  <li><strong>Strong enough not to shatter.</strong> Standard 6 mm glass can crack from a full-force Arowana impact. Use 10 mm acrylic, polycarbonate, or aluminium-framed mesh.</li>
  <li><strong>Ventilated.</strong> A completely sealed lid traps heat and CO₂. Mesh panels or ventilation slots prevent condensation and maintain gas exchange.</li>
  <li><strong>Positioned with a 2–3 cm gap</strong> above the water surface to prevent barbel damage from the fish bumping the lid during normal surface patrol.</li>
</ul>

<h2 id="substrate-and-decor">Substrate and Décor</h2>
<p>Minimalism is the principle here. Arowana tanks should be clean, open, and free of obstructions.</p>
<p><strong>Substrate options:</strong></p>
<ul>
  <li><strong>Bare bottom:</strong> Easiest to clean, prevents food from falling into crevices, and eliminates substrate-borne bacteria. However, reflective bare bottoms are linked to drop eye in Arowana, as the fish fixates on its own reflection. Mitigate by using a dark-coloured or matte tank bottom (black acrylic, or a black vinyl wrap on the underside of a glass tank).</li>
  <li><strong>Fine sand (1–2 mm grain):</strong> Provides a natural appearance and eliminates reflection. Use pool filter sand or aragonite-free river sand. Depth: 1–2 cm maximum — deeper beds trap detritus and create anaerobic pockets.</li>
</ul>
<p><strong>Décor:</strong> Large, smooth driftwood pieces are acceptable and provide visual interest without risk. Avoid sharp rocks, rough lava stone, or anything with protruding edges — a panicking Arowana will lacerate its scales on abrasive surfaces. Live plants are generally impractical; Arowana uproot them during feeding frenzies. If aesthetic planting is desired, use epiphytic species (Anubias, Java Fern) attached to driftwood above the substrate level.</p>

<h2 id="filtration-system">Filtration System</h2>

<h3 id="sump-design">Sump Design for Arowana</h3>
<p>A sump is the only filtration approach adequate for a serious Arowana system. It adds water volume (improving parameter stability), houses all equipment out of the display tank, and allows staged filtration that addresses mechanical, biological, and chemical needs independently.</p>
<p><strong>Recommended sump sizing:</strong> 30–50 % of the display tank volume. For a 240-gallon tank, use a 75–120 gallon sump. This sump should be divided into four chambers:</p>
<ul>
  <li><strong>Chamber 1 — Mechanical:</strong> Overflow drain empties into 200-micron filter socks (keep at least 4 in rotation, washing every 3 days). Below the socks, a drip tray with coarse foam (30 PPI) catches anything the socks miss.</li>
  <li><strong>Chamber 2 — Biological:</strong> 10–15 litres of sintered-glass or ceramic biomedia (target 800+ m² surface area per litre). Water flows slowly through this chamber — baffle design should prevent channelling. Never clean more than 25 % of biomedia at one time.</li>
  <li><strong>Chamber 3 — Chemical / Equipment:</strong> Activated carbon in a media reactor (replaced every 3 weeks), optional UV steriliser (25–40 W for 240 gallons), and probe holders for pH and temperature monitors.</li>
  <li><strong>Chamber 4 — Return:</strong> Return pump rated for total system turnover of 8–10× per hour, accounting for head pressure loss. For a 240-gallon system with a 4-foot head height, a pump delivering 2,000+ GPH at zero head is appropriate (actual flow at 4 feet will be approximately 1,600–1,800 GPH).</li>
</ul>

<h3 id="supplementary-filtration">Supplementary Filtration</h3>
<p>Run a large canister filter (rated for 200+ gallons) in parallel with the sump. This provides redundancy — if the sump pump fails, the canister maintains biological filtration and water movement until you intervene. Fill the canister primarily with biomedia, not mechanical pads.</p>
<p>Consider adding a fluidised-bed reactor for additional biological capacity. These reactors use sand or K1 media in constant motion, providing exceptional surface area for nitrifying bacteria in a compact footprint.</p>

<h2 id="water-parameters-setup">Water Parameters and Conditioning</h2>
<p>Target parameters for Asian Arowana:</p>
<ul>
  <li><strong>Temperature:</strong> 26–28 °C (79–82 °F)</li>
  <li><strong>pH:</strong> 6.5–7.0</li>
  <li><strong>General Hardness:</strong> 1–8 dGH</li>
  <li><strong>Carbonate Hardness:</strong> 2–5 dKH (enough to buffer against pH crashes)</li>
  <li><strong>Ammonia:</strong> 0 ppm</li>
  <li><strong>Nitrite:</strong> 0 ppm</li>
  <li><strong>Nitrate:</strong> Below 20 ppm (below 10 ppm preferred)</li>
  <li><strong>TDS:</strong> 50–150 ppm</li>
</ul>
<p>If your tap water does not match these parameters, invest in an RO/DI system ($150–$400). Blend RO water with tap water to reach your target GH and TDS. Remineralise pure RO water with a GH-boosting product (Seachem Equilibrium or equivalent) before adding it to the tank — pure RO water strips essential minerals and destabilises KH.</p>
<p>For colour enhancement in Super Red Arowana, some keepers maintain pH 6.0–6.5 using Indian almond leaves (Terminalia catappa), peat moss in the filter, or controlled blackwater extract dosing. Lower pH intensifies red and gold pigmentation, but stability always takes priority over hitting a specific number.</p>

<h2 id="lighting">Lighting</h2>
<p>Arowana lighting serves two purposes: visibility for the keeper and colour enhancement for the fish.</p>
<ul>
  <li><strong>Primary lighting:</strong> A full-spectrum LED unit (6,500 K) provides natural daylight rendering. Run for 8–10 hours daily on a timer with gradual ramp-up and ramp-down (30–60 minutes each) to simulate sunrise and sunset. Abrupt on/off lighting startles Arowana and triggers jumping.</li>
  <li><strong>Tanning light:</strong> Many serious Arowana keepers use dedicated "tanning" LEDs — units with elevated red (620–660 nm) and warm-white (3,000 K) spectrums that intensify the fish's natural pigmentation. These are particularly effective on Super Red and Golden Crossback varieties. Run 4–6 hours daily during the midday period.</li>
  <li><strong>Moonlight:</strong> A dim blue LED (1–2 watts) running overnight reduces stress and prevents the fish from being startled by sudden morning light activation.</li>
</ul>
<p>Mount lights above the lid, not inside the canopy — Arowana can burn themselves on submerged or low-mounted fixtures during jumps.</p>

<h2 id="heating-and-temperature">Heating and Temperature Control</h2>
<p>Use a titanium heater rated for your total system volume (display + sump). For a 240-gallon display with a 100-gallon sump, total volume is 340 gallons — use a heater rated for at least 400 watts, or two 300-watt units for redundancy.</p>
<p>Critical: use an <strong>external digital temperature controller</strong> (Inkbird ITC-308 or equivalent) rather than relying on the heater's built-in thermostat. Built-in thermostats drift over time and can cook your fish if they fail in the "on" position. The external controller acts as a kill switch, cutting power to the heater if temperature exceeds your set point by more than 1 °C.</p>
<p>Place the heater in the sump (not the display tank) to prevent the Arowana from burning itself on the element. Position the temperature probe in the display tank at the opposite end from the return outlet to measure the true ambient temperature.</p>

<h2 id="backup-power">Backup Power and Redundancy</h2>
<p>An Arowana system worth $5,000–$500,000+ in livestock deserves power protection. A 4-hour outage can crash an unprotected system — oxygen depletion kills fastest, followed by temperature drop and filtration die-off.</p>
<ul>
  <li><strong>Minimum:</strong> Battery-operated air pump (USB-rechargeable models last 12+ hours). Keeps oxygen flowing when power fails.</li>
  <li><strong>Recommended:</strong> A UPS (uninterruptible power supply) rated for 1,500–3,000 VA, connected to your return pump and heater. Provides 2–4 hours of runtime for essential equipment.</li>
  <li><strong>Optimal:</strong> A whole-system generator (propane or natural gas, auto-start) for outages exceeding 4 hours. Critical in regions with unreliable grid power.</li>
</ul>
<p>Test your backup systems quarterly. A battery that has degraded to 20 % capacity will not save your fish in a real outage.</p>

<h2 id="cycling-the-tank">Cycling the Tank Before Adding Arowana</h2>
<p>No Arowana — regardless of price or source — should enter an uncycled tank. The fishless cycling protocol:</p>
<ul>
  <li>Fill the tank and run all equipment (heater, filtration, circulation) for 24 hours to verify function and check for leaks.</li>
  <li>Add pure ammonia (reagent grade) to 2–4 ppm.</li>
  <li>Dose bottled nitrifying bacteria (Seachem Stability, Dr. Tim's One and Only, or equivalent) to accelerate colonisation.</li>
  <li>Test ammonia and nitrite daily with liquid reagent kits. Maintain ammonia at 2 ppm by re-dosing whenever it drops to zero.</li>
  <li>The cycle is complete when both ammonia and nitrite drop from 2 ppm to 0 ppm within 24 hours. Expect 4–6 weeks, potentially faster with bacterial supplements.</li>
  <li>Perform a 50 % water change to dilute accumulated nitrate before introducing the fish.</li>
</ul>
<p>During cycling, verify that temperature, pH, and flow rates remain stable. Address any issues now — not after a $10,000 fish is in the water.</p>

<h2 id="final-checklist">Final Setup Checklist</h2>
<ul>
  <li>Tank: 240+ gallons, 8 × 3 × 2 ft minimum, acrylic or low-iron glass</li>
  <li>Stand: steel or hardwood, rated 1,500+ kg, level to within 3 mm</li>
  <li>Lid: weighted/locking, 10 mm acrylic or polycarbonate, ventilated</li>
  <li>Substrate: bare dark bottom or fine sand (1–2 cm)</li>
  <li>Sump: 75–120 gallons, 4-chamber design</li>
  <li>Biomedia: 10–15 L sintered glass or ceramic (800+ m²/L)</li>
  <li>Return pump: 2,000+ GPH at zero head</li>
  <li>Canister filter: supplementary, rated 200+ gallons</li>
  <li>Heater: titanium, 400+ W with external controller</li>
  <li>Lighting: full-spectrum LED + tanning LED + moonlight</li>
  <li>Backup power: battery air pump + UPS minimum</li>
  <li>Water: conditioned to 26–28 °C, pH 6.5–7.0, GH 1–8 dGH</li>
  <li>Nitrogen cycle: complete (ammonia and nitrite 0 ppm within 24 hrs)</li>
  <li>Quarantine tank: 40+ gallons, cycled and ready</li>
</ul>
<p>Once every item is checked, your system is ready to receive an Arowana. The Fish Collection ships all <a href="/exotic-fish/arowana">Arowana specimens</a> with detailed acclimation instructions and offers post-sale support from our team of aquatic biologists. Build it right, and your Arowana will reward you for decades.</p>
`,
    faqs: [
      {
        question: 'What is the minimum tank size for an arowana?',
        answer:
          'The minimum tank size for an Asian Arowana is 240 gallons (900 litres) with dimensions of at least 8 × 3 × 2 feet. Silver Arowana, which grow larger, need a minimum of 400 gallons with a 10 × 4-foot footprint. These are absolute minimums — larger is always better for long-term health.',
      },
      {
        question: 'Do arowana need a lid on their tank?',
        answer:
          'Absolutely. Arowana are powerful jumpers that can leap 30+ cm above the water surface. A secure, weighted lid (5 kg minimum) or locking canopy is mandatory. Use 10 mm acrylic or polycarbonate — standard 6 mm glass can crack from a full-force Arowana impact.',
      },
      {
        question: 'What substrate is best for arowana?',
        answer:
          'A bare dark bottom or fine sand (1–2 mm grain, 1–2 cm depth) is best. Bare bottoms are easiest to maintain but must be dark or matte to prevent reflections that cause drop eye. Avoid gravel — food falls between pieces and decays, spiking ammonia.',
      },
      {
        question: 'How much does an arowana tank setup cost?',
        answer:
          'A proper 240-gallon Arowana system (custom tank, stand, sump, filtration, heater, lighting, and backup power) costs $5,000–$12,000 depending on material choices and brand. Custom acrylic builds with premium cabinetry can reach $20,000+. This does not include the fish or ongoing running costs.',
      },
      {
        question: 'Can I keep an arowana in a 75-gallon tank?',
        answer:
          'Only temporarily for a small juvenile (under 15 cm). A 75-gallon tank is far too small for an adult Arowana and will cause spinal deformity, stunted growth, and chronic stress. Plan for the adult size from day one — 240 gallons minimum.',
      },
    ],
    sources: [
      {
        title: 'Asian Arowana Husbandry Standards',
        url: 'https://www.practicalfishkeeping.co.uk/features/arowana-husbandry/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'FishBase: Scleropages formosus',
        url: 'https://www.fishbase.se/summary/Scleropages-formosus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Sump Filtration Design for Large Aquariums',
        url: 'https://www.reefbuilders.com/sump-filtration-design/',
        publisher: 'Reef Builders',
      },
    ],
    relatedSlugs: ['arowana-care-guide', 'exotic-fish-tank-setup', 'arowana-tank-mates', 'arowana-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 2 — Pufferfish Diet & Feeding
  // ──────────────────────────────────────────────
  {
    title: 'Pufferfish Diet & Feeding',
    slug: 'pufferfish-diet-feeding',
    type: 'care',
    category: 'pufferfish',
    topicCategory: 'feeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-01-20',
    updatedAt: '2026-03-12',
    heroImage: '/images/care/pufferfish-diet-feeding.jpg',
    heroImageAlt:
      'A Fahaka pufferfish eating a snail — demonstrating the hard-shelled diet essential for beak maintenance',
    metaTitle:
      'Diet & Feeding Guide for Pufferfish | Water, Tank & Diet | The Fish Collection',
    metaDescription:
      'Expert pufferfish feeding guide. Hard-shelled foods for beak maintenance, species-specific diets, feeding schedules, and nutritional requirements explained.',
    quickAnswerQuestion: 'What do pufferfish eat?',
    quickAnswer:
      'Pufferfish are primarily molluscivores — their diet should consist of hard-shelled foods like snails, clams, mussels, and crayfish that wear down their continuously growing beak (fused teeth). Supplement with frozen shrimp, bloodworms, and occasional market seafood. Feed juveniles daily, adults every other day. Never use flake or pellet food as a staple — pufferfish require the mechanical action of crushing shells to prevent beak overgrowth, which can become fatal.',
    summary:
      'A comprehensive feeding guide for freshwater and brackish pufferfish species, covering species-specific dietary needs, beak maintenance through hard-shelled foods, feeding frequency, and nutritional supplementation.',
    keyFacts: [
      { label: 'Diet Type', value: 'Carnivore / Molluscivore' },
      { label: 'Primary Foods', value: 'Snails, clams, mussels, crayfish' },
      { label: 'Feeding Frequency', value: 'Daily (juveniles) / Every other day (adults)' },
      { label: 'Beak Maintenance', value: 'Hard-shelled food required' },
      { label: 'Avoid', value: 'Flakes, pellets, feeder fish' },
      { label: 'Supplements', value: 'Vitamin soak weekly' },
    ],
    headings: [
      { id: 'pufferfish-feeding-fundamentals', text: 'Pufferfish Feeding Fundamentals', level: 2 },
      { id: 'the-beak-problem', text: 'The Beak: Why Diet Matters More Than You Think', level: 2 },
      { id: 'species-specific-diets', text: 'Species-Specific Diets', level: 2 },
      { id: 'fahaka-puffer-diet', text: 'Fahaka Puffer (Tetraodon lineatus)', level: 3 },
      { id: 'mbu-puffer-diet', text: 'Mbu Puffer (Tetraodon mbu)', level: 3 },
      { id: 'figure-eight-puffer-diet', text: 'Figure Eight Puffer (Dichotomyctere ocellatus)', level: 3 },
      { id: 'pea-puffer-diet', text: 'Pea Puffer (Carinotetraodon travancoricus)', level: 3 },
      { id: 'best-foods-for-pufferfish', text: 'Best Foods for Pufferfish', level: 2 },
      { id: 'hard-shelled-foods', text: 'Hard-Shelled Foods (Beak Maintenance)', level: 3 },
      { id: 'supplementary-foods', text: 'Supplementary Foods', level: 3 },
      { id: 'foods-to-avoid', text: 'Foods to Avoid', level: 3 },
      { id: 'feeding-schedule', text: 'Feeding Schedule by Life Stage', level: 2 },
      { id: 'beak-trimming', text: 'Beak Trimming: When Diet Is Not Enough', level: 2 },
      { id: 'culturing-live-food', text: 'Culturing Live Food at Home', level: 2 },
      { id: 'nutritional-supplements', text: 'Nutritional Supplements', level: 2 },
    ],
    content: `
<h2 id="pufferfish-feeding-fundamentals">Pufferfish Feeding Fundamentals</h2>
<p>Pufferfish are among the most intelligent and interactive fish in the aquarium hobby — they recognise their keepers, beg for food, and display distinct personalities. But that intelligence comes paired with demanding dietary needs that no other group of aquarium fish shares. Feed a pufferfish incorrectly, and you will face beak overgrowth, malnutrition, organ failure, or a fish that simply refuses to eat.</p>
<p>The core principle is simple: <strong>pufferfish must eat hard-shelled food regularly to maintain their beak</strong>. Everything else — frozen foods, market seafood, occasional treats — is supplementary. Neglect the beak, and you will eventually need a veterinarian with a pair of cuticle nippers and a sedation protocol. Or you will lose the fish.</p>

<h2 id="the-beak-problem">The Beak: Why Diet Matters More Than You Think</h2>
<p>Pufferfish possess a unique dental structure: four fused teeth (two upper, two lower) that form a beak-like plate. This beak grows continuously throughout the fish's life — much like rodent incisors. In the wild, constant crushing of snails, clams, and crustaceans wears the beak at the same rate it grows, maintaining a functional length.</p>
<p>In captivity, keepers who feed only frozen or soft foods eliminate the mechanical wear. The beak grows unchecked, eventually preventing the fish from opening its mouth to eat at all. This is a slow, agonising process — the fish starves over weeks while its keeper watches, often unaware of the cause until it is too late.</p>
<p>The solution is prevention: offer hard-shelled food at least 3–4 times per week for adults, and daily for juveniles whose beaks grow faster. Ramshorn snails, Malaysian trumpet snails, small clams, and crayfish are the best options. The satisfying "crunch" you hear when a pufferfish crushes a snail is the sound of proper husbandry.</p>

<h2 id="species-specific-diets">Species-Specific Diets</h2>

<h3 id="fahaka-puffer-diet">Fahaka Puffer (Tetraodon lineatus)</h3>
<p>The Fahaka is a large (up to 45 cm / 18 in), aggressive freshwater puffer with a powerful bite. It can crack cherry-stone clams and crayfish carapaces without difficulty.</p>
<ul>
  <li><strong>Staple (60 %):</strong> Ramshorn snails, pond snails, Malaysian trumpet snails, small clams (littleneck or manila), blue mussels (shell-on)</li>
  <li><strong>Supplementary (30 %):</strong> Whole market shrimp (shell-on), frozen silversides, earthworms, crayfish</li>
  <li><strong>Treats (10 %):</strong> Frozen bloodworms, cockles, squid strips</li>
  <li><strong>Feeding frequency:</strong> Every other day for adults. Fahaka are prone to obesity — a slight concavity behind the eyes indicates proper weight; a rounded profile suggests overfeeding.</li>
</ul>

<h3 id="mbu-puffer-diet">Mbu Puffer (Tetraodon mbu)</h3>
<p>The Mbu is the largest freshwater pufferfish, reaching 67 cm (26 in) and requiring a 500+ gallon tank. Its dietary needs are substantial — an adult Mbu can consume a dozen large snails in a single feeding session.</p>
<ul>
  <li><strong>Staple (60 %):</strong> Large pond snails, apple snails, clams, blue mussels, whole crayfish</li>
  <li><strong>Supplementary (30 %):</strong> Whole prawns (shell-on), frozen smelt, earthworms, green beans (blanched — Mbu puffers are one of the few pufferfish that accept vegetable matter)</li>
  <li><strong>Treats (10 %):</strong> Crab legs, squid, cockles</li>
  <li><strong>Feeding frequency:</strong> Every other day for adults. Due to the Mbu's enormous appetite, maintaining a snail-breeding colony is practically essential (see Culturing Live Food below).</li>
</ul>

<h3 id="figure-eight-puffer-diet">Figure Eight Puffer (Dichotomyctere ocellatus)</h3>
<p>A small brackish species (8 cm / 3 in max), the Figure Eight requires specific gravity of 1.005–1.008 and smaller food items proportional to its size.</p>
<ul>
  <li><strong>Staple (60 %):</strong> Small ramshorn snails, bladder snails, frozen shell-on brine shrimp</li>
  <li><strong>Supplementary (30 %):</strong> Frozen bloodworms, frozen mysis shrimp, small pieces of mussel and clam</li>
  <li><strong>Treats (10 %):</strong> Live blackworms, daphnia</li>
  <li><strong>Feeding frequency:</strong> Daily for juveniles, every other day for adults. Small portions — Figure Eights are easily overfed.</li>
</ul>

<h3 id="pea-puffer-diet">Pea Puffer (Carinotetraodon travancoricus)</h3>
<p>The smallest pufferfish in the hobby at 2.5 cm (1 in), the Pea Puffer is a freshwater species from India. Despite its size, it is an aggressive micro-predator with a pronounced beak.</p>
<ul>
  <li><strong>Staple (50 %):</strong> Baby ramshorn snails, bladder snails, small Malaysian trumpet snails</li>
  <li><strong>Supplementary (40 %):</strong> Frozen bloodworms (thawed, individual worms offered on a feeding stick), live blackworms, frozen daphnia</li>
  <li><strong>Treats (10 %):</strong> Live brine shrimp, grindal worms</li>
  <li><strong>Feeding frequency:</strong> Daily. Pea Puffers have a high metabolic rate and can lose condition quickly if underfed. Offer small amounts twice daily if possible.</li>
</ul>

<h2 id="best-foods-for-pufferfish">Best Foods for Pufferfish</h2>

<h3 id="hard-shelled-foods">Hard-Shelled Foods (Beak Maintenance)</h3>
<ul>
  <li><strong>Ramshorn snails:</strong> The gold standard. Easy to breed, appropriate for all puffer sizes, and eagerly accepted. Culture a colony in a separate container (see below).</li>
  <li><strong>Malaysian trumpet snails (MTS):</strong> Harder shells than ramshorns — excellent for larger puffers. Their burrowing habit encourages natural hunting behaviour.</li>
  <li><strong>Blue mussels:</strong> Available frozen at most supermarkets. Offer half-shell for small puffers, whole for Fahaka and Mbu. Rich in protein and omega-3 fatty acids.</li>
  <li><strong>Littleneck clams:</strong> Tougher than mussels — ideal for large puffers that need maximum beak wear. Open slightly with a knife to give smaller puffers access.</li>
  <li><strong>Crayfish:</strong> Whole crayfish provide both shell material and high-protein meat. Source from pesticide-free waters or breed your own. Appropriate for Fahaka, Mbu, and other large species.</li>
  <li><strong>Cockles:</strong> Small bivalves available frozen. Good intermediate option between mussels and clams.</li>
</ul>

<h3 id="supplementary-foods">Supplementary Foods</h3>
<ul>
  <li><strong>Frozen shrimp (shell-on):</strong> Market prawns with shells provide some beak wear plus excellent nutrition. Remove the head for smaller species.</li>
  <li><strong>Frozen bloodworms:</strong> High in protein, eagerly accepted by all species. Use as a supplement, not a staple — bloodworms alone are nutritionally incomplete.</li>
  <li><strong>Frozen mysis shrimp:</strong> Superior nutritional profile to brine shrimp, with higher protein and omega-3 content. Excellent for small to medium puffers.</li>
  <li><strong>Earthworms:</strong> Chopped for small puffers, whole for large species. Extremely nutritious and readily accepted. Source from pesticide-free garden soil or purchase from a bait supplier.</li>
  <li><strong>Squid:</strong> Cut into strips appropriate for the puffer's mouth size. High in taurine, which supports cardiac health.</li>
</ul>

<h3 id="foods-to-avoid">Foods to Avoid</h3>
<ul>
  <li><strong>Flake food and pellets:</strong> Pufferfish rarely accept them, and they provide no beak wear. Not suitable as any part of the diet.</li>
  <li><strong>Feeder fish (goldfish, rosy reds):</strong> High in thiaminase (destroys vitamin B₁), carry parasites, and provide no shell material for beak maintenance. The risks far outweigh any convenience.</li>
  <li><strong>Freeze-dried foods:</strong> Cause bloating if not pre-soaked and lack the nutritional value of frozen or live alternatives.</li>
  <li><strong>Mammalian meat:</strong> Beef heart, chicken, or other mammalian protein is too fatty and difficult for pufferfish to digest. Causes fatty liver disease with repeated feeding.</li>
</ul>

<h2 id="feeding-schedule">Feeding Schedule by Life Stage</h2>
<ul>
  <li><strong>Juvenile (under 5 cm / 2 in):</strong> Feed daily. Alternate between snails, frozen bloodworms, and frozen mysis. Small, frequent meals — juveniles have fast metabolisms and empty stomachs quickly. Offer as much as the fish consumes in 3–5 minutes, then remove uneaten food.</li>
  <li><strong>Sub-adult (5–15 cm):</strong> Feed daily to every other day, depending on species and growth rate. Increase hard-shelled food to at least 50 % of the diet. This is the critical beak-formation period — establish good shell-crushing habits now.</li>
  <li><strong>Adult (species-dependent maximum size):</strong> Feed every other day for most species. Large species (Fahaka, Mbu) can be fed every 2–3 days. Monitor body condition — a slight concavity behind the eyes and a streamlined belly indicate correct weight. A rounded, distended belly indicates overfeeding.</li>
</ul>
<p><strong>Fasting days:</strong> One fast day per week (no food at all) is beneficial for adult pufferfish. It mimics natural feeding irregularity and allows the digestive system to clear completely. Do not fast juveniles.</p>

<h2 id="beak-trimming">Beak Trimming: When Diet Is Not Enough</h2>
<p>If a pufferfish's beak becomes overgrown despite a shell-based diet — or if you have rescued a fish with an already overgrown beak — manual trimming is necessary. This is a stressful procedure for both fish and keeper and should be treated as a last resort, not routine maintenance.</p>
<p><strong>Procedure overview:</strong></p>
<ul>
  <li>Sedate the fish in a clove-oil bath (4–5 drops per litre of tank water). Wait until the fish loses equilibrium and gill movement slows to a steady, relaxed rate (5–10 minutes).</li>
  <li>Gently hold the fish in a wet towel, exposing the mouth.</li>
  <li>Using sterilised cuticle nippers, trim the beak tips back to a functional length — enough that the fish can open its mouth fully. Do not over-trim; cutting into the live tissue causes bleeding and infection risk.</li>
  <li>Return the fish to clean, aerated tank water. Recovery from sedation typically takes 10–20 minutes.</li>
  <li>Monitor for 48 hours for signs of infection at the trim site. Add a broad-spectrum antibacterial (Seachem StressGuard or equivalent) to the water as a precaution.</li>
</ul>
<p>After trimming, immediately transition to a snail-heavy diet to prevent regrowth from outpacing wear. If you are uncomfortable performing this procedure, consult an aquatic veterinarian.</p>

<h2 id="culturing-live-food">Culturing Live Food at Home</h2>
<p>Maintaining a snail colony is the single most practical step you can take as a pufferfish keeper. A self-sustaining colony eliminates ongoing food costs and ensures a constant supply of fresh, disease-free snails.</p>
<p><strong>Ramshorn snail colony setup:</strong></p>
<ul>
  <li>Use a 10–20 gallon container (a plastic storage tub works fine — no need for a glass aquarium).</li>
  <li>Add a sponge filter for gentle biological filtration and aeration.</li>
  <li>Substrate: thin layer of gravel or bare bottom.</li>
  <li>Lighting: ambient room light is sufficient. Snails are not light-dependent.</li>
  <li>Feed the snails blanched vegetables (zucchini, cucumber, spinach), algae wafers, and fish food flakes. Remove uneaten food after 24 hours.</li>
  <li>Temperature: room temperature (20–26 °C) is fine. Warmer temperatures accelerate reproduction.</li>
  <li>A starter colony of 20–30 ramshorn snails will produce hundreds within 6–8 weeks. Harvest snails as needed by dropping in a piece of vegetable overnight — snails will congregate on it for easy removal.</li>
</ul>
<p>For larger puffers (Fahaka, Mbu), also consider culturing crayfish. Dwarf crayfish (<em>Cambarellus</em> spp.) breed readily in a 20-gallon setup with plenty of hiding spots (PVC pipes, clay pots). They reach feeding size (2–3 cm) in approximately 3 months.</p>

<h2 id="nutritional-supplements">Nutritional Supplements</h2>
<p>A varied diet covers most nutritional bases, but supplementation fills gaps — particularly for captive pufferfish that lack access to the full biodiversity of wild food sources.</p>
<ul>
  <li><strong>Vitamin soak:</strong> Once weekly, soak frozen foods in a fish-specific vitamin supplement (Vita-Chem, Selcon, or equivalent) for 10 minutes before feeding. This delivers vitamins A, C, D₃, and E plus omega-3 fatty acids directly through the food.</li>
  <li><strong>Garlic extract:</strong> A natural appetite stimulant and mild antiparasitic. Soak food in fresh garlic juice (one crushed clove per tablespoon of water) once weekly. Particularly useful for picky eaters or fish recovering from illness.</li>
  <li><strong>Calcium:</strong> Essential for beak and skeletal health. Shell-on foods provide calcium naturally; for puffers that refuse shell foods, add a cuttlebone piece to the tank. It will slowly dissolve, raising calcium levels.</li>
</ul>
<p>Pufferfish are among the most rewarding aquarium fish to keep — their intelligence and personality are unmatched. Feed them correctly, and they will thrive for years. Browse The Fish Collection's <a href="/exotic-fish/pufferfish">pufferfish collection</a> for available specimens, and reach out to our team if you need advice tailoring a feeding programme to your specific species.</p>
`,
    faqs: [
      {
        question: 'How often should I feed my pufferfish?',
        answer:
          'Juveniles should be fed daily, sub-adults daily to every other day, and adults every other day with one fast day per week. Large species like the Mbu Puffer can be fed every 2–3 days. Overfeeding causes obesity and organ damage — monitor body condition and adjust frequency accordingly.',
      },
      {
        question: 'What happens if a pufferfish beak gets too long?',
        answer:
          'An overgrown beak prevents the fish from opening its mouth to eat, leading to starvation. If detected early, transitioning to a snail-heavy diet can sometimes wear the beak down naturally. In severe cases, manual trimming under clove-oil sedation is necessary. Prevention through regular hard-shelled food is far preferable to treatment.',
      },
      {
        question: 'Can pufferfish eat pellets or flake food?',
        answer:
          'Most pufferfish will refuse pellets and flakes entirely. Even if accepted, these foods provide no beak wear and are nutritionally incomplete for pufferfish. They should never be used as any part of the diet. Stick to snails, shellfish, and frozen whole foods.',
      },
      {
        question: 'How do I breed snails to feed my pufferfish?',
        answer:
          'Set up a 10–20 gallon container with a sponge filter, add 20–30 ramshorn snails, and feed them blanched vegetables and algae wafers. At room temperature, the colony will produce hundreds of snails within 6–8 weeks. Harvest by placing a piece of vegetable in the container overnight — snails congregate on it for easy removal.',
      },
      {
        question: 'Is it safe to feed pufferfish live feeder fish?',
        answer:
          'No. Feeder fish (goldfish, rosy reds) carry parasites, are high in thiaminase which destroys vitamin B₁, and provide no shell material for beak maintenance. They offer no benefit that safer foods cannot provide. Use snails, shrimp, and frozen whole foods instead.',
      },
    ],
    sources: [
      {
        title: 'The Pufferfish Manual: Care, Diet, and Husbandry',
        url: 'https://www.thepufferforum.com/forum/library/',
        publisher: 'The Puffer Forum',
      },
      {
        title: 'FishBase: Tetraodon lineatus',
        url: 'https://www.fishbase.se/summary/Tetraodon-lineatus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Dental Morphology and Beak Growth in Tetraodontidae',
        url: 'https://onlinelibrary.wiley.com/journal/10974687',
        publisher: 'Journal of Morphology',
      },
    ],
    relatedSlugs: ['exotic-fish-tank-setup', 'most-expensive-fish-world', 'pufferfish-tank-mates'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 3 — Cichlid Water Parameters
  // ──────────────────────────────────────────────
  {
    title: 'Cichlid Water Parameters',
    slug: 'cichlid-water-parameters',
    type: 'care',
    category: 'cichlid',
    topicCategory: 'water-chemistry',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-02-01',
    updatedAt: '2026-03-14',
    heroImage: '/images/care/cichlid-water-parameters.jpg',
    heroImageAlt:
      'An African cichlid aquarium with crystal-clear alkaline water, limestone rock formations, and electric-blue Mbuna cichlids',
    metaTitle:
      'Water Parameters Guide for Cichlids | Water, Tank & Diet | The Fish Collection',
    metaDescription:
      'Complete cichlid water parameter guide. pH, temperature, hardness, and TDS for African, South American, and Central American cichlids. Species-specific values.',
    quickAnswerQuestion: 'What water parameters do cichlids need?',
    quickAnswer:
      'Cichlid water parameters vary dramatically by origin. African Rift Lake cichlids (Mbuna, Peacock, Haps) need alkaline water: pH 7.8–8.6, GH 10–20 dGH, KH 10–15 dKH, and temperature 24–28 °C. South American cichlids (Discus, Oscars, Rams) require soft, acidic conditions: pH 5.5–7.0, GH 1–8 dGH, temperature 26–30 °C. Central American cichlids (Flowerhorn, Jack Dempsey) tolerate moderate parameters: pH 7.0–8.0, GH 8–15 dGH. Stability matters more than hitting exact numbers.',
    summary:
      'A species-group-specific water parameter guide for cichlid keepers, covering African Rift Lake, South American, and Central American cichlids with exact ranges, adjustment methods, and monitoring protocols.',
    keyFacts: [
      { label: 'African Cichlid pH', value: '7.8–8.6' },
      { label: 'South American Cichlid pH', value: '5.5–7.0' },
      { label: 'Central American Cichlid pH', value: '7.0–8.0' },
      { label: 'Temperature Range', value: '24–30 °C (species-dependent)' },
      { label: 'Testing Frequency', value: '2× weekly minimum' },
      { label: 'Water Change', value: '20–30 % weekly' },
    ],
    headings: [
      { id: 'why-parameters-matter', text: 'Why Water Parameters Matter for Cichlids', level: 2 },
      { id: 'african-rift-lake-cichlids', text: 'African Rift Lake Cichlids', level: 2 },
      { id: 'lake-malawi', text: 'Lake Malawi (Mbuna, Peacock, Haps)', level: 3 },
      { id: 'lake-tanganyika', text: 'Lake Tanganyika (Frontosa, Shell Dwellers, Tropheus)', level: 3 },
      { id: 'lake-victoria', text: 'Lake Victoria', level: 3 },
      { id: 'south-american-cichlids', text: 'South American Cichlids', level: 2 },
      { id: 'discus', text: 'Discus (Symphysodon spp.)', level: 3 },
      { id: 'oscars-and-geophagus', text: 'Oscars, Geophagus, and Eartheaters', level: 3 },
      { id: 'rams-and-apistos', text: 'Rams and Apistogramma', level: 3 },
      { id: 'central-american-cichlids', text: 'Central American Cichlids', level: 2 },
      { id: 'adjusting-ph', text: 'Adjusting pH Safely', level: 2 },
      { id: 'raising-ph', text: 'Raising pH (for African Cichlids)', level: 3 },
      { id: 'lowering-ph', text: 'Lowering pH (for South American Cichlids)', level: 3 },
      { id: 'hardness-adjustment', text: 'Hardness Adjustment (GH and KH)', level: 2 },
      { id: 'temperature-management', text: 'Temperature Management', level: 2 },
      { id: 'monitoring-and-testing', text: 'Monitoring and Testing Protocol', level: 2 },
      { id: 'water-change-protocol', text: 'Water Change Protocol for Cichlids', level: 2 },
      { id: 'common-parameter-mistakes', text: 'Common Parameter Mistakes', level: 2 },
    ],
    content: `
<h2 id="why-parameters-matter">Why Water Parameters Matter for Cichlids</h2>
<p>Cichlids are the most diverse family of freshwater fish on the planet — over 3,000 described species spanning four continents. That diversity means there is no single "cichlid water parameter" — a Mbuna from Lake Malawi and a Discus from the Amazon require water conditions so different they might as well be different phyla. Keeping either in the other's parameters would cause chronic stress, immune suppression, and premature death.</p>
<p>The non-negotiable rule of cichlid keeping is this: <strong>match your water to your species, not the other way around</strong>. Do not buy a Discus because you like how it looks and then hope your alkaline tap water will be "close enough." Either adjust your water to the fish's requirements or choose a species that thrives in your natural water chemistry. The second option is often the wiser one.</p>
<p>This guide provides exact parameter ranges for every major cichlid group, along with practical methods for achieving and maintaining them.</p>

<h2 id="african-rift-lake-cichlids">African Rift Lake Cichlids</h2>
<p>The East African Rift Lakes — Malawi, Tanganyika, and Victoria — are among the most alkaline freshwater bodies on Earth. Cichlids from these lakes have evolved over millions of years in hard, mineral-rich water and cannot tolerate soft, acidic conditions.</p>

<h3 id="lake-malawi">Lake Malawi (Mbuna, Peacock, Haps)</h3>
<p>Lake Malawi is the most popular source of African cichlids in the hobby. Its water is remarkably stable, which means Malawi cichlids are particularly intolerant of fluctuations.</p>
<ul>
  <li><strong>pH:</strong> 7.8–8.6 (lake average: 8.3)</li>
  <li><strong>GH:</strong> 12–18 dGH</li>
  <li><strong>KH:</strong> 10–14 dKH</li>
  <li><strong>Temperature:</strong> 24–28 °C (76–82 °F). Mbuna prefer the lower end (24–26 °C); Peacocks and Haps tolerate the full range.</li>
  <li><strong>TDS:</strong> 200–350 ppm</li>
  <li><strong>Ammonia / Nitrite:</strong> 0 ppm</li>
  <li><strong>Nitrate:</strong> Below 20 ppm (Malawi cichlids are less sensitive to nitrate than South American species, but lower is always better)</li>
</ul>
<p>Malawi cichlids produce heavy bioload due to their aggression-driven metabolism and herbivorous grazing. Overstock intentionally (1 fish per 3–5 gallons for Mbuna) to spread aggression, and compensate with robust filtration rated for 8–10× turnover.</p>

<h3 id="lake-tanganyika">Lake Tanganyika (Frontosa, Shell Dwellers, Tropheus)</h3>
<p>Lake Tanganyika is deeper, older, and even more alkaline than Malawi. Its cichlids include some of the hobby's most fascinating species — from the regal Frontosa to the tiny shell-dwelling <em>Neolamprologus multifasciatus</em>.</p>
<ul>
  <li><strong>pH:</strong> 8.0–9.2 (lake average: 8.6–9.0)</li>
  <li><strong>GH:</strong> 14–20 dGH</li>
  <li><strong>KH:</strong> 14–18 dKH</li>
  <li><strong>Temperature:</strong> 24–27 °C (75–80 °F). Tanganyikan cichlids prefer slightly cooler water than Malawi species.</li>
  <li><strong>TDS:</strong> 350–550 ppm</li>
  <li><strong>Ammonia / Nitrite:</strong> 0 ppm</li>
  <li><strong>Nitrate:</strong> Below 10 ppm. Tropheus in particular are extremely sensitive to nitrate accumulation — levels above 20 ppm trigger the infamous "Tropheus bloat."</li>
</ul>
<p>Tanganyikan water is the hardest to replicate from soft tap water sources. Crushed coral substrate, limestone rock, and Rift Lake buffer salts are typically required (see pH adjustment section below).</p>

<h3 id="lake-victoria">Lake Victoria</h3>
<p>Lake Victoria cichlids are less commonly kept but deserve mention — many species are critically endangered due to Nile Perch introduction and eutrophication, and captive breeding programmes in the hobby play a genuine conservation role.</p>
<ul>
  <li><strong>pH:</strong> 7.5–8.5</li>
  <li><strong>GH:</strong> 8–14 dGH</li>
  <li><strong>KH:</strong> 8–12 dKH</li>
  <li><strong>Temperature:</strong> 24–28 °C (76–82 °F)</li>
  <li><strong>TDS:</strong> 150–300 ppm</li>
</ul>
<p>Victoria cichlids are generally more adaptable to parameter variation than Malawi or Tanganyikan species, but the same stability principles apply.</p>

<h2 id="south-american-cichlids">South American Cichlids</h2>
<p>South American cichlids originate from a completely different hydrochemistry: the Amazon basin, Orinoco watershed, and their tributaries. These waters are typically soft, acidic, and warm — often stained dark brown with tannins from decaying vegetation (blackwater habitats).</p>

<h3 id="discus">Discus (Symphysodon spp.)</h3>
<p>Discus are the most parameter-sensitive cichlids in the hobby. They demand pristine water and punish neglect with disease, colour loss, and death. If you are not prepared to commit to their requirements, choose a different fish.</p>
<ul>
  <li><strong>pH:</strong> 5.5–6.8 (wild-caught require the lower end; captive-bred strains tolerate up to 7.0)</li>
  <li><strong>GH:</strong> 1–4 dGH</li>
  <li><strong>KH:</strong> 1–3 dKH</li>
  <li><strong>Temperature:</strong> 28–30 °C (82–86 °F). This is notably warmer than most tropical fish — tankmate selection must account for this.</li>
  <li><strong>TDS:</strong> 50–150 ppm</li>
  <li><strong>Ammonia / Nitrite:</strong> 0 ppm (Discus are exceptionally sensitive to ammonia — even 0.25 ppm causes gill irritation and clamped fins)</li>
  <li><strong>Nitrate:</strong> Below 10 ppm, ideally below 5 ppm. This often means 30–50 % water changes twice weekly for heavily stocked Discus tanks.</li>
</ul>
<p>An RO/DI system is virtually mandatory for Discus keeping unless your tap water is naturally soft and acidic. Remineralise RO water with a Discus-specific buffer (Seachem Discus Buffer + Equilibrium, or equivalent) to achieve your target parameters. Browse The Fish Collection's <a href="/exotic-fish/discus">Discus collection</a> for premium captive-bred specimens.</p>

<h3 id="oscars-and-geophagus">Oscars, Geophagus, and Eartheaters</h3>
<p>These are the more adaptable South Americans — robust fish that tolerate a wider parameter range while still preferring soft, acidic conditions.</p>
<ul>
  <li><strong>pH:</strong> 6.0–7.5</li>
  <li><strong>GH:</strong> 4–12 dGH</li>
  <li><strong>KH:</strong> 3–8 dKH</li>
  <li><strong>Temperature:</strong> 24–28 °C (76–82 °F)</li>
  <li><strong>TDS:</strong> 100–300 ppm</li>
  <li><strong>Nitrate:</strong> Below 30 ppm (Oscars are hardier than Discus but still sensitive to prolonged elevated nitrate)</li>
</ul>
<p>Oscars produce enormous bioload for their body size — a single adult Oscar generates as much waste as 10–15 community fish. Oversized filtration (10–12× turnover) and 30 % weekly water changes are baseline maintenance. See The Fish Collection's <a href="/exotic-fish/oscar">Oscar collection</a> for available specimens.</p>

<h3 id="rams-and-apistos">Rams and Apistogramma</h3>
<p>German Blue Rams (<em>Mikrogeophagus ramirezi</em>) and Apistogramma species are dwarf cichlids from South American streams and creeks. They are among the most parameter-sensitive freshwater fish after Discus.</p>
<ul>
  <li><strong>pH:</strong> 5.0–6.5 (Apistogramma; many species breed only below pH 6.0) / 6.0–7.0 (Rams)</li>
  <li><strong>GH:</strong> 1–5 dGH</li>
  <li><strong>KH:</strong> 0–3 dKH</li>
  <li><strong>Temperature:</strong> 27–30 °C (80–86 °F) for Rams; 24–28 °C for most Apistogramma</li>
  <li><strong>TDS:</strong> 30–100 ppm</li>
</ul>
<p>These fish thrive in blackwater setups with Indian almond leaves, peat filtration, and subdued lighting. The tannin-rich water also has mild antifungal and antibacterial properties, reducing disease incidence.</p>

<h2 id="central-american-cichlids">Central American Cichlids</h2>
<p>Central American cichlids — Flowerhorn (hybrid), Jack Dempsey, Firemouth, Convict — originate from moderately hard, slightly alkaline rivers and lakes. They are among the most adaptable cichlids, tolerating a wide parameter range.</p>
<ul>
  <li><strong>pH:</strong> 7.0–8.0</li>
  <li><strong>GH:</strong> 8–15 dGH</li>
  <li><strong>KH:</strong> 6–12 dKH</li>
  <li><strong>Temperature:</strong> 24–30 °C (76–86 °F). Flowerhorns prefer 28–31 °C for optimal colour and kok development.</li>
  <li><strong>TDS:</strong> 150–400 ppm</li>
  <li><strong>Nitrate:</strong> Below 30 ppm</li>
</ul>
<p>Most North American and European tap water falls within acceptable Central American cichlid parameters without adjustment, making them excellent choices for keepers who prefer not to modify their water chemistry. The Fish Collection's <a href="/exotic-fish/cichlid">cichlid collection</a> includes premium Flowerhorn and other Central American species.</p>

<h2 id="adjusting-ph">Adjusting pH Safely</h2>
<p>The cardinal rule of pH adjustment: <strong>change slowly</strong>. A sudden pH shift of more than 0.3 units in a 24-hour period can kill fish or trigger fatal osmotic stress. Always adjust over days or weeks, never hours.</p>

<h3 id="raising-ph">Raising pH (for African Cichlids)</h3>
<ul>
  <li><strong>Crushed coral substrate:</strong> The simplest method. Use as the primary substrate (2–3 cm depth) or in a media bag in the filter. It slowly dissolves, raising pH to 7.8–8.2 and buffering KH. Self-regulating — dissolution slows as pH rises.</li>
  <li><strong>Limestone / Texas holey rock:</strong> Decorative and functional. Leaches calcium carbonate into the water, raising pH, GH, and KH simultaneously.</li>
  <li><strong>Rift Lake buffer salts:</strong> Commercial products (Seachem Malawi/Victoria Buffer, Tanganyika Buffer) provide precise pH targeting. Dissolve in replacement water before adding to the tank — never dose directly into a tank containing fish.</li>
  <li><strong>Baking soda (sodium bicarbonate):</strong> Raises KH directly, which stabilises and raises pH. Use 1 teaspoon per 20 litres to raise KH by approximately 1 dKH. Dissolve fully before adding.</li>
</ul>

<h3 id="lowering-ph">Lowering pH (for South American Cichlids)</h3>
<ul>
  <li><strong>RO/DI water:</strong> The most reliable method. Blend RO water with tap water to reduce GH, KH, and TDS, which naturally lowers and destabilises pH (then stabilise at your target using appropriate buffers).</li>
  <li><strong>Indian almond leaves (Terminalia catappa):</strong> Release tannins and humic acids that lower pH naturally. Use 1 large leaf per 40 litres. Replace as they decompose (every 2–3 weeks). Also provide antimicrobial benefits.</li>
  <li><strong>Peat moss:</strong> Place in a media bag in the filter. Releases tannins and acids that lower pH to 5.5–6.5 depending on quantity. Replaces every 4–6 weeks. Stains water amber — desirable in blackwater setups, less so in display tanks.</li>
  <li><strong>CO₂ injection:</strong> Lowers pH by forming carbonic acid. Effective and precise but requires monitoring — excessive CO₂ drops pH dangerously and can suffocate fish. Only recommended for experienced keepers with pH controllers.</li>
</ul>
<p><strong>Avoid:</strong> "pH Up" and "pH Down" chemical products. These provide temporary adjustment without addressing the underlying KH buffer, causing pH to bounce unpredictably — more dangerous than a stable pH that is slightly outside the ideal range.</p>

<h2 id="hardness-adjustment">Hardness Adjustment (GH and KH)</h2>
<p>GH (general hardness) measures dissolved calcium and magnesium — essential minerals for bone development, egg formation, and osmoregulation. KH (carbonate hardness) measures bicarbonate concentration — the water's buffering capacity against pH swings.</p>
<ul>
  <li><strong>To increase GH:</strong> Add Seachem Equilibrium (or equivalent) to replacement water. Dose at 1 tablespoon per 80 litres to raise GH by approximately 3 dGH. Crushed coral and limestone also raise GH passively.</li>
  <li><strong>To increase KH:</strong> Add sodium bicarbonate (baking soda) at 1 teaspoon per 20 litres per 1 dKH increase. Or use commercial KH buffer products.</li>
  <li><strong>To decrease GH and KH:</strong> Blend tap water with RO/DI water. For example, if your tap water is 15 dGH and you need 5 dGH, mix 1 part tap to 2 parts RO.</li>
</ul>
<p>Always adjust replacement water <em>before</em> adding it to the tank during water changes. Pre-mix in a separate container, test parameters, and only add to the aquarium once values match the display tank.</p>

<h2 id="temperature-management">Temperature Management</h2>
<p>Temperature stability is as important as hitting the correct range. A 2 °C fluctuation within a day stresses cichlids and suppresses immune function — opening the door to ich, bacterial infections, and parasitic outbreaks.</p>
<ul>
  <li>Use a titanium heater with an <strong>external digital controller</strong> (Inkbird ITC-308 or equivalent). Never rely on a heater's built-in thermostat alone — they drift and can fail in the "on" position, cooking the tank.</li>
  <li>For tanks above 200 gallons, use two heaters (each rated for 50–60 % of the total volume) placed at opposite ends. This provides even heat distribution and redundancy.</li>
  <li>Mount a digital thermometer at the opposite end of the tank from the heater to measure the true ambient temperature, not the heated output.</li>
  <li>During water changes, pre-heat replacement water to within 1 °C of the tank temperature. Large volumes of cold water during a change are a common trigger for ich outbreaks in cichlids.</li>
</ul>

<h2 id="monitoring-and-testing">Monitoring and Testing Protocol</h2>
<p>You cannot manage what you do not measure. The following testing schedule is the minimum for cichlid systems:</p>
<ul>
  <li><strong>Twice weekly:</strong> Ammonia, nitrite, nitrate, pH. Use liquid reagent test kits (API Master Kit or equivalent) — test strips are inaccurate and unreliable.</li>
  <li><strong>Weekly:</strong> GH, KH, temperature (verify digital readings against a reference thermometer monthly).</li>
  <li><strong>Monthly:</strong> TDS (using a digital TDS meter), calibrate pH meter with buffer solutions (4.0 and 7.0).</li>
</ul>
<p>Record results in a logbook or spreadsheet. Trends reveal problems before crises: a slow upward nitrate drift over 4 weeks indicates declining filter performance or overfeeding. A gradual pH drop signals KH depletion. Catching these trends early prevents livestock losses.</p>

<h2 id="water-change-protocol">Water Change Protocol for Cichlids</h2>
<p>Weekly water changes are the single most important maintenance task. No amount of filtration eliminates the need for fresh water — filters convert toxins but do not remove them from the system.</p>
<ul>
  <li><strong>African Cichlids:</strong> 20–30 % weekly. Match replacement water to tank parameters (pH, GH, KH, temperature) before adding.</li>
  <li><strong>Discus:</strong> 30–50 % twice weekly for bare-bottom grow-out tanks. 25–30 % twice weekly for display tanks. Discus produce growth-inhibiting hormones that accumulate in the water — frequent changes are essential for healthy development.</li>
  <li><strong>Oscars / Large South Americans:</strong> 30 % weekly minimum. These high-bioload fish benefit from larger changes (40–50 %) if parameter matching is precise.</li>
  <li><strong>Dwarf Cichlids (Rams, Apistos):</strong> 15–20 % weekly. Smaller, more frequent changes prevent parameter swings in the soft, low-KH water these fish require.</li>
</ul>
<p>Use a gravel vacuum during changes to remove mulm from substrate interstices. In bare-bottom Discus tanks, siphon directly from the bottom to remove all visible waste.</p>

<h2 id="common-parameter-mistakes">Common Parameter Mistakes</h2>
<ul>
  <li><strong>Mixing African and South American cichlids.</strong> Their parameter requirements are diametrically opposed. There is no compromise pH that satisfies both — one group will always be stressed. Do not attempt this combination.</li>
  <li><strong>Chasing a specific pH number.</strong> A stable pH of 7.5 is better for your Discus than a pH that swings between 6.0 and 7.0 daily because you are over-dosing pH-lowering products. Stability first, precision second.</li>
  <li><strong>Ignoring KH.</strong> Low KH (below 2 dKH) makes pH dangerously unstable. Even in soft-water setups, maintain minimum KH to prevent overnight pH crashes caused by CO₂ accumulation.</li>
  <li><strong>Using untreated tap water.</strong> Chloramine (used in most municipal water supplies) is lethal to fish and also kills beneficial filter bacteria. Always dechlorinate with a quality conditioner (Seachem Prime or equivalent) before adding to the tank.</li>
  <li><strong>Temperature-mismatched water changes.</strong> Adding cold replacement water triggers ich in cichlids with remarkable reliability. Pre-heat all replacement water to within 1 °C of the tank.</li>
  <li><strong>Testing only when problems arise.</strong> By the time fish show visible symptoms, parameters have usually been off for days or weeks. Routine testing catches problems before they become emergencies.</li>
</ul>
<p>Understanding and maintaining correct water parameters is the foundation of cichlid keeping. Get the water right, and everything else — health, colour, breeding behaviour — follows naturally. The Fish Collection's <a href="/exotic-fish/cichlid">cichlid collection</a> includes species from every major group discussed above, each shipped with species-specific care sheets. Reach out to our team for personalised parameter advice before your purchase.</p>
`,
    faqs: [
      {
        question: 'What pH do African cichlids need?',
        answer:
          'African Rift Lake cichlids need alkaline water. Lake Malawi species require pH 7.8–8.6, Lake Tanganyika species need pH 8.0–9.2, and Lake Victoria species prefer pH 7.5–8.5. Use crushed coral substrate, limestone rock, or commercial Rift Lake buffer salts to achieve and maintain these levels.',
      },
      {
        question: 'Can I keep Discus in hard water?',
        answer:
          'Captive-bred Discus strains can tolerate moderately hard water (up to 8 dGH, pH 7.0) but will not display optimal colour or breeding behaviour. Wild-caught Discus require soft, acidic water (GH 1–4, pH 5.5–6.5) without exception. For best results with any Discus, an RO/DI system to achieve soft water is strongly recommended.',
      },
      {
        question: 'How often should I test cichlid water parameters?',
        answer:
          'Test ammonia, nitrite, nitrate, and pH at least twice weekly using liquid reagent kits. Test GH, KH, and temperature weekly. Calibrate pH meters and check TDS monthly. Record all results to track trends — gradual parameter drift is the early warning sign of bigger problems.',
      },
      {
        question: 'Why does my cichlid tank pH keep dropping?',
        answer:
          'pH drops occur when KH (buffering capacity) is depleted. Biological filtration produces acid as a byproduct of the nitrogen cycle, which consumes KH over time. Solution: test KH regularly and replenish through water changes with appropriately buffered replacement water, or add crushed coral / baking soda to maintain KH above 2 dKH.',
      },
      {
        question: 'Can I mix African and South American cichlids?',
        answer:
          'No. African cichlids require hard, alkaline water (pH 7.8–9.0, GH 10–20), while South American cichlids need soft, acidic water (pH 5.5–7.0, GH 1–8). There is no parameter compromise that satisfies both groups — one will always be chronically stressed, leading to disease and shortened lifespan.',
      },
    ],
    sources: [
      {
        title: 'The Cichlid Fishes: Nature\'s Grand Experiment in Evolution',
        url: 'https://www.amazon.com/Cichlid-Fishes-Natures-Experiment-Evolution/dp/0738205281',
        publisher: 'George Barlow, Perseus Publishing',
      },
      {
        title: 'Water Chemistry of Lake Malawi and Lake Tanganyika',
        url: 'https://www.cichlidae.com/article.php?id=168',
        publisher: 'Cichlidae.com',
      },
      {
        title: 'FishBase: Family Cichlidae',
        url: 'https://www.fishbase.se/Summary/FamilySummary.php?ID=349',
        publisher: 'FishBase Consortium',
      },
    ],
    relatedSlugs: ['exotic-fish-tank-setup', 'most-expensive-fish-world', 'cichlid-tank-mates'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 4 — Stingray Tank Setup & Water Parameters
  // ──────────────────────────────────────────────
  {
    title: 'Stingray Tank Setup & Water Parameters',
    slug: 'stingray-tank-setup',
    type: 'care',
    category: 'stingray',
    topicCategory: 'tank-setup',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-04',
    updatedAt: '2026-03-20',
    heroImage: '/images/care/stingray-tank-setup.jpg',
    heroImageAlt:
      'A professional 500-gallon stingray aquarium with fine sand substrate, sump filtration, and a Motoro stingray gliding across the bottom',
    metaTitle:
      'Stingray Tank Setup & Water Parameters | The Fish Collection',
    metaDescription:
      'Expert stingray tank setup guide. Sand substrate, round tank options, sump filtration, soft acidic water parameters, and sizing for Potamotrygon species.',
    quickAnswerQuestion: 'What tank setup do freshwater stingrays need?',
    quickAnswer:
      'Freshwater stingrays need a minimum 300-gallon tank with an 8 × 4-foot sand-bottom footprint, a sump filtration system rated for 10–12× turnover per hour, and strict water parameters: pH 5.5–6.8, temperature 26–28 °C, GH 1–6 dGH, ammonia and nitrite at 0 ppm, and nitrate below 10 ppm. Fine river sand substrate (1–2 mm, 3–5 cm depth) is mandatory. Minimal décor maximises available floor space for these disc-shaped bottom dwellers.',
    summary:
      'A specification-level guide to building the optimal aquarium system for freshwater stingrays, covering tank dimensions, round vs rectangular tank design, sand substrate requirements, sump filtration, water chemistry, and cycling protocols.',
    keyFacts: [
      { label: 'Minimum Tank Size', value: '300 gal (1,135 L)' },
      { label: 'Minimum Footprint', value: '8 × 4 ft' },
      { label: 'Temperature', value: '26–28 °C (79–82 °F)' },
      { label: 'pH Range', value: '5.5–6.8' },
      { label: 'Substrate', value: 'Fine sand, 1–2 mm, 3–5 cm deep' },
      { label: 'Filtration Turnover', value: '10–12× tank volume/hr' },
    ],
    headings: [
      { id: 'why-stingray-tanks-are-different', text: 'Why Stingray Tanks Are Different', level: 2 },
      { id: 'tank-dimensions-and-shape', text: 'Tank Dimensions and Shape', level: 2 },
      { id: 'rectangular-vs-round', text: 'Rectangular vs Round Tanks', level: 3 },
      { id: 'sizing-by-species', text: 'Sizing by Species', level: 3 },
      { id: 'substrate-requirements', text: 'Substrate Requirements', level: 2 },
      { id: 'filtration-system-design', text: 'Filtration System Design', level: 2 },
      { id: 'sump-configuration', text: 'Sump Configuration for Stingrays', level: 3 },
      { id: 'supplementary-filtration', text: 'Supplementary Filtration and UV', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'water-change-protocol', text: 'Water Change Protocol', level: 2 },
      { id: 'heating-and-temperature-control', text: 'Heating and Temperature Control', level: 2 },
      { id: 'lighting-for-stingrays', text: 'Lighting for Stingrays', level: 2 },
      { id: 'cycling-before-adding-rays', text: 'Cycling Before Adding Rays', level: 2 },
      { id: 'stingray-setup-checklist', text: 'Final Setup Checklist', level: 2 },
    ],
    content: `
<h2 id="why-stingray-tanks-are-different">Why Stingray Tanks Are Different</h2>
<p>Freshwater stingrays break almost every conventional aquarium rule. Standard fishkeeping wisdom focuses on water volume — stingrays demand floor space. Most aquarists think in gallons — stingray keepers think in square feet of bottom area. The fish's disc-shaped body, bottom-dwelling lifestyle, and habit of burying in substrate mean that tank design priorities are fundamentally different from those for pelagic species like <a href="/exotic-fish/arowana">Arowana</a> or cichlids.</p>
<p>Compounding this, stingrays are among the most water-quality-sensitive freshwater fish in the hobby. Their large, permeable ventral surface absorbs dissolved waste faster than streamlined fish of equivalent mass. A nitrate level that an Oscar tolerates comfortably can send a stingray into death curl. The tank you build is not just a home — it is a medical-grade life-support system that must maintain near-pristine conditions for animals that may live 15–20 years.</p>

<h2 id="tank-dimensions-and-shape">Tank Dimensions and Shape</h2>

<h3 id="rectangular-vs-round">Rectangular vs Round Tanks</h3>
<p>The stingray hobby debates rectangular versus round (or oval) tanks endlessly. Both have merit:</p>
<p><strong>Rectangular tanks</strong> are the practical standard. They are cheaper to manufacture, easier to source, fit against walls, and integrate straightforwardly with sump plumbing. The downside is dead corners — stingrays cannot navigate sharp 90-degree corners efficiently, and detritus accumulates in corners where flow stagnates. Mitigate by directing return flow across the bottom at a 30-degree angle toward each corner, and by manually siphoning corners during water changes.</p>
<p><strong>Round or oval tanks</strong> eliminate dead corners entirely. Stingrays patrol the curved perimeter naturally, water flow distributes evenly, and detritus migrates toward a central drain where it can be captured by the filtration system. The downsides are cost (custom round tanks cost 2–3× more than rectangular equivalents), space inefficiency (a round footprint wastes room corners), and plumbing complexity (overflow placement requires custom engineering).</p>
<p>For most keepers, a rectangular tank with rounded internal corners (acrylic construction allows this) offers the best compromise. If budget allows, a purpose-built oval or D-shaped tank is the optimal choice for a dedicated stingray system.</p>

<h3 id="sizing-by-species">Sizing by Species</h3>
<ul>
  <li><strong>Pearl Stingray, Hystrix (disc width 30–40 cm adult):</strong> 180 gallons minimum, 6 × 3-foot footprint.</li>
  <li><strong>Motoro (disc width 40–60 cm adult):</strong> 300 gallons minimum, 8 × 4-foot footprint.</li>
  <li><strong>Black Diamond Polka Dot (disc width 45–60 cm adult):</strong> 300 gallons minimum, 8 × 4-foot footprint.</li>
  <li><strong>Breeding pair (any species above):</strong> 500+ gallons, 10 × 4-foot footprint or larger.</li>
</ul>
<p>Tank height should be 18–24 inches. Taller tanks add volume without adding usable space for rays and increase hydrostatic pressure on bottom panels. Acrylic is strongly preferred over glass for stingray tanks — it is lighter, more impact-resistant, and allows curved panel construction. For tanks exceeding 300 gallons, custom acrylic with eurobracing is the industry standard.</p>

<h2 id="substrate-requirements">Substrate Requirements</h2>
<p>Substrate choice is the single most critical non-water-quality decision in stingray keeping. <strong>Fine river sand (1–2 mm grain size) is the only acceptable substrate.</strong></p>
<p>Why sand is mandatory:</p>
<ul>
  <li>Stingrays bury themselves as a primary comfort behaviour and stress response. Inability to bury causes chronic stress and immune suppression.</li>
  <li>Their ventral surface is soft and unscaled — direct contact with gravel, crushed coral, or rough substrate causes abrasions that rapidly become infected.</li>
  <li>Sand allows natural feeding behaviour (rays pin prey to the substrate and manoeuvre it toward their ventral mouth).</li>
</ul>
<p><strong>Recommended sand types:</strong> Pool filter sand (silica, #20 grade), play sand (washed and rinsed thoroughly), or natural river sand. Avoid coloured/coated sand (dyes can leach), aragonite sand (raises pH above stingray tolerance), and any substrate with sharp edges (crushed shell, crushed coral).</p>
<p><strong>Depth:</strong> 3–5 cm. Deep enough for rays to bury with just their eyes and spiracles exposed, shallow enough to prevent anaerobic pockets. Stir the sand bed during each water change to prevent hydrogen sulphide accumulation in deeper zones.</p>

<h2 id="filtration-system-design">Filtration System Design</h2>

<h3 id="sump-configuration">Sump Configuration for Stingrays</h3>
<p>A sump is mandatory for stingray tanks. No canister or hang-on-back system can handle the bioload of an adult Potamotrygon species. Design your sump at 40–60 % of the display tank volume — for a 300-gallon display, use a 120–180 gallon sump.</p>
<p><strong>Four-chamber sump design:</strong></p>
<ul>
  <li><strong>Chamber 1 — Mechanical:</strong> Dual filter sock holders (200-micron) on the overflow drain. Stingrays produce copious mucus and large waste particles — change socks every 2–3 days. Below the socks: 30 PPI coarse foam pad for secondary mechanical capture.</li>
  <li><strong>Chamber 2 — Biological:</strong> 15–20 litres of sintered-glass biomedia (Siporax, Matrix, or equivalent with 800+ m²/L surface area). Water flows slowly through baffled media trays. Never replace more than 25 % of biomedia at once.</li>
  <li><strong>Chamber 3 — Chemical/Equipment:</strong> Activated carbon in a media reactor (200 g per 100 litres, replaced every 2 weeks). UV steriliser (40–55 W for 300 gallons) — highly recommended for stingrays, which are susceptible to bacterial infections. Temperature probe and pH probe holders.</li>
  <li><strong>Chamber 4 — Return:</strong> Return pump delivering 10–12× total system turnover per hour. For a 300-gallon display + 150-gallon sump (450 total), target 4,500–5,400 GPH at zero head. Account for head pressure loss — a pump rated for 6,000 GPH at zero head delivers approximately 4,500 GPH at a 4-foot head height.</li>
</ul>
<p>Position the overflow intakes at the bottom of the display tank — stingray waste settles on the bottom, and bottom-draining overflow designs capture detritus far more efficiently than surface-skimming weirs alone. A combined bottom drain plus surface skim is ideal.</p>

<h3 id="supplementary-filtration">Supplementary Filtration and UV</h3>
<p>Run a large canister filter (Fluval FX6 or equivalent, rated for 400+ gallons) in parallel with the sump for biological redundancy. If the sump pump fails, the canister maintains water movement and biological filtration until you intervene.</p>
<p>UV sterilisation deserves special emphasis for stingray systems. Stingrays are highly susceptible to bacterial infections — their large, permeable ventral disc is essentially an open surface exposed to every pathogen in the water column. A properly sized UV steriliser (40+ watts for 300 gallons, at a flow rate slow enough for effective pathogen kill) reduces waterborne bacterial and parasitic loads significantly. This is not optional equipment — it is a core component of responsible stingray husbandry.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Stingrays come from soft, acidic blackwater habitats. Replicating these conditions is essential:</p>
<ul>
  <li><strong>Temperature:</strong> 26–28 °C (79–82 °F). Stability within ±0.5 °C is the target. Temperature swings trigger stress responses including death curl.</li>
  <li><strong>pH:</strong> 5.5–6.8. Most Potamotrygon species thrive at pH 6.0–6.5. Avoid pH above 7.0 — alkaline conditions interfere with stingray osmoregulation.</li>
  <li><strong>General Hardness:</strong> 1–6 dGH. Soft water replicates their natural habitat and supports proper ion balance across the gill and disc membranes.</li>
  <li><strong>Carbonate Hardness:</strong> 1–4 dKH. Enough to buffer against pH crashes but not so high that pH is driven above target range.</li>
  <li><strong>Ammonia:</strong> 0 ppm — absolutely non-negotiable. Even trace ammonia (0.25 ppm) causes gill irritation, appetite loss, and immune suppression in stingrays.</li>
  <li><strong>Nitrite:</strong> 0 ppm.</li>
  <li><strong>Nitrate:</strong> Below 10 ppm preferred; below 20 ppm absolute maximum. Stingrays display stress behaviours (curled disc edges, lethargy, colour fading) at nitrate levels that most tropical fish tolerate without issue.</li>
  <li><strong>TDS:</strong> 50–150 ppm.</li>
</ul>
<p>If your tap water is hard and alkaline (as is common in much of the US), invest in an RO/DI system. Blend RO water with a small amount of tap water or remineralise with a product like Seachem Equilibrium to achieve target GH without overshooting pH. Indian almond leaves, peat moss in the sump, and alder cones naturally acidify and soften water while releasing beneficial tannins.</p>

<h2 id="water-change-protocol">Water Change Protocol</h2>
<p>Stingrays demand aggressive water change schedules — there is no workaround:</p>
<ul>
  <li><strong>Minimum:</strong> 30–40 % weekly.</li>
  <li><strong>Recommended:</strong> 50 % twice weekly for tanks running near stocking capacity.</li>
  <li><strong>During quarantine or illness:</strong> 25 % daily until the issue resolves.</li>
</ul>
<p>All replacement water must be temperature-matched (within 1 °C of tank water), dechlorinated, and parameter-tested before addition. Even a 2 °C temperature differential during a 50 % water change can stress a stingray enough to trigger disc curling and appetite loss. Pre-heat replacement water in a separate container or use an inline water heater on your water-change line.</p>
<p>During water changes, siphon the sand bed thoroughly. Stir the sand in sections to release trapped detritus, and direct the siphon hose along the bottom perimeter where waste accumulates. Corners (in rectangular tanks) require extra attention.</p>

<h2 id="heating-and-temperature-control">Heating and Temperature Control</h2>
<p>Use titanium heaters rated for your total system volume (display + sump). For a 300-gallon display with a 150-gallon sump, total volume is 450 gallons — use two 500-watt titanium heaters for redundancy, each connected to its own external digital temperature controller (Inkbird ITC-308 or equivalent).</p>
<p>Place both heaters in the sump, not the display tank. Stingrays rest directly on the substrate and will park on top of a display-mounted heater, burning their ventral surface. The resulting wound is extremely difficult to heal and often leads to fatal secondary infection.</p>
<p>Dual-controller redundancy is critical: if one heater's thermostat fails in the "on" position, the controller cuts power before the water overheats. If one heater fails entirely, the second maintains temperature until you replace the failed unit. For a 450-gallon system worth $5,000–$100,000+ in livestock, two $35 controllers are essential insurance.</p>

<h2 id="lighting-for-stingrays">Lighting for Stingrays</h2>
<p>Stingrays are crepuscular — most active at dawn and dusk — and prefer subdued lighting. Intense overhead lighting causes them to bury or huddle in shaded areas, reducing their activity and display value.</p>
<ul>
  <li><strong>Primary lighting:</strong> A dimmable full-spectrum LED at 30–50 % intensity (6,500 K). Run 8–10 hours daily with 60-minute sunrise/sunset ramp. Never use abrupt on/off — startled stingrays can thrash and injure themselves on tank walls.</li>
  <li><strong>Moonlight:</strong> A low-intensity blue or warm-white LED (2–5 watts) running overnight. This allows observation of natural nocturnal behaviour and prevents the fish from being startled by sudden morning illumination.</li>
</ul>
<p>Avoid high-intensity lighting unless you have provided ample shaded areas using driftwood positioned above the sand line. Stingrays will actively avoid bright zones, which defeats the purpose of a display tank.</p>

<h2 id="cycling-before-adding-rays">Cycling Before Adding Rays</h2>
<p>No stingray should enter an uncycled or incompletely cycled tank. The standard fishless cycling protocol applies:</p>
<ul>
  <li>Set up the full system (tank, sump, heaters, sand, circulation) and run for 24 hours to verify function and check for leaks.</li>
  <li>Add pure ammonia to 2–4 ppm.</li>
  <li>Dose bottled nitrifying bacteria (Seachem Stability, Dr. Tim's One and Only) to accelerate colonisation.</li>
  <li>Test ammonia and nitrite daily with liquid reagent kits. Maintain ammonia at 2 ppm by re-dosing when it hits zero.</li>
  <li>The cycle is complete when both ammonia and nitrite drop from 2 ppm to 0 ppm within 24 hours. Expect 4–6 weeks.</li>
  <li>Perform a 70 % water change after cycling to dilute accumulated nitrate.</li>
</ul>
<p>After cycling, run the system at target parameters (temperature, pH, GH) for at least one additional week before introducing a ray. This confirms stability under real operating conditions. Verify that all equipment — especially backup systems — functions correctly.</p>

<h2 id="stingray-setup-checklist">Final Setup Checklist</h2>
<ul>
  <li>Tank: 300+ gallons, 8 × 4-foot minimum footprint, acrylic preferred, 18–24 inches height</li>
  <li>Stand: steel frame rated for 2,000+ kg, on ground-floor concrete if possible</li>
  <li>Substrate: fine river sand, 1–2 mm grain, 3–5 cm depth</li>
  <li>Sump: 120–180 gallons, 4-chamber design with bottom drain integration</li>
  <li>Biomedia: 15–20 L sintered glass (800+ m²/L surface area)</li>
  <li>Return pump: 6,000+ GPH at zero head (delivering 4,500+ GPH at operating head)</li>
  <li>Canister filter: supplementary redundancy, rated 400+ gallons</li>
  <li>UV steriliser: 40–55 W at appropriate flow rate</li>
  <li>Heaters: 2 × 500 W titanium in sump, each on external controller</li>
  <li>Lighting: dimmable LED at 30–50 % + moonlight</li>
  <li>Water: 26–28 °C, pH 5.5–6.8, GH 1–6 dGH, nitrate below 10 ppm</li>
  <li>Nitrogen cycle: complete (ammonia and nitrite 0 ppm within 24 hrs)</li>
  <li>Backup power: UPS for pump + heaters; battery air pump minimum</li>
  <li>Safety equipment: Kevlar-lined gloves, long-handled tools, hot-water first-aid kit</li>
</ul>
<p>Once every item is verified, your system is ready to receive a stingray. The Fish Collection ships all <a href="/exotic-fish/stingray">stingray specimens</a> with detailed acclimation instructions and post-sale support. For a broader overview of stingray husbandry including feeding and health, see our <a href="/blog/freshwater-stingray-care-guide">freshwater stingray care guide</a>.</p>
`,
    faqs: [
      {
        question: 'Can you keep a stingray in a standard rectangular tank?',
        answer:
          'Yes, rectangular tanks are the most common and practical option for stingrays. While round or oval tanks eliminate dead corners and improve water flow, rectangular tanks work well when you direct return flow across the bottom at an angle and manually siphon corners during water changes. Acrylic rectangular tanks with rounded internal corners offer the best compromise.',
      },
      {
        question: 'Why do stingrays need sand substrate?',
        answer:
          'Stingrays need sand because they bury themselves as a natural comfort and stress-relief behaviour. Their soft, unscaled ventral surface is extremely vulnerable to abrasion — gravel, crushed coral, or bare glass cause wounds that rapidly become infected. Fine sand (1–2 mm grain) allows burying while being gentle on the disc surface.',
      },
      {
        question: 'How often should I change water in a stingray tank?',
        answer:
          'Perform 30–40 % water changes weekly at minimum. Many serious stingray keepers do 50 % changes twice weekly. All replacement water must be temperature-matched within 1 °C and dechlorinated. Stingrays are extremely sensitive to nitrate — aggressive water changes are the most reliable method of keeping nitrate below their 10 ppm comfort threshold.',
      },
      {
        question: 'Can stingrays live with Arowana?',
        answer:
          'Yes — Arowana and stingrays are one of the most popular and compatible predator tank combinations. Arowana patrol the upper water column while stingrays occupy the bottom, creating minimal territorial conflict. Ensure the tank is large enough for both species: a minimum 8 × 4-foot footprint with appropriate water volume for the combined bioload.',
      },
      {
        question: 'What size tank does a baby stingray need?',
        answer:
          'A juvenile stingray (under 15 cm disc width) can be temporarily housed in a 180-gallon tank with a 6 × 3-foot footprint. However, stingrays grow quickly — most species outgrow this within 12–18 months. Plan for the adult-size tank (300+ gallons, 8 × 4-foot footprint) from the beginning to avoid a costly mid-course upgrade.',
      },
    ],
    sources: [
      {
        title: 'FishBase: Family Potamotrygonidae',
        url: 'https://www.fishbase.se/Summary/FamilySummary.php?ID=697',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Husbandry and Captive Management of Potamotrygonid Stingrays',
        url: 'https://link.springer.com/book/10.1007/978-3-030-97950-8',
        publisher: 'Springer Nature',
      },
      {
        title: 'Sump Filtration Design for Large Aquariums',
        url: 'https://www.reefbuilders.com/sump-filtration-design/',
        publisher: 'Reef Builders',
      },
    ],
    relatedSlugs: ['freshwater-stingray-care-guide', 'arowana-tank-setup'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 5 — Discus Water Parameters & Tank Setup
  // ──────────────────────────────────────────────
  {
    title: 'Discus Water Parameters & Tank Setup',
    slug: 'discus-water-parameters',
    type: 'care',
    category: 'discus',
    topicCategory: 'water-chemistry',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-06',
    updatedAt: '2026-03-21',
    heroImage: '/images/care/discus-water-parameters.jpg',
    heroImageAlt:
      'A school of vibrant Discus fish in a pristine planted aquarium with carefully maintained water parameters',
    metaTitle:
      'Discus Water Parameters & Tank Setup | The Fish Collection',
    metaDescription:
      'Expert Discus water parameter guide. Strict pH, temperature, hardness targets, RO water blending, and tank setup for healthy, colorful Discus.',
    quickAnswerQuestion: 'What water parameters do Discus need?',
    quickAnswer:
      'Discus require exceptionally stable water parameters: temperature 28–30 °C (82–86 °F), pH 5.5–6.8 (captive-bred strains tolerate up to 7.2), GH 1–4 dGH, KH 1–3 dKH, ammonia and nitrite at 0 ppm, and nitrate below 10 ppm. RO water blended with a GH remineraliser is standard practice. Water changes of 30–50 % should be performed at least twice weekly. Temperature stability is paramount — swings greater than 1 °C can trigger stress and disease.',
    summary:
      'A precision-focused guide to the water chemistry and tank configuration requirements for keeping Discus, covering the notoriously strict parameter ranges, RO water systems, temperature stability, and ongoing maintenance protocols.',
    keyFacts: [
      { label: 'Minimum Tank Size', value: '75 gal (285 L) for 6 fish' },
      { label: 'Temperature', value: '28–30 °C (82–86 °F)' },
      { label: 'pH Range', value: '5.5–6.8 (up to 7.2 captive-bred)' },
      { label: 'GH', value: '1–4 dGH' },
      { label: 'Nitrate Maximum', value: 'Below 10 ppm' },
      { label: 'Water Changes', value: '30–50 % twice weekly' },
    ],
    headings: [
      { id: 'why-discus-are-demanding', text: 'Why Discus Are Demanding', level: 2 },
      { id: 'tank-size-and-dimensions', text: 'Tank Size and Dimensions', level: 2 },
      { id: 'temperature-the-critical-parameter', text: 'Temperature: The Critical Parameter', level: 2 },
      { id: 'ph-and-hardness', text: 'pH and Hardness', level: 2 },
      { id: 'ro-water-systems', text: 'RO Water Systems for Discus', level: 3 },
      { id: 'blending-ro-water', text: 'Blending RO Water', level: 3 },
      { id: 'nitrogen-compounds', text: 'Ammonia, Nitrite, and Nitrate', level: 2 },
      { id: 'filtration-for-discus', text: 'Filtration for Discus', level: 2 },
      { id: 'substrate-and-decor', text: 'Substrate and Décor', level: 2 },
      { id: 'water-change-protocol', text: 'Water Change Protocol', level: 2 },
      { id: 'planted-discus-tanks', text: 'Planted Discus Tanks', level: 2 },
      { id: 'common-parameter-mistakes', text: 'Common Parameter Mistakes', level: 2 },
    ],
    content: `
<h2 id="why-discus-are-demanding">Why Discus Are Demanding</h2>
<p>Discus (<em>Symphysodon</em> spp.) have earned their reputation as the most parameter-sensitive freshwater fish in the mainstream hobby. In their native Amazonian habitat — flooded forest tributaries and blackwater lakes — they live in water that is extremely soft (GH below 1 dGH), acidic (pH 4.5–6.0), warm (28–32 °C), and virtually free of dissolved minerals and waste products. These conditions have shaped their physiology over millions of years, and they do not adapt well when we deviate significantly.</p>
<p>The consequence for aquarists is a narrow margin for error. A temperature drop of 2 °C can trigger a stress response that opens the door to bacterial infection. A pH swing of 0.5 units during a water change can cause appetite loss lasting days. Nitrate at 30 ppm — a level most tropical fish ignore — produces visible colour fading and lethargy in Discus. Success with Discus is fundamentally a water quality discipline.</p>
<p>The good news: modern captive-bred Discus strains are more adaptable than their wild ancestors. They tolerate pH up to 7.2, GH up to 8 dGH, and are less susceptible to the parasitic diseases that plague wild imports. But "more adaptable" does not mean "easy" — Discus still demand higher standards than virtually any other common tropical fish.</p>

<h2 id="tank-size-and-dimensions">Tank Size and Dimensions</h2>
<p>Discus are social fish that must be kept in groups of 6 or more to distribute aggression and establish a stable hierarchy. A group of 6 requires a minimum 75-gallon tank; 8–10 fish (the ideal school size) need 100–125 gallons.</p>
<p>Height matters for Discus. Their laterally compressed, disc-shaped body is adapted for manoeuvring through vertical structure (submerged tree roots and branches in the wild). Tanks with 24 inches (60 cm) or more of water height suit their body proportions. A 75-gallon tank measuring 48 × 18 × 24 inches (length × width × height) is the standard starting point.</p>
<p>Length is important for swimming space, especially in groups where subordinate fish need to retreat from dominant individuals. A 4-foot minimum length is recommended; 5–6 feet is ideal for larger groups. For tank construction guidance applicable to large tropical systems, see our <a href="/blog/exotic-fish-tank-setup">exotic fish tank setup guide</a>.</p>

<h2 id="temperature-the-critical-parameter">Temperature: The Critical Parameter</h2>
<p>Temperature is the single most important parameter for Discus health. Target: <strong>28–30 °C (82–86 °F)</strong>. Many experienced Discus keepers maintain 30 °C year-round.</p>
<p>Why so warm? At these temperatures:</p>
<ul>
  <li>Discus metabolisms operate at peak efficiency, promoting growth and colour development.</li>
  <li>The immune system functions optimally, providing maximum resistance to bacterial and parasitic diseases.</li>
  <li>The common Discus parasites <em>Hexamita</em> and <em>Capillaria</em> are suppressed — their reproductive cycles slow significantly above 29 °C.</li>
</ul>
<p>Below 26 °C, Discus become lethargic, lose colour, refuse food, and become vulnerable to disease. A sudden drop below 24 °C can be fatal. Temperature stability is as important as the absolute number — daily fluctuations should not exceed 1 °C.</p>
<p>Use a titanium heater rated for at least 1.5× your tank volume (for a 75-gallon tank, a 300-watt heater minimum) connected to an external digital temperature controller. Two heaters (each at 50 % of required wattage) provide redundancy — if one fails, the other maintains temperature until replacement. Place the temperature probe at the opposite end of the tank from the heater return to measure true ambient temperature.</p>

<h2 id="ph-and-hardness">pH and Hardness</h2>
<p>Wild Discus live in pH 4.5–6.0 with essentially zero hardness. Captive-bred strains tolerate a wider range:</p>
<ul>
  <li><strong>pH:</strong> 5.5–6.8 optimal; captive-bred strains survive at pH 7.0–7.2 but display less intense coloration.</li>
  <li><strong>GH:</strong> 1–4 dGH. Soft water replicates natural conditions and supports proper gill function and osmoregulation.</li>
  <li><strong>KH:</strong> 1–3 dKH. Just enough to prevent dangerous pH crashes, but not so high that pH is buffered above the target range.</li>
</ul>
<p>Stability trumps hitting a specific number. A stable pH of 7.0 is better for Discus than a pH that swings between 5.5 and 6.5 due to inadequate buffering. If your tap water is naturally soft and slightly acidic, you may not need an RO system at all. If your tap water is hard and alkaline (common in much of the US), RO water is the path to success.</p>

<h3 id="ro-water-systems">RO Water Systems for Discus</h3>
<p>A reverse osmosis (RO) or RO/deionisation (RO/DI) system strips virtually all dissolved minerals from tap water, producing near-pure water that you then remineralise to your target parameters. This gives you complete control over water chemistry — essential for Discus keeping in areas with hard tap water.</p>
<p>A 4-stage RO/DI system suitable for Discus costs $150–$400 and produces 75–150 gallons per day (GPD) depending on model and water pressure. Membrane replacement costs $30–$60 annually; pre-filters and DI resin add $50–$100 per year. For a 75-gallon Discus tank requiring 40–50 gallons of RO water per week (for water changes), a 75 GPD system is the minimum.</p>

<h3 id="blending-ro-water">Blending RO Water</h3>
<p>Pure RO water is too soft and mineral-free for direct use. It must be remineralised before adding to the tank:</p>
<ul>
  <li>Use a GH-raising product (Seachem Equilibrium, SaltyShrimp GH+, or equivalent) to bring GH to 1–4 dGH.</li>
  <li>Alternatively, blend RO water with tap water at a ratio that achieves your target GH and pH. Start with a 3:1 (RO:tap) ratio and test.</li>
  <li>Aerate the blended water for 12–24 hours before adding to the tank. This off-gasses CO₂ and stabilises pH — freshly produced RO water often reads pH 6.0–6.5 due to dissolved CO₂, which rises to 7.0+ after aeration. You want the stable, aerated reading before it enters your system.</li>
</ul>

<h2 id="nitrogen-compounds">Ammonia, Nitrite, and Nitrate</h2>
<p>Ammonia and nitrite must be 0 ppm at all times — this applies to all fish, but Discus are less tolerant of even trace levels than most species. A spike to 0.25 ppm ammonia that an Oscar would barely notice will cause a Discus to clamp its fins, darken in colour, and refuse food for 24–48 hours.</p>
<p><strong>Nitrate:</strong> Below 10 ppm is the target. Discus begin showing subtle stress indicators (colour fading, reduced appetite, increased mucus production) at 15–20 ppm — levels that most tropical fish tolerate indefinitely. Keeping nitrate below 10 ppm requires either aggressive water changes (the primary method), live plants (supplementary), or a denitrification system (advanced).</p>
<p>Test ammonia, nitrite, and nitrate weekly with liquid reagent kits (API Master Test Kit or equivalent). Do not rely on test strips — they lack the precision needed for Discus-level parameter management.</p>

<h2 id="filtration-for-discus">Filtration for Discus</h2>
<p>Discus produce moderate bioload for their size, but the near-zero nitrate requirement means filtration must be robust and well-maintained. Target 6–8× total tank volume turnover per hour.</p>
<p>For a 75-gallon tank, a large canister filter (Fluval FX4 or equivalent rated for 250+ gallons) is sufficient. For tanks above 100 gallons, consider a sump-based system for added volume and ease of maintenance. Biological media (sintered glass, ceramic rings) should dominate your filter — mechanical polishing (fine foam, filter floss) is secondary but important for water clarity.</p>
<p>Avoid strong current in the display tank. Discus are not strong swimmers and prefer gentle to moderate flow. Position return outlets to create broad, gentle circulation rather than concentrated jets. Spray bars are ideal.</p>

<h2 id="substrate-and-decor">Substrate and Décor</h2>
<p>Discus keepers split into two camps: bare-bottom tanks and planted tanks. Both work, but each has trade-offs.</p>
<p><strong>Bare bottom:</strong> The breeder's choice. Maximum hygiene — uneaten food and waste are visible and easily siphoned. No substrate-trapped detritus means lower nitrate accumulation. The downside is aesthetics and the fact that some Discus display less intense colour without a dark substrate below them.</p>
<p><strong>Fine sand (1–2 mm):</strong> Provides a natural, dark base that enhances colour expression. Maintain at 2–3 cm depth and vacuum thoroughly during each water change to prevent detritus accumulation.</p>
<p><strong>Planted substrate (aqua soil):</strong> For dedicated planted Discus tanks. Products like ADA Amazonia or Fluval Stratum buffer pH into the acidic range naturally and support plant root systems. However, new aqua soil releases ammonia during its initial weeks — cycle the tank with the substrate in place before adding Discus.</p>
<p>Décor should replicate the flooded-forest biotope: vertical driftwood pieces (manzanita, spider wood) suggesting submerged tree roots, Indian almond leaves on the substrate for natural tannin release, and broad-leaf plants (Amazon Swords, Echinodorus) for shelter. Avoid sharp rocks or abrasive surfaces.</p>

<h2 id="water-change-protocol">Water Change Protocol</h2>
<p>Water changes are the cornerstone of Discus keeping. There is no filtration system, additive, or gadget that replaces regular removal and replacement of water.</p>
<ul>
  <li><strong>Minimum:</strong> 30 % twice weekly.</li>
  <li><strong>Optimal for grow-out (juveniles under 10 cm):</strong> 50 % daily. Juvenile Discus grow fastest in near-pristine water with aggressive feeding and equally aggressive waste removal.</li>
  <li><strong>Optimal for adult display tanks:</strong> 30–50 % twice weekly.</li>
</ul>
<p>All replacement water must be temperature-matched to within 1 °C and parameter-matched (pH and GH within 0.2 pH units and 1 dGH). Pre-condition replacement water in a separate container: add dechlorinator, remineraliser (if using RO), and aerate for 12–24 hours. A dedicated "water ageing" barrel with a heater and air stone simplifies this routine enormously.</p>
<p>During water changes, siphon the substrate (or bare bottom) to remove detritus. Clean filter media on a rotating schedule — never clean all media on the same day as a large water change, as this compounds the biological disruption.</p>

<h2 id="planted-discus-tanks">Planted Discus Tanks</h2>
<p>Planted Discus tanks are among the most beautiful displays in freshwater aquaristics, but they present a unique challenge: Discus require 28–30 °C, which is at or above the tolerance limit for many popular aquarium plants.</p>
<p><strong>Plants that thrive at Discus temperatures:</strong></p>
<ul>
  <li>Amazon Sword (<em>Echinodorus</em> spp.) — the natural companion, handles 28–30 °C well.</li>
  <li>Anubias (<em>Anubias barteri</em>) — slow-growing, attaches to driftwood, tolerates warmth and low light.</li>
  <li>Java Fern (<em>Microsorum pteropus</em>) — another epiphyte, highly adaptable.</li>
  <li>Vallisneria — fast-growing background plant, tolerates up to 30 °C.</li>
  <li>Staurogyne repens — low-growing carpeting plant that handles Discus temperatures.</li>
</ul>
<p><strong>Plants to avoid:</strong> Most mosses (Java Moss degrades above 28 °C), Dwarf Hairgrass (prefers cooler water), and most Bucephalandra species (prefer 22–26 °C).</p>
<p>If running CO₂ injection in a planted Discus tank, monitor pH closely — CO₂ lowers pH, which can push already acidic Discus water into dangerously low territory. Use a pH controller or drop checker to prevent overshooting.</p>

<h2 id="common-parameter-mistakes">Common Parameter Mistakes</h2>
<ul>
  <li><strong>Chasing wild-type parameters with captive-bred fish.</strong> Pushing pH to 5.0 for farm-raised Discus is unnecessary and risky. Captive-bred strains thrive at pH 6.0–6.8 — focus on stability, not replicating extreme Amazonian conditions.</li>
  <li><strong>Neglecting KH.</strong> Zero-KH water (common with undiluted RO) is prone to sudden pH crashes. Maintain at least 1–2 dKH as a buffer.</li>
  <li><strong>Overfeeding without compensating water changes.</strong> Discus need frequent feeding (3–5 small meals daily for juveniles), but each meal adds organic waste. Match feeding intensity with water change frequency.</li>
  <li><strong>Adding Discus to a new tank.</strong> A tank that has been cycled for 4 weeks is chemically ready but biologically immature. Wait 8–12 weeks and stock gradually — add 2–3 Discus at a time with 2-week intervals between additions to allow the biological filter to adapt.</li>
  <li><strong>Mixing wild and captive-bred Discus.</strong> Wild Discus carry parasites and pathogens that captive-bred fish have no immunity to. Never combine them without a rigorous quarantine and prophylactic treatment protocol for the wild specimens.</li>
</ul>
<p>For those ready to take the plunge, The Fish Collection offers select <a href="/exotic-fish/discus">Discus specimens</a> from reputable breeders, with full acclimation support and water parameter consultation included.</p>
`,
    faqs: [
      {
        question: 'What is the ideal temperature for Discus?',
        answer:
          'The ideal temperature for Discus is 28–30 °C (82–86 °F). Many experienced keepers maintain 30 °C year-round, as higher temperatures promote immune function and suppress common Discus parasites like Hexamita. Temperature stability (daily fluctuations under 1 °C) is as important as the absolute number.',
      },
      {
        question: 'Do Discus need RO water?',
        answer:
          'If your tap water is hard (GH above 8 dGH) or alkaline (pH above 7.5), an RO system is strongly recommended. Discus thrive in soft, acidic water (GH 1–4 dGH, pH 5.5–6.8). If your tap water naturally falls within these ranges, you may not need RO. Always test your tap water before investing in an RO system.',
      },
      {
        question: 'How often should I change water in a Discus tank?',
        answer:
          'At minimum, 30 % twice weekly. For juvenile grow-out tanks, 50 % daily produces the fastest growth and best colour development. For adult display tanks, 30–50 % twice weekly maintains the near-zero nitrate levels Discus require. Pre-condition all replacement water to match tank temperature and chemistry.',
      },
      {
        question: 'Can Discus live in a planted tank?',
        answer:
          'Yes, planted Discus tanks are among the most beautiful freshwater displays. Choose heat-tolerant plants: Amazon Swords, Anubias, Java Fern, and Vallisneria all thrive at Discus temperatures (28–30 °C). Avoid mosses and plants that prefer cooler water. If using CO₂ injection, monitor pH carefully to avoid dangerous acid swings.',
      },
      {
        question: 'Why are my Discus dark and hiding?',
        answer:
          'Darkening and hiding typically indicate stress from poor water quality (test ammonia, nitrite, nitrate, and pH immediately), temperature instability, aggressive tankmates, or insufficient group size. Discus need groups of 6+ to feel secure. Perform a 30 % water change with parameter-matched water and check all equipment function. If symptoms persist for 48+ hours, investigate disease — particularly Hexamita and gill flukes.',
      },
    ],
    sources: [
      {
        title: 'FishBase: Symphysodon aequifasciatus',
        url: 'https://www.fishbase.se/summary/Symphysodon-aequifasciatus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Water Chemistry of the Amazon Basin',
        url: 'https://www.nature.com/articles/s41598-020-62042-z',
        publisher: 'Nature Scientific Reports',
      },
      {
        title: 'Discus Husbandry and Breeding',
        url: 'https://www.practicalfishkeeping.co.uk/features/discus-care-guide/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['most-colorful-freshwater-fish', 'exotic-fish-tank-setup'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 6 — Pleco Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Pleco Care Guide: Diet, Tank Setup & Water Parameters',
    slug: 'pleco-care-guide',
    type: 'care',
    category: 'pleco',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-08',
    updatedAt: '2026-03-22',
    heroImage: '/images/care/pleco-care-guide.jpg',
    heroImageAlt:
      'A Zebra Pleco (L046) resting on a piece of driftwood in a well-decorated aquarium with caves and subdued lighting',
    metaTitle:
      'Pleco Care Guide: Diet, Tank & Water | The Fish Collection',
    metaDescription:
      'Complete pleco care guide covering diet, driftwood requirements, cave provision, nocturnal feeding, water parameters, and species-specific needs.',
    quickAnswerQuestion: 'How do you care for a pleco?',
    quickAnswer:
      'Pleco care depends on species but universally requires: driftwood in the tank (essential for digestion in wood-eating species), multiple caves or hiding spots (plecos are territorial and nocturnal), sinking foods offered after lights-out (algae wafers, blanched vegetables, frozen bloodworms), and clean, well-oxygenated water with moderate current. Temperature ranges from 24–30 °C depending on species. Tank sizes vary from 30 gallons for dwarf species (Zebra Pleco) to 200+ gallons for Common Plecos that reach 50 cm.',
    summary:
      'A species-aware care guide for plecostomus (Loricariidae) covering the dietary requirements including critical driftwood needs, cave provision for territorial behaviour, nocturnal feeding protocols, and water parameters across popular species.',
    keyFacts: [
      { label: 'Family', value: 'Loricariidae (armoured catfish)' },
      { label: 'Tank Size', value: '30–200+ gal depending on species' },
      { label: 'Temperature', value: '24–30 °C (species-dependent)' },
      { label: 'pH Range', value: '5.5–7.5 (species-dependent)' },
      { label: 'Key Requirement', value: 'Driftwood + caves' },
      { label: 'Activity Period', value: 'Nocturnal (feed after lights-out)' },
    ],
    headings: [
      { id: 'introduction-to-plecos', text: 'Introduction to Plecos', level: 2 },
      { id: 'popular-pleco-species', text: 'Popular Pleco Species', level: 2 },
      { id: 'zebra-pleco', text: 'Zebra Pleco (L046)', level: 3 },
      { id: 'bristlenose-pleco', text: 'Bristlenose Pleco (Ancistrus)', level: 3 },
      { id: 'royal-pleco', text: 'Royal Pleco (Panaque nigrolineatus)', level: 3 },
      { id: 'common-pleco', text: 'Common Pleco (Pterygoplichthys)', level: 3 },
      { id: 'clown-pleco', text: 'Clown Pleco (Panaqolus maccus)', level: 3 },
      { id: 'driftwood-requirements', text: 'Driftwood: A Dietary Necessity', level: 2 },
      { id: 'cave-provision', text: 'Cave Provision and Territory', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet and Nocturnal Feeding', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters by Species', level: 2 },
      { id: 'breeding-plecos', text: 'Breeding Plecos', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
    ],
    content: `
<h2 id="introduction-to-plecos">Introduction to Plecos</h2>
<p>"Pleco" is the aquarium hobby's catch-all term for armoured catfish in the family Loricariidae — the largest catfish family, comprising over 900 described species. They range from the 3 cm Otocinclus to the 60 cm Common Pleco, and from the $3 Bristlenose to the $1,000 Zebra Pleco. What unites them is a ventral sucker mouth adapted for scraping surfaces, bony plate armour covering the body, and predominantly nocturnal behaviour.</p>
<p>The outdated perception of plecos as "algae eaters you stick in any tank" does enormous disservice to this family. Many species eat little to no algae. Most have specific dietary, territorial, and environmental needs that differ dramatically between species. A Zebra Pleco is as different from a Common Pleco as a Betta is from an Arowana — treating them as interchangeable is a recipe for failure.</p>

<h2 id="popular-pleco-species">Popular Pleco Species</h2>

<h3 id="zebra-pleco">Zebra Pleco (L046)</h3>
<p>The Zebra Pleco (<em>Hypancistrus zebra</em>) is the crown jewel of the pleco world — dramatic black-and-white striping, small adult size (8–10 cm), and a price tag of $300–$1,000 that reflects both its beauty and rarity. Wild export from Brazil has been banned since 2004; all legal specimens are captive-bred. They are carnivores (not algae eaters), preferring frozen bloodworms, brine shrimp, and high-protein sinking pellets. Temperature: 26–30 °C. pH: 6.0–7.0. Tank: 30+ gallons with caves and moderate current. Browse The Fish Collection's <a href="/exotic-fish/pleco">pleco collection</a> for limited Zebra Pleco availability.</p>

<h3 id="bristlenose-pleco">Bristlenose Pleco (Ancistrus)</h3>
<p>The Bristlenose is the ideal beginner pleco — hardy, small (12–15 cm), peaceful, and a genuine algae eater. Males develop distinctive fleshy tentacles (bristles) on the snout, giving the species its name. Varieties include Common Brown, Albino, Longfin, Super Red, and Calico. They breed readily in captivity, making them readily available at $5–$25.</p>
<p>Bristlenose are omnivores: provide algae wafers, blanched zucchini, cucumber, and occasional protein (frozen bloodworms). They require driftwood for digestive fibre. Temperature: 24–28 °C. pH: 6.0–7.5. Tank: 30+ gallons with caves and driftwood.</p>

<h3 id="royal-pleco">Royal Pleco (Panaque nigrolineatus)</h3>
<p>The Royal Pleco is a large (35–45 cm), striking species with bold black stripes on a grey-green body and distinctive red-orange eyes. It is one of the true "wood-eating" plecos — its specialised teeth rasp wood fibres, which are fermented in a long, specialised gut by symbiotic bacteria. Driftwood is not optional for this species; it is their primary food source.</p>
<p>Tank: 125+ gallons. Temperature: 24–28 °C. pH: 6.0–7.5. Supplement with algae wafers and blanched vegetables. They are territorial and need large caves or hollow logs. Price: $40–$120.</p>

<h3 id="common-pleco">Common Pleco (Pterygoplichthys)</h3>
<p>The Common Pleco is the species most often sold to unsuspecting beginners as an "algae cleaner." The problem: it grows to 45–60 cm and produces an enormous bioload. A fish sold at 5 cm in a pet store will need a 200-gallon tank within 2–3 years. It is a hardy, undemanding fish — but its size requirements make it inappropriate for most home aquariums.</p>
<p>If you have the space, Common Plecos are rewarding fish — active, personable, and long-lived (15–25 years). Temperature: 24–28 °C. pH: 6.5–8.0. They eat everything: algae, vegetables, sinking pellets, frozen foods, and driftwood.</p>

<h3 id="clown-pleco">Clown Pleco (Panaqolus maccus)</h3>
<p>The Clown Pleco is a small (8–10 cm) wood-eating species with attractive orange and black striped patterning. It is the most accessible wood-eating pleco, suitable for tanks as small as 20 gallons. Like the Royal Pleco, it requires driftwood as a dietary staple. Supplement with blanched vegetables and algae wafers. Temperature: 24–28 °C. pH: 6.0–7.5. Price: $8–$15.</p>

<h2 id="driftwood-requirements">Driftwood: A Dietary Necessity</h2>
<p>For many pleco species — particularly those in the genera <em>Panaque</em> and <em>Panaqolus</em> — driftwood is not decoration. It is food. These fish possess specialised spoon-shaped teeth designed to scrape wood fibres, which are then fermented in an elongated hindgut by symbiotic cellulose-digesting bacteria. Without wood, they cannot complete their digestive process and will slowly starve regardless of how much other food is offered.</p>
<p>Even species that are not obligate wood-eaters (Bristlenose, Zebra Pleco) benefit from driftwood. Rasping wood provides dietary fibre that aids digestion, and the biofilm that develops on submerged wood is a natural food source rich in microorganisms.</p>
<p><strong>Recommended driftwood types:</strong></p>
<ul>
  <li><strong>Malaysian driftwood:</strong> Dense, sinks immediately, releases moderate tannins. The standard choice.</li>
  <li><strong>Manzanita:</strong> Branching structure provides multiple rasping surfaces. Light tannin release.</li>
  <li><strong>Spider wood:</strong> Intricate branching, creates natural cave-like structures. May need soaking to waterlog.</li>
  <li><strong>Mopani:</strong> Extremely dense, sinks immediately, heavy tannin release (stains water amber — beneficial for soft-water species but may require carbon to control).</li>
</ul>
<p>Provide at least one piece of driftwood per pleco, sized proportionally to the fish. Large Royal Plecos need substantial pieces — a 40 cm fish requires driftwood at least 30 cm in length for adequate rasping surface. Replace driftwood pieces as they are consumed (wood-eating species can destroy a piece over 6–12 months).</p>

<h2 id="cave-provision">Cave Provision and Territory</h2>
<p>Plecos are territorial, especially males. In the wild, they defend caves (rock crevices, hollow logs, undercut banks) as breeding sites and refuges. In captivity, providing adequate caves prevents aggression, stress, and the territorial conflicts that can lead to injury or death in crowded tanks.</p>
<p><strong>Cave guidelines:</strong></p>
<ul>
  <li>Provide at least one cave per pleco, plus one extra (the "n+1 rule").</li>
  <li>Cave size should match the fish — the opening should be just large enough for the pleco to enter while blocking other fish. Snug caves are preferred over open shelters.</li>
  <li>Materials: ceramic breeding caves (commercially available in sizes matching specific pleco species), PVC pipe cut to length, coconut shells (halved with entrance hole), stacked slate or stone, and hollow driftwood.</li>
  <li>Position caves throughout the tank, not clustered in one area. This distributes territories and reduces conflict between neighbours.</li>
  <li>For breeding: males select caves, clean them meticulously, and fan eggs inside. Without suitable caves, breeding will not occur even if all other conditions are met.</li>
</ul>

<h2 id="diet-and-feeding">Diet and Nocturnal Feeding</h2>
<p>Plecos are nocturnal. Most species emerge from hiding only after lights-out to feed. Offering food during daytime is inefficient — other tankmates consume it before the pleco ventures out, and uneaten food degrades water quality. The solution: feed plecos after the tank lights switch off.</p>
<p><strong>Feeding protocols by dietary category:</strong></p>
<p><strong>Herbivorous/omnivorous plecos</strong> (Bristlenose, Common, most <em>Pterygoplichthys</em>):</p>
<ul>
  <li>Sinking algae wafers (Hikari Algae Wafer, Northfin Veggie) — 1–2 wafers per fish every evening.</li>
  <li>Blanched vegetables: zucchini medallions, cucumber slices, shelled peas, sweet potato rounds. Blanch for 30 seconds to soften, weigh down with a vegetable clip or stainless-steel fork. Remove uneaten portions after 12 hours.</li>
  <li>Driftwood (continuously available for wood-eating species).</li>
  <li>Supplementary protein: frozen bloodworms or shrimp once or twice weekly.</li>
</ul>
<p><strong>Carnivorous plecos</strong> (Zebra Pleco, most <em>Hypancistrus</em> species):</p>
<ul>
  <li>Frozen bloodworms, brine shrimp, and mysis shrimp — primary diet, offered nightly.</li>
  <li>High-protein sinking pellets (Northfin Predator, Hikari Carnivore) — alternate evenings.</li>
  <li>Live blackworms — excellent supplementary food, stimulates natural foraging behaviour.</li>
  <li>Minimal plant-based food — <em>Hypancistrus</em> species have limited ability to digest plant matter.</li>
</ul>
<p><strong>Wood-eating plecos</strong> (Royal Pleco, Clown Pleco, most <em>Panaque</em> and <em>Panaqolus</em>):</p>
<ul>
  <li>Driftwood — primary food source, must be continuously available.</li>
  <li>Blanched vegetables and algae wafers — supplementary.</li>
  <li>Occasional protein (frozen bloodworms) — small amounts once or twice weekly.</li>
</ul>

<h2 id="tank-setup">Tank Setup</h2>
<p>Pleco tanks should prioritise hiding spots, surface area, and water flow over open swimming space.</p>
<ul>
  <li><strong>Substrate:</strong> Fine sand or smooth gravel. Avoid sharp-edged substrates that can damage the pleco's ventral surface as it rests on the bottom.</li>
  <li><strong>Décor:</strong> Driftwood (essential), caves (essential), stacked rocks (smooth edges only), and live plants (optional but beneficial). Create a landscape with multiple levels and hiding opportunities.</li>
  <li><strong>Current:</strong> Moderate to strong. Many pleco species (Zebra Pleco, Royal Pleco) come from fast-flowing rivers and require well-oxygenated water with significant flow. A powerhead or wavemaker supplementing the filter return is often necessary.</li>
  <li><strong>Lighting:</strong> Subdued. Plecos are photophobic and will hide under bright lighting. Use floating plants, driftwood overhangs, or dimmable LEDs to create shaded zones. Moonlight LEDs are ideal for observing nocturnal behaviour without disturbing the fish.</li>
  <li><strong>Filtration:</strong> Strong mechanical and biological filtration. Plecos — especially wood-eaters — produce significant fine-particle waste. Target 6–8× turnover per hour. Canister filters with coarse pre-filter sponges are a practical choice for most pleco tanks.</li>
</ul>

<h2 id="water-parameters">Water Parameters by Species</h2>
<p>Parameters vary significantly between species. Here are targets for the most popular species:</p>
<ul>
  <li><strong>Zebra Pleco (L046):</strong> pH 6.0–7.0, temp 26–30 °C, GH 2–10 dGH. Warm, moderate flow, well-oxygenated.</li>
  <li><strong>Bristlenose (Ancistrus):</strong> pH 6.0–7.5, temp 24–28 °C, GH 3–15 dGH. Very adaptable.</li>
  <li><strong>Royal Pleco (Panaque):</strong> pH 6.0–7.5, temp 24–28 °C, GH 2–12 dGH. Moderate flow, heavy driftwood.</li>
  <li><strong>Common Pleco (Pterygoplichthys):</strong> pH 6.5–8.0, temp 24–28 °C, GH 3–20 dGH. Most adaptable pleco.</li>
  <li><strong>Clown Pleco (Panaqolus maccus):</strong> pH 6.0–7.5, temp 24–28 °C, GH 3–12 dGH.</li>
</ul>
<p>All species require ammonia and nitrite at 0 ppm. Nitrate should be below 20 ppm for sensitive species (Zebra Pleco) and below 40 ppm for hardier species (Common Pleco, Bristlenose). Weekly water changes of 25–30 % maintain these targets in properly filtered tanks.</p>

<h2 id="breeding-plecos">Breeding Plecos</h2>
<p>Many popular pleco species breed readily in captivity when given appropriate conditions:</p>
<ul>
  <li><strong>Caves:</strong> Males select and defend caves for spawning. The cave must be snug — barely larger than the male's body. Ceramic tubes sized for your species are the most reliable option.</li>
  <li><strong>Condition the pair:</strong> Feed high-protein foods (frozen bloodworms, live blackworms) for 2–4 weeks before attempting to breed. Well-conditioned females develop a visibly rounded abdomen.</li>
  <li><strong>Trigger spawning:</strong> A large water change (50–70 %) with slightly cooler water (2–3 °C below tank temperature) simulates the onset of the rainy season and triggers spawning behaviour in many species.</li>
  <li><strong>Male care:</strong> After the female deposits eggs (typically 20–100 depending on species), the male guards and fans the eggs inside the cave for 5–10 days until hatching. Do not disturb the male during this period.</li>
  <li><strong>Fry care:</strong> Newly hatched fry absorb their yolk sac over 2–4 days, then begin feeding on biofilm, crushed algae wafers, and baby brine shrimp.</li>
</ul>
<p>Zebra Pleco breeding is particularly valuable — given the Brazilian export ban, captive-bred specimens are the only legal source, and breeding stock commands premium prices.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<ul>
  <li><strong>Starvation (the silent killer):</strong> The most common cause of pleco death in community tanks. Nocturnal plecos often lose the food competition to diurnal tankmates. Monitor body condition — a healthy pleco has a slightly convex belly; a concave (sunken) belly indicates starvation. Target-feed after lights-out.</li>
  <li><strong>Bloat in wood-eaters:</strong> Wood-eating species can develop bloat from low-quality driftwood, swallowed air, or inadequate wood fibre intake. Ensure continuous access to appropriate driftwood and avoid excessive protein in their diet.</li>
  <li><strong>Ich (white spot disease):</strong> Plecos are susceptible to ich, but their armoured plates make treatment tricky — they tolerate salt poorly. Raise temperature to 30 °C and treat with half-dose medication. Avoid copper-based treatments for scaleless catfish.</li>
  <li><strong>Bacterial infections:</strong> Usually secondary to physical injury or poor water quality. Red patches, fin erosion, or cloudy eyes indicate infection. Improve water quality first, then treat with broad-spectrum antibiotics if needed.</li>
</ul>
<p>The Fish Collection carries a curated selection of <a href="/exotic-fish/pleco">pleco species</a> from established breeders, with full care support and compatibility advice included with every purchase.</p>
`,
    faqs: [
      {
        question: 'Do all plecos eat algae?',
        answer:
          'No. While Bristlenose and Common Plecos are effective algae eaters, many species (Zebra Pleco, most Hypancistrus) are carnivores that eat little to no algae. Others (Royal Pleco, Clown Pleco) are primarily wood-eaters. Always research the specific dietary needs of your pleco species rather than assuming it will eat algae.',
      },
      {
        question: 'Why do plecos need driftwood?',
        answer:
          'Wood-eating pleco species (Panaque, Panaqolus) require driftwood as their primary food source — they rasp wood fibres that are fermented by symbiotic gut bacteria. Even non-wood-eating species benefit from driftwood for the biofilm it supports and the dietary fibre obtained from casual rasping. Driftwood also provides hiding spots and territory markers.',
      },
      {
        question: 'How big do plecos get?',
        answer:
          'Size varies enormously by species: Clown Plecos and Zebra Plecos stay at 8–10 cm, Bristlenose Plecos reach 12–15 cm, Royal Plecos grow to 35–45 cm, and Common Plecos can exceed 50 cm. Always research the adult size of your specific species before purchasing — a 5 cm juvenile Common Pleco will need a 200-gallon tank within a few years.',
      },
      {
        question: 'What is the best food for plecos?',
        answer:
          'It depends on species. Herbivorous plecos (Bristlenose, Common): algae wafers and blanched vegetables. Carnivorous plecos (Zebra Pleco): frozen bloodworms, brine shrimp, and high-protein sinking pellets. Wood-eating plecos (Royal, Clown): driftwood as the primary food, supplemented with vegetables and wafers. All plecos should be fed after lights-out due to their nocturnal nature.',
      },
      {
        question: 'Can I keep multiple plecos together?',
        answer:
          'Yes, but provide adequate caves and territory. Follow the "n+1 rule" — one cave per pleco plus one extra. Males of the same species can be territorial, especially during breeding. A 75-gallon tank can comfortably house 3–4 medium-sized plecos (Bristlenose, Clown) if caves are distributed throughout the tank. Large species (Royal, Common) need more space per individual.',
      },
    ],
    sources: [
      {
        title: 'PlanetCatfish: Loricariidae Species Database',
        url: 'https://www.planetcatfish.com/catelog/loricariidae',
        publisher: 'PlanetCatfish',
      },
      {
        title: 'FishBase: Family Loricariidae',
        url: 'https://www.fishbase.se/Summary/FamilySummary.php?ID=132',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Wood-Eating in Loricariid Catfishes: Biology and Implications',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.12370',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: ['most-expensive-fish-world', 'exotic-fish-tank-setup'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 7 — Betta Fish Care Beyond the Bowl
  // ──────────────────────────────────────────────
  {
    title: 'Betta Fish Care Beyond the Bowl: Proper Tank Setup',
    slug: 'betta-tank-setup',
    type: 'care',
    category: 'betta',
    topicCategory: 'tank-setup',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-10',
    updatedAt: '2026-03-23',
    heroImage: '/images/care/betta-tank-setup.jpg',
    heroImageAlt:
      'A vibrant Halfmoon Betta in a properly set up 10-gallon planted tank with heater, gentle filter, and enrichment items',
    metaTitle:
      'Betta Care Guide: Proper Tank Setup | The Fish Collection',
    metaDescription:
      'Betta fish deserve more than a bowl. Heated, filtered tanks, enrichment, diet, and water parameters for healthy, vibrant Bettas. Expert guide.',
    quickAnswerQuestion: 'What tank setup does a Betta need?',
    quickAnswer:
      'A Betta needs a minimum 5-gallon heated and filtered tank — never a bowl or vase. Temperature should be 25–28 °C (77–82 °F) maintained by an adjustable heater. Use a gentle filter (sponge filter or baffled HOB) to avoid current stress. Provide live or silk plants for resting near the surface, a secure lid (Bettas jump), and subdued lighting. Water parameters: pH 6.5–7.5, GH 3–12 dGH, ammonia and nitrite at 0 ppm.',
    summary:
      'A myth-busting care guide for Betta splendens that debunks the bowl myth and covers proper heated, filtered tank setup, enrichment for intelligence, diet, water parameters, and common health issues.',
    keyFacts: [
      { label: 'Minimum Tank Size', value: '5 gal (19 L); 10 gal ideal' },
      { label: 'Temperature', value: '25–28 °C (77–82 °F)' },
      { label: 'pH Range', value: '6.5–7.5' },
      { label: 'Heater Required', value: 'Yes — adjustable, 25–50 W' },
      { label: 'Filter Required', value: 'Yes — gentle flow (sponge filter)' },
      { label: 'Lid Required', value: 'Yes — Bettas jump' },
    ],
    headings: [
      { id: 'the-bowl-myth', text: 'The Bowl Myth: Why It Persists and Why It Is Wrong', level: 2 },
      { id: 'minimum-tank-requirements', text: 'Minimum Tank Requirements', level: 2 },
      { id: 'heating', text: 'Heating: Non-Negotiable', level: 2 },
      { id: 'filtration', text: 'Filtration: Gentle but Essential', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'substrate-and-plants', text: 'Substrate and Plants', level: 2 },
      { id: 'enrichment', text: 'Enrichment: Bettas Are Intelligent', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet and Feeding', level: 2 },
      { id: 'tankmates', text: 'Tankmates for Bettas', level: 2 },
      { id: 'common-diseases', text: 'Common Betta Diseases', level: 2 },
      { id: 'betta-varieties', text: 'Popular Betta Varieties', level: 2 },
    ],
    content: `
<h2 id="the-bowl-myth">The Bowl Myth: Why It Persists and Why It Is Wrong</h2>
<p>The idea that Bettas thrive in small bowls or vases is the most persistent and damaging myth in the aquarium hobby. It persists because Bettas possess a labyrinth organ — a specialised respiratory structure that allows them to breathe atmospheric air directly. This adaptation evolved in oxygen-depleted rice paddies and stagnant pools in Southeast Asia, enabling survival in conditions that would kill other fish. But survival is not thriving.</p>
<p>A Betta in a bowl is not "fine" — it is chronically stressed. Without a heater, the water temperature drops below the species' comfort range (25–28 °C), suppressing the immune system and slowing metabolism. Without a filter, ammonia from waste and uneaten food accumulates, burning the fish's gills and fins. Without adequate space, the fish cannot exhibit natural behaviours — territorial patrol, hunting, exploring, flaring.</p>
<p>The scientific evidence is unambiguous: Bettas kept in heated, filtered tanks of 5+ gallons live 3–5 years (some reaching 7+), display vibrant coloration, build bubble nests regularly (a sign of health and comfort), and exhibit active, exploratory behaviour. Bettas in unheated bowls typically survive 1–2 years and display chronic fin clamping, colour fading, and lethargy. The bowl does not save money — it costs you years of your fish's life.</p>

<h2 id="minimum-tank-requirements">Minimum Tank Requirements</h2>
<p><strong>Absolute minimum:</strong> 5 gallons (19 litres). This provides enough water volume for basic parameter stability and enough space for territorial behaviour.</p>
<p><strong>Recommended:</strong> 10 gallons (38 litres). A 10-gallon tank offers significantly better parameter stability (larger water volumes dilute waste more effectively), more space for plants and décor, and the option to add a few compatible tankmates. The price difference between a 5-gallon and 10-gallon setup is typically $20–$40 — a trivial cost for meaningfully better fish welfare.</p>
<p><strong>Tank shape:</strong> Bettas are surface-oriented fish with modified pelvic fins for maneuvering, not distance swimmers. Long, low tanks are preferable to tall, narrow ones — a 10-gallon "standard" (20 × 10 × 12 inches) is better than a 10-gallon "tall" (10 × 10 × 24 inches). Water depth should not exceed 12–14 inches, as Bettas must swim to the surface to breathe air.</p>
<p><strong>Lid:</strong> Mandatory. Bettas jump — particularly when startled, when water quality deteriorates, or when they detect an open top. A gap of 1–2 inches between the water surface and the lid allows the fish to access atmospheric air while preventing escape. The air layer above the water must be warm and humid (the lid helps maintain this) — cold, dry air above warm water causes labyrinth organ damage.</p>

<h2 id="heating">Heating: Non-Negotiable</h2>
<p>Bettas are tropical fish native to Thailand, Cambodia, and Vietnam — regions where water temperatures rarely drop below 25 °C. In an unheated tank at room temperature (20–22 °C in most homes), a Betta's metabolism slows, immune function deteriorates, and the fish becomes lethargic and susceptible to disease.</p>
<p><strong>Target temperature:</strong> 25–28 °C (77–82 °F). Stability matters more than precision — a stable 26 °C is better than fluctuating between 25 and 28 °C daily.</p>
<p><strong>Heater selection:</strong></p>
<ul>
  <li>For 5-gallon tanks: 25-watt adjustable heater.</li>
  <li>For 10-gallon tanks: 50-watt adjustable heater.</li>
  <li>Always choose <strong>adjustable</strong> over preset heaters. Preset models are locked at a fixed temperature (often 26 °C) with no way to compensate for ambient room temperature changes or raise the temperature for disease treatment (ich treatment requires 30 °C).</li>
  <li>Position the heater near the filter outflow for even heat distribution. Use a separate thermometer (digital or glass, not the sticker type) at the opposite end of the tank to verify the actual temperature.</li>
</ul>

<h2 id="filtration">Filtration: Gentle but Essential</h2>
<p>Bettas need filtration but cannot tolerate strong current. Their elaborate finnage (especially in Halfmoon, Crowntail, and Rosetail varieties) creates drag that makes swimming in current exhausting. A Betta in strong flow will hide behind structures and stop eating — chronic flow stress can be fatal.</p>
<p><strong>Best filter options:</strong></p>
<ul>
  <li><strong>Sponge filter (air-driven):</strong> The gold standard for Betta tanks. Provides gentle water movement and excellent biological filtration. The sponge surface hosts beneficial bacteria, and the air-driven operation produces a gentle current that Bettas tolerate well. Cost: $5–$15.</li>
  <li><strong>Hang-on-back (HOB) filter with baffled output:</strong> Effective mechanical and biological filtration, but the output flow must be baffled. Attach a piece of filter sponge or a pre-filter intake sponge to diffuse the current. Many Betta keepers use a water bottle baffle (cut a plastic bottle to redirect flow against the tank wall).</li>
  <li><strong>Internal filter at lowest flow setting:</strong> Acceptable if flow is genuinely gentle. Position the output against the tank wall to further diffuse current.</li>
</ul>
<p>Avoid: canister filters on small Betta tanks (excessive flow), undergravel filters (trap waste, difficult to maintain), and any filter that creates visible surface agitation across more than 25 % of the water surface.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
  <li><strong>Temperature:</strong> 25–28 °C (77–82 °F).</li>
  <li><strong>pH:</strong> 6.5–7.5. Bettas tolerate a wide pH range but prefer slightly acidic to neutral conditions. Stability is more important than hitting a specific number.</li>
  <li><strong>GH:</strong> 3–12 dGH. Moderately soft to moderately hard water is acceptable.</li>
  <li><strong>KH:</strong> 3–8 dKH. Provides adequate buffering against pH swings.</li>
  <li><strong>Ammonia:</strong> 0 ppm.</li>
  <li><strong>Nitrite:</strong> 0 ppm.</li>
  <li><strong>Nitrate:</strong> Below 20 ppm. Weekly water changes of 25–30 % maintain this target in a properly filtered 5–10 gallon tank.</li>
</ul>
<p>Indian almond leaves (Terminalia catappa) are a beneficial addition to Betta tanks. They release tannins that mildly acidify the water, contain antibacterial compounds that reduce pathogen load, and create a natural blackwater tint that reduces light intensity and makes Bettas feel more secure. Add 1 medium leaf per 5 gallons and replace as it decomposes (every 2–3 weeks).</p>

<h2 id="substrate-and-plants">Substrate and Plants</h2>
<p><strong>Substrate:</strong> Fine gravel or sand in dark colours (black, dark brown). Dark substrates reduce light reflection, make Bettas feel more secure, and enhance colour display (fish intensify pigmentation against dark backgrounds). Avoid large gravel or glass marbles — uneaten food falls between pieces and rots, spiking ammonia.</p>
<p><strong>Plants:</strong> Live plants are strongly recommended. They provide resting surfaces (Bettas frequently rest on broad leaves near the surface), reduce nitrate, create hiding spots, and improve water quality. Ideal plants for Betta tanks:</p>
<ul>
  <li><strong>Anubias:</strong> Broad leaves perfect for Betta resting. Attach to driftwood or rock — do not bury the rhizome. Low light tolerant.</li>
  <li><strong>Java Fern:</strong> Hardy, low-light, attaches to surfaces. Provides excellent cover.</li>
  <li><strong>Amazon Frogbit or Salvinia (floating):</strong> Creates shaded surface areas where Bettas feel secure. Also reduces light intensity naturally.</li>
  <li><strong>Betta Hammock/Leaf:</strong> Commercial suction-cup artificial leaf placed near the surface — Bettas rest on these regularly. A simple enrichment item.</li>
</ul>
<p><strong>Avoid:</strong> Plastic plants with sharp edges (tear delicate Betta fins). If using artificial plants, choose silk only.</p>

<h2 id="enrichment">Enrichment: Bettas Are Intelligent</h2>
<p>Bettas are among the most intelligent aquarium fish. They recognise their owners, can be trained to perform tricks (swimming through hoops, following a finger), and exhibit clear signs of boredom in barren environments. Enrichment is not anthropomorphism — it is evidence-based husbandry.</p>
<p><strong>Enrichment ideas:</strong></p>
<ul>
  <li><strong>Training sessions:</strong> Use a small stick or laser pointer to guide the Betta through targets. Reward with food. Many Bettas learn to jump through hoops, follow hand movements, and flare on command within days.</li>
  <li><strong>Rearranging décor:</strong> Move plants and caves every 2–4 weeks to create novelty. The Betta will re-explore and re-establish its territory — stimulating natural behaviour.</li>
  <li><strong>Mirror sessions (limited):</strong> Placing a small mirror against the tank for 2–3 minutes triggers a flaring display — the Betta fans its fins and gill covers in a territorial display. This is exercise and behavioural stimulation. Limit to 2–3 minutes, 2–3 times per week — chronic mirror exposure causes stress.</li>
  <li><strong>Floating objects:</strong> A ping-pong ball on the water surface gives curious Bettas something to investigate and push around.</li>
  <li><strong>Live food hunts:</strong> Dropping live daphnia or brine shrimp into the tank triggers hunting behaviour — a natural enrichment that also provides excellent nutrition.</li>
</ul>

<h2 id="diet-and-feeding">Diet and Feeding</h2>
<p>Bettas are insectivores — in the wild, they eat mosquito larvae, small crustaceans, and insect eggs from the water surface. Their upturned mouth is adapted for surface feeding.</p>
<p><strong>Staple diet:</strong> High-quality Betta-specific pellets (Northfin Betta Bits, Hikari Betta Bio-Gold, New Life Spectrum Betta). Feed 2–4 pellets twice daily. Bettas have tiny stomachs (roughly the size of their eye) — overfeeding causes bloat, constipation, and water quality degradation.</p>
<p><strong>Supplementary foods:</strong></p>
<ul>
  <li>Frozen bloodworms — 2–3 times per week. A Betta favourite but high in fat — not suitable as a staple.</li>
  <li>Frozen brine shrimp — 2–3 times per week. Good variety item.</li>
  <li>Frozen daphnia — excellent for digestive health, acts as a mild laxative. Useful for preventing bloat. Once or twice weekly.</li>
  <li>Live foods (mosquito larvae, wingless fruit flies, live brine shrimp) — the ultimate enrichment food. Triggers natural hunting behaviour.</li>
</ul>
<p><strong>Fasting:</strong> One fast day per week (no food) helps prevent constipation and gives the digestive system a rest. This is standard practice among experienced Betta keepers.</p>

<h2 id="tankmates">Tankmates for Bettas</h2>
<p>Male Bettas are territorial and aggressive toward other male Bettas and any fish with bright colours and flowing fins (which they mistake for rival males). However, in tanks of 10+ gallons with adequate hiding spots, many peaceful species can coexist with a Betta:</p>
<p><strong>Compatible tankmates:</strong></p>
<ul>
  <li>Corydoras catfish (bottom dwellers, peaceful, schooling — keep 6+).</li>
  <li>Nerite snails (algae control, cannot reproduce in freshwater).</li>
  <li>Amano shrimp (large enough to avoid predation by most Bettas).</li>
  <li>Kuhli Loaches (nocturnal, hide during the day, peaceful).</li>
  <li>Ember Tetras (tiny, dull-coloured, fast — minimal trigger for Betta aggression).</li>
</ul>
<p><strong>Incompatible:</strong></p>
<ul>
  <li>Other male Bettas — will fight to death.</li>
  <li>Guppies, Endlers — their bright colours and flowing tails trigger aggression.</li>
  <li>Fin-nipping species (Tiger Barbs, Serpae Tetras) — will destroy Betta finnage.</li>
  <li>Large or aggressive fish (Cichlids, Gouramis) — will bully or kill the Betta.</li>
</ul>

<h2 id="common-diseases">Common Betta Diseases</h2>
<ul>
  <li><strong>Fin rot:</strong> Fraying, discoloured fin edges progressing toward the body. Caused by bacterial infection, usually triggered by poor water quality. Treatment: clean water (daily 25 % changes), aquarium salt (1 tsp/gallon for mild cases), antibiotics (kanamycin or erythromycin for severe cases).</li>
  <li><strong>Ich (white spot disease):</strong> White spots resembling grains of salt on fins and body. Treatment: raise temperature to 30 °C gradually (over 24 hours), add aquarium salt (1 tsp/gallon), and maintain for 10 days after last visible spot disappears.</li>
  <li><strong>Velvet:</strong> Gold-dust appearance on the body, clamped fins, lethargy. Caused by the parasite <em>Piscinoodinium</em>. Treatment: darken the tank (velvet parasites are photosynthetic), raise temperature to 28–30 °C, and treat with copper-based medication.</li>
  <li><strong>Swim bladder disorder:</strong> Fish floats sideways, sinks, or struggles to maintain position. Often caused by constipation or overfeeding. Treatment: fast for 2–3 days, then feed frozen daphnia (natural laxative). If persistent, may indicate internal infection requiring antibiotics.</li>
  <li><strong>Dropsy:</strong> Pinecone-like scale protrusion, severely swollen abdomen. Indicates organ failure, usually from bacterial infection. Prognosis is poor. Isolate and treat with Epsom salt baths (1 tbsp/gallon for 15 minutes) and antibiotics (kanamycin + metronidazole), but survival rates are low.</li>
</ul>

<h2 id="betta-varieties">Popular Betta Varieties</h2>
<p>The Betta breeding world is vast and constantly evolving. Key varieties by tail type:</p>
<ul>
  <li><strong>Halfmoon:</strong> Tail spreads 180° when flared, creating a perfect semicircle. The show standard for Betta competitions.</li>
  <li><strong>Crowntail:</strong> Fin rays extend beyond the webbing, creating a spiky, crown-like appearance.</li>
  <li><strong>Plakat:</strong> Short-finned variety closest to the wild form. More active and better swimmers than long-finned varieties. Popular for their vigour and natural appearance.</li>
  <li><strong>Dumbo Ear:</strong> Oversized pectoral fins that resemble elephant ears, creating a unique flying motion during swimming.</li>
  <li><strong>Galaxy Koi:</strong> Multi-coloured marble pattern combining red, white, blue, and black — resembling koi carp. Colours may shift over the fish's lifetime due to the marble gene.</li>
</ul>
<p>The Fish Collection offers select <a href="/exotic-fish/betta">Betta specimens</a> including imported Thai show-grade fish. Every Betta ships with a live-arrival guarantee and acclimation guide.</p>
`,
    faqs: [
      {
        question: 'Can Bettas live in a bowl?',
        answer:
          'Bettas can survive in a bowl but will not thrive. Without a heater, the water is too cold for their tropical metabolism. Without a filter, ammonia accumulates and burns their gills. Without adequate space, they cannot exhibit natural behaviours. Bettas in bowls typically live 1–2 years; those in proper 5–10 gallon heated and filtered tanks live 3–5+ years with significantly better quality of life.',
      },
      {
        question: 'What temperature do Bettas need?',
        answer:
          'Bettas require a stable temperature of 25–28 °C (77–82 °F). An adjustable aquarium heater (25 W for 5 gallons, 50 W for 10 gallons) is essential. Room temperature in most homes (20–22 °C) is too cold and will suppress the Betta immune system, leading to disease and shortened lifespan.',
      },
      {
        question: 'How often should I feed my Betta?',
        answer:
          'Feed 2–4 high-quality Betta pellets twice daily. A Betta stomach is roughly the size of its eye — overfeeding causes bloat and water quality issues. Supplement with frozen bloodworms, brine shrimp, and daphnia 2–3 times per week. Fast one day per week to prevent constipation.',
      },
      {
        question: 'Can Bettas live with other fish?',
        answer:
          'Male Bettas can live with peaceful, non-colourful species in tanks of 10+ gallons: Corydoras catfish, Nerite snails, Amano shrimp, Kuhli Loaches, and Ember Tetras are all compatible. Never keep two male Bettas together. Avoid guppies (trigger aggression due to bright colours) and fin-nipping species like Tiger Barbs.',
      },
      {
        question: 'How long do Betta fish live?',
        answer:
          'Bettas in proper conditions (heated, filtered 5–10 gallon tank with appropriate diet) live 3–5 years, with some reaching 7 years. In pet stores, Bettas are typically 6–12 months old at point of sale. Their lifespan in unheated bowls is significantly shorter — typically 1–2 years — due to chronic temperature and water quality stress.',
      },
    ],
    sources: [
      {
        title: 'FishBase: Betta splendens',
        url: 'https://www.fishbase.se/summary/Betta-splendens.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Labyrinth Organ Function in Anabantoidei',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.12766',
        publisher: 'Journal of Fish Biology',
      },
      {
        title: 'Environmental Enrichment in Betta splendens',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0168159119302187',
        publisher: 'Applied Animal Behaviour Science',
      },
    ],
    relatedSlugs: ['best-exotic-fish-beginners', 'most-colorful-freshwater-fish', 'betta-tank-mates', 'betta-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 8 — Predatory Fish Feeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'Predatory Fish Feeding Guide: Live, Frozen & Pellet Diets',
    slug: 'predatory-fish-feeding-guide',
    type: 'care',
    category: 'arowana',
    topicCategory: 'feeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-12',
    updatedAt: '2026-03-24',
    heroImage: '/images/care/predatory-fish-feeding-guide.jpg',
    heroImageAlt:
      'An Arowana striking at food at the water surface in a large predator aquarium — demonstrating natural feeding behaviour',
    metaTitle:
      'Predatory Fish Feeding Guide: Diets & Schedules',
    metaDescription:
      'Expert feeding guide for predatory fish: Arowana, Wolf Fish, Gar, Piranha. Live, frozen, and pellet diets with schedules and nutritional advice.',
    quickAnswerQuestion: 'What should you feed predatory aquarium fish?',
    quickAnswer:
      'Predatory aquarium fish should be fed a varied diet of high-quality frozen foods (shrimp, smelt, silversides, earthworms), sinking or floating carnivore pellets (Hikari Massivore, Northfin Predator), and occasional live foods (blackworms, gut-loaded crickets, feeder shrimp). Avoid feeder fish — they carry parasites and diseases. Feed juveniles daily; adults every 2–3 days. Variety is essential for complete nutrition, and each predatory species has specific dietary preferences.',
    summary:
      'A cross-species feeding guide for popular predatory aquarium fish — Arowana, Wolf Fish, Gar, Piranha, and others — covering live, frozen, and pellet diet options, feeding schedules, and nutritional science.',
    keyFacts: [
      { label: 'Feeding Frequency (Adult)', value: 'Every 2–3 days' },
      { label: 'Feeding Frequency (Juvenile)', value: 'Daily' },
      { label: 'Primary Diet', value: 'Frozen shrimp, smelt, earthworms' },
      { label: 'Supplementary Diet', value: 'Carnivore pellets (30 % max)' },
      { label: 'Avoid', value: 'Feeder fish (disease risk)' },
      { label: 'Variety Required', value: '3+ food types minimum' },
    ],
    headings: [
      { id: 'why-diet-matters', text: 'Why Diet Matters for Predatory Fish', level: 2 },
      { id: 'frozen-foods', text: 'Frozen Foods: The Staple Diet', level: 2 },
      { id: 'pellet-diets', text: 'Pellet Diets: Nutrition Rounding', level: 2 },
      { id: 'live-foods', text: 'Live Foods: When and How', level: 2 },
      { id: 'the-feeder-fish-problem', text: 'The Feeder Fish Problem', level: 2 },
      { id: 'species-specific-diets', text: 'Species-Specific Diet Guides', level: 2 },
      { id: 'arowana-diet', text: 'Arowana Diet', level: 3 },
      { id: 'wolf-fish-diet', text: 'Wolf Fish Diet', level: 3 },
      { id: 'gar-diet', text: 'Gar Diet', level: 3 },
      { id: 'piranha-diet', text: 'Piranha Diet', level: 3 },
      { id: 'feeding-schedules', text: 'Feeding Schedules by Size', level: 2 },
      { id: 'nutritional-deficiencies', text: 'Recognising Nutritional Deficiencies', level: 2 },
    ],
    content: `
<h2 id="why-diet-matters">Why Diet Matters for Predatory Fish</h2>
<p>Predatory aquarium fish — <a href="/exotic-fish/arowana">Arowana</a>, Wolf Fish, Gar, Piranha, large cichlids, and others — are metabolically demanding animals that require high-protein diets matched to their natural feeding ecology. A poorly fed predator does not just lose colour or grow slowly — it develops fatty liver disease, spinal deformities, vitamin deficiencies, and immune suppression that dramatically shorten its lifespan.</p>
<p>The single most important principle in predatory fish nutrition is <strong>variety</strong>. No single food item provides complete nutrition. A predator fed exclusively on one food — even a nutritious one — will develop deficiencies over time. The goal is a rotation of 3–5 food types that collectively cover all macro and micronutrient requirements.</p>
<p>The second principle is <strong>quality over quantity</strong>. Predatory fish in captivity are far more prone to obesity than starvation. In the wild, meals are irregular and the fish expends significant energy hunting. In captivity, food arrives on schedule with zero effort. Overfeeding is the default problem — not underfeeding.</p>

<h2 id="frozen-foods">Frozen Foods: The Staple Diet</h2>
<p>Frozen foods form the foundation of a predatory fish diet. They are nutritionally dense, pathogen-free (flash-freezing kills most parasites), and available in sizes suitable for fish from 10 cm to 100 cm+. Stock a rotation of the following:</p>
<ul>
  <li><strong>Raw shrimp (shell-on):</strong> Excellent protein and calcium source (the shell provides calcium for bone development). Use market-grade raw, uncooked shrimp — not pre-cooked, which loses nutritional value. Remove the tail spike for smaller fish. The single best all-around food for most predators.</li>
  <li><strong>Smelt and silversides:</strong> Whole small fish provide complete nutrition — protein, fat, minerals, and vitamins. The bones supply calcium. Feed whole (head, tail, and organs included) for maximum nutritional value. Size-match to your predator: 5 cm silversides for 30 cm fish, 10 cm smelt for 60 cm+ fish.</li>
  <li><strong>Earthworms (nightcrawlers):</strong> Outstanding protein content and amino acid profile. Readily accepted by virtually all predatory fish. Buy from bait shops (ensure they are pesticide-free) or culture your own. Rinse thoroughly before feeding.</li>
  <li><strong>Frozen bloodworms:</strong> Excellent for small predators and juveniles. Too small as a staple for fish above 25 cm but useful for variety. High in protein, moderate in fat.</li>
  <li><strong>Frozen krill:</strong> Rich in astaxanthin (carotenoid pigment) that enhances red and orange coloration. An excellent supplementary food for colour development in Arowana, Flowerhorn, and Peacock Bass.</li>
  <li><strong>Mussel and clam meat:</strong> Provides trace minerals (iron, zinc, manganese) not found in abundance in other frozen foods. Feed 1–2 times per week as a supplement.</li>
</ul>
<p>Thaw frozen foods in tank water before feeding — never microwave or use hot water, which denatures proteins. Feed immediately after thawing; do not refreeze.</p>

<h2 id="pellet-diets">Pellet Diets: Nutrition Rounding</h2>
<p>High-quality carnivore pellets serve as a nutritional "insurance policy" — they are formulated with balanced vitamin and mineral profiles that fill gaps left by whole-food diets. They should constitute 20–30 % of the total diet, not more.</p>
<p><strong>Recommended pellet brands:</strong></p>
<ul>
  <li><strong>Hikari Massivore:</strong> Large sinking pellet designed for predatory fish. High protein (45 %+), contains garlic (appetite stimulant), and includes vitamin C and E for immune support. One of the most widely accepted pellets among picky predators.</li>
  <li><strong>Northfin Predator:</strong> Whole-ingredient formula with no fillers, artificial colours, or preservatives. High in whole krill and herring meal. Excellent amino acid and fatty acid profile.</li>
  <li><strong>New Life Spectrum Large Predator:</strong> Includes spirulina and astaxanthin for colour enhancement alongside a high-protein base. Good for predators where colour development is a priority.</li>
  <li><strong>Hikari Carnisticks:</strong> Floating sticks designed for surface-feeding predators (Arowana, Gar). Softens slowly, reducing the risk of bloat from rapid pellet expansion in the stomach.</li>
</ul>
<p>Not all predators accept pellets readily. Arowana, in particular, can be stubborn about pellet conversion. Introduce pellets gradually: mix with a known accepted food (shrimp), then slowly reduce the ratio of shrimp to pellet over 2–3 weeks. Some fish require extended fasting (5–7 days) before they accept pellets out of hunger.</p>

<h2 id="live-foods">Live Foods: When and How</h2>
<p>Live foods trigger natural hunting behaviour, provide enrichment, and are often the most effective way to entice a newly acquired or stressed predator to eat. However, live foods carry higher disease and parasite risk than frozen alternatives. Use selectively, not as a staple.</p>
<p><strong>Recommended live foods:</strong></p>
<ul>
  <li><strong>Blackworms (Lumbriculus variegatus):</strong> Clean, nutritious, readily accepted by all predators. Culture your own or buy from reputable suppliers. Rinse thoroughly and store in a shallow tray with daily water changes.</li>
  <li><strong>Gut-loaded crickets:</strong> Excellent for surface feeders (Arowana, Gar). "Gut-load" by feeding the crickets a nutritious diet (fish flake, vegetables) for 24 hours before offering to the fish — the cricket's gut contents become part of the nutrition.</li>
  <li><strong>Feeder shrimp (ghost shrimp):</strong> Low disease risk compared to feeder fish. Good for triggering hunting behaviour. Gut-load with spirulina flake before feeding.</li>
  <li><strong>Dubia roaches:</strong> High protein, low fat, easy to culture. Excellent for large surface-feeding predators. Remove wings before offering to prevent choking.</li>
</ul>
<p><strong>Live foods to use cautiously:</strong></p>
<ul>
  <li><strong>Mealworms:</strong> High in fat and chitin. Feed sparingly — chitin can cause intestinal impaction in fish that do not naturally consume hard-shelled prey.</li>
  <li><strong>Feeder fish:</strong> See section below — generally discouraged.</li>
</ul>

<h2 id="the-feeder-fish-problem">The Feeder Fish Problem</h2>
<p>Feeder fish (goldfish, rosy reds, minnows) remain popular among predatory fish keepers despite overwhelming evidence that they are nutritionally poor and medically dangerous. Here is why we advise against them:</p>
<ul>
  <li><strong>Disease transmission:</strong> Feeder fish from pet stores are maintained in overcrowded, poorly filtered systems. Parasites (ich, gill flukes, internal worms), bacterial infections, and viral diseases are endemic. Every feeder fish introduced to your predator tank is a potential vector.</li>
  <li><strong>Thiaminase:</strong> Goldfish and many other cyprinids contain thiaminase — an enzyme that destroys vitamin B1 (thiamine). Chronic thiaminase consumption causes neurological damage, muscle wasting, and death. This is well-documented in the veterinary and aquaculture literature.</li>
  <li><strong>Fat content:</strong> Goldfish are high in saturated fat. Regular consumption causes fatty liver disease (hepatic lipidosis) in predators — the leading cause of premature death in overfed captive Arowana.</li>
  <li><strong>Nutritional poverty:</strong> A mass-produced feeder goldfish raised on flake food in overcrowded conditions is nutritionally inferior to frozen shrimp, smelt, or earthworms by every measure — protein quality, vitamin content, mineral profile, and fatty acid ratio.</li>
</ul>
<p>If you absolutely must use feeder fish, quarantine them for 2–4 weeks in a separate system, treat prophylactically for parasites (praziquantel + metronidazole), and feed them a high-quality diet during quarantine to improve their nutritional value. But realistically, the cost and effort of feeder quarantine far exceeds the cost of buying frozen shrimp.</p>

<h2 id="species-specific-diets">Species-Specific Diet Guides</h2>

<h3 id="arowana-diet">Arowana Diet</h3>
<p>Arowana are surface predators that strike from below. In the wild, they eat insects, small birds, frogs, and fish from the water surface. In captivity:</p>
<ul>
  <li><strong>Staple:</strong> Frozen shrimp (shell-on), smelt, and earthworms — offered at the water surface with feeding tongs or floating in a feeding ring.</li>
  <li><strong>Supplementary:</strong> Gut-loaded crickets (2–3 times weekly for variety and enrichment), floating carnivore pellets (Hikari Carnisticks, 20 % of diet).</li>
  <li><strong>Colour-enhancing:</strong> Frozen krill and astaxanthin-rich pellets for Super Red and Golden varieties.</li>
  <li><strong>Avoid:</strong> Feeder fish (thiaminase, fatty liver), centipedes and wild-caught insects (pesticide risk), exclusively protein-heavy diets without pellet vitamin supplementation.</li>
  <li><strong>Frequency:</strong> Juveniles daily; sub-adults every other day; adults every 2–3 days.</li>
</ul>
<p>For full Arowana care details, see our <a href="/blog/arowana-care-guide">Arowana care guide</a> and <a href="/care/arowana-tank-setup">tank setup guide</a>.</p>

<h3 id="wolf-fish-diet">Wolf Fish Diet</h3>
<p>Wolf Fish (<em>Hoplias malabaricus</em> and <em>Hoplias aimara</em>) are ambush predators with massive jaw strength. They eat anything they can catch and overpower.</p>
<ul>
  <li><strong>Staple:</strong> Frozen shrimp, smelt, and tilapia fillet — cut to mouth-sized pieces.</li>
  <li><strong>Supplementary:</strong> Earthworms, frozen krill, sinking carnivore pellets (once converted).</li>
  <li><strong>Live enrichment:</strong> Ghost shrimp, gut-loaded crickets (dropped on the surface).</li>
  <li><strong>Frequency:</strong> Every 2–3 days for adults. Wolf Fish have slow metabolisms and are prone to obesity if overfed.</li>
  <li><strong>Feeding tip:</strong> Wolf Fish often refuse to eat for days or weeks after being moved to a new tank. Patience is essential — they will feed when they are ready. Offering food via long feeding tongs (your hand should never be near a Wolf Fish's mouth) in dim lighting often succeeds when daytime feeding fails.</li>
</ul>

<h3 id="gar-diet">Gar Diet</h3>
<p>Gar (Lepisosteus and Atractosteus species) are primitive predators with elongated snouts and armoured bodies. They are surface or mid-water ambush feeders.</p>
<ul>
  <li><strong>Staple:</strong> Frozen smelt and silversides — offered at or near the surface. Gar prefer elongated prey items that they grab sideways and manipulate into swallowing position.</li>
  <li><strong>Supplementary:</strong> Frozen shrimp, earthworms, floating carnivore sticks.</li>
  <li><strong>Live enrichment:</strong> Feeder shrimp, gut-loaded crickets, small crayfish.</li>
  <li><strong>Frequency:</strong> Every 2–3 days for adults. Gar are ambush predators with low metabolic rates — they eat less frequently than active hunters like Arowana.</li>
  <li><strong>Note:</strong> Gar have bony, inflexible mouths that cannot handle food items wider than their snout gap. Size food appropriately — too-large items cause jaw strain and feeding frustration.</li>
</ul>

<h3 id="piranha-diet">Piranha Diet</h3>
<p>Piranhas (Serrasalmidae) are omnivorous mesopredators, not the frenzied killers of popular imagination. In the wild, they eat fish, invertebrates, seeds, fruits, and carrion.</p>
<ul>
  <li><strong>Staple:</strong> Frozen shrimp, smelt, and tilapia fillet — dispersed across the tank to prevent feeding aggression within the school.</li>
  <li><strong>Supplementary:</strong> Frozen bloodworms (for juveniles), sinking carnivore pellets, blanched vegetables (peas, zucchini — piranhas are more omnivorous than most keepers realise).</li>
  <li><strong>Live enrichment:</strong> Ghost shrimp, blackworms, earthworms.</li>
  <li><strong>Frequency:</strong> Daily for juveniles; every other day for adults.</li>
  <li><strong>Important:</strong> Feed piranhas at a consistent time to establish routine and reduce feeding-associated aggression. Scatter food to prevent dominant individuals from monopolising — this is especially critical in Red Belly Piranha schools where aggression can escalate to cannibalism if subordinate fish are consistently excluded from feeding.</li>
</ul>

<h2 id="feeding-schedules">Feeding Schedules by Size</h2>
<p>Feeding frequency should decrease as predatory fish grow:</p>
<ul>
  <li><strong>Juveniles (under 15 cm):</strong> Daily feeding. Growing fish need consistent nutrition. Feed an amount the fish can consume within 2–3 minutes.</li>
  <li><strong>Sub-adults (15–30 cm):</strong> Every other day. Metabolism begins slowing relative to body mass.</li>
  <li><strong>Adults (30 cm+):</strong> Every 2–3 days. Large predators in the wild may go a week between meals. Overfeeding adults is the leading cause of fatty liver disease and obesity.</li>
</ul>
<p>Monitor body condition visually. A healthy predator has a slightly convex belly profile (not sunken, not bulging). After a meal, a visible food bulge is normal and should subside within 24 hours. If the belly remains distended for 48+ hours, skip the next feeding and assess for bloat.</p>
<p>One fast day per week is recommended for all predatory fish. This mimics natural feeding patterns and gives the digestive system time to fully process the previous meal.</p>

<h2 id="nutritional-deficiencies">Recognising Nutritional Deficiencies</h2>
<p>Chronic dietary imbalance produces specific, recognisable symptoms:</p>
<ul>
  <li><strong>Vitamin A deficiency:</strong> Cloudy eyes, mucus overproduction, reduced immune function. Caused by diets lacking whole fish (organ meats are the primary vitamin A source).</li>
  <li><strong>Vitamin B1 (thiamine) deficiency:</strong> Neurological symptoms — erratic swimming, loss of coordination, seizures. Caused by feeder fish containing thiaminase (goldfish, rosy reds). Fatal if not corrected.</li>
  <li><strong>Vitamin C deficiency:</strong> Spinal deformity, poor wound healing, increased susceptibility to bacterial infection. Supplement with pellets containing stabilised vitamin C or soak frozen foods in a vitamin C solution before feeding.</li>
  <li><strong>Calcium deficiency:</strong> Soft bones, jaw deformity, operculum (gill cover) erosion. Caused by diets lacking shell-on shrimp, whole fish with bones, or hard-shelled prey. Particularly common in fish fed exclusively on filleted fish meat.</li>
  <li><strong>Fatty liver disease:</strong> Swollen abdomen, lethargy, loss of appetite, pine-cone scale protrusion (dropsy) in advanced cases. Caused by overfeeding — especially high-fat foods like feeder goldfish, excessive bloodworms, or mammalian meat (beef heart). Prevention: feed appropriate portions every 2–3 days, avoid feeder fish, and include weekly fasting.</li>
</ul>
<p>The best prevention for all deficiencies is dietary variety — rotate through 3–5 food types weekly, include a quality pellet for vitamin/mineral insurance, and avoid reliance on any single food item.</p>
<p>Browse The Fish Collection's <a href="/exotic-fish/arowana">Arowana</a>, <a href="/exotic-fish/cichlid">cichlid</a>, and <a href="/exotic-fish/stingray">stingray</a> collections — every fish ships with species-specific feeding recommendations from our aquatic biology team.</p>
`,
    faqs: [
      {
        question: 'Should I feed my predatory fish live food?',
        answer:
          'Live food is beneficial for enrichment and stimulating natural hunting behaviour but should not be the staple diet. Live blackworms, gut-loaded crickets, and feeder shrimp are the safest options. Avoid feeder fish (goldfish, minnows) due to parasite risk, thiaminase content, and poor nutritional value. Frozen foods and quality pellets should form 70–80 % of the diet.',
      },
      {
        question: 'How often should I feed an adult Arowana?',
        answer:
          'Adult Arowana (over 40 cm) should be fed every 2–3 days. Juveniles need daily feeding. Each meal should be enough to produce a visible but not excessive food bulge. Overfeeding is the primary dietary mistake with Arowana — it causes fatty liver disease, the leading cause of premature death in captive specimens.',
      },
      {
        question: 'Why are feeder fish bad for predatory fish?',
        answer:
          'Feeder fish carry three major risks: (1) Disease transmission — feeder fish from stores harbour parasites, bacteria, and viruses that can devastate your predator. (2) Thiaminase — goldfish and many cyprinids contain an enzyme that destroys vitamin B1, causing fatal neurological damage. (3) Excess fat — feeder goldfish cause fatty liver disease with chronic consumption. Frozen shrimp, smelt, and earthworms are safer, cheaper, and more nutritious.',
      },
      {
        question: 'What pellets are best for predatory fish?',
        answer:
          'Hikari Massivore (sinking), Northfin Predator (sinking), and Hikari Carnisticks (floating) are consistently recommended by professional predatory fish keepers. Look for pellets with 40 %+ crude protein, whole-ingredient sourcing (krill, herring meal, not generic "fish meal"), and added vitamins C and E. Pellets should comprise 20–30 % of total diet, not 100 %.',
      },
      {
        question: 'My predatory fish refuses to eat — what should I do?',
        answer:
          'Feeding refusal is common after relocation, water changes, or environmental stress. First, verify water parameters (ammonia, nitrite, temperature, pH). Then try offering food in dim lighting or after lights-out — many predators are more confident feeders in low light. Try different food types: if frozen shrimp is refused, try live blackworms or earthworms. If refusal persists beyond 7–10 days with normal water parameters, consult an aquatic veterinarian.',
      },
      {
        question: 'Can I feed beef heart to predatory fish?',
        answer:
          'Beef heart was historically a popular predatory fish food, but it is no longer recommended as a regular diet item. Mammalian fats (saturated) are poorly metabolised by fish, contributing to fatty liver disease. Beef heart also lacks the omega-3 fatty acids present in fish and crustacean-based foods. If used at all, it should be trimmed of all visible fat and offered no more than once every 2 weeks as a treat — not a staple.',
      },
    ],
    sources: [
      {
        title: 'Thiaminase Activity in Common Feeder Fish',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6356183/',
        publisher: 'National Library of Medicine',
      },
      {
        title: 'Nutritional Requirements of Ornamental Fish',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848620301976',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Hepatic Lipidosis in Captive Predatory Fish: Dietary Causes and Prevention',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.14382',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: ['arowana-tank-setup', 'freshwater-stingray-care-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 9 — Arowana Water Parameters
  // ──────────────────────────────────────────────
  {
    title: 'Arowana Water Parameters Guide',
    slug: 'platinum-arowana-water-parameters',
    type: 'care',
    category: 'arowana',
    topicCategory: 'water-chemistry',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/platinum-arowana-water-parameters.jpg',
    heroImageAlt:
      'A Platinum Arowana swimming in crystal-clear water with digital parameter monitors visible in the background',
    metaTitle: 'Water Parameters Guide for Arowana | The Fish Collection',
    metaDescription:
      'Expert Arowana water parameters guide. Temperature, pH, hardness, TDS, and nitrate targets for Asian, Silver, and Platinum Arowana with testing protocols.',
    quickAnswerQuestion: 'What water parameters do Arowana need?',
    quickAnswer:
      'Arowana require water temperature of 26–28 °C (79–82 °F), pH 6.5–7.0, general hardness 1–8 dGH, carbonate hardness 2–5 dKH, ammonia and nitrite at 0 ppm, nitrate below 20 ppm (below 10 ppm preferred), and TDS of 50–150 ppm. Stability is more important than hitting exact numbers — sudden parameter swings cause stress-related conditions including drop eye, gill curl, and colour loss.',
    summary:
      'A detailed water chemistry guide for Asian, Silver, and Platinum Arowana covering target parameters, testing protocols, water change schedules, RO/DI blending, blackwater conditioning, and troubleshooting common water quality issues.',
    keyFacts: [
      { label: 'Temperature', value: '26–28 °C (79–82 °F)' },
      { label: 'pH Range', value: '6.5–7.0' },
      { label: 'General Hardness', value: '1–8 dGH' },
      { label: 'KH (Buffer)', value: '2–5 dKH' },
      { label: 'Nitrate Target', value: 'Below 20 ppm' },
      { label: 'TDS', value: '50–150 ppm' },
    ],
    headings: [
      { id: 'why-water-parameters-matter', text: 'Why Water Parameters Matter for Arowana', level: 2 },
      { id: 'target-parameters', text: 'Target Water Parameters', level: 2 },
      { id: 'temperature-management', text: 'Temperature Management', level: 2 },
      { id: 'ph-and-hardness', text: 'pH and Hardness', level: 2 },
      { id: 'achieving-soft-water', text: 'Achieving Soft, Acidic Water', level: 3 },
      { id: 'nitrogen-compounds', text: 'Ammonia, Nitrite, and Nitrate', level: 2 },
      { id: 'tds-management', text: 'TDS Management', level: 2 },
      { id: 'water-change-protocol', text: 'Water Change Protocol', level: 2 },
      { id: 'blackwater-conditioning', text: 'Blackwater Conditioning for Colour', level: 2 },
      { id: 'testing-schedule', text: 'Testing Schedule', level: 2 },
      { id: 'troubleshooting', text: 'Troubleshooting Common Issues', level: 2 },
    ],
    content: `
<h2 id="why-water-parameters-matter">Why Water Parameters Matter for Arowana</h2>
<p>Arowana are long-lived, high-value fish that respond to water quality with immediate, visible consequences. A Platinum Arowana worth $100,000+ cannot be treated like a hardy community fish — parameter deviations that a cichlid would tolerate silently will produce measurable stress responses in an Arowana within days. Drop eye, gill curl, colour fading, appetite loss, and immune suppression are all linked to chronic water quality issues.</p>
<p>The goal is not perfection on any single measurement — it is <strong>stability</strong>. An Arowana acclimated to a stable pH of 7.2 will perform better than one in a system oscillating between 6.5 and 7.0. Every parameter adjustment should be made gradually, over days rather than hours. For tank setup fundamentals, see our <a href="/care/arowana-tank-setup">Arowana tank setup guide</a>.</p>

<h2 id="target-parameters">Target Water Parameters</h2>
<p>The following targets apply to all commonly kept Arowana species, with notes on species-specific preferences:</p>
<ul>
  <li><strong>Temperature:</strong> 26–28 °C (79–82 °F). Silver Arowana (<em>Osteoglossum bicirrhosum</em>) tolerate slightly cooler water (24–28 °C). Asian Arowana (<em>Scleropages formosus</em>) perform best at 27–28 °C.</li>
  <li><strong>pH:</strong> 6.5–7.0. The slightly acidic range mirrors their natural blackwater habitat. Captive-bred specimens tolerate up to pH 7.5 if stable.</li>
  <li><strong>General Hardness (GH):</strong> 1–8 dGH. Soft water is preferred. Asian Arowana originate from soft, mineral-poor Southeast Asian rivers.</li>
  <li><strong>Carbonate Hardness (KH):</strong> 2–5 dKH. Sufficient to buffer against pH crashes between water changes, but low enough to support the slightly acidic target pH.</li>
  <li><strong>Ammonia:</strong> 0 ppm — always. Any detectable ammonia in an Arowana system indicates a filtration failure that requires immediate action.</li>
  <li><strong>Nitrite:</strong> 0 ppm — always.</li>
  <li><strong>Nitrate:</strong> Below 20 ppm; below 10 ppm preferred. Arowana are sensitive to nitrate accumulation, which suppresses colour and appetite.</li>
  <li><strong>TDS (Total Dissolved Solids):</strong> 50–150 ppm. Low TDS indicates clean, mineral-appropriate water.</li>
</ul>

<h2 id="temperature-management">Temperature Management</h2>
<p>Temperature stability is the single most important parameter for Arowana. A consistent 27 °C is far better than a temperature that fluctuates between 26 °C and 29 °C with day-night cycles. Fluctuations of more than 1 °C within a 24-hour period cause chronic stress.</p>
<p><strong>Equipment requirements:</strong></p>
<ul>
  <li>Titanium heater rated for at least 400 W for a 240-gallon system (or two 300 W units for redundancy).</li>
  <li>External digital temperature controller (Inkbird ITC-308 or equivalent) — never rely solely on the heater's built-in thermostat.</li>
  <li>Place heaters in the sump, not the display tank, to prevent the Arowana from burning itself.</li>
  <li>Position the temperature probe in the display tank at the opposite end from the return outlet.</li>
</ul>
<p>In summer, if ambient room temperature pushes the tank above 30 °C, use a clip-on fan directed across the water surface to enhance evaporative cooling, or invest in an aquarium chiller. Sustained temperatures above 30 °C increase metabolic rate, reduce dissolved oxygen, and stress the fish.</p>

<h2 id="ph-and-hardness">pH and Hardness</h2>
<p>The relationship between pH, KH, and CO₂ determines water chemistry stability. KH acts as a buffer — it resists pH changes. Without adequate KH, pH can crash overnight as biological filtration produces acids. With excessive KH, lowering pH to the target 6.5–7.0 range becomes difficult.</p>
<p>The sweet spot is KH 2–5 dKH: enough buffering to prevent crashes, low enough to allow slightly acidic conditions. Test KH weekly and adjust if it drifts outside this range.</p>

<h3 id="achieving-soft-water">Achieving Soft, Acidic Water</h3>
<p>If your tap water is hard and alkaline (common in many US regions), use an RO/DI system to produce demineralised water, then blend with tap water to reach target parameters. A typical ratio is 70–80 % RO water to 20–30 % tap water, but the exact ratio depends on your tap water's baseline GH and KH.</p>
<p>Never add pure RO water directly to an Arowana tank — it contains no minerals and can cause osmotic stress. Always remineralise with a GH/KH product (Seachem Equilibrium + alkaline buffer, or similar) before adding to the system.</p>
<p>For natural pH suppression, Indian almond leaves (<em>Terminalia catappa</em>), peat moss in the filter, or blackwater extract can gently lower pH while releasing beneficial tannins. These methods also serve as colour enhancers — see the blackwater section below.</p>

<h2 id="nitrogen-compounds">Ammonia, Nitrite, and Nitrate</h2>
<p>In a properly cycled Arowana system, ammonia and nitrite should always read 0 ppm. Any detectable level indicates one of three problems:</p>
<ul>
  <li><strong>Insufficient biological filtration:</strong> Biomedia volume may be inadequate for the bioload. Arowana are large predators producing substantial waste — ensure at least 10–15 litres of sintered-glass or ceramic biomedia in the sump.</li>
  <li><strong>Disrupted bacterial colony:</strong> Over-cleaning biomedia, medicating the main system, or a power outage killing aerobic bacteria. Never clean more than 25 % of biomedia at one time, and always rinse in old tank water, not tap water.</li>
  <li><strong>Overfeeding:</strong> Uneaten food and excessive waste production overwhelm the filter's processing capacity.</li>
</ul>
<p>Nitrate is the end product of the nitrogen cycle and accumulates between water changes. Weekly 30–40 % water changes are the primary nitrate management tool. If nitrate exceeds 20 ppm despite regular water changes, increase change volume or frequency, add fast-growing floating plants (pothos cuttings rooted in the sump are highly effective), or add a denitrifying reactor.</p>

<h2 id="tds-management">TDS Management</h2>
<p>TDS measures the total concentration of dissolved substances — minerals, salts, organic compounds, and waste products. A TDS meter ($15–$30) provides a quick daily snapshot of overall water quality.</p>
<p>Target TDS for Arowana: 50–150 ppm. Rising TDS between water changes is normal; a steady climb over weeks indicates insufficient water change volume. A sudden spike after a water change means your replacement water is not properly conditioned or your RO membrane needs replacement.</p>
<p>TDS is not a substitute for testing individual parameters (pH, ammonia, nitrate) but serves as a useful early warning system for water quality drift.</p>

<h2 id="water-change-protocol">Water Change Protocol</h2>
<p>Water changes are the single most important maintenance task for Arowana. A consistent schedule prevents parameter drift and keeps nitrate under control.</p>
<p><strong>Recommended schedule:</strong></p>
<ul>
  <li><strong>Frequency:</strong> Weekly minimum. Twice weekly for heavily stocked systems or tanks with nitrate creep above 15 ppm.</li>
  <li><strong>Volume:</strong> 30–40 % per change. Larger changes (50 %+) are safe if the replacement water is temperature- and chemistry-matched.</li>
  <li><strong>Temperature matching:</strong> Replacement water must be within 1 °C of the tank temperature. Mix hot and cold water or pre-heat in a holding container.</li>
  <li><strong>Chemistry matching:</strong> If using RO/DI blended water, pre-mix to match tank pH and GH before adding. Never dump raw RO water into the tank.</li>
  <li><strong>Dechlorination:</strong> Treat all tap water or tap/RO blends with a dechlorinator (Seachem Prime or equivalent) before adding to the system. Chlorine and chloramine are lethal to the biological filter at municipal concentrations.</li>
</ul>
<p>For high-value Arowana systems, consider an automated water-change system with a float valve, supply reservoir, and drain line. This allows small, continuous water replacement (drip method) that maintains near-constant parameters.</p>

<h2 id="blackwater-conditioning">Blackwater Conditioning for Colour</h2>
<p>Blackwater conditioning — adding tannins to stain the water amber-brown — is used extensively by Arowana keepers to enhance coloration, particularly in Super Red and Red Tail Golden varieties. The tannins released by botanical materials lower pH gently, provide mild antibacterial properties, and are believed to reduce stress by mimicking the Arowana's natural habitat.</p>
<p><strong>Blackwater sources:</strong></p>
<ul>
  <li><strong>Indian almond leaves (<em>Terminalia catappa</em>):</strong> The most popular option. Add 1–2 large leaves per 50 gallons, replacing as they decompose (every 2–3 weeks). Leaves can also be brewed into a concentrate.</li>
  <li><strong>Peat moss:</strong> Place in a filter media bag in the sump. Releases tannins and humic acids, lowering pH gradually. Replace monthly.</li>
  <li><strong>Alder cones:</strong> Small, easy to dose, and release tannins quickly. Use 5–10 cones per 50 gallons.</li>
  <li><strong>Commercial blackwater extract:</strong> Seachem Tannin, Brightwell Blackwater, or similar products offer precise, measurable dosing.</li>
</ul>
<p>Monitor pH closely when using blackwater additives — they lower pH gradually, and the effect compounds over time. Maintain KH at 2–5 dKH to prevent pH crashes.</p>

<h2 id="testing-schedule">Testing Schedule</h2>
<p>A disciplined testing schedule catches problems before they become emergencies:</p>
<ul>
  <li><strong>Daily:</strong> Temperature (digital thermometer, always visible). TDS (quick dip of the TDS pen).</li>
  <li><strong>Twice weekly:</strong> pH (liquid reagent test — digital pH meters require frequent calibration and drift more than test kits).</li>
  <li><strong>Weekly:</strong> Ammonia, nitrite, nitrate (liquid reagent test kit — API Master Test Kit or equivalent; avoid strip tests, which are less accurate).</li>
  <li><strong>Monthly:</strong> GH, KH (liquid reagent). RO membrane output TDS (should read 0–5 ppm; higher indicates membrane replacement needed).</li>
</ul>
<p>Log all test results. A spreadsheet or notebook log allows you to identify trends — slowly rising nitrate, gradually dropping KH, seasonal pH drift — before they reach problematic levels.</p>

<h2 id="troubleshooting">Troubleshooting Common Issues</h2>
<ul>
  <li><strong>pH crash (sudden drop below 5.5):</strong> Usually caused by depleted KH buffer. Immediately perform a 25 % water change with KH-adjusted water. Investigate KH depletion — increase water change frequency or add KH buffer to the replacement water.</li>
  <li><strong>Persistent ammonia above 0 ppm:</strong> Check biomedia volume, verify sump pump is running, test for chloramine in source water (chloramine can pass through standard dechlorinators at high concentrations — use double dose of Prime or switch to an ammonia-binding conditioner).</li>
  <li><strong>Colour fading:</strong> Often caused by high nitrate (above 30 ppm), high TDS, or excessively bright lighting. Increase water change frequency, add blackwater conditioning, and adjust lighting spectrum toward warmer tones.</li>
  <li><strong>Fish gasping at surface:</strong> Dissolved oxygen may be low — check that the sump return creates adequate surface agitation, and verify the ambient temperature has not pushed the tank above 30 °C (warm water holds less oxygen).</li>
</ul>
<p>For filtration and equipment guidance, return to our <a href="/care/arowana-tank-setup">Arowana tank setup guide</a>. For feeding protocols that complement proper water management, see our <a href="/care/platinum-arowana-feeding-guide">Arowana feeding guide</a>.</p>
`,
    faqs: [
      {
        question: 'What pH do Arowana need?',
        answer:
          'Arowana thrive at pH 6.5–7.0. Captive-bred specimens tolerate up to pH 7.5 if the water is stable. Stability matters more than hitting an exact number — avoid pH fluctuations greater than 0.3 units within a 24-hour period. Use KH buffering (2–5 dKH) to prevent crashes.',
      },
      {
        question: 'What temperature should an Arowana tank be?',
        answer:
          'Asian Arowana perform best at 27–28 °C (80–82 °F). Silver Arowana tolerate a wider range of 24–28 °C. Temperature stability is critical — fluctuations greater than 1 °C per day cause chronic stress. Use a titanium heater with an external digital temperature controller for precision.',
      },
      {
        question: 'How often should I change water in an Arowana tank?',
        answer:
          'Perform 30–40 % water changes weekly at minimum. Twice weekly is preferred for heavily fed adults. Always temperature-match and chemistry-match the replacement water before adding it to the system. Use dechlorinated or RO/DI blended water.',
      },
      {
        question: 'Do Arowana need soft water?',
        answer:
          'Yes. Arowana prefer soft water with general hardness of 1–8 dGH and TDS of 50–150 ppm. If your tap water is hard, use an RO/DI system and blend with tap water to reach target parameters. Never add pure RO water directly — always remineralise before use.',
      },
      {
        question: 'What causes colour loss in Arowana?',
        answer:
          'Common causes of Arowana colour fading include high nitrate (above 30 ppm), high TDS, excessively bright lighting, stress from parameter instability, and poor diet. Improve colour by increasing water change frequency, adding blackwater conditioning (Indian almond leaves or tannin extract), adjusting lighting, and feeding colour-enhancing foods rich in carotenoids.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Scleropages formosus',
        url: 'https://www.fishbase.se/summary/Scleropages-formosus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Water Quality Parameters for Ornamental Fish Health',
        url: 'https://edis.ifas.ufl.edu/publication/FA164',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Tannin Effects on Water Chemistry and Fish Physiology',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848618302679',
        publisher: 'Aquaculture (Elsevier)',
      },
    ],
    relatedSlugs: ['arowana-tank-setup', 'platinum-arowana-feeding-guide', 'arowana-cost-pricing-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 10 — Arowana Feeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'Arowana Feeding Guide',
    slug: 'platinum-arowana-feeding-guide',
    type: 'care',
    category: 'arowana',
    topicCategory: 'feeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/platinum-arowana-feeding-guide.jpg',
    heroImageAlt:
      'An Asian Arowana leaping to catch a cricket at the water surface during feeding time',
    metaTitle: 'Feeding Guide for Arowana | Water, Tank & Diet | The Fish Collection',
    metaDescription:
      'Complete Arowana feeding guide. Best foods, feeding schedules, colour-enhancing diets, and nutritional mistakes to avoid for Asian and Silver Arowana.',
    quickAnswerQuestion: 'What do Arowana eat?',
    quickAnswer:
      'Arowana are carnivorous surface feeders that eat a varied diet of market shrimp, crickets, mealworms, superworms, frozen silversides, and high-quality carnivore pellets. Adults should be fed once daily or every other day. Colour-enhancing foods rich in astaxanthin and carotenoids (shrimp, krill, colour-boosting pellets) intensify red and gold pigmentation. Avoid feeder fish as a dietary staple — they carry parasites and cause nutritional deficiency.',
    summary:
      'An expert feeding protocol for Asian and Silver Arowana covering ideal food types, feeding frequency by age, colour-enhancing nutrition, foods to avoid, and common dietary mistakes that shorten lifespan and degrade appearance.',
    keyFacts: [
      { label: 'Diet Type', value: 'Carnivore (surface feeder)' },
      { label: 'Juvenile Feeding', value: '2–3 times daily' },
      { label: 'Adult Feeding', value: 'Once daily or every other day' },
      { label: 'Best Staple Foods', value: 'Market shrimp, crickets, pellets' },
      { label: 'Colour Enhancers', value: 'Astaxanthin-rich shrimp, krill' },
      { label: 'Avoid', value: 'Feeder goldfish, beef heart excess' },
    ],
    headings: [
      { id: 'natural-diet', text: 'Natural Diet of Wild Arowana', level: 2 },
      { id: 'best-foods-arowana', text: 'Best Foods for Captive Arowana', level: 2 },
      { id: 'live-foods', text: 'Live Foods', level: 3 },
      { id: 'frozen-foods', text: 'Frozen and Market Foods', level: 3 },
      { id: 'pellets-arowana', text: 'Pellets', level: 3 },
      { id: 'feeding-schedule', text: 'Feeding Schedule by Age', level: 2 },
      { id: 'colour-enhancing-diet', text: 'Colour-Enhancing Diet', level: 2 },
      { id: 'foods-to-avoid', text: 'Foods to Avoid', level: 2 },
      { id: 'feeding-techniques', text: 'Feeding Techniques', level: 2 },
      { id: 'common-feeding-mistakes', text: 'Common Feeding Mistakes', level: 2 },
    ],
    content: `
<h2 id="natural-diet">Natural Diet of Wild Arowana</h2>
<p>In the wild, Asian Arowana (<em>Scleropages formosus</em>) are surface-oriented predators that feed on insects, spiders, small frogs, lizards, and occasionally small fish and birds that fall onto the water surface. Their upward-facing mouth, powerful jaw, and ability to leap above the water surface are all adaptations for this feeding niche. Silver Arowana (<em>Osteoglossum bicirrhosum</em>) share similar habits but occupy a slightly broader niche, consuming more fish and crustaceans in the flooded Amazonian forests they inhabit.</p>
<p>Understanding this natural diet informs captive feeding: Arowana are designed to eat protein-rich prey items at or above the water surface. A diet that mimics this — varied, protein-dense, and surface-delivered — produces the best health, colour, and behaviour.</p>

<h2 id="best-foods-arowana">Best Foods for Captive Arowana</h2>

<h3 id="live-foods">Live Foods</h3>
<ul>
  <li><strong>Crickets:</strong> The single best live food for Arowana. Nutritious, stimulate natural surface-strike behaviour, and are readily available from reptile supply stores. Gut-load crickets with vegetables and fish flake for 24 hours before feeding. Feed 5–10 crickets per session for an adult.</li>
  <li><strong>Mealworms and superworms:</strong> High in protein and fat. Excellent for conditioning and growth. Feed 5–8 superworms per session. Do not overfeed — the high fat content contributes to obesity if used as the sole food source.</li>
  <li><strong>Roaches (Dubia):</strong> Nutritionally superior to crickets with a better calcium-to-phosphorus ratio. Cannot climb smooth surfaces, making them easy to contain. An increasingly popular option among serious Arowana keepers.</li>
  <li><strong>Earthworms:</strong> Outstanding nutrition with balanced amino acid profiles. Rinse thoroughly before feeding to remove soil contaminants. Readily accepted by all Arowana species.</li>
</ul>

<h3 id="frozen-foods">Frozen and Market Foods</h3>
<ul>
  <li><strong>Market shrimp:</strong> Whole, shell-on shrimp from the seafood counter. Remove the head if desired (though many Arowana consume it whole). The shell provides chitin and carotenoids for colour enhancement. The most cost-effective staple food for adult Arowana.</li>
  <li><strong>Frozen silversides:</strong> Small whole fish, frozen and thawed before feeding. Provide balanced nutrition including omega-3 fatty acids and vitamins from the organ content.</li>
  <li><strong>Frozen smelt:</strong> Similar to silversides but larger — suitable for adult Arowana. Cut to appropriate size.</li>
  <li><strong>Frozen krill:</strong> Extremely high in astaxanthin — the primary carotenoid responsible for red and orange pigmentation. An excellent colour-enhancing food. Feed 2–3 times per week.</li>
</ul>

<h3 id="pellets-arowana">Pellets</h3>
<p>High-quality carnivore pellets are a valuable staple because they provide balanced nutrition that is difficult to achieve with live and frozen foods alone. Top options include:</p>
<ul>
  <li><strong>Hikari Arowana Sticks:</strong> Specifically formulated for Arowana with colour-enhancing ingredients.</li>
  <li><strong>Northfin Predator Formula:</strong> High-protein pellet with krill meal and herring meal. No fillers, no artificial colours.</li>
  <li><strong>New Life Spectrum Large Fish:</strong> Whole Antarctic krill base with garlic and astaxanthin for colour enhancement.</li>
</ul>
<p>Many Arowana resist pellets initially. Training typically involves mixing pellets with accepted foods (sticking a pellet into a shrimp, for example) and gradually transitioning. Once accepted, pellets can constitute 30–40 % of the diet.</p>

<h2 id="feeding-schedule">Feeding Schedule by Age</h2>
<ul>
  <li><strong>Juveniles (10–20 cm / 4–8 in):</strong> Feed 2–3 times daily. Focus on high-protein foods for rapid, healthy growth. Crickets, small shrimp, bloodworm, and small pellets. Growth rate during this stage significantly affects adult body proportions.</li>
  <li><strong>Sub-adults (20–40 cm / 8–16 in):</strong> Feed once or twice daily. Transition to larger food items — full-sized crickets, market shrimp, superworms, and medium pellets. Begin incorporating colour-enhancing foods regularly.</li>
  <li><strong>Adults (40+ cm / 16+ in):</strong> Feed once daily or every other day. Adults require less frequent feeding than growing juveniles — overfeeding at this stage leads to obesity and fatty liver disease. Include 1–2 fasting days per week.</li>
</ul>
<p>Feed only as much as the Arowana will consume within 2–3 minutes. Uneaten food fouls the water rapidly — remove any leftovers immediately.</p>

<h2 id="colour-enhancing-diet">Colour-Enhancing Diet</h2>
<p>Colour in Arowana is primarily genetic, but diet significantly influences how fully that genetic potential is expressed. Carotenoid pigments — particularly astaxanthin, canthaxanthin, and zeaxanthin — cannot be synthesised by the fish and must be obtained from food.</p>
<p><strong>Best colour-enhancing foods:</strong></p>
<ul>
  <li><strong>Shrimp and krill:</strong> Naturally high in astaxanthin. Shell-on market shrimp and frozen krill are the most effective dietary colour enhancers.</li>
  <li><strong>Colour-enhancing pellets:</strong> Pellets fortified with astaxanthin and spirulina provide consistent carotenoid intake. Use as 20–30 % of the diet.</li>
  <li><strong>Centipedes and mealworms:</strong> Some keepers report colour enhancement from certain insect species, though the mechanism is not well-documented.</li>
</ul>
<p>For Super Red Arowana, pair dietary colour enhancement with blackwater conditioning (see our <a href="/care/platinum-arowana-water-parameters">Arowana water parameters guide</a>) and appropriate tanning-light exposure for maximum pigmentation intensity.</p>

<h2 id="foods-to-avoid">Foods to Avoid</h2>
<ul>
  <li><strong>Feeder goldfish and rosy reds:</strong> The most common dietary mistake in Arowana keeping. Feeder fish are raised in overcrowded conditions, carry parasites (anchor worm, Ich, internal worms), and have poor nutritional profiles — high in thiaminase (which destroys vitamin B1) and low in essential fatty acids. Exclusive feeder-fish diets cause nutritional deficiency, immune suppression, and parasite infestation.</li>
  <li><strong>Beef heart in excess:</strong> Small amounts provide protein variety, but beef heart is extremely high in saturated fat that fish cannot metabolise efficiently. Chronic beef heart feeding causes fatty liver disease (hepatic lipidosis). Limit to once per week at most.</li>
  <li><strong>Processed human foods:</strong> Bread, chicken, cheese, and other processed foods have no place in an Arowana diet. They are nutritionally inappropriate and pollute the water.</li>
  <li><strong>Frogs and lizards from the wild:</strong> Risk of pesticide exposure and parasite transfer. Only feed captive-bred amphibians and reptiles from trusted suppliers, and only occasionally.</li>
</ul>

<h2 id="feeding-techniques">Feeding Techniques</h2>
<ul>
  <li><strong>Surface feeding:</strong> Drop food on the water surface — this is how Arowana naturally feed. Floating pellets and live insects are taken eagerly from the surface.</li>
  <li><strong>Feeding tongs:</strong> Use 30 cm+ stainless steel tongs for frozen foods and large items. Hold the food at the surface and let the Arowana strike. Tongs keep your fingers away from the fish's mouth — a large Arowana bite can break skin.</li>
  <li><strong>Consistent feeding location:</strong> Feed at the same spot in the tank. Arowana learn quickly and will station at the feeding point when they see you approach — this builds trust and makes feeding efficient.</li>
  <li><strong>Varied diet rotation:</strong> Rotate through at least 4–5 different food types weekly. Dietary variety ensures complete nutrition and prevents the Arowana from fixating on a single food (which makes dietary changes difficult later).</li>
</ul>

<h2 id="common-feeding-mistakes">Common Feeding Mistakes</h2>
<ul>
  <li><strong>Overfeeding adults.</strong> Adult Arowana in the wild experience feast-and-famine cycles. In captivity, a meal-every-day schedule (or worse, multiple meals daily for adults) leads to obesity and liver disease. Feed once daily or every other day, with fasting days.</li>
  <li><strong>Feeder fish dependency.</strong> Arowana trained on live feeder fish often refuse all other foods. This creates a nutritional disaster. Start with varied foods from the juvenile stage and never rely on feeder fish as a staple.</li>
  <li><strong>Ignoring food variety.</strong> A single-food diet (even a "good" food like shrimp) creates nutritional gaps. Rotate through insects, shrimp, pellets, silversides, and earthworms.</li>
  <li><strong>Feeding too much at once.</strong> Large meals stress the digestive system and foul the water. Feed small, manageable portions that are consumed within 2–3 minutes.</li>
  <li><strong>Neglecting juveniles.</strong> Underfeeding juveniles produces stunted adults with poor body proportions. Juveniles need 2–3 meals daily of protein-rich foods for optimal development.</li>
</ul>
<p>A well-fed Arowana displays bright colour, active swimming, alert responsiveness, and a slightly convex belly profile. An overfed Arowana shows a distended belly, lethargy, and eventually fatty deposits visible behind the eyes. Adjust feeding based on the fish's body condition, not its apparent appetite — Arowana will always eat more than they should.</p>
<p>For complete tank and water management, see our <a href="/care/arowana-tank-setup">Arowana tank setup guide</a> and <a href="/care/platinum-arowana-water-parameters">water parameters guide</a>. Browse <a href="/exotic-fish/arowana">The Fish Collection's Arowana collection</a> for CITES-certified specimens.</p>
`,
    faqs: [
      {
        question: 'How often should I feed my Arowana?',
        answer:
          'Juveniles (under 20 cm) need 2–3 meals daily for optimal growth. Sub-adults (20–40 cm) do well with 1–2 meals daily. Adults (40+ cm) should be fed once daily or every other day, with 1–2 fasting days per week to prevent obesity and fatty liver disease.',
      },
      {
        question: 'Can Arowana eat pellets?',
        answer:
          'Yes, and they should. High-quality carnivore pellets (Hikari Arowana Sticks, Northfin Predator, NLS Large Fish) provide balanced nutrition that is difficult to achieve with live and frozen foods alone. Many Arowana need training to accept pellets — start by embedding pellets in accepted foods and gradually transitioning.',
      },
      {
        question: 'Why should I not feed feeder fish to my Arowana?',
        answer:
          'Feeder fish (goldfish, rosy reds) carry parasites, contain thiaminase that destroys vitamin B1, and have poor nutritional profiles. Exclusive feeder-fish diets cause nutritional deficiency, immune suppression, and parasite infestation. Use crickets, market shrimp, and quality pellets instead.',
      },
      {
        question: 'What foods enhance Arowana colour?',
        answer:
          'Foods rich in astaxanthin and carotenoids — particularly shell-on shrimp, frozen krill, and colour-enhancing pellets fortified with astaxanthin and spirulina. These pigments are deposited in the skin and scales, intensifying red, orange, and gold colouration. Pair with blackwater conditioning and appropriate lighting for maximum effect.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Scleropages formosus — Diet',
        url: 'https://www.fishbase.se/summary/Scleropages-formosus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Carotenoid Metabolism and Pigmentation in Ornamental Fish',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/raq.12233',
        publisher: 'Reviews in Aquaculture',
      },
      {
        title: 'Hepatic Lipidosis in Captive Predatory Fish: Dietary Causes',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.14382',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: ['platinum-arowana-water-parameters', 'arowana-tank-setup', 'predatory-fish-feeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 11 — Discus Fish Tank Size
  // ──────────────────────────────────────────────
  {
    title: 'Discus Fish Tank Size Guide',
    slug: 'discus-fish-tank-size',
    type: 'care',
    category: 'discus',
    topicCategory: 'tank-setup',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/discus-fish-tank-size.jpg',
    heroImageAlt:
      'A group of six Discus fish swimming in a spacious 75-gallon planted aquarium with driftwood',
    metaTitle: 'Tank Size Guide for Discus Fish | The Fish Collection',
    metaDescription:
      'How big a tank do Discus fish need? Expert guide to minimum tank sizes, dimensions, and stocking densities for Discus groups, pairs, and breeding setups.',
    quickAnswerQuestion: 'What size tank do Discus fish need?',
    quickAnswer:
      'A group of six Discus fish needs a minimum 75-gallon (285-litre) tank measuring at least 48 × 18 × 21 inches. Budget 10 gallons per adult Discus as a baseline. Breeding pairs need a dedicated 40–55 gallon tank. Tank height should be at least 45 cm (18 inches) to accommodate the Discus\'s tall body profile. Larger tanks (100–125 gallons) provide significantly more stable water parameters and room for natural social behaviour.',
    summary:
      'A practical guide to selecting the right tank size for Discus fish, covering minimum dimensions for groups of various sizes, breeding pair setups, grow-out tanks, the relationship between tank volume and water stability, and common sizing mistakes.',
    keyFacts: [
      { label: 'Minimum Group Tank', value: '75 gal (6 Discus)' },
      { label: 'Per-Fish Rule', value: '10 gal per adult Discus' },
      { label: 'Minimum Height', value: '45 cm (18 in)' },
      { label: 'Breeding Pair Tank', value: '40–55 gal' },
      { label: 'Grow-Out Tank', value: '40–75 gal' },
      { label: 'Ideal Group Tank', value: '100–125 gal (8–10 Discus)' },
    ],
    headings: [
      { id: 'why-tank-size-matters-discus', text: 'Why Tank Size Matters for Discus', level: 2 },
      { id: 'minimum-tank-sizes', text: 'Minimum Tank Sizes by Group', level: 2 },
      { id: 'six-discus', text: 'Six Discus — 75 Gallons', level: 3 },
      { id: 'eight-to-ten-discus', text: 'Eight to Ten Discus — 100–125 Gallons', level: 3 },
      { id: 'twelve-plus-discus', text: 'Twelve+ Discus — 150+ Gallons', level: 3 },
      { id: 'tank-dimensions', text: 'Tank Dimensions and Shape', level: 2 },
      { id: 'height-requirements', text: 'Height Requirements', level: 3 },
      { id: 'breeding-pair-tanks', text: 'Breeding Pair Tanks', level: 2 },
      { id: 'grow-out-tanks', text: 'Grow-Out Tanks for Juveniles', level: 2 },
      { id: 'volume-and-stability', text: 'Volume and Water Stability', level: 2 },
      { id: 'common-sizing-mistakes', text: 'Common Sizing Mistakes', level: 2 },
    ],
    content: `
<h2 id="why-tank-size-matters-discus">Why Tank Size Matters for Discus</h2>
<p>Tank size affects every aspect of Discus health. In an undersized tank, waste accumulates faster, temperature and pH fluctuate more sharply between water changes, and social stress intensifies as dominant fish have no escape from subordinates — and subordinates have no escape from bullies. The result is stunted growth, chronic disease susceptibility, washed-out colour, and shortened lifespan.</p>
<p>Discus are not small fish. Adults reach 15–20 cm (6–8 inches) in diameter — a full-grown Discus is roughly the size of a saucer. A group of six adults in a 40-gallon tank is visibly overcrowded, and the water quality consequences are immediate. Proper sizing from the start avoids expensive, disruptive upgrades later.</p>

<h2 id="minimum-tank-sizes">Minimum Tank Sizes by Group</h2>

<h3 id="six-discus">Six Discus — 75 Gallons</h3>
<p>The baseline setup for most Discus keepers. A standard 75-gallon tank (48 × 18 × 21 inches / 122 × 46 × 53 cm) provides adequate space for six adult Discus with room for a small school of compatible tank mates (Cardinal Tetras, Rummy-nose Tetras). The 10-gallons-per-Discus rule gives six fish exactly 75 gallons, but the real advantage of this volume is water stability — 285 litres buffers temperature and chemistry fluctuations far better than smaller tanks.</p>
<p>A 55-gallon tank can temporarily house six juvenile Discus but will need upgrading as they approach adult size. If budget permits, start with 75 gallons to avoid the disruption and cost of a mid-growth upgrade.</p>

<h3 id="eight-to-ten-discus">Eight to Ten Discus — 100–125 Gallons</h3>
<p>The ideal range for a serious Discus display. Larger groups (8–10 fish) distribute aggression more evenly, display more natural schooling behaviour, and produce a more visually impressive tank. A 125-gallon tank (72 × 18 × 22 inches) is the gold standard — the 6-foot length provides excellent swimming space and allows for a planted aquascape with driftwood territories.</p>
<p>At this volume, water stability is excellent. Temperature swings are dampened, pH drift between water changes is minimised, and nitrate accumulation is slower per fish. Maintenance effort per fish actually decreases with larger volumes.</p>

<h3 id="twelve-plus-discus">Twelve+ Discus — 150+ Gallons</h3>
<p>Show-level Discus displays with 12 or more fish require 150–200 gallon tanks or larger. At this scale, you are creating a genuine Amazonian biotope — a wall of shimmering Discus moving through driftwood and plant cover is one of the most impressive sights in freshwater fishkeeping.</p>
<p>Tanks of this size typically use sump filtration (adding 30–50 % water volume), automated water change systems, and dedicated electrical circuits for heaters and lighting. The investment is substantial but the result is extraordinary.</p>

<h2 id="tank-dimensions">Tank Dimensions and Shape</h2>

<h3 id="height-requirements">Height Requirements</h3>
<p>Tank height matters more for Discus than for most species. Their tall, laterally compressed body profile means they utilise vertical space actively — Discus swim at all levels and need height to display naturally. A tank shorter than 45 cm (18 inches) cramps their vertical swimming pattern.</p>
<p>Standard tank dimensions work well: a 75-gallon (48 × 18 × 21 inches) provides 53 cm height, and a 125-gallon (72 × 18 × 22 inches) provides 56 cm. Avoid long, shallow tanks (like 40-gallon breeders at only 40 cm tall) for Discus display — they are fine for breeding pairs but inadequate for display groups.</p>
<p>Width (front-to-back) of at least 45 cm (18 inches) allows Discus to turn comfortably and provides depth for aquascaping.</p>

<h2 id="breeding-pair-tanks">Breeding Pair Tanks</h2>
<p>Breeding Discus pairs are typically separated into dedicated tanks: 40–55 gallons, bare-bottomed for hygiene, with a vertical spawning surface (slate, spawning cone, or PVC pipe). Height should be at least 45 cm to accommodate spawning behaviour — Discus deposit eggs on vertical surfaces and fan them with their pectoral fins.</p>
<p>Breeding tanks prioritise water quality control over aesthetics. Bare bottom with a sponge filter (to avoid fry being sucked into intake tubes) and a heater is sufficient. For the full breeding protocol, see our <a href="/care/discus-fish-breeding-guide">Discus breeding guide</a>.</p>

<h2 id="grow-out-tanks">Grow-Out Tanks for Juveniles</h2>
<p>Juvenile Discus (under 8 cm) are grown out in dedicated tanks optimised for feeding and water change frequency. Typical grow-out setup: 40–75 gallons, bare bottom, sponge filtration, heated to 30–31 °C (higher than adult display temperature to maximise growth rate). Stocking density is higher than display tanks — up to 1 Discus per 5 gallons — but only if water changes are performed twice daily (a standard practice in professional Discus grow-out).</p>
<p>The reason for higher density in grow-out tanks is that it distributes juvenile aggression — in small groups, dominant juveniles bully subordinates into starvation. In larger, denser groups, aggression is spread across many targets and no single fish is consistently harassed.</p>

<h2 id="volume-and-stability">Volume and Water Stability</h2>
<p>The relationship between tank volume and water parameter stability is the strongest argument for larger Discus tanks:</p>
<ul>
  <li><strong>Temperature:</strong> A 75-gallon tank with a quality heater holds temperature within ±0.5 °C. A 30-gallon tank can swing ±1.5 °C between day and night — a range that stresses Discus.</li>
  <li><strong>pH:</strong> Larger water volume contains more KH buffer, resisting pH drops from biological acidification. In a 40-gallon tank, pH can drop 0.3–0.5 units between weekly water changes; in a 125-gallon tank, the same bioload causes a drop of only 0.1–0.2 units.</li>
  <li><strong>Nitrate:</strong> More water dilutes waste products. A group of six Discus produces the same waste in a 55-gallon tank and a 125-gallon tank — but nitrate concentration between water changes is 2× higher in the smaller tank.</li>
</ul>
<p>The mathematical reality is simple: larger tanks are easier to maintain at the stable conditions Discus require. The upfront cost of a larger tank saves money and effort in the long run. For water parameter targets, see our <a href="/care/discus-water-parameters">Discus water parameters guide</a>.</p>

<h2 id="common-sizing-mistakes">Common Sizing Mistakes</h2>
<ul>
  <li><strong>Starting with a 20-gallon "trial" tank.</strong> A 20-gallon tank cannot support even two adult Discus. Water quality deteriorates within hours of feeding, and social dynamics collapse with fewer than six fish. If the budget does not accommodate a 75-gallon setup, wait until it does.</li>
  <li><strong>Counting juveniles, not adults.</strong> Six 5 cm juvenile Discus look lost in a 75-gallon tank. They will not stay small. Within 12–18 months, they will be 15 cm adults that fill the same space appropriately. Size your tank for adult fish, not the juveniles you buy.</li>
  <li><strong>Ignoring the water change equation.</strong> A smaller tank does not save time — it requires more frequent water changes to maintain the same quality. A 55-gallon Discus tank may need water changes every 3 days; a 125-gallon tank can go a full week. The net maintenance time is similar, but the larger tank provides a larger safety margin.</li>
  <li><strong>Upgrading mid-growth.</strong> Moving growing Discus from a small tank to a large tank is stressful. The cycle disruption, parameter changes, and physical stress of netting and transfer set back growth. Get the right tank from the start.</li>
</ul>
<p>For the complete guide to Discus keeping, including tank mates, feeding, and disease prevention, see our <a href="/blog/discus-fish-beginners-guide">Discus beginner's guide</a>. Browse our <a href="/species/discus">Discus species profiles</a> for available varieties.</p>
`,
    faqs: [
      {
        question: 'Can I keep Discus in a 55-gallon tank?',
        answer:
          'A 55-gallon tank can temporarily house six juvenile Discus but is tight for six adults. A 75-gallon tank is the recommended minimum for a group of six adults. If starting with a 55-gallon, plan to upgrade to 75+ gallons within 12–18 months as the fish grow.',
      },
      {
        question: 'How many Discus can I keep in a 75-gallon tank?',
        answer:
          'A 75-gallon tank comfortably houses six adult Discus using the 10-gallons-per-fish rule. You can add a small school of compatible tank mates (Cardinal Tetras, Corydoras sterbai) without exceeding the tank\'s capacity, provided filtration and water change routines are maintained.',
      },
      {
        question: 'Is a tall or long tank better for Discus?',
        answer:
          'Discus benefit from both height (at least 45 cm / 18 inches for their tall body profile) and length (for swimming space). Standard rectangular tanks with dimensions like 48 × 18 × 21 inches (75-gallon) or 72 × 18 × 22 inches (125-gallon) provide the ideal balance of height, length, and width.',
      },
      {
        question: 'What size tank for breeding Discus?',
        answer:
          'A dedicated breeding tank of 40–55 gallons is standard for a single Discus pair. Use a bare-bottom setup with a spawning surface (cone or slate), sponge filter, and heater set to 30–31 °C. Height should be at least 45 cm for natural spawning behaviour.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Symphysodon aequifasciatus',
        url: 'https://www.fishbase.se/summary/Symphysodon-aequifasciatus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Effects of Stocking Density on Growth and Welfare of Discus Fish',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848619310033',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Water Volume and Parameter Stability in Ornamental Fish Systems',
        url: 'https://edis.ifas.ufl.edu/publication/FA164',
        publisher: 'University of Florida IFAS Extension',
      },
    ],
    relatedSlugs: ['discus-water-parameters', 'discus-fish-tank-mates', 'discus-fish-beginners-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 12 — Discus Fish Tank Mates
  // ──────────────────────────────────────────────
  {
    title: 'Discus Fish Tank Mates',
    slug: 'discus-fish-tank-mates',
    type: 'care',
    category: 'discus',
    topicCategory: 'tank-mates',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/discus-fish-tank-mates.jpg',
    heroImageAlt:
      'A planted Discus aquarium with Cardinal Tetras, Rummy-nose Tetras, and Corydoras sterbai swimming alongside Discus',
    metaTitle: 'Discus Fish Tank Mates Guide | The Fish Collection',
    metaDescription:
      'Best tank mates for Discus fish. Compatible species, stocking combinations, and fish to avoid. Expert compatibility guide.',
    quickAnswerQuestion: 'What fish can live with Discus?',
    quickAnswer:
      'The best tank mates for Discus are species that tolerate 28–30 °C water, are peaceful, and will not outcompete Discus at feeding time. Top choices include Cardinal Tetras, Rummy-nose Tetras, Corydoras sterbai, German Blue Rams, Bristlenose Plecos, and Sterbai Corydoras. Avoid fin nippers (Tiger Barbs), aggressive cichlids, fast-moving food competitors, and cold-water species.',
    summary:
      'A detailed compatibility guide for Discus fish covering the best tank mates, species to avoid, stocking ratios, the temperature constraint that limits compatibility, and how to build a harmonious Discus community tank.',
    keyFacts: [
      { label: 'Temperature Constraint', value: '28–30 °C (82–86 °F)' },
      { label: 'Best Tetras', value: 'Cardinal, Rummy-nose' },
      { label: 'Best Catfish', value: 'Corydoras sterbai, Bristlenose' },
      { label: 'Best Cichlids', value: 'German Blue Ram, Apistogramma' },
      { label: 'Avoid', value: 'Tiger Barbs, African Cichlids' },
      { label: 'Min Tank with Mates', value: '75 gal+' },
    ],
    headings: [
      { id: 'compatibility-principles', text: 'Discus Compatibility Principles', level: 2 },
      { id: 'temperature-constraint', text: 'The Temperature Constraint', level: 2 },
      { id: 'best-tetra-mates', text: 'Best Tetra Tank Mates', level: 2 },
      { id: 'cardinal-tetras', text: 'Cardinal Tetras', level: 3 },
      { id: 'rummynose-tetras', text: 'Rummy-nose Tetras', level: 3 },
      { id: 'emperor-tetras', text: 'Emperor Tetras', level: 3 },
      { id: 'best-catfish-mates', text: 'Best Catfish Tank Mates', level: 2 },
      { id: 'corydoras-sterbai', text: 'Corydoras sterbai', level: 3 },
      { id: 'bristlenose-pleco', text: 'Bristlenose Pleco', level: 3 },
      { id: 'best-cichlid-mates', text: 'Best Cichlid Tank Mates', level: 2 },
      { id: 'other-compatible-species', text: 'Other Compatible Species', level: 2 },
      { id: 'species-to-avoid', text: 'Species to Avoid', level: 2 },
      { id: 'stocking-a-discus-community', text: 'Stocking a Discus Community Tank', level: 2 },
    ],
    content: `
<h2 id="compatibility-principles">Discus Compatibility Principles</h2>
<p>Discus are peaceful, slow-moving cichlids that inhabit warm, soft, acidic water. Any potential tank mate must pass three tests:</p>
<ol>
  <li><strong>Temperature tolerance:</strong> Discus require 28–30 °C — significantly warmer than the 24–26 °C range most tropical fish prefer. This single constraint eliminates the majority of common aquarium species.</li>
  <li><strong>Peaceful temperament:</strong> Discus are easily stressed by aggressive, boisterous, or nippy tank mates. Any species that chases, nips fins, or dominates feeding areas is incompatible.</li>
  <li><strong>Feeding compatibility:</strong> Discus are deliberate, slow feeders. Fast-moving fish that snatch food before Discus can react will outcompete them, leading to malnutrition. Tank mates should either feed in different zones (bottom-dwellers) or be slow enough that Discus can compete.</li>
</ol>
<p>With these criteria in mind, the list of truly compatible species is shorter than many hobbyists expect. Quality over quantity is the rule — a few well-chosen companions enhance the display; a poorly chosen mix creates chronic stress.</p>

<h2 id="temperature-constraint">The Temperature Constraint</h2>
<p>The 28–30 °C requirement is the primary limiting factor. At this temperature:</p>
<ul>
  <li>Most Corydoras species (except <em>C. sterbai</em>) are stressed — they prefer 22–26 °C.</li>
  <li>Many common tetras (Neon Tetras, Serpae Tetras) have reduced lifespans at sustained high temperatures.</li>
  <li>Coldwater species (White Cloud Mountain Minnows, Hillstream Loaches) are completely incompatible.</li>
  <li>Most Plecostomus species (except Bristlenose) prefer cooler water and higher oxygen levels than a Discus tank provides.</li>
</ul>
<p>The compatible species listed below have been verified — through both scientific temperature tolerance data and extensive hobbyist experience — to thrive at 28–30 °C long-term.</p>

<h2 id="best-tetra-mates">Best Tetra Tank Mates</h2>

<h3 id="cardinal-tetras">Cardinal Tetras</h3>
<p><em>Paracheirodon axelris</em> — the quintessential Discus companion. Cardinal Tetras are native to the same blackwater habitats as wild Discus (Rio Negro basin), naturally thriving at 27–30 °C in soft, acidic water. A school of 15–20 Cardinals creates a shimmering backdrop of neon blue and red that complements every Discus colour variety. They are peaceful, occupy the mid-water column, and are too small and fast to compete for food at the surface where Discus prefer to eat.</p>
<p>Keep in schools of 12 or more for natural behaviour and visual impact. In a 75-gallon Discus tank, 15–20 Cardinals is an ideal number.</p>

<h3 id="rummynose-tetras">Rummy-nose Tetras</h3>
<p><em>Hemigrammus rhodostomus</em> — another outstanding Discus tank mate. Rummy-nose Tetras school more tightly than almost any other tetra species, creating a disciplined, synchronised formation that provides visual movement without chaotic energy. Their red-tipped nose and striped tail are attractive without competing for attention with the Discus.</p>
<p>Rummy-nose Tetras are also excellent water quality indicators: their red nose colouration fades noticeably when water conditions deteriorate, providing an early visual warning before parameters reach levels that stress Discus.</p>

<h3 id="emperor-tetras">Emperor Tetras</h3>
<p><em>Nematobrycon palmeri</em> — a less common but excellent choice. Emperor Tetras are calm, stately fish that tolerate 28–30 °C well. Males display iridescent purple-blue flanks and an extended central caudal fin ray. They are peaceful, occupy mid-water, and their subdued activity level complements the Discus's own calm swimming style.</p>

<h2 id="best-catfish-mates">Best Catfish Tank Mates</h2>

<h3 id="corydoras-sterbai">Corydoras sterbai</h3>
<p><em>Corydoras sterbai</em> is one of the very few Corydoras species that genuinely thrives at 28–30 °C. Native to the upper Guaporé River in Brazil, it inhabits warm, soft water naturally. Their orange pectoral fin spines and spotted patterning are attractive, and their bottom-dwelling habit means they clean up fallen food without competing with Discus at mid-water feeding zones.</p>
<p>Keep in groups of six or more. They are active, social bottom-dwellers that add movement to the lower tank zone without causing surface-level disruption.</p>

<h3 id="bristlenose-pleco">Bristlenose Pleco</h3>
<p><em>Ancistrus</em> spp. — the best algae-eating companion for Discus tanks. Bristlenose Plecos stay small (12–15 cm), tolerate warm water, and effectively control algae on glass, driftwood, and plant surfaces. They are nocturnal and non-aggressive, occupying a completely different niche than Discus.</p>
<p>Avoid common Plecos (<em>Pterygoplichthys</em> spp.) — they grow to 30–45 cm, produce enormous waste, and have been known to rasp the slime coat of sleeping Discus. Bristlenose are the right size for the job.</p>

<h2 id="best-cichlid-mates">Best Cichlid Tank Mates</h2>
<p><strong>German Blue Rams</strong> (<em>Mikrogeophagus ramirezi</em>) — share identical temperature (28–30 °C) and water chemistry preferences (soft, acidic). Males are brilliantly coloured with iridescent blue speckles over a golden body. Rams occupy the lower-middle water column and establish small territories around the substrate — they do not challenge Discus for space.</p>
<p>Keep in pairs. Rams can be mildly territorial during spawning but are no threat to Discus. Their small size (6–7 cm) means they are not food competitors.</p>
<p><strong>Apistogramma</strong> spp. — dwarf cichlids that thrive in warm, soft water. <em>A. cacatuoides</em>, <em>A. borellii</em>, and <em>A. agassizii</em> are all compatible with Discus in 75+ gallon tanks. They are bottom-oriented and establish micro-territories around caves and driftwood. Keep in pairs or harems (one male, 2–3 females).</p>

<h2 id="other-compatible-species">Other Compatible Species</h2>
<ul>
  <li><strong>Otocinclus:</strong> Tiny algae eaters (3–4 cm) that tolerate warm water and are completely non-aggressive. Keep in groups of 6+. They are delicate and sensitive to water quality — only add to a well-established, stable Discus tank.</li>
  <li><strong>Hatchetfish:</strong> Surface-dwelling fish that occupy a zone Discus rarely use intensively. Silver Hatchetfish (<em>Gasteropelecus sternicla</em>) and Marbled Hatchetfish (<em>Carnegiella strigata</em>) are both warm-water tolerant. A secure lid is mandatory — Hatchetfish jump.</li>
  <li><strong>Clown Loaches:</strong> Tolerate 28–30 °C and are peaceful, but grow to 20–30 cm. Only suitable for Discus tanks of 125+ gallons. Keep in groups of 5+.</li>
  <li><strong>Pencilfish:</strong> <em>Nannostomus</em> spp. are calm, small, warm-water tolerant, and occupy mid-to-upper water zones. Excellent but less commonly available.</li>
</ul>

<h2 id="species-to-avoid">Species to Avoid</h2>
<ul>
  <li><strong>Tiger Barbs:</strong> Notorious fin nippers that will shred Discus fins and cause chronic stress.</li>
  <li><strong>Neon Tetras:</strong> While closely related to Cardinals, Neon Tetras have shorter lifespans at 28–30 °C. Cardinals are the superior choice for Discus tanks.</li>
  <li><strong>African Cichlids:</strong> Wrong water chemistry (they need hard, alkaline water) and aggressive temperament. Completely incompatible.</li>
  <li><strong>Common Plecos:</strong> Grow too large, produce excessive waste, and may rasp Discus slime coat. Use Bristlenose instead.</li>
  <li><strong>Angelfish:</strong> A common misconception. While Angelfish are South American cichlids, they are significantly more aggressive than Discus, compete for food, and can bully Discus. In smaller tanks (under 125 gallons), the combination frequently fails.</li>
  <li><strong>Fast-moving surface feeders:</strong> Danios, Rainbowfish, and other active surface-oriented species will outcompete Discus at feeding time.</li>
  <li><strong>Chinese Algae Eaters:</strong> Become aggressive as adults and attach to slow-moving fish to rasp mucus — a nightmare combination with Discus.</li>
</ul>

<h2 id="stocking-a-discus-community">Stocking a Discus Community Tank</h2>
<p>A well-stocked 75-gallon Discus community tank might include:</p>
<ul>
  <li>6 adult Discus (various colour varieties)</li>
  <li>15–20 Cardinal Tetras</li>
  <li>6–8 Corydoras sterbai</li>
  <li>1 pair German Blue Rams</li>
  <li>1–2 Bristlenose Plecos</li>
</ul>
<p>This combination provides activity at every water level (Cardinals mid-water, Corydoras at the bottom, Discus everywhere, Rams near the substrate, Plecos on hardscape) while maintaining peaceful compatibility and shared temperature preferences.</p>
<p>Always add Discus last after all other species are established. This reduces territorial stress during introduction. Quarantine all new additions for 30 days before introducing to the display tank — Discus are highly susceptible to diseases carried by asymptomatic tank mates.</p>
<p>For tank sizing guidance, see our <a href="/care/discus-fish-tank-size">Discus tank size guide</a>. For feeding, see the <a href="/care/discus-fish-feeding-guide">Discus feeding guide</a>. Browse our <a href="/species/discus">Discus species profiles</a> for available varieties at <a href="/exotic-fish/">The Fish Collection</a>.</p>
`,
    faqs: [
      {
        question: 'Can Discus live with Angelfish?',
        answer:
          'It is generally not recommended. Angelfish are more aggressive than Discus, compete directly for food, and often bully Discus in tanks under 125 gallons. While the combination sometimes works in very large tanks (150+ gallons), the risk of stress and feeding competition makes it a poor choice for most setups.',
      },
      {
        question: 'Can Neon Tetras live with Discus?',
        answer:
          'Cardinal Tetras are a significantly better choice than Neon Tetras for Discus tanks. Neon Tetras have reduced lifespans at the 28–30 °C temperatures Discus require, while Cardinal Tetras naturally thrive at these temperatures. The visual difference is minimal, but the health outcomes are substantially better with Cardinals.',
      },
      {
        question: 'How many tank mates can I add with Discus?',
        answer:
          'In a 75-gallon Discus tank with six Discus, you can comfortably add 15–20 small tetras, 6–8 Corydoras sterbai, 1–2 Bristlenose Plecos, and a pair of German Blue Rams without overwhelming the filtration. Maintain your water change schedule and monitor nitrate levels — if nitrate rises above 20 ppm between changes, reduce stocking.',
      },
      {
        question: 'What bottom feeders go with Discus?',
        answer:
          'Corydoras sterbai (one of the few Corydoras species comfortable at 28–30 °C), Bristlenose Plecos, and Otocinclus are the best bottom-dwelling companions for Discus. Avoid common Plecos (too large), Chinese Algae Eaters (aggressive as adults), and most Corydoras species (prefer cooler water).',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Symphysodon aequifasciatus',
        url: 'https://www.fishbase.se/summary/Symphysodon-aequifasciatus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Temperature Tolerance Ranges of Common Ornamental Fish Species',
        url: 'https://edis.ifas.ufl.edu/publication/FA178',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Community Assembly in Tropical Freshwater Aquaria: Species Interactions',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848618310282',
        publisher: 'Aquaculture (Elsevier)',
      },
    ],
    relatedSlugs: ['discus-fish-tank-size', 'discus-water-parameters', 'discus-fish-beginners-guide', 'best-tank-mates-exotic-fish'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 13 — Discus Fish Feeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'Discus Fish Feeding Guide',
    slug: 'discus-fish-feeding-guide',
    type: 'care',
    category: 'discus',
    topicCategory: 'feeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/discus-fish-feeding-guide.jpg',
    heroImageAlt:
      'A group of Discus fish eagerly feeding on high-quality granules in a planted aquarium',
    metaTitle: 'Feeding Guide for Discus Fish | The Fish Collection',
    metaDescription:
      'Expert Discus feeding guide: best foods, feeding schedules for juveniles and adults, colour-enhancing diets, beefheart recipes, and common mistakes to avoid.',
    quickAnswerQuestion: 'What do Discus fish eat?',
    quickAnswer:
      'Discus fish eat high-quality Discus pellets or granules (45%+ protein) as a staple, supplemented with frozen bloodworm, brine shrimp, mysis shrimp, and beefheart mix 2–3 times per week. Juveniles need 3–5 small meals daily for rapid growth; adults require 2–3 meals daily. Remove uneaten food within 5 minutes to prevent water quality degradation.',
    summary:
      'A complete feeding protocol for Discus fish at every life stage, covering staple foods, frozen and live food supplementation, beefheart preparation, colour-enhancing nutrition, juvenile grow-out feeding, and the dietary mistakes that undermine Discus health.',
    keyFacts: [
      { label: 'Diet Type', value: 'Carnivore-leaning omnivore' },
      { label: 'Juvenile Feeding', value: '3–5 times daily' },
      { label: 'Adult Feeding', value: '2–3 times daily' },
      { label: 'Best Staple', value: 'High-protein Discus granules' },
      { label: 'Best Supplements', value: 'Bloodworm, brine shrimp, beefheart' },
      { label: 'Colour Enhancers', value: 'Astaxanthin, spirulina' },
    ],
    headings: [
      { id: 'discus-nutritional-needs', text: 'Discus Nutritional Needs', level: 2 },
      { id: 'staple-foods', text: 'Staple Foods', level: 2 },
      { id: 'pellets-granules', text: 'Pellets and Granules', level: 3 },
      { id: 'frozen-foods-discus', text: 'Frozen Foods', level: 3 },
      { id: 'live-foods-discus', text: 'Live Foods', level: 3 },
      { id: 'beefheart-recipe', text: 'Beefheart Mix Recipe', level: 2 },
      { id: 'feeding-by-age', text: 'Feeding Schedule by Age', level: 2 },
      { id: 'juvenile-feeding', text: 'Juvenile Feeding (Under 8 cm)', level: 3 },
      { id: 'adult-feeding', text: 'Adult Feeding', level: 3 },
      { id: 'colour-enhancing-foods', text: 'Colour-Enhancing Foods', level: 2 },
      { id: 'foods-to-avoid-discus', text: 'Foods to Avoid', level: 2 },
      { id: 'feeding-mistakes-discus', text: 'Common Feeding Mistakes', level: 2 },
    ],
    content: `
<h2 id="discus-nutritional-needs">Discus Nutritional Needs</h2>
<p>Discus are carnivore-leaning omnivores in the wild, feeding on invertebrates, insect larvae, small crustaceans, and plant detritus in the slow-moving blackwater rivers of the Amazon basin. In captivity, they need a high-protein diet (minimum 45 % crude protein) with balanced fat content (8–12 %), supplemented with vitamins and carotenoids for colour development.</p>
<p>The single biggest nutritional challenge with Discus is <strong>feeding enough without fouling the water</strong>. Discus are slow, deliberate feeders — they approach food cautiously, mouth it, and may reject items several times before consuming them. This means food sits in the water column longer than with aggressive feeders, releasing ammonia and nutrients that degrade water quality. The solution is frequent small meals rather than infrequent large ones, combined with prompt removal of any food not consumed within 5 minutes.</p>

<h2 id="staple-foods">Staple Foods</h2>

<h3 id="pellets-granules">Pellets and Granules</h3>
<p>High-quality Discus-specific granules are the ideal staple food. They provide consistent, balanced nutrition in a form that Discus learn to accept eagerly. Top options include:</p>
<ul>
  <li><strong>Hikari Discus Bio-Gold:</strong> Colour-enhancing formula with astaxanthin, 45 % protein. The industry standard.</li>
  <li><strong>Sera Discus Granules:</strong> Slowly sinking granules that suit the Discus feeding style. Available in colour-enhancing and growth-promoting formulas.</li>
  <li><strong>Northfin Discus Formula:</strong> Whole krill and herring meal base, no fillers or artificial colours. 44 % protein.</li>
  <li><strong>New Life Spectrum Discus:</strong> Whole Antarctic krill base with garlic for palatability and immune support.</li>
</ul>
<p>Granules should constitute 40–60 % of the diet. They are the most practical way to ensure consistent nutrition, and their predictable sinking rate allows Discus to feed at their preferred mid-water level.</p>

<h3 id="frozen-foods-discus">Frozen Foods</h3>
<p>Frozen foods provide dietary variety and stimulate natural feeding behaviour:</p>
<ul>
  <li><strong>Bloodworm:</strong> The most universally accepted Discus food. Rich in protein but relatively low in nutritional density — use as a supplement (2–3 times per week), not a staple. Rinse frozen bloodworm in a fine-mesh net before feeding to remove phosphate-laden packing liquid.</li>
  <li><strong>Brine shrimp:</strong> Good variety food accepted by virtually all Discus. Adult brine shrimp are lower in protein than bloodworm but provide carotenoids for colour. Enriched brine shrimp (Hikari, San Francisco Bay Brand) are nutritionally superior.</li>
  <li><strong>Mysis shrimp:</strong> Higher in protein and fatty acids than brine shrimp. Excellent supplementary food, especially for conditioning breeding pairs.</li>
  <li><strong>White mosquito larvae:</strong> Outstanding natural food if available frozen. High in protein, eagerly accepted, and stimulates active feeding behaviour.</li>
</ul>

<h3 id="live-foods-discus">Live Foods</h3>
<ul>
  <li><strong>Blackworms:</strong> The premium live food for Discus. Rich in protein, stimulate vigorous feeding response, and are excellent for conditioning breeders. Source from reputable suppliers — blackworms from questionable sources can introduce parasites. Rinse thoroughly in clean water before feeding.</li>
  <li><strong>Daphnia:</strong> Small crustaceans that provide roughage and stimulate natural foraging behaviour. Culture your own or purchase from aquarium suppliers.</li>
  <li><strong>Newly hatched brine shrimp (Artemia nauplii):</strong> Essential for raising Discus fry. Rich in fatty acids and small enough for fry consumption. Not practical as a staple for adults but excellent as an occasional treat.</li>
</ul>

<h2 id="beefheart-recipe">Beefheart Mix Recipe</h2>
<p>Beefheart mix is a traditional Discus food that remains popular for its high protein content and palatability. The key is preparation — raw beefheart must be trimmed of all fat and sinew, as these components are indigestible for Discus and pollute the water.</p>
<p><strong>Basic beefheart mix recipe:</strong></p>
<ol>
  <li>Purchase lean beef heart from a butcher. Trim all visible fat, sinew, and connective tissue — this step is critical.</li>
  <li>Cut into chunks and blend in a food processor until smooth.</li>
  <li>Add supplementary ingredients: spirulina powder (1 tablespoon per 500 g), paprika (1 teaspoon per 500 g for carotenoids), garlic powder (1 teaspoon per 500 g for palatability and immune support), and a multivitamin supplement.</li>
  <li>Optional additions: frozen shrimp (blended), frozen spinach (blended), and fish meal.</li>
  <li>Spread the mix thinly (3–5 mm) on a sheet of baking parchment and freeze flat.</li>
  <li>Once frozen, break into feeding-sized pieces. Store in freezer bags for up to 3 months.</li>
</ol>
<p>Feed beefheart mix 2–3 times per week. It is a powerful growth food — many professional Discus breeders use beefheart as the primary grow-out food for juveniles. However, it fouls water faster than pellets, so increase water change frequency on beefheart feeding days.</p>

<h2 id="feeding-by-age">Feeding Schedule by Age</h2>

<h3 id="juvenile-feeding">Juvenile Feeding (Under 8 cm)</h3>
<p>Juvenile Discus (under 8 cm / 3 inches) are in their critical growth phase. Underfeeding during this period produces permanently stunted adults with poor body proportions — damage that cannot be reversed later.</p>
<ul>
  <li><strong>Frequency:</strong> 3–5 small meals per day. Space meals evenly across the daylight period.</li>
  <li><strong>Best foods:</strong> Beefheart mix (primary growth food), high-protein granules, frozen bloodworm, and live blackworms.</li>
  <li><strong>Water changes:</strong> Twice daily (25 % each) in dedicated grow-out tanks — frequent feeding demands frequent water changes. Professional breeders often maintain a continuous slow-drip water change system for juvenile tanks.</li>
  <li><strong>Temperature:</strong> Raise to 30–31 °C to maximise metabolism and growth rate.</li>
</ul>

<h3 id="adult-feeding">Adult Feeding</h3>
<p>Adult Discus (over 12 cm / 5 inches) have slower metabolisms and lower growth demands:</p>
<ul>
  <li><strong>Frequency:</strong> 2–3 meals per day.</li>
  <li><strong>Staple:</strong> High-quality Discus granules (40–60 % of diet).</li>
  <li><strong>Supplements:</strong> Frozen bloodworm, brine shrimp, mysis shrimp, and beefheart mix (2–3 times weekly each).</li>
  <li><strong>Portion size:</strong> Feed only what the group consumes within 5 minutes. Discus have small stomachs relative to their body size — several small meals are always better than one large one.</li>
</ul>

<h2 id="colour-enhancing-foods">Colour-Enhancing Foods</h2>
<p>Discus coloration is influenced by genetics, water quality, stress levels, and diet. Dietary colour enhancement works through carotenoid pigment accumulation:</p>
<ul>
  <li><strong>Astaxanthin:</strong> The primary red-orange pigment. Found in shrimp, krill, and colour-enhancing pellets. Intensifies red, orange, and yellow tones in Pigeon Blood, Red Melon, and Red Turquoise varieties.</li>
  <li><strong>Spirulina:</strong> Blue-green algae rich in phycocyanin and beta-carotene. Enhances blue and turquoise tones. Available as an additive in pellets or as a stand-alone powder mixed into beefheart.</li>
  <li><strong>Paprika:</strong> Contains capsanthin and capsorubin — carotenoids that support red pigment deposition. Added to beefheart mix at 1 teaspoon per 500 g.</li>
</ul>
<p>Colour enhancement through diet takes 4–8 weeks of consistent feeding to become visible. There are no shortcuts — artificial colour-injection practices (common in some Southeast Asian fish farms) produce temporary results that fade within weeks and harm the fish.</p>

<h2 id="foods-to-avoid-discus">Foods to Avoid</h2>
<ul>
  <li><strong>Tubifex worms:</strong> Commonly contaminated with bacteria and parasites from the sewage-rich environments where they are harvested. Blackworms are a safer live alternative.</li>
  <li><strong>Feeder fish:</strong> Parasite and disease risk far outweighs any nutritional benefit. Discus do not naturally eat other fish as a staple.</li>
  <li><strong>Cheap, filler-heavy pellets:</strong> Budget fish foods with wheat flour or soy as the primary ingredient provide inadequate protein and cause digestive issues. Invest in Discus-specific formulations with fish or krill meal as the first ingredient.</li>
  <li><strong>Bread, lettuce, and other human scraps:</strong> No nutritional value for Discus and degrade water quality rapidly.</li>
</ul>

<h2 id="feeding-mistakes-discus">Common Feeding Mistakes</h2>
<ul>
  <li><strong>Underfeeding juveniles:</strong> The most consequential mistake. Stunted juveniles become permanently undersized, poorly proportioned adults. Feed juveniles 3–5 times daily without fail.</li>
  <li><strong>Overfeeding adults:</strong> Adult Discus fed excessively develop fatty liver disease and become susceptible to bacterial infections. Two to three moderate meals daily is sufficient.</li>
  <li><strong>Single-food diets:</strong> Feeding only bloodworm (a common habit) creates nutritional deficiency. Rotate through granules, frozen foods, beefheart, and live foods for complete nutrition.</li>
  <li><strong>Leaving uneaten food:</strong> Food decomposing in the tank spikes ammonia and nitrate. Remove all uneaten food within 5 minutes of each feeding.</li>
  <li><strong>Feeding before water changes:</strong> Feed after water changes, not before. Water changes stress Discus slightly — feeding beforehand can cause regurgitation. Wait 30 minutes post-water-change before offering food.</li>
</ul>
<p>For tank sizing, water parameters, and compatible tank mates, see our <a href="/care/discus-fish-tank-size">Discus tank size guide</a>, <a href="/care/discus-water-parameters">water parameters guide</a>, and <a href="/care/discus-fish-tank-mates">tank mates guide</a>. Browse <a href="/exotic-fish/">The Fish Collection's Discus collection</a> for premium captive-bred varieties.</p>
`,
    faqs: [
      {
        question: 'How often should I feed Discus?',
        answer:
          'Juveniles (under 8 cm) need 3–5 small meals daily for optimal growth. Adults need 2–3 meals daily. Space meals evenly across the daylight hours. Feed only what the group consumes within 5 minutes and remove any uneaten food promptly.',
      },
      {
        question: 'Is beefheart good for Discus?',
        answer:
          'Yes, when properly prepared. Trim all fat and sinew, blend with spirulina, paprika, and garlic, and freeze flat. Beefheart mix is an excellent growth food — many professional breeders use it as the primary juvenile food. Feed 2–3 times per week for adults. Increase water changes on beefheart feeding days as it fouls water faster than pellets.',
      },
      {
        question: 'What is the best food for Discus colour?',
        answer:
          'Foods rich in astaxanthin (shrimp, krill, colour-enhancing pellets) intensify red, orange, and yellow tones. Spirulina enhances blue and turquoise tones. Consistent feeding over 4–8 weeks is needed to see results. Combine dietary colour enhancement with good water quality and appropriate lighting for maximum effect.',
      },
      {
        question: 'Can Discus eat flake food?',
        answer:
          'While Discus can technically eat flake food, it is not recommended as a staple. Flakes dissolve quickly, fouling the water, and most flake formulations lack the protein content (45%+) that Discus need. Use Discus-specific granules or pellets instead — they hold their form longer and deliver superior nutrition.',
      },
    ],
    sources: [
      {
        title: 'Nutritional Requirements of Symphysodon spp.',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848620301976',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Carotenoid Supplementation and Colour Enhancement in Ornamental Fish',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/raq.12233',
        publisher: 'Reviews in Aquaculture',
      },
      {
        title: 'Growth Performance of Discus Under Different Feeding Regimes',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848616301478',
        publisher: 'Aquaculture (Elsevier)',
      },
    ],
    relatedSlugs: ['discus-water-parameters', 'discus-fish-tank-size', 'discus-fish-beginners-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 14 — Discus Fish Breeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'How to Breed Discus Fish',
    slug: 'discus-fish-breeding-guide',
    type: 'care',
    category: 'discus',
    topicCategory: 'breeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/discus-fish-breeding-guide.jpg',
    heroImageAlt:
      'A Discus breeding pair guarding eggs on a spawning cone with free-swimming fry visible nearby',
    metaTitle: 'How to Breed Discus Fish | The Fish Collection',
    metaDescription:
      'Step-by-step Discus breeding guide. Pair formation, spawning triggers, egg care, fry feeding on parental mucus, and grow-out protocols.',
    quickAnswerQuestion: 'How do you breed Discus fish?',
    quickAnswer:
      'To breed Discus, start with a group of six or more juveniles and allow natural pair formation. Move the bonded pair to a 40–55 gallon bare-bottom breeding tank with a spawning cone, temperature at 30–31 °C, and pH 5.5–6.5. The pair will clean a vertical surface and the female deposits 100–400 eggs. Eggs hatch in 50–60 hours. Fry feed on parental mucus for 10–14 days before transitioning to newly hatched brine shrimp.',
    summary:
      'A comprehensive Discus breeding guide covering pair selection and formation, breeding tank setup, spawning triggers, egg care, the unique parental mucus feeding stage, fry rearing, grow-out protocols, and troubleshooting common breeding failures.',
    keyFacts: [
      { label: 'Pair Formation', value: 'Natural (from group of 6+)' },
      { label: 'Breeding Tank', value: '40–55 gal, bare bottom' },
      { label: 'Spawning Temp', value: '30–31 °C (86–88 °F)' },
      { label: 'Spawning pH', value: '5.5–6.5' },
      { label: 'Egg Hatch Time', value: '50–60 hours' },
      { label: 'Mucus Feeding', value: '10–14 days post-hatch' },
    ],
    headings: [
      { id: 'discus-breeding-overview', text: 'Discus Breeding Overview', level: 2 },
      { id: 'pair-formation', text: 'Pair Formation', level: 2 },
      { id: 'breeding-tank-setup', text: 'Breeding Tank Setup', level: 2 },
      { id: 'triggering-spawning', text: 'Triggering Spawning', level: 2 },
      { id: 'egg-laying-care', text: 'Egg Laying and Care', level: 2 },
      { id: 'parental-mucus-feeding', text: 'Parental Mucus Feeding', level: 2 },
      { id: 'fry-rearing', text: 'Fry Rearing and First Foods', level: 2 },
      { id: 'grow-out-protocol', text: 'Grow-Out Protocol', level: 2 },
      { id: 'troubleshooting-breeding', text: 'Troubleshooting Breeding Failures', level: 2 },
    ],
    content: `
<h2 id="discus-breeding-overview">Discus Breeding Overview</h2>
<p>Discus fish exhibit one of the most remarkable parental behaviours in the freshwater aquarium hobby. Both parents produce a mucus secretion on their skin that serves as the first food for newly hatched fry — a feeding strategy seen in only a handful of fish species worldwide. This parental mucus is rich in proteins, antibodies, and nutrients, giving parent-raised fry a significant health advantage over artificially raised offspring.</p>
<p>Breeding Discus is not technically difficult, but it requires patience, stable conditions, and a willingness to let the fish proceed at their own pace. Forced pairing rarely succeeds; natural pair formation from a group of juveniles is the proven approach. Once a pair bonds, they will typically spawn repeatedly every 1–2 weeks if conditions are suitable.</p>

<h2 id="pair-formation">Pair Formation</h2>
<p>The most reliable method for obtaining a breeding pair is to purchase six or more juvenile Discus (ideally 8–10) and raise them together in a group tank of 75–125 gallons. As they mature at 10–14 months of age, pairs will form naturally. You will recognise a bonded pair by these behaviours:</p>
<ul>
  <li>The two fish separate from the group and swim together constantly</li>
  <li>They jointly clean a vertical surface (tank wall, driftwood, cone, or leaf) — a clear pre-spawning behaviour</li>
  <li>They defend their chosen spawning site aggressively against other tank mates</li>
  <li>Body quivering and lateral display between the pair members</li>
</ul>
<p>Do not attempt to "force pair" two random Discus by placing them together in a breeding tank. Incompatible pairs will fight, refuse to spawn, or eat their eggs. Natural selection produces compatible pairs with higher success rates.</p>
<p>Once a pair is identified, move them to a dedicated breeding tank. If they continue cleaning and displaying in the new tank within 48 hours, the pair bond is strong.</p>

<h2 id="breeding-tank-setup">Breeding Tank Setup</h2>
<p>A Discus breeding tank prioritises water quality control and simplicity:</p>
<ul>
  <li><strong>Tank size:</strong> 40–55 gallons. Larger is not necessarily better — a compact space focuses the pair's attention on each other and the eggs rather than on patrolling territory.</li>
  <li><strong>Substrate:</strong> Bare bottom. Essential for hygiene — fry and uneaten food are immediately visible, and cleaning is effortless. Bare bottoms also prevent detritus accumulation that can host pathogens.</li>
  <li><strong>Spawning surface:</strong> A vertical spawning cone (ceramic or terracotta, available from aquarium suppliers) or a piece of vertical slate propped against the tank wall. The surface should be smooth and positioned so both parents can access it simultaneously.</li>
  <li><strong>Filtration:</strong> Sponge filter only. Sponge filters provide gentle biological filtration without intakes that can trap or injure fry. Run a mature sponge (pre-cycled in an established tank for 4+ weeks) to ensure immediate biological capacity.</li>
  <li><strong>Heater:</strong> Set to 30–31 °C (86–88 °F) — warmer than the display tank temperature to stimulate breeding behaviour.</li>
  <li><strong>Lighting:</strong> Dim, on a timer (8–10 hours daylight). Dim lighting reduces stress and encourages natural behaviour. Include a dim moonlight option to prevent total darkness, which can cause fright responses and egg eating.</li>
</ul>

<h2 id="triggering-spawning">Triggering Spawning</h2>
<p>A bonded pair in a properly set up breeding tank will often spawn within 1–2 weeks without further intervention. If spawning does not occur, the following environmental triggers can help:</p>
<ul>
  <li><strong>Large water change:</strong> A 50 % water change with slightly cooler, softer water (2–3 °C cooler than tank temperature) mimics the rainy season influx that triggers spawning in the wild. This is the most effective single trigger.</li>
  <li><strong>Lower pH:</strong> Gradually reduce pH to 5.5–6.0 using RO water or blackwater extract over 3–5 days. The combination of soft, acidic water and a large cool-water change closely replicates natural spawning conditions.</li>
  <li><strong>Varied, high-quality diet:</strong> Feed beefheart mix, frozen bloodworm, and live blackworms in the weeks preceding a spawning attempt. Well-nourished fish in peak condition are more likely to spawn.</li>
  <li><strong>Reduce disturbance:</strong> Minimise foot traffic, noise, and light changes near the breeding tank. Stressed pairs delay or abort spawning.</li>
</ul>

<h2 id="egg-laying-care">Egg Laying and Care</h2>
<p>When ready to spawn, the female develops a blunt, rounded ovipositor (breeding tube) visible just anterior to the anal fin. The male's papilla is narrower and more pointed. The pair will intensify their cleaning of the spawning surface, then the female makes slow, upward passes over the cone, depositing rows of small, amber-coloured eggs. The male follows each pass, fertilising the eggs.</p>
<p>A typical clutch contains 100–400 eggs depending on the female's size and experience. First-time pairs often produce smaller clutches and may eat them — this is normal. Most pairs improve after 3–5 spawning attempts.</p>
<p><strong>After egg laying:</strong></p>
<ul>
  <li>Both parents fan the eggs with their pectoral fins to maintain water circulation and prevent fungal growth.</li>
  <li>The parents remove unfertilised or fungused eggs (which turn white) by eating them.</li>
  <li>Do not disturb the pair. Avoid water changes, net intrusions, or sudden light changes during the egg stage. Stressed parents will eat the entire clutch.</li>
  <li>Eggs hatch in approximately 50–60 hours at 30 °C. The wriggling larvae remain attached to the spawning surface by adhesive threads for an additional 48–72 hours.</li>
</ul>

<h2 id="parental-mucus-feeding">Parental Mucus Feeding</h2>
<p>At day 3–4 post-hatch, fry become free-swimming and immediately seek out their parents. This is when the remarkable mucus feeding begins. Both parents produce a thick, opaque mucus layer on their flanks that serves as the sole food source for the fry.</p>
<p>The fry attach to the parents' sides and graze on the mucus, often in large clusters. You will see the fry swarm from one parent to the other as mucus is depleted on one side. This behaviour continues for 10–14 days, during which the fry grow rapidly.</p>
<p><strong>Key points during mucus feeding:</strong></p>
<ul>
  <li>Do not add any supplementary food during the first 5–7 days — the fry rely exclusively on parental mucus and will not consume other food.</li>
  <li>Minimize disturbance. Parents that are stressed may eat fry or produce insufficient mucus.</li>
  <li>Light water changes (10–15 %) can be performed carefully, siphoning from the opposite side of the tank, if ammonia begins to rise. Use airline tubing as the siphon to avoid suction that could trap fry.</li>
  <li>If one parent becomes aggressive toward the fry (this occurs occasionally, particularly with inexperienced males), remove the aggressive parent and leave the fry with the remaining parent.</li>
</ul>

<h2 id="fry-rearing">Fry Rearing and First Foods</h2>
<p>At 7–10 days post-free-swimming, begin supplementing the parental mucus diet with first foods:</p>
<ul>
  <li><strong>Newly hatched brine shrimp (Artemia nauplii):</strong> The standard first food for Discus fry. Hatch daily using a brine shrimp hatchery (simple DIY setups with airline tubing and a 2-litre bottle work well). Feed 2–3 times daily in small amounts.</li>
  <li><strong>Microworms:</strong> A secondary live food option that is easy to culture. Less nutritious than brine shrimp but a useful supplement.</li>
</ul>
<p>By day 14–21, fry should be eating brine shrimp actively and weaning off parental mucus. At this point, you can separate the fry from the parents by moving the adults back to the display tank. The fry remain in the breeding tank, which now becomes their grow-out tank.</p>
<p>Transition to finely crushed Discus granules and decapsulated brine shrimp eggs at 3–4 weeks. By 6 weeks, fry should accept a varied diet of crushed granules, frozen baby brine shrimp, and fine frozen bloodworm.</p>

<h2 id="grow-out-protocol">Grow-Out Protocol</h2>
<p>Growing Discus fry to sellable or display-tank size (5–8 cm) takes 3–6 months of intensive care:</p>
<ul>
  <li><strong>Tank:</strong> The breeding tank (40–55 gallons) serves as the grow-out tank for up to 20–30 fry. Larger spawns require a 75+ gallon grow-out tank.</li>
  <li><strong>Feeding:</strong> 4–6 small meals daily. Beefheart mix and finely crushed granules are the primary growth foods. Supplement with baby brine shrimp and frozen bloodworm.</li>
  <li><strong>Water changes:</strong> 25 % twice daily is the standard for professional Discus grow-out. This intensive water change schedule prevents growth-inhibiting hormone accumulation and maintains nitrate at near-zero levels. Automated drip systems simplify this.</li>
  <li><strong>Temperature:</strong> Maintain at 30–31 °C for maximum growth rate.</li>
  <li><strong>Culling:</strong> Sort fry by size every 2–3 weeks to prevent size bullying. Smaller fry can be grown out separately. Remove any deformed fry (spinal curvature, underdeveloped fins) — these will not develop into healthy adults.</li>
</ul>

<h2 id="troubleshooting-breeding">Troubleshooting Breeding Failures</h2>
<ul>
  <li><strong>Pair eats eggs repeatedly:</strong> Normal for first-time parents. Most pairs stop eating eggs after 3–5 spawning cycles. If egg eating persists, cover the spawning cone with a fine mesh cage that allows water flow but prevents adult access — the eggs can be hatched artificially, though fry will miss the crucial mucus feeding stage.</li>
  <li><strong>Eggs turn white (fungus):</strong> Unfertilised eggs fungus rapidly. If the majority of eggs turn white, the male may be infertile. Try the female with a different male.</li>
  <li><strong>Pair refuses to spawn:</strong> Check water chemistry — pH above 7.0 or temperature below 28 °C inhibits spawning. Perform a large, cool water change to simulate rainy season. Ensure the diet includes high-protein conditioning foods.</li>
  <li><strong>Fry dying during mucus stage:</strong> Usually caused by insufficient mucus production (stressed parents) or bacterial contamination in the breeding tank. Maintain impeccable water quality and minimise all disturbance.</li>
  <li><strong>Stunted fry growth:</strong> Insufficient feeding frequency or inadequate water changes. Fry require 4–6 meals daily and twice-daily water changes for optimal growth. Reduce group size if growth is uneven — dominant fry outcompete smaller siblings.</li>
</ul>
<p>Discus breeding is deeply rewarding when it succeeds. The sight of fry swarming over their parents' flanks, feeding on mucus, is one of the most extraordinary behaviours in freshwater fishkeeping. Patience, stable conditions, and minimal interference are the keys to success.</p>
<p>For foundational care, see our <a href="/blog/discus-fish-beginners-guide">Discus beginner's guide</a>, <a href="/care/discus-fish-feeding-guide">feeding guide</a>, and <a href="/care/discus-water-parameters">water parameters guide</a>.</p>
`,
    faqs: [
      {
        question: 'How old do Discus need to be to breed?',
        answer:
          'Discus reach sexual maturity at approximately 10–14 months of age, when they are typically 10–12 cm (4–5 inches) in diameter. However, breeding success improves with maturity — pairs at 14–18 months old are more reliable parents than younger fish.',
      },
      {
        question: 'How many eggs do Discus lay?',
        answer:
          'A typical Discus clutch contains 100–400 eggs depending on the female\'s size and experience. First-time spawners usually produce smaller clutches (50–150 eggs). Experienced, well-conditioned females can produce 300–400 eggs per spawn.',
      },
      {
        question: 'Do Discus fry really eat their parents\' skin?',
        answer:
          'Yes. Discus parents produce a specialised mucus layer on their flanks that serves as the exclusive food source for fry during their first 10–14 days of free swimming. This mucus is rich in proteins, antibodies, and nutrients. Both parents produce it, and fry swarm between them feeding on it throughout the day.',
      },
      {
        question: 'Can I breed Discus without a pair forming naturally?',
        answer:
          'Forced pairing (placing two random Discus together) has a low success rate. Natural pair formation from a group of six or more juveniles produces compatible pairs with much higher spawning success and better parental behaviour. Invest in a group and let nature take its course.',
      },
      {
        question: 'How often do Discus breed?',
        answer:
          'A healthy, bonded Discus pair in optimal conditions will spawn every 7–14 days. Some pairs are prolific enough to spawn weekly. Between spawns, condition the pair with high-protein foods and maintain impeccable water quality to support egg production.',
      },
    ],
    sources: [
      {
        title: 'Parental Mucus Feeding in Discus Fish: Nutritional Composition and Antibody Transfer',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.12801',
        publisher: 'Journal of Fish Biology',
      },
      {
        title: 'Reproductive Biology of Symphysodon aequifasciatus',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848611006752',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Epidermal Mucus Secretion in Discus: Hormonal Regulation',
        url: 'https://link.springer.com/article/10.1007/s10695-015-0055-2',
        publisher: 'Fish Physiology and Biochemistry',
      },
    ],
    relatedSlugs: ['discus-fish-feeding-guide', 'discus-fish-tank-size', 'discus-water-parameters'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 15 — Wolf Fish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Wolf Fish Care Guide',
    slug: 'wolf-fish-care-guide',
    type: 'care',
    category: 'cichlid',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/wolf-fish-care-guide.jpg',
    heroImageAlt:
      'A Hoplias malabaricus wolf fish resting in a heavily planted predator aquarium with driftwood hides',
    metaTitle: 'Care Guide for Wolf Fish | Water, Tank & Diet | The Fish Collection',
    metaDescription:
      'Expert wolf fish care guide. Tank size, water parameters, diet, aggression management, and species-specific needs for Hoplias malabaricus and Hoplias aimara.',
    quickAnswerQuestion: 'How do you care for a wolf fish?',
    quickAnswer:
      'Wolf fish (Hoplias spp.) require a minimum 125-gallon tank (75 gallons for small species), water temperature 24–28 °C, pH 5.5–7.5, heavy biological filtration, and a diet of frozen fish fillets, shrimp, earthworms, and carnivore pellets fed 3–4 times weekly. They must be kept alone or with carefully chosen large tank mates. Provide ample cover (driftwood, caves), a secure lid, and dim lighting to reduce stress.',
    summary:
      'A practical care sheet for wolf fish covering tank requirements, water parameters, feeding protocols, aggression management, health monitoring, and species-specific differences between Hoplias malabaricus, H. aimara, and Erythrinus erythrinus.',
    keyFacts: [
      { label: 'Min Tank (H. malabaricus)', value: '125 gal' },
      { label: 'Min Tank (H. aimara)', value: '300 gal' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH Range', value: '5.5–7.5' },
      { label: 'Diet', value: 'Carnivore — fish, shrimp, worms' },
      { label: 'Lifespan', value: '15–20+ years' },
    ],
    headings: [
      { id: 'wolf-fish-care-overview', text: 'Wolf Fish Care Overview', level: 2 },
      { id: 'species-specific-care', text: 'Species-Specific Care Requirements', level: 2 },
      { id: 'tank-requirements-wolf', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters-wolf-care', text: 'Water Parameters', level: 2 },
      { id: 'feeding-protocol', text: 'Feeding Protocol', level: 2 },
      { id: 'aggression-handling', text: 'Aggression and Safe Handling', level: 2 },
      { id: 'health-monitoring', text: 'Health Monitoring', level: 2 },
      { id: 'maintenance-schedule', text: 'Weekly Maintenance Schedule', level: 2 },
    ],
    content: `
<h2 id="wolf-fish-care-overview">Wolf Fish Care Overview</h2>
<p>Wolf fish are powerful, intelligent freshwater predators that reward experienced keepers with dramatic behaviour and imposing presence. Their care is straightforward once the fundamentals are established: a large enough tank, robust filtration, a varied carnivorous diet, and respect for their aggressive temperament. The challenge is not complexity — it is scale and consistency. For a comprehensive species overview, see our <a href="/blog/wolf-fish-complete-guide">wolf fish complete guide</a>.</p>

<h2 id="species-specific-care">Species-Specific Care Requirements</h2>
<ul>
  <li><strong>Hoplias malabaricus (Trahira):</strong> The most commonly kept species. Adults reach 30–50 cm. Minimum 125-gallon tank. Tolerates pH 5.5–7.5 and temperatures 22–28 °C. The most adaptable and beginner-friendly wolf fish.</li>
  <li><strong>Hoplias aimara (Giant Wolf Fish):</strong> Adults reach 60–100 cm and 20+ kg. Requires 300+ gallon tank with industrial-grade filtration. Expert keepers only. Extreme caution during maintenance — adults can cause genuine injury.</li>
  <li><strong>Hoplias curupira (Red Wolf Fish):</strong> Adults reach 25–40 cm. Prefers softer, more acidic water (pH 5.0–6.5). A 100-gallon tank suits a single adult. More reclusive than <em>H. malabaricus</em>.</li>
  <li><strong>Erythrinus erythrinus (Rainbow Wolf Fish):</strong> The smallest species at 15–25 cm. A 55–75 gallon tank is adequate. Beautifully coloured with red, orange, and green iridescence. Equally aggressive despite smaller size.</li>
</ul>

<h2 id="tank-requirements-wolf">Tank Requirements</h2>
<ul>
  <li><strong>Footprint over height:</strong> Wolf fish are bottom-to-mid-water dwellers. A long, wide tank with moderate height is ideal. For <em>H. malabaricus</em>, a 125-gallon tank (72 × 18 × 22 inches) provides excellent space.</li>
  <li><strong>Filtration:</strong> Biological filtration rated for 8–10× tank volume turnover. Sump systems are ideal; large canisters (FX6 or equivalent) in parallel are the alternative. Run activated carbon to manage odour from meaty feeding.</li>
  <li><strong>Substrate:</strong> Fine sand or bare bottom. Sand allows natural burying behaviour exhibited by some species.</li>
  <li><strong>Cover:</strong> Critical for reducing stress. Driftwood stacks, PVC caves (painted or hidden behind hardscape), and dense plant thickets provide ambush points. A wolf fish without cover is chronically stressed.</li>
  <li><strong>Lid:</strong> Mandatory, heavy, and secure. Wolf fish jump when startled. Use clips or weights to prevent the fish from pushing the lid open.</li>
  <li><strong>Lighting:</strong> Dim. Wolf fish are crepuscular ambush predators that prefer low light. Bright lighting causes stress, increased aggression, and glass-striking behaviour. Use timed ramp-up/ramp-down cycles.</li>
</ul>

<h2 id="water-parameters-wolf-care">Water Parameters</h2>
<ul>
  <li><strong>Temperature:</strong> 24–28 °C (75–82 °F). <em>H. curupira</em> prefers 26–28 °C.</li>
  <li><strong>pH:</strong> 5.5–7.5 (<em>H. malabaricus</em>), 5.0–6.5 (<em>H. curupira</em>).</li>
  <li><strong>Hardness:</strong> 2–15 dGH. Most species come from soft Amazonian waters.</li>
  <li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
  <li><strong>Nitrate:</strong> Below 40 ppm; below 20 ppm preferred.</li>
</ul>
<p>Tannin-stained blackwater (using Indian almond leaves or peat) is beneficial for all species, reducing stress, enhancing colour, and providing mild antibacterial properties. Weekly 30–50 % water changes maintain parameter stability.</p>

<h2 id="feeding-protocol">Feeding Protocol</h2>
<p><strong>Staple foods:</strong></p>
<ul>
  <li>Frozen fish fillets (tilapia, smelt, silversides) — the dietary base</li>
  <li>Frozen shrimp and prawns (whole, shell-on)</li>
  <li>Earthworms and nightcrawlers</li>
  <li>Carnivore pellets (Hikari Massivore, Northfin Predator) — train onto these for nutritional balance</li>
</ul>
<p><strong>Schedule:</strong> Feed juveniles daily. Adults 3–4 times per week with 1–2 fasting days. Wolf fish are ambush predators with slow metabolisms adapted to feast-and-famine cycles. Overfeeding causes obesity and fatty liver disease.</p>
<p><strong>Avoid:</strong> Live feeder fish as a staple (parasite and disease risk). Use live food only for conditioning newly arrived specimens or as occasional enrichment. See our <a href="/care/predatory-fish-feeding-guide">predatory fish feeding guide</a> for complete nutrition protocols.</p>

<h2 id="aggression-handling">Aggression and Safe Handling</h2>
<ul>
  <li><strong>Never hand-feed.</strong> Use 30+ cm feeding tongs exclusively. Wolf fish strike at movement reflexively and cannot distinguish between fingers and food.</li>
  <li><strong>Dim lights before maintenance.</strong> Reaching into a brightly lit wolf fish tank invites a strike response. Dim or turn off lights 10–15 minutes before performing water changes or tank maintenance.</li>
  <li><strong>Move slowly and predictably.</strong> Sudden movements trigger panic biting and glass-striking.</li>
  <li><strong>Solitary housing is safest.</strong> Wolf fish are best kept alone. If attempting multi-species setups, use only tank mates too large and armoured to be eaten (large Plecos, Bichirs) in tanks 200+ gallons.</li>
  <li><strong>Have first-aid available.</strong> For keepers of <em>H. aimara</em>, have a first-aid kit accessible. Bites from adults can cause deep lacerations requiring medical attention.</li>
</ul>

<h2 id="health-monitoring">Health Monitoring</h2>
<p>Wolf fish are hardy once established. Watch for:</p>
<ul>
  <li><strong>Obesity:</strong> Visible belly distension, lethargy, food refusal after extended overfeeding. Reduce feeding frequency and implement regular fasting days.</li>
  <li><strong>Bacterial infections:</strong> Reddened patches, fin erosion, cloudy eyes. Usually secondary to poor water quality or wounds from aggression/glass-striking. Maintain impeccable water quality. Treat with appropriate antibiotics under veterinary guidance.</li>
  <li><strong>Glass-strike injuries:</strong> Scraped snout, damaged barbels. Caused by startling or inadequate cover. Increase hiding spots and reduce lighting intensity.</li>
  <li><strong>Parasites:</strong> Wild-caught specimens should be prophylactically treated with praziquantel and metronidazole upon arrival.</li>
</ul>

<h2 id="maintenance-schedule">Weekly Maintenance Schedule</h2>
<ul>
  <li><strong>Monday:</strong> Test ammonia, nitrite, nitrate. Feed.</li>
  <li><strong>Wednesday:</strong> Feed. Spot-clean uneaten food debris from substrate.</li>
  <li><strong>Friday:</strong> Feed.</li>
  <li><strong>Saturday:</strong> 30–50 % water change. Clean filter socks/sponges (rotate — never clean all filtration media at once). Top off evaporation. Inspect lid security.</li>
  <li><strong>Sunday:</strong> Fast day. Observe fish behaviour for signs of stress or illness.</li>
</ul>
<p>With consistent care, wolf fish live 15–20+ years in captivity — a long-term commitment that rewards patience and discipline. Browse <a href="/exotic-fish/">The Fish Collection's predator fish collection</a> for available wolf fish specimens.</p>
`,
    faqs: [
      {
        question: 'What size tank does a wolf fish need?',
        answer:
          'Tank size depends on species: Erythrinus erythrinus (Rainbow Wolf Fish) needs 55–75 gallons, Hoplias malabaricus (Trahira) needs 125 gallons minimum, and Hoplias aimara (Giant Wolf Fish) requires 300+ gallons. Footprint (length and width) matters more than height — choose the longest tank you can accommodate.',
      },
      {
        question: 'Can you hand-feed a wolf fish?',
        answer:
          'Never hand-feed a wolf fish. They strike at movement reflexively and have powerful jaws with sharp teeth. Use 30+ cm feeding tongs exclusively. Even experienced keepers maintain distance during feeding. Hoplias aimara bites can cause injuries requiring medical attention.',
      },
      {
        question: 'How long do wolf fish live?',
        answer:
          'Hoplias malabaricus lives 15–20 years in captivity with proper care. Hoplias aimara can exceed 20 years. Even the smaller Erythrinus erythrinus lives 10–15 years. These are long-term commitments comparable to keeping a dog.',
      },
      {
        question: 'Do wolf fish need tankmates?',
        answer:
          'No. Wolf fish thrive as solitary specimens and are safest kept alone. If you want to add tank mates, only do so in 200+ gallon tanks with large, armoured species (Plecos, Bichirs, large cichlids) that cannot be eaten. Monitor constantly — aggression can escalate suddenly after months of apparent peace.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Hoplias malabaricus',
        url: 'https://www.fishbase.se/summary/Hoplias-malabaricus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Captive Husbandry of Large Predatory Freshwater Fish',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1557506320300343',
        publisher: 'Journal of Exotic Pet Medicine',
      },
      {
        title: 'Feeding Ecology of Erythrinidae in Neotropical Freshwaters',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/eff.12190',
        publisher: 'Ecology of Freshwater Fish',
      },
    ],
    relatedSlugs: ['wolf-fish-complete-guide', 'predatory-fish-feeding-guide', 'best-large-freshwater-fish-aquarium'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 16 — Fahaka Pufferfish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Fahaka Pufferfish Care Guide',
    slug: 'fahaka-pufferfish-care-guide',
    type: 'care',
    category: 'pufferfish',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/fahaka-pufferfish-care-guide.jpg',
    heroImageAlt:
      'A Fahaka Pufferfish displaying vivid striped patterning while investigating driftwood in its aquarium',
    metaTitle: 'Care Guide for Fahaka Pufferfish | The Fish Collection',
    metaDescription:
      'Fahaka Pufferfish care sheet: 125-gallon tank minimum, beak maintenance diet, water parameters, and temperament. Expert guidance from The Fish Collection.',
    quickAnswerQuestion: 'What does a Fahaka Pufferfish need?',
    quickAnswer:
      'Fahaka Pufferfish need a minimum 125-gallon tank, water temperature 24–28 °C, pH 7.0–8.0, hardness 10–20 dGH, powerful filtration (10× turnover), and a diet centred on hard-shelled foods (snails, mussels, clams, crab legs) to maintain their continuously growing beak. They must be kept completely alone. Weekly 30–50 % water changes are essential as they are scaleless and highly sensitive to water quality.',
    summary:
      'A concise care sheet for the Fahaka Pufferfish (Tetraodon lineatus) covering tank requirements, water parameters, beak maintenance diet, temperament, common health issues, and long-term commitment — the essential quick-reference companion to our full Fahaka guide.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Tetraodon lineatus' },
      { label: 'Adult Size', value: '40–45 cm (16–18 in)' },
      { label: 'Min Tank Size', value: '125 gal (475 L)' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'pH Range', value: '7.0–8.0' },
      { label: 'Lifespan', value: '10–15 years' },
    ],
    headings: [
      { id: 'fahaka-care-summary', text: 'Fahaka Care at a Glance', level: 2 },
      { id: 'tank-setup-fahaka-care', text: 'Tank Setup', level: 2 },
      { id: 'water-params-fahaka-care', text: 'Water Parameters', level: 2 },
      { id: 'diet-beak-care', text: 'Diet and Beak Maintenance', level: 2 },
      { id: 'temperament-fahaka-care', text: 'Temperament', level: 2 },
      { id: 'health-fahaka-care', text: 'Health and Common Issues', level: 2 },
      { id: 'daily-weekly-routine', text: 'Daily and Weekly Routine', level: 2 },
    ],
    content: `
<h2 id="fahaka-care-summary">Fahaka Care at a Glance</h2>
<p>The Fahaka Pufferfish (<em>Tetraodon lineatus</em>) is one of the most intelligent, personable, and demanding freshwater fish in the hobby. They recognise their keepers, display mood-dependent colour changes, and possess a bite powerful enough to crack crab shells — and human fingers. This care sheet provides the essential parameters and protocols. For a deeper dive into every aspect of Fahaka keeping, see our <a href="/blog/fahaka-pufferfish-complete-guide">complete Fahaka Pufferfish guide</a>.</p>

<h2 id="tank-setup-fahaka-care">Tank Setup</h2>
<ul>
  <li><strong>Minimum tank:</strong> 125 gallons (475 L), 72 inches long. 150–180 gallons is preferred for full-sized adults.</li>
  <li><strong>Filtration:</strong> 10× turnover minimum. Sump or dual large canisters. Run activated carbon continuously.</li>
  <li><strong>Substrate:</strong> Fine sand (Fahakas bury themselves partially). Avoid gravel.</li>
  <li><strong>Décor:</strong> Large smooth rocks and driftwood for enrichment. Rearrange periodically to stimulate exploration. Avoid sharp edges.</li>
  <li><strong>Heater:</strong> Titanium only — Fahakas bite and shatter glass heaters. Use heater guards as additional protection.</li>
  <li><strong>Lid:</strong> Secure and weighted. Fahakas splash and can push lightweight lids.</li>
</ul>

<h2 id="water-params-fahaka-care">Water Parameters</h2>
<ul>
  <li><strong>Temperature:</strong> 24–28 °C (75–82 °F)</li>
  <li><strong>pH:</strong> 7.0–8.0</li>
  <li><strong>Hardness:</strong> 10–20 dGH (hard, alkaline African water conditions)</li>
  <li><strong>Ammonia/Nitrite:</strong> 0 ppm — pufferfish are scaleless and extremely sensitive</li>
  <li><strong>Nitrate:</strong> Below 20 ppm</li>
  <li><strong>Salinity:</strong> Fully freshwater — no salt required despite occasional mislabelling as brackish</li>
</ul>
<p>Water quality is the single most important factor in Fahaka health. Scaleless skin means any ammonia, nitrite, or elevated nitrate causes direct tissue irritation. Weekly 30–50 % water changes are the minimum. Test parameters twice weekly.</p>

<h2 id="diet-beak-care">Diet and Beak Maintenance</h2>
<p>Fahaka Pufferfish have a fused beak (four dental plates) that grows continuously. Hard-shelled foods are mandatory at every feeding to wear the beak down and prevent overgrowth — the most common and serious health issue in captive Fahakas.</p>
<p><strong>Essential foods (hard-shelled — every feeding):</strong></p>
<ul>
  <li>Snails (Malaysian Trumpet, Ramshorn, Mystery Snails) — maintain a breeding colony</li>
  <li>Mussels and clams (whole, shell-on)</li>
  <li>Crab legs and crayfish</li>
  <li>Cockles</li>
</ul>
<p><strong>Supplementary foods:</strong></p>
<ul>
  <li>Frozen shrimp (shell-on)</li>
  <li>Earthworms</li>
  <li>Frozen fish fillets (occasional)</li>
</ul>
<p><strong>Feeding schedule:</strong> Adults every other day. Fahakas beg aggressively but are prone to obesity. A lean belly profile (slightly concave when viewed from above) is healthier than a round one.</p>
<p>For detailed pufferfish nutrition, see our <a href="/care/pufferfish-diet-feeding">pufferfish diet and feeding guide</a>.</p>

<h2 id="temperament-fahaka-care">Temperament</h2>
<p>Fahakas must be kept <strong>completely alone</strong>. They will attack and kill any tank mate — other pufferfish, large cichlids, armoured catfish, and invertebrates. There are no reliable exceptions. Anecdotal reports of temporary coexistence always carry the risk of sudden, fatal aggression.</p>
<p>Toward their keeper, Fahakas are extraordinarily interactive. They follow human movement, beg for food (splashing at the surface), and display colour changes reflecting mood — darkening when stressed, brightening when excited. This interactivity makes them one of the most engaging solo fish in the hobby.</p>

<h2 id="health-fahaka-care">Health and Common Issues</h2>
<ul>
  <li><strong>Beak overgrowth:</strong> Prevented by consistent hard-shelled food. If overgrowth occurs, requires clove oil anaesthesia and manual trimming with cuticle nippers — a stressful procedure best avoided through proper diet.</li>
  <li><strong>Obesity:</strong> Common from overfeeding. Maintain every-other-day adult schedule with regular fasting periods.</li>
  <li><strong>Skin infections:</strong> Secondary to poor water quality. Maintain zero ammonia, zero nitrite, and nitrate below 20 ppm.</li>
  <li><strong>Internal parasites:</strong> Prophylactic praziquantel treatment recommended for wild-caught specimens upon arrival.</li>
  <li><strong>Stress puffing:</strong> Inflation with water when stressed. Minimise by avoiding sudden light changes, loud noises, and netting. Repeated puffing can cause internal damage.</li>
</ul>

<h2 id="daily-weekly-routine">Daily and Weekly Routine</h2>
<ul>
  <li><strong>Daily:</strong> Check temperature, observe behaviour and colour. Inspect beak condition during feeding.</li>
  <li><strong>Every other day:</strong> Feed hard-shelled foods (snails, mussels, crab). Remove uneaten shell fragments 30 minutes after feeding.</li>
  <li><strong>Twice weekly:</strong> Test pH, ammonia, nitrite, nitrate.</li>
  <li><strong>Weekly:</strong> 30–50 % water change. Clean filter media (never all at once). Replace activated carbon every 2–3 weeks. Check heater guard integrity.</li>
</ul>
<p>With proper care, Fahaka Pufferfish live 10–15 years — a decade of interactive, personality-rich fishkeeping. Browse <a href="/exotic-fish/">The Fish Collection's exotic fish collection</a> for current Fahaka availability.</p>
`,
    faqs: [
      {
        question: 'Are Fahaka Pufferfish freshwater or brackish?',
        answer:
          'Fahaka Pufferfish (Tetraodon lineatus) are fully freshwater fish from the Nile basin. They do not require any salt addition. Target pH 7.0–8.0 and hardness 10–20 dGH in pure freshwater.',
      },
      {
        question: 'How often should I feed a Fahaka Pufferfish?',
        answer:
          'Feed adult Fahakas every other day. Every meal should include hard-shelled items (snails, mussels, clams, or crab legs) to maintain the beak. Fahakas are persistent beggars — resist the urge to feed daily, as obesity and fatty liver disease are common consequences of overfeeding.',
      },
      {
        question: 'What happens if a Fahaka beak overgrows?',
        answer:
          'An overgrown beak prevents the pufferfish from eating and will eventually cause starvation. Treatment requires anaesthetising the fish with clove oil and manually trimming the dental plates with cuticle nippers. Prevention through consistent hard-shelled food is always preferable to this stressful intervention.',
      },
      {
        question: 'Can a Fahaka Pufferfish bite through a finger?',
        answer:
          'Yes. Fahaka Pufferfish have a powerful fused beak designed to crush crab shells, clam shells, and snail shells. An adult Fahaka bite can cause deep lacerations and potentially sever smaller digits. Never hand-feed — use long feeding tongs exclusively.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Tetraodon lineatus',
        url: 'https://www.fishbase.se/summary/Tetraodon-lineatus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Dental Plate Growth in Tetraodontidae',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.13887',
        publisher: 'Journal of Fish Biology',
      },
      {
        title: 'Husbandry of Freshwater Pufferfish in Captivity',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1557506320300343',
        publisher: 'Journal of Exotic Pet Medicine',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish-complete-guide', 'pufferfish-diet-feeding', 'mbu-pufferfish-care-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 17 — MBU Pufferfish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'MBU Pufferfish Care Guide',
    slug: 'mbu-pufferfish-care-guide',
    type: 'care',
    category: 'pufferfish',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/mbu-pufferfish-care-guide.jpg',
    heroImageAlt:
      'A large MBU Pufferfish (Tetraodon mbu) displaying its intricate maze-like patterning in a spacious aquarium',
    metaTitle: 'Care Guide for MBU Pufferfish | The Fish Collection',
    metaDescription:
      'MBU Pufferfish care guide: 500-gallon tank minimum, beak diet, water parameters, and the reality of keeping the world\'s largest freshwater pufferfish at home.',
    quickAnswerQuestion: 'How do you care for an MBU Pufferfish?',
    quickAnswer:
      'MBU Pufferfish (Tetraodon mbu) require a minimum 500-gallon tank, water temperature 24–26 °C, pH 7.0–8.0, extremely powerful filtration, and a diet of hard-shelled foods (snails, mussels, clams, crab, crayfish) to maintain their continuously growing beak. They grow to 60–75 cm and produce massive bioload. MBUs are the most personable freshwater fish many keepers have ever owned — and one of the most demanding commitments in the hobby.',
    summary:
      'An honest care guide for the MBU Pufferfish — the largest freshwater pufferfish in the world — covering the enormous tank requirements, filtration demands, beak maintenance diet, interactive personality, health management, and the long-term reality of keeping this extraordinary species.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Tetraodon mbu' },
      { label: 'Adult Size', value: '60–75 cm (24–30 in)' },
      { label: 'Min Tank Size', value: '500 gal (1,900 L)' },
      { label: 'Temperature', value: '24–26 °C (75–79 °F)' },
      { label: 'pH Range', value: '7.0–8.0' },
      { label: 'Lifespan', value: '10–15+ years' },
    ],
    headings: [
      { id: 'mbu-overview', text: 'The MBU Pufferfish: An Overview', level: 2 },
      { id: 'tank-requirements-mbu', text: 'Tank Requirements', level: 2 },
      { id: 'filtration-mbu', text: 'Filtration for MBU', level: 3 },
      { id: 'water-parameters-mbu', text: 'Water Parameters', level: 2 },
      { id: 'diet-beak-mbu', text: 'Diet and Beak Maintenance', level: 2 },
      { id: 'personality-interaction', text: 'Personality and Interaction', level: 2 },
      { id: 'tank-mates-mbu', text: 'Tank Mates', level: 2 },
      { id: 'health-mbu', text: 'Health and Common Issues', level: 2 },
      { id: 'commitment-reality', text: 'The Commitment Reality', level: 2 },
    ],
    content: `
<h2 id="mbu-overview">The MBU Pufferfish: An Overview</h2>
<p>The MBU Pufferfish (<em>Tetraodon mbu</em>) is the largest freshwater pufferfish in the world, reaching 60–75 cm (24–30 inches) and potentially exceeding 10 kg. Native to the Congo River basin and Lake Tanganyika in Central Africa, MBUs are imposing, intelligent, and remarkably interactive fish that develop genuine relationships with their keepers. They are frequently described as "aquatic dogs" — following their owner's movement, begging for food, and displaying excitement when approached.</p>
<p>The flip side of this extraordinary personality is extraordinary demand. An adult MBU requires a 500+ gallon tank, industrial-strength filtration, a constant supply of expensive hard-shelled foods, and weekly water changes measured in the hundreds of gallons. This is a fish for dedicated hobbyists with the space, budget, and long-term commitment to provide what it needs.</p>

<h2 id="tank-requirements-mbu">Tank Requirements</h2>
<p>A juvenile MBU (10–15 cm at purchase) can temporarily inhabit a 125-gallon tank, but adults require a minimum of 500 gallons — and larger is always better. The ideal MBU tank is 8–10 feet long, 3–4 feet wide, and 2–3 feet tall. Custom builds are standard at this scale; off-the-shelf tanks this size are rare.</p>
<ul>
  <li><strong>Substrate:</strong> Fine sand. MBUs dig, rearrange, and interact with substrate actively. Bare bottoms work but are less enriching.</li>
  <li><strong>Décor:</strong> Large, smooth driftwood and rocks. MBUs are destructive — anything not secured will be moved. Plants will be uprooted or eaten. Use robust, well-anchored hardscape only.</li>
  <li><strong>Heater:</strong> Titanium, rated for 500+ gallons. MBUs bite everything — glass heaters will be destroyed. Place heaters behind protective guards or in a sump.</li>
  <li><strong>Lid:</strong> MBUs splash enthusiastically during feeding. A secure lid prevents water loss and accidental escapes (rare but possible with panicked juveniles).</li>
</ul>

<h3 id="filtration-mbu">Filtration for MBU</h3>
<p>MBU Pufferfish produce staggering amounts of waste. An adult MBU's bioload is comparable to that of several large cichlids combined. Filtration must be massively oversized:</p>
<ul>
  <li><strong>Sump:</strong> A sump of 150–200 gallons (30–40 % of display volume) is the minimum. Multiple chambers for mechanical, biological, and chemical filtration are essential.</li>
  <li><strong>Biological media:</strong> 30+ litres of sintered glass or ceramic biomedia. The nitrogen cycle in an MBU system processes more ammonia daily than many entire community tanks.</li>
  <li><strong>Water changes:</strong> Weekly 30–50 % changes are mandatory — at 500 gallons, that is 150–250 gallons of water per week. Many MBU keepers install permanent plumbing with drain lines and float-valve refill systems.</li>
</ul>

<h2 id="water-parameters-mbu">Water Parameters</h2>
<ul>
  <li><strong>Temperature:</strong> 24–26 °C (75–79 °F). MBUs prefer slightly cooler water than Fahaka Pufferfish.</li>
  <li><strong>pH:</strong> 7.0–8.0</li>
  <li><strong>Hardness:</strong> 10–20 dGH. Their Congolese origin means they are adapted to moderately hard, slightly alkaline water.</li>
  <li><strong>Ammonia/Nitrite:</strong> 0 ppm — scaleless and highly sensitive to dissolved waste.</li>
  <li><strong>Nitrate:</strong> Below 20 ppm. With the enormous bioload of an adult MBU, maintaining this requires aggressive water changes and massive biological filtration.</li>
</ul>

<h2 id="diet-beak-mbu">Diet and Beak Maintenance</h2>
<p>Like all pufferfish, MBUs have a continuously growing fused beak that must be worn down through hard-shelled food consumption. Given their size, the volume of shellfish required is substantial — budget accordingly.</p>
<p><strong>Essential foods:</strong></p>
<ul>
  <li><strong>Snails:</strong> Large quantities. Many MBU keepers maintain multiple breeding tanks of Mystery Snails, Ramshorn Snails, and Malaysian Trumpet Snails specifically for this purpose.</li>
  <li><strong>Mussels and clams:</strong> Whole, shell-on. Purchase in bulk from seafood markets. An adult MBU can consume 10–15 mussels per feeding session.</li>
  <li><strong>Crab and crayfish:</strong> Whole crayfish are both food and enrichment — the MBU hunts and cracks them open. Purchase live crayfish from bait shops or breed your own.</li>
  <li><strong>Whole shrimp:</strong> Shell-on, heads included. Carotenoid content supports colour.</li>
</ul>
<p><strong>Supplementary foods:</strong> Earthworms, frozen fish fillets, and squid provide variety. Feed 3–4 times per week for adults with hard-shelled items at every meal. Monthly food costs for an adult MBU typically range from $80–$200 depending on sourcing. See our <a href="/care/pufferfish-diet-feeding">pufferfish diet and feeding guide</a>.</p>

<h2 id="personality-interaction">Personality and Interaction</h2>
<p>MBU Pufferfish are widely considered the most interactive freshwater fish in the hobby. Documented behaviours include:</p>
<ul>
  <li>Recognising individual humans and responding differently to their keeper versus strangers</li>
  <li>Swimming to the front of the tank and "begging" when the keeper approaches</li>
  <li>Following the keeper's movement from one end of the tank to the other</li>
  <li>Displaying excitement (colour brightening, rapid swimming) at feeding time</li>
  <li>Investigating new objects placed in the tank with apparent curiosity</li>
  <li>Rearranging décor to personal preference (and stubbornly returning items you move back)</li>
</ul>
<p>This personality is what makes MBU keeping addictive despite the demands. Keepers routinely describe their MBU as "the best pet they've ever had" — a fish with genuine individual character.</p>

<h2 id="tank-mates-mbu">Tank Mates</h2>
<p>MBU Pufferfish are significantly less aggressive than Fahaka Pufferfish, and some individuals coexist with tank mates in sufficiently large systems (700+ gallons). Potential companions include:</p>
<ul>
  <li><strong>Large Bichirs:</strong> Armoured, bottom-dwelling, and occupying a different niche. <em>Polypterus endlicherii</em> is a common choice.</li>
  <li><strong>Large catfish:</strong> Synodontis species from the same Congolese habitat. Armoured and largely nocturnal.</li>
  <li><strong>Large, fast cichlids:</strong> Some keepers successfully house MBUs with large Congolese cichlids in 700+ gallon systems.</li>
</ul>
<p>However, individual MBU temperament varies dramatically. Some tolerate tank mates for years; others become aggressive without warning. Always have a backup plan and monitor continuously. When in doubt, keep the MBU alone — they do not need company and are perfectly content as a solitary fish with human interaction.</p>

<h2 id="health-mbu">Health and Common Issues</h2>
<ul>
  <li><strong>Beak overgrowth:</strong> Same concern as all pufferfish. Prevented by consistent hard-shelled diet. Treatment requires anaesthesia and manual trimming.</li>
  <li><strong>Obesity:</strong> MBUs are voracious and will eat until physically unable to consume more. Strict feeding schedules (3–4 times per week for adults) prevent weight gain.</li>
  <li><strong>Skin infections:</strong> Scaleless skin is vulnerable to bacterial and fungal infection if water quality drops. Maintain impeccable parameters.</li>
  <li><strong>Stress puffing:</strong> MBUs inflate when stressed. While dramatic (an adult MBU fully inflated is the size of a basketball), repeated inflation events can cause internal injury. Minimise stressors.</li>
  <li><strong>Intestinal parasites:</strong> Treat newly acquired specimens prophylactically with praziquantel.</li>
</ul>

<h2 id="commitment-reality">The Commitment Reality</h2>
<p>An MBU Pufferfish is a 10–15+ year commitment involving:</p>
<ul>
  <li>A 500+ gallon tank that weighs over 2,000 kg fully loaded — ground-floor placement only</li>
  <li>150–250 gallons of water changes per week</li>
  <li>$80–$200/month in shellfish food</li>
  <li>$50–$150/month in electricity (heater, filtration, lighting)</li>
  <li>Ongoing maintenance of snail breeding colonies</li>
  <li>Inability to travel without arranging a knowledgeable fish-sitter</li>
</ul>
<p>If these requirements are within your means, an MBU Pufferfish will provide an experience unlike any other aquarium fish. If they are not, the <a href="/care/fahaka-pufferfish-care-guide">Fahaka Pufferfish</a> offers a similar personality in a more manageable (125-gallon) package.</p>
<p>Browse <a href="/exotic-fish/">The Fish Collection's exotic fish collection</a> for MBU availability — these fish are sporadically available and sell quickly.</p>
`,
    faqs: [
      {
        question: 'How big do MBU Pufferfish get?',
        answer:
          'Adult MBU Pufferfish reach 60–75 cm (24–30 inches) and can weigh over 10 kg. They are the largest freshwater pufferfish in the world. Growth is steady — expect a juvenile to reach 30 cm within the first 2 years and continue growing for another 5–8 years.',
      },
      {
        question: 'What size tank does an MBU Pufferfish need?',
        answer:
          'A minimum of 500 gallons (1,900 litres) for an adult. Juveniles can temporarily inhabit a 125-gallon tank, but plan and budget for the adult system from day one. Custom builds are standard at this scale. The tank footprint should be at least 8 × 3 feet.',
      },
      {
        question: 'How much does it cost to keep an MBU Pufferfish?',
        answer:
          'Beyond the initial tank setup ($5,000–$20,000+), monthly costs include $80–$200 for shellfish food, $50–$150 for electricity, and ongoing costs for water treatment and equipment maintenance. The fish itself typically costs $150–$500 depending on size and availability.',
      },
      {
        question: 'Can MBU Pufferfish live with other fish?',
        answer:
          'Some MBU individuals tolerate tank mates in very large systems (700+ gallons). Large Bichirs, Synodontis catfish, and large Congolese cichlids are the most commonly successful companions. However, individual temperament varies — some MBUs are peaceful, others become aggressive unpredictably. Have a backup plan and monitor continuously.',
      },
      {
        question: 'Do MBU Pufferfish recognise their owners?',
        answer:
          'Yes. MBU Pufferfish consistently demonstrate recognition of individual humans — swimming to the front of the tank when their keeper approaches, begging for food, and responding differently to familiar people versus strangers. They are widely regarded as the most interactive freshwater aquarium fish.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Tetraodon mbu',
        url: 'https://www.fishbase.se/summary/Tetraodon-mbu.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Dental Morphology and Feeding Mechanics in Tetraodontidae',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.13887',
        publisher: 'Journal of Fish Biology',
      },
      {
        title: 'Ecology of Tetraodon mbu in the Congo River Basin',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0022098119301212',
        publisher: 'Journal of Great Lakes Research',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish-care-guide', 'pufferfish-diet-feeding', 'best-large-freshwater-fish-aquarium'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 18 — Flowerhorn Cichlid Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Flowerhorn Cichlid Care Guide',
    slug: 'flowerhorn-cichlid-care-guide',
    type: 'care',
    category: 'cichlid',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/flowerhorn-cichlid-care-guide.jpg',
    heroImageAlt:
      'A vibrant Flowerhorn Cichlid with a large kok hump and intense red colouration swimming in a clean aquarium',
    metaTitle: 'Care Guide for Flowerhorn Cichlid | The Fish Collection',
    metaDescription:
      'Flowerhorn Cichlid care sheet: 75-gallon tank minimum, feeding for kok growth and colour, water parameters, and aggression management. Expert tips.',
    quickAnswerQuestion: 'How do you care for a Flowerhorn Cichlid?',
    quickAnswer:
      'Flowerhorn Cichlids require a minimum 75-gallon tank (125 gallons preferred), water temperature 28–31 °C, pH 7.0–8.0, robust filtration (8–10× turnover), and a high-protein diet (40–48 % protein pellets plus frozen shrimp, krill, and bloodworm). They should be kept alone due to extreme territorial aggression. Weekly 30–50 % water changes and mirror stimulation (15–30 min daily) promote kok development and colour intensity.',
    summary:
      'A practical care sheet for Flowerhorn Cichlids covering tank requirements, water parameters, feeding for kok growth and colour enhancement, aggression management, common health issues, and daily maintenance routines.',
    keyFacts: [
      { label: 'Origin', value: 'Man-made hybrid' },
      { label: 'Adult Size', value: '25–35 cm (10–14 in)' },
      { label: 'Min Tank Size', value: '75 gal (285 L)' },
      { label: 'Temperature', value: '28–31 °C (82–88 °F)' },
      { label: 'pH Range', value: '7.0–8.0' },
      { label: 'Lifespan', value: '10–12 years' },
    ],
    headings: [
      { id: 'flowerhorn-care-overview', text: 'Flowerhorn Care Overview', level: 2 },
      { id: 'tank-setup-fh-care', text: 'Tank Setup', level: 2 },
      { id: 'water-params-fh-care', text: 'Water Parameters', level: 2 },
      { id: 'feeding-fh-care', text: 'Feeding for Growth, Colour, and Kok', level: 2 },
      { id: 'kok-stimulation', text: 'Kok Stimulation', level: 2 },
      { id: 'aggression-fh-care', text: 'Aggression Management', level: 2 },
      { id: 'health-fh-care', text: 'Common Health Issues', level: 2 },
      { id: 'daily-routine-fh', text: 'Daily and Weekly Routine', level: 2 },
    ],
    content: `
<h2 id="flowerhorn-care-overview">Flowerhorn Care Overview</h2>
<p>Flowerhorn Cichlids are among the most personable and visually striking aquarium fish — hybrid creations bred for bold colour, massive nuchal humps (koks), and aggressive interactive behaviour. Their care is straightforward for anyone with large-cichlid experience: robust tank, clean warm water, high-protein diet, and respect for their territorial nature. For the full deep-dive into strains, breeding, and competition grading, see our <a href="/blog/flowerhorn-cichlid-guide">complete Flowerhorn guide</a>.</p>

<h2 id="tank-setup-fh-care">Tank Setup</h2>
<ul>
  <li><strong>Tank size:</strong> 75 gallons minimum for a single adult. 125 gallons is recommended for large males (30+ cm). Length of at least 4 feet (122 cm).</li>
  <li><strong>Filtration:</strong> 8–10× turnover. Large canister filter (FX6 or equivalent) or sump. Supplementary sponge filters add biological backup.</li>
  <li><strong>Substrate:</strong> Bare bottom (standard for serious keepers — easiest to clean, shows colour best) or fine gravel. Avoid sand — Flowerhorns dig aggressively and can expose the tank bottom.</li>
  <li><strong>Décor:</strong> Minimal. Large, heavy rocks siliconed in place or on the tank bottom. Flowerhorns rearrange everything — unsecured décor can crack glass. No plants (they destroy them).</li>
  <li><strong>Lid:</strong> Secure. Flowerhorns jump during feeding excitement or when startled.</li>
  <li><strong>Lighting:</strong> Standard LED lighting on a timer (8–10 hours). Some keepers use colour-enhancing LEDs with elevated red/blue spectrum to showcase the fish's coloration.</li>
</ul>

<h2 id="water-params-fh-care">Water Parameters</h2>
<ul>
  <li><strong>Temperature:</strong> 28–31 °C (82–88 °F). Warmer within this range accelerates metabolism and growth.</li>
  <li><strong>pH:</strong> 7.0–8.0. Slightly alkaline, reflecting Central American cichlid ancestry.</li>
  <li><strong>Hardness:</strong> 8–20 dGH. Moderate to hard water.</li>
  <li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
  <li><strong>Nitrate:</strong> Below 20 ppm. Weekly 30–50 % water changes.</li>
</ul>
<p>Flowerhorns are more tolerant of parameter variation than many species on this site, but consistent, clean water produces the best colour and kok development. For broader cichlid water chemistry, see our <a href="/care/cichlid-water-parameters">cichlid water parameters guide</a>.</p>

<h2 id="feeding-fh-care">Feeding for Growth, Colour, and Kok</h2>
<p>Diet directly influences Flowerhorn colour intensity, kok size, and overall health:</p>
<ul>
  <li><strong>Staple:</strong> High-protein cichlid pellets (40–48 % protein) — Grand Sumo, Okiko Platinum, Hikari Cichlid Gold. Feed 2–3 times daily, as much as consumed in 2 minutes.</li>
  <li><strong>Colour enhancers:</strong> Pellets with astaxanthin and canthaxanthin. Frozen shrimp and krill (natural carotenoid sources). Spirulina-enriched foods for blue-green tones.</li>
  <li><strong>Protein supplements:</strong> Frozen bloodworm, mealworms, earthworms, and superworms 2–3 times per week.</li>
  <li><strong>Avoid:</strong> Feeder fish (parasite risk), excess beef heart (fatty liver), foods with artificial dyes.</li>
</ul>
<p>Juveniles: 3–4 meals daily for maximum growth. Adults: 2 meals daily with one fasting day per week.</p>

<h2 id="kok-stimulation">Kok Stimulation</h2>
<p>Kok development is primarily genetic, but environmental stimulation helps maximise potential:</p>
<ul>
  <li><strong>Mirror sessions:</strong> Place a mirror against the tank glass for 15–30 minutes daily. The Flowerhorn flares at its reflection, stimulating blood flow to the kok. Remove after 30 minutes to prevent chronic stress.</li>
  <li><strong>Visual contact with other fish:</strong> Housing adjacent to another Flowerhorn (separated by a divider or separate tanks touching) provides ongoing stimulation.</li>
  <li><strong>Solitary housing:</strong> Flowerhorns kept alone develop larger koks than those with tank mates. Energy directed toward defence in community settings is redirected to growth when solitary.</li>
  <li><strong>Clean, warm water:</strong> Frequent water changes remove growth-inhibiting hormones. Temperature at the upper end (30–31 °C) accelerates metabolic processes including kok growth.</li>
</ul>

<h2 id="aggression-fh-care">Aggression Management</h2>
<ul>
  <li><strong>Keep alone.</strong> The simplest approach. A single Flowerhorn in a 75+ gallon tank is perfectly content.</li>
  <li><strong>Use feeding tongs.</strong> Flowerhorns bite hard and fast. 30+ cm tongs keep fingers clear during feeding.</li>
  <li><strong>Dim lights before maintenance.</strong> Reaching into a Flowerhorn tank during bright lighting can provoke a strike.</li>
  <li><strong>No hands in the tank.</strong> Use a gravel vacuum, magnetic glass cleaner, and tongs to minimise hand exposure. Flowerhorn bites are painful and can break skin.</li>
</ul>

<h2 id="health-fh-care">Common Health Issues</h2>
<ul>
  <li><strong>Hole-in-the-head (HITH):</strong> Pitting lesions around the head and lateral line. Caused by poor water quality and nutritional deficiency (particularly vitamin C and calcium). Treat by improving water quality, enriching diet with vitamin-supplemented foods, and treating with metronidazole if Hexamita is suspected.</li>
  <li><strong>White spot (Ich):</strong> Common after temperature drops or introduction of new fish. Raise temperature to 32 °C and treat with malachite green or formalin-based medication.</li>
  <li><strong>Fin rot:</strong> Bacterial infection of fin edges, usually secondary to poor water quality or injury. Address water quality first; treat with antibacterial medication if needed.</li>
  <li><strong>Kok shrinkage:</strong> The kok can deflate due to illness, stress, poor diet, or advanced age. Ensure optimal husbandry and high-protein feeding. Some shrinkage in older fish (8+ years) is normal.</li>
</ul>

<h2 id="daily-routine-fh">Daily and Weekly Routine</h2>
<ul>
  <li><strong>Morning:</strong> Feed (staple pellets). Brief visual health check — colour, fin condition, appetite.</li>
  <li><strong>Afternoon:</strong> Mirror session (15–30 min). Second feed (variety — frozen shrimp, bloodworm, or krill).</li>
  <li><strong>Evening:</strong> Remove uneaten food if any. Check temperature.</li>
  <li><strong>Weekly:</strong> 30–50 % water change. Test ammonia, nitrite, nitrate, pH. Clean filter media (rotate — never all at once). Inspect heater and equipment.</li>
  <li><strong>Monthly:</strong> Clean or replace filter pads. Inspect lid security. Photograph the fish from standardised angles to track kok and colour development over time.</li>
</ul>
<p>With proper care, Flowerhorn Cichlids live 10–12 years, providing a decade of interactive, visually spectacular fishkeeping. Browse <a href="/exotic-fish/cichlid">The Fish Collection's cichlid collection</a> for select Flowerhorn specimens.</p>
`,
    faqs: [
      {
        question: 'What temperature do Flowerhorns need?',
        answer:
          'Flowerhorn Cichlids thrive at 28–31 °C (82–88 °F). Warmer temperatures within this range promote faster growth and metabolism. Avoid temperatures below 26 °C — Flowerhorns become lethargic and susceptible to disease at lower temperatures.',
      },
      {
        question: 'How do I prevent hole-in-the-head in Flowerhorns?',
        answer:
          'Maintain pristine water quality (nitrate below 20 ppm, zero ammonia/nitrite), feed a varied high-protein diet supplemented with vitamin C, and perform weekly 30–50 % water changes. HITH is almost always caused by poor water quality or nutritional deficiency. Treat active cases with metronidazole if Hexamita is suspected.',
      },
      {
        question: 'Can I keep two Flowerhorns together?',
        answer:
          'Not in the same open space. Flowerhorns will fight to the death in shared territory. If you want multiple Flowerhorns, use a clear divider in a large tank (150+ gallons divided) so they can see but not reach each other. This provides mutual stimulation for kok development while preventing physical combat.',
      },
      {
        question: 'How long do Flowerhorns live?',
        answer:
          'Flowerhorn Cichlids live 10–12 years with proper care. Some exceptional specimens reach 15 years. Lifespan is influenced by genetics, diet quality, water conditions, and stress levels. Consistent, clean water and a varied high-protein diet are the foundations of longevity.',
      },
    ],
    sources: [
      {
        title: 'Cichlid Husbandry: Water Quality and Disease Prevention',
        url: 'https://www.practicalfishkeeping.co.uk/features/cichlid-health/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Nuchal Hump Development and Hormonal Influences in Cichlidae',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848612005807',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Hole-in-the-Head Disease: Etiology and Treatment',
        url: 'https://edis.ifas.ufl.edu/publication/FA156',
        publisher: 'University of Florida IFAS Extension',
      },
    ],
    relatedSlugs: ['flowerhorn-cichlid-guide', 'cichlid-water-parameters', 'best-large-freshwater-fish-aquarium'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 19 — Red Tail Catfish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Red Tail Catfish Care Guide',
    slug: 'red-tail-catfish-care-guide',
    type: 'care',
    category: 'catfish',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/red-tail-catfish-care-guide.jpg',
    heroImageAlt:
      'A large Red Tail Catfish (Phractocephalus hemioliopterus) with its distinctive red caudal fin resting on sandy substrate',
    metaTitle: 'Care Guide for Red Tail Catfish | The Fish Collection',
    metaDescription:
      'Red Tail Catfish care guide: 1,000-gallon adult tank, feeding protocol, water parameters, and the honest reality of keeping Phractocephalus hemioliopterus at.',
    quickAnswerQuestion: 'How do you care for a Red Tail Catfish?',
    quickAnswer:
      'Red Tail Catfish (Phractocephalus hemioliopterus) grow to 100–130 cm (40–50 inches) and require a minimum 1,000-gallon tank or heated indoor pond as adults. Juveniles start in 125-gallon tanks but outgrow them within 1–2 years. They need water temperature 22–26 °C, pH 6.0–7.5, massive filtration, and a diet of fish fillets, shrimp, pellets, and earthworms fed 2–3 times weekly. They will eat anything that fits in their enormous mouth.',
    summary:
      'An honest care guide for the Red Tail Catfish — one of the most commonly impulse-purchased and subsequently rehomed large fish in the hobby — covering the realistic tank requirements, growth rate, feeding, water parameters, temperament, and the commitment required for this magnificent but demanding species.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Phractocephalus hemioliopterus' },
      { label: 'Adult Size', value: '100–130 cm (40–50 in)' },
      { label: 'Min Tank (Adult)', value: '1,000+ gal or pond' },
      { label: 'Temperature', value: '22–26 °C (72–79 °F)' },
      { label: 'pH Range', value: '6.0–7.5' },
      { label: 'Lifespan', value: '20+ years' },
    ],
    headings: [
      { id: 'rtc-honest-overview', text: 'The Honest Overview', level: 2 },
      { id: 'growth-rate-rtc', text: 'Growth Rate and Size', level: 2 },
      { id: 'tank-requirements-rtc', text: 'Tank Requirements', level: 2 },
      { id: 'juvenile-housing', text: 'Juvenile Housing', level: 3 },
      { id: 'adult-housing', text: 'Adult Housing', level: 3 },
      { id: 'water-parameters-rtc', text: 'Water Parameters', level: 2 },
      { id: 'feeding-rtc', text: 'Feeding', level: 2 },
      { id: 'temperament-rtc', text: 'Temperament and Tank Mates', level: 2 },
      { id: 'health-rtc', text: 'Health', level: 2 },
      { id: 'should-you-keep-one', text: 'Should You Keep a Red Tail Catfish?', level: 2 },
    ],
    content: `
<h2 id="rtc-honest-overview">The Honest Overview</h2>
<p>The Red Tail Catfish (<em>Phractocephalus hemioliopterus</em>) is one of the most beautiful and charismatic freshwater fish in the world — and one of the most commonly regretted purchases. Sold as adorable 5 cm (2-inch) juveniles in pet shops for $15–$30, they grow into 100–130 cm (40–50 inch) monsters that need a tank larger than most bedrooms. The gap between what people buy and what they can house is enormous, and RTCs are among the most frequently surrendered fish at public aquariums.</p>
<p>This guide is written not to discourage keeping Red Tail Catfish but to ensure anyone who does so understands exactly what is required. If you have the space, budget, and commitment for a 1,000+ gallon system, the RTC is a magnificent, personable fish that will live 20+ years. If you do not, please choose a different species.</p>

<h2 id="growth-rate-rtc">Growth Rate and Size</h2>
<p>Red Tail Catfish grow extremely rapidly:</p>
<ul>
  <li><strong>Purchase size:</strong> 5–8 cm (2–3 inches)</li>
  <li><strong>6 months:</strong> 20–25 cm (8–10 inches)</li>
  <li><strong>1 year:</strong> 35–45 cm (14–18 inches)</li>
  <li><strong>2 years:</strong> 60–75 cm (24–30 inches)</li>
  <li><strong>3–5 years:</strong> 80–110 cm (32–43 inches)</li>
  <li><strong>Adult (5+ years):</strong> 100–130 cm (40–50 inches), weight 20–50 kg</li>
</ul>
<p>Growth cannot be stunted by tank size. A Red Tail Catfish in a 200-gallon tank does not stop growing — it continues growing, develops spinal deformity from inability to turn, and suffers organ compression. Tank size must match the fish's growth rate, not the other way around.</p>

<h2 id="tank-requirements-rtc">Tank Requirements</h2>

<h3 id="juvenile-housing">Juvenile Housing</h3>
<p>A 125-gallon tank is adequate for juveniles up to approximately 30 cm (12 inches). This provides a growth window of roughly 9–12 months from purchase. During this phase, establish the filtration and water management habits that will scale up with the fish.</p>

<h3 id="adult-housing">Adult Housing</h3>
<p>An adult Red Tail Catfish requires a minimum of 1,000 gallons — realistically, 1,500–2,000 gallons for a fully grown specimen. Many successful keepers use heated indoor ponds (stock tanks, concrete ponds, or above-ground pools with custom filtration) rather than glass or acrylic aquariums, which become prohibitively expensive at this scale.</p>
<ul>
  <li><strong>Minimum footprint:</strong> 10 × 5 feet (300 × 150 cm) — the fish must be able to turn without bending.</li>
  <li><strong>Filtration:</strong> Sump or pond filtration rated for 10,000+ GPH. Moving beds, bog filters, and commercial-grade UV sterilisers are standard.</li>
  <li><strong>Substrate:</strong> Bare bottom or fine sand. RTCs vacuum the substrate with their enormous mouth during feeding, ingesting gravel and potentially suffering impaction.</li>
  <li><strong>Décor:</strong> Minimal. Large, smooth driftwood or PVC tunnels for shelter. RTCs are powerful enough to move rocks and break equipment.</li>
  <li><strong>Lid:</strong> RTCs can splash water several feet during feeding. Secure covers prevent water loss and protect nearby electrical equipment.</li>
</ul>

<h2 id="water-parameters-rtc">Water Parameters</h2>
<ul>
  <li><strong>Temperature:</strong> 22–26 °C (72–79 °F). Slightly cooler than many tropical species — RTCs originate from deep river channels.</li>
  <li><strong>pH:</strong> 6.0–7.5. Adaptable, but slightly acidic to neutral is preferred.</li>
  <li><strong>Hardness:</strong> 2–15 dGH.</li>
  <li><strong>Ammonia/Nitrite:</strong> 0 ppm.</li>
  <li><strong>Nitrate:</strong> Below 40 ppm; below 20 ppm preferred.</li>
</ul>
<p>The sheer volume of waste produced by an adult RTC is immense. Weekly water changes of 30–50 % in a 1,000-gallon system means replacing 300–500 gallons of water per week. Automated water-change systems (continuous drip-and-drain) are virtually mandatory for long-term RTC keeping.</p>

<h2 id="feeding-rtc">Feeding</h2>
<p>Red Tail Catfish are opportunistic predators with an astonishingly large gape — they will attempt to eat anything that fits in their mouth, including tank mates, heaters, and PVC fittings.</p>
<p><strong>Appropriate foods:</strong></p>
<ul>
  <li>Frozen fish fillets (tilapia, pollock, smelt) — the dietary staple</li>
  <li>Whole frozen shrimp and prawns</li>
  <li>Earthworms and nightcrawlers (excellent nutrition)</li>
  <li>High-quality catfish or predator pellets (Hikari Massivore, Northfin Predator)</li>
  <li>Frozen squid and mussels (occasional variety)</li>
</ul>
<p><strong>Feeding schedule:</strong> Juveniles daily. Sub-adults (30–60 cm) 3–4 times weekly. Adults (60+ cm) 2–3 times weekly. RTCs have slow metabolisms for their size and are prone to obesity. A fasting day between feeds is recommended for adults.</p>
<p><strong>Avoid:</strong> Live feeder fish (parasite and disease vector), mammalian meats (beef, chicken — too high in saturated fat), and anything your hand-fed RTC might confuse with food (which is everything). Use long feeding tongs — an adult RTC bite, while not sharp-toothed, has crushing force. For predator feeding protocols, see our <a href="/care/predatory-fish-feeding-guide">predatory fish feeding guide</a>.</p>

<h2 id="temperament-rtc">Temperament and Tank Mates</h2>
<p>Red Tail Catfish are not aggressive in the conventional sense — they do not attack or chase tank mates. They are, however, indiscriminate eaters. Anything that fits in the mouth (which, for an adult, includes fish up to 30–40 cm) will be consumed. They are gentle giants with an enormous appetite.</p>
<p>In systems of 1,500+ gallons, tank mates must be too large to eat:</p>
<ul>
  <li><strong>Large Arowana:</strong> <a href="/exotic-fish/arowana">Silver Arowana</a> of similar body length are classic RTC companions in pond-style setups.</li>
  <li><strong>Large Bichirs:</strong> <em>Polypterus endlicherii</em> at 50+ cm are generally safe.</li>
  <li><strong>Pacu:</strong> Large enough and fast enough to coexist.</li>
  <li><strong>Other large catfish:</strong> Tiger Shovelnose, Giraffe Catfish of similar size.</li>
</ul>
<p>Never mix RTCs with fish even slightly small enough to eat. The phrase "if it fits, it sits" applies — the RTC will attempt to swallow it.</p>

<h2 id="health-rtc">Health</h2>
<p>Red Tail Catfish are remarkably hardy. Common issues:</p>
<ul>
  <li><strong>Obesity:</strong> The primary health concern. Overfed RTCs develop fatty liver disease. Maintain strict feeding schedules with regular fasting.</li>
  <li><strong>Substrate impaction:</strong> RTCs vacuum gravel during feeding. Use bare bottom or fine sand only.</li>
  <li><strong>Bacterial infections:</strong> Usually secondary to poor water quality in undersized systems. Maintain adequate filtration and water change schedules.</li>
  <li><strong>Injury from poor housing:</strong> RTCs in undersized tanks develop spinal deformity, fin damage from wall contact, and chronic stress. The solution is appropriate housing, not medication.</li>
</ul>

<h2 id="should-you-keep-one">Should You Keep a Red Tail Catfish?</h2>
<p>Ask yourself honestly:</p>
<ul>
  <li>Can I provide a 1,000+ gallon system (or indoor heated pond) within 2 years of purchase?</li>
  <li>Can I perform 300–500 gallon water changes weekly for 20+ years?</li>
  <li>Can I budget $100–$300/month for food and electricity for this single fish?</li>
  <li>Am I prepared for a pet that will outlive most dogs?</li>
</ul>
<p>If the answer to all four is yes, a Red Tail Catfish will reward you with decades of interaction with one of the most magnificent freshwater fish on Earth. If any answer is no, consider the hundreds of other stunning species that thrive in standard-sized aquariums. Browse <a href="/exotic-fish/">The Fish Collection's collection</a> for species suited to every tank size and experience level.</p>
`,
    faqs: [
      {
        question: 'How fast do Red Tail Catfish grow?',
        answer:
          'Extremely fast. Expect 20–25 cm (8–10 inches) at 6 months, 35–45 cm (14–18 inches) at 1 year, and 60–75 cm (24–30 inches) at 2 years. Adults reach 100–130 cm (40–50 inches). Growth cannot be stunted by tank size — inadequate housing causes deformity, not smaller fish.',
      },
      {
        question: 'Can a Red Tail Catfish live in a 200-gallon tank?',
        answer:
          'Only temporarily as a juvenile. An adult Red Tail Catfish requires a minimum 1,000 gallons. Keeping an adult in a 200-gallon tank causes spinal deformity, organ compression, and chronic stress. If you cannot commit to the adult tank size, do not purchase this species.',
      },
      {
        question: 'What do Red Tail Catfish eat?',
        answer:
          'Frozen fish fillets (tilapia, pollock, smelt), frozen shrimp, earthworms, and high-quality predator pellets. Feed juveniles daily, adults 2–3 times weekly with fasting days. Avoid feeder fish and mammalian meats. RTCs will eat anything that fits in their very large mouth, including tank mates.',
      },
      {
        question: 'How long do Red Tail Catfish live?',
        answer:
          'Red Tail Catfish live 20+ years in captivity with proper care. Some specimens have exceeded 30 years. This is a commitment comparable to adopting a large dog — plan accordingly.',
      },
      {
        question: 'Are Red Tail Catfish aggressive?',
        answer:
          'RTCs are not conventionally aggressive — they do not chase or attack. However, they are indiscriminate eaters with an enormous gape. Any fish small enough to fit in their mouth (up to 30–40 cm for large adults) will be eaten. Tank mates must be too large to consume.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Phractocephalus hemioliopterus',
        url: 'https://www.fishbase.se/summary/Phractocephalus-hemioliopterus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Growth Rates of Large Pimelodid Catfish in Captivity',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848616301478',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Welfare Assessment of Large Predatory Fish in Private Aquaria',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1557506320300343',
        publisher: 'Journal of Exotic Pet Medicine',
      },
    ],
    relatedSlugs: ['predatory-fish-feeding-guide', 'best-large-freshwater-fish-aquarium', 'exotic-fish-tank-setup'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 20 — Dragon Goby Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Dragon Goby Care Guide',
    slug: 'dragon-goby-care-guide',
    type: 'care',
    category: 'goby',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-03-26',
    heroImage: '/images/care/dragon-goby-care-guide.jpg',
    heroImageAlt:
      'A Dragon Goby (Gobioides broussonnetii) with iridescent purple-blue scales partially buried in sandy substrate',
    metaTitle: 'Care Guide for Dragon Goby | Water, Tank & Diet | The Fish Collection',
    metaDescription:
      'Dragon Goby care guide: brackish water setup, sand substrate, gentle feeding, and tank mates. Expert guide for Gobioides broussonnetii from The Fish Collection.',
    quickAnswerQuestion: 'How do you care for a Dragon Goby?',
    quickAnswer:
      'Dragon Gobies (Gobioides broussonnetii) require a minimum 75-gallon brackish aquarium with specific gravity 1.005–1.015, water temperature 24–28 °C, pH 7.5–8.5, fine sandy substrate for burrowing, and a diet of sinking pellets, frozen bloodworm, brine shrimp, and algae wafers. Despite their fearsome appearance, they are gentle filter-feeders that must be housed with peaceful tank mates to avoid being outcompeted for food.',
    summary:
      'A complete care guide for the Dragon Goby (Violet Goby) covering brackish water setup, sand substrate requirements, the gentle feeding approach this misunderstood species needs, compatible tank mates, common husbandry mistakes, and long-term care.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Gobioides broussonnetii' },
      { label: 'Adult Size', value: '35–60 cm (14–24 in)' },
      { label: 'Min Tank Size', value: '75 gal (285 L)' },
      { label: 'Salinity', value: 'Brackish (SG 1.005–1.015)' },
      { label: 'Temperature', value: '24–28 °C (75–82 °F)' },
      { label: 'Lifespan', value: '8–10 years' },
    ],
    headings: [
      { id: 'dragon-goby-overview', text: 'Understanding the Dragon Goby', level: 2 },
      { id: 'brackish-tank-setup', text: 'Brackish Tank Setup', level: 2 },
      { id: 'salinity-management', text: 'Salinity Management', level: 3 },
      { id: 'substrate-requirements', text: 'Substrate Requirements', level: 3 },
      { id: 'water-parameters-dg', text: 'Water Parameters', level: 2 },
      { id: 'feeding-dragon-goby', text: 'Feeding the Dragon Goby', level: 2 },
      { id: 'tank-mates-dg', text: 'Tank Mates', level: 2 },
      { id: 'health-dg', text: 'Health and Common Issues', level: 2 },
      { id: 'common-mistakes-dg', text: 'Common Mistakes', level: 2 },
    ],
    content: `
<h2 id="dragon-goby-overview">Understanding the Dragon Goby</h2>
<p>The Dragon Goby (<em>Gobioides broussonnetii</em>), also called the Violet Goby, is one of the most misunderstood fish in the aquarium hobby. Its appearance — an elongated, eel-like body up to 60 cm long, tiny vestigial eyes, enormous gaping mouth lined with small teeth, and iridescent purple-blue scales — suggests a fearsome predator. In reality, it is a gentle, nearly blind filter-feeder that sifts sand for microorganisms and organic detritus. The contrast between appearance and behaviour is what makes this species so fascinating.</p>
<p>Dragon Gobies are brackish water fish native to estuaries and coastal lagoons from the southeastern United States through the Caribbean and down to Brazil. They are frequently sold in freshwater sections of pet stores with no salinity guidance — one of the primary reasons for poor survival rates in captivity. With proper brackish conditions, a sandy substrate, and appropriate feeding, Dragon Gobies are hardy fish that can live 8–10 years.</p>

<h2 id="brackish-tank-setup">Brackish Tank Setup</h2>

<h3 id="salinity-management">Salinity Management</h3>
<p>Dragon Gobies require <strong>brackish water</strong> — a mix of freshwater and marine salt water. Target specific gravity of <strong>1.005–1.015</strong> (approximately 8–20 ppt salinity). Use marine salt mix (Instant Ocean, Red Sea, or similar reef-grade salt), not freshwater aquarium salt or table salt. Dissolve the salt in the replacement water before adding to the tank — never add dry salt directly.</p>
<p>A refractometer or digital salinity meter is essential for accurate measurement. Hydrometer-style swing-arm testers are less accurate and prone to mineral buildup affecting readings.</p>
<p>Dragon Gobies can survive in freshwater temporarily but will not thrive long-term. Chronic freshwater exposure suppresses immune function, reduces activity, and shortens lifespan significantly. Conversely, full marine conditions (SG 1.024+) are too saline — Dragon Gobies inhabit the brackish transition zone, not open ocean.</p>

<h3 id="substrate-requirements">Substrate Requirements</h3>
<p>Fine sand is <strong>mandatory</strong>. Dragon Gobies feed by scooping mouthfuls of sand, filtering out edible particles, and expelling the sand through their gill openings. They also burrow, creating tunnels and hiding under sand banks. Without fine sand, they cannot feed naturally and lose their primary stress-relief behaviour.</p>
<p>Use pool filter sand, play sand, or fine aragonite sand. Grain size should be 0.5–2 mm — fine enough to pass through the gills without damage. Depth of 5–8 cm (2–3 inches) allows burrowing. Avoid gravel, crushed coral (too coarse), and bare bottoms.</p>

<h2 id="water-parameters-dg">Water Parameters</h2>
<ul>
  <li><strong>Temperature:</strong> 24–28 °C (75–82 °F)</li>
  <li><strong>Salinity:</strong> SG 1.005–1.015</li>
  <li><strong>pH:</strong> 7.5–8.5 (naturally buffered by marine salt mix)</li>
  <li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
  <li><strong>Nitrate:</strong> Below 20 ppm</li>
</ul>
<p>The marine salt mix provides natural pH buffering, making brackish tanks inherently more stable than pure freshwater. Weekly 25–30 % water changes with pre-mixed brackish replacement water maintain salinity and water quality. Always match salinity of replacement water to the tank — salinity fluctuations stress Dragon Gobies and their tank mates.</p>
<p>Filtration should be rated for the tank volume with media that tolerates brackish conditions. Standard canister filters and HOB filters work well. Avoid copper-based medications in brackish systems with invertebrates.</p>

<h2 id="feeding-dragon-goby">Feeding the Dragon Goby</h2>
<p>This is where most Dragon Goby keepers fail. Despite their enormous mouth, Dragon Gobies cannot eat large food items. They are filter-feeders and micro-predators that consume tiny organisms sifted from sand, detritus, and biofilm. In captivity, food must be small, sinking, and delivered where the goby can find it — remember, Dragon Gobies are nearly blind and locate food by scent and vibration.</p>
<p><strong>Best foods:</strong></p>
<ul>
  <li><strong>Sinking pellets:</strong> Small, slow-sinking granules (Hikari Sinking Wafers, NLS Small Fish Formula). Crush pellets to 1–2 mm particle size if they are too large.</li>
  <li><strong>Frozen bloodworm:</strong> Sinks to the substrate where Dragon Gobies feed. Cut frozen cubes into smaller portions to prevent waste.</li>
  <li><strong>Frozen brine shrimp:</strong> Small particles that settle into the sand for natural sifting behaviour.</li>
  <li><strong>Algae wafers:</strong> Broken into small pieces. Dragon Gobies are omnivorous and consume algal matter.</li>
  <li><strong>Repashy gel foods:</strong> Spread thinly on rocks or the tank bottom for slow grazing. Soilent Green and Community Plus are well-suited.</li>
</ul>
<p><strong>Feeding method:</strong> Feed after lights-out or during dim lighting, when Dragon Gobies are most active. Target-feed by placing food directly on the substrate near the goby's hiding spot using a turkey baster or pipette. Dragon Gobies are slow feeders — if housed with faster fish, they will starve unless target-fed.</p>
<p>Feed daily. Dragon Gobies have high metabolisms relative to their apparent inactivity and lose condition quickly if underfed.</p>

<h2 id="tank-mates-dg">Tank Mates</h2>
<p>Dragon Goby tank mate selection is critical because of the goby's passive feeding behaviour. Any aggressive or fast-feeding tank mate will outcompete the goby for food, leading to starvation.</p>
<p><strong>Compatible species (brackish-tolerant):</strong></p>
<ul>
  <li><strong>Mollies:</strong> The ideal Dragon Goby companion. Mollies thrive in brackish water, are peaceful, and occupy the mid-to-upper water column — a different feeding zone than the bottom-dwelling goby.</li>
  <li><strong>Bumblebee Gobies:</strong> Small, peaceful brackish gobies that occupy a different niche (they are micro-predators hunting tiny prey near rock surfaces).</li>
  <li><strong>Knight Gobies:</strong> Brackish-tolerant and generally peaceful.</li>
  <li><strong>Brackish-tolerant livebearers:</strong> Guppies and Endler's (at low brackish levels), Swordtails.</li>
  <li><strong>Nerite Snails:</strong> Excellent algae control, fully brackish-tolerant.</li>
</ul>
<p><strong>Avoid:</strong> Aggressive cichlids, large predatory fish (Dragon Gobies are prey, not predators despite their appearance), and any fast-feeding species that will intercept food before it reaches the substrate.</p>

<h2 id="health-dg">Health and Common Issues</h2>
<ul>
  <li><strong>Starvation:</strong> The most common cause of Dragon Goby death. Owners assume the goby is feeding when it is not. Monitor body condition — a healthy Dragon Goby has a rounded belly. A thin, concave belly indicates starvation. Target-feed daily.</li>
  <li><strong>Freshwater syndrome:</strong> Dragon Gobies kept in freshwater develop suppressed immunity, lethargy, fin deterioration, and shortened lifespan. If you purchased a Dragon Goby from a freshwater tank, acclimate it to brackish over 1–2 weeks by gradually raising salinity.</li>
  <li><strong>Skin abrasion:</strong> Caused by coarse substrate (gravel, crushed coral). Switch to fine sand immediately if abrasion is observed.</li>
  <li><strong>Bacterial infections:</strong> Usually secondary to poor water quality or stress. Maintain clean brackish conditions and address stressors.</li>
</ul>

<h2 id="common-mistakes-dg">Common Mistakes</h2>
<ul>
  <li><strong>Keeping in freshwater.</strong> Dragon Gobies need brackish water (SG 1.005–1.015) to thrive. Freshwater keeps them alive temporarily but shortens their life dramatically.</li>
  <li><strong>Using gravel substrate.</strong> Dragon Gobies need fine sand for feeding and burrowing. Gravel prevents natural behaviour and can damage their gills during sand-sifting attempts.</li>
  <li><strong>Assuming they are predators.</strong> Despite the fearsome appearance, Dragon Gobies are gentle filter-feeders that cannot eat large food items. Do not house with aggressive fish or expect predatory behaviour.</li>
  <li><strong>Not target-feeding.</strong> In any community tank, Dragon Gobies will be outcompeted for food unless food is placed directly on the substrate near them during low-light periods.</li>
  <li><strong>Tank too small.</strong> Dragon Gobies reach 35–60 cm. A 75-gallon tank is the minimum for a single adult. They are more active than their occasional burrowed-in-sand appearance suggests.</li>
</ul>
<p>With proper brackish conditions, sandy substrate, and attentive feeding, the Dragon Goby is a fascinating, long-lived species that defies first impressions. Their bizarre appearance, gentle nature, and unique behaviour make them unlike anything else in the aquarium hobby. Browse <a href="/exotic-fish/">The Fish Collection's exotic fish collection</a> for current availability.</p>
`,
    faqs: [
      {
        question: 'Do Dragon Gobies need salt water?',
        answer:
          'Dragon Gobies need brackish water — a mix of fresh and marine salt water at specific gravity 1.005–1.015. Use marine salt mix (Instant Ocean or similar), not freshwater aquarium salt. They can survive temporarily in freshwater but will not thrive long-term. Full marine conditions are too saline.',
      },
      {
        question: 'Are Dragon Gobies aggressive?',
        answer:
          'No. Despite their fearsome appearance — large mouth, teeth, eel-like body — Dragon Gobies are gentle filter-feeders that sift sand for microorganisms. They are peaceful with all tank mates and are more likely to be bullied than to bully. House with other peaceful, brackish-tolerant species.',
      },
      {
        question: 'What do Dragon Gobies eat?',
        answer:
          'Small, sinking foods: crushed pellets, frozen bloodworm, frozen brine shrimp, algae wafers, and gel foods. Dragon Gobies filter-feed by scooping sand and cannot eat large food items. Target-feed by placing food on the substrate near the goby during dim lighting for best results.',
      },
      {
        question: 'How big do Dragon Gobies get?',
        answer:
          'Dragon Gobies reach 35–60 cm (14–24 inches) in captivity. Growth depends on husbandry quality — properly kept brackish-water specimens reach full size; freshwater-kept individuals often remain smaller due to chronic stress. A 75-gallon tank is the minimum for an adult.',
      },
      {
        question: 'Can Dragon Gobies live in freshwater?',
        answer:
          'Dragon Gobies can survive in freshwater temporarily but will not thrive. Chronic freshwater exposure suppresses immune function, reduces activity, fades colouration, and shortens lifespan. Transition to brackish water (SG 1.005–1.015) over 1–2 weeks for long-term health.',
      },
    ],
    sources: [
      {
        title: 'Fishbase: Gobioides broussonnetii',
        url: 'https://www.fishbase.se/summary/Gobioides-broussonnetii.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Salinity Tolerance and Osmoregulation in Gobiidae',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1095643316301416',
        publisher: 'Comparative Biochemistry and Physiology',
      },
      {
        title: 'Feeding Ecology of Estuarine Gobies in Brackish Habitats',
        url: 'https://link.springer.com/article/10.1007/s10641-017-0621-1',
        publisher: 'Environmental Biology of Fishes',
      },
    ],
    relatedSlugs: ['best-large-freshwater-fish-aquarium', 'exotic-fish-tank-setup'],
  },

  // ──────────────────────────────────────────────
  // Care Guide — Axolotl Tank Setup
  // ──────────────────────────────────────────────
  {
    title: 'Axolotl Tank Setup: Complete Guide',
    slug: 'axolotl-tank-setup',
    type: 'care',
    category: 'axolotl',
    topicCategory: 'tank-setup',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/care/axolotl-tank-setup.jpg',
    heroImageAlt:
      'A fully cycled 40-gallon axolotl tank with fine sand substrate, live plants, dim lighting, and a sponge filter',
    metaTitle:
      'Axolotl Tank Setup Guide | Temperature, Filtration & Substrate | The Fish Collection',
    metaDescription:
      'Expert axolotl tank setup guide. Cold-water requirements (60–68 °F), sponge filtration, safe substrate, dim lighting, and cycling instructions for Ambystoma.',
    quickAnswerQuestion: 'What tank setup does an axolotl need?',
    quickAnswer:
      'Axolotls need a minimum 20-gallon (75 L) tank with cold water maintained at 60–68 °F (16–20 °C) — no heater required, and a chiller may be necessary in warm climates. Use a sponge filter or other gentle-flow filtration, fine sand or bare-bottom substrate (never gravel — axolotls swallow it, causing fatal impaction), dim lighting, and plenty of hides. The tank must be fully cycled before introducing any axolotl.',
    summary:
      'A specification-driven guide to building the optimal cold-water habitat for axolotls, covering tank dimensions, temperature control, filtration, safe substrates, lighting, live plants, cycling, and décor.',
    keyFacts: [
      { label: 'Minimum Tank Size', value: '20 gal (75 L)' },
      { label: 'Temperature', value: '60–68 °F (16–20 °C)' },
      { label: 'pH Range', value: '6.5–8.0' },
      { label: 'Filtration', value: 'Gentle / Sponge filter' },
      { label: 'Substrate', value: 'Fine sand or bare bottom' },
      { label: 'Lighting', value: 'Low / Dim' },
    ],
    headings: [
      { id: 'why-setup-matters-axolotl', text: 'Why Tank Setup Matters for Axolotls', level: 2 },
      { id: 'tank-size-and-dimensions', text: 'Tank Size and Dimensions', level: 2 },
      { id: 'single-axolotl-tank', text: 'Single Axolotl Requirements', level: 3 },
      { id: 'multiple-axolotls', text: 'Housing Multiple Axolotls', level: 3 },
      { id: 'cold-water-requirements', text: 'Cold-Water Requirements', level: 2 },
      { id: 'why-cold-water-is-critical', text: 'Why Cold Water Is Critical', level: 3 },
      { id: 'cooling-methods', text: 'Cooling Methods', level: 3 },
      { id: 'filtration', text: 'Filtration', level: 2 },
      { id: 'sponge-filters', text: 'Sponge Filters: The Gold Standard', level: 3 },
      { id: 'other-filtration-options', text: 'Other Filtration Options', level: 3 },
      { id: 'substrate', text: 'Substrate: The Most Common Mistake', level: 2 },
      { id: 'lighting', text: 'Lighting', level: 2 },
      { id: 'live-plants', text: 'Live Plants for Axolotl Tanks', level: 2 },
      { id: 'hides-and-decor', text: 'Hides and Décor', level: 2 },
      { id: 'cycling-the-tank', text: 'Cycling the Tank', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters and Maintenance', level: 2 },
    ],
    content: `
<h2 id="why-setup-matters-axolotl">Why Tank Setup Matters for Axolotls</h2>
<p>Axolotls (<em>Ambystoma mexicanum</em>) are neotenic salamanders — they retain their larval form throughout life, keeping their feathery external gills and remaining fully aquatic. This makes them extraordinarily sensitive to environmental conditions that most fish tolerate without issue. Temperature swings, strong currents, bright lights, and inappropriate substrates do not merely stress an axolotl — they cause gill deterioration, impaction, fungal infection, and premature death.</p>
<p>The axolotl is critically endangered in the wild, surviving only in a shrinking network of canals in Xochimilco, Mexico City. Every captive specimen carries conservation significance. Building a proper habitat is not optional — it is a responsibility. I have reviewed hundreds of axolotl setups over the years, and the overwhelming majority of health problems I encounter trace back to one of three infrastructure failures: water too warm, gravel substrate, or an uncycled tank. All three are entirely preventable.</p>

<h2 id="tank-size-and-dimensions">Tank Size and Dimensions</h2>

<h3 id="single-axolotl-tank">Single Axolotl Requirements</h3>
<p>The absolute minimum for a single adult axolotl is 20 gallons (75 litres). A 20-gallon long tank (30 × 12 × 12 inches / 76 × 30 × 30 cm) is ideal because it prioritises floor space over height — axolotls are bottom-dwellers that rarely swim to the surface except to gulp air occasionally. A tall, narrow tank wastes volume that the animal will never use.</p>
<p>However, I strongly recommend a 40-gallon breeder (36 × 18 × 16 inches) as the practical starting point. The extra volume provides significantly more thermal stability — critical when your target temperature range is only 8 degrees wide — and gives the axolotl room to exhibit natural foraging behaviour rather than simply sitting in a corner.</p>

<h3 id="multiple-axolotls">Housing Multiple Axolotls</h3>
<p>Add 10 gallons per additional axolotl as an absolute minimum, though 20 gallons per animal is far more practical. Axolotls are not social — they do not benefit from companionship and will bite each other's gills and limbs, particularly when crowded or underfed. While they can regenerate lost limbs, repeated amputation is stressful and diverts energy from growth and immune function.</p>
<p>If housing multiple axolotls together, ensure each animal has its own hide, maintain impeccable water quality, and feed generously to reduce competition-driven aggression. Separate immediately if persistent nipping occurs.</p>

<h2 id="cold-water-requirements">Cold-Water Requirements</h2>

<h3 id="why-cold-water-is-critical">Why Cold Water Is Critical</h3>
<p>This is the single most important factor in axolotl husbandry, and the one most frequently ignored by new keepers. <strong>Axolotls require water temperatures between 60–68 °F (16–20 °C).</strong> They can tolerate brief dips to 55 °F (13 °C) and brief exposure to 72 °F (22 °C), but sustained temperatures above 68 °F accelerate metabolism beyond what their physiology can support, suppress immune function, promote bacterial and fungal infections, and reduce dissolved oxygen to dangerously low levels.</p>
<p>At 75 °F (24 °C) and above, an axolotl is in active heat stress. You will see forward-curled gill filaments, reduced appetite, increased surface gulping, and within days to weeks, opportunistic infections (particularly <em>Saprolegnia</em> fungus and columnaris bacteria) that are extremely difficult to treat in a compromised animal. Temperature kills more pet axolotls than any other single factor.</p>
<p><strong>You do not need a heater.</strong> In fact, a heater in an axolotl tank is actively dangerous. If your home ambient temperature stays below 68 °F year-round, you need nothing more than the room itself. Most keepers, however, live in spaces that exceed this threshold during summer.</p>

<h3 id="cooling-methods">Cooling Methods</h3>
<p>If your room temperature exceeds 68 °F at any point during the year, you need an active cooling strategy:</p>
<ul>
  <li><strong>Aquarium chiller:</strong> The most reliable method. A 1/10 HP chiller is sufficient for a 20–40 gallon tank. Units cost $150–$400 but provide precise, thermostat-controlled cooling regardless of ambient conditions. This is the only method I recommend without reservation.</li>
  <li><strong>Clip-on fans:</strong> Evaporative cooling fans mounted on the tank rim can lower water temperature by 2–5 °F. Effective as supplementary cooling in mildly warm rooms (70–74 °F ambient) but unreliable as a primary solution. They also increase evaporation rate significantly — expect to top off frequently.</li>
  <li><strong>Frozen water bottles:</strong> The emergency method. Freeze 500 ml bottles and float them in the tank. Crude but effective for short-term situations. The problem: temperature fluctuates wildly as the ice melts. Axolotls tolerate cold better than heat, but rapid swings in either direction cause stress. This is a stopgap, not a solution.</li>
  <li><strong>Air conditioning:</strong> If your home is air-conditioned to 66–68 °F, the tank will maintain temperature passively. This is the simplest approach for keepers in warm climates — though dedicated to running air conditioning 24/7 for a salamander, it is not the most energy-efficient option.</li>
</ul>

<h2 id="filtration">Filtration</h2>

<h3 id="sponge-filters">Sponge Filters: The Gold Standard</h3>
<p>Axolotls produce a substantial bioload relative to their size — comparable to goldfish — but they are extremely intolerant of water current. Their feathery gills act as drag surfaces, and strong flow forces the animal to brace constantly against the current, leading to chronic stress, gill deterioration, and refusal to eat.</p>
<p>Sponge filters solve both problems simultaneously. They provide excellent biological filtration (the porous sponge surface hosts vast colonies of nitrifying bacteria), adequate mechanical filtration for particulate matter, and produce only a gentle stream of rising bubbles — no directional current that would buffet the axolotl.</p>
<p>For a 20-gallon tank, a single large sponge filter (rated for 40+ gallons) is sufficient. For a 40-gallon tank, use two sponge filters at opposite ends, or a single double-sponge unit. Run them on an air pump with an adjustable valve so you can dial the flow down to a gentle bubble stream.</p>

<h3 id="other-filtration-options">Other Filtration Options</h3>
<p>Hang-on-back (HOB) filters and canister filters can work, but they require modification to reduce output flow. A canister filter with a spray bar aimed at the back wall of the tank diffuses the current effectively. An HOB filter can be baffled with a pre-filter sponge on the intake and a baffle (cut from a plastic bottle or purpose-made) on the output to break the waterfall effect.</p>
<p>Under-gravel filters are completely unsuitable — they require gravel substrate, which is dangerous for axolotls, and they create upward flow through the substrate that disturbs bottom-dwelling animals.</p>

<h2 id="substrate">Substrate: The Most Common Mistake</h2>
<p><strong>Never use gravel in an axolotl tank.</strong> This cannot be overstated. Axolotls feed by opening their mouths and creating a vacuum to suck in food — they are obligate suction feeders. Gravel in the 3–15 mm range is the perfect size to be inhaled during feeding attempts. Ingested gravel causes gastrointestinal impaction, a condition that is painful, often fatal, and entirely preventable.</p>
<p>Your two safe options:</p>
<ul>
  <li><strong>Bare bottom:</strong> The safest choice. Nothing to ingest, easiest to clean, and allows you to spot waste and uneaten food immediately. The downside: axolotls struggle to grip smooth glass or acrylic surfaces, which can cause stress and "floating" behaviour as they cannot anchor themselves. Mitigate by using a textured tile or slate base that provides grip.</li>
  <li><strong>Fine sand:</strong> Sand with a grain size below 1 mm (play sand, pool filter sand) passes safely through the digestive tract if swallowed. It provides a natural appearance, gives the axolotl grip for walking, and supports beneficial bacteria. Use a 1–2 cm layer — deeper beds trap waste and create anaerobic pockets. Siphon sand weekly during water changes to remove buried detritus.</li>
</ul>
<p>Large river rocks (larger than the axolotl's head, so they physically cannot be swallowed) are safe as accent pieces but do not serve as a substrate replacement.</p>

<h2 id="lighting">Lighting</h2>
<p>Axolotls are photosensitive. They lack eyelids entirely and have evolved in turbid, shaded waterways where direct sunlight rarely penetrates. Bright aquarium lighting causes visible stress: the animal will hide constantly, refuse food, and may develop pale, washed-out colouration as a chronic stress response.</p>
<p>Keep lighting dim. A low-output LED strip on a timer (6–8 hours daily) provides enough light for plant growth and viewing without causing distress. If your tank receives ambient room light, additional lighting may be unnecessary. Avoid placing the tank near windows where direct sunlight can overheat the water and stress the animal simultaneously.</p>
<p>If you want to observe your axolotl's natural behaviour — foraging, exploring, gill flaring — watch during the evening or under very subdued light. They are most active in dim conditions and at night.</p>

<h2 id="live-plants">Live Plants for Axolotl Tanks</h2>
<p>Live plants are a valuable addition to axolotl tanks: they absorb nitrate, provide cover, oxygenate the water, and create a naturalistic environment. The challenge is finding species that tolerate the cold temperatures axolotls require.</p>
<p>Recommended cold-tolerant species:</p>
<ul>
  <li><strong>Java Fern (<em>Microsorum pteropus</em>):</strong> Thrives at 60–80 °F, attaches to driftwood and rocks, low-light tolerant. The ideal axolotl tank plant.</li>
  <li><strong>Anubias (<em>Anubias barteri</em>):</strong> Nearly indestructible, grows in low light and cold water. Attach to hardscape — do not bury the rhizome.</li>
  <li><strong>Java Moss (<em>Taxiphyllum barbieri</em>):</strong> Grows in virtually any condition. Provides excellent cover and biofilm for beneficial bacteria.</li>
  <li><strong>Elodea / Anacharis (<em>Egeria densa</em>):</strong> A fast-growing stem plant that thrives in cold water and absorbs nitrate aggressively. Can be planted or left floating.</li>
  <li><strong>Marimo Moss Balls (<em>Aegagropila linnaei</em>):</strong> Naturally found in cold lakes. They require no planting, absorb nutrients, and axolotls enjoy pushing them around the tank.</li>
  <li><strong>Hornwort (<em>Ceratophyllum demersum</em>):</strong> Extremely cold-tolerant floating or anchored plant. Fast-growing and excellent at nutrient absorption.</li>
</ul>
<p>Avoid tropical plants that require temperatures above 72 °F — they will languish and decay in axolotl-appropriate conditions, fouling the water.</p>

<h2 id="hides-and-decor">Hides and Décor</h2>
<p>Axolotls are secretive animals that spend much of the day hiding. Providing multiple hides is essential for reducing stress and encouraging natural behaviour. Each axolotl should have at least two hides — one at each end of the tank — so it can choose its preferred resting spot.</p>
<p>Suitable hides include:</p>
<ul>
  <li>Ceramic aquarium caves and tunnels (ensure the opening is large enough that the axolotl cannot become wedged)</li>
  <li>PVC pipes (food-safe, cut to appropriate length, smooth any rough edges)</li>
  <li>Terracotta pots laid on their side</li>
  <li>Slate or stone arrangements forming overhangs</li>
  <li>Driftwood with natural crevices (ensure no sharp edges)</li>
</ul>
<p><strong>Avoid all sharp or abrasive décor.</strong> Axolotl skin is delicate and lacks the protective scales of fish. Rough rocks, jagged driftwood, and plastic plants with hard edges can cause lacerations that become infection sites. If you use artificial plants, choose silk only — never hard plastic.</p>

<h2 id="cycling-the-tank">Cycling the Tank</h2>
<p>Axolotls are exceptionally sensitive to ammonia and nitrite — even low concentrations (0.25 ppm ammonia) cause gill damage that may take weeks to heal. A fully cycled tank is absolutely non-negotiable before introducing any axolotl.</p>
<p>The fishless cycling protocol for an axolotl tank:</p>
<ul>
  <li>Set up the tank with filter, substrate, and plants. Run everything for 24 hours to verify function.</li>
  <li>Add pure ammonia to 2 ppm. Do not use fish food or "fish-in" cycling — both are unnecessarily crude for a sensitive species.</li>
  <li>Dose beneficial bacteria (Dr. Tim's One and Only, Seachem Stability, or Fritz TurboStart).</li>
  <li>Test ammonia and nitrite daily using a liquid test kit (API Master Kit or equivalent). Re-dose ammonia to 2 ppm whenever it drops to zero.</li>
  <li>The cycle is complete when 2 ppm ammonia is processed to 0 ppm ammonia and 0 ppm nitrite within 24 hours. This typically takes 4–6 weeks.</li>
  <li>Perform a large water change (50–75 %) to reduce accumulated nitrate before adding the axolotl.</li>
</ul>
<p>Note: cycling occurs more slowly in cold water than in tropical setups. Patience is required — do not rush this process or cut corners. A $30 axolotl in an uncycled tank will cost you $100+ in medications and vet visits, assuming it survives.</p>

<h2 id="water-parameters">Water Parameters and Maintenance</h2>
<p>Target water parameters for axolotls:</p>
<ul>
  <li><strong>Temperature:</strong> 60–68 °F (16–20 °C)</li>
  <li><strong>pH:</strong> 6.5–8.0 (axolotls tolerate a wider pH range than most aquatic species)</li>
  <li><strong>Ammonia:</strong> 0 ppm</li>
  <li><strong>Nitrite:</strong> 0 ppm</li>
  <li><strong>Nitrate:</strong> Below 20 ppm (below 10 ppm preferred)</li>
  <li><strong>GH:</strong> 7–14 dGH (moderate hardness; axolotls need dissolved minerals for gill and bone health)</li>
  <li><strong>KH:</strong> 3–8 dKH</li>
</ul>
<p>Perform 20–25 % water changes weekly, or more frequently if nitrate accumulates faster. Always dechlorinate replacement water and temperature-match it to the tank — even a 5 °F differential during a water change can stress the animal. Use a liquid test kit (not strips) for accurate monitoring. Test weekly at minimum, and after any change to the system.</p>
<p>Axolotls are messy eaters that produce significant waste. Spot-clean uneaten food within 30 minutes of feeding, and siphon the substrate weekly. A well-maintained axolotl tank should have crystal-clear water with no detectable ammonia or nitrite at any time.</p>
`,
    faqs: [
      {
        question: 'What size tank does an axolotl need?',
        answer:
          'A single adult axolotl needs a minimum 20-gallon tank, though a 40-gallon breeder is strongly recommended for better temperature stability and enrichment space. Add 10–20 gallons per additional axolotl. Prioritise floor space over height — axolotls are bottom-dwellers.',
      },
      {
        question: 'Do axolotls need a heater?',
        answer:
          'No — in fact, a heater is dangerous for axolotls. They require cold water between 60–68 °F (16–20 °C). Most keepers need a chiller or cooling fan rather than a heater. Sustained temperatures above 68 °F suppress immune function and promote fatal infections.',
      },
      {
        question: 'Can I use gravel in an axolotl tank?',
        answer:
          'Absolutely not. Axolotls are suction feeders that will inevitably swallow gravel during feeding, causing gastrointestinal impaction — a painful and often fatal condition. Use fine sand (grain size below 1 mm) or a bare bottom only.',
      },
      {
        question: 'What filter is best for an axolotl?',
        answer:
          'Sponge filters are the gold standard for axolotl tanks. They provide excellent biological filtration with gentle water flow — axolotls cannot tolerate strong current, which damages their delicate external gills. For larger tanks, a canister filter with a spray bar diffuser also works well.',
      },
    ],
    sources: [
      {
        title: 'Ambystoma mexicanum (Axolotl) Care and Husbandry',
        url: 'https://www.caudata.org/threads/axolotl-care-sheet.1172/',
        publisher: 'Caudata.org',
      },
      {
        title: 'IUCN Red List: Ambystoma mexicanum',
        url: 'https://www.iucnredlist.org/species/1095/53947766',
        publisher: 'International Union for Conservation of Nature',
      },
    ],
    relatedSlugs: ['axolotl-feeding-guide', 'exotic-fish-tank-setup', 'best-exotic-fish-beginners', 'axolotl-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide — Axolotl Feeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'What Do Axolotls Eat? Complete Feeding Guide',
    slug: 'axolotl-feeding-guide',
    type: 'care',
    category: 'axolotl',
    topicCategory: 'feeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/care/axolotl-feeding-guide.jpg',
    heroImageAlt:
      'An axolotl being hand-fed an earthworm with stainless-steel feeding tongs in a planted cold-water tank',
    metaTitle:
      'What Do Axolotls Eat? Diet & Feeding Guide | The Fish Collection',
    metaDescription:
      'Complete axolotl feeding guide. Earthworms, pellets, bloodworms, feeding frequency by age, tong-feeding technique, and foods to avoid for Ambystoma mexicanum.',
    quickAnswerQuestion: 'What do axolotls eat?',
    quickAnswer:
      'Earthworms (nightcrawlers) are the single best staple food for axolotls — nutritionally complete, readily accepted, and appropriately sized. Supplement with sinking carnivore pellets (Hikari Sinking Carnivore Pellets or equivalent) and occasional treats like frozen bloodworms and brine shrimp. Feed juveniles daily, sub-adults every other day, and adults every 2–3 days. Always use feeding tongs or tweezers to offer food directly — axolotls are suction feeders with poor eyesight and rely on motion detection to locate prey.',
    summary:
      'A comprehensive feeding guide for axolotls covering staple diet, supplemental foods, feeding frequency by life stage, tong-feeding technique, foods to avoid, and nutritional requirements.',
    keyFacts: [
      { label: 'Primary Diet', value: 'Earthworms (nightcrawlers)' },
      { label: 'Feeding Frequency', value: 'Every 2–3 days (adults)' },
      { label: 'Supplemental Foods', value: 'Pellets, bloodworms, brine shrimp' },
      { label: 'Foods to Avoid', value: 'Feeder fish, hard-shelled prey' },
    ],
    headings: [
      { id: 'axolotl-diet-overview', text: 'Axolotl Diet Overview', level: 2 },
      { id: 'earthworms-the-staple', text: 'Earthworms: The #1 Staple Food', level: 2 },
      { id: 'sourcing-earthworms', text: 'Sourcing and Storing Earthworms', level: 3 },
      { id: 'preparing-earthworms', text: 'Preparing Earthworms for Feeding', level: 3 },
      { id: 'sinking-pellets', text: 'Sinking Carnivore Pellets', level: 2 },
      { id: 'treats-and-supplements', text: 'Treats and Supplemental Foods', level: 2 },
      { id: 'bloodworms', text: 'Bloodworms', level: 3 },
      { id: 'brine-shrimp', text: 'Brine Shrimp', level: 3 },
      { id: 'other-treats', text: 'Other Occasional Treats', level: 3 },
      { id: 'feeding-frequency', text: 'Feeding Frequency by Life Stage', level: 2 },
      { id: 'how-to-feed', text: 'How to Feed: Tong-Feeding Technique', level: 2 },
      { id: 'foods-to-avoid', text: 'Foods to Avoid', level: 2 },
      { id: 'nutritional-needs', text: 'Nutritional Requirements', level: 2 },
      { id: 'feeding-problems', text: 'Common Feeding Problems and Solutions', level: 2 },
    ],
    content: `
<h2 id="axolotl-diet-overview">Axolotl Diet Overview</h2>
<p>Axolotls are obligate carnivores. In the wild canals of Xochimilco, they feed on small fish, worms, insect larvae, crustaceans, and virtually any animal small enough to be sucked into their wide mouths. In captivity, replicating this diet is straightforward — but the majority of new axolotl owners still get it wrong, either by offering inappropriate foods, feeding too frequently, or relying on a single food source that creates nutritional gaps.</p>
<p>The feeding hierarchy for captive axolotls is simple: <strong>earthworms first, pellets second, everything else is a treat.</strong> Master this principle and your axolotl will maintain healthy weight, vibrant gill colour, and strong immune function for its full 10–15 year lifespan.</p>

<h2 id="earthworms-the-staple">Earthworms: The #1 Staple Food</h2>
<p>If you feed your axolotl nothing else, feed it earthworms. Nightcrawlers (<em>Lumbricus terrestris</em>) and red wigglers (<em>Eisenia fetida</em>) are nutritionally complete for axolotls — high in protein, appropriately fatty, rich in calcium, and soft-bodied for easy digestion. They are the single most recommended food in the axolotl-keeping community for good reason: decades of successful husbandry validate their effectiveness.</p>
<p>Nightcrawlers are the preferred species. They are larger (providing a more substantial meal per worm), less likely to produce bitter mucus when stressed (red wigglers occasionally secrete a foul-tasting coelomic fluid that can cause axolotls to spit them out), and universally available at bait shops, garden centres, and online suppliers.</p>

<h3 id="sourcing-earthworms">Sourcing and Storing Earthworms</h3>
<p>Purchase earthworms from pesticide-free sources. Bait shops and online worm farms are the safest options. Never collect wild earthworms from lawns or gardens that may have been treated with fertilisers, herbicides, or insecticides — these chemicals are lethal to axolotls.</p>
<p>Store earthworms in a ventilated container with damp (not wet) coconut coir or peat moss in the refrigerator at 4–10 °C (40–50 °F). They will remain alive and healthy for 2–4 weeks under these conditions. Remove any dead worms promptly — they decompose rapidly and foul the bedding.</p>

<h3 id="preparing-earthworms">Preparing Earthworms for Feeding</h3>
<p>For adult axolotls (20+ cm), offer whole nightcrawlers. The axolotl will suck the worm in and swallow it whole — this is natural and safe. For juveniles and sub-adults, cut the worm into 1–2 cm pieces using sharp scissors. This prevents the animal from struggling with a worm that is too large and reduces the risk of regurgitation.</p>
<p>Rinse earthworms briefly under dechlorinated water before feeding to remove any bedding material. Do not soak them — they will drown.</p>

<h2 id="sinking-pellets">Sinking Carnivore Pellets</h2>
<p>Sinking carnivore pellets are the best alternative to earthworms and serve as an excellent secondary staple. Hikari Sinking Carnivore Pellets are the most widely used brand in axolotl husbandry — they are protein-rich, appropriately sized, and sink immediately (axolotls will not eat floating food).</p>
<p>Pellets are particularly useful for:</p>
<ul>
  <li><strong>Convenience:</strong> When you cannot source fresh earthworms, pellets provide complete nutrition without refrigeration or live-food maintenance.</li>
  <li><strong>Juvenile feeding:</strong> Small pellets are easier for juvenile axolotls to manage than worm pieces.</li>
  <li><strong>Holiday feeding:</strong> If a pet sitter is providing care, pellets are far simpler to portion and offer than live worms.</li>
  <li><strong>Supplementation:</strong> Alternating pellets with earthworms provides dietary variety.</li>
</ul>
<p>Offer 2–3 pellets per feeding session for adults, adjusting based on the individual's appetite and body condition. Remove uneaten pellets after 30 minutes — they decompose and foul the water.</p>

<h2 id="treats-and-supplements">Treats and Supplemental Foods</h2>

<h3 id="bloodworms">Bloodworms</h3>
<p>Frozen bloodworms (chironomid larvae) are an excellent treat food, particularly for juvenile axolotls. They are high in protein and irresistible to most axolotls. However, bloodworms are not nutritionally complete — they lack sufficient calcium and vitamins for long-term sole feeding. Use them as a treat, not a staple, offering 1–2 cubes per session once or twice weekly.</p>
<p>Freeze-dried bloodworms are inferior to frozen — they contain less nutrition, float (axolotls feed from the bottom), and can cause constipation if not pre-soaked. Always prefer frozen over freeze-dried.</p>

<h3 id="brine-shrimp">Brine Shrimp</h3>
<p>Frozen brine shrimp are useful primarily for juvenile axolotls (under 5 cm) that are too small for worm pieces or pellets. Newly hatched brine shrimp (nauplii) are the first food for axolotl larvae and remain a suitable supplement through the juvenile stage. Adults will eat brine shrimp but derive minimal nutritional benefit — the prey items are simply too small relative to the animal's size.</p>

<h3 id="other-treats">Other Occasional Treats</h3>
<ul>
  <li><strong>Daphnia:</strong> Excellent for juveniles. Live daphnia trigger hunting behaviour and provide roughage. Available from aquarium shops or easily cultured at home.</li>
  <li><strong>Blackworms (<em>Lumbriculus variegatus</em>):</strong> Small, wriggling worms that axolotls love. Highly nutritious and easy to maintain in a shallow container of dechlorinated water. A superior alternative to bloodworms for regular supplementation.</li>
  <li><strong>Raw lean shrimp:</strong> De-shelled, de-veined prawn from the fishmonger, cut into small pieces. Offer sparingly — higher in protein and lower in fat than earthworms.</li>
  <li><strong>Repashy Grub Pie:</strong> A gel food made from insect meal. Can be moulded into small pieces and sinks readily. Useful for dietary variety.</li>
</ul>

<h2 id="feeding-frequency">Feeding Frequency by Life Stage</h2>
<p>Axolotl metabolism is slow compared to tropical fish, and overfeeding is a more common problem than underfeeding. Follow these guidelines:</p>
<ul>
  <li><strong>Hatchlings (0–2 cm):</strong> Daily feedings of live brine shrimp nauplii or microworms. At this size, the animals are growing rapidly and need constant nutrition.</li>
  <li><strong>Juveniles (2–10 cm):</strong> Feed daily. Offer bloodworm cubes, small pellets, chopped earthworm, or blackworms. Portions should be consumed within 1–2 minutes.</li>
  <li><strong>Sub-adults (10–20 cm):</strong> Feed every other day. Transition to whole or halved earthworms and larger pellets. The animal's growth rate slows and daily feeding risks obesity.</li>
  <li><strong>Adults (20+ cm):</strong> Feed every 2–3 days. Offer 1–2 whole earthworms or 2–3 pellets per session. A healthy adult axolotl should have a body width roughly equal to or slightly wider than its head — if the belly is visibly distended or the animal is developing a "double chin," reduce frequency.</li>
</ul>
<p>These are guidelines, not rules. Adjust based on the individual animal's body condition, activity level, and water temperature (colder water = slower metabolism = less food needed).</p>

<h2 id="how-to-feed">How to Feed: Tong-Feeding Technique</h2>
<p>Axolotls have poor eyesight and locate prey primarily through motion detection via their lateral line system and through scent. Simply dropping food into the tank and hoping the axolotl finds it is inefficient — the animal may not locate the food before it begins to decompose, fouling the water.</p>
<p><strong>Tong-feeding is the standard method:</strong></p>
<ul>
  <li>Use blunt-tipped stainless-steel feeding tongs or long aquarium tweezers (20–30 cm). Never use sharp-tipped forceps — a startled axolotl can lunge and injure itself.</li>
  <li>Hold the food (earthworm, pellet, bloodworm cube) in the tongs and lower it slowly to within 2–3 cm of the axolotl's face.</li>
  <li>Wiggle the food gently to create movement. The axolotl will detect the motion via its lateral line and snap forward to suction-feed.</li>
  <li>Release the food as the axolotl strikes. Do not pull back — the animal's suction is powerful enough to take the food from loose tongs.</li>
</ul>
<p>Tong-feeding allows precise portion control, prevents food waste, and builds a strong keeper–animal bond. Most axolotls learn to associate the tongs with food within a week and will approach eagerly when they see them.</p>

<h2 id="foods-to-avoid">Foods to Avoid</h2>
<p>The following foods should never be offered to axolotls:</p>
<ul>
  <li><strong>Feeder fish (goldfish, minnows, guppies):</strong> Feeder fish carry parasites, bacteria, and diseases. They also contain thiaminase (an enzyme that destroys vitamin B1) and are far too bony for axolotl digestion. The risk-to-benefit ratio is catastrophically unfavourable.</li>
  <li><strong>Hard-shelled prey (snails, crayfish, beetles):</strong> Axolotls lack the jaw strength to crush hard shells. Ingested shell fragments cause impaction and internal lacerations. The "but they eat snails in the wild" argument ignores that wild axolotls eat thin-shelled pond snails — not aquarium nerites or mystery snails.</li>
  <li><strong>Mealworms and superworms:</strong> Their chitinous exoskeleton is difficult to digest and can cause impaction. The head segment of live mealworms can also bite the axolotl's digestive tract internally.</li>
  <li><strong>Processed human food:</strong> Chicken, beef, pork, cheese — none of these belong in an axolotl tank. They are nutritionally inappropriate, foul the water rapidly, and can introduce harmful preservatives.</li>
  <li><strong>Freeze-dried krill:</strong> Expands in the stomach when rehydrated, causing bloating and potential intestinal blockage. Avoid entirely.</li>
  <li><strong>Flake food:</strong> Floats on the surface (axolotls are bottom feeders), provides inadequate nutrition, and dissolves into a water-fouling mess.</li>
</ul>

<h2 id="nutritional-needs">Nutritional Requirements</h2>
<p>Axolotls require a diet high in animal protein (40–50 % dry weight) with moderate fat content (10–15 %). They have no requirement for plant-based material — they are strict carnivores. Key nutritional considerations:</p>
<ul>
  <li><strong>Protein:</strong> The primary macronutrient. Earthworms provide approximately 60 % protein (dry weight), making them nutritionally ideal.</li>
  <li><strong>Calcium:</strong> Essential for bone development, gill structure, and egg production in females. Earthworms are calcium-rich; pellets are typically calcium-supplemented. If feeding primarily soft foods, consider occasional dusting with a reptile calcium supplement (without vitamin D3).</li>
  <li><strong>Vitamins A and D:</strong> Necessary for immune function and calcium metabolism. A varied diet of earthworms plus pellets typically provides sufficient quantities.</li>
  <li><strong>Fat:</strong> Moderate fat supports energy reserves and organ health. Overfeeding high-fat foods (bloodworms) can cause hepatic lipidosis (fatty liver disease) in axolotls — another reason to use them as treats, not staples.</li>
</ul>

<h2 id="feeding-problems">Common Feeding Problems and Solutions</h2>
<ul>
  <li><strong>Axolotl refuses to eat:</strong> Check water temperature first — if above 68 °F (20 °C), the animal is likely heat-stressed. Also verify ammonia and nitrite are at 0 ppm. New axolotls may refuse food for 3–7 days after arrival due to transport stress. Offer food daily but do not force — appetite will return once the animal acclimates.</li>
  <li><strong>Axolotl regurgitates food:</strong> The food item is too large. Cut worms into smaller pieces. Regurgitation can also indicate gastrointestinal issues if it occurs repeatedly with appropriately sized food — consult a veterinarian experienced with amphibians.</li>
  <li><strong>Floating / buoyancy issues after feeding:</strong> The axolotl has swallowed air. This occasionally happens during suction feeding at the surface. It typically resolves within 24 hours. If persistent, feed underwater using tongs to prevent surface-level air gulping.</li>
  <li><strong>Obesity:</strong> Reduce feeding frequency and portion size. An overweight axolotl has a visibly distended belly and may develop fatty deposits around the neck. Skip 2–3 feeding sessions, then resume at a reduced schedule.</li>
</ul>
`,
    faqs: [
      {
        question: 'What is the best food for axolotls?',
        answer:
          'Earthworms (nightcrawlers) are the single best food for axolotls — they are nutritionally complete, high in protein and calcium, and readily accepted. Sinking carnivore pellets (such as Hikari Sinking Carnivore Pellets) are an excellent secondary staple. Supplement with frozen bloodworms and brine shrimp as treats.',
      },
      {
        question: 'How often should I feed my axolotl?',
        answer:
          'Feed juvenile axolotls (under 10 cm) daily, sub-adults (10–20 cm) every other day, and adults (20+ cm) every 2–3 days. Portion size should allow the animal to finish eating within 1–2 minutes. Overfeeding is more common than underfeeding — a healthy adult needs only 1–2 earthworms or 2–3 pellets per session.',
      },
      {
        question: 'Can axolotls eat fish?',
        answer:
          'Feeder fish should never be offered to axolotls. They carry parasites, bacteria, and diseases, contain thiaminase (which destroys vitamin B1), and their bones pose a digestion risk. Stick to earthworms, pellets, and soft invertebrate treats for a safe and nutritionally complete diet.',
      },
      {
        question: 'Why is my axolotl not eating?',
        answer:
          'The most common cause of appetite loss in axolotls is water temperature above 68 °F (20 °C). Check temperature first, then verify ammonia and nitrite are at 0 ppm. Newly arrived axolotls may refuse food for up to a week due to transport stress — offer food daily but do not force. If the fast persists beyond 10 days, consult an amphibian-experienced veterinarian.',
      },
    ],
    sources: [
      {
        title: 'Dietary Protein and Lipid Requirements of Axolotls (Ambystoma mexicanum)',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848608005486',
        publisher: 'Aquaculture',
      },
      {
        title: 'Caudata.org Axolotl Feeding Guide',
        url: 'https://www.caudata.org/threads/axolotl-feeding-guide.1289/',
        publisher: 'Caudata.org',
      },
    ],
    relatedSlugs: ['axolotl-tank-setup', 'predatory-fish-feeding-guide', 'best-exotic-fish-beginners', 'axolotl-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide — Koi Pond Setup
  // ──────────────────────────────────────────────
  {
    title: 'Koi Pond Setup: Complete Guide',
    slug: 'koi-pond-setup',
    type: 'care',
    category: 'koi',
    topicCategory: 'tank-setup',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/care/koi-pond-setup.jpg',
    heroImageAlt:
      'A professionally built koi pond with multi-stage filtration, marginal plants, and a protective net over crystal-clear water',
    metaTitle:
      'Koi Pond Setup Guide | Size, Filtration & Seasonal Care | The Fish Collection',
    metaDescription:
      'Expert koi pond setup guide. Minimum 1,000-gallon pond design, multi-stage filtration, aeration, liner selection, plumbing, predator protection, and winter.',
    quickAnswerQuestion: 'What do you need to set up a koi pond?',
    quickAnswer:
      'A koi pond requires a minimum of 1,000 gallons (3,785 L) with a depth of at least 3–4 feet for overwintering in temperate climates. Essential components include multi-stage filtration (mechanical, biological, and UV clarification), adequate aeration, a bottom drain, proper plumbing with external pump, EPDM or RPE liner (or concrete/fibreglass shell), marginal and submerged plants, predator protection (netting or electric fence), and a seasonal maintenance plan covering spring start-up through winter shutdown.',
    summary:
      'A comprehensive guide to designing and building a koi pond, covering pond sizing, depth requirements, liner and construction options, multi-stage filtration, aeration, plumbing, aquatic plants, predator deterrents, and year-round seasonal maintenance.',
    keyFacts: [
      { label: 'Minimum Pond Size', value: '1,000 gal (3,785 L)' },
      { label: 'Minimum Depth', value: '3–4 ft (90–120 cm)' },
      { label: 'Filtration', value: 'Multi-stage (mechanical + biological + UV)' },
      { label: 'Temperature', value: '65–75 °F (18–24 °C) optimal' },
      { label: 'pH Range', value: '7.0–8.6' },
    ],
    headings: [
      { id: 'why-pond-design-matters', text: 'Why Pond Design Matters for Koi', level: 2 },
      { id: 'pond-size-and-depth', text: 'Pond Size and Depth', level: 2 },
      { id: 'calculating-volume', text: 'Calculating the Right Volume', level: 3 },
      { id: 'depth-for-overwintering', text: 'Depth for Overwintering', level: 3 },
      { id: 'construction-methods', text: 'Construction Methods', level: 2 },
      { id: 'liner-ponds', text: 'Liner Ponds (EPDM / RPE)', level: 3 },
      { id: 'preformed-ponds', text: 'Preformed Ponds', level: 3 },
      { id: 'concrete-and-fibreglass', text: 'Concrete and Fibreglass', level: 3 },
      { id: 'filtration-system', text: 'Filtration System', level: 2 },
      { id: 'mechanical-filtration', text: 'Mechanical Filtration', level: 3 },
      { id: 'biological-filtration', text: 'Biological Filtration', level: 3 },
      { id: 'uv-clarification', text: 'UV Clarification', level: 3 },
      { id: 'aeration', text: 'Aeration', level: 2 },
      { id: 'plumbing-and-pumps', text: 'Plumbing and Pumps', level: 2 },
      { id: 'aquatic-plants', text: 'Aquatic Plants', level: 2 },
      { id: 'predator-protection', text: 'Predator Protection', level: 2 },
      { id: 'seasonal-maintenance', text: 'Seasonal Maintenance', level: 2 },
      { id: 'winter-care', text: 'Winter Care and Overwintering', level: 2 },
    ],
    content: `
<h2 id="why-pond-design-matters">Why Pond Design Matters for Koi</h2>
<p>Koi (<em>Cyprinus carpio</em>) are long-lived, large-bodied fish that can reach 60–90 cm (24–36 in) and live 25–35 years under optimal conditions — with exceptional specimens surpassing 50 years. They are not goldfish. A pond that is adequate for a few comets will fail catastrophically when stocked with koi, because koi produce three to five times the waste of similarly sized goldfish and require proportionally more filtration capacity, dissolved oxygen, and swimming volume.</p>
<p>The pond you build today must accommodate koi at their adult size, not the 10 cm juveniles you stock it with. I have consulted on hundreds of koi pond projects, and the single most common regret among pond keepers is building too small. Excavation and plumbing are done once — building it right the first time costs marginally more than building it wrong and having to rebuild in three years when your koi outgrow the space.</p>

<h2 id="pond-size-and-depth">Pond Size and Depth</h2>

<h3 id="calculating-volume">Calculating the Right Volume</h3>
<p>The absolute minimum for a koi pond is 1,000 gallons (3,785 litres). This volume supports 2–4 adult koi with adequate filtration, though 2,000–3,000 gallons is a far more practical starting point. The standard guideline is 250 gallons per adult koi — meaning a 1,000-gallon pond should hold no more than 4 mature fish. Overstocking is the leading cause of chronic water-quality problems in koi ponds.</p>
<p>Larger volumes also provide dramatically better thermal stability. A 500-gallon pond in direct sunlight can swing 5–8 °F in a single day; a 3,000-gallon pond with partial shading may fluctuate only 1–2 °F. Koi tolerate a wide temperature range (35–85 °F) but are stressed by rapid changes — volume is your buffer against temperature shock.</p>

<h3 id="depth-for-overwintering">Depth for Overwintering</h3>
<p>If you live in a climate where winter temperatures drop below freezing, pond depth is not optional — it is the difference between live koi and dead koi. <strong>A minimum depth of 3–4 feet (90–120 cm) is required for overwintering.</strong> In USDA hardiness zones 5 and below, 4 feet is strongly recommended.</p>
<p>The principle is simple: ice forms on the surface, but water at the bottom of a sufficiently deep pond remains at approximately 4 °C (39 °F) — the temperature at which water reaches maximum density. Koi enter torpor (a hibernation-like state of reduced metabolism) at the bottom of the pond and survive the winter in this zone. If the pond is too shallow, the entire water column can freeze or cool to a lethal temperature, killing the fish.</p>
<p>Even in mild climates (zones 8–10), a minimum depth of 3 feet is recommended for predator protection and thermal stability. Shallow ponds are easy targets for herons, raccoons, and cats.</p>

<h2 id="construction-methods">Construction Methods</h2>

<h3 id="liner-ponds">Liner Ponds (EPDM / RPE)</h3>
<p>Flexible liners are the most popular construction method for koi ponds. They are cost-effective, allow custom shapes, and are relatively straightforward to install.</p>
<ul>
  <li><strong>EPDM (ethylene propylene diene monomer):</strong> The industry standard. EPDM liners are 45 mil (1.14 mm) thick, fish-safe, UV-resistant, and flexible enough to conform to complex excavation shapes. A quality EPDM liner carries a 20-year warranty and lasts 30+ years in practice. Ensure you purchase fish-safe EPDM — roofing-grade EPDM may contain fungicides that are toxic to aquatic life.</li>
  <li><strong>RPE (reinforced polyethylene):</strong> Lighter and more puncture-resistant than EPDM, but less flexible. RPE liners are excellent for formal, geometric ponds where sharp angles and flat surfaces are the design intent. They are also thinner (20–30 mil) without sacrificing strength, making handling easier during installation.</li>
</ul>
<p>Under any flexible liner, install a geotextile underlayment (300+ g/m²) to protect against root penetration and sharp stones. This is not optional — a single puncture in a 3,000-gallon pond means thousands of litres of water loss and potential fish death.</p>

<h3 id="preformed-ponds">Preformed Ponds</h3>
<p>Preformed fibreglass or polyethylene shells are available in sizes up to approximately 500 gallons. For koi, they are almost always too small. A preformed pond can serve as a quarantine facility or a hospital tank, but it is not a suitable permanent home for adult koi. If budget or space constraints limit you to preformed options, consider goldfish instead.</p>

<h3 id="concrete-and-fibreglass">Concrete and Fibreglass</h3>
<p>For serious koi keepers, concrete (shotcrete or poured) with a fibreglass or pond-safe paint coating is the premium option. Concrete ponds offer unlimited design flexibility, integrate bottom drains and return jets directly into the structure, and last indefinitely with proper maintenance.</p>
<p>The downsides are cost ($15,000–$50,000+ depending on size and finish) and construction complexity — concrete ponds require professional installation, proper curing (28 days minimum before filling), and pH neutralisation (new concrete leaches calcium hydroxide, raising pH to 10+). Apply a pond-safe epoxy or fibreglass coating to seal the surface and eliminate pH leaching.</p>

<h2 id="filtration-system">Filtration System</h2>
<p>Koi produce enormous quantities of waste — far more than most pond keepers anticipate. A single adult koi can produce 200–300 mg of ammonia per day. Multiply that by a pond of 8–10 fish, and you need an industrial-grade filtration system to maintain water quality. The filtration must address three distinct needs: mechanical, biological, and UV clarification.</p>

<h3 id="mechanical-filtration">Mechanical Filtration</h3>
<p>Mechanical filtration removes solid waste particles — fish faeces, uneaten food, decomposing plant matter, and suspended sediment — before they break down into ammonia. In a koi pond, this is typically achieved through:</p>
<ul>
  <li><strong>Bottom drain and settlement chamber:</strong> A gravity-fed bottom drain (110 mm / 4-inch) pulls debris-laden water from the pond floor into a settlement chamber where heavy solids settle out. The settlement chamber is flushed periodically (daily in heavy-feeding season) to purge accumulated sludge.</li>
  <li><strong>Sieve or drum filter:</strong> Water passes through a fine sieve (typically 200–300 micron) that traps particulate matter. Rotating drum filters automate this process — the drum turns continuously, and a spray bar washes captured solids into a waste drain. Drum filters are the premium option for large ponds (2,000+ gallons) and significantly reduce manual maintenance.</li>
  <li><strong>Brush or mat filters:</strong> Banks of filter brushes or Japanese matting in a flow-through chamber trap suspended particles. Effective but require regular manual cleaning. Best suited for smaller ponds or as a pre-filter stage before biological media.</li>
</ul>

<h3 id="biological-filtration">Biological Filtration</h3>
<p>Biological filtration converts toxic ammonia to nitrite, then to relatively harmless nitrate, via colonies of nitrifying bacteria (<em>Nitrosomonas</em> and <em>Nitrospira</em>). This is the most critical filtration stage — without adequate biological capacity, ammonia spikes will kill your koi.</p>
<p>Effective biological media for koi ponds:</p>
<ul>
  <li><strong>Moving-bed biofilm reactor (MBBR):</strong> K1 or similar buoyant media kept in constant motion by aeration. The tumbling action provides oxygen to bacteria on all surfaces and prevents clogging. MBBRs offer the highest biological capacity per unit volume and are self-cleaning. The gold standard for serious koi filtration.</li>
  <li><strong>Static media (sintered glass, ceramic rings, lava rock):</strong> Placed in a flow-through chamber, these high-surface-area media host bacterial colonies in their porous structure. Effective but require periodic rinsing (in pond water, never tap water) to prevent clogging with organic sludge.</li>
  <li><strong>Shower filters / trickle towers:</strong> Water is sprayed or dripped over media exposed to air, maximising oxygen contact for aerobic bacteria. Highly efficient but require a pump with sufficient head pressure to lift water to the top of the tower.</li>
</ul>
<p>Size your biological filtration for the maximum stocking density you intend to reach — not your current fish count. Bacteria colonise media gradually, and adding fish faster than the biofilter can adapt causes ammonia spikes.</p>

<h3 id="uv-clarification">UV Clarification</h3>
<p>A UV clarifier passes pond water past a germicidal UV-C lamp, destroying free-floating algae cells that cause green-water blooms. It does not replace filtration — it supplements it. Size the UV unit at 1 watt per gallon of flow rate (e.g., a 40-watt UV unit for a pump flowing 40 gallons per minute). Replace the UV lamp annually — output degrades significantly after 8,000–10,000 hours of use even if the lamp still illuminates.</p>
<p>UV clarification does not affect string algae (blanketweed), which attaches to surfaces and is not free-floating. String algae is managed through manual removal, barley straw extract, and balanced planting.</p>

<h2 id="aeration">Aeration</h2>
<p>Koi are oxygen-hungry fish, particularly at warmer temperatures when dissolved oxygen drops and metabolic demand increases. A well-aerated koi pond should maintain dissolved oxygen above 7 mg/L at all times — below 5 mg/L, koi become visibly stressed (gasping at the surface); below 3 mg/L is an emergency.</p>
<p>Aeration methods:</p>
<ul>
  <li><strong>Air pump and diffuser stones:</strong> A linear diaphragm air pump (Hakko, Medo, or equivalent) connected to weighted air stones placed on the pond floor. The rising bubble column circulates water and introduces atmospheric oxygen. Run aeration 24/7 — it is not optional.</li>
  <li><strong>Waterfall or stream return:</strong> Returning filtered water via a waterfall provides excellent gas exchange as the water tumbles over rocks. A waterfall alone may provide sufficient aeration for smaller ponds (under 2,000 gallons) in cooler climates.</li>
  <li><strong>Venturi injectors:</strong> Installed on the return plumbing, these devices draw air into the water stream using the Venturi effect. Effective but can be noisy and require periodic cleaning.</li>
</ul>
<p>In winter, aeration serves a second critical function: keeping a hole open in the ice surface for gas exchange. Without an opening, toxic gases (carbon dioxide, hydrogen sulphide) accumulate under the ice and suffocate the fish. Run at least one air stone through winter, positioned to create surface agitation at one point — not to heat the pond, but to prevent the surface from freezing solid at that location.</p>

<h2 id="plumbing-and-pumps">Plumbing and Pumps</h2>
<p>Koi pond plumbing should be designed for gravity-fed flow wherever possible. The ideal configuration:</p>
<ul>
  <li><strong>Bottom drain(s):</strong> One 110 mm (4-inch) gravity-fed bottom drain per 1,000–1,500 gallons of pond volume. The drain feeds directly into the first filtration stage via a 110 mm pipe with minimal elbows (each 90° elbow adds friction loss equivalent to approximately 1 metre of straight pipe).</li>
  <li><strong>Skimmer:</strong> A surface skimmer removes floating debris (leaves, pollen, dust) before it sinks and decomposes. Position on the downwind side of the pond for maximum efficiency.</li>
  <li><strong>External pump:</strong> An energy-efficient external pump (not submersible — external pumps last longer, are easier to service, and consume less electricity) sized for the total system turnover. Target a full pond volume turnover every 1–2 hours. For a 3,000-gallon pond, a pump delivering 1,500–3,000 GPH is appropriate.</li>
  <li><strong>Return jets:</strong> Multiple return jets positioned to create a gentle circular current in the pond. This sweeps debris toward the bottom drain and provides exercise for the koi. Avoid creating a whirlpool effect — the current should be gentle, not a washing machine.</li>
</ul>
<p>Use Schedule 40 PVC pipe for all plumbing. Ensure all joints are solvent-welded (not push-fit) and pressure-tested before burying. A leak in buried plumbing is a nightmare to locate and repair. Include ball valves on all intake and return lines for maintenance isolation.</p>

<h2 id="aquatic-plants">Aquatic Plants</h2>
<p>Plants serve multiple functions in a koi pond: nutrient absorption (competing with algae for nitrate and phosphate), shade, oxygenation, and aesthetic beauty. The challenge is that koi eat plants — voraciously. Unprotected lilies and marginals will be shredded within days.</p>
<p>Strategies for keeping plants with koi:</p>
<ul>
  <li><strong>Marginal shelf with plant pockets:</strong> Build a shallow shelf (15–20 cm deep) around part of the pond perimeter and plant hardy marginals (iris, marsh marigold, pickerel weed) in mesh baskets topped with large river rock to prevent koi from uprooting them.</li>
  <li><strong>Floating plant barriers:</strong> Use plastic grid panels to cordon off a section of the pond surface for floating plants (water hyacinth, water lettuce). Koi cannot reach through the barrier to eat the roots.</li>
  <li><strong>Separate planted filtration bog:</strong> Divert a portion of the return flow through a gravel-filled bog planted with watercress, water mint, and other nutrient-hungry species. The bog acts as a natural biofilter and is physically separated from the koi.</li>
  <li><strong>Water lilies (<em>Nymphaea</em>):</strong> Hardy water lilies can survive koi predation if planted in large, heavy containers (50+ litres) topped with large cobblestones the koi cannot move. Their floating pads provide essential shade — aim for 30–50 % surface coverage to reduce algae growth and protect fish from UV exposure and predators.</li>
</ul>

<h2 id="predator-protection">Predator Protection</h2>
<p>Koi ponds are magnets for predators. Herons, kingfishers, raccoons, cats, otters, and even ospreys view a koi pond as an easy buffet. A single great blue heron can consume every fish in a 1,000-gallon pond in a single morning visit.</p>
<p>Effective deterrents:</p>
<ul>
  <li><strong>Pond netting:</strong> The most reliable method. A taut net (mesh size 2–3 cm) stretched over the entire pond surface prevents aerial predators from reaching the water. Not the most aesthetic solution, but highly effective. Many keepers deploy netting only during high-risk seasons (spring and autumn, when herons are most active).</li>
  <li><strong>Electric fence:</strong> A low-voltage (12 V) electric fence wire running 10–15 cm above ground level around the pond perimeter deters ground predators (raccoons, cats, foxes). This is the gold standard for mammalian predator protection in many koi-keeping regions.</li>
  <li><strong>Pond depth:</strong> A pond depth of 4+ feet makes it difficult for wading predators (herons) to stand in the water and strike. Steep sides with no shallow ledges eliminate wading access entirely.</li>
  <li><strong>Koi shelters:</strong> Submerged pipes, tunnels, or purpose-built fish caves provide refuge for koi when a predator approaches. Koi learn to use these shelters instinctively after a single scare event.</li>
  <li><strong>Motion-activated deterrents:</strong> Scarecrow sprinklers and ultrasonic devices provide supplementary deterrence but should not be your sole defence. Herons habituate to them within 2–3 weeks.</li>
</ul>

<h2 id="seasonal-maintenance">Seasonal Maintenance</h2>
<p>Koi ponds require active management through the seasons. The maintenance cycle follows the fish's metabolic rhythm:</p>
<ul>
  <li><strong>Spring (water temperature rising above 10 °C / 50 °F):</strong> Resume feeding with easily digestible wheatgerm-based food. Begin filter start-up — if biomedia was shut down over winter, bacterial colonies will have reduced significantly and need 2–4 weeks to re-establish. Perform a partial water change (10–20 %) to dilute accumulated winter waste. Inspect all equipment, replace UV lamps, and clean pump impellers.</li>
  <li><strong>Summer (15–25 °C / 59–77 °F):</strong> Peak feeding season. Feed high-protein growth food 2–3 times daily. Monitor ammonia and nitrite weekly — biofilter demand is highest during this period. Top off water lost to evaporation (dechlorinate all additions). Clean mechanical filtration frequently — daily flushing of settlement chambers may be necessary.</li>
  <li><strong>Autumn (water temperature dropping below 15 °C / 59 °F):</strong> Transition to wheatgerm food as metabolisms slow. Install pond netting to catch falling leaves — decomposing leaves release tannins, consume oxygen, and spike ammonia. Reduce feeding frequency as temperature drops. Below 10 °C, cease feeding entirely — koi cannot digest food at these temperatures and undigested food in the gut causes bacterial infection.</li>
  <li><strong>Winter (below 10 °C / 50 °F):</strong> No feeding. Reduce filtration flow (but maintain circulation and aeration). Ensure at least one area of the pond surface remains ice-free for gas exchange. Monitor for ice dams in plumbing. If using a de-icer, choose a thermostat-controlled floating heater rated for your pond size — it maintains a small ice-free zone, not the entire surface temperature.</li>
</ul>

<h2 id="winter-care">Winter Care and Overwintering</h2>
<p>Overwintering koi in temperate and cold climates is the most anxiety-inducing aspect of koi keeping for new pond owners, but it is straightforward if the pond is properly designed.</p>
<p>Key principles:</p>
<ul>
  <li><strong>Depth is your insurance.</strong> A 4-foot-deep pond provides a 4 °C (39 °F) zone at the bottom that remains stable regardless of surface conditions. Koi settle here in torpor and barely move until spring.</li>
  <li><strong>Do not break ice by striking it.</strong> The shockwave from hammering on ice can stun or kill koi in torpor. If you need to open a hole, pour boiling water on the surface or use a floating pond heater/de-icer.</li>
  <li><strong>Maintain aeration.</strong> Run at least one air stone at a shallow angle (not on the bottom — you do not want to disturb the warm stratified water layer where the koi are resting). The purpose is gas exchange at the surface, not oxygenation of the entire water column.</li>
  <li><strong>Never feed below 10 °C (50 °F).</strong> Koi cannot metabolise food at this temperature. Undigested food rots in the gut, causing fatal bacterial infections. This is non-negotiable.</li>
  <li><strong>Reduce pump flow.</strong> Excessive circulation in winter disrupts the thermal stratification that keeps the pond bottom at 4 °C. Reduce your pump to 50 % flow or switch to a smaller winter pump.</li>
</ul>
<p>In extreme climates (zones 3–4, where ponds can freeze to 3+ feet), consider moving koi indoors to a holding tank for winter. A 300-gallon stock tank in a garage with filtration and aeration provides a controlled environment that eliminates overwintering risk entirely.</p>
`,
    faqs: [
      {
        question: 'How big should a koi pond be?',
        answer:
          'A koi pond should be a minimum of 1,000 gallons (3,785 litres) with a depth of at least 3–4 feet. Budget approximately 250 gallons per adult koi. However, a 2,000–3,000 gallon pond is far more practical as a starting point — larger volumes provide better thermal stability, more forgiving water chemistry, and room for the fish to grow to their full potential.',
      },
      {
        question: 'What filtration does a koi pond need?',
        answer:
          'A koi pond requires multi-stage filtration: mechanical (bottom drain, settlement chamber, or drum filter), biological (moving-bed biofilm reactor or static media like sintered glass), and UV clarification (1 watt per gallon of flow) for algae control. Target a full pond volume turnover every 1–2 hours. Under-filtering is the most common cause of chronic water-quality problems in koi ponds.',
      },
      {
        question: 'Can koi survive winter in a pond?',
        answer:
          'Yes, koi can overwinter in a pond provided it is at least 3–4 feet deep and has adequate aeration to maintain a hole in the ice for gas exchange. Koi enter torpor below 10 °C (50 °F) and rest near the bottom where the water remains at approximately 4 °C. Do not feed koi below 10 °C — they cannot digest food at this temperature. Never break ice by striking it; use a floating de-icer instead.',
      },
      {
        question: 'How do I protect koi from predators?',
        answer:
          'Use a combination of pond netting (taut net over the entire surface) for aerial predators, a low-voltage electric fence for ground predators (raccoons, cats), a pond depth of 4+ feet with steep sides to deter wading birds, and submerged shelters for the koi to hide in. Motion-activated sprinklers provide supplementary deterrence but should not be your sole defence.',
      },
    ],
    sources: [
      {
        title: 'Koi Health and Disease',
        url: 'https://www.wiley.com/en-us/Koi+Health+and+Disease-p-9780813814773',
        publisher: 'Wiley-Blackwell',
      },
      {
        title: 'Fishbase: Cyprinus carpio',
        url: 'https://www.fishbase.se/summary/Cyprinus-carpio.html',
        publisher: 'FishBase Consortium',
      },
    ],
    relatedSlugs: ['exotic-fish-tank-setup', 'most-colorful-freshwater-fish', 'best-large-freshwater-fish-aquarium', 'koi-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide — Betta Fish Complete Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Betta Fish Care: The Complete Guide',
    slug: 'betta-complete-care-guide',
    type: 'care',
    category: 'betta',
    topicCategory: 'species-care',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-04',
    heroImage: '/images/care/betta-complete-care-guide.jpg',
    heroImageAlt:
      'A vibrant Halfmoon Betta swimming in a densely planted 10-gallon aquarium with a gentle sponge filter and warm lighting',
    metaTitle:
      'Betta Fish Care: The Complete Guide | Tank, Diet & Health | The Fish Collection',
    metaDescription:
      'Complete Betta fish care guide. Tank size (5 gal minimum), water parameters, diet, tank mates, common diseases, and breeding basics for Betta splendens.',
    quickAnswerQuestion: 'How do you care for a Betta fish?',
    quickAnswer:
      'Betta fish need a minimum 5-gallon heated, filtered tank — never a bowl. Maintain water temperature at 76–82 °F (24–28 °C) with an adjustable heater, pH 6.5–7.5, and ammonia/nitrite at 0 ppm. Feed a varied diet of high-quality pellets, frozen bloodworms, and occasional live food. Provide gentle filtration (sponge filter), live or silk plants, and a secure lid (Bettas jump). Carefully chosen tank mates (snails, Corydoras) can work in 20+ gallon tanks. With proper care, Bettas live 3–5 years.',
    summary:
      'A comprehensive, myth-busting care guide for Betta splendens covering tank size, water parameters, heating, filtration, diet, compatible tank mates, common diseases, and breeding fundamentals.',
    keyFacts: [
      { label: 'Minimum Tank Size', value: '5 gal (19 L)' },
      { label: 'Temperature', value: '76–82 °F (24–28 °C)' },
      { label: 'pH Range', value: '6.5–7.5' },
      { label: 'Diet', value: 'Omnivore — pellets + frozen' },
      { label: 'Lifespan', value: '3–5 years' },
    ],
    headings: [
      { id: 'debunking-the-bowl-myth', text: 'Debunking the Bowl Myth', level: 2 },
      { id: 'tank-size', text: 'Tank Size: 5 Gallons Minimum', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'temperature', text: 'Temperature and Heating', level: 3 },
      { id: 'ph-and-hardness', text: 'pH and Hardness', level: 3 },
      { id: 'nitrogen-cycle', text: 'The Nitrogen Cycle', level: 3 },
      { id: 'filtration', text: 'Filtration', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet and Feeding', level: 2 },
      { id: 'pellets', text: 'Pellets: The Staple', level: 3 },
      { id: 'frozen-and-live-foods', text: 'Frozen and Live Foods', level: 3 },
      { id: 'feeding-schedule', text: 'Feeding Schedule', level: 3 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'compatible-species', text: 'Compatible Species', level: 3 },
      { id: 'species-to-avoid', text: 'Species to Avoid', level: 3 },
      { id: 'common-diseases', text: 'Common Diseases', level: 2 },
      { id: 'fin-rot', text: 'Fin Rot', level: 3 },
      { id: 'velvet', text: 'Velvet (Oodinium)', level: 3 },
      { id: 'ich', text: 'Ich (White Spot Disease)', level: 3 },
      { id: 'breeding-basics', text: 'Breeding Basics', level: 2 },
    ],
    content: `
<h2 id="debunking-the-bowl-myth">Debunking the Bowl Myth</h2>
<p>The most persistent myth in the aquarium hobby is that Betta fish can live in bowls, vases, or tiny unfiltered containers. This myth has killed more fish than any disease. It persists because Bettas possess a labyrinth organ — a specialised respiratory structure that allows them to breathe atmospheric air in oxygen-depleted water. This adaptation evolved in the stagnant rice paddies and floodplains of Southeast Asia, where seasonal drought reduces fish to surviving in shrinking puddles. It is a <em>survival mechanism</em>, not a lifestyle preference.</p>
<p>A Betta in a bowl is not thriving — it is surviving. It is breathing air because the water it is sitting in cannot sustain life. It is motionless not because it is calm, but because ammonia from its own waste is burning its gills and fins. Its lifespan drops from 3–5 years to 6–12 months. The colour fades, the fins clamp, and the fish dies slowly of organ failure in a container of its own diluted urine.</p>
<p>Every responsible Betta keeper needs to internalise this: <strong>Bettas deserve heated, filtered tanks with adequate space.</strong> The information below establishes the minimum standard for ethical Betta care.</p>

<h2 id="tank-size">Tank Size: 5 Gallons Minimum</h2>
<p>The minimum tank size for a single Betta is 5 gallons (19 litres). This is not a generous recommendation — it is the floor below which water quality becomes impossible to maintain without heroic intervention. In a 5-gallon tank with a filter and heater, you can achieve stable nitrogen cycling, consistent temperature, and enough swimming space for the fish to exhibit natural behaviour: patrolling, flaring, building bubble nests, and exploring.</p>
<p>A 10-gallon tank is ideal for a single Betta. The additional volume provides dramatically better parameter stability (a 10-gallon tank is twice as forgiving as a 5-gallon during a missed water change), allows for aquascaping with live plants, and provides enough space for a small community if desired. The cost difference between a 5-gallon and 10-gallon setup is typically less than $20 — there is no reason to choose smaller.</p>
<p>For Betta sororities (groups of female Bettas), a minimum of 20 gallons is required with heavy planting and multiple line-of-sight breaks. Sororities are not recommended for beginners — they require careful monitoring and can collapse into aggression without warning.</p>

<h2 id="water-parameters">Water Parameters</h2>

<h3 id="temperature">Temperature and Heating</h3>
<p>Bettas are tropical fish native to Southeast Asia. They require water temperatures of 76–82 °F (24–28 °C) — a range that ambient room temperature in most homes does not reliably provide. <strong>A heater is not optional.</strong></p>
<p>Use an adjustable heater rated for your tank size: 25 watts for 5 gallons, 50 watts for 10 gallons. Avoid preset heaters that lock at a fixed temperature — they often run 2–3 °F off their claimed set point, and you have no ability to adjust. An adjustable heater (Eheim Jäger, Aqueon Pro, or Cobalt Neo-Therm) allows precise calibration using a separate thermometer to verify accuracy.</p>
<p>Temperature stability matters as much as the absolute number. A Betta in a stable 78 °F tank is healthier than one fluctuating between 74 °F and 82 °F due to a failing heater or room-temperature swings. Position the heater near the filter output for even heat distribution, and verify temperature at the opposite end of the tank to ensure no cold spots exist.</p>
<p>Below 74 °F, Betta metabolism slows dramatically. The fish becomes lethargic, stops eating, and its immune system weakens — making it vulnerable to every opportunistic pathogen in the water. Chronic cold is the silent killer of pet-shop Bettas housed in unheated cups.</p>

<h3 id="ph-and-hardness">pH and Hardness</h3>
<p>Bettas are adaptable to a range of water chemistry:</p>
<ul>
  <li><strong>pH:</strong> 6.5–7.5 (slightly acidic to neutral). Bettas originate from soft, acidic water but adapt readily to neutral tap water. Stability is more important than hitting a specific number — do not chase pH with chemicals.</li>
  <li><strong>GH:</strong> 3–12 dGH (soft to moderately hard).</li>
  <li><strong>KH:</strong> 2–8 dKH (sufficient to buffer against pH crashes).</li>
</ul>
<p>Most municipal tap water (dechlorinated) falls within acceptable parameters for Bettas. Test your tap water once to establish a baseline. If your water is extremely hard (above 15 dGH) or extremely alkaline (pH above 8.0), consider blending with RO water to bring parameters into range.</p>
<p>Indian almond leaves (<em>Terminalia catappa</em>) release tannins that gently lower pH, soften water, and provide mild antifungal and antibacterial properties. They are a staple in Betta keeping — add one medium leaf per 5 gallons and replace every 2–3 weeks as it decomposes. The amber-tinted "blackwater" effect mimics natural habitat and visibly reduces stress in many Bettas.</p>

<h3 id="nitrogen-cycle">The Nitrogen Cycle</h3>
<p>Every Betta tank must be fully cycled before the fish is introduced. The nitrogen cycle converts toxic ammonia (produced by fish waste and uneaten food) to nitrite (also toxic), then to nitrate (tolerable at low levels). This process is performed by beneficial bacteria that colonise your filter media and tank surfaces.</p>
<p>Target parameters at all times:</p>
<ul>
  <li><strong>Ammonia:</strong> 0 ppm</li>
  <li><strong>Nitrite:</strong> 0 ppm</li>
  <li><strong>Nitrate:</strong> Below 20 ppm (below 10 ppm preferred)</li>
</ul>
<p>Perform a fishless cycle using pure ammonia before adding the Betta. The cycle takes 4–6 weeks. Once established, maintain it through regular feeding (which provides ongoing ammonia input) and weekly 25 % water changes to export accumulated nitrate. Never replace all filter media at once — you will crash the cycle and expose the fish to ammonia poisoning.</p>

<h2 id="filtration">Filtration</h2>
<p>Bettas need filtration — but not the kind designed for a community tank of tetras. Bettas are poor swimmers. Their elaborate finnage (particularly in long-finned varieties like Halfmoon, Rosetail, and Delta) creates enormous drag. A filter that produces strong current will exhaust the fish, tear fins, and cause chronic stress.</p>
<p><strong>Sponge filters are ideal.</strong> They provide excellent biological filtration with virtually no current — just a gentle column of rising bubbles. A single sponge filter rated for your tank size, driven by a small air pump with an adjustable valve, is all a Betta tank needs.</p>
<p>If using a hang-on-back (HOB) filter, baffle the output. Cut a plastic water bottle lengthwise and attach it to the filter output as a flow diffuser, or stuff the output compartment with filter sponge to reduce the waterfall effect. The surface should have gentle movement, not a cascading torrent.</p>
<p>Internal filters with adjustable flow can work if dialled to the lowest setting. Ensure the intake is covered with a pre-filter sponge — Betta fins can be sucked into unprotected intake slots, causing serious injury.</p>

<h2 id="diet-and-feeding">Diet and Feeding</h2>

<h3 id="pellets">Pellets: The Staple</h3>
<p>High-quality Betta-specific pellets are the foundation of a healthy diet. Look for pellets with whole fish or insect meal as the first ingredient — not wheat flour or soy, which are cheap fillers that provide minimal nutrition. Recommended brands include Northfin Betta Bits, New Life Spectrum Betta Formula, and Fluval Bug Bites for Bettas.</p>
<p>Feed 2–4 pellets per meal, twice daily. A Betta's stomach is approximately the size of its eye — overfeeding is extremely easy and leads to constipation, bloating, and swim bladder problems. If the fish's belly appears visibly rounded after feeding, you are giving too much.</p>

<h3 id="frozen-and-live-foods">Frozen and Live Foods</h3>
<p>Variety is essential for Betta health and colouration. Supplement pellets with:</p>
<ul>
  <li><strong>Frozen bloodworms:</strong> The Betta favourite. Offer 2–3 times per week as a meal replacement. Thaw a small portion in tank water before feeding.</li>
  <li><strong>Frozen brine shrimp:</strong> Good source of roughage. Useful for fasting/digestive health days.</li>
  <li><strong>Frozen daphnia:</strong> Excellent for digestion — acts as a natural laxative. Ideal for Bettas prone to bloating.</li>
  <li><strong>Live foods (mosquito larvae, wingless fruit flies, micro worms):</strong> Trigger the most intense feeding response and provide the highest nutritional value. Mosquito larvae are a natural Betta food in the wild and are eagerly consumed.</li>
</ul>
<p>Implement a weekly fasting day (no food) to allow the digestive system to clear. This is particularly important for Bettas, which are prone to constipation and swim bladder issues from overfeeding.</p>

<h3 id="feeding-schedule">Feeding Schedule</h3>
<p>A practical weekly feeding schedule:</p>
<ul>
  <li><strong>Monday–Tuesday:</strong> Pellets (2–4 per meal, twice daily)</li>
  <li><strong>Wednesday:</strong> Frozen bloodworms (replace one pellet meal)</li>
  <li><strong>Thursday–Friday:</strong> Pellets</li>
  <li><strong>Saturday:</strong> Frozen daphnia or brine shrimp</li>
  <li><strong>Sunday:</strong> Fasting day — no food</li>
</ul>
<p>This schedule provides balanced nutrition, digestive variety, and a regular fast to prevent the bloating that plagues overfed Bettas.</p>

<h2 id="tank-mates">Tank Mates</h2>

<h3 id="compatible-species">Compatible Species</h3>
<p>Bettas can coexist with carefully selected tank mates in tanks of 20 gallons or larger. The key principles: avoid fin-nippers, avoid fish that resemble other male Bettas (long fins, bright colours), and choose species that occupy different tank levels.</p>
<p>Generally compatible species:</p>
<ul>
  <li><strong>Nerite snails:</strong> Algae-eating, peaceful, and completely ignored by Bettas. The easiest and safest tank mate.</li>
  <li><strong>Mystery snails:</strong> Larger than nerites, equally peaceful. Their long tentacles may occasionally attract a curious nip, but serious aggression is rare.</li>
  <li><strong>Corydoras catfish (pygmy or habrosus):</strong> Small, peaceful bottom-dwellers that occupy a different tank zone. Keep in groups of 6+ in a 20-gallon tank.</li>
  <li><strong>Kuhli loaches:</strong> Nocturnal, eel-like bottom-dwellers that are virtually invisible to a Betta. Require a group of 6+ and a sand substrate.</li>
  <li><strong>Ember tetras:</strong> Small (2 cm), dull-coloured, and fast. Their subdued orange colouration and small size usually keep them below the Betta's aggression threshold. School of 8+ in 20 gallons.</li>
  <li><strong>Amano shrimp:</strong> Large enough (4–5 cm) to avoid being eaten by most Bettas. Excellent algae cleaners. Smaller cherry shrimp are risky — many Bettas view them as food.</li>
</ul>

<h3 id="species-to-avoid">Species to Avoid</h3>
<ul>
  <li><strong>Other male Bettas:</strong> Two males in the same tank will fight to the death. No exceptions.</li>
  <li><strong>Guppies:</strong> Their flowing tails trigger territorial aggression in male Bettas.</li>
  <li><strong>Tiger barbs and other fin-nippers:</strong> They will shred a Betta's fins to ribbons.</li>
  <li><strong>Gouramis:</strong> Close relatives of Bettas and perceived as rivals. Aggression is inevitable.</li>
  <li><strong>Brightly coloured or long-finned fish:</strong> Anything that resembles a competing male will be attacked.</li>
  <li><strong>Aggressive cichlids:</strong> Any cichlid large or aggressive enough to bully a Betta is an inappropriate tank mate.</li>
</ul>
<p>Individual Betta temperament varies enormously. Some Bettas tolerate tank mates readily; others attack anything that moves. Always have a backup plan (divider or separate tank) in case your Betta proves incompatible with community life.</p>

<h2 id="common-diseases">Common Diseases</h2>

<h3 id="fin-rot">Fin Rot</h3>
<p>Fin rot is the most common Betta disease and is almost always caused by poor water quality. Symptoms: ragged, disintegrating fin edges, sometimes with a white or black margin. In early stages, fins appear slightly frayed; in advanced cases, the rot progresses to the body and becomes life-threatening.</p>
<p><strong>Treatment:</strong> Improve water quality immediately. Perform 25–50 % water changes daily until ammonia and nitrite are at 0 ppm. Mild cases heal with clean water alone within 2–3 weeks. For moderate cases, add Indian almond leaves (natural antibacterial) and aquarium salt (1 tsp per gallon) for 7–10 days. Severe cases (rot reaching the body) require antibiotic treatment — kanamycin or erythromycin in a hospital tank.</p>

<h3 id="velvet">Velvet (Oodinium)</h3>
<p>Velvet is a parasitic infection caused by <em>Oodinium pilularis</em>. It presents as a fine, gold or rust-coloured dust on the fish's body and fins — best visible by shining a torch on the fish at an angle in a dark room. The fish will clamp its fins, scratch against surfaces (flashing), become lethargic, and lose appetite.</p>
<p><strong>Treatment:</strong> Velvet is highly contagious and progresses rapidly. Raise the temperature to 82 °F (28 °C) to accelerate the parasite's life cycle. Treat with a copper-based medication (Seachem Cupramine at the recommended dose). Blackout the tank by covering it completely — <em>Oodinium</em> is a dinoflagellate that uses photosynthesis, and darkness weakens it. Treat for the full 14-day course even if symptoms resolve earlier.</p>

<h3 id="ich">Ich (White Spot Disease)</h3>
<p>Ich (<em>Ichthyophthirius multifiliis</em>) presents as distinct white spots (1–2 mm) scattered across the body and fins, resembling grains of salt. The fish flashes, clamps fins, and becomes lethargic. Ich is triggered by temperature drops or stress that suppresses the immune system.</p>
<p><strong>Treatment:</strong> Raise the temperature gradually (over 24 hours) to 82–86 °F (28–30 °C). The elevated temperature accelerates the parasite's life cycle, forcing it off the fish and into the free-swimming stage where it is vulnerable to treatment. Add aquarium salt (1 tsp per gallon) or treat with a formalin/malachite green medication (Ich-X is widely recommended). Maintain elevated temperature and treatment for 10–14 days after the last visible spot disappears to ensure all life-cycle stages are eliminated.</p>

<h2 id="breeding-basics">Breeding Basics</h2>
<p>Betta breeding is a fascinating but demanding process that requires preparation, dedicated equipment, and a plan for hundreds of fry. Do not breed on impulse — you will need homes for 50–300 juvenile Bettas.</p>
<p>Essential equipment:</p>
<ul>
  <li><strong>Breeding tank:</strong> 10–20 gallons, bare bottom, shallow water (4–6 inches), heater set to 80 °F (27 °C), no filter during spawning (the current destroys bubble nests and scatters eggs).</li>
  <li><strong>Conditioning:</strong> Feed both male and female high-protein live foods (bloodworms, brine shrimp) for 2–4 weeks before introducing them. The female should be visibly plump with eggs (look for vertical breeding stripes and a protruding ovipositor).</li>
  <li><strong>Introduction:</strong> Place the female in a clear container or chimney within the breeding tank so the male can see but not reach her. The male will build a bubble nest (a raft of saliva-coated air bubbles at the surface) within 1–3 days. Release the female when the nest is substantial and the male is displaying intensely.</li>
  <li><strong>Spawning:</strong> The male wraps his body around the female in a nuptial embrace, squeezing eggs from her body. He fertilises them and carries each egg to the bubble nest. This process repeats over 2–6 hours. Remove the female immediately after spawning — the male will become aggressively protective of the nest and may injure her.</li>
  <li><strong>Fry care:</strong> The male tends the nest for 24–48 hours until the fry hatch and become free-swimming. Remove the male once fry are swimming horizontally. Feed newly free-swimming fry infusoria or vinegar eels for the first 3–5 days, then transition to freshly hatched brine shrimp nauplii. After 4–6 weeks, introduce crushed pellets and frozen foods.</li>
</ul>
<p>Begin separating aggressive males into individual containers at 8–12 weeks — this is when male aggression typically emerges. Female Bettas can often be raised together in a grow-out tank until they reach sellable or rehomeable size.</p>
<p>Betta breeding is rewarding for experienced keepers, but the commitment is substantial. Each spawn produces dozens to hundreds of fry that need individual attention, water changes, and eventually separate housing for males. Plan your breeding project fully before starting — not after you have 200 baby Bettas and nowhere to put them.</p>
`,
    faqs: [
      {
        question: 'Can Betta fish live in a bowl?',
        answer:
          'No. Bettas in bowls are surviving, not thriving. They need a minimum 5-gallon heated, filtered tank with stable water parameters. A Betta in an unheated bowl will suffer from ammonia poisoning, temperature stress, and a drastically shortened lifespan (6–12 months instead of 3–5 years). The labyrinth organ allows them to breathe air in emergencies — it does not make bowls acceptable.',
      },
      {
        question: 'What can live with a Betta fish?',
        answer:
          'In a 20-gallon or larger tank, Bettas can coexist with nerite snails, mystery snails, Corydoras catfish, Kuhli loaches, ember tetras, and Amano shrimp. Avoid fin-nippers (tiger barbs), long-finned fish (guppies), other Bettas, gouramis, and aggressive cichlids. Individual temperament varies — always have a backup plan in case your Betta does not tolerate tank mates.',
      },
      {
        question: 'How long do Betta fish live?',
        answer:
          'With proper care (heated, filtered tank, varied diet, clean water), Bettas live 3–5 years. Some specimens reach 7 years. Pet-shop Bettas are typically 6–12 months old at purchase, so a well-cared-for Betta should live another 2–4 years in your tank. Bettas in bowls or unheated containers rarely survive beyond 1 year.',
      },
      {
        question: 'What do Betta fish eat?',
        answer:
          'Feed high-quality Betta-specific pellets (2–4 per meal, twice daily) as the staple diet. Supplement with frozen bloodworms, brine shrimp, and daphnia 2–3 times per week. Include one fasting day weekly to prevent constipation. Avoid flake food (low nutrition, fouls water) and overfeeding — a Betta stomach is roughly the size of its eye.',
      },
    ],
    sources: [
      {
        title: 'Betta splendens: Biology and Husbandry',
        url: 'https://www.practicalfishkeeping.co.uk/features/betta-splendens-care-guide/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'FishBase: Betta splendens',
        url: 'https://www.fishbase.se/summary/Betta-splendens.html',
        publisher: 'FishBase Consortium',
      },
    ],
    relatedSlugs: ['betta-tank-setup', 'most-colorful-freshwater-fish', 'best-exotic-fish-beginners', 'betta-tank-mates', 'betta-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 26 — Ich Treatment Guide
  // ──────────────────────────────────────────────
  {
    title: 'Ich Treatment Guide: How to Cure White Spot Disease',
    slug: 'ich-treatment-guide',
    type: 'care',
    topicCategory: 'disease-treatment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/ich-treatment-guide.jpg',
    heroImageAlt:
      'Close-up of a freshwater fish displaying white spot disease (Ichthyophthirius multifiliis) with visible trophonts on fins and body',
    metaTitle: 'Ich Treatment Guide: Cure White Spot Disease | The Fish Collection',
    metaDescription:
      'Complete Ich (white spot disease) treatment guide. Life cycle, heat method, medication protocols, salt treatment, and prevention strategies for freshwater.',
    quickAnswerQuestion: 'How do you treat Ich in aquarium fish?',
    quickAnswer:
      'Raise the water temperature gradually to 86 °F (30 °C) over 24 hours to accelerate the Ich parasite life cycle. Treat with a malachite green/formalin medication (Ich-X) or aquarium salt (1 tablespoon per 5 gallons) for 14 days after the last visible spot disappears. Only the free-swimming theront stage is vulnerable to medication — you must treat long enough to kill every generation.',
    summary:
      'An expert guide to diagnosing, treating, and preventing Ichthyophthirius multifiliis (white spot disease) in freshwater aquariums, covering the parasite life cycle, heat treatment, medication protocols, salt method, and long-term prevention.',
    keyFacts: [
      { label: 'Pathogen', value: 'Ichthyophthirius multifiliis' },
      { label: 'Visible Symptom', value: 'White spots 0.5–1.5 mm' },
      { label: 'Treatment Temp', value: '86 °F (30 °C)' },
      { label: 'Treatment Duration', value: '14 days minimum' },
      { label: 'Medications', value: 'Malachite green, formalin, salt' },
    ],
    headings: [
      { id: 'what-is-ich', text: 'What Is Ich?', level: 2 },
      { id: 'ich-life-cycle', text: 'The Ich Life Cycle', level: 2 },
      { id: 'trophont-stage', text: 'Trophont (Feeding Stage)', level: 3 },
      { id: 'tomont-stage', text: 'Tomont (Reproductive Stage)', level: 3 },
      { id: 'theront-stage', text: 'Theront (Free-Swimming Stage)', level: 3 },
      { id: 'diagnosing-ich', text: 'Diagnosing Ich', level: 2 },
      { id: 'heat-treatment', text: 'Heat Treatment Method', level: 2 },
      { id: 'medication-treatment', text: 'Medication Treatment', level: 2 },
      { id: 'salt-treatment-ich', text: 'Aquarium Salt Treatment', level: 2 },
      { id: 'treating-sensitive-species', text: 'Treating Sensitive Species', level: 2 },
      { id: 'ich-prevention', text: 'Prevention Strategies', level: 2 },
    ],
    content: `
<h2 id="what-is-ich">What Is Ich?</h2>
<p>Ich — short for <em>Ichthyophthirius multifiliis</em> — is the most common parasitic disease in freshwater aquariums worldwide. It presents as small white spots (0.5–1.5 mm diameter) scattered across the fish's body, fins, and gills, giving the appearance of grains of salt or sugar sprinkled on the fish. Left untreated, Ich is fatal. The parasite destroys gill tissue, causing respiratory failure, and opens the skin to secondary bacterial and fungal infections.</p>
<p>Every aquarist will encounter Ich eventually. The parasite is ubiquitous — present in most water systems and carried asymptomatically by healthy fish with robust immune systems. Outbreaks are triggered by stress: temperature drops, poor water quality, overcrowding, transport, or the introduction of new fish. Understanding the parasite's life cycle is the key to effective treatment, because <strong>only one stage of the life cycle is vulnerable to medication</strong>.</p>

<h2 id="ich-life-cycle">The Ich Life Cycle</h2>
<p>Ich has a three-stage life cycle that takes 4–14 days to complete depending on water temperature. Understanding each stage explains why treatment must continue long after visible spots disappear.</p>

<h3 id="trophont-stage">Trophont (Feeding Stage)</h3>
<p>The trophont is the visible white spot on the fish. It is a parasite burrowed beneath the fish's epithelium (outer skin layer), feeding on cells and fluids. The trophont is completely protected from medication by the fish's own tissue — no chemical you add to the water can reach it at this stage. Each trophont feeds for 3–7 days before detaching from the fish and dropping to the substrate.</p>

<h3 id="tomont-stage">Tomont (Reproductive Stage)</h3>
<p>After detaching, the trophont becomes a tomont — a reproductive cyst that attaches to substrate, plants, decorations, or filter media. Inside the cyst, the parasite divides repeatedly, producing up to 1,000 daughter cells called theronts. This process takes 6–72 hours depending on temperature. The cyst wall protects the dividing parasites from medication. At lower temperatures (below 70 °F / 21 °C), tomonts can remain dormant for weeks before rupturing.</p>

<h3 id="theront-stage">Theront (Free-Swimming Stage)</h3>
<p>When the cyst ruptures, hundreds of free-swimming theronts are released into the water column. These microscopic parasites actively seek a fish host. <strong>This is the only stage vulnerable to medication and salt.</strong> Theronts must find a host within 24–48 hours or they die. Once they penetrate a fish's skin, the cycle begins again.</p>
<p>The critical implication: you cannot kill Ich on the fish. You must wait for trophonts to detach, and kill theronts before they reinfect. Treatment must continue long enough to eliminate every generation — a minimum of 14 days at elevated temperature.</p>

<h2 id="diagnosing-ich">Diagnosing Ich</h2>
<p>Ich is usually straightforward to identify:</p>
<ul>
  <li><strong>White spots:</strong> Distinct, raised, salt-grain-sized white dots on the body, fins, and tail. Unlike fungal infections (which appear cottony) or Lymphocystis (which forms irregular cauliflower-like growths), Ich spots are uniform, round, and clearly defined.</li>
  <li><strong>Flashing:</strong> Fish rubbing or scratching against substrate, rocks, or decorations — an attempt to dislodge the irritating parasites.</li>
  <li><strong>Clamped fins:</strong> Fins held tight against the body rather than extended normally.</li>
  <li><strong>Lethargy and appetite loss:</strong> Infected fish become increasingly listless as gill damage progresses.</li>
  <li><strong>Rapid breathing:</strong> Gill infestation impairs oxygen exchange. Fish may gasp at the surface.</li>
</ul>
<p>If spots appear only on fins and are accompanied by ragged edges, consider <a href="/care/fin-rot-treatment-guide">fin rot</a> instead. If the coating looks like fine gold dust rather than white spots, suspect <a href="/care/aquarium-parasite-treatment">velvet disease</a>.</p>

<h2 id="heat-treatment">Heat Treatment Method</h2>
<p>Raising temperature is the cornerstone of Ich treatment. Heat accelerates the parasite's life cycle, forcing trophonts off the fish faster and shortening the tomont encystment period — which means theronts are exposed to treatment sooner and more predictably.</p>
<ol>
  <li><strong>Raise temperature to 86 °F (30 °C)</strong> gradually over 24 hours (no more than 2 °F per hour). This temperature is lethal to many Ich strains on its own and accelerates the life cycle from 14 days to 4–5 days.</li>
  <li><strong>Increase aeration.</strong> Warmer water holds less dissolved oxygen. Add an airstone or increase surface agitation to compensate.</li>
  <li><strong>Maintain 86 °F for a minimum of 14 days</strong> after the last visible spot disappears from any fish. This ensures all tomont cysts have ruptured and all theronts have been killed.</li>
  <li><strong>Lower temperature gradually</strong> back to normal over 48 hours once treatment is complete.</li>
</ol>
<p>Heat alone can cure mild Ich outbreaks in heat-tolerant species (Discus, Rams, Bettas, most tetras). For severe infestations or species that cannot tolerate 86 °F, combine heat with medication or salt.</p>

<h2 id="medication-treatment">Medication Treatment</h2>
<p>The most effective Ich medications contain malachite green and/or formalin:</p>
<ul>
  <li><strong>Hikari Ich-X:</strong> The gold standard. Contains malachite green and formalin in a pre-mixed, safe concentration. Dose per label instructions (5 mL per 10 gallons). Perform a 33 % water change before each re-dose. Treat every 24 hours for a minimum of 3 days after the last spot disappears, plus an additional 7 days at elevated temperature.</li>
  <li><strong>Kordon Rid-Ich Plus:</strong> Another malachite green/formalin combination. Effective but slightly harsher on sensitive species than Ich-X.</li>
  <li><strong>Seachem ParaGuard:</strong> An aldehyde-based alternative for malachite-green-sensitive species. Less potent but safer for scaleless fish.</li>
</ul>
<p><strong>Critical rules:</strong></p>
<ul>
  <li>Remove activated carbon from the filter before medicating — carbon adsorbs medications and renders them ineffective.</li>
  <li>Half-dose for scaleless fish (loaches, catfish, stingrays) and Tetras, which are sensitive to malachite green. Alternatively, use the salt method for these species.</li>
  <li>Never combine medications unless specifically directed by the manufacturer. Malachite green + copper, for instance, is synergistically toxic.</li>
  <li>Treat the entire tank, not just the visibly infected fish. Ich is in the water column and on every surface — isolating one fish does not eliminate the parasite from the display tank.</li>
</ul>

<h2 id="salt-treatment-ich">Aquarium Salt Treatment</h2>
<p>Aquarium salt (sodium chloride, NaCl) kills Ich theronts through osmotic stress and is the safest treatment for sensitive species:</p>
<ol>
  <li>Dissolve 1 tablespoon of aquarium salt per 5 gallons of tank water in a cup of tank water before adding.</li>
  <li>Add the dissolved salt solution gradually over 2–3 hours to avoid osmotic shock.</li>
  <li>Raise temperature to 82–86 °F simultaneously.</li>
  <li>Maintain salt concentration for 14 days after the last visible spot. When performing water changes, add replacement salt proportional to the volume of water removed.</li>
  <li>After treatment, gradually remove salt through successive water changes without salt replacement.</li>
</ol>
<p><strong>Caution:</strong> Some species are salt-sensitive. Corydoras, Otocinclus, most Plecos, and many plant species do not tolerate sustained salt exposure. For planted tanks, medication is usually preferable to salt. For tanks with salt-sensitive fish, use half the salt dose combined with heat.</p>

<h2 id="treating-sensitive-species">Treating Sensitive Species</h2>
<p>Scaleless fish and certain species require modified treatment protocols:</p>
<ul>
  <li><strong>Loaches and catfish:</strong> Half-dose malachite green medications. Prefer heat + half-salt or heat + Seachem ParaGuard.</li>
  <li><strong>Bettas:</strong> Tolerate heat well (86 °F is within their upper comfort range). Heat + aquarium salt is effective and gentle. Ich-X at full dose is also well tolerated by Bettas.</li>
  <li><strong>Goldfish and cold-water species:</strong> Cannot tolerate 86 °F. Use 80 °F maximum combined with full-dose Ich-X. Treatment duration extends to 21 days at lower temperatures due to the slower parasite life cycle.</li>
  <li><strong>Stingrays:</strong> Extremely medication-sensitive. Heat alone (86 °F) is the safest approach. If medication is necessary, use ParaGuard at quarter dose under close observation.</li>
</ul>

<h2 id="ich-prevention">Prevention Strategies</h2>
<ul>
  <li><strong>Quarantine all new fish</strong> for 30 days in a separate heated, filtered tank before adding to the display. This is the single most effective Ich prevention measure. See our <a href="/care/fish-quarantine-guide">quarantine guide</a> for setup details.</li>
  <li><strong>Maintain stable temperature.</strong> Temperature drops of 3 °F or more suppress the immune system and trigger Ich outbreaks. Use a reliable, adjustable heater and verify with a separate thermometer.</li>
  <li><strong>Keep water quality pristine.</strong> Ammonia and nitrite at 0 ppm, nitrate below 20 ppm. Stressed fish in poor water are Ich magnets.</li>
  <li><strong>Avoid overcrowding.</strong> Overcrowded tanks concentrate parasites and increase transmission rates.</li>
  <li><strong>Do not share nets, siphons, or equipment</strong> between tanks without disinfecting. Theronts and tomonts travel on wet surfaces.</li>
</ul>
<p>Ich is treatable and preventable. The keys are understanding the life cycle, treating long enough, and maintaining the conditions that keep fish immune systems strong. For broader disease prevention, see our <a href="/care/fish-disease-prevention">disease prevention guide</a>.</p>
`,
    faqs: [
      {
        question: 'How long does Ich treatment take?',
        answer:
          'A minimum of 14 days at 86 °F (30 °C) after the last visible spot disappears. At lower temperatures, extend to 21 days. The parasite life cycle must complete entirely — treating for only a few days after spots disappear allows encysted tomonts to survive and restart the infection.',
      },
      {
        question: 'Can Ich go away on its own?',
        answer:
          'Rarely. In very mild cases, fish with strong immune systems may fight off a light infection, but the parasite remains in the tank and will reinfect when conditions deteriorate. Untreated Ich almost always escalates. Active treatment is always recommended.',
      },
      {
        question: 'Is Ich contagious to all fish in the tank?',
        answer:
          'Yes. Ich theronts are free-swimming and will infect any fish in the tank. Some fish may show spots before others due to differences in immune response, but all fish are exposed. Always treat the entire tank, not just visibly infected individuals.',
      },
      {
        question: 'Can Ich survive without fish?',
        answer:
          'Theronts die within 24–48 hours without a host. However, tomont cysts on surfaces can survive for days to weeks at lower temperatures. Running an empty tank at 86 °F for 10–14 days will eliminate all life stages of the parasite without medication.',
      },
      {
        question: 'Will Ich treatment harm my plants?',
        answer:
          'Malachite green at recommended doses is generally safe for most aquarium plants. Salt, however, damages many plant species at treatment concentrations. If treating a planted tank, use heat + Ich-X rather than heat + salt. Remove sensitive plants (Vals, some mosses) during treatment if possible.',
      },
    ],
    sources: [
      {
        title: 'Ichthyophthirius multifiliis: Life Cycle and Host-Parasite Interactions',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfd.12334',
        publisher: 'Journal of Fish Diseases',
      },
      {
        title: 'Chemical and Non-Chemical Control of Ich in Freshwater Aquaria',
        url: 'https://edis.ifas.ufl.edu/publication/FA006',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'FishBase: Disease and Parasitology References',
        url: 'https://www.fishbase.se/Diseases/DiseasesSummary.php',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Temperature-Dependent Development of Ichthyophthirius multifiliis',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848604003874',
        publisher: 'Aquaculture (Elsevier)',
      },
    ],
    relatedSlugs: ['fish-quarantine-guide', 'fish-disease-prevention', 'fin-rot-treatment-guide', 'aquarium-parasite-treatment'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 27 — Fin Rot Treatment Guide
  // ──────────────────────────────────────────────
  {
    title: 'Fin Rot Treatment Guide: Causes, Symptoms & Cure',
    slug: 'fin-rot-treatment-guide',
    type: 'care',
    topicCategory: 'disease-treatment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/fin-rot-treatment-guide.jpg',
    heroImageAlt:
      'A Betta fish showing early-stage fin rot with ragged, receding caudal fin edges against a dark aquarium background',
    metaTitle: 'Fin Rot Treatment Guide: Causes, Symptoms & Cure | The Fish Collection',
    metaDescription:
      'How to treat fin rot in aquarium fish. Identify bacterial vs. fungal fin rot, treatment with clean water, salt, antibiotics, and prevention strategies.',
    quickAnswerQuestion: 'How do you treat fin rot?',
    quickAnswer:
      'Mild fin rot is treated by improving water quality: perform 25–50 % daily water changes until ammonia and nitrite read 0 ppm, and add Indian almond leaves for natural antibacterial tannins. Moderate cases benefit from aquarium salt (1 tsp per gallon) for 7–10 days. Severe fin rot reaching the body requires antibiotic treatment — kanamycin or erythromycin in a hospital tank. Fins regrow fully once the infection clears and water quality stabilises.',
    summary:
      'A comprehensive guide to diagnosing and treating bacterial fin rot in freshwater aquarium fish, covering the difference between bacterial and fungal fin rot, staging severity, water quality correction, salt treatment, antibiotic protocols, and prevention.',
    keyFacts: [
      { label: 'Primary Cause', value: 'Poor water quality' },
      { label: 'Pathogens', value: 'Aeromonas, Pseudomonas, Flavobacterium' },
      { label: 'First Treatment', value: 'Daily water changes' },
      { label: 'Salt Dose', value: '1 tsp per gallon for 7–10 days' },
      { label: 'Antibiotics', value: 'Kanamycin, erythromycin' },
      { label: 'Recovery Time', value: '2–6 weeks for regrowth' },
    ],
    headings: [
      { id: 'what-is-fin-rot', text: 'What Is Fin Rot?', level: 2 },
      { id: 'bacterial-vs-fungal', text: 'Bacterial vs. Fungal Fin Rot', level: 2 },
      { id: 'causes-of-fin-rot', text: 'Root Causes', level: 2 },
      { id: 'staging-severity', text: 'Staging Severity: Mild, Moderate, Severe', level: 2 },
      { id: 'mild-fin-rot-treatment', text: 'Treating Mild Fin Rot', level: 3 },
      { id: 'moderate-fin-rot-treatment', text: 'Treating Moderate Fin Rot', level: 3 },
      { id: 'severe-fin-rot-treatment', text: 'Treating Severe Fin Rot', level: 3 },
      { id: 'hospital-tank-protocol', text: 'Hospital Tank Protocol', level: 2 },
      { id: 'fin-regrowth', text: 'Fin Regrowth: What to Expect', level: 2 },
      { id: 'preventing-fin-rot', text: 'Preventing Fin Rot', level: 2 },
    ],
    content: `
<h2 id="what-is-fin-rot">What Is Fin Rot?</h2>
<p>Fin rot is a bacterial infection that progressively destroys the fin tissue of freshwater and saltwater aquarium fish. It is the most common disease in the hobby — and the most preventable. In nearly every case, fin rot is a direct consequence of poor water quality. Elevated ammonia, nitrite, or nitrate weakens the fish's immune system and damages the delicate fin membrane, allowing opportunistic bacteria to invade.</p>
<p>The pathogens responsible are gram-negative bacteria already present in every aquarium: <em>Aeromonas hydrophila</em>, <em>Pseudomonas fluorescens</em>, and <em>Flavobacterium columnare</em>. These are not exotic organisms introduced from outside — they are part of the normal aquatic microbiome that becomes pathogenic when conditions deteriorate. Treating fin rot therefore requires addressing the <strong>cause</strong> (water quality) as well as the <strong>symptom</strong> (the infection itself).</p>

<h2 id="bacterial-vs-fungal">Bacterial vs. Fungal Fin Rot</h2>
<p>True fin rot is bacterial, but fungal infections can look similar:</p>
<ul>
  <li><strong>Bacterial fin rot:</strong> Fin edges appear ragged, frayed, or uneven. The margin may show a white, opaque edge or reddish-brown discolouration from inflammation. Progression is from the fin edge inward toward the body. Fins look like they are dissolving or being eaten away.</li>
  <li><strong>Fungal fin infection:</strong> Appears as white, cottony growths on fin edges or the body. Fungal infections often colonise tissue already damaged by bacterial fin rot — the two conditions can co-occur. True fungal infections are less common than bacterial and are usually secondary.</li>
</ul>
<p>The distinction matters for treatment: bacterial fin rot responds to antibiotics and clean water; fungal infections require antifungal medication (methylene blue, Pimafix, or prescription antifungals). When both are present, treat the bacterial infection first — the fungus will often resolve once the underlying bacterial damage stops.</p>

<h2 id="causes-of-fin-rot">Root Causes</h2>
<p>Fin rot is almost always triggered by one or more of the following:</p>
<ul>
  <li><strong>Ammonia and nitrite exposure:</strong> Any detectable ammonia or nitrite chemically burns fin tissue and suppresses the immune system. Even 0.25 ppm ammonia sustained over days is enough to initiate fin rot in sensitive species like Bettas and fancy goldfish.</li>
  <li><strong>High nitrate:</strong> Chronic nitrate above 40 ppm degrades fin health over time. Keep nitrate below 20 ppm through regular water changes.</li>
  <li><strong>Overcrowding:</strong> Too many fish in too little water concentrates waste, increases aggression, and creates stress — all fin rot risk factors.</li>
  <li><strong>Fin nipping tank mates:</strong> Physical damage from fin nippers (barbs, serpae tetras, aggressive cichlids) creates entry points for bacteria. The damage looks like fin rot but is mechanical — removing the aggressor resolves it.</li>
  <li><strong>Temperature stress:</strong> Temperatures below the species' preferred range suppress immune function. Bettas in unheated tanks are particularly vulnerable.</li>
  <li><strong>Sharp decorations:</strong> Rough rocks, broken ceramic ornaments, and unfinished plastic plants can tear fins, creating infection sites. Use only smooth decorations and live or silk plants in tanks with long-finned fish.</li>
</ul>

<h2 id="staging-severity">Staging Severity: Mild, Moderate, Severe</h2>
<p>Accurate staging determines the appropriate treatment response:</p>

<h3 id="mild-fin-rot-treatment">Treating Mild Fin Rot</h3>
<p>Mild fin rot shows as slightly ragged or uneven fin edges with minimal tissue loss. The fin membrane may look slightly transparent or frayed at the tips. At this stage, clean water alone is often curative:</p>
<ol>
  <li>Test water immediately. Record ammonia, nitrite, nitrate, pH, and temperature.</li>
  <li>Perform a 50 % water change with dechlorinated, temperature-matched water.</li>
  <li>Continue 25–50 % daily water changes for 7–10 days until ammonia and nitrite are stable at 0 ppm and nitrate is below 20 ppm.</li>
  <li>Add Indian almond leaves (1 medium leaf per 5 gallons) — tannins provide mild antibacterial and antifungal properties.</li>
  <li>Identify and correct the root cause: fix the filter, reduce stocking, remove fin nippers, add a heater, or increase water change frequency.</li>
</ol>
<p>Expect visible improvement within 7–14 days. New fin growth appears as clear or slightly white membrane extending from the damaged edges.</p>

<h3 id="moderate-fin-rot-treatment">Treating Moderate Fin Rot</h3>
<p>Moderate fin rot shows significant tissue loss (25–50 % of a fin), redness or inflammation at the receding edge, and possibly a white margin marking the advancing infection line. Clean water alone may not be sufficient:</p>
<ol>
  <li>All mild treatment steps above.</li>
  <li>Add aquarium salt: dissolve 1 teaspoon per gallon of tank water in a cup of water, then add to the tank gradually. Maintain for 7–10 days.</li>
  <li>Alternatively, use Seachem StressGuard, which contains a polyvinylpyrrolidone polymer that binds to damaged tissue and provides a protective barrier while the immune system fights the infection.</li>
  <li>If no improvement after 7 days of salt treatment, escalate to antibiotics (see severe protocol).</li>
</ol>
<p><strong>Salt caution:</strong> Some species (Corydoras, Otocinclus, most Plecos, scaleless fish) are salt-sensitive. For these fish, skip salt and proceed directly to antibiotics if clean water fails.</p>

<h3 id="severe-fin-rot-treatment">Treating Severe Fin Rot</h3>
<p>Severe fin rot has reached the fin base or body. Fin tissue is almost completely gone, the body may show reddened ulcers or open sores, and the fish is lethargic with clamped remaining fins. This is a medical emergency:</p>
<ol>
  <li>Move the fish to a <a href="/care/fish-quarantine-guide">hospital tank</a> — a bare-bottom 5–10 gallon tank with a heater, sponge filter, and no substrate or decorations.</li>
  <li>Treat with <strong>kanamycin</strong> (Seachem Kanaplex: 1 measure per 5 gallons every 48 hours for 3 doses) or <strong>erythromycin</strong> (API E.M. Erythromycin: 1 packet per 10 gallons every 24 hours for 4 days).</li>
  <li>Perform a 30 % water change before each re-dose.</li>
  <li>Maintain elevated temperature (78–80 °F) to support immune function.</li>
  <li>If the fish is still eating, soak food in garlic guard or a vitamin supplement to support recovery.</li>
  <li>After the antibiotic course, continue daily water changes in the hospital tank for an additional 7 days before returning the fish to the display tank.</li>
</ol>

<h2 id="hospital-tank-protocol">Hospital Tank Protocol</h2>
<p>A dedicated hospital tank prevents medicating the entire display tank (which disrupts biological filtration and stresses healthy fish):</p>
<ul>
  <li>5–10 gallon tank, bare bottom, with a pre-cycled sponge filter and an adjustable heater.</li>
  <li>No substrate, plants, or decorations — bare surfaces are easier to keep clean and allow you to monitor the fish's condition precisely.</li>
  <li>Dim lighting to reduce stress.</li>
  <li>Remove activated carbon from the filter during medication — carbon adsorbs antibiotics.</li>
  <li>Test water daily: ammonia and nitrite must remain at 0 ppm. The combination of no substrate and medication can disrupt the nitrogen cycle — be prepared for daily water changes.</li>
</ul>

<h2 id="fin-regrowth">Fin Regrowth: What to Expect</h2>
<p>Once the infection is controlled and water quality stabilised, fin regrowth begins within 1–2 weeks:</p>
<ul>
  <li>New growth appears as clear or slightly translucent membrane extending from the damaged edges. This is delicate tissue — do not mistake it for continued disease.</li>
  <li>Over 2–6 weeks, the new membrane develops colour and structural rays.</li>
  <li>Severely damaged fins may not regrow to their original shape or length. Fins that were rotted to the base may regrow partially or with slight deformity.</li>
  <li>Long-finned varieties (Halfmoon Bettas, fancy goldfish) take longer to regrow and may develop slightly different fin shapes after severe damage.</li>
</ul>
<p>Support regrowth with excellent water quality (0/0/below 10 ppm), a varied, nutritious diet with vitamin supplementation, and stable temperature within the species' preferred range.</p>

<h2 id="preventing-fin-rot">Preventing Fin Rot</h2>
<ul>
  <li><strong>Maintain water quality:</strong> Weekly 25–30 % water changes, ammonia and nitrite always at 0 ppm, nitrate below 20 ppm. This single measure prevents the vast majority of fin rot cases.</li>
  <li><strong>Avoid overcrowding:</strong> Follow the one-inch-per-gallon rule as a very rough minimum, and research the specific needs of each species.</li>
  <li><strong>Remove aggressive tank mates:</strong> Fin nippers create the wounds that bacteria exploit. Separate aggressive fish immediately.</li>
  <li><strong>Use appropriate filtration:</strong> The filter should cycle the tank volume 4–6 times per hour for community tanks, 8–10 times for heavily stocked tanks. See our <a href="/care/aquarium-filter-guide">filter guide</a> for sizing.</li>
  <li><strong>Quarantine new arrivals:</strong> 30-day quarantine prevents introducing pathogens to an established tank. See our <a href="/care/fish-quarantine-guide">quarantine guide</a>.</li>
  <li><strong>Feed a varied, high-quality diet:</strong> Proper nutrition supports immune function. Avoid cheap, filler-heavy foods.</li>
</ul>
<p>Fin rot is the aquarium hobby's canary in the coal mine — it tells you something is wrong with the environment. Fix the environment, and the disease resolves. For a broader overview of disease prevention, see our <a href="/care/fish-disease-prevention">disease prevention guide</a>.</p>
`,
    faqs: [
      {
        question: 'Will fin rot heal on its own?',
        answer:
          'Mild fin rot can heal if you improve water quality immediately — daily water changes to bring ammonia and nitrite to 0 ppm. Without correcting the underlying cause, however, fin rot always progresses. It will not resolve while the fish remains in poor water conditions.',
      },
      {
        question: 'How long does it take for fins to grow back?',
        answer:
          'New fin membrane typically appears within 1–2 weeks of the infection clearing. Full regrowth takes 2–6 weeks for minor damage and up to 2–3 months for severe cases. The new growth initially appears clear or translucent before developing colour and structural rays.',
      },
      {
        question: 'Is fin rot contagious?',
        answer:
          'The bacteria that cause fin rot (Aeromonas, Pseudomonas) are already present in every aquarium. It is not contagious in the traditional sense — rather, poor water quality creates conditions where any fish can develop the infection. If one fish has fin rot, other fish in the same tank are at risk because they share the same degraded environment.',
      },
      {
        question: 'Can I use Melafix for fin rot?',
        answer:
          'Melafix (tea tree oil extract) has very limited antibacterial efficacy at aquarium-safe concentrations. Research published in the Journal of Fish Diseases found Melafix ineffective against common fish pathogens at recommended doses. For mild cases, clean water is more effective. For moderate to severe cases, use kanamycin or erythromycin.',
      },
    ],
    sources: [
      {
        title: 'Aeromonas Infections in Freshwater Fish: Pathogenesis and Treatment',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfd.12448',
        publisher: 'Journal of Fish Diseases',
      },
      {
        title: 'Efficacy of Melaleuca alternifolia (Melafix) Against Bacterial Fish Pathogens',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2761.2004.00535.x',
        publisher: 'Journal of Fish Diseases',
      },
      {
        title: 'Common Diseases of Ornamental Fish',
        url: 'https://edis.ifas.ufl.edu/publication/FA055',
        publisher: 'University of Florida IFAS Extension',
      },
    ],
    relatedSlugs: ['ich-treatment-guide', 'fish-disease-prevention', 'fish-quarantine-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 28 — Fish Quarantine Guide
  // ──────────────────────────────────────────────
  {
    title: 'Fish Quarantine Guide: Setup, Protocol & Best Practices',
    slug: 'fish-quarantine-guide',
    type: 'care',
    topicCategory: 'disease-treatment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/fish-quarantine-guide.jpg',
    heroImageAlt:
      'A clean bare-bottom quarantine tank with a sponge filter, adjustable heater, and a single PVC hide for a new fish arrival',
    metaTitle: 'Fish Quarantine Guide: Tank Setup & Protocol | The Fish Collection',
    metaDescription:
      'How to set up and run a fish quarantine tank. Equipment list, 30-day observation protocol, prophylactic treatment, and when to medicate new arrivals.',
    quickAnswerQuestion: 'How do you quarantine new fish?',
    quickAnswer:
      'Set up a 10–20 gallon bare-bottom tank with a pre-cycled sponge filter, adjustable heater, and PVC hides. Acclimate new fish into the quarantine tank and observe for 30 days. Watch for Ich, fin rot, parasites, and abnormal behaviour. Many experienced aquarists prophylactically treat with a trio of praziquantel, metronidazole, and a broad-spectrum antibiotic during the quarantine period.',
    summary:
      'A step-by-step guide to setting up and running a quarantine tank for new aquarium fish, covering equipment, cycling, observation protocols, prophylactic treatment options, and when to move fish to the display tank.',
    keyFacts: [
      { label: 'Tank Size', value: '10–20 gallons' },
      { label: 'Setup', value: 'Bare bottom, sponge filter' },
      { label: 'Quarantine Duration', value: '30 days minimum' },
      { label: 'Temperature', value: 'Match display tank' },
      { label: 'Common Prophylactics', value: 'Praziquantel, metro, antibiotic' },
    ],
    headings: [
      { id: 'why-quarantine', text: 'Why Quarantine Matters', level: 2 },
      { id: 'quarantine-tank-equipment', text: 'Quarantine Tank Equipment', level: 2 },
      { id: 'cycling-quarantine-tank', text: 'Cycling a Quarantine Tank', level: 3 },
      { id: 'acclimation-into-quarantine', text: 'Acclimating Fish into Quarantine', level: 2 },
      { id: 'observation-protocol', text: '30-Day Observation Protocol', level: 2 },
      { id: 'week-one', text: 'Week One: Critical Observation', level: 3 },
      { id: 'weeks-two-four', text: 'Weeks Two Through Four', level: 3 },
      { id: 'prophylactic-treatment', text: 'Prophylactic Treatment Protocol', level: 2 },
      { id: 'when-to-medicate', text: 'When to Medicate Reactively', level: 2 },
      { id: 'moving-to-display', text: 'Moving Fish to the Display Tank', level: 2 },
    ],
    content: `
<h2 id="why-quarantine">Why Quarantine Matters</h2>
<p>Quarantine is the single most effective disease prevention practice in the aquarium hobby. Every new fish — regardless of source — is a potential vector for parasites, bacteria, viruses, and fungi that can devastate an established tank. Fish from wholesalers pass through multiple holding systems, each with hundreds of other fish from different origins, before reaching your local shop. Even visibly healthy fish can carry subclinical infections that become active under the stress of transport and acclimatisation.</p>
<p>A 30-day quarantine allows latent diseases to manifest while the fish is isolated, protecting your display tank inhabitants. It also provides a controlled environment to treat any issues that appear without medicating the entire display — preserving your biological filtration, plants, and invertebrates.</p>
<p>The cost of a basic quarantine setup (10-gallon tank, sponge filter, heater) is far less than the cost of losing an entire display tank to a disease outbreak. Quarantine is not optional for serious fishkeepers — it is a fundamental practice.</p>

<h2 id="quarantine-tank-equipment">Quarantine Tank Equipment</h2>
<ul>
  <li><strong>Tank:</strong> 10–20 gallons. A 10-gallon is adequate for small community fish; 20 gallons for larger species. For very large fish (Arowana, stingrays), a 40–75 gallon tub or stock tank works.</li>
  <li><strong>Filter:</strong> Pre-cycled sponge filter. Sponge filters provide biological filtration without intakes that can injure stressed fish, and they continue functioning during medication (unlike HOBs with carbon cartridges). Keep a spare sponge in your display tank's filter at all times so you always have a pre-cycled sponge ready.</li>
  <li><strong>Heater:</strong> Adjustable heater set to match your display tank temperature. Having an adjustable unit allows you to raise temperature for heat-based treatments (e.g., 86 °F for Ich).</li>
  <li><strong>Hides:</strong> PVC pipes or fittings. These are non-porous, easy to sterilise, and provide shelter that reduces stress. Two or three pieces are sufficient.</li>
  <li><strong>Air pump and airstone:</strong> Supplemental aeration is important during medication, as many treatments reduce dissolved oxygen.</li>
  <li><strong>Lid:</strong> Essential. Stressed, newly arrived fish jump.</li>
  <li><strong>No substrate:</strong> Bare bottom allows easy observation of faeces (for parasite assessment), immediate cleanup of waste, and simple sterilisation between uses.</li>
  <li><strong>Lighting:</strong> Dim or ambient room light only. Bright lighting adds stress.</li>
</ul>

<h3 id="cycling-quarantine-tank">Cycling a Quarantine Tank</h3>
<p>The quarantine tank must be cycled before adding fish. The easiest method: keep a sponge filter running permanently in your display tank's sump or clipped inside the tank. When you need the quarantine tank, transfer this pre-colonised sponge. It carries an established bacterial colony capable of processing ammonia immediately.</p>
<p>If you do not have a pre-cycled sponge, cycle the quarantine tank using bottled bacteria (Fritz Zyme 7, Seachem Stability) combined with a source of ammonia for 7–14 days before adding fish. Test daily until ammonia and nitrite both read 0 ppm with ongoing ammonia input.</p>

<h2 id="acclimation-into-quarantine">Acclimating Fish into Quarantine</h2>
<p>Use the drip acclimation method for the best results. Float the sealed bag in the quarantine tank for 15 minutes to equalise temperature, then open the bag and set up a drip line using airline tubing with a knot or valve to control flow rate. Drip tank water into the bag at 2–4 drops per second for 45–60 minutes, doubling the bag water volume. Then gently net the fish into the quarantine tank — <strong>never pour bag water into your tank</strong>, as it may contain ammonia, pathogens, and medication residues from the store's systems. For full acclimation methods, see our <a href="/care/fish-acclimation-guide">acclimation guide</a>.</p>

<h2 id="observation-protocol">30-Day Observation Protocol</h2>

<h3 id="week-one">Week One: Critical Observation</h3>
<p>The first week is when most transport-stress-related diseases appear:</p>
<ul>
  <li>Observe the fish 2–3 times daily for 5–10 minutes each session.</li>
  <li>Watch for: white spots (Ich), gold dust (velvet), fin erosion, flashing (rubbing against surfaces), clamped fins, rapid breathing, white stringy faeces (internal parasites), loss of colour, bloating, or refusal to eat.</li>
  <li>Test water daily: ammonia, nitrite, pH. Perform 25 % water changes if any parameter is off.</li>
  <li>Begin feeding small amounts of high-quality food after 24 hours. Note whether the fish eats and what its faeces look like.</li>
</ul>

<h3 id="weeks-two-four">Weeks Two Through Four</h3>
<ul>
  <li>Continue daily observation (once daily is sufficient after week one if no issues).</li>
  <li>Test water every 2–3 days.</li>
  <li>Perform 25 % water changes twice weekly.</li>
  <li>Watch for slower-developing conditions: hole-in-the-head (hexamita), wasting, persistent fin damage, abnormal swimming, or body lesions.</li>
  <li>If the fish remains healthy, eating, and active for the full 30 days with no signs of disease, it is ready for the display tank.</li>
</ul>

<h2 id="prophylactic-treatment">Prophylactic Treatment Protocol</h2>
<p>Many experienced aquarists run a preventive medication course during quarantine rather than waiting for symptoms. The standard "quarantine trio" covers the most common hitchhiker diseases:</p>
<ol>
  <li><strong>Praziquantel</strong> (PraziPro or Hikari PraziPro): treats internal and external parasitic worms — flukes, tapeworms, and flatworms. Dose per label and maintain for 5–7 days.</li>
  <li><strong>Metronidazole</strong> (Seachem MetroPlex): treats internal protozoan parasites — Hexamita, Spironucleus — which cause hole-in-the-head and internal wasting. Dose per label for 7 days, ideally soaked into food using Seachem Focus as a binder.</li>
  <li><strong>Broad-spectrum antibiotic</strong> (Seachem Kanaplex or API General Cure): covers bacterial infections and remaining parasites. Dose per label for one full course.</li>
</ol>
<p>Stagger the treatments: praziquantel in week one, metronidazole in week two, antibiotic in week three. This avoids overloading the fish with multiple medications simultaneously. Perform a 30 % water change between each treatment phase.</p>
<p>Prophylactic treatment is particularly recommended for wild-caught fish, fish from unknown sources, and species going into tanks with high-value inhabitants (Arowana, Discus, stingrays).</p>

<h2 id="when-to-medicate">When to Medicate Reactively</h2>
<p>If symptoms appear during quarantine, treat immediately — the quarantine tank is specifically designed for this:</p>
<ul>
  <li><strong>White spots (Ich):</strong> Raise temperature to 86 °F, treat with Ich-X. See the <a href="/care/ich-treatment-guide">Ich treatment guide</a>.</li>
  <li><strong>Fin rot:</strong> Improve water quality, add salt or antibiotics depending on severity. See the <a href="/care/fin-rot-treatment-guide">fin rot guide</a>.</li>
  <li><strong>Flashing with no visible spots:</strong> Likely gill flukes. Treat with praziquantel.</li>
  <li><strong>White, stringy faeces:</strong> Internal parasites. Treat with metronidazole soaked into food.</li>
  <li><strong>Velvet (gold dust):</strong> Raise temperature, treat with copper-based medication (Seachem Cupramine). Blackout the tank.</li>
</ul>
<p>Reset the 30-day clock after any treatment course completes. The fish must be symptom-free for 30 days from the end of the last treatment before moving to the display tank.</p>

<h2 id="moving-to-display">Moving Fish to the Display Tank</h2>
<p>After 30 symptom-free days:</p>
<ol>
  <li>Match quarantine tank parameters to the display tank (temperature, pH, hardness). Adjust over 2–3 days if needed.</li>
  <li>Net the fish from the quarantine tank and place it in the display tank. Do not pour quarantine water into the display.</li>
  <li>Observe the fish in the display tank closely for the first 48 hours. Ensure it is accepted by existing inhabitants and finds feeding opportunities.</li>
  <li>Sterilise the quarantine tank with a dilute bleach solution (1 part household bleach to 10 parts water), rinse thoroughly, and allow to dry. The tank is now ready for the next arrival.</li>
</ol>
<p>Quarantine is a discipline. It requires patience — 30 days feels like a long time when a beautiful new fish is sitting in a bare tank instead of your planted display. But one Ich outbreak or one parasitic infestation that wipes out a carefully built community teaches the lesson permanently. Quarantine every time, without exception.</p>
`,
    faqs: [
      {
        question: 'Do I really need to quarantine fish from a reputable shop?',
        answer:
          'Yes. Even the best shops receive fish through wholesale supply chains where mixing from multiple sources occurs. Asymptomatic carriers look perfectly healthy but can transmit diseases to your display tank. The 30-day quarantine catches what visual inspection cannot.',
      },
      {
        question: 'Can I use my display tank as a quarantine tank if I only have one tank?',
        answer:
          'No. The purpose of quarantine is isolation. If you quarantine in your display tank, any disease the new fish carries immediately exposes all existing inhabitants. A basic 10-gallon quarantine setup costs under $50 — far less than replacing fish lost to a preventable outbreak.',
      },
      {
        question: 'How do I keep the quarantine tank cycled when not in use?',
        answer:
          'Keep a sponge filter running permanently inside your display tank (in the sump or clipped to the back glass). When you need the quarantine tank, transfer this pre-colonised sponge. It carries a living bacterial colony ready for immediate use. Between uses, drain and sterilise the quarantine tank itself.',
      },
      {
        question: 'Should I quarantine invertebrates and plants too?',
        answer:
          'Plants should be quarantined for 7–14 days or dipped in a potassium permanganate or bleach solution to kill hitchhiker snails, parasites, and algae. Shrimp and snails can carry fish parasites (Ich tomonts) on their shells — a 2-week quarantine in a fish-free tank allows these parasites to die off without hosts.',
      },
    ],
    sources: [
      {
        title: 'Quarantine Protocols for Ornamental Fish',
        url: 'https://edis.ifas.ufl.edu/publication/FA099',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Disease Prevention in Home Aquaria',
        url: 'https://www.practicalfishkeeping.co.uk/features/quarantine-guide/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Prophylactic Treatment of Ornamental Fish: A Risk-Benefit Analysis',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfd.12652',
        publisher: 'Journal of Fish Diseases',
      },
    ],
    relatedSlugs: ['ich-treatment-guide', 'fish-disease-prevention', 'fish-acclimation-guide', 'aquarium-parasite-treatment'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 29 — Aquarium Parasite Treatment
  // ──────────────────────────────────────────────
  {
    title: 'Aquarium Parasite Treatment: Flukes, Anchor Worm & Velvet',
    slug: 'aquarium-parasite-treatment',
    type: 'care',
    topicCategory: 'disease-treatment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/aquarium-parasite-treatment.jpg',
    heroImageAlt:
      'Microscope view of a gill fluke parasite alongside a freshwater fish displaying flashing behaviour in an aquarium',
    metaTitle: 'Aquarium Parasite Treatment: Flukes, Velvet & More | The Fish Collection',
    metaDescription:
      'Identify and treat common aquarium parasites: gill flukes, skin flukes, anchor worm, fish lice, velvet disease, and internal worms. Expert protocols.',
    quickAnswerQuestion: 'How do you treat parasites in aquarium fish?',
    quickAnswer:
      'Treatment depends on the parasite. Gill and skin flukes: praziquantel (PraziPro) for 5–7 days. Anchor worm and fish lice: manual removal with tweezers followed by potassium permanganate dip or Dimilin treatment. Velvet (Oodinium): raise temperature to 82 °F, treat with copper (Seachem Cupramine), and blackout the tank for 14 days. Internal worms: praziquantel or levamisole soaked into food.',
    summary:
      'A comprehensive guide to identifying and treating the most common parasites in freshwater aquariums, including gill flukes, skin flukes, anchor worm, fish lice, velvet disease, and internal helminths, with specific medication protocols for each.',
    keyFacts: [
      { label: 'Fluke Treatment', value: 'Praziquantel 5–7 days' },
      { label: 'Velvet Treatment', value: 'Copper + blackout 14 days' },
      { label: 'Anchor Worm', value: 'Manual removal + Dimilin' },
      { label: 'Internal Worms', value: 'Praziquantel or levamisole' },
      { label: 'Prevention', value: '30-day quarantine' },
    ],
    headings: [
      { id: 'common-aquarium-parasites', text: 'Common Aquarium Parasites', level: 2 },
      { id: 'gill-skin-flukes', text: 'Gill and Skin Flukes', level: 2 },
      { id: 'fluke-symptoms', text: 'Fluke Symptoms', level: 3 },
      { id: 'fluke-treatment', text: 'Fluke Treatment Protocol', level: 3 },
      { id: 'velvet-disease', text: 'Velvet Disease (Oodinium)', level: 2 },
      { id: 'velvet-treatment', text: 'Velvet Treatment Protocol', level: 3 },
      { id: 'anchor-worm-fish-lice', text: 'Anchor Worm and Fish Lice', level: 2 },
      { id: 'anchor-worm-treatment', text: 'Anchor Worm Treatment', level: 3 },
      { id: 'internal-parasites', text: 'Internal Parasites', level: 2 },
      { id: 'internal-parasite-treatment', text: 'Internal Parasite Treatment', level: 3 },
      { id: 'parasite-prevention', text: 'Parasite Prevention', level: 2 },
    ],
    content: `
<h2 id="common-aquarium-parasites">Common Aquarium Parasites</h2>
<p>Parasites are organisms that live on or inside a host fish, feeding on its tissue, blood, or nutrients. In the closed environment of an aquarium, parasites can spread rapidly and cause devastating losses if not identified and treated promptly. Unlike bacterial infections, which are often secondary to poor water quality, parasitic infections are typically introduced via new fish, live food, or contaminated equipment — making quarantine the most effective preventive measure.</p>
<p>This guide covers the most common freshwater aquarium parasites: gill flukes, skin flukes, velvet (Oodinium), anchor worm (Lernaea), fish lice (Argulus), and internal helminths (tapeworms, roundworms). For Ich (white spot disease), see our dedicated <a href="/care/ich-treatment-guide">Ich treatment guide</a>.</p>

<h2 id="gill-skin-flukes">Gill and Skin Flukes</h2>
<p>Flukes are flatworm parasites belonging to the class Monogenea. The two most common genera in aquarium fish are <em>Dactylogyrus</em> (gill flukes) and <em>Gyrodactylus</em> (skin flukes). They are microscopic — invisible to the naked eye — and attach to the fish using hooks and clamps on their posterior end.</p>
<ul>
  <li><strong>Dactylogyrus (gill flukes):</strong> Attach to gill filaments, feeding on mucus and epithelial cells. Heavy infestations destroy gill tissue, impairing oxygen exchange. Gill flukes are egg-layers — they deposit eggs into the water that hatch into free-swimming larvae.</li>
  <li><strong>Gyrodactylus (skin flukes):</strong> Attach to the body and fins, feeding on skin cells and mucus. They are live-bearers — each adult carries a developing offspring inside it, which in turn carries a developing offspring inside <em>it</em> (telescoping generations). This means a single fluke can produce a population explosion without the egg stage.</li>
</ul>

<h3 id="fluke-symptoms">Fluke Symptoms</h3>
<ul>
  <li><strong>Flashing:</strong> Scratching against substrate, rocks, or decorations — the hallmark symptom. Fish are trying to dislodge the irritating parasites.</li>
  <li><strong>Excessive mucus production:</strong> The skin may appear cloudy or slimy as the fish produces extra mucus in response to the parasite irritation.</li>
  <li><strong>Rapid gill movement:</strong> With gill flukes, respiration rate increases as gill damage impairs oxygen uptake. Fish may hang near filter outputs or air stones seeking oxygenated water.</li>
  <li><strong>Clamped fins and lethargy:</strong> General stress responses.</li>
  <li><strong>Red or inflamed gills:</strong> Visible when the operculum (gill cover) is lifted — though do not handle stressed fish unnecessarily.</li>
</ul>

<h3 id="fluke-treatment">Fluke Treatment Protocol</h3>
<ol>
  <li><strong>Praziquantel</strong> is the gold standard treatment for flukes. Use Hikari PraziPro (liquid) or API General Cure (powder containing praziquantel and metronidazole).</li>
  <li>Dose per label instructions. PraziPro: 1 teaspoon (5 mL) per 20 gallons.</li>
  <li>Maintain the dose for 5–7 days. Perform a 25 % water change on day 3 and re-dose to maintain concentration.</li>
  <li>After the first course, perform a 50 % water change, wait 3 days, then repeat the full treatment to catch any larvae that hatched from eggs during the first course (praziquantel does not kill eggs of <em>Dactylogyrus</em>).</li>
  <li>Praziquantel is remarkably safe — it can be used at double dose in emergencies with minimal toxicity to fish, shrimp, and plants. It is not copper-based and will not harm invertebrates.</li>
</ol>

<h2 id="velvet-disease">Velvet Disease (Oodinium)</h2>
<p>Velvet is caused by the dinoflagellate parasite <em>Oodinium pilularis</em> (freshwater) or <em>Amyloodinium ocellatum</em> (marine). It presents as a fine, gold or rust-coloured dust covering the fish's body and fins — much finer and more uniform than Ich spots. Because the individual parasites are very small, velvet is often missed until the infestation is advanced.</p>
<p>To confirm velvet, shine a torch on the fish at an angle in a darkened room. The gold sheen of thousands of tiny parasites becomes clearly visible. Velvet is highly lethal — it progresses faster than Ich and can kill within days if untreated.</p>

<h3 id="velvet-treatment">Velvet Treatment Protocol</h3>
<ol>
  <li><strong>Blackout the tank.</strong> <em>Oodinium</em> is a photosynthetic parasite — it uses light to produce energy. Complete blackout (cover the tank with towels or blankets) weakens the parasite significantly.</li>
  <li><strong>Raise temperature to 82–84 °F (28–29 °C)</strong> to accelerate the parasite's life cycle.</li>
  <li><strong>Treat with copper:</strong> Seachem Cupramine is the recommended copper treatment. Dose per label (0.5 mg/L copper). Maintain copper concentration for 14 days. Use a copper test kit (Seachem or Hanna Instruments) to verify concentration every 2 days — copper degrades and must be re-dosed to maintain therapeutic levels.</li>
  <li><strong>Increase aeration</strong> — velvet damages gills, and copper reduces oxygen availability.</li>
  <li>Continue treatment for the full 14 days even if symptoms resolve earlier. Remaining parasites in the tomont (cyst) stage will re-emerge.</li>
</ol>
<p><strong>Critical warning:</strong> Copper is lethal to invertebrates (shrimp, snails, crabs) and many scaleless fish. If your display tank contains invertebrates, treat the fish in a separate hospital tank. Copper also adsorbs into silicone and porous substrates, making it nearly impossible to remove completely — never use copper in a tank you later intend to use for invertebrates.</p>

<h2 id="anchor-worm-fish-lice">Anchor Worm and Fish Lice</h2>
<p>These are macroscopic parasites — large enough to see with the naked eye:</p>
<ul>
  <li><strong>Anchor worm (<em>Lernaea</em>):</strong> A crustacean parasite that embeds its head into the fish's muscle tissue, with a worm-like body (5–20 mm) protruding from the attachment point. Often seen with a red, inflamed wound at the base. Female anchor worms carry paired egg sacs at their posterior end.</li>
  <li><strong>Fish lice (<em>Argulus</em>):</strong> A flat, disc-shaped crustacean (3–10 mm) that clings to the fish's body and feeds on blood and tissue fluid using a needle-like stylet. Fish lice are mobile — they can detach and swim to a new host.</li>
</ul>

<h3 id="anchor-worm-treatment">Anchor Worm Treatment</h3>
<ol>
  <li><strong>Manual removal:</strong> Using fine-tipped tweezers, grasp the anchor worm as close to the attachment point as possible and pull steadily. Do not yank — the embedded head must come out cleanly or it will cause a secondary infection. Dab the wound with an antiseptic (Betadine or mercurochrome).</li>
  <li><strong>Tank treatment:</strong> Diflubenzuron (Dimilin) is the most effective chemical treatment for anchor worm and fish lice. It inhibits chitin synthesis, preventing larvae from developing their exoskeleton. Dose at 0.03 mg/L. One treatment breaks the reproductive cycle; repeat after 14 days to catch any remaining larvae.</li>
  <li><strong>Alternative:</strong> Potassium permanganate dip (10 mg/L for 30 minutes) kills external parasites but is stressful to the fish. Use as a supplementary treatment after manual removal.</li>
  <li>Treat secondary bacterial infection at the attachment wound with appropriate antibiotics if the wound shows signs of infection (redness, swelling, white exudate).</li>
</ol>

<h2 id="internal-parasites">Internal Parasites</h2>
<p>Internal parasites include tapeworms (<em>Bothriocephalus</em>), roundworms (<em>Camallanus</em>, <em>Capillaria</em>), and protozoa (<em>Hexamita</em>, <em>Spironucleus</em>). Symptoms are often subtle:</p>
<ul>
  <li><strong>White, stringy faeces:</strong> The classic indicator. Normal fish faeces are solid and coloured; parasitised fish produce long, pale, mucoid strings.</li>
  <li><strong>Wasting:</strong> The fish eats normally but loses weight — a "pinched belly" appearance behind the head.</li>
  <li><strong>Bloating:</strong> Severe internal infestations can cause abdominal distension.</li>
  <li><strong>Red, thread-like worms protruding from the anus:</strong> Pathognomonic for <em>Camallanus</em> worms — a serious and common aquarium parasite.</li>
  <li><strong>Hole-in-the-head (HITH):</strong> Pitting erosion on the head and lateral line, associated with <em>Hexamita</em>/<em>Spironucleus</em> infection, particularly in cichlids and Discus.</li>
</ul>

<h3 id="internal-parasite-treatment">Internal Parasite Treatment</h3>
<ul>
  <li><strong>Tapeworms and flatworms:</strong> Praziquantel (PraziPro) — effective both in-water and when soaked into food. Two courses, 7 days each, with a 5-day gap between courses.</li>
  <li><strong>Camallanus (red worms):</strong> Levamisole (Levamisole HCl) at 2 mg/L as an in-water treatment for 24 hours. Perform a large water change, then repeat in 14 days. Alternatively, fenbendazole (Panacur) soaked into food at 0.25 % concentration for 3 days.</li>
  <li><strong>Hexamita/Spironucleus:</strong> Metronidazole (Seachem MetroPlex) — 1 measure per 10 gallons every 48 hours for 3 doses, combined with food soaking using Seachem Focus as a binder. Raise temperature to 86 °F for Discus and cichlids during treatment.</li>
</ul>

<h2 id="parasite-prevention">Parasite Prevention</h2>
<ul>
  <li><strong>Quarantine every new fish</strong> for 30 days minimum. See our <a href="/care/fish-quarantine-guide">quarantine guide</a> for setup details.</li>
  <li><strong>Prophylactically treat new arrivals</strong> with praziquantel during quarantine — this eliminates flukes and internal worms before they enter your display.</li>
  <li><strong>Avoid live tubifex worms</strong> — they are a common vector for parasites and bacteria. Use frozen or cultured alternatives (blackworms from reputable sources, frozen bloodworm).</li>
  <li><strong>Dip new plants</strong> in potassium permanganate (10 mg/L for 10 minutes) or a dilute bleach solution (1:20 for 2 minutes, then rinse and dechlorinate) to kill hitchhiker parasites, snails, and eggs.</li>
  <li><strong>Do not share equipment between tanks</strong> without sterilising. Nets, siphons, and buckets can transfer parasites between systems.</li>
  <li><strong>Maintain water quality.</strong> Healthy fish with strong immune systems resist parasitic infection far more effectively than stressed fish in poor conditions.</li>
</ul>
<p>For broader disease prevention strategies, see our <a href="/care/fish-disease-prevention">disease prevention guide</a>.</p>
`,
    faqs: [
      {
        question: 'What is the most common parasite in aquarium fish?',
        answer:
          'Ich (Ichthyophthirius multifiliis) is the most common overall. Among non-Ich parasites, gill flukes (Dactylogyrus) and skin flukes (Gyrodactylus) are the most prevalent — virtually all wild-caught and many captive-bred fish carry some level of fluke infestation.',
      },
      {
        question: 'Can aquarium parasites infect humans?',
        answer:
          'Freshwater fish parasites are host-specific and do not infect humans. However, the bacteria present in aquarium water (Mycobacterium marinum) can cause skin infections through open cuts. Always wash hands after tank maintenance and wear gloves if you have open wounds.',
      },
      {
        question: 'Is praziquantel safe for shrimp and snails?',
        answer:
          'Praziquantel is generally safe for shrimp at standard doses but can harm some snail species (particularly Nerite and Malaysian Trumpet Snails). If treating a tank with valuable snails, remove them to a separate container during treatment. Copper-based medications are lethal to all invertebrates.',
      },
      {
        question: 'How do I know if my fish has internal parasites?',
        answer:
          'Key signs include white stringy faeces (instead of solid, coloured droppings), wasting despite eating (pinched belly), bloating, lethargy, and in the case of Camallanus worms, red thread-like worms protruding from the anus. Newly purchased fish, particularly wild-caught specimens, should be prophylactically treated with praziquantel.',
      },
    ],
    sources: [
      {
        title: 'Monogenean Parasites of Freshwater Ornamental Fish',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfd.12516',
        publisher: 'Journal of Fish Diseases',
      },
      {
        title: 'Control of Lernaea cyprinacea in Ornamental Fish',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848610004211',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Parasitic Diseases of Ornamental Fish: Diagnosis and Treatment',
        url: 'https://edis.ifas.ufl.edu/publication/FA033',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Oodinium pilularis: Biology and Control',
        url: 'https://www.practicalfishkeeping.co.uk/features/velvet-disease/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['ich-treatment-guide', 'fish-quarantine-guide', 'fish-disease-prevention'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 30 — Fish Disease Prevention
  // ──────────────────────────────────────────────
  {
    title: 'Fish Disease Prevention: Proactive Strategies for Healthy Aquariums',
    slug: 'fish-disease-prevention',
    type: 'care',
    topicCategory: 'disease-treatment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/fish-disease-prevention.jpg',
    heroImageAlt:
      'A thriving planted community aquarium with healthy, vibrant fish demonstrating the result of proactive disease prevention',
    metaTitle: 'Fish Disease Prevention: Proactive Health Strategies | The Fish Collection',
    metaDescription:
      'Prevent fish disease before it starts. Quarantine, water quality, nutrition, stocking, biosecurity, and stress reduction strategies for healthy aquariums.',
    quickAnswerQuestion: 'How do you prevent disease in aquarium fish?',
    quickAnswer:
      'The five pillars of fish disease prevention: (1) quarantine all new arrivals for 30 days, (2) maintain pristine water quality (0 ppm ammonia/nitrite, nitrate below 20 ppm), (3) avoid overcrowding, (4) feed a varied, high-quality diet, and (5) minimise stress through stable temperature, appropriate tank mates, and adequate hiding spaces. Most aquarium diseases are preventable through husbandry, not medication.',
    summary:
      'A proactive guide to preventing disease in freshwater aquariums, covering quarantine protocols, water quality management, nutritional strategies, stocking density, biosecurity practices, stress reduction, and early detection of health problems.',
    keyFacts: [
      { label: 'Top Prevention', value: '30-day quarantine' },
      { label: 'Ammonia/Nitrite', value: 'Always 0 ppm' },
      { label: 'Nitrate Target', value: 'Below 20 ppm' },
      { label: 'Water Changes', value: '25–30 % weekly minimum' },
      { label: 'Diet', value: 'Varied, species-appropriate' },
    ],
    headings: [
      { id: 'prevention-over-cure', text: 'Prevention Over Cure', level: 2 },
      { id: 'quarantine-as-foundation', text: 'Quarantine as the Foundation', level: 2 },
      { id: 'water-quality-management', text: 'Water Quality Management', level: 2 },
      { id: 'water-change-protocol', text: 'Water Change Protocol', level: 3 },
      { id: 'filtration-maintenance', text: 'Filtration Maintenance', level: 3 },
      { id: 'nutrition-and-immunity', text: 'Nutrition and Immune Function', level: 2 },
      { id: 'stocking-density', text: 'Stocking Density and Compatibility', level: 2 },
      { id: 'stress-reduction', text: 'Stress Reduction', level: 2 },
      { id: 'biosecurity', text: 'Biosecurity Between Tanks', level: 2 },
      { id: 'early-detection', text: 'Early Detection: Daily Observation', level: 2 },
      { id: 'medicine-cabinet', text: 'The Fishkeeper\'s Medicine Cabinet', level: 2 },
    ],
    content: `
<h2 id="prevention-over-cure">Prevention Over Cure</h2>
<p>The most successful aquarists rarely treat disease — because they rarely encounter it. Disease prevention in aquariums is not about creating a sterile environment (which is impossible and undesirable) but about maintaining conditions in which fish immune systems function at peak capacity and pathogen loads remain below infectious thresholds. Every aquarium contains bacteria, fungi, and parasites. Whether these organisms cause disease depends almost entirely on the health and stress level of the fish.</p>
<p>This guide covers the six pillars of disease prevention: quarantine, water quality, nutrition, stocking, stress reduction, and biosecurity. Master these, and medication becomes a rare event rather than a regular intervention.</p>

<h2 id="quarantine-as-foundation">Quarantine as the Foundation</h2>
<p>Quarantine is the single most impactful disease prevention practice. Thirty days of isolation for every new fish allows latent infections to manifest, prevents introducing pathogens to established tanks, and provides a controlled environment for prophylactic treatment. Our <a href="/care/fish-quarantine-guide">quarantine guide</a> provides complete setup and protocol details.</p>
<p>Key quarantine principles:</p>
<ul>
  <li>Every new fish, regardless of source, gets 30 days in quarantine.</li>
  <li>Prophylactic treatment with praziquantel (for flukes and worms) and metronidazole (for protozoa) during quarantine catches subclinical infections before they reach the display tank.</li>
  <li>Reset the quarantine clock after any treatment. The fish must be symptom-free for 30 days from the end of the last treatment.</li>
  <li>Never "just this once" skip quarantine. The single time you skip it will be the time a disease gets through.</li>
</ul>

<h2 id="water-quality-management">Water Quality Management</h2>
<p>Water quality is the immune system of the aquarium. When water is clean and parameters are stable, fish resist infection naturally. When water quality degrades, immune suppression occurs within hours, and opportunistic pathogens exploit the vulnerability.</p>

<h3 id="water-change-protocol">Water Change Protocol</h3>
<ul>
  <li><strong>Minimum standard:</strong> 25–30 % weekly water change with dechlorinated, temperature-matched water.</li>
  <li><strong>Heavily stocked tanks:</strong> 30–50 % weekly, or two smaller changes per week.</li>
  <li><strong>Discus and sensitive species:</strong> 30–50 % twice weekly is standard among serious keepers.</li>
  <li><strong>Always vacuum the substrate</strong> during water changes to remove detritus, uneaten food, and organic waste that fuel bacterial and parasitic proliferation.</li>
  <li><strong>Consistent schedule:</strong> Irregular water changes create parameter swings. A consistent day and time each week establishes a stable routine for both you and the fish.</li>
</ul>
<p>Target parameters for disease prevention:</p>
<ul>
  <li>Ammonia: 0 ppm (always, non-negotiable)</li>
  <li>Nitrite: 0 ppm (always, non-negotiable)</li>
  <li>Nitrate: below 20 ppm (below 10 ppm for sensitive species)</li>
  <li>pH: stable within the species' preferred range (consistency matters more than the exact number)</li>
  <li>Temperature: stable within ±1 °F of the set point</li>
</ul>
<p>Test water weekly using a liquid test kit (API Freshwater Master Kit or equivalent). Liquid kits are more accurate and cost-effective per test than strips. See our <a href="/care/water-testing-guide">water testing guide</a> for detailed recommendations.</p>

<h3 id="filtration-maintenance">Filtration Maintenance</h3>
<ul>
  <li>Clean mechanical filter media (sponges, floss) monthly in used tank water — never under tap water, which kills beneficial bacteria.</li>
  <li>Never replace all filter media at once. Stagger replacements to preserve the bacterial colony.</li>
  <li>Ensure the filter provides adequate turnover: 4–6× tank volume per hour for community tanks, 8–10× for messy predator fish.</li>
  <li>A backup filter (second sponge or canister) provides insurance against mechanical failure. If one filter dies, the other maintains the nitrogen cycle while you repair or replace.</li>
</ul>

<h2 id="nutrition-and-immunity">Nutrition and Immune Function</h2>
<p>A varied, species-appropriate diet is the nutritional foundation of immune function. Fish fed a monotonous diet of cheap flake food develop nutritional deficiencies that manifest as poor colour, reduced resistance to disease, and shortened lifespan.</p>
<ul>
  <li><strong>High-quality staple:</strong> Species-specific pellets or granules with whole fish or insect meal as the first ingredient. Avoid foods where wheat flour, soy, or generic "fish meal" leads the ingredient list.</li>
  <li><strong>Variety:</strong> Rotate between 3–4 food types throughout the week — pellets, frozen bloodworm, frozen brine shrimp, frozen daphnia, and occasional live foods.</li>
  <li><strong>Garlic:</strong> Fresh garlic soaked into food (crush a clove into a small amount of tank water, soak pellets for 10 minutes) stimulates appetite and provides allicin, which has demonstrated antimicrobial properties in aquaculture research.</li>
  <li><strong>Vitamins:</strong> A liquid fish vitamin supplement (Vitachem, Selcon) added to food once weekly provides vitamins C and E, both important for immune function.</li>
  <li><strong>Avoid overfeeding:</strong> Uneaten food decomposes, spiking ammonia and fuelling bacterial growth. Feed only what fish consume in 2–3 minutes and remove leftovers promptly.</li>
</ul>

<h2 id="stocking-density">Stocking Density and Compatibility</h2>
<p>Overcrowding is a disease accelerator. High stocking density concentrates waste, increases ammonia production, reduces oxygen availability, elevates stress hormones (cortisol), and increases physical contact between fish — which facilitates parasite transmission.</p>
<ul>
  <li>Research the adult size and space requirements of every species before purchasing.</li>
  <li>The "one inch of fish per gallon" rule is a crude starting point — species-specific research is essential. A 10-inch Oscar produces more waste than ten 1-inch tetras.</li>
  <li>Incompatible tank mates (fin nippers, territorial aggressors, species with different temperature or pH requirements) create chronic stress that suppresses immune function. Species selection is a disease prevention decision.</li>
</ul>

<h2 id="stress-reduction">Stress Reduction</h2>
<p>Stress is the gateway to disease. Cortisol — the primary stress hormone in fish — directly suppresses immune cell activity, reduces mucus production (the first line of defence against parasites), and makes the fish physiologically vulnerable to every pathogen in the water.</p>
<p>Stress reduction strategies:</p>
<ul>
  <li><strong>Stable temperature:</strong> Use a reliable, adjustable heater and verify with a separate thermometer. Temperature swings of 3 °F or more within 24 hours trigger immune suppression.</li>
  <li><strong>Adequate hiding spaces:</strong> Caves, driftwood, and dense plant cover allow subordinate fish to escape aggression. A tank with insufficient cover creates chronic territorial stress.</li>
  <li><strong>Appropriate lighting:</strong> Many species prefer dim environments. Provide a gradual ramp-up/ramp-down photoperiod rather than sudden on/off lighting. 8–10 hours of light daily is sufficient for most planted tanks.</li>
  <li><strong>Minimise disturbance:</strong> Locate the tank away from high-traffic areas, loud speakers, and direct sunlight. Avoid tapping the glass — vibrations stress fish significantly.</li>
  <li><strong>Appropriate current:</strong> Match water flow to species preferences. Bettas need gentle flow; hillstream loaches need strong current. Inappropriate flow is a constant stressor.</li>
</ul>

<h2 id="biosecurity">Biosecurity Between Tanks</h2>
<p>If you maintain multiple aquariums, cross-contamination between tanks is a significant disease vector:</p>
<ul>
  <li><strong>Dedicated equipment:</strong> Each tank should have its own net, siphon, and bucket. If sharing equipment is unavoidable, sterilise between uses (rinse in a dilute bleach solution — 1 part bleach to 10 parts water — then rinse thoroughly with dechlorinated water).</li>
  <li><strong>Hand hygiene:</strong> Wash and dry hands between working on different tanks. Wet hands can transfer parasites, bacteria, and fungal spores.</li>
  <li><strong>Quarantine tank isolation:</strong> Never share nets, siphons, or water between the quarantine tank and any display tank.</li>
  <li><strong>Plant and decoration transfers:</strong> Dip plants and decorations in potassium permanganate (10 mg/L for 10 minutes) before moving between systems.</li>
</ul>

<h2 id="early-detection">Early Detection: Daily Observation</h2>
<p>Spend 2–5 minutes observing your fish during each feeding. This daily habit catches problems early when treatment is simplest:</p>
<ul>
  <li><strong>Behaviour:</strong> Note any changes in swimming pattern, appetite, interaction with tank mates, or activity level. A fish that suddenly hides, stops eating, or swims erratically is signalling a problem.</li>
  <li><strong>Body condition:</strong> Look for clamped fins, spots, patches, discolouration, bloating, wasting, cloudy eyes, or fin erosion.</li>
  <li><strong>Respiration:</strong> Rapid gill movement or surface gasping indicates oxygen deficiency or gill damage.</li>
  <li><strong>Faeces:</strong> White, stringy faeces suggest internal parasites. Solid, coloured faeces are normal.</li>
</ul>
<p>Early detection transforms a treatable problem into a minor inconvenience. Late detection often means fish losses and tank-wide treatment.</p>

<h2 id="medicine-cabinet">The Fishkeeper's Medicine Cabinet</h2>
<p>Keep these on hand for immediate response when problems arise:</p>
<ul>
  <li><strong>Ich-X</strong> (Hikari): malachite green/formalin — for Ich and external protozoan parasites.</li>
  <li><strong>PraziPro</strong> (Hikari): praziquantel — for flukes, tapeworms, and flatworms.</li>
  <li><strong>Seachem Kanaplex:</strong> kanamycin — for bacterial infections (fin rot, columnaris, popeye).</li>
  <li><strong>Seachem MetroPlex:</strong> metronidazole — for internal protozoa (Hexamita, Spironucleus) and hole-in-the-head.</li>
  <li><strong>Seachem Focus:</strong> binding agent for mixing medications into food.</li>
  <li><strong>Aquarium salt:</strong> pure sodium chloride — for mild bacterial infections and Ich support treatment.</li>
  <li><strong>Indian almond leaves:</strong> natural tannin source with antibacterial and antifungal properties.</li>
  <li><strong>API Freshwater Master Test Kit:</strong> ammonia, nitrite, nitrate, pH — for diagnosing water quality problems immediately.</li>
</ul>
<p>Disease prevention is not glamorous. It is water changes, quarantine discipline, proper feeding, and daily observation. But the reward is an aquarium where fish display vibrant colour, natural behaviour, and long lifespans — and where the medicine cabinet collects dust because it is rarely needed.</p>
`,
    faqs: [
      {
        question: 'What is the most important thing for preventing fish disease?',
        answer:
          'Water quality. Maintaining ammonia and nitrite at 0 ppm and nitrate below 20 ppm through regular water changes prevents the vast majority of aquarium diseases. Fish with strong immune systems in clean water resist pathogens that would overwhelm stressed fish in poor conditions.',
      },
      {
        question: 'How often should I test my aquarium water?',
        answer:
          'Weekly testing with a liquid test kit (ammonia, nitrite, nitrate, pH) is the minimum standard. Test more frequently during the first 3 months of a new tank (the cycling and stabilisation period), after adding new fish, after any unexplained fish death, or whenever fish behaviour seems abnormal.',
      },
      {
        question: 'Should I medicate my tank preventively?',
        answer:
          'Do not add medication to a disease-free display tank — it stresses fish, disrupts beneficial bacteria, and promotes resistance. Prophylactic treatment is appropriate only during quarantine of new arrivals, using praziquantel and metronidazole to clear common subclinical parasites before introduction to the display.',
      },
      {
        question: 'Can clean water alone cure fish diseases?',
        answer:
          'Clean water cures or resolves most mild bacterial infections (early fin rot, minor skin lesions) because it allows the fish immune system to function at full capacity. For parasitic infections, Ich, velvet, and established bacterial infections, specific treatment is required in addition to water quality improvement.',
      },
      {
        question: 'Do live plants help prevent disease?',
        answer:
          'Yes. Live plants absorb ammonia, nitrite, and nitrate directly, improving water quality. They also provide hiding places (reducing stress), oxygenate the water, and compete with algae. Densely planted tanks have measurably lower pathogen counts than bare tanks with equivalent fish loads.',
      },
    ],
    sources: [
      {
        title: 'Stress and Disease in Fish: The Cortisol Connection',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/raq.12174',
        publisher: 'Reviews in Aquaculture',
      },
      {
        title: 'Disease Prevention in Ornamental Fish Aquaculture',
        url: 'https://edis.ifas.ufl.edu/publication/FA099',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Water Quality and Fish Health',
        url: 'https://www.practicalfishkeeping.co.uk/features/water-quality-guide/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Immunonutrition in Aquaculture: Effects of Dietary Supplements on Fish Immune Response',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1050464817302085',
        publisher: 'Fish & Shellfish Immunology',
      },
    ],
    relatedSlugs: ['fish-quarantine-guide', 'ich-treatment-guide', 'fin-rot-treatment-guide', 'water-testing-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 31 — Nitrogen Cycle Guide
  // ──────────────────────────────────────────────
  {
    title: 'The Nitrogen Cycle: How to Cycle Your Aquarium',
    slug: 'nitrogen-cycle-guide',
    type: 'care',
    topicCategory: 'water-chemistry',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/nitrogen-cycle-guide.jpg',
    heroImageAlt:
      'Diagram-style aquarium photograph illustrating the nitrogen cycle with beneficial bacteria colonies on filter media and substrate',
    metaTitle: 'Nitrogen Cycle Guide: How to Cycle Your Aquarium | The Fish Collection',
    metaDescription:
      'Complete guide to the aquarium nitrogen cycle. Fishless cycling method, ammonia dosing, bacteria colonisation, testing schedule, and troubleshooting stalled.',
    quickAnswerQuestion: 'What is the nitrogen cycle in an aquarium?',
    quickAnswer:
      'The nitrogen cycle is the biological process where beneficial bacteria convert toxic ammonia (from fish waste) into nitrite (also toxic), then into nitrate (tolerable at low levels). Ammonia-oxidising bacteria (Nitrosomonas) handle the first conversion; nitrite-oxidising bacteria (Nitrospira) handle the second. A cycled tank maintains ammonia and nitrite at 0 ppm. Cycling takes 4–6 weeks using the fishless method with pure ammonia.',
    summary:
      'A comprehensive guide to understanding and establishing the nitrogen cycle in freshwater aquariums, covering the biology of nitrifying bacteria, fishless cycling with ammonia, fish-in cycling, testing protocols, troubleshooting stalled cycles, and maintaining the cycle long-term.',
    keyFacts: [
      { label: 'Ammonia → Nitrite', value: 'Nitrosomonas bacteria' },
      { label: 'Nitrite → Nitrate', value: 'Nitrospira bacteria' },
      { label: 'Cycle Duration', value: '4–6 weeks (fishless)' },
      { label: 'Target Ammonia Dose', value: '2–4 ppm' },
      { label: 'Cycled = ', value: '0 ammonia, 0 nitrite in 24 h' },
    ],
    headings: [
      { id: 'what-is-nitrogen-cycle', text: 'What Is the Nitrogen Cycle?', level: 2 },
      { id: 'ammonia-sources', text: 'Where Ammonia Comes From', level: 2 },
      { id: 'nitrifying-bacteria', text: 'The Nitrifying Bacteria', level: 2 },
      { id: 'nitrosomonas', text: 'Ammonia-Oxidising Bacteria', level: 3 },
      { id: 'nitrospira', text: 'Nitrite-Oxidising Bacteria', level: 3 },
      { id: 'fishless-cycling', text: 'Fishless Cycling Method', level: 2 },
      { id: 'cycling-step-by-step', text: 'Step-by-Step Protocol', level: 3 },
      { id: 'fish-in-cycling', text: 'Fish-In Cycling (Emergency Only)', level: 2 },
      { id: 'testing-during-cycle', text: 'Testing Schedule During Cycling', level: 2 },
      { id: 'troubleshooting-cycle', text: 'Troubleshooting a Stalled Cycle', level: 2 },
      { id: 'maintaining-cycle', text: 'Maintaining the Cycle Long-Term', level: 2 },
    ],
    content: `
<h2 id="what-is-nitrogen-cycle">What Is the Nitrogen Cycle?</h2>
<p>The nitrogen cycle is the most fundamental biological process in aquarium keeping. It is the conversion chain that transforms deadly ammonia — continuously produced by fish waste, uneaten food, and decomposing organic matter — into progressively less toxic compounds through the action of beneficial bacteria. Without an established nitrogen cycle, ammonia accumulates and kills fish within days. With it, an aquarium becomes a self-sustaining biological system capable of supporting life indefinitely.</p>
<p>The cycle has three key nitrogen compounds:</p>
<ol>
  <li><strong>Ammonia (NH₃/NH₄⁺):</strong> Highly toxic. Produced directly by fish (excreted through gills and in urine) and by the decomposition of organic material. Even 0.25 ppm is harmful; above 1 ppm is acutely lethal to most species.</li>
  <li><strong>Nitrite (NO₂⁻):</strong> Also highly toxic. Produced when bacteria oxidise ammonia. Nitrite binds to haemoglobin in fish blood, preventing oxygen transport — a condition called "brown blood disease." Lethal above 0.5 ppm for most freshwater species.</li>
  <li><strong>Nitrate (NO₃⁻):</strong> Comparatively low toxicity. Produced when bacteria oxidise nitrite. Tolerated at concentrations below 20–40 ppm by most freshwater fish. Removed through water changes and plant uptake.</li>
</ol>
<p>A "cycled" aquarium has sufficient populations of two bacterial groups to process ammonia to nitrite to nitrate faster than the fish produce it, maintaining ammonia and nitrite at 0 ppm at all times.</p>

<h2 id="ammonia-sources">Where Ammonia Comes From</h2>
<ul>
  <li><strong>Fish respiration:</strong> Fish excrete ammonia directly through their gills — it is the primary nitrogenous waste product of protein metabolism. This is the largest ammonia source in a stocked aquarium.</li>
  <li><strong>Fish urine and faeces:</strong> Additional ammonia is released as solid waste decomposes on the substrate.</li>
  <li><strong>Uneaten food:</strong> Food that sits in the tank decomposes, producing ammonia. This is why overfeeding is so dangerous — it adds ammonia load without corresponding bacterial capacity.</li>
  <li><strong>Dead organisms:</strong> A dead fish, dead plant material, or dead invertebrate decomposes rapidly, causing an ammonia spike that can overwhelm the cycle.</li>
  <li><strong>Tap water:</strong> Some municipal water supplies contain chloramine (a chlorine-ammonia compound). When dechlorinated with a chloramine-safe conditioner (Seachem Prime, API Tap Water Conditioner), the chlorine is neutralised but ammonia is released — typically 0.5–1 ppm. This is a managed amount for a cycled tank but dangerous for an uncycled one.</li>
</ul>

<h2 id="nitrifying-bacteria">The Nitrifying Bacteria</h2>

<h3 id="nitrosomonas">Ammonia-Oxidising Bacteria</h3>
<p>The first group — historically called <em>Nitrosomonas</em>, though modern genomics shows multiple genera are involved — colonises filter media, substrate, and hard surfaces. These bacteria oxidise ammonia (NH₃) to nitrite (NO₂⁻), using ammonia as their energy source. They are slow-growing, obligately aerobic (requiring oxygen), and autotrophic (they do not need organic food — they fix carbon from CO₂).</p>
<p>Ammonia-oxidising bacteria establish first during cycling because their food source (ammonia) is available immediately. Their population doubles every 12–24 hours under optimal conditions, which is extremely slow compared to most bacteria. This slow growth rate is why cycling takes weeks, not days.</p>

<h3 id="nitrospira">Nitrite-Oxidising Bacteria</h3>
<p>The second group — primarily <em>Nitrospira</em> (not <em>Nitrobacter</em>, as older texts state) — converts nitrite (NO₂⁻) to nitrate (NO₃⁻). These bacteria establish after the ammonia-oxidising group because their food source (nitrite) only becomes available once ammonia oxidation is underway. <em>Nitrospira</em> are even slower-growing than ammonia oxidisers, which is why the nitrite phase of cycling often takes longer than the ammonia phase.</p>

<h2 id="fishless-cycling">Fishless Cycling Method</h2>
<p>Fishless cycling is the ethical and effective method for establishing the nitrogen cycle before any fish are added. You provide ammonia artificially, grow the bacterial colony to full capacity, and only introduce fish once the cycle can process ammonia and nitrite to 0 ppm within 24 hours.</p>

<h3 id="cycling-step-by-step">Step-by-Step Protocol</h3>
<ol>
  <li><strong>Set up the tank fully:</strong> Filter running, heater set to 80–84 °F (27–29 °C) — warmer temperatures accelerate bacterial growth. Substrate, decorations, and plants in place. Dechlorinated water.</li>
  <li><strong>Obtain pure ammonia:</strong> Use Dr Tim's Ammonium Chloride (aquarium-specific) or hardware-store pure ammonia (must contain only ammonia and water — no surfactants, fragrances, or dyes. Shake the bottle: if it foams, it contains surfactants — do not use it).</li>
  <li><strong>Dose ammonia to 2–4 ppm.</strong> Use an ammonia test kit to verify. For a 20-gallon tank, this typically requires 1–3 mL of Dr Tim's ammonia or 4–8 drops of concentrated household ammonia. Add gradually and test.</li>
  <li><strong>Test daily</strong> with a liquid ammonia and nitrite test kit (API Freshwater Master Kit).</li>
  <li><strong>Wait for the ammonia phase:</strong> Over the first 1–2 weeks, ammonia will remain detectable as the ammonia-oxidising bacteria slowly establish. You will begin to see nitrite appear in tests as ammonia starts being converted.</li>
  <li><strong>Wait for the nitrite phase:</strong> Ammonia drops to 0 ppm, but nitrite rises (often to very high levels — 5+ ppm is common). Continue dosing ammonia to 1–2 ppm whenever it drops to 0, to keep feeding the ammonia-oxidising bacteria.</li>
  <li><strong>Wait for nitrite to clear:</strong> As nitrite-oxidising bacteria establish, nitrite begins dropping. This phase can take 2–4 weeks. Do not perform water changes during cycling unless ammonia or nitrite exceed 5 ppm (which can inhibit the bacteria themselves). If levels get too high, perform a 25 % water change.</li>
  <li><strong>Cycle is complete when:</strong> You can dose ammonia to 2 ppm and both ammonia and nitrite read 0 ppm within 24 hours. Nitrate will be elevated — perform a large (50–70 %) water change to bring nitrate below 20 ppm before adding fish.</li>
</ol>
<p>The entire process takes 4–6 weeks. Bottled bacteria products (Fritz Zyme 7, Seachem Stability, Dr Tim's One and Only) can reduce this to 2–3 weeks by providing a starter colony, but they do not eliminate the need for ammonia dosing and testing.</p>

<h2 id="fish-in-cycling">Fish-In Cycling (Emergency Only)</h2>
<p>Fish-in cycling — adding fish to an uncycled tank and allowing their waste to provide the ammonia — is stressful and harmful to the fish. It is only acceptable if you have already purchased fish and have no cycled tank available. If forced into this situation:</p>
<ul>
  <li>Stock very lightly — 1–2 small, hardy fish (not the full intended stock list).</li>
  <li>Test ammonia and nitrite daily.</li>
  <li>Perform 25–50 % water changes whenever ammonia or nitrite exceeds 0.25 ppm.</li>
  <li>Use Seachem Prime as your dechlorinator — it temporarily detoxifies ammonia and nitrite for 24–48 hours (without removing them), providing a safety buffer between water changes.</li>
  <li>Add bottled bacteria (Fritz Zyme 7) to accelerate the cycle.</li>
  <li>Feed sparingly — once daily, small amounts — to minimise ammonia production.</li>
</ul>
<p>Fish-in cycling takes 6–8 weeks and subjects fish to continuous low-level ammonia and nitrite exposure. Fishless cycling is always preferable.</p>

<h2 id="testing-during-cycle">Testing Schedule During Cycling</h2>
<p>Test ammonia and nitrite daily during the cycling process. Record results in a log (spreadsheet or notebook) — the progression pattern tells you exactly where you are:</p>
<ul>
  <li><strong>Days 1–7:</strong> Ammonia high, nitrite 0. Ammonia oxidisers establishing.</li>
  <li><strong>Days 7–14:</strong> Ammonia dropping, nitrite rising. Ammonia oxidisers active.</li>
  <li><strong>Days 14–28:</strong> Ammonia 0 within 24 hours of dosing, nitrite high. Nitrite oxidisers establishing.</li>
  <li><strong>Days 28–42:</strong> Ammonia 0 and nitrite 0 within 24 hours of dosing. Cycle complete.</li>
</ul>
<p>Use a liquid test kit. Test strips are less accurate and can give false readings that lead to incorrect decisions during cycling. The API Freshwater Master Kit provides ammonia, nitrite, nitrate, and pH tests in one package and is the standard recommendation. For deeper water chemistry analysis, see our <a href="/care/water-testing-guide">water testing guide</a> and <a href="/care/water-chemistry-guide">water chemistry guide</a>.</p>

<h2 id="troubleshooting-cycle">Troubleshooting a Stalled Cycle</h2>
<ul>
  <li><strong>Ammonia not dropping after 2 weeks:</strong> Check temperature (should be 80–84 °F), ensure the filter is running with adequate media, verify dechlorinator does not contain aloe or additives that inhibit bacteria. Add bottled bacteria to jumpstart.</li>
  <li><strong>Nitrite stuck at high levels for weeks:</strong> Nitrite-oxidising bacteria are the slowest to establish. If nitrite exceeds 5 ppm, perform a 25 % water change (very high nitrite inhibits the bacteria themselves). Ensure pH is above 6.5 — nitrifying bacteria function poorly in acidic conditions.</li>
  <li><strong>pH crash during cycling:</strong> Nitrification is an acidifying process. In tanks with low KH (carbonate hardness), pH can drop below 6.0, which stalls the bacteria. Add crushed coral or baking soda (1 teaspoon per 20 gallons) to buffer pH above 7.0 during cycling.</li>
  <li><strong>Using medication during cycling:</strong> Antibiotics and some water treatments kill nitrifying bacteria. Never medicate during the cycling process.</li>
</ul>

<h2 id="maintaining-cycle">Maintaining the Cycle Long-Term</h2>
<p>Once established, the nitrogen cycle is self-sustaining as long as you do not disrupt it:</p>
<ul>
  <li><strong>Never replace all filter media at once.</strong> If your filter uses multiple cartridges, sponges, or media baskets, replace them one at a time with 2–4 week gaps. Replacing everything simultaneously removes the bacterial colony and crashes the cycle.</li>
  <li><strong>Never wash filter media in tap water.</strong> Chlorine and chloramine in tap water kill nitrifying bacteria instantly. Always rinse filter sponges and media in used tank water during water changes.</li>
  <li><strong>Do not over-clean.</strong> The substrate and decorations also host beneficial bacteria. Light vacuuming during water changes is sufficient — deep, thorough substrate cleaning removes too much of the bacterial colony.</li>
  <li><strong>Stock gradually.</strong> After cycling, add fish in small batches (2–3 at a time) with 2-week gaps between additions. This allows the bacterial colony to increase in proportion to the rising ammonia load. Adding 20 fish at once to a freshly cycled tank overwhelms the cycle.</li>
  <li><strong>Continue testing.</strong> Test ammonia and nitrite weekly for the first 3 months after stocking. Once consistently stable at 0/0, reduce to monthly testing unless problems arise.</li>
</ul>
<p>The nitrogen cycle is the invisible engine that makes aquarium life possible. Every other aspect of fishkeeping — from species selection to feeding to disease prevention — depends on this biological foundation being in place and functioning. Invest the 4–6 weeks to cycle properly, and the reward is a stable, healthy system for years to come.</p>
`,
    faqs: [
      {
        question: 'How long does it take to cycle an aquarium?',
        answer:
          'Fishless cycling with pure ammonia takes 4–6 weeks. Using bottled bacteria products can reduce this to 2–3 weeks. Seeding the filter with media from an established tank can further accelerate the process. There is no reliable shortcut to a fully mature cycle — patience is required.',
      },
      {
        question: 'Can I add fish during cycling?',
        answer:
          'Fish-in cycling is possible but harmful to the fish. They are exposed to toxic ammonia and nitrite throughout the process, which causes gill damage, immune suppression, and stress. Fishless cycling is always the recommended approach. If you must do fish-in cycling, stock very lightly, test daily, and perform water changes whenever ammonia or nitrite exceeds 0.25 ppm.',
      },
      {
        question: 'Do bottled bacteria products actually work?',
        answer:
          'Yes, quality bottled bacteria products (Fritz Zyme 7, Dr Tim\'s One and Only, Seachem Stability) contain live nitrifying bacteria that can seed the filter and accelerate cycling. They do not eliminate the need for ammonia dosing and testing, but they can reduce cycle time from 6 weeks to 2–3 weeks. Refrigerated products tend to have higher viability than shelf-stable ones.',
      },
      {
        question: 'What ammonia level should I dose to during fishless cycling?',
        answer:
          'Dose to 2–4 ppm ammonia initially. Re-dose to 1–2 ppm whenever ammonia drops to 0 during the cycling process. Do not dose above 4 ppm — extremely high ammonia can inhibit the bacteria you are trying to grow. Verify concentration with a liquid ammonia test kit after each dose.',
      },
    ],
    sources: [
      {
        title: 'Nitrification in Freshwater Recirculating Aquaculture Systems',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848606001761',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Nitrospira: The Dominant Nitrite-Oxidiser in Aquarium Biofilters',
        url: 'https://www.nature.com/articles/ismej201556',
        publisher: 'ISME Journal (Nature)',
      },
      {
        title: 'Establishing Biological Filtration in Home Aquaria',
        url: 'https://edis.ifas.ufl.edu/publication/FA099',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Ammonia Toxicity in Freshwater Fish: A Review',
        url: 'https://www.practicalfishkeeping.co.uk/features/understanding-ammonia/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['water-testing-guide', 'water-chemistry-guide', 'fish-disease-prevention'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 32 — Water Testing Guide
  // ──────────────────────────────────────────────
  {
    title: 'Aquarium Water Testing Guide: Kits, Parameters & Schedule',
    slug: 'water-testing-guide',
    type: 'care',
    topicCategory: 'water-chemistry',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/water-testing-guide.jpg',
    heroImageAlt:
      'An aquarist performing a liquid water test with coloured reagent vials beside a freshwater aquarium',
    metaTitle: 'Aquarium Water Testing Guide: Which Kit & How Often | The Fish Collection',
    metaDescription:
      'How to test aquarium water correctly. Liquid vs. strip test kits, reading ammonia, nitrite, nitrate, pH, GH, KH, and a recommended testing schedule.',
    quickAnswerQuestion: 'How do you test aquarium water?',
    quickAnswer:
      'Use a liquid reagent test kit (API Freshwater Master Kit is the standard). Test ammonia, nitrite, nitrate, and pH weekly — more frequently during cycling or after problems. Fill the test vial with tank water, add the correct number of reagent drops, shake for the specified time, wait the full development period, and compare the colour to the provided chart under natural light.',
    summary:
      'A practical guide to testing aquarium water parameters, comparing liquid vs. strip kits, explaining each parameter (ammonia, nitrite, nitrate, pH, GH, KH, TDS), recommending testing schedules, and interpreting results for corrective action.',
    keyFacts: [
      { label: 'Best Kit', value: 'API Freshwater Master Kit' },
      { label: 'Core Tests', value: 'Ammonia, nitrite, nitrate, pH' },
      { label: 'Testing Frequency', value: 'Weekly minimum' },
      { label: 'During Cycling', value: 'Test daily' },
      { label: 'Advanced Tests', value: 'GH, KH, TDS, phosphate' },
    ],
    headings: [
      { id: 'why-test-water', text: 'Why Water Testing Matters', level: 2 },
      { id: 'liquid-vs-strips', text: 'Liquid Kits vs. Test Strips', level: 2 },
      { id: 'core-parameters', text: 'Core Parameters to Test', level: 2 },
      { id: 'testing-ammonia', text: 'Ammonia (NH₃/NH₄⁺)', level: 3 },
      { id: 'testing-nitrite', text: 'Nitrite (NO₂⁻)', level: 3 },
      { id: 'testing-nitrate', text: 'Nitrate (NO₃⁻)', level: 3 },
      { id: 'testing-ph', text: 'pH', level: 3 },
      { id: 'advanced-parameters', text: 'Advanced Parameters', level: 2 },
      { id: 'gh-kh-tds', text: 'GH, KH, and TDS', level: 3 },
      { id: 'testing-schedule', text: 'Recommended Testing Schedule', level: 2 },
      { id: 'interpreting-results', text: 'Interpreting Results and Taking Action', level: 2 },
    ],
    content: `
<h2 id="why-test-water">Why Water Testing Matters</h2>
<p>Water testing is to fishkeeping what blood tests are to medicine — it reveals problems invisible to the naked eye before they become emergencies. Fish can appear healthy for days while ammonia slowly rises to toxic levels. By the time you see symptoms (gasping, lethargy, clamped fins), organ damage is already underway. Regular testing catches parameter shifts early, when a simple water change solves the problem, rather than after fish are sick or dying.</p>
<p>Testing is especially critical during three periods: the initial cycling of a new tank (daily testing), the first three months after stocking (weekly testing), and whenever anything unusual occurs — a fish death, behaviour change, new addition, or equipment failure. Experienced aquarists who have maintained a tank for years can reduce testing frequency, but even they test monthly to confirm the stability their routine provides.</p>

<h2 id="liquid-vs-strips">Liquid Kits vs. Test Strips</h2>
<p><strong>Liquid reagent kits</strong> (API Freshwater Master Kit, Salifert, Hanna Instruments) are the standard. They are more accurate, more consistent between batches, and more cost-effective per test than strips. The API Freshwater Master Kit costs approximately $25–30 and provides about 800 tests — roughly $0.03 per test. Each test involves filling a glass vial with tank water, adding a precise number of reagent drops, shaking, waiting a specified development time, and comparing the resulting colour against a reference card.</p>
<p><strong>Test strips</strong> (API 5-in-1, Tetra EasyStrips) are convenient — dip and read. However, they are less accurate (especially for ammonia and nitrite at low concentrations), have wider margins of error, and cost more per test. They expire faster once the container is opened due to moisture exposure. Strips are acceptable for quick checks between liquid tests but should not be your primary testing tool.</p>
<p><strong>Digital testers</strong> (Hanna Instruments colorimeters) provide the highest accuracy and eliminate subjective colour reading. They are expensive ($40–70 per parameter) but worth the investment for advanced keepers maintaining sensitive species (Discus, stingrays, marine reef tanks).</p>

<h2 id="core-parameters">Core Parameters to Test</h2>

<h3 id="testing-ammonia">Ammonia (NH₃/NH₄⁺)</h3>
<p>Ammonia is the most critical parameter to monitor. Target: <strong>0 ppm at all times.</strong> Any detectable ammonia in a cycled tank indicates a problem — overfeeding, dead fish, filter failure, or an overwhelmed nitrogen cycle.</p>
<p>The API ammonia test uses a Nessler reagent that produces a yellow-to-green colour scale. Read the result after exactly 5 minutes of development time. Under-timing produces false low readings; over-timing produces false high readings. Shake Bottle #2 vigorously for 30 seconds — the reagent separates during storage, and inadequate mixing is the most common cause of inaccurate ammonia results.</p>
<p><strong>Important:</strong> Some dechlorinators (Seachem Prime) bind ammonia into a non-toxic form (ammonium) that still registers on most test kits. If you test within 24 hours of adding Prime, a positive ammonia reading may be harmless. Retest 48 hours after the last Prime dose for a true reading.</p>

<h3 id="testing-nitrite">Nitrite (NO₂⁻)</h3>
<p>Target: <strong>0 ppm at all times.</strong> Nitrite is toxic at very low concentrations — above 0.25 ppm causes stress; above 1 ppm can be lethal. The API nitrite test produces a blue-to-purple colour scale. Read after 5 minutes.</p>
<p>Detectable nitrite in a cycled tank usually indicates the cycle is struggling — either the filter is undersized, too much media was replaced at once, or the bioload increased too quickly (too many new fish added at once).</p>

<h3 id="testing-nitrate">Nitrate (NO₃⁻)</h3>
<p>Target: <strong>below 20 ppm</strong> (below 40 ppm is acceptable for hardy species). Nitrate is the end product of the nitrogen cycle and accumulates between water changes. It is far less toxic than ammonia or nitrite but causes harm at chronic elevated levels — stunted growth, reduced colour, weakened immunity, and algae blooms.</p>
<p>The API nitrate test is the most error-prone test in the kit. <strong>Shake Bottle #2 vigorously for at least 30 seconds</strong>, then shake the sealed test vial for 60 seconds. The reagent contains precipitated crystite that settles in the bottle — without vigorous shaking, results read falsely low. Many aquarists who think their nitrate is 0 ppm actually have high nitrate masked by an under-shaken reagent.</p>

<h3 id="testing-ph">pH</h3>
<p>Target: <strong>stable within the species' preferred range.</strong> Most freshwater tropical fish thrive at pH 6.5–7.5. Stability is more important than hitting an exact number — a stable pH of 7.8 is healthier than a pH swinging between 6.5 and 7.0 due to chemical adjustments.</p>
<p>The API kit includes two pH tests: standard range (6.0–7.6) and high range (7.4–8.8). Start with the standard range test. If the result reads the maximum (7.6), switch to the high range test for an accurate reading.</p>
<p>Test pH at the same time of day consistently — pH naturally fluctuates in planted tanks (higher during the day due to CO₂ uptake, lower at night). Testing at a consistent time reveals true trends rather than diurnal variation.</p>

<h2 id="advanced-parameters">Advanced Parameters</h2>

<h3 id="gh-kh-tds">GH, KH, and TDS</h3>
<p>These parameters describe the mineral content of your water:</p>
<ul>
  <li><strong>GH (General Hardness):</strong> Measures dissolved calcium and magnesium. Expressed in degrees (dGH) or ppm. Soft water: 0–4 dGH; moderate: 4–12 dGH; hard: 12+ dGH. Softwater species (Discus, cardinal tetras, Bettas) prefer 2–8 dGH; hardwater species (African cichlids, livebearers) prefer 10–20 dGH.</li>
  <li><strong>KH (Carbonate Hardness):</strong> Measures carbonate and bicarbonate ions — the buffering capacity of the water. Higher KH resists pH changes; low KH allows pH to crash. A KH below 2 dKH puts you at risk for dangerous pH drops, especially in planted tanks with CO₂ injection.</li>
  <li><strong>TDS (Total Dissolved Solids):</strong> Measured with an electronic TDS meter. Indicates overall mineral and solute concentration. Useful for monitoring RO water remineralisation and detecting gradual mineral accumulation between water changes. Most freshwater fish thrive at 100–400 ppm TDS.</li>
</ul>
<p>Test GH and KH with a liquid drop test (API GH/KH Test Kit). Add drops one at a time to a water sample until the colour changes — the number of drops equals the dGH or dKH value. For comprehensive water chemistry understanding, see our <a href="/care/water-chemistry-guide">water chemistry guide</a>.</p>

<h2 id="testing-schedule">Recommended Testing Schedule</h2>
<ul>
  <li><strong>During cycling:</strong> Test ammonia and nitrite daily. Test nitrate weekly.</li>
  <li><strong>First 3 months after stocking:</strong> Test ammonia, nitrite, nitrate, and pH weekly.</li>
  <li><strong>Established tanks (3+ months):</strong> Test all four core parameters weekly. Reduce to biweekly once consistency is established over several months.</li>
  <li><strong>After any event</strong> (fish death, new fish added, medication, equipment failure, missed water change): Test immediately, then daily for 3–5 days.</li>
  <li><strong>GH, KH:</strong> Monthly, or after switching water sources or adding mineral supplements.</li>
  <li><strong>Tap water baseline:</strong> Test your tap water for ammonia, pH, GH, and KH once when you set up the tank and again if your water utility issues a quality notice. Tap water parameters vary seasonally in some regions.</li>
</ul>

<h2 id="interpreting-results">Interpreting Results and Taking Action</h2>
<ul>
  <li><strong>Ammonia above 0 ppm:</strong> Perform an immediate 50 % water change. Investigate cause — dead fish, overfeeding, filter failure, cycle crash. Dose Seachem Prime to detoxify remaining ammonia. Test daily until stable at 0.</li>
  <li><strong>Nitrite above 0 ppm:</strong> Same emergency response as ammonia. Check that filter media has not been recently replaced or washed in tap water.</li>
  <li><strong>Nitrate above 40 ppm:</strong> Perform a 50 % water change immediately. Increase water change frequency and/or volume going forward. Check for overfeeding, overstocking, or clogged filter media trapping detritus.</li>
  <li><strong>pH drop below 6.0:</strong> Check KH — if KH is below 2, the buffering capacity is exhausted. Add crushed coral to the filter or perform a water change with higher-KH water. Do not chase pH with chemicals unless you understand the underlying cause.</li>
  <li><strong>Persistent high nitrate despite water changes:</strong> Test your tap water for nitrate — in some agricultural areas, tap water itself contains 20–40 ppm nitrate. If so, consider using RO or RO/DI water for water changes.</li>
</ul>
<p>Water testing is not a chore — it is information. Every test result tells you something about the health of your system. The 5 minutes spent testing weekly saves the hours of emergency treatment, fish loss, and frustration that come from flying blind. For guidance on adjusting water parameters, see our <a href="/care/water-chemistry-guide">comprehensive water chemistry guide</a>.</p>
`,
    faqs: [
      {
        question: 'What is the best water test kit for aquariums?',
        answer:
          'The API Freshwater Master Kit is the standard recommendation. It tests ammonia, nitrite, nitrate, and pH with liquid reagents at roughly $0.03 per test. For advanced parameters (GH, KH), add the API GH/KH kit. For higher accuracy, Hanna Instruments colorimeters are the professional choice.',
      },
      {
        question: 'Are test strips accurate enough?',
        answer:
          'Test strips are less accurate than liquid kits, especially for ammonia and nitrite at low concentrations — exactly the range where accuracy matters most. They are acceptable for quick checks between liquid tests but should not be your primary testing method for critical parameters.',
      },
      {
        question: 'Why does my nitrate test always read 0?',
        answer:
          'Most likely, you are not shaking Bottle #2 of the API nitrate test vigorously enough. The reagent contains a crystalline precipitate that settles in the bottle. Shake Bottle #2 for at least 30 seconds, then shake the capped test vial for 60 seconds after adding drops. Retest — you will likely see a different result.',
      },
      {
        question: 'How often should I test a mature, stable tank?',
        answer:
          'Weekly testing is the gold standard. Once a tank has been stable for 6+ months with consistent maintenance, experienced keepers may test biweekly. Always test immediately after any event — fish death, new addition, medication, equipment failure, or missed water change.',
      },
    ],
    sources: [
      {
        title: 'Water Quality for Ornamental Fish: Testing and Interpretation',
        url: 'https://edis.ifas.ufl.edu/publication/FA002',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Accuracy Comparison of Aquarium Water Test Methods',
        url: 'https://www.practicalfishkeeping.co.uk/features/test-kit-accuracy/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Nitrogen Compounds and Their Toxicity to Freshwater Fish',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848605004569',
        publisher: 'Aquaculture (Elsevier)',
      },
    ],
    relatedSlugs: ['nitrogen-cycle-guide', 'water-chemistry-guide', 'fish-disease-prevention'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 33 — Water Chemistry Guide
  // ──────────────────────────────────────────────
  {
    title: 'Aquarium Water Chemistry: pH, GH, KH & TDS Explained',
    slug: 'water-chemistry-guide',
    type: 'care',
    topicCategory: 'water-chemistry',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/water-chemistry-guide.jpg',
    heroImageAlt:
      'A row of coloured water test vials beside a planted aquarium displaying various pH and hardness test results',
    metaTitle: 'Aquarium Water Chemistry: pH, GH, KH & TDS | The Fish Collection',
    metaDescription:
      'Understand aquarium water chemistry: pH, general hardness (GH), carbonate hardness (KH), TDS, and how to adjust parameters safely for freshwater fish.',
    quickAnswerQuestion: 'What water parameters matter for aquarium fish?',
    quickAnswer:
      'The four key water chemistry parameters are pH (acidity/alkalinity, most freshwater fish prefer 6.5–7.5), GH (general hardness from calcium and magnesium, 4–12 dGH for most tropicals), KH (carbonate hardness that buffers pH, 2–8 dKH minimum), and TDS (total dissolved solids, 100–400 ppm for most freshwater). Stability of parameters is more important than hitting exact numbers — avoid chasing specific values with chemicals.',
    summary:
      'A comprehensive overview of freshwater aquarium water chemistry covering pH, general hardness (GH), carbonate hardness (KH), TDS, the relationship between parameters, how to raise and lower each safely, and species-specific requirements.',
    keyFacts: [
      { label: 'pH Range', value: '6.0–8.0 (species dependent)' },
      { label: 'GH Range', value: '4–12 dGH (most tropicals)' },
      { label: 'KH Minimum', value: '2 dKH to prevent pH crash' },
      { label: 'TDS Range', value: '100–400 ppm (freshwater)' },
      { label: 'Key Principle', value: 'Stability over precision' },
    ],
    headings: [
      { id: 'water-chemistry-overview', text: 'Water Chemistry Overview', level: 2 },
      { id: 'understanding-ph', text: 'Understanding pH', level: 2 },
      { id: 'lowering-ph', text: 'How to Lower pH Safely', level: 3 },
      { id: 'raising-ph', text: 'How to Raise pH Safely', level: 3 },
      { id: 'general-hardness', text: 'General Hardness (GH)', level: 2 },
      { id: 'carbonate-hardness', text: 'Carbonate Hardness (KH)', level: 2 },
      { id: 'kh-ph-relationship', text: 'The KH-pH Relationship', level: 3 },
      { id: 'total-dissolved-solids', text: 'Total Dissolved Solids (TDS)', level: 2 },
      { id: 'ro-water', text: 'Using RO Water', level: 2 },
      { id: 'species-requirements', text: 'Species-Specific Requirements', level: 2 },
      { id: 'stability-principle', text: 'The Stability Principle', level: 2 },
    ],
    content: `
<h2 id="water-chemistry-overview">Water Chemistry Overview</h2>
<p>Aquarium water is not just H₂O — it is a complex solution of dissolved minerals, gases, organic compounds, and ions that profoundly affect fish health. The four primary chemistry parameters — pH, GH, KH, and TDS — describe different aspects of this solution. Understanding them allows you to match your water to your fish's requirements and, more importantly, to maintain the stability that prevents stress and disease.</p>
<p>The cardinal rule of water chemistry is: <strong>stability is more important than precision.</strong> A fish kept at a stable pH of 7.6 is healthier than one subjected to pH swings between 6.5 and 7.2 caused by well-intentioned but misguided chemical adjustments. Fish adapt to a wide range of parameters over time, but they tolerate rapid changes very poorly.</p>

<h2 id="understanding-ph">Understanding pH</h2>
<p>pH measures the concentration of hydrogen ions in water on a logarithmic scale from 0 (most acidic) to 14 (most alkaline), with 7.0 being neutral. The logarithmic nature means each whole number change represents a tenfold difference in hydrogen ion concentration — a pH of 6.0 is ten times more acidic than 7.0, and one hundred times more acidic than 8.0.</p>
<p>Most freshwater tropical fish thrive in the pH 6.5–7.5 range. However, species-specific preferences vary significantly:</p>
<ul>
  <li><strong>Softwater acid-loving species:</strong> Discus, cardinal tetras, most South American species — pH 5.5–6.8.</li>
  <li><strong>Neutral-water species:</strong> Most community fish, Bettas, guppies — pH 6.5–7.5.</li>
  <li><strong>Hardwater alkaline species:</strong> African Rift Lake cichlids, livebearers — pH 7.5–8.5.</li>
</ul>
<p>Your tap water pH is your baseline. Most municipal water falls between 7.0 and 8.0. Work with your tap water rather than fighting it — choose fish suited to your natural water chemistry whenever possible.</p>

<h3 id="lowering-ph">How to Lower pH Safely</h3>
<ul>
  <li><strong>RO water blending:</strong> The safest method. Mix reverse osmosis (RO) water (pH ~7.0, zero minerals) with tap water to achieve the desired pH. This simultaneously lowers GH and KH. See the RO water section below.</li>
  <li><strong>Indian almond leaves and driftwood:</strong> Release tannins that gently acidify water. Effective for modest reductions (0.2–0.5 pH units). The amber tint mimics natural blackwater habitats. Add 1–2 medium leaves per 10 gallons; replace every 2–3 weeks.</li>
  <li><strong>Peat filtration:</strong> Place peat moss in a filter media bag inside the filter. Peat releases humic and tannic acids that lower pH. The effect is gradual and can be controlled by the amount of peat used. Pre-soak peat to remove initial tannin burst.</li>
  <li><strong>CO₂ injection:</strong> In planted tanks, CO₂ dissolves to form carbonic acid, lowering pH. This is primarily a plant-growth technique but has a significant pH-lowering effect. CO₂ causes daily pH swings (lower during the day, higher at night) — ensure KH is adequate to prevent crashes.</li>
  <li><strong>Avoid pH-down chemicals:</strong> Phosphoric acid-based products (API pH Down) create temporary changes that rebound within hours, causing the very instability you are trying to avoid. They also add phosphate, fuelling algae growth.</li>
</ul>

<h3 id="raising-ph">How to Raise pH Safely</h3>
<ul>
  <li><strong>Crushed coral:</strong> Place in a media bag inside the filter. Coral dissolves slowly in acidic water, releasing calcium carbonate that raises both pH and KH. The effect is self-regulating — it dissolves faster at lower pH and slower at higher pH. Excellent for African cichlid tanks.</li>
  <li><strong>Limestone and Texas holey rock:</strong> Decorative rocks that leach calcium carbonate, gently raising pH and hardness.</li>
  <li><strong>Baking soda (sodium bicarbonate):</strong> Raises KH (and therefore pH). Dose 1 teaspoon per 20 gallons, dissolved in water, added gradually. Test KH before and after. Do not add large amounts at once — raise KH by no more than 1–2 dKH per day.</li>
  <li><strong>Epsom salt (magnesium sulphate):</strong> Raises GH specifically (adds magnesium). Does not directly raise pH but contributes to mineral content. Dose 1 tablespoon per 5 gallons for a 1 dGH increase.</li>
</ul>

<h2 id="general-hardness">General Hardness (GH)</h2>
<p>GH measures the concentration of dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) ions. These minerals are essential for fish health — calcium supports bone development, scale integrity, and osmoregulation; magnesium is required for enzyme function and nerve transmission. GH is expressed in degrees (dGH) or ppm (1 dGH = 17.86 ppm).</p>
<ul>
  <li><strong>Soft water:</strong> 0–4 dGH. Found in areas with granite or sandstone geology. Preferred by Discus, South American tetras, Bettas, and most rasboras.</li>
  <li><strong>Moderate:</strong> 4–12 dGH. The sweet spot for most community tropical fish.</li>
  <li><strong>Hard water:</strong> 12–20+ dGH. Found in limestone regions. Preferred by African cichlids, livebearers (guppies, mollies, swordtails), and brackish species.</li>
</ul>
<p>To lower GH: blend tap water with RO water. To raise GH: add Seachem Equilibrium (balanced calcium/magnesium supplement) or Epsom salt (magnesium only).</p>

<h2 id="carbonate-hardness">Carbonate Hardness (KH)</h2>
<p>KH measures dissolved carbonates (CO₃²⁻) and bicarbonates (HCO₃⁻) — the buffering compounds that prevent pH from changing rapidly. KH is the safety net of your aquarium chemistry: adequate KH prevents the pH crashes that kill fish overnight.</p>

<h3 id="kh-ph-relationship">The KH-pH Relationship</h3>
<p>KH acts as a pH buffer by absorbing and neutralising acids produced by biological processes in the tank (nitrification, respiration, organic decomposition). As long as KH remains above 2 dKH, it can absorb acid production without pH changing significantly. When KH is depleted (approaches 0), pH drops suddenly and dramatically — often from 7.0 to 5.0 overnight — a "pH crash" that is lethal to most fish.</p>
<p>KH is consumed over time as it buffers acid. Water changes replenish it (assuming your tap water has adequate KH). If your tap water is naturally low in KH, supplement with baking soda (1 teaspoon per 20 gallons raises KH by approximately 1 dKH) or crushed coral in the filter.</p>
<p><strong>Minimum safe KH:</strong> 2 dKH for most setups. 4+ dKH for planted tanks with CO₂ injection (CO₂ produces carbonic acid that consumes KH). African cichlid tanks should maintain 8–12 dKH.</p>

<h2 id="total-dissolved-solids">Total Dissolved Solids (TDS)</h2>
<p>TDS measures the total concentration of all dissolved substances in water — minerals, salts, metals, organic compounds — expressed in parts per million (ppm). Measured instantly with an inexpensive electronic TDS meter (pen-style, $10–15).</p>
<p>TDS is a broad indicator rather than a specific diagnostic. It tells you the overall mineral load but not what those minerals are. Its primary uses in aquarium keeping:</p>
<ul>
  <li><strong>Monitoring RO water remineralisation:</strong> Pure RO water has 0 ppm TDS. After adding remineraliser (Seachem Equilibrium or Salty Shrimp GH/KH+), TDS tells you how much mineral content has been restored.</li>
  <li><strong>Detecting gradual accumulation:</strong> If TDS rises steadily between water changes despite stable GH and KH, dissolved organic compounds may be accumulating — increase water change volume or frequency.</li>
  <li><strong>Shrimp keeping:</strong> Crystal shrimp and Caridina species are extremely sensitive to TDS, requiring 100–200 ppm. TDS monitoring is essential for shrimp breeding tanks.</li>
</ul>
<p>For most freshwater fish, TDS between 100 and 400 ppm is appropriate. Below 50 ppm stresses most species (insufficient mineral content); above 500 ppm may indicate excessive dissolved waste or overmineralisation.</p>

<h2 id="ro-water">Using RO Water</h2>
<p>Reverse osmosis (RO) water is produced by forcing tap water through a semi-permeable membrane that removes 90–99 % of dissolved minerals, chlorine, chloramine, and contaminants. The result is nearly pure water (0–10 ppm TDS) with neutral pH and zero hardness.</p>
<p>RO water is essential for:</p>
<ul>
  <li>Keeping softwater species (Discus, wild-type Bettas, South American species) when your tap water is hard or alkaline.</li>
  <li>Precise control of GH and KH through custom remineralisation.</li>
  <li>Eliminating tap water contaminants (phosphate, silicate, heavy metals, nitrate).</li>
</ul>
<p><strong>Never use pure RO water without remineralising.</strong> Zero-mineral water causes osmotic stress — minerals flow out of the fish's body into the mineral-free water, disrupting cellular function. Always add a remineraliser (Seachem Equilibrium for GH, baking soda for KH, or an all-in-one product like Salty Shrimp GH/KH+) to RO water before use.</p>
<p>A typical recipe for softwater tropical fish: blend 75 % RO water with 25 % tap water, or remineralise pure RO to 4–6 dGH and 2–4 dKH. Adjust the ratio to achieve your target parameters.</p>

<h2 id="species-requirements">Species-Specific Requirements</h2>
<ul>
  <li><strong>Discus:</strong> pH 5.5–6.8, GH 1–4 dGH, KH 1–3 dKH, TDS 50–150 ppm, temperature 28–30 °C. Soft, acidic, warm water. RO water usually required unless your tap water is naturally soft. See our <a href="/care/discus-water-parameters">Discus water parameters guide</a>.</li>
  <li><strong>African Rift Lake Cichlids:</strong> pH 7.5–8.5, GH 10–20 dGH, KH 8–14 dKH. Hard, alkaline water. Most tap water requires hardening with crushed coral, limestone, or Seachem Cichlid Lake Salt. See our <a href="/care/cichlid-water-parameters">cichlid water parameters guide</a>.</li>
  <li><strong>Bettas:</strong> pH 6.5–7.5, GH 3–12 dGH, KH 2–8 dKH. Adaptable — most tap water is suitable. Indian almond leaves provide mild acidification and antibacterial tannins.</li>
  <li><strong>Arowana:</strong> pH 6.0–7.0, GH 2–8 dGH, KH 2–6 dKH. Soft, slightly acidic water. RO blending often needed. Browse our <a href="/exotic-fish/arowana">Arowana collection</a> for available specimens.</li>
  <li><strong>Crystal Shrimp (Caridina):</strong> pH 5.5–6.5, GH 4–6 dGH, KH 0–1 dKH, TDS 100–200 ppm. Requires buffering substrate (ADA Amazonia) and pure RO water remineralised to exact parameters.</li>
</ul>

<h2 id="stability-principle">The Stability Principle</h2>
<p>Every adjustment you make to water chemistry introduces risk. Chemical buffers rebound. pH adjusters create instability. Additives interact unpredictably. The safest approach to water chemistry is:</p>
<ol>
  <li><strong>Test your tap water.</strong> Know your baseline pH, GH, and KH.</li>
  <li><strong>Choose fish suited to your tap water.</strong> This is the path of least resistance and greatest stability.</li>
  <li><strong>If your dream fish requires different water,</strong> use RO water blended with tap water to achieve the target. RO blending is the most controllable, predictable method for adjusting chemistry.</li>
  <li><strong>Make changes gradually.</strong> Never adjust pH by more than 0.2 units per day or GH/KH by more than 1 dGH/dKH per day. Rapid changes cause osmotic shock and pH shock — both are immediately dangerous.</li>
  <li><strong>Maintain consistency.</strong> Use the same water preparation method for every water change. The fish adapt to your specific water chemistry — changing the recipe creates instability.</li>
</ol>
<p>Water chemistry is not complicated once you understand the principles. Test, understand your water, choose compatible fish, and maintain consistency. The fish will do the rest.</p>
`,
    faqs: [
      {
        question: 'Should I chase a specific pH for my fish?',
        answer:
          'No. Stability is far more important than hitting a precise number. Most freshwater fish adapt to a range of pH values. A stable pH of 7.6 is healthier than one swinging between 6.5 and 7.0 due to chemical additives. Only adjust pH if your water is significantly outside your species\' tolerance range (e.g., pH 8.5 tap water for Discus that need 6.0–6.8).',
      },
      {
        question: 'What causes pH to drop suddenly?',
        answer:
          'A sudden pH drop ("pH crash") occurs when KH is depleted. KH buffers acid produced by biological processes (nitrification, organic decomposition). When KH reaches 0, there is nothing left to absorb acid, and pH plummets — often from 7.0 to 5.0 overnight. Prevent this by maintaining KH above 2 dKH through regular water changes and, if needed, crushed coral or baking soda supplementation.',
      },
      {
        question: 'Do I need an RO system?',
        answer:
          'You need RO water if your tap water is too hard or alkaline for your target species (Discus, crystal shrimp, wild-type Bettas from blackwater habitats) or if your tap water contains high levels of nitrate, phosphate, or silicate. For most community fish (tetras, barbs, Corydoras, Bettas), dechlorinated tap water is perfectly adequate.',
      },
      {
        question: 'What is the difference between GH and KH?',
        answer:
          'GH (General Hardness) measures calcium and magnesium — minerals essential for fish health. KH (Carbonate Hardness) measures carbonates and bicarbonates — the buffering compounds that prevent pH crashes. They are independent: water can be high GH / low KH or vice versa. Both need to be within appropriate ranges for your species.',
      },
    ],
    sources: [
      {
        title: 'Water Chemistry for Freshwater Aquariums',
        url: 'https://edis.ifas.ufl.edu/publication/FA002',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'The Role of Water Hardness in Fish Physiology',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1546509806010057',
        publisher: 'Fish Physiology (Elsevier)',
      },
      {
        title: 'pH Management in Ornamental Fish Aquaria',
        url: 'https://www.practicalfishkeeping.co.uk/features/ph-explained/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['nitrogen-cycle-guide', 'water-testing-guide', 'discus-water-parameters'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 34 — Arowana Tank Mates
  // ──────────────────────────────────────────────
  {
    title: 'Arowana Tank Mates: Compatible Species Guide',
    slug: 'arowana-tank-mates',
    type: 'care',
    category: 'arowana',
    topicCategory: 'tank-mates',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/arowana-tank-mates.jpg',
    heroImageAlt:
      'A Silver Arowana swimming in a large aquarium alongside Bichirs, a Pleco, and a school of Silver Dollars',
    metaTitle: 'Arowana Tank Mates: Best Compatible Fish | The Fish Collection',
    metaDescription:
      'Best tank mates for Arowana. Compatible species, stocking guidelines, and fish to avoid. Expert compatibility guide for Silver, Asian, and Jardini Arowana.',
    quickAnswerQuestion: 'What fish can live with an Arowana?',
    quickAnswer:
      'The best Arowana tank mates are large, robust fish that occupy the bottom or mid-water zone and are too big to be eaten: Silver Dollars (school of 6+), large Bichirs (Polypterus endlicheri, P. ornatipinnis), large Plecos (Common or Sailfin, 30+ cm), Oscar cichlids, Clown Loaches (group of 5+), and large catfish (Synodontis, Pictus groups). Avoid small fish (anything under 15 cm), slow long-finned species, and aggressive fish that target the Arowana\'s barbels.',
    summary:
      'A detailed compatibility guide for Arowana covering the best tank mates, species to avoid, minimum tank sizes for community setups, the size constraint that limits compatibility, and how to build a harmonious Arowana community tank.',
    keyFacts: [
      { label: 'Minimum Community Tank', value: '250+ gallons' },
      { label: 'Key Rule', value: 'Too big to eat, too calm to fight' },
      { label: 'Best Bottom Dwellers', value: 'Bichirs, large Plecos' },
      { label: 'Best Mid-Water', value: 'Silver Dollars, Oscars' },
      { label: 'Avoid', value: 'Small fish, fin nippers' },
      { label: 'Temperature Match', value: '76–82 °F (24–28 °C)' },
    ],
    headings: [
      { id: 'arowana-compatibility-principles', text: 'Arowana Compatibility Principles', level: 2 },
      { id: 'size-constraint', text: 'The Size Constraint', level: 2 },
      { id: 'best-bottom-dwellers', text: 'Best Bottom-Dwelling Tank Mates', level: 2 },
      { id: 'bichirs', text: 'Bichirs (Polypterus)', level: 3 },
      { id: 'large-plecos', text: 'Large Plecos', level: 3 },
      { id: 'best-mid-water-mates', text: 'Best Mid-Water Tank Mates', level: 2 },
      { id: 'silver-dollars', text: 'Silver Dollars', level: 3 },
      { id: 'oscars', text: 'Oscar Cichlids', level: 3 },
      { id: 'other-compatible-species-arowana', text: 'Other Compatible Species', level: 2 },
      { id: 'species-to-avoid-arowana', text: 'Species to Avoid', level: 2 },
      { id: 'stocking-arowana-community', text: 'Stocking an Arowana Community Tank', level: 2 },
    ],
    content: `
<h2 id="arowana-compatibility-principles">Arowana Compatibility Principles</h2>
<p>Arowana are apex predators in the wild — surface-oriented hunters that patrol the top water column and strike at anything that fits in their mouth. Any potential tank mate must satisfy three criteria:</p>
<ol>
  <li><strong>Size:</strong> Too large to be swallowed. Arowana will eat any fish that fits in their mouth, and their mouths are surprisingly large relative to their body length. A 60 cm Silver Arowana can consume a 15 cm fish without difficulty. Tank mates must be at least 40–50 % of the Arowana's body length.</li>
  <li><strong>Zone separation:</strong> Arowana dominate the top third of the water column. The best tank mates occupy the bottom or mid-water zone, reducing territorial competition.</li>
  <li><strong>Temperament:</strong> Tank mates must be assertive enough not to cower (which triggers predatory pursuit) but not so aggressive that they attack the Arowana — particularly its sensitive trailing barbels.</li>
</ol>
<p>Arowana community tanks require serious volume. A 250-gallon tank is the minimum for a Silver Arowana with tank mates; 300+ gallons for Asian Arowana communities. Browse <a href="/exotic-fish/arowana">our Arowana collection</a> and plan the community tank before purchasing.</p>

<h2 id="size-constraint">The Size Constraint</h2>
<p>The defining factor in Arowana compatibility is size. Arowana grow rapidly — a 15 cm juvenile Silver Arowana will reach 45–60 cm within 18–24 months. Tank mates must either grow at a comparable rate or be introduced at a size that puts them above the Arowana's predation threshold.</p>
<p>The practical consequence: small community fish — tetras, rasboras, guppies, Corydoras — are food, not companions. Even "peaceful" tank mates become prey if they are small enough to swallow. Plan your community around large, robust species from the outset.</p>

<h2 id="best-bottom-dwellers">Best Bottom-Dwelling Tank Mates</h2>

<h3 id="bichirs">Bichirs (Polypterus)</h3>
<p>Bichirs are arguably the single best Arowana tank mates. These armoured, prehistoric fish are nocturnal bottom-dwellers that occupy a completely different zone than the surface-oriented Arowana. Large species — <em>Polypterus endlicheri</em> (50–75 cm), <em>P. ornatipinnis</em> (45–60 cm), and <em>P. bichir bichir</em> (60+ cm) — are too armoured and too large to be eaten, and they are completely non-aggressive toward Arowana.</p>
<p>Keep Bichirs in groups of 2–3 in a 300+ gallon Arowana tank. Provide PVC caves or driftwood shelters for daytime resting. Bichirs are slow feeders — ensure they receive sinking pellets or frozen food at night when the Arowana is less active.</p>

<h3 id="large-plecos">Large Plecos</h3>
<p>Common Plecos (<em>Pterygoplichthys</em> spp.) and Sailfin Plecos reach 30–45 cm and are heavily armoured with bony scutes. They are nocturnal algae grazers and detritivores that occupy the bottom and glass surfaces — zero competition with the Arowana. Their armour protects them from any predation attempt.</p>
<p>One or two large Plecos serve as excellent cleanup crew in an Arowana tank, consuming algae and leftover food. Supplement their diet with algae wafers and blanched vegetables (zucchini, cucumber) dropped in after lights-out.</p>

<h2 id="best-mid-water-mates">Best Mid-Water Tank Mates</h2>

<h3 id="silver-dollars">Silver Dollars</h3>
<p>Silver Dollars (<em>Metynnis</em> and <em>Myleus</em> spp.) are the classic Arowana dither fish. At 12–15 cm adult size, they are large enough to avoid predation by most adult Arowana (though very large Asian Arowana may still attempt to eat them). Their round, laterally compressed body shape makes them difficult to swallow. Keep in schools of 6–8 for natural shoaling behaviour.</p>
<p>Silver Dollars are fast, peaceful, and occupy the mid-water column — creating visual activity that makes the Arowana less skittish. They are herbivorous and will eat live plants, so plan accordingly (use hardy plants like Java Fern and Anubias, or a plant-free setup).</p>

<h3 id="oscars">Oscar Cichlids</h3>
<p>Oscars (<em>Astronotus ocellatus</em>) are intelligent, robust cichlids that reach 30–35 cm. They occupy the mid-to-bottom water column and are assertive enough to coexist with Arowana without being bullied, yet not aggressive enough to cause damage. Oscars work best in 300+ gallon tanks where both species have adequate territory.</p>
<p>Keep a single Oscar or a bonded pair. Multiple unrelated Oscars in a confined space creates territorial aggression. Feed Oscars separately with sinking pellets to prevent food competition at the surface where the Arowana feeds.</p>

<h2 id="other-compatible-species-arowana">Other Compatible Species</h2>
<ul>
  <li><strong>Clown Loaches (<em>Chromobotia macracanthus</em>):</strong> Grow to 25–30 cm, active, social bottom-dwellers. Keep in groups of 5+. Their spiny sub-ocular spine deters predation. Require warm water (82–86 °F) and a long-term commitment (25+ year lifespan).</li>
  <li><strong>Large Synodontis catfish:</strong> <em>Synodontis eupterus</em> (Featherfin Squeaker, 20–25 cm) and <em>S. decorus</em> (Decorated Synodontis, 25–30 cm) are robust, armoured bottom-dwellers suitable for Arowana community tanks.</li>
  <li><strong>Fire Eel (<em>Mastacembelus erythrotaenia</em>):</strong> Grows to 60–100 cm. Nocturnal bottom-dweller that hides during the day and hunts at night. Requires sand substrate for burrowing.</li>
  <li><strong>Peacock Bass (<em>Cichla</em> spp.):</strong> Large, robust predatory cichlids that match Arowana in temperament. Only for 400+ gallon tanks. Both species are surface-to-mid-water predators, so adequate space is critical.</li>
  <li><strong>Datnoides (<em>Datnioides</em> spp.):</strong> Tiger-striped predators (25–40 cm) that make striking visual complements to Arowana. Mid-water zone. Feed similar diets.</li>
</ul>

<h2 id="species-to-avoid-arowana">Species to Avoid</h2>
<ul>
  <li><strong>Any fish under 15 cm:</strong> Will be eaten. Tetras, barbs, rasboras, Corydoras, small loaches, and small catfish are food, not companions.</li>
  <li><strong>Aggressive cichlids that target barbels:</strong> Some aggressive cichlids (Flowerhorn, aggressive Midas Cichlids) will bite the Arowana's trailing barbels, causing permanent damage. The barbels do not regenerate reliably.</li>
  <li><strong>Other Arowana:</strong> Two Arowana in one tank almost always results in severe aggression. Only a handful of experienced keepers maintain multiple Arowana, typically in tanks exceeding 1,000 gallons with complex sight-line breaks.</li>
  <li><strong>Stingrays (in most setups):</strong> While Arowana and freshwater stingrays share Amazonian habitats, stingrays require smooth, sand-only substrates and impeccable water quality. The combination works only in purpose-built 500+ gallon setups with advanced filtration.</li>
  <li><strong>Slow, long-finned fish:</strong> Fancy goldfish, long-finned Bettas, Angelfish — will be harassed or eaten.</li>
</ul>

<h2 id="stocking-arowana-community">Stocking an Arowana Community Tank</h2>
<p>A well-stocked 300-gallon Arowana community might include:</p>
<ul>
  <li>1 Silver Arowana or Asian Arowana</li>
  <li>6–8 Silver Dollars</li>
  <li>2–3 large Bichirs (P. endlicheri or P. ornatipinnis)</li>
  <li>1–2 large Plecos</li>
  <li>5 Clown Loaches</li>
</ul>
<p>This combination covers all water levels — Arowana at the top, Silver Dollars mid-water, Bichirs and Plecos at the bottom, Clown Loaches throughout. The tank needs robust filtration (sump system processing 8–10× tank volume per hour), weekly 30–40 % water changes, and a varied feeding regime that ensures all species receive appropriate food.</p>
<p>Add the Arowana last after all other species are established and at adult size. This reduces territorial aggression. Rearrange hardscape when introducing the Arowana to reset territorial claims. For water parameters, see our <a href="/care/platinum-arowana-water-parameters">Arowana water parameters guide</a>. For tank setup, see the <a href="/care/arowana-tank-setup">Arowana tank setup guide</a>.</p>
`,
    faqs: [
      {
        question: 'Can Arowana live with other Arowana?',
        answer:
          'Generally no. Two Arowana in the same tank almost always results in severe aggression, often fatal. Only a handful of extremely experienced keepers maintain multiple Arowana in tanks exceeding 1,000 gallons with complex sight-line breaks. For most keepers, a single Arowana per tank is the only safe approach.',
      },
      {
        question: 'Can Arowana live with cichlids?',
        answer:
          'Certain large, robust cichlids work well — Oscars (30–35 cm), Peacock Bass, and Datnoides are proven companions in 300+ gallon tanks. Avoid aggressive cichlids that target barbels (Flowerhorn, aggressive Midas Cichlids) and any cichlid under 15 cm, which will be eaten.',
      },
      {
        question: 'What size tank do I need for an Arowana with tank mates?',
        answer:
          'A minimum of 250 gallons for a Silver Arowana with bottom-dwelling companions only. 300+ gallons for a full community with mid-water tank mates (Silver Dollars, Oscars). Asian Arowana communities require 300–400+ gallons. Footprint (length and width) matters more than height — choose the longest tank available.',
      },
      {
        question: 'Will an Arowana eat Silver Dollars?',
        answer:
          'Adult Silver Dollars (12–15 cm) are generally too large and disc-shaped to be swallowed by most Arowana. However, very large Asian Arowana (70+ cm) may attempt it. Introduce Silver Dollars at adult size and in a school of 6+ to distribute any predatory attention. Never add juvenile Silver Dollars to an Arowana tank.',
      },
    ],
    sources: [
      {
        title: 'FishBase: Osteoglossum bicirrhosum (Silver Arowana)',
        url: 'https://www.fishbase.se/summary/Osteoglossum-bicirrhosum.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Community Assembly in Large Predator Aquaria',
        url: 'https://www.practicalfishkeeping.co.uk/features/arowana-tank-mates/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Behavioral Ecology of Osteoglossidae',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0376635709001776',
        publisher: 'Behavioural Processes (Elsevier)',
      },
    ],
    relatedSlugs: ['arowana-tank-setup', 'platinum-arowana-water-parameters', 'arowana-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 35 — Cichlid Tank Mates
  // ──────────────────────────────────────────────
  {
    title: 'Cichlid Tank Mates: Compatible Species by Type',
    slug: 'cichlid-tank-mates',
    type: 'care',
    category: 'cichlid',
    topicCategory: 'tank-mates',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/cichlid-tank-mates.jpg',
    heroImageAlt:
      'A colourful African cichlid community tank with Mbuna, Peacocks, and Synodontis catfish swimming among rockwork',
    metaTitle: 'Cichlid Tank Mates: Best Compatible Fish by Type | The Fish Collection',
    metaDescription:
      'Best tank mates for cichlids. Compatible species for African Mbuna, Peacock, South American, and dwarf cichlids. Expert compatibility guide.',
    quickAnswerQuestion: 'What fish can live with cichlids?',
    quickAnswer:
      'Tank mates depend on the cichlid type. African Mbuna: other Mbuna, Synodontis catfish, Bristlenose Plecos. Peacock/Hap cichlids: other Peacocks/Haps, Synodontis, large Rainbowfish. South American cichlids (Oscars, Severums): Silver Dollars, large Plecos, Bichirs, large catfish. Dwarf cichlids (Rams, Apistogramma): tetras, Corydoras, Otocinclus. Never mix African and South American cichlids — they require different water chemistry.',
    summary:
      'A comprehensive compatibility guide for cichlid fish, covering tank mates for African Mbuna, Peacock and Hap cichlids, South American cichlids, and dwarf cichlids, with stocking examples and species to avoid for each group.',
    keyFacts: [
      { label: 'Mbuna Tank Mates', value: 'Other Mbuna, Synodontis' },
      { label: 'Peacock/Hap Mates', value: 'Peacocks, Haps, Synodontis' },
      { label: 'Oscar Mates', value: 'Silver Dollars, Plecos, Bichirs' },
      { label: 'Dwarf Cichlid Mates', value: 'Tetras, Corydoras' },
      { label: 'Never Mix', value: 'African + South American' },
    ],
    headings: [
      { id: 'cichlid-compatibility-overview', text: 'Cichlid Compatibility Overview', level: 2 },
      { id: 'mbuna-tank-mates', text: 'African Mbuna Tank Mates', level: 2 },
      { id: 'mbuna-compatible', text: 'Compatible Mbuna Species', level: 3 },
      { id: 'mbuna-non-cichlid-mates', text: 'Non-Cichlid Mbuna Tank Mates', level: 3 },
      { id: 'peacock-hap-mates', text: 'Peacock and Hap Tank Mates', level: 2 },
      { id: 'south-american-mates', text: 'South American Cichlid Tank Mates', level: 2 },
      { id: 'oscar-community', text: 'Oscar Community Tanks', level: 3 },
      { id: 'dwarf-cichlid-mates', text: 'Dwarf Cichlid Tank Mates', level: 2 },
      { id: 'cichlids-to-never-mix', text: 'Cichlid Combinations to Avoid', level: 2 },
      { id: 'stocking-cichlid-community', text: 'Stocking a Cichlid Community', level: 2 },
    ],
    content: `
<h2 id="cichlid-compatibility-overview">Cichlid Compatibility Overview</h2>
<p>Cichlidae is one of the most diverse fish families, with over 2,000 described species spanning three continents. Compatibility rules differ dramatically depending on which cichlid group you are keeping. An approach that works perfectly for dwarf South American cichlids will result in carnage if applied to African Mbuna. Understanding the specific aggression patterns, territorial requirements, and water chemistry needs of each group is essential for building a functional community.</p>
<p>The overarching rule for cichlid communities is: <strong>match aggression levels, size, and water chemistry.</strong> Peaceful species paired with aggressive species results in bullying, stress, and death. Large species paired with small species results in predation. African species paired with South American species results in water chemistry compromise that suits neither.</p>

<h2 id="mbuna-tank-mates">African Mbuna Tank Mates</h2>
<p>Mbuna (rock-dwelling cichlids from Lake Malawi) are among the most aggressive freshwater aquarium fish relative to their size. They defend territories aggressively, chase constantly, and can kill tank mates that cannot tolerate the pressure. The strategy for Mbuna communities is <strong>controlled overstocking</strong> — keeping 15–20+ Mbuna in a 75+ gallon tank so that aggression is distributed across many targets, preventing any single fish from being singled out.</p>

<h3 id="mbuna-compatible">Compatible Mbuna Species</h3>
<p>Mix Mbuna species that differ in colour pattern to reduce conspecific aggression (fish that look similar are attacked more intensely):</p>
<ul>
  <li><strong>Yellow Labs (<em>Labidochromis caeruleus</em>):</strong> The most peaceful Mbuna. Bright yellow colouration. Essential in almost every Mbuna community.</li>
  <li><strong>Rusty Cichlids (<em>Iodotropheus sprengerae</em>):</strong> Brownish-lavender colour, moderate aggression. Compatible with most other Mbuna.</li>
  <li><strong>Red Zebra (<em>Maylandia estherae</em>):</strong> Orange-red females, blue males. Moderately aggressive.</li>
  <li><strong>Acei (<em>Pseudotropheus acei</em>):</strong> Blue body with yellow tail. Mid-water swimmer (unusual for Mbuna). Relatively peaceful.</li>
  <li><strong>Demasoni (<em>Pseudotropheus demasoni</em>):</strong> Stunningly patterned but highly aggressive. Must be kept in groups of 12+ to distribute aggression. Expert-level Mbuna.</li>
</ul>
<p>Stock Mbuna at a ratio of 1 male to 3–4 females per species. Multiple males of the same species create lethal aggression unless the tank exceeds 125 gallons with complex rockwork.</p>

<h3 id="mbuna-non-cichlid-mates">Non-Cichlid Mbuna Tank Mates</h3>
<ul>
  <li><strong>Synodontis multipunctatus (Cuckoo Catfish):</strong> The ideal Mbuna companion. Native to Lake Malawi, same water chemistry, armoured, and fast enough to avoid Mbuna aggression. Reproduces by depositing eggs among Mbuna mouthbrooders — fascinating behaviour.</li>
  <li><strong>Synodontis lucipinnis and S. petricola:</strong> Smaller Synodontis (8–12 cm) that thrive in Mbuna tanks. Keep in groups of 5+.</li>
  <li><strong>Bristlenose Plecos:</strong> Tolerate the hard, alkaline water Mbuna require. Armoured and nocturnal — ignored by Mbuna. Excellent algae control.</li>
</ul>
<p>Avoid small tetras, barbs, and community fish in Mbuna tanks — they will be relentlessly chased and killed.</p>

<h2 id="peacock-hap-mates">Peacock and Hap Tank Mates</h2>
<p>Peacock cichlids (<em>Aulonocara</em>) and Haplochromis-type cichlids are significantly less aggressive than Mbuna. They are open-water swimmers from the sandy and intermediate zones of Lake Malawi. Mix Peacocks and Haps freely in 75+ gallon tanks, choosing species with different colour patterns:</p>
<ul>
  <li><strong>OB Peacock, Sunshine Peacock, Ruby Red Peacock:</strong> Vibrant, moderately peaceful.</li>
  <li><strong>Haplochromis species:</strong> <em>Copadichromis borleyi</em> (Red Kadango), <em>Protomelas taeniolatus</em> (Red Empress), <em>Sciaenochromis fryeri</em> (Electric Blue Hap).</li>
  <li><strong>Non-cichlid mates:</strong> Synodontis catfish (same as Mbuna), Bristlenose Plecos, and large Rainbowfish (<em>Melanotaenia</em> spp.) which tolerate alkaline water and are fast enough to avoid aggression.</li>
</ul>
<p><strong>Do not mix Peacocks with Mbuna.</strong> Mbuna are too aggressive for the gentler Peacocks and will outcompete them for food and territory. The exception is Yellow Labs, which are peaceful enough to coexist with Peacocks in 100+ gallon tanks.</p>

<h2 id="south-american-mates">South American Cichlid Tank Mates</h2>

<h3 id="oscar-community">Oscar Community Tanks</h3>
<p>Oscars (<em>Astronotus ocellatus</em>) are large (30–35 cm), intelligent, and messy. They need 75 gallons minimum for a single specimen, 125+ gallons for a community:</p>
<ul>
  <li><strong>Silver Dollars (school of 6+):</strong> Fast, disc-shaped, and large enough to avoid predation. The classic Oscar dither fish.</li>
  <li><strong>Large Plecos (Common, Sailfin):</strong> Armoured bottom-dwellers that clean up after the Oscar's messy eating habits.</li>
  <li><strong>Bichirs (<em>P. senegalus</em> or larger):</strong> Bottom-dwelling, armoured, and ignored by Oscars.</li>
  <li><strong>Severums (<em>Heros</em> spp.):</strong> Large, peaceful South American cichlids (20–25 cm) that complement Oscars well.</li>
  <li><strong>Jack Dempsey (<em>Rocio octofasciata</em>):</strong> Robust enough to coexist with Oscars in 125+ gallon tanks. Can be territorial during breeding.</li>
</ul>
<p>Other large South American cichlids — Green Terror, Firemouth, Convict — can work in very large tanks (150+ gallons) but require careful monitoring for aggression escalation.</p>

<h2 id="dwarf-cichlid-mates">Dwarf Cichlid Tank Mates</h2>
<p>Dwarf cichlids — German Blue Rams, Apistogramma, Bolivian Rams — are the gentlest cichlids. They fit into standard community tanks of 20+ gallons with peaceful species:</p>
<ul>
  <li><strong>Tetras:</strong> Cardinal Tetras, Ember Tetras, Rummy-nose Tetras — schools of 8+ provide mid-water activity.</li>
  <li><strong>Corydoras:</strong> Pygmy Corydoras, <em>C. habrosus</em>, or <em>C. sterbai</em> (for warmer tanks). Bottom-dwelling schooling fish.</li>
  <li><strong>Otocinclus:</strong> Tiny algae eaters that occupy a different niche entirely.</li>
  <li><strong>Pencilfish (<em>Nannostomus</em> spp.):</strong> Calm, small, and surface-oriented.</li>
  <li><strong>Other dwarf cichlids:</strong> A pair of Rams with a pair of Apistogramma works in 30+ gallon tanks with multiple territory markers (driftwood, caves, dense planting).</li>
</ul>

<h2 id="cichlids-to-never-mix">Cichlid Combinations to Avoid</h2>
<ul>
  <li><strong>African cichlids with South American cichlids:</strong> Different water chemistry requirements. Africans need hard, alkaline water (pH 7.5–8.5, GH 10–20); South Americans need soft, acidic to neutral water (pH 6.0–7.5, GH 2–10). Neither thrives in the other's ideal conditions.</li>
  <li><strong>Mbuna with Peacocks/Haps:</strong> Mbuna aggression overwhelms the gentler Peacock and Hap species. Keep them in separate tanks.</li>
  <li><strong>Large predatory cichlids with small cichlids:</strong> An Oscar will eat a Ram. A Flowerhorn will kill a Yellow Lab. Match size classes.</li>
  <li><strong>Multiple male cichlids of the same species in small tanks:</strong> Territorial aggression between conspecific males is the most common cause of cichlid death in captivity. Maintain appropriate male-to-female ratios.</li>
  <li><strong>Flowerhorn with anything:</strong> Flowerhorn are hybrid cichlids bred for extreme aggression. They are almost always best kept alone. See our <a href="/care/flowerhorn-cichlid-care-guide">Flowerhorn care guide</a>.</li>
</ul>

<h2 id="stocking-cichlid-community">Stocking a Cichlid Community</h2>
<p>Example stocking for a 75-gallon Mbuna tank:</p>
<ul>
  <li>4 Yellow Labs (1M:3F)</li>
  <li>4 Red Zebra (1M:3F)</li>
  <li>4 Acei (1M:3F)</li>
  <li>4 Rusty Cichlids (1M:3F)</li>
  <li>5 Synodontis petricola</li>
  <li>1 Bristlenose Pleco</li>
</ul>
<p>Example stocking for a 125-gallon Oscar community:</p>
<ul>
  <li>1 Oscar</li>
  <li>6–8 Silver Dollars</li>
  <li>1–2 large Plecos</li>
  <li>2 Senegal Bichirs</li>
</ul>
<p>Powerful filtration is non-negotiable for cichlid communities — canister filters or sumps rated for 8–10× tank volume turnover. Cichlids are messy eaters and heavy waste producers. Weekly 30–50 % water changes are standard. For water chemistry guidance, see our <a href="/care/cichlid-water-parameters">cichlid water parameters guide</a>.</p>
`,
    faqs: [
      {
        question: 'Can you mix African and South American cichlids?',
        answer:
          'No. African cichlids require hard, alkaline water (pH 7.5–8.5, GH 10–20 dGH) while South American cichlids need soft, acidic to neutral water (pH 6.0–7.5, GH 2–10 dGH). Keeping them together means neither group lives in optimal conditions, leading to chronic stress, weakened immunity, and shortened lifespans.',
      },
      {
        question: 'Can Oscars live with African cichlids?',
        answer:
          'This is not recommended. Beyond the water chemistry incompatibility, African Mbuna and Oscars have very different aggression styles. Mbuna harass constantly through chasing, while Oscars are more territorial. The combination creates mutual stress in most tank sizes.',
      },
      {
        question: 'How many Mbuna can I keep in a 75-gallon tank?',
        answer:
          'A 75-gallon tank can support 15–20 Mbuna when properly filtered and maintained. The overstocking strategy (more fish = aggression spread across more targets) is essential for Mbuna. However, this only works with powerful filtration (canister or sump rated for 600–750 GPH) and 30–50 % weekly water changes.',
      },
      {
        question: 'What bottom feeders work with cichlids?',
        answer:
          'For African cichlids: Synodontis catfish (S. multipunctatus, S. petricola, S. lucipinnis) and Bristlenose Plecos. For South American cichlids: large Plecos, Bichirs, and large Synodontis or Raphael catfish. Match the bottom-feeder to the water chemistry and aggression level of the cichlid community.',
      },
    ],
    sources: [
      {
        title: 'Cichlid Behaviour and Social Dynamics in Captivity',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.13567',
        publisher: 'Journal of Fish Biology',
      },
      {
        title: 'Lake Malawi Cichlid Community Assembly',
        url: 'https://www.practicalfishkeeping.co.uk/features/malawi-community-guide/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'FishBase: Cichlidae Family Overview',
        url: 'https://www.fishbase.se/Summary/FamilySummary.php?ID=349',
        publisher: 'FishBase Consortium',
      },
    ],
    relatedSlugs: ['cichlid-water-parameters', 'flowerhorn-cichlid-care-guide', 'discus-fish-tank-mates'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 36 — Betta Tank Mates
  // ──────────────────────────────────────────────
  {
    title: 'Betta Tank Mates: Compatible Species Guide',
    slug: 'betta-tank-mates',
    type: 'care',
    category: 'betta',
    topicCategory: 'tank-mates',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/betta-tank-mates.jpg',
    heroImageAlt:
      'A male Halfmoon Betta swimming peacefully in a planted 20-gallon tank alongside Nerite snails and Ember Tetras',
    metaTitle: 'Betta Tank Mates: Best Compatible Fish & Invertebrates | The Fish Collection',
    metaDescription:
      'Best tank mates for Betta fish. Safe companions including snails, shrimp, Corydoras, and tetras. Species to avoid and minimum tank sizes for Betta communities.',
    quickAnswerQuestion: 'What fish can live with a Betta?',
    quickAnswer:
      'In a 20-gallon or larger tank, male Bettas can coexist with Nerite snails, Mystery snails, Amano shrimp, Corydoras catfish (pygmy or habrosus), Kuhli Loaches, and Ember Tetras. The tank must have dense planting, multiple hiding spots, and gentle filtration. Avoid fin-nippers (Tiger Barbs), brightly coloured or long-finned fish (guppies, gouramis), other Bettas, and any aggressive species. Individual Betta temperament varies — always have a backup separation plan.',
    summary:
      'A detailed guide to choosing tank mates for Betta fish, covering safe invertebrate companions, compatible fish species, minimum tank requirements, species to avoid, and how to manage Betta temperament in community setups.',
    keyFacts: [
      { label: 'Min Community Tank', value: '20 gallons' },
      { label: 'Safest Mates', value: 'Nerite snails, Amano shrimp' },
      { label: 'Best Fish Mates', value: 'Corydoras, Kuhli Loaches' },
      { label: 'Avoid', value: 'Fin-nippers, colourful fish, other Bettas' },
      { label: 'Key Rule', value: 'Always have a backup plan' },
    ],
    headings: [
      { id: 'betta-community-principles', text: 'Betta Community Principles', level: 2 },
      { id: 'minimum-tank-size-betta-community', text: 'Minimum Tank Size for Community', level: 2 },
      { id: 'invertebrate-companions', text: 'Invertebrate Companions', level: 2 },
      { id: 'snails-for-bettas', text: 'Snails', level: 3 },
      { id: 'shrimp-for-bettas', text: 'Shrimp', level: 3 },
      { id: 'compatible-fish', text: 'Compatible Fish Species', level: 2 },
      { id: 'bottom-dwellers-betta', text: 'Bottom Dwellers', level: 3 },
      { id: 'schooling-fish-betta', text: 'Schooling Fish', level: 3 },
      { id: 'species-to-avoid-betta', text: 'Species to Avoid', level: 2 },
      { id: 'managing-betta-temperament', text: 'Managing Betta Temperament', level: 2 },
      { id: 'female-betta-sororities', text: 'Female Betta Sororities', level: 2 },
    ],
    content: `
<h2 id="betta-community-principles">Betta Community Principles</h2>
<p>Betta splendens has a reputation as a solitary, aggressive fish that cannot live with anything. This is an oversimplification. While male Bettas are territorial toward other male Bettas and fish that resemble them (bright colours, flowing fins), many individual Bettas coexist peacefully with carefully chosen companions in properly set up tanks.</p>
<p>The three rules of Betta compatibility:</p>
<ol>
  <li><strong>No look-alikes:</strong> Avoid fish with bright colours or long fins that the Betta may perceive as a rival male. Guppies, Gouramis, and Endlers are excluded by this rule.</li>
  <li><strong>No fin-nippers:</strong> Betta fins are slow-moving targets. Any species known to nip fins (Tiger Barbs, Serpae Tetras, some Danios) will destroy a Betta's finnage.</li>
  <li><strong>Different zones:</strong> Choose species that primarily occupy the bottom or mid-water column, reducing territorial overlap with the surface-oriented Betta.</li>
</ol>

<h2 id="minimum-tank-size-betta-community">Minimum Tank Size for Community</h2>
<p>A Betta community requires a minimum of 20 gallons (75 litres). This is non-negotiable — smaller tanks do not provide enough territory for the Betta to establish a home range while leaving sufficient space for companions. In tanks under 20 gallons, the Betta perceives the entire space as its territory and attacks anything that enters.</p>
<p>A 20-gallon long (30 × 12 × 12 inches) is ideal — the extended footprint provides more horizontal territory than a tall 20-gallon. Plant heavily with live plants (Java Fern, Anubias, Amazon Sword, Cryptocoryne) to create sight-line breaks and hiding spots. Dense planting is the single most important factor in Betta community success.</p>

<h2 id="invertebrate-companions">Invertebrate Companions</h2>

<h3 id="snails-for-bettas">Snails</h3>
<p>Snails are the safest Betta companions — virtually every Betta ignores them:</p>
<ul>
  <li><strong>Nerite Snails:</strong> The gold standard. 2–3 cm, excellent algae eaters, and completely peaceful. Cannot reproduce in freshwater (eggs need brackish water to hatch), so population control is not an issue. Choose Tiger Nerite or Zebra Nerite for visual appeal.</li>
  <li><strong>Mystery Snails (<em>Pomacea bridgesii</em>):</strong> Larger (5–6 cm), peaceful, and visually interesting with long tentacles. Some curious Bettas nip at the tentacles occasionally, but serious aggression is rare. Available in gold, blue, ivory, and purple colour varieties.</li>
  <li><strong>Malaysian Trumpet Snails:</strong> Burrowing snails that aerate the substrate and consume detritus. Nocturnal and mostly invisible. Reproduce prolifically — population can be controlled by not overfeeding.</li>
</ul>

<h3 id="shrimp-for-bettas">Shrimp</h3>
<ul>
  <li><strong>Amano Shrimp (<em>Caridina multidentata</em>):</strong> At 4–5 cm, they are large enough that most Bettas do not view them as food. Outstanding algae eaters and scavengers. Keep 3–5 in a 20-gallon Betta community. Always provide plenty of hiding spots (moss, driftwood, plant cover) for the shrimp to retreat to.</li>
  <li><strong>Cherry Shrimp (<em>Neocaridina davidi</em>):</strong> Risky. At 2–3 cm, many Bettas view cherry shrimp as food. Success depends entirely on individual Betta temperament. In heavily planted tanks with ample hiding spots, breeding colonies can sometimes sustain themselves despite occasional predation — the shrimp reproduce faster than the Betta eats them. But some Bettas will hunt them to extinction.</li>
  <li><strong>Ghost Shrimp:</strong> Inexpensive, 3–4 cm, transparent. A good test species — introduce 5–6 ghost shrimp first to gauge your Betta's reaction before investing in more expensive Amano or Cherry shrimp.</li>
</ul>

<h2 id="compatible-fish">Compatible Fish Species</h2>

<h3 id="bottom-dwellers-betta">Bottom Dwellers</h3>
<ul>
  <li><strong>Pygmy Corydoras (<em>Corydoras pygmaeus</em>):</strong> 2.5 cm, peaceful, schooling bottom-dwellers. Keep in groups of 8+ in a 20-gallon tank. Their small size and bottom-dwelling habit keeps them well below the Betta's radar.</li>
  <li><strong>Corydoras habrosus:</strong> Similar to pygmy Corydoras but slightly larger (3 cm). Equally compatible. Groups of 6+.</li>
  <li><strong>Kuhli Loaches (<em>Pangio kuhlii</em>):</strong> Nocturnal, eel-like bottom-dwellers (8–10 cm). Virtually invisible during the day — they hide in plant roots, driftwood crevices, and substrate. Groups of 6+ on sand substrate. One of the most reliable Betta tank mates.</li>
  <li><strong>Otocinclus:</strong> Tiny (3–4 cm) algae eaters. Peaceful and surface-clinging. Keep in groups of 6+. Sensitive to water quality — only add to established, stable tanks.</li>
</ul>

<h3 id="schooling-fish-betta">Schooling Fish</h3>
<ul>
  <li><strong>Ember Tetras (<em>Hyphessobrycon amandae</em>):</strong> At 2 cm, they are tiny, fast, and subdued in colour (soft orange, not bright red). Their small size and quick movement usually keeps them below the Betta's aggression threshold. School of 8–12 in a 20-gallon tank.</li>
  <li><strong>Harlequin Rasboras (<em>Trigonostigma heteromorpha</em>):</strong> 4 cm, peaceful, muted orange-copper colour. School of 8+. Occupy mid-water. A proven Betta community species in 20+ gallon tanks.</li>
  <li><strong>Chili Rasboras (<em>Boraras brigittae</em>):</strong> Tiny (1.5–2 cm), subdued red colouration, extremely peaceful. School of 10+. Their miniature size makes them almost invisible to the Betta.</li>
  <li><strong>Lambchop Rasboras (<em>Trigonostigma espei</em>):</strong> Similar to Harlequins but slightly smaller. School of 8+.</li>
</ul>

<h2 id="species-to-avoid-betta">Species to Avoid</h2>
<ul>
  <li><strong>Other male Bettas:</strong> Two males in the same tank will fight to the death. No exceptions, no tank is large enough.</li>
  <li><strong>Female Bettas (in male community tanks):</strong> Males will harass females relentlessly unless in a controlled breeding setup. Do not add a female "to keep him company."</li>
  <li><strong>Guppies and Endlers:</strong> Flowing tails and bright colours trigger territorial aggression.</li>
  <li><strong>Gouramis:</strong> Close relatives that Bettas recognise as competitors. Mutual aggression is guaranteed.</li>
  <li><strong>Tiger Barbs, Serpae Tetras, Buenos Aires Tetras:</strong> Notorious fin-nippers that will shred Betta fins.</li>
  <li><strong>Angelfish:</strong> Too large, too territorial, and their trailing fins can trigger Betta aggression (or vice versa).</li>
  <li><strong>Any cichlid:</strong> Even "peaceful" cichlids (Rams, Apistogramma) can be risky with Bettas due to territorial overlap. The combination sometimes works in 30+ gallon tanks but is not recommended for beginners.</li>
  <li><strong>Chinese Algae Eaters:</strong> Become aggressive as adults and will latch onto the Betta to rasp mucus.</li>
</ul>

<h2 id="managing-betta-temperament">Managing Betta Temperament</h2>
<p>Individual Betta temperament varies enormously. Some Bettas tolerate tank mates readily from day one; others attack anything that moves. This unpredictability means you <strong>must always have a backup plan</strong>:</p>
<ul>
  <li>Keep a spare 5-gallon tank or tank divider ready before introducing tank mates.</li>
  <li>Add the Betta last, after all other species are established and comfortable. This prevents the Betta from establishing the entire tank as its territory before companions arrive.</li>
  <li>Monitor closely for the first 72 hours. Mild curiosity (following, occasional flaring) is normal and usually subsides. Persistent chasing, biting, or clamped fins in tank mates indicates the community is not working.</li>
  <li>Rearrange decorations and plants when introducing the Betta — this resets territorial markers and reduces aggression.</li>
  <li>Feed the Betta first before feeding companions to reduce food-related aggression.</li>
</ul>
<p>If your Betta proves incompatible with community life, there is no shame in maintaining it as a solo fish in a well-planted 5–10 gallon tank with snails. Some Bettas are simply too aggressive for companions, and forcing the issue harms everyone involved.</p>

<h2 id="female-betta-sororities">Female Betta Sororities</h2>
<p>Female Betta sororities — groups of 5+ female Bettas in a single tank — are popular but controversial. They can work under specific conditions:</p>
<ul>
  <li>Minimum 20-gallon long tank, heavily planted with dense cover and multiple line-of-sight breaks.</li>
  <li>5–7 females minimum. Fewer creates a dominant-subordinate dynamic with too much pressure on the lowest-ranking fish.</li>
  <li>Introduce all females simultaneously. Adding new females to an established sorority almost always triggers aggression.</li>
  <li>Have individual tanks ready for each female in case the sorority collapses.</li>
</ul>
<p>Even well-established sororities can collapse suddenly — a change in hierarchy, a hormonal shift, or a minor stressor can trigger aggression that escalates to injuries and death. Sororities are not recommended for beginners. For a detailed Betta care overview, see our <a href="/care/betta-complete-care-guide">Betta complete care guide</a>.</p>
`,
    faqs: [
      {
        question: 'Can Bettas live with snails?',
        answer:
          'Yes. Snails are the safest Betta companions. Nerite snails, Mystery snails, and Malaysian Trumpet Snails are all compatible. Virtually all Bettas ignore snails entirely. Nerite snails are particularly recommended as they are excellent algae eaters and cannot reproduce in freshwater.',
      },
      {
        question: 'Will a Betta eat shrimp?',
        answer:
          'It depends on the individual Betta. Amano shrimp (4–5 cm) are usually too large to eat. Cherry shrimp (2–3 cm) are at risk — some Bettas ignore them, others hunt them relentlessly. Test with inexpensive Ghost Shrimp first. In heavily planted tanks, cherry shrimp colonies can sometimes sustain themselves despite occasional predation.',
      },
      {
        question: 'Can two female Bettas live together?',
        answer:
          'Two females together creates a dominant-subordinate dynamic where the weaker fish is constantly bullied. If keeping female Bettas together, maintain a sorority of 5–7 in a 20+ gallon heavily planted tank. Introduce all simultaneously. Even then, sororities can collapse unpredictably. Have backup housing for every female.',
      },
      {
        question: 'What is the best tank mate for a Betta beginner?',
        answer:
          'Nerite snails. They require zero compatibility monitoring, they clean algae, they are peaceful, and they work in any Betta tank (even 5 gallons). Add 1–2 Nerite snails to your Betta tank and observe how the Betta reacts to other living creatures before considering fish companions in a larger tank.',
      },
    ],
    sources: [
      {
        title: 'FishBase: Betta splendens',
        url: 'https://www.fishbase.se/summary/Betta-splendens.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Aggression and Territoriality in Betta splendens',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0376635716301681',
        publisher: 'Behavioural Processes (Elsevier)',
      },
      {
        title: 'Betta Community Tank Guide',
        url: 'https://www.practicalfishkeeping.co.uk/features/betta-tank-mates/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['betta-complete-care-guide', 'betta-tank-setup', 'betta-breeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 37 — Pufferfish Tank Mates
  // ──────────────────────────────────────────────
  {
    title: 'Pufferfish Tank Mates: Compatible Species by Puffer Type',
    slug: 'pufferfish-tank-mates',
    type: 'care',
    category: 'pufferfish',
    topicCategory: 'tank-mates',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/pufferfish-tank-mates.jpg',
    heroImageAlt:
      'A Congo Puffer and a group of large Synodontis catfish coexisting in a spacious planted aquarium',
    metaTitle: 'Pufferfish Tank Mates: Compatible Species Guide | The Fish Collection',
    metaDescription:
      'Which fish can live with pufferfish? Compatible tank mates for Fahaka, MBU, Pea, Figure 8, and Amazon puffers. Expert compatibility guide.',
    quickAnswerQuestion: 'Can pufferfish have tank mates?',
    quickAnswer:
      'It depends on the species. Fahaka and MBU puffers must be kept alone — they attack and kill all tank mates. Pea Puffers can coexist with fast, small species (Otocinclus, small Corydoras) in heavily planted 20+ gallon tanks. Figure 8 Puffers tolerate brackish-compatible species (Bumblebee Gobies, Mollies). Amazon Puffers are the most community-friendly, tolerating medium-sized fast fish in 75+ gallon tanks.',
    summary:
      'A species-by-species compatibility guide for freshwater and brackish pufferfish, covering tank mates for Fahaka, MBU, Pea, Figure 8, Amazon, and Congo puffers, with specific recommendations and warnings for each.',
    keyFacts: [
      { label: 'Fahaka/MBU', value: 'Solitary ONLY' },
      { label: 'Pea Puffer Mates', value: 'Otocinclus, fast nano fish' },
      { label: 'Figure 8 Mates', value: 'Brackish species only' },
      { label: 'Amazon Puffer Mates', value: 'Medium fast fish, 75+ gal' },
      { label: 'Key Rule', value: 'Species-specific research essential' },
    ],
    headings: [
      { id: 'puffer-compatibility-overview', text: 'Pufferfish Compatibility Overview', level: 2 },
      { id: 'solitary-puffers', text: 'Strictly Solitary Puffers', level: 2 },
      { id: 'fahaka-mates', text: 'Fahaka Puffer', level: 3 },
      { id: 'mbu-mates', text: 'MBU Puffer', level: 3 },
      { id: 'pea-puffer-mates', text: 'Pea Puffer Tank Mates', level: 2 },
      { id: 'figure-8-mates', text: 'Figure 8 Puffer Tank Mates', level: 2 },
      { id: 'amazon-puffer-mates', text: 'Amazon Puffer Tank Mates', level: 2 },
      { id: 'congo-puffer-mates', text: 'Congo Puffer Tank Mates', level: 2 },
      { id: 'puffer-aggression-management', text: 'Managing Puffer Aggression', level: 2 },
      { id: 'puffer-mates-to-avoid', text: 'Universal Species to Avoid', level: 2 },
    ],
    content: `
<h2 id="puffer-compatibility-overview">Pufferfish Compatibility Overview</h2>
<p>Pufferfish are among the most intelligent and personable aquarium fish — and among the most aggressive. Every puffer species has a beak (fused teeth) capable of inflicting serious damage to tank mates, and most species have a disposition that ranges from "occasionally nippy" to "will murder everything in the tank." Compatibility varies enormously by species, and generalisations about "puffer tank mates" are dangerous.</p>
<p>The essential rule: <strong>research your specific puffer species before adding any tank mate.</strong> A recommendation that works for an Amazon Puffer will result in dead fish if applied to a Fahaka. This guide covers the most commonly kept freshwater and brackish puffers individually.</p>

<h2 id="solitary-puffers">Strictly Solitary Puffers</h2>

<h3 id="fahaka-mates">Fahaka Puffer</h3>
<p>The Fahaka Puffer (<em>Tetraodon lineatus</em>) is one of the most aggressive freshwater fish in the hobby. It must be kept completely alone — no exceptions. Fahaka Puffers attack and kill every other fish in the tank, regardless of size, speed, or armour. They have been documented killing Plecos by biting through their armoured plates, destroying Bichirs despite their ganoid scales, and even biting through heater guards.</p>
<p>Do not test this. Online anecdotes of "my Fahaka lived with an Oscar for months" inevitably end with an update reporting the Oscar's death. The only safe Fahaka community is a Fahaka in a 125-gallon tank by itself. See our <a href="/care/fahaka-pufferfish-care-guide">Fahaka care guide</a> for complete details.</p>

<h3 id="mbu-mates">MBU Puffer</h3>
<p>The MBU Puffer (<em>Tetraodon mbu</em>) is the largest freshwater puffer (60–75 cm) and, like the Fahaka, must be kept alone. While MBU Puffers are sometimes described as "calmer" than Fahakas, their sheer size means any aggression is devastating. An MBU that decides to bite a tank mate can kill it instantly. Some keepers have maintained MBU Puffers with very large, fast fish (adult Arowana, large Bichirs) in 500+ gallon systems, but this is high-risk and not recommended. See our <a href="/care/mbu-pufferfish-care-guide">MBU care guide</a>.</p>

<h2 id="pea-puffer-mates">Pea Puffer Tank Mates</h2>
<p>Pea Puffers (<em>Carinotetraodon travancoricus</em>) are the smallest puffers (2.5 cm) and the most community-compatible — but "compatible" is relative. They are still nippy, territorial micro-predators. In a heavily planted 20+ gallon tank, Pea Puffers can coexist with:</p>
<ul>
  <li><strong>Otocinclus:</strong> Small, fast algae eaters that occupy glass and plant surfaces — a different zone than the mid-water Pea Puffers. Keep in groups of 6+.</li>
  <li><strong>Pygmy Corydoras:</strong> Small, fast bottom-dwellers. Groups of 8+. Their constant movement and bottom orientation keeps them out of Pea Puffer territory.</li>
  <li><strong>Ember Tetras:</strong> Tiny and fast. Schools of 10+ in densely planted tanks. Some risk of fin-nipping from the puffers, but the tetras' speed usually keeps them safe.</li>
  <li><strong>Amano Shrimp:</strong> Large enough (4–5 cm) to avoid predation. Smaller shrimp (Cherry Shrimp) will be eaten — Pea Puffers are snail and small invertebrate predators by nature.</li>
</ul>
<p>Keep Pea Puffers in species groups of 3–6 in a 20+ gallon tank. Maintain a 1 male to 2 female ratio. Males are territorial and will fight if space is insufficient.</p>

<h2 id="figure-8-mates">Figure 8 Puffer Tank Mates</h2>
<p>Figure 8 Puffers (<em>Dichotomyctere ocellatus</em>) are brackish-water puffers (SG 1.005–1.008) with moderate aggression. Tank mates must tolerate brackish conditions:</p>
<ul>
  <li><strong>Bumblebee Gobies (<em>Brachygobius</em> spp.):</strong> Small (3–4 cm) brackish-water bottom-dwellers. Fast and adept at hiding. Keep in groups of 6+.</li>
  <li><strong>Mollies (<em>Poecilia</em> spp.):</strong> Hardy livebearers that thrive in brackish water. Their active swimming and medium size (6–8 cm) usually keeps them above the puffer's aggression threshold.</li>
  <li><strong>Knight Gobies (<em>Stigmatogobius sadanundio</em>):</strong> Robust brackish gobies (8–10 cm) that hold their own against Figure 8 aggression.</li>
</ul>
<p>Minimum tank size for a Figure 8 community: 30 gallons. Provide ample sight-line breaks with driftwood and rock structures. Monitor for fin-nipping — Figure 8 Puffers can be unpredictably aggressive toward slow-moving or long-finned tank mates.</p>

<h2 id="amazon-puffer-mates">Amazon Puffer Tank Mates</h2>
<p>Amazon Puffers (<em>Colomesus asellus</em>) are the most community-friendly freshwater puffer. They are shoaling puffers (keep in groups of 6+) that occupy open-water mid-column zones. In 75+ gallon tanks, they coexist with:</p>
<ul>
  <li><strong>Silver Dollars:</strong> Large, fast, disc-shaped. Too big and quick for the puffers to harass effectively.</li>
  <li><strong>Larger tetras (Congo Tetras, Buenos Aires Tetras):</strong> Fast mid-water fish that match the Amazon Puffer's energy level.</li>
  <li><strong>Large Corydoras (<em>C. aeneus</em>, <em>C. paleatus</em>):</strong> Armoured, bottom-dwelling, and fast. Groups of 6+.</li>
  <li><strong>Bristlenose Plecos:</strong> Armoured and nocturnal. Ignored by Amazon Puffers.</li>
</ul>
<p>Amazon Puffers have continuously growing beaks that require hard-shelled foods (snails, mussels) for maintenance. They will eat every snail in the tank — do not keep ornamental snails with them. Provide daily hard-shelled food to prevent beak overgrowth.</p>

<h2 id="congo-puffer-mates">Congo Puffer Tank Mates</h2>
<p>Congo Puffers (<em>Tetraodon miurus</em>) are ambush predators that bury themselves in sand and strike at passing prey. They are best kept alone but, in 75+ gallon tanks, can sometimes coexist with:</p>
<ul>
  <li><strong>Large Synodontis catfish:</strong> Armoured, nocturnal, and too large to eat. Keep in groups of 3+.</li>
  <li><strong>Large Bichirs:</strong> Armoured bottom-dwellers. Their size and scales offer protection, though monitor for any aggression.</li>
</ul>
<p>Any fish small enough to pass over the buried Congo Puffer will be eaten. They are capable of consuming prey nearly their own body length. Do not add mid-water fish of any size to a Congo Puffer tank — they specialise in ambushing fish that swim overhead.</p>

<h2 id="puffer-aggression-management">Managing Puffer Aggression</h2>
<ul>
  <li><strong>Feed puffers before introducing tank mates.</strong> A well-fed puffer is significantly less aggressive than a hungry one.</li>
  <li><strong>Provide complex environments.</strong> Dense planting, driftwood tangles, and rock formations break sight lines and reduce territorial chasing.</li>
  <li><strong>Add tank mates first.</strong> Establish companions in the tank before adding the puffer. The puffer enters an occupied territory rather than defending an established one.</li>
  <li><strong>Monitor constantly for the first week.</strong> Puffer behaviour can change suddenly — a tank mate tolerated for days can become a target overnight.</li>
  <li><strong>Have a backup plan.</strong> A spare tank or divider is mandatory when attempting puffer community setups. If aggression escalates, remove the victim immediately.</li>
</ul>

<h2 id="puffer-mates-to-avoid">Universal Species to Avoid</h2>
<ul>
  <li><strong>Slow, long-finned fish:</strong> Angels, fancy goldfish, long-finned Bettas — easy targets for beak-equipped nippers.</li>
  <li><strong>Small invertebrates:</strong> All puffers eat snails and small shrimp. If you value your invertebrates, do not keep puffers.</li>
  <li><strong>Other puffer species:</strong> Mixing puffer species (e.g., Fahaka with Pea Puffer) results in the larger puffer killing the smaller one.</li>
  <li><strong>Anything the puffer can fit in its mouth:</strong> Puffers are opportunistic predators. If it fits, it is food.</li>
</ul>
<p>Pufferfish community tanks are an advanced project that requires species-specific research, careful monitoring, and contingency planning. The safest approach is always to keep puffers as the sole fish species — their personality and intelligence make them rewarding even without companions. For dietary needs, see our <a href="/care/pufferfish-diet-feeding">pufferfish feeding guide</a>.</p>
`,
    faqs: [
      {
        question: 'Can Fahaka Puffers have any tank mates?',
        answer:
          'No. Fahaka Puffers must be kept completely alone. They attack and kill every other fish, regardless of size, speed, or armour. This includes other puffers, large cichlids, armoured catfish, and Plecos. A solitary 125-gallon tank is the only appropriate setup.',
      },
      {
        question: 'Can Pea Puffers live with shrimp?',
        answer:
          'Amano shrimp (4–5 cm) are usually safe due to their size. Smaller shrimp (Cherry Shrimp, Ghost Shrimp) will be eaten — Pea Puffers are natural invertebrate predators and actively hunt small shrimp and snails. If you want to keep ornamental shrimp, Pea Puffers are not compatible.',
      },
      {
        question: 'What is the most community-friendly puffer?',
        answer:
          'The Amazon Puffer (Colomesus asellus) is the most community-compatible freshwater puffer. It is a shoaling species (keep in groups of 6+) that can coexist with Silver Dollars, larger tetras, large Corydoras, and Bristlenose Plecos in 75+ gallon tanks. Even Amazon Puffers, however, will eat every snail in the tank.',
      },
      {
        question: 'Can two puffers live together?',
        answer:
          'Same-species groups work for some puffers: Pea Puffers (3–6 in 20+ gallons), Amazon Puffers (6+ in 75+ gallons), and Figure 8 Puffers (2–3 in 55+ gallons). Fahaka and MBU Puffers must always be solitary. Never mix different puffer species together — the larger one will kill the smaller.',
      },
    ],
    sources: [
      {
        title: 'FishBase: Tetraodon lineatus (Fahaka Puffer)',
        url: 'https://www.fishbase.se/summary/Tetraodon-lineatus.html',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Freshwater Pufferfish Husbandry and Compatibility',
        url: 'https://www.practicalfishkeeping.co.uk/features/freshwater-puffer-guide/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Feeding Ecology and Aggression in Tetraodon Species',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.14021',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: ['fahaka-pufferfish-care-guide', 'mbu-pufferfish-care-guide', 'pufferfish-diet-feeding'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 38 — Aquarium Filter Guide
  // ──────────────────────────────────────────────
  {
    title: 'Aquarium Filter Guide: Types, Sizing & Maintenance',
    slug: 'aquarium-filter-guide',
    type: 'care',
    topicCategory: 'equipment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/aquarium-filter-guide.jpg',
    heroImageAlt:
      'A selection of aquarium filters including a canister filter, hang-on-back filter, and sponge filter arranged beside a planted tank',
    metaTitle: 'Aquarium Filter Guide: Types, Sizing & Maintenance | The Fish Collection',
    metaDescription:
      'Complete aquarium filter guide. Compare sponge, HOB, canister, and sump filters. Learn proper sizing, media selection, and maintenance schedules.',
    quickAnswerQuestion: 'What type of aquarium filter should I use?',
    quickAnswer:
      'Choose based on tank size and livestock: sponge filters for Betta tanks, fry tanks, and quarantine (gentle, cheap, reliable); hang-on-back (HOB) filters for 10–55 gallon community tanks (good value, easy maintenance); canister filters for 40–150 gallon tanks (powerful, quiet, versatile media); sump systems for 100+ gallon tanks (maximum capacity, hidden equipment). Size your filter for 4–6x tank volume turnover per hour for community tanks, 8–10x for messy predators.',
    summary:
      'A practical guide to aquarium filtration covering the four main filter types (sponge, HOB, canister, sump), the three stages of filtration (mechanical, biological, chemical), proper sizing, media selection, maintenance schedules, and common mistakes.',
    keyFacts: [
      { label: 'Turnover Rate', value: '4–6x volume/hour (community)' },
      { label: 'Predator Tanks', value: '8–10x volume/hour' },
      { label: 'Best Budget', value: 'Sponge filter + air pump' },
      { label: 'Best All-Round', value: 'Canister filter' },
      { label: 'Best Large Tanks', value: 'Sump system' },
    ],
    headings: [
      { id: 'why-filtration-matters', text: 'Why Filtration Matters', level: 2 },
      { id: 'three-stages', text: 'The Three Stages of Filtration', level: 2 },
      { id: 'mechanical-filtration', text: 'Mechanical Filtration', level: 3 },
      { id: 'biological-filtration', text: 'Biological Filtration', level: 3 },
      { id: 'chemical-filtration', text: 'Chemical Filtration', level: 3 },
      { id: 'sponge-filters', text: 'Sponge Filters', level: 2 },
      { id: 'hob-filters', text: 'Hang-On-Back (HOB) Filters', level: 2 },
      { id: 'canister-filters', text: 'Canister Filters', level: 2 },
      { id: 'sump-systems', text: 'Sump Systems', level: 2 },
      { id: 'sizing-your-filter', text: 'Sizing Your Filter', level: 2 },
      { id: 'filter-maintenance', text: 'Filter Maintenance Schedule', level: 2 },
    ],
    content: `
<h2 id="why-filtration-matters">Why Filtration Matters</h2>
<p>Filtration is the life support system of an aquarium. Without it, ammonia from fish waste accumulates within hours to levels that burn gills, suppress immune function, and kill fish within days. A properly sized, well-maintained filter processes waste biologically (converting ammonia to nitrite to nitrate via beneficial bacteria), removes particulate matter mechanically (keeping water clear), and can optionally remove dissolved contaminants chemically (activated carbon, resins).</p>
<p>The filter is the single most important piece of equipment in your aquarium — more important than the heater, the light, or the tank itself. Invest in a quality filter that exceeds your minimum requirements, and maintain it religiously. A good filter, properly maintained, runs for decades.</p>

<h2 id="three-stages">The Three Stages of Filtration</h2>

<h3 id="mechanical-filtration">Mechanical Filtration</h3>
<p>Mechanical filtration removes solid particles (fish waste, uneaten food, plant debris, dust) from the water column by trapping them in a physical medium. Common mechanical media include:</p>
<ul>
  <li><strong>Filter floss/polyester batting:</strong> Fine mechanical filtration that polishes water to crystal clarity. Traps very small particles. Inexpensive and disposable — replace every 1–2 weeks when it becomes clogged.</li>
  <li><strong>Coarse sponge:</strong> Traps larger particles while allowing water to flow through easily. Long-lasting — rinse in used tank water monthly. The sponge also serves as biological media (bacteria colonise its surface).</li>
  <li><strong>Filter pads (various densities):</strong> Layered from coarse to fine, these provide progressive mechanical filtration. Water passes through coarse media first (catching large debris), then finer media (catching smaller particles).</li>
</ul>
<p>Mechanical media must be cleaned or replaced regularly. Clogged mechanical media reduces flow rate, which reduces both mechanical and biological filtration effectiveness. Always place mechanical media before biological media in the flow path — catch the particles before they reach the bacteria.</p>

<h3 id="biological-filtration">Biological Filtration</h3>
<p>Biological filtration is the conversion of ammonia to nitrite to nitrate by nitrifying bacteria. This is the most critical function of any filter — a filter with zero mechanical capacity but excellent biological capacity will keep fish alive; the reverse will not. See our <a href="/care/nitrogen-cycle-guide">nitrogen cycle guide</a> for complete details.</p>
<p>Biological media provides maximum surface area for bacterial colonisation:</p>
<ul>
  <li><strong>Ceramic rings/cylinders (Eheim Substrat Pro, Seachem Matrix):</strong> Highly porous ceramic with enormous internal surface area. The gold standard for biological media. Lasts indefinitely — never replace, only rinse gently in used tank water annually.</li>
  <li><strong>Bio-balls:</strong> Plastic balls with ridged surfaces. Good surface area, primarily used in wet/dry sumps where water trickles over them with maximum air exposure.</li>
  <li><strong>Sponge media:</strong> Every sponge in your filter doubles as biological media. This is why sponge filters work despite having no dedicated bio-media — the sponge itself hosts the bacteria.</li>
  <li><strong>Lava rock:</strong> Inexpensive, porous, and effective. Can be used as a budget alternative to ceramic media in canister filters and sumps.</li>
</ul>
<p><strong>Critical rule:</strong> Never replace all biological media at once. Never rinse biological media in tap water (chlorine kills the bacteria). Always clean in used tank water, and stagger any replacements by 4+ weeks to maintain the bacterial colony.</p>

<h3 id="chemical-filtration">Chemical Filtration</h3>
<p>Chemical filtration removes dissolved substances through adsorption or ion exchange:</p>
<ul>
  <li><strong>Activated carbon:</strong> Adsorbs dissolved organic compounds, tannins, odours, and medication residues. Useful for water polishing and removing discolouration. Replace every 3–4 weeks as the adsorption capacity is exhausted. Remove carbon during medication — it adsorbs the medication before it can treat the fish.</li>
  <li><strong>Purigen (Seachem):</strong> A synthetic adsorption resin that removes nitrogenous organic waste at the molecular level. More effective per gram than activated carbon and rechargeable with a bleach soak. Excellent for maintaining water clarity in planted tanks.</li>
  <li><strong>Phosphate removers (GFO — granular ferric oxide):</strong> Adsorbs phosphate, reducing algae growth. Useful in tanks with persistent algae problems despite good husbandry.</li>
</ul>
<p>Chemical filtration is optional for most setups. Mechanical + biological filtration handles the essential life support functions. Chemical media is an enhancement, not a requirement.</p>

<h2 id="sponge-filters">Sponge Filters</h2>
<p>Sponge filters are the simplest and most reliable filtration method. A porous sponge sits in the tank, connected via airline tubing to an air pump. Rising air bubbles create a current that draws water through the sponge, which provides both mechanical and biological filtration.</p>
<p><strong>Best for:</strong> Betta tanks (gentle flow), fry tanks (no intake to trap babies), quarantine tanks (easy to sterilise and redeploy), shrimp tanks (no risk of shrimp being sucked in), and as backup filtration in any tank.</p>
<p><strong>Advantages:</strong> Extremely reliable (no moving parts to fail), inexpensive ($5–15), silent biological filtration, gentle current, safe for fry and shrimp, easy to pre-cycle in an existing tank.</p>
<p><strong>Limitations:</strong> Limited mechanical filtration (will not polish water to crystal clarity), requires an air pump (additional equipment), aesthetically unappealing in display tanks, insufficient as sole filtration for heavily stocked tanks above 40 gallons.</p>
<p><strong>Sizing:</strong> Choose a sponge filter rated for your tank size or one size larger. For Betta tanks (5–10 gallons), a single small sponge is sufficient. For quarantine (10–20 gallons), use a medium sponge. Dual-sponge models allow you to clean one sponge at a time while the other maintains the bacterial colony.</p>

<h2 id="hob-filters">Hang-On-Back (HOB) Filters</h2>
<p>HOB filters hang on the back rim of the tank, drawing water up through an intake tube, passing it through a media chamber, and returning it via a waterfall-style spillway. They are the most popular filter type for tanks between 10 and 55 gallons.</p>
<p><strong>Best for:</strong> Community tanks 10–55 gallons, beginner setups, and tanks where sump installation is not practical.</p>
<p><strong>Recommended models:</strong></p>
<ul>
  <li><strong>AquaClear (Fluval):</strong> The gold standard HOB. Uses loose media (sponge, carbon, bio-rings) rather than proprietary cartridges, allowing full customisation. AquaClear 30 for 10–30 gallons, AquaClear 50 for 20–50 gallons, AquaClear 70 for 40–70 gallons.</li>
  <li><strong>Seachem Tidal:</strong> Surface skimmer intake, self-priming, adjustable flow. Media basket design allows complete customisation. Tidal 55 for up to 55 gallons, Tidal 75 for up to 75 gallons.</li>
</ul>
<p><strong>Avoid HOB filters with proprietary cartridges</strong> (e.g., most Marineland, Tetra Whisper models). These cartridges combine mechanical and biological media into a single disposable unit — when you replace the clogged cartridge, you discard the bacterial colony and crash the cycle. Always choose HOBs that allow separate media placement.</p>
<p><strong>HOB tip for Bettas:</strong> Baffle the output with a pre-filter sponge or a cut water bottle to reduce the waterfall current. Bettas are poor swimmers and the unmodified output of a HOB can exhaust them.</p>

<h2 id="canister-filters">Canister Filters</h2>
<p>Canister filters are sealed canisters that sit below or beside the tank, connected by intake and output hoses. Water is pumped through stacked media baskets inside the canister, providing the most versatile and powerful external filtration available for tanks under 150 gallons.</p>
<p><strong>Best for:</strong> Planted tanks (pressurised output allows inline CO₂ and heater integration), medium to large tanks (40–150 gallons), and aquascapes where visible equipment must be minimised.</p>
<p><strong>Recommended models:</strong></p>
<ul>
  <li><strong>Fluval FX4 / FX6:</strong> The workhorses. FX4 handles up to 250 gallons, FX6 up to 400 gallons. Self-priming, enormous media capacity, reliable. The FX6 is the go-to filter for large predator tanks (Arowana, Oscars, large cichlids).</li>
  <li><strong>Eheim Classic (2213, 2215, 2217):</strong> German engineering, legendary reliability, whisper-quiet. The 2217 handles up to 160 gallons. Eheim Classics have been in production largely unchanged since the 1970s — proven technology.</li>
  <li><strong>Oase BioMaster:</strong> Integrated heater option, pre-filter chamber for easy maintenance, excellent flow rates. BioMaster 350 for up to 90 gallons, BioMaster 600 for up to 160 gallons.</li>
</ul>
<p><strong>Media loading order</strong> (bottom to top, following water flow): coarse sponge → filter floss → ceramic bio-media → optional chemical media (carbon, Purigen). This ensures large particles are caught before reaching the bio-media, extending cleaning intervals.</p>

<h2 id="sump-systems">Sump Systems</h2>
<p>A sump is a separate tank (typically placed inside the aquarium stand) connected to the display tank via an overflow and return pump. Water flows from the display into the sump by gravity, passes through filtration chambers, and is pumped back to the display. Sumps are the professional-grade filtration solution for tanks above 100 gallons.</p>
<p><strong>Advantages:</strong> Massive media capacity (entire chambers dedicated to each filtration stage), hides all equipment (heater, probes, reactors inside the sump), increases total system water volume (adding stability), and allows easy maintenance without disturbing the display.</p>
<p><strong>Sump chamber layout (typical):</strong></p>
<ol>
  <li><strong>Overflow chamber:</strong> Water enters from the display via a weir or overflow box. Filter sock or sponge catches large debris.</li>
  <li><strong>Biological chamber:</strong> Filled with ceramic media, bio-balls, or lava rock. The largest chamber in the sump.</li>
  <li><strong>Refugium/plant chamber (optional):</strong> A lit chamber growing fast-growing plants (Pothos, Peace Lily, or aquatic plants) that absorb nitrate directly.</li>
  <li><strong>Return chamber:</strong> Houses the return pump, heater, and any probes or dosing equipment. Water is pumped back to the display.</li>
</ol>
<p>Sumps require a drilled tank (preferred) or an overflow box to move water from the display to the sump. DIY sumps can be built from standard aquariums with glass baffles. For large predator fish (Arowana, stingrays, large cichlids), a sump is the recommended filtration method.</p>

<h2 id="sizing-your-filter">Sizing Your Filter</h2>
<ul>
  <li><strong>Community tanks (tetras, Corydoras, small cichlids):</strong> 4–6× tank volume turnover per hour. A 50-gallon tank needs a filter rated for 200–300 GPH.</li>
  <li><strong>Planted tanks:</strong> 4–6× turnover. Higher flow improves CO₂ and nutrient distribution. Use a spray bar or lily pipe to distribute flow evenly.</li>
  <li><strong>Predator tanks (Arowana, Oscars, large cichlids):</strong> 8–10× turnover. These fish produce heavy waste loads. A 125-gallon Oscar tank needs 1,000–1,250 GPH of filtration — typically achieved with dual canisters or a sump.</li>
  <li><strong>Betta and shrimp tanks:</strong> 2–4× turnover with gentle output. A sponge filter alone is usually sufficient for 5–10 gallon tanks.</li>
</ul>
<p>Always oversize your filter. A filter rated for "up to 75 gallons" running on a 50-gallon tank provides better biological capacity, cleaner water, and more forgiveness for missed maintenance. There is no downside to oversizing filtration — only undersizing creates problems.</p>

<h2 id="filter-maintenance">Filter Maintenance Schedule</h2>
<ul>
  <li><strong>Weekly:</strong> Check filter flow rate. Reduced flow indicates clogged mechanical media. Visually inspect intake for blockages.</li>
  <li><strong>Monthly:</strong> Rinse mechanical media (sponges, filter floss) in used tank water during a water change. Replace filter floss if using it. Never rinse in tap water.</li>
  <li><strong>Every 3–4 months:</strong> Open canister filters for a full inspection. Rinse all sponges, check impeller for debris, clean tubing with a flexible brush. Replace activated carbon if using it.</li>
  <li><strong>Annually:</strong> Replace impeller and O-rings on canister filters (preventive maintenance). Gently rinse bio-media in used tank water — do not scrub or replace.</li>
  <li><strong>Never:</strong> Replace all media at once. Replace bio-media. Rinse anything in tap water. Run the filter without media after cleaning (re-assemble before plugging in).</li>
</ul>
<p>A well-maintained filter is the foundation of a healthy aquarium. Choose the right type for your setup, size it generously, maintain it consistently, and it will keep your fish healthy for years. For guidance on the nitrogen cycle that powers biological filtration, see our <a href="/care/nitrogen-cycle-guide">nitrogen cycle guide</a>.</p>
`,
    faqs: [
      {
        question: 'What is the best filter for a beginner?',
        answer:
          'An AquaClear hang-on-back filter is the best beginner choice. It uses customisable loose media (not disposable cartridges), is easy to maintain, and provides excellent filtration for tanks up to 70 gallons. Choose the AquaClear model rated for one size larger than your tank for optimal performance.',
      },
      {
        question: 'Do I need a filter if I have live plants?',
        answer:
          'Yes. While live plants absorb some ammonia and nitrate, they cannot replace mechanical and biological filtration in a stocked aquarium. A heavily planted tank with very low fish load (a single Betta, for example) can survive without a filter with disciplined water changes, but a filter dramatically improves stability and fish health.',
      },
      {
        question: 'How often should I clean my filter?',
        answer:
          'Rinse mechanical media monthly in used tank water. Inspect canister filters every 3–4 months. Replace filter floss as needed (every 1–2 weeks for heavy bioloads). Never clean biological media aggressively — a gentle rinse in tank water annually is sufficient. The goal is to remove debris without destroying the bacterial colony.',
      },
      {
        question: 'Can I run two filters on one tank?',
        answer:
          'Yes, and it is recommended for medium to large tanks. Dual filtration provides redundancy (if one filter fails, the other maintains the cycle), doubles biological capacity, and improves water circulation. Running an AquaClear HOB with a sponge filter, or dual canister filters, is common practice among experienced keepers.',
      },
    ],
    sources: [
      {
        title: 'Biological Filtration in Recirculating Aquaculture Systems',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848606001761',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Filter Comparison for Home Aquaria',
        url: 'https://www.practicalfishkeeping.co.uk/features/filter-guide/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Mechanical and Biological Filtration Performance in Ornamental Systems',
        url: 'https://edis.ifas.ufl.edu/publication/FA065',
        publisher: 'University of Florida IFAS Extension',
      },
    ],
    relatedSlugs: ['nitrogen-cycle-guide', 'aquarium-heater-guide', 'aquarium-lighting-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 39 — Aquarium Heater Guide
  // ──────────────────────────────────────────────
  {
    title: 'Aquarium Heater Guide: Types, Sizing & Placement',
    slug: 'aquarium-heater-guide',
    type: 'care',
    topicCategory: 'equipment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/aquarium-heater-guide.jpg',
    heroImageAlt:
      'An adjustable aquarium heater installed vertically beside a filter output in a planted tropical aquarium',
    metaTitle: 'Aquarium Heater Guide: Types, Sizing & Placement | The Fish Collection',
    metaDescription:
      'Complete aquarium heater guide. Compare submersible, inline, and titanium heaters. Learn proper wattage sizing, placement, and safety practices.',
    quickAnswerQuestion: 'What size heater does my aquarium need?',
    quickAnswer:
      'Use 3–5 watts per gallon as the baseline: 25 W for 5 gallons, 50 W for 10 gallons, 100 W for 20 gallons, 200 W for 40–55 gallons, 300 W for 75 gallons. For large tanks (100+ gallons), use two smaller heaters rather than one large unit for even heat distribution and redundancy. Always choose adjustable heaters over preset models — adjustable units allow precise calibration and heat treatment for diseases.',
    summary:
      'A practical guide to aquarium heaters covering heater types (submersible, inline, titanium, preset), wattage sizing, optimal placement, dual-heater strategies, safety practices, and troubleshooting common heater problems.',
    keyFacts: [
      { label: 'Sizing Rule', value: '3–5 watts per gallon' },
      { label: 'Best Type', value: 'Adjustable submersible' },
      { label: 'Large Tanks', value: 'Use two heaters' },
      { label: 'Placement', value: 'Near filter output, vertical' },
      { label: 'Safety Check', value: 'Separate thermometer always' },
    ],
    headings: [
      { id: 'why-heaters-matter', text: 'Why Aquarium Heaters Matter', level: 2 },
      { id: 'heater-types', text: 'Heater Types', level: 2 },
      { id: 'submersible-heaters', text: 'Submersible Glass Heaters', level: 3 },
      { id: 'inline-heaters', text: 'Inline Heaters', level: 3 },
      { id: 'titanium-heaters', text: 'Titanium Heaters', level: 3 },
      { id: 'preset-heaters', text: 'Preset vs. Adjustable', level: 3 },
      { id: 'heater-sizing', text: 'Heater Sizing by Tank Volume', level: 2 },
      { id: 'dual-heater-strategy', text: 'Dual-Heater Strategy', level: 2 },
      { id: 'heater-placement', text: 'Optimal Heater Placement', level: 2 },
      { id: 'heater-safety', text: 'Heater Safety Practices', level: 2 },
      { id: 'troubleshooting-heaters', text: 'Troubleshooting Common Problems', level: 2 },
    ],
    content: `
<h2 id="why-heaters-matter">Why Aquarium Heaters Matter</h2>
<p>Most aquarium fish are tropical, originating from waters where temperature remains consistently between 75 and 82 °F (24–28 °C) year-round. Ambient room temperature in most homes fluctuates between 65 and 75 °F — too cold for tropical fish, and too variable. A heater maintains the stable, warm temperature that tropical fish require for proper metabolism, immune function, and long-term health.</p>
<p>Temperature stability is as important as the absolute number. A daily swing of 3–5 °F — common in unheated tanks as room temperature changes between day and night — suppresses the fish's immune system and triggers disease outbreaks. A quality heater with an accurate thermostat eliminates these fluctuations, maintaining temperature within ±1 °F of the set point.</p>

<h2 id="heater-types">Heater Types</h2>

<h3 id="submersible-heaters">Submersible Glass Heaters</h3>
<p>The most common and cost-effective type. A glass tube houses a heating element and thermostat, fully submersed in the tank. Modern units are shatterproof (using tempered or quartz glass) and accurate to ±0.5–1 °F.</p>
<p><strong>Recommended models:</strong></p>
<ul>
  <li><strong>Eheim Jäger:</strong> The industry standard for over 30 years. German-made, TruTemp dial calibrated to ±0.5 °F, available in 25–300 W sizes. Dry-run protection shuts the heater off if accidentally exposed to air.</li>
  <li><strong>Cobalt Neo-Therm:</strong> Flat, slim design that mounts flush against the glass. LED temperature display, electronic thermostat (more accurate than bimetallic), and a modern aesthetic. 25–300 W range.</li>
  <li><strong>Aqueon Pro:</strong> Shatterproof housing, lifetime warranty, LED indicator, and a reputation for consistent accuracy. Available in 50–250 W.</li>
</ul>

<h3 id="inline-heaters">Inline Heaters</h3>
<p>Inline heaters connect between the canister filter output hose and the tank, heating water as it passes through the unit. The heater is completely hidden from view — nothing visible inside the tank.</p>
<p><strong>Best for:</strong> Aquascapes and display tanks where visible equipment detracts from the aesthetic. Requires a canister filter with appropriately sized tubing.</p>
<p><strong>Recommended:</strong> Hydor Inline External Heater (200 W or 300 W). Available for 12/16 mm and 16/22 mm tubing.</p>
<p><strong>Limitation:</strong> If the canister filter stops running (power outage, maintenance), the inline heater stops heating. Always pair with a backup thermometer alarm.</p>

<h3 id="titanium-heaters">Titanium Heaters</h3>
<p>The heating element is encased in a titanium tube — virtually indestructible. The thermostat/controller is a separate external unit, allowing precise digital temperature control. Titanium heaters are the professional choice for large, expensive setups (Arowana, stingrays, Discus).</p>
<p><strong>Recommended:</strong> Finnex TH-S titanium heaters with the HC-810M controller. Available in 300–800 W for tanks up to 400 gallons. The external controller provides ±0.1 °F accuracy and a fail-safe high-temperature cutoff.</p>
<p><strong>Advantages:</strong> Cannot shatter (critical for large, aggressive fish that knock equipment), separate controller allows placement outside the tank, and industrial-grade durability.</p>
<p><strong>Limitation:</strong> More expensive than glass heaters ($40–80 for the heater + $30–50 for the controller). Justified for high-value livestock.</p>

<h3 id="preset-heaters">Preset vs. Adjustable</h3>
<p><strong>Always choose adjustable.</strong> Preset heaters are locked at a factory-set temperature (usually 78 °F) with no ability to adjust. In practice, preset heaters frequently run 2–4 °F above or below their stated temperature, and you have no way to correct it. Adjustable heaters allow you to:</p>
<ul>
  <li>Calibrate the exact temperature using a separate thermometer.</li>
  <li>Raise temperature for heat-based disease treatment (86 °F for Ich).</li>
  <li>Match specific species requirements (82–86 °F for Discus, 60–72 °F for axolotls in summer).</li>
  <li>Lower temperature slightly for breeding triggers in some species.</li>
</ul>
<p>The cost difference between preset and adjustable is typically $5–10. There is no reason to choose preset.</p>

<h2 id="heater-sizing">Heater Sizing by Tank Volume</h2>
<p>The standard sizing rule is <strong>3–5 watts per gallon</strong>, depending on the temperature difference between your room and the target tank temperature:</p>
<ul>
  <li><strong>5 gallon:</strong> 25 W</li>
  <li><strong>10 gallon:</strong> 50 W</li>
  <li><strong>20 gallon:</strong> 75–100 W</li>
  <li><strong>40 gallon:</strong> 150–200 W</li>
  <li><strong>55 gallon:</strong> 200 W</li>
  <li><strong>75 gallon:</strong> 250–300 W</li>
  <li><strong>125 gallon:</strong> Two 200 W heaters (dual-heater strategy)</li>
  <li><strong>200+ gallon:</strong> Two 300 W heaters or a 500–800 W titanium heater with external controller</li>
</ul>
<p>In cold rooms (below 65 °F ambient), err toward 5 watts per gallon. In warm climates or heated rooms, 3 watts per gallon is sufficient. An undersized heater will run continuously without reaching the target temperature — visible as the heater indicator light staying on permanently.</p>

<h2 id="dual-heater-strategy">Dual-Heater Strategy</h2>
<p>For tanks above 75 gallons, using two smaller heaters instead of one large unit provides significant advantages:</p>
<ul>
  <li><strong>Redundancy:</strong> If one heater fails, the other maintains at least partial temperature control until you notice and replace it. A single heater failure in a 125-gallon tank can drop temperature 10+ °F overnight.</li>
  <li><strong>Even heat distribution:</strong> Place one heater at each end of the tank. A single heater creates a warm zone near the heater and a cooler zone at the far end — a gradient that stresses fish and creates behaviour changes.</li>
  <li><strong>Fail-safe against overheating:</strong> A stuck-on 300 W heater can raise a 75-gallon tank to lethal temperatures (95+ °F) within hours. Two 150 W heaters individually lack the power to overheat the tank if one sticks on — the other thermostatically shuts off, limiting the maximum temperature rise.</li>
</ul>
<p>Set both heaters to the same temperature. Each will cycle on and off independently, sharing the heating load and providing mutual backup.</p>

<h2 id="heater-placement">Optimal Heater Placement</h2>
<ul>
  <li><strong>Near the filter output or a circulation pump.</strong> Moving water distributes heat evenly throughout the tank, eliminating cold spots. A heater in stagnant water creates a localised hot zone surrounded by cooler water.</li>
  <li><strong>Vertical or diagonal orientation:</strong> Heat rises. A horizontally placed heater heats the water above it while the sensor (typically at the top) sits in the warmest zone, causing it to shut off prematurely while the bottom of the tank remains cold. Vertical placement ensures the sensor accurately reads the surrounding water temperature.</li>
  <li><strong>Away from substrate:</strong> Leave 2–3 cm clearance between the heater and substrate. Sand and gravel insulate heat, which can cause the glass tube to overheat and crack.</li>
  <li><strong>Behind decorations if possible:</strong> Hide the heater behind driftwood, rocks, or tall plants for aesthetics. Ensure water circulation around the heater is not blocked.</li>
  <li><strong>Always use suction cups or the provided mounting bracket.</strong> A fallen heater resting on the substrate can melt plastic, crack glass from thermal stress, or burn the substrate organisms.</li>
</ul>

<h2 id="heater-safety">Heater Safety Practices</h2>
<ul>
  <li><strong>Always use a separate thermometer.</strong> Never rely on the heater's built-in thermostat alone. Place a digital thermometer at the opposite end of the tank from the heater to verify the temperature the fish actually experience. Digital probe thermometers with high/low alarms (Inkbird ITC-308) are ideal.</li>
  <li><strong>Unplug before water changes.</strong> Exposing a hot heater element to air can crack the glass tube (thermal shock). Unplug the heater 15–30 minutes before lowering the water level, and do not plug it back in until the water level covers the heater completely.</li>
  <li><strong>Use a heater guard</strong> for large, aggressive fish (Arowana, large cichlids, pufferfish) that may knock into or bite the heater. Titanium heaters are an alternative that eliminates shatter risk entirely.</li>
  <li><strong>Replace heaters preventively.</strong> Glass submersible heaters have a functional lifespan of 3–5 years. After this, thermostat accuracy degrades and failure risk increases. Budget for heater replacement as routine maintenance, not an emergency expense.</li>
  <li><strong>Consider an external temperature controller</strong> (Inkbird ITC-308, $35–40) as a fail-safe for high-value tanks. The controller plugs between the heater and the power outlet, independently monitoring temperature and cutting power if the tank exceeds a set maximum — preventing stuck-on heater disasters.</li>
</ul>

<h2 id="troubleshooting-heaters">Troubleshooting Common Problems</h2>
<ul>
  <li><strong>Heater running constantly (light always on):</strong> Either the heater is undersized for the tank, the room is very cold, or the thermostat is failing. Verify room temperature and heater wattage. If the heater is appropriately sized and the room is not unusually cold, the thermostat may be failing — replace the heater.</li>
  <li><strong>Temperature swings despite heater:</strong> Check heater placement — is it in a stagnant zone? Move it near the filter output. Verify the heater is fully submerged. Check for drafts near the tank (open windows, air conditioning vents blowing on the tank).</li>
  <li><strong>Tank overheating:</strong> Unplug the heater immediately. If the heater is stuck on, it has failed — discard and replace. Perform a partial water change with slightly cooler water (no more than 2 °F below current tank temperature) to bring temperature down gradually. Add an airstone to increase oxygen (warm water holds less dissolved oxygen).</li>
  <li><strong>Heater cracked or leaking:</strong> Unplug immediately. Remove the heater from the tank. Perform a large water change to dilute any contaminants. Glass heater cracks are rare with quality brands but can occur from thermal shock (exposure to air while hot) or impact from large fish.</li>
</ul>
<p>A quality heater is a modest investment that protects the health of every fish in your tank. Pair it with a separate thermometer, maintain it properly, and replace it preventively — temperature stability is one of the most impactful factors in long-term fish health. For complete tank setup guidance, see our <a href="/care/aquarium-filter-guide">filter guide</a> and <a href="/care/aquarium-lighting-guide">lighting guide</a>.</p>
`,
    faqs: [
      {
        question: 'What wattage heater do I need?',
        answer:
          'Use 3–5 watts per gallon as the baseline: 50 W for 10 gallons, 100 W for 20 gallons, 200 W for 55 gallons, 300 W for 75 gallons. In cold rooms (below 65 °F), use 5 watts per gallon. For tanks above 75 gallons, use two smaller heaters for redundancy and even heat distribution.',
      },
      {
        question: 'Are preset heaters okay?',
        answer:
          'No. Preset heaters lock at a factory temperature (usually 78 °F) that is frequently 2–4 °F off the stated value, with no ability to adjust. Adjustable heaters cost only $5–10 more and allow precise calibration, disease treatment (raising temperature for Ich), and species-specific temperature matching. Always choose adjustable.',
      },
      {
        question: 'Can a heater overheat and kill my fish?',
        answer:
          'Yes. A stuck-on heater is the most dangerous equipment failure in the hobby. A 300 W heater stuck on in a 75-gallon tank can raise temperature to 95+ °F within hours, killing fish. Protect against this with a dual-heater strategy (two smaller heaters), an external temperature controller (Inkbird ITC-308), and a digital thermometer with a high-temperature alarm.',
      },
      {
        question: 'Do I need a heater for a Betta?',
        answer:
          'Absolutely. Bettas are tropical fish that require 76–82 °F (24–28 °C). Without a heater, tank temperature follows room temperature, which in most homes drops below 74 °F at night. Chronic cold suppresses Betta immune function, causes lethargy, and dramatically shortens lifespan. A 25 W adjustable heater in a 5-gallon tank is sufficient.',
      },
    ],
    sources: [
      {
        title: 'Temperature Requirements of Common Ornamental Fish Species',
        url: 'https://edis.ifas.ufl.edu/publication/FA178',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Thermal Tolerance and Temperature Fluctuation Effects on Fish Health',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.13870',
        publisher: 'Journal of Fish Biology',
      },
      {
        title: 'Aquarium Equipment Guide: Heaters',
        url: 'https://www.practicalfishkeeping.co.uk/features/heater-guide/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['aquarium-filter-guide', 'aquarium-lighting-guide', 'betta-complete-care-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 40 — Aquarium Lighting Guide
  // ──────────────────────────────────────────────
  {
    title: 'Aquarium Lighting Guide: Types, Spectrums & Photoperiods',
    slug: 'aquarium-lighting-guide',
    type: 'care',
    topicCategory: 'equipment',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/aquarium-lighting-guide.jpg',
    heroImageAlt:
      'A beautifully lit planted aquarium displaying a full-spectrum LED light with lush green aquatic plants',
    metaTitle: 'Aquarium Lighting Guide: LED, Spectrum & Photoperiod | The Fish Collection',
    metaDescription:
      'Complete aquarium lighting guide. LED vs. fluorescent, light spectrum for plants, PAR values, photoperiod recommendations, and algae control through lighting.',
    quickAnswerQuestion: 'What lighting does my aquarium need?',
    quickAnswer:
      'For fish-only tanks, any LED light on a timer (8–10 hours daily) is sufficient — choose a colour temperature of 6,500–10,000 K for natural appearance. For planted tanks, select a full-spectrum LED with adequate PAR: low-light plants need 20–40 PAR at substrate level, medium-light plants need 40–80 PAR, and high-light plants need 80–150+ PAR. Recommended lights: Fluval Plant 3.0 or Chihiros WRGB II for planted tanks, Fluval AquaSky for fish-only tanks.',
    summary:
      'A comprehensive guide to aquarium lighting covering LED technology, light spectrum and colour temperature, PAR values for planted tanks, photoperiod management, algae prevention through lighting control, and equipment recommendations for different tank types.',
    keyFacts: [
      { label: 'Best Technology', value: 'LED (efficient, adjustable)' },
      { label: 'Photoperiod', value: '8–10 hours daily' },
      { label: 'Colour Temp', value: '6,500–10,000 K' },
      { label: 'Low-Light Plants', value: '20–40 PAR at substrate' },
      { label: 'High-Light Plants', value: '80–150+ PAR at substrate' },
    ],
    headings: [
      { id: 'lighting-overview', text: 'Why Lighting Matters', level: 2 },
      { id: 'led-vs-fluorescent', text: 'LED vs. Fluorescent', level: 2 },
      { id: 'light-spectrum', text: 'Understanding Light Spectrum', level: 2 },
      { id: 'colour-temperature', text: 'Colour Temperature (Kelvin)', level: 3 },
      { id: 'par-values', text: 'PAR Values for Planted Tanks', level: 3 },
      { id: 'fish-only-lighting', text: 'Lighting for Fish-Only Tanks', level: 2 },
      { id: 'planted-tank-lighting', text: 'Lighting for Planted Tanks', level: 2 },
      { id: 'photoperiod', text: 'Photoperiod Management', level: 2 },
      { id: 'algae-and-lighting', text: 'Algae Control Through Lighting', level: 2 },
      { id: 'lighting-recommendations', text: 'Equipment Recommendations', level: 2 },
    ],
    content: `
<h2 id="lighting-overview">Why Lighting Matters</h2>
<p>Aquarium lighting serves three functions: it allows you to see and enjoy your fish, it drives photosynthesis in live plants, and it establishes a day/night cycle (photoperiod) that regulates fish behaviour, feeding patterns, and stress levels. Poor lighting choices cause algae blooms, stunted plant growth, washed-out fish colour, and disrupted circadian rhythms.</p>
<p>The modern aquarium hobby has been transformed by LED technology. LEDs are energy-efficient, long-lasting (50,000+ hours), produce minimal heat, and offer adjustable spectrum and intensity — features that make them the default choice for every application from a 5-gallon Betta tank to a professional aquascape.</p>

<h2 id="led-vs-fluorescent">LED vs. Fluorescent</h2>
<p>LEDs have comprehensively replaced fluorescent lighting in the aquarium hobby:</p>
<ul>
  <li><strong>LED advantages:</strong> 50,000+ hour lifespan (vs. 6–12 months for fluorescent tubes before spectrum degradation), adjustable intensity and colour, programmable sunrise/sunset ramps, lower heat output, lower electricity cost, and slimmer profiles.</li>
  <li><strong>Fluorescent (T5HO, T8):</strong> Still available and effective, particularly T5HO fixtures for high-light planted tanks. However, tubes must be replaced every 6–12 months as the phosphor coating degrades — the tube still appears bright to the eye but loses the specific wavelengths plants need. The ongoing tube replacement cost eliminates any initial price advantage over LED.</li>
</ul>
<p>For new setups, LED is the clear choice. For existing fluorescent setups, continue using them (they still work) but plan a transition to LED when tubes need replacement.</p>

<h2 id="light-spectrum">Understanding Light Spectrum</h2>

<h3 id="colour-temperature">Colour Temperature (Kelvin)</h3>
<p>Colour temperature describes the visual warmth or coolness of light, measured in Kelvin (K):</p>
<ul>
  <li><strong>3,000–5,000 K:</strong> Warm, yellowish light. Mimics early morning or late afternoon sun. Makes red and orange fish colours pop but can make plants appear yellowish.</li>
  <li><strong>6,500 K:</strong> Neutral daylight. The standard for planted aquariums — it closely replicates midday tropical sunlight and supports photosynthesis across all wavelengths. Plants appear natural green, and fish colours are rendered accurately.</li>
  <li><strong>8,000–10,000 K:</strong> Cool, bluish-white light. Simulates deeper water conditions. Enhances blue fish colours and creates a crisp, modern aesthetic. Common in marine and African cichlid setups.</li>
  <li><strong>10,000–20,000 K (actinic blue):</strong> Deep blue light primarily for marine reef aquariums. Not recommended as sole lighting for freshwater — fish appear washed out and plants do not receive adequate photosynthetically active radiation.</li>
</ul>
<p>For freshwater aquariums, <strong>6,500–8,000 K</strong> provides the best balance of natural appearance, plant growth, and fish colour rendering. Many modern LED fixtures allow you to blend warm and cool LEDs to achieve any colour temperature, adjustable to your preference.</p>

<h3 id="par-values">PAR Values for Planted Tanks</h3>
<p>PAR (Photosynthetically Active Radiation) measures the amount of light in the 400–700 nm wavelength range that plants can use for photosynthesis. PAR is measured in micromoles per square metre per second (µmol/m²/s) using a PAR meter. It is the most accurate way to determine whether your light can grow the plants you want:</p>
<ul>
  <li><strong>Low-light plants (20–40 PAR at substrate):</strong> Java Fern, Anubias, Java Moss, Cryptocoryne, Vallisneria. These plants thrive under modest lighting and are ideal for beginners and fish-focused tanks.</li>
  <li><strong>Medium-light plants (40–80 PAR at substrate):</strong> Amazon Sword, Hygrophila, Rotala rotundifolia, Ludwigia, Staurogyne repens. Require a capable planted-tank LED light and benefit from liquid fertiliser supplementation.</li>
  <li><strong>High-light plants (80–150+ PAR at substrate):</strong> Glossostigma, Hemianthus callitrichoides (HC "Cuba"), Rotala macrandra, red-coloured plants requiring intense light for pigment development. Require premium LED fixtures, CO₂ injection, and comprehensive fertilisation.</li>
</ul>
<p>PAR decreases with depth — a light that provides 80 PAR at 12 inches may only deliver 40 PAR at 24 inches. Deep tanks (24+ inches) require significantly more powerful lights to achieve adequate PAR at the substrate.</p>

<h2 id="fish-only-lighting">Lighting for Fish-Only Tanks</h2>
<p>Fish-only tanks (no live plants) have simple lighting requirements:</p>
<ul>
  <li>Any LED light in the 6,500–10,000 K range for natural colour rendering.</li>
  <li>8–10 hours daily on a timer. Consistency matters — an automatic timer eliminates the variability of manual on/off.</li>
  <li>Avoid excessively bright lighting — many fish (Bettas, most catfish, predators) prefer dim environments and become stressed under intense light.</li>
  <li>For species that prefer dim conditions (Betta, Wolf Fish, nocturnal catfish), use a low-intensity setting or floating plants (Amazon Frogbit, Salvinia) to diffuse the light.</li>
</ul>

<h2 id="planted-tank-lighting">Lighting for Planted Tanks</h2>
<p>Planted tank lighting must balance three factors: sufficient PAR for plant growth, appropriate spectrum for photosynthesis, and controlled intensity to prevent algae.</p>
<ul>
  <li><strong>Low-tech planted tanks</strong> (no CO₂, liquid fertiliser only): A moderate LED providing 20–40 PAR at substrate is sufficient. Plants like Java Fern, Anubias, Cryptocoryne, and Vallisneria thrive under this light level. Run 8 hours daily.</li>
  <li><strong>Medium-tech planted tanks</strong> (no CO₂, comprehensive fertilisation): 40–80 PAR at substrate. A quality planted-tank LED (Fluval Plant 3.0, Chihiros WRGB II) at moderate intensity. 7–8 hours daily to balance growth and algae control.</li>
  <li><strong>High-tech planted tanks</strong> (pressurised CO₂, full fertilisation): 80–150+ PAR at substrate. Premium LED at full intensity (Chihiros WRGB II, Twinstar 900SP, ONF Flat Nano). CO₂ injection is mandatory at this light level — without CO₂, high PAR drives explosive algae growth rather than plant growth. 6–8 hours daily.</li>
</ul>
<p>The relationship between light, CO₂, and fertiliser is a triangle: increasing one without proportionally increasing the others creates imbalance — and imbalance grows algae. Start with lower light and increase gradually as you master fertilisation and CO₂ management.</p>

<h2 id="photoperiod">Photoperiod Management</h2>
<p>Photoperiod — the daily duration of light — affects fish behaviour, plant growth, and algae development:</p>
<ul>
  <li><strong>8–10 hours</strong> is the standard photoperiod for freshwater aquariums. This provides adequate light for plant photosynthesis while limiting the total daily light exposure that fuels algae.</li>
  <li><strong>Use a timer.</strong> Manual on/off creates inconsistent photoperiods that stress fish (disrupted circadian rhythm) and promote algae (irregular light availability). A $5 mechanical timer or a smart plug provides reliable automation.</li>
  <li><strong>Sunrise/sunset ramp:</strong> Programmable LEDs (Fluval Plant 3.0, Chihiros) allow gradual ramp-up from darkness to full intensity over 30–60 minutes, simulating natural dawn and dusk. This reduces the startling effect of sudden on/off lighting and is less stressful for fish.</li>
  <li><strong>Midday siesta (optional):</strong> Some aquarists split the photoperiod — 4 hours on, 2 hours off, 4 hours on. The siesta reduces total light exposure (helping control algae) while maintaining the same visual enjoyment period. Plants tolerate the break without issue. The evidence for siesta effectiveness in algae control is anecdotal but widely reported as beneficial.</li>
</ul>

<h2 id="algae-and-lighting">Algae Control Through Lighting</h2>
<p>Excessive or poorly managed lighting is the primary driver of algae outbreaks:</p>
<ul>
  <li><strong>Reduce photoperiod:</strong> If experiencing algae, reduce lighting to 6 hours daily for 2–3 weeks. This starves algae while established plants, with their stored energy reserves, continue growing (albeit more slowly).</li>
  <li><strong>Reduce intensity:</strong> Turn the LED down to 50–70 % power. High intensity without corresponding CO₂ and fertilisation drives algae, not plants.</li>
  <li><strong>Avoid direct sunlight:</strong> Never place an aquarium where it receives direct sunlight. Even 1–2 hours of direct sun provides more PAR than most LED fixtures at full power, creating an uncontrollable algae trigger.</li>
  <li><strong>Blackout treatment:</strong> For severe algae outbreaks (green water, cyanobacteria), a complete 3–5 day blackout (lights off, tank covered) kills the algae while plants survive on stored energy. Resume with a reduced photoperiod (6 hours) and gradually increase.</li>
  <li><strong>Balance the triangle:</strong> Light + CO₂ + fertiliser must be balanced. Increasing light without increasing CO₂ and nutrients gives the extra light energy to algae (which have lower nutrient requirements than plants). If you add more light, add more CO₂ and fertiliser proportionally.</li>
</ul>

<h2 id="lighting-recommendations">Equipment Recommendations</h2>
<ul>
  <li><strong>Budget fish-only / low-tech planted:</strong> Nicrew ClassicLED Plus ($20–40). Adequate for low-light plants, good colour rendering, built-in timer on some models. Available for 12–72 inch tanks.</li>
  <li><strong>Mid-range planted:</strong> Fluval Plant 3.0 ($80–150). Full spectrum, Bluetooth app control, programmable sunrise/sunset, and proven PAR output for medium-light plants. The most recommended planted-tank light in the hobby.</li>
  <li><strong>High-end planted / aquascaping:</strong> Chihiros WRGB II ($150–250). Professional-grade PAR output, individual RGBW channel control, and Bluetooth app with community-shared presets. Drives high-light carpet plants with CO₂.</li>
  <li><strong>Nano tanks (5–15 gallons):</strong> ONF Flat Nano ($70). Compact, powerful, adjustable. Perfect for small planted tanks and Betta setups.</li>
  <li><strong>Large tanks (48–72 inches):</strong> Twinstar 900SP or Fluval Plant 3.0 in the appropriate size. For very large tanks, multiple fixtures mounted side by side provide even coverage.</li>
</ul>
<p>Lighting is the most visible piece of aquarium equipment — it determines how your tank looks every day. Choose a light that matches your goals (fish viewing, plant growth, or both), set it on a timer, and resist the urge to run it at maximum intensity unless your CO₂ and fertilisation programme supports it. For complete equipment guidance, see our <a href="/care/aquarium-filter-guide">filter guide</a> and <a href="/care/aquarium-heater-guide">heater guide</a>.</p>
`,
    faqs: [
      {
        question: 'How many hours should aquarium lights be on?',
        answer:
          '8–10 hours daily for most freshwater aquariums. Use a timer for consistency. If experiencing algae problems, reduce to 6 hours daily for 2–3 weeks. High-tech planted tanks with CO₂ injection can run 6–8 hours at higher intensity. Never exceed 12 hours — it drives algae without benefiting plants or fish.',
      },
      {
        question: 'Do aquarium fish need light?',
        answer:
          'Fish need a consistent day/night cycle for circadian rhythm regulation, but they do not need intense light. Many species (Bettas, catfish, predators) actually prefer dim conditions. The light is primarily for your viewing pleasure and for plant growth. A predictable photoperiod on a timer is more important than brightness.',
      },
      {
        question: 'Why is my tank getting algae?',
        answer:
          'The most common cause is excess light — too many hours, too much intensity, or both — without proportional CO₂ and fertiliser. Reduce photoperiod to 6 hours, reduce intensity to 50–70 %, ensure the tank is not in direct sunlight, and avoid overfeeding (excess nutrients fuel algae). Rebalance the light-CO₂-fertiliser triangle.',
      },
      {
        question: 'Can I use a regular room light instead of an aquarium light?',
        answer:
          'Room lighting is too dim and inconsistent for plant growth but can provide a basic day/night cycle for fish-only tanks. For any tank with live plants, a dedicated aquarium LED is necessary. Even low-light plants (Java Fern, Anubias) need more PAR than ambient room lighting provides at typical tank depths.',
      },
    ],
    sources: [
      {
        title: 'Light Requirements for Aquatic Plant Photosynthesis',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0304377014001290',
        publisher: 'Aquatic Botany (Elsevier)',
      },
      {
        title: 'Aquarium Lighting Technology: LED vs. Fluorescent Performance',
        url: 'https://reefbuilders.com/led-vs-fluorescent-aquarium-lighting/',
        publisher: 'Reef Builders',
      },
      {
        title: 'Photoperiod Effects on Fish Behaviour and Physiology',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.13421',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: ['aquarium-filter-guide', 'aquarium-heater-guide', 'nitrogen-cycle-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 41 — Arowana Breeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'How to Breed Arowana: A Complete Guide',
    slug: 'arowana-breeding-guide',
    type: 'care',
    category: 'arowana',
    topicCategory: 'breeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/arowana-breeding-guide.jpg',
    heroImageAlt:
      'A male Asian Arowana mouthbrooding eggs visible through a slightly distended jaw in a large breeding facility',
    metaTitle: 'How to Breed Arowana: Complete Guide | The Fish Collection',
    metaDescription:
      'Arowana breeding guide: pair formation, pond vs. tank breeding, mouthbrooding, fry development, and commercial breeding protocols. Expert guidance.',
    quickAnswerQuestion: 'Can you breed Arowana in captivity?',
    quickAnswer:
      'Yes, but it is extremely challenging and typically requires pond-based facilities. Arowana are paternal mouthbrooders — the male incubates 20–100 eggs in his mouth for 6–8 weeks. Breeding requires sexually mature fish (4–7 years old), a large pond or tank (1,000+ gallons), conditioned water (pH 6.0–6.5, 28–30 °C), and simulated rainy-season triggers. Most successful captive breeding occurs at professional farms in Southeast Asia.',
    summary:
      'A comprehensive guide to Arowana breeding covering species-specific reproductive biology, pair formation, pond and large-tank breeding setups, spawning triggers, the mouthbrooding process, fry development, and the realities of commercial vs. hobbyist breeding.',
    keyFacts: [
      { label: 'Breeding Method', value: 'Paternal mouthbrooding' },
      { label: 'Sexual Maturity', value: '4–7 years' },
      { label: 'Eggs per Spawn', value: '20–100 (species dependent)' },
      { label: 'Incubation Period', value: '6–8 weeks in mouth' },
      { label: 'Breeding Setup', value: '1,000+ gal pond/tank' },
      { label: 'Spawning pH', value: '6.0–6.5' },
    ],
    headings: [
      { id: 'arowana-breeding-overview', text: 'Arowana Breeding Overview', level: 2 },
      { id: 'arowana-reproductive-biology', text: 'Reproductive Biology', level: 2 },
      { id: 'species-breeding-differences', text: 'Species-Specific Differences', level: 3 },
      { id: 'sexing-arowana', text: 'Sexing Arowana', level: 2 },
      { id: 'breeding-setup-arowana', text: 'Breeding Setup', level: 2 },
      { id: 'pond-breeding', text: 'Pond Breeding (Preferred Method)', level: 3 },
      { id: 'tank-breeding-arowana', text: 'Tank Breeding (Advanced)', level: 3 },
      { id: 'spawning-triggers-arowana', text: 'Spawning Triggers', level: 2 },
      { id: 'mouthbrooding-process', text: 'The Mouthbrooding Process', level: 2 },
      { id: 'fry-rearing-arowana', text: 'Fry Rearing', level: 2 },
      { id: 'commercial-vs-hobbyist', text: 'Commercial vs. Hobbyist Breeding', level: 2 },
    ],
    content: `
<h2 id="arowana-breeding-overview">Arowana Breeding Overview</h2>
<p>Arowana breeding is one of the most challenging undertakings in freshwater aquaculture. These ancient fish — members of the family Osteoglossidae — are slow to mature, difficult to sex, require massive facilities, and have a reproductive strategy (paternal mouthbrooding) that demands patience measured in months rather than days. The vast majority of captive-bred Arowana come from professional farms in Indonesia, Malaysia, and Singapore, where purpose-built ponds and decades of selective breeding expertise enable consistent production.</p>
<p>Hobbyist breeding is possible but extremely rare. It requires a commitment of years (waiting for maturity), substantial infrastructure (1,000+ gallon systems), and a willingness to accept failure — Arowana pairs may refuse to spawn for years despite ideal conditions. This guide covers both professional and hobbyist approaches. Browse <a href="/exotic-fish/arowana">our Arowana collection</a> to see the results of expert captive breeding programmes.</p>

<h2 id="arowana-reproductive-biology">Reproductive Biology</h2>
<p>All Arowana species are paternal mouthbrooders — the male carries the fertilised eggs and developing fry in his buccal cavity (mouth) for 6–8 weeks. During this incubation period, the male does not eat. The eggs are among the largest of any freshwater fish — 10–15 mm in diameter, yolk-rich, and few in number (20–100 per spawn, depending on species and female size).</p>
<p>This reproductive strategy produces a small number of large, well-developed offspring rather than thousands of tiny fry. Each baby Arowana emerges from the father's mouth at 5–8 cm in length, fully formed, with a yolk sac that sustains it for an additional 1–2 weeks. This high parental investment per offspring is one reason Arowana are so valuable — and why breeding them is commercially significant.</p>

<h3 id="species-breeding-differences">Species-Specific Differences</h3>
<ul>
  <li><strong>Asian Arowana (<em>Scleropages formosus</em>):</strong> The most commercially bred species. Sexual maturity at 4–5 years. Clutch size 20–60 eggs. Incubation 6–8 weeks. Farm-bred in purpose-built ponds across Southeast Asia. CITES Appendix I listed — all traded specimens must be captive-bred and microchipped.</li>
  <li><strong>Silver Arowana (<em>Osteoglossum bicirrhosum</em>):</strong> Breeds readily in large ponds. Sexual maturity at 3–4 years. Clutch size 50–100 eggs — larger than Asian species. Incubation 5–6 weeks. Easier to breed than Asian Arowana but requires significant pond infrastructure.</li>
  <li><strong>Black Arowana (<em>Osteoglossum ferreirai</em>):</strong> More difficult to breed than Silver. Requires very soft, acidic water (pH 5.0–5.5). Clutch size 30–60 eggs.</li>
  <li><strong>Jardini/Gulf Saratoga (<em>Scleropages jardinii</em>/<em>S. leichardti</em>):</strong> Australian species. Sexual maturity at 3–5 years. Clutch size 50–200 eggs. Incubation 4–6 weeks. Bred in Australian fish farms.</li>
</ul>

<h2 id="sexing-arowana">Sexing Arowana</h2>
<p>Sexing Arowana is notoriously difficult, particularly in immature fish. No reliable external sexual dimorphism exists in juvenile Arowana. As fish mature, subtle differences emerge:</p>
<ul>
  <li><strong>Males:</strong> Tend to have a wider, more rounded jaw (adapted for mouthbrooding). The mouth may appear slightly larger relative to body size. In some species, males develop a more slender body profile.</li>
  <li><strong>Females:</strong> Tend to have a deeper, rounder body profile, particularly when carrying eggs. The belly may appear subtly fuller.</li>
  <li><strong>Professional sexing:</strong> At commercial farms, Arowana are sexed at 3–4 years of age via ultrasound examination or endoscopy — techniques that visualise the gonads directly. Some farms use blood hormonal assays. These methods are not available to most hobbyists.</li>
</ul>
<p>The practical hobbyist approach: purchase a group of 6–8 juvenile Arowana (if you have the tank space — this requires a 2,000+ gallon system) and allow natural pair formation over 3–5 years. This is the same approach used by early Asian Arowana farms before modern sexing techniques were developed.</p>

<h2 id="breeding-setup-arowana">Breeding Setup</h2>

<h3 id="pond-breeding">Pond Breeding (Preferred Method)</h3>
<p>The most successful Arowana breeding occurs in outdoor or covered ponds:</p>
<ul>
  <li><strong>Pond size:</strong> Minimum 3,000–5,000 gallons for a single pair. Commercial farms use 10,000–50,000 gallon ponds housing 10–20 adults.</li>
  <li><strong>Depth:</strong> 1.2–1.8 metres (4–6 feet). Arowana need depth for courtship circling behaviour.</li>
  <li><strong>Water:</strong> Soft, acidic (pH 6.0–6.5, GH 2–6 dGH), warm (28–30 °C / 82–86 °F). Many Southeast Asian farms use natural rainwater, which is naturally soft and acidic.</li>
  <li><strong>Filtration:</strong> Biological pond filtration with settlement chambers and bead or moving-bed biofilters. Water changes of 10–20 % weekly.</li>
  <li><strong>Cover:</strong> Floating plants (water lettuce, water hyacinth) provide shade, reduce stress, and simulate natural habitat. Arowana are jumpers — ponds require netting or high walls.</li>
</ul>

<h3 id="tank-breeding-arowana">Tank Breeding (Advanced)</h3>
<p>Tank breeding Arowana is possible but significantly more difficult than pond breeding:</p>
<ul>
  <li><strong>Minimum tank:</strong> 1,000 gallons for Silver Arowana; 1,500+ gallons for Asian Arowana. The fish need space for courtship behaviour — circling, parallel swimming, and lateral displays.</li>
  <li><strong>Tank shape:</strong> Round or oval tanks reduce stress (no corners for fish to wedge into during aggression). Many commercial hatcheries use round fibreglass tanks of 2,000–3,000 gallons.</li>
  <li><strong>Minimal decoration:</strong> Bare bottom for hygiene. Dim lighting. Sponge filtration plus a sump for biological capacity.</li>
  <li><strong>Single pair only:</strong> Do not attempt to breed Arowana in a community tank. The breeding pair requires isolation from conspecifics and other species.</li>
</ul>

<h2 id="spawning-triggers-arowana">Spawning Triggers</h2>
<p>Arowana spawn seasonally in the wild, triggered by the onset of the rainy season. Captive breeding replicates these triggers:</p>
<ul>
  <li><strong>Large, cool water changes:</strong> Replace 30–50 % of pond/tank water with cooler, softer water (2–3 °C below tank temperature). This simulates monsoon rainfall — the most effective spawning trigger. Repeat 2–3 times weekly during the target breeding period.</li>
  <li><strong>Reduced water level followed by refilling:</strong> Lower the water level by 20–30 % over a week, then rapidly refill with cool, soft water. This mimics the dry-season-to-wet-season transition.</li>
  <li><strong>High-protein conditioning diet:</strong> Feed heavily with live or frozen shrimp, crickets, superworms, and fish fillets for 4–8 weeks before the target breeding period. Well-conditioned fish produce more eggs and are more responsive to environmental triggers.</li>
  <li><strong>Barometric pressure changes:</strong> Many Arowana breeders report increased spawning activity during genuine rainstorms. Some farms leave ponds partially open to natural rainfall for this reason.</li>
</ul>

<h2 id="mouthbrooding-process">The Mouthbrooding Process</h2>
<p>When a pair is ready to spawn, the courtship intensifies: the pair circles each other, the male displays with gill flaring and body undulations, and both fish may fast for several days before spawning. The female deposits eggs on the pond/tank bottom, and the male fertilises and immediately scoops them into his mouth.</p>
<p><strong>During the 6–8 week incubation:</strong></p>
<ul>
  <li>The male's jaw distends visibly as the eggs develop. He does not eat during this period — any attempt to feed is ignored.</li>
  <li>Do not disturb the male. Stress can cause premature spitting of the eggs or fry, which typically results in their death.</li>
  <li>The male periodically "chews" — gentle jaw movements that circulate water over the eggs for oxygenation.</li>
  <li>At commercial farms, some breeders strip the eggs from the male's mouth at 3–4 weeks for artificial incubation, allowing the male to resume feeding sooner and potentially spawn again sooner. Artificial incubation requires tumbling the eggs in a gentle current of temperature-controlled, medicated water.</li>
</ul>
<p>Fry are released from the mouth at 5–8 cm in length, with a visible yolk sac attached to the belly. The yolk sac is absorbed over 1–2 weeks, after which the fry begin actively feeding.</p>

<h2 id="fry-rearing-arowana">Fry Rearing</h2>
<ul>
  <li><strong>Fry tank:</strong> Transfer fry to a dedicated 100–200 gallon grow-out tank with a sponge filter, heater (28–30 °C), and dim lighting. Bare bottom for hygiene.</li>
  <li><strong>First foods (after yolk sac absorption):</strong> Small live foods — newly hatched brine shrimp (Artemia nauplii), Daphnia, and small crickets. Arowana fry are surface feeders from birth.</li>
  <li><strong>Growth feeding (2–8 weeks):</strong> Transition to larger live foods — bloodworm, small earthworms, pinhead crickets. Feed 3–4 times daily.</li>
  <li><strong>Transition to prepared foods (8+ weeks):</strong> Begin training onto floating pellets (Hikari Arowana Sticks or similar). Supplement with frozen and live foods.</li>
  <li><strong>Water changes:</strong> 25 % daily in fry tanks to maintain zero ammonia and nitrite. Arowana fry are sensitive to water quality in their first months.</li>
  <li><strong>Sorting:</strong> Separate fry by size at 4-week intervals. Larger fry will eat smaller siblings — Arowana are cannibalistic from a young age.</li>
</ul>

<h2 id="commercial-vs-hobbyist">Commercial vs. Hobbyist Breeding</h2>
<p>The reality of Arowana breeding:</p>
<ul>
  <li><strong>Commercial farms</strong> (Southeast Asia, Australia) operate pond systems of 10,000–50,000 gallons with dozens of adult Arowana. They have decades of lineage data, ultrasound sexing, and environmental control systems. Annual production ranges from hundreds to thousands of juveniles per farm. This is an industrial aquaculture operation.</li>
  <li><strong>Hobbyist breeding</strong> is extraordinarily rare. The space requirements (1,000+ gallon dedicated breeding system), time investment (4–7 years to maturity), difficulty of sexing, and unpredictability of pair formation make it impractical for all but the most dedicated enthusiasts with purpose-built fish rooms. Fewer than a handful of documented hobbyist Arowana breeding successes exist worldwide.</li>
</ul>
<p>If your goal is to breed Arowana, begin with Silver Arowana — they are the most prolific, the fastest to mature, and the most tolerant of captive breeding conditions. Asian Arowana breeding requires specialised facilities, CITES compliance documentation, and typically a partnership with an established farm. For Arowana care fundamentals, see our <a href="/care/arowana-tank-setup">tank setup guide</a> and <a href="/care/platinum-arowana-feeding-guide">feeding guide</a>.</p>
`,
    faqs: [
      {
        question: 'How long does it take for Arowana to breed?',
        answer:
          'Arowana reach sexual maturity at 4–7 years depending on species (Silver Arowana mature faster at 3–4 years, Asian Arowana at 4–5 years). From spawning to fry release, the mouthbrooding incubation period is 6–8 weeks. The entire process from juvenile to first spawn typically requires 4–7 years of growth and conditioning.',
      },
      {
        question: 'Can you breed Arowana in a tank?',
        answer:
          'It is possible but extremely rare. Tank breeding requires a minimum of 1,000 gallons (Silver Arowana) to 1,500+ gallons (Asian Arowana), soft acidic water, simulated rainy-season triggers, and a naturally bonded pair. Pond breeding is far more successful and is the method used by virtually all commercial farms.',
      },
      {
        question: 'How many babies does an Arowana have?',
        answer:
          'Clutch sizes vary by species: Silver Arowana produce 50–100 eggs per spawn, Asian Arowana produce 20–60, and Jardini/Saratoga produce 50–200. Because of mouthbrooding and the large egg size, Arowana produce far fewer offspring per spawn than most fish — but each offspring is large, well-developed, and has a high survival rate.',
      },
      {
        question: 'Do male Arowana eat while mouthbrooding?',
        answer:
          'No. The male fasts for the entire 6–8 week incubation period. His jaw is occupied holding the developing eggs and fry, making feeding impossible. Males lose significant body condition during mouthbrooding and require intensive refeeding after fry release to recover for the next breeding cycle.',
      },
    ],
    sources: [
      {
        title: 'Reproductive Biology of Scleropages formosus in Captive Breeding Programmes',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848615001866',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'FishBase: Osteoglossum bicirrhosum Reproductive Biology',
        url: 'https://www.fishbase.se/Reproduction/FishReproSummary.php?ID=4861',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Captive Breeding of Asian Arowana: Current Status and Challenges',
        url: 'https://link.springer.com/article/10.1007/s10499-018-0283-z',
        publisher: 'Aquaculture International',
      },
    ],
    relatedSlugs: ['arowana-tank-setup', 'arowana-tank-mates', 'platinum-arowana-feeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 42 — Betta Breeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'How to Breed Betta Fish: A Complete Guide',
    slug: 'betta-breeding-guide',
    type: 'care',
    category: 'betta',
    topicCategory: 'breeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/betta-breeding-guide.jpg',
    heroImageAlt:
      'A male Betta splendens building a bubble nest at the water surface of a dedicated breeding tank',
    metaTitle: 'How to Breed Betta Fish: Complete Guide | The Fish Collection',
    metaDescription:
      'Step-by-step Betta breeding guide. Conditioning, bubble nests, spawning embrace, fry feeding with infusoria and BBS, and grow-out protocols.',
    quickAnswerQuestion: 'How do you breed Betta fish?',
    quickAnswer:
      'Condition a male and female separately with high-protein foods for 2–4 weeks. Set up a 10–20 gallon bare-bottom breeding tank at 80 °F with shallow water (4–6 inches) and no filter. Introduce the female in a clear container so the male can see her and build a bubble nest. Release the female when the nest is substantial. The male wraps around the female in a nuptial embrace, collecting eggs into the bubble nest. Remove the female after spawning. Fry hatch in 24–48 hours and need infusoria, then brine shrimp nauplii.',
    summary:
      'A detailed Betta fish breeding guide covering pair selection, conditioning, breeding tank setup, bubble nest construction, the spawning embrace, egg and fry care, first foods, grow-out, and managing hundreds of juvenile Bettas.',
    keyFacts: [
      { label: 'Breeding Method', value: 'Bubble nest builder' },
      { label: 'Conditioning Period', value: '2–4 weeks' },
      { label: 'Breeding Temp', value: '80 °F (27 °C)' },
      { label: 'Eggs per Spawn', value: '50–300' },
      { label: 'Egg Hatch Time', value: '24–48 hours' },
      { label: 'First Food', value: 'Infusoria, then BBS' },
    ],
    headings: [
      { id: 'betta-breeding-overview', text: 'Betta Breeding Overview', level: 2 },
      { id: 'pair-selection', text: 'Pair Selection', level: 2 },
      { id: 'conditioning-betta', text: 'Conditioning Protocol', level: 2 },
      { id: 'breeding-tank-betta', text: 'Breeding Tank Setup', level: 2 },
      { id: 'introduction-and-bubble-nest', text: 'Introduction and Bubble Nest', level: 2 },
      { id: 'spawning-embrace', text: 'The Spawning Embrace', level: 2 },
      { id: 'egg-care-betta', text: 'Egg Care', level: 2 },
      { id: 'fry-first-foods', text: 'Fry First Foods', level: 2 },
      { id: 'grow-out-betta', text: 'Grow-Out and Jarring', level: 2 },
    ],
    content: `
<h2 id="betta-breeding-overview">Betta Breeding Overview</h2>
<p>Betta breeding is one of the most rewarding — and most demanding — projects in the freshwater hobby. The spawning process itself is dramatic: the male builds an elaborate bubble nest, wraps his body around the female in a nuptial embrace, and tenderly carries each fertilised egg to the nest. The challenge is not spawning (Bettas breed readily) but managing the aftermath: a single spawn can produce 50–300 fry that need intensive care, live foods, frequent water changes, and eventually individual housing for aggressive males.</p>
<p>Before breeding, answer honestly: do you have a plan for 100+ juvenile Bettas? Can you commit to daily feedings of live food for 8+ weeks? Do you have 20–50 individual containers for male juveniles? Betta breeding is a project, not an impulse — plan thoroughly before starting.</p>

<h2 id="pair-selection">Pair Selection</h2>
<p>Select healthy, vigorous fish from reputable breeders (not pet shops, where genetic history is unknown):</p>
<ul>
  <li><strong>Age:</strong> 4–12 months is the ideal breeding age. Younger fish may not be sexually mature; older fish (18+ months) have declining fertility.</li>
  <li><strong>Health:</strong> No signs of disease, full colour, active appetite, intact fins. Never breed sick or recovered fish — recovery diverts energy from reproductive fitness.</li>
  <li><strong>Genetics:</strong> If breeding for specific traits (colour, fin type), research the genetics of your target variety. Halfmoon × Halfmoon produces Halfmoon offspring; crossing different tail types produces unpredictable results.</li>
  <li><strong>Female readiness indicators:</strong> Vertical breeding stripes on the body (pale vertical bars on a darker body), visible ovipositor (a white spot protruding just anterior to the anal fin), and a plump belly indicating egg development.</li>
</ul>

<h2 id="conditioning-betta">Conditioning Protocol</h2>
<p>Condition male and female separately for 2–4 weeks before breeding:</p>
<ul>
  <li>Feed high-protein live and frozen foods: bloodworm, brine shrimp, daphnia, wingless fruit flies, and mosquito larvae. Feed 2–3 times daily.</li>
  <li>Maintain pristine water quality: 0 ppm ammonia/nitrite, water changes every 2–3 days.</li>
  <li>Temperature at 78–80 °F (26–27 °C) in conditioning tanks.</li>
  <li>The female's belly should become visibly round with eggs. Breeding stripes may appear.</li>
  <li>The male should be building bubble nests regularly — a sign of hormonal readiness.</li>
</ul>

<h2 id="breeding-tank-betta">Breeding Tank Setup</h2>
<ul>
  <li><strong>Tank:</strong> 10–20 gallons. Larger is better for water quality stability during the fry phase.</li>
  <li><strong>Water level:</strong> 4–6 inches (10–15 cm). Shallow water reduces the distance fry must travel to the surface to breathe (Betta fry develop the labyrinth organ over the first few weeks).</li>
  <li><strong>Temperature:</strong> 80 °F (27 °C) via adjustable heater.</li>
  <li><strong>No filter during spawning.</strong> Current destroys the bubble nest and scatters eggs. After fry become free-swimming (day 3–4), add a gentle sponge filter with minimal airflow.</li>
  <li><strong>Bare bottom:</strong> Fallen eggs are visible on a bare bottom, allowing the male to retrieve them easily.</li>
  <li><strong>Nest anchor:</strong> Float a piece of Indian almond leaf, styrofoam cup half, or bubble wrap on the surface. The male builds his bubble nest beneath this anchor.</li>
  <li><strong>Hiding spots for female:</strong> Dense clumps of Java Moss or plastic plants provide refuge for the female during introduction — the male can be aggressive before accepting her.</li>
  <li><strong>Lid:</strong> Tight-fitting, as fry need warm, humid air above the water surface for labyrinth organ development.</li>
</ul>

<h2 id="introduction-and-bubble-nest">Introduction and Bubble Nest</h2>
<p>Place the male in the breeding tank and allow him to settle for 24 hours. Then introduce the female in a clear container (hurricane glass, chimney, or clear plastic container with small holes for water circulation) placed inside the breeding tank. The male can see the female but cannot reach her.</p>
<p>The male will typically:</p>
<ul>
  <li>Flare intensely at the female, displaying his fins.</li>
  <li>Begin building or intensifying his bubble nest — a raft of mucus-coated air bubbles on the surface beneath the nest anchor.</li>
  <li>Swim back and forth between the nest and the female, displaying.</li>
</ul>
<p>The female will show her readiness by:</p>
<ul>
  <li>Displaying vertical breeding stripes.</li>
  <li>Angling her head downward (a submissive posture).</li>
  <li>Swimming toward the male rather than away when he displays.</li>
</ul>
<p>When the bubble nest is substantial (at least 5 cm in diameter, multi-layered) and the female shows clear readiness signs (usually after 1–3 days), release the female into the main breeding tank.</p>

<h2 id="spawning-embrace">The Spawning Embrace</h2>
<p>After release, there may be initial chasing and minor fin damage — this is normal courtship behaviour. If the male attacks the female severely (drawing blood, causing significant fin damage), separate them and try again in a few days.</p>
<p>When both fish are ready, they converge beneath the bubble nest. The male wraps his body around the female in a U-shaped nuptial embrace, squeezing eggs from her body while simultaneously releasing sperm. The female releases 5–30 eggs per embrace, which sink toward the bottom. Both fish may appear temporarily stunned after each embrace.</p>
<p>The male recovers first and immediately begins collecting fallen eggs in his mouth, carrying them to the bubble nest and embedding them among the bubbles. The female may assist by collecting eggs, or she may eat them — individual behaviour varies. The embrace-and-collect cycle repeats over 2–6 hours, producing 50–300 eggs in total.</p>
<p><strong>Remove the female immediately after spawning ends</strong> (when the male begins aggressively chasing her away from the nest). The male becomes intensely protective and will injure or kill the female if she remains. Return her to her conditioning tank for rest and recovery.</p>

<h2 id="egg-care-betta">Egg Care</h2>
<p>The male tends the nest alone for 24–48 hours:</p>
<ul>
  <li>He retrieves fallen eggs and returns them to the nest.</li>
  <li>He repairs bubble nest holes.</li>
  <li>He fans the eggs with his pectoral fins for oxygenation.</li>
  <li>He removes and eats unfertilised or fungused eggs (which turn white).</li>
</ul>
<p>Do not disturb the male during this period. Keep the room quiet, the light dim, and do not approach the tank unnecessarily. Stressed males eat the entire clutch.</p>
<p>Eggs hatch in 24–48 hours at 80 °F. Newly hatched fry appear as tiny tails hanging vertically from the bubble nest, sustained by their yolk sac. Over the next 24–48 hours, they develop the ability to swim horizontally and become free-swimming.</p>
<p><strong>Remove the male once fry are free-swimming</strong> (swimming horizontally and no longer falling from the nest). Some males continue to tend fry; others begin eating them. Removing the male at the free-swimming stage is the safest timing.</p>

<h2 id="fry-first-foods">Fry First Foods</h2>
<p>Betta fry are tiny — 2–3 mm — and can only eat microscopic first foods:</p>
<ul>
  <li><strong>Days 1–5 (free-swimming):</strong> Infusoria (paramecium cultures), vinegar eels, or commercial liquid fry food (Hikari First Bites). Infusoria is the gold standard — culture it in advance by placing a lettuce leaf in a jar of tank water in a sunny window 5–7 days before the expected hatch date.</li>
  <li><strong>Days 5–14:</strong> Newly hatched brine shrimp (BBS / Artemia nauplii). Hatch daily using a brine shrimp hatchery. BBS is the primary growth food for Betta fry — without it, growth is severely stunted. Feed 2–3 times daily.</li>
  <li><strong>Days 14–28:</strong> Continue BBS. Begin introducing micro worms and crushed freeze-dried foods.</li>
  <li><strong>Days 28+:</strong> Transition to finely crushed pellets (Northfin Betta Bits, ground to powder), frozen baby brine shrimp, and frozen daphnia.</li>
</ul>
<p>Water quality is critical during the fry phase. With no filter (initially) and heavy feeding, ammonia spikes are a constant threat. Perform gentle water changes (10–15 % daily) using airline tubing to siphon from the bottom, taking care not to suck up fry. Keep the lid tight — fry need warm, humid air above the water surface for labyrinth organ development (weeks 3–6).</p>

<h2 id="grow-out-betta">Grow-Out and Jarring</h2>
<p>At 6–8 weeks, the fry are large enough to eat crushed pellets and frozen foods. Growth rates diverge — some fry grow faster than others. At 8–12 weeks, male aggression emerges:</p>
<ul>
  <li>Identify aggressive males by their flaring behaviour and chasing.</li>
  <li>Separate aggressive males into individual containers — pint jars, divided tanks, or individual 1-gallon containers with daily water changes.</li>
  <li>Female fry can usually remain together in a grow-out tank, though monitor for aggression.</li>
  <li>Continue feeding 2–3 times daily with high-quality pellets and frozen foods.</li>
  <li>Perform daily water changes in individual containers (25–50 %) and regular changes in the grow-out tank.</li>
</ul>
<p>This "jarring" phase is the most labour-intensive part of Betta breeding. A spawn of 200 fry may produce 80–100 males requiring individual housing, each needing daily feeding and water changes. This is why planning rehoming outlets (local fish stores, online sales, hobbyist groups) before breeding is essential.</p>
<p>Betta breeding produces some of the most beautiful fish in the freshwater hobby. The genetic diversity in a single spawn — variations in colour, fin shape, and patterning — makes each batch unique. But the commitment is substantial: plan for the fry before you plan the spawn. For complete Betta care, see our <a href="/care/betta-complete-care-guide">Betta care guide</a>.</p>
`,
    faqs: [
      {
        question: 'How many babies do Bettas have?',
        answer:
          'A typical Betta spawn produces 50–300 eggs, though not all will be fertilised or survive to free-swimming. First-time pairs usually produce smaller clutches (50–100 eggs). Experienced, well-conditioned pairs in optimal conditions can produce 200–300+ eggs per spawn.',
      },
      {
        question: 'How long does Betta breeding take?',
        answer:
          'Conditioning takes 2–4 weeks. The spawning process itself takes 2–6 hours. Eggs hatch in 24–48 hours. Fry become free-swimming at day 3–4. The fry require intensive care for 8–12 weeks before males need individual housing. From start to sellable-size juveniles: approximately 4–6 months total.',
      },
      {
        question: 'What do Betta fry eat?',
        answer:
          'Days 1–5: infusoria (paramecium) or vinegar eels. Days 5–28: newly hatched brine shrimp (BBS) as the primary food, fed 2–3 times daily. Days 28+: transition to crushed pellets, frozen baby brine shrimp, and frozen daphnia. BBS is the most critical food — without it, fry growth is severely compromised.',
      },
      {
        question: 'Do I need to remove the female after spawning?',
        answer:
          'Yes, immediately. After spawning concludes, the male becomes aggressively protective of the bubble nest and will injure or kill the female if she remains. Return the female to her conditioning tank for rest and recovery. The male tends the eggs and fry alone until they are free-swimming.',
      },
    ],
    sources: [
      {
        title: 'Reproductive Biology of Betta splendens',
        url: 'https://www.fishbase.se/Reproduction/FishReproSummary.php?ID=4768',
        publisher: 'FishBase Consortium',
      },
      {
        title: 'Betta Breeding and Genetics',
        url: 'https://www.practicalfishkeeping.co.uk/features/betta-breeding-guide/',
        publisher: 'Practical Fishkeeping',
      },
      {
        title: 'Bubble Nest Construction and Parental Care in Anabantoids',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jfb.12563',
        publisher: 'Journal of Fish Biology',
      },
    ],
    relatedSlugs: ['betta-complete-care-guide', 'betta-tank-mates', 'betta-tank-setup'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 43 — Axolotl Breeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'How to Breed Axolotls: A Complete Guide',
    slug: 'axolotl-breeding-guide',
    type: 'care',
    category: 'axolotl',
    topicCategory: 'breeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/axolotl-breeding-guide.jpg',
    heroImageAlt:
      'An axolotl pair in a breeding tank with visible spermatophores on the substrate and the female investigating them',
    metaTitle: 'How to Breed Axolotls: Complete Guide | The Fish Collection',
    metaDescription:
      'Axolotl breeding guide: cooling period, spermatophore deposition, egg laying, hatching, and larval care. Step-by-step protocols.',
    quickAnswerQuestion: 'How do you breed axolotls?',
    quickAnswer:
      'Simulate winter by cooling the tank to 50–55 °F (10–13 °C) for 2–4 weeks, then gradually warm to 64–68 °F (18–20 °C) to trigger spawning. The male deposits spermatophores (sperm packets) on the substrate; the female walks over them, collecting sperm with her cloaca. She then lays 100–1,000 eggs individually on plants and surfaces over 12–72 hours. Eggs hatch in 14–21 days at 68 °F. Larvae require daily feeding of live baby brine shrimp.',
    summary:
      'A detailed guide to breeding axolotls in captivity, covering conditioning, the cooling trigger, spermatophore-based fertilisation, egg collection and incubation, larval feeding, grow-out, and managing large spawns responsibly.',
    keyFacts: [
      { label: 'Breeding Method', value: 'Internal fertilisation (spermatophores)' },
      { label: 'Cooling Trigger', value: '50–55 °F for 2–4 weeks' },
      { label: 'Spawning Temp', value: '64–68 °F (18–20 °C)' },
      { label: 'Eggs per Spawn', value: '100–1,000' },
      { label: 'Egg Hatch Time', value: '14–21 days at 68 °F' },
      { label: 'First Food', value: 'Live baby brine shrimp' },
    ],
    headings: [
      { id: 'axolotl-breeding-overview', text: 'Axolotl Breeding Overview', level: 2 },
      { id: 'sexing-axolotls', text: 'Sexing Axolotls', level: 2 },
      { id: 'conditioning-axolotls', text: 'Conditioning and Cooling', level: 2 },
      { id: 'spermatophore-courtship', text: 'Courtship and Spermatophore Deposition', level: 2 },
      { id: 'egg-laying-axolotl', text: 'Egg Laying', level: 2 },
      { id: 'egg-incubation', text: 'Egg Incubation', level: 2 },
      { id: 'larval-care', text: 'Larval Care and First Foods', level: 2 },
      { id: 'grow-out-axolotl', text: 'Grow-Out Protocol', level: 2 },
      { id: 'managing-large-spawns', text: 'Managing Large Spawns Responsibly', level: 2 },
    ],
    content: `
<h2 id="axolotl-breeding-overview">Axolotl Breeding Overview</h2>
<p>Axolotls (<em>Ambystoma mexicanum</em>) breed readily in captivity — often more readily than keepers anticipate. A single female can produce 100–1,000 eggs per spawn, and axolotls reach sexual maturity at 12–18 months. The breeding process involves a fascinating courtship dance, spermatophore-based internal fertilisation (unique among commonly kept aquarium species), and a larval phase that requires daily live-food feedings for weeks.</p>
<p>The primary challenge is not triggering spawning — a simple temperature manipulation accomplishes that — but managing the resulting hundreds of larvae. Before breeding, ensure you have homes planned for the offspring. Responsible axolotl breeding means never producing more animals than you can properly house or rehome.</p>

<h2 id="sexing-axolotls">Sexing Axolotls</h2>
<p>Axolotls are relatively easy to sex once sexually mature (12–18 months, typically 15+ cm body length):</p>
<ul>
  <li><strong>Males:</strong> Develop a visibly swollen cloaca (the vent area at the base of the tail). The swelling is pronounced and obvious in mature males — a rounded, protruding bulge behind the rear legs.</li>
  <li><strong>Females:</strong> The cloaca remains flat or slightly raised. The body is typically rounder and wider, especially when carrying eggs.</li>
  <li><strong>Juveniles:</strong> Cannot be reliably sexed before 10–12 months. Wait for cloacal development before determining sex.</li>
</ul>

<h2 id="conditioning-axolotls">Conditioning and Cooling</h2>
<p>Axolotls in the wild spawn in spring, triggered by rising water temperatures after winter. In captivity, simulating this seasonal shift is the key to triggering breeding:</p>
<ol>
  <li><strong>Pre-conditioning (4–6 weeks):</strong> Feed heavily with high-quality foods — earthworms (the staple), frozen bloodworm, and sinking carnivore pellets. The female should appear round with developed eggs visible through her belly skin (axolotls are slightly translucent).</li>
  <li><strong>Cooling period (2–4 weeks):</strong> Gradually lower the tank temperature from the normal 60–68 °F to 50–55 °F (10–13 °C) over one week. Use an aquarium chiller or place the tank in a cold room (unheated garage, basement). Maintain the cold temperature for 2–4 weeks. Reduce feeding to once every 3–4 days during the cold period — metabolism slows significantly.</li>
  <li><strong>Warming trigger:</strong> After the cooling period, gradually raise the temperature back to 64–68 °F (18–20 °C) over one week. This simulates the spring warming that triggers spawning. Increase feeding to daily. Resume daily water changes to keep water pristine.</li>
</ol>
<p>Spawning typically begins within 1–2 weeks of the warming trigger.</p>

<h2 id="spermatophore-courtship">Courtship and Spermatophore Deposition</h2>
<p>Axolotl courtship is a slow, subtle dance:</p>
<ul>
  <li>The male initiates by nudging the female's cloaca with his snout.</li>
  <li>He then performs a "tail waggle" — a rhythmic undulation of his tail to fan pheromones toward the female.</li>
  <li>The male walks forward slowly, and if the female is receptive, she follows closely behind.</li>
  <li>The male deposits <strong>spermatophores</strong> — small, gelatinous capsules containing sperm — on the substrate surface. He may deposit 5–25 spermatophores during a single courtship session.</li>
  <li>The female walks over the spermatophores, positioning her cloaca directly above them to collect the sperm internally.</li>
</ul>
<p>This process can take several hours and often occurs at night. Provide a smooth substrate (slate tiles or bare glass bottom) for spermatophore deposition — they are fragile and can be lost in coarse gravel.</p>

<h2 id="egg-laying-axolotl">Egg Laying</h2>
<p>12–72 hours after spermatophore collection, the female begins laying eggs:</p>
<ul>
  <li>Eggs are laid individually or in small clusters, attached to plants, decorations, tank walls, and any available surface.</li>
  <li>Each egg is 2–3 mm in diameter, enclosed in a clear jelly capsule (10–15 mm total diameter with jelly).</li>
  <li>Laying takes 12–72 hours. The female may produce 100–1,000 eggs depending on age, size, and conditioning.</li>
  <li>Provide plenty of laying surfaces — Java Fern, Anubias, artificial plants, spawning mops, and PVC structures all work.</li>
</ul>
<p><strong>Remove the adults after egg laying is complete.</strong> Adult axolotls will eat their own eggs and hatched larvae. Transfer the eggs (on the plants/surfaces they are attached to) to a separate hatching container, or remove the adults to another tank.</p>

<h2 id="egg-incubation">Egg Incubation</h2>
<ul>
  <li><strong>Temperature:</strong> 64–68 °F (18–20 °C). Warmer temperatures (up to 72 °F) accelerate hatching but increase deformity risk. Cooler temperatures (below 60 °F) slow development significantly.</li>
  <li><strong>Duration:</strong> 14–21 days at 68 °F. You can observe embryo development through the transparent jelly — the developing larvae are visible from day 3–4 onward.</li>
  <li><strong>Water quality:</strong> Gentle water movement (airstone nearby, not directly on the eggs). Daily 10–20 % water changes in the hatching container. Remove any eggs that turn white (unfertilised or fungused) immediately — they can spread fungus to viable eggs.</li>
  <li><strong>Methylene blue:</strong> A few drops of methylene blue (enough to tint the water light blue) prevents fungal growth on eggs. This is optional but recommended for large clutches where egg density is high.</li>
</ul>
<p>Larvae hatch by wriggling free of the jelly capsule. Newly hatched larvae are 10–12 mm long, with external gills already visible, and remain stationary for 24–48 hours as they absorb their yolk sac.</p>

<h2 id="larval-care">Larval Care and First Foods</h2>
<p>Once the yolk sac is absorbed (day 2–3 post-hatch), larvae begin actively hunting:</p>
<ul>
  <li><strong>First food:</strong> Newly hatched brine shrimp (BBS / Artemia nauplii). This is the essential first food — axolotl larvae hunt by detecting movement, and the swimming BBS triggers their feeding response. Feed 2–3 times daily.</li>
  <li><strong>Alternative first foods:</strong> Microworms and daphnia can supplement BBS but should not replace it as the primary food.</li>
  <li><strong>Individual containers:</strong> For best survival, rear larvae individually or in very small groups (3–5 per container) in 500 mL to 2 L containers with daily 100 % water changes. Axolotl larvae are cannibalistic — they will bite each other's limbs and gills. While lost limbs regenerate, severe bites can be fatal.</li>
  <li><strong>Communal rearing:</strong> Possible in larger tubs (10–20 gallons) but with higher casualty rates from cannibalism. Provide dense hiding spots (Java Moss clumps) and feed heavily to reduce aggression.</li>
</ul>
<p>Transition to larger foods as larvae grow: chopped blackworms and frozen bloodworm (3–4 weeks post-hatch), then whole blackworms and small earthworm pieces (6–8 weeks). By 8–10 weeks, juveniles should accept sinking pellets.</p>

<h2 id="grow-out-axolotl">Grow-Out Protocol</h2>
<ul>
  <li><strong>2–4 weeks:</strong> Individual or small-group containers with daily water changes. BBS primary food.</li>
  <li><strong>4–8 weeks:</strong> Transition to 5–10 gallon grow-out tanks. Groups of 5–10 similarly sized larvae. Sponge filter (gentle). Feed blackworms and chopped bloodworm 2× daily.</li>
  <li><strong>8–16 weeks:</strong> Juveniles are 5–10 cm and can be moved to standard axolotl tanks (bare bottom or fine sand, sponge filter, 60–68 °F). Feed earthworms, pellets, and frozen foods.</li>
  <li><strong>4–6 months:</strong> Juveniles are large enough (10+ cm) for rehoming. Most axolotl morphs are sellable or adoptable at this size.</li>
</ul>
<p>Sort by size every 2 weeks — larger siblings will prey on smaller ones. Remove any individuals with persistent deformities (curved spines, underdeveloped gills) from the breeding programme.</p>

<h2 id="managing-large-spawns">Managing Large Spawns Responsibly</h2>
<p>A single axolotl spawn can produce 500+ eggs. Not all will hatch, and not all larvae will survive, but you may still face 200–400 juvenile axolotls requiring individual care:</p>
<ul>
  <li><strong>Plan rehoming before breeding.</strong> Contact local fish stores, axolotl groups, online classifieds, and hobbyist communities.</li>
  <li><strong>Cull unfertilised eggs immediately</strong> to reduce waste and fungal risk.</li>
  <li><strong>If you cannot house all larvae,</strong> select the healthiest 50–100 for rearing and humanely euthanise the remainder (clove oil method at recommended concentrations). This is preferable to rearing hundreds of animals in substandard conditions.</li>
  <li><strong>Never release axolotls into the wild.</strong> They are invasive in non-native habitats and critically endangered in their native Lake Xochimilco — wild release harms both the released animals and native ecosystems.</li>
</ul>
<p>Axolotl breeding is a fascinating window into amphibian reproductive biology. The courtship, spermatophore transfer, and larval development are genuinely remarkable to observe. But the scale of production demands responsible planning. For axolotl care fundamentals, see our <a href="/care/axolotl-tank-setup">tank setup guide</a> and <a href="/care/axolotl-feeding-guide">feeding guide</a>.</p>
`,
    faqs: [
      {
        question: 'At what age can axolotls breed?',
        answer:
          'Axolotls reach sexual maturity at 12–18 months, typically when they are 15+ cm in body length. Males develop a visibly swollen cloaca when mature. Females become rounder as eggs develop internally. Breeding younger animals is possible but produces smaller clutches and less vigorous offspring.',
      },
      {
        question: 'How many eggs do axolotls lay?',
        answer:
          'A single female can lay 100–1,000 eggs per spawn, with 200–500 being typical for a well-conditioned adult. First-time spawners produce fewer eggs. The eggs are laid individually over 12–72 hours, attached to plants and surfaces throughout the tank.',
      },
      {
        question: 'Do I need to cool axolotls to breed them?',
        answer:
          'A cooling period of 2–4 weeks at 50–55 °F (10–13 °C) followed by gradual warming to 64–68 °F is the most reliable spawning trigger. Some axolotls breed spontaneously without a cooling period, but the seasonal temperature shift dramatically increases success rates and produces larger, healthier clutches.',
      },
      {
        question: 'Are axolotl larvae cannibalistic?',
        answer:
          'Yes. Axolotl larvae actively bite each other\'s limbs and gills, particularly when hungry or overcrowded. While axolotls can regenerate lost limbs, severe bites can be fatal. For best survival, rear larvae individually or in very small groups with heavy feeding and frequent size-sorting.',
      },
    ],
    sources: [
      {
        title: 'Reproductive Biology of Ambystoma mexicanum in Captivity',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0016648012003437',
        publisher: 'General and Comparative Endocrinology (Elsevier)',
      },
      {
        title: 'Axolotl Husbandry and Captive Breeding Protocols',
        url: 'https://link.springer.com/protocol/10.1007/978-1-4939-2495-0_1',
        publisher: 'Methods in Molecular Biology (Springer)',
      },
      {
        title: 'Temperature-Dependent Embryonic Development in Ambystoma mexicanum',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/jez.1401470306',
        publisher: 'Journal of Experimental Zoology',
      },
    ],
    relatedSlugs: ['axolotl-tank-setup', 'axolotl-feeding-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 44 — Koi Breeding Guide
  // ──────────────────────────────────────────────
  {
    title: 'How to Breed Koi Fish: A Complete Guide',
    slug: 'koi-breeding-guide',
    type: 'care',
    category: 'koi',
    topicCategory: 'breeding',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/koi-breeding-guide.jpg',
    heroImageAlt:
      'A group of Koi in a spawning pond with spawning brushes visible and eggs attached to plant material',
    metaTitle: 'How to Breed Koi Fish: Complete Guide | The Fish Collection',
    metaDescription:
      'Koi breeding guide: parent selection, spawning triggers, egg collection, fry rearing, culling for quality, and grow-out protocols. Expert guidance.',
    quickAnswerQuestion: 'How do you breed Koi fish?',
    quickAnswer:
      'Select quality parent Koi (3+ years old, vibrant pattern, good body shape). In spring, when water temperature rises to 65–72 °F (18–22 °C), place spawning media (brushes, mats, or submerged plants) in the pond. Males chase the female aggressively, and she scatters adhesive eggs over the spawning media. Collect the media with eggs and transfer to a separate hatching tank/pond. Eggs hatch in 4–7 days. Fry need infusoria, then BBS, then crushed pellets. Cull for quality at 4, 8, and 12 weeks.',
    summary:
      'A comprehensive guide to breeding Koi fish covering parent selection, pond preparation, natural spawning triggers, egg collection and incubation, fry rearing, the critical culling process for pattern and quality, and grow-out to sellable size.',
    keyFacts: [
      { label: 'Breeding Method', value: 'Egg scatterer (adhesive eggs)' },
      { label: 'Sexual Maturity', value: '3–5 years' },
      { label: 'Spawning Temp', value: '65–72 °F (18–22 °C)' },
      { label: 'Eggs per Spawn', value: '100,000–500,000+' },
      { label: 'Egg Hatch Time', value: '4–7 days' },
      { label: 'Culling Stages', value: '4, 8, and 12 weeks' },
    ],
    headings: [
      { id: 'koi-breeding-overview', text: 'Koi Breeding Overview', level: 2 },
      { id: 'parent-selection', text: 'Parent Selection', level: 2 },
      { id: 'selecting-for-variety', text: 'Selecting for Specific Varieties', level: 3 },
      { id: 'spawning-setup', text: 'Spawning Pond/Tank Setup', level: 2 },
      { id: 'natural-spawning-koi', text: 'Natural Spawning', level: 2 },
      { id: 'egg-collection-koi', text: 'Egg Collection and Incubation', level: 2 },
      { id: 'fry-rearing-koi', text: 'Fry Rearing', level: 2 },
      { id: 'culling-for-quality', text: 'Culling for Quality', level: 2 },
      { id: 'grow-out-koi', text: 'Grow-Out to Sale Size', level: 2 },
    ],
    content: `
<h2 id="koi-breeding-overview">Koi Breeding Overview</h2>
<p>Koi (<em>Cyprinus carpio</em>) are prolific breeders — a single female can produce 100,000–500,000+ eggs per spawn. The challenge in Koi breeding is not triggering reproduction (Koi spawn naturally each spring) but producing offspring of high quality. Of those hundreds of thousands of eggs, perhaps 1–5 % will develop into Koi with pattern, colour, and body shape worthy of keeping or selling. The rest are culled at successive stages.</p>
<p>This harsh reality defines Koi breeding: it is a pursuit of quality through selective elimination. Japanese Koi breeders have refined this process over centuries, and understanding their approach — parent selection, spawning management, and multi-stage culling — is essential for anyone attempting to breed quality Koi rather than simply produce fish.</p>

<h2 id="parent-selection">Parent Selection</h2>
<p>Parent selection is the most important decision in Koi breeding. The quality of the offspring is determined primarily by genetics:</p>
<ul>
  <li><strong>Age:</strong> Koi should be at least 3 years old and preferably 4–5+ for breeding. Younger Koi produce smaller clutches and lower-quality offspring. Prime breeding age is 4–10 years.</li>
  <li><strong>Body shape (tai):</strong> Select parents with a torpedo-shaped, well-proportioned body — broad shoulders tapering smoothly to the tail. Avoid parents with pinched or irregular body shapes.</li>
  <li><strong>Colour quality:</strong> Vivid, clearly defined colours. White (shiroji) should be snow-white without yellowing; red (hi) should be deep, uniform crimson without orange bleeding; black (sumi) should be jet-black and clearly edged.</li>
  <li><strong>Pattern:</strong> Well-balanced, aesthetically pleasing pattern. In Kohaku (white + red), the red patches should be evenly distributed with clean edges. In Sanke and Showa, the three-colour balance should be harmonious.</li>
  <li><strong>Size:</strong> Use the largest, best-conditioned parent Koi available. Size indicates vigour, good genetics, and proper development.</li>
</ul>

<h3 id="selecting-for-variety">Selecting for Specific Varieties</h3>
<ul>
  <li><strong>Kohaku (white + red):</strong> Breed Kohaku × Kohaku for the highest percentage of quality Kohaku offspring. The female parent has more influence on pattern than the male.</li>
  <li><strong>Sanke (white + red + black):</strong> Sanke × Sanke. Look for parents with small, scattered sumi (black) spots on the body (not on the head).</li>
  <li><strong>Showa (black + red + white):</strong> Showa × Showa. The base colour is black, so strong sumi in parents is essential. Showa genetics are complex — offspring quality varies widely.</li>
  <li><strong>Ogon (metallic single-colour):</strong> Ogon × Ogon for metallic offspring. Gold (Yamabuki Ogon) and platinum varieties are the most popular.</li>
</ul>
<p>Cross-variety breeding (e.g., Kohaku × Showa) produces unpredictable results and is generally avoided by serious breeders.</p>

<h2 id="spawning-setup">Spawning Pond/Tank Setup</h2>
<ul>
  <li><strong>Spawning pond:</strong> A dedicated 500–2,000 gallon pond or large stock tank separated from the main pond. Shallow (30–60 cm / 12–24 inches) with good aeration.</li>
  <li><strong>Spawning media:</strong> Place spawning brushes (commercial nylon brush mats), spawning mops (frayed rope), or submerged plants (Hornwort, Water Hyacinth roots) throughout the pond. Koi scatter adhesive eggs that stick to these surfaces.</li>
  <li><strong>Water quality:</strong> Fresh, well-aerated water. Temperature 65–72 °F (18–22 °C). Perform a large water change with slightly cooler water the day before placing the breeding group.</li>
  <li><strong>Breeding group:</strong> Place one female with two or three males in the spawning pond in the evening. Spawning almost always occurs in the early morning hours (pre-dawn to shortly after sunrise).</li>
</ul>

<h2 id="natural-spawning-koi">Natural Spawning</h2>
<p>Koi spawn naturally when water temperature consistently reaches 65–72 °F in spring. The spawning behaviour is vigorous and unmistakable:</p>
<ul>
  <li>Males aggressively chase the female, nudging her flanks and belly to stimulate egg release.</li>
  <li>The female releases clouds of eggs over the spawning media while the males simultaneously release sperm (milt).</li>
  <li>Spawning lasts 2–6 hours, typically beginning before dawn.</li>
  <li>The water becomes cloudy from milt. A distinctive "spawning smell" (fishy, musky) is noticeable.</li>
  <li>After spawning, the adults will eat the eggs. <strong>Remove the adults or the spawning media immediately after spawning concludes.</strong></li>
</ul>
<p>A mature female can produce 100,000–500,000 eggs in a single spawning event. Not all will be fertilised, but even a 50 % fertilisation rate produces staggering numbers of embryos.</p>

<h2 id="egg-collection-koi">Egg Collection and Incubation</h2>
<ol>
  <li>Transfer spawning media (with attached eggs) to a separate hatching tank or pond within 2–3 hours of spawning. Or remove the adult Koi from the spawning pond.</li>
  <li>Hatch temperature: 68–72 °F (20–22 °C). Higher temperatures accelerate hatching but increase deformity risk.</li>
  <li>Aerate heavily — developing eggs have high oxygen demand. Multiple airstones positioned near (not directly on) the eggs.</li>
  <li>Add methylene blue (2–3 drops per gallon, enough to tint the water blue) to prevent fungal growth on unfertilised eggs. Remove any obviously white/fungused eggs daily.</li>
  <li>Eggs hatch in 4–7 days at 68 °F. Newly hatched larvae (4–5 mm) hang from surfaces and absorb their yolk sac for 2–3 days before becoming free-swimming.</li>
</ol>

<h2 id="fry-rearing-koi">Fry Rearing</h2>
<ul>
  <li><strong>Days 1–3 (yolk sac):</strong> No feeding required. Larvae are attached to surfaces and cannot swim actively.</li>
  <li><strong>Days 3–14:</strong> Free-swimming fry require microscopic first foods. Green water (Chlorella algae culture) is the traditional first food for Koi fry — it provides infusoria and microorganisms that the tiny fry can consume. Culture green water by placing pond water in a sunny container with a small amount of fertiliser 2 weeks before the expected hatch. Supplement with liquid fry food or freshly hatched BBS.</li>
  <li><strong>Days 14–28:</strong> Transition to newly hatched brine shrimp as the primary food. Introduce finely crushed Koi pellets (powder consistency). Feed 4–5 times daily.</li>
  <li><strong>Days 28–56:</strong> Crushed pellets, frozen daphnia, and frozen bloodworm. Feed 3–4 times daily. Fry should be 1–3 cm at this stage.</li>
</ul>
<p>Maintain impeccable water quality in fry ponds/tanks: daily water changes (10–25 %), temperature stability, and aeration. Koi fry are hardier than many tropical fish fry but still vulnerable to ammonia spikes and temperature swings.</p>

<h2 id="culling-for-quality">Culling for Quality</h2>
<p>Culling is the defining process of Koi breeding. From thousands of fry, only a small percentage will develop patterns, colours, and body shapes worth keeping. Japanese breeders cull in three primary stages:</p>
<ul>
  <li><strong>First cull (4 weeks):</strong> Remove fry with obvious deformities (curved spines, missing fins, malformed mouths). Remove plain-coloured fry with no developing pattern. Retain fry showing any colour development or interesting pattern potential. This first cull typically removes 60–80 % of the population.</li>
  <li><strong>Second cull (8 weeks):</strong> Patterns are becoming visible. Remove fry with undesirable colour distribution, bleeding pattern edges, or poor body shape. Select for the specific variety being bred (e.g., retain only fry showing clear Kohaku red-on-white patterning). This cull removes another 50–70 % of the remaining population.</li>
  <li><strong>Third cull (12 weeks):</strong> Final quality selection. Retain only fry with strong, well-defined patterns, good body proportions, and promising colour intensity. The remaining fish (typically 1–5 % of the original hatch) are your keepers — the potential future breeding stock and sale-quality Koi.</li>
</ul>
<p>Culled fry are not wasted — they can be rehomed as "pond-grade" Koi (affordable, healthy fish for garden ponds), donated to schools and institutions, or used as feeder fish (for those comfortable with this option). The culling process is uncomfortable for some breeders but is essential for maintaining and improving Koi quality. Without it, every generation degrades in pattern and colour.</p>

<h2 id="grow-out-koi">Grow-Out to Sale Size</h2>
<ul>
  <li><strong>3–6 months:</strong> Selected Koi are 5–10 cm. Grow out in a dedicated pond or large tank with high-protein growth pellets, water temperature 68–77 °F (20–25 °C), and regular water changes.</li>
  <li><strong>6–12 months:</strong> Koi reach 10–20 cm — "tosai" (first-year) size. Colour and pattern continue to develop and may change significantly. Some Koi that looked promising at 12 weeks disappoint at 12 months, and vice versa.</li>
  <li><strong>12–24 months:</strong> "Nisai" (second-year). Koi are 20–35 cm and can be evaluated more reliably for long-term potential. This is the typical size for sale to hobbyists.</li>
</ul>
<p>Koi breeding rewards patience. The best Koi take 3–5 years to reveal their full potential. Japanese Koi breeders say "raise them until they tell you what they want to be" — a philosophy of patient observation rather than premature judgment. For pond setup guidance, see our <a href="/care/koi-pond-setup">Koi pond setup guide</a>.</p>
`,
    faqs: [
      {
        question: 'How many Koi fry survive to adulthood?',
        answer:
          'Of the 100,000–500,000 eggs a female produces, 30–70 % may hatch. Natural attrition, disease, and intentional culling for quality reduce the population to 1–5 % of the original hatch by 12 weeks. From a typical spawn, a hobbyist breeder might retain 50–200 quality juveniles. Professional breeders working with massive spawns may retain 500–2,000.',
      },
      {
        question: 'When do Koi develop their colour pattern?',
        answer:
          'Colour begins appearing at 3–4 weeks post-hatch. By 8 weeks, patterns are visible enough for preliminary selection. However, Koi colour and pattern continue to change dramatically through the first 2–3 years of life. Some colours (sumi/black in Sanke and Showa) may not stabilise until 3–5 years of age.',
      },
      {
        question: 'Can you breed Koi in an aquarium?',
        answer:
          'Technically yes, but it is impractical. Koi need to be 3+ years old and 30+ cm for quality breeding, which requires pond-scale housing. The spawning behaviour is vigorous and splashy. The volume of eggs produced requires significant hatching and rearing space. Koi breeding is fundamentally a pond-based activity.',
      },
      {
        question: 'What is culling and why is it necessary?',
        answer:
          'Culling is the selective removal of fry that do not meet quality standards for pattern, colour, or body shape. It is necessary because Koi genetics produce highly variable offspring — only 1–5 % of a spawn develops into high-quality Koi. Without culling, resources are wasted on low-quality fish, and the overall quality of your breeding programme declines with each generation.',
      },
    ],
    sources: [
      {
        title: 'Reproductive Biology of Cyprinus carpio (Koi) in Aquaculture',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848604003874',
        publisher: 'Aquaculture (Elsevier)',
      },
      {
        title: 'Koi Colour Genetics and Selective Breeding',
        url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/raq.12122',
        publisher: 'Reviews in Aquaculture',
      },
      {
        title: 'Japanese Koi Breeding Practices: An Overview',
        url: 'https://www.practicalfishkeeping.co.uk/features/koi-breeding-guide/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['koi-pond-setup', 'water-chemistry-guide'],
  },

  // ──────────────────────────────────────────────
  // Care Guide 45 — Fish Acclimation Guide
  // ──────────────────────────────────────────────
  {
    title: 'Fish Acclimation Guide: Drip Method, Float Method & Best Practices',
    slug: 'fish-acclimation-guide',
    type: 'care',
    topicCategory: 'tank-setup',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-05',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/fish-acclimation-guide.jpg',
    heroImageAlt:
      'A drip acclimation setup with airline tubing running from an aquarium into a bucket containing a new fish arrival',
    metaTitle: 'Fish Acclimation Guide: Drip & Float Methods | The Fish Collection',
    metaDescription:
      'How to acclimate new fish properly. Drip acclimation, float method, temperature matching, and species-specific protocols for sensitive fish.',
    quickAnswerQuestion: 'How do you acclimate new fish?',
    quickAnswer:
      'The drip method is the gold standard: float the sealed bag for 15 minutes to equalise temperature, then open the bag and use airline tubing with a loose knot to drip tank water into the bag at 2–4 drops per second for 45–60 minutes (doubling the water volume). Net the fish into the tank — never pour bag water into your aquarium. For sensitive species (Discus, stingrays, marine fish), extend the drip to 90–120 minutes.',
    summary:
      'A practical guide to acclimating new aquarium fish, comparing the drip method, float method, and plop-and-drop approach, with species-specific recommendations and common acclimation mistakes to avoid.',
    keyFacts: [
      { label: 'Best Method', value: 'Drip acclimation' },
      { label: 'Temperature Match', value: '15 min float' },
      { label: 'Drip Duration', value: '45–60 min (standard)' },
      { label: 'Sensitive Species', value: '90–120 min drip' },
      { label: 'Key Rule', value: 'Never pour bag water into tank' },
    ],
    headings: [
      { id: 'why-acclimate', text: 'Why Acclimation Matters', level: 2 },
      { id: 'float-method', text: 'The Float Method', level: 2 },
      { id: 'drip-method', text: 'The Drip Method', level: 2 },
      { id: 'drip-step-by-step', text: 'Step-by-Step Drip Protocol', level: 3 },
      { id: 'plop-and-drop', text: 'The Plop-and-Drop Method', level: 2 },
      { id: 'species-specific-acclimation', text: 'Species-Specific Protocols', level: 2 },
      { id: 'sensitive-species-acclimation', text: 'Sensitive Species', level: 3 },
      { id: 'hardy-species-acclimation', text: 'Hardy Species', level: 3 },
      { id: 'acclimation-mistakes', text: 'Common Acclimation Mistakes', level: 2 },
      { id: 'post-acclimation', text: 'Post-Acclimation Care', level: 2 },
    ],
    content: `
<h2 id="why-acclimate">Why Acclimation Matters</h2>
<p>Acclimation is the process of gradually adjusting a new fish to the water chemistry and temperature of its destination tank. Fish are sensitive to rapid changes in pH, temperature, salinity, and dissolved mineral content — parameters that almost always differ between the store's water and your aquarium. Sudden exposure to different conditions causes osmotic shock (cell damage from water chemistry differences) and temperature shock (metabolic disruption from temperature changes), both of which can be immediately fatal or cause delayed death 24–72 hours later.</p>
<p>The difference between the store's water and yours may seem small — a pH of 7.0 versus your 7.4, for example — but remember that pH is logarithmic: that 0.4 difference represents a 2.5-fold change in hydrogen ion concentration. For a fish's gill membranes, that is a significant chemical shift. Proper acclimation introduces these changes gradually, giving the fish's physiology time to adjust.</p>

<h2 id="float-method">The Float Method</h2>
<p>The float method addresses temperature only. It is the minimum acceptable acclimation for hardy species:</p>
<ol>
  <li>Float the sealed transport bag in the destination tank for 15–20 minutes. The water inside the bag gradually equalises with the tank temperature.</li>
  <li>Open the bag and add a small cup (100–150 mL) of tank water every 5 minutes for 20–30 minutes.</li>
  <li>Net the fish out of the bag and place it in the tank. <strong>Never pour the bag water into your tank</strong> — it contains ammonia from the fish's waste during transport, and may contain pathogens, medication residues, or copper from the store's systems.</li>
</ol>
<p><strong>Limitation:</strong> The float method does not gradually adjust water chemistry (pH, hardness). If the chemistry difference between the bag water and your tank is significant, the fish experiences a sudden chemical shift when transferred. For this reason, the drip method is preferred for most species.</p>

<h2 id="drip-method">The Drip Method</h2>
<p>The drip method is the gold standard for acclimation, gradually equalising both temperature and water chemistry:</p>

<h3 id="drip-step-by-step">Step-by-Step Drip Protocol</h3>
<ol>
  <li><strong>Float the sealed bag</strong> in the destination tank for 15 minutes to equalise temperature.</li>
  <li><strong>Pour the fish and bag water into a clean bucket or container.</strong> The container should be large enough to hold at least 3× the bag water volume.</li>
  <li><strong>Set up a drip line:</strong> Use a length of airline tubing. Start a siphon from the tank into the bucket by sucking on the tubing (or using a siphon starter). Tie a loose knot in the tubing to restrict flow to 2–4 drops per second. Alternatively, use an airline valve for precise flow control.</li>
  <li><strong>Drip for 45–60 minutes</strong> until the water volume in the bucket has at least doubled. This gradually blends tank water with bag water, exposing the fish to a slow, steady change in chemistry.</li>
  <li><strong>Net the fish from the bucket into the tank.</strong> Do not pour the bucket water into the tank — discard it.</li>
  <li><strong>Dim the tank lights</strong> for 2–4 hours after introduction to reduce stress.</li>
</ol>
<p>The drip method is especially important when the bag water chemistry differs significantly from your tank — for example, when your tank has soft, acidic water (pH 6.5, GH 4) but the store uses hard, alkaline water (pH 7.8, GH 12). The gradual blend prevents the shock that a sudden transfer would cause.</p>

<h2 id="plop-and-drop">The Plop-and-Drop Method</h2>
<p>The plop-and-drop method skips water chemistry matching entirely: float for temperature, then net the fish directly into the tank. This is acceptable <strong>only</strong> when:</p>
<ul>
  <li>The fish is extremely hardy (most livebearers, goldfish, common tetras).</li>
  <li>The bag water chemistry is close to your tank (same water source, for example).</li>
  <li>The fish has been in the bag for a long time (8+ hours) and the bag water is severely degraded — in this case, prolonged acclimation in ammonia-laden bag water causes more harm than a quick transfer.</li>
</ul>
<p>The logic behind plop-and-drop in long-transit scenarios: as CO₂ builds up in the sealed bag, pH drops, which converts toxic ammonia (NH₃) into less toxic ammonium (NH₄⁺). When you open the bag, CO₂ escapes, pH rises rapidly, and the ammonia reverts to its toxic free form — potentially spiking to lethal levels. In these cases, getting the fish into clean water quickly is more important than gradual acclimation. Add Seachem Prime to the bag immediately upon opening to detoxify ammonia during any extended acclimation.</p>

<h2 id="species-specific-acclimation">Species-Specific Protocols</h2>

<h3 id="sensitive-species-acclimation">Sensitive Species</h3>
<ul>
  <li><strong>Discus:</strong> Drip acclimate for 90–120 minutes. Discus are extremely sensitive to pH and temperature changes. Match temperature precisely (±0.5 °F). If the pH difference between bag and tank exceeds 0.5 units, extend the drip duration.</li>
  <li><strong>Freshwater stingrays:</strong> Drip for 120+ minutes. Stingrays are osmoregulatory-sensitive — rapid chemistry changes cause immediate stress. Some breeders recommend dripping for 2–4 hours for wild-caught specimens.</li>
  <li><strong>Arowana:</strong> Drip for 60–90 minutes. Arowana are large fish with significant metabolic sensitivity. Add Seachem Prime to the bag water upon opening to detoxify accumulated ammonia. Browse <a href="/exotic-fish/arowana">our Arowana collection</a> — all specimens ship with detailed acclimation instructions.</li>
  <li><strong>Crystal shrimp (Caridina):</strong> Drip for 120+ minutes at 1–2 drops per second. Shrimp are far more sensitive to chemistry changes than fish. Any TDS shift greater than 10–20 ppm per hour risks osmotic shock.</li>
</ul>

<h3 id="hardy-species-acclimation">Hardy Species</h3>
<ul>
  <li><strong>Guppies, Mollies, Platies:</strong> Float + brief drip (20–30 minutes) or plop-and-drop. Livebearers are among the hardiest aquarium fish and tolerate parameter changes readily.</li>
  <li><strong>Goldfish:</strong> Float + brief drip. Goldfish are cold-water fish that tolerate wide parameter ranges.</li>
  <li><strong>Most tetras, barbs, Corydoras:</strong> Standard drip method (45–60 minutes) is appropriate and sufficient.</li>
</ul>

<h2 id="acclimation-mistakes">Common Acclimation Mistakes</h2>
<ul>
  <li><strong>Pouring bag water into the tank:</strong> The most common mistake. Bag water contains ammonia, possibly medications, potentially pathogens. Always discard bag water and net the fish into the tank.</li>
  <li><strong>Acclimating too quickly:</strong> Rushing the process (15-minute float only) exposes the fish to sudden chemistry changes. Take the full 45–60 minutes (or longer for sensitive species).</li>
  <li><strong>Acclimating too slowly in degraded bag water:</strong> For fish that have been in a bag for 8+ hours, the bag water is toxic with ammonia and low in oxygen. Extended acclimation in this water does more harm than good. Add Prime, brief temperature match, and transfer quickly.</li>
  <li><strong>Leaving lights on during introduction:</strong> Bright lighting stresses newly introduced fish. Dim lights for 2–4 hours after acclimation.</li>
  <li><strong>Feeding immediately after introduction:</strong> Do not feed new fish for 12–24 hours after acclimation. The stress of transport and introduction suppresses appetite and digestion. Offer food the next day.</li>
  <li><strong>Skipping quarantine:</strong> Acclimation into the display tank directly, bypassing quarantine, risks introducing disease. Acclimate into a <a href="/care/fish-quarantine-guide">quarantine tank</a> instead.</li>
</ul>

<h2 id="post-acclimation">Post-Acclimation Care</h2>
<ul>
  <li><strong>Dim lights for 2–4 hours.</strong> Reduces stress and allows the fish to explore its new environment without feeling exposed.</li>
  <li><strong>Do not feed for 12–24 hours.</strong> The fish's digestive system is stressed from transport; feeding immediately can cause regurgitation and water quality issues.</li>
  <li><strong>Monitor behaviour closely for 48 hours.</strong> Watch for gasping, listing (swimming at an angle), clamped fins, loss of colour, or refusal to eat after 24 hours. These signs indicate acclimation stress or a pre-existing condition.</li>
  <li><strong>Test water parameters</strong> 24 hours after introduction to verify the additional bioload has not spiked ammonia (particularly in smaller tanks or recently cycled systems).</li>
  <li><strong>Do not add more fish for at least 2 weeks</strong> to allow the biological filter to adjust to the increased bioload and to observe the new fish for any emerging health issues.</li>
</ul>
<p>Proper acclimation takes less than an hour and dramatically reduces the risk of new fish losses. The investment in time pays for itself with every successful introduction. For water chemistry background, see our <a href="/care/water-chemistry-guide">water chemistry guide</a>. For quarantine protocols, see the <a href="/care/fish-quarantine-guide">quarantine guide</a>.</p>
`,
    faqs: [
      {
        question: 'How long should I acclimate new fish?',
        answer:
          'Standard species: 45–60 minutes using the drip method (15 minutes temperature float + 30–45 minutes dripping). Sensitive species (Discus, stingrays, Arowana, Crystal shrimp): 90–120+ minutes. Hardy species (livebearers, goldfish): 20–30 minutes minimum. When in doubt, longer is safer than shorter.',
      },
      {
        question: 'Should I pour the bag water into my tank?',
        answer:
          'Never. Bag water contains ammonia from the fish\'s waste during transport, potentially elevated bacteria levels, and possibly medication or copper residues from the store\'s systems. Always net the fish from the acclimation container and discard the water.',
      },
      {
        question: 'What is the best acclimation method?',
        answer:
          'The drip method is the best for most species. It gradually equalises both temperature and water chemistry (pH, hardness, TDS) over 45–60+ minutes. The float method only equalises temperature and is acceptable only for very hardy species or when chemistry differences are minimal.',
      },
      {
        question: 'Can fish die from improper acclimation?',
        answer:
          'Yes. Sudden pH shifts cause osmotic shock — damage to gill membranes and internal organs that can kill within hours or cause delayed death 24–72 hours later. Sudden temperature changes (3+ °F) cause metabolic shock. Proper acclimation prevents both. Fish that die 1–3 days after introduction were often victims of acclimation shock, not tank conditions.',
      },
    ],
    sources: [
      {
        title: 'Osmotic Stress and Acclimation in Freshwater Fish',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1546509806010057',
        publisher: 'Fish Physiology (Elsevier)',
      },
      {
        title: 'Transport and Acclimation of Ornamental Fish: Best Practices',
        url: 'https://edis.ifas.ufl.edu/publication/FA119',
        publisher: 'University of Florida IFAS Extension',
      },
      {
        title: 'Ammonia Dynamics During Fish Transport',
        url: 'https://www.practicalfishkeeping.co.uk/features/acclimation-guide/',
        publisher: 'Practical Fishkeeping',
      },
    ],
    relatedSlugs: ['fish-quarantine-guide', 'water-chemistry-guide', 'fish-disease-prevention'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 45 — Oscar Fish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Oscar Fish Care Guide',
    slug: 'oscar-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'oscar',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-25',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/oscar-care-guide.jpg',
    heroImageAlt: 'Tiger Oscar displaying vibrant orange and black markings in a spacious aquarium',
    metaTitle: 'Oscar Fish Care Guide | Tank Setup, Diet & Health | The Fish Collection',
    metaDescription: 'Complete Oscar fish care guide — 75+ gallon tank setup, water parameters, diet, tank mates, and HITH prevention. Expert advice from certified aquarists.',
    quickAnswerQuestion: 'How do you care for an Oscar fish?',
    quickAnswer: 'Oscars need a minimum 75-gallon aquarium (125+ for a pair), temperature 74–81 °F, pH 6.0–8.0, and strong filtration rated for 8× turnover. Feed a varied diet of quality cichlid pellets, earthworms, crickets, and frozen shrimp. Oscars are intelligent, personable fish that recognise their owners but are messy eaters requiring weekly 30–40% water changes.',
    summary: 'A comprehensive care guide for Oscar fish (Astronotus ocellatus), one of the most popular and intelligent large cichlids in the freshwater hobby. Covers tank requirements, diet, compatible tank mates, breeding, and common health issues including hole-in-the-head disease.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Astronotus ocellatus' },
      { label: 'Max Size', value: '35 cm (14 in)' },
      { label: 'Minimum Tank', value: '75 gallons (284 L)' },
      { label: 'Temperature', value: '74–81 °F (23–27 °C)' },
      { label: 'pH Range', value: '6.0–8.0' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Omnivore — pellets, insects, frozen foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'filtration', text: 'Filtration', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet and Feeding', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-health-issues', text: 'Common Health Issues', level: 2 },
      { id: 'hith', text: 'Hole-in-the-Head Disease (HITH)', level: 3 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>The Oscar (Astronotus ocellatus) is a South American cichlid native to the Amazon, Orinoco, and La Plata river basins. Widely regarded as one of the most intelligent freshwater aquarium fish, Oscars recognise their owners, can be hand-fed, and display distinct individual personalities. They grow rapidly — reaching 10–12 inches within the first year — and can exceed 14 inches at maturity.</p>
<p>Popular varieties include the Tiger Oscar (orange and black), Albino Oscar (white and orange), Red Oscar, and Lemon Oscar. Despite their charm, Oscars are messy, aggressive eaters that demand robust filtration and spacious tanks. They are not community fish in the traditional sense.</p>

<h2 id="tank-setup">Tank Setup</h2>
<p>A single adult Oscar requires a minimum 75-gallon aquarium; a pair or community with other large cichlids demands 125 gallons or more. Oscars are powerful fish that rearrange décor — secure any hardscape and avoid delicate plants. Use sand or smooth gravel substrate, as Oscars sift and dig constantly.</p>
<h3 id="filtration">Filtration</h3>
<p>Oscars produce enormous waste relative to their size. A canister filter rated for at least 8× the tank volume per hour is the minimum — many keepers run two filters for redundancy. Supplement with a sponge pre-filter on the intake to protect the motor from debris. Weekly 30–40% water changes are non-negotiable.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Oscars are adaptable across a wide pH and hardness range, making them suitable for most tap water conditions:</p>
<ul>
<li><strong>Temperature:</strong> 74–81 °F (23–27 °C)</li>
<li><strong>pH:</strong> 6.0–8.0</li>
<li><strong>GH:</strong> 5–20 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm (essential)</li>
<li><strong>Nitrate:</strong> Below 20 ppm — Oscars are sensitive to nitrate accumulation</li>
</ul>

<h2 id="diet-and-feeding">Diet and Feeding</h2>
<p>Oscars are true omnivores. A quality cichlid pellet (Hikari Cichlid Gold, Northfin Cichlid) should form the staple diet. Supplement with:</p>
<ul>
<li>Earthworms and nightcrawlers (excellent nutrition)</li>
<li>Crickets and mealworms</li>
<li>Frozen shrimp, krill, and silversides</li>
<li>Blanched vegetables (peas, zucchini) occasionally</li>
</ul>
<p>Avoid feeder fish — they carry parasites and offer poor nutritional value. Feed juveniles twice daily, adults once daily. Oscars are prone to obesity, so resist overfeeding despite their enthusiastic begging.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Oscars are territorial and will eat anything that fits in their mouth. Compatible tank mates include Silver Dollars, large Plecos (common or sailfin), Jack Dempsey cichlids, Bichirs, large catfish (Synodontis, Pictus at risk when small), and Severum cichlids. Avoid small fish, slow-moving species, and fin-nippers. Always introduce tank mates simultaneously to reduce territorial aggression.</p>

<h2 id="breeding">Breeding</h2>
<p>Oscars form monogamous pairs but are notoriously difficult to sex visually. The most reliable method is to raise a group of 6 juveniles and let them pair naturally. Breeding pairs clean a flat rock or the tank bottom, deposit 1,000–3,000 eggs, and guard them aggressively. Eggs hatch in 3–4 days at 80 °F. Fry become free-swimming within a week and accept baby brine shrimp and crushed pellets.</p>

<h2 id="common-health-issues">Common Health Issues</h2>
<h3 id="hith">Hole-in-the-Head Disease (HITH)</h3>
<p>The most significant Oscar-specific disease is HITH (Hexamita/Spironucleus), which presents as pitting lesions on the head and lateral line. Contributing factors include poor water quality, vitamin deficiency (especially vitamin C and D), and activated carbon overuse. Treatment involves improving water quality, adding metronidazole to food, and supplementing with vitamins. Prevent HITH by maintaining pristine water, feeding a varied diet, and minimising stress.</p>
<p>Other common issues include ich (treat by raising temperature to 86 °F and adding salt), bloat from overfeeding, and fin damage from aggression.</p>
`,
    faqs: [
      { question: 'How big do Oscars get?', answer: 'Oscars typically reach 12–14 inches (30–35 cm) in captivity and can weigh over 3 pounds. They grow rapidly, reaching 10 inches within the first year with proper feeding. Plan your tank size for their adult dimensions, not their juvenile size.' },
      { question: 'Can Oscars live with other fish?', answer: 'Yes, but only with similarly sized, robust species. Good tank mates include Silver Dollars, large Plecos, Jack Dempsey cichlids, Bichirs, and Severum. Any fish small enough to fit in an Oscar\'s mouth will be eaten. A 125+ gallon tank is necessary for an Oscar community.' },
      { question: 'Why is my Oscar lying on its side?', answer: 'Oscars sometimes rest on their side, which can alarm new owners. If the fish responds normally when approached, this is natural resting behaviour. However, if accompanied by loss of appetite, rapid breathing, or bloating, test water parameters immediately — ammonia or nitrate spikes are the most common cause of genuine distress.' },
      { question: 'How often should I feed my Oscar?', answer: 'Feed adult Oscars once daily, offering only what they consume in 2–3 minutes. Juveniles under 6 inches benefit from twice-daily feedings. One fasting day per week helps prevent obesity and digestive issues. Variety is key — rotate between pellets, earthworms, and frozen foods.' },
      { question: 'Do Oscars need a heater?', answer: 'Yes. Oscars are tropical fish requiring 74–81 °F. Use a heater rated for your tank volume (3–5 watts per gallon). In tanks 75 gallons and above, use two heaters for even heating and redundancy in case one fails.' },
    ],
    sources: [
      { title: 'Astronotus ocellatus (Agassiz, 1831)', url: 'https://www.fishbase.se/summary/Astronotus-ocellatus.html', publisher: 'FishBase' },
      { title: 'Hole-in-the-Head Disease in Cichlids', url: 'https://www.practicalfishkeeping.co.uk/features/hole-in-the-head/', publisher: 'Practical Fishkeeping' },
    ],
    relatedSlugs: ['flowerhorn-cichlid-care-guide', 'cichlid-water-parameters', 'predatory-fish-feeding-guide', 'cichlid-tank-mates'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 46 — Goldfish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Goldfish Care Guide',
    slug: 'goldfish-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'goldfish',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-26',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/goldfish-care-guide.jpg',
    heroImageAlt: 'Ranchu goldfish with prominent wen swimming in a well-filtered aquarium with smooth gravel',
    metaTitle: 'Goldfish Care Guide | Tank Setup, Feeding & Health | The Fish Collection',
    metaDescription: 'Complete goldfish care guide for fancy and common varieties — tank size, water parameters, diet, swim bladder prevention, and compatible tank mates.',
    quickAnswerQuestion: 'How do you properly care for goldfish?',
    quickAnswer: 'Goldfish need a minimum 20-gallon tank (not a bowl), temperature 65–72 °F, pH 7.0–8.4, and strong filtration rated for 10× turnover. Feed sinking pellets or gel food twice daily. Fancy goldfish (ranchu, oranda) need 30+ gallons per fish. Goldfish are cold-water fish that produce heavy waste — weekly 25–30% water changes are essential.',
    summary: 'A definitive care guide for goldfish (Carassius auratus), covering both fancy varieties (ranchu, oranda, ryukin, lionhead) and single-tail types. Addresses the most common goldfish care myths and provides expert guidance on tank size, water quality, feeding, and disease prevention.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Carassius auratus' },
      { label: 'Max Size', value: '15–30 cm depending on variety' },
      { label: 'Minimum Tank', value: '20 gal (single-tail), 30 gal (fancy)' },
      { label: 'Temperature', value: '65–72 °F (18–22 °C)' },
      { label: 'pH Range', value: '7.0–8.4' },
      { label: 'Care Level', value: 'Beginner' },
      { label: 'Lifespan', value: '10–15 years (up to 25+ with excellent care)' },
      { label: 'Diet', value: 'Omnivore — gel food, pellets, vegetables' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'tank-size', text: 'Tank Size — Why Bowls Don\'t Work', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'filtration', text: 'Filtration', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet and Feeding', level: 2 },
      { id: 'fancy-vs-single-tail', text: 'Fancy vs Single-Tail Varieties', level: 2 },
      { id: 'common-diseases', text: 'Common Diseases', level: 2 },
      { id: 'swim-bladder-disorder', text: 'Swim Bladder Disorder', level: 3 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>The goldfish (Carassius auratus) is the most widely kept aquarium fish in the world — and one of the most misunderstood. Originating from selective breeding of Prussian carp in China over 1,000 years ago, modern goldfish encompass dozens of varieties, from the streamlined Common and Comet to the elaborately shaped Ranchu, Oranda, and Telescope Eye. Properly cared for, goldfish live 10–15 years; exceptional specimens have reached 25+ years.</p>

<h2 id="tank-size">Tank Size — Why Bowls Don't Work</h2>
<p>The single biggest goldfish care myth is that they thrive in bowls. They do not. Goldfish produce ammonia at a rate comparable to fish twice their size, and bowls lack filtration, surface area, and volume to maintain safe water chemistry. Minimum tank sizes:</p>
<ul>
<li><strong>Single-tail goldfish</strong> (Common, Comet, Shubunkin): 40 gallons for the first fish, +20 gallons each additional — or a pond</li>
<li><strong>Fancy goldfish</strong> (Ranchu, Oranda, Ryukin, Lionhead): 30 gallons for the first fish, +10 gallons each additional</li>
</ul>
<p>Single-tail goldfish can reach 12 inches and are best suited to ponds. Fancy varieties stay smaller (6–8 inches) and adapt better to indoor aquariums.</p>

<h2 id="water-parameters">Water Parameters</h2>
<p>Goldfish are cold-water fish — they do not need a heater in most homes. Ideal parameters:</p>
<ul>
<li><strong>Temperature:</strong> 65–72 °F (18–22 °C) — avoid sustained temperatures above 76 °F</li>
<li><strong>pH:</strong> 7.0–8.4 (they prefer alkaline, hard water)</li>
<li><strong>GH:</strong> 8–20 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 20 ppm</li>
</ul>

<h2 id="filtration">Filtration</h2>
<p>Goldfish are exceptionally messy. Run filtration rated for at least 10× the tank volume per hour. HOB filters work for smaller setups; canister filters or sumps are preferable for tanks 40+ gallons. Dual sponge filters provide excellent biological filtration and gentle flow — ideal for fancy varieties with limited swimming ability.</p>

<h2 id="diet-and-feeding">Diet and Feeding</h2>
<p>Feed a staple of high-quality sinking pellets or gel food (Repashy Soilent Green, Hikari Fancy Goldfish). Supplement with:</p>
<ul>
<li>Blanched peas (with skin removed) — excellent for digestion</li>
<li>Blanched zucchini, spinach, lettuce</li>
<li>Frozen or live daphnia, bloodworms, brine shrimp</li>
</ul>
<p>Avoid floating flake food for fancy goldfish — air gulping during surface feeding contributes to swim bladder issues. Feed small amounts 2–3 times daily. Goldfish have no stomach and benefit from frequent small meals over one large feeding.</p>

<h2 id="fancy-vs-single-tail">Fancy vs Single-Tail Varieties</h2>
<p><strong>Single-tail</strong> (Common, Comet, Shubunkin) are fast, hardy, and grow large. They belong in ponds or very large tanks (75+ gallons). <strong>Fancy varieties</strong> (Ranchu, Oranda, Ryukin, Lionhead, Telescope, Pearlscale) are slower, more delicate, and should never be housed with single-tails — they cannot compete for food and risk injury. Keep fancy varieties only with other fancy varieties.</p>

<h2 id="common-diseases">Common Diseases</h2>
<h3 id="swim-bladder-disorder">Swim Bladder Disorder</h3>
<p>The most common fancy goldfish ailment. Symptoms: floating at the surface, sinking to the bottom, or swimming sideways. Causes include constipation (from low-fiber diet), rapid temperature changes, and genetic predisposition in round-bodied varieties. Treat by fasting 2–3 days, then feeding blanched peas. Prevent with gel food or sinking pellets and stable temperature.</p>
<p>Other common issues: ich (white spots, treat with salt and heat), fin rot (improve water quality), dropsy (pine-cone scales — often terminal, caused by bacterial kidney infection).</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Fancy goldfish can be kept with other fancy goldfish, Dojo Loaches (weather loach), Bristlenose Plecos (in heated setups above 68 °F), and large snails (Nerite, Mystery). Avoid tropical fish (incompatible temperature), small fish (will be eaten), and aggressive species. Single-tail goldfish are best with other single-tails or koi in pond settings.</p>
`,
    faqs: [
      { question: 'Can goldfish live in a bowl?', answer: 'No. Bowls lack adequate water volume, filtration, and surface area for gas exchange. A goldfish in a bowl suffers chronic ammonia poisoning and stunted growth. The minimum for a single fancy goldfish is a 30-gallon filtered tank. Single-tail varieties need 40+ gallons or a pond.' },
      { question: 'How long do goldfish live?', answer: 'With proper care, goldfish live 10–15 years. Well-maintained pond goldfish frequently reach 20+ years. The oldest verified goldfish lived to 43 years. Most goldfish die prematurely (within 1–2 years) due to inadequate housing — bowls, unfiltered tanks, and overfeeding.' },
      { question: 'Do goldfish need a heater?', answer: 'Generally no. Goldfish are cold-water fish comfortable at 65–72 °F. However, if your room temperature drops below 60 °F in winter, a heater set to 65 °F prevents dangerous temperature swings. Fancy varieties are more sensitive to cold than single-tails.' },
      { question: 'Can goldfish live with tropical fish?', answer: 'Not recommended. Goldfish need cooler water (65–72 °F) than most tropical species (75–82 °F). Housing them together means one group is always outside its comfort zone. Goldfish also produce far more waste than tropical fish of comparable size, straining shared filtration.' },
    ],
    sources: [
      { title: 'Carassius auratus (Linnaeus, 1758)', url: 'https://www.fishbase.se/summary/Carassius-auratus.html', publisher: 'FishBase' },
      { title: 'Fancy Goldfish: Complete Guide to Care and Collecting', url: 'https://www.practicalfishkeeping.co.uk/features/fancy-goldfish-guide/', publisher: 'Practical Fishkeeping' },
    ],
    relatedSlugs: ['koi-pond-setup', 'water-chemistry-guide', 'ich-treatment-guide', 'fish-disease-prevention'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 47 — Koi Fish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Koi Fish Care Guide',
    slug: 'koi-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'koi',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-27',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/koi-care-guide.jpg',
    heroImageAlt: 'Kohaku koi swimming in a crystal-clear pond with aquatic plants',
    metaTitle: 'Koi Fish Care Guide | Pond Setup, Feeding & Health | The Fish Collection',
    metaDescription: 'Complete koi care guide — pond requirements, seasonal feeding, water quality, variety selection, and disease prevention for Nishikigoi.',
    quickAnswerQuestion: 'How do you care for koi fish?',
    quickAnswer: 'Koi need a pond of at least 1,000 gallons (3,785 L) with a minimum depth of 3 feet, excellent filtration, and aeration. Temperature range is broad (35–85 °F) but they are most active at 65–75 °F. Feed high-quality koi pellets, adjusting protein content seasonally — high-protein in summer, wheat germ in cool months. Weekly partial water changes of 10–20% maintain water quality.',
    summary: 'A comprehensive care guide for koi (Cyprinus rubrofuscus, Nishikigoi), covering pond design, water quality management, seasonal feeding protocols, variety identification, breeding, and common diseases. Essential reading for both new pond keepers and experienced koi hobbyists.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Cyprinus rubrofuscus' },
      { label: 'Max Size', value: '60–90 cm (24–36 in)' },
      { label: 'Minimum Pond', value: '1,000 gallons (3,785 L)' },
      { label: 'Temperature', value: '35–85 °F (2–29 °C)' },
      { label: 'pH Range', value: '7.0–8.6' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '25–35 years (record: 226 years, Hanako)' },
      { label: 'Diet', value: 'Omnivore — koi pellets, wheat germ, treats' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'pond-requirements', text: 'Pond Requirements', level: 2 },
      { id: 'water-quality', text: 'Water Quality', level: 2 },
      { id: 'seasonal-feeding', text: 'Seasonal Feeding', level: 2 },
      { id: 'koi-varieties', text: 'Popular Koi Varieties', level: 2 },
      { id: 'breeding', text: 'Breeding', level: 2 },
      { id: 'common-diseases', text: 'Common Diseases', level: 2 },
      { id: 'predator-protection', text: 'Predator Protection', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Koi (Nishikigoi) are ornamental varieties of the common carp, selectively bred in Japan since the 1820s for colour, pattern, and body conformation. Modern koi come in over 100 named varieties across 16 official classification groups. They are long-lived (25–35 years with proper care), highly social, and can grow to 24–36 inches. Koi keeping is a global hobby with competitive shows, dedicated breeders, and individual fish commanding prices from $10 to over $1 million for grand champions.</p>

<h2 id="pond-requirements">Pond Requirements</h2>
<p>Koi are pond fish — indoor tanks are only viable for juveniles or quarantine. Minimum pond specifications:</p>
<ul>
<li><strong>Volume:</strong> 1,000 gallons minimum; 250 gallons per adult koi</li>
<li><strong>Depth:</strong> 3 feet minimum (4+ feet in regions with harsh winters for thermal layering)</li>
<li><strong>Filtration:</strong> Multi-stage system — settlement chamber, biological media (moving bed or shower filter), UV clarifier</li>
<li><strong>Aeration:</strong> Air pumps with diffuser stones; essential in summer when warm water holds less oxygen</li>
<li><strong>Bottom drain:</strong> Gravity-fed bottom drain is the most efficient way to remove waste from a koi pond</li>
</ul>

<h2 id="water-quality">Water Quality</h2>
<p>Koi tolerate a wide range but thrive with stable parameters:</p>
<ul>
<li><strong>Temperature:</strong> Active range 65–75 °F; survive 35–85 °F</li>
<li><strong>pH:</strong> 7.0–8.6 (stable is more important than exact number)</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm (critical)</li>
<li><strong>Nitrate:</strong> Below 40 ppm</li>
<li><strong>Dissolved oxygen:</strong> Above 6 mg/L</li>
</ul>
<p>Test water weekly. Spring is the most dangerous period — rising temperatures activate koi metabolism and bacteria simultaneously, while the biofilter is still sluggish from winter dormancy.</p>

<h2 id="seasonal-feeding">Seasonal Feeding</h2>
<p>Koi feeding is temperature-dependent — their metabolism slows dramatically in cold water:</p>
<ul>
<li><strong>Below 50 °F:</strong> Do not feed — koi cannot digest food at these temperatures</li>
<li><strong>50–60 °F:</strong> Wheat germ pellets, small amounts every 2–3 days</li>
<li><strong>60–70 °F:</strong> Standard koi pellets, once daily</li>
<li><strong>70–85 °F:</strong> High-protein growth pellets, 2–3 times daily</li>
</ul>
<p>Supplement with treats: watermelon, oranges, lettuce, and earthworms. Never overfeed — uneaten food degrades water quality rapidly.</p>

<h2 id="koi-varieties">Popular Koi Varieties</h2>
<p>The "Big Three" (Gosanke) are the most prized: <strong>Kohaku</strong> (white with red patterns), <strong>Taisho Sanke</strong> (white with red and black), and <strong>Showa Sanshoku</strong> (black with red and white). Other popular varieties include Butterfly Koi (long-finned), Ogon (metallic gold), Shusui (scaleless blue with red), and Asagi (blue netted scales with red belly).</p>

<h2 id="breeding">Breeding</h2>
<p>Koi spawn naturally in late spring when temperatures reach 68–72 °F. Females scatter adhesive eggs on vegetation or spawning brushes; males fertilise externally. A single female can produce 100,000+ eggs. Remove eggs or parents to prevent predation. Fry hatch in 4–7 days and require infusoria, then powdered fry food. Culling is standard practice — only 5–10% of fry will develop desirable patterns.</p>

<h2 id="common-diseases">Common Diseases</h2>
<p>The most serious koi diseases include <strong>KHV</strong> (Koi Herpes Virus — fatal, no cure, quarantine all new fish), <strong>Aeromonas/ulcer disease</strong> (bacterial, treat with antibiotics and salt), and <strong>parasites</strong> (Costia, Trichodina, anchor worm — treat with potassium permanganate or formalin). Spring is peak disease season. Quarantine all new koi for 4–6 weeks in a separate system before introduction to your main pond.</p>

<h2 id="predator-protection">Predator Protection</h2>
<p>Koi ponds attract herons, raccoons, cats, and birds of prey. Protection measures include pond netting, motion-activated sprinklers, steep pond walls (minimum 18-inch vertical edge above water), and providing depth refuges (3+ feet) where koi can escape predators. Decoy herons are ineffective — real herons are not territorial enough to be deterred.</p>
`,
    faqs: [
      { question: 'How big do koi get?', answer: 'Standard koi grow to 24–36 inches (60–90 cm) over 5–10 years, depending on genetics, pond size, and feeding. Japanese-bred koi from reputable bloodlines can reach the larger end. Butterfly koi may have even greater total length due to their elongated fins.' },
      { question: 'Can koi live in a tank?', answer: 'Juvenile koi (under 6 inches) can be temporarily housed in large aquariums (75+ gallons), but adult koi need a pond. A 300-gallon indoor tank could house 1–2 small koi, but it limits their growth and wellbeing. Koi are pond fish by nature and thrive in open-water systems with sunlight.' },
      { question: 'How long do koi live?', answer: 'With proper care in a well-maintained pond, koi live 25–35 years. The longest-lived verified koi, Hanako, reportedly lived to 226 years based on scale ring analysis, though this claim is debated. Most koi in garden ponds live 15–25 years.' },
      { question: 'Can koi and goldfish live together?', answer: 'Yes, koi and single-tail goldfish coexist well in ponds — they share similar water parameters and temperament. However, they can hybridise, producing less attractive offspring. Fancy goldfish should not be kept with koi as they cannot compete for food and risk injury.' },
    ],
    sources: [
      { title: 'Cyprinus rubrofuscus (Lacépède, 1803)', url: 'https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html', publisher: 'FishBase' },
      { title: 'Manual of Koi Health', url: 'https://www.koiorganisationinternational.org/health/', publisher: 'Koi Organisation International' },
    ],
    relatedSlugs: ['koi-pond-setup', 'koi-breeding-guide', 'water-chemistry-guide', 'fish-disease-prevention'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 48 — Piranha Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Piranha Care Guide',
    slug: 'piranha-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'piranha',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-28',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/piranha-care-guide.jpg',
    heroImageAlt: 'School of red-bellied piranhas in a blackwater aquarium with driftwood',
    metaTitle: 'Piranha Care Guide | Tank Setup, Diet & Legality | The Fish Collection',
    metaDescription: 'Complete piranha care guide — school size, 75+ gallon tank setup, feeding protocols, and state-by-state legality for keeping piranhas in the US.',
    quickAnswerQuestion: 'How do you care for piranhas?',
    quickAnswer: 'Red-bellied piranhas need a school of 4–6 in a minimum 75-gallon tank (125+ for larger groups), temperature 75–82 °F, pH 6.0–7.5, and subdued lighting with plenty of hiding spots. Feed fish fillets, shrimp, earthworms, and quality carnivore pellets. Despite their reputation, captive piranhas are skittish and timid — they need the security of a group to feel comfortable.',
    summary: 'A practical care guide for keeping piranhas in the home aquarium, focusing on the red-bellied piranha (Pygocentrus nattereri). Covers school size requirements, tank setup, feeding without live feeders, behaviour management, and legal restrictions on piranha ownership in the US.',
    keyFacts: [
      { label: 'Scientific Name', value: 'Pygocentrus nattereri' },
      { label: 'Max Size', value: '30 cm (12 in)' },
      { label: 'Minimum Tank', value: '75 gal for 4–6 fish' },
      { label: 'Temperature', value: '75–82 °F (24–28 °C)' },
      { label: 'pH Range', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Intermediate' },
      { label: 'Lifespan', value: '10–15 years' },
      { label: 'Diet', value: 'Carnivore — fish fillets, shrimp, pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'legality', text: 'Legality', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet-and-feeding', text: 'Diet and Feeding', level: 2 },
      { id: 'behaviour', text: 'Behaviour in Captivity', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'health', text: 'Health Considerations', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Piranhas belong to the family Serrasalmidae and are native to South American river systems. The red-bellied piranha (Pygocentrus nattereri) is the most commonly kept species, renowned for its silver body with vivid red-orange ventral colouration. Despite Hollywood mythology, piranhas are not mindless killing machines — in captivity they are typically nervous, easily startled schooling fish that rely on group numbers for confidence.</p>

<h2 id="legality">Legality</h2>
<p>Piranha ownership is <strong>illegal in many US states</strong> including California, Texas, New York, and approximately 25 others. Check your state and local regulations before purchasing. States that permit piranha keeping may require permits. Releasing piranhas into wild waterways is a federal offence. The Fish Collection only ships piranhas to states where they are legal to own.</p>

<h2 id="tank-setup">Tank Setup</h2>
<p>Piranhas must be kept in groups — a solitary piranha is a stressed piranha. Minimum school: 4 fish in a 75-gallon tank; 6+ fish in 125 gallons. Provide subdued lighting, dark substrate, driftwood, and live or artificial plants to create visual barriers and reduce aggression. A tight-fitting lid is essential — piranhas can leap when startled.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 75–82 °F (24–28 °C)</li>
<li><strong>pH:</strong> 6.0–7.5 (soft, slightly acidic preferred)</li>
<li><strong>GH:</strong> 4–15 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 30 ppm</li>
</ul>
<p>Heavy filtration is essential — piranhas are messy carnivores. Run a canister filter rated for 8–10× turnover plus supplemental aeration. Weekly 30% water changes.</p>

<h2 id="diet-and-feeding">Diet and Feeding</h2>
<p>Feed piranhas a varied diet of raw fish fillets (tilapia, white fish), raw shrimp, earthworms, mussels, and quality carnivore pellets (Hikari Massivore, Northfin Predator). <strong>Do not use live feeder fish</strong> — they carry parasites and disease. Feed every other day for adults; the food should be consumed within 5 minutes. Remove leftovers immediately to maintain water quality.</p>

<h2 id="behaviour">Behaviour in Captivity</h2>
<p>Captive piranhas are surprisingly timid. They startle easily, may hide when approached, and can become stressed by excessive movement near the tank. Confidence comes from numbers — larger schools display more natural behaviour. Aggression within the group (fin-nipping, hierarchical displays) is normal. Ensure each fish has adequate space and sightline breaks to manage conspecific aggression.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Piranhas are best kept in a species-only setup. Some keepers have success with large, armoured plecos (Common Pleco, Sailfin Pleco) as they are too bony for piranhas to bite effectively. However, no tank mate is truly "safe" — piranhas may attack any fish during feeding frenzies or periods of stress.</p>

<h2 id="health">Health Considerations</h2>
<p>Piranhas are generally hardy when water quality is maintained. Common issues include fin damage from conspecific nipping (heals rapidly in clean water), ich (raise temperature to 86 °F), and eye cloudiness from poor water quality. Piranhas can also develop jaw deformities from biting hard décor — use smooth driftwood and avoid sharp rocks.</p>
`,
    faqs: [
      { question: 'Are piranhas legal to own?', answer: 'It depends on your state. Piranhas are illegal in approximately 25 US states including California, Texas, New York, Hawaii, and others. States like Michigan, New Hampshire, and Arizona generally permit ownership. Always verify current state and local regulations before purchasing — laws change, and some municipalities have restrictions beyond state law.' },
      { question: 'Do piranhas actually attack humans?', answer: 'Wild piranhas occasionally bite humans, usually in murky water during dry season when food is scarce. These are typically minor nips, not the frenzied attacks depicted in movies. In captivity, piranhas almost never bite their keepers. That said, they have razor-sharp teeth and can inflict serious cuts — never put your hand in a piranha tank during feeding.' },
      { question: 'How many piranhas should I keep?', answer: 'A minimum of 4 red-bellied piranhas, ideally 6 or more. Piranhas are schooling fish that need group security. Solitary piranhas are chronically stressed and may develop behavioural issues. A group of 6 in a 125-gallon tank is the ideal starting point.' },
      { question: 'Can I keep one piranha alone?', answer: 'Some species like the Black Piranha (Serrasalmus rhombeus) are naturally solitary and must be kept alone. However, the common red-bellied piranha is a schooling species that should never be kept solo — a single specimen will be permanently stressed and may refuse food.' },
    ],
    sources: [
      { title: 'Pygocentrus nattereri (Kner, 1858)', url: 'https://www.fishbase.se/summary/Pygocentrus-nattereri.html', publisher: 'FishBase' },
      { title: 'Piranhas: Ecology and Natural History', url: 'https://www.cambridge.org/piranha-ecology', publisher: 'Cambridge University Press' },
    ],
    relatedSlugs: ['predatory-fish-feeding-guide', 'fish-quarantine-guide', 'water-chemistry-guide'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 49 — Gar Fish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Gar Fish Care Guide',
    slug: 'gar-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'gar',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-28',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/gar-care-guide.jpg',
    heroImageAlt: 'Spotted gar hovering motionless near the surface of a large predator aquarium',
    metaTitle: 'Gar Fish Care Guide | Tank Size, Diet & Species | The Fish Collection',
    metaDescription: 'Complete gar fish care guide — alligator, spotted, and longnose gar. Tank requirements (125–300+ gal), feeding, surface breathing, and long-term care.',
    quickAnswerQuestion: 'How do you care for gar fish?',
    quickAnswer: 'Gar require large tanks — spotted gar need 125+ gallons, alligator gar 300+ gallons or a pond. Temperature 60–80 °F, pH 6.5–8.0. Gar are surface air-breathers requiring access to air above the water line. Feed smelt, silversides, shrimp, and carnivore pellets. They are slow-growing but extremely long-lived, reaching 50+ years for larger species.',
    summary: 'A care guide for gar species (family Lepisosteidae) in the home aquarium and pond, covering alligator gar, spotted gar, longnose gar, and Florida gar. These prehistoric predators require enormous tanks, specialised feeding, and decades of commitment.',
    keyFacts: [
      { label: 'Family', value: 'Lepisosteidae' },
      { label: 'Max Size', value: '60 cm–3 m (varies by species)' },
      { label: 'Minimum Tank', value: '125 gal (spotted) – 300+ gal (alligator)' },
      { label: 'Temperature', value: '60–80 °F (16–27 °C)' },
      { label: 'pH Range', value: '6.5–8.0' },
      { label: 'Care Level', value: 'Advanced' },
      { label: 'Lifespan', value: '15–50+ years' },
      { label: 'Diet', value: 'Carnivore — fish, shrimp, pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'species-comparison', text: 'Species Comparison', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'air-breathing', text: 'Air Breathing', level: 2 },
      { id: 'diet', text: 'Diet and Feeding', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'health', text: 'Health and Longevity', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Gar are among the oldest surviving fish families, with a fossil record dating back 100 million years. Their elongated bodies, hard ganoid scales, and long snouts filled with needle-like teeth give them a distinctly prehistoric appearance. Seven living species exist, four of which are commonly kept: the Spotted Gar, Florida Gar, Longnose Gar, and the massive Alligator Gar.</p>

<h2 id="species-comparison">Species Comparison</h2>
<ul>
<li><strong>Spotted Gar</strong> (Lepisosteus oculatus) — 24–36 in, 125+ gallon tank, most manageable for home aquariums</li>
<li><strong>Florida Gar</strong> (Lepisosteus platyrhincus) — 24–36 in, similar to spotted, endemic to Florida</li>
<li><strong>Longnose Gar</strong> (Lepisosteus osseus) — 36–48 in, 180+ gallons, more elongated snout</li>
<li><strong>Alligator Gar</strong> (Atractosteus spatula) — 6–10 ft in wild, needs pond or 300+ gallon tank, not truly suited for home aquariums</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Gar are surface-dwellers that need long tanks rather than tall ones. A 6-foot-long tank is minimum for spotted gar; 8+ feet for longnose. Avoid sharp décor — gar can injure their elongated snouts. Sand or fine gravel substrate is preferred. A tight lid is essential — gar are powerful leapers. Keep water level 2–3 inches below the rim to allow surface air breathing.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 60–80 °F (gar tolerate a wide range; native to temperate and subtropical waters)</li>
<li><strong>pH:</strong> 6.5–8.0</li>
<li><strong>GH:</strong> 5–20 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 40 ppm</li>
</ul>

<h2 id="air-breathing">Air Breathing</h2>
<p>Gar possess a <strong>vascularised swim bladder</strong> that functions as a primitive lung, allowing them to breathe atmospheric air. In oxygen-depleted water, gar surface to gulp air — this is normal behaviour, not a sign of distress. However, gar <strong>must have access to air above the water surface</strong>. Never fill the tank to the brim or cover the surface completely. Leave at least 2 inches of airspace.</p>

<h2 id="diet">Diet and Feeding</h2>
<p>Gar are ambush predators that strike sideways with their elongated jaws. Feed whole smelt, silversides, shrimp, and raw tilapia fillets. Many gar can be trained to accept carnivore pellets (Hikari Massivore, Northfin Predator) — start training young for best results. Feed juveniles daily, adults every 2–3 days. Avoid live feeder fish due to disease risk.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Gar are surprisingly docile toward fish too large to eat. Compatible tank mates include large catfish (Synodontis, Red Tail Catfish), Bichirs, large cichlids (Oscars, Jack Dempsey), and other gar species. Any fish narrow enough to fit in the gar's snout will eventually be eaten.</p>

<h2 id="health">Health and Longevity</h2>
<p>Gar are remarkably disease-resistant thanks to their ganoid scales and primitive immune system. Their primary captive health risk is snout damage from striking glass walls — provide adequate tank length. Gar grow slowly but live for decades. A spotted gar can live 18+ years; alligator gar exceed 50 years. Commit to long-term care before acquiring these ancient predators.</p>
`,
    faqs: [
      { question: 'Can you keep an alligator gar in a tank?', answer: 'Technically yes, but it is strongly discouraged for all but the most dedicated keepers with 500+ gallon tanks or indoor ponds. Alligator gar can reach 6–10 feet and 200+ pounds in the wild. Even in captivity, they commonly reach 3–4 feet. Most home aquariums simply cannot provide adequate space.' },
      { question: 'Do gar breathe air?', answer: 'Yes. Gar have a vascularised swim bladder that functions as a primitive lung. They periodically surface to gulp air, especially in warm or oxygen-depleted water. You must provide airspace above the water line — never fill a gar tank to the brim.' },
      { question: 'Are gar aggressive?', answer: 'Gar are ambush predators that will eat any fish small enough to swallow, but they are not aggressive toward similarly-sized tank mates. They are generally calm, slow-moving fish that spend much of their time hovering near the surface. Gar rarely show territorial aggression.' },
      { question: 'How fast do gar grow?', answer: 'Gar grow relatively slowly compared to other predator fish. Spotted gar add 3–4 inches per year for the first few years, tapering after reaching 18 inches. Alligator gar grow faster — up to 6 inches per year when young — but still take many years to reach impressive sizes.' },
    ],
    sources: [
      { title: 'Lepisosteidae — Gar Family', url: 'https://www.fishbase.se/summary/FamilySummary.php?ID=34', publisher: 'FishBase' },
      { title: 'Gars: Biology and Culture of Gar Species', url: 'https://fisheries.org/gar-biology/', publisher: 'American Fisheries Society' },
    ],
    relatedSlugs: ['predatory-fish-feeding-guide', 'arowana-tank-setup', 'stingray-tank-setup'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 50 — Freshwater Eel Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Freshwater Eel Care Guide',
    slug: 'eel-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'eel',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-29',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/eel-care-guide.jpg',
    heroImageAlt: 'Fire eel partially buried in fine sand substrate with its distinctive orange markings visible',
    metaTitle: 'Freshwater Eel Care Guide | Tank Setup & Feeding | The Fish Collection',
    metaDescription: 'Complete freshwater eel care guide — fire eel, tire track eel, peacock eel. Tank setup, sand substrate, escape prevention, and feeding tips.',
    quickAnswerQuestion: 'How do you care for freshwater eels?',
    quickAnswer: 'Freshwater eels (spiny eels) need a tank of 55–125+ gallons depending on species, fine sand substrate for burrowing, secure lid with every gap sealed, temperature 75–82 °F, and pH 6.5–7.5. They are nocturnal carnivores that eat bloodworms, earthworms, and shrimp. Eels are notorious escape artists — any opening larger than their head is a potential exit.',
    summary: 'A practical care guide for popular freshwater eel species — fire eel, tire track eel, peacock eel, and other spiny eels (family Mastacembelidae). Covers tank setup, substrate requirements, escape-proofing, feeding nocturnal carnivores, and species-specific care differences.',
    keyFacts: [
      { label: 'Family', value: 'Mastacembelidae (Spiny Eels)' },
      { label: 'Max Size', value: '20–100 cm (varies by species)' },
      { label: 'Minimum Tank', value: '55 gal (peacock) – 125+ gal (fire eel)' },
      { label: 'Temperature', value: '75–82 °F (24–28 °C)' },
      { label: 'pH Range', value: '6.5–7.5' },
      { label: 'Care Level', value: 'Intermediate–Advanced' },
      { label: 'Lifespan', value: '8–18 years' },
      { label: 'Diet', value: 'Carnivore — live and frozen foods' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'popular-species', text: 'Popular Species', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'escape-prevention', text: 'Escape Prevention', level: 3 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'feeding', text: 'Feeding', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'health', text: 'Health Considerations', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Freshwater "eels" in the aquarium hobby are primarily spiny eels (family Mastacembelidae) — elongated, snake-like fish with pointed snouts and a row of small spines preceding the dorsal fin. True eels (Anguilliformes) are rarely kept. Spiny eels are native to Africa and Asia, are primarily nocturnal, and spend much of the day buried in substrate with only their heads protruding.</p>

<h2 id="popular-species">Popular Species</h2>
<ul>
<li><strong>Fire Eel</strong> (Mastacembelus erythrotaenia) — grows to 40 in, needs 125+ gallons, most impressive species with orange-red markings</li>
<li><strong>Tire Track Eel</strong> (Mastacembelus armatus) — grows to 28 in, 75+ gallons, distinctive zigzag markings</li>
<li><strong>Peacock Eel</strong> (Macrognathus siamensis) — grows to 12 in, 55+ gallons, smallest and most beginner-friendly</li>
<li><strong>Half-Banded Spiny Eel</strong> (Macrognathus circumcinctus) — 8 in, 30+ gallons, good for smaller setups</li>
</ul>

<h2 id="tank-setup">Tank Setup</h2>
<p>The single most critical requirement is <strong>fine sand substrate</strong>. Spiny eels burrow constantly — gravel can damage their delicate skin and cause infections. Use play sand or pool filter sand at a depth of 2–3 inches. Provide PVC pipes, driftwood caves, and dense plants (real or artificial) for additional hiding spots. Keep lighting dim — eels are most active under subdued light or moonlight.</p>
<h3 id="escape-prevention">Escape Prevention</h3>
<p>Eels are <strong>legendary escape artists</strong>. Any gap in the tank lid larger than the eel's head diameter is a potential exit. Seal around filter intakes, airline tubing holes, and heater cord cutouts with foam, filter floss, or custom-cut acrylic. Use a weighted glass or acrylic lid rather than a screen top. Check for escapees first thing every morning if you have a new eel — the first week is highest risk.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 75–82 °F (24–28 °C)</li>
<li><strong>pH:</strong> 6.5–7.5</li>
<li><strong>GH:</strong> 5–15 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 20 ppm — eels are scaleless and sensitive to poor water quality</li>
</ul>

<h2 id="feeding">Feeding</h2>
<p>Eels are obligate carnivores. The best foods are live or frozen bloodworms, earthworms, blackworms, brine shrimp, and small pieces of raw shrimp. Fire eels and tire track eels can eventually be trained to take carnivore pellets, but this requires patience — start by mixing pellets with familiar live foods. Feed at night (lights off) using a feeding dish or target feeding with tweezers near the eel's hiding spot.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Eels are peaceful toward fish too large to eat. Good companions include medium to large tetras (Congo, Buenos Aires), Rainbowfish, Corydoras (for peacock eels), Angels, and Gouramis. Avoid small fish (neon tetras, guppies), aggressive cichlids that might nip, and bottom-dwelling fish that compete for hiding spots. Other eels of similar size can coexist with adequate space and hiding spots.</p>

<h2 id="health">Health Considerations</h2>
<p>Eels are scaleless and therefore <strong>sensitive to medications</strong>. Use half-dose for copper and formalin-based treatments. Common issues include bacterial skin infections from substrate abrasion (always use sand, never gravel), weight loss from inadequate feeding (eels need target-fed if in community tanks), and ich (treat with heat + salt rather than copper). Eels are also sensitive to salt — avoid concentrations above 0.1% for extended periods.</p>
`,
    faqs: [
      { question: 'Why does my eel hide all day?', answer: 'This is completely normal. Freshwater eels are nocturnal and spend the day buried in sand or hiding in caves. They become active at dusk and hunt throughout the night. After settling in (which can take 2–4 weeks), most eels will learn to emerge during feeding time even with lights on.' },
      { question: 'Can eels escape a covered tank?', answer: 'Yes, easily. Eels can fit through remarkably small gaps — any opening larger than their head is an escape route. They can push through loose-fitting lids, climb filter intake tubes, and squeeze around heater cord cutouts. Seal every gap with foam or custom-cut covers.' },
      { question: 'Do freshwater eels bite?', answer: 'Spiny eels have small teeth designed for grasping invertebrates, not for biting in defense. Large fire eels can give a pinch if hand-fed, but it is mild. They are not aggressive toward keepers. However, their dorsal spines can prick your hand during netting — always use a container rather than a net to move eels.' },
      { question: 'Can I use gravel with eels?', answer: 'No. Gravel is the leading cause of skin infections and death in captive spiny eels. They burrow constantly, and sharp gravel edges abrade their scaleless skin, creating entry points for bacterial and fungal infections. Fine sand (play sand, pool filter sand) is mandatory.' },
    ],
    sources: [
      { title: 'Mastacembelidae — Spiny Eels', url: 'https://www.fishbase.se/summary/FamilySummary.php?ID=410', publisher: 'FishBase' },
      { title: 'Keeping Spiny Eels in the Aquarium', url: 'https://www.seriouslyfish.com/articles/spiny-eels/', publisher: 'Seriously Fish' },
    ],
    relatedSlugs: ['predatory-fish-feeding-guide', 'aquarium-filter-guide', 'fish-disease-prevention'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 51 — Barb Fish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Barb Fish Care Guide',
    slug: 'barb-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'barb',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-29',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/barb-care-guide.jpg',
    heroImageAlt: 'School of Denison barbs displaying their vivid red lateral stripe in a planted aquarium',
    metaTitle: 'Barb Fish Care Guide | Species, Tank Setup & Schooling | The Fish Collection',
    metaDescription: 'Complete barb care guide — tiger barb, Denison barb, cherry barb. Schooling requirements, tank setup, and how to prevent fin-nipping.',
    quickAnswerQuestion: 'How do you care for barb fish?',
    quickAnswer: 'Barbs are active schooling fish that need groups of 6 or more to reduce fin-nipping. Tank size ranges from 20 gallons (cherry barb) to 55+ gallons (Denison barb). Temperature 72–79 °F, pH 6.0–7.5. Feed a mix of quality flake, pellet, and frozen foods. Provide moderate water flow and horizontal swimming space — barbs are constant swimmers.',
    summary: 'A guide to keeping barb species in the home aquarium — from the popular Tiger Barb to the striking Denison Barb (Roseline Shark). Covers schooling behaviour, tank size by species, feeding, fin-nipping prevention, and compatible tank mates.',
    keyFacts: [
      { label: 'Family', value: 'Cyprinidae' },
      { label: 'Max Size', value: '3–15 cm (varies by species)' },
      { label: 'Minimum Tank', value: '20–55+ gallons (species dependent)' },
      { label: 'Temperature', value: '72–79 °F (22–26 °C)' },
      { label: 'pH Range', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Beginner–Intermediate' },
      { label: 'Lifespan', value: '5–8 years' },
      { label: 'Diet', value: 'Omnivore — flake, pellet, frozen, live' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'popular-species', text: 'Popular Species', level: 2 },
      { id: 'schooling', text: 'Schooling Requirements', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'feeding', text: 'Feeding', level: 2 },
      { id: 'fin-nipping', text: 'Preventing Fin-Nipping', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Barbs are a diverse group of cyprinid fish native to Asia and Africa. They are among the most active, colourful, and entertaining freshwater aquarium fish. Barbs range from the 1.5-inch Cherry Barb to the 6-inch Denison Barb, but all share key traits: schooling behaviour, omnivorous appetites, and high energy levels. When kept properly in large enough groups, barbs are hardy, long-lived community fish.</p>

<h2 id="popular-species">Popular Species</h2>
<ul>
<li><strong>Tiger Barb</strong> (Puntigrus tetrazona) — 3 in, 30+ gallons, notorious fin-nipper if kept in small groups</li>
<li><strong>Denison Barb / Roseline Shark</strong> (Sahyadria denisonii) — 6 in, 55+ gallons, stunning red stripe, IUCN Endangered</li>
<li><strong>Cherry Barb</strong> (Puntius titteya) — 2 in, 20+ gallons, peaceful and beginner-friendly</li>
<li><strong>Rosy Barb</strong> (Pethia conchonius) — 4 in, 30+ gallons, cold-tolerant, males develop pink-red colouration</li>
<li><strong>Odessa Barb</strong> (Pethia padamya) — 3 in, 30+ gallons, males show vivid red band</li>
</ul>

<h2 id="schooling">Schooling Requirements</h2>
<p>All barbs must be kept in groups of <strong>6 or more</strong> — ideally 8–12 for Tiger Barbs. Small groups amplify hierarchical aggression, causing fin-nipping of both conspecifics and tank mates. A proper school establishes a clear pecking order and directs energy into within-group dynamics rather than harassing other species.</p>

<h2 id="tank-setup">Tank Setup</h2>
<p>Barbs are constant horizontal swimmers. Prioritise tank length over height — a standard 4-foot tank (55 gallons) is ideal for most species. Provide moderate to strong water flow via a powerhead or filter return — barbs are riverine fish that enjoy swimming against current. Plant the sides and back, leaving open swimming space in the centre and front.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 72–79 °F (most species; Rosy Barbs tolerate 64–72 °F)</li>
<li><strong>pH:</strong> 6.0–7.5</li>
<li><strong>GH:</strong> 4–15 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 20 ppm</li>
</ul>

<h2 id="feeding">Feeding</h2>
<p>Barbs are unfussy omnivores. A staple of quality flake or micro-pellet supplemented with frozen bloodworms, brine shrimp, daphnia, and blanched vegetables covers all nutritional needs. Feed 2–3 times daily in small amounts. Barbs feed aggressively and eat quickly — ensure slower tank mates have access to food.</p>

<h2 id="fin-nipping">Preventing Fin-Nipping</h2>
<p>Tiger Barbs in particular are notorious fin-nippers. Prevention strategies:</p>
<ul>
<li>Keep groups of <strong>8+ Tiger Barbs</strong> — larger schools dramatically reduce outward aggression</li>
<li>Avoid slow-moving, long-finned tank mates (angelfish, bettas, gouramis)</li>
<li>Provide adequate tank space — overcrowding increases stress and nipping</li>
<li>Maintain water flow — active swimming reduces boredom-based nipping</li>
</ul>

<h2 id="tank-mates">Tank Mates</h2>
<p>Compatible tank mates include Corydoras, Plecos, Rainbowfish, larger Tetras (Congo, Serpae), Loaches, and other barb species. Avoid long-finned fish (bettas, fancy guppies, angelfish), very small fish (neon tetras with Tiger Barbs), and slow-moving species. Cherry Barbs are the most community-friendly barb and can be kept with virtually any peaceful species.</p>
`,
    faqs: [
      { question: 'Do barbs nip fins?', answer: 'Some species — particularly Tiger Barbs — are known fin-nippers when kept in insufficient numbers. A group of 3–4 Tiger Barbs will harass any long-finned tank mate. A school of 8+ directs this energy into within-group hierarchy, dramatically reducing nipping. Cherry Barbs and Rosy Barbs are much less prone to nipping.' },
      { question: 'How many barbs should I keep?', answer: 'Minimum 6, ideally 8–12. Barbs are schooling fish that need group dynamics to feel secure and behave naturally. Larger schools produce more natural behaviour, better colouration, and less aggression toward other species.' },
      { question: 'Are Denison Barbs endangered?', answer: 'Yes. The Denison Barb (Sahyadria denisonii) is classified as Endangered on the IUCN Red List due to overcollection for the aquarium trade and habitat loss in its native Western Ghats (Kerala, India). Always purchase captive-bred specimens from responsible dealers. Export from India is now regulated.' },
      { question: 'Can barbs live with bettas?', answer: 'Not recommended. Most barb species are too active and nippy for bettas. Tiger Barbs will shred a betta\'s fins. Cherry Barbs are the only exception — they are peaceful enough for a betta community, but the betta should be female or a placid male, and the tank should be 30+ gallons with plenty of plants.' },
    ],
    sources: [
      { title: 'Sahyadria denisonii (Day, 1865)', url: 'https://www.fishbase.se/summary/Sahyadria-denisonii.html', publisher: 'FishBase' },
      { title: 'Tiger Barb Care and Behaviour', url: 'https://www.seriouslyfish.com/species/puntigrus-tetrazona/', publisher: 'Seriously Fish' },
    ],
    relatedSlugs: ['cichlid-tank-mates', 'betta-tank-mates', 'water-chemistry-guide', 'aquarium-filter-guide'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 52 — Loach Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Loach Care Guide',
    slug: 'loach-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'loach',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-30',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/loach-care-guide.jpg',
    heroImageAlt: 'Group of clown loaches displaying their bright orange and black bands on sandy substrate',
    metaTitle: 'Loach Care Guide | Clown, Kuhli & Dojo Loach | The Fish Collection',
    metaDescription: 'Complete loach care guide — clown loach, kuhli loach, dojo loach. Social needs, sand substrate, feeding bottom dwellers, and tank mates.',
    quickAnswerQuestion: 'How do you care for loaches?',
    quickAnswer: 'Loaches are social bottom-dwellers needing groups of 5–6+, sand substrate, and hiding caves. Clown loaches need 125+ gallons (they grow to 12 in), kuhli loaches 20+ gallons, and dojo loaches 55+ gallons. Temperature varies by species (65–82 °F). Feed sinking pellets, wafers, frozen bloodworms, and blanched vegetables at night.',
    summary: 'A care guide covering the most popular loach species — clown loach, kuhli loach, dojo/weather loach, and yoyo loach. Covers their strong social needs, substrate requirements, feeding strategies for bottom-dwelling fish, and common health issues including ich susceptibility.',
    keyFacts: [
      { label: 'Families', value: 'Botiidae, Cobitidae, others' },
      { label: 'Max Size', value: '8–30 cm (varies by species)' },
      { label: 'Minimum Tank', value: '20–125+ gal (species dependent)' },
      { label: 'Temperature', value: '65–82 °F (varies)' },
      { label: 'pH Range', value: '6.0–7.5' },
      { label: 'Care Level', value: 'Beginner–Intermediate' },
      { label: 'Lifespan', value: '10–20+ years (clown loach)' },
      { label: 'Diet', value: 'Omnivore — sinking foods, frozen, vegetables' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'popular-species', text: 'Popular Species', level: 2 },
      { id: 'social-needs', text: 'Social Needs', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'feeding', text: 'Feeding', level: 2 },
      { id: 'health', text: 'Health — Ich Susceptibility', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Loaches are a diverse group of bottom-dwelling fish found across Asia and Europe. They are beloved for their personality, social behaviour, and utility as substrate cleaners and snail controllers. Most loaches are nocturnal or crepuscular and appreciate dimly lit tanks with plenty of hiding spots. Their most charming trait is their social nature — many species "cuddle" in piles and engage in playful group behaviour.</p>

<h2 id="popular-species">Popular Species</h2>
<ul>
<li><strong>Clown Loach</strong> (Chromobotia macracanthus) — grows to 12 in (slowly), needs 125+ gallons, iconic orange and black bands, 20+ year lifespan</li>
<li><strong>Kuhli Loach</strong> (Pangio kuhlii) — 4 in, 20+ gallons, eel-like body, extremely shy, needs sand substrate for burrowing</li>
<li><strong>Dojo/Weather Loach</strong> (Misgurnus anguillicaudatus) — 10 in, 55+ gallons, cold-tolerant (60–75 °F), very personable</li>
<li><strong>Yoyo Loach</strong> (Botia almorhae) — 6 in, 40+ gallons, active and boisterous, excellent snail control</li>
<li><strong>Hillstream Loach</strong> (Sewellia, Gastromyzon) — 3 in, 20+ gallons, needs high-flow cold water, algae grazer</li>
</ul>

<h2 id="social-needs">Social Needs</h2>
<p>Almost all loaches are <strong>obligate social fish</strong> — keeping fewer than 5 causes chronic stress, loss of colour, hiding, and shortened lifespan. Clown loaches need a group of 5–6 minimum; kuhli loaches should be kept in groups of 6–8+. A solitary loach is a stressed loach. This social requirement must factor into your tank size planning.</p>

<h2 id="tank-setup">Tank Setup</h2>
<p>Fine sand substrate is strongly preferred — loaches sift through substrate searching for food, and gravel can damage their delicate barbels. Provide abundant hiding spots: caves, PVC pipes, driftwood tangles, and dense plants. Loaches are most active under dim lighting. Many species appreciate moderate to strong water flow.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Clown/Yoyo Loach:</strong> 77–82 °F, pH 6.0–7.0, soft water</li>
<li><strong>Kuhli Loach:</strong> 75–82 °F, pH 5.5–7.0, soft acidic water</li>
<li><strong>Dojo Loach:</strong> 60–75 °F, pH 6.5–8.0, tolerates wide range</li>
<li><strong>Hillstream Loach:</strong> 65–75 °F, pH 6.5–7.5, high oxygen and flow</li>
</ul>

<h2 id="feeding">Feeding</h2>
<p>Loaches eat at the bottom, often at night. Feed sinking foods: algae wafers, shrimp pellets, sinking carnivore pellets, and blanched vegetables (zucchini, cucumber). Supplement with frozen bloodworms, brine shrimp, and live blackworms. Clown loaches and yoyo loaches are voracious snail eaters — an effective biological control for pest snails.</p>

<h2 id="health">Health — Ich Susceptibility</h2>
<p>Loaches — particularly clown loaches — are <strong>highly susceptible to ich</strong> and often the first fish in a tank to show symptoms. They are also scaleless or have very fine scales, making them sensitive to medications. Treat ich in loach tanks with elevated temperature (86 °F for 10 days) combined with aquarium salt at 1 tablespoon per 5 gallons. Use half-dose for copper and formalin treatments. Prevention through quarantine is far preferable to treatment.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Loaches are peaceful and compatible with most community fish: tetras, rasboras, barbs, gouramis, corydoras, and non-aggressive cichlids (rams, Apistogramma). Avoid aggressive bottom-dwellers that compete for territory. Clown loaches are large enough to coexist with medium cichlids and Angels. Kuhli loaches are best with small, peaceful community fish.</p>
`,
    faqs: [
      { question: 'How big do clown loaches get?', answer: 'Clown loaches can reach 12 inches (30 cm) but grow very slowly in aquariums — typically adding 1–2 inches per year. Many clown loaches in home tanks reach 6–8 inches over several years. Their slow growth misleads people into buying them for small tanks. Plan for their adult size and 20+ year lifespan from the start.' },
      { question: 'Why does my loach play dead?', answer: 'Many loach species — especially clown loaches — rest on their sides or in odd positions that mimic death. This is completely normal "loach behaviour." If the fish responds to movement or feeding, it is fine. However, if a loach is genuinely lethargic and does not respond, check water parameters immediately.' },
      { question: 'Do loaches eat snails?', answer: 'Yes — clown loaches, yoyo loaches, and Dwarf Chain Loaches are excellent snail predators. They crack snail shells with their pharyngeal teeth. A group of yoyo loaches can eliminate a pest snail population in weeks. However, if you want to keep ornamental snails (Nerites, Mystery snails), do not add these loach species.' },
      { question: 'Can kuhli loaches live with bettas?', answer: 'Yes, kuhli loaches make excellent betta tank mates. They occupy different zones (bottom vs mid/top), are non-aggressive, and their nocturnal schedule minimises interaction. Ensure the tank is at least 20 gallons, has sand substrate, and plenty of hiding spots for the kuhlis.' },
    ],
    sources: [
      { title: 'Chromobotia macracanthus (Bleeker, 1852)', url: 'https://www.fishbase.se/summary/Chromobotia-macracanthus.html', publisher: 'FishBase' },
      { title: 'Loaches of the World', url: 'https://www.loaches.com/', publisher: 'Loaches Online' },
    ],
    relatedSlugs: ['betta-tank-mates', 'ich-treatment-guide', 'aquarium-filter-guide', 'water-chemistry-guide'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 53 — Tang Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Marine Tang Care Guide',
    slug: 'tang-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'tang',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-30',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/tang-care-guide.jpg',
    heroImageAlt: 'Gem tang with vivid black body and white spots in a coral reef aquarium',
    metaTitle: 'Marine Tang Care Guide | Gem, Yellow & Blue Tang | The Fish Collection',
    metaDescription: 'Complete marine tang care guide — tank size, diet, ich prevention, and species selection for surgeonfish (Acanthuridae) in reef aquariums.',
    quickAnswerQuestion: 'How do you care for marine tangs?',
    quickAnswer: 'Tangs need large marine aquariums (75–180+ gallons depending on species), stable water parameters (76–80 °F, pH 8.1–8.4, SG 1.024–1.026), and a diet heavy in marine algae and nori sheets supplemented with frozen mysis and quality pellets. Tangs are highly susceptible to ich — quarantine all new tangs for 6+ weeks and maintain excellent water quality.',
    summary: 'A care guide for marine tangs (surgeonfish, family Acanthuridae) — one of the most popular and challenging groups in the saltwater hobby. Covers the most commonly kept species, tank size requirements, the critical importance of algae-based diets, and ich prevention strategies.',
    keyFacts: [
      { label: 'Family', value: 'Acanthuridae (Surgeonfish)' },
      { label: 'Max Size', value: '15–40 cm (varies by species)' },
      { label: 'Minimum Tank', value: '75–180+ gal (species dependent)' },
      { label: 'Temperature', value: '76–80 °F (24–27 °C)' },
      { label: 'Salinity', value: 'SG 1.024–1.026 (35 ppt)' },
      { label: 'Care Level', value: 'Intermediate–Advanced' },
      { label: 'Lifespan', value: '8–20+ years' },
      { label: 'Diet', value: 'Herbivore — algae, nori, supplemented with protein' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'popular-species', text: 'Popular Species', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'diet', text: 'Diet — The Algae Imperative', level: 2 },
      { id: 'ich-prevention', text: 'Ich Prevention', level: 2 },
      { id: 'compatibility', text: 'Compatibility', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Tangs (surgeonfish) are among the most iconic marine aquarium fish, prized for their vivid colours, active swimming behaviour, and algae-grazing utility in reef tanks. The name "surgeonfish" comes from the scalpel-like spines on each side of the tail base, used for defense. With over 80 species across 6 genera, tangs range from the 6-inch Kole Tang to the 16-inch Naso Tang.</p>

<h2 id="popular-species">Popular Species</h2>
<ul>
<li><strong>Yellow Tang</strong> (Zebrasoma flavescens) — 8 in, 75+ gallons, the most popular tang, bright yellow</li>
<li><strong>Blue Hippo Tang</strong> (Paracanthurus hepatus) — 12 in, 125+ gallons, "Dory" from Finding Nemo</li>
<li><strong>Gem Tang</strong> (Zebrasoma gemmatum) — 8 in, 75+ gallons, ultra-rare, $800+, black with white spots</li>
<li><strong>Powder Blue Tang</strong> (Acanthurus leucosternon) — 9 in, 125+ gallons, stunning but ich-prone</li>
<li><strong>Kole Tang</strong> (Ctenochaetus strigosus) — 6 in, 75+ gallons, excellent algae grazer, more peaceful</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Tangs are active, open-water swimmers that need <strong>long tanks with strong flow</strong>. The "tang police" meme exists for a reason — these fish truly need space. A 75-gallon (4-foot) tank is the absolute minimum for smaller Zebrasoma species. Larger tangs (Blue Hippo, Naso, Sohal) need 125–180+ gallons. Provide excellent water circulation (20–40× turnover), live rock for grazing and shelter, and a mature, stable system.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 76–80 °F</li>
<li><strong>pH:</strong> 8.1–8.4</li>
<li><strong>Salinity:</strong> SG 1.024–1.026</li>
<li><strong>Alkalinity:</strong> 8–12 dKH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 10 ppm</li>
</ul>
<p>Stability is paramount. Tangs are stressed by parameter swings — use an ATO (auto top-off) and dose alkalinity/calcium consistently.</p>

<h2 id="diet">Diet — The Algae Imperative</h2>
<p>Tangs are primarily herbivores. A diet lacking in marine algae leads to HLLE (Head and Lateral Line Erosion), nutritional deficiency, and weakened immune response. Feed:</p>
<ul>
<li><strong>Nori sheets</strong> (dried seaweed) — clip to the glass daily, the dietary cornerstone</li>
<li><strong>Frozen preparations</strong> with Spirulina and algae (Rod's Food, LRS)</li>
<li><strong>Mysis shrimp and brine shrimp</strong> — for protein supplementation</li>
<li><strong>Quality pellets</strong> (New Life Spectrum, TDO) — soaked in Selcon or vitamins</li>
</ul>
<p>Tangs should eat multiple times daily — they graze constantly on reefs and cannot thrive on once-daily feeding.</p>

<h2 id="ich-prevention">Ich Prevention</h2>
<p>Tangs are the <strong>most ich-susceptible family</strong> in the marine hobby. Marine ich (Cryptocaryon irritans) is often called "tang disease" for this reason. Prevention is critical:</p>
<ul>
<li><strong>Quarantine all new tangs</strong> for 6–8 weeks in a separate system with prophylactic copper treatment</li>
<li>Maintain stable temperature — even 1–2 °F swings can trigger an outbreak</li>
<li>Feed heavily with vitamin-enriched foods to support immune function</li>
<li>Run a UV steriliser on the display as an additional layer of protection</li>
</ul>

<h2 id="compatibility">Compatibility</h2>
<p>Most tangs are aggressive toward other tangs, especially of the same genus. The general rule: one tang per genus unless the tank is very large (200+ gallons). Tangs coexist well with clownfish, wrasses, gobies, blennies, angels, and most reef invertebrates. Avoid keeping multiple Zebrasoma species together in tanks under 150 gallons.</p>
`,
    faqs: [
      { question: 'Can I keep a tang in a 55-gallon tank?', answer: 'No. Even the smallest tangs (Kole, Tomini) need a minimum 75-gallon tank due to their active swimming behaviour and territorial nature. Larger species need 125–180+ gallons. Keeping tangs in undersized tanks leads to stress, aggression, stunted growth, and disease susceptibility.' },
      { question: 'Why do tangs get ich so easily?', answer: 'Tangs have a thin mucus coat and are highly stress-sensitive, making them particularly vulnerable to Cryptocaryon irritans (marine ich). Temperature fluctuations, poor water quality, shipping stress, and dietary deficiency all lower their immune response. Quarantine and prophylactic treatment before display introduction is essential.' },
      { question: 'Can I keep multiple tangs together?', answer: 'Yes, in large enough tanks (200+ gallons) with careful species selection. Avoid mixing tangs of the same genus (e.g., two Zebrasoma). Different genera (one Zebrasoma, one Acanthurus, one Ctenochaetus) coexist much better. Add all tangs simultaneously to prevent territorial establishment.' },
    ],
    sources: [
      { title: 'Acanthuridae — Surgeonfish', url: 'https://www.fishbase.se/summary/FamilySummary.php?ID=412', publisher: 'FishBase' },
      { title: 'Marine Ich: Understanding and Treating Cryptocaryon', url: 'https://www.reef2reef.com/threads/ich-treatment.123456/', publisher: 'Reef2Reef' },
    ],
    relatedSlugs: ['aquarium-filter-guide', 'aquarium-lighting-guide', 'fish-quarantine-guide', 'ich-treatment-guide'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 54 — Freshwater Stingray Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Freshwater Stingray Care Guide',
    slug: 'stingray-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'stingray',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-03-31',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/stingray-care-guide.jpg',
    heroImageAlt: 'Freshwater polka-dot stingray resting on fine sand in a spacious aquarium',
    metaTitle: 'Freshwater Stingray Care Guide | Water, Feeding & Handling | The Fish Collection',
    metaDescription: 'Complete freshwater stingray care guide — Potamotrygon species. Tank size, water quality, feeding, safe handling, and venomous barb precautions.',
    quickAnswerQuestion: 'How do you care for freshwater stingrays?',
    quickAnswer: 'Freshwater stingrays (Potamotrygon) need a minimum 180-gallon tank with fine sand substrate, pristine water (temp 78–82 °F, pH 6.0–7.0, near-zero nitrate), and 2–3 feedings daily of earthworms, shrimp, smelt, and quality pellets. They are demanding fish that require daily water testing, excellent filtration, and careful handling due to their venomous tail barb.',
    summary: 'An expert-level care guide for freshwater stingrays (genus Potamotrygon), covering the complete husbandry requirements for these demanding but rewarding aquarium specimens — from water chemistry and feeding protocols to safe handling and legal considerations.',
    keyFacts: [
      { label: 'Genus', value: 'Potamotrygon' },
      { label: 'Max Disc Width', value: '30–60 cm (species dependent)' },
      { label: 'Minimum Tank', value: '180 gallons (680 L)' },
      { label: 'Temperature', value: '78–82 °F (26–28 °C)' },
      { label: 'pH Range', value: '6.0–7.0' },
      { label: 'Care Level', value: 'Expert' },
      { label: 'Lifespan', value: '15–20 years' },
      { label: 'Diet', value: 'Carnivore — earthworms, shrimp, fish, pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-quality', text: 'Water Quality', level: 2 },
      { id: 'feeding', text: 'Feeding', level: 2 },
      { id: 'handling-safety', text: 'Handling and Safety', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'legality', text: 'Legal Considerations', level: 2 },
      { id: 'health', text: 'Health Issues', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Freshwater stingrays (genus Potamotrygon) are native to South American river systems — the Amazon, Orinoco, Paraná, and their tributaries. They are among the most impressive and demanding freshwater aquarium fish, combining striking disc patterns with genuine danger from their venomous caudal barb. Popular species include P. motoro (Ocellate River Stingray), P. leopoldi (Black Diamond/Polka Dot), and P. henlei (Bigtooth).</p>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Stingrays need <strong>floor space, not height</strong>. A 180-gallon tank (72 × 24 × 24 in) is the minimum for a single juvenile; adults need 240+ gallons. Use fine sand substrate — stingrays bury themselves and coarse substrate damages their ventral surface. Keep décor minimal and avoid sharp objects. A bare-bottom tank with sand patches is used by many experienced keepers for ease of cleaning.</p>

<h2 id="water-quality">Water Quality</h2>
<p>This is where stingray keeping gets demanding. Stingrays are <strong>extremely sensitive to ammonia, nitrite, and nitrate</strong>:</p>
<ul>
<li><strong>Temperature:</strong> 78–82 °F (26–28 °C)</li>
<li><strong>pH:</strong> 6.0–7.0 (soft, acidic water)</li>
<li><strong>GH:</strong> 1–8 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> Absolutely 0 ppm — even trace amounts cause disc curling ("the death curl")</li>
<li><strong>Nitrate:</strong> Below 10 ppm — ideally below 5 ppm</li>
</ul>
<p>Use a sump rated for 10× turnover, R/O water remineralised to target, and perform 25–30% water changes twice weekly. Daily water testing is standard practice for stingray keepers.</p>

<h2 id="feeding">Feeding</h2>
<p>Stingrays have high metabolic rates and need 2–3 feedings per day. Staple foods: live or frozen earthworms (nightcrawlers), raw shrimp (shell-on for juveniles, peeled for adults), smelt, tilapia fillet, and mussels. Trained stingrays accept Hikari Massivore pellets and Repashy gel food. Young stingrays that refuse food for more than 3 days are at serious risk — starvation is a leading cause of juvenile mortality.</p>

<h2 id="handling-safety">Handling and Safety</h2>
<p>Freshwater stingrays possess a <strong>venomous serrated barb</strong> on the tail that delivers an excruciating sting. The venom causes intense pain, swelling, and tissue necrosis. First aid: immerse the wound in hot water (110–115 °F) for 30–90 minutes to denature the protein-based venom. Seek medical attention for severe stings. Never reach into a stingray tank without first locating the ray. Use a container — never a net — when moving stingrays.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Stingrays can coexist with large, peaceful upper-water fish: arowana, large silver dollars, Bichirs, and peaceful catfish. Avoid aggressive cichlids (they nip ray discs), plecos (they rasp on ray slime coats at night), and any fish small enough to be eaten. Many keepers maintain species-only stingray tanks for simplicity.</p>

<h2 id="legality">Legal Considerations</h2>
<p>Freshwater stingray ownership is restricted or banned in several US states, including Arizona, Arkansas, California, Georgia, Hawaii, Mississippi, Nevada, Oklahoma, Texas, and Utah. Check your state regulations before purchasing. Import of certain Potamotrygon species from Brazil is also restricted under Brazilian export law.</p>

<h2 id="health">Health Issues</h2>
<p>The most critical health indicator is disc shape — a flat, round disc indicates health; curled or cupped disc edges ("death curl") signal ammonia exposure, infection, or severe stress. Other issues include parasites (treat with praziquantel), bacterial infections on the ventral surface from substrate abrasion, and barb infections. Stingrays are sensitive to most medications — consult a specialist before treating.</p>
`,
    faqs: [
      { question: 'Are freshwater stingrays dangerous?', answer: 'Yes. All Potamotrygon species possess a venomous caudal barb that delivers an extremely painful sting. The venom causes intense localised pain, swelling, and potential tissue necrosis. While stingrays are not aggressive and stings are accidental (usually from stepping or reaching), they must be handled with caution and respect at all times.' },
      { question: 'How much does a freshwater stingray cost?', answer: 'Prices range widely by species and size. Common P. motoro juveniles start at $200–$400. P. leopoldi (Polka Dot/Black Diamond) range from $1,500–$10,000+. Rare hybrid morphs and large adults can exceed $50,000. Factor in the cost of a 180+ gallon setup, sump, R/O system, and ongoing feeding — total startup costs often exceed $5,000.' },
      { question: 'Can I keep a stingray in a 75-gallon tank?', answer: 'No. Even the smallest Potamotrygon species need 180+ gallons due to their disc width and floor space requirements. A 75-gallon tank does not provide adequate turning radius or water volume for stingray waste production. Undersized tanks lead to disc curling, stunted growth, and death.' },
      { question: 'Why is my stingray curling its disc?', answer: 'Disc curling ("the death curl") is an emergency sign indicating ammonia/nitrite exposure, extreme stress, or systemic infection. Test water immediately. If ammonia or nitrite is detectable, perform a 50% water change with temperature-matched R/O water. If water is clean, suspect parasitic or bacterial infection and consult a stingray specialist.' },
    ],
    sources: [
      { title: 'Potamotrygon motoro (Müller & Henle, 1841)', url: 'https://www.fishbase.se/summary/Potamotrygon-motoro.html', publisher: 'FishBase' },
      { title: 'Freshwater Stingrays: Biology and Conservation', url: 'https://www.cambridge.org/stingray-biology', publisher: 'Cambridge University Press' },
    ],
    relatedSlugs: ['stingray-tank-setup', 'water-chemistry-guide', 'predatory-fish-feeding-guide', 'arowana-tank-setup'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 55 — Knife Fish Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Knife Fish Care Guide',
    slug: 'knife-fish-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'knife-fish',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/knife-fish-care-guide.jpg',
    heroImageAlt: 'Black ghost knife fish gliding through a dimly lit planted aquarium',
    metaTitle: 'Knife Fish Care Guide | Black Ghost, Clown & African Knife | The Fish Collection',
    metaDescription: 'Complete knife fish care guide — black ghost, clown, and African knife fish. Nocturnal care, electrolocation, feeding, and tank setup.',
    quickAnswerQuestion: 'How do you care for knife fish?',
    quickAnswer: 'Knife fish are nocturnal predators needing 55–125+ gallons (species dependent), temperature 75–82 °F, pH 6.0–7.0, and subdued lighting with plenty of hiding spots. They generate weak electric fields for navigation and are sensitive to water quality. Feed frozen bloodworms, earthworms, and shrimp — most can be trained to accept pellets.',
    summary: 'A care guide for the most popular knife fish species in the freshwater hobby — Black Ghost Knife, Clown Knife, and African Knife Fish. Covers their unique electrolocation abilities, nocturnal behaviour, feeding strategies, and compatibility.',
    keyFacts: [
      { label: 'Families', value: 'Apteronotidae, Notopteridae' },
      { label: 'Max Size', value: '20–100 cm (varies by species)' },
      { label: 'Minimum Tank', value: '55–125+ gal (species dependent)' },
      { label: 'Temperature', value: '75–82 °F (24–28 °C)' },
      { label: 'pH Range', value: '6.0–7.0' },
      { label: 'Care Level', value: 'Intermediate–Advanced' },
      { label: 'Lifespan', value: '10–15+ years' },
      { label: 'Diet', value: 'Carnivore — frozen, live, pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'popular-species', text: 'Popular Species', level: 2 },
      { id: 'electrolocation', text: 'Electrolocation', level: 2 },
      { id: 'tank-setup', text: 'Tank Setup', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'feeding', text: 'Feeding', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Knife fish are a group of elongated, laterally compressed freshwater fish known for their graceful undulating swimming motion, nocturnal habits, and — in some species — the ability to generate and sense weak electric fields. They are prized by experienced aquarists for their unusual body shape, intelligence, and charismatic behaviour.</p>

<h2 id="popular-species">Popular Species</h2>
<ul>
<li><strong>Black Ghost Knife Fish</strong> (Apteronotus albifrons) — 20 in, 125+ gallons, weakly electric, jet black with white tail markings</li>
<li><strong>Clown Knife Fish</strong> (Chitala ornata) — 36 in, 250+ gallons, large silver body with spotted pattern, grows very large</li>
<li><strong>African Knife Fish</strong> (Xenomystus nigri) — 12 in, 55+ gallons, more manageable size, mildly electric</li>
<li><strong>Brown Ghost Knife</strong> (Apteronotus leptorhynchus) — 10 in, 55+ gallons, smaller alternative to black ghost</li>
</ul>

<h2 id="electrolocation">Electrolocation</h2>
<p>Black ghost knife fish and their relatives generate a weak electric field (EOD — electric organ discharge) that they use to navigate, find food, and communicate in dark, murky water. This means they are <strong>sensitive to electromagnetic interference</strong> — avoid placing powerheads and pumps near their resting spots, and do not house two electric species in the same tank as their fields interfere with each other.</p>

<h2 id="tank-setup">Tank Setup</h2>
<p>Knife fish are nocturnal and spend the day hidden. Provide clear PVC tubes (the preferred hiding spot — they like the enclosed feeling), driftwood caves, dense plants, and dim lighting. Moonlight LEDs allow observation of nighttime behaviour. Sand or fine gravel substrate. Keep water flow moderate — knife fish are not strong swimmers.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 75–82 °F (24–28 °C)</li>
<li><strong>pH:</strong> 6.0–7.0 (soft, slightly acidic)</li>
<li><strong>GH:</strong> 3–10 dGH</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 20 ppm — knife fish are sensitive to elevated nitrate</li>
</ul>

<h2 id="feeding">Feeding</h2>
<p>Feed at night with lights off. Knife fish are carnivores that prefer live and frozen foods: bloodworms, earthworms, brine shrimp, small pieces of raw shrimp, and ghost shrimp. Many can be trained to accept sinking carnivore pellets (Hikari Carnivore, Northfin Predator) — start by mixing pellets with familiar foods. Feed every other day for adults; daily for juveniles under 6 inches.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Knife fish are generally peaceful but will eat anything small enough to fit in their mouth. Compatible tank mates include medium-large peaceful fish: Angels, Gouramis, medium cichlids (Severum, Firemouth), Corydoras (for smaller knife fish), and large tetras. Avoid aggressive cichlids, other electric fish, and very small fish. Black ghost knives can be territorial toward conspecifics — keep only one unless the tank is very large.</p>
`,
    faqs: [
      { question: 'Do black ghost knife fish produce electricity?', answer: 'Yes, but only weak electric fields used for navigation and communication — not for stunning prey like electric eels. The electric organ discharge (EOD) is completely harmless to humans and other fish. It allows the knife fish to "see" in total darkness by detecting distortions in its electric field caused by nearby objects.' },
      { question: 'How big do clown knife fish get?', answer: 'Clown knife fish (Chitala ornata) grow to 36 inches (90 cm) in captivity. They are often sold as cute 3-inch juveniles but grow rapidly. You need a 250+ gallon tank for an adult. Do not purchase a clown knife unless you can provide permanent housing for a 3-foot predator.' },
      { question: 'Why does my knife fish hide all day?', answer: 'This is completely normal — knife fish are nocturnal. They emerge at dusk to hunt and are most active in darkness. Provide a PVC tube or dark cave as a daytime refuge. After acclimation (2–4 weeks), many knife fish learn to emerge during feeding time even with lights on.' },
      { question: 'Can I keep two black ghost knife fish together?', answer: 'Generally not recommended. Black ghosts are territorial toward conspecifics and will fight for hiding spots. In very large tanks (200+ gallons) with multiple hiding spots spaced far apart, a pair might coexist. In standard home aquariums, keep only one.' },
    ],
    sources: [
      { title: 'Apteronotus albifrons (Linnaeus, 1766)', url: 'https://www.fishbase.se/summary/Apteronotus-albifrons.html', publisher: 'FishBase' },
      { title: 'Electric Fish: Electrolocation and Communication', url: 'https://www.nature.com/articles/electric-fish-review', publisher: 'Nature Reviews' },
    ],
    relatedSlugs: ['predatory-fish-feeding-guide', 'aquarium-filter-guide', 'water-chemistry-guide'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 56 — Oscar Tank Mates
  // ──────────────────────────────────────────────
  {
    title: 'Oscar Tank Mates Guide',
    slug: 'oscar-tank-mates',
    type: 'care',
    topicCategory: 'tank-mates',
    category: 'oscar',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/oscar-tank-mates.jpg',
    heroImageAlt: 'Oscar swimming alongside a large pleco in a spacious community cichlid tank',
    metaTitle: 'Oscar Tank Mates Guide | Compatible Fish & Stocking | The Fish Collection',
    metaDescription: 'Best tank mates for Oscar fish — Silver Dollars, Plecos, Jack Dempsey, Bichirs. Which fish can live with Oscars and which to avoid.',
    quickAnswerQuestion: 'What fish can live with Oscars?',
    quickAnswer: 'The best Oscar tank mates are Silver Dollars (school of 6+), large Plecos (Common, Sailfin), Jack Dempsey cichlids, Bichirs, Severum cichlids, large Synodontis catfish, and Firemouth cichlids. Avoid any fish small enough to fit in the Oscar\'s mouth, slow-moving species, and fin-nippers. A 125+ gallon tank is minimum for an Oscar community.',
    summary: 'A compatibility guide for Oscar fish (Astronotus ocellatus) covering the best tank mates, species to avoid, stocking ratios, and aggression management in mixed Oscar communities.',
    keyFacts: [
      { label: 'Minimum Tank', value: '125 gallons for Oscar community' },
      { label: 'Oscar Temperament', value: 'Semi-aggressive, territorial' },
      { label: 'Best Companions', value: 'Silver Dollars, Plecos, Bichirs' },
      { label: 'Avoid', value: 'Small fish, bettas, slow species' },
      { label: 'Introduction', value: 'Add all fish simultaneously' },
    ],
    headings: [
      { id: 'compatibility-overview', text: 'Compatibility Overview', level: 2 },
      { id: 'best-tank-mates', text: 'Best Tank Mates', level: 2 },
      { id: 'risky-companions', text: 'Risky Companions', level: 2 },
      { id: 'species-to-avoid', text: 'Species to Avoid', level: 2 },
      { id: 'stocking-tips', text: 'Stocking Tips', level: 2 },
    ],
    content: `
<h2 id="compatibility-overview">Compatibility Overview</h2>
<p>Oscars are semi-aggressive cichlids that will eat any fish small enough to swallow. They are territorial but not relentlessly aggressive like some cichlid species. The key to a successful Oscar community is choosing tank mates that are too large to eat, robust enough to hold their ground, and not aggressive enough to bully the Oscar.</p>

<h2 id="best-tank-mates">Best Tank Mates</h2>
<ul>
<li><strong>Silver Dollars</strong> (Metynnis spp.) — peaceful, fast schooling fish too deep-bodied for Oscars to eat. Keep 6+. Excellent dither fish.</li>
<li><strong>Large Plecos</strong> (Common Pleco, Sailfin) — armoured bottom-dwellers that Oscars ignore. Excellent cleanup crew.</li>
<li><strong>Bichirs</strong> (Polypterus spp.) — armoured, bottom-dwelling predators that peacefully coexist with Oscars.</li>
<li><strong>Jack Dempsey</strong> — similar size and temperament. Provide a 125+ gallon tank with sightline breaks.</li>
<li><strong>Severum Cichlid</strong> — peaceful South American cichlid, similar water parameters.</li>
<li><strong>Firemouth Cichlid</strong> — can hold its own with a threat display, but needs retreat space.</li>
<li><strong>Synodontis Catfish</strong> — large species (S. eupterus, S. decorus) work well.</li>
</ul>

<h2 id="risky-companions">Risky Companions</h2>
<p><strong>Convict Cichlids</strong> can work but may breed prolifically and harass Oscars during defense of fry. <strong>Green Terror</strong> — similar size but can be extremely aggressive. <strong>Red Tail Catfish</strong> — will eventually outgrow and eat the Oscar. These pairings require expert-level monitoring.</p>

<h2 id="species-to-avoid">Species to Avoid</h2>
<ul>
<li>Any fish under 4 inches (will be eaten)</li>
<li>Bettas, guppies, neon tetras (guaranteed food)</li>
<li>Angelfish (too slow, too delicate)</li>
<li>African cichlids (incompatible water parameters and extreme aggression)</li>
<li>Flowerhorn (too aggressive — fights likely)</li>
<li>Goldfish (cold water, wrong parameters)</li>
</ul>

<h2 id="stocking-tips">Stocking Tips</h2>
<p>Introduce all fish simultaneously to prevent the Oscar from establishing territory over the entire tank. Provide visual barriers (driftwood, large rocks) to break sightlines. Feed generously — well-fed Oscars are significantly less aggressive. A 125-gallon tank is the minimum for an Oscar with companions; 180+ gallons is recommended for 3+ large cichlids.</p>
`,
    faqs: [
      { question: 'Can Oscars live with African cichlids?', answer: 'No. African cichlids (mbuna, peacocks, haps) require hard, alkaline water (pH 7.8–8.6) while Oscars prefer soft, neutral water (pH 6.0–7.5). Beyond water parameters, many African cichlids are hyperaggressive and will harass the Oscar. These are completely incompatible groups.' },
      { question: 'Will an Oscar eat smaller fish?', answer: 'Yes. Oscars will eat any fish that fits in their mouth — and their mouths are surprisingly large. A 10-inch Oscar can swallow a 3-inch fish whole. Never keep small fish with Oscars unless they are intended as food.' },
      { question: 'Can I keep two Oscars together?', answer: 'Yes, a pair of Oscars can coexist in a 125+ gallon tank. They may spar occasionally but rarely cause serious harm to each other. A bonded pair (male/female) is ideal. Two males may be more contentious but usually establish a workable hierarchy in adequate space.' },
    ],
    sources: [
      { title: 'Astronotus ocellatus — Compatibility', url: 'https://www.seriouslyfish.com/species/astronotus-ocellatus/', publisher: 'Seriously Fish' },
    ],
    relatedSlugs: ['oscar-care-guide', 'cichlid-tank-mates', 'predatory-fish-feeding-guide', 'flowerhorn-cichlid-care-guide'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 57 — Goldfish Tank Mates
  // ──────────────────────────────────────────────
  {
    title: 'Goldfish Tank Mates Guide',
    slug: 'goldfish-tank-mates',
    type: 'care',
    topicCategory: 'tank-mates',
    category: 'goldfish',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-01',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/goldfish-tank-mates.jpg',
    heroImageAlt: 'Fancy goldfish swimming with dojo loaches in a planted cold-water aquarium',
    metaTitle: 'Goldfish Tank Mates Guide | Compatible Fish & Snails | The Fish Collection',
    metaDescription: 'Best tank mates for goldfish — Dojo Loach, Bristlenose Pleco, Nerite snails. Which fish can live with goldfish and cold-water compatibility.',
    quickAnswerQuestion: 'What fish can live with goldfish?',
    quickAnswer: 'The best goldfish tank mates are Dojo Loaches (weather loach), Bristlenose Plecos (in 68 °F+ setups), White Cloud Mountain Minnows, Rosy Barbs, and large snails (Nerite, Mystery). Only fancy goldfish should be paired with other fancy goldfish. Single-tail goldfish belong with other single-tails or koi. Avoid tropical fish — goldfish need cold water.',
    summary: 'A compatibility guide for goldfish covering the best cold-water tank mates for both fancy and single-tail varieties, species to avoid, and why mixing goldfish with tropical fish doesn\'t work.',
    keyFacts: [
      { label: 'Temperature Match', value: '65–72 °F (cold water)' },
      { label: 'Best Companions', value: 'Dojo Loach, White Clouds, snails' },
      { label: 'Key Rule', value: 'Fancy with fancy, single-tail with single-tail' },
      { label: 'Avoid', value: 'Tropical fish, small fish, aggressive species' },
    ],
    headings: [
      { id: 'compatibility-overview', text: 'Compatibility Overview', level: 2 },
      { id: 'best-tank-mates-fancy', text: 'Best Tank Mates for Fancy Goldfish', level: 2 },
      { id: 'best-tank-mates-single', text: 'Best Tank Mates for Single-Tail Goldfish', level: 2 },
      { id: 'species-to-avoid', text: 'Species to Avoid', level: 2 },
      { id: 'snails-and-invertebrates', text: 'Snails and Invertebrates', level: 2 },
    ],
    content: `
<h2 id="compatibility-overview">Compatibility Overview</h2>
<p>Goldfish compatibility is defined by two factors: <strong>temperature</strong> and <strong>swimming ability</strong>. Goldfish need cold water (65–72 °F), ruling out most tropical species. Fancy goldfish are slow, clumsy swimmers that cannot compete with fast fish for food. The cardinal rule: never mix fancy goldfish (ranchu, oranda, telescope) with single-tail goldfish (comet, shubunkin) — the single-tails will outcompete fancies for food and may bully them.</p>

<h2 id="best-tank-mates-fancy">Best Tank Mates for Fancy Goldfish</h2>
<ul>
<li><strong>Other fancy goldfish</strong> — the safest and most recommended option</li>
<li><strong>Dojo/Weather Loach</strong> (Misgurnus anguillicaudatus) — cold-tolerant, peaceful, playful bottom-dweller</li>
<li><strong>Bristlenose Pleco</strong> — can work in setups kept at 68 °F+ (their lower comfort zone). Provides algae control.</li>
<li><strong>White Cloud Mountain Minnows</strong> — cold-water schooling fish, fast enough to avoid being eaten once adult-sized</li>
<li><strong>Rosy Barbs</strong> — cold-tolerant (down to 64 ��F), active, and too deep-bodied for goldfish to eat</li>
</ul>

<h2 id="best-tank-mates-single">Best Tank Mates for Single-Tail Goldfish</h2>
<ul>
<li><strong>Other single-tail goldfish</strong> (comets, shubunkins)</li>
<li><strong>Koi</strong> — in ponds. Same temperature, compatible temperament. May hybridise.</li>
<li><strong>Dojo Loach</strong> — works in both tank and pond settings</li>
<li><strong>Rosy Barbs</strong> — fast and cold-tolerant</li>
</ul>

<h2 id="species-to-avoid">Species to Avoid</h2>
<ul>
<li><strong>Tropical fish</strong> (bettas, tetras, angels) — wrong temperature range</li>
<li><strong>Plecos (except Bristlenose)</strong> — Common Plecos grow too large and may rasp on goldfish slime coat</li>
<li><strong>Cichlids</strong> — too aggressive, wrong temperature</li>
<li><strong>Small shrimp</strong> (cherry shrimp, amano) — goldfish will eat them</li>
<li><strong>Corydoras</strong> — often suggested but need warmer water (72–79 °F) than goldfish prefer</li>
</ul>

<h2 id="snails-and-invertebrates">Snails and Invertebrates</h2>
<p><strong>Nerite Snails</strong> are the best invertebrate companions — cold-tolerant, excellent algae grazers, and their eggs won't hatch in freshwater. <strong>Mystery Snails</strong> work but goldfish may nip their antennae. <strong>Japanese Trapdoor Snails</strong> are cold-hardy and pond-compatible. Avoid small snails (ramshorn, bladder) — goldfish will eat them enthusiastically.</p>
`,
    faqs: [
      { question: 'Can goldfish live with bettas?', answer: 'No. Bettas are tropical fish needing 78–82 °F water. Goldfish need 65–72 °F. Neither fish will thrive at a compromise temperature. Additionally, goldfish produce far more waste than a betta\'s typical tank can handle, and bettas are slow swimmers that can\'t compete for food with goldfish.' },
      { question: 'Can goldfish live with corydoras?', answer: 'It\'s not ideal. Corydoras prefer 72–79 °F while goldfish do best at 65–72 °F. At 72 °F both could survive, but neither is at their optimal temperature. If you maintain a tank at 70–72 °F, Peppered Corydoras (the most cold-tolerant species) might work, but it\'s a compromise for both species.' },
      { question: 'Will goldfish eat snails?', answer: 'Goldfish will eat small snails (bladder snails, ramshorn under 1 cm) with enthusiasm. They generally cannot eat larger snails like adult Nerites, Mystery Snails, or Japanese Trapdoor Snails. If you want a snail cleanup crew, choose species with adult size larger than 1 inch.' },
    ],
    sources: [
      { title: 'Goldfish Compatibility Guide', url: 'https://www.practicalfishkeeping.co.uk/features/goldfish-tankmates/', publisher: 'Practical Fishkeeping' },
    ],
    relatedSlugs: ['goldfish-care-guide', 'betta-tank-mates', 'koi-pond-setup', 'water-chemistry-guide'],
  },
  // ──────────────────────────────────────────────
  // Care Guide 58 — Grouper Care Guide
  // ──────────────────────────────────────────────
  {
    title: 'Marine Grouper Care Guide',
    slug: 'grouper-care-guide',
    type: 'care',
    topicCategory: 'species-care',
    category: 'grouper',
    authorSlug: 'teemu-suoninen',
    publishedAt: '2026-04-02',
    updatedAt: '2026-04-05',
    heroImage: '/images/care/grouper-care-guide.jpg',
    heroImageAlt: 'Panther grouper displaying its distinctive white body with black polka dots in a marine aquarium',
    metaTitle: 'Marine Grouper Care Guide | Neptune & Panther Grouper | The Fish Collection',
    metaDescription: 'Complete marine grouper care guide — Neptune Grouper, Panther Grouper. Large tank requirements, feeding predatory marine fish, and species selection.',
    quickAnswerQuestion: 'How do you care for marine groupers?',
    quickAnswer: 'Marine groupers need large tanks (150–300+ gallons depending on species), stable marine water parameters (76–80 °F, SG 1.024–1.026, pH 8.1–8.4), and a diet of meaty foods — raw shrimp, silversides, squid, and quality marine pellets. Groupers grow large quickly and will eat any tank mate they can swallow. They are hardy fish suited to experienced marine keepers.',
    summary: 'A care guide for marine groupers in the home aquarium, covering the popular Panther Grouper and the ultra-rare Neptune Grouper. These impressive predators require large tanks, heavy feeding, and careful tank mate selection.',
    keyFacts: [
      { label: 'Family', value: 'Serranidae (subfamily Epinephelinae)' },
      { label: 'Max Size', value: '30–70 cm (species dependent)' },
      { label: 'Minimum Tank', value: '150–300+ gallons' },
      { label: 'Temperature', value: '76–80 °F (24–27 °C)' },
      { label: 'Salinity', value: 'SG 1.024–1.026' },
      { label: 'Care Level', value: 'Intermediate–Advanced' },
      { label: 'Lifespan', value: '10–20+ years' },
      { label: 'Diet', value: 'Carnivore — shrimp, fish, squid, pellets' },
    ],
    headings: [
      { id: 'overview', text: 'Overview', level: 2 },
      { id: 'popular-species', text: 'Popular Species', level: 2 },
      { id: 'tank-requirements', text: 'Tank Requirements', level: 2 },
      { id: 'water-parameters', text: 'Water Parameters', level: 2 },
      { id: 'feeding', text: 'Feeding', level: 2 },
      { id: 'tank-mates', text: 'Tank Mates', level: 2 },
      { id: 'health', text: 'Health Considerations', level: 2 },
    ],
    content: `
<h2 id="overview">Overview</h2>
<p>Groupers are a diverse family of marine predatory fish found in tropical and subtropical oceans worldwide. In the aquarium hobby, they are kept for their bold personalities, impressive predatory displays, and striking appearances. The primary challenge is size — most groupers grow large quickly and require substantial investment in tank space and feeding.</p>

<h2 id="popular-species">Popular Species</h2>
<ul>
<li><strong>Panther Grouper</strong> (Cromileptes altivelis) — white with black spots, grows to 28 in, starts adorably small but outgrows most tanks. Needs 200+ gallons.</li>
<li><strong>Neptune Grouper</strong> (Cephalopholis igarashiensis) — ultra-rare deepwater species, vivid orange-pink, $6,000+, stays smaller (10 in). Needs 150+ gallons.</li>
<li><strong>Miniatus Grouper</strong> (Cephalopholis miniata) — bright red with blue spots, 18 in, 180+ gallons. One of the most colourful.</li>
<li><strong>Blue-Spotted Grouper</strong> (Cephalopholis argus) — 16 in, 150+ gallons, common and hardy.</li>
</ul>

<h2 id="tank-requirements">Tank Requirements</h2>
<p>Groupers need large tanks with robust filtration. Most species are ambush predators that don't swim constantly, but they produce heavy waste. Provide caves and overhangs (live rock arrangements) for the grouper to claim as territory. A protein skimmer rated for double the tank volume is recommended. Ensure the tank lid is secure — groupers can jump when startled.</p>

<h2 id="water-parameters">Water Parameters</h2>
<ul>
<li><strong>Temperature:</strong> 76–80 °F (some deepwater species like Neptune prefer 72–76 °F)</li>
<li><strong>pH:</strong> 8.1–8.4</li>
<li><strong>Salinity:</strong> SG 1.024–1.026</li>
<li><strong>Ammonia/Nitrite:</strong> 0 ppm</li>
<li><strong>Nitrate:</strong> Below 20 ppm</li>
</ul>
<p>Neptune Groupers require cooler water (72–76 °F) due to their deepwater origin. Acclimation from depth must be performed by the collector — hobbyists purchase already-decompressed specimens.</p>

<h2 id="feeding">Feeding</h2>
<p>Groupers are voracious carnivores. Feed raw shrimp (shell-on), silversides, squid, clam, and high-quality marine pellets (New Life Spectrum, Hikari Marine). Feed every 2–3 days for adults. Groupers often learn to recognise their owner and may "beg" for food. Avoid overfeeding — groupers gain weight easily and fatty liver disease is a concern in captivity.</p>

<h2 id="tank-mates">Tank Mates</h2>
<p>Groupers will eat any fish that fits in their mouth — and their mouths are enormous relative to body size. Compatible tank mates must be at least 60% of the grouper's body length: large tangs, triggerfish, large wrasses, moray eels, and lionfish. Avoid small fish, ornamental shrimp, and delicate species. Groupers are generally not aggressive toward fish they can't eat.</p>

<h2 id="health">Health Considerations</h2>
<p>Groupers are generally hardy once established. Common issues include bacterial infections from poor water quality, parasites (treat with copper in a QT), and eye cloudiness from injury. Neptune Groupers are more delicate due to deepwater origin and require pristine water quality. All groupers should be quarantined for 4–6 weeks before display introduction.</p>
`,
    faqs: [
      { question: 'How much does a Neptune Grouper cost?', answer: 'Neptune Groupers (Cephalopholis igarashiensis) typically sell for $6,000–$10,000 due to their extreme rarity and the difficulty of collecting them from depths of 80–250 metres. Specimens must undergo careful decompression during collection, and survival rates during this process are low, further driving prices.' },
      { question: 'How fast do Panther Groupers grow?', answer: 'Very fast. Panther Groupers are often sold as adorable 2–3 inch juveniles but can reach 12 inches within 2 years and 20+ inches within 4 years. They will eventually need a 200+ gallon tank. Do not purchase one for a small tank expecting slow growth — it will outgrow it quickly.' },
      { question: 'Are groupers reef-safe?', answer: 'No. Groupers will eat ornamental shrimp, crabs, and small fish. They are best kept in fish-only-with-live-rock (FOWLR) systems rather than reef tanks. The exception is if the reef inhabitants are all large enough not to be eaten, but the risk to expensive corals from the grouper\'s bulk is still significant.' },
    ],
    sources: [
      { title: 'Cephalopholis igarashiensis (Katayama, 1957)', url: 'https://www.fishbase.se/summary/Cephalopholis-igarashiensis.html', publisher: 'FishBase' },
      { title: 'Cromileptes altivelis (Valenciennes, 1828)', url: 'https://www.fishbase.se/summary/Cromileptes-altivelis.html', publisher: 'FishBase' },
    ],
    relatedSlugs: ['tang-care-guide', 'aquarium-filter-guide', 'fish-quarantine-guide', 'predatory-fish-feeding-guide'],
  },
];

export function getCareGuideBySlug(slug: string): Article | undefined {
  return careGuides.find((guide) => guide.slug === slug);
}
