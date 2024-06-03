'use client';
import React, { useEffect } from 'react';
import { TopSong } from '@/types/Music';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import cunkArray from '@/lib/utils';
import SongCard from './SongCard';

interface ISongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, idx) => {
        return <SongCard key={idx} song={song} />;
      })}
    </div>
  );
};

const SongListCarousel: React.FC<ISongListCarouselProps> = ({ title, subTitle, Thumbnail, songListTop10 }) => {
  const chunkedTop10SongList = cunkArray(songListTop10, 4) as TopSong[][];

  return (
    <div className="w-full mt-10">
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
        }}
      >
        <div className="flex flex-row justify-between mb-[12px]">
          <article className="flex flex-row gap-3 items-center">
            {Thumbnail ?? ''}
            <div>
              <div className="text-gray-400 mb-[5px]">{subTitle}</div>
              <div className="text-[45px] font-bold leading-[45px]">{title}</div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </div>
        <CarouselContent className=" w-full ">
          {chunkedTop10SongList?.map((el, index) => (
            <CarouselItem key={index} className="gap-4  lg:basis-1/3 sm:basis-1/2 ">
              <SongColumn songList={el} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
