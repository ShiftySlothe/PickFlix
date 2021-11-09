import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Dispatch, SetStateAction, useState } from 'react';
import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
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
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/toast';
import { UserGroup } from '.prisma/client';
import { AddIcon } from '@chakra-ui/icons';
// Create new group modal
// Add friends to group
// Show new group with avatars on group form
// On submit go to dashboard

export function GroupsForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userGroupsQuery = trpc.useQuery(['users.getUserGroups']);
  const userGroups = userGroupsQuery.data;
  return (
    <>
      <Heading size="md">Groups</Heading>
      {userGroupsQuery.isLoading && <Text>Loading</Text>}
      {userGroupsQuery.isSuccess &&
        userGroups &&
        userGroups.length > 0 &&
        userGroups.map((group) => <Box key={group.id}>{group.name}</Box>)}
      <Button onClick={onOpen}>Add new group</Button>

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
            <NewGroupsFormContainer />
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

function NewGroupsFormContainer() {
  const [group, setGroup] = useState<UserGroup | null>(null);
  return (
    <>
      <CreateGroupForm setGroup={setGroup} />
      {group && <AddFriendsToGroupForm group={group} />}
    </>
  );
}

interface CreateGroupFormProps {
  setGroup: Dispatch<SetStateAction<UserGroup | null>>;
}
function CreateGroupForm({ setGroup }: CreateGroupFormProps) {
  const createGroupMutation = trpc.useMutation('users.createUserGroup');
  const toast = useToast();
  const [formSubmitted, setformSubmitted] = useState(false);
  return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={async (values, actions) => {
          toast({
            title: 'Creating group',
            status: 'info',
            duration: 4500,
            isClosable: true,
          });
          const newGroup = await createGroupMutation.mutateAsync(values);
          setformSubmitted(true);
          setGroup(newGroup);
          actions.setSubmitting(false);
          toast({
            title: 'Group created',
            status: 'success',
            duration: 4500,
            isClosable: true,
          });
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, 'Too Short!')
            .max(25, 'Too Long!')
            .required('Required')
            .trim(),
        })}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }: FieldProps) => (
                <FormControl
                  id="createGroup"
                  isInvalid={!!form.errors.name && !!form.touched.name}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    {...field}
                    placeholder="Three Wise Men"
                    type="text"
                    id="name"
                    disabled={formSubmitted}
                  ></Input>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  <Button
                    type="submit"
                    isLoading={props.isSubmitting}
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? 'Created' : 'Create group'}
                  </Button>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </>
  );
}
interface AddFriendsToGroupFormProps {
  group: UserGroup;
}
function AddFriendsToGroupForm({ group }: AddFriendsToGroupFormProps) {
  const [usernameQ, setUsernameQ] = useState('');
  const handleChange = (e: any) => setUsernameQ(e.target.value);
  const userFriendRequestsQuery = trpc.useQuery([
    'users.getUserFriendRequests',
  ]);
  const friendRequests = userFriendRequestsQuery.data;
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [addedUsers, setAddedUsers] = useState<Recipient[]>([]);
  return (
    <>
      {addedUsers.length > 0 && <FormLabel>Added friends</FormLabel>}
      {addedUsers.map((user) => (
        <Text key={user.id}>{user.userName}</Text>
      ))}
      <FormControl id="friendSearch">
        <FormLabel htmlFor="friendSearch">Add friends</FormLabel>
        <Input
          placeholder="Search for friend"
          type="text"
          id="friendSearch"
          disabled={userFriendRequestsQuery.isLoading || isAddingUser}
          onChange={handleChange}
        ></Input>
      </FormControl>
      {userFriendRequestsQuery.isError && (
        <NextError
          title={userFriendRequestsQuery.error.message}
          statusCode={userFriendRequestsQuery.error.data?.httpStatus || 500}
        />
      )}
      {usernameQ &&
        friendRequests
          ?.filter(({ recipient }) => recipient.userName?.includes(usernameQ))
          .map(({ recipient }) => (
            <AddFriendToGroupField
              recipient={recipient}
              group={group}
              setIsAddingUser={setIsAddingUser}
              key={recipient.id}
              addedUsers={addedUsers}
              setAddedUsers={setAddedUsers}
            />
          ))}
    </>
  );
}

type Recipient = {
  image: string | null;
  id: string;
  userName: string | null;
};
interface AddFriendToGroupFieldProps {
  recipient: Recipient;
  group: UserGroup;
  setIsAddingUser: Dispatch<SetStateAction<boolean>>;
  addedUsers: Recipient[];
  setAddedUsers: Dispatch<SetStateAction<Recipient[]>>;
}

function AddFriendToGroupField({
  recipient,
  group,
  setIsAddingUser,
  addedUsers,
  setAddedUsers,
}: AddFriendToGroupFieldProps) {
  const toast = useToast();
  const friendReqMutation = trpc.useMutation('users.inviteUserToGroup');

  const onAdd = async () => {
    setIsAddingUser(true);
    const groupReqObj = { groupID: group.id, userID: recipient.id };
    await friendReqMutation.mutateAsync(groupReqObj);
    setAddedUsers((addedUsers) => [...addedUsers, recipient]);
    toast({
      title: 'Group request sent.',
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
        value={recipient.id}
        leftIcon={<AddIcon />}
        onClick={onAdd}
        bg="white"
      >
        {recipient.userName}
      </Button>
    </Box>
  );
}

interface UpdateGroupFormProps {
  group: UserGroup;
}
function UpdateGroupForm({ group }: UpdateGroupFormProps) {
  return <div>Hello!</div>;
}
