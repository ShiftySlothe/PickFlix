import { Box, Flex, Heading } from '@chakra-ui/layout';
import React, { useState } from 'react';
import TinderCard from './react-tinder-card';
import { API, Direction, Props } from './types';

import { Movie } from '.prisma/client';

interface TinderCardsProps {
  movies: Movie[];
}
const TinderCards = ({ movies }: TinderCardsProps) => {
  const [lastDirection, setLastDirection] = useState('');

  const swiped = (direction: Direction, movie: Movie) => {
    console.log('removing: ' + movie.title);
    setLastDirection(direction);
  };

  const outOfFrame = (movie: Movie) => {
    console.log(movie.title + ' left the screen!');
  };

  return (
    <Box overflow="hidden">
      <Flex flexDir="column" overflow="hidden">
        <Box w="90vw" maxW="260px" h="300px" overflow="hidden">
          {movies?.map((movie, index) => (
            <Box position="absolute" key={movie.id}>
              <TinderCard
                onSwipe={(dir) => swiped(dir, movie)}
                onCardLeftScreen={() => outOfFrame(movie)}
              >
                <Flex
                  position="relative"
                  backgroundColor="white"
                  backgroundSize="cover"
                  backgroundPosition="50%"
                  borderRadius="5px"
                  width="80vw"
                  maxW="260px"
                  h="300px"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading p={2} fontSize="md">
                    {movie.title}
                  </Heading>
                </Flex>
              </TinderCard>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default TinderCards;
