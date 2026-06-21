interface ReadingTimeProps {
  minutes: number;
  label?: string;
}

export function ReadingTime({ minutes, label = '{min} min read' }: ReadingTimeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-sku text-drift">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="7" cy="7" r="5.5" />
        <line x1="7" y1="4" x2="7" y2="7" />
        <line x1="7" y1="7" x2="9.5" y2="8.5" />
      </svg>
      <span>{label.replace('{min}', String(minutes))}</span>
    </span>
  );
}
