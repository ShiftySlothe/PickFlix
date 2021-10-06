import CenteredTest from '../CenteredTest/CenteredTest';
import NavBar from '../../components/NavBar/NavBar';
import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/button';
import { Box, Center, Flex } from '@chakra-ui/layout';
import ErrorPage, {
  NotAuthorisedPage,
} from '../../components/ErrorPage/ErrorPage';
export default function Dashboard() {
  const sessionQuery = trpc.useQuery(['auth.getSession']);
  const sessionData = sessionQuery.data;

  useEffect(() => {
    console.log(sessionQuery.status);
  }, [sessionQuery.status]);

  if (sessionQuery.status !== 'success') {
    return <>Loading...</>;
  }
  // Handle loading/errors
  if (sessionQuery.error) {
    return <NotAuthorisedPage />;
  }
  if (!sessionData) {
    return <NotAuthorisedPage />;
  }

  return <CenteredTest />;
}
