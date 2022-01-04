import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../Helpers/TRPC/useQueryWrapper';
import MovieVideoCarosel from './MovieVideoCarosel';

interface ShowInfoModalProps {
  movieId: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ShowInfoModal({
  movieId,
  isOpen,
  onClose,
}: ShowInfoModalProps) {
  const movieQuery = trpc.useQuery(['movies.getMovieInfo', { movieId }]);
  const movieData = movieQuery.data;
  return (
    <TRPCQueryWrapper query={movieQuery}>
      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{movieData?.title}</ModalHeader>
          <Text>{movieData?.tagline}</Text>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Trailer</Heading>
            {movieData && <MovieVideoCarosel movieId={movieData.id} />}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </TRPCQueryWrapper>
  );
}
