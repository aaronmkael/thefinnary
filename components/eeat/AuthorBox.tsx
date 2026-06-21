import Link from 'next/link';
import Image from 'next/image';
import type { Author } from '@/types/author';

interface AuthorBoxProps {
  author: Author;
  publishedAt: string;
  updatedAt: string;
  lang: string;
  labels?: {
    aboutTheAuthor?: string;
    yearsExperience?: string;
    published?: string;
    updated?: string;
  };
}

export function AuthorBox({ author, publishedAt, updatedAt, lang, labels = {} }: AuthorBoxProps) {
  const {
    aboutTheAuthor = 'About the Author',
    yearsExperience = '{years}+ Years Experience',
    published = 'Published',
    updated = 'Updated',
  } = labels;

  return (
    <aside className="bg-reef border border-mist rounded-md overflow-hidden animate-fade-up">
      <div className="px-6 pt-5 md:px-8 md:pt-6">
        <p className="section-label mb-4">{aboutTheAuthor}</p>
        <div className="h-[0.5px] bg-mist -mx-6 md:-mx-8" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 pt-5 md:pt-6">
        <div className="shrink-0 flex justify-center sm:justify-start">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-pill border-2 border-lagoon opacity-40" />
            <div className="absolute inset-[3px] rounded-pill border border-foam" />
            {author.image ? (
              <Image
                src={author.image}
                alt={author.name}
                width={96}
                height={96}
                className="rounded-pill object-cover w-full h-full p-1"
              />
            ) : (
              <div className="w-full h-full rounded-pill bg-reef flex items-center justify-center m-1">
                <span className="font-heading text-2xl text-lagoon">
                  {author.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <Link
            href={`/${lang}/authors/${author.slug}/`}
            className="font-heading text-h2 font-bold text-ink hover:text-current transition-colors duration-200 underline-offset-4 hover:underline"
          >
            {author.name}
          </Link>

          <p className="font-heading text-wade mt-1">
            {author.jobTitle}
          </p>

          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-mono text-sku text-lagoon bg-foam border border-mist px-3 py-1 rounded-pill">
              <span className="w-1.5 h-1.5 rounded-pill bg-lagoon inline-block" />
              {yearsExperience.replace('{years}', String(author.yearsExperience))}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {author.credentials.map((cred) => (
              <span
                key={cred}
                className="font-mono text-[11px] bg-foam text-current border border-mist px-2.5 py-1 rounded-pill"
              >
                {cred}
              </span>
            ))}
          </div>

          <p className="font-body text-sm text-deep-text leading-relaxed mt-4 max-w-readable">
            {author.shortBio}
          </p>

          <div className="mt-4 pt-4 border-t border-mist flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-4 font-mono text-param text-drift">
              <span className="flex items-center gap-1.5">
                <span className="text-ghost">{published}</span> {publishedAt}
              </span>
              <span className="text-mist" aria-hidden="true">|</span>
              <span className="flex items-center gap-1.5">
                <span className="text-ghost">{updated}</span> {updatedAt}
              </span>
            </div>

            {author.socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {author.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-current hover:text-ink transition-colors duration-200 border-b border-transparent hover:border-current pb-0.5"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
