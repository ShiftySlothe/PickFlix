import { UserGroup } from '.prisma/client';
import { Button, IconButton } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { useDisclosure } from '@chakra-ui/hooks';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { UseQueryResult } from 'react-query';
import { trpc } from '../../server/utils/trpc';
import { AddFriendsToGroupForm } from './CreateGroupsForm';

interface UpdateGroupFormProps {
  group: UserGroup;
  userGroupsQuery: UseQueryResult;
}

export default function UpdateGroupForm({
  group,
  userGroupsQuery,
}: UpdateGroupFormProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        width="100%"
        borderWidth="1px"
        borderColor="grey"
        borderRadius="8px"
        my={1}
        alignItems="center"
        justifyContent="space-between"
        px={2}
      >
        <Text>{group.name}</Text>
        <IconButton
          bg="white"
          aria-label="Group settings"
          icon={<HamburgerIcon bg="white" />}
          onClick={onOpen}
        />
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          userGroupsQuery.refetch();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateGroupModal group={group} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

interface UpdateGroupModalProps {
  group: UserGroup;
}
function UpdateGroupModal({ group }: UpdateGroupModalProps) {
  const groupInvitesQuery = trpc.useQuery([
    'group.getInvites',
    { groupId: group.id },
  ]);
  const groupInvites = groupInvitesQuery.data;
  // TODO implement form
  return (
    <>
      <Heading>!Not implemented!</Heading>
      <FormLabel>Update name</FormLabel>
      <Input placeholder={group.name} />
      <Button>Update</Button>
      <FormLabel>Current friends</FormLabel>
      {groupInvitesQuery.isLoading && <Text>Loading group members...</Text>}
      {groupInvites?.map((invite) => (
        <Flex
          key={invite.id}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>{invite.recipient.userName}</Text>
          <Text>Status: {invite.accepted ? 'Accepted' : 'Pending'}</Text>
          <IconButton aria-label="Remove friend" icon={<CloseIcon />} />
        </Flex>
      ))}
      <AddFriendsToGroupForm group={group} />
    </>
  );
}
