// Branding cards — quick-look brand identity for each direction
function BrandingCard({ dir }) {
  const T = window[`${dir}_TOKENS`];
  const isC = dir === 'C';
  const isB = dir === 'B';

  const name = { A: 'Tech Neutral', B: 'Editorial Warm', C: 'Industrial Dark' }[dir];
  const tagline = { A: 'Precisão técnica, dados e foco.', B: 'Materiais nobres, ritmo editorial.', C: 'Catálogo de fábrica, velocidade.' }[dir];

  return (
    <div style={{ width: 600, height: 760, background: T.bg, color: T.ink, fontFamily: T.font, padding: 36, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Logo */}
      <div style={{ flex: '0 0 auto' }}>
        <div style={{ fontSize: 11, fontFamily: T.mono || T.font, color: T.inkMuted, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>
          Direção {dir} · {name}
        </div>
        {isC ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, background: T.accent, borderRadius: 6 }} />
            <div style={{ fontFamily: T.mono, fontSize: 36, fontWeight: 700, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>ESPUMATEX</div>
          </div>
        ) : isB ? (
          <div style={{ fontFamily: T.serif, fontSize: 64, fontWeight: 400, letterSpacing: '-0.03em', fontStyle: 'italic' }}>Espumatex</div>
        ) : (
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.045em' }}>Espumatex<span style={{ color: T.inkMuted }}>.</span></div>
        )}
        <div style={{ fontSize: 14, color: T.inkSoft, marginTop: 12, maxWidth: 340, fontFamily: isB ? T.serif : T.font, fontStyle: isB ? 'italic' : 'normal' }}>{tagline}</div>
      </div>

      {/* Color palette */}
      <div style={{ marginTop: 32, flex: '0 0 auto' }}>
        <div style={{ fontSize: 10, fontFamily: T.mono || T.font, color: T.inkMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Paleta</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
          {[
            ['BG', T.bg],
            ['Surface', T.surface],
            ['Ink', T.ink],
            ['Muted', T.inkMuted],
            ['Accent', T.accent || T.ink],
          ].map(([n, c]) => (
            <div key={n}>
              <div style={{ height: 64, background: c, borderRadius: isC ? 4 : 8, border: `1px solid ${T.border}` }} />
              <div style={{ fontSize: 9, fontFamily: T.mono || T.font, color: T.inkMuted, marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{n}</div>
              <div style={{ fontSize: 9, fontFamily: T.mono || T.font, color: T.inkSoft }}>{c}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Type sample */}
      <div style={{ marginTop: 28, flex: '0 0 auto' }}>
        <div style={{ fontSize: 10, fontFamily: T.mono || T.font, color: T.inkMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Tipografia</div>
        <div style={{ padding: 18, background: T.surface, borderRadius: isC ? 4 : 10, border: `1px solid ${T.border}` }}>
          <div style={{ fontFamily: isB ? T.serif : T.font, fontSize: 30, lineHeight: 1, letterSpacing: '-0.025em', fontWeight: isB ? 400 : 600, color: T.ink, fontStyle: isB ? 'italic' : 'normal', textTransform: isC ? 'uppercase' : 'none' }}>
            Espuma D33, 10cm
          </div>
          <div style={{ fontSize: 13, color: T.inkSoft, marginTop: 8, lineHeight: 1.5 }}>
            Densidade média-alta. Ideal para assento de sofá residencial.
          </div>
          <div style={{ fontFamily: T.mono || T.font, fontSize: 11, color: T.inkMuted, marginTop: 10, letterSpacing: '0.06em' }}>
            R$ 89,90 / m² · SKU ESP-D33-10
          </div>
        </div>
      </div>

      {/* Components row */}
      <div style={{ marginTop: 28, flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ fontSize: 10, fontFamily: T.mono || T.font, color: T.inkMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Componentes</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button style={{ height: 44, padding: '0 22px', background: isC ? T.accent : T.ink, color: isC ? T.accentInk : T.bg, border: 'none', borderRadius: isC ? 6 : 999, fontSize: 13, fontWeight: 600, fontFamily: isC ? T.mono : 'inherit', textTransform: isC ? 'uppercase' : 'none', letterSpacing: isC ? '0.06em' : 'normal' }}>
            Comprar agora
          </button>
          <button style={{ height: 44, padding: '0 22px', background: 'transparent', color: T.ink, border: `1px solid ${T.borderStrong}`, borderRadius: isC ? 6 : 999, fontSize: 13, fontFamily: 'inherit' }}>
            Ver detalhes
          </button>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '7px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 999, fontSize: 11, fontFamily: T.mono || T.font, color: T.inkSoft }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.accent || T.ink }} /> Em estoque
          </span>
        </div>
      </div>
    </div>
  );
}

window.BrandingCard = BrandingCard;
