import * as trpc from '@trpc/server';
import { moviesRouter } from './movies';

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = trpc
  .router()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge('movies.', moviesRouter);

export type AppRouter = typeof appRouter;
