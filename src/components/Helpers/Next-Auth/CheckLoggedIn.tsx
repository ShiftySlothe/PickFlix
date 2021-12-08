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
    if (isNewUser) {
      Router.push('/new-user/details');
    }
  }, [isNewUser]);

  if (status === 'loading') {
    return <>Loading...</>;
  } else if (status === 'unauthenticated') {
    return <NotAuthorisedPage />;
  } else if (newUserQuery.isLoading) {
    return <>Loading...</>;
  } else if (newUserQuery.isSuccess && !isNewUser) {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
