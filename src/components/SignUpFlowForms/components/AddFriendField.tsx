import { User } from '.prisma/client';
import { Button } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { Dispatch, SetStateAction } from 'react';
import { trpc } from '../../../server/utils/trpc';

interface AddUserFieldProps {
  user: User;
  setIsAddingUser: Dispatch<SetStateAction<boolean>>;
}

export function AddFriendField({ user, setIsAddingUser }: AddUserFieldProps) {
  const toast = useToast();
  const friendReqMutation = trpc.useMutation('friend.sendRequest');

  const onAdd = async () => {
    setIsAddingUser(true);
    const friendReqObj = { recipientId: user.id };
    await friendReqMutation.mutateAsync(friendReqObj);
    toast({
      title: 'Friend request sent.',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });

    setIsAddingUser(false);
  };

  return (
    <Box>
      <Button
        p={2}
        value={user.id}
        leftIcon={<AddIcon />}
        onClick={onAdd}
        bg="white"
      >
        {user.userName}
      </Button>
    </Box>
  );
}
