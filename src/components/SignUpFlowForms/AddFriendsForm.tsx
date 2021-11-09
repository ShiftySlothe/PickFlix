import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useState } from 'react';
import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { AddFriendField } from './components/AddFriendField';

export function AddFriendsForm() {
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
                <AddFriendField
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
