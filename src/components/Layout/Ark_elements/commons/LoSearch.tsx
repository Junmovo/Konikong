import Image from 'next/image';
import React from 'react';

interface ILoSearchProps {
  width: number;
  height: number;
}

const LoSearch = ({ width, height }: ILoSearchProps) => {
  return (
    // <div className="relative flex items-center ml-[4px]">
    //   <Image
    //     src={'/images/Lostark/Losearch.webp'}
    //     width={width}
    //     height={height}
    //     alt="Logo"
    //     className="object-contain"
    //   />
    // </div>
    <div className="font-GMarket_B text-[20px] justify-center items-center flex flex-col mt-1 hover:text-[#425ad5] transition">
      KoniKong
    </div>
  );
};

export default LoSearch;
