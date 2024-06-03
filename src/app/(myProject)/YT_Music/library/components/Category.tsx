'use client';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { AiFillCaretDown } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';

type Checked = DropdownMenuCheckboxItemProps['checked'];

const Category = () => {
  const libraryCategory = ['재생목록', '팟캐스트', '노래', '앨범', '아티스트'];

  return (
    <div className="flex flex-row justify-between items-center gap-4 flex-wrap mt-9">
      <ul className="max-w-full overflow-x-auto flex gap-4 flex-row">
        {libraryCategory.map((items) => {
          return (
            <li
              className={
                'px-[15px] py-[7px] min-w-fit flex justify-center bg-[rgba(144,144,144,0.2)] rounded-[4px] cursor-pointer items-center hover:bg-[rgba(144,144,144,0.45)]'
              }
              key={uuidv4()}
            >
              {items}
            </li>
          );
        })}
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-[162px] h-[42px] flex flex-row justify-between items-center bg-neutral-800 px-5 rounded-full">
              <div>최근활동 </div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px] bg-neutral-800">
            <DropdownMenuLabel className="p-4 ">정렬기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem className="p-4 hover:bg-neutral-600">
              <span className="min-w-[40px]">
                <FiCheck size={24} />
              </span>
              최근 활동
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px]"></span>
              최근에 저장됨
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px]"></span>
              최근 재생한 음악
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Category;
