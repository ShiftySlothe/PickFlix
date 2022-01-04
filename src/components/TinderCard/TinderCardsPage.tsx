import React, { useState } from 'react';
import TinderCards from './TinderCards';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../Helpers/TRPC/useQueryWrapper';
import { VStack } from '@chakra-ui/react';
import CurrentGroup from './CurrentGroup';
import { useActiveGroupsContext } from '../../page-components/Dashboard/Dashboard';

export default function TinderCardsPage() {
  const [queryIndex, setQueryIndex] = useState(1);
  const activeGroup = useActiveGroupsContext();
  const movieQuery = trpc.useQuery([
    'movies.get20MostPopular',
    { page: queryIndex, groupId: activeGroup.id },
  ]);
  const { data } = movieQuery;

  const refetch = () => {
    setQueryIndex(queryIndex + 1);
    movieQuery.refetch;
  };

  return (
    <VStack w="100%" h="100%">
      <CurrentGroup />
      <TRPCQueryWrapper query={movieQuery}>
        {data && <TinderCards movies={data} refetch={refetch} />}
      </TRPCQueryWrapper>
    </VStack>
  );
}
