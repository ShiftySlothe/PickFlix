import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import React, { useState, useMemo, createRef, useEffect } from 'react';
import TinderCard, { Direction, API, Props } from 'react-tinder-card';
import { Top250MovieDetail } from '../../server/utils/movies/Movies';
import { top250 as db } from './db';

const alreadyRemoved: Top250MovieDetail[] = [];
let movieState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const TinderCards: React.FC<Props> = () => {
  const [movies, setMovies] = useState(db);
  const [lastDirection, setLastDirection] = useState('');

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => createRef<API>(), []),
    [],
  );

  const swiped = (direction: Direction, movie: Top250MovieDetail) => {
    console.log('removing: ' + movie.title);
    setLastDirection(direction);
    alreadyRemoved.push(movie);
  };

  const outOfFrame = (movie: Top250MovieDetail) => {
    console.log(movie.title + ' left the screen!');
    movieState = movieState.filter((m) => m.id !== movie.id);
    setMovies(movieState);
  };

  const swipe = (dir: Direction) => {
    const cardsLeft = movies.filter(
      ({ id }) => !alreadyRemoved.some((e) => e.id === id),
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1]; // Find the card object to be removed
      const index = db.map((movie) => movie).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current?.swipe(dir); // Swipe the card!
    }
  };

  return (
    <Box overflow="hidden">
      <Flex flexDir="column" overflow="hidden">
        <Box w="90vw" maxW="260px" h="300px" overflow="hidden">
          {movies.map((movie, index) => (
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
