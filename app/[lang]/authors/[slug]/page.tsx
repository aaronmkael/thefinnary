import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/generateMetadata';
import { getDictionary } from '@/lib/i18n/getDictionary';
import type { Lang } from '@/lib/seo/i18n';
import { buildPersonSchema, buildProfilePageSchema } from '@/lib/seo/jsonLd';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/seo/Breadcrumb';
import { authors, getAuthorBySlug } from '@/lib/data/authors';
import { speciesGuides } from '@/lib/data/species-guides';
import { blogPosts } from '@/lib/data/blog-posts';
import { careGuides } from '@/lib/data/care-guides';

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};
  const dict = await getDictionary(params.lang as Lang);
  const titlePattern = dict.seo?.authorTitlePattern ?? '{name} — {jobTitle} | The Fish Collection';
  const descPattern = dict.seo?.authorDescriptionPattern ?? "{bio} Read {name}'s expert species guides, care guides, and articles at The Fish Collection.";
  return buildMetadata({
    title: titlePattern.replace('{name}', author.name).replace('{jobTitle}', author.jobTitle),
    description: descPattern.replace('{bio}', author.shortBio).replace('{name}', author.name),
    path: `/authors/${params.slug}/`,
    lang: params.lang,
  });
}

export default async function AuthorPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const dict = await getDictionary(params.lang as Lang);
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const authorArticles = [
    ...speciesGuides.filter((g) => g.authorSlug === author.slug).map((g) => ({
      title: g.title.split(':')[0],
      href: `/${params.lang}/species/${g.slug}/`,
      type: dict.species?.speciesGuideLabel ?? 'Species Guide',
    })),
    ...blogPosts.filter((p) => p.authorSlug === author.slug).map((p) => ({
      title: p.title,
      href: `/${params.lang}/blog/${p.slug}/`,
      type: dict.blog?.journalLabel ?? 'Journal',
    })),
    ...careGuides.filter((g) => g.authorSlug === author.slug).map((g) => ({
      title: g.title,
      href: `/${params.lang}/care-guides/${g.slug}/`,
      type: dict.care?.careGuideLabel ?? 'Care Guide',
    })),
  ];

  return (
    <>
      <JsonLd data={[buildPersonSchema(author), buildProfilePageSchema(author)]} />

      {/* Hero band */}
      <div className="bg-reef border-b border-mist">
        <div className="page-container py-6">
          <Breadcrumb
            lang={params.lang}
            items={[
              { name: dict.common?.home ?? 'Home', href: '/' },
              { name: author.name, href: `/authors/${author.slug}/` },
            ]}
          />
        </div>
      </div>

      <div className="page-container py-12 md:py-16">
        {/* Author header */}
        <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-12 animate-fade-up">
          {/* Portrait */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Decorative teal corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-lagoon opacity-40 rounded-xs" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-lagoon opacity-40 rounded-xs" />
              <Image
                src={author.image}
                alt={author.name}
                width={220}
                height={220}
                className="rounded-md object-cover shadow-md"
              />
            </div>
          </div>

          {/* Author details */}
          <div>
            {/* Name */}
            <h1 className="font-heading text-display-md md:text-display-lg text-ink tracking-tight leading-none mb-2">
              {author.name}
            </h1>

            {/* Job title */}
            <p className="font-heading text-lg tracking-wide text-wade mt-5 mb-4">
              {author.jobTitle}
            </p>

            {/* Experience badge */}
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <span className="inline-flex items-center gap-2 font-mono text-sku text-[#1E4A58] bg-foam border border-foam px-4 py-1.5 rounded-pill">
                <span className="w-2 h-2 rounded-pill bg-lagoon inline-block" />
                {(dict.eeat?.yearsExperience ?? '{years}+ Years Experience').replace('{years}', String(author.yearsExperience))}
              </span>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-6">
              <h2 className="sr-only">{dict.eeat?.credentials ?? 'Credentials'}</h2>
              {author.credentials.map((cred) => (
                <span
                  key={cred}
                  className="font-mono text-xs text-deep-text bg-surface border border-mist px-3 py-1 rounded-pill"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* Thin separator */}
            <div className="h-[0.5px] bg-mist mb-6" />

            {/* Full bio */}
            <p className="font-body text-base text-deep-text leading-loose max-w-readable mb-8">
              {author.bio}
            </p>

            {/* Areas of Expertise */}
            <div className="mb-8">
              <h2 className="section-label mb-4">{dict.eeat?.areasOfExpertise ?? 'Areas of Expertise'}</h2>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="font-mono text-xs text-wade bg-reef border border-mist/50 px-3 py-1.5 rounded-pill transition-colors hover:bg-reef hover:text-deep-text"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            {author.socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                <span className="font-mono text-sku text-ghost">{dict.eeat?.connect ?? 'Connect'}</span>
                <span className="w-8 h-[0.5px] bg-mist" />
                {author.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-current hover:text-ink transition-colors duration-200 border-b border-transparent hover:border-lagoon pb-0.5"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Articles by this author */}
        {authorArticles.length > 0 && (
          <section className="mt-16 pt-12 animate-fade-up stagger-2">
            {/* Divider */}
            <div className="w-12 h-[2px] bg-lagoon/40 mx-auto mb-8" />

            <h2 className="font-heading text-h1 text-ink mb-2">
              {dict.eeat?.publishedWorks ?? 'Published Works'}
            </h2>
            <p className="font-body text-sm text-wade mb-8 mt-6">
              Species guides, care guides, and articles by {author.name}.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {authorArticles.map((article, i) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className={`
                    group relative block bg-surface border border-mist rounded-md
                    p-5 transition-all duration-300
                    hover:border-lagoon hover:shadow-md hover:-translate-y-0.5
                    animate-fade-up stagger-${Math.min(i + 3, 8)}
                  `}
                >
                  {/* Bottom-border reveal */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-lagoon scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <p className="font-heading text-[11px] tracking-widest text-[#1E4A58] mb-2 uppercase font-semibold">
                    {article.type}
                  </p>
                  <h3 className="font-heading text-lg text-ink group-hover:text-[#1E4A58] transition-colors duration-200 leading-snug">
                    {article.title}
                  </h3>

                  <span className="inline-block mt-3 font-mono text-sku text-drift group-hover:text-[#1E4A58] transition-colors duration-200">
                    {dict.common?.readMore ?? 'Read More'} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
