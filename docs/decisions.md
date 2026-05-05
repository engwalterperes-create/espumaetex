# Decisões de arquitetura (ADRs)

## ADR-001 — Monorepo com pnpm workspaces

**Decisão:** monorepo com `apps/api`, `apps/web`, `packages/db`, `packages/ui`.
**Por quê:** schema Prisma e tipos compartilhados entre front e back sem publicar pacote. Deploy independente de cada app.
**Alternativas descartadas:** Turborepo (overhead maior pra v1), repositórios separados (custo de manter tipos sincronizados).

## ADR-002 — Direção de marca: A (Tech Neutral)

**Decisão:** seguir com a Direção A — paleta neutra (off-white/preto), tipografia Inter + JetBrains Mono, acento amarelo neon (#E8FF52) usado pontualmente.
**Por quê:** combina com catálogo técnico (densidades, gramaturas, abrasão) e tem ar contemporâneo sem comprometer profissionalismo.
**Custo:** ar mais "tecnológico" que "artesanal" — pode não atrair o cliente final que procura experiência mais quente.

## ADR-003 — Venda por unidade no schema

**Decisão:** `UnitOfMeasure` (M, M², M³, UNIT) é campo do `Product`, e `stockQuantity` da variante usa `Decimal(12,3)` na mesma unidade.
**Por quê:** evita conversão implícita. Cada produto deixa explícito como é vendido. UI mostra "R$ 89,90/m²" sem ambiguidade.

## ADR-004 — Atributos críticos tipados em `Variant`

**Decisão:** `color`, `colorHex`, `density`, `thicknessCm`, `widthM`, `grammage`, `abrasionCycles` são colunas da tabela `Variant`. Outros atributos vão em `attributes Json`.
**Por quê:** filtros principais (densidade, espessura, cor) ficam indexáveis e baratos. JSON puro era flexível mas ruim pra busca e índices.

## ADR-005 — Frete por `ShippingZone` em vez de UF hardcoded

**Decisão:** modelo `ShippingZone` com lista de UFs/CEPs aceitos por zona, prazo, custo base e mínimo pra frete grátis.
**Por quê:** v1 começa com SP, mas expandir vira mudança de dado, não de código. CEPs do interior podem ter prazo diferente da capital.

## ADR-006 — Snapshot em `OrderItem`

**Decisão:** copiar `productName`, `variantName`, `unitPrice`, `unitOfMeasure`, etc. do produto pro pedido na hora da compra.
**Por quê:** quando o produto for editado depois, o pedido antigo continua íntegro. Auditoria fiscal exige isso.

## ADR-007 — `WebhookEvent` com unique key

**Decisão:** tabela `WebhookEvent` com `@@unique([gateway, externalId])` e processamento idempotente.
**Por quê:** Mercado Pago às vezes manda o mesmo webhook duas vezes. Processar pagamento duas vezes seria desastre.

## ADR-008 — `reservedQty` separado de `stockQuantity`

**Decisão:** estoque tem dois campos: total e reservado. Saldo disponível = `stockQuantity - reservedQty`.
**Por quê:** pedido em PENDING_PAYMENT já reserva, mas se o pagamento falhar/expirar, o estoque volta. Evita oversell sob concorrência.

## ADR-009 — Cubagem por unidade vendida

**Decisão:** `Variant.unitWeightKg`, `unitLengthCm`, `unitWidthCm`, `unitHeightCm` representam **uma unidade** (1m, 1m², 1m³). O frete multiplica pela quantidade na hora da cotação.
**Por quê:** espuma é volumosa. Sem cubagem precisa, frete é cotado errado e a margem some.

## ADR-010 — Dados fiscais por produto

**Decisão:** `Product` tem `ncm`, `cfop`, `fiscalOrigin`, `cstCsosn`, `ipiPercent`, `icmsPercent`.
**Por quê:** PlugNotas exige NCM e CFOP por produto pra emitir NF-e. Sem isso, não emite. Centralizar no produto evita repetição na emissão.

## ADR-011 — App Router com SSG/ISR

**Decisão:** páginas de catálogo (`/categoria/*`, `/produto/*`) com revalidate de 60s. Checkout SSR completo.
**Por quê:** SEO é vital pra e-commerce. Listagens não mudam toda hora; checkout precisa estado fresco.
