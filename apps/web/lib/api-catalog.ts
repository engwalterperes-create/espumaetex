/**
 * Camada de catálogo "API-aware".
 *
 * Hoje, todas as páginas leem produtos de `lib/catalog.ts` (estático).
 * Quando a API NestJS estiver no ar e populada, basta:
 *   1. Setar NEXT_PUBLIC_USE_API=1 no .env.local do app web
 *   2. Trocar nas páginas:
 *        import { products, getProductBySlug } from '../lib/catalog'
 *      por
 *        import { listProducts, getProductBySlug } from '../lib/api-catalog'
 *
 * O shape do retorno bate com o `Product` definido em catalog.ts pra evitar
 * mudanças nos componentes (ProductCard, ProductActions, etc.).
 */

import { apiGet } from './api';
import {
  products as STATIC_PRODUCTS,
  getProductBySlug as staticGetBySlug,
  getProductsByCategory as staticByCategory,
  type Product,
  type CategorySlug,
} from './catalog';

const USE_API = process.env.NEXT_PUBLIC_USE_API === '1';

interface ApiProduct {
  id: string;
  sku: string;
  slug: string;
  name: string;
  shortDesc?: string | null;
  description?: string;
  basePrice: string | number;
  unitOfMeasure: 'M' | 'M2' | 'M3' | 'UNIT';
  category: { slug: string };
  variants: Array<{
    id: string;
    color?: string | null;
    colorHex?: string | null;
    density?: string | null;
    thicknessCm?: string | number | null;
    widthM?: string | number | null;
    grammage?: number | null;
    abrasionCycles?: number | null;
  }>;
  featured?: boolean;
}

function fromApi(p: ApiProduct): Product {
  const v = p.variants?.[0];
  const color = v?.colorHex ?? '#D9C89A';
  // gradiente derivado do color hex pra manter o estilo editorial enquanto não há foto
  const swatch = `linear-gradient(135deg, ${color} 0%, ${shade(color, -20)} 100%)`;
  return {
    id: p.id,
    sku: p.sku,
    slug: p.slug,
    name: p.name,
    shortDesc: p.shortDesc ?? '',
    category: p.category.slug as CategorySlug,
    unit: p.unitOfMeasure,
    basePrice: typeof p.basePrice === 'string' ? parseFloat(p.basePrice) : p.basePrice,
    swatch,
    density: v?.density as Product['density'],
    thicknessCm: v?.thicknessCm ? Number(v.thicknessCm) : undefined,
    grammage: v?.grammage ?? undefined,
    abrasionCycles: v?.abrasionCycles ?? undefined,
    widthM: v?.widthM ? Number(v.widthM) : undefined,
  };
}

/** ajusta lightness de um hex (negativo = mais escuro) */
function shade(hex: string, percent: number): string {
  const f = parseInt(hex.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = Math.abs(percent) / 100;
  const R = f >> 16;
  const G = (f >> 8) & 0x00ff;
  const B = f & 0x0000ff;
  const r = Math.round((t - R) * p) + R;
  const g = Math.round((t - G) * p) + G;
  const b = Math.round((t - B) * p) + B;
  return `#${(0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export async function listProducts(opts?: {
  categorySlug?: CategorySlug;
  featured?: boolean;
}): Promise<Product[]> {
  if (!USE_API) {
    let arr = STATIC_PRODUCTS;
    if (opts?.categorySlug) arr = arr.filter((p) => p.category === opts.categorySlug);
    return arr;
  }
  const qs = new URLSearchParams();
  if (opts?.categorySlug) qs.set('categorySlug', opts.categorySlug);
  if (opts?.featured != null) qs.set('featured', String(opts.featured));
  const res = await apiGet<{ items: ApiProduct[] }>(`/products?${qs.toString()}`);
  return res.items.map(fromApi);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!USE_API) return staticGetBySlug(slug);
  try {
    const p = await apiGet<ApiProduct>(`/products/${encodeURIComponent(slug)}`);
    return fromApi(p);
  } catch {
    return undefined;
  }
}

export async function getProductsByCategory(slug: CategorySlug): Promise<Product[]> {
  if (!USE_API) return staticByCategory(slug);
  return listProducts({ categorySlug: slug });
}

export type { Product, CategorySlug } from './catalog';
