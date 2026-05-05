import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react';
import {
  categories,
  getProductsByCategory,
  categoryLabel,
  type CategorySlug,
} from '../../../lib/catalog';
import { ProductCard } from '../../../components/product-card';
import { PageShell } from '../../../components/shell/page-shell';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const VALID_SLUGS = categories.map((c) => c.slug) as readonly string[];

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

/**
 * Catálogo — telas 02 e 03 do design (Espumas / Tecidos / etc.)
 * Mostra: header com nome (serif italic), toggle de sub-categorias,
 * filtros (link), ordenar (link), grid 2-col com fotos.
 */
export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  const categorySlug = slug as CategorySlug;
  const items = getProductsByCategory(categorySlug);
  const label = categoryLabel(categorySlug);

  return (
    <PageShell>
      {/* Header com voltar + breadcrumb */}
      <div className="px-5 pt-3">
        <Link
          href="/"
          className="inline-flex h-9 w-9 items-center justify-center -ml-2 rounded-full text-ink hover:bg-surface"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <div className="eyebrow mt-2">Catálogo</div>
        <h1 className="font-serif text-[36px] font-normal italic leading-none tracking-tighter">
          {label}
        </h1>
        <div className="mt-2 font-mono text-[11px] text-ink-muted">
          {items.length} produto{items.length === 1 ? '' : 's'} · ordenado por relevância
        </div>
      </div>

      {/* Sub-categorias / filtros rápidos */}
      <div className="mt-4 flex gap-2 overflow-x-auto px-5 pb-2">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/categoria/${c.slug}`}
            className={
              c.slug === categorySlug
                ? 'flex-none rounded-full border border-ink bg-ink px-3.5 py-1.5 text-xs font-medium text-bg whitespace-nowrap'
                : 'flex-none rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-ink whitespace-nowrap hover:border-border-strong'
            }
          >
            {c.name}
          </Link>
        ))}
      </div>

      {/* Filtros + ordenar */}
      <div className="flex gap-2 px-5 pt-2">
        <button
          className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-editorial border border-border bg-surface text-[12px] font-medium hover:border-border-strong"
          type="button"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filtros · 2
        </button>
        <button
          className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-editorial border border-border bg-surface text-[12px] font-medium hover:border-border-strong"
          type="button"
        >
          Menor preço
        </button>
      </div>

      {/* Grid de produtos */}
      <div className="px-5 pt-4">
        {items.length === 0 ? (
          <div className="mt-10 rounded-editorial border border-border bg-surface p-8 text-center">
            <p className="text-[13px] text-ink-soft">
              Nenhum produto nesta categoria ainda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-3.5 gap-y-6 pb-8">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
