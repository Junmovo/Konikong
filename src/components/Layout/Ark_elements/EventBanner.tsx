'use client';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import instance from '@/app/(myProject)/LostArk/service/service';
import { IEventInfo } from '@/types/Ark';
import Link from 'next/link';

const EventBanner = () => {
  const [EvnetInfo, setEvnetInfo] = useState<IEventInfo[]>([]);

  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const getAPIData = async () => {
    const { data } = await instance.get('/news/events');
    setEvnetInfo(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  console.log(EvnetInfo);

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
        {EvnetInfo.map((el, index) => (
          <CarouselItem key={index} className="pl-3 md:basis-1/2 lg:basis-1/3">
            <Link href={el.Link} target="_blank">
              <div className="relative w-full h-[180px] rounded-[20px] overflow-hidden bg-black">
                <Image src={el.Thumbnail} fill alt={el.Title} />
              </div>
              <div className="">{el.Title}</div>
              <div className="">{el.StartDate}</div>
              <div className="">{el.EndDate}</div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default EventBanner;
