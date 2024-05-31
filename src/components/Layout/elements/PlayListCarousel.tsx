'use client';
import React, { useEffect } from 'react';
import { IPlaylist } from '@/types/Music';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import PlayListCard from './PlayListCard';

interface IPlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray?: IPlaylist[];
}

const PlayListCarousel: React.FC<IPlayListCarouselProps> = ({ title, subTitle, Thumbnail, playlistArray }) => {
  return (
    <div className="w-full mt-10">
      <Carousel className="w-full">
        <div className="flex flex-row justify-between">
          <article className="flex flex-row gap-3 items-center">
            {Thumbnail && ''}
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
        <CarouselContent className="-ml-1 w-full ">
          {playlistArray?.map((el, index) => (
            <CarouselItem key={index} className="gap-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
              <PlayListCard playlist={el} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
