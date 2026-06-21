import { NextRequest, NextResponse } from 'next/server';
import { getStripeServer } from '@/lib/stripe';

interface LineItem {
  slug: string;
  commonName: string;
  scientificName: string;
  priceUSD: number;
  quantity: number;
  sku: string;
}

export async function POST(req: NextRequest) {
  try {
    const { items, lang = 'en' } = (await req.json()) as {
      items: LineItem[];
      lang?: string;
    };

    if (!items?.length) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const totalCents = items.reduce(
      (sum, item) => sum + Math.round(item.priceUSD * 100) * item.quantity,
      0
    );

    const description = items
      .map((i) => `${i.commonName} (${i.sku}) ×${i.quantity}`)
      .join(', ');

    const paymentIntent = await getStripeServer().paymentIntents.create({
      amount: totalCents,
      currency: 'usd',
      description,
      metadata: {
        lang,
        itemCount: String(items.length),
        slugs: items.map((i) => i.slug).join(','),
      },
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: totalCents,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
