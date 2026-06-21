import Link from 'next/link';

interface AnnouncementBarProps {
  lang: string;
  dict: Record<string, string>;
}

export function AnnouncementBar({ lang, dict }: AnnouncementBarProps) {
  return (
    <div className="bg-deep border-b border-[#1E4A58]">
      <div className="max-w-content mx-auto px-5 md:px-10 xl:px-20 h-[36px] flex items-center justify-center gap-4 md:gap-8 overflow-hidden">
        {[
          { text: dict.freeShipping, href: `/${lang}/shipping/` },
          { text: dict.liveArrival, href: `/${lang}/returns/` },
          { text: dict.cites, href: `/${lang}/about/` },
        ].map((item, i) => (
          <span key={item.text} className="flex items-center gap-4 md:gap-8">
            {i > 0 && (
              <span className="hidden sm:block w-[3px] h-[3px] rounded-pill bg-lagoon/40" aria-hidden="true" />
            )}
            <Link
              href={item.href}
              className="font-heading text-[11px] font-semibold text-white/50 hover:text-white/80 transition-colors whitespace-nowrap"
            >
              {item.text}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
