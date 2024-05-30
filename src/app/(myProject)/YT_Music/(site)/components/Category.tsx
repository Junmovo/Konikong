'use client';

import React from 'react';
import useUIState from '@/hooks/useUIState';
import { homeCategoryList } from '@/lib/dummyData';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';
import { IitemsType } from '@/types/Music';

const Category = () => {
  const { homecategory, setHeaderImageSrc, setHomeCategory } = useUIState();

  const onClickCategory = (items: IitemsType) => () => {
    // 눌렀을때 상태값을 빼주기 위함.
    if (homecategory === items.label) {
      setHomeCategory('');
      setHeaderImageSrc('');
    } else {
      // 아닐 시 dummydata안에 있는 값을 넣어준다.
      setHomeCategory(items.label);
      setHeaderImageSrc(items.src);
    }
  };
  return (
    <ul className="max-w-full overflow-x-auto flex gap-4 flex-row">
      {homeCategoryList.map((items) => {
        return (
          <li
            onClick={onClickCategory(items)}
            className={cn(
              'px-[15px] py-[7px] min-w-fit flex justify-center bg-[rgba(144,144,144,0.2)] rounded-[4px] cursor-pointer items-center hover:bg-[rgba(144,144,144,0.45)]',
              homecategory === items.label && 'bg-white text-black hover:bg-white'
            )}
            key={uuidv4()}
          >
            {items.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
