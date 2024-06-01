'use client';
import React, { useEffect } from 'react';
import { TopSong } from '@/types/Music';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import cunkArray from '@/lib/utils';
import SongCard from '@/app/(myProject)/YT_Music/explore/components/SongCard';
import GenericCard from '@/app/(myProject)/YT_Music/explore/components/GenerCard';

interface IGenreListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  GeneList: string[];
}

const GenericColum = ({ GeneList = [] }: { GeneList: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {GeneList.map((el) => {
        return <GenericCard key={el} generic={el} />;
      })}
    </div>
  );
};

const GenreListCarousel: React.FC<IGenreListCarouselProps> = ({ title, subTitle, Thumbnail, GeneList }) => {
  const GenericList = cunkArray(GeneList, 4);

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
          {GenericList?.map((el, index) => (
            <CarouselItem key={index} className=" xl:basis-1/5 sm:basis-1/2 lg:basis-1/3 ">
              <GenericColum GeneList={el} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;
