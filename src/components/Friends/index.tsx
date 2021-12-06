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
import FriendsHeader from './Header';
import Friend from './Friend';

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
