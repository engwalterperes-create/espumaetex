# Arquitetura — Espumatex

## Visão geral

```
┌─────────────────┐         ┌─────────────────┐
│  Next.js (web)  │◀───────▶│   NestJS (api)  │
│   port 3000     │  REST   │   port 3001     │
└────────┬────────┘         └────────┬────────┘
         │                           │
         │                           ├──▶ PostgreSQL (Prisma)
         │                           ├──▶ Redis (cache + filas)
         │                           ├──▶ Mercado Pago (pagamento)
         │                           ├──▶ Melhor Envio (frete)
         │                           ├──▶ PlugNotas (NF-e)
         │                           ├──▶ Resend (e-mail)
         │                           ├──▶ WhatsApp Cloud API
         │                           └──▶ R2/S3 (storage de imagens)
         │
         └──▶ Imagens diretas via CDN R2
```

## Por que Next.js para o storefront

- **SEO**: páginas de produto e categoria precisam ser indexáveis. App Router permite SSG/ISR para o catálogo e SSR para checkout.
- **Performance**: streaming, server components, cache integrado.
- **Image optimization**: `next/image` reduz peso de fotos de produto.
- **Mobile-first**: o protótipo já assume telas 390×844 — Tailwind facilita responsividade.

## Por que NestJS para a API

- **Modular** por design — combina bem com domínios separados (auth, products, orders, payments).
- **Injeção de dependência** para Prisma, gateways e filas.
- **Validação automática** via class-validator + DTOs.
- **Swagger out-of-the-box**.
- **Throttling** built-in pra proteger checkout e auth.

## Por que PostgreSQL + Prisma

- PostgreSQL: tipos `Decimal` precisos pra dinheiro e métrica, JSON nativo pra `customDimensions` e `attributes`, full-text search via `tsvector` ou `pg_trgm`.
- Prisma: schema único como source of truth, tipos gerados, migrations versionadas.

## Camadas

```
apps/api/src/
├── main.ts                  # bootstrap NestJS
├── app.module.ts
├── prisma/                  # Prisma client global
├── health/                  # /api/health
├── common/                  # decorators, guards, DTOs comuns
└── modules/
    ├── auth/                # login, refresh, recuperação
    ├── products/            # catálogo público + filtros
    ├── categories/          # árvore de categorias
    ├── cart/                # CRUD de carrinho com reserva
    ├── checkout/            # validação + criação de pedido
    ├── shipping/            # cotação Melhor Envio + zonas
    ├── payments/            # Mercado Pago + webhook
    ├── orders/              # consulta de pedidos do cliente
    └── admin/               # endpoints administrativos
```

## Deploy (sugestão de baixo custo)

| Componente | Serviço | Plano de partida |
| --- | --- | --- |
| Web | Vercel | Hobby (gratuito) |
| API | Railway / Render | ~ US$ 5/mês |
| PostgreSQL | Neon / Supabase | Free tier no início |
| Redis | Upstash | Free tier (10k cmd/dia) |
| Storage | Cloudflare R2 | 10 GB grátis |
| Domínio | Registro.br | R$ 40/ano |
| E-mail | Resend | 3k e-mails/mês grátis |

Total estimado v1: **~ US$ 5–15/mês** + domínio.
