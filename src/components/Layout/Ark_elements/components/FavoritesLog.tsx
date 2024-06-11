import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import Link from 'next/link';
import React, { useState } from 'react';
import IconButton from '../../elements/IconButton';
import { CiStar } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import NoneContents from '../commons/NoneContents';
import { useMoveToPage } from '@/hooks/useMovedToPage';
import SearchValueCard from './SearchValueCard';

const FavoritesLog = () => {
  const { onClickMovetoPage } = useMoveToPage();
  const { favorites, addFavorites, removeFaovorites } = useLostArkSearchStore();
  const [like, setLike] = useState(false);
  const onClickRemove = (v: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    removeFaovorites(v);
  };
  const onClickFavorite = (v: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setLike(!like);
    addFavorites(v);
  };

  return (
    <div>
      <div className="rounded-lg bg-white overflow-hidden shadow-lg">
        <ul>
          {favorites.length ? (
            favorites.map((value, idx) => (
              <SearchValueCard
                value={value}
                key={idx}
                onClickAddFavorite={onClickFavorite}
                onClickRemove={onClickRemove}
              />
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
