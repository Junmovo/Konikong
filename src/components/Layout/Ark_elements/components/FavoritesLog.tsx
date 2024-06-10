import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import Link from 'next/link';
import React from 'react';
import IconButton from '../../elements/IconButton';
import { CiStar } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import NoneContents from '../commons/NoneContents';
import { useMoveToPage } from '@/hooks/useMovedToPage';

const FavoritesLog = () => {
  const { onClickMovetoPage } = useMoveToPage();
  const { favorites, addFavorites } = useLostArkSearchStore();
  // const onClickRemove = (v: string) => (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation();
  //   addFavorites(v);
  // };

  return (
    <div>
      <div className="bg-white overflow-hidden rounded-lg">
        <ul>
          {favorites.length ? (
            favorites.map((value, idx) => (
              <li
                key={idx}
                className=" border-neutral-300 border-b-[1px]  last:border-none first:border-t-none hover:bg-gray-50"
              >
                <div
                  onClick={onClickMovetoPage(`/LostArk/character/${value}`)}
                  className="flex items-center justify-between p-2 px-[20px] w-full cursor-pointer"
                >
                  <div key={idx} className="">
                    {value}
                  </div>
                  <div className="flex">
                    <IconButton icon={<CiStar />} />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <NoneContents contents={'즐겨찾기된 캐릭터가 없습니다.'} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesLog;
