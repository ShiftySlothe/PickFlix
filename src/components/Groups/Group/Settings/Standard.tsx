import { Button } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { Divider, Heading } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { useOnCloseContext } from '.';
import { GroupProps, useRefetchGroupContext } from '..';
import { useRefetchAllGroupsContext } from '../..';
import { trpc } from '../../../../server/utils/trpc';

export function StandardSettings({ groupId }: GroupProps) {
  return (
    <>
      <Heading fontSize={'md'}>Settings</Heading>
      <Divider />
      <LeaveGroup groupId={groupId} />
    </>
  );
}

function LeaveGroup({ groupId }: GroupProps) {
  const leaveMutation = trpc.useMutation(
    'group.removeUserFromGroupWithSession',
  );
  const toast = useToast();
  const { refetch } = useRefetchAllGroupsContext();
  const onClose = useOnCloseContext();
  const leave = async () => {
    await leaveMutation.mutateAsync({ groupId });
    toast({
      title: 'Left group',
      status: 'success',
      duration: 4500,
      isClosable: true,
    });
    refetch();
    onClose();
  };
  return (
    <>
      <FormLabel>Leave Group</FormLabel>
      <Button onClick={leave}>Leave</Button>
    </>
  );
}
