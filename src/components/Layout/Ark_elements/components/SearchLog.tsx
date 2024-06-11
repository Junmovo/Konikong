import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import Link from 'next/link';
import React, { useState } from 'react';
import NoneContents from '../commons/NoneContents';
import { ISearchLogValue } from '@/types/Ark';
import SearchValueCard from './SearchValueCard';
import { result } from 'lodash';

const SearchLog = () => {
  const [isFavoites, setIsFavorites] = useState<boolean>(false);
  const { favorites, searchValue, removeSearchValue, addFavorites } = useLostArkSearchStore();

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
              <SearchValueCard
                value={value}
                key={idx}
                onClickAddFavorite={onClickAddFavorite}
                onClickRemove={onClickRemove}
              />
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
