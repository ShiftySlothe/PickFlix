import { createRouter } from '../createRouter';
import { TRPCError } from '@trpc/server';
import * as Yup from 'yup';
import { checkLoggedIn, checkIsGroupAdmin } from '../utils/queryHelpers';
import { UserGroup } from '@prisma/client';

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
  .query('checkIsGroupMemberByID', {
    input: Yup.object({
      groupId: Yup.number().required(),
      userId: Yup.string().required(),
    }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      const isGroupMember = await ctx.prisma.userGroup.findFirst({
        where: {
          id: input.groupId,
          users: {
            some: {
              id: input.userId,
            },
          },
        },
      });

      return !!isGroupMember;
    },
  })
  .query('getGroupMembers', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),

    async resolve({ ctx, input }) {
      const groupMembers = await ctx.prisma.userGroup.findFirst({
        where: {
          id: input.groupId,
        },
        select: {
          users: true,
        },
      });

      return groupMembers;
    },
  })
  .query('getInvitesForGroup', {
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
  .query('getInvitesFromSession', {
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const invites = await ctx.prisma.userGroupRequests.findMany({
        where: {
          recipientId: ctx.session?.user?.id,
          accepted: null,
        },
        include: {
          sender: {
            select: {
              name: true,
              userName: true,
            },
          },
          userGroup: true,
        },
      });

      return invites;
    },
  })
  .query('findSharedPreferedGenreIds', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      await checkIsGroupAdmin(ctx, input.groupId);

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
  .query('findAllGroupPreferedGenreIds', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      await checkIsGroupAdmin(ctx, input.groupId);

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

      if (!userPreferences) {
        throw new TRPCError({ code: 'BAD_REQUEST' });
      }

      return findSharedGenreIds(userPreferences);
    },
  })
  .query('getGroupName', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),

    async resolve({ ctx, input }) {
      const name = await ctx.prisma.userGroup.findFirst({
        where: {
          id: input.groupId,
        },
        select: {
          name: true,
        },
      });

      return name;
    },
  })
  .query('isGroupAdminFromSession', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      const isAdmin = await ctx.prisma.userGroup.findFirst({
        where: {
          id: input.groupId,
          groupOwners: {
            some: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });

      return !!isAdmin;
    },
  })
  .query('isGroupAdminFromId', {
    input: Yup.object({
      groupId: Yup.number().required(),
      userId: Yup.string().required(),
    }).required(),
    async resolve({ ctx, input }) {
      const isAdmin = await ctx.prisma.userGroup.findFirst({
        where: {
          id: input.groupId,
          groupOwners: {
            some: {
              id: input.userId,
            },
          },
        },
      });

      return !!isAdmin;
    },
  })
  .query('getActiveGroup', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);
      const activeGroup = await ctx.prisma.user.findFirst({
        where: {
          id: ctx?.session?.user.id,
        },
        select: {
          activeGroup: true,
        },
      });

      return activeGroup;
    },
  })
  .mutation('setActiveGroup', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      const activeGroup = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user.id,
        },
        data: {
          activeGroup: {
            connect: {
              id: input.groupId,
            },
          },
        },
      });

      return activeGroup;
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
      await checkIsGroupAdmin(ctx, input.groupId);

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
      await checkIsGroupAdmin(ctx, input.groupId);

      const deletion = await ctx.prisma.userGroup.delete({
        where: {
          id: input.groupId,
        },
      });

      return deletion;
    },
  })
  .mutation('addGroupAdmin', {
    input: Yup.object({
      groupId: Yup.number().required(),
      userId: Yup.string().required(),
    }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      await checkIsGroupAdmin(ctx, input.groupId);

      const newAdmin = ctx.prisma.userGroup.update({
        where: {
          id: input.groupId,
        },
        data: {
          groupOwners: {
            connect: {
              id: input.userId,
            },
          },
        },
      });

      return newAdmin;
    },
  })
  .mutation('updateGroupName', {
    input: Yup.object({
      groupId: Yup.number().required(),
      newName: Yup.string().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      await checkIsGroupAdmin(ctx, input.groupId);

      const update = await ctx.prisma.userGroup.update({
        where: {
          id: input.groupId,
        },
        data: {
          name: input.newName,
        },
      });

      return update;
    },
  })
  .mutation('removeUserFromGroup', {
    input: Yup.object({
      groupId: Yup.number().required(),
      userId: Yup.string().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      await checkIsGroupAdmin(ctx, input.groupId);

      const removed = await ctx.prisma.userGroup.update({
        where: {
          id: input.groupId,
        },
        data: {
          users: {
            disconnect: {
              id: input.userId,
            },
          },
        },
      });

      return removed;
    },
  })
  .mutation('removeUserFromGroupWithSession', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const removed = await ctx.prisma.userGroup.update({
        where: {
          id: input.groupId,
        },
        data: {
          users: {
            disconnect: {
              id: ctx?.session?.user.id,
            },
          },
        },
      });

      return removed;
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

function findAllGenreIds(
  userPreferences: UserGroup & {
    users: {
      preferedGenres: {
        id: number;
      }[];
    }[];
  },
) {
  const allUserPreferences: number[] = [];

  //For each  user in group & each preferences
  for (let i = 0; i < userPreferences.users.length; i++) {
    userPreferences.users[i].preferedGenres.forEach(({ id }) => {
      const isNewMatch = !allUserPreferences.includes(id);
      if (isNewMatch) {
        allUserPreferences.push(id);
      }
    });
  }

  return allUserPreferences;
}

// User likes show
// User dislikes show
