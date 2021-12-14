import { UseQueryResult } from 'react-query';
import NextError from 'next/error';
import { AppRouter } from '../../../server/routers/_app';
import { TRPCClientError, TRPCClientErrorLike } from '@trpc/client';

interface TRPCQueryWrapperProps<T> {
  query: UseQueryResult<T, TRPCClientErrorLike<AppRouter>>;
}

export default function TRPCQueryWrapper<T>({
  query,
  children,
}: React.PropsWithChildren<TRPCQueryWrapperProps<T>>) {
  if (query.isError) {
    return (
      <NextError
        title={query.error.message || 'An error occured'}
        statusCode={query.error.data?.httpStatus ?? 500}
      />
    );
  }
  if (query.isLoading) {
    return <>Loading...</>;
  }
  if (!query.data) {
    return <NextError title={'No data found'} statusCode={404} />;
  }

  return <>{children}</>;
}
