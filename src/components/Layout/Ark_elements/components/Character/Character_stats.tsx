import { ICharacterStats } from '@/types/Ark';
import React from 'react';

interface IStats {
  Stats: ICharacterStats;
  top: boolean;
}

const Character_stats = ({ Stats, top }: IStats) => {
  return (
    <>
      {top ? (
        <div className="flex flex-col  items-center justify-between p-2">
          <div className="text-[14px] text-gray-500">{Stats.Type}</div>
          <div className="font-semibold">{Stats.Value}</div>
        </div>
      ) : (
        <div className="flex justify-between p-2">
          <div className="text-gray-500">{Stats.Type}</div>
          <div className="font-semibold">{Stats.Value}</div>
        </div>
      )}
    </>
  );
};

export default Character_stats;
