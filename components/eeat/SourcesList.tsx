import type { Source } from '@/types/article';

interface SourcesListProps {
  sources: Source[];
  heading?: string;
  subtext?: string;
}

export function SourcesList({
  sources,
  heading = 'Sources & References',
  subtext = 'Cited works and further reading consulted for this article.',
}: SourcesListProps) {
  if (sources.length === 0) return null;

  return (
    <section className="mt-16 animate-fade-up">
      <h2 className="font-heading text-h2 font-bold text-ink mb-2">
        {heading}
      </h2>
      <p className="font-body text-sm text-wade mb-6">
        {subtext}
      </p>

      <ol className="space-y-3 list-none counter-reset-[source]">
        {sources.map((source, i) => (
          <li
            key={i}
            className="flex items-start gap-4 py-2.5 border-b border-mist last:border-b-0 group"
          >
            <span className="shrink-0 font-mono text-sku text-lagoon tabular-nums w-6 text-right pt-0.5">
              {i + 1}.
            </span>

            <div className="flex-1 min-w-0">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="nofollow noopener"
                  className="font-body text-sm text-current hover:text-ink transition-colors duration-200 underline decoration-current/30 underline-offset-2 hover:decoration-current"
                >
                  {source.title}
                </a>
              ) : (
                <span className="font-body text-sm text-ink">
                  {source.title}
                </span>
              )}
              {source.publisher && (
                <span className="font-mono text-sku text-drift ml-1">
                  &mdash; {source.publisher}
                </span>
              )}
            </div>

            {source.url && (
              <span className="shrink-0 font-mono text-[11px] text-ghost group-hover:text-drift transition-colors pt-1" aria-hidden="true">
                &nearr;
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
