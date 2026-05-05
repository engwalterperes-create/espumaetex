
// ===== components/icons.jsx =====
// Icons — minimal stroke-based SVG icons for Espumatex
const Icon = ({ d, size = 18, sw = 1.6, fill, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d={d} />
  </svg>
);

const IconSearch = (p) => <Icon {...p} d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm9 16-4.35-4.35" />;
const IconCart = (p) => <Icon {...p} d="M3 4h2l2.5 11h11l2-8h-13M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />;
const IconUser = (p) => <Icon {...p} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0" />;
const IconHeart = (p) => <Icon {...p} d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />;
const IconMenu = (p) => <Icon {...p} d="M4 6h16M4 12h16M4 18h16" />;
const IconClose = (p) => <Icon {...p} d="M6 6l12 12M18 6L6 18" />;
const IconChevDown = (p) => <Icon {...p} d="M6 9l6 6 6-6" />;
const IconChevRight = (p) => <Icon {...p} d="M9 6l6 6-6 6" />;
const IconChevLeft = (p) => <Icon {...p} d="M15 6l-6 6 6 6" />;
const IconPlus = (p) => <Icon {...p} d="M12 5v14M5 12h14" />;
const IconMinus = (p) => <Icon {...p} d="M5 12h14" />;
const IconCheck = (p) => <Icon {...p} d="M5 13l4 4L19 7" />;
const IconFilter = (p) => <Icon {...p} d="M3 5h18M6 12h12M10 19h4" />;
const IconGrid = (p) => <Icon {...p} d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />;
const IconRuler = (p) => <Icon {...p} d="M3 17 17 3l4 4L7 21l-4-4zM7 13l2 2M11 9l2 2M15 5l2 2" />;
const IconTruck = (p) => <Icon {...p} d="M3 7h11v9H3zM14 11h4l3 3v2h-7M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />;
const IconShield = (p) => <Icon {...p} d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />;
const IconBox = (p) => <Icon {...p} d="M3 7l9-4 9 4v10l-9 4-9-4V7zM3 7l9 4 9-4M12 11v10" />;
const IconScissors = (p) => <Icon {...p} d="M6 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM6 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM8 8l12 12M8 16l12-12" />;
const IconStar = (p) => <Icon {...p} d="m12 3 2.6 5.5 6 .9-4.4 4.2 1 6-5.2-2.8-5.2 2.8 1-6L3.4 9.4l6-.9L12 3z" />;
const IconArrowRight = (p) => <Icon {...p} d="M5 12h14M13 6l6 6-6 6" />;
const IconLayers = (p) => <Icon {...p} d="m12 3 9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" />;
const IconBolt = (p) => <Icon {...p} d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />;

window.IconSearch = IconSearch;
window.IconCart = IconCart;
window.IconUser = IconUser;
window.IconHeart = IconHeart;
window.IconMenu = IconMenu;
window.IconClose = IconClose;
window.IconChevDown = IconChevDown;
window.IconChevRight = IconChevRight;
window.IconChevLeft = IconChevLeft;
window.IconPlus = IconPlus;
window.IconMinus = IconMinus;
window.IconCheck = IconCheck;
window.IconFilter = IconFilter;
window.IconGrid = IconGrid;
window.IconRuler = IconRuler;
window.IconTruck = IconTruck;
window.IconShield = IconShield;
window.IconBox = IconBox;
window.IconScissors = IconScissors;
window.IconStar = IconStar;
window.IconArrowRight = IconArrowRight;
window.IconLayers = IconLayers;
window.IconBolt = IconBolt;

// ===== components/data.jsx =====
// Catalog data for Espumatex prototype
const ESPUMATEX_CATEGORIES = [
  { slug: 'espumas', name: 'Espumas', count: 84 },
  { slug: 'tecidos', name: 'Tecidos', count: 142 },
  { slug: 'manta-acrilica', name: 'Manta acrílica', count: 12 },
  { slug: 'fibras', name: 'Fibras siliconadas', count: 8 },
  { slug: 'acessorios', name: 'Acessórios', count: 36 },
];

const ESPUMATEX_PRODUCTS = [
  {
    id: 'p1',
    sku: 'ESP-D33-10',
    name: 'Espuma D33 — 10cm',
    slug: 'espuma-d33-10cm',
    category: 'Espumas',
    unit: 'M2',
    basePrice: 89.90,
    density: 'D33',
    thickness: 10,
    width: 1.40,
    badge: 'Mais vendido',
    swatch: 'linear-gradient(135deg, #d9c89a 0%, #b59c6a 100%)',
    short: 'Densidade média-alta. Ideal para assento de sofá e estofamento residencial.',
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 'p2',
    sku: 'ESP-D45-05',
    name: 'Espuma D45 — 5cm',
    slug: 'espuma-d45-5cm',
    category: 'Espumas',
    unit: 'M2',
    basePrice: 64.50,
    density: 'D45',
    thickness: 5,
    width: 1.40,
    badge: null,
    swatch: 'linear-gradient(135deg, #c9b48a 0%, #9d8458 100%)',
    short: 'Alta densidade. Cabeceiras, encostos firmes, restauração.',
    rating: 4.9,
    reviews: 187,
  },
  {
    id: 'p3',
    sku: 'TEC-LIN-AREIA',
    name: 'Linho Belga — Areia',
    slug: 'linho-belga-areia',
    category: 'Tecidos',
    unit: 'M',
    basePrice: 78.00,
    grammage: 280,
    width: 1.50,
    badge: 'Novo',
    swatch: 'linear-gradient(135deg, #e6dcc6 0%, #c9b896 100%)',
    short: 'Linho 100%, gramatura 280g/m². Trama aberta, toque natural.',
    rating: 4.7,
    reviews: 94,
  },
  {
    id: 'p4',
    sku: 'TEC-VEL-GRA',
    name: 'Veludo Premium — Grafite',
    slug: 'veludo-premium-grafite',
    category: 'Tecidos',
    unit: 'M',
    basePrice: 92.00,
    grammage: 340,
    width: 1.40,
    badge: null,
    swatch: 'linear-gradient(135deg, #4a4a52 0%, #2a2a30 100%)',
    short: 'Veludo de poliéster 340g/m². Resistência abrasão 50.000 ciclos.',
    rating: 4.9,
    reviews: 421,
  },
  {
    id: 'p5',
    sku: 'ESP-D20-03',
    name: 'Espuma D20 — 3cm',
    slug: 'espuma-d20-3cm',
    category: 'Espumas',
    unit: 'M2',
    basePrice: 32.40,
    density: 'D20',
    thickness: 3,
    width: 1.40,
    badge: null,
    swatch: 'linear-gradient(135deg, #ddc89e 0%, #b89c6e 100%)',
    short: 'Baixa densidade. Almofadas decorativas, capas, artesanato.',
    rating: 4.6,
    reviews: 256,
  },
  {
    id: 'p6',
    sku: 'TEC-CHE-BOU',
    name: 'Chenille — Bouclé creme',
    slug: 'chenille-boucle-creme',
    category: 'Tecidos',
    unit: 'M',
    basePrice: 58.00,
    grammage: 320,
    width: 1.40,
    badge: 'Promo',
    swatch: 'linear-gradient(135deg, #ede4d0 0%, #d4c5a8 100%)',
    short: 'Tramado bouclé, toque macio, alta resistência.',
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 'p7',
    sku: 'MAN-100',
    name: 'Manta acrílica 100g',
    slug: 'manta-acrilica-100g',
    category: 'Manta acrílica',
    unit: 'M',
    basePrice: 18.50,
    width: 1.50,
    badge: null,
    swatch: 'linear-gradient(135deg, #f4f0e8 0%, #d8d2c2 100%)',
    short: 'Manta de fibra acrílica para almofadas e edredons.',
    rating: 4.7,
    reviews: 142,
  },
  {
    id: 'p8',
    sku: 'ESP-D28-08',
    name: 'Espuma D28 — 8cm',
    slug: 'espuma-d28-8cm',
    category: 'Espumas',
    unit: 'M2',
    basePrice: 71.00,
    density: 'D28',
    thickness: 8,
    width: 1.40,
    badge: null,
    swatch: 'linear-gradient(135deg, #d4c094 0%, #ad9460 100%)',
    short: 'Densidade média. Conforto equilibrado, uso diário.',
    rating: 4.7,
    reviews: 203,
  },
];

window.ESPUMATEX_CATEGORIES = ESPUMATEX_CATEGORIES;
window.ESPUMATEX_PRODUCTS = ESPUMATEX_PRODUCTS;

// ===== components/brand-cards.jsx =====
// Branding cards for each direction — shown above the phone previews
const A_BrandCard = () => (
  <div style={{ width: 540, padding: 32, background: '#FAFAFA', border: '1px solid #EAEAEC', borderRadius: 12, fontFamily: 'ui-sans-serif, "Inter", system-ui, sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
      <div>
        <div style={{ fontFamily: 'ui-monospace, "JetBrains Mono", monospace', fontSize: 11, color: '#9A9AA3', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Direção A</div>
        <h2 style={{ margin: '6px 0 0', fontSize: 28, fontWeight: 600, letterSpacing: '-0.025em', color: '#0A0A0A' }}>Tech Neutral</h2>
        <p style={{ marginTop: 6, fontSize: 13, color: '#5C5C66', maxWidth: 320, lineHeight: 1.5 }}>Cinza-branco preciso, números em mono, vibe Linear/Vercel. Para quem quer um catálogo técnico moderno.</p>
      </div>
      <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.04em', color: '#0A0A0A' }}>Espumatex</div>
    </div>
    <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
      {['#FAFAFA', '#FFFFFF', '#0A0A0A', '#5C5C66', '#E8FF52'].map(c => (
        <div key={c} style={{ flex: 1 }}>
          <div style={{ height: 60, background: c, border: '1px solid #EAEAEC', borderRadius: 6 }} />
          <div style={{ fontSize: 9, fontFamily: 'ui-monospace, monospace', color: '#9A9AA3', marginTop: 4 }}>{c}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #EAEAEC', paddingTop: 14, fontSize: 11, color: '#5C5C66' }}>
      <span><b>Type</b> · Inter + JetBrains Mono</span>
      <span><b>Mood</b> · técnico, preciso, moderno</span>
    </div>
  </div>
);

const B_BrandCard = () => (
  <div style={{ width: 540, padding: 32, background: '#F4EFE6', border: '1px solid #E0D8C8', borderRadius: 12, fontFamily: '"Inter", system-ui, sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
      <div>
        <div style={{ fontSize: 11, color: '#8C8275', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Direção B</div>
        <h2 style={{ margin: '6px 0 0', fontSize: 28, fontWeight: 500, letterSpacing: '-0.025em', color: '#1F1B16', fontFamily: '"Cormorant Garamond", Georgia, serif' }}>Editorial Warm</h2>
        <p style={{ marginTop: 6, fontSize: 13, color: '#5C5247', maxWidth: 320, lineHeight: 1.5 }}>Tom quente, serif elegante, terracota. Vibe magazine de design — eleva os materiais.</p>
      </div>
      <div style={{ fontSize: 30, fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.02em', color: '#1F1B16' }}>Espumatex</div>
    </div>
    <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
      {['#F4EFE6', '#FBF8F2', '#1F1B16', '#B85B2C', '#E0D8C8'].map(c => (
        <div key={c} style={{ flex: 1 }}>
          <div style={{ height: 60, background: c, border: '1px solid #E0D8C8', borderRadius: 6 }} />
          <div style={{ fontSize: 9, color: '#8C8275', marginTop: 4 }}>{c}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E0D8C8', paddingTop: 14, fontSize: 11, color: '#5C5247' }}>
      <span><b>Type</b> · Cormorant + Inter</span>
      <span><b>Mood</b> · editorial, quente, premium</span>
    </div>
  </div>
);

const C_BrandCard = () => (
  <div style={{ width: 540, padding: 32, background: '#0E0E10', border: '1px solid #27272B', borderRadius: 12, color: '#F5F5F0', fontFamily: '"Inter", system-ui, sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
      <div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#6E6E68', letterSpacing: '0.12em' }}>// DIREÇÃO C</div>
        <h2 style={{ margin: '6px 0 0', fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em', fontFamily: '"JetBrains Mono", monospace', textTransform: 'uppercase' }}>Industrial Dark</h2>
        <p style={{ marginTop: 6, fontSize: 13, color: '#A8A8A3', maxWidth: 320, lineHeight: 1.5 }}>Preto profundo + amarelo de segurança. Vibe catálogo industrial / engenharia. Para quem vende precisão.</p>
      </div>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 12, height: 12, background: '#E8FF52' }} />
        ESPUMATEX
      </div>
    </div>
    <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
      {['#0E0E10', '#17171A', '#F5F5F0', '#E8FF52', '#27272B'].map(c => (
        <div key={c} style={{ flex: 1 }}>
          <div style={{ height: 60, background: c, border: '1px solid #27272B', borderRadius: 6 }} />
          <div style={{ fontSize: 9, fontFamily: '"JetBrains Mono", monospace', color: '#6E6E68', marginTop: 4 }}>{c}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #27272B', paddingTop: 14, fontSize: 11, color: '#A8A8A3' }}>
      <span><b>Type</b> · JetBrains Mono + Inter</span>
      <span><b>Mood</b> · industrial, técnico, ousado</span>
    </div>
  </div>
);

window.A_BrandCard = A_BrandCard;
window.B_BrandCard = B_BrandCard;
window.C_BrandCard = C_BrandCard;

// ===== components/dir-a.jsx =====
// ============================================================
// DIRECTION A — "TECH NEUTRAL"
// Inspirado em Linear / Vercel / Arc. Cinza-azulado escuro,
// tipografia técnica, foco em precisão e dados.
// Mobile-first, dimensões 390x844 (iPhone-ish)
// ============================================================

const A_TOKENS = {
  bg: '#FAFAFA',
  surface: '#FFFFFF',
  ink: '#0A0A0A',
  inkSoft: '#5C5C66',
  inkMuted: '#9A9AA3',
  border: '#EAEAEC',
  borderStrong: '#D4D4D8',
  accent: '#0A0A0A',
  accentSoft: '#1A1A1A',
  highlight: '#E8FF52',
  good: '#16A34A',
  font: 'ui-sans-serif, -apple-system, "Inter", system-ui, sans-serif',
  mono: 'ui-monospace, "SF Mono", "JetBrains Mono", monospace',
};

const a_st = {
  frame: {
    width: 390,
    height: 844,
    background: A_TOKENS.bg,
    color: A_TOKENS.ink,
    fontFamily: A_TOKENS.font,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    letterSpacing: '-0.01em',
  },
  statusBar: {
    height: 44,
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '0 22px 8px',
    fontSize: 13,
    fontWeight: 600,
    fontVariantNumeric: 'tabular-nums',
  },
  topBar: {
    flex: '0 0 auto',
    height: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    borderBottom: `1px solid ${A_TOKENS.border}`,
    background: A_TOKENS.surface,
  },
  logo: {
    fontSize: 17,
    fontWeight: 700,
    letterSpacing: '-0.04em',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    border: 'none',
    background: 'transparent',
    color: A_TOKENS.ink,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
  },
  scroll: {
    flex: '1 1 auto',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  tabbar: {
    flex: '0 0 auto',
    height: 78,
    background: A_TOKENS.surface,
    borderTop: `1px solid ${A_TOKENS.border}`,
    display: 'flex',
    padding: '8px 8px 22px',
  },
  tab: (active) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    padding: '6px 4px',
    color: active ? A_TOKENS.ink : A_TOKENS.inkMuted,
    fontSize: 10,
    fontWeight: 500,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
  }),
};

// ───────── HOME ─────────
function A_Home({ go }) {
  const featured = ESPUMATEX_PRODUCTS.slice(0, 4);
  return (
    <div style={a_st.scroll}>
      {/* Hero */}
      <div style={{ padding: '24px 16px 28px', borderBottom: `1px solid ${A_TOKENS.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: A_TOKENS.inkMuted, fontFamily: A_TOKENS.mono, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: A_TOKENS.good }} />
          Em estoque · entrega em 48h
        </div>
        <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.05, letterSpacing: '-0.035em', fontWeight: 600 }}>
          Espuma e tecido<br />
          <span style={{ color: A_TOKENS.inkMuted }}>cortados na medida.</span>
        </h1>
        <p style={{ margin: '14px 0 0', fontSize: 14, color: A_TOKENS.inkSoft, lineHeight: 1.5 }}>
          Catálogo técnico, preço por metro, corte preciso a partir de 0,5m.
        </p>
        <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
          <button onClick={() => go('list')} style={{ flex: 1, height: 46, background: A_TOKENS.ink, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            Ver catálogo <IconArrowRight size={16} />
          </button>
          <button style={{ width: 46, height: 46, background: 'transparent', border: `1px solid ${A_TOKENS.borderStrong}`, borderRadius: 10, color: A_TOKENS.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <IconRuler size={18} />
          </button>
        </div>
      </div>

      {/* Categorias técnicas */}
      <div style={{ padding: '24px 16px 8px' }}>
        <SectionHead label="01" title="Categorias" />
      </div>
      <div style={{ padding: '0 16px 8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {ESPUMATEX_CATEGORIES.slice(0, 4).map((c, i) => (
          <button key={c.slug} onClick={() => go('list')} style={{ textAlign: 'left', padding: 14, background: A_TOKENS.surface, border: `1px solid ${A_TOKENS.border}`, borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
            <div style={{ fontSize: 10, fontFamily: A_TOKENS.mono, color: A_TOKENS.inkMuted, marginBottom: 22 }}>0{i + 1}</div>
            <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.02em' }}>{c.name}</div>
            <div style={{ fontSize: 11, color: A_TOKENS.inkMuted, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>{c.count} produtos</div>
          </button>
        ))}
      </div>

      {/* Densidade explainer — diferencial técnico */}
      <div style={{ padding: '20px 16px 8px' }}>
        <SectionHead label="02" title="Densidade da espuma" />
      </div>
      <div style={{ padding: '0 16px', display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
        {[
          { d: 'D20', use: 'Almofada decorativa', soft: 'Macia' },
          { d: 'D28', use: 'Conforto diário', soft: 'Média' },
          { d: 'D33', use: 'Sofá / assento', soft: 'Firme' },
          { d: 'D45', use: 'Cabeceira / restauro', soft: 'Muito firme' },
        ].map((x) => (
          <div key={x.d} style={{ flex: '0 0 132px', padding: 12, border: `1px solid ${A_TOKENS.border}`, borderRadius: 10, background: A_TOKENS.surface }}>
            <div style={{ fontFamily: A_TOKENS.mono, fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>{x.d}</div>
            <div style={{ fontSize: 11, color: A_TOKENS.inkMuted, marginTop: 12, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: A_TOKENS.mono }}>{x.soft}</div>
            <div style={{ fontSize: 12, color: A_TOKENS.inkSoft, marginTop: 4, lineHeight: 1.35 }}>{x.use}</div>
          </div>
        ))}
      </div>

      {/* Mais vendidos */}
      <div style={{ padding: '24px 16px 8px' }}>
        <SectionHead label="03" title="Mais vendidos" />
      </div>
      <div style={{ padding: '0 16px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {featured.map((p) => <A_ProductCard key={p.id} p={p} onClick={() => go('product', p)} />)}
      </div>

      {/* Strip de confiança */}
      <div style={{ background: A_TOKENS.ink, color: '#fff', padding: '24px 16px 32px' }}>
        <div style={{ fontSize: 11, fontFamily: A_TOKENS.mono, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', marginBottom: 16 }}>Por que Espumatex</div>
        {[
          { n: '12k+', l: 'Pedidos entregues' },
          { n: '0,5m', l: 'Corte mínimo' },
          { n: '48h', l: 'Despacho médio' },
          { n: '4,8', l: 'Avaliação média' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderTop: i ? '1px solid #222' : 'none' }}>
            <div style={{ fontSize: 13, color: '#aaa' }}>{s.l}</div>
            <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{s.n}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SectionHead = ({ label, title }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
    <span style={{ fontFamily: A_TOKENS.mono, fontSize: 11, color: A_TOKENS.inkMuted }}>{label}</span>
    <span style={{ flex: 1, height: 1, background: A_TOKENS.border }} />
    <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.025em' }}>{title}</span>
  </div>
);

function A_ProductCard({ p, onClick }) {
  return (
    <button onClick={onClick} style={{ textAlign: 'left', padding: 0, background: A_TOKENS.surface, border: `1px solid ${A_TOKENS.border}`, borderRadius: 12, cursor: 'pointer', overflow: 'hidden', fontFamily: 'inherit' }}>
      <div style={{ aspectRatio: '1', background: p.swatch, position: 'relative' }}>
        {p.badge && (
          <span style={{ position: 'absolute', top: 8, left: 8, background: A_TOKENS.surface, fontSize: 10, fontFamily: A_TOKENS.mono, padding: '3px 7px', borderRadius: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {p.badge}
          </span>
        )}
        <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 10, fontFamily: A_TOKENS.mono, color: A_TOKENS.inkMuted, background: 'rgba(255,255,255,0.85)', padding: '3px 6px', borderRadius: 4 }}>{p.sku}</span>
      </div>
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.015em' }}>{p.name}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 600, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>R$ {p.basePrice.toFixed(2).replace('.', ',')}</span>
          <span style={{ fontSize: 10, fontFamily: A_TOKENS.mono, color: A_TOKENS.inkMuted }}>/{p.unit.toLowerCase()}</span>
        </div>
      </div>
    </button>
  );
}

window.A_TOKENS = A_TOKENS;
window.a_st = a_st;
window.A_Home = A_Home;
window.A_ProductCard = A_ProductCard;
window.A_SectionHead = SectionHead;

// ===== components/dir-b.jsx =====
// ============================================================
// DIRECTION B — "EDITORIAL WARM"
// Inspirado em magazines de design / Hem / HAY. Off-white quente,
// serif elegante, foco no material, generosidade espacial.
// ============================================================

const B_TOKENS = {
  bg: '#F4EFE6',
  surface: '#FBF8F2',
  card: '#FFFFFF',
  ink: '#1F1B16',
  inkSoft: '#5C5247',
  inkMuted: '#8C8275',
  border: '#E0D8C8',
  borderStrong: '#C9BFAB',
  accent: '#B85B2C', // terracota
  accentSoft: '#E8DCC8',
  serif: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
  sans: '"Inter", -apple-system, system-ui, sans-serif',
};

const b_st = {
  frame: {
    width: 390,
    height: 844,
    background: B_TOKENS.bg,
    color: B_TOKENS.ink,
    fontFamily: B_TOKENS.sans,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
  },
  statusBar: {
    height: 44,
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '0 22px 8px',
    fontSize: 13,
    fontWeight: 600,
  },
  topBar: {
    flex: '0 0 auto',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 18px',
    background: B_TOKENS.bg,
  },
  logo: {
    fontFamily: B_TOKENS.serif,
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: '-0.02em',
    fontStyle: 'italic',
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: '50%',
    border: 'none',
    background: 'transparent',
    color: B_TOKENS.ink,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  scroll: {
    flex: '1 1 auto',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  tabbar: {
    flex: '0 0 auto',
    height: 78,
    background: B_TOKENS.surface,
    borderTop: `1px solid ${B_TOKENS.border}`,
    display: 'flex',
    padding: '8px 8px 22px',
  },
  tab: (active) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    padding: '6px 4px',
    color: active ? B_TOKENS.accent : B_TOKENS.inkMuted,
    fontSize: 10,
    fontWeight: 500,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
  }),
};

function B_Home({ go }) {
  return (
    <div style={b_st.scroll}>
      {/* Hero editorial */}
      <div style={{ padding: '12px 20px 32px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: B_TOKENS.inkMuted, marginBottom: 18 }}>
          Edição Outono · 2026
        </div>
        <h1 style={{ margin: 0, fontFamily: B_TOKENS.serif, fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.025em', fontWeight: 400 }}>
          Materiais<br />
          <em style={{ color: B_TOKENS.accent }}>nobres</em>,<br />
          do metro.
        </h1>
        <p style={{ marginTop: 22, fontSize: 14, lineHeight: 1.55, color: B_TOKENS.inkSoft, maxWidth: 280 }}>
          Espumas técnicas e tecidos selecionados, cortados sob medida desde 1995.
        </p>
        <button onClick={() => go('list')} style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', background: B_TOKENS.ink, color: B_TOKENS.bg, border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' }}>
          Explorar coleção <IconArrowRight size={15} />
        </button>
      </div>

      {/* Featured material — full bleed */}
      <div style={{ position: 'relative', height: 380, margin: '0 20px', borderRadius: 8, overflow: 'hidden', background: ESPUMATEX_PRODUCTS[3].swatch }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)' }} />
        <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 10, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: B_TOKENS.sans }}>
          Em destaque
        </div>
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, color: '#fff' }}>
          <div style={{ fontFamily: B_TOKENS.serif, fontSize: 30, lineHeight: 1, letterSpacing: '-0.02em' }}>Veludo Premium</div>
          <div style={{ fontSize: 12, marginTop: 8, opacity: 0.85, letterSpacing: '0.04em' }}>340g/m² · resistência 50.000 ciclos</div>
        </div>
      </div>

      {/* Categorias — lista editorial */}
      <div style={{ padding: '40px 20px 8px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: B_TOKENS.inkMuted, marginBottom: 4 }}>Capítulos</div>
        <div style={{ fontFamily: B_TOKENS.serif, fontSize: 28, fontWeight: 400, letterSpacing: '-0.025em' }}>Categorias</div>
      </div>
      <div style={{ padding: '0 20px' }}>
        {ESPUMATEX_CATEGORIES.slice(0, 4).map((c, i) => (
          <button key={c.slug} onClick={() => go('list')} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderTop: `1px solid ${B_TOKENS.border}`, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
            <div>
              <div style={{ fontSize: 11, color: B_TOKENS.inkMuted, fontFamily: B_TOKENS.serif, fontStyle: 'italic' }}>0{i + 1} —</div>
              <div style={{ fontFamily: B_TOKENS.serif, fontSize: 26, fontWeight: 400, letterSpacing: '-0.02em', marginTop: 2 }}>{c.name}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: B_TOKENS.inkSoft }}>
              <span style={{ fontSize: 12 }}>{c.count}</span>
              <IconArrowRight size={16} />
            </div>
          </button>
        ))}
      </div>

      {/* Mais vendidos */}
      <div style={{ padding: '40px 20px 16px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: B_TOKENS.inkMuted, marginBottom: 4 }}>Curadoria</div>
        <div style={{ fontFamily: B_TOKENS.serif, fontSize: 28, fontWeight: 400, letterSpacing: '-0.025em' }}>Os preferidos.</div>
      </div>
      <div style={{ padding: '0 20px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {ESPUMATEX_PRODUCTS.slice(0, 4).map((p) => <B_ProductCard key={p.id} p={p} onClick={() => go('product', p)} />)}
      </div>

      {/* Quote */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{ borderTop: `1px solid ${B_TOKENS.border}`, paddingTop: 28 }}>
          <div style={{ fontFamily: B_TOKENS.serif, fontSize: 22, fontStyle: 'italic', lineHeight: 1.3, letterSpacing: '-0.01em', color: B_TOKENS.ink }}>
            "Recebi a espuma cortada nas medidas exatas. Encaixou no sofá no primeiro teste."
          </div>
          <div style={{ marginTop: 18, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: B_TOKENS.inkMuted }}>
            Marina R. · Curitiba
          </div>
        </div>
      </div>
    </div>
  );
}

function B_ProductCard({ p, onClick }) {
  return (
    <button onClick={onClick} style={{ textAlign: 'left', padding: 0, background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
      <div style={{ aspectRatio: '4 / 5', background: p.swatch, borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
        {p.badge && (
          <span style={{ position: 'absolute', top: 10, left: 10, background: B_TOKENS.bg, fontSize: 9, padding: '4px 8px', borderRadius: 999, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            {p.badge}
          </span>
        )}
      </div>
      <div style={{ paddingTop: 10 }}>
        <div style={{ fontFamily: B_TOKENS.serif, fontSize: 17, lineHeight: 1.15, letterSpacing: '-0.015em' }}>{p.name}</div>
        <div style={{ fontSize: 11, color: B_TOKENS.inkMuted, marginTop: 3 }}>{p.short.split('.')[0]}</div>
        <div style={{ fontSize: 13, fontWeight: 500, marginTop: 8, letterSpacing: '-0.01em' }}>
          R$ {p.basePrice.toFixed(2).replace('.', ',')} <span style={{ color: B_TOKENS.inkMuted, fontWeight: 400, fontSize: 11 }}>/ {p.unit.toLowerCase()}</span>
        </div>
      </div>
    </button>
  );
}

window.B_TOKENS = B_TOKENS;
window.b_st = b_st;
window.B_Home = B_Home;
window.B_ProductCard = B_ProductCard;

// ===== components/dir-c.jsx =====
// ============================================================
// DIRECTION C — "INDUSTRIAL DARK"
// Inspirado em catálogos industriais técnicos / Bauhaus / engenharia.
// Preto profundo, amarelo de segurança, mono espesso, blocos.
// ============================================================

const C_TOKENS = {
  bg: '#0E0E10',
  surface: '#17171A',
  surface2: '#1F1F23',
  ink: '#F5F5F0',
  inkSoft: '#A8A8A3',
  inkMuted: '#6E6E68',
  border: '#27272B',
  borderStrong: '#3A3A40',
  accent: '#E8FF52',
  accentInk: '#0E0E10',
  font: '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, "SF Mono", monospace',
};

const c_st = {
  frame: {
    width: 390,
    height: 844,
    background: C_TOKENS.bg,
    color: C_TOKENS.ink,
    fontFamily: C_TOKENS.font,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    letterSpacing: '-0.005em',
  },
  statusBar: {
    height: 44,
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '0 22px 8px',
    fontSize: 13,
    fontWeight: 600,
    color: C_TOKENS.ink,
    fontVariantNumeric: 'tabular-nums',
  },
  topBar: {
    flex: '0 0 auto',
    height: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    borderBottom: `1px solid ${C_TOKENS.border}`,
    background: C_TOKENS.bg,
  },
  logo: {
    fontFamily: C_TOKENS.mono,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    border: 'none',
    background: 'transparent',
    color: C_TOKENS.ink,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  scroll: {
    flex: '1 1 auto',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  tabbar: {
    flex: '0 0 auto',
    height: 78,
    background: C_TOKENS.surface,
    borderTop: `1px solid ${C_TOKENS.border}`,
    display: 'flex',
    padding: '8px 8px 22px',
  },
  tab: (active) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    padding: '6px 4px',
    color: active ? C_TOKENS.accent : C_TOKENS.inkMuted,
    fontSize: 10,
    fontWeight: 500,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
  }),
};

function C_Home({ go }) {
  return (
    <div style={c_st.scroll}>
      {/* Ticker */}
      <div style={{ background: C_TOKENS.accent, color: C_TOKENS.accentInk, fontFamily: C_TOKENS.mono, fontSize: 10, padding: '6px 16px', display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
        <span>● LIVE · 247 PRODUTOS</span>
        <span>FRETE FIXO SP/RJ R$19,90</span>
      </div>

      {/* Hero industrial */}
      <div style={{ padding: '28px 16px 32px', borderBottom: `1px solid ${C_TOKENS.border}` }}>
        <div style={{ fontFamily: C_TOKENS.mono, fontSize: 10, color: C_TOKENS.inkMuted, letterSpacing: '0.12em', marginBottom: 16 }}>
          ESPUMATEX/SISTEMA · v.4.2
        </div>
        <h1 style={{ margin: 0, fontFamily: C_TOKENS.mono, fontSize: 38, lineHeight: 0.95, letterSpacing: '-0.04em', fontWeight: 700, textTransform: 'uppercase' }}>
          MEDIDA<br />
          <span style={{ color: C_TOKENS.accent }}>EXATA.</span>
        </h1>
        <div style={{ display: 'flex', gap: 0, marginTop: 28, border: `1px solid ${C_TOKENS.border}`, borderRadius: 4 }}>
          <div style={{ flex: 1, padding: 12, borderRight: `1px solid ${C_TOKENS.border}` }}>
            <div style={{ fontFamily: C_TOKENS.mono, fontSize: 9, color: C_TOKENS.inkMuted, letterSpacing: '0.1em' }}>UNIDADE</div>
            <div style={{ fontFamily: C_TOKENS.mono, fontSize: 18, fontWeight: 600, marginTop: 6 }}>M / M² / M³</div>
          </div>
          <div style={{ flex: 1, padding: 12 }}>
            <div style={{ fontFamily: C_TOKENS.mono, fontSize: 9, color: C_TOKENS.inkMuted, letterSpacing: '0.1em' }}>MÍN.</div>
            <div style={{ fontFamily: C_TOKENS.mono, fontSize: 18, fontWeight: 600, marginTop: 6 }}>0,5m</div>
          </div>
        </div>
        <button onClick={() => go('list')} style={{ width: '100%', marginTop: 16, height: 50, background: C_TOKENS.accent, color: C_TOKENS.accentInk, border: 'none', borderRadius: 6, fontFamily: C_TOKENS.mono, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          ABRIR CATÁLOGO <IconArrowRight size={16} />
        </button>
      </div>

      {/* Categorias bloco */}
      <div style={{ padding: '24px 16px 4px' }}>
        <div style={{ fontFamily: C_TOKENS.mono, fontSize: 10, color: C_TOKENS.inkMuted, letterSpacing: '0.12em', marginBottom: 14 }}>// CATEGORIAS</div>
      </div>
      <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: C_TOKENS.border, border: `1px solid ${C_TOKENS.border}`, borderRadius: 6, overflow: 'hidden' }}>
        {ESPUMATEX_CATEGORIES.slice(0, 4).map((c, i) => (
          <button key={c.slug} onClick={() => go('list')} style={{ background: C_TOKENS.surface, padding: 16, border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', color: C_TOKENS.ink }}>
            <div style={{ fontFamily: C_TOKENS.mono, fontSize: 9, color: C_TOKENS.inkMuted, letterSpacing: '0.1em' }}>0{i + 1}/{ESPUMATEX_CATEGORIES.length}</div>
            <div style={{ fontFamily: C_TOKENS.mono, fontSize: 16, fontWeight: 600, marginTop: 26, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{c.name}</div>
            <div style={{ fontFamily: C_TOKENS.mono, fontSize: 10, color: C_TOKENS.accent, marginTop: 4, letterSpacing: '0.08em' }}>{c.count} SKU</div>
          </button>
        ))}
      </div>

      {/* Tabela densidade */}
      <div style={{ padding: '28px 16px 4px' }}>
        <div style={{ fontFamily: C_TOKENS.mono, fontSize: 10, color: C_TOKENS.inkMuted, letterSpacing: '0.12em', marginBottom: 14 }}>// TABELA DENSIDADE</div>
      </div>
      <div style={{ padding: '0 16px' }}>
        <div style={{ border: `1px solid ${C_TOKENS.border}`, borderRadius: 6, overflow: 'hidden', fontFamily: C_TOKENS.mono, fontSize: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px', padding: '10px 12px', background: C_TOKENS.surface, color: C_TOKENS.inkMuted, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: `1px solid ${C_TOKENS.border}` }}>
            <div>COD</div><div>USO</div><div style={{ textAlign: 'right' }}>FIRMEZA</div>
          </div>
          {[
            ['D20', 'Almofada decorativa', '◐'],
            ['D28', 'Conforto diário', '◑'],
            ['D33', 'Sofá / assento', '◕'],
            ['D45', 'Cabeceira', '●'],
          ].map(([d, u, f], i) => (
            <div key={d} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px', padding: '12px', borderTop: i ? `1px solid ${C_TOKENS.border}` : 'none', alignItems: 'center' }}>
              <div style={{ fontWeight: 700, color: C_TOKENS.accent }}>{d}</div>
              <div style={{ color: C_TOKENS.ink, fontFamily: C_TOKENS.font, fontSize: 13 }}>{u}</div>
              <div style={{ textAlign: 'right', fontSize: 16 }}>{f}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Produtos grid */}
      <div style={{ padding: '28px 16px 4px' }}>
        <div style={{ fontFamily: C_TOKENS.mono, fontSize: 10, color: C_TOKENS.inkMuted, letterSpacing: '0.12em', marginBottom: 14 }}>// MAIS VENDIDOS</div>
      </div>
      <div style={{ padding: '0 16px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {ESPUMATEX_PRODUCTS.slice(0, 4).map((p) => <C_ProductCard key={p.id} p={p} onClick={() => go('product', p)} />)}
      </div>
    </div>
  );
}

function C_ProductCard({ p, onClick }) {
  return (
    <button onClick={onClick} style={{ textAlign: 'left', padding: 0, background: C_TOKENS.surface, border: `1px solid ${C_TOKENS.border}`, borderRadius: 6, cursor: 'pointer', overflow: 'hidden', fontFamily: 'inherit', color: C_TOKENS.ink }}>
      <div style={{ aspectRatio: '1', background: p.swatch, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 6, left: 6, fontFamily: C_TOKENS.mono, fontSize: 9, background: C_TOKENS.bg, color: C_TOKENS.ink, padding: '3px 6px', borderRadius: 3, letterSpacing: '0.06em' }}>
          {p.sku}
        </div>
      </div>
      <div style={{ padding: 10, borderTop: `1px solid ${C_TOKENS.border}` }}>
        <div style={{ fontFamily: C_TOKENS.mono, fontSize: 12, fontWeight: 600, lineHeight: 1.3, textTransform: 'uppercase' }}>{p.name}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 8, fontFamily: C_TOKENS.mono }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C_TOKENS.accent }}>R$ {p.basePrice.toFixed(2).replace('.', ',')}</span>
          <span style={{ fontSize: 9, color: C_TOKENS.inkMuted, letterSpacing: '0.08em' }}>/{p.unit}</span>
        </div>
      </div>
    </button>
  );
}

window.C_TOKENS = C_TOKENS;
window.c_st = c_st;
window.C_Home = C_Home;
window.C_ProductCard = C_ProductCard;

// ===== components/screens-list-product.jsx =====
// Shared screens used across all 3 directions, parametrized by tokens (T) and styles (S)
// Each screen receives: { T, S, go, state, dispatch }

// ─────────────────────── LISTAGEM ───────────────────────
function ListScreen({ T, S, go, dirKey }) {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [activeCat, setActiveCat] = React.useState('Espumas');
  const [density, setDensity] = React.useState(['D33']);
  const [priceMax, setPriceMax] = React.useState(120);
  const products = ESPUMATEX_PRODUCTS.filter(p => p.basePrice <= priceMax);
  const mono = T.mono || T.font;

  const isDark = dirKey === 'C';
  const chipBg = T.surface;
  const chipActiveBg = isDark ? T.accent : T.ink;
  const chipActiveInk = isDark ? T.accentInk : '#fff';

  return (
    <div style={S.scroll}>
      <div style={{ padding: '14px 16px 8px', position: 'sticky', top: 0, background: T.bg, zIndex: 5 }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: '-0.025em', fontFamily: dirKey === 'B' ? T.serif : T.font }}>
          {dirKey === 'B' ? <em>Espumas</em> : 'Espumas'}
        </h1>
        <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 2, fontFamily: mono }}>
          {products.length} produtos · ordenado por relevância
        </div>
      </div>

      {/* Sub-categorias chips */}
      <div style={{ display: 'flex', gap: 6, padding: '8px 16px', overflowX: 'auto' }}>
        {['Todos', 'D20', 'D28', 'D33', 'D45', 'Laminada'].map((c, i) => (
          <button key={c} onClick={() => setActiveCat(c)} style={{
            flex: '0 0 auto',
            padding: '7px 13px', borderRadius: 999,
            border: `1px solid ${activeCat === c ? chipActiveBg : T.border}`,
            background: activeCat === c ? chipActiveBg : chipBg,
            color: activeCat === c ? chipActiveInk : T.ink,
            fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
          }}>{c}</button>
        ))}
      </div>

      {/* Filter bar */}
      <div style={{ padding: '4px 16px 12px', display: 'flex', gap: 8 }}>
        <button onClick={() => setFilterOpen(true)} style={{
          flex: 1, height: 38, borderRadius: 8,
          border: `1px solid ${T.border}`,
          background: T.surface, color: T.ink, fontSize: 12, fontWeight: 500,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', fontFamily: 'inherit',
        }}>
          <IconFilter size={14} /> Filtros · 2
        </button>
        <button style={{
          flex: 1, height: 38, borderRadius: 8,
          border: `1px solid ${T.border}`,
          background: T.surface, color: T.ink, fontSize: 12, fontWeight: 500,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', fontFamily: 'inherit',
        }}>
          Menor preço <IconChevDown size={14} />
        </button>
      </div>

      {/* Grid */}
      <div style={{ padding: '0 16px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: dirKey === 'C' ? 8 : 12 }}>
        {products.map((p) => {
          const Card = dirKey === 'A' ? A_ProductCard : dirKey === 'B' ? B_ProductCard : C_ProductCard;
          return <Card key={p.id} p={p} onClick={() => go('product', p)} />;
        })}
      </div>

      {/* Filter sheet */}
      {filterOpen && (
        <div onClick={() => setFilterOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 50, display: 'flex', alignItems: 'flex-end' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', background: T.surface, borderRadius: '16px 16px 0 0', padding: '12px 18px 24px', maxHeight: '78%', overflowY: 'auto' }}>
            <div style={{ width: 36, height: 4, background: T.border, borderRadius: 2, margin: '4px auto 16px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>Filtros</h3>
              <button onClick={() => { setDensity([]); setPriceMax(150); }} style={{ background: 'none', border: 'none', color: T.inkSoft, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>Limpar tudo</button>
            </div>

            <FilterGroup T={T} title="Densidade">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['D20','D28','D33','D45'].map(d => {
                  const on = density.includes(d);
                  return (
                    <button key={d} onClick={() => setDensity(on ? density.filter(x=>x!==d) : [...density, d])} style={{
                      padding: '8px 12px', borderRadius: 999,
                      border: `1px solid ${on ? chipActiveBg : T.border}`,
                      background: on ? chipActiveBg : 'transparent',
                      color: on ? chipActiveInk : T.ink,
                      fontFamily: mono, fontSize: 12, cursor: 'pointer', fontWeight: 600,
                    }}>{d}</button>
                  );
                })}
              </div>
            </FilterGroup>

            <FilterGroup T={T} title="Espessura">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['1cm','3cm','5cm','8cm','10cm','15cm'].map(d => (
                  <button key={d} style={{
                    padding: '8px 12px', borderRadius: 999, border: `1px solid ${T.border}`,
                    background: 'transparent', color: T.ink, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit',
                  }}>{d}</button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup T={T} title={`Preço por m² · até R$ ${priceMax}`}>
              <input type="range" min="20" max="150" value={priceMax} onChange={(e)=>setPriceMax(+e.target.value)} style={{ width: '100%', accentColor: chipActiveBg }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: T.inkMuted, fontFamily: mono, marginTop: 4 }}>
                <span>R$ 20</span><span>R$ 150</span>
              </div>
            </FilterGroup>

            <button onClick={() => setFilterOpen(false)} style={{
              width: '100%', height: 50, marginTop: 16,
              background: chipActiveBg, color: chipActiveInk, border: 'none', borderRadius: 10,
              fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
            }}>Ver {products.length} produtos</button>
          </div>
        </div>
      )}
    </div>
  );
}

const FilterGroup = ({ T, title, children }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10, color: T.ink }}>{title}</div>
    {children}
  </div>
);

// ─────────────────────── PRODUTO ───────────────────────
function ProductScreen({ T, S, go, p, dirKey, addToCart }) {
  const [qty, setQty] = React.useState(p.unit === 'M2' ? 2.0 : 1.5);
  const [variant, setVariant] = React.useState(0);
  const [tab, setTab] = React.useState('specs');
  const isDark = dirKey === 'C';
  const mono = T.mono || T.font;
  const ctaBg = isDark ? T.accent : T.ink;
  const ctaInk = isDark ? T.accentInk : '#fff';

  const total = (p.basePrice * qty);
  const variants = [
    { name: p.name, swatch: p.swatch },
    { name: p.name + ' · alt', swatch: 'linear-gradient(135deg, #d4c8b4 0%, #a89880 100%)' },
    { name: p.name + ' · alt2', swatch: 'linear-gradient(135deg, #c9b694 0%, #998365 100%)' },
  ];

  return (
    <div style={S.scroll}>
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '1', background: variants[variant].swatch }}>
        <button onClick={() => go('back')} style={{ position: 'absolute', top: 14, left: 14, width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#000' }}>
          <IconChevLeft size={18} />
        </button>
        <button style={{ position: 'absolute', top: 14, right: 14, width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#000' }}>
          <IconHeart size={18} />
        </button>
        <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: i === 0 ? 18 : 6, height: 6, borderRadius: 999, background: i === 0 ? '#fff' : 'rgba(255,255,255,0.5)' }} />)}
        </div>
      </div>

      {/* Info block */}
      <div style={{ padding: '20px 18px 0' }}>
        <div style={{ fontSize: 11, fontFamily: mono, color: T.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {p.sku} · {p.category}
        </div>
        <h1 style={{ margin: '6px 0 0', fontSize: 26, fontWeight: 600, letterSpacing: '-0.025em', fontFamily: dirKey === 'B' ? T.serif : T.font, lineHeight: 1.1 }}>
          {p.name}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 12, fontVariantNumeric: 'tabular-nums' }}>
            <IconStar size={13} fill={T.ink} /> {p.rating}
          </span>
          <span style={{ fontSize: 11, color: T.inkMuted }}>({p.reviews} avaliações)</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 14 }}>
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', color: isDark ? T.accent : T.ink }}>
            R$ {p.basePrice.toFixed(2).replace('.', ',')}
          </span>
          <span style={{ fontSize: 12, color: T.inkMuted, fontFamily: mono }}>por {p.unit === 'M2' ? 'm²' : p.unit === 'M' ? 'metro' : 'unidade'}</span>
        </div>
      </div>

      {/* Variantes */}
      <div style={{ padding: '20px 18px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Variação · {variants[variant].name.split('·')[1] || 'padrão'}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {variants.map((v, i) => (
            <button key={i} onClick={() => setVariant(i)} style={{
              width: 56, height: 56, borderRadius: 8, padding: 3,
              border: `2px solid ${variant === i ? ctaBg : 'transparent'}`, cursor: 'pointer', background: 'transparent',
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: 5, background: v.swatch }} />
            </button>
          ))}
        </div>
      </div>

      {/* CONFIGURADOR DE CORTE — destaque */}
      <div style={{ margin: '24px 18px 0', padding: 16, border: `1px solid ${T.border}`, background: T.surface, borderRadius: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <IconScissors size={16} />
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em' }}>Calcular medida</div>
          <span style={{ marginLeft: 'auto', fontSize: 10, padding: '3px 7px', borderRadius: 4, background: isDark ? T.accent : '#E8FF52', color: '#0E0E10', fontWeight: 700, fontFamily: mono, letterSpacing: '0.06em' }}>
            CORTE GRÁTIS
          </span>
        </div>

        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
          <div style={{ fontSize: 12, color: T.inkSoft }}>Quantidade</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={() => setQty(Math.max(0.5, +(qty - 0.5).toFixed(1)))} style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${T.border}`, background: T.bg, cursor: 'pointer', color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconMinus size={14} />
            </button>
            <div style={{ minWidth: 64, textAlign: 'center', fontSize: 18, fontWeight: 600, fontFamily: mono, fontVariantNumeric: 'tabular-nums' }}>
              {qty.toFixed(1).replace('.', ',')} {p.unit === 'M2' ? 'm²' : 'm'}
            </div>
            <button onClick={() => setQty(+(qty + 0.5).toFixed(1))} style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${T.border}`, background: T.bg, cursor: 'pointer', color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconPlus size={14} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <input type="range" min="0.5" max="10" step="0.5" value={qty} onChange={(e) => setQty(+e.target.value)} style={{ width: '100%', marginTop: 14, accentColor: ctaBg }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: T.inkMuted, fontFamily: mono, marginTop: 2 }}>
          <span>0,5{p.unit === 'M2' ? 'm²' : 'm'}</span><span>10{p.unit === 'M2' ? 'm²' : 'm'}</span>
        </div>

        {/* Quick pick */}
        <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
          {[1, 1.5, 2, 2.5, 3].map(q => (
            <button key={q} onClick={() => setQty(q)} style={{
              padding: '6px 12px', borderRadius: 6,
              border: `1px solid ${qty === q ? ctaBg : T.border}`,
              background: qty === q ? ctaBg : 'transparent',
              color: qty === q ? ctaInk : T.ink,
              fontSize: 11, fontFamily: mono, cursor: 'pointer', fontWeight: 600,
            }}>{q.toString().replace('.', ',')}{p.unit === 'M2' ? 'm²' : 'm'}</button>
          ))}
        </div>

        {/* Resumo */}
        <div style={{ marginTop: 14, padding: 12, background: T.bg, borderRadius: 8, fontFamily: mono, fontSize: 11 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: T.inkSoft }}>
            <span>{qty.toFixed(1).replace('.', ',')} × R$ {p.basePrice.toFixed(2).replace('.', ',')}</span>
            <span style={{ fontVariantNumeric: 'tabular-nums' }}>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 13, fontWeight: 700, color: T.ink }}>
            <span>Total</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', color: isDark ? T.accent : T.ink }}>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: '24px 18px 0' }}>
        <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${T.border}` }}>
          {[['specs','Especificações'],['ship','Frete'],['rev','Avaliações']].map(([k,l]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              padding: '10px 0', flex: 1, background: 'transparent', border: 'none',
              borderBottom: `2px solid ${tab === k ? T.ink : 'transparent'}`,
              color: tab === k ? T.ink : T.inkMuted, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              marginBottom: -1,
            }}>{l}</button>
          ))}
        </div>

        <div style={{ padding: '14px 0 90px', minHeight: 120 }}>
          {tab === 'specs' && (
            <div style={{ fontFamily: mono, fontSize: 12 }}>
              {[['Densidade', p.density || '—'],['Espessura', p.thickness ? `${p.thickness} cm` : '—'],['Largura', `${p.width} m`],['Composição', p.density ? '100% poliuretano' : '100% poliéster'],['Origem', 'São Paulo / SP']].map(([k,v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${T.border}` }}>
                  <span style={{ color: T.inkSoft }}>{k}</span>
                  <span style={{ color: T.ink, fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          )}
          {tab === 'ship' && (
            <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.6 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0' }}>
                <IconTruck size={16} />
                <div>
                  <div style={{ color: T.ink, fontWeight: 600 }}>SEDEX · 2-3 dias úteis</div>
                  <div style={{ fontSize: 12 }}>R$ 24,90 · CEP 01310-100</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0' }}>
                <IconBox size={16} />
                <div>
                  <div style={{ color: T.ink, fontWeight: 600 }}>PAC · 5-7 dias úteis</div>
                  <div style={{ fontSize: 12 }}>R$ 14,90</div>
                </div>
              </div>
            </div>
          )}
          {tab === 'rev' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em' }}>{p.rating}</span>
                <span style={{ fontSize: 12, color: T.inkMuted }}>baseado em {p.reviews} compras</span>
              </div>
              <div style={{ marginTop: 14, padding: 14, border: `1px solid ${T.border}`, borderRadius: 8 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>{[0,1,2,3,4].map(i => <IconStar key={i} size={12} fill={T.ink} />)}</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Encaixou perfeito</div>
                <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 4, lineHeight: 1.5 }}>Comprei 2,5m e veio cortado certinho. Recomendo.</div>
                <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 8 }}>Carla M. · há 3 semanas</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{ position: 'absolute', bottom: 78, left: 0, right: 0, padding: '12px 16px', background: T.bg, borderTop: `1px solid ${T.border}`, display: 'flex', gap: 10 }}>
        <div style={{ flex: '0 0 auto' }}>
          <div style={{ fontSize: 10, color: T.inkMuted, fontFamily: mono }}>TOTAL</div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', color: isDark ? T.accent : T.ink }}>
            R$ {total.toFixed(2).replace('.', ',')}
          </div>
        </div>
        <button onClick={() => { addToCart({ ...p, qty }); go('cart'); }} style={{
          flex: 1, height: 48, background: ctaBg, color: ctaInk, border: 'none', borderRadius: 10,
          fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit',
        }}>
          <IconCart size={16} /> Adicionar
        </button>
      </div>
    </div>
  );
}

window.ListScreen = ListScreen;
window.ProductScreen = ProductScreen;

// ===== components/screens-cart-checkout.jsx =====
// Cart, Checkout, and other shared screens

function CartScreen({ T, S, go, cart, setCart, dirKey }) {
  const isDark = dirKey === 'C';
  const mono = T.mono || T.font;
  const ctaBg = isDark ? T.accent : T.ink;
  const ctaInk = isDark ? T.accentInk : '#fff';

  const subtotal = cart.reduce((s, i) => s + i.basePrice * i.qty, 0);
  const ship = subtotal > 0 ? 24.90 : 0;
  const total = subtotal + ship;

  if (cart.length === 0) {
    return (
      <div style={{ ...S.scroll, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: T.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.inkMuted }}>
          <IconCart size={28} />
        </div>
        <h2 style={{ marginTop: 18, fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em' }}>Carrinho vazio</h2>
        <p style={{ marginTop: 6, fontSize: 13, color: T.inkSoft, maxWidth: 240 }}>Comece pelo catálogo — corte mínimo de 0,5m.</p>
        <button onClick={() => go('list')} style={{ marginTop: 18, padding: '12px 22px', background: ctaBg, color: ctaInk, border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
          Ver catálogo
        </button>
      </div>
    );
  }

  return (
    <div style={S.scroll}>
      <div style={{ padding: '14px 16px 8px' }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: '-0.025em', fontFamily: dirKey === 'B' ? T.serif : T.font }}>
          {dirKey === 'B' ? <em>Carrinho</em> : 'Carrinho'}
        </h1>
        <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 2, fontFamily: mono }}>{cart.length} {cart.length === 1 ? 'item' : 'itens'}</div>
      </div>

      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {cart.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: 12, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10 }}>
            <div style={{ width: 72, height: 72, flex: '0 0 auto', borderRadius: 8, background: it.swatch }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontFamily: mono, color: T.inkMuted, letterSpacing: '0.06em' }}>{it.sku}</div>
              <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3, marginTop: 2, letterSpacing: '-0.015em' }}>{it.name}</div>
              <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 4, fontFamily: mono }}>
                {it.qty.toFixed(1).replace('.', ',')} {it.unit === 'M2' ? 'm²' : 'm'} · R$ {it.basePrice.toFixed(2).replace('.', ',')}/{it.unit === 'M2' ? 'm²' : 'm'}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => setCart(c => c.map((x,j)=>j===i?{...x, qty: Math.max(0.5, +(x.qty-0.5).toFixed(1))}:x))} style={{ width: 26, height: 26, borderRadius: 6, border: `1px solid ${T.border}`, background: T.bg, cursor: 'pointer', color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconMinus size={12} />
                  </button>
                  <span style={{ fontSize: 12, fontFamily: mono, fontWeight: 600, minWidth: 32, textAlign: 'center' }}>{it.qty.toFixed(1).replace('.', ',')}</span>
                  <button onClick={() => setCart(c => c.map((x,j)=>j===i?{...x, qty: +(x.qty+0.5).toFixed(1)}:x))} style={{ width: 26, height: 26, borderRadius: 6, border: `1px solid ${T.border}`, background: T.bg, cursor: 'pointer', color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconPlus size={12} />
                  </button>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em' }}>
                  R$ {(it.basePrice * it.qty).toFixed(2).replace('.', ',')}
                </div>
              </div>
            </div>
            <button onClick={() => setCart(c => c.filter((_,j)=>j!==i))} style={{ width: 28, height: 28, borderRadius: 6, border: 'none', background: 'transparent', cursor: 'pointer', color: T.inkMuted, alignSelf: 'flex-start' }}>
              <IconClose size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Cupom */}
      <div style={{ padding: '8px 16px' }}>
        <div style={{ display: 'flex', gap: 6, padding: 12, background: T.surface, border: `1px dashed ${T.borderStrong || T.border}`, borderRadius: 10 }}>
          <input placeholder="Cupom de desconto" style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 13, color: T.ink, fontFamily: 'inherit', outline: 'none' }} />
          <button style={{ padding: '6px 14px', background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 6, fontSize: 12, fontWeight: 600, color: T.ink, cursor: 'pointer', fontFamily: 'inherit' }}>Aplicar</button>
        </div>
      </div>

      {/* Sumário */}
      <div style={{ padding: '8px 16px 100px' }}>
        <div style={{ padding: '14px 16px', background: T.surface, borderRadius: 10, fontSize: 13, fontFamily: mono }}>
          {[['Subtotal', subtotal],['Frete · SEDEX', ship]].map(([l,v]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', color: T.inkSoft }}>
              <span>{l}</span>
              <span style={{ fontVariantNumeric: 'tabular-nums', color: T.ink }}>R$ {v.toFixed(2).replace('.', ',')}</span>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${T.border}`, marginTop: 8, paddingTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 700, color: T.ink }}>
            <span>Total</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', color: isDark ? T.accent : T.ink }}>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{ position: 'absolute', bottom: 78, left: 0, right: 0, padding: '12px 16px', background: T.bg, borderTop: `1px solid ${T.border}` }}>
        <button onClick={() => go('checkout')} style={{ width: '100%', height: 50, background: ctaBg, color: ctaInk, border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          Finalizar compra <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function CheckoutScreen({ T, S, go, cart, dirKey }) {
  const [step, setStep] = React.useState(1);
  const [pay, setPay] = React.useState('pix');
  const isDark = dirKey === 'C';
  const mono = T.mono || T.font;
  const ctaBg = isDark ? T.accent : T.ink;
  const ctaInk = isDark ? T.accentInk : '#fff';
  const subtotal = cart.reduce((s, i) => s + i.basePrice * i.qty, 0) || 234.50;
  const total = subtotal + 24.90 - (pay === 'pix' ? subtotal * 0.05 : 0);

  return (
    <div style={S.scroll}>
      <div style={{ padding: '14px 16px 12px' }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: '-0.025em', fontFamily: dirKey === 'B' ? T.serif : T.font }}>
          {dirKey === 'B' ? <em>Checkout</em> : 'Checkout'}
        </h1>
        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14, fontFamily: mono, fontSize: 11 }}>
          {['Entrega', 'Pagamento', 'Revisar'].map((s, i) => (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: step >= i + 1 ? T.ink : T.inkMuted }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: step >= i + 1 ? ctaBg : 'transparent', color: step >= i + 1 ? ctaInk : T.inkMuted, border: step >= i + 1 ? 'none' : `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{i + 1}</span>
                {s}
              </div>
              {i < 2 && <span style={{ flex: 1, height: 1, background: T.border }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 16px 100px' }}>
        {step === 1 && (
          <div>
            <SectionCard T={T} title="Endereço de entrega">
              <Field T={T} label="CEP" value="01310-100" mono={mono} />
              <Field T={T} label="Rua" value="Av. Paulista, 1000" mono={mono} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <Field T={T} label="Número" value="1000" mono={mono} />
                <Field T={T} label="Complemento" value="Apto 502" mono={mono} />
              </div>
              <Field T={T} label="Bairro" value="Bela Vista" mono={mono} />
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 8 }}>
                <Field T={T} label="Cidade" value="São Paulo" mono={mono} />
                <Field T={T} label="UF" value="SP" mono={mono} />
              </div>
            </SectionCard>

            <SectionCard T={T} title="Frete">
              {[
                { id: 'sed', name: 'SEDEX', days: '2-3 dias úteis', price: 24.90, recommended: true },
                { id: 'pac', name: 'PAC', days: '5-7 dias úteis', price: 14.90 },
                { id: 'tra', name: 'Transportadora', days: '7-10 dias úteis · até 50kg', price: 39.90 },
              ].map(o => (
                <button key={o.id} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0', borderTop: `1px solid ${T.border}`, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${o.recommended ? ctaBg : T.border}`, position: 'relative' }}>
                    {o.recommended && <span style={{ position: 'absolute', inset: 3, borderRadius: '50%', background: ctaBg }} />}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>{o.name}</div>
                    <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: mono }}>{o.days}</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>R$ {o.price.toFixed(2).replace('.', ',')}</div>
                </button>
              ))}
            </SectionCard>
          </div>
        )}

        {step === 2 && (
          <div>
            <SectionCard T={T} title="Forma de pagamento">
              {[
                { id: 'pix', name: 'Pix', sub: '5% off · aprovação imediata', icon: <IconBolt size={16} /> },
                { id: 'card', name: 'Cartão de crédito', sub: 'Em até 6× sem juros', icon: <IconShield size={16} /> },
                { id: 'bol', name: 'Boleto', sub: 'Aprovação em 1-2 dias úteis', icon: <IconBox size={16} /> },
              ].map(o => (
                <button key={o.id} onClick={() => setPay(o.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderTop: `1px solid ${T.border}`, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', color: T.ink }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${pay === o.id ? ctaBg : T.border}`, position: 'relative', flex: '0 0 auto' }}>
                    {pay === o.id && <span style={{ position: 'absolute', inset: 3, borderRadius: '50%', background: ctaBg }} />}
                  </span>
                  <span style={{ color: T.inkSoft }}>{o.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{o.name}</div>
                    <div style={{ fontSize: 11, color: T.inkMuted }}>{o.sub}</div>
                  </div>
                </button>
              ))}
            </SectionCard>

            {pay === 'pix' && (
              <SectionCard T={T} title="Pix · QR code">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 0' }}>
                  <div style={{ width: 160, height: 160, background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(12, 1fr)', padding: 8, gap: 1 }}>
                    {Array.from({ length: 144 }).map((_, i) => <div key={i} style={{ background: Math.random() > 0.5 ? T.ink : 'transparent', borderRadius: 1 }} />)}
                  </div>
                  <div style={{ marginTop: 12, fontSize: 11, color: T.inkMuted, fontFamily: mono }}>Expira em 30:00</div>
                </div>
              </SectionCard>
            )}

            {pay === 'card' && (
              <SectionCard T={T} title="Dados do cartão">
                <Field T={T} label="Número" value="•••• •••• •••• 4242" mono={mono} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <Field T={T} label="Validade" value="04/29" mono={mono} />
                  <Field T={T} label="CVV" value="•••" mono={mono} />
                </div>
                <Field T={T} label="Parcelas" value="3× de R$ 86,46 sem juros" mono={mono} />
              </SectionCard>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <SectionCard T={T} title="Resumo do pedido">
              {(cart.length ? cart : [{ name: 'Espuma D33 — 10cm', sku: 'ESP-D33-10', qty: 2.5, unit: 'M2', basePrice: 89.90, swatch: 'linear-gradient(135deg, #d9c89a 0%, #b59c6a 100%)' }]).map((it, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderTop: i ? `1px solid ${T.border}` : 'none' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 6, background: it.swatch, flex: '0 0 auto' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: T.ink }}>{it.name}</div>
                    <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: mono }}>{it.qty.toFixed(1).replace('.', ',')} {it.unit === 'M2' ? 'm²' : 'm'}</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>R$ {(it.basePrice * it.qty).toFixed(2).replace('.', ',')}</div>
                </div>
              ))}
            </SectionCard>

            <SectionCard T={T} title="Total">
              <div style={{ fontSize: 13, fontFamily: mono }}>
                {[['Subtotal', subtotal],['Frete · SEDEX', 24.90],...(pay === 'pix' ? [['Desconto Pix · -5%', -subtotal * 0.05]] : [])].map(([l,v], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', color: T.inkSoft }}>
                    <span>{l}</span>
                    <span style={{ fontVariantNumeric: 'tabular-nums', color: v < 0 ? '#16A34A' : T.ink }}>{v < 0 ? '-' : ''}R$ {Math.abs(v).toFixed(2).replace('.', ',')}</span>
                  </div>
                ))}
                <div style={{ borderTop: `1px solid ${T.border}`, marginTop: 8, paddingTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 700, color: T.ink }}>
                  <span>Total</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums', color: isDark ? T.accent : T.ink }}>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            </SectionCard>
          </div>
        )}
      </div>

      {/* Sticky bottom */}
      <div style={{ position: 'absolute', bottom: 78, left: 0, right: 0, padding: '12px 16px', background: T.bg, borderTop: `1px solid ${T.border}`, display: 'flex', gap: 8 }}>
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} style={{ width: 50, height: 50, background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 10, color: T.ink, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconChevLeft size={18} />
          </button>
        )}
        <button onClick={() => step < 3 ? setStep(step + 1) : go('home')} style={{ flex: 1, height: 50, background: ctaBg, color: ctaInk, border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {step < 3 ? 'Continuar' : 'Confirmar pedido'} <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

const SectionCard = ({ T, title, children }) => (
  <div style={{ marginTop: 14, padding: 14, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10 }}>
    <div style={{ fontSize: 11, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>{title}</div>
    {children}
  </div>
);

const Field = ({ T, label, value, mono }) => (
  <div style={{ padding: '10px 0', borderBottom: `1px solid ${T.border}` }}>
    <div style={{ fontSize: 10, color: T.inkMuted, fontFamily: mono, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
    <div style={{ fontSize: 13, color: T.ink, marginTop: 2 }}>{value}</div>
  </div>
);

window.CartScreen = CartScreen;
window.CheckoutScreen = CheckoutScreen;

// ===== components/phone-app.jsx =====
// App shell — wires up the 3 directions with shared screens

function PhoneApp({ dirKey }) {
  const T = dirKey === 'A' ? A_TOKENS : dirKey === 'B' ? B_TOKENS : C_TOKENS;
  const S = dirKey === 'A' ? a_st : dirKey === 'B' ? b_st : c_st;

  const [screen, setScreen] = React.useState('home');
  const [history, setHistory] = React.useState(['home']);
  const [activeProduct, setActiveProduct] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [tab, setTab] = React.useState('home');

  const go = (s, payload) => {
    if (s === 'back') {
      setHistory(h => {
        const nh = h.slice(0, -1);
        const next = nh[nh.length - 1] || 'home';
        setScreen(next);
        return nh.length ? nh : ['home'];
      });
      return;
    }
    if (s === 'product') setActiveProduct(payload);
    setHistory(h => [...h, s]);
    setScreen(s);
    if (['home','list','cart','account'].includes(s)) setTab(s === 'list' ? 'list' : s === 'cart' ? 'cart' : s === 'account' ? 'account' : 'home');
  };

  const addToCart = (item) => {
    setCart(c => {
      const ex = c.findIndex(x => x.id === item.id);
      if (ex >= 0) return c.map((x,i) => i === ex ? { ...x, qty: x.qty + item.qty } : x);
      return [...c, item];
    });
  };

  const showBack = !['home'].includes(screen);
  const isDark = dirKey === 'C';

  let Body;
  if (screen === 'home') Body = dirKey === 'A' ? <A_Home go={go} /> : dirKey === 'B' ? <B_Home go={go} /> : <C_Home go={go} />;
  else if (screen === 'list') Body = <ListScreen T={T} S={S} go={go} dirKey={dirKey} />;
  else if (screen === 'product' && activeProduct) Body = <ProductScreen T={T} S={S} go={go} p={activeProduct} dirKey={dirKey} addToCart={addToCart} />;
  else if (screen === 'cart') Body = <CartScreen T={T} S={S} go={go} cart={cart} setCart={setCart} dirKey={dirKey} />;
  else if (screen === 'checkout') Body = <CheckoutScreen T={T} S={S} go={go} cart={cart} dirKey={dirKey} />;
  else Body = <div style={{ padding: 30, color: T.inkMuted }}>—</div>;

  return (
    <div style={S.frame} data-screen-label={`${dirKey}-${screen}`}>
      {/* status bar */}
      <div style={{ ...S.statusBar, color: isDark ? T.ink : T.ink }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12 }}>
          <span>●●●●●</span>
          <span>📶</span>
          <span style={{ width: 22, height: 11, border: `1px solid currentColor`, borderRadius: 3, position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'absolute', inset: 1, background: 'currentColor', width: '80%', borderRadius: 1 }} />
          </span>
        </span>
      </div>

      {/* top bar */}
      <div style={S.topBar}>
        {showBack ? (
          <button onClick={() => go('back')} style={S.iconBtn}><IconChevLeft size={20} /></button>
        ) : (
          <div style={{ ...S.logo, display: 'flex', alignItems: 'center', gap: 6 }}>
            {dirKey === 'C' && <span style={{ width: 8, height: 8, background: T.accent, borderRadius: 2 }} />}
            {dirKey === 'C' ? 'ESPUMATEX' : 'Espumatex'}
          </div>
        )}
        <div style={{ display: 'flex', gap: 4 }}>
          {!showBack && <button style={S.iconBtn}><IconSearch size={18} /></button>}
          <button onClick={() => go('cart')} style={{ ...S.iconBtn, position: 'relative' }}>
            <IconCart size={18} />
            {cart.length > 0 && (
              <span style={{ position: 'absolute', top: 4, right: 4, width: 16, height: 16, borderRadius: '50%', background: isDark ? T.accent : '#E8FF52', color: '#0E0E10', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* body */}
      {Body}

      {/* tab bar */}
      <div style={S.tabbar}>
        {[
          { k: 'home', icon: <IconGrid size={20} />, l: 'Início', s: 'home' },
          { k: 'list', icon: <IconLayers size={20} />, l: 'Catálogo', s: 'list' },
          { k: 'cart', icon: <IconCart size={20} />, l: 'Carrinho', s: 'cart' },
          { k: 'account', icon: <IconUser size={20} />, l: 'Conta', s: 'account' },
        ].map(t => (
          <button key={t.k} onClick={() => go(t.s)} style={S.tab(tab === t.k)}>
            {t.icon}
            <span>{t.l}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

window.PhoneApp = PhoneApp;
