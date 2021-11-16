import { Avatar } from '@chakra-ui/avatar';
import { Button, IconButton } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';
import { HamburgerIcon } from '@chakra-ui/icons';
import { trpc } from '../../server/utils/trpc';
import { Skeleton } from '@chakra-ui/skeleton';

interface GroupProps {
  groupId: number;
}
export default function Group({ groupId }: GroupProps) {
  const nameQuery = trpc.useQuery(['group.getGroupName', { groupId: groupId }]);
  const data = nameQuery.data;
  return (
    <Skeleton isLoaded={nameQuery.isSuccess}>
      <Flex
        direction="row"
        width="400px"
        justifyContent="space-between"
        alignItems="center"
        border="2px"
        borderColor="grey"
        borderRadius="4px"
        boxShadow={'lg'}
      >
        <Avatar name={data?.name} m={3} />
        <Text m={1} isTruncated>
          {data?.name}
        </Text>
        <Button m={1}>Chat</Button>
        <Button m={1}>Likes</Button>
        <IconButton
          aria-label="Group settings"
          icon={<HamburgerIcon />}
          m={3}
        />
      </Flex>
    </Skeleton>
  );
}
