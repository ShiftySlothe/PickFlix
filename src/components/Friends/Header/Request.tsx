import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { Tooltip } from '@chakra-ui/tooltip';
import { useRefetchAllRequestsContext } from './Invites';
import { trpc } from '../../../server/utils/trpc';
import { IconButton } from '@chakra-ui/button';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';

interface FriendRequestProps {
  sender: {
    id: string;
    userName: string | null;
    image: string | null;
  };
}
export default function FriendRequest({ sender }: FriendRequestProps) {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      border="2px"
      borderColor="grey"
      borderRadius="2px"
      boxShadow={'lg'}
      mb={1}
      p={2}
    >
      <Tooltip label={sender.userName} placement="top">
        <Avatar name={sender.userName || ''} />
      </Tooltip>
      <Tooltip label="From" placement="top">
        <Text fontSize="sm" ml={1} isTruncated>
          {sender.userName}
        </Text>
      </Tooltip>
      <Box>
        <Accept sender={sender} />
        <Decline sender={sender} />
      </Box>
    </Flex>
  );
}

function Accept({ sender }: FriendRequestProps) {
  const acceptMutation = trpc.useMutation('friend.acceptRequest');
  const toast = useToast();
  const { refetch } = useRefetchAllRequestsContext();
  const acceptInvite = async () => {
    await acceptMutation.mutateAsync({ senderId: sender.id });
    toast({
      title: 'Request accepted',
      status: 'success',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Accept" placement="top">
      <IconButton
        aria-label="Accept request"
        icon={<CheckCircleIcon />}
        size={'sm'}
        ml={1}
        onClick={acceptInvite}
      />
    </Tooltip>
  );
}

function Decline({ sender }: FriendRequestProps) {
  const acceptMutation = trpc.useMutation('friend.declineRequest');
  const toast = useToast();
  const { refetch } = useRefetchAllRequestsContext();
  const declineInvite = async () => {
    await acceptMutation.mutateAsync({ senderId: sender.id });
    toast({
      title: 'Request declined',
      status: 'error',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Decline" placement="top">
      <IconButton
        aria-label="Decline request"
        icon={<CloseIcon />}
        size={'sm'}
        ml={1}
        onClick={declineInvite}
      />
    </Tooltip>
  );
}
