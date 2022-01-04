import { Avatar, AvatarGroup, Heading, Text } from '@chakra-ui/react';
import { User } from '@prisma/client';
import { useActiveGroupsContext } from '../../page-components/Dashboard/Dashboard';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../Helpers/TRPC/useQueryWrapper';

export default function CurrentGroup() {
  const activeGroup = useActiveGroupsContext();
  const groupMembersQuery = trpc.useQuery([
    'group.getGroupMembers',
    { groupId: activeGroup.id },
  ]);
  const { data } = groupMembersQuery;

  return (
    <TRPCQueryWrapper query={groupMembersQuery}>
      {data?.users && (
        <CurrentGroupAvatar users={data.users} groupName={activeGroup.name} />
      )}
    </TRPCQueryWrapper>
  );
}

interface CurrentGroupAvatarProps {
  users: User[];
  groupName: string;
}

function CurrentGroupAvatar({ users, groupName }: CurrentGroupAvatarProps) {
  return (
    <>
      <Heading size="md">Swiping in: </Heading>
      <AvatarGroup size="md" max={3}>
        {users.map((user, i) => (
          <Avatar name={user.name || ''} key={i} />
        ))}
      </AvatarGroup>
      <Text>{groupName}</Text>
    </>
  );
}
