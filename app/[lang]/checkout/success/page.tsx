import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Order Confirmed | The Fish Collection',
    description: 'Your order has been placed successfully.',
    path: '/checkout/success/',
    lang: params.lang,
    noIndex: true,
  });
}

export default async function CheckoutSuccessPage({
  params,
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <div className="max-w-narrow mx-auto px-5 py-24 md:py-32 text-center">
      {/* Success icon */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-pill border-2 border-in-stock/30 mb-4">
          <span className="text-in-stock text-2xl">&#10003;</span>
        </div>
      </div>

      <h1 className="font-heading text-h1 md:text-h1 text-ink mb-3">
        Order Confirmed
      </h1>
      <p className="font-body text-base text-wade mb-2 max-w-sm mx-auto">
        Thank you for your purchase. Your fish are being prepared for
        overnight shipment.
      </p>
      <p className="font-mono text-sku text-drift mb-8">
        A confirmation email has been sent to your inbox.
      </p>

      {/* What happens next */}
      <div className="bg-reef/50 border border-mist rounded-xs p-6 mb-10 text-left max-w-sm mx-auto">
        <h2 className="font-heading text-xs tracking-widest text-wade uppercase mb-4 font-semibold">
          What Happens Next
        </h2>
        <ol className="space-y-3">
          {[
            'Our aquarists prepare your fish for transit',
            'Temperature-controlled packaging and overnight express shipping',
            'Delivery within 24 hours with live arrival guarantee',
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-mono text-sku text-lagoon font-medium shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-body text-sm text-wade">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href={`/${params.lang}/exotic-fish/`} className="btn-primary">
          {dict.common?.continueBrowsing ?? 'Continue Browsing'}
        </Link>
        <Link href={`/${params.lang}/contact/`} className="btn-ghost">
          {dict.common?.contactUs ?? 'Contact Support'}
        </Link>
      </div>

      {/* Trust signals */}
      <div className="mt-16 pt-8 border-t border-mist/50">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <span className="font-mono text-sku text-drift">{dict.common?.liveArrivalGuarantee ?? 'Live Arrival Guaranteed'}</span>
          <span className="hidden sm:block w-1 h-1 rounded-pill bg-lagoon/30" />
          <span className="font-mono text-sku text-drift">24/7 Support</span>
          <span className="hidden sm:block w-1 h-1 rounded-pill bg-lagoon/30" />
          <span className="font-mono text-sku text-drift">{dict.common?.citesText ?? 'CITES Certified'}</span>
        </div>
      </div>
    </div>
  );
}
