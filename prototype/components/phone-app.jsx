// App shell — wires up the 3 directions with shared screens

function PhoneApp({ dirKey }) {
  const T = dirKey === 'A' ? A_TOKENS : dirKey === 'B' ? B_TOKENS : C_TOKENS;
  const S = dirKey === 'A' ? a_st : dirKey === 'B' ? b_st : c_st;

  const [screen, setScreen] = React.useState('home');
  const [history, setHistory] = React.useState(['home']);
  const [activeProduct, setActiveProduct] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [tab, setTab] = React.useState('home');

  const go = (s, payload) => {
    if (s === 'back') {
      setHistory(h => {
        const nh = h.slice(0, -1);
        const next = nh[nh.length - 1] || 'home';
        setScreen(next);
        return nh.length ? nh : ['home'];
      });
      return;
    }
    if (s === 'product') setActiveProduct(payload);
    setHistory(h => [...h, s]);
    setScreen(s);
    if (['home','list','cart','account'].includes(s)) setTab(s === 'list' ? 'list' : s === 'cart' ? 'cart' : s === 'account' ? 'account' : 'home');
  };

  const addToCart = (item) => {
    setCart(c => {
      const ex = c.findIndex(x => x.id === item.id);
      if (ex >= 0) return c.map((x,i) => i === ex ? { ...x, qty: x.qty + item.qty } : x);
      return [...c, item];
    });
  };

  const showBack = !['home'].includes(screen);
  const isDark = dirKey === 'C';

  let Body;
  if (screen === 'home') Body = dirKey === 'A' ? <A_Home go={go} /> : dirKey === 'B' ? <B_Home go={go} /> : <C_Home go={go} />;
  else if (screen === 'list') Body = <ListScreen T={T} S={S} go={go} dirKey={dirKey} />;
  else if (screen === 'product' && activeProduct) Body = <ProductScreen T={T} S={S} go={go} p={activeProduct} dirKey={dirKey} addToCart={addToCart} />;
  else if (screen === 'cart') Body = <CartScreen T={T} S={S} go={go} cart={cart} setCart={setCart} dirKey={dirKey} />;
  else if (screen === 'checkout') Body = <CheckoutScreen T={T} S={S} go={go} cart={cart} dirKey={dirKey} />;
  else Body = <div style={{ padding: 30, color: T.inkMuted }}>—</div>;

  return (
    <div style={S.frame} data-screen-label={`${dirKey}-${screen}`}>
      {/* status bar */}
      <div style={{ ...S.statusBar, color: isDark ? T.ink : T.ink }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12 }}>
          <span>●●●●●</span>
          <span>📶</span>
          <span style={{ width: 22, height: 11, border: `1px solid currentColor`, borderRadius: 3, position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'absolute', inset: 1, background: 'currentColor', width: '80%', borderRadius: 1 }} />
          </span>
        </span>
      </div>

      {/* top bar */}
      <div style={S.topBar}>
        {showBack ? (
          <button onClick={() => go('back')} style={S.iconBtn}><IconChevLeft size={20} /></button>
        ) : (
          <div style={{ ...S.logo, display: 'flex', alignItems: 'center', gap: 6 }}>
            {dirKey === 'C' && <span style={{ width: 8, height: 8, background: T.accent, borderRadius: 2 }} />}
            {dirKey === 'C' ? 'ESPUMATEX' : 'Espumatex'}
          </div>
        )}
        <div style={{ display: 'flex', gap: 4 }}>
          {!showBack && <button style={S.iconBtn}><IconSearch size={18} /></button>}
          <button onClick={() => go('cart')} style={{ ...S.iconBtn, position: 'relative' }}>
            <IconCart size={18} />
            {cart.length > 0 && (
              <span style={{ position: 'absolute', top: 4, right: 4, width: 16, height: 16, borderRadius: '50%', background: isDark ? T.accent : '#E8FF52', color: '#0E0E10', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* body */}
      {Body}

      {/* tab bar */}
      <div style={S.tabbar}>
        {[
          { k: 'home', icon: <IconGrid size={20} />, l: 'Início', s: 'home' },
          { k: 'list', icon: <IconLayers size={20} />, l: 'Catálogo', s: 'list' },
          { k: 'cart', icon: <IconCart size={20} />, l: 'Carrinho', s: 'cart' },
          { k: 'account', icon: <IconUser size={20} />, l: 'Conta', s: 'account' },
        ].map(t => (
          <button key={t.k} onClick={() => go(t.s)} style={S.tab(tab === t.k)}>
            {t.icon}
            <span>{t.l}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

window.PhoneApp = PhoneApp;
