'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe-client';
import { useCart } from '@/lib/cart/CartContext';
import Link from 'next/link';

function PaymentForm({ lang, dict = {} as Record<string, string> }: { lang: string; dict?: Record<string, string> }) {
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useCart();
  const [status, setStatus] = useState<'idle' | 'processing' | 'succeeded' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!stripe || !elements) return;

      setStatus('processing');
      setErrorMessage('');

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/${lang}/checkout/success/`,
        },
      });

      if (error) {
        setErrorMessage(error.message ?? (dict.paymentFailed ?? 'Payment failed. Please try again.'));
        setStatus('error');
      } else {
        clearCart();
        setStatus('succeeded');
      }
    },
    [stripe, elements, lang, clearCart]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement
        options={{
          layout: 'tabs',
        }}
      />

      {errorMessage && (
        <div className="p-3 bg-low-stock/10 border border-low-stock/20 rounded-xs">
          <p className="font-mono text-sku text-low-stock">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || status === 'processing'}
        className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'processing' ? (dict.processing ?? 'Processing...') : (dict.completePurchase ?? 'Complete Purchase')}
      </button>

      <p className="font-mono text-sku text-drift text-center">
        {dict.stripeInfo ?? 'Payments processed securely by Stripe. Your card details never touch our servers.'}
      </p>
    </form>
  );
}

export function CheckoutForm({ lang, dict = {} as Record<string, string> }: { lang: string; dict?: Record<string, string> }) {
  const { items, total, itemCount } = useCart();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (items.length === 0) {
      setLoading(false);
      return;
    }

    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items.map((i) => ({
          slug: i.slug,
          commonName: i.commonName,
          scientificName: i.scientificName,
          priceUSD: i.priceUSD,
          quantity: i.quantity,
          sku: i.sku,
        })),
        lang,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setClientSecret(data.clientSecret);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(dict.initFailed ?? 'Failed to initialize checkout. Please try again.');
        setLoading(false);
      });
  }, [items, lang]);

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mb-8">
          <div className="w-12 h-[2px] bg-lagoon/30 mx-auto" />
        </div>
        <p className="font-heading text-xl text-ink mb-2">{dict.cartEmpty ?? 'Your cart is empty'}</p>
        <p className="font-body text-sm text-wade mb-6">
          {dict.cartEmptyDesc ?? 'Add fish from our collection before checking out.'}
        </p>
        <Link href={`/${lang}/exotic-fish/`} className="btn-primary">
          {dict.browseCollection ?? 'Browse Collection'}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
      {/* Payment form */}
      <div>
        <h2 className="font-heading text-xl text-ink mb-6 pb-4 border-b border-mist">
          {dict.paymentDetails ?? 'Payment Details'}
        </h2>

        {loading && (
          <div className="py-12 text-center">
            <div className="inline-block w-6 h-6 border-2 border-lagoon/30 border-t-lagoon rounded-pill animate-spin" />
            <p className="font-mono text-sku text-drift mt-4">{dict.preparingCheckout ?? 'Preparing secure checkout...'}</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-low-stock/10 border border-low-stock/20 rounded-xs">
            <p className="font-mono text-sku text-low-stock">{error}</p>
            <p className="font-body text-sm text-wade mt-2">
              {dict.initFailedPersist ?? 'If this persists, please'} <Link href={`/${lang}/contact/`} className="underline">{dict.contactUs ?? 'contact us'}</Link>.
            </p>
          </div>
        )}

        {clientSecret && (
          <Elements
            stripe={getStripe()}
            options={{
              clientSecret,
              appearance: {
                theme: 'flat',
                variables: {
                  colorPrimary: '#1E6B80',
                  colorBackground: '#FAFCFC',
                  colorText: '#1E2B2E',
                  colorDanger: '#B5451B',
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  borderRadius: '4px',
                  spacingUnit: '4px',
                },
                rules: {
                  '.Input': {
                    border: '1px solid #D0D8DA',
                    boxShadow: 'none',
                    padding: '12px 14px',
                    fontSize: '14px',
                  },
                  '.Input:focus': {
                    border: '1px solid #1E6B80',
                    boxShadow: '0 0 0 2px rgba(30,107,128,0.2)',
                  },
                  '.Label': {
                    fontSize: '11px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  },
                },
              },
            }}
          >
            <PaymentForm lang={lang} dict={dict} />
          </Elements>
        )}

        {/* Shipping info */}
        <div className="mt-8 pt-6 border-t border-mist/50">
          <h3 className="font-heading text-xs tracking-widest text-wade uppercase mb-3 font-semibold">
            {dict.shippingInfo ?? 'Shipping Information'}
          </h3>
          <p className="font-body text-sm text-wade leading-relaxed">
            {dict.shippingInfoText ?? 'All fish ship via overnight express with temperature-controlled packaging. Free shipping within the continental United States. International shipping calculated at confirmation.'}
          </p>
        </div>
      </div>

      {/* Order summary sidebar */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="bg-reef/50 border border-mist rounded-xs p-6">
          <h2 className="font-heading text-xs tracking-widest text-wade uppercase mb-4 pb-3 border-b border-mist/50 font-semibold">
            {(dict.orderSummary ?? 'Order Summary ({count})').replace('{count}', String(itemCount))}
          </h2>

          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.slug} className="flex justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-body text-sm text-ink truncate">{item.commonName}</p>
                  <p className="font-mono text-sku text-drift">
                    {item.sku} × {item.quantity}
                  </p>
                </div>
                <span className="font-mono text-param text-ink whitespace-nowrap">
                  ${(item.priceUSD * item.quantity).toLocaleString('en-US')}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-mist/50 space-y-2">
            <div className="flex justify-between">
              <span className="font-mono text-sku text-wade">{dict.subtotal ?? 'Subtotal'}</span>
              <span className="font-mono text-param text-ink">
                ${total.toLocaleString('en-US')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-mono text-sku text-wade">{dict.shipping ?? 'Shipping'}</span>
              <span className="font-mono text-sku text-in-stock">{dict.free ?? 'Free'}</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-lagoon/20">
            <div className="flex justify-between items-baseline">
              <span className="font-heading text-xs tracking-wide text-ink uppercase font-semibold">{dict.total ?? 'Total'}</span>
              <span className="font-mono text-xl font-medium text-ink">
                ${total.toLocaleString('en-US')}
              </span>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-6 pt-4 border-t border-mist/30 space-y-2">
            <div className="flex items-center gap-2">
              <span className="block w-1.5 h-1.5 rounded-pill bg-in-stock" />
              <span className="font-mono text-sku text-wade">{dict.liveArrival ?? 'Live Arrival Guaranteed'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block w-1.5 h-1.5 rounded-pill bg-in-stock" />
              <span className="font-mono text-sku text-wade">{dict.freeShipping ?? 'Free Overnight Shipping'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block w-1.5 h-1.5 rounded-pill bg-in-stock" />
              <span className="font-mono text-sku text-wade">{dict.sslEncryption ?? '256-bit SSL Encryption'}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link
            href={`/${lang}/exotic-fish/`}
            className="font-mono text-sku text-drift hover:text-ink transition-colors underline"
          >
            {dict.continueShopping ?? 'Continue Shopping'}
          </Link>
        </div>
      </div>
    </div>
  );
}
