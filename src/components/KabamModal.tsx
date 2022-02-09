import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
  Divider,
  Link,
} from '@chakra-ui/react';

export function KabamModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => unknown;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Project Overview</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading size="md">Usage</Heading>
          <Divider />
          <Text>
            You can log into emailer using basic Google OAuth, create boards and
            add notes with a title and a body. You can drag and drop the notes
            into a new order as required.
          </Text>
          <br />
          <Heading size="md">The Why</Heading>
          <Divider />
          <Text>
            Kabam was a guided project I undertook to understand the
            fundamentals of Typescript and React. Having been frustrated by the
            lack of type saftey in plain Javascript, I was keen to understand
            more about Typescript and it&apos;s benefits. I wasn&apos;t
            dissapionted.
            <br />
            <br />I also reinforced my understanding of the Context API.
          </Text>
          <br />
          <Heading size="md">What&apos;s next</Heading>
          <Divider />
          <Text>
            If I were to develop this project further, I&apos;d aim to:
            <br />
            <br />
            Hook up MongoDB to persist users notes.
            <br />
            <br />
            Imeplement a responsive design. This would be challenging given the
            current design of the project. It is likely a new drag and drop
            libary would be required or a separate mechanism used when on
            touchscreens.
          </Text>
          <br />
          <Divider />
          <Text align="center">
            Thanks for taking the time to review my project.{' '}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
