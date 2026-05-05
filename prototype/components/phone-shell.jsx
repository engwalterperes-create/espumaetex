// Phone shell — wraps a screen with status bar, top bar, tab bar.
// Each direction provides T (tokens) + st (styles) + brand bits.

function PhoneShell({ T, st, dir, screen, setScreen, p, cart, setCart }) {
  const [, force] = React.useReducer((x) => x + 1, 0);
  const isB = dir === 'B';
  const isC = dir === 'C';
  const mono = T.mono || T.font;

  const go = (s, payload) => {
    if (s === 'product' && payload) {
      setScreen({ name: 'product', p: payload });
    } else {
      setScreen({ name: s });
    }
  };

  const addToCart = (prod, opts) => {
    setCart([...cart, { p: prod, ...opts }]);
    setScreen({ name: 'cart' });
  };

  let content;
  if (screen.name === 'home') {
    content = dir === 'A' ? <A_Home go={go} /> : dir === 'B' ? <B_Home go={go} /> : <C_Home go={go} />;
  } else if (screen.name === 'list') {
    content = <ListingScreen T={T} st={st} go={go} dir={dir} />;
  } else if (screen.name === 'product') {
    content = <ProductScreen T={T} st={st} p={screen.p || ESPUMATEX_PRODUCTS[0]} go={go} addToCart={addToCart} dir={dir} />;
  } else if (screen.name === 'cart') {
    content = <CartScreen T={T} st={st} cart={cart} setCart={setCart} go={go} dir={dir} />;
  } else if (screen.name === 'checkout') {
    content = <CheckoutScreen T={T} st={st} cart={cart} go={go} dir={dir} />;
  } else if (screen.name === 'success') {
    content = <SuccessScreen T={T} st={st} go={go} dir={dir} />;
  }

  // Logo per direction
  const Logo = () => {
    if (isB) return <div style={st.logo}>Espuma<em style={{ color: T.accent }}>tex</em></div>;
    if (isC) return <div style={st.logo}><span style={{ width: 8, height: 8, background: T.accent, display: 'inline-block', borderRadius: 1 }} />ESPUMATEX</div>;
    return <div style={st.logo}>espumatex<span style={{ color: T.inkMuted }}>.</span></div>;
  };

  return (
    <div style={st.frame}>
      <div style={st.statusBar}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: 11 }}>
          <span>●●●●</span>
          <span style={{ width: 16, height: 10, border: `1px solid currentColor`, borderRadius: 2, position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 1, background: 'currentColor', borderRadius: 1 }} />
          </span>
        </span>
      </div>
      <div style={st.topBar}>
        <button style={st.iconBtn}><IconMenu size={18} /></button>
        <Logo />
        <div style={{ display: 'flex', gap: 2 }}>
          <button style={st.iconBtn}><IconSearch size={17} /></button>
          <button style={st.iconBtn} onClick={() => go('cart')}>
            <IconCart size={17} />
            {cart.length > 0 && (
              <span style={{ position: 'absolute', top: 4, right: 4, width: 16, height: 16, borderRadius: '50%', background: isC ? T.accent : (T.accent || T.ink), color: isC ? T.bg : (T.bg || '#fff'), fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: mono }}>{cart.length}</span>
            )}
          </button>
        </div>
      </div>
      {content}
      <div style={st.tabbar}>
        {[
          ['home', IconGrid, 'Início'],
          ['list', IconLayers, 'Catálogo'],
          ['cart', IconCart, 'Carrinho'],
          ['account', IconUser, 'Conta'],
        ].map(([id, Ic, label]) => (
          <button key={id} onClick={() => go(id)} style={st.tab(screen.name === id || (id === 'list' && screen.name === 'product'))}>
            <Ic size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SuccessScreen({ T, st, go, dir }) {
  const isB = dir === 'B';
  const isC = dir === 'C';
  const mono = T.mono || T.font;
  return (
    <div style={{ ...st.scroll, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px', textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: isC ? T.accent : T.ink, color: isC ? T.bg : (T.bg || '#fff'), display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <IconCheck size={32} sw={2.4} />
      </div>
      <div style={{ fontFamily: isB ? T.serif : (isC ? mono : T.font), fontSize: isB ? 30 : 24, fontWeight: isB ? 400 : 600, letterSpacing: '-0.025em', textTransform: isC ? 'uppercase' : 'none' }}>
        Pedido confirmado
      </div>
      <div style={{ fontSize: 13, color: T.inkSoft, marginTop: 8, lineHeight: 1.5, maxWidth: 280 }}>
        Recebemos seu pedido <span style={{ fontFamily: mono, color: T.ink, fontWeight: 600 }}>#2026-00847</span>. Você recebe atualizações por e-mail e WhatsApp.
      </div>
      <div style={{ width: '100%', marginTop: 28, padding: 16, border: `1px solid ${T.border}`, borderRadius: 10, textAlign: 'left' }}>
        {[
          ['Pago', '✓', '#16A34A'],
          ['Em separação', '○', T.inkMuted],
          ['Corte', '○', T.inkMuted],
          ['Despacho', '○', T.inkMuted],
        ].map(([k, ic, c], i) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: i ? `1px solid ${T.border}` : 'none' }}>
            <span style={{ color: c, fontFamily: mono, width: 14 }}>{ic}</span>
            <span style={{ fontSize: 13, color: i === 0 ? T.ink : T.inkSoft }}>{k}</span>
          </div>
        ))}
      </div>
      <button onClick={() => go('home')} style={{ marginTop: 20, padding: '12px 22px', background: 'transparent', color: T.ink, border: `1px solid ${T.borderStrong || T.border}`, borderRadius: 999, fontSize: 13, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>
        Voltar à loja
      </button>
    </div>
  );
}

window.PhoneShell = PhoneShell;
