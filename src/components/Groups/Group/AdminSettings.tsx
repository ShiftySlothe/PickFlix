import { Button, IconButton } from '@chakra-ui/button';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { trpc } from '../../../server/utils/trpc';
import { GroupProps } from './Group';
import { useToast } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/skeleton';
import { User } from '.prisma/client';
import { Avatar } from '@chakra-ui/avatar';
import { HiUserRemove, HiUserAdd } from 'react-icons/hi';
import { GrUserAdmin } from 'react-icons/gr';
import { Tooltip } from '@chakra-ui/tooltip';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function AdminSettings({ groupId }: GroupProps) {
  return (
    <>
      <Heading fontSize={'md'}>Admin Settings</Heading>
      <Divider />
      <ChangeGroupNameForm groupId={groupId} />
      <UpdateMembers groupId={groupId} />
      <InviteNewUsers groupId={groupId} />
    </>
  );
}

function ChangeGroupNameForm({ groupId }: GroupProps) {
  const nameMutation = trpc.useMutation('group.updateGroupName');
  const toast = useToast();
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values, actions) => {
        const newName = values.name;
        const mutation = await nameMutation.mutateAsync({ groupId, newName });
        if (mutation.name === newName) {
          toast({
            title: 'Name updated.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Error updating name.',
            description: 'Please try again',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={Yup.string().required()}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!form.errors.name && !!form.touched.name}
              >
                <FormLabel htmlFor="name">Update Group Name</FormLabel>
                <Input {...field} id="name" placeholder="Name" type="text" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Update
          </Button>
        </Form>
      )}
    </Formik>
  );
}

function UpdateMembers({ groupId }: GroupProps) {
  const authQuery = trpc.useQuery(['auth.getSession']);
  const auth = authQuery.data;

  const membersQuery = trpc.useQuery(['group.getGroupMembers', { groupId }]);
  const members = membersQuery.data;

  return (
    <>
      <Skeleton isLoaded={membersQuery.isSuccess}>
        {!!members?.users &&
          members.users
            .filter((member) => member.id !== auth?.user.id)
            .map((member) => (
              <>
                <FormLabel htmlFor="name">Remove Members</FormLabel>
                <GroupMember groupId={groupId} user={member} key={member.id} />
              </>
            ))}
      </Skeleton>
    </>
  );
}

interface GroupMemberProps extends GroupProps {
  user: User;
}
function GroupMember({ user, groupId }: GroupMemberProps) {
  const isMemberQuery = trpc.useQuery([
    'group.checkIsGroupMemberByID',
    { groupId, userId: user.id },
  ]);

  const isMember = isMemberQuery.data;
  return (
    <Skeleton isLoaded={isMemberQuery.isSuccess}>
      <Flex alignItems="center" justifyContent="space-between">
        <Avatar name={!!user.name ? user.name : ''} size="sm" />
        <Text isTruncated>{user.name}</Text>
        <MakeAdmin user={user} groupId={groupId} />
        {isMember ? (
          <InviteToGroup user={user} groupId={groupId} />
        ) : (
          <RemoveFromGroup user={user} groupId={groupId} />
        )}
      </Flex>
    </Skeleton>
  );
}

function MakeAdmin({ user: member, groupId }: GroupMemberProps) {
  const adminQuery = trpc.useQuery([
    'group.isGroupAdminFromId',
    { userId: member.id, groupId },
  ]);
  const isAdmin = adminQuery.data;

  const adminMutation = trpc.useMutation('group.addGroupAdmin');
  const toast = useToast();
  const makeAdmin = async () => {
    await adminMutation.mutateAsync({
      groupId,
      userId: member.id,
    });
    toast({
      title: `${member.userName} now admin`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Tooltip label={isAdmin ? 'Already admin' : 'Make admin'} placement="top">
      <IconButton
        aria-label={`Grant ${member.name} admin`}
        icon={<GrUserAdmin />}
        onClick={makeAdmin}
        disabled={isAdmin}
      />
    </Tooltip>
  );
}

function RemoveFromGroup({ user: member, groupId }: GroupMemberProps) {
  const removeMutation = trpc.useMutation('group.removeUserFromGroup');
  const toast = useToast();
  const removeUser = async () => {
    await removeMutation.mutateAsync({ groupId, userId: member.id });
    toast({
      title: `${member.userName} removed`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Tooltip label="Remove" placement="top">
      <IconButton
        aria-label={`Remove ${member.name}`}
        icon={<HiUserRemove />}
        onClick={removeUser}
      />
    </Tooltip>
  );
}

function InviteToGroup({ user: member, groupId }: GroupMemberProps) {
  const inviteMutation = trpc.useMutation('group.inviteUserToGroup');
  const toast = useToast();
  const addUser = async () => {
    await inviteMutation.mutateAsync({ groupId, userId: member.id });
    toast({
      title: `${member.userName} invited`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Tooltip label="Remove" placement="top">
      <IconButton
        aria-label={`Remove ${member.name}`}
        icon={<HiUserAdd />}
        onClick={addUser}
      />
    </Tooltip>
  );
}

function InviteNewUsers({ groupId }: GroupProps) {
  const [usernameQuery, setusernameQuery] = useState('');
  const searchQuery = trpc.useQuery([
    'user.findManyByUsername',
    { usernameQuery },
  ]);
  const userMatches = searchQuery.data;
  return (
    <Skeleton isLoaded={searchQuery.isSuccess}>
      <FormLabel>Add Members</FormLabel>
      <Input
        placeholder="Search"
        onChange={(e) => {
          setusernameQuery(e.target.value);
        }}
      />
      {!!userMatches &&
        userMatches.map((user) => (
          <GroupMember user={user} groupId={groupId} key={user.id} />
        ))}
    </Skeleton>
  );
}

// TODO Add an are you sure modal
// use Context to get the sidebar to close on click
function DeleteGroup({ groupId }) {
  return (
    <>
      <FormLabel>Delete Group</FormLabel>
      <Button>Delete</Button>
    </>
  );
}
