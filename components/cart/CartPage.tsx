'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart/CartContext';

export function CartPage({ lang, dict = {} as Record<string, string> }: { lang: string; dict?: Record<string, string> }) {
  const { items, itemCount, total, removeItem, clearCart } = useCart();

  const c = {
    cartEmpty: dict.cartEmpty ?? 'Your cart is empty',
    cartEmptyDescAlt: dict.cartEmptyDescAlt ?? 'Browse our collection to find your next fish.',
    browseCollection: dict.browseCollection ?? 'Browse Collection',
    liveArrival: dict.liveArrival ?? 'Live Arrival Guaranteed',
    freeShipping: dict.freeShipping ?? 'Free Overnight Shipping',
    secureCheckout: dict.secureCheckout ?? 'Secure Checkout',
    itemCount: dict.itemCount ?? '{count} {count, plural, one {Item} other {Items}}',
    clearAll: dict.clearAll ?? 'Clear All',
    quantity: dict.quantity ?? 'Qty: {count}',
    remove: dict.remove ?? 'Remove',
    orderSummary: dict.orderSummary ?? 'Order Summary',
    subtotalWithCount: dict.subtotalWithCount ?? 'Subtotal ({count} {count, plural, one {item} other {items}})',
    shipping: dict.shipping ?? 'Shipping',
    free: dict.free ?? 'Free',
    total: dict.total ?? 'Total',
    proceedToCheckout: dict.proceedToCheckout ?? 'Proceed to Checkout',
    shippingNoteFull: dict.shippingNoteFull ?? 'Free overnight shipping within the US. Live arrival guaranteed.',
    continueShopping: dict.continueShopping ?? 'Continue Shopping',
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mb-8">
          <div className="w-12 h-[2px] bg-lagoon/30 mx-auto" />
        </div>
        <p className="font-heading text-xl text-ink mb-2">{c.cartEmpty}</p>
        <p className="font-body text-sm text-wade mb-6">
          {c.cartEmptyDescAlt}
        </p>
        <Link href={`/${lang}/exotic-fish/`} className="btn-primary">
          {c.browseCollection}
        </Link>

        <div className="mt-16 pt-8 border-t border-mist/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="font-mono text-sku text-drift">{c.liveArrival}</span>
            <span className="hidden sm:block w-1 h-1 rounded-pill bg-lagoon/30" />
            <span className="font-mono text-sku text-drift">{c.freeShipping}</span>
            <span className="hidden sm:block w-1 h-1 rounded-pill bg-lagoon/30" />
            <span className="font-mono text-sku text-drift">{c.secureCheckout}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
      {/* Cart items */}
      <div>
        <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-mist">
          <h2 className="font-heading text-xl text-ink">
            {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
          </h2>
          <button
            onClick={clearCart}
            className="font-mono text-sku text-drift hover:text-low-stock transition-colors"
          >
            {c.clearAll}
          </button>
        </div>

        <div className="divide-y divide-mist/50">
          {items.map((item) => (
            <div key={item.slug} className="flex gap-5 py-5">
              {/* Thumbnail */}
              <div className="w-20 h-24 md:w-24 md:h-28 bg-abyss rounded-sm shrink-0" />

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-mono text-sku text-drift">{item.sku}</p>
                    <Link
                      href={`/${lang}/exotic-fish/${item.category}/${item.slug}/`}
                      className="font-heading text-lg text-ink hover:text-current transition-colors truncate block"
                    >
                      {item.commonName}
                    </Link>
                    <p className="font-scientific italic font-light text-drift text-sm">{item.scientificName}</p>
                  </div>
                  <span className="font-mono text-lg font-medium text-ink whitespace-nowrap">
                    ${(item.priceUSD * item.quantity).toLocaleString('en-US')}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="font-mono text-sku text-wade">
                    {c.quantity.replace('{count}', String(item.quantity))}
                  </span>
                  <button
                    onClick={() => removeItem(item.slug)}
                    className="font-mono text-sku text-drift hover:text-low-stock transition-colors"
                  >
                    {c.remove}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary sidebar */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="bg-reef/50 border border-mist rounded-xs p-6">
          <h2 className="font-heading text-xs tracking-widest text-wade uppercase mb-4 pb-3 border-b border-mist/50 font-semibold">
            {c.orderSummary}
          </h2>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="font-mono text-sku text-wade">
                {c.subtotalWithCount.replace('{count}', String(itemCount)).replace(/\{count, plural, one \{(.*?)\} other \{(.*?)\}\}/, itemCount === 1 ? '$1' : '$2')}
              </span>
              <span className="font-mono text-param text-ink">
                ${total.toLocaleString('en-US')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-mono text-sku text-wade">{c.shipping}</span>
              <span className="font-mono text-sku text-in-stock">{c.free}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-lagoon/20">
            <div className="flex justify-between items-baseline mb-6">
              <span className="font-heading text-xs tracking-wide text-ink uppercase font-semibold">{c.total}</span>
              <span className="font-mono text-xl font-medium text-ink">
                ${total.toLocaleString('en-US')}
              </span>
            </div>

            <Link
              href={`/${lang}/checkout/`}
              className="btn-primary w-full text-center block"
            >
              {c.proceedToCheckout}
            </Link>
          </div>

          <p className="font-body text-xs text-wade mt-4 text-center">
            {c.shippingNoteFull}
          </p>
        </div>

        <div className="mt-4 text-center">
          <Link
            href={`/${lang}/exotic-fish/`}
            className="font-mono text-sku text-drift hover:text-ink transition-colors underline"
          >
            {c.continueShopping}
          </Link>
        </div>
      </div>
    </div>
  );
}
