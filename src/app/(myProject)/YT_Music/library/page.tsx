import PagePadding from '@/components/Layout/elements/PagePadding';
import React from 'react';
import Category from './components/Category';
import PlayListCard from '@/components/Layout/elements/PlayListCard';
import { getRandomArrElements } from '@/lib/utils';
import { dummyPlaylistArray } from '@/lib/dummyData';

const page = () => {
  return (
    <PagePadding>
      <Category />
      <div className="mt-12"></div>
      <section className=" grid grid-cols-3 gap-6 md:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6">
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomArrElements(dummyPlaylistArray)} />
      </section>
    </PagePadding>
  );
};

export default page;
