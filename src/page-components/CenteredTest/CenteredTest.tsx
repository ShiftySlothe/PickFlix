import { Center } from '@chakra-ui/layout';
import React from 'react';
import TinderCards from '../../components/TinderCard/TinderCards';
import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';

export default function CenteredTest() {
  const movieQuery = trpc.useQuery(['movies.get10FromIndex', 1]);

  const { data } = movieQuery;

  // Handle loading/errors
  if (movieQuery.error) {
    return (
      <NextError
        title={movieQuery.error.message}
        statusCode={movieQuery.error.data?.httpStatus ?? 500}
      />
    );
  }
  if (movieQuery.status !== 'success') {
    return <>Loading...</>;
  }
  if (!data) {
    return <NextError title={'No Movies returned from DB'} statusCode={404} />;
  }
  return (
    <Center w="100vw" h="100vh" bg="beige" overflow="hidden">
      <TinderCards movies={data} />
    </Center>
  );
}
