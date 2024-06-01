import PagePadding from '@/components/Layout/elements/PagePadding';
import React from 'react';
import Category from './components/Category';
import { dymmyGenreList, getAllPlaylist, getSongListTop10 } from '@/lib/dummyData';
import PlayListCarousel from '@/components/Layout/elements/PlayListCarousel';
import SongListCarousel from '@/components/Layout/elements/SongListCarousel';
import GenreListCarousel from '@/components/Layout/elements/GenreListCarousel';

const page = async () => {
  // const playlistArray = await getAllPlaylist();
  // const songListTop10 = await getSongListTop10();

  const [playlistArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()]);

  return (
    <PagePadding>
      <Category />
      <PlayListCarousel playlistArray={[...playlistArray]} Thumbnail={<div></div>} title="새 앨범 및 싱글" />
      <SongListCarousel title={'인기곡'} songListTop10={[...songListTop10]}></SongListCarousel>
      <GenreListCarousel title={'분위기 및 장르'} GeneList={dymmyGenreList} />
    </PagePadding>
  );
};

export default page;
