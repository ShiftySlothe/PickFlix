import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import { TMDBMovie, TMDBPosterSize } from '../../../lib/types';
import ShowInfoModal from '../../ShowModal';

interface CardDetailsProps {
  movie: TMDBMovie;
}

export default function CardDetails({ movie }: CardDetailsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        position="relative"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="50%"
        borderRadius="5px"
        borderColor="black"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        direction="column"
        width={'30vh'}
        height={'45vh'}
        onClick={onOpen}
      >
        <Image
          src={`${process.env.TMDB_IMAGE_URL}/${TMDBPosterSize.w300}/${movie.poster_path}`}
          alt={`Image for ${movie.title}`}
          layout="fill"
        />
      </Flex>
      <ShowInfoModal movieId={movie.id} onClose={onClose} isOpen={isOpen} />
    </>
  );
}
