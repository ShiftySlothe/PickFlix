import { createRouter } from '../createRouter';
import * as Yup from 'yup';
import { Context } from '../context';
import { TRPCError } from '@trpc/server';
import { checkLoggedIn } from '../utils/queryHelpers';

export const userRouter = createRouter()
  .query('findManyByUsername', {
    input: Yup.object({
      usernameQuery: Yup.string().required(),
    }),
    async resolve({ ctx, input }) {
      const users = await ctx.prisma.user.findMany({
        where: {
          userName: {
            contains: input.usernameQuery,
          },
        },
      });
      if (!users) {
        return [];
      }
      return users;
    },
  })
  .query('findOthersByUsername', {
    input: Yup.object({
      usernameQuery: Yup.string().required(),
    }),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      const users = await ctx.prisma.user.findMany({
        where: {
          AND: [
            { userName: { contains: input.usernameQuery } },
            { id: { not: ctx?.session?.user.id } },
          ],
        },
      });

      console.log(ctx?.session?.user.id);
      console.log(users);
      return users;
    },
  })
  .query('getUserFromSession', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: ctx?.session?.user?.id,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'No user found',
        });
      }

      return user;
    },
  })
  .query('usernameExistsElsewhere', {
    input: Yup.object({
      username: Yup.string().required(),
    }),

    async resolve({ ctx, input }) {
      const exists = await ctx.prisma.user.findFirst({
        where: {
          userName: input.username,
          NOT: {
            id: ctx?.session?.user.id,
          },
        },
      });

      return !!exists;
    },
  })
  .query('getUsernameFromSession', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const username = await ctx.prisma.user.findFirst({
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
  .query('isNewUser', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const newUser = await ctx.prisma.user.findFirst({
        where: {
          id: ctx?.session?.user?.id,
        },
        select: { newUser: true },
      });
      return newUser;
    },
  })
  .query('likesGenre', {
    // TODO improve yup schema
    input: Yup.object({
      genreID: Yup.number().required(),
    }),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const likesGenre = await ctx.prisma.user.findFirst({
        where: {
          id: ctx?.session?.user.id,
          preferedGenres: {
            some: {
              genreID: input.genreID,
            },
          },
        },
      });

      return !!likesGenre;
    },
  })
  .query('getLikedGenresFromSession', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const likedGenres = await ctx.prisma.user.findFirst({
        where: {
          id: ctx?.session?.user.id,
        },
        select: {
          preferedGenres: {
            select: {
              id: true,
            },
          },
        },
      });

      return likedGenres?.preferedGenres;
    },
  })
  .query('getLikedGenreIdsFromSession', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const likedGenres = await ctx.prisma.user.findFirst({
        where: {
          id: ctx?.session?.user.id,
        },
        select: {
          preferedGenres: {
            select: {
              id: true,
            },
          },
        },
      });

      const likedGenreIds: number[] = [];
      likedGenres?.preferedGenres.forEach(({ id }) => likedGenreIds.push(id));
      return likedGenreIds;
    },
  })
  .query('getActiveGroup', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const activeGroup = await ctx.prisma.user.findFirst({
        where: {
          id: ctx.session?.user?.id,
        },
        select: {
          activeGroup: true,
        },
      });

      return activeGroup;
    },
  })
  .mutation('updateUser', {
    // Need to model user object

    resolve({ ctx }) {
      throw new TRPCError({
        code: 'METHOD_NOT_SUPPORTED',
        message: 'Not implemented',
      });
    },
  })
  .mutation('updateUsername', {
    input: Yup.object({ username: Yup.string().required() }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      // todo update to check first
      const user = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user.id,
        },
        data: {
          userName: input.username,
        },
      });

      return user;
    },
  })
  .mutation('updateName', {
    input: Yup.object({ name: Yup.string().required() }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      const user = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user.id,
        },
        data: {
          name: input.name,
        },
      });

      return user;
    },
  })
  .mutation('updateEmail', {
    input: Yup.object({ email: Yup.string().email().required() }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);
      const user = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user.id,
        },
        data: {
          email: input.email,
        },
      });

      return user;
    },
  })
  .mutation('updateImage', {
    //unsure how to do this
    async resolve({ ctx }) {
      throw new TRPCError({ code: 'METHOD_NOT_SUPPORTED' });
    },
  })
  .mutation('disableNewUser', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const newUser = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user?.id,
        },
        data: { newUser: false },
      });
      return newUser;
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
  .mutation('addLikedGenre', {
    input: Yup.object({ id: Yup.number().required() }),
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
  .mutation('removeLikedGenres', {
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
            disconnect: input,
          },
        },
      });

      return user;
    },
  })
  .mutation('rempveLikedGenre', {
    input: Yup.object({ id: Yup.number().required() }),
    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const user = await ctx.prisma.user.update({
        where: {
          id: ctx?.session?.user.id,
        },
        data: {
          preferedGenres: {
            disconnect: input,
          },
        },
      });

      return user;
    },
  })
  .mutation('deletePerm', {
    async resolve({ ctx }) {
      checkLoggedIn(ctx);

      const deletion = await ctx.prisma.user.delete({
        where: {
          id: ctx.session?.user?.id,
        },
      });

      return deletion;
    },
  })
  .mutation('updateActiveGroup', {
    input: Yup.object({
      groupId: Yup.number().required(),
    }).required(),

    async resolve({ ctx, input }) {
      checkLoggedIn(ctx);

      const newGroup = await ctx.prisma.user.update({
        where: {
          id: ctx.session?.user?.id,
        },
        data: {
          activeGroup: {
            connect: {
              id: input.groupId,
            },
          },
        },
      });
    },
  });
