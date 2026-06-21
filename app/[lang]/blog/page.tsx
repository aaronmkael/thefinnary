import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { blogPosts } from '@/lib/data/blog-posts';
import { blogTagHubs } from '@/lib/data/blog-tag-hubs';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: dict.seo?.blogIndexTitle ?? 'The The Fish Collection Journal | Exotic Fish Insights | The Fish Collection',
    description: dict.seo?.blogIndexDescription ?? "Expert articles on exotic fish collecting, aquarium setup, and species care. Insights from The Fish Collection's certified aquarists with 15+ years experience.",
    path: '/blog/',
    lang: params.lang,
  });
}

export default async function BlogIndexPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);
  // Feature the first post, list the rest
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Breadcrumb */}
      <div className="page-container pt-6 pb-2">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: dict.blog?.theJournal ?? 'Journal', href: '/blog/' },
          ]}
        />
      </div>

      {/* Page Header */}
      <header className="page-container pt-8 pb-12 md:pt-16 md:pb-20 animate-fade-up">
        <p className="section-label mb-4 stagger-1 animate-fade-in">{dict.blog?.fromTheTeam ?? 'From the Team'}</p>
        <h1 className="font-heading font-bold text-h1 md:text-display-lg text-abyss tracking-tight mb-5">
          {dict.blog?.theJournal ?? 'The Journal'}
        </h1>
        <p className="font-body text-lg text-deep-text leading-relaxed max-w-readable mb-8">
          {dict.blog?.indexIntro ?? 'Practical advice on exotic fish keeping, aquarium setup, and species care. Written by our team of certified aquarists.'}
        </p>
      </header>

      {/* Article Count */}
      <div className="page-container mb-8">
        <div className="flex items-center justify-between border-b border-mist pb-4">
          <p className="text-sku text-drift tracking-wide">
            {(dict.common?.articlesPublished ?? '{count} articles published').replace('{count}', String(blogPosts.length)).replace(/{count, plural, one \{article\} other \{articles\}}/g, blogPosts.length === 1 ? 'article' : 'articles')}
          </p>
        </div>
      </div>

      {/* Tag Filter Chips */}
      <div className="page-container mb-10">
        <nav aria-label="Filter by topic" className="flex flex-wrap gap-2">
          <span
            className="inline-flex items-center px-4 py-2 rounded-full border border-abyss bg-abyss text-white font-heading text-[12px] font-bold tracking-wider uppercase"
          >
            {dict.common?.all ?? 'All'}
          </span>
          {blogTagHubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/${params.lang}/blog/${hub.slug}/`}
              className="inline-flex items-center px-4 py-2 rounded-full border border-mist bg-surface text-wade font-heading text-[12px] font-bold tracking-wider uppercase hover:border-abyss hover:text-abyss transition-colors duration-200"
            >
              {hub.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="page-container pb-20 md:pb-32">
        {/* Featured Article */}
        {featured && (
          <Link
            href={`/${params.lang}/blog/${featured.slug}/`}
            className="group block border border-mist rounded-md bg-surface transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] mb-12 animate-fade-up"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-5">
                <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-lagoon">
                  {dict.blog?.featured ?? 'Featured'}
                </p>
                <div className="flex-1 h-px bg-mist" />
                <time className="text-sku text-drift">{featured.publishedAt}</time>
              </div>
              <h2 className="font-heading font-bold text-h1 md:text-display-lg text-abyss group-hover:text-current transition-colors duration-200 mb-4 max-w-readable leading-snug">
                {featured.title}
              </h2>
              <p className="font-body text-base text-deep-text leading-relaxed max-w-readable mb-6 line-clamp-3">
                {featured.summary}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-lagoon transition-all duration-300 group-hover:w-12" />
                <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-drift group-hover:text-current transition-colors duration-200">
                  {dict.common?.readArticle ?? 'Read Article'}
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Remaining Articles Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {rest.map((post, i) => (
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
                    <time className="text-sku text-ghost">
                      {post.publishedAt}
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
        )}
      </div>
    </>
  );
}
