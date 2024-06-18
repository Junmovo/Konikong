import { ITendencies } from '@/types/Ark';
import React from 'react';

interface IStats {
  tenden: ITendencies;
}

const Character_tenden = ({ tenden }: IStats) => {
  return (
    <>
      <div className="flex justify-between p-1 px-2 text-[14px]">
        <div className="text-gray-500 ">{tenden.Type}</div>
        <div className="font-semibold">{tenden.Point}</div>
      </div>
    </>
  );
};

export default Character_tenden;
