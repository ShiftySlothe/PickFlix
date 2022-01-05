import { IconButton } from '@chakra-ui/button';
import { useToast } from '@chakra-ui/toast';
import { Tooltip } from '@chakra-ui/tooltip';
import { GrUserAdmin } from 'react-icons/gr';
import { GroupMemberProps } from '.';
import { trpc } from '../../../../../server/utils/trpc';

export function MakeAdmin({ user: member, groupId }: GroupMemberProps) {
  const adminQuery = trpc.useQuery([
    'group.isGroupAdminFromId',
    { userId: member.id, groupId },
  ]);
  const isAdmin = adminQuery.data;

  const adminMutation = trpc.useMutation('group.addGroupAdmin');
  const toast = useToast();
  const makeAdmin = async () => {
    await adminMutation.mutateAsync({
      groupId,
      userId: member.id,
    });
    toast({
      title: `${member.userName} now admin`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Tooltip label={isAdmin ? 'Already admin' : 'Make admin'} placement="top">
      <IconButton
        aria-label={`Grant ${member.userName} admin`}
        icon={<GrUserAdmin />}
        onClick={makeAdmin}
        disabled={isAdmin}
      />
    </Tooltip>
  );
}
