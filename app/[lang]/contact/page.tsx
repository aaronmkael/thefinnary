import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.contactTitle ?? 'Contact The Fish Collection | Exotic Fish Experts',
    description: dict.seo?.contactDescription ?? 'Get in touch with The Fish Collection\'s aquarist team. Questions about orders, species care, tank setup, or availability — we respond within 2 hours during business days.',
    path: '/contact/',
    lang: params.lang,
  });
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact The Fish Collection',
  description: 'Contact the The Fish Collection exotic fish team',
  mainEntity: {
    '@type': 'Organization',
    name: 'The Fish Collection',
    email: 'support@thefishcollection.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@thefishcollection.com',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  },
};

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <>
      <JsonLd data={contactSchema} />

      <section className="bg-abyss">
        <div className="page-container py-12 md:py-16 text-center">
          <p className="section-label text-lagoon/50 mb-3">Get in Touch</p>
          <h1 className="font-heading text-display-md tracking-tight text-surface">
            {dict.common?.contactUs ?? 'Contact Us'}
          </h1>
        </div>
      </section>

      <div className="page-container py-6">
        <Breadcrumb lang={params.lang} items={[{ name: dict.common?.home ?? 'Home', href: '/' }, { name: dict.navigation?.contact ?? 'Contact', href: '/contact/' }]} />
      </div>

      <section className="page-container pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          {/* Form */}
          <div className="max-w-readable">
            <p className="font-body text-base text-deep-text leading-relaxed mb-8">
              Whether you have questions about a specific fish, need help with an order, or want advice on tank setup and species compatibility, our team of certified aquarists is here to help.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="font-heading text-[11px] tracking-widest text-wade uppercase block mb-2 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full h-[44px] font-body text-base text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors placeholder:text-drift placeholder:italic"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-heading text-[11px] tracking-widest text-wade uppercase block mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full h-[44px] font-body text-base text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors placeholder:text-drift placeholder:italic"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="font-heading text-[11px] tracking-widest text-wade uppercase block mb-2 font-semibold">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full h-[44px] font-body text-base text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors"
                >
                  <option value="">Select a topic...</option>
                  <option value="order">Order Inquiry</option>
                  <option value="availability">Species Availability</option>
                  <option value="care">Care & Tank Setup Advice</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="returns">Returns & Guarantee Claim</option>
                  <option value="wholesale">Wholesale & Trade</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="order" className="font-heading text-[11px] tracking-widest text-wade uppercase block mb-2 font-semibold">
                  Order Number <span className="text-drift">(if applicable)</span>
                </label>
                <input
                  type="text"
                  id="order"
                  name="order"
                  placeholder="TF-"
                  className="w-full h-[44px] font-mono text-param text-ink bg-surface border border-mist rounded-xs px-4 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors placeholder:text-drift placeholder:italic"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-heading text-[11px] tracking-widest text-wade uppercase block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full font-body text-base text-ink bg-surface border border-mist rounded-xs px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 hover:border-shallows transition-colors resize-y placeholder:text-drift placeholder:italic"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="lg:w-[280px] space-y-8">
            <div>
              <p className="section-label mb-3">Response Time</p>
              <p className="font-heading text-h2 text-ink mb-1">Under 2 Hours</p>
              <p className="font-body text-sm text-wade">
                During business hours: Monday–Friday, 9 AM – 6 PM EST
              </p>
            </div>

            <div className="border-t border-mist pt-6">
              <p className="section-label mb-3">Email</p>
              <p className="font-mono text-param text-ink">support@thefishcollection.com</p>
            </div>

            <div className="border-t border-mist pt-6">
              <p className="section-label mb-3">Emergency (DOA Claims)</p>
              <p className="font-mono text-param text-ink">urgent@thefishcollection.com</p>
              <p className="font-body text-sm text-wade mt-1">
                Monitored 7 days/week for live arrival claims.
              </p>
            </div>

            <div className="border-t border-mist pt-6">
              <p className="section-label mb-3">Headquarters</p>
              <p className="font-body text-sm text-deep-text leading-relaxed">
                The Fish Collection Oy<br />
                Katajanokanlaituri 5<br />
                00160 Helsinki, Finland
              </p>
            </div>

            <div className="border-t border-mist pt-6">
              <p className="section-label mb-3">Social</p>
              <div className="flex gap-4">
                <span className="font-mono text-sku text-wade">Instagram</span>
                <span className="font-mono text-sku text-wade">YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
