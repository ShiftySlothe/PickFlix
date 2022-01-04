import { createRouter } from '../createRouter';
import * as Yup from 'yup';
import { checkLoggedIn } from '../utils/queryHelpers';

export const groupLikesRouter = createRouter()
  .mutation('userLikesShow', {
    input: Yup.object({
      groupId: Yup.number().required(),
      showId: Yup.number().required(),
    }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const likedAlready = await ctx.prisma.userGroupLikes.findFirst({
        where: {
          userID: ctx.session?.user?.id,
          userGroupID: input.groupId,
          shows: {
            some: {
              id: input.showId,
            },
          },
          liked: true,
        },
      });

      if (likedAlready) {
        return likedAlready;
      }

      const like = await ctx.prisma.userGroupLikes.create({
        data: {
          user: {
            connect: {
              id: ctx?.session?.user.id,
            },
          },
          userGroup: {
            connect: {
              id: input.groupId,
            },
          },
          shows: {
            connect: {
              id: input.showId,
            },
          },
          liked: true,
        },
        include: {
          userGroup: {
            include: {
              users: true,
              userGroupLikes: {
                where: {
                  shows: {
                    some: {
                      id: input.showId,
                    },
                  },
                },
              },
            },
          },
        },
      });

      const allUsersLiked =
        like.userGroup.users.length <= like.userGroup.userGroupLikes.length;
      if (allUsersLiked) {
        const newMatch = ctx.prisma.userGroup.update({
          where: {
            id: input.groupId,
          },
          data: {
            shows: {
              connect: {
                id: input.showId,
              },
            },
          },
        });
        return newMatch;
      } else {
        return like;
      }
    },
  })
  .mutation('userDislikesShow', {
    input: Yup.object({
      groupId: Yup.number().required(),
      showId: Yup.number().required(),
    }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const dislikedAlready = await ctx.prisma.userGroupLikes.findFirst({
        where: {
          userID: ctx.session?.user?.id,
          userGroupID: input.groupId,
          shows: {
            some: {
              id: input.showId,
            },
          },
          liked: false,
        },
      });

      if (dislikedAlready) {
        return dislikedAlready;
      }

      const dislike = await ctx.prisma.userGroupLikes.create({
        data: {
          user: {
            connect: {
              id: ctx?.session?.user.id,
            },
          },
          userGroup: {
            connect: {
              id: input.groupId,
            },
          },
          shows: {
            connect: {
              id: input.showId,
            },
          },
          liked: false,
        },
        include: {
          userGroup: {
            include: {
              users: true,
              userGroupLikes: {
                where: {
                  shows: {
                    some: {
                      id: input.showId,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return dislike;
    },
  });
