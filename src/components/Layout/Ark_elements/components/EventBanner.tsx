'use client';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { IEventInfo } from '@/types/Ark';
import EventList from './EventList';
import SkeletonEvent from './SkeletonEvent';
import instance from '@/app/service/service';

const EventBanner = () => {
  const [EventInfo, setEventInfo] = useState<IEventInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAPIData = async () => {
    const { data } = await instance.get('/news/events');
    setEventInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <Carousel
      className="w-full"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {isLoading
          ? new Array(5).fill(1).map((_, i) => {
              return <SkeletonEvent key={i} />;
            })
          : EventInfo.map((List, idx) => <EventList List={List} key={idx} />)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default EventBanner;
