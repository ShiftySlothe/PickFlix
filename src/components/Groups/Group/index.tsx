import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { MdOutlineSwipe } from 'react-icons/md';
import { trpc } from '../../../server/utils/trpc';
import { Skeleton } from '@chakra-ui/skeleton';
import { Tooltip } from '@chakra-ui/tooltip';
import { createGenericContext } from '../../../lib/createGenericContext';
import { RefetchContext } from '../../../lib/types';
import { GroupSettings } from './Settings';
import GroupLikes from './GroupLikes';

export interface GroupProps {
  groupId: number;
}

export const [useRefetchGroupContext, RefetchGroupContextProvider] =
  createGenericContext<RefetchContext>();

export default function Group({ groupId }: GroupProps) {
  const nameQuery = trpc.useQuery(['group.getGroupName', { groupId: groupId }]);
  const data = nameQuery.data;
  return (
    <Skeleton isLoaded={nameQuery.isSuccess} width={'100%'}>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        border="2px"
        borderColor="grey"
        borderRadius="4px"
        boxShadow={'lg'}
        width={'100%'}
      >
        <Avatar name={data?.name} m={3} />
        <Text m={1} isTruncated>
          {data?.name}
        </Text>
        <Box mr={1}>
          <RefetchGroupContextProvider value={{ refetch: nameQuery.refetch }}>
            <GroupLikes groupId={groupId} />
            <GroupSettings groupId={groupId} groupName={data?.name} />
            <SelectGroup groupId={groupId} />
          </RefetchGroupContextProvider>
        </Box>
      </Flex>
    </Skeleton>
  );
}

function SelectGroup({ groupId }: GroupProps) {
  const activeGroupMutation = trpc.useMutation('group.setActiveGroup');

  const setActiveGroup = async () => {
    await activeGroupMutation.mutateAsync({ groupId });
  };

  return (
    <Tooltip label="Select Group" placement="top">
      <IconButton
        icon={<MdOutlineSwipe />}
        aria-label="Select Group"
        ml={1}
        onClick={setActiveGroup}
      />
    </Tooltip>
  );
}
