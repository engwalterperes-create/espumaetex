# Fluxo de pedido

```
[Cliente]                [Web]              [API]                 [PostgreSQL]      [Mercado Pago]    [Melhor Envio]   [PlugNotas]
   │                       │                  │                       │                   │                 │                │
   │ Adiciona produto ao carrinho             │                       │                   │                 │                │
   ├──────────────────────▶│                  │                       │                   │                 │                │
   │                       │ POST /cart/items │                       │                   │                 │                │
   │                       ├─────────────────▶│                       │                   │                 │                │
   │                       │                  │ INSERT cart_item      │                   │                 │                │
   │                       │                  │ + reserva estoque     │                   │                 │                │
   │                       │                  ├──────────────────────▶│                   │                 │                │
   │                       │                  │                       │                   │                 │                │
   │ Vai pra checkout                                                                                                          │
   ├──────────────────────▶│                  │                       │                   │                 │                │
   │                       │ POST /checkout/quote-shipping            │                   │                 │                │
   │                       ├─────────────────▶│ Valida ShippingZone   │                   │                 │                │
   │                       │                  ├──────────────────────▶│                   │                 │                │
   │                       │                  │ Cota Melhor Envio (cubado)                │                 │                │
   │                       │                  ├────────────────────────────────────────────────────────────▶│                │
   │                       │                  │◀────────────────────────────────────────────────────────────┤                │
   │                       │                  │                       │                   │                 │                │
   │ Confirma + escolhe Pix                                                                                                    │
   ├──────────────────────▶│                  │                       │                   │                 │                │
   │                       │ POST /checkout   │                       │                   │                 │                │
   │                       ├─────────────────▶│ Cria Order PENDING + OrderItem (snapshot) │                 │                │
   │                       │                  ├──────────────────────▶│                   │                 │                │
   │                       │                  │ Cria Payment + Preference no MP            │                 │                │
   │                       │                  ├──────────────────────────────────────────▶│                 │                │
   │                       │                  │◀──────────────────────────────────────────┤ retorna QR Code/URL              │
   │                       │◀─────────────────┤ retorna QR + URL Pix  │                   │                 │                │
   │◀──────────────────────┤                  │                       │                   │                 │                │
   │ Cliente paga                                                                          │                 │                │
   │ ──────────────────────────────────────────────────────────────────────────────────────▶                │                │
   │                       │                  │                       │                   │                 │                │
   │                       │                  │ MP envia webhook /api/payments/webhook    │                 │                │
   │                       │                  │◀──────────────────────────────────────────┤                 │                │
   │                       │                  │ Salva WebhookEvent (idempotente)          │                 │                │
   │                       │                  ├──────────────────────▶│                   │                 │                │
   │                       │                  │ Order → PAID, Payment → APPROVED          │                 │                │
   │                       │                  │ StockMovement: SALE                       │                 │                │
   │                       │                  │ Dispara fila: emit-nfe + send-confirmation-email             │                │
   │                       │                  │                       │                   │                 │                │
   │                       │                  │ [Worker] Emite NF-e via PlugNotas         │                 │                │
   │                       │                  ├──────────────────────────────────────────────────────────────────────────────▶│
   │                       │                  │◀──────────────────────────────────────────────────────────────────────────────┤
   │                       │                  │ Salva Invoice + xmlUrl/pdfUrl              │                 │                │
   │                       │                  │                       │                   │                 │                │
   │                       │                  │ [Worker] Gera etiqueta no Melhor Envio                       │                │
   │                       │                  ├────────────────────────────────────────────────────────────▶│                │
   │                       │                  │◀────────────────────────────────────────────────────────────┤                │
   │                       │                  │ Order → READY_TO_SHIP, Shipment criado     │                 │                │
   │                       │                  │                       │                   │                 │                │
   │ Recebe NF-e + tracking por e-mail                                                     │                 │                │
   │◀──────────────────────────────────────────────────────────────────                                                       │
```

## Estados do `Order`

1. `PENDING_PAYMENT` — pedido criado, aguardando pagamento. **Estoque reservado.**
2. `PAID` — pagamento confirmado pelo gateway.
3. `PROCESSING` — equipe em separação/corte.
4. `READY_TO_SHIP` — pronto pra envio, etiqueta gerada.
5. `SHIPPED` — etiqueta lida pela transportadora.
6. `DELIVERED` — entrega confirmada.
7. `CANCELLED` / `REFUNDED` — terminal, libera estoque.

## Eventos que mudam estado

- Pagamento aprovado (webhook MP) → `PAID`
- Admin marca como em separação → `PROCESSING`
- Admin gera etiqueta → `READY_TO_SHIP`
- Webhook do Melhor Envio (in_transit) → `SHIPPED`
- Webhook do Melhor Envio (delivered) → `DELIVERED`
- Cliente cancela antes do pagamento OU pagamento expira (Pix) → `CANCELLED`
- Estorno via gateway → `REFUNDED`
