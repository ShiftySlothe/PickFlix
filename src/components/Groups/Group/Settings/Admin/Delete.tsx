// TODO Add an are you sure modal

import { Button } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { useToast } from '@chakra-ui/toast';
import { GroupProps } from '../..';
import { trpc } from '../../../../../server/utils/trpc';
import { useOnCloseContext } from '..';
import { useRefetchAllGroupsContext } from '../../..';

// use Context to get the sidebar to close on click
export function DeleteGroup({ groupId }: GroupProps) {
  const deleteMutation = trpc.useMutation('group.delete');
  const toast = useToast();
  const onClose = useOnCloseContext();
  const { refetch: refetchGroups } = useRefetchAllGroupsContext();
  const onClick = async () => {
    toast({
      title: 'Group deleted.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
    await deleteMutation.mutateAsync({ groupId });
    refetchGroups();
    onClose();
  };
  return (
    <>
      <FormLabel>Delete Group</FormLabel>
      <Button onClick={onClick}>Delete</Button>
    </>
  );
}
