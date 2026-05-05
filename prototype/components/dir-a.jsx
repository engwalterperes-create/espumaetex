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
