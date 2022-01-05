import { createRouter } from '../createRouter';
import { z } from 'zod';
import axios, { AxiosResponse } from 'axios';
import {
  TMDBMovie,
  TMDBMovieResponse,
  TMDBVideoResponse,
} from '../../lib/types';
import { Context } from '../context';

const genres = [
  {
    genreID: 28,
    name: 'Action',
  },
  {
    genreID: 12,
    name: 'Adventure',
  },
  {
    genreID: 16,
    name: 'Animation',
  },
  {
    genreID: 35,
    name: 'Comedy',
  },
  {
    genreID: 80,
    name: 'Crime',
  },
  {
    genreID: 99,
    name: 'Documentary',
  },
  {
    genreID: 18,
    name: 'Drama',
  },
  {
    genreID: 10751,
    name: 'Family',
  },
  {
    genreID: 14,
    name: 'Fantasy',
  },
  {
    genreID: 36,
    name: 'History',
  },
  {
    genreID: 27,
    name: 'Horror',
  },
  {
    genreID: 10402,
    name: 'Music',
  },
  {
    genreID: 9648,
    name: 'Mystery',
  },
  {
    genreID: 10749,
    name: 'Romance',
  },
  {
    genreID: 878,
    name: 'Science Fiction',
  },
  {
    genreID: 10770,
    name: 'TV Movie',
  },
  {
    genreID: 53,
    name: 'Thriller',
  },
  {
    genreID: 10752,
    name: 'War',
  },
  {
    genreID: 37,
    name: 'Western',
  },
];

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
            user: {
              id: ctx?.session?.user.id,
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
  })
  .query('getMovieInfo', {
    input: z.object({
      movieId: z.number({
        required_error: 'Id is required',
        invalid_type_error: 'Id must be a number',
      }),
    }),

    async resolve({ ctx, input }) {
      const movie = await axios.get<TMDBMovie>(
        `${process.env.TMDB_BASE_URL}/movie/${input.movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
      );

      return movie.data;
    },
  })
  .query('getMovieTrailerYoutubeUrls', {
    input: z.object({
      movieId: z.number({
        required_error: 'Id is required',
        invalid_type_error: 'Id must be a number',
      }),
    }),

    async resolve({ ctx, input }) {
      const videos = await axios.get<TMDBVideoResponse>(
        `${process.env.TMDB_BASE_URL}/movie/${input.movieId}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
      );

      const onlyYoutubeTrailers = videos.data.results?.filter(
        (v) => v.site === 'YouTube' && v.type === 'Trailer',
      );

      const urls = onlyYoutubeTrailers?.map(
        (v) => `https://www.youtube.com/embed/${v.key}`,
      );

      return urls;
    },
  })
  .mutation('addGenres', {
    async resolve({ ctx }) {
      const data = genres;
      await ctx.prisma.genre.createMany({
        data,
      });
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
