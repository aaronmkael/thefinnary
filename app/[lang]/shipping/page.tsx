import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { buildFAQ } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.shippingTitle ?? 'Shipping & Delivery | Free Overnight Fish Shipping | The Fish Collection',
    description: dict.seo?.shippingDescription ?? 'Free overnight shipping on all exotic fish orders. Temperature-controlled packaging, live arrival guaranteed, Monday-Wednesday delivery. Learn about our shipping process.',
    path: '/shipping/',
    lang: params.lang,
  });
}

export default async function ShippingPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  const faqs = [
    { question: dict.shipping?.faq1Q ?? 'How much does shipping cost?', answer: dict.shipping?.faq1A ?? 'All orders within the continental United States ship free via overnight express. Alaska, Hawaii, and international orders are quoted at checkout based on destination and species requirements.' },
    { question: dict.shipping?.faq2Q ?? 'How are fish packaged for shipping?', answer: dict.shipping?.faq2A ?? 'Each fish is individually bagged in species-appropriate water with pure oxygen, then placed in insulated foam-lined boxes with heat or cold packs calibrated to the forecast temperature along the shipping route. Large or high-value fish receive double-bag redundancy.' },
    { question: dict.shipping?.faq3Q ?? 'Do you ship internationally?', answer: dict.shipping?.faq3A ?? 'Yes, we ship to most countries where the species is legal to import. International orders require additional documentation (CITES permits, phytosanitary certificates, import licenses) which we coordinate on your behalf. Lead times are typically 2-4 weeks for international shipments.' },
    { question: dict.shipping?.faq4Q ?? 'What carriers do you use?', answer: dict.shipping?.faq4A ?? 'We ship exclusively via FedEx Priority Overnight and UPS Next Day Air for domestic orders. International shipments use specialist livestock freight forwarders with temperature-controlled cargo holds.' },
    { question: dict.shipping?.faq5Q ?? 'Can I choose my delivery date?', answer: dict.shipping?.faq5A ?? 'Yes. We ship Monday through Wednesday to avoid weekend delays at sorting facilities. You select your preferred delivery date at checkout, and we coordinate packing and pickup accordingly.' },
    { question: dict.shipping?.faq6Q ?? 'What happens if my fish arrives dead?', answer: dict.shipping?.faq6A ?? 'Our 100% live arrival guarantee covers every shipment. Photograph the unopened bag within 2 hours of delivery, email the images to our support team, and we will either reship a replacement fish or issue a full refund — your choice.' },
  ];

  return (
    <>
      <JsonLd data={buildFAQ(faqs)} />

      <section className="bg-abyss">
        <div className="page-container py-12 md:py-16 text-center">
          <p className="section-label text-lagoon/50 mb-3">{dict.shipping?.logisticsLabel ?? 'Logistics'}</p>
          <h1 className="font-heading text-display-md tracking-tight text-surface">
            {dict.shipping?.shippingAndDelivery ?? 'Shipping & Delivery'}
          </h1>
        </div>
      </section>

      <div className="page-container py-6">
        <Breadcrumb lang={params.lang} items={[{ name: dict.common?.home ?? 'Home', href: '/' }, { name: dict.shipping?.shippingAndDelivery ?? 'Shipping & Delivery', href: '/shipping/' }]} />
      </div>

      <section className="page-container pb-20">
        <div className="max-w-readable mx-auto">
          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { title: dict.shipping?.freeOvernight ?? 'Free Overnight', detail: dict.shipping?.freeOvernightDesc ?? 'Continental US orders ship free via FedEx Priority Overnight.' },
              { title: dict.shipping?.liveArrival ?? 'Live Arrival Guarantee', detail: dict.shipping?.liveArrivalDesc ?? '100% guaranteed or full replacement — no exceptions.' },
              { title: dict.shipping?.monWedDelivery ?? 'Mon-Wed Delivery', detail: dict.shipping?.monWedDeliveryDesc ?? 'We ship early-week to avoid weekend sorting delays.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 border border-mist rounded-md">
                <p className="font-heading text-xs tracking-widest text-ink mb-1 uppercase font-semibold">{item.title}</p>
                <p className="font-body text-sm text-wade">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="prose-tfc">
            <h2>{dict.shipping?.howWeShipHeading ?? 'How We Ship Live Fish'}</h2>
            <p>
              {dict.shipping?.howWeShipP1 ?? 'Shipping live aquatic animals is a science. Every order is packed by our logistics team — not a warehouse worker, but trained aquarists who understand species-specific stress responses, temperature tolerances, and oxygen requirements.'}
            </p>
            <p>
              {dict.shipping?.howWeShipP2 ?? 'Each fish is individually bagged in conditioned water matched to its home tank parameters. We add pure oxygen (not air) and seal with a double-rubber-band closure. The bag is placed inside an insulated EPS foam box with gel heat packs or cold packs calibrated to the 24-hour forecast along the shipping route. High-value fish ($5,000+) receive double-bag redundancy, a secondary insulation layer, and a GPS temperature logger in the box.'}
            </p>

            <h2>{dict.shipping?.domesticHeading ?? 'Domestic Shipping'}</h2>
            <p>
              {dict.shipping?.domesticP1 ?? 'All orders within the continental United States ship free via FedEx Priority Overnight or UPS Next Day Air. We ship Monday through Wednesday, with delivery guaranteed by 10:30 AM the following business day.'}
            </p>
            <p>
              {dict.shipping?.domesticP2 ?? 'Alaska and Hawaii orders incur a supplemental shipping charge (quoted at checkout) and may require an additional transit day depending on carrier availability.'}
            </p>

            <h2>{dict.shipping?.internationalHeading ?? 'International Shipping'}</h2>
            <p>
              {dict.shipping?.internationalP1 ?? 'We ship to most countries where the ordered species is legal to import. International orders require CITES permits (for listed species), phytosanitary certificates, and destination-country import licenses. We handle all documentation and coordinate with customs brokers on your behalf.'}
            </p>
            <p>
              {dict.shipping?.internationalP2 ?? 'International shipping costs are calculated at checkout based on destination, fish size, and documentation requirements. Typical lead times are 2-4 weeks, including permit processing.'}
            </p>

            <h2>{dict.shipping?.acclimationHeading ?? 'Acclimation on Arrival'}</h2>
            <p>
              {dict.shipping?.acclimationIntro ?? 'Every shipment includes a printed acclimation guide specific to your species. The general process:'}
            </p>
            <ol>
              <li>{dict.shipping?.acclimationStep1 ?? 'Float the sealed bag in your aquarium for 15-20 minutes to equalize temperature.'}</li>
              <li>{dict.shipping?.acclimationStep2 ?? 'Open the bag and add small amounts of tank water every 5 minutes for 30-45 minutes.'}</li>
              <li>{dict.shipping?.acclimationStep3 ?? 'Net the fish into the tank. Discard the shipping water — never pour it into your aquarium.'}</li>
              <li>{dict.shipping?.acclimationStep4 ?? 'Keep lights off for 4-6 hours to reduce stress.'}</li>
            </ol>
            <p>
              {dict.shipping?.acclimationNote ?? 'For high-value fish, we provide a detailed drip-acclimation protocol and offer phone/video support during the process.'}
            </p>
          </div>

          {/* FAQs */}
          <section className="mt-16">
            <h2 className="font-heading text-h2 text-ink mb-6">{dict.shipping?.faqHeading ?? 'Shipping FAQ'}</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="faq-accordion border border-mist rounded-md">
                  <summary className="flex items-center justify-between px-5 py-4 font-heading text-lg text-ink cursor-pointer hover:bg-reef/60 transition-colors">
                    {faq.question}
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="font-body text-base text-deep-text leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-12 text-center">
            <p className="font-body text-sm text-wade mb-4">{dict.shipping?.questionsAboutShipping ?? 'Questions about shipping?'}</p>
            <Link href={`/${params.lang}/contact/`} className="btn-ghost">{dict.common?.contactOurTeam ?? 'Contact Our Team'} &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
