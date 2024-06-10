import React from 'react';
import Logo from '../../elements/Logo';
import SearchBar from '../commons/SearchBar';
import ArkPadding from '../ArkPadding';
import Image from 'next/image';

const TopBanner = () => {
  return (
    <div className="h-[350px] relative">
      <section className="flex flex-col h-[450px] items-center justify-center bg-[url('/images/Lostark/background2.png')]">
        <h1 className="text-white text-[36px] font-bold mb-[20px]">쉽고, 간편한 로스트아크 전적검색</h1>
        <SearchBar header={false} />
      </section>
    </div>
  );
};

export default TopBanner;
