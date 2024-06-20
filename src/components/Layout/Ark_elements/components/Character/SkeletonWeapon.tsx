import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonWeapon = () => {
  return (
    <>
      <div className="h-[706px] w-[full] bg-white grid grid-cols-2 mt-[5px] p-[20px] dark:bg-[#2525259d]">
        {new Array(10).fill(1).map((_, i) => {
          return (
            <div key={i} className="flex gap-2">
              <div className="rounded-sm w-[50px] h-[50px] relative bg-gray-100"></div>

              <div>
                <Skeleton className="h-4 w-[100px] mb-2"></Skeleton>

                <Skeleton className="h-4 w-[250px] mb-[5px]"></Skeleton>
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-[50px]"></Skeleton>
                  <Skeleton className="h-4 w-[50px]"></Skeleton>
                  <Skeleton className="h-4 w-[50px]"></Skeleton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SkeletonWeapon;
