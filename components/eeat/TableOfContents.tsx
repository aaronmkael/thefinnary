'use client';

import { useEffect, useState } from 'react';
import type { Heading } from '@/types/article';

interface TableOfContentsProps {
  headings: Heading[];
  label?: string;
}

export function TableOfContents({ headings, label = 'Contents' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav aria-label="Table of Contents">
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between lg:hidden bg-reef border border-mist rounded-md px-5 py-3.5 mb-4 transition-colors hover:bg-foam"
      >
        <span className="section-label">{label}</span>
        <span className="font-mono text-param text-drift transition-transform duration-200">
          {isOpen ? '\u2212' : '+'}
        </span>
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:block lg:sticky lg:top-24`}>
        {/* Desktop label */}
        <div className="hidden lg:block mb-4">
          <p className="font-heading text-[11px] font-bold tracking-widest uppercase text-wade">{label}</p>
        </div>

        <ul className="space-y-0.5">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? 'pl-4' : ''}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`
                  block py-1.5 font-heading text-body-sm transition-all duration-200
                  border-l-2 pl-4
                  ${activeId === heading.id
                    ? 'border-lagoon text-current font-medium'
                    : 'border-transparent text-wade hover:text-ink hover:border-mist'
                  }
                  ${heading.level === 3 ? 'text-[11px] pl-5' : ''}
                `}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
