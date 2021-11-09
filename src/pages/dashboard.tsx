import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { NotAuthorisedPage } from '../components/ErrorPage/ErrorPage';
import Dashboard from '../page-components/Dashboard/Dashboard';
import { trpc } from '../server/utils/trpc';
import Router from 'next/router';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const newUserQuery = trpc.useQuery(['users.isNewUser']);
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
    return <Dashboard />;
  } else {
    return <div></div>;
  }
};

export default Home;
