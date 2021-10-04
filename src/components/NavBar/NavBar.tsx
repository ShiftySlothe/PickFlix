import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Logo from '../../../public/logos/ProSpector-logos_transparent.png';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function NavBar() {
  const { data: session } = useSession();
  const buttonSize = useBreakpointValue({
    base: 'xs',
    md: 'md',
    lg: 'lg',
  });
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="black"
      color="#e50914"
      h="80px"
      max
    >
      <Flex ml={{ md: 4, lg: 10 }} alignItems="center">
        <Heading ml={4} pt={2}>
          PickFlix
        </Heading>
      </Flex>
      <Flex mr={{ base: 4, lg: 10 }}>
        {session ? (
          <>
            <Text>{session?.user?.name}</Text>
            <Button
              variant="nav-button"
              mr={4}
              size={buttonSize}
              onClick={() => signOut()}
            >
              Log out
            </Button>
          </>
        ) : (
          <Button
            variant="nav-button"
            mr={4}
            size={buttonSize}
            onClick={() => signIn()}
          >
            Log in
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
