import { Box, Center } from '@chakra-ui/layout';
import React from 'react';
import TinderCards from '../../components/TinderCard/TinderCards';

export default function CenteredTest() {
  return (
    <Center w="100vw" h="100vh" bg="beige">
      <TinderCards />
    </Center>
  );
}
