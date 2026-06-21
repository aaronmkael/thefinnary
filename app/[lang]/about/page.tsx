import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/seo/jsonLd';
import { getAuthorBySlug } from '@/lib/data/authors';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.aboutTitle ?? 'About The Fish Collection | Your Expert Source for Rare Aquatic Life',
    description: dict.seo?.aboutDescription ?? 'Founded in Helsinki by Head Aquarist Teemu Suoninen, The Fish Collection is your trusted source for exotic fish. 15+ years of expertise, CITES certified, live arrival guaranteed.',
    path: '/about/',
    lang: params.lang,
  });
}

export default async function AboutPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);
  const teemu = getAuthorBySlug('teemu-suoninen');

  return (
    <>
      <JsonLd data={organizationSchema} />

      {/* Hero */}
      <section className="bg-abyss">
        <div className="page-container py-16 md:py-24 text-center">
          <p className="font-heading text-[11px] tracking-widest text-lagoon/60 uppercase mb-4 font-semibold">
            {dict.about?.estHelsinki ?? 'Est. 2009 \u00b7 Helsinki'}
          </p>
          <h1 className="font-heading text-display-md md:text-display-lg tracking-tight text-surface">
            {dict.about?.aboutTheFishCollection ?? 'About The Fish Collection'}
          </h1>
          <p className="font-body italic text-lg text-surface/40 mt-8 max-w-readable mx-auto">
            {dict.about?.subtitle ?? 'Your expert source for rare aquatic life'}
          </p>
        </div>
      </section>

      <div className="page-container py-6">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: dict.navigation?.about ?? 'About', href: '/about/' },
          ]}
        />
      </div>

      {/* Story */}
      <section className="page-container pb-16 md:pb-24">
        <div className="max-w-readable mx-auto">
          <p className="section-label mb-3">{dict.about?.ourStory ?? 'Our Story'}</p>
          <h2 className="font-heading text-h1 text-ink mb-6">
            {dict.about?.storyHeading ?? 'Where Marine Biology Meets Passion'}
          </h2>

          <div className="prose-tfc">
            <p>
              {dict.about?.storyP1 ?? "The Fish Collection was founded in 2009 in Helsinki, Finland, by aquarist and marine biologist Teemu Suoninen. What began as a specialist import operation for Northern European collectors has grown into one of the world's most trusted sources for rare and exotic aquarium fish."}
            </p>
            <p>
              {dict.about?.storyP2 ?? 'Our approach is simple: treat every fish with the same care and provenance tracking that the best specialists in the world provide. Every fish in our catalogue has been hand-selected for genetic quality, colouration, finnage integrity, and temperament. We maintain full lineage documentation, CITES certification where applicable, and detailed health records for every animal.'}
            </p>
            <p>
              {dict.about?.storyP3 ?? 'Unlike mass-market fish retailers, we operate on a curated inventory model. Our stock turns slowly — we would rather hold three exceptional fish than thirty average ones. This philosophy extends to our customer relationships: we provide ongoing care support, species-specific guidance, and emergency consultation to every buyer, whether they are adding a $45 Dragon Goby or a $28,500 Platinum Arowana to their collection.'}
            </p>

            <h2>{dict.about?.expertiseHeading ?? 'Our Expertise'}</h2>
            <p>
              {dict.about?.expertiseIntro ?? 'With over fifteen years of hands-on experience in exotic fish husbandry, our team brings deep knowledge across freshwater, brackish, and marine species. Our areas of specialisation include:'}
            </p>
            <ul>
              <li><strong>{dict.about?.expertise1Title ?? 'Asian Arowana breeding and certification'}</strong> — {dict.about?.expertise1Desc ?? "We maintain direct relationships with CITES-certified farms in Southeast Asia and can trace every fish's lineage to its breeding facility."}</li>
              <li><strong>{dict.about?.expertise2Title ?? 'Rare marine species'}</strong> — {dict.about?.expertise2Desc ?? 'From the Peppermint Angelfish collected at 120-metre depths to the Gem Tang harvested from a single Hawaiian reef, we source species that most retailers cannot access.'}</li>
              <li><strong>{dict.about?.expertise3Title ?? 'Water chemistry and system design'}</strong> — {dict.about?.expertise3Desc ?? 'We consult on aquarium builds from 100 to 5,000 gallons, including custom sump design, UV sterilisation, and automated parameter monitoring.'}</li>
              <li><strong>{dict.about?.expertise4Title ?? 'CITES compliance and international shipping'}</strong> — {dict.about?.expertise4Desc ?? 'We handle all documentation, export permits, and customs coordination for international orders.'}</li>
            </ul>

            <h2>{dict.about?.guaranteeHeading ?? 'Our Guarantee'}</h2>
            <p>
              {dict.about?.guaranteeP1 ?? 'Every fish purchased from The Fish Collection is backed by our unconditional live arrival guarantee. We use temperature-controlled, insulated packaging with oxygenated water and ship exclusively via overnight express carriers. If a fish does not arrive alive and in good health, we replace it or issue a full refund — no exceptions, no fine print.'}
            </p>
            <p>
              {dict.about?.guaranteeP2 ?? 'Beyond the guarantee, we provide complimentary acclimation guidance, species-specific care sheets, and 30 days of post-purchase support from our aquarist team. For high-value fish, we offer extended consultation including water parameter verification and quarantine protocol guidance.'}
            </p>

            <h2>{dict.about?.teamHeading ?? 'The Team'}</h2>
            <p>
              {dict.about?.teamText ?? 'The Fish Collection is led by Head Aquarist Teemu Suoninen, supported by a network of specialist breeders, marine biologists, and logistics partners across three continents. Our advisory board includes ichthyologists, conservation biologists, and veteran aquarium designers.'}
            </p>
          </div>

          {/* Founder card */}
          {teemu && (
            <div className="mt-12 p-6 md:p-8 bg-reef border border-mist rounded-md">
              <p className="section-label mb-3">{dict.about?.founderLabel ?? 'Founder & Head Aquarist'}</p>
              <h3 className="font-heading text-h2 text-ink mb-1">
                <Link href={`/${params.lang}/authors/${teemu.slug}/`} className="hover:text-[#1E4A58] transition-colors">
                  {teemu.name}
                </Link>
              </h3>
              <p className="font-heading text-xs tracking-wide text-wade mb-4">{teemu.jobTitle}</p>
              <p className="font-body text-base text-deep-text leading-relaxed mb-4">{teemu.shortBio}</p>
              <div className="flex flex-wrap gap-2">
                {teemu.credentials.map((cred) => (
                  <span key={cred} className="font-mono text-sku text-wade bg-surface border border-mist px-2 py-0.5 rounded-xs">
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="w-12 h-[2px] bg-lagoon/40 mx-auto mb-8" />
            <p className="font-body text-base text-deep-text mb-6">
              {dict.about?.exploreCollection ?? 'Ready to explore our collection?'}
            </p>
            <div className="flex justify-center gap-3">
              <Link href={`/${params.lang}/exotic-fish/`} className="btn-primary">
                {dict.common?.browseCollection ?? 'Browse Collection'}
              </Link>
              <Link href={`/${params.lang}/contact/`} className="btn-secondary">
                {dict.common?.contactUs ?? 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
