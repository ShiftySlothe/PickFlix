import { ReactNode, useEffect, useState } from 'react';
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
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Collapse,
  FormHelperText,
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
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
            <Flex alignItems={'center'} direction={'column'}>
              <CollapsedUsernameUpdate />
              <CollapsedDeleteAccount />
            </Flex>
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

function CollapsedUsernameUpdate() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button mt={3} onClick={onToggle}>
        {isOpen ? 'Hide' : 'Update username'}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <UpdateUserNameForm />
      </Collapse>
    </>
  );
}

function UpdateUserNameForm() {
  const [usernameQ, setUsernameQ] = useState('');
  const usernameQuery = trpc.useQuery(['user.getUsernameFromSession']);
  const userMatchQuery = trpc.useQuery([
    'user.usernameExistsElsewhere',
    { username: usernameQ },
  ]);

  const usernameMutation = trpc.useMutation('user.updateUsername');
  return (
    <Formik
      initialValues={{
        username: '',
      }}
      onSubmit={async (values) => {
        await usernameMutation.mutateAsync({ username: values.username });
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Username is requried')
          .max(20, 'Username cannot be longer than 20 characters')
          .trim()
          .test(
            'username-backend-validation-waiting',
            'Checking username...',
            () => {
              if (userMatchQuery.isSuccess) {
                return true;
              }
              return false;
            },
          )
          .test('username-backend-validation', 'Username taken', () => {
            const userNameExists = userMatchQuery.data;
            return !userNameExists;
          }),
      })}
      validateOnBlur={true}
    >
      {(props) => (
        <Form>
          <Field name="username">
            {({ field, form }: FieldProps) => (
              <FormControl
                id="username"
                isInvalid={!!form.errors.username && !!form.touched.username}
                isRequired
              >
                <FormLabel htmlFor="username">Update Username</FormLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder={
                    usernameQuery.data && usernameQuery.data.userName
                      ? usernameQuery.data.userName
                      : 'Username...'
                  }
                  onChange={(e) => {
                    form.handleChange(e);
                    setUsernameQ(e.target.value);
                    form.validateField('username');
                  }}
                  disabled={usernameQuery.isLoading}
                />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button mt={1} type="submit">
            Update
          </Button>
        </Form>
      )}
    </Formik>
  );
}

function CollapsedDeleteAccount() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button mt={3} onClick={onToggle}>
        {isOpen ? 'Hide' : 'Delete Account'}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <DeleteAccountForm />
      </Collapse>
    </>
  );
}

function DeleteAccountForm() {
  const [input, setInput] = useState('');
  const handleInputChange = (e: any) => setInput(e.target.value);

  const usernameQuery = trpc.useQuery(['user.getUsernameFromSession']);
  const { data: username } = usernameQuery;

  const deletionMutation = trpc.useMutation('user.deletePerm');

  const deleteAccount = async () => {
    await deletionMutation.mutateAsync();
    await Router.push('/');
    Router.reload();
  };

  const checkError = () => {
    if (input === '') {
      return false;
    } else {
      return input !== username?.userName;
    }
  };

  return (
    <TRPCQueryWrapper query={usernameQuery}>
      <FormControl isInvalid={checkError()}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="username"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!checkError() ? (
          <FormHelperText>
            Enter your username ({username?.userName}) to delete your account.
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            Username doesn&apos;t match {username?.userName}
          </FormErrorMessage>
        )}
      </FormControl>
      <Button isDisabled={input !== username?.userName} onClick={deleteAccount}>
        Delete account
      </Button>
    </TRPCQueryWrapper>
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
