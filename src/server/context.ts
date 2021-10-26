import prisma from '../lib/prisma.js';
import { inferAsyncReturnType } from '@trpc/server/dist/declarations/src/router';
import * as trpcNext from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions,
) => {
  const req = opts?.req;
  const res = opts?.res;
  const session = await getSession({ req });
  // for API-response caching see https://trpc.io/docs/caching
  return {
    req,
    res,
    prisma,
    session,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
