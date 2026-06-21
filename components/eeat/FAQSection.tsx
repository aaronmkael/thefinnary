import type { FAQ } from '@/types/product';

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  subtext?: string;
}

export function FAQSection({
  faqs,
  heading = 'Frequently Asked Questions',
  subtext,
}: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-20">
      <h2 className="font-heading font-bold text-h1 text-abyss tracking-tight mb-2">
        {heading}
      </h2>
      {subtext && (
        <p className="font-body text-sm text-wade mb-8">{subtext}</p>
      )}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group border border-mist rounded-md bg-surface transition-all duration-300 hover:border-lagoon/40 open:border-lagoon open:shadow-sm open:bg-foam"
          >
            <summary className="flex items-center justify-between px-6 py-5 font-heading font-bold text-lg text-abyss cursor-pointer select-none transition-colors group-open:text-current">
              <span className="pr-4">{faq.question}</span>
              <span className="shrink-0 w-5 h-5 flex items-center justify-center text-drift group-open:text-lagoon transition-transform duration-300 group-open:rotate-45">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="7" y1="2" x2="7" y2="12" />
                  <line x1="2" y1="7" x2="12" y2="7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <div className="w-8 h-px bg-lagoon mb-4" />
              <p className="font-body text-base text-deep-text leading-relaxed max-w-readable">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
