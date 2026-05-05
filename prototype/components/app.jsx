// Top-level App. Lives in an external file so it loads AFTER all the other
// babel scripts have been transpiled and executed (babel-standalone fetches
// external src= scripts asynchronously; inline scripts run synchronously and
// would race ahead of the components they need).

const { useState: useStateApp } = React;
const _DesignCanvas = window.DesignCanvas;
const _DCSection = window.DCSection;
const _DCArtboard = window.DCArtboard;
const _DCPostIt = window.DCPostIt;
const _PhoneShell = window.PhoneShell;
const _getTokens = (d) => d === 'A' ? window.A_TOKENS : d === 'B' ? window.B_TOKENS : window.C_TOKENS;
const _getStyles = (d) => d === 'A' ? window.a_st : d === 'B' ? window.b_st : window.c_st;

function PrototypeFor({ dir }) {
  const T = _getTokens(dir);
  const st = _getStyles(dir);
  const [screen, setScreen] = useStateApp({ name: 'home' });
  const [cart, setCart] = useStateApp([]);
  return <_PhoneShell T={T} st={st} dir={dir} screen={screen} setScreen={setScreen} cart={cart} setCart={setCart} />;
}

function BrandCard({ dir }) {
  const T = _getTokens(dir);
  const isB = dir === 'B';
  const isC = dir === 'C';
  const mono = T.mono || T.font;
  const font = isB ? T.serif : (isC ? mono : T.font);

  const meta = {
    A: { name: 'Tech Neutral', vibe: 'Linear · Vercel · Arc', colors: ['#FAFAFA', '#0A0A0A', '#E8FF52', '#5C5C66'], typo: 'Inter + JetBrains Mono', desc: 'Catálogo técnico, neutro, focado em precisão. Vibe de produto SaaS moderno.' },
    B: { name: 'Editorial Warm', vibe: 'Hem · HAY · Design magazines', colors: ['#F4EFE6', '#1F1B16', '#B85B2C', '#8C8275'], typo: 'Cormorant + Inter', desc: 'Tipografia serif elegante, off-white quente, foco no material. Premium artesanal.' },
    C: { name: 'Industrial Dark', vibe: 'Bauhaus · Catálogos técnicos', colors: ['#0E0E10', '#F5F5F0', '#E8FF52', '#6E6E68'], typo: 'JetBrains Mono', desc: 'Preto profundo, amarelo de segurança, blocos. Vibe de engenharia e ferramenta.' },
  }[dir];

  return (
    <div style={{ width: 390, height: 540, background: T.bg, color: T.ink, padding: 28, fontFamily: T.font, display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontFamily: mono, fontSize: 10, color: T.inkMuted, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        Direção {dir} · {meta.name}
      </div>
      <div style={{ fontFamily: font, fontSize: isB ? 42 : (isC ? 30 : 34), fontWeight: isB ? 400 : (isC ? 700 : 600), letterSpacing: '-0.03em', marginTop: 22, lineHeight: 0.95, textTransform: isC ? 'uppercase' : 'none' }}>
        {isB ? <>Espuma<em style={{ color: T.accent, fontStyle: 'italic' }}>tex</em></> : isC ? <><span style={{ width: 14, height: 14, background: T.accent, display: 'inline-block', marginRight: 8, verticalAlign: 'middle' }} />ESPUMATEX</> : <>espumatex<span style={{ color: T.inkMuted }}>.</span></>}
      </div>
      <div style={{ fontSize: 13, color: T.inkSoft, marginTop: 12, lineHeight: 1.5, maxWidth: 320 }}>{meta.desc}</div>

      <div style={{ marginTop: 24, fontFamily: mono, fontSize: 10, color: T.inkMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Paleta</div>
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        {meta.colors.map((c, i) => (
          <div key={c} style={{ flex: 1 }}>
            <div style={{ aspectRatio: '1', background: c, borderRadius: 8, border: `1px solid ${T.border}` }} />
            <div style={{ fontFamily: mono, fontSize: 9, color: T.inkMuted, marginTop: 5, textAlign: 'center' }}>{c}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 22, fontFamily: mono, fontSize: 10, color: T.inkMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tipografia · {meta.typo}</div>
      <div style={{ marginTop: 8, padding: 14, border: `1px solid ${T.border}`, borderRadius: 8, background: T.surface }}>
        <div style={{ fontFamily: font, fontSize: 24, fontWeight: isB ? 400 : (isC ? 700 : 600), letterSpacing: '-0.025em', textTransform: isC ? 'uppercase' : 'none' }}>Espuma D33</div>
        <div style={{ fontSize: 12, color: T.inkSoft, marginTop: 4 }}>10cm · 1,40m de largura</div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13, fontWeight: 600, color: isC ? T.accent : T.ink, marginTop: 6 }}>R$ 89,90/m²</div>
      </div>

      <div style={{ marginTop: 'auto', fontFamily: mono, fontSize: 10, color: T.inkMuted }}>Inspiração: {meta.vibe}</div>
    </div>
  );
}

function App() {
  return (
    <_DesignCanvas>
      <_DCSection id="brand" title="Branding · 3 direções" subtitle="Identidades visuais lado a lado. Cada uma puxa para um lugar diferente — escolha uma para continuarmos.">
        <_DCArtboard id="b-a" label="A · Tech Neutral" width={390} height={540}><BrandCard dir="A" /></_DCArtboard>
        <_DCArtboard id="b-b" label="B · Editorial Warm" width={390} height={540}><BrandCard dir="B" /></_DCArtboard>
        <_DCArtboard id="b-c" label="C · Industrial Dark" width={390} height={540}><BrandCard dir="C" /></_DCArtboard>
      </_DCSection>

      <_DCSection id="proto" title="Protótipo interativo · mobile" subtitle="Cada artboard navega de verdade: clique nos produtos, configure o corte, vá ao carrinho e checkout. Use o ícone de expandir para ver em tela cheia.">
        <_DCArtboard id="p-a" label="A · Tech Neutral" width={390} height={844}><PrototypeFor dir="A" /></_DCArtboard>
        <_DCArtboard id="p-b" label="B · Editorial Warm" width={390} height={844}><PrototypeFor dir="B" /></_DCArtboard>
        <_DCArtboard id="p-c" label="C · Industrial Dark" width={390} height={844}><PrototypeFor dir="C" /></_DCArtboard>
      </_DCSection>

      <_DCPostIt x={40} y={40} color="yellow">
        Espumatex — 3 direções estéticas para o storefront B2C.{"\n\n"}
        Mobile-first, fluxo completo: Home → Listagem → Produto (com configurador de corte) → Carrinho → Checkout → Confirmação.{"\n\n"}
        Próximo: branding escolhido + admin + wireframes do app.
      </_DCPostIt>
    </_DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
