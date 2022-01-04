import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { trpc } from '../../server/utils/trpc';
import ReactPlayer from 'react-player';
import TRPCQueryWrapper from '../Helpers/TRPC/useQueryWrapper';

export default function MovieVideoCarosel({ movieId }: { movieId: number }) {
  const showVideoQuery = trpc.useQuery([
    'movies.getMovieTrailerYoutubeUrls',
    { movieId },
  ]);

  const urls = showVideoQuery.data;

  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) =>
    url.substr('https://www.youtube.com/embed/'.length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} />;
    });

  return (
    <TRPCQueryWrapper query={showVideoQuery}>
      <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
        {urls?.map((u, i) => (
          <YoutubeSlide key={i} url={u} />
        ))}
      </Carousel>
    </TRPCQueryWrapper>
  );
}

const YoutubeSlide = ({
  url,
  isSelected,
}: {
  url: string;
  isSelected?: boolean;
}) => <ReactPlayer width="100%" url={url} playing={isSelected} />;
