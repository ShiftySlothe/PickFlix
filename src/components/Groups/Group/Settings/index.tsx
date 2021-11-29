import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
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
import { GoSettings } from 'react-icons/go';
import { GroupProps } from '..';
import { useRefetchAllGroupsContext } from '../..';
import { createGenericContext } from '../../../../lib/createGenericContext';
import { OnClose } from '../../../../lib/types';
import { SettingsBody } from './Body';

interface GroupSettingsProps extends GroupProps {
  groupName: string | undefined;
}

export const [useOnCloseContext, OnCloseContextProvider] =
  createGenericContext<OnClose>();

export function GroupSettings({ groupId, groupName }: GroupSettingsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { refetch: refetchAllGroups } = useRefetchAllGroupsContext();
  return (
    <>
      <Tooltip label="Settings" placement="top">
        <IconButton
          aria-label="Group settings"
          icon={<GoSettings />}
          onClick={onOpen}
          ref={btnRef}
          ml={1}
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
          <DrawerHeader>
            {groupName ? groupName : 'Group'} settings
          </DrawerHeader>
          <DrawerBody>
            <OnCloseContextProvider value={onClose}>
              <SettingsBody groupId={groupId} />
            </OnCloseContextProvider>
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
