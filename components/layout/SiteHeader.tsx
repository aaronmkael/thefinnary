'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart/CartContext';
import { useSearch } from '@/lib/search/SearchContext';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

/* ── Lightweight nav data passed from server layout ── */
export interface CategoryNav {
  name: string;
  slug: string;
  productCount: number;
}

export interface GuideNav {
  featuredSpecies: { title: string; slug: string }[];
  careCategories: { name: string; slug: string; count: number }[];
  blogTagHubs: { name: string; slug: string; count: number }[];
  featuredBlogPosts: { title: string; slug: string }[];
  contentStats: {
    speciesCount: number;
    blogCount: number;
    careGuideCount: number;
    glossaryCount: number;
    totalArticles: number;
  };
}

interface SiteHeaderProps {
  lang: string;
  categories: CategoryNav[];
  guides: GuideNav;
  dict: Record<string, Record<string, string>>;
}

export function SiteHeader({ lang, categories, guides, dict }: SiteHeaderProps) {
  const [activeMenu, setActiveMenu] = useState<'fish' | 'guides' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { itemCount, setIsOpen: openCart } = useCart();
  const { setIsOpen: openSearch } = useSearch();
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const nav = dict.navigation ?? {};
  const trust = dict.trust ?? {};

  /* ── Mega menu hover logic with grace period ── */
  const openMenu = useCallback((menu: 'fish' | 'guides') => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setActiveMenu(menu);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  }, []);

  /* ESC closes everything */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Sort categories by productCount for mega menu */
  const sortedCats = [...categories].sort((a, b) => b.productCount - a.productCount);

  const { featuredSpecies, careCategories, blogTagHubs, featuredBlogPosts, contentStats } = guides;

  return (
    <header className="sticky top-0 z-[100]">
      {/* ═══ MAIN NAV BAR ═══ */}
      <div className="bg-abyss border-b border-[#1E4A58] h-[72px] relative z-[2]">
        <div className="flex items-center justify-between h-full max-w-content mx-auto px-5 md:px-10 xl:px-20">
          {/* Left: Logo */}
          <Link
            href={`/${lang}/`}
            className="font-heading text-[20px] font-extrabold text-white tracking-tight hover:text-shallows transition-colors duration-200 shrink-0"
          >
            The Fish Collection
          </Link>

          {/* Center: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label={nav.mainNavigation}>
            {/* Exotic Fish — mega menu trigger */}
            <div
              onMouseEnter={() => openMenu('fish')}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={`/${lang}/exotic-fish/`}
                className={`flex items-center gap-1 px-4 py-2 font-heading text-[13px] font-semibold rounded-sm transition-colors duration-200 ${
                  activeMenu === 'fish' ? 'text-white bg-white/10' : 'text-white/65 hover:text-white'
                }`}
              >
                {nav.exoticFish}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-200 ${activeMenu === 'fish' ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="M3 5L6 8L9 5" />
                </svg>
              </Link>
            </div>

            {/* Guides — mega menu trigger */}
            <div
              onMouseEnter={() => openMenu('guides')}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 font-heading text-[13px] font-semibold rounded-sm transition-colors duration-200 ${
                  activeMenu === 'guides' ? 'text-white bg-white/10' : 'text-white/65 hover:text-white'
                }`}
              >
                {nav.guides}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-200 ${activeMenu === 'guides' ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="M3 5L6 8L9 5" />
                </svg>
              </button>
            </div>

            <Link
              href={`/${lang}/blog/`}
              className="px-4 py-2 font-heading text-[13px] font-semibold text-white/65 hover:text-white transition-colors duration-200"
            >
              {nav.blog}
            </Link>

            <Link
              href={`/${lang}/bulk-orders/`}
              className="px-4 py-2 font-heading text-[13px] font-semibold text-ember hover:text-koi transition-colors duration-200"
            >
              {nav.bulkOrders}
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Language switcher — desktop only */}
            <div className="hidden lg:block">
              <LanguageSwitcher lang={lang} />
            </div>

            {/* Search */}
            <button
              onClick={() => openSearch(true)}
              className="p-2 text-white/55 hover:text-white transition-colors duration-200"
              aria-label={nav.searchFish}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={() => openCart(true)}
              className="relative p-2 text-white/55 hover:text-white transition-colors duration-200"
              aria-label={`${nav.cart}, ${itemCount}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 flex items-center justify-center w-[18px] h-[18px] bg-ember text-white font-mono text-[10px] font-bold rounded-pill" aria-live="polite">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label={nav.toggleMenu}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ═══ DESKTOP MEGA MENU — EXOTIC FISH ═══ */}
      {activeMenu === 'fish' && (
        <div
          className="hidden lg:block absolute top-[72px] left-0 right-0 bg-surface border-b border-mist shadow-lg z-[1] animate-fade-in"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="h-[2px] bg-gradient-to-r from-transparent via-lagoon to-transparent" />
          <div className="max-w-content mx-auto px-10 xl:px-20 py-8">
            <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
              {/* Popular categories */}
              <div>
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-4">
                  {nav.popularCategories}
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {sortedCats.slice(0, 10).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${lang}/exotic-fish/${cat.slug}/`}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between py-2 border-b border-transparent hover:border-mist transition-colors"
                    >
                      <span className="font-heading text-[14px] font-semibold text-ink group-hover:text-current transition-colors">
                        {cat.name}
                      </span>
                      <span className="font-mono text-[11px] text-drift">
                        {cat.productCount}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* More categories */}
              <div>
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-4">
                  {nav.moreSpecies}
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {sortedCats.slice(10).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${lang}/exotic-fish/${cat.slug}/`}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between py-2 border-b border-transparent hover:border-mist transition-colors"
                    >
                      <span className="font-heading text-[14px] font-semibold text-ink group-hover:text-current transition-colors">
                        {cat.name}
                      </span>
                      <span className="font-mono text-[11px] text-drift">
                        {cat.productCount}
                      </span>
                    </Link>
                  ))}
                </div>

                <Link
                  href={`/${lang}/exotic-fish/`}
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-6 font-heading text-[13px] font-semibold text-current hover:text-ink transition-colors"
                >
                  {(nav.browseAllSpecies ?? 'Browse all {count}+ species').replace('{count}', String(categories.reduce((sum, c) => sum + c.productCount, 0)))}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Featured Category */}
              <div className="border-l border-mist pl-8 flex flex-col">
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-3">
                  {nav.featuredCategory ?? 'Featured'}
                </p>
                <div className="rounded-md overflow-hidden h-[180px] relative">
                  <Image
                    src="/images/brand/hero/hero-platinum-arowana.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-heading text-[14px] font-bold text-ink mt-3">
                  Platinum Arowana
                </p>
                <Link
                  href={`/${lang}/exotic-fish/arowana/`}
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-1 font-heading text-[13px] font-semibold text-current hover:text-ink transition-colors"
                >
                  {nav.shopArowana ?? 'Shop Arowana'} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ DESKTOP MEGA MENU — GUIDES (4-column) ═══ */}
      {activeMenu === 'guides' && (
        <div
          className="hidden lg:block absolute top-[72px] left-0 right-0 bg-surface border-b border-mist shadow-lg z-[1] animate-fade-in"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="h-[2px] bg-gradient-to-r from-transparent via-lagoon to-transparent" />
          <div className="max-w-content mx-auto px-10 xl:px-20 py-8">
            <div className="grid grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_280px] gap-8">
              {/* Column 1 — Species Guides */}
              <div>
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-4">
                  {nav.speciesGuides}
                </p>
                <div className="space-y-1">
                  {featuredSpecies.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/${lang}/species/${guide.slug}/`}
                      onClick={() => setActiveMenu(null)}
                      className="block py-2 font-heading text-[14px] font-semibold text-ink hover:text-current transition-colors"
                    >
                      {guide.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/${lang}/species/`}
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-4 font-heading text-[13px] font-semibold text-current hover:text-ink transition-colors"
                >
                  {(nav.allSpeciesGuidesCount ?? 'All {count} species guides').replace('{count}', String(contentStats.speciesCount))}
                  {' '}<span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Column 2 — Care Guides */}
              <div>
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-4">
                  {nav.careGuides}
                </p>
                <div className="space-y-1">
                  {careCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${lang}/care-guides/${cat.slug}/`}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between py-2 border-b border-transparent hover:border-mist transition-colors"
                    >
                      <span className="font-heading text-[14px] font-semibold text-ink group-hover:text-current transition-colors">
                        {cat.name}
                      </span>
                      <span className="font-mono text-[11px] text-drift">
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/${lang}/care-guides/`}
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-4 font-heading text-[13px] font-semibold text-current hover:text-ink transition-colors"
                >
                  {(nav.allCareGuidesCount ?? 'All {count} care guides').replace('{count}', String(contentStats.careGuideCount))}
                  {' '}<span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Column 3 — The Journal */}
              <div>
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-4">
                  {nav.browseByTopic ?? 'Browse by Topic'}
                </p>
                <div className="space-y-1">
                  {blogTagHubs.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={`/${lang}/blog/tag/${hub.slug}/`}
                      onClick={() => setActiveMenu(null)}
                      className="group flex items-center justify-between py-2 border-b border-transparent hover:border-mist transition-colors"
                    >
                      <span className="font-heading text-[14px] font-semibold text-ink group-hover:text-current transition-colors">
                        {hub.name}
                      </span>
                      <span className="font-mono text-[11px] text-drift">
                        {hub.count}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="my-4 border-t border-mist" />

                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-3">
                  {nav.latest ?? 'Latest'}
                </p>
                <div className="space-y-1">
                  {featuredBlogPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/${lang}/blog/${post.slug}/`}
                      onClick={() => setActiveMenu(null)}
                      className="block py-2 font-heading text-[14px] font-semibold text-ink hover:text-current transition-colors line-clamp-1"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/${lang}/blog/`}
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-4 font-heading text-[13px] font-semibold text-current hover:text-ink transition-colors"
                >
                  {nav.readTheJournal} <span aria-hidden="true">&rarr;</span>
                </Link>

                {/* Resources — folded into col 3 at lg, hidden at xl */}
                <div className="xl:hidden mt-6 pt-5 border-t border-mist">
                  <Link
                    href={`/${lang}/glossary/`}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-center justify-between py-2"
                  >
                    <span className="font-heading text-[14px] font-semibold text-ink group-hover:text-current transition-colors">
                      {nav.glossary ?? 'Glossary'}
                    </span>
                    <span className="font-mono text-[11px] text-drift">
                      {(nav.glossaryCount ?? '{count} terms').replace('{count}', String(contentStats.glossaryCount))}
                    </span>
                  </Link>
                  <Link
                    href={`/${lang}/authors/teemu-suoninen/`}
                    onClick={() => setActiveMenu(null)}
                    className="block py-2 font-heading text-[14px] font-semibold text-ink hover:text-current transition-colors"
                  >
                    {nav.ourExperts}
                  </Link>
                </div>
              </div>

              {/* Column 4 — Resources sidebar (xl+ only) */}
              <div className="hidden xl:flex flex-col border-l border-mist pl-8">
                <p className="font-heading text-[10px] font-bold tracking-widest text-wade uppercase mb-4">
                  {nav.resources ?? 'Resources'}
                </p>

                <Link
                  href={`/${lang}/glossary/`}
                  onClick={() => setActiveMenu(null)}
                  className="group flex items-center justify-between py-2"
                >
                  <span className="font-heading text-[14px] font-semibold text-ink group-hover:text-current transition-colors">
                    {nav.glossary ?? 'Glossary'}
                  </span>
                  <span className="font-mono text-[11px] text-drift">
                    {(nav.glossaryCount ?? '{count} terms').replace('{count}', String(contentStats.glossaryCount))}
                  </span>
                </Link>

                <div className="mt-4 px-3 py-2.5 bg-reef/10 rounded-sm">
                  <p className="font-mono text-[11px] font-bold text-lagoon">
                    {(nav.expertArticlesCount ?? '{count}+ expert articles').replace('{count}', String(contentStats.totalArticles))}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-mist">
                  <Link
                    href={`/${lang}/authors/teemu-suoninen/`}
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-reef rounded-pill flex items-center justify-center shrink-0">
                      <span className="font-heading text-[14px] font-bold text-current">TS</span>
                    </div>
                    <div>
                      <p className="font-heading text-[12px] font-bold text-ink group-hover:text-current transition-colors">Teemu Suoninen</p>
                      <p className="font-heading text-[11px] text-wade">{nav.headAquarist}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ MOBILE MENU ═══ */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-abyss z-[99] overflow-y-auto animate-fade-in">
          <nav className="max-w-content mx-auto px-5 py-6">
            {/* Exotic Fish — expandable */}
            <div className="border-b border-[#1E4A58]">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'fish' ? null : 'fish')}
                className="flex items-center justify-between w-full py-4"
              >
                <span className="font-heading text-[16px] font-bold text-white">{nav.exoticFish}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={`text-white/50 transition-transform duration-200 ${mobileExpanded === 'fish' ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="M4 6L8 10L12 6" />
                </svg>
              </button>
              {mobileExpanded === 'fish' && (
                <div className="pb-4 grid grid-cols-2 gap-x-4 gap-y-1">
                  {sortedCats.map((cat) => (
                    <Link key={cat.slug} href={`/${lang}/exotic-fish/${cat.slug}/`} onClick={() => setMobileOpen(false)} className="flex items-center justify-between py-2 px-3 rounded-sm">
                      <span className="font-heading text-[14px] text-white/70">{cat.name}</span>
                      <span className="font-mono text-[10px] text-white/30">{cat.productCount}</span>
                    </Link>
                  ))}
                  <Link href={`/${lang}/exotic-fish/`} onClick={() => setMobileOpen(false)} className="col-span-2 mt-2 py-2 px-3 font-heading text-[13px] font-semibold text-lagoon">
                    {nav.viewAllFish ?? 'View all fish'} &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Guides — expandable with structured sub-groups */}
            <div className="border-b border-[#1E4A58]">
              <button onClick={() => setMobileExpanded(mobileExpanded === 'guides' ? null : 'guides')} className="flex items-center justify-between w-full py-4">
                <span className="font-heading text-[16px] font-bold text-white">{nav.guides}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={`text-white/50 transition-transform duration-200 ${mobileExpanded === 'guides' ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="M4 6L8 10L12 6" />
                </svg>
              </button>
              {mobileExpanded === 'guides' && (
                <div className="pb-4 space-y-5">
                  {/* Species Guides */}
                  <div>
                    <p className="px-3 font-heading text-[10px] font-bold tracking-widest text-lagoon uppercase mb-2">
                      {nav.speciesGuides}
                    </p>
                    <div className="space-y-0.5">
                      {featuredSpecies.slice(0, 5).map((guide) => (
                        <Link key={guide.slug} href={`/${lang}/species/${guide.slug}/`} onClick={() => setMobileOpen(false)} className="block py-2 px-3 font-heading text-[14px] text-white/70">
                          {guide.title}
                        </Link>
                      ))}
                    </div>
                    <Link href={`/${lang}/species/`} onClick={() => setMobileOpen(false)} className="block mt-1 py-2 px-3 font-heading text-[13px] font-semibold text-lagoon">
                      {(nav.allSpeciesGuidesCount ?? 'All {count} species guides').replace('{count}', String(contentStats.speciesCount))} &rarr;
                    </Link>
                  </div>

                  {/* Care Guides */}
                  <div>
                    <p className="px-3 font-heading text-[10px] font-bold tracking-widest text-lagoon uppercase mb-2">
                      {nav.careGuides}
                    </p>
                    <div className="space-y-0.5">
                      {careCategories.map((cat) => (
                        <Link key={cat.slug} href={`/${lang}/care-guides/${cat.slug}/`} onClick={() => setMobileOpen(false)} className="flex items-center justify-between py-2 px-3">
                          <span className="font-heading text-[14px] text-white/70">{cat.name}</span>
                          <span className="font-mono text-[10px] text-white/30">{cat.count}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Journal Topics */}
                  <div>
                    <p className="px-3 font-heading text-[10px] font-bold tracking-widest text-lagoon uppercase mb-2">
                      {nav.theJournal}
                    </p>
                    <div className="space-y-0.5">
                      {blogTagHubs.map((hub) => (
                        <Link key={hub.slug} href={`/${lang}/blog/tag/${hub.slug}/`} onClick={() => setMobileOpen(false)} className="flex items-center justify-between py-2 px-3">
                          <span className="font-heading text-[14px] text-white/70">{hub.name}</span>
                          <span className="font-mono text-[10px] text-white/30">{hub.count}</span>
                        </Link>
                      ))}
                    </div>
                    <Link href={`/${lang}/blog/`} onClick={() => setMobileOpen(false)} className="block mt-1 py-2 px-3 font-heading text-[13px] font-semibold text-lagoon">
                      {(nav.allJournalCount ?? 'All {count} articles').replace('{count}', String(contentStats.blogCount))} &rarr;
                    </Link>
                  </div>

                  {/* Resources */}
                  <div>
                    <p className="px-3 font-heading text-[10px] font-bold tracking-widest text-lagoon uppercase mb-2">
                      {nav.resources ?? 'Resources'}
                    </p>
                    <div className="space-y-0.5">
                      <Link href={`/${lang}/glossary/`} onClick={() => setMobileOpen(false)} className="block py-2 px-3 font-heading text-[14px] text-white/70">
                        {nav.glossary ?? 'Glossary'}
                      </Link>
                      <Link href={`/${lang}/authors/teemu-suoninen/`} onClick={() => setMobileOpen(false)} className="block py-2 px-3 font-heading text-[14px] text-white/70">
                        {nav.ourExperts}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple links */}
            {[
              { label: nav.bulkOrders, href: `/${lang}/bulk-orders/`, highlight: true },
              { label: nav.about, href: `/${lang}/about/` },
              { label: nav.contact, href: `/${lang}/contact/` },
              { label: nav.faq, href: `/${lang}/faq/` },
            ].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={`block py-4 border-b border-[#1E4A58] font-heading text-[16px] font-bold ${link.highlight ? 'text-ember' : 'text-white/80'}`}>
                {link.label}
              </Link>
            ))}

            {/* Language — mobile */}
            <div className="py-4 border-b border-[#1E4A58]">
              <LanguageSwitcher lang={lang} variant="mobile" />
            </div>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { text: trust.freeShippingMobile, sub: trust.freeShippingMobileSub },
                { text: trust.liveArrivalMobile, sub: trust.liveArrivalMobileSub },
                { text: trust.citesShort, sub: trust.citesShortSub },
                { text: trust.expertSupportShort, sub: trust.expertSupportShortSub },
              ].map((item) => (
                <div key={item.text} className="p-3 bg-deep rounded-sm">
                  <p className="font-heading text-[11px] font-bold text-lagoon">{item.text}</p>
                  <p className="font-heading text-[10px] text-white/35">{item.sub}</p>
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
