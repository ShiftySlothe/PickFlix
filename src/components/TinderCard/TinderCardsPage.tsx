import React from 'react';
import TinderCards from './TinderCards';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../Helpers/TRPC/useQueryWrapper';

export default function TinderCardsPage() {
  const movieQuery = trpc.useQuery(['movies.get10FromIndex', 1]);
  const { data } = movieQuery;

  return (
    <TRPCQueryWrapper query={movieQuery}>
      {data && <TinderCards movies={data} />}
    </TRPCQueryWrapper>
  );
}
