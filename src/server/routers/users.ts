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
  .query('usernameOwnedElsewhere', {
    input: z.string({
      invalid_type_error: 'Must be a string',
    }),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      if (!input) {
        return noQuery;
      }
      const user = await ctx.prisma.user.findFirst({
        where: {
          userName: input,
          NOT: {
            id: ctx?.session?.user.id,
          },
        },
      });

      if (user) {
        return dataFound;
      }

      return noData;
    },
  })
  .query('getUsername', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const username = ctx.prisma.user.findFirst({
        where: {
          id: ctx?.session?.user.id,
        },
        select: {
          userName: true,
        },
      });

      return username;
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
    input: Yup.array().of(Yup.object({ id: Yup.number().required() })),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      // Add array of genreID's to user preferences
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
      // Check log in
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      // Check data
      if (!input || !input.id) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Must provide user ID',
        });
      }

      // Check for duplicate
      const existingRequest = await ctx.prisma.friendRequests.findFirst({
        where: {
          senderId: ctx.session.user.id,
          recipientId: input.id,
        },
      });
      if (existingRequest) {
        return existingRequest;
      }

      // Persist request
      const request = await ctx.prisma.friendRequests.create({
        data: {
          senderId: ctx.session.user.id,
          recipientId: input.id,
          accepted: false,
        },
      });
      return request;
    },
  })
  .query('checkExistingFriendRequestByID', {
    input: Yup.object({ id: Yup.string().required() }).required(),
    async resolve({ ctx, input }) {
      // Ensure login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      // Check for blank string (on mount there is no query)
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
  })
  .query('getUserFriendRequests', {
    async resolve({ ctx }) {
      //Ensure login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      // Find user details from friend requests
      const friendRequests = await ctx.prisma.friendRequests.findMany({
        where: {
          senderId: ctx.session.user.id,
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
  .query('getUserGroups', {
    async resolve({ ctx }) {
      // Check user login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      const userGroups = await ctx.prisma.userGroup.findMany({
        where: {
          users: {
            some: {
              id: {
                equals: ctx.session.user.id,
              },
            },
          },
        },
      });

      return userGroups;
    },
  })
  .mutation('createUserGroup', {
    input: Yup.object({
      name: Yup.string().required(),
    }).required(),
    async resolve({ ctx, input }) {
      // Check user login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      const newGroup = await ctx.prisma.userGroup.create({
        data: {
          name: input.name,
          users: { connect: [{ id: ctx.session.user.id }] },
          groupOwner: { connect: { id: ctx.session.user.id } },
        },
      });

      return newGroup;
    },
  })
  .mutation('inviteUserToGroup', {
    input: Yup.object({
      groupID: Yup.number().required(),
      userID: Yup.string().required(),
    }).required(),
    async resolve({ ctx, input }) {
      // Check user login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }
      // Check for existing invite
      const existingInvite = await ctx.prisma.userGroupRequests.findFirst({
        where: {
          senderId: ctx.session.user.id,
          recipientId: input.userID,
          userGroupId: input.groupID,
        },
      });

      if (existingInvite) {
        return existingInvite;
      }
      // Create new invite
      const newInvite = await ctx.prisma.userGroupRequests.create({
        data: {
          senderId: ctx.session.user.id,
          recipientId: input.userID,
          userGroupId: input.groupID,
          accepted: false,
        },
      });

      return newInvite;
    },
  })
  .query('getGroupInvites', {
    input: Yup.object({
      groupID: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      // Check user login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }
      // Check for existing invite
      const existingInvites = await ctx.prisma.userGroupRequests.findMany({
        where: {
          senderId: ctx.session.user.id,
          userGroupId: input.groupID,
        },
        select: {
          id: true,
          accepted: true,
          recipient: {
            select: {
              id: true,
              userName: true,
              image: true,
            },
          },
        },
      });

      return existingInvites;
    },
  })
  .mutation('deleteGroupInvite', {
    input: Yup.object({
      inviteID: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      // Check user login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      const deletion = await ctx.prisma.userGroupRequests.delete({
        where: {
          id: input.inviteID,
        },
      });
      // Check for existing invite
      return deletion;
    },
  })
  .query('isNewUser', {
    async resolve({ ctx }) {
      // Check user login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      const newUser = await ctx.prisma.user.findFirst({
        where: {
          id: ctx.session.user.id,
        },
        select: { newUser: true },
      });
      // Check for existing invite
      return newUser;
    },
  })
  .mutation('disableNewUser', {
    async resolve({ ctx }) {
      // Check user login
      if (!ctx.session || !ctx.session.user || !ctx.session.user.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Must be logged in',
        });
      }

      const newUser = await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: { newUser: false },
      });
      // Check for existing invite
      return newUser;
    },
  });
