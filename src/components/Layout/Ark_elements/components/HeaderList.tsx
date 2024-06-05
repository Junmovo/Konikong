'use client';
import Link from 'next/link';
import React from 'react';
import { IHeaderMenu } from '@/types/Ark';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { IoSunnySharp } from 'react-icons/io5';
import IconButton from '../../elements/IconButton';
import SearchBar from '../commons/SearchBar';

const HeaderMenu: IHeaderMenu[] = [
  { label: '홈', link: '/LostArk' },
  { label: '공지사항', link: '/LostArk/notice' },
  { label: '전투정보실', link: '/LostArk/rank' },
  { label: '임시테스트', link: '/LostArk/unknown' },
];

const HeaderList = () => {
  const pathname = usePathname();
  const mainPath = pathname === '/LostArk';
  return (
    <div className="flex justify-between items-center w-full">
      <ul className="flex gap-4 ">
        {HeaderMenu.map((menu, idx) => (
          <li key={idx} className="relative">
            <Link
              href={menu.link}
              className={cn(
                'font-semibold text-[#9c9d9e] hover:text-[#425ad5]  transition px-[15px] py-[10px] hover:bg-slate-100 rounded-[5px]',
                menu.link === pathname ? 'text-[#425ad5] bg-slate-100' : ''
              )}
            >
              {menu.label}
            </Link>
            {/* <div className="absolute b-0 border h-[1px]"></div> */}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <SearchBar header={true} main={mainPath} />
        <IconButton icon={<IoSunnySharp size={20} />} />
      </div>
    </div>
  );
};

export default HeaderList;
