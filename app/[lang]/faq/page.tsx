import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { buildFAQ } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';

const faqSections = [
  {
    title: 'Ordering & Payment',
    faqs: [
      { question: 'How do I place an order?', answer: 'Browse our collection, add fish to your cart, and proceed to checkout. We accept all major credit cards, wire transfers for orders over $5,000, and PayPal. Large orders ($10,000+) may qualify for custom payment arrangements — contact our team.' },
      { question: 'Are your prices negotiable?', answer: 'Our listed prices reflect fair market value based on quality, rarity, and provenance. For multiple-fish purchases or repeat customers, we may offer collector pricing — reach out to discuss.' },
      { question: 'Do you offer financing?', answer: 'For purchases over $5,000, we offer interest-free payment plans of 3–6 months through our financing partner. Select "Payment Plan" at checkout for available options.' },
      { question: 'Can I reserve a fish?', answer: 'Yes. Contact our team to place a 48-hour hold on any fish with a 10% refundable deposit. This is particularly useful for high-value or one-of-a-kind fish.' },
    ],
  },
  {
    title: 'Shipping & Delivery',
    faqs: [
      { question: 'How much does shipping cost?', answer: 'Shipping is free for all orders within the continental United States via FedEx Priority Overnight. Alaska, Hawaii, and international orders are quoted at checkout.' },
      { question: 'How are fish packaged?', answer: 'Each fish is individually bagged in conditioned water with pure oxygen, placed in insulated foam-lined boxes with temperature-calibrated heat/cold packs. High-value fish ($5,000+) receive double-bag redundancy and GPS temperature logging.' },
      { question: 'What days do you ship?', answer: 'We ship Monday through Wednesday to avoid weekend delays at carrier sorting facilities. You select your preferred delivery date at checkout.' },
      { question: 'Do you ship internationally?', answer: 'Yes, to most countries where the species is legal to import. We handle CITES permits, phytosanitary certificates, and customs coordination. Lead times are 2–4 weeks for international shipments.' },
    ],
  },
  {
    title: 'Live Arrival Guarantee',
    faqs: [
      { question: 'What is your live arrival guarantee?', answer: 'Every fish purchased from The Fish Collection is covered by our unconditional live arrival guarantee. If a fish does not arrive alive and in good health, we replace it or issue a full refund — no exceptions.' },
      { question: 'How do I file a DOA claim?', answer: 'Photograph the fish in the sealed bag within 2 hours of delivery. Email the photos with your order number to support@thefishcollection.com. We respond within 2 hours during business days and process replacements or refunds within 24 hours.' },
      { question: 'Can I return a healthy fish?', answer: 'Due to the nature of live animals, we cannot accept returns on healthy fish. If a fish develops shipping-related health issues within 72 hours, contact us for case-by-case resolution.' },
    ],
  },
  {
    title: 'Species & Care',
    faqs: [
      { question: 'Do you provide care guidance?', answer: 'Yes. Every order includes a species-specific care sheet. We also publish comprehensive species guides, care guides, and blog articles written by our team of certified aquarists. High-value purchases include 30 days of complimentary post-purchase support.' },
      { question: 'Can you recommend fish for my tank?', answer: 'Absolutely. Tell us your tank size, existing inhabitants, water parameters, and budget, and our aquarists will recommend compatible species from our current inventory. Contact us via the website or email.' },
      { question: 'What is the minimum tank size for your fish?', answer: 'Every product listing includes the minimum recommended tank size. Our species range from nano-tank-compatible (10 gallons) to large predatory fish requiring 500+ gallon systems. Browse our species guides for detailed tank requirements.' },
      { question: 'Do you quarantine fish before shipping?', answer: 'Yes. All fish undergo a minimum 14-day quarantine in our facility. During quarantine, we observe for parasites, bacterial infections, and feeding response. Fish that do not pass quarantine are not listed for sale.' },
    ],
  },
  {
    title: 'Legal & Compliance',
    faqs: [
      { question: 'Are your fish CITES certified?', answer: 'All CITES-listed species (including Asian Arowana) come with full CITES documentation, microchip verification, and export permits. We handle all compliance paperwork.' },
      { question: 'Are exotic fish legal to own?', answer: 'Laws vary by state and country. Most exotic aquarium fish are legal in most US states, but some species face restrictions in specific jurisdictions. We verify legality for your delivery address before processing the order and will notify you if there are any restrictions.' },
      { question: 'Do you collect from the wild?', answer: 'The majority of our inventory is captive-bred from certified facilities. Wild-collected fish are sourced only from sustainable, regulated fisheries and carry full chain-of-custody documentation. Each listing specifies whether the fish is captive-bred or wild-collected.' },
    ],
  },
];

const allFaqs = faqSections.flatMap((s) => s.faqs);

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.faqTitle ?? 'Frequently Asked Questions | Exotic Fish FAQ | The Fish Collection',
    description: dict.seo?.faqDescription ?? 'Answers to common questions about buying exotic fish from The Fish Collection: ordering, shipping, live arrival guarantee, care guidance, CITES compliance, and more.',
    path: '/faq/',
    lang: params.lang,
  });
}

export default async function FAQPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <>
      <JsonLd data={buildFAQ(allFaqs)} />

      <section className="bg-abyss">
        <div className="page-container py-12 md:py-16 text-center">
          <p className="section-label text-lagoon/50 mb-3">Support</p>
          <h1 className="font-heading text-display-md tracking-tight text-surface">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <div className="page-container py-6">
        <Breadcrumb lang={params.lang} items={[{ name: dict.common?.home ?? 'Home', href: '/' }, { name: dict.navigation?.faq ?? 'FAQ', href: '/faq/' }]} />
      </div>

      <section className="page-container pb-20">
        <div className="max-w-readable mx-auto">
          {/* Jump links */}
          <nav className="mb-12 p-5 bg-reef border border-mist rounded-md">
            <p className="section-label mb-3">Jump to Section</p>
            <div className="flex flex-wrap gap-3">
              {faqSections.map((section) => (
                <a
                  key={section.title}
                  href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="font-heading text-xs tracking-wide text-deep-text hover:text-[#1E4A58] transition-colors font-semibold"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>

          {/* FAQ sections */}
          {faqSections.map((section, si) => (
            <section
              key={section.title}
              id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className={si > 0 ? 'mt-12 pt-12 border-t border-mist' : ''}
            >
              <h2 className="font-heading text-h2 text-ink mb-6">{section.title}</h2>
              <div className="space-y-3">
                {section.faqs.map((faq, i) => (
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
          ))}

          {/* CTA */}
          <div className="mt-16 text-center border-t border-mist pt-12">
            <p className="font-heading text-h2 text-ink mb-3">Still have questions?</p>
            <p className="font-body text-base text-wade mb-6">Our aquarist team responds within 2 hours during business days.</p>
            <div className="flex justify-center gap-3">
              <Link href={`/${params.lang}/contact/`} className="btn-primary">{dict.common?.contactUs ?? 'Contact Us'}</Link>
              <Link href={`/${params.lang}/exotic-fish/`} className="btn-secondary">{dict.common?.browseCollection ?? 'Browse Collection'}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
