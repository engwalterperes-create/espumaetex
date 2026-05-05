// Shared screens — Listing, Product, Cart, Checkout (direction-agnostic)

function ListingScreen({ T, st, go, dir }) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(['Densidade · D33', 'Espessura · 5–10cm']);
  const products = ESPUMATEX_PRODUCTS;
  const isB = dir === 'B';
  const isC = dir === 'C';
  const mono = T.mono || T.font;

  const Card = dir === 'A' ? A_ProductCard : dir === 'B' ? B_ProductCard : C_ProductCard;

  return (
    <div style={st.scroll}>
      <div style={{ padding: isB ? '8px 20px 18px' : '12px 16px 12px' }}>
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'transparent', border: 'none', color: T.inkSoft, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer', padding: 0, marginBottom: 10 }}>
          <IconChevLeft size={14} /> voltar
        </button>
        <div style={{ fontFamily: isB ? T.serif : (isC ? mono : T.font), fontSize: isB ? 32 : 24, fontWeight: isB ? 400 : (isC ? 700 : 600), letterSpacing: '-0.03em', textTransform: isC ? 'uppercase' : 'none' }}>
          Espumas
        </div>
        <div style={{ fontSize: 12, color: T.inkMuted, marginTop: 4, fontFamily: mono, fontVariantNumeric: 'tabular-nums' }}>
          {products.length} produtos · D20–D45
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ padding: '0 16px 12px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        <button onClick={() => setOpen(true)} style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 999, border: `1px solid ${T.ink}`, background: T.ink, color: isC ? T.accent : (T.bg || '#fff'), fontSize: 12, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>
          <IconFilter size={13} /> Filtros · {active.length}
        </button>
        {active.map((f) => (
          <button key={f} onClick={() => setActive(active.filter((x) => x !== f))} style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', borderRadius: 999, border: `1px solid ${T.borderStrong || T.border}`, background: T.surface, color: T.ink, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer' }}>
            {f} <IconClose size={11} />
          </button>
        ))}
      </div>

      <div style={{ padding: '0 16px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${T.border}`, paddingTop: 10 }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'transparent', border: 'none', fontSize: 12, color: T.ink, fontFamily: 'inherit', cursor: 'pointer', padding: 0 }}>
          Relevância <IconChevDown size={13} />
        </button>
        <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: mono }}>vista em grade</div>
      </div>

      <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isB ? 14 : (isC ? 8 : 12) }}>
        {products.map((p) => <Card key={p.id} p={p} onClick={() => go('product', p)} />)}
      </div>

      {open && (
        <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40, display: 'flex', alignItems: 'flex-end' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', background: T.surface, color: T.ink, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: '18px 18px 28px', maxHeight: '80%', overflowY: 'auto' }}>
            <div style={{ width: 36, height: 4, background: T.borderStrong || T.border, borderRadius: 999, margin: '0 auto 14px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, fontFamily: isB ? T.serif : T.font }}>Filtros</h3>
              <button onClick={() => setActive([])} style={{ background: 'transparent', border: 'none', color: T.inkSoft, fontSize: 12, cursor: 'pointer' }}>limpar</button>
            </div>
            {[
              ['Densidade', ['D20', 'D28', 'D33', 'D45']],
              ['Espessura', ['3 cm', '5 cm', '8 cm', '10 cm', '15 cm']],
              ['Largura', ['1,40m', '1,60m', '1,90m']],
              ['Cor', ['Areia', 'Grafite', 'Creme', 'Preto']],
            ].map(([label, opts]) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {opts.map((o) => (
                    <button key={o} style={{ padding: '7px 13px', borderRadius: 999, border: `1px solid ${T.borderStrong || T.border}`, background: T.surface, color: T.ink, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer' }}>{o}</button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => setOpen(false)} style={{ width: '100%', height: 48, background: T.ink, color: isC ? T.accent : (T.bg || '#fff'), border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', marginTop: 4, cursor: 'pointer' }}>
              Mostrar 8 resultados
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ───────── PRODUCT — with cut configurator ─────────
function ProductScreen({ T, st, p, go, addToCart, dir }) {
  const [width, setWidth] = React.useState(p.width || 1.40);
  const [length, setLength] = React.useState(2.0);
  const [qty, setQty] = React.useState(1);
  const [imgIdx, setImgIdx] = React.useState(0);

  const isB = dir === 'B';
  const isC = dir === 'C';
  const mono = T.mono || T.font;
  const isM2 = p.unit === 'M2';
  const isM = p.unit === 'M';

  const total = isM2 ? (width * length * p.basePrice) : (length * p.basePrice * qty);
  const totalStr = total.toFixed(2).replace('.', ',');
  const measureStr = isM2 ? `${width.toFixed(2)}m × ${length.toFixed(2)}m` : `${length.toFixed(1)}m × ${qty}`;

  return (
    <div style={st.scroll}>
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '1', background: p.swatch }}>
        <button onClick={() => go('home')} style={{ position: 'absolute', top: 12, left: 12, width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#000' }}>
          <IconChevLeft size={18} />
        </button>
        <button style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#000' }}>
          <IconHeart size={17} />
        </button>
        {isC && (
          <div style={{ position: 'absolute', top: 14, left: 60, background: T.bg, color: T.accent, fontFamily: mono, fontSize: 10, padding: '4px 8px', borderRadius: 3, letterSpacing: '0.06em' }}>
            {p.sku}
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 4 }}>
          {[0, 1, 2, 3].map((i) => (
            <button key={i} onClick={() => setImgIdx(i)} style={{ width: i === imgIdx ? 16 : 6, height: 6, borderRadius: 3, background: i === imgIdx ? '#fff' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'width .15s' }} />
          ))}
        </div>
      </div>

      <div style={{ padding: '20px 18px 16px' }}>
        {!isC && <div style={{ fontSize: 10, fontFamily: mono, color: T.inkMuted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{p.sku}</div>}
        <h1 style={{ margin: 0, fontFamily: isB ? T.serif : (isC ? mono : T.font), fontSize: isB ? 30 : 24, fontWeight: isB ? 400 : (isC ? 700 : 600), letterSpacing: '-0.025em', lineHeight: 1.1, textTransform: isC ? 'uppercase' : 'none' }}>
          {p.name}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, fontSize: 12, color: T.inkSoft }}>
          <IconStar size={13} fill="currentColor" />
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{p.rating}</span>
          <span style={{ color: T.inkMuted }}>({p.reviews})</span>
          <span style={{ color: T.borderStrong || T.border }}>·</span>
          <span style={{ color: '#16A34A', fontWeight: 500 }}>● em estoque</span>
        </div>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <div style={{ fontSize: 28, fontWeight: 700, fontFamily: isC ? mono : T.font, letterSpacing: '-0.02em', color: isC ? T.accent : T.ink }}>
            R$ {p.basePrice.toFixed(2).replace('.', ',')}
          </div>
          <div style={{ fontSize: 13, color: T.inkMuted, fontFamily: mono }}>/ {p.unit.toLowerCase()}</div>
        </div>
        <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 4 }}>ou 3× sem juros no Pix</div>
      </div>

      {/* Specs grid */}
      <div style={{ margin: '0 18px 20px', border: `1px solid ${T.border}`, borderRadius: 10, overflow: 'hidden' }}>
        {[
          ['Densidade', p.density || '—'],
          ['Espessura', p.thickness ? `${p.thickness} cm` : '—'],
          ['Largura do rolo', p.width ? `${p.width.toString().replace('.', ',')} m` : '—'],
          ['Origem', 'São Paulo, BR'],
        ].filter(([, v]) => v !== '—' || true).map(([k, v], i) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 14px', borderTop: i ? `1px solid ${T.border}` : 'none', fontSize: 13 }}>
            <span style={{ color: T.inkSoft }}>{k}</span>
            <span style={{ fontWeight: 500, fontFamily: mono, fontVariantNumeric: 'tabular-nums' }}>{v}</span>
          </div>
        ))}
      </div>

      {/* CONFIGURADOR DE CORTE — destaque */}
      <div style={{ margin: '0 18px 20px', padding: 16, background: isC ? T.surface : (T.accentSoft || T.surface), border: `1px solid ${T.border}`, borderRadius: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <IconScissors size={15} />
          <div style={{ fontSize: 11, fontFamily: mono, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Corte sob medida</div>
        </div>
        <div style={{ fontSize: 12, color: T.inkSoft, marginBottom: 14 }}>
          Defina o tamanho exato. {isM2 ? 'Cobramos por m² da peça.' : 'Cortamos a partir de 0,5m.'}
        </div>

        {/* Visual representation */}
        <div style={{ aspectRatio: '16/9', background: T.surface, border: `1px dashed ${T.borderStrong || T.border}`, borderRadius: 8, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
          <div style={{ width: `${Math.min(width / 2.5 * 100, 90)}%`, height: `${Math.min(length / 3.5 * 100, 80)}%`, background: p.swatch, borderRadius: 4, position: 'relative', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div style={{ position: 'absolute', top: -18, left: 0, right: 0, textAlign: 'center', fontSize: 10, fontFamily: mono, color: T.inkMuted }}>
              ← {width.toFixed(2)}m →
            </div>
            <div style={{ position: 'absolute', right: -42, top: 0, bottom: 0, display: 'flex', alignItems: 'center', fontSize: 10, fontFamily: mono, color: T.inkMuted, writingMode: 'vertical-rl' }}>
              ↑ {length.toFixed(2)}m ↓
            </div>
          </div>
        </div>

        {isM2 && (
          <div style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontFamily: mono, color: T.inkSoft, marginBottom: 6 }}>
              <span>LARGURA</span><span style={{ color: T.ink, fontWeight: 600 }}>{width.toFixed(2)} m</span>
            </div>
            <input type="range" min={0.5} max={p.width || 1.40} step={0.1} value={width} onChange={(e) => setWidth(parseFloat(e.target.value))} style={{ width: '100%', accentColor: T.accent || T.ink }} />
          </div>
        )}
        <div style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontFamily: mono, color: T.inkSoft, marginBottom: 6 }}>
            <span>{isM2 ? 'COMPRIMENTO' : 'METROS'}</span><span style={{ color: T.ink, fontWeight: 600 }}>{length.toFixed(2)} m</span>
          </div>
          <input type="range" min={0.5} max={5} step={0.5} value={length} onChange={(e) => setLength(parseFloat(e.target.value))} style={{ width: '100%', accentColor: T.accent || T.ink }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0 0', borderTop: `1px dashed ${T.borderStrong || T.border}` }}>
          <div>
            <div style={{ fontSize: 10, fontFamily: mono, color: T.inkMuted, letterSpacing: '0.06em' }}>SUBTOTAL · {measureStr}</div>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: isC ? mono : T.font, marginTop: 2, color: isC ? T.accent : T.ink, letterSpacing: '-0.02em' }}>
              R$ {totalStr}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: '0 18px 20px' }}>
        <div style={{ fontSize: 11, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Descrição</div>
        <div style={{ fontSize: 14, color: T.inkSoft, lineHeight: 1.55 }}>{p.short} Material entregue rolado em embalagem técnica. Aceita corte para até 3 peças no mesmo pedido sem custo adicional.</div>
      </div>

      {/* Trust strip */}
      <div style={{ margin: '0 18px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          [<IconTruck size={18} />, 'Despacho 48h'],
          [<IconShield size={18} />, 'NF-e inclusa'],
          [<IconRuler size={18} />, 'Corte preciso'],
        ].map(([icon, label], i) => (
          <div key={i} style={{ padding: 10, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
            {icon}
            <div style={{ fontSize: 10, fontFamily: mono, color: T.inkSoft, letterSpacing: '0.04em' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Sticky CTA */}
      <div style={{ position: 'absolute', bottom: 78, left: 0, right: 0, padding: 14, background: T.surface, borderTop: `1px solid ${T.border}`, display: 'flex', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${T.borderStrong || T.border}`, borderRadius: 10, padding: '0 4px' }}>
          <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 30, height: 38, background: 'transparent', border: 'none', color: T.ink, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconMinus size={14} />
          </button>
          <div style={{ minWidth: 22, textAlign: 'center', fontFamily: mono, fontSize: 13, fontWeight: 600 }}>{qty}</div>
          <button onClick={() => setQty(qty + 1)} style={{ width: 30, height: 38, background: 'transparent', border: 'none', color: T.ink, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconPlus size={14} />
          </button>
        </div>
        <button onClick={() => addToCart(p, { width, length, qty, total })} style={{ flex: 1, height: 46, background: T.ink, color: isC ? T.accent : (T.bg || '#fff'), border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <IconCart size={16} /> Adicionar · R$ {totalStr}
        </button>
      </div>
    </div>
  );
}

// ───────── CART ─────────
function CartScreen({ T, st, cart, setCart, go, dir }) {
  const isB = dir === 'B';
  const isC = dir === 'C';
  const mono = T.mono || T.font;
  const subtotal = cart.reduce((s, i) => s + i.total, 0);
  const shipping = subtotal > 0 ? 24.90 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div style={{ ...st.scroll, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, textAlign: 'center' }}>
        <IconCart size={48} sw={1.2} />
        <div style={{ fontFamily: isB ? T.serif : T.font, fontSize: 22, fontWeight: 600, marginTop: 16, letterSpacing: '-0.02em' }}>Carrinho vazio</div>
        <div style={{ fontSize: 13, color: T.inkSoft, marginTop: 6, maxWidth: 240 }}>Adicione espumas ou tecidos para começar.</div>
        <button onClick={() => go('home')} style={{ marginTop: 20, padding: '12px 22px', background: T.ink, color: isC ? T.accent : (T.bg || '#fff'), border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>
          Explorar catálogo
        </button>
      </div>
    );
  }

  return (
    <div style={st.scroll}>
      <div style={{ padding: '14px 18px 6px' }}>
        <div style={{ fontFamily: isB ? T.serif : (isC ? mono : T.font), fontSize: isB ? 30 : 24, fontWeight: isB ? 400 : 600, letterSpacing: '-0.025em', textTransform: isC ? 'uppercase' : 'none' }}>Carrinho</div>
        <div style={{ fontSize: 12, color: T.inkMuted, fontFamily: mono }}>{cart.length} {cart.length === 1 ? 'item' : 'itens'}</div>
      </div>

      <div style={{ padding: '14px 18px' }}>
        {cart.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 0', borderTop: i ? `1px solid ${T.border}` : 'none' }}>
            <div style={{ width: 70, height: 70, borderRadius: 8, background: it.p.swatch, flex: '0 0 auto' }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.25 }}>{it.p.name}</div>
              <div style={{ fontSize: 11, fontFamily: mono, color: T.inkMuted, marginTop: 3, display: 'flex', alignItems: 'center', gap: 5 }}>
                <IconScissors size={11} /> {it.p.unit === 'M2' ? `${it.width.toFixed(2)}m × ${it.length.toFixed(2)}m` : `${it.length.toFixed(1)}m × ${it.qty}`}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${T.border}`, borderRadius: 7 }}>
                  <button style={{ width: 26, height: 28, background: 'transparent', border: 'none', color: T.ink, cursor: 'pointer' }}><IconMinus size={12} /></button>
                  <div style={{ minWidth: 18, textAlign: 'center', fontFamily: mono, fontSize: 12 }}>{it.qty}</div>
                  <button style={{ width: 26, height: 28, background: 'transparent', border: 'none', color: T.ink, cursor: 'pointer' }}><IconPlus size={12} /></button>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, fontFamily: isC ? mono : T.font }}>
                  R$ {it.total.toFixed(2).replace('.', ',')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cupom */}
      <div style={{ margin: '0 18px 16px', padding: 12, border: `1px dashed ${T.borderStrong || T.border}`, borderRadius: 10, display: 'flex', gap: 8 }}>
        <input placeholder="Cupom" style={{ flex: 1, border: 'none', background: 'transparent', color: T.ink, fontSize: 13, fontFamily: 'inherit', outline: 'none' }} />
        <button style={{ padding: '6px 14px', background: 'transparent', border: `1px solid ${T.borderStrong || T.border}`, borderRadius: 7, color: T.ink, fontSize: 12, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>Aplicar</button>
      </div>

      {/* Resumo */}
      <div style={{ margin: '0 18px 100px', padding: 14, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: mono }}>
        <Row k="Subtotal" v={`R$ ${subtotal.toFixed(2).replace('.', ',')}`} T={T} />
        <Row k="Frete (CEP 01310-100)" v={`R$ ${shipping.toFixed(2).replace('.', ',')}`} T={T} />
        <div style={{ height: 1, background: T.border, margin: '8px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontSize: 12, color: T.inkSoft }}>TOTAL</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: isC ? T.accent : T.ink, letterSpacing: '-0.02em' }}>R$ {total.toFixed(2).replace('.', ',')}</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 78, left: 0, right: 0, padding: 14, background: T.surface, borderTop: `1px solid ${T.border}` }}>
        <button onClick={() => go('checkout')} style={{ width: '100%', height: 50, background: T.ink, color: isC ? T.accent : (T.bg || '#fff'), border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          Finalizar compra <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

const Row = ({ k, v, T }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 12 }}>
    <span style={{ color: T.inkSoft }}>{k}</span>
    <span style={{ color: T.ink, fontWeight: 500 }}>{v}</span>
  </div>
);

// ───────── CHECKOUT ─────────
function CheckoutScreen({ T, st, cart, go, dir }) {
  const [step, setStep] = React.useState(0);
  const [pay, setPay] = React.useState('pix');
  const isB = dir === 'B';
  const isC = dir === 'C';
  const mono = T.mono || T.font;
  const subtotal = cart.reduce((s, i) => s + i.total, 0);
  const total = subtotal + 24.90;

  return (
    <div style={st.scroll}>
      <div style={{ padding: '14px 18px 0' }}>
        <button onClick={() => go('cart')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'transparent', border: 'none', color: T.inkSoft, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer', padding: 0 }}>
          <IconChevLeft size={14} /> voltar
        </button>
        <div style={{ fontFamily: isB ? T.serif : (isC ? mono : T.font), fontSize: isB ? 30 : 24, fontWeight: isB ? 400 : 600, letterSpacing: '-0.025em', marginTop: 8, textTransform: isC ? 'uppercase' : 'none' }}>
          Checkout
        </div>

        {/* Stepper */}
        <div style={{ display: 'flex', gap: 8, marginTop: 18, fontFamily: mono }}>
          {['Endereço', 'Frete', 'Pagamento'].map((s, i) => (
            <div key={s} style={{ flex: 1, padding: '8px 0', borderTop: `2px solid ${i <= step ? T.ink : T.border}`, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: i === step ? T.ink : T.inkMuted, fontWeight: i === step ? 600 : 400 }}>
              {String(i + 1).padStart(2, '0')} · {s}
            </div>
          ))}
        </div>
      </div>

      {step === 0 && (
        <div style={{ padding: '20px 18px' }}>
          <Field T={T} mono={mono} label="CEP" value="01310-100" right={<span style={{ color: '#16A34A', fontSize: 11 }}>✓ válido</span>} />
          <Field T={T} mono={mono} label="Rua" value="Av. Paulista" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 10 }}>
            <Field T={T} mono={mono} label="Número" value="1578" />
            <Field T={T} mono={mono} label="Complemento" value="apto 82" />
          </div>
          <Field T={T} mono={mono} label="Bairro" value="Bela Vista" />
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 10 }}>
            <Field T={T} mono={mono} label="Cidade" value="São Paulo" />
            <Field T={T} mono={mono} label="UF" value="SP" />
          </div>
        </div>
      )}

      {step === 1 && (
        <div style={{ padding: '20px 18px' }}>
          {[
            { n: 'PAC · Correios', d: '8 a 12 dias úteis', p: 'R$ 24,90', sel: true },
            { n: 'SEDEX · Correios', d: '3 a 5 dias úteis', p: 'R$ 48,50', sel: false },
            { n: 'Jadlog .Package', d: '5 a 7 dias úteis', p: 'R$ 32,00', sel: false },
          ].map((s) => (
            <div key={s.n} style={{ padding: 14, border: `1px solid ${s.sel ? T.ink : T.border}`, background: s.sel ? T.surface : 'transparent', borderRadius: 10, marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 3, fontFamily: mono }}>{s.d}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: isC ? mono : T.font }}>{s.p}</div>
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div style={{ padding: '20px 18px' }}>
          {[
            { id: 'pix', n: 'Pix', d: '5% off · aprovação imediata', icon: '⚡' },
            { id: 'card', n: 'Cartão de crédito', d: 'até 6× sem juros', icon: '◧' },
            { id: 'boleto', n: 'Boleto', d: 'vencimento em 3 dias úteis', icon: '▤' },
          ].map((m) => (
            <button key={m.id} onClick={() => setPay(m.id)} style={{ width: '100%', padding: 14, border: `1px solid ${pay === m.id ? T.ink : T.border}`, background: pay === m.id ? T.surface : 'transparent', borderRadius: 10, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: T.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, border: `1px solid ${T.border}` }}>{m.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>{m.n}</div>
                <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 2 }}>{m.d}</div>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: `1.5px solid ${pay === m.id ? T.ink : T.borderStrong || T.border}`, background: pay === m.id ? T.ink : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {pay === m.id && <div style={{ width: 6, height: 6, borderRadius: '50%', background: isC ? T.accent : (T.bg || '#fff') }} />}
              </div>
            </button>
          ))}

          {pay === 'pix' && (
            <div style={{ marginTop: 14, padding: 16, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, textAlign: 'center' }}>
              <div style={{ width: 140, height: 140, margin: '0 auto', background: '#fff', borderRadius: 8, position: 'relative', backgroundImage: 'repeating-conic-gradient(#000 0 25%, #fff 0 50%)', backgroundSize: '14px 14px' }} />
              <div style={{ marginTop: 12, fontFamily: mono, fontSize: 11, color: T.inkSoft }}>QR Code · expira em 30:00</div>
            </div>
          )}
        </div>
      )}

      {/* Resumo + CTA */}
      <div style={{ position: 'absolute', bottom: 78, left: 0, right: 0, padding: 14, background: T.surface, borderTop: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10, fontFamily: mono }}>
          <span style={{ fontSize: 11, color: T.inkSoft, letterSpacing: '0.06em' }}>TOTAL</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: isC ? T.accent : T.ink, letterSpacing: '-0.02em' }}>R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
        <button onClick={() => step < 2 ? setStep(step + 1) : go('success')} style={{ width: '100%', height: 48, background: T.ink, color: isC ? T.accent : (T.bg || '#fff'), border: 'none', borderRadius: 11, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>
          {step < 2 ? 'Continuar' : 'Confirmar pedido'}
        </button>
      </div>
    </div>
  );
}

const Field = ({ T, mono, label, value, right }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{ fontSize: 10, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
      <span>{label}</span>{right}
    </div>
    <div style={{ padding: '12px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 14, color: T.ink }}>{value}</div>
  </div>
);

window.ListingScreen = ListingScreen;
window.ProductScreen = ProductScreen;
window.CartScreen = CartScreen;
window.CheckoutScreen = CheckoutScreen;
