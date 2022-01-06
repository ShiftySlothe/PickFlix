import { ReactNode, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Logo from '../../../public/logos/PickFlix-logos.jpeg';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../Helpers/TRPC/useQueryWrapper';
import { signOut } from 'next-auth/react';
import Router from 'next/router';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function DashNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const usernameQuery = trpc.useQuery(['user.getUsernameFromSession']);
  const { data: username } = usernameQuery;
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={'10vh'} alignItems={'center'} justifyContent={'space-between'}>
          <Flex h="9vh" w="5%" mx={3} my={1} position="relative">
            <Image src={Logo} layout="fill" sizes="5vw" objectFit="cover" />
          </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <TRPCQueryWrapper query={usernameQuery}>
                      <p>{username?.userName}</p>
                    </TRPCQueryWrapper>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Help />
                  <AccountSettings />
                  <LogOut />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

function Help() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem onClick={onOpen}>Help</MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Help</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider />
            <Text mt={2}>
              Friends can be added via their username using the column on the
              right. Once your friend has accepted you can create a group with
              them to swipe in. Select the group you want to swipe in and....
              begin swiping!
            </Text>
            <br />
            <Text>
              When everyone in the group has swiped right the movie will be
              added to your group likes.
            </Text>
            <br />
            <Text>
              Only the group owner can add or remove people from a group, check
              out &apos;Group Settings&apos; for more info.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function AccountSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem onClick={onOpen}>Account settings</MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider />
            <Text mt={2}>Update username</Text>
            <br />
            <Text>Delete Account</Text>
            <br />
            <Text>Other settings</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function LogOut() {
  trpc.useMutation;
  return (
    <MenuItem
      onClick={async () => {
        await Router.push('/');
        signOut();
      }}
    >
      Logout
    </MenuItem>
  );
}
