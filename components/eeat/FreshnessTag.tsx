interface FreshnessTagProps {
  updatedAt: string;
  authorName: string;
  authorSlug: string;
  lang: string;
  labels?: {
    expertVerified?: string;
    lastVerified?: string;
    factCheckedBy?: string;
  };
}

function formatVerifiedDate(dateStr: string, lang: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang, { month: 'long', year: 'numeric' });
}

export function FreshnessTag({
  updatedAt,
  authorName,
  authorSlug,
  lang,
  labels,
}: FreshnessTagProps) {
  const expertVerified = labels?.expertVerified ?? 'Expert-verified';
  const lastVerified = labels?.lastVerified ?? 'Last verified {date}';
  const factCheckedBy = labels?.factCheckedBy ?? 'Fact-checked by {author}';

  return (
    <div className="bg-foam border border-mist rounded-sm px-4 py-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sku">
      <span className="inline-flex items-center gap-1.5 font-heading font-bold text-lagoon">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M7 1 L8.5 4.5 L12.5 5 L9.5 7.5 L10.5 11.5 L7 9.5 L3.5 11.5 L4.5 7.5 L1.5 5 L5.5 4.5 Z" />
        </svg>
        {expertVerified}
      </span>
      <span className="text-drift font-mono">
        <time dateTime={updatedAt}>
          {lastVerified.replace('{date}', formatVerifiedDate(updatedAt, lang))}
        </time>
      </span>
      <span className="text-drift font-mono">
        {factCheckedBy.replace('{author}', '').trimEnd()}{' '}
        <a
          href={`/${lang}/authors/${authorSlug}/`}
          className="text-abyss hover:text-current transition-colors duration-200"
        >
          {authorName}
        </a>
      </span>
    </div>
  );
}
