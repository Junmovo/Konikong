'use client';
import { ICharterInfo, ICharterProfiles, ISearchParams } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImgClass, cn } from '@/lib/utils';
import ArkWhiteBox from '../../ArkWhiteBox';

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
    <ArkWhiteBox>
      {sortedResult.map(([serverName, characters]) => (
        <>
          <div key={serverName} className="flex items-center justify-between mb-3">
            <h1 className="font-semibold text-[24px]  ">{serverName}</h1>
            <span>{characters.length} 캐릭터</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {characters
              .sort((a, b) => Number(b.ItemAvgLevel.replace(/,/g, '')) - Number(a.ItemAvgLevel.replace(/,/g, '')))
              .map((el) => (
                <Link href={`/character/${el.CharacterName}`} key={el.CharacterName}>
                  <div
                    className={cn(
                      'border rounded-lg p-5 text-center hover:shadow-[0_2px_30px_0_rgba(0,0,0,.06)] transition',
                      decodedId === el.CharacterName ? ' bg-gray-50 dark:bg-[#121212]' : ''
                    )}
                  >
                    <div className="flex items-center w-full justify-center mb-[5px]">
                      <Image
                        src={ImgClass(el.CharacterClassName)}
                        width={40}
                        height={40}
                        alt="mark"
                        className="dark:brightness-1 dark:invert"
                      />
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
    </ArkWhiteBox>
  );
};

export default OthersPage;
