import * as trpc from '@trpc/server';
import { z } from 'zod';
import { getTop250Movies } from '../utils/movies/Movies';

export const moviesRouter = trpc
  .router()
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
  .query('getTopMovies', {
    async resolve() {
      const moviesObj = await getTop250Movies();
      const top250 = moviesObj.items;
      return {
        top250,
      };
    },
  });
