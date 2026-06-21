import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.termsTitle ?? 'Terms of Service | The Fish Collection',
    description: dict.seo?.termsDescription ?? 'The Fish Collection terms of service. Terms governing the purchase of exotic fish, live arrival guarantee, shipping policies, and intellectual property.',
    path: '/terms/',
    lang: params.lang,
  });
}

export default async function TermsPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <>
      <section className="bg-abyss">
        <div className="page-container py-12 md:py-16 text-center">
          <h1 className="font-heading text-display-md tracking-tight text-surface">
            {dict.footer?.terms ?? 'Terms of Service'}
          </h1>
          <p className="font-mono text-sku text-surface/30 mt-3">Effective: March 15, 2026</p>
        </div>
      </section>

      <div className="page-container py-6">
        <Breadcrumb lang={params.lang} items={[{ name: dict.common?.home ?? 'Home', href: '/' }, { name: dict.footer?.terms ?? 'Terms of Service', href: '/terms/' }]} />
      </div>

      <section className="page-container pb-20">
        <div className="max-w-readable mx-auto prose-tfc">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the The Fish Collection website (thefishcollection.com) and your purchase of live fish and related products from The Fish Collection Oy, a company registered in Finland (&ldquo;The Fish Collection,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By placing an order, you agree to these Terms.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old to make a purchase. By placing an order, you represent that you are legally permitted to own the species you are purchasing in your jurisdiction and that you have the necessary facilities to house the animal responsibly.
          </p>

          <h2>2. Products and Pricing</h2>
          <p>
            All prices are listed in US Dollars (USD) and are subject to change without notice. Product photographs represent the species but may not depict the exact fish you will receive unless explicitly stated (e.g. &ldquo;exact fish pictured&rdquo;). We make every effort to accurately describe size, colour morph, and condition, but natural variation is inherent in live animals.
          </p>

          <h2>3. Orders and Payment</h2>
          <p>
            An order is confirmed when payment is successfully processed. We reserve the right to cancel any order if the fish becomes unavailable, if we cannot verify the legality of shipping to your address, or if we suspect fraudulent activity. Cancelled orders are fully refunded.
          </p>

          <h2>4. Shipping</h2>
          <p>
            We ship live fish Monday through Wednesday via overnight express carriers. Domestic orders within the continental US ship free. Alaska, Hawaii, and international orders incur shipping charges disclosed at checkout. You must be available to receive the package on the scheduled delivery date. See our <a href="/shipping/">Shipping & Delivery</a> page for full details.
          </p>

          <h2>5. Live Arrival Guarantee</h2>
          <p>
            Every fish is covered by our 100% live arrival guarantee. If a fish arrives dead or in severe distress, you must photograph the fish in the sealed bag within 2 hours of delivery and contact us. We will replace the fish or issue a full refund at your choice. See our <a href="/returns/">Returns & Guarantees</a> page for the full claim process.
          </p>
          <p>
            The guarantee does not apply to: shipments delayed due to incorrect address information provided by the buyer; packages left unattended when a signature was required; fish that die after acclimation to the buyer&apos;s aquarium due to water quality or compatibility issues.
          </p>

          <h2>6. CITES and Legal Compliance</h2>
          <p>
            Certain species listed on our website are regulated under the Convention on International Trade in Endangered Species (CITES). All CITES-listed fish are sourced from certified facilities with full documentation. We handle all export permits and customs documentation. It is the buyer&apos;s responsibility to verify that possession of the species is legal in their jurisdiction.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website — including text, photographs, illustrations, species guides, care guides, and blog articles — is the intellectual property of The Fish Collection Oy. You may not reproduce, distribute, or use our content for commercial purposes without prior written consent. Linking to our content is permitted and encouraged.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            The Fish Collection&apos;s liability for any claim arising from a purchase is limited to the purchase price of the affected fish. We are not liable for consequential damages, lost profits, equipment damage, or harm to other aquarium inhabitants resulting from the introduction of a purchased fish.
          </p>

          <h2>9. Disclaimer</h2>
          <p>
            The care information, species guides, and recommendations on this website are provided for educational purposes based on our professional experience. Individual results may vary based on water chemistry, equipment, tank mates, and other factors. We are not liable for outcomes resulting from the application of our guidance.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Finland. Disputes arising from purchases shall be resolved in the courts of Helsinki, Finland, except where consumer protection laws in your jurisdiction mandate otherwise.
          </p>

          <h2>11. Changes</h2>
          <p>
            We may modify these Terms at any time. Material changes take effect 30 days after posting. Continued use of our website after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these Terms:<br />
            The Fish Collection Oy<br />
            Katajanokanlaituri 5, 00160 Helsinki, Finland<br />
            legal@thefishcollection.com
          </p>
        </div>
      </section>
    </>
  );
}
