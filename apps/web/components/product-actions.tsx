'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, Scissors, Minus, Plus, ShoppingBag, Truck, Package } from 'lucide-react';
import clsx from 'clsx';
import type { Product } from '../lib/catalog';
import { formatBRL, formatUnit } from '../lib/format';
import { useCart } from '../lib/cart-store';

/**
 * Bloco interativo da PDP: info, configurador de corte, tabs e CTA.
 * É client-side porque usa estado local (qty, tab) e o store do carrinho.
 */
export function ProductActions({ product }: { product: Product }) {
  const router = useRouter();
  const addItem = useCart((s) => s.addItem);
  const [qty, setQty] = useState<number>(product.unit === 'M2' ? 2.0 : 1.5);
  const [tab, setTab] = useState<'specs' | 'ship' | 'rev'>('specs');
  const [adding, setAdding] = useState(false);

  const total = product.basePrice * qty;
  const isMetric = product.unit === 'M2' || product.unit === 'M';
  const unitLabel = formatUnit(product.unit);

  function inc() {
    setQty((q) => +(q + 0.5).toFixed(1));
  }
  function dec() {
    setQty((q) => Math.max(0.5, +(q - 0.5).toFixed(1)));
  }

  async function handleAdd() {
    setAdding(true);
    addItem(product, qty);
    // pequena pausa pro feedback visual
    await new Promise((r) => setTimeout(r, 200));
    router.push('/carrinho');
  }

  return (
    <>
      {/* Info principal */}
      <div className="px-5 pt-5">
        <div className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
          {product.sku} · {product.category}
        </div>
        <h1 className="mt-1.5 font-serif text-[26px] font-normal leading-tight tracking-tighter text-ink">
          {product.name}
        </h1>

        {product.rating != null && (
          <div className="mt-2 flex items-center gap-2">
            <span className="flex items-center gap-1 text-[12px] tabular-nums">
              <Star className="h-[13px] w-[13px] fill-ink text-ink" />
              {product.rating.toFixed(1)}
            </span>
            <span className="text-[11px] text-ink-muted">
              ({product.reviewsCount} avaliações)
            </span>
          </div>
        )}

        <div className="mt-3.5 flex items-baseline gap-1.5">
          <span className="text-[30px] font-bold tracking-tightest tabular-nums">
            {formatBRL(product.basePrice)}
          </span>
          <span className="font-mono text-[12px] text-ink-muted">por {unitLabel}</span>
        </div>
      </div>

      {/* Configurador de corte */}
      {isMetric && (
        <div className="mx-5 mt-6 rounded-editorial border border-border bg-surface p-4">
          <div className="mb-3.5 flex items-center gap-2">
            <Scissors className="h-4 w-4" />
            <div className="text-[13px] font-semibold tracking-tight">Calcular medida</div>
            <span className="ml-auto rounded bg-accent px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-bg">
              CORTE GRÁTIS
            </span>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between py-1">
            <div className="text-[12px] text-ink-soft">Quantidade</div>
            <div className="flex items-center gap-3">
              <button
                onClick={dec}
                aria-label="Diminuir"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg text-ink hover:border-border-strong"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="min-w-[64px] text-center font-mono text-[18px] font-semibold tabular-nums">
                {qty.toFixed(1).replace('.', ',')} {unitLabel}
              </span>
              <button
                onClick={inc}
                aria-label="Aumentar"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg text-ink hover:border-border-strong"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <input
            type="range"
            min={0.5}
            max={10}
            step={0.5}
            value={qty}
            onChange={(e) => setQty(+e.target.value)}
            className="mt-3.5 w-full"
          />
          <div className="flex justify-between font-mono text-[10px] text-ink-muted">
            <span>0,5{unitLabel}</span>
            <span>10{unitLabel}</span>
          </div>

          {/* Quick pick */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {[1, 1.5, 2, 2.5, 3].map((q) => (
              <button
                key={q}
                onClick={() => setQty(q)}
                className={clsx(
                  'rounded-md border px-3 py-1.5 font-mono text-[11px] font-semibold transition',
                  qty === q
                    ? 'border-ink bg-ink text-bg'
                    : 'border-border bg-transparent text-ink hover:border-border-strong',
                )}
              >
                {q.toString().replace('.', ',')}{unitLabel}
              </button>
            ))}
          </div>

          {/* Resumo */}
          <div className="mt-3.5 rounded-md bg-bg p-3 font-mono text-[11px]">
            <div className="flex justify-between text-ink-soft">
              <span>
                {qty.toFixed(1).replace('.', ',')} × {formatBRL(product.basePrice)}
              </span>
              <span className="tabular-nums">{formatBRL(total)}</span>
            </div>
            <div className="mt-1.5 flex justify-between text-[13px] font-bold text-ink">
              <span>Total</span>
              <span className="tabular-nums">{formatBRL(total)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mt-6 px-5">
        <div className="flex gap-0 border-b border-border">
          {(
            [
              ['specs', 'Especificações'],
              ['ship', 'Frete'],
              ['rev', 'Avaliações'],
            ] as const
          ).map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={clsx(
                '-mb-px flex-1 border-b-2 px-0 py-2.5 text-[12px] font-semibold transition',
                tab === k
                  ? 'border-ink text-ink'
                  : 'border-transparent text-ink-muted hover:text-ink-soft',
              )}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="min-h-[120px] py-3.5 pb-32">
          {tab === 'specs' && (
            <div className="font-mono text-[12px]">
              {[
                ['Densidade', product.density ?? '—'],
                ['Espessura', product.thicknessCm ? `${product.thicknessCm} cm` : '—'],
                ['Largura', product.widthM ? `${product.widthM.toLocaleString('pt-BR')} m` : '—'],
                ['Gramatura', product.grammage ? `${product.grammage} g/m²` : '—'],
                ['Composição', product.composition ?? (product.density ? '100% poliuretano' : '—')],
                ['Origem', 'São Paulo / SP'],
              ]
                .filter(([, v]) => v !== '—')
                .map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between border-b border-border py-2.5"
                  >
                    <span className="text-ink-soft">{k}</span>
                    <span className="font-medium text-ink">{v}</span>
                  </div>
                ))}
            </div>
          )}
          {tab === 'ship' && (
            <div className="text-[13px] leading-relaxed text-ink-soft">
              <div className="flex items-start gap-2.5 py-2.5">
                <Truck className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-ink">SEDEX · 2-3 dias úteis</div>
                  <div className="text-[12px]">R$ 24,90 · CEP 01310-100</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 py-2.5">
                <Package className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-ink">PAC · 5-7 dias úteis</div>
                  <div className="text-[12px]">R$ 14,90</div>
                </div>
              </div>
              <div className="rounded-md bg-surface p-3 text-[12px]">
                Frete grátis em pedidos acima de R$ 350.
              </div>
            </div>
          )}
          {tab === 'rev' && (
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-[38px] font-bold tracking-tightest">
                  {product.rating?.toFixed(1) ?? '—'}
                </span>
                <span className="text-[12px] text-ink-muted">
                  baseado em {product.reviewsCount ?? 0} compras
                </span>
              </div>
              <div className="mt-3.5 rounded-md border border-border p-3.5">
                <div className="mb-1.5 flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-ink text-ink" />
                  ))}
                </div>
                <div className="text-[13px] font-semibold">Encaixou perfeito</div>
                <div className="mt-1 text-[12px] leading-relaxed text-ink-soft">
                  Comprei 2,5m e veio cortado certinho. Recomendo.
                </div>
                <div className="mt-2 text-[11px] text-ink-muted">
                  Carla M. · há 3 semanas
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 left-0 right-0 z-20 border-t border-border bg-bg/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2.5">
          <div>
            <div className="font-mono text-[10px] text-ink-muted">TOTAL</div>
            <div className="text-[18px] font-bold tracking-tighter tabular-nums">
              {formatBRL(total)}
            </div>
          </div>
          <button
            onClick={handleAdd}
            disabled={adding}
            className="btn-primary flex-1 disabled:opacity-50"
          >
            <ShoppingBag className="h-4 w-4" />
            {adding ? 'Adicionando…' : 'Adicionar'}
          </button>
        </div>
      </div>
    </>
  );
}
