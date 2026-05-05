'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, X, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/cart-store';
import { formatBRL, formatUnit } from '../../lib/format';

/**
 * Carrinho — Tela 05 do design.
 * Itens com thumb (swatch), stepper, cupom, sumário, sticky CTA.
 */
export function CartView() {
  const { items, removeItem, updateQty, applyCoupon, coupon, removeCoupon } =
    useCart();
  const subtotal = useCart((s) => s.subtotal());
  const shipping = useCart((s) => s.shippingCost());
  const discount = useCart((s) => s.discountAmount());
  const total = useCart((s) => s.total());

  const [hydrated, setHydrated] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <div className="px-5 py-12 text-center text-[13px] text-ink-muted">
        Carregando…
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-ink-muted">
          <ShoppingBag className="h-7 w-7" />
        </div>
        <h2 className="mt-4 font-serif text-[24px] font-normal italic tracking-tighter">
          Carrinho vazio
        </h2>
        <p className="mt-1.5 max-w-[260px] text-[13px] text-ink-soft">
          Comece pelo catálogo — corte mínimo de 0,5m.
        </p>
        <Link href="/categoria/espumas" className="btn-primary mt-5">
          Ver catálogo
        </Link>
      </div>
    );
  }

  function handleCoupon(e: React.FormEvent) {
    e.preventDefault();
    if (!couponInput.trim()) return;
    if (applyCoupon(couponInput)) {
      setCouponInput('');
      setCouponError(null);
    } else {
      setCouponError('Cupom inválido');
    }
  }

  return (
    <>
      <div className="px-5 pt-3">
        <Link
          href="/"
          className="inline-flex h-9 w-9 -ml-2 items-center justify-center rounded-full text-ink hover:bg-surface"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="mt-2 font-serif text-[36px] font-normal italic leading-none tracking-tighter">
          Carrinho
        </h1>
        <p className="mt-2 font-mono text-[11px] text-ink-muted">
          {items.length} {items.length === 1 ? 'item' : 'itens'}
        </p>
      </div>

      {/* Itens */}
      <div className="flex flex-col gap-2.5 px-5 pt-3">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex gap-3 rounded-editorial border border-border bg-surface p-3"
          >
            <div
              className="h-[72px] w-[72px] shrink-0 rounded-md"
              style={{ background: it.swatch }}
            />
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                {it.sku}
              </div>
              <div className="mt-0.5 font-serif text-[15px] leading-tight tracking-tighter">
                {it.name}
              </div>
              <div className="mt-1 font-mono text-[11px] text-ink-soft">
                {it.qty.toFixed(1).replace('.', ',')} {formatUnit(it.unit)} ·{' '}
                {formatBRL(it.basePrice)}/{formatUnit(it.unit)}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateQty(it.id, it.qty - 0.5)}
                    aria-label="Diminuir"
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-bg text-ink"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="min-w-8 text-center font-mono text-[12px] font-semibold">
                    {it.qty.toFixed(1).replace('.', ',')}
                  </span>
                  <button
                    onClick={() => updateQty(it.id, it.qty + 0.5)}
                    aria-label="Aumentar"
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-bg text-ink"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <div className="text-[14px] font-bold tracking-tight tabular-nums">
                  {formatBRL(it.basePrice * it.qty)}
                </div>
              </div>
            </div>
            <button
              onClick={() => removeItem(it.id)}
              aria-label="Remover"
              className="self-start text-ink-muted hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Cupom */}
      <div className="px-5 pt-3">
        {coupon ? (
          <div className="flex items-center justify-between rounded-editorial border border-dashed border-border-strong bg-surface p-3">
            <div className="text-[13px]">
              <span className="font-mono font-semibold">{coupon.code}</span>
              <span className="ml-2 text-ink-soft">
                aplicado · -{(coupon.discountPct * 100).toFixed(0)}%
              </span>
            </div>
            <button
              onClick={removeCoupon}
              className="text-[12px] text-ink-muted hover:text-ink"
            >
              remover
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleCoupon}
            className="flex gap-1.5 rounded-editorial border border-dashed border-border-strong bg-surface p-3"
          >
            <input
              value={couponInput}
              onChange={(e) => {
                setCouponInput(e.target.value);
                setCouponError(null);
              }}
              placeholder="Cupom de desconto"
              className="input-clean flex-1 px-1"
            />
            <button
              type="submit"
              className="rounded-md border border-border bg-transparent px-3.5 py-1.5 text-[12px] font-semibold text-ink hover:border-border-strong"
            >
              Aplicar
            </button>
          </form>
        )}
        {couponError && (
          <p className="mt-1.5 font-mono text-[10px] text-bad">{couponError}</p>
        )}
        <p className="mt-1.5 font-mono text-[10px] text-ink-muted">
          Tente: ESPUMA10, ESTOFADOR15
        </p>
      </div>

      {/* Sumário */}
      <div className="px-5 pb-32 pt-3">
        <div className="rounded-editorial bg-surface p-4 font-mono text-[13px]">
          <Row label="Subtotal" value={subtotal} />
          <Row
            label={shipping === 0 ? 'Frete · grátis' : 'Frete · SEDEX'}
            value={shipping}
            free={shipping === 0}
          />
          {discount > 0 && (
            <Row label="Descontos" value={-discount} highlight="good" />
          )}
          <div className="mt-2 flex justify-between border-t border-border pt-2.5 text-[16px] font-bold text-ink">
            <span>Total</span>
            <span className="tabular-nums">{formatBRL(total)}</span>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 z-20 border-t border-border bg-bg/95 px-4 py-3 backdrop-blur">
        <Link href="/checkout" className="btn-primary w-full">
          Ir para pagamento <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}

function Row({
  label,
  value,
  free,
  highlight,
}: {
  label: string;
  value: number;
  free?: boolean;
  highlight?: 'good';
}) {
  const colorClass = highlight === 'good' ? 'text-good' : 'text-ink';
  return (
    <div className="flex justify-between py-1 text-ink-soft">
      <span>{label}</span>
      {free ? (
        <span className="font-semibold text-good">grátis</span>
      ) : (
        <span className={`tabular-nums ${colorClass}`}>
          {value < 0 ? '-' : ''}
          {formatBRL(Math.abs(value))}
        </span>
      )}
    </div>
  );
}
