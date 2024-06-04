import React from 'react';
import SearchBar from './commons/SearchBar';
import Link from 'next/link';
import { IHeaderMenu } from '@/types/Ark';
import { IoSunnySharp } from 'react-icons/io5';
import Image from 'next/image';
import IconButton from '../elements/IconButton';
const HeaderMenu: IHeaderMenu[] = [
  { label: '홈', link: '/LostArk' },
  { label: '공지사항', link: '/LostArk/notice' },
  { label: '전투정보실', link: '/LostArk/rank' },
  { label: '임시테스트', link: '/LostArk/unknown' },
];

const ArkHeader = () => {
  return (
    <header className="flex justify-center h-[64px] items-center border-b-[1px] w-full">
      <nav className="flex gap-4 justify-between w-[1080px] items-center h-full ">
        <Link href={'/LostArk'} className="w-[100px]">
          <Image src={'/main-logo.svg'} width={100} height={62} alt="Logo" className="object-cover" />
        </Link>
        <div className="flex justify-between items-center w-full">
          <ul className="flex gap-4 ">
            {HeaderMenu.map((menu, idx) => (
              <li key={idx} className="relative">
                <Link
                  href={menu.link}
                  className="font-semibold text-[#9c9d9e] hover:text-[#425ad5]  transition px-[15px] py-[10px] hover:bg-slate-100 rounded-[5px]
                  "
                >
                  {menu.label}
                </Link>
                {/* <div className="absolute b-0 border h-[1px]"></div> */}
              </li>
            ))}
          </ul>
          <IconButton icon={<IoSunnySharp size={20} />} />
          {/* <SearchBar header={true} /> */}
        </div>
      </nav>
    </header>
  );
};

export default ArkHeader;
