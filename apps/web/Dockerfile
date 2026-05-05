# ============================================================
# Espumatex Web (Next.js) — Dockerfile multi-stage para monorepo pnpm
# Build context = raiz do monorepo (espumatex/)
# ============================================================
FROM node:22-alpine AS base

# pnpm via corepack (nativo no Node 16+)
RUN corepack enable

# ----- Stage: deps (instala dependências de todo o workspace) -----
FROM base AS deps
WORKDIR /app

# Copia metadados do workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/
COPY packages/db/package.json ./packages/db/

# Instala (--frozen-lockfile garante reprodutibilidade)
RUN pnpm install --frozen-lockfile --prefer-offline

# ----- Stage: builder (faz build do Next.js) -----
FROM base AS builder
WORKDIR /app

# Reaproveita node_modules da etapa deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=deps /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=deps /app/packages/db/node_modules ./packages/db/node_modules

# Copia código-fonte
COPY . .

# Build apenas o web
RUN pnpm --filter @espumatex/web build

# ----- Stage: runner (imagem final, mínima) -----
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copia o que precisa pra rodar Next em produção
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/package.json ./apps/web/
COPY --from=builder /app/apps/web/next.config.mjs ./apps/web/
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-workspace.yaml ./

EXPOSE 3000

CMD ["pnpm", "--filter", "@espumatex/web", "start"]
