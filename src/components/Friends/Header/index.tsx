import { Box, Flex, Heading } from '@chakra-ui/layout';
import AddFriend from './AddFriend';
import FriendInvites from './Invites';

export default function FriendsHeader() {
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
