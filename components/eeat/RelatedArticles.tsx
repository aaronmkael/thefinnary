import Link from 'next/link';

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
  type: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  labels?: {
    furtherReading?: string;
    relatedArticles?: string;
    readMore?: string;
  };
}

export function RelatedArticles({ articles, labels }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-16 pt-10 animate-fade-up">
      {/* Section header */}
      <div className="mb-8 text-center">
        <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade">
          {labels?.furtherReading ?? 'Further Reading'}
        </span>
      </div>

      <h2 className="font-heading text-h2 font-bold text-ink mb-8 text-center">
        {labels?.relatedArticles ?? 'Related Articles'}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <Link
            key={article.href}
            href={article.href}
            className={`
              group relative block bg-surface border border-mist rounded-md
              p-6 transition-all duration-300 shadow-sm
              hover:shadow-md
              hover:-translate-y-[3px]
              animate-fade-up stagger-${Math.min(i + 1, 8)}
            `}
          >
            {/* Type label */}
            <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-lagoon mb-3">
              {article.type}
            </p>

            {/* Title */}
            <h3 className="font-heading text-h4 text-ink group-hover:text-current transition-colors duration-200 mb-3 leading-snug">
              {article.title}
            </h3>

            {/* Separator */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-1 rounded-pill bg-lagoon" aria-hidden="true" />
              <span className="flex-1 h-[0.5px] bg-mist" />
            </div>

            {/* Description */}
            <p className="font-body text-sm text-deep-text leading-relaxed line-clamp-3">
              {article.description}
            </p>

            {/* Read more hint */}
            <span className="inline-block mt-4 font-mono text-sku text-drift group-hover:text-current transition-colors duration-200">
              {labels?.readMore ?? 'Read more'} &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
