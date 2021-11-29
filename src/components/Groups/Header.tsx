import { Box, Flex, Heading } from '@chakra-ui/layout';
import { CreateNewGroup } from './CreateNew';
import { GroupInvites } from './Invites';

export function GroupsHeader() {
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
