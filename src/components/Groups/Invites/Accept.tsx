import { IconButton } from '@chakra-ui/button';
import { CheckIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/tooltip';
import { trpc } from '../../../server/utils/trpc';
import React from 'react';
import { GroupInvitationProps } from './GroupInvitation';
import { useToast } from '@chakra-ui/toast';
import { useRefetchAllInvitesContext } from '.';

export default function Accept({ invite }: GroupInvitationProps) {
  const acceptMutation = trpc.useMutation('group.acceptRequestBySession');
  const toast = useToast();
  const { refetch } = useRefetchAllInvitesContext();
  const acceptInvite = async () => {
    await acceptMutation.mutateAsync({ groupId: invite.userGroup.id });
    toast({
      title: 'Request accepted',
      status: 'success',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Accept" placement="top">
      <IconButton
        aria-label="Accept request"
        icon={<CheckIcon />}
        size={'sm'}
        ml={1}
        onClick={acceptInvite}
      />
    </Tooltip>
  );
}
