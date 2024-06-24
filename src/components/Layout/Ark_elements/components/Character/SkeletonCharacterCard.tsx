import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonCharacterCard = () => {
  return (
    <div className="min-w-[330px]">
      <div className="flex justify-between w-full">
        <div className="flex w-full flex-col items-center gap-1 bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)]  rounded-lg overflow-hidden dark:bg-[#2525259d]">
          {/* 프로필사진 */}

          {/* 내용 */}
          <div className="w-full relative p-[25px] ">
            <Skeleton className="h-[300px]"> </Skeleton>
            <div className="gap-1 flex  mt-2 flex-col">
              <Skeleton className="h-[20px] w-[50%]"></Skeleton>
              <Skeleton className="h-[20px] w-[80%]"></Skeleton>
              <div className="flex gap-2">
                <Skeleton className="h-[15px] w-[50px]"></Skeleton>
                <Skeleton className="h-[15px] w-[50px]"></Skeleton>
                <Skeleton className="h-[15px] w-[50px]"></Skeleton>
              </div>
            </div>

            {/* 하단 */}
            <div className="grid grid-cols-2 gap-3 mt-[15px] py-[15px] border-y-[1px]">
              <Skeleton className="w-full flex flex-col gap-1 h-5"></Skeleton>
              <Skeleton className="w-full flex flex-col gap-1 h-5"></Skeleton>
              <Skeleton className="w-full flex flex-col gap-1 h-5"></Skeleton>
              <Skeleton className="w-full flex flex-col gap-1 h-5"></Skeleton>
            </div>
            <div className="flex flex-col gap-3 py-[15px] ">
              <Skeleton className="w-full flex flex-col gap-1 h-5"></Skeleton>
              <Skeleton className="w-full flex flex-col gap-1 h-5"></Skeleton>
              <Skeleton className="w-full flex flex-col gap-1 h-5"></Skeleton>
              <div className="w-full flex flex-col gap-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCharacterCard;
