import Link from 'next/link';
import type { Product } from '../lib/catalog';
import { formatBRL, formatUnit } from '../lib/format';

/**
 * Card de produto — Direção B (Editorial Warm).
 * Usa swatch (gradiente CSS) como placeholder. Quando vier foto real,
 * basta trocar o div com `style={{ background: ... }}` por <Image />.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produto/${product.slug}`}
      className="group flex flex-col text-left transition"
    >
      <div className="relative overflow-hidden rounded-editorial">
        <div
          className="aspect-[4/5] w-full transition group-hover:scale-[1.02]"
          style={{ background: product.swatch }}
          aria-hidden
        />
        {product.badge && (
          <span className="badge-pill absolute left-3 top-3">{product.badge}</span>
        )}
      </div>

      <div className="pt-3">
        <h3 className="font-serif text-[17px] font-normal leading-tight tracking-tighter text-ink">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-1 text-[11px] text-ink-muted">
          {product.shortDesc.split('.')[0]}
        </p>
        <div className="mt-2 text-[13px] font-medium tracking-tight tabular-nums text-ink">
          {formatBRL(product.basePrice)}{' '}
          <span className="text-[11px] font-normal text-ink-muted">
            / {formatUnit(product.unit)}
          </span>
        </div>
      </div>
    </Link>
  );
}
