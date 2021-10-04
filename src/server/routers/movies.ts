import { createRouter } from '../createRouter';
import { z } from 'zod';
import { data } from '../db';

export const moviesRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .mutation('addDummyData', {
    async resolve({ ctx }) {
      console.log(ctx.prisma);
      const movies = await ctx.prisma.show.createMany({ data });
      return movies;
    },
  });
