import { createRouter } from '../createRouter';
import { getProviders } from 'next-auth/react';
import { TRPCError } from '@trpc/server';

export const authRouter = createRouter()
  .query('getProviders', {
    async resolve() {
      const providers = await getProviders();
      if (!providers) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No auth services available`,
        });
      }
      return providers;
    },
  })
  .query('onSignIn', {
    resolve({ ctx }) {
      console.log(ctx.session?.user);
    },
  })
  .query('getSession', {
    async resolve({ ctx }) {
      const session = await ctx.session;
      return session;
    },
  });
