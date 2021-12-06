import { Avatar } from '@chakra-ui/avatar';
import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  CheckCircleIcon,
  CheckIcon,
  CloseIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Box, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Skeleton } from '@chakra-ui/skeleton';
import { useToast } from '@chakra-ui/toast';
import { Tooltip } from '@chakra-ui/tooltip';
import React, { useRef, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FcInvite } from 'react-icons/fc';
import { createGenericContext } from '../../lib/createGenericContext';
import { RefetchContext } from '../../lib/types';
import { trpc } from '../../server/utils/trpc';
import { AddFriendField } from '../SignUpFlowForms/components/AddFriendField';
import NextError from 'next/error';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { User } from '.prisma/client';

export const [useRefetchAllFriendsContext, RefetchAllFriendsContextProvider] =
  createGenericContext<RefetchContext>();

export default function Friends() {
  const friendsQuery = trpc.useQuery(['friend.getAllFriendsFromSession']);
  const friends = friendsQuery.data;
  const refetch = friendsQuery.refetch;

  return (
    <VStack minW="300px">
      <RefetchAllFriendsContextProvider value={{ refetch }}>
        <FriendsHeader />
        <Divider mb={2} />
        <Input placeholder="Search"></Input>
        <Skeleton isLoaded={friendsQuery.isSuccess}>
          <VStack>
            {friends?.map((friend) => (
              <Friend friend={friend} key={friend.id} />
            ))}
            {friends && friends.length < 1 && <Text>No friends found</Text>}
          </VStack>
        </Skeleton>
      </RefetchAllFriendsContextProvider>
    </VStack>
  );
}

function FriendsHeader() {
  return (
    <Flex alignItems="center" justifyContent="space-between" width="100%">
      <Heading fontSize="xl">Friends</Heading>
      <Box>
        <FriendInvites />
        <AddFriend />
      </Box>
    </Flex>
  );
}

export const [useRefetchAllRequestsContext, RefetchAllRequestsContextProvider] =
  createGenericContext<RefetchContext>();

function FriendInvites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const requestsQuery = trpc.useQuery(['friend.getPendingRequestsFromSession']);
  const refetch = requestsQuery.refetch;
  const requests = requestsQuery.data;
  const { refetch: refetchAllFriends } = useRefetchAllFriendsContext();
  return (
    <RefetchAllRequestsContextProvider value={{ refetch }}>
      <Tooltip label="Invites" placement="top">
        <IconButton
          aria-label="Friend requests"
          icon={<FcInvite />}
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
          <DrawerHeader>Friend Requests</DrawerHeader>
          <DrawerBody>
            {!!requests && requests.length > 0 ? (
              requests.map(({ sender }) => (
                <FriendRequest sender={sender} key={sender.id} />
              ))
            ) : (
              <Text>No invites at the moment!</Text>
            )}
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
    </RefetchAllRequestsContextProvider>
  );
}

interface FriendRequestProps {
  sender: {
    id: string;
    userName: string | null;
    image: string | null;
  };
}
function FriendRequest({ sender }: FriendRequestProps) {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      border="2px"
      borderColor="grey"
      borderRadius="2px"
      boxShadow={'lg'}
      mb={1}
      p={2}
    >
      <Tooltip label={sender.userName} placement="top">
        <Avatar name={sender.userName || ''} />
      </Tooltip>
      <Tooltip label="From" placement="top">
        <Text fontSize="sm" ml={1} isTruncated>
          {sender.userName}
        </Text>
      </Tooltip>
      <Box>
        <Accept sender={sender} />
        <Decline sender={sender} />
      </Box>
    </Flex>
  );
}

function Accept({ sender }: FriendRequestProps) {
  const acceptMutation = trpc.useMutation('friend.acceptRequest');
  const toast = useToast();
  const { refetch } = useRefetchAllRequestsContext();
  const acceptInvite = async () => {
    await acceptMutation.mutateAsync({ senderId: sender.id });
    toast({
      title: 'Request accepted',
      status: 'success',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Accept" placement="top">
      <IconButton
        aria-label="Accept request"
        icon={<CheckCircleIcon />}
        size={'sm'}
        ml={1}
        onClick={acceptInvite}
      />
    </Tooltip>
  );
}

function Decline({ sender }: FriendRequestProps) {
  const acceptMutation = trpc.useMutation('friend.declineRequest');
  const toast = useToast();
  const { refetch } = useRefetchAllRequestsContext();
  const declineInvite = async () => {
    await acceptMutation.mutateAsync({ senderId: sender.id });
    toast({
      title: 'Request declined',
      status: 'error',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Decline" placement="top">
      <IconButton
        aria-label="Decline request"
        icon={<CloseIcon />}
        size={'sm'}
        ml={1}
        onClick={declineInvite}
      />
    </Tooltip>
  );
}

function AddFriend() {
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

interface FriendProps {
  friend: User;
}
function Friend({ friend }: FriendProps) {
  return (
    <Flex
      direction="row"
      width="400px"
      justifyContent="space-between"
      alignItems="center"
      border="2px"
      borderColor="grey"
      borderRadius="2px"
      boxShadow={'lg'}
    >
      <Avatar name={friend?.userName || ''} m={3} />
      <Text m={1} isTruncated>
        {friend.userName}
      </Text>
      <Box mr={1}>
        <RemoveFriend friend={friend} />
      </Box>
    </Flex>
  );
}

function RemoveFriend({ friend }: FriendProps) {
  const removeMutation = trpc.useMutation('friend.removeFriend');
  const toast = useToast();
  const { refetch } = useRefetchAllFriendsContext();
  const removeFriend = async () => {
    await removeMutation.mutateAsync({ friendId: friend.id });
    toast({
      title: 'Friend removed',
      status: 'error',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Remove friend" placement="top">
      <IconButton
        icon={<CloseIcon />}
        aria-label="More info"
        ml={1}
        onClick={removeFriend}
      />
    </Tooltip>
  );
}
