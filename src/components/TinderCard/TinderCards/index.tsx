import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import React, { useEffect, useMemo, useState } from 'react';
import TinderCard, { API, Direction } from '../react-tinder-card';
import { TMDBMovie } from '../../../lib/types';
import CardDetails from './CardDetails';
import { trpc } from '../../../server/utils/trpc';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { useActiveGroupsContext } from '../../../page-components/Dashboard/Dashboard';
import ShowInfoModal from '../../ShowModal';
interface TinderCardsProps {
  movies: TMDBMovie[];
  refetch: () => void;
}

const TinderCards = ({ movies: m, refetch }: TinderCardsProps) => {
  const alreadyRemoved: TMDBMovie[] = [];
  const [movies, setMovies] = useState(m);
  const [lastDirection, setLastDirection] = useState('');
  const [isRemoving, setisRemoving] = useState(false);
  const likeMutation = trpc.useMutation('groupLikes.userLikesShow');
  const dislikeMutation = trpc.useMutation('groupLikes.userDislikesShow');
  const toast = useToast();
  const activeGroup = useActiveGroupsContext();

  // Create refs for each movie
  const childRefs = useMemo(() => {
    return Array(m.length)
      .fill(0)
      .map((i) => React.createRef<API>());
  }, [m]);

  const swiped = async (direction: Direction, movie: TMDBMovie) => {
    setLastDirection(direction);
    alreadyRemoved.push(movie);
    if (direction === 'down' || direction === 'up') {
      toast({
        title: 'Error',
        description: 'You can only swipe left or right!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else if (direction === 'left') {
      dislikeMutation.mutate({ showId: movie.id, groupId: activeGroup.id });
    } else if (direction === 'right') {
      const match = await likeMutation.mutateAsync({
        showId: movie.id,
        groupId: activeGroup.id,
      });

      if (match) {
        toast({
          title: 'Match',
          description: "It's a match!",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    }
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
    <Box w="100%" h="60vh">
      <Flex flexDir="column" w="100%" h="100%" overflow="hidden">
        <Flex
          h="80%"
          alignItems="center"
          justifyContent="center"
          position="static"
        >
          {movies.length > 0 ? (
            movies?.map((movie, index) => (
              <>
                <Box key={movie.id} position="absolute">
                  <TinderCard
                    ref={childRefs[index]}
                    onSwipe={(dir) => swiped(dir, movie)}
                    onCardLeftScreen={() => outOfFrame(movie)}
                  >
                    <CardDetails movie={movie} />
                  </TinderCard>
                </Box>
              </>
            ))
          ) : (
            <LoadingMoreShows refetch={refetch} />
          )}
        </Flex>

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
function LoadingMoreShows({ refetch }: { refetch: () => void }) {
  useEffect(() => {
    refetch();
  });
  return <div>Loading more shows</div>;
}
