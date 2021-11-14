import { createRouter } from '../createRouter';
import * as Yup from 'yup';
import { Context } from '../context';
import { TRPCError } from '@trpc/server';
import { checkLoggedIn, noQuery, dataFound, noData, checkIsGroupAdmin  } from '../utils/queryHelpers';

export const friendRouter = createRouter().query('checkExistingRequest', {
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
}).query('getRequestsFromSession', {
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
.mutation('sendFriendRequest', {
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
    const request = await ctx.prisma.friendRequests.create({
      data: {
        senderId: ctx?.session?.user?.id,
        recipientId: input.recipientId,
      },
    });
    return request;
  },
}).mutation('acceptFriendRequest', {
  input: Yup.object({
    senderID: Yup.string().required(),
  }),
  async resolve({ctx, input}){
    checkLoggedIn(ctx);

    const existing = await ctx.prisma.friendRequests.findFirst({
      where: {
        senderId: input.senderId,
        recipientId: ctx?.session?.user?.id,
      }
    })

    if(!existing){
      throw new TRPCError({
        code: 'NOT_FOUND'
      })
    }

    const accepted = await ctx.prisma.friendRequests.update({
      where: {
        senderId: input.senderId,
        recipientId: ctx.session.user.id,
      },
      data: {
        accepted: true,
      }
    })

    return accepted;
  }
}).mutation('declineFriendRequest', {
  input: Yup.object({
  senderID: Yup.string().required(),
}),
async resolve({ctx, input}){
  checkLoggedIn(ctx);

  const existing = ctx.prisma.friendRequests.findFirst({
    where: {
      senderId: input.senderId,
      recipientId: ctx?.session?.user?.id,
    }
  })
 
  if(!existing){
    throw new TRPCError({
      code: 'NOT_FOUND'
    })
  }
  const declined = await ctx.prisma.friendRequests.update({
    where: {
      senderId: input.senderId,
      recipientId: ctx.session.user.id,
    },
    data: {
      accepted: false,
    }
  });

  return declined;
}}).mutation('deleteRequest', {
  input: Yup.object({
    recipientId: Yup.string().required(),
  }),
  async resolve({ctx, input}){
    checkLoggedIn(ctx);

    const deletion = await ctx.prisma.friendRequests.delete({
      where: {
        recipientId: input.recipientId,
      }
    });

    return deletion;
  }
});