import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useDisclosure } from '@chakra-ui/react';
import { KabamModal } from '../KabamModal';

export default function NavBar() {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonSize = useBreakpointValue({
    base: 'xs',
    md: 'md',
    lg: 'lg',
  });

  const signInTemp = () => {
    signIn('google', {
      callbackUrl: `${process.env.BASE_URL}/dashboard`,
      redirect: true,
    });
  };
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="black"
        color="#e50914"
        h="80px"
      >
        <Flex ml={{ md: 4, lg: 10 }} alignItems="center">
          <Heading ml={4} pt={2}>
            PickFlix
          </Heading>
          <Button ml={2} onClick={onOpen}>
            READ ME
          </Button>
        </Flex>
        <Flex mr={{ base: 4, lg: 10 }}>
          {session && (
            <Text fontSize={{ base: 'md', lg: 'xl' }} mr={3} pt={1}>
              {session?.user?.name}
            </Text>
          )}
          {session ? (
            <Button
              variant="nav-button"
              mr={4}
              size={buttonSize}
              onClick={() => signOut()}
            >
              Log out
            </Button>
          ) : (
            <Button
              variant="nav-button"
              mr={4}
              size={buttonSize}
              onClick={signInTemp}
            >
              Log in
            </Button>
          )}
        </Flex>
      </Flex>
      <KabamModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
