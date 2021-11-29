import { trpc } from '../../server/utils/trpc';
import { Heading, Text } from '@chakra-ui/layout';
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
import { Button } from '@chakra-ui/button';
import CreateGroupForm from '../Groups/CreateForm';
import { DetailsFormProgress } from '../../lib/enums';
import UpdateGroupForm from '../Groups/UpdateForm';

interface FormProps {
  setFormProgress: React.Dispatch<React.SetStateAction<number>>;
}

export function GroupsForm({ setFormProgress }: FormProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userGroupsQuery = trpc.useQuery(['group.getUserGroupsFromSession']);
  const userGroups = userGroupsQuery.data;
  return (
    <>
      <Heading size="md">Groups</Heading>
      {userGroupsQuery.isLoading && <Text>Loading</Text>}
      {userGroupsQuery.isSuccess &&
        userGroups &&
        userGroups.length > 0 &&
        userGroups.map((group) => (
          <UpdateGroupForm
            group={group}
            key={group.id}
            userGroupsQuery={userGroupsQuery}
          />
        ))}
      <Button onClick={onOpen}>Add new group</Button>
      <Button onClick={() => setFormProgress(DetailsFormProgress.Final)}>
        Next
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          userGroupsQuery.refetch();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateGroupForm />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                userGroupsQuery.refetch();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
