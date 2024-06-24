import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IListCardProps {
  Title: string;
  SubTitle: string;
  ImageSrc: string;
  Page: string;
  Tag: string[];
}

const ListCard = ({ Title, SubTitle, ImageSrc, Page, Tag }: IListCardProps) => {
  return (
    <Link href={Page} className="group">
      <div className="flex w-full">
        <div className="w-full  mb-[30px]">
          <div className="relative w-[100%] h-[240px] overflow-hidden rounded-lg mb-[20px] group-hover:translate-y-[-3px] transition">
            <Image src={ImageSrc} fill alt="코니" />
          </div>

          <div className="p-[5px]">
            <h2 className="text-[24px] font-[700] mb-[10px]">{Title}</h2>
            <div className="text-gray-400 text-[14px]">{SubTitle}</div>
          </div>
          <div className="p-[5px] gap-2 flex text-[14px] mt-[20px]">
            {Tag.map((tag, i) => (
              <div key={i} className=" py-[5px] px-[15px] rounded-full border border-gray-400">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
