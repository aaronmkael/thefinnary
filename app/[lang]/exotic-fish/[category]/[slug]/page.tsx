import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata, productTitle } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { buildProductSchema, buildFAQ } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { SpeciesSpecs } from '@/components/product/SpeciesSpecs';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProductCard } from '@/components/product/ProductCard';
import { getProductBySlug, getProductsByCategory, products } from '@/lib/data/products';
import { getCategoryBySlug } from '@/lib/data/categories';
import { getProductName } from '@/lib/data/translations/products.i18n';
import { speciesGuides } from '@/lib/data/species-guides';
import { careGuides } from '@/lib/data/care-guides';
import { FAQSection } from '@/components/eeat/FAQSection';

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; category: string; slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  const dict = await getDictionary(params.lang as Lang);
  const name = getProductName(params.slug, params.lang, product.commonName);
  return buildMetadata({
    title: productTitle(name, product.scientificName, dict.seo),
    description: product.seoDescription,
    path: `/exotic-fish/${params.category}/${params.slug}/`,
    lang: params.lang,
    ogType: 'website',
  });
}

export const revalidate = 300;

export default async function ProductPage({
  params,
}: {
  params: { lang: string; category: string; slug: string };
}) {
  const dict = await getDictionary(params.lang as Lang);
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategoryBySlug(params.category);
  const isPremium = product.priceUSD >= 5000;

  return (
    <>
      <JsonLd data={[buildProductSchema(product, params.lang), buildFAQ(product.faqs)]} />

      <div className="page-container py-8">
        {/* Breadcrumb */}
        <div className="mt-4">
          <Breadcrumb
            lang={params.lang}
            items={[
              { name: dict.common?.home ?? 'Home', href: '/' },
              { name: category?.name ?? params.category, href: `/exotic-fish/${params.category}/` },
              { name: product.commonName, href: `/exotic-fish/${params.category}/${params.slug}/` },
            ]}
          />
        </div>

        {/* Two-column grid: images (55%) | info (45%) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-8">

          {/* Left: Product Image */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="fish-image-container relative aspect-[4/5] rounded-md overflow-hidden shadow-[0_0_60px_rgba(41,168,196,0.08)] ring-1 ring-lagoon/10">
              <Image
                src={product.images[0]?.url ?? '/images/placeholder.jpg'}
                alt={product.images[0]?.alt ?? `${product.commonName} (${product.scientificName})`}
                width={800}
                height={1000}
                priority
                className="relative z-[1] w-full h-full object-cover"
              />

              {/* Premium badge */}
              {isPremium && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-abyss bg-foam/90 backdrop-blur-sm px-2 py-[3px] rounded-pill">
                    <span className="block w-[5px] h-[5px] rounded-pill bg-lagoon" />
                    {dict.common?.premium ?? 'Premium'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start flex flex-col animate-fade-up stagger-2">
            {/* Category eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <p className="section-label">{category?.name}</p>
              <span className="h-px flex-1 bg-mist" />
              <span className="font-mono text-sku text-drift">{product.sku}</span>
            </div>

            {/* Common name */}
            <h1 className="font-heading text-h1 font-bold leading-snug tracking-tight text-ink">
              {(dict.product?.buyProduct ?? 'Buy {name}').replace('{name}', product.commonName)}
            </h1>

            {/* Scientific name */}
            <em className="font-scientific italic font-light text-h4 text-drift tracking-wide mt-1 not-italic block">
              {product.scientificName}
            </em>

            {/* Status badges */}
            <div className="flex items-center gap-3 mt-4 mb-6">
              <StatusBadge inStock={product.inStock} stockCount={product.stockCount} />
            </div>

            {/* Short description */}
            <p className="font-body text-base text-deep-text leading-loose max-w-readable mb-6">
              {product.description.slice(0, 500)}...
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-mono text-price font-bold text-ink">
                ${product.priceUSD.toLocaleString('en-US')}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-mist mb-6" />

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {dict.common?.addToCart ?? 'Add to Cart'}
              </button>
              {product.speciesGuideSlug && (
                <Link
                  href={`/${params.lang}/species/${product.speciesGuideSlug}/`}
                  className="btn-secondary"
                >
                  {dict.product?.careGuide ?? 'Full Care Guide'}
                </Link>
              )}
            </div>

            {/* Species Specs */}
            <div className="animate-fade-up stagger-4">
              <SpeciesSpecs product={product} />
            </div>

            {/* Species guide link (below specs) */}
            {product.speciesGuideSlug && (() => {
              const guide = speciesGuides.find((g) => g.slug === product.speciesGuideSlug);
              return guide ? (
                <Link
                  href={`/${params.lang}/species/${guide.slug}/`}
                  className="mt-6 inline-flex items-center gap-2 font-heading text-body-sm font-semibold text-current hover:text-lagoon transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  {(dict.product?.readCareGuide ?? 'Read the {name} care guide').replace('{name}', product.commonName)}
                </Link>
              ) : null;
            })()}
          </div>
        </div>

        {/* Full description */}
        {product.description && (
          <section className="mt-20 max-w-readable mx-auto animate-fade-up">
            <div className="prose-tfc">
              <p>{product.description}</p>
            </div>
          </section>
        )}

        {/* FAQs */}
        {product.faqs.length > 0 && (
          <div className="max-w-readable mx-auto animate-fade-up stagger-6">
            <FAQSection
              faqs={product.faqs}
              heading={dict.product?.frequentlyAskedQuestions ?? 'Frequently Asked Questions'}
              subtext={dict.product?.commonQuestions ?? 'Common Questions'}
            />
          </div>
        )}

        {/* Species Guide & Care Guide Links */}
        {(() => {
          const speciesGuide = product.speciesGuideSlug
            ? speciesGuides.find((g) => g.slug === product.speciesGuideSlug)
            : null;
          const careGuide = careGuides.find((g) => g.category === product.category);
          if (!speciesGuide && !careGuide) return null;
          return (
            <section className="mt-20 max-w-readable mx-auto animate-fade-up">
              <div className="text-center mb-10">
                <p className="section-label mb-3">{dict.product?.expertResources ?? 'Expert Resources'}</p>
                <h2 className="font-heading text-h2 font-bold text-ink">
                  {dict.product?.learnMoreAboutSpecies ?? 'Learn More About This Species'}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {speciesGuide && (
                  <Link
                    href={`/${params.lang}/species/${speciesGuide.slug}/`}
                    className="group block bg-reef border border-mist rounded-md p-6 shadow-sm transition-all duration-[250ms] hover:shadow-md hover:-translate-y-[3px]"
                  >
                    <p className="font-heading text-[11px] font-bold tracking-widest text-lagoon uppercase mb-3">
                      {dict.product?.speciesGuide ?? 'Species Guide'}
                    </p>
                    <h3 className="font-heading text-h4 font-bold text-ink group-hover:text-current transition-colors duration-200 mb-2 leading-snug">
                      {speciesGuide.title}
                    </h3>
                    <p className="font-body text-body-sm text-deep-text leading-loose line-clamp-2 mb-4">
                      {speciesGuide.summary}
                    </p>
                    <span className="font-heading text-body-sm font-semibold text-current group-hover:text-lagoon transition-colors duration-200">
                      {dict.common?.readFullGuide ?? 'Read full guide'} &rarr;
                    </span>
                  </Link>
                )}
                {careGuide && (
                  <Link
                    href={`/${params.lang}/care-guides/${careGuide.slug}/`}
                    className="group block bg-reef border border-mist rounded-md p-6 shadow-sm transition-all duration-[250ms] hover:shadow-md hover:-translate-y-[3px]"
                  >
                    <p className="font-heading text-[11px] font-bold tracking-widest text-lagoon uppercase mb-3">
                      {dict.product?.careGuideLabel ?? 'Care Guide'}
                    </p>
                    <h3 className="font-heading text-h4 font-bold text-ink group-hover:text-current transition-colors duration-200 mb-2 leading-snug">
                      {careGuide.title}
                    </h3>
                    <p className="font-body text-body-sm text-deep-text leading-loose line-clamp-2 mb-4">
                      {careGuide.summary}
                    </p>
                    <span className="font-heading text-body-sm font-semibold text-current group-hover:text-lagoon transition-colors duration-200">
                      {dict.common?.readCareGuide ?? 'Read care guide'} &rarr;
                    </span>
                  </Link>
                )}
              </div>
            </section>
          );
        })()}

        {/* Related Products */}
        {product.relatedSlugs.length > 0 && (() => {
          const relatedProducts = product.relatedSlugs
            .slice(0, 4)
            .map((slug) => products.find((p) => p.slug === slug))
            .filter(Boolean) as typeof products;
          if (relatedProducts.length === 0) return null;
          return (
            <section className="mt-20 mb-10 animate-fade-up">
              <div className="text-center mb-10">
                <p className="section-label mb-3">{dict.product?.youMightAlsoLike ?? 'You Might Also Like'}</p>
                <h2 className="font-heading text-h2 font-bold text-ink">
                  {dict.product?.relatedSpecies ?? 'Related Species'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((related, i) => (
                  <div key={related.slug} className={`animate-fade-up stagger-${i + 1}`}>
                    <ProductCard product={related} lang={params.lang} />
                  </div>
                ))}
              </div>
            </section>
          );
        })()}
      </div>
    </>
  );
}
