'use client';
import React from 'react';

import { CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import ArkWhiteBox from '../ArkWhiteBox';

const SkeletonDungeon = () => {
  return (
    <ArkWhiteBox>
      <div className="flex gap-4">
        <Skeleton className="w-[90px] h-[90px] rounded-sm"></Skeleton>
        <div className="flex flex-col">
          <Skeleton className="mb-[5px] w-[180px]">
            <div className="h-6 "></div>
          </Skeleton>
          <Skeleton className="mb-[5px] w-[200px]">
            <div className="h-4 w-[200px]"></div>
          </Skeleton>
          <Skeleton className=" w-[200px]">
            <div className="h-4 w-[200px]"></div>
          </Skeleton>
          <div className="flex">
            <div className="text-gray-400 text-[14px] "></div>
          </div>
        </div>
      </div>
    </ArkWhiteBox>
  );
};

export default SkeletonDungeon;
