'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart/CartContext';

interface CartDrawerProps {
  lang: string;
  dict: Record<string, string>;
}

export function CartDrawer({ lang, dict }: CartDrawerProps) {
  const { items, itemCount, total, removeItem, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-abyss/40 backdrop-blur-sm z-[200] animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-surface z-[201] shadow-xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <h2 className="font-heading text-h4 font-bold text-ink">
            {(dict.yourCart ?? 'Your Cart ({count})').replace('{count}', String(itemCount))}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="font-heading text-body-sm font-medium text-wade hover:text-ink transition-colors"
            aria-label={dict.close ?? 'Close'}
          >
            {dict.close ?? 'Close'}
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-heading text-h3 font-bold text-ink mb-2">{dict.cartEmpty}</p>
              <p className="font-body text-body-sm text-deep-text mb-6">{dict.cartEmptyDesc}</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-ghost"
              >
                {dict.continueBrowsing ?? 'Continue Browsing'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-4 py-3 border-b border-mist">
                  {/* Thumbnail */}
                  <div className="w-16 h-20 bg-abyss rounded-sm shrink-0" />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-[11px] font-bold tracking-widest text-lagoon uppercase">
                      {item.sku}
                    </p>
                    <p className="font-heading text-base font-bold text-ink truncate">{item.commonName}</p>
                    <p className="font-scientific italic font-light text-[13px] text-drift">{item.scientificName}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-mono text-price font-bold text-ink">
                        ${item.priceUSD.toLocaleString('en-US')}
                      </span>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="font-heading text-body-sm text-wade hover:text-low-stock transition-colors"
                      >
                        {dict.remove ?? 'Remove'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-mist bg-reef">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-heading text-body-sm font-semibold text-wade">{dict.subtotal}</span>
              <span className="font-mono text-[1.25rem] font-bold text-ink">
                ${total.toLocaleString('en-US')}
              </span>
            </div>
            <p className="font-body text-[13px] text-wade mb-4">
              {dict.shippingNote}
            </p>
            <Link
              href={`/${lang}/checkout/`}
              className="btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              {dict.proceedToCheckout}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
