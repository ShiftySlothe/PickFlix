import { UserGroup } from '.prisma/client';
import { UseQueryResult } from 'react-query';
import { createGenericContext } from '../../lib/createGenericContext';
import { trpc } from '../../server/utils/trpc';

import { Box } from '@chakra-ui/layout';
import { TRPCClientErrorLike } from '@trpc/client';
import { Router } from '@trpc/server';
import TRPCQueryWrapper from '../../components/Helpers/TRPC/useQueryWrapper';

export const [useActiveGroupsContext, ActiveGroupsContextProvider] =
  createGenericContext<UserGroup>();

export default function Dashboard() {
  const activeGroupQuery = trpc.useQuery(['group.getActiveGroup']);
  const { data } = activeGroupQuery;

  return (
    <TRPCQueryWrapper query={activeGroupQuery}>
      <div>Dashboard</div>
    </TRPCQueryWrapper>
  );
}
