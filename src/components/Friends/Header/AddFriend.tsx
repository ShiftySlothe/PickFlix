import { Button, IconButton } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Tooltip } from '@chakra-ui/tooltip';
import { useRef, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useRefetchAllFriendsContext } from '..';
import { trpc } from '../../../server/utils/trpc';
import { AddFriendField } from '../../SignUpFlowForms/components/AddFriendField';
import NextError from 'next/error';

export default function AddFriend() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { refetch: refetchAllFriends } = useRefetchAllFriendsContext();
  return (
    <>
      <Tooltip label="Add Friend" placement="top">
        <IconButton
          aria-label="Friend requests"
          icon={<AiOutlineUserAdd />}
          mr={2}
          ref={btnRef}
          onClick={onOpen}
        />
      </Tooltip>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => {
          onClose();
          refetchAllFriends();
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Invite Friend</DrawerHeader>

          <DrawerBody>
            <AddFriendsForm />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                refetchAllFriends();
              }}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function AddFriendsForm() {
  const [usernameQ, setUsernameQ] = useState('');
  const handleChange = (e: any) => setUsernameQ(e.target.value);
  const userMatchQuery = trpc.useQuery([
    'user.findNewFriendsByUsername',
    { usernameQuery: usernameQ },
  ]);
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
      </Box>
    </>
  );
}
