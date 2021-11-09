import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useState } from 'react';
import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { AddFriendField } from './components/AddFriendField';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';

// Create new group modal
// Add friends to group
// Show new group with avatars on group form
// On submit go to dashboard

export function CreateGroupsForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Button onClick={onOpen}>Add new group</Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddFriendsToGroupForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function AddFriendsToGroupForm() {
  const [usernameQ, setUsernameQ] = useState('');
  const handleChange = (e: any) => setUsernameQ(e.target.value);
  const userInvitesQuery = trpc.useQuery(['users.getUserFriendRequests']);

  return (
    <>
      {usernameQ && userInvitesQuery.error && (
        <NextError
          title={userInvitesQuery.error.message}
          statusCode={userInvitesQuery.error.data?.httpStatus || 500}
        />
      )}
      <Box>
        {usernameQ && (
          <Flex flexDir="column">
            {userInvitesQuery.data && userInvitesQuery.data.length ? (
              userInvitesQuery.data.map((inv) => (
                <Box key={inv.id}>{inv.recipientId}</Box>
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
