interface CareLevelIndicatorProps {
  level: 1 | 2 | 3 | 4 | 5;
  label: string;
  ariaTemplate?: string;
}

export function CareLevelIndicator({ level, label, ariaTemplate = 'Care level: {level} out of 5' }: CareLevelIndicatorProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex gap-[3px]" aria-label={ariaTemplate.replace('{level}', String(level))} role="img">
        {[1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`w-[7px] h-[7px] rounded-pill ${
              dot <= level
                ? level >= 4 ? 'bg-lagoon' : 'bg-ember'
                : 'bg-mist'
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-param text-ink">{label}</span>
    </div>
  );
}
