import { Input } from '@chakra-ui/input';
import { Divider, VStack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import React from 'react';
import { trpc } from '../../server/utils/trpc';

export default function Friends() {
  const friendsQuery = trpc.useQuery('friend.');
  return (
    <VStack minW="300px">
      <FriendsHeader />
      <Divider mb={2} />
      <Input placeholder="Search"></Input>
      <Skeleton isLoaded={groupsQuery.isSuccess}>
        <VStack>
          {friends?.map((friend) => (
            <Friend friendId={group.id} key={friend.id} />
          ))}
          {friends && friends.length < 1 && <Text>No groups found</Text>}
        </VStack>
      </Skeleton>
    </VStack>
  );
}
