'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Zap, CreditCard, FileText, MapPin, Truck } from 'lucide-react';
import clsx from 'clsx';
import { useCart } from '../../lib/cart-store';
import { formatBRL, formatUnit } from '../../lib/format';

/**
 * Pagamento — Tela 06 do design.
 * Endereço (mock), frete, formas de pagamento (Pix com -5%, cartão, boleto),
 * resumo. Ao confirmar, cria o pedido (mock) e redireciona pra tela de Pix.
 */
export function CheckoutView() {
  const router = useRouter();
  const { items, paymentMethod, setPaymentMethod, clear } = useCart();
  const subtotal = useCart((s) => s.subtotal());
  const shipping = useCart((s) => s.shippingCost());
  const discount = useCart((s) => s.discountAmount());
  const total = useCart((s) => s.total());

  const [hydrated, setHydrated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [shipMethod, setShipMethod] = useState<'sedex' | 'pac' | 'tra'>('sedex');

  useEffect(() => setHydrated(true), []);

  if (!hydrated) {
    return (
      <div className="px-5 py-12 text-center text-[13px] text-ink-muted">Carregando…</div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
        <h2 className="font-serif text-[22px] italic">Carrinho vazio</h2>
        <Link href="/categoria/espumas" className="btn-primary mt-4">
          Ver catálogo
        </Link>
      </div>
    );
  }

  async function handleConfirm() {
    setSubmitting(true);
    // Simula POST /api/checkout — quando a API estiver implementada,
    // troque por apiPost('/checkout', { items, paymentMethod, ... })
    await new Promise((r) => setTimeout(r, 600));
    const orderId =
      'EFX-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    // guardamos o resumo pra tela de confirmação ler
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(
        `order:${orderId}`,
        JSON.stringify({
          id: orderId,
          items,
          subtotal,
          shipping,
          discount,
          total,
          paymentMethod,
          createdAt: new Date().toISOString(),
        }),
      );
    }
    clear();
    router.push(`/pedido/${orderId}`);
  }

  return (
    <>
      <div className="px-5 pt-3">
        <Link
          href="/carrinho"
          className="inline-flex h-9 w-9 -ml-2 items-center justify-center rounded-full text-ink hover:bg-surface"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="mt-2 font-serif text-[36px] font-normal italic leading-none tracking-tighter">
          Pagamento
        </h1>
      </div>

      {/* Endereço */}
      <Section icon={<MapPin className="h-3.5 w-3.5" />} title="Entrega" right="trocar">
        <div className="text-[13px] leading-relaxed text-ink">
          Casa
          <div className="mt-0.5 text-[12px] text-ink-soft">
            Av. Paulista, 1000 — apto 502
            <br />
            Bela Vista, São Paulo — SP
            <br />
            01310-100
          </div>
        </div>
        <div className="mt-2.5 flex items-start gap-2 rounded-md bg-bg p-2.5 text-[12px] text-ink-soft">
          <Truck className="h-3.5 w-3.5 shrink-0 mt-0.5" />
          <span>
            {shipMethod === 'sedex' && 'SEDEX · entrega prevista 2-3 dias úteis'}
            {shipMethod === 'pac' && 'PAC · entrega prevista 5-7 dias úteis'}
            {shipMethod === 'tra' && 'Transportadora · 7-10 dias úteis (até 50kg)'}
          </span>
        </div>
      </Section>

      {/* Frete */}
      <Section icon={<Truck className="h-3.5 w-3.5" />} title="Frete">
        {(
          [
            { id: 'sedex', name: 'SEDEX', days: '2-3 dias úteis', price: 24.9 },
            { id: 'pac', name: 'PAC', days: '5-7 dias úteis', price: 14.9 },
            { id: 'tra', name: 'Transportadora', days: '7-10 dias úteis · até 50kg', price: 39.9 },
          ] as const
        ).map((o) => (
          <button
            key={o.id}
            onClick={() => setShipMethod(o.id)}
            className="flex w-full items-center gap-2.5 border-t border-border py-2.5 text-left"
          >
            <span
              className={clsx(
                'relative h-[18px] w-[18px] rounded-full border-2',
                shipMethod === o.id ? 'border-ink' : 'border-border',
              )}
            >
              {shipMethod === o.id && (
                <span className="absolute inset-[3px] rounded-full bg-ink" />
              )}
            </span>
            <div className="flex-1">
              <div className="text-[13px] font-semibold text-ink">{o.name}</div>
              <div className="font-mono text-[11px] text-ink-muted">{o.days}</div>
            </div>
            <div className="text-[13px] font-semibold tabular-nums">
              {formatBRL(o.price)}
            </div>
          </button>
        ))}
      </Section>

      {/* Formas de pagamento */}
      <Section title="Forma de pagamento">
        {(
          [
            {
              id: 'pix',
              name: 'Pix',
              sub: '5% off · aprovação imediata',
              icon: <Zap className="h-4 w-4" />,
            },
            {
              id: 'card',
              name: 'Cartão de crédito',
              sub: 'Em até 6× sem juros',
              icon: <CreditCard className="h-4 w-4" />,
            },
            {
              id: 'boleto',
              name: 'Boleto',
              sub: 'Aprovação em 1-2 dias úteis',
              icon: <FileText className="h-4 w-4" />,
            },
          ] as const
        ).map((o) => (
          <button
            key={o.id}
            onClick={() => setPaymentMethod(o.id)}
            className="flex w-full items-center gap-3 border-t border-border py-3.5 text-left"
          >
            <span
              className={clsx(
                'relative h-[18px] w-[18px] shrink-0 rounded-full border-2',
                paymentMethod === o.id ? 'border-ink' : 'border-border',
              )}
            >
              {paymentMethod === o.id && (
                <span className="absolute inset-[3px] rounded-full bg-ink" />
              )}
            </span>
            <span className="text-ink-soft">{o.icon}</span>
            <div className="flex-1">
              <div className="text-[13px] font-semibold text-ink">{o.name}</div>
              <div className="text-[11px] text-ink-muted">{o.sub}</div>
            </div>
          </button>
        ))}
      </Section>

      {/* Resumo */}
      <Section title="Resumo">
        {items.map((it) => (
          <div key={it.id} className="flex gap-2.5 border-t border-border py-2.5 first:border-t-0">
            <div
              className="h-11 w-11 shrink-0 rounded-md"
              style={{ background: it.swatch }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-ink">{it.name}</div>
              <div className="font-mono text-[11px] text-ink-muted">
                {it.qty.toFixed(1).replace('.', ',')} {formatUnit(it.unit)}
              </div>
            </div>
            <div className="text-[13px] font-semibold tabular-nums">
              {formatBRL(it.basePrice * it.qty)}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Total">
        <div className="font-mono text-[13px]">
          <SumRow label="Subtotal" value={subtotal} />
          <SumRow label={shipping === 0 ? 'Frete · grátis' : 'Frete · SEDEX'} value={shipping} />
          {discount > 0 && <SumRow label="Descontos" value={-discount} good />}
          <div className="mt-2 flex justify-between border-t border-border pt-2.5 text-[16px] font-bold text-ink">
            <span>Total</span>
            <span className="tabular-nums">{formatBRL(total)}</span>
          </div>
        </div>
      </Section>

      <div className="h-24" />

      {/* Sticky CTA */}
      <div className="sticky bottom-0 z-20 border-t border-border bg-bg/95 px-4 py-3 backdrop-blur">
        <button
          onClick={handleConfirm}
          disabled={submitting}
          className="btn-primary w-full disabled:opacity-50"
        >
          {submitting
            ? 'Processando…'
            : paymentMethod === 'pix'
              ? 'Pagar com Pix'
              : 'Confirmar pedido'}
        </button>
      </div>
    </>
  );
}

function Section({
  title,
  icon,
  right,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  right?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-5 mt-4 rounded-editorial border border-border bg-surface p-4">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
          {icon}
          {title}
        </div>
        {right && (
          <button className="text-[11px] text-ink-soft underline-offset-2 hover:underline">
            {right}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function SumRow({
  label,
  value,
  good,
}: {
  label: string;
  value: number;
  good?: boolean;
}) {
  return (
    <div className="flex justify-between py-1 text-ink-soft">
      <span>{label}</span>
      <span className={`tabular-nums ${good ? 'text-good' : 'text-ink'}`}>
        {value < 0 ? '-' : ''}
        {formatBRL(Math.abs(value))}
      </span>
    </div>
  );
}
