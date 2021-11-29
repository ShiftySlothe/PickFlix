import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { AddIcon } from '@chakra-ui/icons';
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
import CreateGroupForm from './CreateForm';
import { useRefetchAllGroupsContext } from '.';

export function CreateNewGroup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { refetch: refetchAllGroups } = useRefetchAllGroupsContext();
  return (
    <>
      <Tooltip label="Create new group" placement="top">
        <IconButton
          aria-label="Create new group"
          icon={<AddIcon />}
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
          <DrawerHeader>Create new group</DrawerHeader>

          <DrawerBody>
            <CreateGroupForm />
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
    </>
  );
}
