'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/types/product';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductFilter } from '@/components/product/ProductFilter';

interface ProductGridProps {
  products: Product[];
  lang: string;
  labels?: {
    noResults?: string;
    noResultsHint?: string;
    cardLabels?: {
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
    filterLabels?: {
      searchPlaceholder?: string;
      sortNameAZ?: string;
      sortPriceHighLow?: string;
      sortPriceLowHigh?: string;
      sortCareLevel?: string;
      resultCount?: string;
    };
  };
  formatPrice?: (usd: number) => string;
}

export function ProductGrid({ products, lang, labels = {}, formatPrice }: ProductGridProps) {
  const {
    noResults = 'No fish found',
    noResultsHint = 'Try adjusting your search terms.',
    cardLabels,
    statusLabels,
    filterLabels,
  } = labels;
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name-asc');

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    // Filter
    let result = products;
    if (query) {
      result = result.filter(
        (p) =>
          p.commonName.toLowerCase().includes(query) ||
          p.scientificName.toLowerCase().includes(query)
      );
    }

    // Sort
    const sorted = [...result];
    switch (sort) {
      case 'price-desc':
        sorted.sort((a, b) => b.priceUSD - a.priceUSD);
        break;
      case 'price-asc':
        sorted.sort((a, b) => a.priceUSD - b.priceUSD);
        break;
      case 'care-level':
        sorted.sort((a, b) => a.careLevel - b.careLevel);
        break;
      case 'name-asc':
      default:
        sorted.sort((a, b) => a.commonName.localeCompare(b.commonName));
        break;
    }

    return sorted;
  }, [products, search, sort]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-10 md:mb-14">
        <ProductFilter
          onSearchChange={setSearch}
          onSortChange={setSort}
          resultCount={filtered.length}
          sort={sort}
          labels={filterLabels}
        />
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <div
              key={product.slug}
              className={`animate-fade-up ${i < 8 ? `stagger-${i + 1}` : ''}`}
            >
              <ProductCard product={product} lang={lang} labels={cardLabels} statusLabels={statusLabels} formatPrice={formatPrice} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 md:py-24">
          <p className="font-heading text-h2 font-bold text-ink mb-3">
            {noResults}
          </p>
          <p className="font-body text-body-sm text-deep-text">
            {noResultsHint}
          </p>
        </div>
      )}
    </div>
  );
}
