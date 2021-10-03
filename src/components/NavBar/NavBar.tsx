import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import Logo from '../../../public/logos/ProSpector-logos_transparent.png';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { useBreakpointValue } from '@chakra-ui/media-query';

export default function NavBar() {
  const buttonSize = useBreakpointValue({
    base: 'xs',
    md: 'md',
    lg: 'lg',
  });
  return (
    <Flex justifyContent="space-between" alignItems="center" bg="#BCA8FC">
      <Flex
        order={{ base: 1, md: 0 }}
        ml={{ md: 4, lg: 10 }}
        alignItems="center"
      >
        <Box w="80px" h="80px">
          <Image src={Logo} height={80} width={80} />
        </Box>
        <Heading ml={4} pt={2} display={{ base: 'none', lg: 'block' }}>
          ProSpector
        </Heading>
      </Flex>
      <Box display={{ md: 'none' }} ml={4}>
        <MobileMenuItems />
      </Box>
      <Box display={{ base: 'none', md: 'block' }} width="90%" mr={5}>
        <DesktopMenuItems />
      </Box>
      <Flex mr={{ base: 4, lg: 10 }} order={{ base: 2, md: 2 }}>
        <Button
          variant="nav-button"
          mr={4}
          display={{ base: 'none', md: 'inline' }}
          size={buttonSize}
        >
          Log in
        </Button>
        <Button size={buttonSize} backgroundColor="#3C9482" color="white">
          Get started
        </Button>
      </Flex>
    </Flex>
  );
}

const MobileMenuItems = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        bg="white"
        variant="outline"
        order={{ base: 0, md: 1 }}
        aria-label="Open menu"
      />
      <MenuList>
        <MenuItem>Services</MenuItem>
        <MenuItem>Learn</MenuItem>
        <MenuItem>About us</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Login</MenuItem>
      </MenuList>
    </Menu>
  );
};
const DesktopMenuItems = () => {
  const buttonSize = useBreakpointValue({
    base: 'xs',
    md: 'md',
    lg: 'lg',
  });
  return (
    <Flex m={2} justifyContent="flex-end">
      <ButtonGroup spacing="10">
        <Button m={1} variant="nav-button" size={buttonSize}>
          Services
        </Button>
        <Button m={1} variant="nav-button" size={buttonSize}>
          Learn
        </Button>
        <Button m={1} variant="nav-button" size={buttonSize}>
          About us
        </Button>
        <Button m={1} variant="nav-button" size={buttonSize}>
          FAQ
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
