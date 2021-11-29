import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { GroupMemberProps } from '..';
import { trpc } from '../../../../../../server/utils/trpc';
import { InviteToGroup } from './Invite';
import { MakeAdmin } from '../MakeAdmin';
import { RemoveFromGroup } from './Remove';
import { useEffect } from 'react';

export default function Member({ user, groupId }: GroupMemberProps) {
  const isMemberQuery = trpc.useQuery([
    'group.checkIsGroupMemberByID',
    { groupId, userId: user.id },
  ]);

  const isMember = isMemberQuery.data;

  useEffect(() => {
    console.log('USMEMBER');
    console.log(isMember);
  }, [isMember]);
  return (
    <Skeleton isLoaded={isMemberQuery.isSuccess}>
      <Flex alignItems="center" justifyContent="space-between" my={1}>
        <Avatar name={!!user.userName ? user.userName : ''} size="sm" />
        <Text isTruncated>{user.userName}</Text>
        <Flex>
          {isMember ? (
            <Box mx={1}>
              <RemoveFromGroup user={user} groupId={groupId} />
            </Box>
          ) : (
            <Box mx={1}>
              <InviteToGroup user={user} groupId={groupId} />
            </Box>
          )}
          {isMember && <MakeAdmin user={user} groupId={groupId} />}
        </Flex>
      </Flex>
    </Skeleton>
  );
}
