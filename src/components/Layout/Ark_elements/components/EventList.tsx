'use client';
import { IEventInfo } from '@/types/Ark';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CarouselItem } from '@/components/ui/carousel';
interface EventListProps {
  List: IEventInfo;
}

const EventList = ({ List }: EventListProps) => {
  const { Title, StartDate, EndDate, Link: Target, Thumbnail } = List;
  const [S_Date, S_Time] = StartDate.split('T');
  const [E_date, E_Time] = EndDate.split('T');

  return (
    <CarouselItem className="pl-3  md:basis-1/2 lg:basis-1/3 group">
      <Link href={Target} target="_blank">
        <div className="relative w-full h-[180px] rounded-[20px] overflow-hidden ">
          <Image src={Thumbnail} fill alt={Title} className="group-hover:scale-105 transition" />
        </div>
        <div className="ml-[10px] mt-[10px]">
          <div className="text-[16px] mb-[3px] font-semibold text-[#555]">{Title}</div>
          <div className="flex text-[14px]">
            <div className="text-[#9c9d9e]">{S_Date} ~</div>
            <div className="text-[#9c9d9e]">{E_date}</div>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
};
export default EventList;
