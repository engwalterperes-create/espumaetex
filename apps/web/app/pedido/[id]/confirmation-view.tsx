'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Check, Copy, Home } from 'lucide-react';
import { formatBRL } from '../../../lib/format';
import { PixQrCode } from '../../../components/pix-qr-code';

interface SavedOrder {
  id: string;
  items: Array<{
    id: string;
    name: string;
    sku: string;
    qty: number;
    basePrice: number;
    unit: string;
    swatch: string;
  }>;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  paymentMethod: 'pix' | 'card' | 'boleto';
  createdAt: string;
}

/**
 * Confirmação — Tela 07 do design.
 * Check verde, "Escaneie para pagar", QR code (gerado), código copia-e-cola,
 * resumo do pedido.
 */
export function OrderConfirmation({ orderId }: { orderId: string }) {
  const [order, setOrder] = useState<SavedOrder | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem(`order:${orderId}`);
    if (raw) setOrder(JSON.parse(raw));
  }, [orderId]);

  // Pix copy-paste mockado (formato BR Code simplificado)
  const pixCode = `00020126360014BR.GOV.BCB.PIX0114+5511999999999520400005303986540${
    order ? order.total.toFixed(2).length : 7
  }${order ? order.total.toFixed(2) : '0.00'}5802BR5917ESPUMATEX LTDA6009SAO PAULO62070503${orderId}6304ABCD`;

  function handleCopy() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  }

  if (!order) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
        <h2 className="font-serif text-[22px] italic tracking-tighter">
          Pedido {orderId}
        </h2>
        <p className="mt-2 text-[13px] text-ink-soft">
          Não encontramos os detalhes deste pedido nesta sessão. Entre em contato
          se você acredita que isso é um erro.
        </p>
        <Link href="/" className="btn-primary mt-4">
          <Home className="h-4 w-4" /> Voltar pra home
        </Link>
      </div>
    );
  }

  return (
    <div className="px-5 pt-6 pb-12">
      {/* Cabeçalho */}
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-good/15 text-good">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
          Etapa 3 de 3 · aguardando Pix
        </div>
        <h1 className="mt-1 font-serif text-[28px] font-normal tracking-tighter">
          Escaneie para pagar
        </h1>
        <p className="mt-1 font-mono text-[11px] text-ink-muted">
          Pedido #{order.id}
        </p>
      </div>

      {/* QR */}
      <div className="mt-6 rounded-editorial border border-border bg-surface p-5">
        <div className="flex items-center justify-center">
          <PixQrCode value={pixCode} size={180} />
        </div>

        <div className="mt-4 text-center font-mono text-[11px] text-ink-muted">
          Expira em 30:00
        </div>

        <button
          onClick={handleCopy}
          className="btn-secondary mt-4 w-full"
          type="button"
        >
          <Copy className="h-4 w-4" />
          {copied ? 'Código copiado' : 'Copiar código Pix'}
        </button>

        <p className="mt-3 break-all rounded-md bg-bg p-2.5 text-center font-mono text-[10px] text-ink-muted">
          {pixCode}
        </p>
      </div>

      {/* Próximos passos */}
      <div className="mt-4 rounded-editorial border border-border bg-surface p-4">
        <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
          Acompanhamento
        </div>
        <ul className="mt-3 space-y-2.5">
          <li className="flex items-start gap-2 text-[13px]">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            <div>
              <span className="font-medium text-ink">Pedido recebido</span>
              <span className="ml-1 text-ink-muted">— hoje, 14:32</span>
            </div>
          </li>
          <li className="flex items-start gap-2 text-[13px]">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-border-strong" />
            <span className="text-ink-soft">Aguardando pagamento</span>
          </li>
          <li className="flex items-start gap-2 text-[13px]">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-border" />
            <span className="text-ink-muted">Em separação / corte</span>
          </li>
          <li className="flex items-start gap-2 text-[13px]">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-border" />
            <span className="text-ink-muted">Enviado</span>
          </li>
        </ul>
      </div>

      {/* Resumo */}
      <div className="mt-4 rounded-editorial border border-border bg-surface p-4">
        <div className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
          Resumo
        </div>
        {order.items.map((it) => (
          <div key={it.id} className="flex gap-2.5 border-t border-border py-2.5 first:border-t-0">
            <div
              className="h-10 w-10 shrink-0 rounded-md"
              style={{ background: it.swatch }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-ink">{it.name}</div>
              <div className="font-mono text-[11px] text-ink-muted">
                {it.qty.toFixed(1).replace('.', ',')}{' '}
                {it.unit === 'M2' ? 'm²' : it.unit === 'M' ? 'm' : 'un'}
              </div>
            </div>
            <div className="text-[12px] font-semibold tabular-nums">
              {formatBRL(it.basePrice * it.qty)}
            </div>
          </div>
        ))}
        <div className="mt-3 border-t border-border pt-2.5 font-mono text-[12px] text-ink-soft">
          <div className="flex justify-between py-0.5">
            <span>Subtotal</span>
            <span className="tabular-nums text-ink">{formatBRL(order.subtotal)}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span>Frete</span>
            <span className="tabular-nums text-ink">{formatBRL(order.shipping)}</span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between py-0.5">
              <span>Descontos</span>
              <span className="tabular-nums text-good">
                -{formatBRL(order.discount)}
              </span>
            </div>
          )}
          <div className="mt-1.5 flex justify-between border-t border-border pt-2 text-[15px] font-bold text-ink">
            <span>Total</span>
            <span className="tabular-nums">{formatBRL(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <Link href="/" className="btn-secondary w-full">
          <Home className="h-4 w-4" /> Voltar pra home
        </Link>
        <Link href="/categoria/espumas" className="btn-ghost mx-auto">
          continuar comprando
        </Link>
      </div>
    </div>
  );
}
