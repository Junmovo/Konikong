import { useMoveToPage } from '@/hooks/useMovedToPage';
import { ISearchLogValueProps } from '@/types/Ark';
import React from 'react';
import IconButton from '../../elements/IconButton';
import { CiStar } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import useLostArkSearchStore from '@/stores/useLostArkSearchStore';

const SearchValueCard: React.FC<ISearchLogValueProps> = ({
  value: { name, class: charClass, level, server },
  onClickAddFavorite,
  onClickRemove,
}) => {
  const { onClickMovetoPage } = useMoveToPage();
  const { favorites, searchValue } = useLostArkSearchStore();
  const isFavorite = favorites.some((el) => el.name === name);
  return (
    <li className=" border-neutral-300 border-b-[1px] dark:border-b-gray-600  last:border-none first:border-t-none hover:bg-gray-50 dark:hover:bg-[#2525259d]">
      <div
        onClick={onClickMovetoPage(`/LostArk/character/${name}`)}
        className="flex items-center justify-between p-2 px-[20px] w-full cursor-pointer rounded-lg"
      >
        <div className="">
          <div className="font-semibold">
            {name}
            <span className="text-[13px] ml-[5px] text-gray-500">{charClass}</span>
          </div>
          <div>
            {level}
            <span className="text-[13px] ml-[4px] text-gray-500">{server}</span>
          </div>
        </div>
        <div className="flex">
          <IconButton
            icon={isFavorite ? <FaStar color="#425ad5" /> : <CiStar />}
            onClickIcon={onClickAddFavorite(name)}
          />
          <IconButton icon={<IoMdClose color="#9c9d9e" />} onClickIcon={onClickRemove(name)} />
        </div>
      </div>
    </li>
  );
};

export default SearchValueCard;
