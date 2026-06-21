const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  nl: 'nl-NL',
  fr: 'fr-FR',
  es: 'es-ES',
  ja: 'ja-JP',
  pt: 'pt-BR',
  ko: 'ko-KR',
  it: 'it-IT',
};

const CURRENCY_MAP: Record<string, string> = {
  en: 'USD',
  de: 'EUR',
  nl: 'EUR',
  fr: 'EUR',
  es: 'EUR',
  ja: 'JPY',
  pt: 'BRL',
  ko: 'KRW',
  it: 'EUR',
};

/* Static exchange rates — update periodically */
const EXCHANGE_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  JPY: 149.5,
  BRL: 4.97,
  KRW: 1320,
};

export function formatPrice(usd: number, lang: string): string {
  const locale = LOCALE_MAP[lang] ?? 'en-US';
  const currency = CURRENCY_MAP[lang] ?? 'USD';
  const rate = EXCHANGE_RATES[currency] ?? 1;
  const converted = usd * rate;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'JPY' || currency === 'KRW' ? 0 : 2,
  }).format(converted);
}

export function formatPriceUSD(usd: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(usd);
}
