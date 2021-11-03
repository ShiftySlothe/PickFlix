import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { AddIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Dispatch, SetStateAction, useState } from 'react';
import { trpc } from '../server/utils/trpc';
import NextError from 'next/error';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import { toast, useToast } from '@chakra-ui/toast';
import { User } from '.prisma/client';

export function UpdateDetailsForm3() {
  const [usernameQ, setUsernameQ] = useState('');
  const handleChange = (e: any) => setUsernameQ(e.target.value);
  const userMatchQuery = trpc.useQuery(['users.search', usernameQ]);
  const userMatches = userMatchQuery.data;

  const [isAddingUser, setIsAddingUser] = useState(false);

  return (
    <>
      <FormControl id="userSearch">
        <FormLabel htmlFor="usernameSearch">Add some friends</FormLabel>
        <Input
          placeholder="Search for user"
          onChange={handleChange}
          type="text"
          disabled={isAddingUser}
        ></Input>
      </FormControl>
      {usernameQ && userMatchQuery.error && (
        <NextError
          title={userMatchQuery.error.message}
          statusCode={userMatchQuery.error.data?.httpStatus || 500}
        />
      )}
      <Box>
        {usernameQ && (
          <Flex flexDir="column">
            {userMatches && userMatches.length ? (
              userMatches.map((user) => (
                <AddUserField
                  user={user}
                  key={user.id}
                  setIsAddingUser={setIsAddingUser}
                />
              ))
            ) : (
              <Box>
                <Text>No users found</Text>
              </Box>
            )}
          </Flex>
        )}
        <Button type="submit">Next</Button>
      </Box>
    </>
  );
}

interface AddUserFieldProps {
  user: User;
  setIsAddingUser: Dispatch<SetStateAction<boolean>>;
}

function AddUserField({ user, setIsAddingUser }: AddUserFieldProps) {
  const onAdd = async (e) => {
    setIsAddingUser(true);
    const friendReqObj = { id: user.id };
    await friendReqMutation.mutateAsync(friendReqObj);
    toast({
      title: 'Friend request sent.',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });

    setIsAddingUser(false);
  };

  const toast = useToast();
  const friendReqMutation = trpc.useMutation('users.sendFriendRequest');
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
