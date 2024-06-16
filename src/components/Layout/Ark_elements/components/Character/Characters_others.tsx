'use client';
import { ICharterInfo, ICharterProfiles, ISearchParams } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImgClass, cn } from '@/lib/utils';

interface IOthersPage {
  OtherCharacter?: ICharterInfo[];
  decodedId: string;
}

const OthersPage = ({ OtherCharacter, decodedId }: IOthersPage) => {
  const result = OtherCharacter?.reduce<Record<string, ICharterInfo[]>>((acc, curr) => {
    const { ServerName } = curr;
    if (acc[ServerName]) acc[ServerName].push(curr);
    else acc[ServerName] = [curr];
    return acc;
  }, {});
  const sortedResult = result ? Object.entries(result).sort((a, b) => b[1].length - a[1].length) : [];

  return (
    <div className="p-5 ">
      {sortedResult.map(([serverName, characters]) => (
        <>
          <div key={serverName} className="flex items-center justify-between mb-3">
            <h1 className="font-semibold text-[24px]  ">{serverName}</h1>
            <span>{characters.length} 캐릭터</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {characters
              .sort((a, b) => Number(b.ItemAvgLevel.replace(/,/g, '')) - Number(a.ItemAvgLevel.replace(/,/g, '')))
              .map((el, idx) => (
                <Link href={`/LostArk/character/${el.CharacterName}`} key={el.CharacterName}>
                  <div
                    className={cn(
                      'border rounded-lg p-5 text-center hover:shadow-[0_2px_30px_0_rgba(0,0,0,.06)] transition',
                      decodedId === el.CharacterName ? ' bg-gray-50' : ''
                    )}
                  >
                    <div className="flex items-center w-full justify-center mb-[5px]">
                      <Image src={ImgClass(el.CharacterClassName)} width={40} height={40} alt="mark" />
                    </div>
                    <div className="border-b-[1px] font-semibold text-center mb-[10px] pb-[5px]">
                      {el.CharacterName}
                    </div>
                    <div>{el.ItemMaxLevel}</div>
                    <div className="text-gray-400 text-[14px]">{el.CharacterClassName}</div>
                  </div>
                </Link>
              ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default OthersPage;
