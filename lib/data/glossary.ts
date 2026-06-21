export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  relatedTerms?: string[];
  seeAlso?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Acclimation',
    slug: 'acclimation',
    definition:
      'The gradual process of adjusting a fish to new water conditions — temperature, pH, and salinity — after transport or a water change. Proper acclimation reduces osmotic stress and lowers mortality risk. Drip acclimation over 1–3 hours is the gold standard for sensitive species.',
    relatedTerms: ['drip-acclimation', 'temperature-shock'],
  },
  {
    term: 'Activated Carbon',
    slug: 'activated-carbon',
    definition:
      'A highly porous form of carbon used as chemical filtration media in aquariums. It adsorbs dissolved organic compounds, medications, tannins, and odours from the water column. Replace every 4–6 weeks as adsorption capacity is finite.',
    relatedTerms: ['chemical-filtration', 'filter-media'],
  },
  {
    term: 'Aerobic Bacteria',
    slug: 'aerobic-bacteria',
    definition:
      'Oxygen-dependent microorganisms — primarily Nitrosomonas and Nitrobacter — that colonise biological filter media and convert toxic ammonia into nitrite, then nitrite into less harmful nitrate. They are the engine of the nitrogen cycle.',
    relatedTerms: ['anaerobic-bacteria', 'nitrogen-cycle', 'biological-filtration'],
  },
  {
    term: 'Alkalinity',
    slug: 'alkalinity',
    definition:
      'A measure of water\'s buffering capacity — its ability to resist pH changes when acids or bases are added. In freshwater aquariums, alkalinity is primarily driven by carbonate hardness (KH). Stable alkalinity is critical for sensitive species like discus and stingrays.',
    relatedTerms: ['kh', 'ph', 'buffer'],
  },
  {
    term: 'Ammonia',
    slug: 'ammonia',
    definition:
      'A toxic nitrogen compound (NH₃/NH₄⁺) produced by fish waste, uneaten food, and decaying organic matter. Even 0.25 ppm can damage gill tissue. The nitrogen cycle converts ammonia first to nitrite, then to nitrate via beneficial bacteria.',
    relatedTerms: ['nitrogen-cycle', 'nitrite', 'nitrate'],
  },
  {
    term: 'Anaerobic Bacteria',
    slug: 'anaerobic-bacteria',
    definition:
      'Bacteria that thrive in oxygen-free zones, such as deep sand beds or the interior of porous rock. Some anaerobic species perform denitrification — converting nitrate into harmless nitrogen gas — which helps control nitrate levels in mature systems.',
    relatedTerms: ['aerobic-bacteria', 'denitrification', 'deep-sand-bed'],
  },
  {
    term: 'Biological Filtration',
    slug: 'biological-filtration',
    definition:
      'The use of beneficial bacteria colonies to break down ammonia and nitrite into less toxic nitrate. Biological filtration occurs on any surface with water flow — sponges, ceramic rings, bio-balls, and even substrate. It is the most critical filtration type in any aquarium.',
    relatedTerms: ['mechanical-filtration', 'chemical-filtration', 'nitrogen-cycle'],
  },
  {
    term: 'Bioload',
    slug: 'bioload',
    definition:
      'The total biological demand placed on an aquarium\'s filtration system by its inhabitants. High bioload species — large predators, messy eaters — produce more waste and require more robust filtration and more frequent water changes.',
    relatedTerms: ['biological-filtration'],
  },
  {
    term: 'Blackwater',
    slug: 'blackwater',
    definition:
      'Water stained dark amber by tannins leaching from decomposing leaves, driftwood, and peat. Many South American and Southeast Asian species — discus, cardinal tetras, bettas, chocolate gouramis — evolved in blackwater habitats with pH 4.0–6.5 and negligible mineral content.',
    relatedTerms: ['tannins', 'peat-filtration', 'softwater'],
  },
  {
    term: 'Brackish',
    slug: 'brackish',
    definition:
      'Water with salinity between freshwater (0 ppt) and full marine (35 ppt), typically 5–15 ppt. Brackish habitats include estuaries, mangrove swamps, and river mouths. Species like pufferfish, archer fish, and certain gobies require brackish conditions.',
    relatedTerms: ['salinity', 'specific-gravity'],
  },
  {
    term: 'Breeding Trap',
    slug: 'breeding-trap',
    definition:
      'A small container — usually mesh or perforated plastic — placed inside a tank to isolate pregnant livebearers or newly hatched fry from adults that might eat them. Best used short-term to minimise stress on the mother.',
    relatedTerms: ['fry', 'livebearer'],
  },
  {
    term: 'Buffer',
    slug: 'buffer',
    definition:
      'A chemical additive or natural mineral that stabilises pH by increasing the water\'s alkalinity (KH). Crushed coral, aragonite substrate, and commercial buffer products prevent dangerous pH crashes, especially in soft-water or heavily stocked tanks.',
    relatedTerms: ['alkalinity', 'kh', 'ph'],
  },
  {
    term: 'Canister Filter',
    slug: 'canister-filter',
    definition:
      'An external pressurised filtration unit that draws water from the tank via intake tubing, passes it through layered media trays (mechanical, biological, chemical), and returns it via a spray bar or outlet. Canister filters offer high media capacity and are popular for tanks 40–200 gallons.',
    relatedTerms: ['filter-media', 'sump', 'hob-filter'],
  },
  {
    term: 'Carbon Dosing',
    slug: 'carbon-dosing',
    definition:
      'The practice of adding a carbon source — vodka, vinegar, or commercial products like NoPox — to promote heterotrophic bacterial growth that consumes nitrate and phosphate. Commonly used in reef tanks to maintain ultra-low nutrient levels.',
    relatedTerms: ['nitrate'],
  },
  {
    term: 'Chemical Filtration',
    slug: 'chemical-filtration',
    definition:
      'Filtration that removes dissolved substances from water through adsorption or ion exchange. Activated carbon, GFO (granular ferric oxide), and Purigen are common chemical filter media. Used to polish water clarity, remove medications, or reduce phosphate.',
    relatedTerms: ['activated-carbon', 'mechanical-filtration', 'biological-filtration'],
  },
  {
    term: 'CITES',
    slug: 'cites',
    definition:
      'The Convention on International Trade in Endangered Species of Wild Fauna and Flora — an international treaty regulating cross-border trade of protected organisms. Asian Arowana (Scleropages formosus) is CITES Appendix I, meaning commercial trade requires captive-bred certification with microchip documentation.',
    relatedTerms: ['endemic'],
  },
  {
    term: 'Community Tank',
    slug: 'community-tank',
    definition:
      'An aquarium housing multiple compatible species together. Successful community tanks require matching water parameters, temperament, and size among inhabitants. Research compatibility carefully — many "community" fish become aggressive during breeding or as they mature.',
    relatedTerms: ['species-only-tank'],
  },
  {
    term: 'Conditioning',
    slug: 'conditioning',
    definition:
      'In breeding context: the practice of feeding high-protein foods and optimising water conditions to prepare fish for spawning. In water treatment context: adding a dechlorinator or water conditioner to make tap water safe for aquarium use.',
    relatedTerms: ['dechlorinator', 'breeding-trap'],
  },
  {
    term: 'Cycling',
    slug: 'cycling',
    definition:
      'The process of establishing beneficial bacterial colonies in a new aquarium before adding fish. During cycling, ammonia spikes first, then nitrite, before both drop to zero as Nitrosomonas and Nitrobacter colonies mature. A fishless cycle using pure ammonia typically takes 4–8 weeks.',
    relatedTerms: ['nitrogen-cycle', 'new-tank-syndrome', 'ammonia'],
  },
  {
    term: 'Dechlorinator',
    slug: 'dechlorinator',
    definition:
      'A water treatment product that neutralises chlorine and chloramine — disinfectants added to municipal tap water that are lethal to fish and beneficial bacteria. Must be added to any tap water before it enters the aquarium.',
    relatedTerms: ['conditioning', 'water-change'],
  },
  {
    term: 'Deep Sand Bed (DSB)',
    slug: 'deep-sand-bed',
    definition:
      'A substrate layer 4–6 inches deep that creates oxygen-free zones in the lower layers, fostering anaerobic bacteria capable of denitrification. Popular in marine reef systems as a natural method of nitrate reduction.',
    relatedTerms: ['anaerobic-bacteria', 'denitrification', 'substrate'],
  },
  {
    term: 'Denitrification',
    slug: 'denitrification',
    definition:
      'The final stage of nitrogen processing where anaerobic bacteria convert nitrate (NO₃⁻) into nitrogen gas (N₂), which escapes into the atmosphere. This process only occurs in oxygen-depleted environments such as deep sand beds, porous rock interiors, or specialised denitrification reactors.',
    relatedTerms: ['anaerobic-bacteria', 'nitrate', 'nitrogen-cycle'],
  },
  {
    term: 'dGH (Degrees of General Hardness)',
    slug: 'dgh',
    definition:
      'A unit measuring the concentration of dissolved calcium and magnesium ions in water — commonly called "general hardness" or GH. Most tropical freshwater fish thrive at 4–12 dGH. Rift lake cichlids prefer 12–20 dGH, while blackwater species need 0–4 dGH.',
    relatedTerms: ['gh', 'dkh', 'softwater'],
  },
  {
    term: 'dKH (Degrees of Carbonate Hardness)',
    slug: 'dkh',
    definition:
      'A unit measuring the concentration of carbonate and bicarbonate ions in water — the primary determinant of alkalinity and pH buffering capacity. Most freshwater tanks run 3–8 dKH; marine systems need 7–12 dKH for stable pH.',
    relatedTerms: ['kh', 'alkalinity', 'buffer'],
  },
  {
    term: 'Dissolved Oxygen',
    slug: 'dissolved-oxygen',
    definition:
      'The amount of gaseous oxygen (O₂) dissolved in aquarium water, measured in mg/L or ppm. Fish and aerobic bacteria require adequate dissolved oxygen — typically 5–8 mg/L. Surface agitation, air stones, and powerheads all increase oxygenation.',
    relatedTerms: ['surface-agitation', 'aerobic-bacteria'],
  },
  {
    term: 'Drip Acclimation',
    slug: 'drip-acclimation',
    definition:
      'A method of slowly introducing new water to a fish by using airline tubing with a control valve to drip tank water into the transport container at 2–4 drops per second. Over 1–3 hours, this equalises pH, temperature, salinity, and hardness with minimal osmotic stress. Essential for sensitive species like stingrays and marine fish.',
    relatedTerms: ['acclimation', 'temperature-shock'],
  },
  {
    term: 'Driftwood',
    slug: 'driftwood',
    definition:
      'Waterlogged wood used as aquarium décor and habitat enrichment. Popular varieties include Malaysian driftwood, mopani, and spider wood. Driftwood leaches tannins that lower pH and tint water amber — beneficial for blackwater setups. Always boil or soak driftwood before use to remove excess tannins.',
    relatedTerms: ['blackwater', 'tannins', 'hardscape'],
  },
  {
    term: 'Dropsy',
    slug: 'dropsy',
    definition:
      'A symptom — not a disease — characterised by severe abdominal swelling and "pine-cone" scale protrusion caused by fluid accumulation in body tissues. Dropsy usually indicates kidney failure from bacterial infection (Aeromonas), poor water quality, or organ damage. Prognosis is poor once scales are raised.',
    relatedTerms: ['fin-rot', 'hospital-tank'],
  },
  {
    term: 'EI Dosing (Estimative Index)',
    slug: 'ei-dosing',
    definition:
      'A fertilisation method for planted aquariums where macro- and micronutrients are dosed in slight excess to ensure plants never experience deficiency. Weekly 50% water changes reset nutrient levels, preventing accumulation. Popular for high-tech planted setups with CO₂ injection.',
    relatedTerms: ['planted-tank', 'ferts'],
  },
  {
    term: 'Endemic',
    slug: 'endemic',
    definition:
      'A species found naturally in one specific geographic region and nowhere else. Many of the most expensive aquarium fish — Peppermint Angelfish, Sulawesi shrimp, Lake Malawi cichlids — are endemic to tiny habitats, which limits supply and increases both ecological vulnerability and market price.',
    relatedTerms: ['cites'],
  },
  {
    term: 'Fallow Period',
    slug: 'fallow-period',
    definition:
      'A period of 6–12 weeks where a tank runs with no fish, allowing obligate fish parasites (especially Cryptocaryon/marine ich) to complete their lifecycle and die without a host. Used as a treatment strategy: move all fish to a quarantine/treatment tank and leave the display tank fallow.',
    relatedTerms: ['quarantine-tank', 'ich'],
  },
  {
    term: 'Ferts (Fertilisers)',
    slug: 'ferts',
    definition:
      'Nutrient supplements — nitrogen, phosphorus, potassium, iron, and trace elements — added to planted aquariums to support plant growth. Available as liquid dosing, root tabs, or all-in-one solutions. Dosing regimes like EI or PPS-Pro help prevent algae while ensuring plants thrive.',
    relatedTerms: ['ei-dosing', 'planted-tank'],
  },
  {
    term: 'Filter Media',
    slug: 'filter-media',
    definition:
      'Any material placed inside a filter to perform mechanical, biological, or chemical filtration. Common media include foam sponges (mechanical), ceramic rings and bio-balls (biological), and activated carbon or Purigen (chemical). Layer media coarse-to-fine in the direction of water flow.',
    relatedTerms: ['biological-filtration', 'mechanical-filtration', 'chemical-filtration'],
  },
  {
    term: 'Fin Rot',
    slug: 'fin-rot',
    definition:
      'A bacterial infection (usually Pseudomonas or Aeromonas) that progressively erodes fin tissue, causing ragged, discoloured edges that recede toward the body. Triggered by poor water quality, stress, or injury. Treat with clean water, aquarium salt, and antibiotics in severe cases.',
    relatedTerms: ['dropsy', 'hospital-tank'],
  },
  {
    term: 'Fluidized Bed Filter',
    slug: 'fluidized-bed-filter',
    definition:
      'A filtration system that suspends fine media (sand or specialised beads) in an upward water flow, maximising surface area for beneficial bacteria colonisation. Fluidised beds are extremely efficient biological filters used in high-bioload systems such as predator and arowana tanks.',
    relatedTerms: ['biological-filtration', 'filter-media'],
  },
  {
    term: 'Fry',
    slug: 'fry',
    definition:
      'Newly hatched or very young fish. Fry are typically fragile, require micro-foods (infusoria, baby brine shrimp, powdered fry food), and are vulnerable to predation. Most species need dedicated fry tanks or breeding traps for survival.',
    relatedTerms: ['breeding-trap', 'livebearer'],
  },
  {
    term: 'GH (General Hardness)',
    slug: 'gh',
    definition:
      'The total concentration of divalent metal ions in water — primarily calcium (Ca²⁺) and magnesium (Mg²⁺). GH affects osmoregulation, shell/scale formation, and breeding triggers. Measured in dGH or ppm. Soft water = 0–6 dGH; hard water = 12+ dGH.',
    relatedTerms: ['dgh', 'kh', 'softwater'],
  },
  {
    term: 'Gill Flukes',
    slug: 'gill-flukes',
    definition:
      'Parasitic flatworms (Dactylogyrus spp.) that attach to fish gills, causing laboured breathing, flashing, and excess mucus production. Treated with praziquantel or formalin-based medications. Often introduced via untreated live foods or new fish that skip quarantine.',
    relatedTerms: ['quarantine-tank', 'ich'],
  },
  {
    term: 'GPH (Gallons Per Hour)',
    slug: 'gph',
    definition:
      'A measurement of water flow rate — the volume of water a pump or filter moves per hour. As a rule of thumb, aquarium filtration should turn over the tank volume 4–10 times per hour depending on species. A 100-gallon tank needs a minimum 400 GPH turnover.',
    relatedTerms: ['turnover-rate', 'canister-filter'],
  },
  {
    term: 'Gravel Vacuum',
    slug: 'gravel-vacuum',
    definition:
      'A siphon tool used during water changes to extract detritus, uneaten food, and waste trapped in the substrate. Regular gravel vacuuming prevents anaerobic pockets and reduces nutrient buildup that fuels algae growth.',
    relatedTerms: ['water-change', 'substrate', 'siphon'],
  },
  {
    term: 'Hardscape',
    slug: 'hardscape',
    definition:
      'The non-living structural elements of an aquarium — rocks, driftwood, and substrate — arranged before plants and water are added. Good hardscape creates visual depth, natural hiding spots, and territorial boundaries. Popular styles include iwagumi (rock-focused) and nature aquarium (wood-focused).',
    relatedTerms: ['driftwood', 'substrate'],
  },
  {
    term: 'HOB Filter (Hang-on-Back)',
    slug: 'hob-filter',
    definition:
      'A filter that hangs on the rim of an aquarium, drawing water up through an intake tube and passing it through media cartridges before cascading it back. HOB filters are affordable and easy to maintain, suitable for tanks up to ~75 gallons. Less capable than canister filters or sumps for larger setups.',
    relatedTerms: ['canister-filter', 'sump', 'filter-media'],
  },
  {
    term: 'Hospital Tank',
    slug: 'hospital-tank',
    definition:
      'A bare, dedicated aquarium used to isolate and treat sick fish away from the main display. Hospital tanks are typically small (10–20 gallons), undecorated for easy cleaning, and equipped with a heater, sponge filter, and air stone. Medications are added here without affecting the display tank\'s biological filter.',
    relatedTerms: ['quarantine-tank', 'fin-rot', 'ich'],
  },
  {
    term: 'Hydrometer',
    slug: 'hydrometer',
    definition:
      'A simple float-based instrument for measuring the specific gravity (density) of saltwater or brackish water. While inexpensive, hydrometers are less accurate than digital refractometers — temperature changes and air bubbles can skew readings.',
    relatedTerms: ['specific-gravity', 'salinity', 'refractometer'],
  },
  {
    term: 'Ich (Ichthyophthirius multifiliis / Ick)',
    slug: 'ich',
    definition:
      'The most common freshwater fish disease, caused by the protozoan parasite Ichthyophthirius multifiliis. Presents as white granular spots on skin, fins, and gills. Ich has a temperature-dependent lifecycle; raising temperature to 30 °C (86 °F) and treating with copper-based medications or formalin is the standard protocol.',
    relatedTerms: ['fallow-period', 'hospital-tank', 'quarantine-tank'],
  },
  {
    term: 'KH (Carbonate Hardness)',
    slug: 'kh',
    definition:
      'The concentration of carbonate (CO₃²⁻) and bicarbonate (HCO₃⁻) ions in water, which determines buffering capacity against pH swings. Low KH means unstable pH — dangerous for most fish. Maintain 3–8 dKH for freshwater; 7–12 dKH for marine.',
    relatedTerms: ['dkh', 'alkalinity', 'ph', 'buffer'],
  },
  {
    term: 'Laterite',
    slug: 'laterite',
    definition:
      'An iron-rich clay substrate used in planted aquariums to provide long-term nutrient supply to root-feeding plants. Typically placed as a bottom layer beneath gravel or sand. Laterite slowly releases iron and trace minerals that promote lush plant growth.',
    relatedTerms: ['substrate', 'planted-tank', 'ferts'],
  },
  {
    term: 'LED Lighting',
    slug: 'led-lighting',
    definition:
      'Energy-efficient aquarium lighting using light-emitting diodes. Modern aquarium LEDs offer programmable spectra (6500K for plants, actinic blue for corals), sunrise/sunset ramping, and moonlight modes. LED fixtures run cooler and last longer than fluorescent or metal halide alternatives.',
    relatedTerms: ['par', 'photoperiod'],
  },
  {
    term: 'Live Arrival Guarantee',
    slug: 'live-arrival-guarantee',
    definition:
      'A seller\'s policy guaranteeing that shipped fish arrive alive and healthy, with a full refund or replacement if the animal is dead on arrival (DOA). Standard practice among reputable online fish retailers. Requires the buyer to photograph the fish in the unopened bag within a specified timeframe.',
  },
  {
    term: 'Livebearer',
    slug: 'livebearer',
    definition:
      'A fish that gives birth to free-swimming young rather than laying eggs. Common aquarium livebearers include guppies, mollies, platies, swordtails, and endlers. Livebearers breed prolifically and often require population management strategies.',
    relatedTerms: ['fry', 'breeding-trap'],
  },
  {
    term: 'Live Rock',
    slug: 'live-rock',
    definition:
      'Porous calcium carbonate rock from coral reef environments, colonised by beneficial bacteria, coralline algae, sponges, and micro-organisms. Live rock serves as the primary biological filter in marine aquariums and provides natural habitat structure. Dry rock can be "seeded" to become live rock over time.',
    relatedTerms: ['biological-filtration', 'refugium'],
  },
  {
    term: 'Macroalgae',
    slug: 'macroalgae',
    definition:
      'Large, visible algae species — such as Chaetomorpha, Caulerpa, and Gracilaria — intentionally grown in marine refugiums to export nitrate and phosphate through harvesting. Macroalgae also provide habitat for copepods and amphipods that serve as natural fish food.',
    relatedTerms: ['refugium', 'nitrate'],
  },
  {
    term: 'Mechanical Filtration',
    slug: 'mechanical-filtration',
    definition:
      'Physical removal of suspended particles — fish waste, uneaten food, plant debris — from the water column using sponges, filter floss, or filter socks. Mechanical filtration should be the first stage in any filter, protecting biological media from clogging. Clean or replace regularly to prevent nitrate factories.',
    relatedTerms: ['biological-filtration', 'chemical-filtration', 'filter-media'],
  },
  {
    term: 'Nano Tank',
    slug: 'nano-tank',
    definition:
      'An aquarium under 20 gallons (75 litres), popular for bettas, shrimp, small rasboras, and planted scapes. Nano tanks are space-efficient but require more frequent maintenance — small water volumes amplify parameter swings. Not suitable for most exotic or predatory species.',
    relatedTerms: ['community-tank'],
  },
  {
    term: 'New Tank Syndrome',
    slug: 'new-tank-syndrome',
    definition:
      'The dangerous ammonia and nitrite spikes that occur in a newly set-up aquarium before beneficial bacteria colonies have established. The leading cause of fish death among beginners. Prevented by properly cycling the tank before adding fish — a process that takes 4–8 weeks.',
    relatedTerms: ['cycling', 'nitrogen-cycle', 'ammonia'],
  },
  {
    term: 'Nitrification',
    slug: 'nitrification',
    definition:
      'The two-step biological process where Nitrosomonas bacteria oxidise ammonia (NH₃) into nitrite (NO₂⁻), and Nitrobacter bacteria then oxidise nitrite into nitrate (NO₃⁻). This is the core mechanism of the nitrogen cycle and the foundation of biological filtration.',
    relatedTerms: ['nitrogen-cycle', 'denitrification', 'aerobic-bacteria'],
  },
  {
    term: 'Nitrate',
    slug: 'nitrate',
    definition:
      'The end product of the nitrogen cycle (NO₃⁻), far less toxic than ammonia or nitrite but harmful at elevated levels. Keep below 20 ppm for most freshwater species, below 5 ppm for sensitive fish and corals. Controlled through water changes, live plants, and denitrification.',
    relatedTerms: ['nitrite', 'ammonia', 'nitrogen-cycle', 'water-change'],
  },
  {
    term: 'Nitrite',
    slug: 'nitrite',
    definition:
      'An intermediate nitrogen compound (NO₂⁻) produced during nitrification — more toxic than nitrate but less toxic than ammonia. Nitrite binds to haemoglobin, reducing oxygen transport ("brown blood disease"). Any detectable level is dangerous; the target is always 0 ppm.',
    relatedTerms: ['ammonia', 'nitrate', 'nitrogen-cycle'],
  },
  {
    term: 'Nitrogen Cycle',
    slug: 'nitrogen-cycle',
    definition:
      'The biological process that converts toxic ammonia (from fish waste) into nitrite, then into less harmful nitrate, via beneficial bacteria. Understanding and establishing the nitrogen cycle is the single most important concept in fishkeeping. Every aquarium must be fully cycled before fish are added.',
    relatedTerms: ['cycling', 'ammonia', 'nitrite', 'nitrate', 'nitrification'],
  },
  {
    term: 'ORP (Oxidation-Reduction Potential)',
    slug: 'orp',
    definition:
      'A measurement in millivolts (mV) indicating the water\'s oxidising or reducing capacity. Higher ORP (300–450 mV) indicates cleaner, more oxygen-rich water. Monitored primarily in reef systems; can be increased via ozone or UV sterilisation.',
    relatedTerms: ['uv-sterilizer', 'ozone'],
  },
  {
    term: 'Osmoregulation',
    slug: 'osmoregulation',
    definition:
      'The physiological process by which fish maintain internal salt and water balance relative to their environment. Freshwater fish constantly excrete excess water; marine fish constantly drink to replace water lost through osmosis. Rapid changes in salinity, pH, or hardness overwhelm osmoregulation — hence the need for slow acclimation.',
    relatedTerms: ['acclimation', 'salinity'],
  },
  {
    term: 'Overflow',
    slug: 'overflow',
    definition:
      'A drain system — either built-in (reef-ready) or hang-on — that skims surface water from the display tank and feeds it to a sump below via gravity. Overflows maintain consistent water level, improve gas exchange by removing surface film, and enable sump-based filtration for large systems.',
    relatedTerms: ['sump', 'surface-agitation'],
  },
  {
    term: 'Ozone',
    slug: 'ozone',
    definition:
      'A powerful oxidiser (O₃) injected into aquarium water — usually via a protein skimmer — to destroy bacteria, parasites, and dissolved organics. Improves water clarity and ORP. Must be used with caution: excess ozone damages fish gills and invertebrates. Always use an ORP controller.',
    relatedTerms: ['orp', 'protein-skimmer'],
  },
  {
    term: 'PAR (Photosynthetically Active Radiation)',
    slug: 'par',
    definition:
      'The measurement of light intensity in the 400–700 nanometre wavelength range that drives photosynthesis in aquatic plants and corals. Measured in µmol/m²/s using a PAR meter. Low-light plants need 20–40 PAR; demanding corals need 200+ PAR at depth.',
    relatedTerms: ['led-lighting', 'photoperiod', 'planted-tank'],
  },
  {
    term: 'Peat Filtration',
    slug: 'peat-filtration',
    definition:
      'Running aquarium water through peat moss (in a filter bag or canister compartment) to release tannins and humic acids, softening the water and lowering pH. Creates blackwater conditions favoured by discus, bettas, and many South American species.',
    relatedTerms: ['blackwater', 'tannins', 'softwater'],
  },
  {
    term: 'pH',
    slug: 'ph',
    definition:
      'A logarithmic scale (0–14) measuring hydrogen ion concentration — the acidity or alkalinity of water. pH 7.0 is neutral; below 7 is acidic, above 7 is alkaline. Most tropical freshwater fish thrive at pH 6.5–7.5. Stability matters more than hitting an exact number — avoid swings greater than 0.3 per day.',
    relatedTerms: ['kh', 'alkalinity', 'buffer'],
  },
  {
    term: 'Photoperiod',
    slug: 'photoperiod',
    definition:
      'The daily duration of light exposure in an aquarium, typically controlled by a timer. Most freshwater tanks do well with 8–10 hours of light per day. Excessive photoperiod promotes algae; insufficient light stunts plant growth. Consistent timing helps regulate fish behaviour and breeding cycles.',
    relatedTerms: ['led-lighting', 'par'],
  },
  {
    term: 'Planted Tank',
    slug: 'planted-tank',
    definition:
      'An aquarium where living aquatic plants are a primary feature, not just decoration. Planted tanks require appropriate lighting (50–100+ PAR), nutrient dosing, and often CO₂ injection. Plants consume ammonia and nitrate, oxygenate water, and provide natural habitat — significantly improving water quality and fish health.',
    relatedTerms: ['ei-dosing', 'ferts', 'par', 'substrate'],
  },
  {
    term: 'Powerhead',
    slug: 'powerhead',
    definition:
      'A submersible water pump used to create directional flow and circulation inside an aquarium. Powerheads eliminate dead spots where detritus accumulates, improve oxygen distribution, and simulate natural current for species that prefer flowing water.',
    relatedTerms: ['gph', 'surface-agitation', 'turnover-rate'],
  },
  {
    term: 'PPM (Parts Per Million)',
    slug: 'ppm',
    definition:
      'A unit of concentration equivalent to milligrams per litre (mg/L) used for measuring dissolved substances in aquarium water — ammonia, nitrite, nitrate, calcium, etc. Water test kits report results in ppm.',
    relatedTerms: ['ammonia', 'nitrate', 'tds'],
  },
  {
    term: 'Predator Tank',
    slug: 'predator-tank',
    definition:
      'An aquarium specifically designed for large predatory fish — arowana, gar, snakeheads, oscars, piranhas. Predator tanks emphasise heavy filtration, robust construction, minimal décor (to avoid injury), and feeding protocols for carnivorous species.',
    relatedTerms: ['species-only-tank', 'bioload'],
  },
  {
    term: 'Protein Skimmer',
    slug: 'protein-skimmer',
    definition:
      'A device that mixes air and water to create fine bubbles; dissolved organic compounds attach to the bubbles and are collected as dark foam ("skimmate") in a collection cup. Essential equipment for marine and reef aquariums. Not used in freshwater systems.',
    relatedTerms: ['sump', 'ozone'],
  },
  {
    term: 'Quarantine Tank (QT)',
    slug: 'quarantine-tank',
    definition:
      'A separate aquarium where new fish are held for 4–6 weeks before introduction to the main display, allowing observation for disease symptoms and prophylactic treatment. A quarantine tank is the single most effective disease-prevention measure in fishkeeping.',
    relatedTerms: ['hospital-tank', 'ich', 'fallow-period'],
  },
  {
    term: 'Refractometer',
    slug: 'refractometer',
    definition:
      'An optical instrument that measures salinity by refracting light through a water sample. More accurate than a hydrometer and essential for marine and brackish aquariums. Calibrate with 0 TDS water or a reference solution before each use.',
    relatedTerms: ['salinity', 'specific-gravity', 'hydrometer'],
  },
  {
    term: 'Refugium',
    slug: 'refugium',
    definition:
      'A separate compartment — usually within a sump — where macroalgae, live rock, and micro-organisms grow in a protected environment. Refugiums export nutrients (via algae harvesting), produce natural live food (copepods, amphipods), and increase total system water volume for stability.',
    relatedTerms: ['sump', 'macroalgae', 'live-rock'],
  },
  {
    term: 'Reverse Osmosis (R/O) Water',
    slug: 'reverse-osmosis-water',
    definition:
      'Water purified by forcing tap water through a semi-permeable membrane, removing 90–99% of dissolved minerals, chlorine, chloramine, heavy metals, and contaminants. R/O water has near-zero TDS and is remineralised to target parameters before aquarium use. Essential for discus, stingrays, and reef systems.',
    relatedTerms: ['tds', 'softwater'],
  },
  {
    term: 'Salinity',
    slug: 'salinity',
    definition:
      'The total concentration of dissolved salts in water, expressed in parts per thousand (ppt) or specific gravity (SG). Freshwater: 0 ppt; brackish: 5–15 ppt; full marine: 34–36 ppt (SG 1.024–1.026). Measured with a refractometer or hydrometer.',
    relatedTerms: ['specific-gravity', 'brackish', 'refractometer'],
  },
  {
    term: 'Siphon',
    slug: 'siphon',
    definition:
      'A tube or hose used to drain water from an aquarium via gravity, typically during water changes. A gravel vacuum is a specialised siphon with a wide-mouth cylinder that agitates substrate while extracting water and debris.',
    relatedTerms: ['gravel-vacuum', 'water-change'],
  },
  {
    term: 'Slime Coat',
    slug: 'slime-coat',
    definition:
      'A thin layer of glycoprotein mucus covering a fish\'s body and gills, serving as the first line of defense against pathogens, parasites, and environmental irritants. Stress, poor water quality, and rough handling damage the slime coat. Water conditioners containing aloe vera or similar agents help restore it.',
    relatedTerms: ['dechlorinator', 'osmoregulation'],
  },
  {
    term: 'Softwater',
    slug: 'softwater',
    definition:
      'Water with low mineral content — typically 0–6 dGH and low KH. Many popular aquarium species from South America (discus, cardinal tetra, corydoras) and Southeast Asia (betta, chocolate gourami) naturally inhabit soft, acidic water. Achieved via R/O water, peat filtration, or rainwater collection.',
    relatedTerms: ['gh', 'dgh', 'blackwater', 'reverse-osmosis-water'],
  },
  {
    term: 'Specific Gravity (SG)',
    slug: 'specific-gravity',
    definition:
      'The ratio of seawater density to pure water density at the same temperature. Used interchangeably with salinity in marine fishkeeping. Natural seawater: SG 1.025 (35 ppt). Brackish: SG 1.005–1.015. Measured with a refractometer or hydrometer.',
    relatedTerms: ['salinity', 'refractometer', 'hydrometer'],
  },
  {
    term: 'Species-Only Tank',
    slug: 'species-only-tank',
    definition:
      'An aquarium dedicated to a single species or breeding group, eliminating interspecific aggression and competition. Essential for highly aggressive species (flowerhorns, male bettas), delicate species (seahorses), or breeding projects requiring controlled genetics.',
    relatedTerms: ['community-tank', 'predator-tank'],
  },
  {
    term: 'Substrate',
    slug: 'substrate',
    definition:
      'The material covering the bottom of an aquarium — gravel, sand, laterite, aquasoil, or bare-bottom. Substrate choice affects aesthetics, biological filtration capacity, plant growth, and maintenance requirements. Match substrate to species needs: sand for stingrays and corydoras, aquasoil for planted tanks.',
    relatedTerms: ['hardscape', 'laterite', 'deep-sand-bed'],
  },
  {
    term: 'Sump',
    slug: 'sump',
    definition:
      'An auxiliary tank — typically housed inside the aquarium stand — that receives water from the display via an overflow and returns it via a return pump. Sumps house filtration media, heaters, protein skimmers, and dosing equipment out of sight, while adding total water volume to the system.',
    relatedTerms: ['overflow', 'refugium', 'protein-skimmer'],
  },
  {
    term: 'Surface Agitation',
    slug: 'surface-agitation',
    definition:
      'Disruption of the water surface caused by filter returns, powerheads, or air stones. Surface agitation promotes gas exchange — allowing CO₂ to escape and atmospheric oxygen to dissolve into the water. Essential for maintaining adequate dissolved oxygen, especially in warm water.',
    relatedTerms: ['dissolved-oxygen', 'powerhead'],
  },
  {
    term: 'Tannins',
    slug: 'tannins',
    definition:
      'Organic compounds released by decomposing leaves, driftwood, and peat that tint water amber-brown and lower pH. Tannins create blackwater conditions and have mild antifungal and antibacterial properties. Beneficial for species from tannin-stained habitats; removed by activated carbon if unwanted.',
    relatedTerms: ['blackwater', 'driftwood', 'peat-filtration'],
  },
  {
    term: 'TDS (Total Dissolved Solids)',
    slug: 'tds',
    definition:
      'The total concentration of all dissolved minerals, salts, and organic matter in water, measured in ppm with a TDS meter. R/O water reads 0–10 ppm; tap water ranges 100–500+ ppm. TDS is a quick proxy for overall water purity but does not indicate which specific substances are present.',
    relatedTerms: ['ppm', 'reverse-osmosis-water'],
  },
  {
    term: 'Temperature Shock',
    slug: 'temperature-shock',
    definition:
      'Physiological stress caused by a rapid change in water temperature — typically more than 2 °C (3.5 °F) within a short period. Temperature shock can trigger ich outbreaks, suppress immune function, or cause death in severe cases. Prevented by proper acclimation and stable heater settings.',
    relatedTerms: ['acclimation', 'drip-acclimation', 'ich'],
  },
  {
    term: 'Trace Elements',
    slug: 'trace-elements',
    definition:
      'Minerals required in very small quantities by aquatic life — iron, manganese, zinc, boron, molybdenum, and others. Depleted through biological uptake and water changes, trace elements must be replenished via dosing (planted tanks) or water changes with properly mineralised water (marine systems).',
    relatedTerms: ['ferts', 'ei-dosing'],
  },
  {
    term: 'Trickle Filter (Wet-Dry Filter)',
    slug: 'trickle-filter',
    definition:
      'A filtration system where water trickles over media (bio-balls, plastic packing) exposed to air, maximising oxygen contact for aerobic bacteria. Extremely efficient at nitrification but does not remove nitrate. Often combined with a sump in large or predator systems.',
    relatedTerms: ['biological-filtration', 'sump', 'wet-dry-filter'],
  },
  {
    term: 'Turnover Rate',
    slug: 'turnover-rate',
    definition:
      'The number of times the entire tank volume passes through the filtration system per hour. General rule: 4× for community tanks, 6–8× for planted tanks, 8–10× for predator and high-bioload systems. Higher turnover improves water quality and oxygen levels.',
    relatedTerms: ['gph', 'canister-filter', 'sump'],
  },
  {
    term: 'UV Steriliser',
    slug: 'uv-sterilizer',
    definition:
      'A device that exposes aquarium water to ultraviolet light (254 nm) as it passes through a sealed chamber, killing free-floating algae, bacteria, and parasites. UV sterilisers reduce green water, pathogen transmission, and disease outbreaks. Flow rate must be slow enough for effective exposure.',
    relatedTerms: ['orp', 'quarantine-tank'],
  },
  {
    term: 'Water Change',
    slug: 'water-change',
    definition:
      'The routine practice of removing a portion of aquarium water (typically 10–30% weekly) and replacing it with clean, dechlorinated, temperature-matched water. Water changes dilute nitrate, replenish minerals, and remove dissolved organics that filtration cannot address. The single most important maintenance task.',
    relatedTerms: ['gravel-vacuum', 'siphon', 'dechlorinator', 'nitrate'],
  },
  {
    term: 'Water Column',
    slug: 'water-column',
    definition:
      'The body of water in an aquarium from substrate to surface. "Water column feeders" describes plants that absorb nutrients from the water (versus root feeders). Liquid fertilisers dose the water column; root tabs target the substrate.',
    relatedTerms: ['ferts', 'planted-tank'],
  },
  {
    term: 'Wet-Dry Filter',
    slug: 'wet-dry-filter',
    definition:
      'Another name for a trickle filter — a system where biological media is exposed to both water and air simultaneously, supporting extremely efficient aerobic bacterial colonies. Common in large freshwater predator setups and fish-only marine systems.',
    relatedTerms: ['trickle-filter', 'biological-filtration', 'sump'],
  },
  {
    term: 'Zooplankton',
    slug: 'zooplankton',
    definition:
      'Tiny aquatic animals — copepods, rotifers, daphnia, brine shrimp nauplii — that serve as natural food for fish fry, small species, and filter-feeding invertebrates. Culturing zooplankton at home provides nutritious live food superior to most prepared diets.',
    relatedTerms: ['fry', 'refugium'],
  },
];
