import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { speciesGuides } from '@/lib/data/species-guides';
import { careGuides } from '@/lib/data/care-guides';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.speciesIndexTitle ?? 'Exotic Fish Species Guides | Expert Care Advice | The Fish Collection',
    description: dict.seo?.speciesIndexDescription ?? "Comprehensive species guides for exotic aquarium fish. Tank setup, water parameters, diet, breeding & compatibility. Written by The Fish Collection's certified aquarists.",
    path: '/species/',
    lang: params.lang,
  });
}

export default async function SpeciesIndexPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  return (
    <>
      {/* Breadcrumb */}
      <div className="page-container pt-6 pb-2">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: dict.species?.speciesGuides ?? 'Species Guides', href: '/species/' },
          ]}
        />
      </div>

      {/* Page Header */}
      <header className="page-container pt-8 pb-12 md:pt-16 md:pb-20 animate-fade-up">
        <p className="section-label mb-4 stagger-1 animate-fade-in">{dict.species?.speciesGuides ?? 'Species Guides'}</p>
        <h1 className="font-heading font-bold text-h1 md:text-display-lg text-abyss tracking-tight mb-5">
          {dict.species?.speciesGuides ?? 'Species Guides'}
        </h1>
        <p className="font-body text-lg text-deep-text leading-relaxed max-w-readable mb-8">
          {dict.species?.indexIntro ?? 'In-depth care guides written by our Head Aquarist, Teemu Suoninen. Each guide covers tank requirements, water parameters, diet, temperament, breeding, and compatibility — everything you need to keep your fish thriving.'}
        </p>
      </header>

      {/* Guide Count */}
      <div className="page-container mb-8">
        <div className="flex items-center justify-between border-b border-mist pb-4">
          <p className="text-sku text-drift tracking-wide">
            {(dict.common?.guidesPublished ?? '{count} guides published')
              .replace('{count}', String(speciesGuides.length))
              .replace(/\{count, plural, one \{([^}]+)\} other \{([^}]+)\}\}/g, (_: string, one: string, other: string) => speciesGuides.length === 1 ? one : other)}
          </p>
        </div>
      </div>

      {/* Species Grid */}
      <div className="page-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {speciesGuides.map((guide, i) => (
            <div
              key={guide.slug}
              className={`group border border-mist rounded-md bg-surface transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${Math.min(i + 1, 8)}`}
            >
              {/* Card Content */}
              <div className="p-6 md:p-8">
                {/* Label */}
                <div className="flex items-center justify-between mb-4">
                  <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade">
                    {dict.species?.speciesGuideLabel ?? 'Species Guide'}
                  </p>
                  <span className="text-sku text-ghost">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-heading font-bold text-h2 text-abyss mb-1 leading-snug">
                  <Link
                    href={`/${params.lang}/species/${guide.slug}/`}
                    className="hover:text-current transition-colors duration-200"
                  >
                    {guide.title.split(':')[0]}
                  </Link>
                </h2>

                {/* Scientific name */}
                {guide.scientificName && (
                  <p className="font-scientific italic font-light text-sm text-drift tracking-wide mb-4">
                    {guide.scientificName}
                  </p>
                )}

                {/* Summary */}
                <p className="font-body text-sm text-deep-text leading-relaxed line-clamp-3 mb-5">
                  {guide.summary}
                </p>

                {/* Category & care guide quick links */}
                {guide.category && (
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <Link
                      href={`/${params.lang}/exotic-fish/${guide.category}/`}
                      className="text-sku text-current hover:text-abyss transition-colors duration-200 underline underline-offset-2 decoration-current/30 hover:decoration-current"
                    >
                      {(dict.species?.shopCategory ?? 'Shop {category}').replace('{category}', guide.category.charAt(0).toUpperCase() + guide.category.slice(1))}
                    </Link>
                    {(() => {
                      const matchingCareGuide = careGuides.find((cg) => cg.category === guide.category);
                      if (!matchingCareGuide) return null;
                      return (
                        <>
                          <span className="text-ghost">&middot;</span>
                          <Link
                            href={`/${params.lang}/care-guides/${matchingCareGuide.slug}/`}
                            className="text-sku text-current hover:text-abyss transition-colors duration-200 underline underline-offset-2 decoration-current/30 hover:decoration-current"
                          >
                            {dict.care?.careGuideLabel ?? 'Care Guide'}
                          </Link>
                        </>
                      );
                    })()}
                  </div>
                )}

                {/* Read link */}
                <Link
                  href={`/${params.lang}/species/${guide.slug}/`}
                  className="flex items-center gap-3 group/link"
                >
                  <div className="w-6 h-px bg-lagoon transition-all duration-300 group-hover/link:w-10" />
                  <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-drift group-hover/link:text-current transition-colors duration-200">
                    {dict.common?.readGuide ?? 'Read Guide'}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Guides Cross-Link */}
      {careGuides.length > 0 && (
        <section className="bg-reef/40 border-t border-mist/40">
          <div className="page-container py-16 md:py-24">
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <p className="section-label mb-3">{dict.species?.relatedResources ?? 'Related Resources'}</p>
                <h2 className="font-heading font-bold text-h1 text-abyss tracking-tight">
                  {dict.care?.careGuides ?? 'Care Guides'}
                </h2>
              </div>
              <Link
                href={`/${params.lang}/care-guides/`}
                className="btn-ghost"
              >
                {dict.common?.viewAll ?? 'View All'} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {careGuides.map((guide, i) => (
                <Link
                  key={guide.slug}
                  href={`/${params.lang}/care-guides/${guide.slug}/`}
                  className={`group block bg-surface border border-mist rounded-md p-6 pb-8 transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${Math.min(i + 1, 8)}`}
                >
                  <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-lagoon mb-3">
                    {dict.care?.careGuideLabel ?? 'Care Guide'}
                  </p>
                  <h3 className="font-heading font-bold text-h3 text-abyss group-hover:text-current transition-colors duration-200 mb-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="font-body text-sm text-deep-text leading-relaxed line-clamp-2 mb-4">
                    {guide.summary}
                  </p>
                  <span className="text-sku text-drift group-hover:text-current transition-colors duration-200">
                    {dict.common?.readGuide ?? 'Read guide'} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
