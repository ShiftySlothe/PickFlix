import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { ReactElement, useEffect } from 'react';
import { trpc } from '../../../server/utils/trpc';
import { NotAuthorisedPage } from '../../ErrorPage/ErrorPage';

export default function CheckLoggedIn({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
  const { data: session, status } = useSession();
  const newUserQuery = trpc.useQuery(['user.isNewUser']);
  const isNewUser = newUserQuery.data?.newUser;
  useEffect(() => {
    console.log(newUserQuery);
  }, [newUserQuery]);
  if (status === 'unauthenticated') {
    return <NotAuthorisedPage />;
  } else if (newUserQuery.isLoading || newUserQuery.isFetching) {
    return <>Loading...</>;
  } else if (newUserQuery.isSuccess && !isNewUser) {
    return <>{children}</>;
  } else if (newUserQuery.isSuccess && isNewUser) {
    Router.push('/new-user/details');
    return <></>;
  } else {
    return <></>;
  }
}
