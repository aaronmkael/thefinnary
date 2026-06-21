import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') ?? 'The Fish Collection';
  const subtitle = searchParams.get('subtitle') ?? 'The Auction House of Rare Aquatic Life';
  const type = searchParams.get('type') ?? 'default';

  // Color tokens
  const midnight = '#0D1B2A';
  const gilt = '#C8A45A';
  const giltPale = '#F5EDD8';
  const pearl = '#FAFAF5';
  const smoke = '#6B6B65';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: midnight,
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle radial gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse 80% 50% at 50% 30%, rgba(200,164,90,0.06), transparent 70%)`,
          }}
        />

        {/* Top ornament line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ width: '48px', height: '1px', background: `${gilt}50` }} />
          <div style={{ color: `${gilt}60`, fontSize: '18px' }}>&#9670;</div>
          <div style={{ width: '48px', height: '1px', background: `${gilt}50` }} />
        </div>

        {/* Type badge */}
        {type !== 'default' && (
          <div
            style={{
              fontSize: '13px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: `${gilt}99`,
              marginBottom: '16px',
            }}
          >
            {type}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 40 ? '42px' : '52px',
            fontWeight: 400,
            color: pearl,
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            padding: '0 40px',
          }}
        >
          {title}
        </div>

        {/* Gilt line */}
        <div
          style={{
            width: '48px',
            height: '1px',
            background: gilt,
            marginTop: '28px',
            marginBottom: '20px',
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: `${pearl}70`,
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '14px', letterSpacing: '0.12em', color: `${pearl}40` }}>
            THE FISH COLLECTION
          </div>
          <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: `${gilt}40` }} />
          <div style={{ fontSize: '12px', color: `${pearl}25`, letterSpacing: '0.08em' }}>
            thefishcollection.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
