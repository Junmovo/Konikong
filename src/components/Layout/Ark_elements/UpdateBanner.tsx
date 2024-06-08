import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { dummyUpdate } from '@/lib/dummyUpdateData';
import Autoplay from 'embla-carousel-autoplay';

const UpdateBanner = () => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {dummyUpdate.map((update, idx) => (
          <CarouselItem key={idx}>
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden group transition hover:translate-y-[-4px] duration-200  ">
              <Link href={update.UpdateLink} target="_blank">
                <Image
                  src={update.SubImage}
                  width={500}
                  height={337}
                  alt="subImg"
                  className="right-[50px] bottom-[-50px] z-10 absolute ease-in transition-all duration-300 group-hover:bottom-[-45px]"
                />
                <Image
                  src={`/images/Lostark/banner_${idx + 1}.png`}
                  fill
                  alt={update.Title}
                  className="object-cover "
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default UpdateBanner;
