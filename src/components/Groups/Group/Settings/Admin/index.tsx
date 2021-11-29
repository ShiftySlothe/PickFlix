import { Box, Divider, Heading } from '@chakra-ui/layout';
import { GroupProps } from '../..';
import { User } from '.prisma/client';
import { UpdateName } from './UpdateName';
import { UpdateMembers } from './UpdateMembers';
import { InviteNewUsers } from './InviteNewUsers';
import { DeleteGroup } from './Delete';

export interface GroupMemberProps extends GroupProps {
  user: { id: string; userName: string | null };
}

export default function AdminSettings({ groupId }: GroupProps) {
  return (
    <>
      <Heading fontSize={'md'}>Admin Settings</Heading>
      <Divider />
      <Box mt={1} mb={3}>
        <UpdateName groupId={groupId} />
        <Divider py={1} />
      </Box>
      <Box mb={3}>
        <UpdateMembers groupId={groupId} />
        <Divider py={1} />
      </Box>
      <Box mb={3}>
        <InviteNewUsers groupId={groupId} />
        <Divider py={1} />
      </Box>
      <Box mb={3}>
        <DeleteGroup groupId={groupId} />
        <Divider py={1} />
      </Box>
    </>
  );
}
