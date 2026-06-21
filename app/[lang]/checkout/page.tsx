import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Checkout | The Fish Collection',
    description: 'Complete your The Fish Collection purchase securely with Stripe.',
    path: '/checkout/',
    lang: params.lang,
    noIndex: true,
  });
}

export default async function CheckoutPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);
  const checkout = dict.checkout ?? {};

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="mb-8" aria-label={dict.common?.breadcrumbLabel ?? 'Breadcrumb'}>
        <ol className="flex items-center gap-2 font-mono text-sku text-drift">
          <li>
            <Link href={`/${params.lang}/`} className="hover:text-ink transition-colors">
              {dict.common?.home ?? 'Home'}
            </Link>
          </li>
          <li className="text-mist">/</li>
          <li className="text-ink">{checkout.paymentDetails ?? 'Checkout'}</li>
        </ol>
      </nav>

      <h1 className="font-heading text-h1 md:text-h1 text-ink mb-10">
        {checkout.paymentDetails ?? 'Checkout'}
      </h1>

      <CheckoutForm lang={params.lang} dict={checkout} />
    </div>
  );
}
