'use client';
import { ICharterInfo, ICharterProfiles, ISearchParams } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IOthersPage {
  OtherCharacter?: ICharterInfo[];
}

const OthersPage = ({ OtherCharacter }: IOthersPage) => {
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
          <div key={serverName}>
            <h1 className="font-semibold text-[24px]">
              {serverName} {characters.length}
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {characters
              .sort((a, b) => b.CharacterLevel - a.CharacterLevel)
              .map((el, idx) => (
                <Link href={`/LostArk/character/${el.CharacterName}`} key={el.CharacterName}>
                  <div className="border rounded-sm p-5">
                    <Image src={'/images/Lostark/Class/war.png'} width={50} height={50} alt="z" />
                    <div className="border-b-[1px]">{el.CharacterName}</div>
                    <div>{el.ItemMaxLevel}</div>
                    <div>{el.CharacterClassName}</div>
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
