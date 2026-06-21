'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES } from '@/lib/seo/i18n';

interface LanguageSwitcherProps {
  lang: string;
  variant?: 'header' | 'footer' | 'mobile';
}

export function LanguageSwitcher({ lang, variant = 'header' }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* Build locale-switched path by replacing the [lang] segment */
  function localePath(targetLang: string) {
    const segments = pathname.split('/');
    // The lang segment is always the first real segment: /en/... → ['', 'en', ...]
    if (segments.length >= 2) {
      segments[1] = targetLang;
    }
    return segments.join('/');
  }

  /* Close on click outside */
  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  /* Close on ESC */
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const currentLocale = LOCALES.find((l) => l.lang === lang);

  /* ── Footer variant: horizontal row of language links ── */
  if (variant === 'footer') {
    return (
      <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1" aria-label="Language selection">
        {LOCALES.map((locale, i) => (
          <span key={locale.lang} className="flex items-center">
            {i > 0 && (
              <span className="text-white/20 mx-1 select-none" aria-hidden="true">&middot;</span>
            )}
            <Link
              href={localePath(locale.lang)}
              lang={locale.lang}
              hrefLang={locale.hreflang}
              className={`font-heading text-[12px] transition-colors duration-200 ${
                locale.lang === lang
                  ? 'text-white font-semibold'
                  : 'text-white/55 hover:text-white'
              }`}
              aria-current={locale.lang === lang ? 'true' : undefined}
            >
              {locale.nativeName}
            </Link>
          </span>
        ))}
      </nav>
    );
  }

  /* ── Mobile variant: vertical list matching mobile menu style ── */
  if (variant === 'mobile') {
    return (
      <>
        {LOCALES.map((locale) => (
          <Link
            key={locale.lang}
            href={localePath(locale.lang)}
            lang={locale.lang}
            hrefLang={locale.hreflang}
            className={`flex items-center justify-between py-2 px-3 rounded-sm ${
              locale.lang === lang
                ? 'text-lagoon'
                : 'text-white/70'
            }`}
            aria-current={locale.lang === lang ? 'true' : undefined}
          >
            <span className="font-heading text-[14px]">{locale.nativeName}</span>
            {locale.lang === lang && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </Link>
        ))}
      </>
    );
  }

  /* ── Header variant: globe icon + dropdown ── */
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2 text-white/55 hover:text-white transition-colors duration-200"
        aria-label={`Language: ${currentLocale?.nativeName ?? lang}. Change language`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {/* Globe icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
        <span className="font-heading text-[13px] font-semibold uppercase tracking-wide">
          {lang}
        </span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-[200px] bg-surface border border-mist rounded-md shadow-lg z-50 overflow-hidden animate-fade-in"
          role="menu"
          aria-label="Select language"
        >
          <div className="py-1">
            {LOCALES.map((locale) => {
              const isActive = locale.lang === lang;
              return (
                <Link
                  key={locale.lang}
                  href={localePath(locale.lang)}
                  lang={locale.lang}
                  hrefLang={locale.hreflang}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 font-heading text-[13px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-current bg-reef'
                      : 'text-ink hover:bg-reef hover:text-current'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span>{locale.nativeName}</span>
                  {isActive && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
