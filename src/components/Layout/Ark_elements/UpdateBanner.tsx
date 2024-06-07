import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
const UpdateBanner = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div>
            <Link href={'https://lostark.game.onstove.com/Promotion/Update/240131/Echidna'} target="_blank">
              <Image src={'/images/1.png'} width={1080} height={300} alt="에키드나" className="object-cover " />
            </Link>
          </div>
        </CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>2</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default UpdateBanner;
