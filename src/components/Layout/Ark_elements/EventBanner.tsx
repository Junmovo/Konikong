'use client';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import instance from '@/app/(myProject)/LostArk/service/service';
import { IEventInfo } from '@/types/Ark';
import EventList from './components/EventList';

const EventBanner = () => {
  const [EventInfo, setEventInfo] = useState<IEventInfo[]>([]);

  const getAPIData = async () => {
    const { data } = await instance.get('/news/events');
    setEventInfo(data);
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
        {EventInfo.map((List, idx) => (
          <EventList List={List} key={idx} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default EventBanner;
