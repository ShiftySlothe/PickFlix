import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import axios from 'axios';
import { TMDBMovieResponse } from '../../lib/types';

export const moviesRouter = createRouter()
  .query('get20MostPopular', {
    input: z.object({
      page: z
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
        .max(500, { message: "There's only 500 pages, number too large" }),
    }),

    async resolve({ ctx, input }) {
      const movies = await axios.get<TMDBMovieResponse>(
        `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${input.page}`,
      );
      return movies.data.results;
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

// Load next 20
