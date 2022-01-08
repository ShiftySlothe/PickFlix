import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Text } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Tooltip } from '@chakra-ui/tooltip';
import { useRef } from 'react';
import { FcInvite } from 'react-icons/fc';
import { useRefetchAllFriendsContext } from '..';
import { createGenericContext } from '../../../lib/createGenericContext';
import { RefetchContext } from '../../../lib/types';
import { trpc } from '../../../server/utils/trpc';
import FriendRequest from './Request';

export const [useRefetchAllRequestsContext, RefetchAllRequestsContextProvider] =
  createGenericContext<RefetchContext>();

export default function FriendInvites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const requestsQuery = trpc.useQuery(['friend.getPendingRequestsFromSession']);
  const refetch = requestsQuery.refetch;
  const requests = requestsQuery.data;
  const { refetch: refetchAllFriends } = useRefetchAllFriendsContext();
  return (
    <RefetchAllRequestsContextProvider value={{ refetch }}>
      <Tooltip label="Invites" placement="top">
        <IconButton
          aria-label="Friend requests"
          icon={<FcInvite />}
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
          refetchAllFriends();
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Friend Requests</DrawerHeader>
          <DrawerBody>
            {!!requests && requests.length > 0 ? (
              requests.map(({ sender }) => {
                {
                  return (
                    sender && <FriendRequest sender={sender} key={sender.id} />
                  );
                }
              })
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
                refetchAllFriends();
              }}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </RefetchAllRequestsContextProvider>
  );
}
