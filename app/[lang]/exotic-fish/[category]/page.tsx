import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata, categoryTitle } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildCategoryFAQ, buildItemList } from '@/lib/seo/jsonLd';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getCategoryBySlug, getAllCategorySlugs, categories } from '@/lib/data/categories';
import { getProductsByCategory } from '@/lib/data/products';
import { getCategoryName } from '@/lib/data/translations/categories.i18n';
import { speciesGuides } from '@/lib/data/species-guides';
import { careGuides } from '@/lib/data/care-guides';

export function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; category: string };
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};
  const dict = await getDictionary(params.lang as Lang);
  const name = getCategoryName(params.category, params.lang);
  return buildMetadata({
    title: categoryTitle(name, dict.seo),
    description: category.metaDescription,
    path: `/exotic-fish/${params.category}/`,
    lang: params.lang,
  });
}

export const revalidate = 600;

export default async function CategoryPage({
  params,
}: {
  params: { lang: string; category: string };
}) {
  const dict = await getDictionary(params.lang as Lang);
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const products = getProductsByCategory(params.category);

  /* Find sibling categories for cross-navigation */
  const siblings = categories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      {/* -- JSON-LD: ItemList -- */}
      {products.length > 0 && <JsonLd data={buildItemList(products, category.slug, params.lang)} />}

      {/* -- JSON-LD: FAQPage -- */}
      {category.faqs && category.faqs.length > 0 && <JsonLd data={buildCategoryFAQ(category.faqs)} />}

      {/* -- Hero -- */}
      <section className="relative bg-abyss overflow-hidden">
        {/* Bioluminescent glow */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 60% 90%, rgba(41,168,196,0.5) 0%, transparent 70%)',
          }}
        />

        <div className="page-container relative z-10 pt-12 pb-16 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <p className="animate-fade-up section-label mb-4 !text-lagoon/70">
            {dict.navigation?.exoticFish ?? 'Exotic Fish'}
          </p>

          {/* Headline */}
          <h1 className="animate-fade-up stagger-1 font-heading text-h1 md:text-display-lg text-surface tracking-tight max-w-[800px]">
            {category.name}
          </h1>

          {/* Description */}
          <p className="animate-fade-up stagger-3 font-body text-base md:text-body-lg text-surface/55 leading-loose max-w-readable mt-8">
            {category.description}
          </p>

          {/* Meta strip */}
          <div className="animate-fade-up stagger-4 flex items-center gap-8 mt-10 pt-6 border-t border-[#1E4A58]">
            <div>
              <p className="font-mono text-price text-lagoon">{products.length}</p>
              <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-surface/35 mt-1">
                {dict.category?.statSpecies ?? 'Species'}
              </p>
            </div>
            <div className="w-px h-6 bg-[#1E4A58]" aria-hidden="true" />
            <div>
              <p className="font-mono text-price text-lagoon">
                {products.filter((p) => p.inStock).length}
              </p>
              <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-surface/35 mt-1">{dict.common?.inStock ?? 'In Stock'}</p>
            </div>
            {products.length > 0 && (
              <>
                <div className="w-px h-6 bg-[#1E4A58]" aria-hidden="true" />
                <div>
                  <p className="font-mono text-price text-lagoon">
                    ${Math.min(...products.map((p) => p.priceUSD)).toLocaleString('en-US')}
                  </p>
                  <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-surface/35 mt-1">{dict.common?.from ?? 'From'}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* -- Breadcrumb Bar -- */}
      <div className="page-container border-b border-mist">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: dict.navigation?.exoticFish ?? 'Exotic Fish', href: '/exotic-fish/' },
            { name: category.name, href: `/exotic-fish/${category.slug}/` },
          ]}
        />
      </div>

      {/* -- Product Grid -- */}
      <section className="page-container py-16 md:py-24">
        {products.length > 0 ? (
          <>
            {/* Section header */}
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <p className="section-label mb-2">{dict.category?.availableFish ?? 'Available Fish'}</p>
                <h2 className="font-heading text-h1 text-ink tracking-tight">
                  {category.name}
                </h2>
              </div>
            </div>

            {/* Divider */}
            <div className="editorial-divider mb-10 md:mb-14" />

            {/* Filterable product grid */}
            <ProductGrid products={products} lang={params.lang} />
          </>
        ) : (
          /* -- Empty state -- */
          <div className="text-center py-20 md:py-32">
            <div className="max-w-narrow mx-auto">
              <p className="section-label mb-6">{dict.common?.outOfStock ?? 'Currently Unavailable'}</p>
              <h2 className="font-heading text-h1 md:text-h1 text-ink tracking-tight">
                {dict.category?.noFishHeading ?? 'No fish currently available'}
              </h2>
              <p className="font-body text-base text-deep-text leading-loose mt-10 mb-10">
                {(dict.category?.noFishText ?? 'Our {category} collection rotates frequently as we source only the healthiest fish. Check back soon, or browse our other categories below.').replace('{category}', category.name.toLowerCase())}
              </p>
              <Link
                href={`/${params.lang}/exotic-fish/`}
                className="btn-primary"
              >
                {dict.common?.browseAllCategories ?? 'Browse All Categories'}
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* -- Buying Guide -- */}
      {category.buyingGuide && (
        <section className="border-t border-mist">
          <div className="page-container py-16 md:py-24">
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <p className="section-label mb-2">{dict.category?.expertGuidance ?? 'Expert Guidance'}</p>
                <h2 className="font-heading text-h1 text-ink tracking-tight">
                  {(dict.category?.buyingGuideHeading ?? 'Buying {category}: What You Need to Know').replace('{category}', category.name)}
                </h2>
              </div>
            </div>

            <div className="editorial-divider mb-10 md:mb-14" />

            <div
              className="prose-tfc max-w-readable"
              dangerouslySetInnerHTML={{ __html: category.buyingGuide }}
            />
          </div>
        </section>
      )}

      {/* -- Species & Care Guides -- */}
      {(() => {
        const categorySpeciesGuides = speciesGuides.filter((g) => g.category === params.category);
        const categoryCareGuides = careGuides.filter((g) => g.category === params.category);
        if (categorySpeciesGuides.length === 0 && categoryCareGuides.length === 0) return null;
        return (
          <section className="border-t border-mist">
            <div className="page-container py-16 md:py-24">
              <div className="flex items-end justify-between mb-10 md:mb-14">
                <div>
                  <p className="section-label mb-2">{dict.category?.expertResourcesLabel ?? 'Expert Resources'}</p>
                  <h2 className="font-heading text-h1 text-ink tracking-tight">
                    {(dict.category?.guidesHeading ?? '{category} Guides').replace('{category}', category.name)}
                  </h2>
                </div>
              </div>

              <div className="editorial-divider mb-10 md:mb-14" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySpeciesGuides.map((guide, i) => (
                  <Link
                    key={guide.slug}
                    href={`/${params.lang}/species/${guide.slug}/`}
                    className={`group block bg-surface border border-mist rounded-md p-6 pb-8 shadow-xs transition-all duration-[250ms] ease-out hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${i + 1}`}
                  >
                    <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-lagoon mb-3">
                      {dict.species?.speciesGuideLabel ?? 'Species Guide'}
                    </p>
                    <h3 className="font-heading text-h3 text-ink group-hover:text-current transition-colors duration-200 mb-2 leading-snug">
                      {guide.title.split(':')[0]}
                    </h3>
                    {guide.scientificName && (
                      <p className="font-scientific italic font-light text-[13px] text-drift mb-3">
                        {guide.scientificName}
                      </p>
                    )}
                    <p className="font-body text-body-sm text-deep-text leading-loose line-clamp-2 mb-4">
                      {guide.summary}
                    </p>
                    <span className="font-mono text-sku text-drift group-hover:text-current transition-colors duration-200">
                      {dict.common?.readGuide ?? 'Read Guide'} &rarr;
                    </span>
                  </Link>
                ))}
                {categoryCareGuides.map((guide, i) => (
                  <Link
                    key={guide.slug}
                    href={`/${params.lang}/care-guides/${guide.slug}/`}
                    className={`group block bg-surface border border-mist rounded-md p-6 pb-8 shadow-xs transition-all duration-[250ms] ease-out hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${categorySpeciesGuides.length + i + 1}`}
                  >
                    <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-lagoon mb-3">
                      {dict.care?.careGuideLabel ?? 'Care Guide'}
                    </p>
                    <h3 className="font-heading text-h3 text-ink group-hover:text-current transition-colors duration-200 mb-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="font-body text-body-sm text-deep-text leading-loose line-clamp-2 mb-4">
                      {guide.summary}
                    </p>
                    <span className="font-mono text-sku text-drift group-hover:text-current transition-colors duration-200">
                      {dict.common?.readGuide ?? 'Read Guide'} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* -- Sibling Categories -- */}
      <section className="bg-reef border-t border-mist">
        <div className="page-container py-16 md:py-24">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="section-label mb-2">{dict.category?.keepExploring ?? 'Keep Exploring'}</p>
              <h2 className="font-heading text-h1 text-ink tracking-tight">
                {dict.category?.moreCategories ?? 'More Categories'}
              </h2>
            </div>
            <Link
              href={`/${params.lang}/exotic-fish/`}
              className="btn-ghost"
            >
              {dict.common?.viewAll ?? 'View All'} &rarr;
            </Link>
          </div>

          {/* Sibling grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siblings.map((sib, i) => (
              <Link
                key={sib.slug}
                href={`/${params.lang}/exotic-fish/${sib.slug}/`}
                className={`group block bg-surface border border-mist rounded-md p-6 pb-8 shadow-xs transition-all duration-[250ms] ease-out hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${i + 1}`}
              >
                <h3 className="font-heading text-h2 text-ink group-hover:text-current transition-colors duration-200 tracking-tight">
                  {sib.name}
                </h3>
                <div className="w-6 h-px bg-lagoon/40 mt-3 mb-4 group-hover:w-10 transition-all duration-[250ms]" />
                <p className="font-body text-body-sm text-deep-text leading-loose mb-5 line-clamp-2">
                  {sib.description.slice(0, 100)}&hellip;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sku text-drift tracking-wider">
                    {(dict.common?.speciesCount ?? '{count} species').replace('{count}', String(sib.productCount))}
                  </p>
                  <span className="font-body text-body-sm text-ghost group-hover:text-lagoon transition-colors duration-200 group-hover:translate-x-1 transform inline-block" aria-hidden="true">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
