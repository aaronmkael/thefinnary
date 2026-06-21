import Link from 'next/link';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import type { GuideNav } from '@/components/layout/SiteHeader';

interface SiteFooterProps {
  lang: string;
  guides?: GuideNav;
  dict: Record<string, Record<string, string>>;
}

export function SiteFooter({ lang, guides, dict }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const f = dict.footer ?? {};
  const t = dict.trust ?? {};
  const nav = dict.navigation ?? {};
  const common = dict.common ?? {};

  return (
    <footer className="bg-abyss text-white/80">
      {/* Gradient transition from page content */}
      <div className="h-16 bg-gradient-to-b from-surface to-abyss" />

      {/* Trust bar */}
      <div className="bg-deep border-b border-[#1E4A58]">
        <div className="max-w-content mx-auto px-5 md:px-10 xl:px-20 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: t.liveArrival,
                desc: t.liveArrivalDesc,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-lagoon">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: t.freeShipping,
                desc: t.freeShippingDesc,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-lagoon">
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                ),
              },
              {
                title: t.expertBred,
                desc: t.expertBredDesc,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-lagoon">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                    <line x1="9.69" y1="8" x2="21.17" y2="8" />
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                    <line x1="14.31" y1="16" x2="2.83" y2="16" />
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                  </svg>
                ),
              },
              {
                title: t.citesCertified,
                desc: t.citesCertifiedDesc,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-lagoon">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                    <path d="M9 16l2 2 4-4" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-heading text-[13px] font-bold text-lagoon mb-1">
                    {item.title}
                  </p>
                  <p className="font-heading text-[12px] text-white/40">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-[#1E4A58] bg-gradient-to-r from-deep via-abyss to-deep">
        <div className="max-w-content mx-auto px-5 md:px-10 xl:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-h2 font-bold text-white text-center md:text-left">
              {f.newsletterHeading}
            </p>
            <p className="font-body text-body-sm text-white/40 mt-1 text-center md:text-left">
              {f.newsletterSubtext}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <input
              type="email"
              placeholder={f.emailPlaceholder}
              className="font-heading text-[15px] bg-surface text-ink border border-mist placeholder:text-drift placeholder:italic px-4 h-[44px] rounded-xs min-w-[240px] focus:outline-none focus:ring-2 focus:ring-lagoon focus:ring-offset-2 transition-colors"
              aria-label={f.emailLabel}
            />
            <button className="btn-primary h-[44px] px-6">
              {common.subscribe}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-5 md:px-10 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* About */}
          <div className="lg:col-span-2">
            <Link
              href={`/${lang}/`}
              className="font-heading text-[20px] font-extrabold text-white tracking-tight block mb-4 hover:text-shallows transition-colors"
            >
              The Fish Collection
            </Link>
            <p className="font-body text-body-sm text-white/40 leading-loose max-w-[320px]">
              {f.aboutText}
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading text-[11px] font-bold tracking-widest text-white/30 mb-5 uppercase">
              {f.shopHeading}
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: f.allExoticFish, href: `/${lang}/exotic-fish/` },
                { label: f.arowana ?? 'Arowana', href: `/${lang}/exotic-fish/arowana/` },
                { label: f.stingrays ?? 'Stingrays', href: `/${lang}/exotic-fish/stingray/` },
                { label: f.cichlids ?? 'Cichlids', href: `/${lang}/exotic-fish/cichlid/` },
                { label: f.catfish ?? 'Catfish', href: `/${lang}/exotic-fish/catfish/` },
                { label: f.koiGoldfish ?? 'Koi & Goldfish', href: `/${lang}/exotic-fish/koi/` },
                { label: f.betta ?? 'Betta', href: `/${lang}/exotic-fish/betta/` },
                { label: f.pufferfish ?? 'Pufferfish', href: `/${lang}/exotic-fish/pufferfish/` },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-heading text-[11px] font-bold tracking-widest text-white/30 mb-5 uppercase">
              {f.learnHeading}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${lang}/species/`} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                  {nav.speciesGuides}{guides ? ` (${guides.contentStats.speciesCount})` : ''}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/care-guides/`} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                  {nav.careGuides}{guides ? ` (${guides.contentStats.careGuideCount})` : ''}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/glossary/`} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                  {f.glossary ?? 'Glossary'}{guides ? ` (${guides.contentStats.glossaryCount})` : ''}
                </Link>
              </li>
            </ul>

            {guides && guides.blogTagHubs.length > 0 && (
              <>
                <div className="my-4 border-b border-[#1E4A58]" />
                <ul className="space-y-2.5">
                  {guides.blogTagHubs.map((hub) => (
                    <li key={hub.slug}>
                      <Link href={`/${lang}/blog/tag/${hub.slug}/`} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                        {hub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="my-4 border-b border-[#1E4A58]" />
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${lang}/blog/`} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                  {f.allArticles ?? 'All Journal Articles'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/authors/teemu-suoninen/`} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                  {nav.ourExperts}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-[11px] font-bold tracking-widest text-white/30 mb-5 uppercase">
              {f.supportHeading}
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: f.shipping, href: `/${lang}/shipping/` },
                { label: f.returns, href: `/${lang}/returns/` },
                { label: f.faq, href: `/${lang}/faq/` },
                { label: f.contact, href: `/${lang}/contact/` },
                { label: f.about, href: `/${lang}/about/` },
                { label: f.privacy, href: `/${lang}/privacy/` },
                { label: f.terms, href: `/${lang}/terms/` },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-heading text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-[#1E4A58] flex flex-col items-center gap-5">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <p className="font-heading text-[12px] text-white/30">
              {(f.copyright ?? '').replace('{year}', String(year))}
            </p>
            <p className="font-heading text-[12px] text-white/30">
              {f.tagline}
            </p>
          </div>
          <LanguageSwitcher lang={lang} variant="footer" />
        </div>
      </div>
    </footer>
  );
}
