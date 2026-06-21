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
    title: dict.seo?.privacyTitle ?? 'Privacy Policy | The Fish Collection',
    description: dict.seo?.privacyDescription ?? 'The Fish Collection privacy policy. How we collect, use, and protect your personal data when you shop for exotic fish on our website.',
    path: '/privacy/',
    lang: params.lang,
  });
}

export default async function PrivacyPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <>
      <section className="bg-abyss">
        <div className="page-container py-12 md:py-16 text-center">
          <h1 className="font-heading text-display-md tracking-tight text-surface">
            {dict.footer?.privacy ?? 'Privacy Policy'}
          </h1>
          <p className="font-mono text-sku text-surface/30 mt-3">Last updated: March 15, 2026</p>
        </div>
      </section>

      <div className="page-container py-6">
        <Breadcrumb lang={params.lang} items={[{ name: dict.common?.home ?? 'Home', href: '/' }, { name: dict.footer?.privacy ?? 'Privacy Policy', href: '/privacy/' }]} />
      </div>

      <section className="page-container pb-20">
        <div className="max-w-readable mx-auto prose-tfc">
          <p>
            The Fish Collection Oy (&ldquo;The Fish Collection,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website thefishcollection.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make purchases.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li><strong>Account information:</strong> Name, email address, phone number, shipping address, and billing address when you create an account or place an order.</li>
            <li><strong>Payment information:</strong> Credit card details, PayPal credentials, or wire transfer information processed securely through our payment provider (Stripe). We do not store full payment card numbers on our servers.</li>
            <li><strong>Communication data:</strong> Messages, emails, and inquiries you send to our customer support team.</li>
            <li><strong>Tank and care information:</strong> Tank specifications, species inventories, and care preferences you share with us for consultation purposes.</li>
          </ul>

          <p>We also automatically collect certain information when you visit our website:</p>
          <ul>
            <li><strong>Device information:</strong> Browser type, operating system, device type, and screen resolution.</li>
            <li><strong>Usage data:</strong> Pages visited, time spent on pages, links clicked, and referring URLs.</li>
            <li><strong>Location data:</strong> Approximate geographic location based on IP address, used to determine shipping feasibility and species legality.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>Process and fulfil your orders, including shipping coordination and CITES documentation</li>
            <li>Provide customer support and species care guidance</li>
            <li>Send order confirmations, shipping notifications, and delivery updates</li>
            <li>Send marketing communications (only with your explicit consent, and you may unsubscribe at any time)</li>
            <li>Improve our website, product offerings, and customer experience</li>
            <li>Comply with legal obligations, including CITES reporting requirements</li>
            <li>Detect and prevent fraud</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We do not sell your personal information. We share data only with:</p>
          <ul>
            <li><strong>Shipping carriers:</strong> FedEx, UPS, and specialist livestock freight forwarders — limited to delivery address and contact number.</li>
            <li><strong>Payment processors:</strong> Stripe processes all payments under their own privacy policy.</li>
            <li><strong>Government agencies:</strong> CITES authorities and customs offices when required by law for species documentation.</li>
            <li><strong>Analytics providers:</strong> We use privacy-focused analytics to understand website usage patterns. No personally identifiable information is shared.</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use essential cookies to maintain your shopping cart and session state. We use analytics cookies only with your consent. You can manage cookie preferences through your browser settings or our cookie consent banner.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain order records and associated personal data for 7 years to comply with tax and CITES reporting requirements. Communication records are retained for 2 years. You may request deletion of non-essential data at any time.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at privacy@thefishcollection.com. We respond within 30 days.
          </p>

          <h2>Security</h2>
          <p>
            We implement industry-standard security measures including TLS encryption for all data in transit, encrypted storage for sensitive data at rest, and regular security audits. Payment processing is handled entirely by Stripe, a PCI DSS Level 1 certified provider.
          </p>

          <h2>Children</h2>
          <p>
            Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal data from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy periodically. Material changes will be communicated via email to registered customers and through a notice on our website. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related inquiries:<br />
            The Fish Collection Oy<br />
            Katajanokanlaituri 5, 00160 Helsinki, Finland<br />
            privacy@thefishcollection.com
          </p>
        </div>
      </section>
    </>
  );
}
