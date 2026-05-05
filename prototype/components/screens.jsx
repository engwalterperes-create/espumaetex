// Shared screens — Listing, Product Detail, Cart, Checkout
// Each takes tokens (T) and styles (st) so they can render in any direction.

function ListingScreen({ T, st, go, dir }) {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const products = ESPUMATEX_PRODUCTS;
  const isC = dir === 'C';
  const isB = dir === 'B';
  const monoFont = T.mono || T.font;
  const Card = dir === 'A' ? A_ProductCard : dir === 'B' ? B_ProductCard : C_ProductCard;

  return (
    <div style={st.scroll}>
      <div style={{ padding: isB ? '12px 20px 16px' : '16px 16px 12px', borderBottom: isB ? 'none' : `1px solid ${T.border}` }}>
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', color: T.inkSoft, fontSize: 12, padding: 0, fontFamily: 'inherit', cursor: 'pointer', marginBottom: 10 }}>
          <IconChevLeft size={14} /> Início
        </button>
        <h1 style={{ margin: 0, fontFamily: isB ? T.serif : (isC ? monoFont : T.font), fontSize: isB ? 32 : (isC ? 24 : 26), fontWeight: isB ? 400 : (isC ? 700 : 600), letterSpacing: '-0.03em', textTransform: isC ? 'uppercase' : 'none' }}>
          Espumas
        </h1>
        <div style={{ fontSize: 12, color: T.inkMuted, marginTop: 4, fontFamily: monoFont, fontVariantNumeric: 'tabular-nums' }}>
          {products.length} produtos · D20–D45
        </div>
      </div>

      {/* Filter chips */}
      <div style={{ padding: '12px 16px', display: 'flex', gap: 6, overflowX: 'auto', borderBottom: `1px solid ${T.border}`, background: T.bg }}>
        <button onClick={() => setFilterOpen(true)} style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px', borderRadius: isC ? 4 : 999, border: `1px solid ${T.ink}`, background: T.ink, color: T.bg, fontSize: 12, fontWeight: 500, fontFamily: monoFont, cursor: 'pointer', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.06em' : 0 }}>
          <IconFilter size={13} /> Filtros · 2
        </button>
        {['D33', '5–10cm', '1,40m'].map((f) => (
          <button key={f} style={{ flex: '0 0 auto', padding: '7px 12px', borderRadius: isC ? 4 : 999, border: `1px solid ${T.borderStrong || T.border}`, background: T.surface, color: T.ink, fontSize: 12, fontFamily: monoFont, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
            {f} <IconClose size={11} />
          </button>
        ))}
      </div>

      <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isB ? 14 : 12 }}>
        {products.map((p) => <Card key={p.id} p={p} onClick={() => go('product', p)} />)}
      </div>

      {filterOpen && (
        <div onClick={() => setFilterOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 30 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: T.surface, borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: '20px 16px 32px', maxHeight: '85%', overflowY: 'auto', color: T.ink }}>
            <div style={{ width: 36, height: 4, background: T.borderStrong || T.border, borderRadius: 999, margin: '0 auto 16px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', fontFamily: isB ? T.serif : T.font }}>Filtros</h3>
              <button onClick={() => setFilterOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: T.inkMuted, fontFamily: 'inherit', fontSize: 13 }}>Limpar</button>
            </div>
            {[
              { l: 'Densidade', opts: ['D20', 'D28', 'D33', 'D45'], sel: ['D33'] },
              { l: 'Espessura', opts: ['3 cm', '5 cm', '8 cm', '10 cm', '15 cm'], sel: [] },
              { l: 'Largura do rolo', opts: ['1,40m', '1,60m', '1,90m'], sel: ['1,40m'] },
              { l: 'Faixa de preço', opts: ['até R$50', 'R$50–100', 'R$100–200'], sel: [] },
            ].map((g) => (
              <div key={g.l} style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 11, fontFamily: monoFont, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{g.l}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {g.opts.map((o) => {
                    const active = g.sel.includes(o);
                    return (
                      <button key={o} style={{ padding: '7px 13px', borderRadius: isC ? 4 : 999, border: `1px solid ${active ? T.ink : (T.borderStrong || T.border)}`, background: active ? T.ink : T.surface, color: active ? T.bg : T.ink, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer' }}>
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <button onClick={() => setFilterOpen(false)} style={{ width: '100%', height: 50, background: T.accent || T.ink, color: T.accentInk || T.bg, border: 'none', borderRadius: isC ? 6 : 12, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', marginTop: 8, cursor: 'pointer', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.06em' : 0 }}>
              Mostrar 8 resultados
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ───────── PRODUCT (with cut configurator) ─────────
function ProductScreen({ T, st, go, dir, p, addToCart }) {
  const [width, setWidth] = React.useState(p?.width || 1.40);
  const [length, setLength] = React.useState(2.0);
  const [qty, setQty] = React.useState(p?.unit === 'UNIT' ? 1 : 0);
  const [tab, setTab] = React.useState('ficha');

  const isC = dir === 'C';
  const isB = dir === 'B';
  const monoFont = T.mono || T.font;

  const isM2 = p.unit === 'M2';
  const isM = p.unit === 'M';
  const totalQty = isM2 ? (width * length) : (isM ? length : qty);
  const total = (totalQty * p.basePrice);
  const totalLabel = total.toFixed(2).replace('.', ',');

  return (
    <div style={st.scroll}>
      <div style={{ aspectRatio: '1', background: p.swatch, position: 'relative' }}>
        <button onClick={() => go('list')} style={{ position: 'absolute', top: 12, left: 12, width: 38, height: 38, borderRadius: '50%', border: 'none', background: T.bg, color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IconChevLeft size={18} />
        </button>
        <button style={{ position: 'absolute', top: 12, right: 12, width: 38, height: 38, borderRadius: '50%', border: 'none', background: T.bg, color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <IconHeart size={18} />
        </button>
        <span style={{ position: 'absolute', bottom: 12, left: 12, fontSize: 10, fontFamily: monoFont, background: T.bg, color: T.ink, padding: '5px 9px', borderRadius: 4, letterSpacing: '0.06em' }}>
          {p.sku}
        </span>
      </div>

      <div style={{ padding: '20px 16px 16px' }}>
        <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: monoFont, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.category}</div>
        <h1 style={{ margin: '6px 0 0', fontSize: isB ? 28 : 24, fontWeight: isB ? 400 : 600, letterSpacing: '-0.025em', fontFamily: isB ? T.serif : T.font, lineHeight: 1.15 }}>{p.name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
          <div style={{ display: 'flex', gap: 1, color: T.accent || '#F5A623' }}>
            {[1, 2, 3, 4, 5].map((i) => <IconStar key={i} size={13} fill="currentColor" sw={0} />)}
          </div>
          <span style={{ fontSize: 12, color: T.inkSoft, fontFamily: monoFont, fontVariantNumeric: 'tabular-nums' }}>{p.rating} · {p.reviews} avaliações</span>
        </div>

        <div style={{ marginTop: 16, padding: '14px 16px', background: T.surface, borderRadius: 10, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 11, color: T.inkMuted, fontFamily: monoFont }}>a partir de</span>
          <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', fontFamily: isC ? monoFont : T.font, color: isC ? T.accent : T.ink }}>R$ {p.basePrice.toFixed(2).replace('.', ',')}</span>
          <span style={{ fontSize: 12, color: T.inkMuted, fontFamily: monoFont }}>/ {p.unit.toLowerCase()}</span>
        </div>
      </div>

      {/* CUT CONFIGURATOR */}
      <div style={{ margin: '0 16px 16px', padding: '18px', border: `1px solid ${T.borderStrong || T.border}`, borderRadius: 12, background: T.surface }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <IconScissors size={16} />
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Configurar corte</span>
          <span style={{ marginLeft: 'auto', fontSize: 10, fontFamily: monoFont, color: T.accent || T.ink, background: isC ? 'transparent' : (T.accentSoft || T.surface), padding: '3px 7px', borderRadius: 4, border: isC ? `1px solid ${T.accent}` : 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {p.unit === 'M2' ? 'm²' : p.unit === 'M' ? 'metro' : 'unidade'}
          </span>
        </div>

        {/* Visual ruler */}
        <div style={{ position: 'relative', height: 140, background: p.swatch, borderRadius: 6, overflow: 'hidden', marginBottom: 14 }}>
          {/* Cut lines */}
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, transparent 0 8px, rgba(255,255,255,0.05) 8px 9px)' }} />
          {/* Dashed cut indicator */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 0, borderLeft: `2px dashed ${T.bg}`, opacity: 0.7 }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 0, borderTop: `2px dashed ${T.bg}`, opacity: 0.7 }} />
          {/* Dimensions */}
          <div style={{ position: 'absolute', top: 8, left: 8, right: 8, display: 'flex', justifyContent: 'space-between', fontFamily: monoFont, fontSize: 11, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
            <span>↔ {width.toFixed(2)}m</span>
            <span>↕ {length.toFixed(1)}m</span>
          </div>
          <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', fontFamily: monoFont, fontSize: 22, fontWeight: 700, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.5)', letterSpacing: '-0.02em' }}>
            {(width * length).toFixed(2)} m²
          </div>
        </div>

        {/* Width control (fixed for fabric) */}
        {isM2 && (
          <SliderRow label="Largura" value={width} unit="m" min={0.5} max={p.width || 1.40} step={0.1} onChange={setWidth} disabled T={T} mono={monoFont} note={`Largura do rolo (fixa)`} />
        )}

        {/* Length control */}
        <SliderRow
          label="Comprimento"
          value={length}
          unit="m"
          min={0.5}
          max={10}
          step={0.5}
          onChange={setLength}
          T={T}
          mono={monoFont}
          note="Mínimo 0,5m · passo 0,5m"
        />

        {/* Calculation */}
        <div style={{ marginTop: 16, padding: '12px 14px', background: T.bg, borderRadius: 8, fontFamily: monoFont, fontSize: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: T.inkSoft, marginBottom: 4 }}>
            <span>{isM2 ? `${width.toFixed(2)} × ${length.toFixed(1)} m` : `${length.toFixed(1)} m`}</span>
            <span>× R$ {p.basePrice.toFixed(2).replace('.', ',')}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 11, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Total</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: isC ? T.accent : T.ink, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>R$ {totalLabel}</span>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div style={{ margin: '0 16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          [<IconTruck size={18} />, 'Envio 48h'],
          [<IconShield size={18} />, 'NF-e'],
          [<IconScissors size={18} />, 'Corte 0,5m'],
        ].map(([ic, l], i) => (
          <div key={i} style={{ padding: 10, border: `1px solid ${T.border}`, borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: T.inkSoft, fontSize: 11, fontFamily: monoFont, textAlign: 'center' }}>
            {ic}
            <span>{l}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ borderTop: `1px solid ${T.border}`, display: 'flex' }}>
        {['ficha', 'descricao', 'avaliacoes'].map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '14px 0', background: 'transparent', border: 'none', borderBottom: `2px solid ${tab === t ? T.ink : 'transparent'}`, color: tab === t ? T.ink : T.inkMuted, fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: monoFont, cursor: 'pointer' }}>
            {t === 'ficha' ? 'Ficha' : t === 'descricao' ? 'Descrição' : 'Avaliações'}
          </button>
        ))}
      </div>
      <div style={{ padding: '18px 16px 24px' }}>
        {tab === 'ficha' && (
          <div style={{ fontFamily: monoFont, fontSize: 12 }}>
            {[
              ['Densidade', p.density || '—'],
              ['Espessura', p.thickness ? `${p.thickness} cm` : '—'],
              ['Largura', p.width ? `${p.width} m` : '—'],
              ['Gramatura', p.grammage ? `${p.grammage} g/m²` : '—'],
              ['SKU', p.sku],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: `1px solid ${T.border}` }}>
                <span style={{ color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 11 }}>{k}</span>
                <span style={{ color: T.ink }}>{v}</span>
              </div>
            ))}
          </div>
        )}
        {tab === 'descricao' && <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: T.inkSoft }}>{p.short} Produzida com matéria-prima nacional, atende estofamento residencial e comercial. Embalada em rolo, etiquetada com SKU e data de fabricação.</p>}
        {tab === 'avaliacoes' && (
          <div>
            {[
              { n: 'Marina R.', d: 'há 3 dias', s: 5, t: 'Encaixou perfeito no sofá. Corte preciso.' },
              { n: 'Pedro L.', d: 'há 1 semana', s: 5, t: 'Densidade exata, espessura uniforme.' },
            ].map((r, i) => (
              <div key={i} style={{ padding: '14px 0', borderBottom: `1px solid ${T.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                  <strong>{r.n}</strong>
                  <span style={{ color: T.inkMuted, fontSize: 11 }}>{r.d}</span>
                </div>
                <div style={{ display: 'flex', gap: 1, color: T.accent || '#F5A623', margin: '4px 0' }}>
                  {[...Array(r.s)].map((_, i) => <IconStar key={i} size={11} fill="currentColor" sw={0} />)}
                </div>
                <p style={{ margin: 0, fontSize: 13, color: T.inkSoft, lineHeight: 1.45 }}>{r.t}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky add to cart */}
      <div style={{ position: 'sticky', bottom: 0, background: T.surface, borderTop: `1px solid ${T.border}`, padding: '14px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ flex: '0 0 auto' }}>
          <div style={{ fontSize: 10, color: T.inkMuted, fontFamily: monoFont, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Total</div>
          <div style={{ fontSize: 18, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em', fontFamily: isC ? monoFont : T.font }}>R$ {totalLabel}</div>
        </div>
        <button onClick={() => { addToCart && addToCart({ ...p, qty: totalQty, total }); go('cart'); }} style={{ flex: 1, height: 50, background: T.accent || T.ink, color: T.accentInk || T.bg, border: 'none', borderRadius: isC ? 6 : 12, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.06em' : 0 }}>
          <IconCart size={16} /> Adicionar
        </button>
      </div>
    </div>
  );
}

function SliderRow({ label, value, unit, min, max, step, onChange, disabled, T, mono, note }) {
  return (
    <div style={{ marginBottom: 14, opacity: disabled ? 0.6 : 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
        <span style={{ fontSize: 12, color: T.inkSoft, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: mono }}>{label}</span>
        <span style={{ fontFamily: mono, fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{value.toFixed(unit === 'm' ? 2 : 0)} {unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        disabled={disabled}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: T.accent || T.ink, cursor: disabled ? 'not-allowed' : 'pointer' }}
      />
      <div style={{ fontSize: 10, color: T.inkMuted, fontFamily: mono, marginTop: 2 }}>{note}</div>
    </div>
  );
}

// ───────── CART ─────────
function CartScreen({ T, st, go, dir, items }) {
  const isC = dir === 'C';
  const isB = dir === 'B';
  const monoFont = T.mono || T.font;

  const sample = items?.length ? items : [
    { ...ESPUMATEX_PRODUCTS[0], qty: 2.8, total: 251.72 },
    { ...ESPUMATEX_PRODUCTS[3], qty: 1.5, total: 138 },
  ];
  const subtotal = sample.reduce((s, i) => s + i.total, 0);
  const shipping = 24.50;

  return (
    <div style={st.scroll}>
      <div style={{ padding: '16px 16px 12px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => go('home')} style={{ background: 'transparent', border: 'none', color: T.ink, cursor: 'pointer', padding: 4 }}>
          <IconChevLeft size={20} />
        </button>
        <h1 style={{ margin: 0, fontSize: isB ? 24 : 20, fontWeight: isB ? 400 : 600, letterSpacing: '-0.02em', fontFamily: isB ? T.serif : T.font }}>Carrinho</h1>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: T.inkMuted, fontFamily: monoFont }}>{sample.length} itens</span>
      </div>

      <div style={{ padding: '12px 16px' }}>
        {sample.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: `1px solid ${T.border}` }}>
            <div style={{ width: 80, height: 80, background: it.swatch, borderRadius: 8, flex: '0 0 80px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 4, left: 4, fontSize: 9, fontFamily: monoFont, background: T.bg, color: T.ink, padding: '2px 5px', borderRadius: 3 }}>{it.sku}</span>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.25 }}>{it.name}</div>
              <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: monoFont, marginTop: 4 }}>
                <IconScissors size={10} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {it.qty.toFixed(2)} {it.unit?.toLowerCase()} · R$ {it.basePrice.toFixed(2).replace('.', ',')}/{it.unit?.toLowerCase()}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${T.border}`, borderRadius: 6, fontFamily: monoFont }}>
                  <button style={{ width: 28, height: 28, border: 'none', background: 'transparent', color: T.ink, cursor: 'pointer' }}><IconMinus size={12} /></button>
                  <span style={{ padding: '0 8px', fontSize: 12, fontVariantNumeric: 'tabular-nums', minWidth: 32, textAlign: 'center' }}>{it.qty.toFixed(1)}</span>
                  <button style={{ width: 28, height: 28, border: 'none', background: 'transparent', color: T.ink, cursor: 'pointer' }}><IconPlus size={12} /></button>
                </div>
                <span style={{ fontSize: 15, fontWeight: 600, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>R$ {it.total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
          </div>
        ))}

        {/* CEP / Frete */}
        <div style={{ margin: '16px 0', padding: 14, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10 }}>
          <div style={{ fontSize: 12, color: T.inkSoft, fontFamily: monoFont, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Frete</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input placeholder="CEP" defaultValue="01310-100" style={{ flex: 1, height: 40, padding: '0 12px', border: `1px solid ${T.border}`, borderRadius: 8, background: T.bg, color: T.ink, fontFamily: monoFont, fontSize: 13 }} />
            <button style={{ padding: '0 16px', background: T.ink, color: T.bg, border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Calcular</button>
          </div>
          <div style={{ marginTop: 10, padding: 10, background: T.bg, borderRadius: 6, fontSize: 12, fontFamily: monoFont, display: 'flex', justifyContent: 'space-between' }}>
            <span>SEDEX · 3 dias úteis</span>
            <strong>R$ 24,50</strong>
          </div>
        </div>

        {/* Cupom */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input placeholder="Cupom de desconto" style={{ flex: 1, height: 40, padding: '0 12px', border: `1px solid ${T.border}`, borderRadius: 8, background: T.surface, color: T.ink, fontFamily: 'inherit', fontSize: 13 }} />
          <button style={{ padding: '0 14px', background: 'transparent', color: T.ink, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Aplicar</button>
        </div>

        {/* Totals */}
        <div style={{ padding: 14, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: monoFont, fontSize: 13 }}>
          {[
            ['Subtotal', `R$ ${subtotal.toFixed(2).replace('.', ',')}`],
            ['Frete', `R$ ${shipping.toFixed(2).replace('.', ',')}`],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', color: T.inkSoft }}>
              <span>{k}</span><span style={{ fontVariantNumeric: 'tabular-nums' }}>{v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 0', borderTop: `1px solid ${T.border}`, marginTop: 8, alignItems: 'baseline' }}>
            <span style={{ fontSize: 12, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Total</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: isC ? T.accent : T.ink, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>R$ {(subtotal + shipping).toFixed(2).replace('.', ',')}</span>
          </div>
        </div>

        <button onClick={() => go('checkout')} style={{ width: '100%', height: 54, marginTop: 16, marginBottom: 24, background: T.accent || T.ink, color: T.accentInk || T.bg, border: 'none', borderRadius: isC ? 6 : 12, fontSize: 15, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.08em' : 0 }}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

// ───────── CHECKOUT ─────────
function CheckoutScreen({ T, st, go, dir }) {
  const [payment, setPayment] = React.useState('pix');
  const [step] = React.useState(2);
  const isC = dir === 'C';
  const isB = dir === 'B';
  const monoFont = T.mono || T.font;

  return (
    <div style={st.scroll}>
      <div style={{ padding: '16px 16px 12px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => go('cart')} style={{ background: 'transparent', border: 'none', color: T.ink, cursor: 'pointer', padding: 4 }}>
          <IconChevLeft size={20} />
        </button>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', fontFamily: isB ? T.serif : T.font }}>Finalizar</h1>
      </div>

      {/* Stepper */}
      <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: monoFont, fontSize: 11 }}>
        {['Endereço', 'Pagamento', 'Confirmar'].map((s, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: done || active ? (T.accent || T.ink) : 'transparent', color: done || active ? (T.accentInk || T.bg) : T.inkMuted, border: done || active ? 'none' : `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>
                  {done ? <IconCheck size={12} /> : (i + 1)}
                </div>
                <span style={{ color: active ? T.ink : T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s}</span>
              </div>
              {i < 2 && <div style={{ flex: 1, height: 1, background: T.border }} />}
            </React.Fragment>
          );
        })}
      </div>

      {/* Endereço resumo */}
      <div style={{ margin: '0 16px 14px', padding: 14, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: T.inkMuted, fontFamily: monoFont, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Entrega em</span>
          <button style={{ background: 'transparent', border: 'none', color: T.accent || T.ink, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}>Trocar</button>
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>Marina Reis</div>
        <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.4 }}>Rua das Palmeiras, 421, Apt 92 · Pinheiros, São Paulo — SP, 05422-030</div>
      </div>

      {/* Pagamento */}
      <div style={{ padding: '0 16px' }}>
        <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: monoFont, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Pagamento</div>
        {[
          { id: 'pix', label: 'Pix', sub: '5% de desconto · aprovação imediata', extra: '−R$ 18,89' },
          { id: 'card', label: 'Cartão de crédito', sub: 'até 6× sem juros', extra: '6× R$ 64,32' },
          { id: 'boleto', label: 'Boleto bancário', sub: 'aprovação em 1–2 dias úteis', extra: null },
        ].map((m) => (
          <button key={m.id} onClick={() => setPayment(m.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: 14, marginBottom: 8, background: T.surface, border: `1.5px solid ${payment === m.id ? (T.accent || T.ink) : T.border}`, borderRadius: 10, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', border: `1.5px solid ${payment === m.id ? (T.accent || T.ink) : T.borderStrong}`, background: payment === m.id ? (T.accent || T.ink) : 'transparent', flex: '0 0 18px', position: 'relative' }}>
              {payment === m.id && <div style={{ position: 'absolute', inset: 4, borderRadius: '50%', background: T.accentInk || T.bg }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: T.ink }}>{m.label}</div>
              <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 2 }}>{m.sub}</div>
            </div>
            {m.extra && <span style={{ fontSize: 12, color: m.id === 'pix' ? (T.good || T.accent) : T.inkSoft, fontFamily: monoFont, fontWeight: 600 }}>{m.extra}</span>}
          </button>
        ))}
      </div>

      {/* Resumo */}
      <div style={{ margin: '20px 16px 16px', padding: 14, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: monoFont, fontSize: 13 }}>
        <div style={{ fontSize: 11, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Resumo</div>
        {[
          ['2 itens', 'R$ 389,72'],
          ['Frete', 'R$ 24,50'],
          ...(payment === 'pix' ? [['Desconto Pix (5%)', '−R$ 18,89']] : []),
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', color: T.inkSoft }}>
            <span>{k}</span><span style={{ fontVariantNumeric: 'tabular-nums' }}>{v}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 0', borderTop: `1px solid ${T.border}`, marginTop: 8, alignItems: 'baseline' }}>
          <strong style={{ fontFamily: 'inherit' }}>Total</strong>
          <span style={{ fontSize: 22, fontWeight: 700, color: isC ? T.accent : T.ink, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>R$ {payment === 'pix' ? '395,33' : '414,22'}</span>
        </div>
      </div>

      <div style={{ padding: '0 16px 24px' }}>
        <button onClick={() => go('home')} style={{ width: '100%', height: 54, background: T.accent || T.ink, color: T.accentInk || T.bg, border: 'none', borderRadius: isC ? 6 : 12, fontSize: 15, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.08em' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {payment === 'pix' ? 'Pagar com Pix' : payment === 'card' ? 'Continuar para cartão' : 'Gerar boleto'} <IconArrowRight size={16} />
        </button>
        <div style={{ marginTop: 10, fontSize: 11, color: T.inkMuted, textAlign: 'center', fontFamily: monoFont, lineHeight: 1.5 }}>
          <IconShield size={11} style={{ verticalAlign: 'middle', marginRight: 4 }} />
          Pagamento seguro · NF-e emitida automaticamente
        </div>
      </div>
    </div>
  );
}

window.ListingScreen = ListingScreen;
window.ProductScreen = ProductScreen;
window.CartScreen = CartScreen;
window.CheckoutScreen = CheckoutScreen;
