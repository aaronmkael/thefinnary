interface ArticleSummaryProps {
  summary: string;
  keyFacts?: { label: string; value: string }[];
  label?: string;
  readingTime?: number;
  readingTimeLabel?: string;
}

export function ArticleSummary({ summary, keyFacts, label = 'Key Facts', readingTime, readingTimeLabel = 'Reading Time' }: ArticleSummaryProps) {
  const allFacts = [
    ...(readingTime ? [{ label: readingTimeLabel, value: `${readingTime} min` }] : []),
    ...(keyFacts ?? []),
  ];
  return (
    <div className="bg-reef border border-mist rounded-md mb-8 overflow-hidden animate-fade-up">
      <div className="px-6 pt-5 pb-4 md:px-8 md:pt-6">
        <p className="section-label">{label}</p>
      </div>

      <div className="h-[0.5px] bg-mist" />

      <div className="px-6 py-5 md:px-8 md:py-6">
        <p className="font-body text-base text-deep-text leading-relaxed max-w-readable">
          {summary}
        </p>

        {allFacts.length > 0 && (
          <>
            <div className="my-5 h-[0.5px] bg-mist" />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {allFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 relative pl-4"
                >
                  <span
                    className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-pill bg-lagoon opacity-50"
                    aria-hidden="true"
                  />
                  <dt className="font-mono text-sku text-wade tracking-wide">
                    {fact.label}
                  </dt>
                  <dd className="font-body text-sm text-ink font-medium leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </div>
    </div>
  );
}
