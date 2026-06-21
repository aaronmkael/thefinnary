import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { buildFAQ } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';

const faqs = [
  { question: 'What does the live arrival guarantee cover?', answer: 'Our guarantee covers any fish that arrives dead or in visibly distressed condition (e.g. severe fin damage, obvious disease symptoms). You must photograph the fish in the unopened bag within 2 hours of delivery and contact our team with the images.' },
  { question: 'How do I file a live arrival claim?', answer: 'Email support@thefishcollection.com with your order number, clear photos of the fish in the sealed bag, and a photo of the shipping label with the delivery timestamp. Our team responds within 2 hours during business days.' },
  { question: 'Can I return a healthy fish?', answer: 'Due to the nature of live animals, we cannot accept returns on healthy fish. However, if the fish develops health issues within 72 hours of delivery that are attributable to shipping stress, we will work with you on a resolution.' },
  { question: 'How long does a refund take?', answer: 'Refunds are processed within 24 hours of claim approval and typically appear on your statement within 3–5 business days depending on your bank.' },
  { question: 'Do you replace or refund?', answer: 'Your choice. We can reship an identical or equivalent fish at no charge, or issue a full refund including the original purchase price. Replacement fish ship with the same live arrival guarantee.' },
];

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.returnsTitle ?? 'Returns & Live Arrival Guarantee | The Fish Collection',
    description: dict.seo?.returnsDescription ?? '100% live arrival guarantee on every fish. Full replacement or refund if your fish does not arrive alive. Learn about our return policy and claim process.',
    path: '/returns/',
    lang: params.lang,
  });
}

export default async function ReturnsPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <>
      <JsonLd data={buildFAQ(faqs)} />

      <section className="bg-abyss">
        <div className="page-container py-12 md:py-16 text-center">
          <p className="section-label text-lagoon/50 mb-3">Our Promise</p>
          <h1 className="font-heading text-display-md tracking-tight text-surface">
            {dict.footer?.returns ?? 'Returns & Guarantees'}
          </h1>
        </div>
      </section>

      <div className="page-container py-6">
        <Breadcrumb lang={params.lang} items={[{ name: dict.common?.home ?? 'Home', href: '/' }, { name: dict.footer?.returns ?? 'Returns & Guarantees', href: '/returns/' }]} />
      </div>

      <section className="page-container pb-20">
        <div className="max-w-readable mx-auto">
          {/* Guarantee highlight */}
          <div className="bg-foam border-l-4 border-lagoon p-6 md:p-8 rounded-md mb-12">
            <p className="font-heading text-xs tracking-widest text-[#1E4A58] uppercase mb-2 font-semibold">Our Guarantee</p>
            <p className="font-heading text-h2 text-ink mb-3">100% Live Arrival — No Exceptions</p>
            <p className="font-body text-base text-deep-text leading-relaxed">
              Every fish purchased from The Fish Collection is covered by our unconditional live arrival guarantee. If your fish does not arrive alive and in good health, we will replace it or issue a full refund — your choice, no questions asked.
            </p>
          </div>

          <div className="prose-tfc">
            <h2>Live Arrival Guarantee</h2>
            <p>
              Our live arrival guarantee applies to every order, every species, every shipment. It covers:
            </p>
            <ul>
              <li>Dead on arrival (DOA)</li>
              <li>Severe visible distress at time of delivery</li>
              <li>Fish that die within 2 hours of delivery when acclimated according to our provided instructions</li>
            </ul>
            <p>
              The guarantee requires that you are available to receive the package on the scheduled delivery date. Shipments left at the door, delayed due to incorrect address information, or rerouted by the recipient are not covered.
            </p>

            <h2>How to File a Claim</h2>
            <p>
              If your fish arrives in unsatisfactory condition:
            </p>
            <ol>
              <li><strong>Do not open the bag.</strong> Photograph the fish clearly in the sealed shipping bag.</li>
              <li><strong>Photograph the shipping label</strong> showing the delivery date and time.</li>
              <li><strong>Email our team</strong> at support@thefishcollection.com with your order number, the photos, and a brief description.</li>
              <li><strong>We respond within 2 hours</strong> during business days (9 AM – 6 PM EST, Monday – Friday).</li>
            </ol>
            <p>
              Claims must be submitted within 2 hours of delivery. This window ensures we can verify the condition was shipping-related rather than an acclimation issue.
            </p>

            <h2>Replacement or Refund</h2>
            <p>
              Once your claim is approved, you choose:
            </p>
            <ul>
              <li><strong>Replacement:</strong> We reship an identical or equivalent fish at no charge, with the same live arrival guarantee.</li>
              <li><strong>Full refund:</strong> We refund the original purchase price to your payment method within 24 hours. Refunds typically appear within 3–5 business days.</li>
            </ul>

            <h2>Returns on Healthy Fish</h2>
            <p>
              Due to the nature of live animals, we cannot accept returns on healthy fish. Once a fish has been acclimated to your aquarium, it becomes your responsibility.
            </p>
            <p>
              However, if a fish develops health issues within 72 hours of delivery that are clearly attributable to shipping stress (e.g. bacterial infection, severe fin rot), contact our team and we will work with you on a case-by-case resolution. We may request photos or video to assess the situation.
            </p>

            <h2>Damaged or Incorrect Orders</h2>
            <p>
              If you receive the wrong species or a fish that does not match the description on our website (e.g. significantly smaller size, different colour morph), contact us immediately. We will arrange a return shipment at our expense and reship the correct fish or issue a full refund.
            </p>
          </div>

          {/* FAQs */}
          <section className="mt-16">
            <h2 className="font-heading text-h2 text-ink mb-6">Returns FAQ</h2>
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
            <Link href={`/${params.lang}/contact/`} className="btn-ghost">Need help with a claim? {dict.common?.contactUs ?? 'Contact Us'} &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
