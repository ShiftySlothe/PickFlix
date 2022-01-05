import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import React from 'react';
import { trpc } from '../../server/utils/trpc';

export default function TrpcTest() {
  const query = trpc.useQuery(['user.getLikedGenresFromSession']);
  const data = query.data;
  const mutation = trpc.useMutation('groupLikes.userLikesShow');
  return (
    <div>
      <Heading>Query test area</Heading>
      <Button
        onClick={async () => {
          mutation.mutateAsync({ groupId: 1, showId: 1 });
        }}
      >
        Make mutation
      </Button>
    </div>
  );
}
