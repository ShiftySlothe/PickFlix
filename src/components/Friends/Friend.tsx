import { User } from '.prisma/client';
import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import { Tooltip } from '@chakra-ui/tooltip';
import { useRefetchAllFriendsContext } from '.';
import { trpc } from '../../server/utils/trpc';

interface FriendProps {
  friend: User;
}
export default function Friend({ friend }: FriendProps) {
  return (
    <Skeleton isLoaded width={'100%'}>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        border="2px"
        borderColor="grey"
        borderRadius="4px"
        boxShadow={'lg'}
        width="100%"
      >
        <Avatar name={friend?.userName || ''} m={3} />
        <Text m={1} isTruncated>
          {friend.userName}
        </Text>
        <Box mr={1}>
          <RemoveFriend friend={friend} />
        </Box>
      </Flex>
    </Skeleton>
  );
}

function RemoveFriend({ friend }: FriendProps) {
  const removeMutation = trpc.useMutation('friend.removeFriend');
  const toast = useToast();
  const { refetch } = useRefetchAllFriendsContext();
  const removeFriend = async () => {
    await removeMutation.mutateAsync({ friendId: friend.id });
    toast({
      title: 'Friend removed',
      status: 'error',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Remove friend" placement="top">
      <IconButton
        icon={<CloseIcon />}
        aria-label="More info"
        ml={1}
        onClick={removeFriend}
      />
    </Tooltip>
  );
}
