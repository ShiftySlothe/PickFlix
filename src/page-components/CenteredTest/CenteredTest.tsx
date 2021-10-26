import { Center } from '@chakra-ui/layout';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';

export default function CenteredTest() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center w="100vw" h="100vh" bg="beige" overflow="hidden">
        <Button ml={1} onClick={onOpen}>
          Add friends
        </Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search for friend</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Sir Rob Stevenson" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => null}>
              Search
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
