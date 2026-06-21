interface PlaceholderImageProps {
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

/**
 * Placeholder for fish product images.
 * Dark abyss background with a subtle fish silhouette in lagoon.
 */
export function PlaceholderImage({
  width = 400,
  height = 500,
  alt = 'Fish placeholder',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`fish-image-container ${className}`}
      style={{ width, height, position: 'relative' }}
    >
      {/* Centered fish silhouette icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-120 -80 240 168"
        fill="none"
        stroke="var(--lagoon, #29A8C4)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          maxWidth: 160,
          opacity: 0.14,
        }}
      >
        {/* Body */}
        <path d="
          M -80,0
          C -60,-36 -20,-52 30,-44
          C 55,-38 72,-24 80,-4
          C 82,2 82,6 80,12
          C 72,32 55,44 30,50
          C -20,58 -60,40 -80,0 Z
        " />
        {/* Tail fin */}
        <path d="
          M -68,-6
          C -88,-32 -100,-50 -108,-58
          C -100,-36 -96,-14 -80,0
          C -96,18 -100,42 -108,64
          C -100,56 -88,36 -68,12
        " />
        {/* Dorsal fin */}
        <path d="
          M -10,-42
          C 0,-68 20,-76 38,-70
          C 28,-60 16,-50 10,-42
        " />
        {/* Pectoral fin */}
        <path d="
          M 20,8
          C 8,20 -4,32 -10,40
          C 0,34 14,24 24,14
        " />
        {/* Eye */}
        <circle cx="56" cy="2" r="4.5" fill="var(--lagoon, #29A8C4)" stroke="none" opacity="0.5" />
        <circle cx="57.5" cy="1" r="1.5" fill="var(--surface, #FAFCFC)" stroke="none" opacity="0.6" />
        {/* Gill line */}
        <path d="M 42,-14 C 36,-4 36,16 42,24" opacity="0.6" />
      </svg>
    </div>
  );
}
