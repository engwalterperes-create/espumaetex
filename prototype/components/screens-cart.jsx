// Cart + Checkout shared screens
function CartScreen({ T, st, go, dir, cart, removeFromCart }) {
  const isC = dir === 'C';
  const isB = dir === 'B';
  const mono = T.mono || T.font;
  const subtotal = cart.reduce((s, i) => s + i.total, 0);
  const shipping = subtotal > 0 ? 24.90 : 0;
  const total = subtotal + shipping;

  return (
    <div style={st.scroll}>
      <div style={{ padding: '14px 16px 12px', borderBottom: `1px solid ${T.border}` }}>
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'transparent', border: 'none', color: T.inkSoft, fontSize: 12, padding: 0, fontFamily: 'inherit', cursor: 'pointer', marginBottom: 8 }}>
          <IconChevLeft size={14} /> Voltar
        </button>
        <h1 style={{ margin: 0, fontFamily: isB ? T.serif : T.font, fontSize: isB ? 28 : 22, fontWeight: isB ? 400 : 600, letterSpacing: '-0.025em', color: T.ink, textTransform: isC ? 'uppercase' : 'none' }}>
          Carrinho
        </h1>
        <div style={{ fontSize: 11, color: T.inkMuted, fontFamily: mono, marginTop: 2 }}>{cart.length} {cart.length === 1 ? 'item' : 'itens'}</div>
      </div>

      {cart.length === 0 ? (
        <div style={{ padding: '60px 24px', textAlign: 'center' }}>
          <IconCart size={40} />
          <div style={{ marginTop: 12, color: T.inkSoft, fontSize: 14 }}>Seu carrinho está vazio</div>
          <button onClick={() => go('list')} style={{ marginTop: 16, padding: '10px 20px', background: T.ink, color: T.bg || '#fff', border: 'none', borderRadius: isC ? 6 : 999, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>Ver catálogo</button>
        </div>
      ) : (
        <>
          <div style={{ padding: '12px 16px' }}>
            {cart.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: 12, background: T.surface, border: `1px solid ${T.border}`, borderRadius: isC ? 4 : 10, marginBottom: 8 }}>
                <div style={{ width: 64, height: 64, background: item.swatch, borderRadius: isC ? 4 : 8, flex: '0 0 auto' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.ink, lineHeight: 1.2 }}>{item.name}</div>
                  <div style={{ fontSize: 10, fontFamily: mono, color: T.inkMuted, marginTop: 2 }}>{item.sku}</div>
                  <div style={{ fontSize: 11, color: T.inkSoft, marginTop: 6, fontFamily: mono }}>
                    <IconScissors size={10} style={{ verticalAlign: 'middle' }} /> {item.dims.width.toFixed(2)}m × {item.dims.length.toFixed(2)}m · {item.qty.toFixed(2)} {item.unit === 'M2' ? 'm²' : 'm'}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                    <button onClick={() => removeFromCart(i)} style={{ fontSize: 11, color: T.inkMuted, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit' }}>Remover</button>
                    <div style={{ fontSize: 14, fontWeight: 700, fontFamily: mono, color: isC ? T.accent : T.ink, fontVariantNumeric: 'tabular-nums' }}>R$ {item.total.toFixed(2).replace('.', ',')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ padding: 16, margin: '8px 16px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: isC ? 4 : 10 }}>
            <Row label="Subtotal" value={`R$ ${subtotal.toFixed(2).replace('.', ',')}`} T={T} mono={mono} />
            <Row label="Frete (PAC)" value={`R$ ${shipping.toFixed(2).replace('.', ',')}`} T={T} mono={mono} />
            <div style={{ borderTop: `1px solid ${T.border}`, marginTop: 10, paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>Total</span>
              <span style={{ fontSize: 18, fontWeight: 700, fontFamily: mono, color: isC ? T.accent : T.ink, fontVariantNumeric: 'tabular-nums' }}>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 4, textAlign: 'right' }}>ou 3× sem juros</div>
          </div>

          <div style={{ padding: '0 16px 24px' }}>
            <button onClick={() => go('checkout')} style={{ width: '100%', height: 52, background: isC ? T.accent : T.ink, color: isC ? T.accentInk : (T.bg || '#fff'), border: 'none', borderRadius: isC ? 6 : 12, fontSize: 14, fontWeight: 600, fontFamily: isC ? mono : 'inherit', cursor: 'pointer', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.06em' : 'normal' }}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function Row({ label, value, T, mono }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
      <span style={{ fontSize: 13, color: T.inkSoft }}>{label}</span>
      <span style={{ fontSize: 13, fontFamily: mono, color: T.ink, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
    </div>
  );
}

function CheckoutScreen({ T, st, go, dir, cart }) {
  const isC = dir === 'C';
  const isB = dir === 'B';
  const mono = T.mono || T.font;
  const [step, setStep] = React.useState(1);
  const [payment, setPayment] = React.useState('pix');

  const subtotal = cart.reduce((s, i) => s + i.total, 0);
  const shipping = 24.90;
  const total = subtotal + shipping;

  return (
    <div style={st.scroll}>
      <div style={{ padding: '14px 16px 12px', borderBottom: `1px solid ${T.border}` }}>
        <button onClick={() => go('cart')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'transparent', border: 'none', color: T.inkSoft, fontSize: 12, padding: 0, fontFamily: 'inherit', cursor: 'pointer', marginBottom: 8 }}>
          <IconChevLeft size={14} /> Carrinho
        </button>
        <h1 style={{ margin: 0, fontFamily: isB ? T.serif : T.font, fontSize: isB ? 28 : 22, fontWeight: isB ? 400 : 600, color: T.ink, textTransform: isC ? 'uppercase' : 'none' }}>
          Checkout
        </h1>
        {/* Stepper */}
        <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={{ flex: 1, height: 3, background: s <= step ? T.ink : T.border, borderRadius: 2 }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          <span style={{ color: step >= 1 ? T.ink : T.inkMuted }}>Endereço</span>
          <span style={{ color: step >= 2 ? T.ink : T.inkMuted }}>Frete</span>
          <span style={{ color: step >= 3 ? T.ink : T.inkMuted }}>Pagamento</span>
        </div>
      </div>

      {step === 1 && (
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 11, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Endereço de entrega</div>
          {[
            ['CEP', '01310-100'],
            ['Rua', 'Av. Paulista, 1500'],
            ['Complemento', 'Apto 802'],
            ['Bairro', 'Bela Vista'],
            ['Cidade / UF', 'São Paulo / SP'],
          ].map(([k, v]) => (
            <div key={k} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 10, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{k}</div>
              <div style={{ padding: '12px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: isC ? 4 : 8, fontSize: 14, color: T.ink }}>{v}</div>
            </div>
          ))}
          <button onClick={() => setStep(2)} style={{ width: '100%', marginTop: 12, height: 50, background: T.ink, color: T.bg || '#fff', border: 'none', borderRadius: isC ? 6 : 12, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>Continuar</button>
        </div>
      )}

      {step === 2 && (
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 11, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Opções de frete</div>
          {[
            ['PAC', 'Correios', '5-8 dias úteis', 24.90, true],
            ['SEDEX', 'Correios', '2-3 dias úteis', 38.50, false],
            ['Mercado Envios', 'Full', '1-2 dias úteis', 42.00, false],
          ].map(([n, c, d, p, sel]) => (
            <button key={n} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: 14, background: T.surface, border: `1px solid ${sel ? T.ink : T.border}`, borderRadius: isC ? 4 : 10, marginBottom: 8, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${sel ? T.ink : T.borderStrong}`, background: sel ? T.ink : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                {sel && <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.bg || '#fff' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>{n}</div>
                <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 2 }}>{c} · {d}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, fontFamily: mono, color: T.ink }}>R$ {p.toFixed(2).replace('.', ',')}</div>
            </button>
          ))}
          <button onClick={() => setStep(3)} style={{ width: '100%', marginTop: 12, height: 50, background: T.ink, color: T.bg || '#fff', border: 'none', borderRadius: isC ? 6 : 12, fontSize: 14, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>Continuar</button>
        </div>
      )}

      {step === 3 && (
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 11, fontFamily: mono, color: T.inkMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Forma de pagamento</div>
          {[
            ['pix', 'Pix', '5% de desconto · aprovação imediata'],
            ['credit', 'Cartão de crédito', 'até 6× sem juros'],
            ['boleto', 'Boleto bancário', 'vence em 3 dias úteis'],
          ].map(([id, name, desc]) => (
            <button key={id} onClick={() => setPayment(id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: 14, background: T.surface, border: `1px solid ${payment === id ? T.ink : T.border}`, borderRadius: isC ? 4 : 10, marginBottom: 8, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${payment === id ? T.ink : T.borderStrong}`, background: payment === id ? T.ink : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                {payment === id && <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.bg || '#fff' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>{name}</div>
                <div style={{ fontSize: 11, color: T.inkMuted, marginTop: 2 }}>{desc}</div>
              </div>
            </button>
          ))}

          <div style={{ marginTop: 16, padding: 14, background: T.surface, border: `1px solid ${T.border}`, borderRadius: isC ? 4 : 10 }}>
            <Row label="Subtotal" value={`R$ ${subtotal.toFixed(2).replace('.', ',')}`} T={T} mono={mono} />
            <Row label="Frete" value={`R$ ${shipping.toFixed(2).replace('.', ',')}`} T={T} mono={mono} />
            {payment === 'pix' && <Row label="Desconto Pix (5%)" value={`- R$ ${(total * 0.05).toFixed(2).replace('.', ',')}`} T={T} mono={mono} />}
            <div style={{ borderTop: `1px solid ${T.border}`, marginTop: 10, paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>Total</span>
              <span style={{ fontSize: 20, fontWeight: 700, fontFamily: mono, color: isC ? T.accent : T.ink, fontVariantNumeric: 'tabular-nums' }}>
                R$ {(payment === 'pix' ? total * 0.95 : total).toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          <button onClick={() => go('home')} style={{ width: '100%', marginTop: 14, height: 52, background: isC ? T.accent : T.ink, color: isC ? T.accentInk : (T.bg || '#fff'), border: 'none', borderRadius: isC ? 6 : 12, fontSize: 14, fontWeight: 600, fontFamily: isC ? mono : 'inherit', cursor: 'pointer', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.06em' : 'normal' }}>
            Pagar R$ {(payment === 'pix' ? total * 0.95 : total).toFixed(2).replace('.', ',')}
          </button>
        </div>
      )}
    </div>
  );
}

window.CartScreen = CartScreen;
window.CheckoutScreen = CheckoutScreen;
