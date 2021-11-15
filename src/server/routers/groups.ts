import { createRouter } from '../createRouter';
import { TRPCError } from '@trpc/server';
import * as Yup from 'yup';
import { checkLoggedIn, checkIsGroupAdmin } from '../utils/queryHelpers';
import { Genre, UserGroup } from '@prisma/client';

export const groupRouter = createRouter()
  .query('getUserGroupsFromSession', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const userGroups = await ctx.prisma.userGroup.findMany({
        where: {
          users: {
            some: {
              id: {
                equals: ctx?.session?.user?.id,
              },
            },
          },
        },
      });

      return userGroups;
    },
  })
  .query('checkIsGroupMemberBySession', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      const isGroupMember = await ctx.prisma.userGroup.findFirst({
        where: {
          id: input.groupId,
          users: {
            some: {
              id: ctx?.session?.user?.id,
            },
          },
        },
      });

      return isGroupMember;
    },
  })
  .query('getInvites', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      await checkIsGroupAdmin(ctx, input.groupId);

      const existingInvites = await ctx.prisma.userGroupRequests.findMany({
        where: {
          senderId: ctx?.session?.user?.id,
          userGroupId: input.groupId,
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
  .query('findSharedGenreIds', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      checkIsGroupAdmin(ctx, input.groupId);

      const userPreferences = await ctx.prisma.userGroup.findFirst({
        where: {
          id: input.groupId,
        },
        include: {
          users: {
            select: {
              preferedGenres: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });

      if (!userPreferences || userPreferences.users.length < 2) {
        throw new TRPCError({ code: 'BAD_REQUEST' });
      }

      return findSharedGenreIds(userPreferences);
    },
  })
  .mutation('createUserGroup', {
    input: Yup.object({
      name: Yup.string().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const newGroup = await ctx.prisma.userGroup.create({
        data: {
          name: input.name,
          users: { connect: [{ id: ctx?.session?.user.id }] },
          groupOwners: { connect: [{ id: ctx?.session?.user?.id }] },
        },
      });

      return newGroup;
    },
  })
  .mutation('inviteUserToGroup', {
    input: Yup.object({
      groupId: Yup.number().required(),
      userId: Yup.string().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      checkIsGroupAdmin(ctx, input.groupId);

      const existingInvite = await ctx.prisma.userGroupRequests.findFirst({
        where: {
          senderId: ctx?.session?.user?.id,
          recipientId: input.userId,
          userGroupId: input.groupId,
        },
      });

      if (existingInvite) {
        return existingInvite;
      }
      // Create new invite
      if (ctx?.session?.user.id) {
        const newInvite = await ctx.prisma.userGroupRequests.create({
          data: {
            senderId: ctx?.session?.user?.id,
            recipientId: input.userId,
            userGroupId: input.groupId,
          },
        });

        return newInvite;
      }
    },
  })
  .mutation('deleteGroupInviteByID', {
    input: Yup.object({
      inviteID: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const deletion = await ctx.prisma.userGroupRequests.delete({
        where: {
          id: input.inviteID,
        },
      });
      // Check for existing invite
      return deletion;
    },
  })
  .mutation('deleteGroupInviteByUserId', {
    input: Yup.object({
      recipientId: Yup.string().required(),
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      await checkIsGroupAdmin(ctx, input.groupId);

      const deletion = await ctx.prisma.userGroupRequests.deleteMany({
        where: {
          userGroupId: input.groupId,
          recipientId: input.recipientId,
        },
      });

      return deletion;
    },
  })
  .mutation('acceptRequestById', {
    input: Yup.object({
      id: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      const accepted = await ctx.prisma.userGroupRequests.update({
        where: {
          id: input.id,
        },
        data: {
          accepted: true,
        },
        include: {
          userGroup: {
            select: {
              id: true,
            },
          },
        },
      });

      const added = await ctx.prisma.userGroup.update({
        where: {
          id: accepted.userGroup.id,
        },
        data: {
          users: {
            connect: {
              id: accepted.recipientId,
            },
          },
        },
      });

      return [accepted, added];
    },
  })
  .mutation('declineRequestById', {
    input: Yup.object({
      id: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      const declined = await ctx.prisma.userGroupRequests.update({
        where: {
          id: input.id,
        },
        data: {
          accepted: false,
        },
        include: {
          userGroup: {
            select: {
              id: true,
            },
          },
        },
      });

      const removed = await ctx.prisma.userGroup.update({
        where: {
          id: declined.userGroup.id,
        },
        data: {
          users: {
            disconnect: {
              id: declined.recipientId,
            },
          },
        },
      });
      return [declined, removed];
    },
  })
  .mutation('acceptRequestBySession', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const accepted = await ctx.prisma.userGroupRequests.updateMany({
        where: {
          userGroupId: input.groupId,
          recipientId: ctx?.session?.user?.id,
        },
        data: {
          accepted: true,
        },
      });

      const added = await ctx.prisma.userGroup.update({
        where: {
          id: input.groupId,
        },
        data: {
          users: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
      return [accepted, added];
    },
  })
  .mutation('declineRequestBySession', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const declined = await ctx.prisma.userGroupRequests.updateMany({
        where: {
          userGroupId: input.groupId,
          recipientId: ctx?.session?.user?.id,
        },
        data: {
          accepted: false,
        },
      });

      const removed = await ctx.prisma.userGroup.update({
        where: {
          id: input.groupId,
        },
        data: {
          users: {
            disconnect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });

      return [declined, removed];
    },
  })
  .mutation('delete', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      checkIsGroupAdmin(ctx, input.groupId);

      const deletion = await ctx.prisma.userGroup.delete({
        where: {
          id: input.groupId,
        },
      });

      return deletion;
    },
  });

function findSharedGenreIds(
  userPreferences: UserGroup & {
    users: {
      preferedGenres: {
        id: number;
      }[];
    }[];
  },
) {
  const matchIds: number[] = [];
  const allUserPreferences: number[] = [];

  // Add all first users preferences
  userPreferences.users[0].preferedGenres.forEach((p) =>
    allUserPreferences.push(p.id),
  );

  //For each remaining user in group & each preferences
  for (let i = 1; i < userPreferences.users.length; i++) {
    userPreferences.users[i].preferedGenres.forEach(({ id }) => {
      const isNewMatch =
        allUserPreferences.includes(id) && !matchIds.includes(id);
      if (isNewMatch) {
        matchIds.push(id);
      } else if (!allUserPreferences.includes(id)) {
        allUserPreferences.push(id);
      }
    });
  }

  return matchIds;
}

// get single member preferences
// get group members
// Update group owner
// User likes show
// User dislikes show