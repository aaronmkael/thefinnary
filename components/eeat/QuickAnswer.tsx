interface QuickAnswerProps {
  question: string;
  answer: string;
  label?: string;
  jumpToId?: string;
  jumpToLabel?: string;
}

export function QuickAnswer({ question, answer, label = 'Quick Answer', jumpToId, jumpToLabel = 'Jump to full answer' }: QuickAnswerProps) {
  return (
    <div className="relative bg-foam border-l-4 border-lagoon rounded-sm mb-8 overflow-hidden animate-fade-up">
      <div className="relative p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-lagoon">
            {label}
          </span>
          <span className="flex-1 h-[0.5px] bg-mist" />
        </div>

        <p className="font-heading text-h3 md:text-h2 font-bold text-ink leading-snug mb-3">
          {question}
        </p>

        <div className="w-10 h-[1px] bg-lagoon mb-4" />

        <p className="font-body text-base text-deep-text leading-relaxed max-w-readable">
          {answer}
        </p>

        {jumpToId && (
          <a
            href={`#${jumpToId}`}
            className="inline-block mt-4 font-mono text-sku text-lagoon hover:text-current transition-colors duration-200 lg:hidden"
          >
            {jumpToLabel} &darr;
          </a>
        )}
      </div>
    </div>
  );
}
