import { useDisclosure } from '@chakra-ui/hooks';
import { trpc } from '../../../server/utils/trpc';
import { useRef } from 'react';
import { useRefetchAllGroupsContext } from '..';
import { Tooltip } from '@chakra-ui/tooltip';
import { Button, IconButton } from '@chakra-ui/button';
import { GiThreeFriends } from 'react-icons/gi';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Text } from '@chakra-ui/layout';
import { GroupInvitation } from './GroupInvitation';
import { createGenericContext } from '../../../lib/createGenericContext';
import { RefetchContext } from '../../../lib/types';

export const [useRefetchAllInvitesContext, RefetchAllInvitesContextProvider] =
  createGenericContext<RefetchContext>();

export function GroupInvites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const invitesQuery = trpc.useQuery(['group.getInvitesFromSession']);
  const refetch = invitesQuery.refetch;
  const invites = invitesQuery.data;
  const { refetch: refetchAllGroups } = useRefetchAllGroupsContext();
  return (
    <RefetchAllInvitesContextProvider value={{ refetch }}>
      <Tooltip label="Invites" placement="top">
        <IconButton
          aria-label="Group invites"
          icon={<GiThreeFriends />}
          mr={2}
          ref={btnRef}
          onClick={onOpen}
        />
      </Tooltip>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => {
          onClose();
          refetchAllGroups();
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Group Invites</DrawerHeader>
          <DrawerBody>
            {!!invites && invites.length > 0 ? (
              invites.map((invite) => (
                <GroupInvitation invite={invite} key={invite.id} />
              ))
            ) : (
              <Text>No invites at the moment!</Text>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                refetchAllGroups();
              }}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </RefetchAllInvitesContextProvider>
  );
}
