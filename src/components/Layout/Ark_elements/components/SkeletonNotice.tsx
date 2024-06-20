'use client';
import React from 'react';

import { CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import ArkWhiteBox from '../ArkWhiteBox';

const SkeletonNotice = () => {
  return (
    <div className="flex gap-4 h-[55px] p-[15px]">
      <Skeleton className="flex w-[70px] justify-center"></Skeleton>
      <div className="flex w-[80%] items-center">
        <Skeleton className=" w-[50%] h-[25px]"></Skeleton>
      </div>
      <Skeleton className="flex w-[10%] justify-center items-center text-[#9c9d9e] text-[14px]"></Skeleton>
    </div>
  );
};

export default SkeletonNotice;
