import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import React, { useMemo, useState, useEffect } from 'react';
import TinderCard, { API, Direction } from './react-tinder-card';
import { Movie } from '.prisma/client';

interface TinderCardsProps {
  movies: Movie[];
}

const TinderCards = ({ movies: m }: TinderCardsProps) => {
  const alreadyRemoved: Movie[] = [];
  const [movies, setMovies] = useState(m);
  const [lastDirection, setLastDirection] = useState('');

  // Create refs for each movie
  const childRefs = useMemo(() => {
    return Array(m.length)
      .fill(0)
      .map((i) => React.createRef<API>());
  }, [m]);

  const swiped = (direction: Direction, movie: Movie) => {
    console.log('removing: ' + movie.title);
    setLastDirection(direction);
    alreadyRemoved.push(movie);
  };

  const outOfFrame = (movie: Movie) => {
    console.log(movie.title + ' left the screen!');
    let newMovieState = movies.filter((m) => m.id !== movie.id);
    newMovieState = newMovieState.filter((m) => !alreadyRemoved.includes(m));
    setMovies(newMovieState);
  };

  const swipe = (dir: Direction) => {
    const moviesLeft = movies?.filter((m) => !alreadyRemoved.includes(m));
    if (moviesLeft?.length) {
      const toBeRemoved = moviesLeft[moviesLeft.length - 1]; // Find the card object to be removed
      const index = m.map((m) => m).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current?.swipe(dir); // Swipe the card!
    }
  };

  return (
    <Box overflow="hidden">
      <Flex flexDir="column" overflow="hidden">
        <Box w="90vw" maxW="260px" h="300px" overflow="hidden">
          {movies?.map((movie, index) => (
            <Box position="absolute" key={movie.id}>
              <TinderCard
                ref={childRefs[index]}
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

        <Flex justifyContent="center" mt={3}>
          <ButtonGroup>
            <Button onClick={() => swipe('left')}>Swipe left!</Button>
            <Button onClick={() => swipe('right')}>Swipe right!</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TinderCards;
