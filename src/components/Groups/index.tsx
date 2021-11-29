import { Input } from '@chakra-ui/input';
import { Divider, Text, VStack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { trpc } from '../../server/utils/trpc';
import Group from './Group';
import { createGenericContext } from '../../lib/createGenericContext';
import { GroupsHeader } from './Header';
import { RefetchContext } from '../../lib/types';

export const [useRefetchAllGroupsContext, RefetchAllGroupsContextProvider] =
  createGenericContext<RefetchContext>();

export default function Groups() {
  const groupsQuery = trpc.useQuery(['group.getUserGroupsFromSession']);
  const groups = groupsQuery.data;
  const refetch = groupsQuery.refetch;

  return (
    <VStack minW="300px">
      <RefetchAllGroupsContextProvider value={{ refetch }}>
        <GroupsHeader />
        <Divider mb={2} />
        <Input placeholder="Search"></Input>
        <Skeleton isLoaded={groupsQuery.isSuccess}>
          <VStack>
            {groups?.map((group) => (
              <Group groupId={group.id} key={group.id} />
            ))}
            {groups && groups.length < 1 && <Text>No groups found</Text>}
          </VStack>
        </Skeleton>
      </RefetchAllGroupsContextProvider>
    </VStack>
  );
}
