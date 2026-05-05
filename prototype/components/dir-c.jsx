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
