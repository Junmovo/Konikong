import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonMenu = () => {
  return (
    <div className="w-full p-[20px] bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)] rounded-lg dark:bg-[#2525259d]">
      <ul className="flex gap-2">
        <Skeleton className="w-[100px] h-[20px]"></Skeleton>
        <Skeleton className="w-[100px] h-[20px]"></Skeleton>
        <Skeleton className="w-[100px] h-[20px]"></Skeleton>
      </ul>
    </div>
  );
};

export default SkeletonMenu;
