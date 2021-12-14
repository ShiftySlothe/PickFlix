import { UserGroup } from '.prisma/client';
import { createGenericContext } from '../../lib/createGenericContext';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../../components/Helpers/TRPC/useQueryWrapper';
import TinderCardsPage from '../../components/TinderCard/TinderCardsPage';
import { Heading } from '@chakra-ui/layout';
import Centered from '../CenteredTest/CenteredTest';

export const [useActiveGroupsContext, ActiveGroupsContextProvider] =
  createGenericContext<UserGroup>();

export default function Dashboard() {
  const activeGroupQuery = trpc.useQuery(['group.getActiveGroup']);
  const { data } = activeGroupQuery;

  return (
    <TRPCQueryWrapper query={activeGroupQuery}>
      {data?.activeGroup ? (
        <ActiveGroupsContextProvider value={data.activeGroup}>
          <Centered>
            <TinderCardsPage />
          </Centered>
        </ActiveGroupsContextProvider>
      ) : (
        <NoActiveGroup />
      )}
    </TRPCQueryWrapper>
  );
}

function NoActiveGroup() {
  return <Heading>Must have an active group. TBI.</Heading>;
}
