import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, VStack } from '@chakra-ui/layout';
import React, { useMemo, useState } from 'react';
import TinderCard, { API, Direction } from '../react-tinder-card';
import { TMDBMovie } from '../../../lib/types';
import CardDetails from './CardDetails';
import CurrentGroup from '../CurrentGroup';
import { trpc } from '../../../server/utils/trpc';
interface TinderCardsProps {
  movies: TMDBMovie[];
  refetch: () => void;
}

const TinderCards = ({ movies: m, refetch }: TinderCardsProps) => {
  const alreadyRemoved: TMDBMovie[] = [];
  const [movies, setMovies] = useState(m);
  const [lastDirection, setLastDirection] = useState('');
  const [isRemoving, setisRemoving] = useState(false);
  const likeMutation = trpc.useMutation('groupLikes.');
  // Create refs for each movie
  const childRefs = useMemo(() => {
    return Array(m.length)
      .fill(0)
      .map((i) => React.createRef<API>());
  }, [m]);

  const swiped = (direction: Direction, movie: TMDBMovie) => {
    setLastDirection(direction);
    alreadyRemoved.push(movie);
  };

  const outOfFrame = (movie: TMDBMovie) => {
    let newMovieState = movies.filter((m) => m.id !== movie.id);
    newMovieState = newMovieState.filter((m) => !alreadyRemoved.includes(m));
    setMovies(newMovieState);
    setisRemoving(false);
    if (newMovieState.length < 1) {
      refetch();
    }
  };

  const swipe = (dir: Direction) => {
    setisRemoving(true);
    const moviesLeft = movies?.filter((m) => !alreadyRemoved.includes(m));
    if (moviesLeft?.length) {
      const toBeRemoved = moviesLeft[moviesLeft.length - 1]; // Find the card object to be removed
      const index = m.map((m) => m).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current?.swipe(dir); // Swipe the card!
    } else {
      refetch();
    }
  };

  return (
    <Box overflow="hidden">
      <Flex flexDir="column" overflow="hidden">
        <Box w="90vw" maxW="260px" h="300px" overflow="hidden">
          {movies.length > 0 ? (
            movies?.map((movie, index) => (
              <Box position="absolute" key={movie.id}>
                <TinderCard
                  ref={childRefs[index]}
                  onSwipe={(dir) => swiped(dir, movie)}
                  onCardLeftScreen={() => outOfFrame(movie)}
                >
                  <CardDetails movie={movie} />
                </TinderCard>
              </Box>
            ))
          ) : (
            <LoadingMoreShows />
          )}
        </Box>

        <Flex justifyContent="center" mt={6}>
          <ButtonGroup>
            <Button onClick={() => swipe('left')} disabled={isRemoving}>
              Swipe left!
            </Button>
            <Button onClick={() => swipe('right')} disabled={isRemoving}>
              Swipe right!
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TinderCards;

// TODO implement Loading More Shows
function LoadingMoreShows() {
  return <div>Loading more shows (NI)</div>;
}
