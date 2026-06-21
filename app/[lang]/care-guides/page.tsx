import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { careGuides } from '@/lib/data/care-guides';
import { careGuideCategories } from '@/lib/data/care-guide-categories';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.careIndexTitle ?? 'Fish Care Guides | Expert Aquarium Advice | The Fish Collection',
    description: dict.seo?.careIndexDescription ?? 'Expert fish care guides — tank setup, water parameters, diet & feeding for exotic species. Written by certified aquarists with 15+ years experience.',
    path: '/care-guides/',
    lang: params.lang,
  });
}

export default async function CareGuidesIndexPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  // Group guides by topicCategory
  const guidesByCategory: Record<string, typeof careGuides> = {};
  for (const guide of careGuides) {
    const cat = guide.topicCategory ?? 'uncategorised';
    if (!guidesByCategory[cat]) guidesByCategory[cat] = [];
    guidesByCategory[cat].push(guide);
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="page-container pt-6 pb-2">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: dict.care?.careGuides ?? 'Care Guides', href: '/care-guides/' },
          ]}
        />
      </div>

      {/* Page Header */}
      <header className="page-container pt-8 pb-12 md:pt-16 md:pb-20 animate-fade-up">
        <p className="section-label mb-4 stagger-1 animate-fade-in">{dict.care?.careGuides ?? 'Care Guides'}</p>
        <h1 className="font-heading font-bold text-h1 md:text-display-lg text-abyss tracking-tight mb-5">
          {dict.care?.careGuides ?? 'Care Guides'}
        </h1>
        <p className="font-body text-lg text-deep-text leading-relaxed max-w-readable mb-8">
          {dict.care?.indexIntro ?? 'Practical care guides covering tank setup, water chemistry, diet, and health management for exotic aquarium fish. Written by our certified aquarists with decades of hands-on experience.'}
        </p>
      </header>

      {/* Guide Count */}
      <div className="page-container mb-8">
        <div className="flex items-center justify-between border-b border-mist pb-4">
          <p className="text-sku text-drift tracking-wide">
            {(dict.common?.guidesPublished ?? '{count} guides published').replace('{count}', String(careGuides.length)).replace(/{count, plural, one \{guide\} other \{guides\}}/g, careGuides.length === 1 ? 'guide' : 'guides')}
          </p>
        </div>
      </div>

      {/* Care Guides Grouped by Category */}
      <div className="page-container pb-20 md:pb-32">
        {careGuideCategories.map((category) => {
          const categoryGuides = guidesByCategory[category.slug] ?? [];
          if (categoryGuides.length === 0) return null;

          return (
            <section key={category.slug} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-heading font-bold text-h1 text-abyss">
                  {category.name}
                </h2>
                <Link
                  href={`/${params.lang}/care-guides/${category.slug}/`}
                  className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade hover:text-abyss transition-colors duration-200"
                >
                  {dict.common?.viewAll ?? 'View All'} &rarr;
                </Link>
              </div>
              <p className="font-body text-base text-deep-text leading-relaxed max-w-readable mb-6">
                {category.description}
              </p>

              {/* Guide Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryGuides.map((guide, i) => (
                  <Link
                    key={guide.slug}
                    href={`/${params.lang}/care-guides/${guide.slug}/`}
                    className={`group border border-mist rounded-md bg-surface transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${Math.min(i + 1, 8)}`}
                  >
                    <div className="p-6 md:p-8">
                      {/* Header row */}
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade">
                          {dict.care?.careGuideLabel ?? 'Care Guide'}
                        </p>
                        <span className="text-sku text-ghost">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-h2 text-abyss group-hover:text-current transition-colors duration-200 mb-3 leading-snug">
                        {guide.title}
                      </h3>

                      {/* Summary */}
                      <p className="font-body text-sm text-deep-text leading-relaxed line-clamp-3 mb-5">
                        {guide.summary}
                      </p>

                      {/* Bottom accent */}
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-px bg-lagoon transition-all duration-300 group-hover:w-10" />
                        <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-drift group-hover:text-current transition-colors duration-200">
                          {dict.common?.readGuide ?? 'Read Guide'}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Uncategorised guides (if any exist) */}
        {guidesByCategory['uncategorised'] && guidesByCategory['uncategorised'].length > 0 && (
          <section className="mb-16">
            <h2 className="font-heading font-bold text-h1 text-abyss mb-3">
              {dict.care?.otherGuides ?? 'Other Guides'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {guidesByCategory['uncategorised'].map((guide, i) => (
                <Link
                  key={guide.slug}
                  href={`/${params.lang}/care-guides/${guide.slug}/`}
                  className={`group border border-mist rounded-md bg-surface transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${Math.min(i + 1, 8)}`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade">
                        {dict.care?.careGuideLabel ?? 'Care Guide'}
                      </p>
                      <span className="text-sku text-ghost">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-h2 text-abyss group-hover:text-current transition-colors duration-200 mb-3 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="font-body text-sm text-deep-text leading-relaxed line-clamp-3 mb-5">
                      {guide.summary}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-px bg-lagoon transition-all duration-300 group-hover:w-10" />
                      <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-drift group-hover:text-current transition-colors duration-200">
                        {dict.common?.readGuide ?? 'Read Guide'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Also show guides with topicCategory values not in careGuideCategories */}
        {Object.entries(guidesByCategory)
          .filter(([key]) => key !== 'uncategorised' && !careGuideCategories.some((c) => c.slug === key))
          .map(([key, guides]) => (
            <section key={key} className="mb-16">
              <h2 className="font-heading font-bold text-h1 text-abyss mb-6">
                {key.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {guides.map((guide, i) => (
                  <Link
                    key={guide.slug}
                    href={`/${params.lang}/care-guides/${guide.slug}/`}
                    className={`group border border-mist rounded-md bg-surface transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${Math.min(i + 1, 8)}`}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade">
                          {dict.care?.careGuideLabel ?? 'Care Guide'}
                        </p>
                        <span className="text-sku text-ghost">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-h2 text-abyss group-hover:text-current transition-colors duration-200 mb-3 leading-snug">
                        {guide.title}
                      </h3>
                      <p className="font-body text-sm text-deep-text leading-relaxed line-clamp-3 mb-5">
                        {guide.summary}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-px bg-lagoon transition-all duration-300 group-hover:w-10" />
                        <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-drift group-hover:text-current transition-colors duration-200">
                          {dict.common?.readGuide ?? 'Read Guide'}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
      </div>
    </>
  );
}
