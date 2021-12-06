import { IconButton } from '@chakra-ui/button';
import { CloseIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/tooltip';
import { trpc } from '../../../server/utils/trpc';
import React from 'react';
import { GroupInvitationProps } from './GroupInvitation';
import { useToast } from '@chakra-ui/toast';
import { useRefetchAllInvitesContext } from '.';

export default function Decline({ invite }: GroupInvitationProps) {
  const acceptMutation = trpc.useMutation('group.declineRequestBySession');
  const toast = useToast();
  const { refetch } = useRefetchAllInvitesContext();
  const declineInvite = async () => {
    await acceptMutation.mutateAsync({ groupId: invite.userGroup.id });
    toast({
      title: 'Request declined',
      status: 'error',
      duration: 4500,
      isClosable: true,
    });
    refetch();
  };
  return (
    <Tooltip label="Decline" placement="top">
      <IconButton
        aria-label="Decline request"
        icon={<CloseIcon />}
        size={'sm'}
        ml={1}
        onClick={declineInvite}
      />
    </Tooltip>
  );
}
