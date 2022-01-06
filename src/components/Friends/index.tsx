import { Input } from '@chakra-ui/input';
import { Divider, Text, VStack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import React from 'react';
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
    <VStack>
      <RefetchAllFriendsContextProvider value={{ refetch }}>
        <FriendsHeader />
        <Divider mb={2} />
        <Input placeholder="Search"></Input>
        <Skeleton isLoaded={friendsQuery.isSuccess} width="100%">
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
