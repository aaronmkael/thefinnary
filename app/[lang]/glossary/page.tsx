import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, glossaryTitle } from '@/lib/seo/generateMetadata';
import { buildDefinedTermSetSchema } from '@/lib/seo/jsonLd';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { glossaryTerms } from '@/lib/data/glossary';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang as Lang);
  return buildMetadata({
    title: glossaryTitle(dict.seo),
    description:
      dict.seo?.glossaryDescription ??
      'Comprehensive aquarium glossary — 90+ fishkeeping terms explained in plain language. From acclimation to water chemistry, understand every concept in exotic fish care.',
    path: '/glossary/',
    lang: params.lang,
  });
}

export default async function GlossaryPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Lang);

  // Group terms alphabetically
  const grouped: Record<string, typeof glossaryTerms> = {};
  for (const term of glossaryTerms) {
    const letter = term.term[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(term);
  }
  const letters = Object.keys(grouped).sort();

  // Build a slug lookup for related term linking
  const slugToTerm = new Map(glossaryTerms.map((t) => [t.slug, t]));

  // JSON-LD
  const definedTermSetSchema = buildDefinedTermSetSchema(
    glossaryTerms.map((t) => ({ term: t.term, definition: t.definition })),
  );

  return (
    <>
      <JsonLd data={definedTermSetSchema} />

      {/* Breadcrumb */}
      <div className="page-container pt-6 pb-2">
        <Breadcrumb
          lang={params.lang}
          items={[
            { name: dict.common?.home ?? 'Home', href: '/' },
            { name: dict.glossary?.glossary ?? 'Glossary', href: '/glossary/' },
          ]}
        />
      </div>

      {/* Page Header */}
      <header className="page-container pt-8 pb-12 md:pt-16 md:pb-20 animate-fade-up">
        <p className="section-label mb-4 stagger-1 animate-fade-in">{dict.glossary?.reference ?? 'Reference'}</p>
        <h1 className="font-heading font-bold text-h1 md:text-display-lg text-abyss tracking-tight mb-5">
          {dict.glossary?.glossaryHeading ?? 'Aquarium Glossary'}
        </h1>
        <p className="font-body text-lg text-deep-text leading-relaxed max-w-readable mb-8">
          {dict.glossary?.glossaryIntro ??
            'Every fishkeeping term you need to know — from acclimation to zero-edge overflow — explained in plain language by our team of certified aquarists.'}
        </p>
      </header>

      {/* Term Count */}
      <div className="page-container mb-8">
        <div className="flex items-center justify-between border-b border-mist pb-4">
          <p className="text-sku text-drift tracking-wide">
            {(dict.common?.termsCount ?? '{count} terms').replace('{count}', String(glossaryTerms.length))}
          </p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="page-container mb-12">
        <nav aria-label="Alphabetical navigation" className="flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="inline-flex items-center justify-center w-9 h-9 rounded border border-mist font-heading text-sm font-bold text-wade hover:bg-surface hover:text-abyss transition-colors duration-200"
            >
              {letter}
            </a>
          ))}
        </nav>
      </div>

      {/* Glossary Terms by Letter */}
      <div className="page-container pb-20 md:pb-32">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-24">
            <h2 className="font-heading font-bold text-h1 text-abyss mb-6 border-b border-mist pb-3">
              {letter}
            </h2>
            <div className="space-y-8">
              {grouped[letter].map((term) => (
                <div key={term.slug} id={term.slug} className="scroll-mt-24">
                  <h3 className="font-heading font-bold text-h2 text-abyss mb-2">
                    {term.term}
                  </h3>
                  <p className="font-body text-base text-deep-text leading-relaxed mb-3">
                    {term.definition}
                  </p>
                  {term.relatedTerms && term.relatedTerms.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-heading text-[11px] font-bold tracking-widest uppercase text-drift">
                        {dict.glossary?.relatedTerms ?? 'Related'}:
                      </span>
                      {term.relatedTerms.map((relSlug) => {
                        const related = slugToTerm.get(relSlug);
                        if (!related) return null;
                        return (
                          <a
                            key={relSlug}
                            href={`#${relSlug}`}
                            className="inline-block text-sm font-body text-wade hover:text-abyss border border-mist rounded px-2 py-0.5 transition-colors duration-200"
                          >
                            {related.term}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
