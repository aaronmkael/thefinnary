import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripeServer(): Stripe {
  if (_stripe) return _stripe;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      'STRIPE_SECRET_KEY is not set. Add it to .env.local to enable checkout.'
    );
  }

  _stripe = new Stripe(key, {
    apiVersion: '2026-02-25.clover',
    typescript: true,
  });

  return _stripe;
}
