import { FormLabel } from '@chakra-ui/form-control';
import { Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { GroupProps } from '../..';
import { trpc } from '../../../../../server/utils/trpc';
import Member from './Member';

export function UpdateMembers({ groupId }: GroupProps) {
  const authQuery = trpc.useQuery(['auth.getSession']);
  const auth = authQuery.data;

  const membersQuery = trpc.useQuery(['group.getGroupMembers', { groupId }]);
  const members = membersQuery.data;

  return (
    <>
      <FormLabel htmlFor="name">Update Members</FormLabel>
      <Skeleton isLoaded={membersQuery.isSuccess}>
        {!!members?.users && members.users.length > 1 ? (
          members.users
            .filter((member) => member.id !== auth?.user.id)
            .map((member) => (
              <>
                <FormLabel htmlFor="name">Remove Members</FormLabel>
                <Member groupId={groupId} user={member} key={member.id} />
              </>
            ))
        ) : (
          <Text>No members yet!</Text>
        )}
      </Skeleton>
    </>
  );
}
