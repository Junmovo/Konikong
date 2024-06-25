import React from 'react';
import SearchBar from '../commons/SearchBar';
import ArkPadding from '../ArkPadding';
import Image from 'next/image';

const TopBanner = () => {
  return (
    <div className="h-[350px] relative flex justify-center items-center">
      <div className="h-[450px] absolute w-full top-[0px]">
        <Image src={'/images/Lostark/background2.png'} fill alt="로스트아크 배경" />
      </div>
      <section className="flex flex-col items-center justify-center z-10 absolute bottom-[50px]">
        <h1 className="text-white text-[36px] font-bold mb-[20px]">쉽고, 간편한 로스트아크 전적검색</h1>
        <SearchBar header={false} />
      </section>
    </div>
  );
};

export default TopBanner;
