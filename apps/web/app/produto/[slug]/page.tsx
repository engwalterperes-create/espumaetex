import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, Heart } from 'lucide-react';
import { getProductBySlug, products } from '../../../lib/catalog';
import { PageShell } from '../../../components/shell/page-shell';
import { ProductActions } from '../../../components/product-actions';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/**
 * PDP — Tela 04 do design.
 * Foto hero, breadcrumb mono, título serif, rating, preço, configurador
 * de corte (cliente), tabs de info, sticky CTA.
 */
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <PageShell withBottomNav={false}>
      {/* Imagem hero com botões flutuantes */}
      <div className="relative">
        <div
          className="aspect-square w-full"
          style={{ background: product.swatch }}
          aria-hidden
        />
        <Link
          href={`/categoria/${product.category}`}
          aria-label="Voltar"
          className="absolute left-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink hover:bg-white"
        >
          <ChevronLeft className="h-[18px] w-[18px]" />
        </Link>
        <button
          aria-label="Favoritar"
          className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink hover:bg-white"
        >
          <Heart className="h-[18px] w-[18px]" />
        </button>
        {/* Indicador de imagem (mock) */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
          <span className="h-1.5 w-4 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
        </div>
      </div>

      {/* Componente cliente que faz o configurador + add to cart */}
      <ProductActions product={product} />
    </PageShell>
  );
}
