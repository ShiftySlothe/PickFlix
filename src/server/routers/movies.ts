import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { add250Movies, add250TV } from '../../lib/addToDb';

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
  .mutation('addTop250', {
    async resolve() {
      await add250TV();
      await add250Movies();
    },
  });
