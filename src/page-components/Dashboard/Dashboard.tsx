import { UserGroup } from '.prisma/client';
import { createGenericContext } from '../../lib/createGenericContext';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../../components/Helpers/TRPC/useQueryWrapper';
import { Heading } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import Rows from '../Layout/Rows';
import Groups from '../../components/Groups';
import Friends from '../../components/Friends';
import TinderCardsPage from '../../components/TinderCard/TinderCardsPage';
import DashNav from '../../components/NavBar/DashNavBar';

export const [useActiveGroupsContext, ActiveGroupsContextProvider] =
  createGenericContext<UserGroup>();

export default function Dashboard() {
  const activeGroupQuery = trpc.useQuery(['group.getActiveGroup']);
  const { data } = activeGroupQuery;

  return (
    <>
      <DashNav />
      <TRPCQueryWrapper query={activeGroupQuery}>
        <ActiveGroupsContextProvider value={data?.activeGroup || undefined}>
          <Rows>
            <Groups />
            {data?.activeGroup ? <TinderCardsPage /> : <NoActiveGroup />}
            <Friends />
          </Rows>
        </ActiveGroupsContextProvider>
      </TRPCQueryWrapper>
    </>
  );
}

function NoActiveGroup() {
  return (
    <Center>
      <Heading size="md">Select a group to swipe in</Heading>
    </Center>
  );
}
