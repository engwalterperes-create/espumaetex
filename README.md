# Espumatex

E-commerce de **espumas, tecidos, manta acrílica e fibras siliconadas**, com venda por **metro / m² / m³ / unidade** e corte sob medida. Atendimento inicial: **estado de São Paulo**.

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Frontend | Next.js 15 (App Router) + Tailwind CSS + **Direção B (Editorial Warm)** + Zustand |
| Backend | NestJS 10 + TypeScript |
| ORM / DB | Prisma + PostgreSQL |
| Cache / Filas | Redis + BullMQ |
| Pagamento | Mercado Pago (Pix, cartão, boleto) |
| Frete | Melhor Envio |
| NF-e | PlugNotas |
| E-mail | Resend |
| Mensageria | WhatsApp Cloud API |
| Storage | Cloudflare R2 (S3-compatible) |
| Monorepo | pnpm workspaces |

---

## Estrutura

```
espumatex/
├── apps/
│   ├── api/        # Backend NestJS (REST API)
│   └── web/        # Storefront Next.js
├── packages/
│   ├── db/         # Schema Prisma + client compartilhado
│   ├── ui/         # Componentes compartilhados (futuro)
│   └── types/      # Tipos compartilhados (futuro)
├── prototype/      # Protótipo HTML/JSX original (referência)
└── docs/           # Documentação de arquitetura e fluxos
```

---

## Pré-requisitos

- **Node.js** 20 ou superior (use `.nvmrc`)
- **pnpm** 9 ou superior — `npm install -g pnpm`
- **PostgreSQL** 14+ rodando localmente ou em serviço gerenciado (Neon, Supabase, Railway)
- **Redis** rodando localmente ou em serviço gerenciado

---

## Setup local

```bash
# 1. Instalar dependências
pnpm install

# 2. Copiar variáveis de ambiente
cp .env.example .env
# (edite o .env com seus valores reais)

# 3. Subir o banco e rodar as migrações
pnpm db:migrate

# 4. Popular com dados de exemplo
pnpm db:seed

# 5. Subir API e Web em paralelo
pnpm dev
```

- API: <http://localhost:3001/api>
- Swagger: <http://localhost:3001/api/docs>
- Web: <http://localhost:3000>

---

## Comandos úteis

```bash
pnpm dev              # API + Web em paralelo
pnpm dev:api          # só API
pnpm dev:web          # só Web
pnpm build            # build de tudo
pnpm typecheck        # tsc --noEmit em todos os pacotes
pnpm format           # prettier em todos os arquivos

pnpm db:generate      # gerar Prisma Client
pnpm db:migrate       # criar migration nova
pnpm db:studio        # Prisma Studio (UI do banco)
pnpm db:seed          # popular dados de exemplo
```

---

## Roadmap

### v1 (MVP — atendimento SP)

- [x] Schema completo do banco
- [x] Estrutura do monorepo
- [ ] Autenticação (JWT + refresh)
- [ ] CRUD de produtos / categorias / variantes
- [ ] Carrinho com reserva de estoque
- [ ] Validação de CEP + cotação Melhor Envio
- [ ] Checkout integrado com Mercado Pago (Pix prioritário)
- [ ] Webhook idempotente do Mercado Pago
- [ ] Emissão de NF-e via PlugNotas
- [ ] E-mail transacional (Resend)
- [ ] Painel admin: pedidos, estoque, ordens de corte

### v2 (pós-lançamento)

- [ ] B2B com tabela de preços e aprovação manual
- [ ] Wishlist e recuperação de carrinho abandonado
- [ ] Cupons e promoções por categoria
- [ ] Integração WhatsApp (notificações de pedido)
- [ ] Expansão geográfica (outros estados)

### v3 (canais)

- [ ] Mercado Livre (sync de produtos e pedidos)
- [ ] Shopee
- [ ] Google Shopping (feed)
- [ ] Instagram/Facebook Shopping

---

## Storefront — telas implementadas

Todas as 7 telas do design (Editorial Warm) já estão construídas em Next.js + Tailwind:

| # | Rota | Arquivo | O que faz |
| --- | --- | --- | --- |
| 01 | `/` | `app/page.tsx` | Home editorial com hero serif, material em destaque (full-bleed), capítulos de categoria, "os preferidos", depoimento |
| 02-03 | `/categoria/[slug]` | `app/categoria/[slug]/page.tsx` | Catálogo com chips de categoria, filtros, grid 2-col |
| 04 | `/produto/[slug]` | `app/produto/[slug]/page.tsx` + `components/product-actions.tsx` | PDP com hero, configurador de corte (slider + stepper + quick-pick), tabs (specs/frete/avaliações), sticky CTA |
| 05 | `/carrinho` | `app/carrinho/cart-view.tsx` | Carrinho com itens, stepper, cupom (mock: ESPUMA10, ESTOFADOR15), sumário, sticky CTA |
| 06 | `/checkout` | `app/checkout/checkout-view.tsx` | Endereço, frete (SEDEX/PAC/Transportadora), forma de pagamento (Pix -5%, cartão, boleto), resumo |
| 07 | `/pedido/[id]` | `app/pedido/[id]/confirmation-view.tsx` | Confirmação Pix com QR code (gerado), copy-paste, acompanhamento |
| – | `/conta` | `app/conta/page.tsx` | Esboço da área da conta |

**Estado do carrinho** (`lib/cart-store.ts`) usa **Zustand** + `persist` (localStorage) com selectors pra subtotal/frete/desconto/total. Frete: grátis acima de R$ 350, senão R$ 24,90. Pix dá 5% off automático.

**Catálogo** começa estático em `lib/catalog.ts` (20 produtos batendo com o seed do banco). Quando a API estiver no ar, basta substituir as importações nas páginas por `apiGet('/products?categorySlug=...')` usando `lib/api.ts`.

**Imagens dos produtos** estão como gradientes CSS (`swatch`) por enquanto. Quando baixar as fotos reais (`espuma-blocos.webp`, `tecido-bege.png`, etc.), coloque em `apps/web/public/assets/` e troque o `<div style={{ background: swatch }}>` por `<Image src="/assets/..." />`.

---

## Decisões de arquitetura

Veja [`docs/architecture.md`](./docs/architecture.md) e [`docs/decisions.md`](./docs/decisions.md).

## Fluxos críticos

- [`docs/flow-order.md`](./docs/flow-order.md) — fluxo de pedido (carrinho → pagamento → entrega)
- [`docs/flow-stock.md`](./docs/flow-stock.md) — gestão de estoque + reserva
- [`docs/flow-shipping.md`](./docs/flow-shipping.md) — frete cubado e zona de atendimento
