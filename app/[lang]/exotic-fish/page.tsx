import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { categories } from '@/lib/data/categories';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.exoticFishTitle ?? 'Exotic Fish for Sale | Buy Rare Live Fish Online | The Fish Collection',
    description: dict.seo?.exoticFishDescription ?? 'Buy 200+ exotic fish species online — arowana, gem tang, peppermint angelfish & more. Expert-bred, live arrival guaranteed. Free overnight shipping across the US.',
    path: '/exotic-fish/',
    lang: params.lang,
  });
}

export const revalidate = 600;

export default async function ExoticFishPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);
  const totalSpecies = categories.reduce((sum, c) => sum + c.productCount, 0);

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
      {/* -- Hero -- */}
      <section className="relative bg-abyss overflow-hidden">
        {/* Bioluminescent glow */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 80%, rgba(41,168,196,0.5) 0%, transparent 70%)',
          }}
        />

        {/* Caustic texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" aria-hidden="true">
          <Image
            src="/images/brand/textures/texture-caustic-light.jpg"
            alt=""
            fill
            className="object-cover animate-caustic"
          />
        </div>

        <div className="page-container relative z-10 pt-16 pb-20 md:pt-24 md:pb-32">
          {/* Eyebrow */}
          <p className="animate-fade-up section-label mb-6 !text-lagoon/70">
            {dict.category?.exoticFishForSale ?? 'Exotic Fish for Sale'}
          </p>

          {/* Headline */}
          <h1 className="animate-fade-up stagger-1 font-heading text-h1 md:text-display-lg lg:text-display-xl text-surface tracking-tight max-w-[900px]">
            {dict.category?.exoticFishForSale ?? 'Exotic Fish for Sale'}
          </h1>

          {/* Intro copy */}
          <div className="animate-fade-up stagger-3 max-w-readable mt-10">
            <p className="font-body text-base md:text-body-lg text-surface/60 leading-loose mb-5">
              {dict.category?.introText ?? "We curate one of the world's largest selections of rare and unusual aquarium fish. From platinum arowana to peppermint angelfish, every fish in our catalogue has been hand-selected for genetic quality, health, and colouration."}
            </p>
            <p className="font-body text-base md:text-body-lg text-surface/60 leading-loose">
              {(dict.category?.introText2 ?? 'Browse our {count} specialist categories below, each overseen by certified aquarists. Every purchase includes live arrival guarantee, free overnight shipping, and ongoing care support from our team.').replace('{count}', String(categories.length))}
            </p>
          </div>

          {/* Stats strip */}
          <div className="animate-fade-up stagger-4 flex items-center gap-10 mt-12 pt-8 border-t border-[#1E4A58]">
            <div>
              <p className="font-mono text-price text-lagoon">{categories.length}</p>
              <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-surface/40 mt-1">{dict.category?.statCategories ?? 'Categories'}</p>
            </div>
            <div className="w-px h-8 bg-[#1E4A58]" aria-hidden="true" />
            <div>
              <p className="font-mono text-price text-lagoon">{totalSpecies}+</p>
              <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-surface/40 mt-1">{dict.category?.statSpecies ?? 'Species'}</p>
            </div>
            <div className="w-px h-8 bg-[#1E4A58]" aria-hidden="true" />
            <div>
              <p className="font-mono text-price text-lagoon">100%</p>
              <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-surface/40 mt-1">{dict.category?.statLiveArrival ?? 'Live Arrival'}</p>
            </div>
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
          ]}
        />
      </div>

      {/* -- Category Grid -- */}
      <section className="page-container py-16 md:py-24">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="section-label mb-2">{dict.category?.browseByCategory ?? 'Browse by Category'}</p>
            <h2 className="font-heading text-h1 md:text-h1 text-ink tracking-tight">
              {dict.category?.allCategories ?? 'All Categories'}
            </h2>
          </div>
          <p className="hidden md:block font-mono text-sku text-drift tracking-wider">
            {(dict.common?.categoriesCount ?? '{count} categories').replace('{count}', String(categories.length))}
          </p>
        </div>

        {/* Divider */}
        <div className="editorial-divider mb-12 md:mb-16" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/${params.lang}/exotic-fish/${cat.slug}/`}
              className={`group relative block bg-surface border border-mist rounded-md p-6 pb-8 shadow-xs transition-all duration-[250ms] ease-out hover:shadow-md hover:-translate-y-[3px] animate-fade-up overflow-hidden ${
                i === 0 ? 'sm:col-span-2 sm:flex sm:items-end sm:gap-8' : ''
              } ${i < 8 ? `stagger-${i + 1}` : ''}`}
            >
              {/* Featured card hero image */}
              {i === 0 && (
                <div className="hidden sm:block relative w-1/2 aspect-[4/3] rounded-md overflow-hidden shrink-0 mb-0">
                  <Image
                    src="/images/brand/hero/hero-platinum-arowana.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className={i === 0 ? 'flex-1' : ''}>
                {/* Category name */}
                <h3 className="font-heading text-h2 text-ink group-hover:text-current transition-colors duration-200 tracking-tight">
                  {cat.name}
                </h3>

                {/* Lagoon accent line */}
                <div className="w-6 h-px bg-lagoon/40 mt-3 mb-4 group-hover:w-10 transition-all duration-[250ms]" />

                {/* Short description */}
                <p className="font-body text-body-sm text-deep-text leading-loose mb-6 line-clamp-3">
                  {cat.description.slice(0, 120)}&hellip;
                </p>

                {/* Species count + arrow */}
                <div className="flex items-center justify-between mt-auto">
                  <p className="font-mono text-sku text-drift tracking-wider">
                    {(dict.common?.speciesCount ?? '{count} species').replace('{count}', String(cat.productCount))}
                  </p>
                  <span className="font-body text-body-sm text-ghost group-hover:text-lagoon transition-colors duration-200 group-hover:translate-x-1 transform inline-block" aria-hidden="true">
                    &rarr;
                  </span>
                </div>
              </div>

              {/* Fish silhouette */}
              {categoryImages[cat.slug] && (
                <Image
                  src={categoryImages[cat.slug]}
                  alt=""
                  width={128}
                  height={128}
                  className={`absolute bottom-4 right-4 w-auto opacity-20 group-hover:opacity-40 transition-all duration-[600ms] ${
                    i === 0 ? 'h-20' : 'h-16'
                  }`}
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* -- Bottom Editorial Strip -- */}
      <section className="bg-reef border-t border-mist">
        <div className="page-container py-16 md:py-24">
          <div className="max-w-readable mx-auto text-center">
            <p className="section-label mb-6">{dict.category?.whyTheFishCollection ?? 'Why The Fish Collection'}</p>
            <h2 className="font-heading text-h1 md:text-h1 text-ink tracking-tight mb-6">
              {dict.category?.expertCareHeading ?? 'Expert Care, Confident Delivery'}
            </h2>
            <p className="font-body text-base text-deep-text leading-loose mt-10">
              {dict.category?.expertCareText ?? "Every fish in our collection is individually assessed by certified aquarists, quarantined for a minimum of 14 days, and shipped with our industry-leading live arrival guarantee. We don't sell fish we wouldn't keep ourselves."}
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <Link
                href={`/${params.lang}/exotic-fish/arowana/`}
                className="btn-primary"
              >
                {dict.category?.viewArowana ?? 'View Arowana'}
              </Link>
              <Link
                href={`/${params.lang}/care-guides/`}
                className="btn-secondary"
              >
                {dict.care?.careGuides ?? 'Care Guides'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
