import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Dispatch, SetStateAction, useState } from 'react';
import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';
import { Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { UserGroup } from '.prisma/client';
import { useToast } from '@chakra-ui/toast';
import * as Yup from 'yup';
import { Field, FieldProps, Form, Formik } from 'formik';
import { AddIcon } from '@chakra-ui/icons';
import Member from './Group/Settings/Admin/Member';

export default function CreateGroupForm() {
  const [group, setGroup] = useState<UserGroup | null>(null);
  return (
    <>
      <CreateGroup setGroup={setGroup} />
      {group && <AddFriendsToGroupForm group={group} />}
    </>
  );
}

interface CreateGroupFormProps {
  setGroup: Dispatch<SetStateAction<UserGroup | null>>;
}
function CreateGroup({ setGroup }: CreateGroupFormProps) {
  const createGroupMutation = trpc.useMutation('group.createUserGroup');
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
                    my={1}
                  ></Input>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  <Button
                    type="submit"
                    isLoading={props.isSubmitting}
                    disabled={formSubmitted}
                    my={1}
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
export function AddFriendsToGroupForm({ group }: AddFriendsToGroupFormProps) {
  const [usernameQ, setUsernameQ] = useState('');
  const handleChange = (e: any) => setUsernameQ(e.target.value);
  const userFriendRequestsQuery = trpc.useQuery([
    'friend.getSentRequestsFromSession',
  ]);
  const friendRequests = userFriendRequestsQuery.data;
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [addedUsers, setAddedUsers] = useState<Recipient[]>([]);
  return (
    <>
      {addedUsers.length > 0 && <FormLabel>Added friends</FormLabel>}
      {addedUsers.map((user) => (
        <Member key={user.id} user={user} groupId={group.id} />
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
  const friendReqMutation = trpc.useMutation('group.inviteUserToGroup');

  const onAdd = async () => {
    setIsAddingUser(true);
    const groupReqObj = { groupId: group.id, userId: recipient.id };
    await friendReqMutation.mutateAsync(groupReqObj);
    setAddedUsers((addedUsers) => {
      if (addedUsers.includes(recipient)) {
        return addedUsers;
      } else {
        return [...addedUsers, recipient];
      }
    });
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
