import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const userRouter = createRouter().query('search', {
  input: z
    .string({
      invalid_type_error: 'Must be at least one character',
    })
    .nonempty({ message: 'Must be at least one character' }),
  async resolve({ ctx, input }) {
    const users = await ctx.prisma.user.findMany({
      where: {
        name: {
          in: input,
        },
      },
    });
    if (!users) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No movies found at index '${input}'`,
      });
    }
    return users;
  },
});
