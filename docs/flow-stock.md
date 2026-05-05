# Fluxo de estoque

## Modelo conceitual

Cada `Variant` tem dois números de estoque:

- `stockQuantity` — total físico no depósito (m / m² / m³ / un).
- `reservedQty` — total reservado em pedidos `PENDING_PAYMENT`.

**Saldo disponível** (mostrado no site) = `stockQuantity - reservedQty`.

## Operações

### Adicionar ao carrinho

Não reserva ainda. O carrinho é uma "lista de desejos com preço travado". Estoque só é reservado quando o pedido é criado no checkout.

> Decisão: reservar no carrinho gera dor (cliente que abandona trava estoque). Reservar só no checkout, com expiração curta, é o melhor compromisso.

### Criar pedido (checkout)

Em uma transação:

1. Verifica `stockQuantity - reservedQty >= quantity` para cada item.
2. Se OK: incrementa `reservedQty` e cria `Order` com `PENDING_PAYMENT`.
3. Cria `StockMovement` tipo `RESERVATION`.
4. Se Pix: agenda expiração (30 min).
5. Se cartão recusado: mantém reserva por mais X tempo? **Não** — cancela na hora.

### Pagamento aprovado

1. `stockQuantity -= quantity` (saída real).
2. `reservedQty -= quantity` (libera reserva).
3. `StockMovement` tipo `SALE`.
4. `Order → PAID`.

### Pagamento recusado / expirado

1. `reservedQty -= quantity` (libera reserva).
2. `StockMovement` tipo `RELEASE`.
3. `Order → CANCELLED`.

### Devolução

1. `stockQuantity += quantity`.
2. `StockMovement` tipo `RETURN`.
3. `Order → REFUNDED`.

### Sobra de corte

Espuma cortada em medida específica gera retalho. Esse retalho:

- Vai pra `StockMovement` tipo `LOSS` (ou cria SKU de retalho separado se reaproveitar).
- Decisão de modelagem: na v1, tratar como `LOSS` simples. Quando a operação amadurecer, virar SKU de "retalho promocional".

## Concorrência

A reserva precisa ser atômica. Em Prisma:

```ts
await prisma.$transaction(async (tx) => {
  const variant = await tx.variant.findUnique({
    where: { id },
    select: { stockQuantity: true, reservedQty: true },
  });
  const available = variant.stockQuantity.minus(variant.reservedQty);
  if (available.lessThan(qty)) throw new ConflictException('Estoque insuficiente');
  await tx.variant.update({
    where: { id },
    data: { reservedQty: { increment: qty } },
  });
  await tx.stockMovement.create({
    data: { variantId: id, type: 'RESERVATION', quantity: qty },
  });
});
```

Para alta concorrência (campanhas), considerar `SELECT ... FOR UPDATE` ou Redis lock.

## Auditoria

Todo movimento gera `StockMovement`. Pra reconstruir o saldo histórico:

```sql
SELECT SUM(
  CASE
    WHEN type IN ('PURCHASE', 'RETURN', 'ADJUSTMENT') THEN quantity
    WHEN type IN ('SALE', 'LOSS') THEN -quantity
    ELSE 0
  END
)
FROM stock_movement
WHERE variant_id = ? AND created_at <= ?;
```
