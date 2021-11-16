import { Input } from '@chakra-ui/input';
import { Box, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { trpc } from '../../server/utils/trpc';
import { GiThreeFriends } from 'react-icons/gi';
import Group from './Group';
import { Button, IconButton } from '@chakra-ui/button';
import { AddIcon, CheckIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/tooltip';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useRef } from 'react';
import CreateGroupForm from './CreateGroupsForm';
import { User, UserGroup, UserGroupRequests } from '.prisma/client';
import { Avatar } from '@chakra-ui/avatar';

export default function Groups() {
  const groupsQuery = trpc.useQuery(['group.getUserGroupsFromSession']);
  const groups = groupsQuery.data;

  return (
    <VStack minW="300px">
      <GroupsHeader />
      <Divider mb={2} />
      <Input placeholder="Search"></Input>
      <Skeleton isLoaded={groupsQuery.isSuccess}>
        <VStack>
          {groups?.map((group) => (
            <Group groupId={group.id} key={group.id} />
          ))}
          {groups && groups.length < 1 && <Text>No groups found</Text>}
        </VStack>
      </Skeleton>
    </VStack>
  );
}

function GroupsHeader() {
  return (
    <Flex alignItems="center" justifyContent="space-between" width="100%">
      <Heading fontSize="xl">Groups</Heading>
      <Box>
        <GroupInvites />
        <CreateNewGroup />
      </Box>
    </Flex>
  );
}

function GroupInvites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const invitesQuery = trpc.useQuery(['group.getInvitesFromSession']);

  const invites = invitesQuery.data;

  return (
    <>
      <Tooltip label="Invites" placement="top">
        <IconButton
          aria-label="Group invites"
          icon={<GiThreeFriends />}
          mr={2}
          ref={btnRef}
          onClick={onOpen}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Group Invites</DrawerHeader>

          <DrawerBody>
            {!!invites && invites.length > 0 ? (
              invites.map((invite) => (
                <GroupInvitation invite={invite} key={invite.id} />
              ))
            ) : (
              <Text>No invites at the moment!</Text>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

interface GroupInvitationProps {
  invite: UserGroupRequests & {
    sender: {
      name: string | null;
      userName: string | null;
    };
    userGroup: UserGroup;
  };
}

function GroupInvitation({ invite }: GroupInvitationProps) {
  return (
    <Flex>
      <Avatar name={invite.userGroup.name} />
      <Text>From: {invite.sender.userName}</Text>
      <IconButton aria-label="More info" icon={<HamburgerIcon />} />
      <IconButton aria-label="Accept request" icon={<CheckIcon />} />
      <IconButton aria-label="Decline request" icon={<CloseIcon />} />
    </Flex>
  );
}

function CreateNewGroup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Tooltip label="Create new group" placement="top">
        <IconButton
          aria-label="Create new group"
          icon={<AddIcon />}
          ref={btnRef}
          onClick={onOpen}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create new group</DrawerHeader>

          <DrawerBody>
            <CreateGroupForm />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
