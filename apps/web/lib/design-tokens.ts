/**
 * Tokens da Direção B (Editorial Warm) — espelham o Tailwind config.
 * Use quando precisar dos tokens em JS (gráficos, SVG inline, gradientes, etc.).
 */
export const tokens = {
  bg: '#F4EFE6',
  surface: '#FBF8F2',
  card: '#FFFFFF',
  ink: '#1F1B16',
  inkSoft: '#5C5247',
  inkMuted: '#8C8275',
  border: '#E0D8C8',
  borderStrong: '#C9BFAB',
  accent: '#B85B2C',
  accentSoft: '#E8DCC8',
  good: '#16A34A',
  warn: '#EAB308',
  bad: '#DC2626',
} as const;

export type Token = keyof typeof tokens;
