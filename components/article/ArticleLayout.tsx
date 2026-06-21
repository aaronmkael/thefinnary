import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { QuickAnswer } from '@/components/eeat/QuickAnswer';
import { ArticleSummary } from '@/components/eeat/ArticleSummary';
import { TableOfContents } from '@/components/eeat/TableOfContents';
import { AuthorBox } from '@/components/eeat/AuthorBox';
import { SourcesList } from '@/components/eeat/SourcesList';
import { RelatedArticles } from '@/components/eeat/RelatedArticles';
import { ReadingTime } from '@/components/eeat/ReadingTime';
import { FreshnessTag } from '@/components/eeat/FreshnessTag';
import { ShareBar } from '@/components/eeat/ShareBar';
import { FAQSection } from '@/components/eeat/FAQSection';
import { formatDate } from '@/lib/seo/readingTime';
import type { Article } from '@/types/article';
import type { Author } from '@/types/author';
import type { ReactNode } from 'react';

interface BreadcrumbParent {
  name: string;
  href: string;
}

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
  type: string;
}

interface ShopSection {
  label: string;
  title: string;
  description: string;
  content: ReactNode;
}

interface ArticleLayoutProps {
  article: Article;
  author: Author;
  lang: string;
  dict: Record<string, any>;
  typeLabel: string;
  basePath: string;
  breadcrumbParent: BreadcrumbParent;
  relatedArticles: RelatedArticle[];
  shopSection?: ShopSection;
  additionalSections?: ReactNode;
  schemas: Record<string, unknown>[];
  readingTime: number;
  wordCount: number;
}

export function ArticleLayout({
  article,
  author,
  lang,
  dict,
  typeLabel,
  basePath,
  breadcrumbParent,
  relatedArticles,
  shopSection,
  additionalSections,
  schemas,
  readingTime,
}: ArticleLayoutProps) {
  const firstHeadingId = article.headings[0]?.id;
  const heroExists = article.heroImage && fs.existsSync(path.join(process.cwd(), 'public', article.heroImage));

  return (
    <>
      <JsonLd data={schemas} />

      {/* Breadcrumb */}
      <div className="page-container pt-6 pb-2">
        <Breadcrumb
          lang={lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            breadcrumbParent,
            { name: article.title, href: `/${basePath}/${article.slug}/` },
          ]}
        />
      </div>

      {/* Hero Image */}
      {heroExists && (
        <div className="page-container pt-4 pb-2">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md bg-reef">
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt || article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="page-container pt-8 pb-10 md:pt-12 md:pb-16 animate-fade-up">
        <p className="section-label mb-4 stagger-1 animate-fade-in">{typeLabel}</p>
        <h1 className="font-heading font-bold text-h1 md:text-display-lg text-abyss tracking-tight mb-5 max-w-readable">
          {article.title}
        </h1>
        {article.scientificName && (
          <p className="font-scientific italic font-light text-h3 text-drift tracking-wide mb-6">
            {article.scientificName}
          </p>
        )}

        {/* Byline */}
        <div className="flex flex-wrap items-center gap-3 text-sku text-drift mb-4">
          <span>
            {dict.eeat?.by ?? 'By'}{' '}
            <Link
              href={`/${lang}/authors/${author.slug}/`}
              className="text-abyss hover:text-current transition-colors duration-200"
            >
              {author.name}
            </Link>
          </span>
          <span className="text-ghost">&middot;</span>
          <time dateTime={article.publishedAt}>
            {dict.eeat?.publishedOn ?? 'Published'} {formatDate(article.publishedAt, lang)}
          </time>
          <span className="text-ghost">&middot;</span>
          <time dateTime={article.updatedAt}>
            {dict.eeat?.lastUpdated ?? 'Updated'} {formatDate(article.updatedAt, lang)}
          </time>
          <span className="text-ghost">&middot;</span>
          <ReadingTime
            minutes={readingTime}
            label={dict.eeat?.readingTime ?? '{min} min read'}
          />
        </div>

        {/* Freshness Tag */}
        <div className="mt-4">
          <FreshnessTag
            updatedAt={article.updatedAt}
            authorName={author.name}
            authorSlug={author.slug}
            lang={lang}
            labels={{
              expertVerified: dict.eeat?.expertVerified,
              lastVerified: dict.eeat?.lastVerified,
              factCheckedBy: dict.eeat?.factCheckedBy,
            }}
          />
        </div>
      </header>

      {/* Two-column layout */}
      <div className="page-container pb-20 md:pb-32">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12 xl:gap-16">
          {/* Main content column */}
          <article>
            {/* Mobile ToC */}
            <div className="lg:hidden mb-10">
              <TableOfContents headings={article.headings} label={dict.eeat?.contents} />
            </div>

            {/* Quick Answer */}
            {article.quickAnswer && article.quickAnswerQuestion && (
              <div className="mb-10 animate-fade-up stagger-2">
                <QuickAnswer
                  question={article.quickAnswerQuestion}
                  answer={article.quickAnswer}
                  label={dict.eeat?.quickAnswer}
                  jumpToId={firstHeadingId}
                />
              </div>
            )}

            {/* Article Summary */}
            {article.summary && (
              <div className="mb-12 animate-fade-up stagger-3">
                <ArticleSummary
                  summary={article.summary}
                  keyFacts={article.keyFacts}
                  label={dict.eeat?.keyFacts}
                  readingTime={readingTime}
                  readingTimeLabel={dict.eeat?.readingTimeLabel ?? 'Reading Time'}
                />
              </div>
            )}

            {/* Article body */}
            <div
              className="
                prose-tfc font-body text-base text-deep-text leading-relaxed max-w-readable
                [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-h1 [&_h2]:text-abyss [&_h2]:tracking-tight
                [&_h2]:mt-16 [&_h2]:mb-5 [&_h2]:leading-snug
                [&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-h2 [&_h3]:text-abyss
                [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:leading-snug
                [&_h4]:font-heading [&_h4]:text-[11px] [&_h4]:font-bold [&_h4]:tracking-widest [&_h4]:text-wade [&_h4]:uppercase
                [&_h4]:mt-8 [&_h4]:mb-3
                [&_p]:mb-5 [&_p]:leading-relaxed
                [&_ul]:mb-5 [&_ul]:pl-6 [&_ul]:list-none
                [&_ul>li]:relative [&_ul>li]:pl-4 [&_ul>li]:mb-2
                [&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-0
                [&_ul>li]:before:top-[0.65em] [&_ul>li]:before:w-[6px] [&_ul>li]:before:h-[1px]
                [&_ul>li]:before:bg-lagoon
                [&_ol]:mb-5 [&_ol]:pl-6 [&_li]:mb-2
                [&_blockquote]:border-l-2 [&_blockquote]:border-lagoon [&_blockquote]:pl-6
                [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:font-heading
                [&_blockquote]:text-h3 [&_blockquote]:text-wade [&_blockquote]:leading-relaxed
                [&_em]:font-heading [&_em]:text-wade [&_em]:not-italic
                [&_strong]:font-semibold [&_strong]:text-abyss
                [&_a]:text-current [&_a]:underline [&_a]:underline-offset-2
                [&_a]:decoration-current/30 [&_a]:hover:decoration-current [&_a]:transition-colors
                [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse
                [&_th]:font-heading [&_th]:text-[11px] [&_th]:font-bold [&_th]:tracking-widest [&_th]:text-wade
                [&_th]:uppercase [&_th]:text-left [&_th]:pb-3 [&_th]:border-b [&_th]:border-mist
                [&_td]:py-3 [&_td]:border-b [&_td]:border-foam [&_td]:text-sm
                [&_hr]:my-12 [&_hr]:border-0 [&_hr]:h-px [&_hr]:bg-mist
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Bar */}
            <ShareBar
              title={article.title}
              labels={{
                shareThisArticle: dict.eeat?.shareThisArticle,
                copyLink: dict.eeat?.copyLink,
                copied: dict.eeat?.copied,
                shareOnTwitter: dict.eeat?.shareOnTwitter,
                shareOnFacebook: dict.eeat?.shareOnFacebook,
              }}
            />

            {/* FAQ Section */}
            <FAQSection
              faqs={article.faqs}
              heading={dict.product?.frequentlyAskedQuestions}
              subtext={dict.species?.faqIntro ?? dict.care?.faqIntro}
            />

            {/* Sources */}
            <div className="mt-16">
              <SourcesList
                sources={article.sources}
                heading={dict.eeat?.sourcesAndReferences}
                subtext={dict.eeat?.sourcesSubtext}
              />
            </div>

            {/* Author Box */}
            <div className="mt-16 pt-12 border-t border-mist">
              <AuthorBox
                author={author}
                publishedAt={article.publishedAt}
                updatedAt={article.updatedAt}
                lang={lang}
                labels={{
                  aboutTheAuthor: dict.eeat?.aboutTheAuthor,
                  yearsExperience: dict.eeat?.yearsExperience,
                  published: dict.eeat?.publishedOn,
                  updated: dict.eeat?.lastUpdated,
                }}
              />
            </div>

            {/* Shop Section */}
            {shopSection && (
              <section className="mt-16">
                <div className="mb-8">
                  <p className="section-label mb-3">{shopSection.label}</p>
                  <h2 className="font-heading font-bold text-h1 text-abyss tracking-tight">
                    {shopSection.title}
                  </h2>
                  <p className="font-body text-sm text-wade mt-2">
                    {shopSection.description}
                  </p>
                </div>
                {shopSection.content}
              </section>
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16">
                <RelatedArticles
                  articles={relatedArticles}
                  labels={{
                    furtherReading: dict.eeat?.furtherReading,
                    relatedArticles: dict.eeat?.relatedArticles,
                    readMore: dict.eeat?.readMore,
                  }}
                />
              </div>
            )}

            {/* Additional Sections (escape hatch for care guides) */}
            {additionalSections}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <TableOfContents headings={article.headings} label={dict.eeat?.contents} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
