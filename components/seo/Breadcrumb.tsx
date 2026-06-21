import Link from 'next/link';
import { buildBreadcrumb } from '@/lib/seo/jsonLd';
import { SITE_URL } from '@/lib/seo/i18n';
import { JsonLd } from './JsonLd';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lang: string;
}

export function Breadcrumb({ items, lang }: BreadcrumbProps) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: `${SITE_URL}/${lang}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={buildBreadcrumb(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 font-heading text-[12px] font-medium">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-ghost text-[12px] select-none">/</span>
              )}
              {i === items.length - 1 ? (
                <span className="text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={`/${lang}${item.href}`}
                  className="text-wade hover:text-ink transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
