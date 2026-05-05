# Fluxo de frete

## Validação de CEP (zona de atendimento)

Antes de cotar, verificar se o CEP está em alguma `ShippingZone` ativa.

```ts
async function findZoneByCep(cep: string): Promise<ShippingZone | null> {
  const cleanCep = cep.replace(/\D/g, '');

  // 1. Busca por estado (mais rápido — pega UF do CEP via API ou prefix)
  const uf = await getUfFromCep(cleanCep);
  const byState = await prisma.shippingZone.findFirst({
    where: { active: true, states: { has: uf } },
  });
  if (byState) return byState;

  // 2. Busca por faixa de CEP (mais granular)
  const byRange = await prisma.shippingZone.findFirst({
    where: {
      active: true,
      cepRanges: {
        some: { cepStart: { lte: cleanCep }, cepEnd: { gte: cleanCep } },
      },
    },
  });
  return byRange;
}
```

V1: única zona = `["SP"]`. CEP fora de SP retorna erro `OUT_OF_AREA` no checkout.

## Cubagem (essencial para espuma e tecido)

Espuma é leve mas volumosa. Tecido é mais denso. Os Correios cobram pelo **maior** entre peso real e peso volumétrico:

```
peso_volumétrico = (length × width × height) / 6000   (cm³ / 6000)
peso_cobrado = max(peso_real, peso_volumétrico)
```

Cada `Variant` tem dimensões **por unidade vendida**. O frete agrega:

```ts
function calculatePackage(items: Array<{ variant; quantity }>) {
  let totalWeightKg = 0;
  let totalVolumeCm3 = 0;

  for (const { variant, quantity } of items) {
    const qty = Number(quantity);
    totalWeightKg += Number(variant.unitWeightKg) * qty;
    totalVolumeCm3 +=
      variant.unitLengthCm * variant.unitWidthCm * variant.unitHeightCm * qty;
  }

  // Aproxima como cubo equivalente — bom o suficiente para cotação inicial
  const sideCm = Math.cbrt(totalVolumeCm3);
  return {
    weightKg: Math.max(totalWeightKg, totalVolumeCm3 / 6000),
    lengthCm: Math.ceil(sideCm),
    widthCm: Math.ceil(sideCm),
    heightCm: Math.ceil(sideCm),
  };
}
```

> Observação: na prática, espuma vai em rolo/placa, não em cubo. Para a v1 essa aproximação serve para cotar. Quando a operação amadurecer, modelar embalagens fixas (caixa M, caixa G, rolo) e empacotar de verdade.

## Cotação Melhor Envio

```ts
POST https://melhorenvio.com.br/api/v2/me/shipment/calculate
{
  from: { postal_code: process.env.MELHOR_ENVIO_FROM_CEP },
  to:   { postal_code: cep },
  package: { height, width, length, weight }
}
```

Retorna lista de serviços (PAC, SEDEX, Jadlog .Package, etc.) com preço e prazo. Filtrar pelos `allowedCarriers` da `ShippingZone`.

## Geração de etiqueta

Após pagamento aprovado, worker gera etiqueta:

1. `POST /me/cart` adiciona ao carrinho do Melhor Envio.
2. `POST /me/shipment/checkout` paga (saldo do Melhor Envio).
3. `POST /me/shipment/generate` gera PDF da etiqueta.
4. Salva `Shipment.labelUrl`, `meliEnvioId`, `trackingCode`.

## Rastreio

Webhook do Melhor Envio (`shipment.tracking.update`) → atualiza `Shipment.status` e dispara notificação por e-mail/WhatsApp.

## Limites da v1

- Apenas SP.
- Sem retirada na loja.
- Sem agendamento de entrega.
- Sem múltiplos endereços por pedido.
- Sem split de envio (todos os itens vão juntos).
