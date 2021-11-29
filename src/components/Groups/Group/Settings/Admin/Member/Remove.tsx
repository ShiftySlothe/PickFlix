import { IconButton } from '@chakra-ui/button';
import { useToast } from '@chakra-ui/toast';
import { Tooltip } from '@chakra-ui/tooltip';
import { HiUserRemove } from 'react-icons/hi';
import { GroupMemberProps } from '..';
import { trpc } from '../../../../../../server/utils/trpc';

export function RemoveFromGroup({ user: member, groupId }: GroupMemberProps) {
  const removeMutation = trpc.useMutation('group.removeUserFromGroup');
  const toast = useToast();
  const removeUser = async () => {
    await removeMutation.mutateAsync({ groupId, userId: member.id });
    toast({
      title: `${member.userName} removed`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Tooltip label="Remove" placement="top">
      <IconButton
        aria-label={`Remove ${member.userName}`}
        icon={<HiUserRemove />}
        onClick={removeUser}
      />
    </Tooltip>
  );
}
