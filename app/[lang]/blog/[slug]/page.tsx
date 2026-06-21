import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata, blogTitle } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { buildArticleSchema, buildFAQ } from '@/lib/seo/jsonLd';
import { ArticleLayout } from '@/components/article/ArticleLayout';
import { ProductCard } from '@/components/product/ProductCard';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { getBlogPostBySlug, blogPosts } from '@/lib/data/blog-posts';
import { blogTagHubs } from '@/lib/data/blog-tag-hubs';
import { getAuthorBySlug } from '@/lib/data/authors';
import { products } from '@/lib/data/products';
import { calculateWordCount, calculateReadingTime, formatDateShort } from '@/lib/seo/readingTime';

// Generate static params for both individual posts and tag hubs
export function generateStaticParams() {
  const postSlugs = blogPosts.map((p) => ({ slug: p.slug }));
  const tagHubSlugs = blogTagHubs.map((h) => ({ slug: h.slug }));
  return [...postSlugs, ...tagHubSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  // Check if slug matches a tag hub
  const tagHub = blogTagHubs.find((h) => h.slug === params.slug);
  if (tagHub) {
    const dict = await getDictionary(params.lang as Lang);
    return buildMetadata({
      title: tagHub.metaTitle,
      description: tagHub.metaDescription,
      path: `/blog/${params.slug}/`,
      lang: params.lang,
    });
  }

  // Otherwise treat as individual post
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: blogTitle(post.title, dict.seo),
    description: post.metaDescription,
    path: `/blog/${params.slug}/`,
    lang: params.lang,
    ogType: 'article',
  });
}

export default async function BlogPostOrTagHubPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const dict = await getDictionary(params.lang as Lang);

  // Check if slug matches a tag hub — render tag hub page
  const tagHub = blogTagHubs.find((h) => h.slug === params.slug);
  if (tagHub) {
    const matchingPosts = blogPosts.filter(
      (p) => p.tags && p.tags.includes(tagHub.tag),
    );

    return (
      <>
        {/* Breadcrumb */}
        <div className="page-container pt-6 pb-2">
          <Breadcrumb
            lang={params.lang}
            items={[
              { name: dict.common?.home ?? 'Home', href: '/' },
              { name: dict.blog?.theJournal ?? 'Journal', href: '/blog/' },
              { name: tagHub.name, href: `/blog/${tagHub.slug}/` },
            ]}
          />
        </div>

        {/* Page Header */}
        <header className="page-container pt-8 pb-12 md:pt-16 md:pb-20 animate-fade-up">
          <p className="section-label mb-4 stagger-1 animate-fade-in">{dict.blog?.theJournal ?? 'Journal'}</p>
          <h1 className="font-heading font-bold text-h1 md:text-display-lg text-abyss tracking-tight mb-5">
            {tagHub.name}
          </h1>
          <p className="font-body text-lg text-deep-text leading-relaxed max-w-readable mb-8">
            {tagHub.description}
          </p>
        </header>

        {/* Article Count */}
        <div className="page-container mb-8">
          <div className="flex items-center justify-between border-b border-mist pb-4">
            <p className="text-sku text-drift tracking-wide">
              {(dict.common?.articlesPublished ?? '{count} articles published')
                .replace('{count}', String(matchingPosts.length))
                .replace(/\{count, plural, one \{([^}]+)\} other \{([^}]+)\}\}/g, (_: string, one: string, other: string) => matchingPosts.length === 1 ? one : other)}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="page-container pb-20 md:pb-32">
          {matchingPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {matchingPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/${params.lang}/blog/${post.slug}/`}
                  className={`group border border-mist rounded-md bg-surface transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] animate-fade-up stagger-${Math.min(i + 1, 8)}`}
                >
                  <div className="p-6 md:p-8">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade">
                        {dict.blog?.journalLabel ?? 'Journal'}
                      </p>
                      <time className="text-sku text-ghost" dateTime={post.publishedAt}>
                        {formatDateShort(post.publishedAt, params.lang)}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading font-bold text-h2 text-abyss group-hover:text-current transition-colors duration-200 mb-3 leading-snug">
                      {post.title}
                    </h2>

                    {/* Summary */}
                    <p className="font-body text-sm text-deep-text leading-relaxed line-clamp-3 mb-5">
                      {post.summary}
                    </p>

                    {/* Bottom accent */}
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-px bg-lagoon transition-all duration-300 group-hover:w-10" />
                      <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-drift group-hover:text-current transition-colors duration-200">
                        {dict.common?.readArticle ?? 'Read Article'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="font-body text-base text-drift">
              {dict.blog?.noArticlesYet ?? 'No articles in this category yet. Check back soon.'}
            </p>
          )}
        </div>
      </>
    );
  }

  // Otherwise render individual blog post
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const author = getAuthorBySlug(post.authorSlug);
  if (!author) notFound();

  const wordCount = calculateWordCount(post.content);
  const readingTime = calculateReadingTime(post.content);

  const schemas: Record<string, unknown>[] = [
    buildArticleSchema(post, author, params.lang, wordCount),
  ];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push(buildFAQ(post.faqs));
  }

  const relatedArticles = post.relatedSlugs
    .map((slug) => {
      const related = blogPosts.find((p) => p.slug === slug);
      if (!related) return null;
      return {
        title: related.title,
        href: `/${params.lang}/blog/${related.slug}/`,
        description: related.summary,
        type: dict.blog?.journalLabel ?? 'Journal',
      };
    })
    .filter(Boolean) as { title: string; href: string; description: string; type: string }[];

  // Featured products shop section
  const featuredProducts = products
    .filter((p) => p.inStock)
    .sort((a, b) => b.priceUSD - a.priceUSD)
    .slice(0, 4);

  const shopSection = featuredProducts.length > 0 ? {
    label: dict.blog?.availableFish ?? 'Available Fish',
    title: dict.blog?.popularRightNow ?? 'Popular Right Now',
    description: dict.blog?.popularDesc ?? 'Top picks from our current stock, each with live arrival guaranteed.',
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, i) => (
            <div key={product.slug} className={`animate-fade-up stagger-${i + 1}`}>
              <ProductCard product={product} lang={params.lang} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={`/${params.lang}/exotic-fish/`} className="btn-ghost">
            {dict.blog?.browseAllFish ?? 'Browse All Fish'} &rarr;
          </Link>
        </div>
      </>
    ),
  } : undefined;

  return (
    <ArticleLayout
      article={post}
      author={author}
      lang={params.lang}
      dict={dict}
      typeLabel={dict.blog?.journalLabel ?? 'Journal'}
      basePath="blog"
      breadcrumbParent={{ name: dict.blog?.theJournal ?? 'Journal', href: '/blog/' }}
      relatedArticles={relatedArticles}
      shopSection={shopSection}
      schemas={schemas}
      readingTime={readingTime}
      wordCount={wordCount}
    />
  );
}
