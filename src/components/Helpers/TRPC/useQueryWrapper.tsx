import { UseQueryResult } from 'react-query';
import NextError from 'next/error';

interface TRPCQueryWrapperProps {
  query: UseQueryResult;
}

export default function TRPCQueryWrapper({
  query,
  children,
}: React.PropsWithChildren<TRPCQueryWrapperProps>) {
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
    return <NextError title={'No users found'} statusCode={404} />;
  }

  return <>{children}</>;
}
