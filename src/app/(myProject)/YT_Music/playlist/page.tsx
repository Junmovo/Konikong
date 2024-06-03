import HeaderBgChanger from '@/components/Layout/elements/HeaderBgChanger';
import PagePadding from '@/components/Layout/elements/PagePadding';
import PlayListHead from '@/components/Layout/elements/PlaylistHead';
import SongCardrowExpend from '@/components/Layout/elements/SongCardrowExpend';
import { getPlaylistById } from '@/lib/dummyData';
import { getRandomArrElements } from '@/lib/utils';
import { permanentRedirect } from 'next/navigation';
import React from 'react';

interface IplayListPageProps {
  searchParams: {
    list: string;
  };
}

const page = async (props: IplayListPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));
  if (!playlist) permanentRedirect('/');
  const Imagesrc = getRandomArrElements(playlist.songList)?.imageSrc;
  return (
    <PagePadding>
      <HeaderBgChanger Imagesrc={Imagesrc} />
      <PlayListHead playlist={playlist} />
      <section className="flex flex-col">
        {playlist.songList.map((song, idx) => {
          return <SongCardrowExpend key={idx} song={song} />;
        })}
      </section>
    </PagePadding>
  );
};

export default page;
