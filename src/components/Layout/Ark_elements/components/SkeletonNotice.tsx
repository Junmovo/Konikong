'use client';
import React from 'react';

import { CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import ArkWhiteBox from '../ArkWhiteBox';
import ArkPadding from '../ArkPadding';
const filterList = ['전체', '공지', '이벤트', '점검', '상점'];

const SkeletonNotice = () => {
  return (
    <ArkPadding>
      <div className="p-10">
        <div className="text-[36px] font-bold mb-[35px]">공지사항</div>
        <div className="pb-[20px] border-b-[2px] border-neutral-500">
          <ul className="flex gap-2">
            {filterList.map((tag, idx) => (
              <li
                key={idx}
                className="px-[15px] py-[8px] w-[] text-[14px] rounded-full cursor-pointer hover:bg-gray-100 border dark:hover:bg-[#2525259d]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {new Array(10).fill(1).map((_, i) => (
              <div key={i} className="flex gap-4 h-[55px] p-[15px]">
                <Skeleton className="flex w-[70px] justify-center" />
                <div className="flex w-[80%] items-center">
                  <Skeleton className="w-[50%] h-[25px]" />
                </div>
                <Skeleton className="flex w-[10%] justify-center items-center text-[#9c9d9e] text-[14px]" />
              </div>
            ))}
          </ul>
        </div>
        <div className=" w-full items-center justify-center flex mt-10">
          <ul className="flex gap-1 items-center"></ul>
        </div>
      </div>
    </ArkPadding>
  );
};

export default SkeletonNotice;
