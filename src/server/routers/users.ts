import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import * as Yup from 'yup';
import { resolve } from 'path/posix';

type UsernameCheck = {
  noQuery: boolean;
  found: boolean;
};

export const userRouter = createRouter()
  .query('search', {
    input: z
      .string({
        invalid_type_error: 'Must be at least one character',
      })
      .nonempty({ message: 'Must be at least one character' }),
    async resolve({ ctx, input }) {
      const users = await ctx.prisma.user.findMany({
        where: {
          name: {
            contains: input,
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
  })
  .query('usernameExists', {
    input: z.string({
      invalid_type_error: 'Must be a string',
    }),
    async resolve({ ctx, input }) {
      if (!input) {
        return { noQuery: true, found: false } as UsernameCheck;
      }
      const user = await ctx.prisma.user.findFirst({
        where: {
          name: input,
        },
      });

      if (user) {
        return { noQuery: false, found: true } as UsernameCheck;
      }

      return { noQuery: false, found: false } as UsernameCheck;
    },
  })
  .mutation('updateUsername', {
    input: Yup.string().required(),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }
      const user = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          userName: input,
        },
      });

      return user;
    },
  })
  .mutation('addLikedGenres', {
    input: Yup.array().of(Yup.object().shape({ id: Yup.number().required() })),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      const user = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          preferedGenres: {
            connect: input,
          },
        },
      });

      return user;
    },
  });
