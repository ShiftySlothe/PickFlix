import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const moviesRouter = createRouter()
  .query('get10FromIndex', {
    input: z
      .number({
        required_error: 'Index is required',
        invalid_type_error: 'Index must be a number',
      })
      .int({
        message: 'Index must be an integer',
      })
      .positive({
        message: 'Index must be positive',
      })
      .max(239, { message: "There's only 250 items, number too large" }),
    async resolve({ ctx, input }) {
      const movieIDs = Array.from({ length: 10 }, (_, i) => input + i);
      const movies = await ctx.prisma.movie.findMany({
        where: {
          id: {
            in: movieIDs,
          },
        },
      });
      if (!movies) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No movies found at index '${input}'`,
        });
      }
      return movies;
    },
  })
  .query('getAllGenres', {
    async resolve({ ctx }) {
      const genres = await ctx.prisma.genre.findMany({
        select: {
          id: true,
          name: true,
        },
        orderBy: [
          {
            name: 'asc',
          },
        ],
      });
      return genres;
    },
  });
