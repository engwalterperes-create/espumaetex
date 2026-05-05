// Product detail with cut configurator
function ProductScreen({ T, st, go, dir, addToCart, p }) {
  const [length, setLength] = React.useState(2.0);
  const [width, setWidth] = React.useState(1.40);
  const [qty, setQty] = React.useState(1);
  const isC = dir === 'C';
  const isB = dir === 'B';
  const isA = dir === 'A';
  const mono = T.mono || T.font;

  const isM2 = p.unit === 'M2';
  const isM = p.unit === 'M';
  const computedQty = isM2 ? (length * width) : length;
  const total = (computedQty * qty * p.basePrice).toFixed(2).replace('.', ',');

  return (
    <div style={st.scroll}>
      {/* Image */}
      <div style={{ aspectRatio: '1', background: p.swatch, position: 'relative' }}>
        <button onClick={() => go('home')} style={{ position: 'absolute', top: 12, left: 12, width: 36, height: 36, borderRadius: isC ? 6 : '50%', background: 'rgba(255,255,255,0.92)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IconChevLeft size={16} />
        </button>
        <button style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: isC ? 6 : '50%', background: 'rgba(255,255,255,0.92)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IconHeart size={16} />
        </button>
        <span style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: mono, fontSize: 11, background: 'rgba(255,255,255,0.95)', padding: '4px 8px', borderRadius: 4 }}>{p.sku}</span>
      </div>

      {/* Title block */}
      <div style={{ padding: '20px 16px 16px', borderBottom: `1px solid ${T.border}` }}>
        {p.badge && <div style={{ fontSize: 10, fontFamily: mono, color: T.accent || T.ink, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{p.badge}</div>}
        <h1 style={{ margin: 0, fontFamily: isB ? T.serif : T.font, fontSize: isB ? 30 : 22, fontWeight: isB ? 400 : 600, letterSpacing: '-0.025em', color: T.ink }}>{p.name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 12, color: T.inkSoft }}>
          <IconStar size={13} fill="currentColor" /> {p.rating} <span style={{ color: T.inkMuted }}>· {p.reviews} avaliações</span>
        </div>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: isC ? T.accent : T.ink, fontFamily: mono, fontVariantNumeric: 'tabular-nums' }}>R$ {p.basePrice.toFixed(2).replace('.', ',')}</span>
          <span style={{ fontSize: 13, color: T.inkMuted, fontFamily: mono }}>/ {p.unit.toLowerCase()}</span>
        </div>
        <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.5, color: T.inkSoft }}>{p.short}</p>
      </div>

      {/* Specs */}
      <div style={{ padding: '16px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontSize: 11, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Especificações</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            p.density && ['Densidade', p.density],
            p.thickness && ['Espessura', `${p.thickness} cm`],
            p.grammage && ['Gramatura', `${p.grammage} g/m²`],
            p.width && ['Largura', `${p.width.toFixed(2)}m`],
            ['Origem', 'Brasil'],
            ['Unidade', p.unit],
          ].filter(Boolean).map(([k, v]) => (
            <div key={k} style={{ padding: '10px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: isC ? 4 : 8 }}>
              <div style={{ fontSize: 10, color: T.inkMuted, fontFamily: mono, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2, color: T.ink, fontFamily: mono, fontVariantNumeric: 'tabular-nums' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CUT CONFIGURATOR — coração do produto */}
      <div style={{ padding: '20px 16px', borderBottom: `1px solid ${T.border}`, background: T.surface }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <IconScissors size={16} />
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', color: T.ink }}>Corte sob medida</div>
          <div style={{ marginLeft: 'auto', fontSize: 10, fontFamily: mono, color: T.inkMuted, padding: '3px 7px', background: T.bg, borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            mín 0,5{isM2 ? 'm²' : 'm'}
          </div>
        </div>

        {/* Visual ruler */}
        <div style={{ position: 'relative', height: 110, background: p.swatch, borderRadius: isC ? 4 : 10, overflow: 'hidden', marginBottom: 14 }}>
          <div style={{ position: 'absolute', top: 8, left: 10, fontFamily: mono, fontSize: 11, color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            {width.toFixed(2)}m × {length.toFixed(2)}m
          </div>
          <div style={{ position: 'absolute', bottom: 8, right: 10, fontFamily: mono, fontSize: 12, color: '#fff', fontWeight: 700, textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            = {(width * length).toFixed(2)} m²
          </div>
          {/* tick marks */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 20px)' }} />
        </div>

        {/* Sliders */}
        {isM2 && (
          <DimSlider label="Largura" T={T} mono={mono} isC={isC} value={width} setValue={setWidth} min={0.5} max={p.width || 2.0} step={0.1} suffix="m" />
        )}
        <DimSlider label={isM2 ? 'Comprimento' : 'Quantidade'} T={T} mono={mono} isC={isC} value={length} setValue={setLength} min={0.5} max={10} step={0.5} suffix="m" />

        {/* Total */}
        <div style={{ marginTop: 16, padding: 14, background: T.bg, border: `1px solid ${T.border}`, borderRadius: isC ? 4 : 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: mono, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Subtotal</div>
            <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 2, fontFamily: mono }}>{computedQty.toFixed(2)} {isM2 ? 'm²' : 'm'} × R$ {p.basePrice.toFixed(2).replace('.', ',')}</div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, fontFamily: mono, color: isC ? T.accent : T.ink, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
            R$ {total}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: 16, paddingBottom: 24 }}>
        <button onClick={() => { addToCart({ ...p, qty: computedQty, dims: { width, length }, total: computedQty * p.basePrice }); go('cart'); }} style={{ width: '100%', height: 52, background: isC ? T.accent : T.ink, color: isC ? T.accentInk : (T.bg || '#fff'), border: 'none', borderRadius: isC ? 6 : 12, fontSize: 14, fontWeight: 600, fontFamily: isC ? mono : 'inherit', cursor: 'pointer', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.06em' : 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <IconCart size={16} /> Adicionar ao carrinho
        </button>
        <button style={{ width: '100%', marginTop: 8, height: 46, background: 'transparent', color: T.ink, border: `1px solid ${T.borderStrong}`, borderRadius: isC ? 6 : 12, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>
          Calcular frete
        </button>
      </div>

      {/* Trust strip */}
      <div style={{ padding: '0 16px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          [IconTruck, 'Despacho 48h'],
          [IconShield, 'Compra segura'],
          [IconScissors, 'Corte preciso'],
          [IconBox, 'Embalagem reforçada'],
        ].map(([Ic, t], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 10, border: `1px solid ${T.border}`, borderRadius: isC ? 4 : 8, background: T.surface }}>
            <Ic size={16} />
            <span style={{ fontSize: 11, color: T.inkSoft }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DimSlider({ label, T, mono, isC, value, setValue, min, max, step, suffix }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <span style={{ fontSize: 12, color: T.inkSoft, fontFamily: mono, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
        <span style={{ fontSize: 16, fontWeight: 600, fontFamily: mono, fontVariantNumeric: 'tabular-nums', color: T.ink }}>{value.toFixed(2)}{suffix}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={() => setValue(Math.max(min, +(value - step).toFixed(2)))} style={{ width: 36, height: 36, borderRadius: isC ? 4 : 8, background: T.bg, border: `1px solid ${T.borderStrong}`, color: T.ink, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconMinus size={14} />
        </button>
        <div style={{ flex: 1, position: 'relative', height: 6, background: T.bg, borderRadius: 999, border: `1px solid ${T.border}` }}>
          <div style={{ position: 'absolute', top: -1, left: 0, height: 6, width: `${pct}%`, background: T.ink, borderRadius: 999 }} />
          <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(parseFloat(e.target.value))} style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', cursor: 'pointer' }} />
        </div>
        <button onClick={() => setValue(Math.min(max, +(value + step).toFixed(2)))} style={{ width: 36, height: 36, borderRadius: isC ? 4 : 8, background: T.bg, border: `1px solid ${T.borderStrong}`, color: T.ink, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconPlus size={14} />
        </button>
      </div>
    </div>
  );
}

window.ProductScreen = ProductScreen;
