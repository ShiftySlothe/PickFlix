import { createRouter } from '../createRouter';
import * as Yup from 'yup';
import { TRPCError } from '@trpc/server';
import {
  checkLoggedIn,
  noQuery,
  dataFound,
  noData,
} from '../utils/queryHelpers';

export const friendRouter = createRouter()
  .query('checkExistingRequest', {
    input: Yup.object({ recipientId: Yup.string().required() }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      // Check for blank string (on mount there is no query)
      if (!input) {
        return noQuery;
      }

      const existingRequest = await ctx.prisma.friendRequests.findFirst({
        where: {
          senderId: ctx?.session?.user?.id,
          recipientId: input.recipientId,
        },
      });

      if (existingRequest) {
        return dataFound;
      }

      return noData;
    },
  })
  .query('getRequestsFromSession', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      // Find user details from friend requests
      const friendRequests = await ctx.prisma.friendRequests.findMany({
        where: {
          senderId: ctx?.session?.user?.id,
        },
        select: {
          recipient: {
            select: {
              id: true,
              userName: true,
              image: true,
            },
          },
        },
      });

      return friendRequests;
    },
  })
  .mutation('sendRequest', {
    input: Yup.object({ recipientId: Yup.string().required() }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      // Check for duplicate
      const existingRequest = await ctx.prisma.friendRequests.findFirst({
        where: {
          senderId: ctx?.session?.user?.id,
          recipientId: input.recipientId,
        },
      });
      if (existingRequest) {
        return existingRequest;
      }

      // Persist request
      if (ctx?.session?.user.id) {
        const request = await ctx.prisma.friendRequests.create({
          data: {
            senderId: ctx?.session?.user?.id,
            recipientId: input.recipientId,
          },
        });
        return request;
      }
    },
  })
  .mutation('acceptRequest', {
    input: Yup.object({
      senderId: Yup.string().required(),
    }),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const existing = await ctx.prisma.friendRequests.findFirst({
        where: {
          senderId: input.senderId,
          recipientId: ctx?.session?.user?.id,
        },
      });

      if (!existing) {
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }

      const accepted = await ctx.prisma.friendRequests.updateMany({
        where: {
          senderId: input.senderId,
          recipientId: ctx?.session?.user.id,
        },
        data: {
          accepted: true,
        },
      });

      return accepted;
    },
  })
  .mutation('declineRequest', {
    input: Yup.object({
      senderId: Yup.string().required(),
    }),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const existing = ctx.prisma.friendRequests.findFirst({
        where: {
          senderId: input.senderId,
          recipientId: ctx?.session?.user?.id,
        },
      });

      if (!existing) {
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }
      const declined = await ctx.prisma.friendRequests.updateMany({
        where: {
          senderId: input.senderId,
          recipientId: ctx?.session?.user.id,
        },
        data: {
          accepted: false,
        },
      });

      return declined;
    },
  })
  .mutation('deleteRequest', {
    input: Yup.object({
      recipientId: Yup.string().required(),
    }),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const deletion = await ctx.prisma.friendRequests.deleteMany({
        where: {
          recipientId: input.recipientId,
          senderId: ctx?.session?.user.id,
        },
      });

      return deletion;
    },
  });