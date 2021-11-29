import { IconButton } from '@chakra-ui/button';
import { useToast } from '@chakra-ui/toast';
import { Tooltip } from '@chakra-ui/tooltip';
import { HiUserAdd } from 'react-icons/hi';
import { GroupMemberProps } from '..';
import { trpc } from '../../../../../../server/utils/trpc';

export function InviteToGroup({ user: member, groupId }: GroupMemberProps) {
  const inviteMutation = trpc.useMutation('group.inviteUserToGroup');
  const toast = useToast();
  const addUser = async () => {
    await inviteMutation.mutateAsync({ groupId, userId: member.id });
    toast({
      title: `${member.userName} invited`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Tooltip label="Invite" placement="top">
      <IconButton
        aria-label={`Remove ${member.userName}`}
        icon={<HiUserAdd />}
        onClick={addUser}
      />
    </Tooltip>
  );
}
