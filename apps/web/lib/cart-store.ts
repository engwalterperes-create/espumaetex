'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, UnitOfMeasure } from './catalog';

export interface CartItem {
  id: string; // product.id
  sku: string;
  slug: string;
  name: string;
  unit: UnitOfMeasure;
  basePrice: number;
  swatch: string;
  qty: number;
  /** dimensão custom (corte sob medida): largura × comprimento em metros */
  customDimensions?: { widthM?: number; lengthM?: number };
}

interface CartState {
  items: CartItem[];
  /** cupom aplicado (mock — a validação real fica no backend) */
  coupon: { code: string; discountPct: number } | null;
  /** método de pagamento selecionado (default Pix) */
  paymentMethod: 'pix' | 'card' | 'boleto';

  // ações
  addItem: (p: Product, qty: number, dims?: { widthM?: number; lengthM?: number }) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  setPaymentMethod: (m: 'pix' | 'card' | 'boleto') => void;

  // selectors (computed)
  count: () => number;
  subtotal: () => number;
  shippingCost: () => number;
  discountAmount: () => number;
  total: () => number;
}

const SHIPPING_FREE_THRESHOLD = 350;
const SHIPPING_BASE = 24.9;
const PIX_DISCOUNT_PCT = 0.05;

// cupons mock — substituir por chamada à API depois
const MOCK_COUPONS: Record<string, number> = {
  ESPUMA10: 0.1,
  ESTOFADOR15: 0.15,
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      coupon: null,
      paymentMethod: 'pix',

      addItem: (p, qty, dims) =>
        set((s) => {
          const existing = s.items.find((i) => i.id === p.id);
          if (existing) {
            return {
              items: s.items.map((i) =>
                i.id === p.id ? { ...i, qty: +(i.qty + qty).toFixed(1) } : i,
              ),
            };
          }
          return {
            items: [
              ...s.items,
              {
                id: p.id,
                sku: p.sku,
                slug: p.slug,
                name: p.name,
                unit: p.unit,
                basePrice: p.basePrice,
                swatch: p.swatch,
                qty: +qty.toFixed(1),
                customDimensions: dims,
              },
            ],
          };
        }),

      updateQty: (id, qty) =>
        set((s) => ({
          items: s.items.map((i) =>
            i.id === id ? { ...i, qty: Math.max(0.5, +qty.toFixed(1)) } : i,
          ),
        })),

      removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

      clear: () => set({ items: [], coupon: null }),

      applyCoupon: (code) => {
        const upper = code.trim().toUpperCase();
        const pct = MOCK_COUPONS[upper];
        if (pct == null) return false;
        set({ coupon: { code: upper, discountPct: pct } });
        return true;
      },

      removeCoupon: () => set({ coupon: null }),

      setPaymentMethod: (m) => set({ paymentMethod: m }),

      count: () => get().items.length,

      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.basePrice * i.qty, 0),

      shippingCost: () => {
        const sub = get().subtotal();
        if (sub === 0) return 0;
        if (sub >= SHIPPING_FREE_THRESHOLD) return 0;
        return SHIPPING_BASE;
      },

      discountAmount: () => {
        const sub = get().subtotal();
        const c = get().coupon;
        const couponD = c ? sub * c.discountPct : 0;
        const pixD = get().paymentMethod === 'pix' ? sub * PIX_DISCOUNT_PCT : 0;
        return couponD + pixD;
      },

      total: () => {
        const sub = get().subtotal();
        return Math.max(0, sub + get().shippingCost() - get().discountAmount());
      },
    }),
    {
      name: 'espumatex-cart',
      partialize: (s) => ({
        items: s.items,
        coupon: s.coupon,
        paymentMethod: s.paymentMethod,
      }),
    },
  ),
);

/** flag para evitar mismatch de hidratação (Next SSR + persist) */
export function useCartHydrated() {
  if (typeof window === 'undefined') return false;
  return true;
}
