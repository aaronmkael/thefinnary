import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata, speciesTitle } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { buildArticleSchema, buildFAQ } from '@/lib/seo/jsonLd';
import { ArticleLayout } from '@/components/article/ArticleLayout';
import { ProductCard } from '@/components/product/ProductCard';
import { getSpeciesGuideBySlug, speciesGuides } from '@/lib/data/species-guides';
import { getAuthorBySlug } from '@/lib/data/authors';
import { getProductsByCategory } from '@/lib/data/products';
import { calculateWordCount, calculateReadingTime } from '@/lib/seo/readingTime';

export function generateStaticParams() {
  return speciesGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const guide = getSpeciesGuideBySlug(params.slug);
  if (!guide) return {};
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: speciesTitle(guide.title, guide.scientificName ?? '', dict.seo),
    description: guide.metaDescription,
    path: `/species/${params.slug}/`,
    lang: params.lang,
    ogType: 'article',
  });
}

export default async function SpeciesGuidePage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const dict = await getDictionary(params.lang as Lang);
  const guide = getSpeciesGuideBySlug(params.slug);
  if (!guide) notFound();

  const author = getAuthorBySlug(guide.authorSlug);
  if (!author) notFound();

  const wordCount = calculateWordCount(guide.content);
  const readingTime = calculateReadingTime(guide.content);

  const schemas: Record<string, unknown>[] = [
    buildArticleSchema(guide, author, params.lang, wordCount),
    buildFAQ(guide.faqs),
  ];

  const relatedArticles = guide.relatedSlugs
    .map((slug) => {
      const related = speciesGuides.find((g) => g.slug === slug);
      if (!related) return null;
      return {
        title: related.title.split(':')[0],
        href: `/${params.lang}/species/${related.slug}/`,
        description: related.summary,
        type: dict.species?.speciesGuideLabel ?? 'Species Guide',
      };
    })
    .filter(Boolean) as { title: string; href: string; description: string; type: string }[];

  // Shop this species section
  const categoryProducts = guide.category
    ? getProductsByCategory(guide.category).slice(0, 3)
    : [];

  const shopSection = categoryProducts.length > 0 ? {
    label: dict.species?.availableFish ?? 'Available Fish',
    title: dict.species?.shopThisSpecies ?? 'Shop This Species',
    description: dict.species?.availableNow ?? 'Healthy specimens available now, with live arrival guaranteed.',
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
            {(dict.species?.viewAllCategory ?? 'View All {category}').replace('{category}', guide.category!.charAt(0).toUpperCase() + guide.category!.slice(1))} &rarr;
          </Link>
        </div>
      </>
    ),
  } : undefined;

  return (
    <ArticleLayout
      article={guide}
      author={author}
      lang={params.lang}
      dict={dict}
      typeLabel={dict.species?.speciesGuideLabel ?? 'Species Guide'}
      basePath="species"
      breadcrumbParent={{ name: dict.species?.speciesGuides ?? 'Species Guides', href: '/species/' }}
      relatedArticles={relatedArticles}
      shopSection={shopSection}
      schemas={schemas}
      readingTime={readingTime}
      wordCount={wordCount}
    />
  );
}
