import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.homeTitle ?? 'Rare Fish, Real Experts | The Fish Collection',
    description: dict.seo?.homeDescription ?? '',
    path: '/',
    lang: params.lang,
  });
}

export const revalidate = 3600;

export default async function HomePage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);
  const t = dict.home ?? {};
  const common = dict.common ?? {};

  const topCategories = categories.slice(0, 12);
  const featured = [...products]
    .sort((a, b) => b.priceUSD - a.priceUSD)
    .slice(0, 4);

  const categoryImages: Record<string, string> = {
    arowana: '/images/brand/category/category-arowana.png',
    catfish: '/images/brand/category/category-catfish.png',
    cichlid: '/images/brand/category/category-cichlid.png',
    discus: '/images/brand/category/category-discus.png',
    angelfish: '/images/brand/category/category-angelfish.png',
    tang: '/images/brand/category/category-tang.png',
    pufferfish: '/images/brand/category/category-pufferfish.png',
    piranha: '/images/brand/category/category-piranha.png',
    gar: '/images/brand/category/category-gar.png',
    pleco: '/images/brand/category/category-pleco.png',
    'knife-fish': '/images/brand/category/category-knife-fish.png',
    wolffish: '/images/brand/category/category-wolffish.png',
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-abyss overflow-hidden">
        {/* Hero fish background */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/brand/hero/hero-platinum-arowana.jpg"
            alt=""
            fill
            priority
            className="object-cover object-right opacity-40 lg:opacity-60"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #0B2D36 0%, #0B2D36 40%, transparent 75%)',
            }}
          />
        </div>

        {/* Caustic texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" aria-hidden="true">
          <Image
            src="/images/brand/textures/texture-caustic-light.jpg"
            alt=""
            fill
            className="object-cover animate-caustic"
          />
        </div>

        <div
          className="absolute inset-0 opacity-50"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 70%, rgba(41,168,196,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 30%, rgba(125,207,224,0.08) 0%, transparent 60%)',
          }}
        />

        {/* Floating particles */}
        <div className="hero-particles hidden md:block" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className="relative max-w-content mx-auto px-5 md:px-10 xl:px-20 py-24 md:py-32 lg:py-40">
          <div className="max-w-[720px]">
            <p className="animate-fade-up font-heading text-label font-bold tracking-widest text-lagoon uppercase mb-4">
              {t.heroEyebrow}
            </p>

            <h1 className="animate-fade-up stagger-1 font-heading text-display-lg md:text-display-xl lg:text-display-2xl font-bold text-white">
              {t.heroHeadline}
              <br />
              <span className="text-shallows">{t.heroHeadlineAccent}</span>
            </h1>

            <p className="animate-fade-up stagger-2 font-body text-body-lg text-white/50 mt-6 mb-10 max-w-[540px]">
              {t.heroTagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up stagger-3">
              <Link
                href={`/${params.lang}/exotic-fish/`}
                className="btn-primary text-center px-8 py-3.5"
              >
                {t.browseAllFish}
              </Link>
              <Link
                href={`/${params.lang}/species/`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white/20 text-white/80 font-heading text-[15px] font-semibold rounded-[10px] hover:border-white/50 hover:text-white transition-all duration-200"
              >
                {t.speciesGuides}
              </Link>
            </div>
          </div>

          <div className="animate-fade-up stagger-4 flex items-center gap-8 mt-16 pt-6 border-t border-[#1E4A58]">
            {[
              { value: '200+', label: t.statSpecies },
              { value: '15yr', label: t.statExpertise },
              { value: '100%', label: t.statLiveArrival },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-price font-bold text-lagoon">{stat.value}</p>
                <p className="font-heading text-[11px] text-white/35 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED FISH ═══ */}
      <section className="page-container py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <div>
            <p className="section-label mb-2">{t.featuredLabel}</p>
            <h2 className="font-heading text-h1 font-bold text-ink">
              {t.topSpecimens}
            </h2>
          </div>
          <Link
            href={`/${params.lang}/exotic-fish/`}
            className="btn-ghost mt-4 md:mt-0"
          >
            {t.viewAllFish} &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {featured.map((product, i) => (
            <Link
              key={product.slug}
              href={`/${params.lang}/exotic-fish/${product.category}/${product.slug}/`}
              className="group block animate-fade-up"
              style={{ animationDelay: `${80 * (i + 1)}ms` }}
            >
              <article className="card-glow-hover bg-reef border border-mist rounded-md shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-[3px]">
                <div className="fish-image-container relative aspect-[4/5] rounded-t-md">
                  <Image
                    src={product.images[0]?.url ?? '/images/placeholder.jpg'}
                    alt={product.images[0]?.alt ?? `${product.commonName} (${product.scientificName})`}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-4 pb-5">
                  <p className="font-heading text-[11px] font-bold tracking-widest text-lagoon uppercase mb-[3px]">
                    {product.category}
                  </p>
                  <h3 className="font-heading text-[17px] font-bold leading-snug tracking-snug text-ink mb-[2px]">
                    {product.commonName}
                  </h3>
                  <p className="font-scientific italic font-light text-[13px] text-drift mb-3">
                    {product.scientificName}
                  </p>
                  <div className="pt-3 border-t border-mist flex items-baseline justify-between">
                    <span className="font-mono text-[16px] font-bold text-ink">
                      ${product.priceUSD.toLocaleString('en-US')}
                    </span>
                    {product.priceUSD >= 5000 && (
                      <span className="font-heading text-[10px] font-bold text-lagoon tracking-widest uppercase">
                        {common.premium}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="bg-reef border-y border-mist">
        <div className="page-container py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="section-label mb-2">{t.collectionsLabel}</p>
              <h2 className="font-heading text-h1 font-bold text-ink">
                {t.browseBySpecies}
              </h2>
            </div>
            <Link
              href={`/${params.lang}/exotic-fish/`}
              className="btn-ghost mt-4 md:mt-0"
            >
              {t.viewAllCollections} &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/${params.lang}/exotic-fish/${cat.slug}/`}
                className="group relative bg-gradient-to-br from-surface to-foam/40 border border-mist rounded-md p-5 md:p-6 shadow-xs hover:shadow-md hover:-translate-y-[3px] transition-all duration-[250ms] animate-fade-up overflow-hidden"
                style={{ animationDelay: `${40 * (i + 1)}ms` }}
              >
                <h3 className="font-heading text-h4 font-bold text-ink group-hover:text-current transition-colors duration-200">
                  {cat.name}
                </h3>
                <p className="font-mono text-param text-drift mt-2">
                  {(common.speciesCount ?? '{count} species').replace('{count}', String(cat.productCount))}
                </p>
                {categoryImages[cat.slug] && (
                  <Image
                    src={categoryImages[cat.slug]}
                    alt=""
                    width={96}
                    height={96}
                    className="absolute bottom-3 right-3 h-12 w-auto opacity-20 group-hover:opacity-40 transition-all duration-[600ms] group-hover:scale-[1.08]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="page-container py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div className="max-w-readable">
            <p className="section-label mb-2">{t.aboutLabel}</p>
            <h2 className="font-heading text-h1 font-bold text-ink mb-6">
              {t.aboutHeading}
            </h2>
            <p className="font-body text-base text-deep-text leading-loose mb-4">
              {t.aboutParagraph1}
            </p>
            <p className="font-body text-base text-deep-text leading-loose mb-8">
              {t.aboutParagraph2}
            </p>
            <div className="flex gap-6">
              <Link href={`/${params.lang}/about/`} className="btn-ghost">
                {t.ourStory} &rarr;
              </Link>
              <Link href={`/${params.lang}/authors/teemu-suoninen/`} className="btn-ghost">
                {t.meetOurExperts} &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { value: '200+', label: t.metricSpecies },
              { value: '15', label: t.metricYearsExpertise },
              { value: '100%', label: t.metricLiveArrival },
              { value: 'CITES', label: t.metricCertified },
            ].map((metric) => (
              <div
                key={metric.label}
                className="text-center p-5 md:p-6 bg-reef border border-mist border-l-2 border-l-lagoon rounded-md shadow-xs min-w-[120px]"
              >
                <span className="font-heading text-display-lg font-bold text-current block" style={{ textShadow: '0 0 40px rgba(41,168,196,0.2)' }}>
                  {metric.value}
                </span>
                <p className="font-mono text-param text-wade mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERT RESOURCES ═══ */}
      <section className="bg-reef border-y border-mist">
        <div className="page-container py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="section-label mb-2">{t.expertResourcesLabel}</p>
            <h2 className="font-heading text-h1 font-bold text-ink">
              {t.expertResourcesHeading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: t.resourceSpeciesLabel,
                title: t.resourceSpeciesTitle,
                desc: t.resourceSpeciesDesc,
                href: `/${params.lang}/species/`,
                cta: t.resourceSpeciesCta,
              },
              {
                label: t.resourceCareLabel,
                title: t.resourceCareTitle,
                desc: t.resourceCareDesc,
                href: `/${params.lang}/care-guides/`,
                cta: t.resourceCareCta,
              },
              {
                label: t.resourceJournalLabel,
                title: t.resourceJournalTitle,
                desc: t.resourceJournalDesc,
                href: `/${params.lang}/blog/`,
                cta: t.resourceJournalCta,
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-surface border border-mist rounded-md p-8 shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all duration-[250ms]"
              >
                <p className="font-heading text-[11px] font-bold tracking-widest text-lagoon uppercase mb-4">
                  {card.label}
                </p>
                <h3 className="font-heading text-h2 font-bold text-ink mb-3 group-hover:text-current transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="font-body text-body-sm text-deep-text leading-loose mb-6">
                  {card.desc}
                </p>
                <span className="font-heading text-body-sm font-semibold text-current group-hover:underline group-hover:decoration-lagoon underline-offset-[3px]">
                  {card.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="page-container py-16 md:py-20">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-lagoon/20 to-transparent mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: t.trustLiveArrival,
              detail: t.trustLiveArrivalDetail,
              href: `/${params.lang}/returns/`,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-lagoon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              ),
            },
            {
              title: t.trustShipping,
              detail: t.trustShippingDetail,
              href: `/${params.lang}/shipping/`,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-lagoon">
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              ),
            },
            {
              title: t.trustExpert,
              detail: t.trustExpertDetail,
              href: `/${params.lang}/about/`,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-lagoon">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
              ),
            },
          ].map((signal) => (
            <Link key={signal.title} href={signal.href} className="text-center group flex flex-col items-center">
              <div className="w-12 h-12 rounded-md bg-foam flex items-center justify-center mb-3">
                {signal.icon}
              </div>
              <p className="font-heading text-h4 font-bold text-ink mb-2 group-hover:text-current transition-colors duration-200">
                {signal.title}
              </p>
              <p className="font-body text-body-sm text-deep-text leading-loose">
                {signal.detail}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
