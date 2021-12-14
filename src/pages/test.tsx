import { Box, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { trpc } from '../server/utils/trpc';

const Test: NextPage = () => {
  const movies = trpc.useQuery(['movies.get20MostPopular', { page: 1 }]);
  const { data } = movies;
  return (
    <VStack>
      {data?.map((m, i) => (
        <Box key={i}>{m.title}</Box>
      ))}
    </VStack>
  );
};

export default Test;
