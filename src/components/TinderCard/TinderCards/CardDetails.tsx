import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { TMDBMovie, TMDBPosterSize } from '../../../lib/types';

interface CardDetailsProps {
  movie: TMDBMovie;
}
export default function CardDetails({ movie }: CardDetailsProps) {
  return (
    <>
      <Flex
        position="relative"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="50%"
        borderRadius="5px"
        w="192px"
        h="264px"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        p={4}
      >
        <Image
          src={`${process.env.TMDB_IMAGE_URL}/${TMDBPosterSize.w300}/${movie.poster_path}`}
          alt={`Image for ${movie.title}`}
          layout="fill"
        />
        <Heading p={2} fontSize="md">
          {movie.title}
        </Heading>
      </Flex>
    </>
  );
}
