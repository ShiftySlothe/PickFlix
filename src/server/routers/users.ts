import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import * as Yup from 'yup';
import { Context } from '../context';
import { noQuery, dataFound, noData } from '../utils/queryHelpers';

const checkLoggedIn = (ctx: Context) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Must be logged in',
    });
  }
};

export const userRouter = createRouter()
  .query('search', {
    input: z.string({
      invalid_type_error: 'Must be at least one character',
    }),
    async resolve({ ctx, input }) {
      const users = await ctx.prisma.user.findMany({
        where: {
          userName: {
            contains: input,
          },
        },
      });
      if (!users) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No users found'`,
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
        return noQuery;
      }
      const user = await ctx.prisma.user.findFirst({
        where: {
          userName: input,
        },
      });

      if (user) {
        return dataFound;
      }

      return noData;
    },
  })
  .mutation('updateUsername', {
    input: Yup.string().required(),
    // TO DO check if username is not taken
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const user = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user.id,
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
      checkLoggedIn(ctx);

      const user = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user.id,
        },
        data: {
          preferedGenres: {
            connect: input,
          },
        },
      });

      return user;
    },
  })
  .mutation('sendFriendRequest', {
    input: Yup.object({ id: Yup.string().required() }).required(),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      if (!input || !input.id) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Must provide user ID',
        });
      }

      const existingRequest = ctx.prisma.friendRequests.findFirst({
        where: {
          senderId: ctx.session.user.id,
          recipientId: input.id,
        },
      });
      if (existingRequest) {
        return existingRequest;
      }

      const request = ctx.prisma.friendRequests.create({
        data: {
          senderId: ctx.session.user.id,
          recipientId: input.id,
          accepted: false,
        },
      });
      console.log('NEW');
      console.log(request);
      return request;
    },
  })
  .query('hasExistingFriendRequest', {
    input: Yup.object({ id: Yup.string().required() }).required(),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      if (!input) {
        return noQuery;
      }
      const existingRequest = await ctx.prisma.friendRequests.findFirst({
        where: {
          senderId: ctx.session.user.id,
          recipientId: input.id,
        },
      });

      if (existingRequest) {
        return dataFound;
      }

      return noData;
    },
  });
