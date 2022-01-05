import { Box, Button, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { trpc } from '../server/utils/trpc';

const Test: NextPage = () => {
  const movies = trpc.useMutation('movies.addGenres');

  return (
    <VStack>
      <Button
        onClick={() => {
          movies.mutate();
        }}
      >
        Add Genres
      </Button>
    </VStack>
  );
};

export default Test;
