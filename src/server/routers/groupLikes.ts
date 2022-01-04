import { createRouter } from '../createRouter';
import * as Yup from 'yup';
import { checkLoggedIn } from '../utils/queryHelpers';

export const groupLikesRouter = createRouter()
  .mutation('userLikesTVShow', {
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
          tvShows: {
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
          tvShows: {
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
                  tvShows: {
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
            tvShows: {
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
  .mutation('userDislikesTVShow', {
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
          tvShows: {
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
          tvShows: {
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
                  tvShows: {
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
  })
  .mutation('userLikesMovie', {
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
          movies: {
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
          movies: {
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
                  tvShows: {
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
            movies: {
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
  .mutation('userDislikesMovie', {
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
          movies: {
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
          movies: {
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
                  movies: {
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
