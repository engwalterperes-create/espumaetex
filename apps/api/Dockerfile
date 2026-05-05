# ============================================================
# Espumatex API (NestJS + Prisma) — Dockerfile multi-stage
# Build context = raiz do monorepo
# ============================================================
FROM node:22-alpine AS base

RUN corepack enable
RUN apk add --no-cache openssl

# ----- Stage: deps -----
FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/
COPY packages/db/package.json ./packages/db/

RUN pnpm install --frozen-lockfile --prefer-offline

# ----- Stage: builder -----
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=deps /app/packages/db/node_modules ./packages/db/node_modules

COPY . .

# Gera Prisma Client e builda a API
RUN pnpm --filter @espumatex/db generate
RUN pnpm --filter @espumatex/api build

# ----- Stage: runner -----
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/package.json ./apps/api/
COPY --from=builder /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=builder /app/packages/db ./packages/db
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-workspace.yaml ./

EXPOSE 3001

# Roda migrations no Postgres antes de iniciar a API
CMD ["sh", "-c", "pnpm --filter @espumatex/db migrate:deploy && pnpm --filter @espumatex/api start:prod"]
