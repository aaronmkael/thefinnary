'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart/CartContext';
import { useSearch } from '@/lib/search/SearchContext';

interface MobileBottomNavProps {
  lang: string;
  dict: Record<string, string>;
}

export function MobileBottomNav({ lang, dict }: MobileBottomNavProps) {
  const { itemCount, setIsOpen: openCart } = useCart();
  const { setIsOpen: openSearch } = useSearch();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-surface border-t border-mist shadow-[0_-2px_8px_rgba(11,45,54,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <nav className="grid grid-cols-5 h-[60px]" aria-label={dict.quickNavigation}>
        {/* Home */}
        <Link
          href={`/${lang}/`}
          className="flex flex-col items-center justify-center gap-[2px] text-wade active:text-ink transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          <span className="font-heading text-[10px] font-semibold">{dict.home || 'Home'}</span>
        </Link>

        {/* Browse */}
        <Link
          href={`/${lang}/exotic-fish/`}
          className="flex flex-col items-center justify-center gap-[2px] text-wade active:text-ink transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
          <span className="font-heading text-[10px] font-semibold">{dict.fish || 'Fish'}</span>
        </Link>

        {/* Search */}
        <button
          onClick={() => openSearch(true)}
          className="flex flex-col items-center justify-center gap-[2px] text-wade active:text-ink transition-colors"
          aria-label={dict.search}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span className="font-heading text-[10px] font-semibold">{dict.search}</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => openCart(true)}
          className="relative flex flex-col items-center justify-center gap-[2px] text-wade active:text-ink transition-colors"
          aria-label={`${dict.cart}, ${itemCount}`}
        >
          <div className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1.5 flex items-center justify-center w-[16px] h-[16px] bg-ember text-white font-mono text-[9px] font-bold rounded-pill" aria-live="polite">
                {itemCount}
              </span>
            )}
          </div>
          <span className="font-heading text-[10px] font-semibold">{dict.cart}</span>
        </button>

        {/* Bulk */}
        <Link
          href={`/${lang}/bulk-orders/`}
          className="flex flex-col items-center justify-center gap-[2px] text-ember active:text-flame transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="font-heading text-[10px] font-bold">{dict.bulk || 'Bulk'}</span>
        </Link>
      </nav>
    </div>
  );
}
