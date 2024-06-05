import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderList from './components/HeaderList';

const ArkHeader = () => {
  return (
    <header className="flex justify-center h-[64px] items-center border-b-[1px] w-full">
      <nav className="flex gap-4 justify-between w-[1080px] items-center h-full ">
        <Link href={'/LostArk'} className="w-[100px]">
          <Image src={'/main-logo.svg'} width={100} height={62} alt="Logo" className="object-cover" />
        </Link>
        <HeaderList />
      </nav>
    </header>
  );
};

export default ArkHeader;
