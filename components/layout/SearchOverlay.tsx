'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useSearch } from '@/lib/search/SearchContext';

export interface SearchProduct {
  commonName: string;
  scientificName: string;
  slug: string;
  category: string;
  priceUSD: number;
  inStock: boolean;
}

interface SearchOverlayProps {
  products: SearchProduct[];
  lang: string;
  categories: { name: string; slug: string; productCount: number }[];
  dict: Record<string, Record<string, string>>;
}

export function SearchOverlay({ products, lang, categories, dict }: SearchOverlayProps) {
  const { isOpen, setIsOpen } = useSearch();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const t = dict.search ?? {};
  const nav = dict.navigation ?? {};

  /* Auto-focus input when opened */
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  /* ESC to close */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, setIsOpen]);

  /* Filter products */
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return products
      .filter(
        (p) =>
          p.commonName.toLowerCase().includes(q) ||
          p.scientificName.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, products]);

  /* Popular categories (top 6 by count) */
  const popularCats = useMemo(
    () => [...categories].sort((a, b) => b.productCount - a.productCount).slice(0, 6),
    [categories]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-abyss/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Search panel */}
      <div className="relative z-[1] w-full max-w-[680px] mx-auto mt-[72px] md:mt-[120px] px-5">
        <div className="bg-surface rounded-lg shadow-xl overflow-hidden animate-fade-up">
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 h-[60px] border-b border-mist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-wade shrink-0" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={nav.searchPlaceholder ?? 'Search species, guides, categories...'}
              className="flex-1 font-heading text-[17px] font-medium text-ink bg-transparent outline-none placeholder:text-drift placeholder:italic"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="font-heading text-[12px] font-semibold text-wade hover:text-ink transition-colors px-2 py-1 rounded-xs bg-reef"
            >
              {t.esc ?? 'ESC'}
            </button>
          </div>

          {/* Results or popular */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() ? (
              /* ── Search results ── */
              results.length > 0 ? (
                <div className="py-2">
                  {results.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/${lang}/exotic-fish/${product.category}/${product.slug}/`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-5 py-3 hover:bg-reef transition-colors group"
                    >
                      {/* Fish thumbnail placeholder */}
                      <div className="w-10 h-10 bg-abyss rounded-sm shrink-0 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lagoon/40" aria-hidden="true">
                          <path d="M2 16s3-7 10-7 10 7 10 7-3 7-10 7S2 16 2 16z" /><circle cx="18" cy="14" r="1" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading text-[14px] font-bold text-ink group-hover:text-current transition-colors truncate">
                          {product.commonName}
                        </p>
                        <p className="font-scientific italic font-light text-[12px] text-drift truncate">
                          {product.scientificName}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-[14px] font-bold text-ink">
                          ${product.priceUSD.toLocaleString('en-US')}
                        </p>
                        <p className="font-heading text-[10px] font-bold tracking-widest text-lagoon uppercase">
                          {product.category}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {products.filter(p =>
                    p.commonName.toLowerCase().includes(query.toLowerCase().trim()) ||
                    p.scientificName.toLowerCase().includes(query.toLowerCase().trim()) ||
                    p.category.toLowerCase().includes(query.toLowerCase().trim())
                  ).length > 8 && (
                    <div className="px-5 py-3 border-t border-mist">
                      <Link
                        href={`/${lang}/exotic-fish/`}
                        onClick={() => setIsOpen(false)}
                        className="font-heading text-[13px] font-semibold text-current hover:text-ink transition-colors"
                      >
                        {t.viewAllResults ?? 'View all matching results'} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <div className="px-5 py-10 text-center">
                  <p className="font-heading text-[15px] font-bold text-ink mb-1">{t.noFishFound}</p>
                  <p className="font-body text-[13px] text-wade">
                    {t.noFishFoundDesc}
                  </p>
                </div>
              )
            ) : (
              /* ── Popular categories (empty state) ── */
              <div className="p-5">
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-3">
                  {t.popularCategories}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {popularCats.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${lang}/exotic-fish/${cat.slug}/`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 bg-reef rounded-sm hover:bg-mist transition-colors group"
                    >
                      <span className="font-heading text-[13px] font-semibold text-ink group-hover:text-current transition-colors">
                        {cat.name}
                      </span>
                      <span className="font-mono text-[10px] text-drift">{cat.productCount}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-mist flex gap-4">
                  <Link
                    href={`/${lang}/species/`}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-[12px] font-semibold text-current hover:text-ink transition-colors"
                  >
                    {nav.speciesGuides} &rarr;
                  </Link>
                  <Link
                    href={`/${lang}/care-guides/`}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-[12px] font-semibold text-current hover:text-ink transition-colors"
                  >
                    {nav.careGuides} &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
