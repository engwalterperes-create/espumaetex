'use client';

import Link from 'next/link';
import { Search, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/cart-store';

/**
 * Header editorial — barra superior fina com logo serif itálico
 * "Espuma" + "tex" laranja e ícones discretos.
 */
export function Header() {
  const count = useCart((s) => s.items.length);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur">
      <div className="container-mobile flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[22px] font-medium italic tracking-tighter text-ink"
        >
          Espuma<span className="text-accent">tex</span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            aria-label="Buscar"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-surface"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            aria-label="Favoritos"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-surface"
          >
            <Heart className="h-[18px] w-[18px]" />
          </button>
          <Link
            href="/carrinho"
            aria-label="Carrinho"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-surface"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 font-mono text-[9px] font-semibold text-bg">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
