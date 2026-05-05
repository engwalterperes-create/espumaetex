import type { Config } from 'tailwindcss';

/**
 * Direção B — Editorial Warm
 * Inspiração: Hem · HAY · magazines de design
 * Off-white quente, serif elegante, foco no material, generosidade espacial.
 */
export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Direção B — Editorial Warm
        bg: '#F4EFE6',
        surface: '#FBF8F2',
        card: '#FFFFFF',
        ink: {
          DEFAULT: '#1F1B16',
          soft: '#5C5247',
          muted: '#8C8275',
        },
        border: {
          DEFAULT: '#E0D8C8',
          strong: '#C9BFAB',
        },
        accent: {
          DEFAULT: '#B85B2C', // terracota
          soft: '#E8DCC8',
        },
        good: '#16A34A',
        warn: '#EAB308',
        bad: '#DC2626',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SF Mono', 'monospace'],
      },
      letterSpacing: {
        tight: '-0.01em',
        tighter: '-0.025em',
        tightest: '-0.03em',
        wider: '0.04em',
        widest: '0.18em',
      },
      maxWidth: {
        page: '1280px',
        mobile: '430px',
      },
      borderRadius: {
        editorial: '4px',
      },
    },
  },
  plugins: [],
} satisfies Config;
