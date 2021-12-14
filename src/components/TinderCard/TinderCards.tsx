import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import React, { useMemo, useState, useEffect } from 'react';
import TinderCard, { API, Direction } from './react-tinder-card';
import { User } from '.prisma/client';
import { Avatar, AvatarGroup } from '@chakra-ui/avatar';
import { useActiveGroupsContext } from '../../page-components/Dashboard/Dashboard';
import { trpc } from '../../server/utils/trpc';
import TRPCQueryWrapper from '../Helpers/TRPC/useQueryWrapper';
import Image from 'next/image';
import { TMDBMovie, TMDBPosterSize } from '../../lib/types';
interface TinderCardsProps {
  movies: TMDBMovie[];
}

const TinderCards = ({ movies: m }: TinderCardsProps) => {
  const alreadyRemoved: TMDBMovie[] = [];
  const [movies, setMovies] = useState(m);
  const [lastDirection, setLastDirection] = useState('');
  const [isRemoving, setisRemoving] = useState(false);

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
  };

  const swipe = (dir: Direction) => {
    setisRemoving(true);
    const moviesLeft = movies?.filter((m) => !alreadyRemoved.includes(m));
    if (moviesLeft?.length) {
      const toBeRemoved = moviesLeft[moviesLeft.length - 1]; // Find the card object to be removed
      const index = m.map((m) => m).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current?.swipe(dir); // Swipe the card!
    }
  };

  return (
    <>
      <VStack>
        <CurrentGroup />
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
                    <CardDetails movie={movie} />
                  </TinderCard>
                </Box>
              ))}
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
      </VStack>
    </>
  );
};

export default TinderCards;

function CurrentGroup() {
  const activeGroup = useActiveGroupsContext();
  const groupMembersQuery = trpc.useQuery([
    'group.getGroupMembers',
    { groupId: activeGroup.id },
  ]);
  const { data } = groupMembersQuery;

  return (
    <TRPCQueryWrapper query={groupMembersQuery}>
      {data?.users && (
        <CurrentGroupAvatar users={data.users} groupName={activeGroup.name} />
      )}
    </TRPCQueryWrapper>
  );
}

interface CurrentGroupAvatarProps {
  users: User[];
  groupName: string;
}

function CurrentGroupAvatar({ users, groupName }: CurrentGroupAvatarProps) {
  return (
    <>
      <Heading size="md">Swiping in: </Heading>
      <AvatarGroup size="md" max={3}>
        {users.map((user, i) => (
          <Avatar name={user.name || ''} key={i} />
        ))}
      </AvatarGroup>
      <Text>{groupName}</Text>
    </>
  );
}
interface CardDetailsProps {
  movie: TMDBMovie;
}
function CardDetails({ movie }: CardDetailsProps) {
  return (
    <>
      <Flex
        position="relative"
        backgroundColor="white"
        backgroundSize="cover"
        backgroundPosition="50%"
        borderRadius="5px"
        width="80vw"
        maxW="256px"
        h="352px"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
      >
        <Image
          src={`${process.env.TMDB_IMAGE_URL}/${TMDBPosterSize.w300}${movie.poster_path}`}
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
