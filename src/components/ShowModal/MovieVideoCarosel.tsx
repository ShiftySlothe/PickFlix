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

  return (
    <TRPCQueryWrapper query={showVideoQuery}>
      <Carousel
        onClickItem={(index, item) => console.log(index, item)}
        width={'640px'}
      >
        {urls && urls.map((u, i) => <ReactPlayer url={u} key={i} controls />)}
      </Carousel>
    </TRPCQueryWrapper>
  );
}

export const youtubeAutoplayWithCustomThumbs = () => {
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
    <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
      <YoutubeSlide
        key="youtube-1"
        url="https://www.youtube.com/embed/AVn-Yjr7kDc"
      />
      <YoutubeSlide
        key="youtube-2"
        url="https://www.youtube.com/embed/mOdmi9SVeWY"
      />
      <YoutubeSlide
        key="youtube-3"
        url="https://www.youtube.com/embed/n0F6hSpxaFc"
      />
      <YoutubeSlide
        key="youtube-4"
        url="https://www.youtube.com/embed/0uGETVnkujA"
      />
    </Carousel>
  );
};

const YoutubeSlide = ({
  url,
  isSelected,
}: {
  url: string;
  isSelected?: boolean;
}) => <ReactPlayer width="100%" url={url} playing={isSelected} />;
