import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { GroupProps } from '.';
import { TMDBMovie } from '../../../lib/types';
import { trpc } from '../../../server/utils/trpc';
import TRPCQueryWrapper from '../../Helpers/TRPC/useQueryWrapper';

export default function GroupLikes({ groupId }: GroupProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Tooltip label="Likes" placement="top">
        <IconButton
          aria-label="Group settings"
          icon={<AiOutlineLike />}
          onClick={onOpen}
          ref={btnRef}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Group likes</DrawerHeader>

          <DrawerBody>
            <LikesBody groupId={groupId} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function LikesBody({ groupId }: GroupProps) {
  const likesQuery = trpc.useQuery(['groupLikes.getLikes', { groupId }]);
  const likes = likesQuery.data;

  return (
    <TRPCQueryWrapper query={likesQuery}>
      {likes?.shows.map((m, i) => (
        <LikedShow movieId={m.id} key={i} />
      ))}
    </TRPCQueryWrapper>
  );
}

function LikedShow({ movieId }: { movieId: number }) {
  const movieQuery = trpc.useQuery(['movies.getMovieInfo', { movieId }]);
  const movieData = movieQuery.data;

  return (
    <TRPCQueryWrapper query={movieQuery}>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        border="2px"
        borderColor="grey"
        borderRadius="4px"
        boxShadow={'lg'}
        width={'100%'}
      >
        {movieData ? (
          <MovieInfo movieData={movieData} />
        ) : (
          <Text>Show data not available.</Text>
        )}
      </Flex>
    </TRPCQueryWrapper>
  );
}

function MovieInfo({ movieData }: { movieData: TMDBMovie }) {
  return (
    <>
      <Avatar name={movieData.title} m={3} />
      <Text m={1} isTruncated>
        {movieData.title}
      </Text>
    </>
  );
}
