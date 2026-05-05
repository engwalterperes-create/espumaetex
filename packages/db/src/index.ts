/**
 * @espumatex/db — Prisma client compartilhado
 *
 * Use assim em qualquer app:
 *   import { prisma } from '@espumatex/db';
 *
 * Reexporta também tipos e enums do Prisma para serem
 * importados sem ter que mexer com @prisma/client direto:
 *   import type { Product, OrderStatus } from '@espumatex/db';
 */
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export * from '@prisma/client';
