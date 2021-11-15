import { moviesRouter } from './movies';
import { createRouter } from '../createRouter';
import { authRouter } from './auth';
import { userRouter } from './user';
import { friendRouter } from './friends';
import { groupRouter } from './groups';

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge('movies.', moviesRouter)
  .merge('auth.', authRouter)
  .merge('user.', userRouter)
  .merge('friend.', friendRouter)
  .merge('group.', groupRouter);

export type AppRouter = typeof appRouter;
