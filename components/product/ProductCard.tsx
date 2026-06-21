import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';
import { StatusBadge } from '@/components/ui/StatusBadge';

interface ProductCardProps {
  product: Product;
  lang: string;
  labels?: {
    premium?: string;
    careLevelAria?: string;
    galSuffix?: string;
  };
  statusLabels?: {
    soldOut?: string;
    lastOne?: string;
    countLeft?: string;
    inStock?: string;
  };
  formatPrice?: (usd: number) => string;
}

export function ProductCard({ product, lang, labels = {}, statusLabels, formatPrice }: ProductCardProps) {
  const {
    premium = 'Premium',
    careLevelAria = 'Care level: {level} out of 5',
    galSuffix = 'gal',
  } = labels;
  const href = `/${lang}/exotic-fish/${product.category}/${product.slug}/`;

  return (
    <Link href={href} className="group block">
      <article className={`card-glow-hover bg-reef rounded-md shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-[3px] ${product.priceUSD >= 5000 ? 'border border-lagoon/20 animate-shimmer-border' : 'border border-mist'}`}>
        {/* ── Fish Image — dark bg makes colours pop ── */}
        <div className="fish-image-container relative aspect-[4/5] rounded-t-md">
          <Image
            src={product.images[0]?.url ?? '/images/placeholder.jpg'}
            alt={product.images[0]?.alt ?? `${product.commonName} (${product.scientificName})`}
            width={product.images[0]?.width ?? 800}
            height={product.images[0]?.height ?? 1000}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          />

          {/* Badges — top-left */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
            {product.priceUSD >= 5000 && (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-abyss bg-foam px-2 py-[3px] rounded-pill">
                <span className="block w-[5px] h-[5px] rounded-pill bg-lagoon" />
                {premium}
              </span>
            )}
            <StatusBadge
              inStock={product.inStock}
              stockCount={product.stockCount}
              labels={statusLabels}
            />
          </div>
        </div>

        {/* ── Card Body ── */}
        <div className="p-4 pb-5">
          {/* Category eyebrow */}
          <p className="font-heading text-[11px] font-bold tracking-widest text-lagoon uppercase mb-[3px]">
            {product.category}
          </p>

          {/* Common name */}
          <h3 className="font-heading text-[17px] font-bold leading-snug tracking-snug text-ink mb-[2px]">
            {product.commonName}
          </h3>

          {/* Scientific name */}
          <p className="font-scientific italic font-light text-[13px] text-drift mb-3">
            {product.scientificName}
          </p>

          {/* Care level dots */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex gap-[3px]" aria-label={careLevelAria.replace('{level}', String(product.careLevel))} role="img">
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className={`w-[7px] h-[7px] rounded-pill ${
                    dot <= product.careLevel
                      ? product.careLevel >= 4 ? 'bg-lagoon' : 'bg-ember'
                      : 'bg-mist'
                  }`}
                />
              ))}
            </div>
            <span className="font-heading text-[11px] text-drift">{product.careLevelLabel}</span>
          </div>

          {/* Footer row */}
          <div className="pt-3 border-t border-mist flex items-center justify-between">
            <span className="font-mono text-[16px] font-bold text-ink">
              {formatPrice ? formatPrice(product.priceUSD) : `$${product.priceUSD.toLocaleString('en-US')}`}
            </span>
            <span className="font-heading text-[11px] text-drift">
              {product.tankSizeGallons}+ {galSuffix}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
