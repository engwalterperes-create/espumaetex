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
