import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',

      /* ── Primary Surfaces — "Bioluminescent Waters" ── */
      abyss: '#0B2D36',
      deep: '#134859',
      current: '#1E6B80',
      lagoon: '#29A8C4',
      shallows: '#7DCFE0',
      foam: '#E3F5F9',
      surface: '#FAFCFC',
      reef: '#EFF6F8',
      mist: '#DFF0F3',

      /* ── CTA & Warm Accent ── */
      ember: '#E8622A',
      koi: '#F4845A',
      sunrise: '#FEF0E8',
      flame: '#8C3512',

      /* ── Text ── */
      ink: '#1E2B2E',
      'deep-text': '#3A5A62',
      wade: '#5A7A82',
      drift: '#7A9AA2',
      ghost: '#B0C8CE',

      /* ── Status ── */
      'in-stock': '#1A7A5C',
      'in-stock-bg': '#D4F5EA',
      'low-stock': '#B5451B',
      'low-stock-bg': '#FDEEE9',
      'out-stock': '#595954',
      'out-stock-bg': '#EBEBEB',
    },
    fontFamily: {
      heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      body: ['var(--font-body)', 'Georgia', 'serif'],
      mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      scientific: ['var(--font-scientific)', 'Georgia', 'serif'],
      'cjk-jp': ['var(--font-noto-jp)', 'var(--font-heading)', 'system-ui', 'sans-serif'],
      'cjk-kr': ['var(--font-noto-kr)', 'var(--font-heading)', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      /* Display — hero sections only */
      'display-2xl': ['5.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      'display-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],

      /* Headings */
      h1: ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      h2: ['1.75rem', { lineHeight: '1.2' }],
      h3: ['1.375rem', { lineHeight: '1.2' }],
      h4: ['1.125rem', { lineHeight: '1.2' }],

      /* Body */
      'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      base: ['1rem', { lineHeight: '1.7' }],
      'body-sm': ['0.875rem', { lineHeight: '1.7' }],
      label: ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.06em' }],
      micro: ['0.6875rem', { lineHeight: '1.3' }],

      /* Mono / Data */
      price: ['1.125rem', { lineHeight: '1.5' }],
      param: ['0.875rem', { lineHeight: '1.5' }],
      sku: ['0.75rem', { lineHeight: '1.5' }],
    },
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.2',
      normal: '1.3',
      relaxed: '1.5',
      loose: '1.7',
    },
    letterSpacing: {
      tighter: '-0.03em',
      tight: '-0.02em',
      snug: '-0.01em',
      normal: '0em',
      wide: '0.06em',
      wider: '0.08em',
      widest: '0.10em',
    },
    borderRadius: {
      none: '0px',
      xs: '4px',
      sm: '8px',
      DEFAULT: '12px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      pill: '9999px',
    },
    boxShadow: {
      xs: '0 1px 3px rgba(11, 45, 54, 0.06)',
      sm: '0 2px 6px rgba(11, 45, 54, 0.08)',
      md: '0 4px 16px rgba(11, 45, 54, 0.10)',
      lg: '0 8px 32px rgba(11, 45, 54, 0.12)',
      xl: '0 16px 48px rgba(11, 45, 54, 0.14)',
      none: 'none',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      16: '64px',
      20: '80px',
      24: '96px',
      32: '128px',
      40: '160px',
      48: '192px',
    },
    extend: {
      maxWidth: {
        content: '1440px',
        readable: '720px',
        narrow: '560px',
      },
    },
  },
  plugins: [],
};

export default config;
