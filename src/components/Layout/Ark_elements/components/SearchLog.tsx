import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import Link from 'next/link';
import React from 'react';
import IconButton from '../../elements/IconButton';
import { CiStar } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import NoneContents from '../commons/NoneContents';
import { useMoveToPage } from '@/hooks/useMovedToPage';
const SearchLog = () => {
  const { onClickMovetoPage } = useMoveToPage();
  const { searchValue, removeSearchValue, addFavorites } = useLostArkSearchStore();
  const onClickAddFavorite = (v: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addFavorites(v);
  };
  const onClickRemove = (v: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    removeSearchValue(v);
  };

  return (
    <div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <ul className="">
          {searchValue.length ? (
            searchValue.map((value, idx) => (
              <li
                key={idx}
                className=" border-neutral-300 border-b-[1px]  last:border-none first:border-t-none hover:bg-gray-50"
              >
                <div
                  onClick={onClickMovetoPage(`/LostArk/character/${value}`)}
                  className="flex items-center justify-between p-2 px-[20px] w-full cursor-pointer rounded-lg"
                >
                  <div key={idx} className="">
                    {value}
                  </div>
                  <div className="flex">
                    <IconButton icon={<CiStar />} onClickIcon={onClickAddFavorite(value)} />
                    <IconButton icon={<IoMdClose />} onClickIcon={onClickRemove(value)} />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <NoneContents contents={'최근에 검색한 캐릭터가 없습니다.'} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchLog;
