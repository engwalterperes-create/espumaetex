// Shared listing screen — minimal, parameterized
function ListingScreen({ T, st, go, dir }) {
  const products = ESPUMATEX_PRODUCTS;
  const isC = dir === 'C';
  const isB = dir === 'B';
  const Card = window[`${dir}_ProductCard`];
  const mono = T.mono || T.font;

  return (
    <div style={st.scroll}>
      <div style={{ padding: '14px 16px 10px', borderBottom: `1px solid ${T.border}` }}>
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'transparent', border: 'none', color: T.inkSoft, fontSize: 12, padding: 0, fontFamily: 'inherit', cursor: 'pointer', marginBottom: 8 }}>
          <IconChevLeft size={14} /> Voltar
        </button>
        <div style={{ fontFamily: isB ? T.serif : T.font, fontSize: isB ? 28 : 22, fontWeight: isB ? 400 : 600, letterSpacing: '-0.025em', color: T.ink, textTransform: isC ? 'uppercase' : 'none' }}>
          Espumas
        </div>
        <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 2, fontFamily: mono, fontVariantNumeric: 'tabular-nums' }}>{products.length} resultados</div>
      </div>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 6, padding: '12px 16px', overflowX: 'auto', borderBottom: `1px solid ${T.border}` }}>
        <button style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 5, padding: '7px 12px', borderRadius: isC ? 4 : 999, border: `1px solid ${T.ink}`, background: T.ink, color: isC ? T.accent : (T.bg || '#fff'), fontSize: 12, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>
          <IconFilter size={13} /> Filtros · 2
        </button>
        {['Densidade · D33', 'Espessura · 5–10cm'].map((f) => (
          <button key={f} style={{ flex: '0 0 auto', padding: '7px 12px', borderRadius: isC ? 4 : 999, border: `1px solid ${T.borderStrong}`, background: T.surface, color: T.ink, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
            {f} <IconClose size={11} />
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ padding: '14px 16px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isC ? 8 : 12 }}>
        {products.map((p) => <Card key={p.id} p={p} onClick={() => go('product', p)} />)}
      </div>
    </div>
  );
}

window.ListingScreen = ListingScreen;
