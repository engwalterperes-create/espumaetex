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
