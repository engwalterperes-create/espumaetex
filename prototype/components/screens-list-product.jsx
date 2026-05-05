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
