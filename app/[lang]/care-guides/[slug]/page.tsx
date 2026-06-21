import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata, careTitle, careGuideCategoryTitle } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { buildArticleSchema, buildFAQ, buildHowToSchema } from '@/lib/seo/jsonLd';
import { ArticleLayout } from '@/components/article/ArticleLayout';
import { ProductCard } from '@/components/product/ProductCard';
import { RelatedArticles } from '@/components/eeat/RelatedArticles';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { getCareGuideBySlug, careGuides } from '@/lib/data/care-guides';
import { careGuideCategories } from '@/lib/data/care-guide-categories';
import { getAuthorBySlug } from '@/lib/data/authors';
import { getProductsByCategory } from '@/lib/data/products';
import { speciesGuides } from '@/lib/data/species-guides';
import { blogPosts } from '@/lib/data/blog-posts';
import { calculateWordCount, calculateReadingTime } from '@/lib/seo/readingTime';

// Generate static params for both individual guides and category hubs
export function generateStaticParams() {
  const guideSlugs = careGuides.map((g) => ({ slug: g.slug }));
  const categorySlugs = careGuideCategories.map((c) => ({ slug: c.slug }));
  return [...guideSlugs, ...categorySlugs];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  // Check if slug matches a category
  const category = careGuideCategories.find((c) => c.slug === params.slug);
  if (category) {
    const dict = await getDictionary(params.lang as Lang);
    return buildMetadata({
      title: category.metaTitle,
      description: category.metaDescription,
      path: `/care-guides/${params.slug}/`,
      lang: params.lang,
    });
  }

  // Otherwise treat as individual guide
  const guide = getCareGuideBySlug(params.slug);
  if (!guide) return {};
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: careTitle(guide.title, guide.category ?? '', dict.seo),
    description: guide.metaDescription,
    path: `/care-guides/${params.slug}/`,
    lang: params.lang,
    ogType: 'article',
  });
}

export default async function CareGuideOrCategoryPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const dict = await getDictionary(params.lang as Lang);

  // Check if slug matches a category — render category hub
  const category = careGuideCategories.find((c) => c.slug === params.slug);
  if (category) {
    const matchingGuides = careGuides.filter((g) => g.topicCategory === category.slug);

    return (
      <>
        {/* Breadcrumb */}
        <div className="page-container pt-6 pb-2">
          <Breadcrumb
            lang={params.lang}
            items={[
              { name: dict.common?.home ?? 'Home', href: '/' },
              { name: dict.care?.careGuides ?? 'Care Guides', href: '/care-guides/' },
              { name: category.name, href: `/care-guides/${category.slug}/` },
            ]}
          />
        </div>

        {/* Page Header */}
        <header className="page-container pt-8 pb-12 md:pt-16 md:pb-20 animate-fade-up">
          <p className="section-label mb-4 stagger-1 animate-fade-in">{dict.care?.careGuides ?? 'Care Guides'}</p>
          <h1 className="font-heading font-bold text-h1 md:text-display-lg text-abyss tracking-tight mb-5">
            {category.name}
          </h1>
          <p className="font-body text-lg text-deep-text leading-relaxed max-w-readable mb-8">
            {category.description}
          </p>
        </header>

        {/* Guide Count */}
        <div className="page-container mb-8">
          <div className="flex items-center justify-between border-b border-mist pb-4">
            <p className="text-sku text-drift tracking-wide">
              {(dict.common?.guidesPublished ?? '{count} guides published')
                .replace('{count}', String(matchingGuides.length))
                .replace(/\{count, plural, one \{([^}]+)\} other \{([^}]+)\}\}/g, (_: string, one: string, other: string) => matchingGuides.length === 1 ? one : other)}
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="page-container pb-20 md:pb-32">
          {matchingGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {matchingGuides.map((guide, i) => (
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
                    <h2 className="font-heading font-bold text-h2 text-abyss group-hover:text-current transition-colors duration-200 mb-3 leading-snug">
                      {guide.title}
                    </h2>

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
          ) : (
            <p className="font-body text-base text-drift">
              {dict.care?.noGuidesYet ?? 'No guides in this category yet. Check back soon.'}
            </p>
          )}
        </div>
      </>
    );
  }

  // Otherwise render individual guide
  const guide = getCareGuideBySlug(params.slug);
  if (!guide) notFound();

  const author = getAuthorBySlug(guide.authorSlug);
  if (!author) notFound();

  const wordCount = calculateWordCount(guide.content);
  const readingTime = calculateReadingTime(guide.content);

  const schemas: Record<string, unknown>[] = [
    buildArticleSchema(guide, author, params.lang, wordCount),
    buildFAQ(guide.faqs),
  ];
  const howTo = buildHowToSchema(guide, params.lang);
  if (howTo) schemas.push(howTo);

  // Shop this species section
  const categoryProducts = guide.category
    ? getProductsByCategory(guide.category).slice(0, 3)
    : [];

  const shopSection = categoryProducts.length > 0 ? {
    label: dict.care?.availableFish ?? 'Available Fish',
    title: dict.care?.shopThisSpecies ?? 'Shop This Species',
    description: dict.care?.availableNow ?? 'Healthy specimens available now, with live arrival guaranteed.',
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product, i) => (
            <div key={product.slug} className={`animate-fade-up stagger-${i + 1}`}>
              <ProductCard product={product} lang={params.lang} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={`/${params.lang}/exotic-fish/${guide.category}/`}
            className="btn-ghost"
          >
            {(dict.care?.viewAllCategory ?? 'View All {category}').replace('{category}', guide.category!.charAt(0).toUpperCase() + guide.category!.slice(1))} &rarr;
          </Link>
        </div>
      </>
    ),
  } : undefined;

  // Related species guides
  const relatedSpeciesGuides = guide.category
    ? speciesGuides
        .filter((sg) => sg.category === guide.category)
        .slice(0, 3)
        .map((sg) => ({
          title: sg.title.split(':')[0],
          href: `/${params.lang}/species/${sg.slug}/`,
          description: sg.summary,
          type: dict.species?.speciesGuideLabel ?? 'Species Guide',
        }))
    : [];

  // Related blog posts
  const relatedBlogArticles = guide.relatedSlugs
    .map((slug) => {
      const blogPost = blogPosts.find((p) => p.slug === slug);
      if (!blogPost) return null;
      return {
        title: blogPost.title,
        href: `/${params.lang}/blog/${blogPost.slug}/`,
        description: blogPost.summary,
        type: dict.blog?.journalLabel ?? 'Journal',
      };
    })
    .filter(Boolean) as { title: string; href: string; description: string; type: string }[];

  // Additional sections: related species guides + related blog posts
  const relatedLabels = {
    furtherReading: dict.eeat?.furtherReading,
    relatedArticles: dict.eeat?.relatedArticles,
    readMore: dict.eeat?.readMore,
  };

  const additionalSections = (
    <>
      {relatedSpeciesGuides.length > 0 && (
        <div className="mt-16">
          <RelatedArticles articles={relatedSpeciesGuides} labels={relatedLabels} />
        </div>
      )}
      {relatedBlogArticles.length > 0 && (
        <div className="mt-16">
          <RelatedArticles articles={relatedBlogArticles} labels={relatedLabels} />
        </div>
      )}
    </>
  );

  return (
    <ArticleLayout
      article={guide}
      author={author}
      lang={params.lang}
      dict={dict}
      typeLabel={dict.care?.careGuideLabel ?? 'Care Guide'}
      basePath="care-guides"
      breadcrumbParent={{ name: dict.care?.careGuides ?? 'Care Guides', href: '/care-guides/' }}
      relatedArticles={[]}
      shopSection={shopSection}
      additionalSections={additionalSections}
      schemas={schemas}
      readingTime={readingTime}
      wordCount={wordCount}
    />
  );
}
