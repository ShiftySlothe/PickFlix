import { Box, Flex, Heading } from '@chakra-ui/react';
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
        borderColor="black"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        direction="column"
        width={{ sm: '1px', md: '150px', lg: '210px', xl: '260px' }}
        height={{ sm: '1px', md: '225px', lg: '315px', xl: '390px' }}
      >
        <Image
          src={`${process.env.TMDB_IMAGE_URL}/${TMDBPosterSize.w300}/${movie.poster_path}`}
          alt={`Image for ${movie.title}`}
          layout="fill"
        />
      </Flex>
    </>
  );
}
