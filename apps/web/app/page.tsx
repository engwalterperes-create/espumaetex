import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories, categoryCount, products } from '../lib/catalog';
import { ProductCard } from '../components/product-card';
import { PageShell } from '../components/shell/page-shell';
import { formatBRL, formatUnit } from '../lib/format';

/**
 * Home — Direção B (Editorial Warm)
 * Hero serif gigante, material em destaque (full bleed), capítulos de
 * categoria como lista editorial, "os preferidos" em grid 2-col, depoimento.
 */
export default function HomePage() {
  const featured = products.slice(0, 4);
  const heroProduct = products.find((p) => p.slug === 'veludo-premium-grafite') ?? products[0];

  return (
    <PageShell>
      {/* Hero editorial */}
      <section className="px-5 pb-8 pt-3">
        <div className="eyebrow mb-4">Edição Outono · 2026</div>
        <h1 className="font-serif text-[52px] font-normal leading-[0.95] tracking-tightest text-ink">
          Materiais
          <br />
          <em className="not-italic text-accent">nobres</em>,
          <br />
          do metro.
        </h1>
        <p className="mt-5 max-w-[280px] text-[14px] leading-[1.55] text-ink-soft">
          Espumas técnicas e tecidos selecionados, cortados sob medida desde 1995.
        </p>
        <Link href="/categoria/espumas" className="btn-primary mt-6">
          Explorar coleção <ArrowRight className="h-[15px] w-[15px]" />
        </Link>
      </section>

      {/* Material em destaque — full bleed */}
      <section className="px-5">
        <Link
          href={`/produto/${heroProduct.slug}`}
          className="relative block h-[380px] overflow-hidden rounded-editorial"
          style={{ background: heroProduct.swatch }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/55" />
          <span className="absolute left-4 top-4 text-[10px] uppercase tracking-widest text-white/85">
            Em destaque
          </span>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="font-serif text-[30px] leading-none tracking-tighter">
              {heroProduct.name}
            </div>
            <div className="mt-2 text-[12px] tracking-wider opacity-85">
              {heroProduct.grammage ? `${heroProduct.grammage}g/m² · ` : ''}
              {heroProduct.density ? `${heroProduct.density} · ` : ''}
              {formatBRL(heroProduct.basePrice)}/{formatUnit(heroProduct.unit)}
            </div>
          </div>
        </Link>
      </section>

      {/* Capítulos / Categorias */}
      <section className="px-5 pt-10">
        <div className="eyebrow mb-1">Capítulos</div>
        <h2 className="font-serif text-[28px] font-normal tracking-tighter">Categorias</h2>

        <div className="mt-3">
          {categories.slice(0, 4).map((c, i) => (
            <Link
              key={c.slug}
              href={`/categoria/${c.slug}`}
              className="flex items-center justify-between border-t border-border py-5 transition hover:bg-surface/40"
            >
              <div>
                <div className="font-serif text-[11px] italic text-ink-muted">
                  0{i + 1} —
                </div>
                <div className="font-serif text-[26px] font-normal tracking-tighter">
                  {c.name}
                </div>
              </div>
              <div className="flex items-center gap-2 text-ink-soft">
                <span className="text-[12px] tabular-nums">{categoryCount(c.slug)}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Os preferidos */}
      <section className="px-5 pt-10">
        <div className="eyebrow mb-1">Curadoria</div>
        <h2 className="mb-4 font-serif text-[28px] font-normal tracking-tighter">
          Os preferidos.
        </h2>
        <div className="grid grid-cols-2 gap-x-3.5 gap-y-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Depoimento */}
      <section className="px-5 pb-12 pt-10">
        <div className="border-t border-border pt-7">
          <p className="font-serif text-[22px] italic leading-[1.3] tracking-tight text-ink">
            "Recebi a espuma cortada nas medidas exatas. Encaixou no sofá no
            primeiro teste."
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-ink-muted">
            Marina R. · Curitiba
          </p>
        </div>
      </section>

      {/* Pequeno rodapé editorial */}
      <section className="px-5 pb-8">
        <div className="border-t border-border pt-6 text-[11px] text-ink-muted">
          <div className="font-serif text-base italic text-ink">
            Espuma<span className="text-accent">tex</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-[10px]">
            <span>contato@espumatex.com.br</span>
            <span>WhatsApp: (11) 9XXXX-XXXX</span>
          </div>
          <div className="mt-2 font-mono text-[10px]">
            © {new Date().getFullYear()} · CNPJ XX.XXX.XXX/0001-XX
          </div>
        </div>
      </section>
    </PageShell>
  );
}
