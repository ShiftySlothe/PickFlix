import { Input } from '@chakra-ui/input';
import { Box, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { trpc } from '../../server/utils/trpc';
import { GiThreeFriends } from 'react-icons/gi';
import Group from './Group';
import { Button, IconButton } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
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
import {
  CreateGroupForm,
  GroupsForm,
} from '../SignUpFlowForms/CreateGroupsForm';

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
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
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
