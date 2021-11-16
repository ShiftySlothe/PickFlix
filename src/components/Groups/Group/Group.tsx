import { Avatar } from '@chakra-ui/avatar';
import { Button, IconButton } from '@chakra-ui/button';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AiOutlineLike } from 'react-icons/ai';
import { trpc } from '../../../server/utils/trpc';
import { Skeleton } from '@chakra-ui/skeleton';
import { Tooltip } from '@chakra-ui/tooltip';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';
import { useRef } from 'react';
import { FormControl } from '@chakra-ui/form-control';
import AdminSettings from './AdminSettings';

export interface GroupProps {
  groupId: number;
}
export default function Group({ groupId }: GroupProps) {
  const nameQuery = trpc.useQuery(['group.getGroupName', { groupId: groupId }]);
  const data = nameQuery.data;
  return (
    <Skeleton isLoaded={nameQuery.isSuccess}>
      <Flex
        direction="row"
        width="400px"
        justifyContent="space-between"
        alignItems="center"
        border="2px"
        borderColor="grey"
        borderRadius="4px"
        boxShadow={'lg'}
      >
        <Avatar name={data?.name} m={3} />
        <Text m={1} isTruncated>
          {data?.name}
        </Text>
        <Box mr={1}>
          <GroupLikes groupId={groupId} />
          <GroupSettings groupId={groupId} />
        </Box>
      </Flex>
    </Skeleton>
  );
}

function GroupSettings({ groupId }: GroupProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Tooltip label="Settings" placement="top">
        <IconButton
          aria-label="Group settings"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          ref={btnRef}
          ml={1}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Group settings</DrawerHeader>

          <DrawerBody>
            <SettingsBody groupId={groupId} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function SettingsBody({ groupId }: GroupProps) {
  const adminQuery = trpc.useQuery(['group.isGroupAdmin', { groupId }]);
  const isAdmin = adminQuery.data;

  return (
    <Skeleton isLoaded={adminQuery.isSuccess}>
      {isAdmin && <AdminSettings groupId={groupId} />}
      <StandardSettings groupId={groupId} />
    </Skeleton>
  );
}

function StandardSettings({ groupId }: GroupProps) {
  return (
    <>
      <Heading fontSize={'md'}>Settings</Heading>
      <Divider />
    </>
  );
}
function GroupLikes({ groupId }: GroupProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Tooltip label="Likes" placement="top">
        <IconButton
          aria-label="Group settings"
          icon={<AiOutlineLike />}
          onClick={onOpen}
          ref={btnRef}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Group likes</DrawerHeader>

          <DrawerBody>
            <LikesBody groupId={groupId} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function LikesBody({ groupId }: GroupProps) {
  return <Text>Likes</Text>;
}
