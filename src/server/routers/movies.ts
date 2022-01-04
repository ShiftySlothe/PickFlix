import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import axios, { AxiosResponse } from 'axios';
import { TMDBMovie, TMDBMovieResponse } from '../../lib/types';
import { Context } from '../context';

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
      groupId: z.number({
        required_error: 'GroupId is required',
        invalid_type_error: 'Must be a number',
      }),
    }),

    async resolve({ ctx, input }) {
      const movies = await axios.get<TMDBMovieResponse>(
        `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${input.page}`,
      );

      if (!movies.data.results) {
        return [];
      }

      await addNewMoviesToDB(movies, ctx);
      const data: TMDBMovie[] = [];

      for (const movie of movies.data.results) {
        const likedAlready = await ctx.prisma.userGroupLikes.findFirst({
          where: {
            userGroup: {
              id: input.groupId,
            },
            shows: {
              some: {
                id: movie.id,
              },
            },
          },
        });
        if (!likedAlready) {
          data.push(movie);
        }
      }
      return data;
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

async function addNewMoviesToDB(
  movies: AxiosResponse<TMDBMovieResponse>,
  ctx: Context,
) {
  if (!movies.data.results) {
    return;
  }
  for (const movie of movies.data.results) {
    const movieInDb = await ctx.prisma.show.findFirst({
      where: {
        id: movie.id,
      },
    });
    if (!movieInDb) {
      await ctx.prisma.show.create({
        data: {
          id: movie.id,
          original_title: movie.original_title,
        },
      });
    }
  }
}
// Load next 20
