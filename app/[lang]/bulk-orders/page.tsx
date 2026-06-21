import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { LOCALES } from '@/lib/seo/i18n';

export function generateStaticParams() {
  return LOCALES.map(({ lang }) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.bulkTitle ?? 'Bulk & Wholesale Exotic Fish Orders | The Fish Collection',
    description: dict.seo?.bulkDescription ?? 'Order exotic fish in bulk for aquarium shops, breeders, zoos, and public aquariums. Custom wholesale pricing on 200+ species. CITES certified, live arrival guaranteed.',
    path: '/bulk-orders/',
    lang: params.lang,
  });
}

const bulkSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Bulk & Wholesale Exotic Fish Orders',
  description: 'Wholesale pricing on exotic fish for retailers, breeders, and institutions.',
  mainEntity: {
    '@type': 'Organization',
    name: 'The Fish Collection',
    email: 'wholesale@thefishcollection.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'wholesale@thefishcollection.com',
      contactType: 'sales',
      availableLanguage: ['English'],
    },
  },
};

export default async function BulkOrdersPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <>
      <JsonLd data={bulkSchema} />

      {/* Hero */}
      <section className="bg-abyss relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 70% 50%, rgba(41,168,196,0.2) 0%, transparent 70%)',
          }}
        />
        <div className="page-container relative py-16 md:py-24">
          <p className="section-label text-lagoon/60 mb-3">{dict.bulk?.wholesaleAndTrade ?? 'Wholesale & Trade'}</p>
          <h1 className="font-heading text-display-lg md:text-display-xl font-bold text-white max-w-[700px]">
            {dict.bulk?.bulkAndWholesale ?? 'Bulk & Wholesale'}
            <br />
            <span className="text-shallows">{dict.bulk?.exoticFishOrders ?? 'Exotic Fish Orders'}</span>
          </h1>
          <p className="font-body text-body-lg text-white/50 mt-6 max-w-[560px]">
            {dict.bulk?.bulkIntro ?? 'Custom pricing for aquarium retailers, professional breeders, zoos, public aquariums, and institutional buyers. All species CITES certified with live arrival guaranteed.'}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="page-container py-4">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: dict.navigation?.bulkOrders ?? 'Bulk Orders', href: '/bulk-orders/' },
          ]}
        />
      </div>

      {/* Main content */}
      <section className="page-container pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Info + Form */}
          <div>
            {/* Who we serve */}
            <div className="mb-12">
              <h2 className="font-heading text-h2 font-bold text-ink mb-6">{dict.bulk?.whoWeWorkWith ?? 'Who we work with'}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: dict.bulk?.retailersTitle ?? 'Aquarium Retailers',
                    desc: dict.bulk?.retailersDesc ?? 'Stock your store with rare and exotic species that set you apart from the competition.',
                  },
                  {
                    title: dict.bulk?.breedersTitle ?? 'Professional Breeders',
                    desc: dict.bulk?.breedersDesc ?? 'Premium breeding stock with verified genetics and full lineage documentation.',
                  },
                  {
                    title: dict.bulk?.zoosTitle ?? 'Zoos & Public Aquariums',
                    desc: dict.bulk?.zoosDesc ?? 'Healthy, quarantined specimens for exhibition with full health certificates.',
                  },
                  {
                    title: dict.bulk?.designersTitle ?? 'Interior Designers',
                    desc: dict.bulk?.designersDesc ?? 'Curated selections for luxury residential and commercial aquarium installations.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-reef border border-mist rounded-md p-5">
                    <h3 className="font-heading text-h4 font-bold text-ink mb-2">{item.title}</h3>
                    <p className="font-body text-body-sm text-deep-text leading-loose">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What you get */}
            <div className="mb-12">
              <h2 className="font-heading text-h2 font-bold text-ink mb-6">{dict.bulk?.whatsIncluded ?? "What's included"}</h2>
              <div className="space-y-4">
                {[
                  dict.bulk?.included1 ?? 'Custom wholesale pricing based on volume and species',
                  dict.bulk?.included2 ?? 'Dedicated account manager with 15+ years aquarist expertise',
                  dict.bulk?.included3 ?? 'Priority access to new arrivals and rare specimens',
                  dict.bulk?.included4 ?? 'Full CITES documentation and health certificates',
                  dict.bulk?.included5 ?? 'Temperature-controlled overnight shipping with live arrival guarantee',
                  dict.bulk?.included6 ?? 'Quarantine and acclimation support for institutional buyers',
                  dict.bulk?.included7 ?? 'Net 30 payment terms for established accounts',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-[6px] h-[6px] bg-lagoon rounded-pill shrink-0" />
                    <p className="font-body text-base text-deep-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry form */}
            <div>
              <h2 className="font-heading text-h2 font-bold text-ink mb-6">{dict.bulk?.requestQuote ?? 'Request a Quote'}</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="bulk-name" className="font-heading text-[11px] font-bold tracking-widest text-wade uppercase block mb-2">
                      {dict.bulk?.fullName ?? 'Full Name'}
                    </label>
                    <input
                      type="text"
                      id="bulk-name"
                      name="name"
                      required
                      className="w-full h-[44px] font-heading text-[15px] text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors placeholder:text-drift placeholder:italic"
                    />
                  </div>
                  <div>
                    <label htmlFor="bulk-email" className="font-heading text-[11px] font-bold tracking-widest text-wade uppercase block mb-2">
                      {dict.bulk?.businessEmail ?? 'Business Email'}
                    </label>
                    <input
                      type="email"
                      id="bulk-email"
                      name="email"
                      required
                      className="w-full h-[44px] font-heading text-[15px] text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors placeholder:text-drift placeholder:italic"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="bulk-company" className="font-heading text-[11px] font-bold tracking-widest text-wade uppercase block mb-2">
                      {dict.bulk?.companyOrg ?? 'Company / Organization'}
                    </label>
                    <input
                      type="text"
                      id="bulk-company"
                      name="company"
                      className="w-full h-[44px] font-heading text-[15px] text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors placeholder:text-drift placeholder:italic"
                    />
                  </div>
                  <div>
                    <label htmlFor="bulk-type" className="font-heading text-[11px] font-bold tracking-widest text-wade uppercase block mb-2">
                      {dict.bulk?.businessType ?? 'Business Type'}
                    </label>
                    <select
                      id="bulk-type"
                      name="type"
                      className="w-full h-[44px] font-heading text-[15px] text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors"
                    >
                      <option value="">{dict.bulk?.selectPlaceholder ?? 'Select...'}</option>
                      <option value="retailer">{dict.bulk?.optionRetailer ?? 'Aquarium Retailer'}</option>
                      <option value="breeder">{dict.bulk?.optionBreeder ?? 'Professional Breeder'}</option>
                      <option value="zoo">{dict.bulk?.optionZoo ?? 'Zoo / Public Aquarium'}</option>
                      <option value="designer">{dict.bulk?.optionDesigner ?? 'Interior Designer'}</option>
                      <option value="other">{dict.bulk?.optionOther ?? 'Other'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="bulk-species" className="font-heading text-[11px] font-bold tracking-widest text-wade uppercase block mb-2">
                    {dict.bulk?.speciesNeeded ?? 'Species & Quantities Needed'}
                  </label>
                  <textarea
                    id="bulk-species"
                    name="species"
                    rows={4}
                    placeholder={dict.bulk?.speciesPlaceholder ?? 'e.g., 10x Flowerhorn Cichlid, 5x Red Tail Catfish, 20x Discus (mixed varieties)...'}
                    required
                    className="w-full font-body text-base text-ink bg-surface border border-mist rounded-xs px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors resize-y placeholder:text-drift placeholder:italic"
                  />
                </div>

                <div>
                  <label htmlFor="bulk-notes" className="font-heading text-[11px] font-bold tracking-widest text-wade uppercase block mb-2">
                    {dict.bulk?.additionalNotes ?? 'Additional Notes'} <span className="text-drift">{dict.bulk?.optional ?? '(optional)'}</span>
                  </label>
                  <textarea
                    id="bulk-notes"
                    name="notes"
                    rows={3}
                    className="w-full font-body text-base text-ink bg-surface border border-mist rounded-xs px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors resize-y placeholder:text-drift placeholder:italic"
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  {dict.bulk?.requestWholesaleQuote ?? 'Request Wholesale Quote'}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-[96px] space-y-6">
            {/* Direct contact card */}
            <div className="bg-reef border border-mist rounded-md p-6">
              <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-4">
                {dict.bulk?.directContact ?? 'Direct Contact'}
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-heading text-h4 font-bold text-ink mb-1">{dict.bulk?.wholesaleTeam ?? 'Wholesale Team'}</p>
                  <a
                    href="mailto:wholesale@thefishcollection.com"
                    className="font-mono text-param text-current hover:text-ink transition-colors underline decoration-lagoon/30 underline-offset-2"
                  >
                    wholesale@thefishcollection.com
                  </a>
                </div>
                <div>
                  <p className="font-heading text-h4 font-bold text-ink mb-1">{dict.bulk?.phone ?? 'Phone'}</p>
                  <a
                    href="tel:+358501234567"
                    className="font-mono text-param text-current hover:text-ink transition-colors"
                  >
                    +358 50 123 4567
                  </a>
                  <p className="font-heading text-[11px] text-wade mt-1">{dict.bulk?.businessHours ?? 'Mon-Fri, 9AM-6PM EET'}</p>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-foam border border-mist rounded-md p-6">
              <p className="font-heading text-h3 font-bold text-current mb-1">{dict.bulk?.responseTime ?? 'Under 4 Hours'}</p>
              <p className="font-body text-body-sm text-deep-text">
                {dict.bulk?.responseTimeDesc ?? 'Average response time for wholesale inquiries during business hours.'}
              </p>
            </div>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                { title: dict.bulk?.speciesAvailable ?? '200+ Species Available', desc: dict.bulk?.speciesAvailableDesc ?? 'Freshwater and saltwater' },
                { title: dict.bulk?.volumeDiscounts ?? 'Volume Discounts', desc: dict.bulk?.volumeDiscountsDesc ?? 'Up to 40% off retail' },
                { title: dict.bulk?.netTerms ?? 'Net 30 Terms', desc: dict.bulk?.netTermsDesc ?? 'For established accounts' },
                { title: dict.bulk?.worldwideShipping ?? 'Worldwide Shipping', desc: dict.bulk?.worldwideShippingDesc ?? 'IATA certified packaging' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 py-2">
                  <span className="mt-1.5 w-[5px] h-[5px] bg-lagoon rounded-pill shrink-0" />
                  <div>
                    <p className="font-heading text-[13px] font-bold text-ink">{item.title}</p>
                    <p className="font-heading text-[11px] text-wade">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Browse CTA */}
            <Link
              href={`/${params.lang}/exotic-fish/`}
              className="btn-secondary w-full text-center"
            >
              {dict.bulk?.browseFullCatalogue ?? 'Browse Full Catalogue'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
