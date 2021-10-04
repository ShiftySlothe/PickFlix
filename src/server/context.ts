import { PrismaClient } from '@prisma/client';
import * as trpc from '@trpc/server';
import { inferAsyncReturnType } from '@trpc/server/dist/declarations/src/router';
import * as trpcNext from '@trpc/server/adapters/next';

export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
});

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  // for API-response caching see https://trpc.io/docs/caching
  return {
    req,
    res,
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
