// Branding cards for each direction — shown above the phone previews
const A_BrandCard = () => (
  <div style={{ width: 540, padding: 32, background: '#FAFAFA', border: '1px solid #EAEAEC', borderRadius: 12, fontFamily: 'ui-sans-serif, "Inter", system-ui, sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
      <div>
        <div style={{ fontFamily: 'ui-monospace, "JetBrains Mono", monospace', fontSize: 11, color: '#9A9AA3', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Direção A</div>
        <h2 style={{ margin: '6px 0 0', fontSize: 28, fontWeight: 600, letterSpacing: '-0.025em', color: '#0A0A0A' }}>Tech Neutral</h2>
        <p style={{ marginTop: 6, fontSize: 13, color: '#5C5C66', maxWidth: 320, lineHeight: 1.5 }}>Cinza-branco preciso, números em mono, vibe Linear/Vercel. Para quem quer um catálogo técnico moderno.</p>
      </div>
      <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.04em', color: '#0A0A0A' }}>Espumatex</div>
    </div>
    <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
      {['#FAFAFA', '#FFFFFF', '#0A0A0A', '#5C5C66', '#E8FF52'].map(c => (
        <div key={c} style={{ flex: 1 }}>
          <div style={{ height: 60, background: c, border: '1px solid #EAEAEC', borderRadius: 6 }} />
          <div style={{ fontSize: 9, fontFamily: 'ui-monospace, monospace', color: '#9A9AA3', marginTop: 4 }}>{c}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #EAEAEC', paddingTop: 14, fontSize: 11, color: '#5C5C66' }}>
      <span><b>Type</b> · Inter + JetBrains Mono</span>
      <span><b>Mood</b> · técnico, preciso, moderno</span>
    </div>
  </div>
);

const B_BrandCard = () => (
  <div style={{ width: 540, padding: 32, background: '#F4EFE6', border: '1px solid #E0D8C8', borderRadius: 12, fontFamily: '"Inter", system-ui, sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
      <div>
        <div style={{ fontSize: 11, color: '#8C8275', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Direção B</div>
        <h2 style={{ margin: '6px 0 0', fontSize: 28, fontWeight: 500, letterSpacing: '-0.025em', color: '#1F1B16', fontFamily: '"Cormorant Garamond", Georgia, serif' }}>Editorial Warm</h2>
        <p style={{ marginTop: 6, fontSize: 13, color: '#5C5247', maxWidth: 320, lineHeight: 1.5 }}>Tom quente, serif elegante, terracota. Vibe magazine de design — eleva os materiais.</p>
      </div>
      <div style={{ fontSize: 30, fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.02em', color: '#1F1B16' }}>Espumatex</div>
    </div>
    <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
      {['#F4EFE6', '#FBF8F2', '#1F1B16', '#B85B2C', '#E0D8C8'].map(c => (
        <div key={c} style={{ flex: 1 }}>
          <div style={{ height: 60, background: c, border: '1px solid #E0D8C8', borderRadius: 6 }} />
          <div style={{ fontSize: 9, color: '#8C8275', marginTop: 4 }}>{c}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E0D8C8', paddingTop: 14, fontSize: 11, color: '#5C5247' }}>
      <span><b>Type</b> · Cormorant + Inter</span>
      <span><b>Mood</b> · editorial, quente, premium</span>
    </div>
  </div>
);

const C_BrandCard = () => (
  <div style={{ width: 540, padding: 32, background: '#0E0E10', border: '1px solid #27272B', borderRadius: 12, color: '#F5F5F0', fontFamily: '"Inter", system-ui, sans-serif' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
      <div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: '#6E6E68', letterSpacing: '0.12em' }}>// DIREÇÃO C</div>
        <h2 style={{ margin: '6px 0 0', fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em', fontFamily: '"JetBrains Mono", monospace', textTransform: 'uppercase' }}>Industrial Dark</h2>
        <p style={{ marginTop: 6, fontSize: 13, color: '#A8A8A3', maxWidth: 320, lineHeight: 1.5 }}>Preto profundo + amarelo de segurança. Vibe catálogo industrial / engenharia. Para quem vende precisão.</p>
      </div>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 12, height: 12, background: '#E8FF52' }} />
        ESPUMATEX
      </div>
    </div>
    <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
      {['#0E0E10', '#17171A', '#F5F5F0', '#E8FF52', '#27272B'].map(c => (
        <div key={c} style={{ flex: 1 }}>
          <div style={{ height: 60, background: c, border: '1px solid #27272B', borderRadius: 6 }} />
          <div style={{ fontSize: 9, fontFamily: '"JetBrains Mono", monospace', color: '#6E6E68', marginTop: 4 }}>{c}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #27272B', paddingTop: 14, fontSize: 11, color: '#A8A8A3' }}>
      <span><b>Type</b> · JetBrains Mono + Inter</span>
      <span><b>Mood</b> · industrial, técnico, ousado</span>
    </div>
  </div>
);

window.A_BrandCard = A_BrandCard;
window.B_BrandCard = B_BrandCard;
window.C_BrandCard = C_BrandCard;
