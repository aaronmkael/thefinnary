import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { CartPage as CartPageClient } from '@/components/cart/CartPage';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Shopping Cart | The Fish Collection',
    description: 'Review your The Fish Collection shopping cart.',
    path: '/cart/',
    lang: params.lang,
    noIndex: true,
  });
}

export default async function CartRoute({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);
  const nav = dict.navigation ?? {};
  const cart = dict.cart ?? {};

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
          <li className="text-ink">{nav.cart ?? 'Cart'}</li>
        </ol>
      </nav>

      <h1 className="font-heading text-h1 md:text-h1 text-ink mb-10">
        {(cart.yourCart ?? 'Your Cart ({count})').replace(' ({count})', '')}
      </h1>

      <CartPageClient lang={params.lang} dict={cart} />
    </div>
  );
}
