'use client';
import React from 'react';

import { CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonEvent = () => {
  return (
    <CarouselItem className="pl-3 md:basis-1/2 lg:basis-1/4 group">
      <Skeleton className="relative w-full h-[150px] rounded-[20px] overflow-hidden bg "></Skeleton>
      <div className="ml-[10px] mt-[10px]">
        <Skeleton className="h-4 w-[250px] mb-3"></Skeleton>
        <Skeleton className="flex text-[14px]">
          <div className="h-4 w-[250px]"></div>
          <div className="h-4 w-[250px]"></div>
        </Skeleton>
      </div>
    </CarouselItem>
  );
};

export default SkeletonEvent;
