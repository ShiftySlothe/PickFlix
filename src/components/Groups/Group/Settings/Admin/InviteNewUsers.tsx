import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Skeleton } from '@chakra-ui/skeleton';
import { useState } from 'react';
import { GroupProps } from '../..';
import { trpc } from '../../../../../server/utils/trpc';
import Member from './Member';

export function InviteNewUsers({ groupId }: GroupProps) {
  const [usernameQuery, setusernameQuery] = useState('');
  const searchQuery = trpc.useQuery([
    'user.findOthersByUsername',
    { usernameQuery },
  ]);
  const userMatches = searchQuery.data;
  return (
    <>
      <FormLabel>Add Members</FormLabel>
      <Input
        placeholder="Search"
        onChange={(e) => {
          setusernameQuery(e.target.value);
        }}
      />
      <Skeleton isLoaded={searchQuery.isSuccess}>
        {!!userMatches &&
          userMatches.map((user) => (
            <Member user={user} groupId={groupId} key={user.id} />
          ))}
      </Skeleton>
    </>
  );
}
