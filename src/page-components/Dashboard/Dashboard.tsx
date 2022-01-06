import { UserGroup } from '.prisma/client';
import { createGenericContext } from '../../lib/createGenericContext';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../../components/Helpers/TRPC/useQueryWrapper';
import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import Rows from '../Layout/Rows';
import Group from '../../components/Groups/Group';
import Groups from '../../components/Groups';
import Friends from '../../components/Friends';

export const [useActiveGroupsContext, ActiveGroupsContextProvider] =
  createGenericContext<UserGroup>();

export default function Dashboard() {
  const activeGroupQuery = trpc.useQuery(['group.getActiveGroup']);
  const { data } = activeGroupQuery;

  return (
    <TRPCQueryWrapper query={activeGroupQuery}>
      <Rows>
        <Groups />
        <Friends />
      </Rows>
    </TRPCQueryWrapper>
  );
}

function NoActiveGroup() {
  const allGroupsQuery = trpc.useQuery(['group.getUserGroupsFromSession']);
  const { data: allGroups } = allGroupsQuery;
  return (
    <TRPCQueryWrapper query={allGroupsQuery}>
      <Heading size="md">Must have an active group.</Heading>
      <Text>Select a group:</Text>
      {allGroups ? (
        allGroups.map((group, i) => <Group groupId={group.id} key={i} />)
      ) : (
        <Text>You&apos;re not in any groups yet.</Text>
      )}
    </TRPCQueryWrapper>
  );
}
