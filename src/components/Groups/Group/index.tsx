import { Avatar } from '@chakra-ui/avatar';
import { Button, IconButton } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
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
import { createGenericContext } from '../../../lib/createGenericContext';
import { HamburgerIcon } from '@chakra-ui/icons';
import { RefetchContext } from '../../../lib/types';
import { GroupSettings } from './Settings';

export interface GroupProps {
  groupId: number;
}

export const [useRefetchGroupContext, RefetchGroupContextProvider] =
  createGenericContext<RefetchContext>();

export default function Group({ groupId }: GroupProps) {
  const nameQuery = trpc.useQuery(['group.getGroupName', { groupId: groupId }]);
  const data = nameQuery.data;
  return (
    <Skeleton isLoaded={nameQuery.isSuccess} width={'100%'}>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        border="2px"
        borderColor="grey"
        borderRadius="4px"
        boxShadow={'lg'}
        width={'100%'}
      >
        <Avatar name={data?.name} m={3} />
        <Text m={1} isTruncated>
          {data?.name}
        </Text>
        <Box mr={1}>
          <RefetchGroupContextProvider value={{ refetch: nameQuery.refetch }}>
            <GroupLikes groupId={groupId} />
            <GroupSettings groupId={groupId} groupName={data?.name} />
            <Tooltip label="More info" placement="top">
              <IconButton
                icon={<HamburgerIcon />}
                aria-label="More info"
                ml={1}
              />
            </Tooltip>
          </RefetchGroupContextProvider>
        </Box>
      </Flex>
    </Skeleton>
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
