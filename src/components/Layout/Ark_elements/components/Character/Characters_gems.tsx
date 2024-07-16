'use client';
import { ICharacterGems, IGem } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import ArkWhiteBox from '../../ArkWhiteBox';
import Image from 'next/image';
import { colorGrade } from '@/lib/utils';
import InfoBedge from './InfoBedge';
import Characters_gemsCard from './Characters_gemsCard';
import SkeletonGems from './SkeletonGems';
import { useCharacterCollect } from '@/stores/useQueryLostarkStore';
interface ICharactersGems {
  decodedId: string;
}
const Characters_gems = ({ decodedId }: ICharactersGems) => {
  const [selectedTab, setSelectedTab] = useState<boolean>(false);
  const { Gems: CharacterGems } = useCharacterCollect(decodedId);

  const onClickMore = () => {
    setSelectedTab((prev) => !prev);
  };
  CharacterGems?.Gems?.sort((a, b) => {
    const getOrder = (name: string) => {
      if (name.includes('멸화')) return 1;
      if (name.includes('겁화')) return 1;
      if (name.includes('홍염')) return 2;
      if (name.includes('작열')) return 2;
      return 3;
    };

    const orderA = getOrder(a.Name);
    const orderB = getOrder(b.Name);

    if (orderA === orderB) {
      return b.Level - a.Level;
    }
    return orderA - orderB;
  });

  let mul: IGem[] = [];
  let hong: IGem[] = [];
  CharacterGems?.Gems?.map((el) => {
    if (el.Name.includes('멸화') || el.Name.includes('겁화')) {
      return mul.push(el);
    } else {
      return hong.push(el);
    }
  });
  if (CharacterGems === null) return null;

  return (
    <ArkWhiteBox>
      <div className="flex justify-between mb-4">
        <div className="flex  items-center">
          <div className="font-bold text-[20px]">보석</div>
          <div className="ml-[5px]">
            <InfoBedge contents={`${mul.length}멸 ${hong.length}홍`} grade="level" />
          </div>
        </div>
        <span
          className="bg-gray-100 px-[10px] cursor-pointer items-center rounded-sm text-[12px] flex dark:bg-gray-900"
          onClick={onClickMore}
        >
          {CharacterGems && selectedTab ? '닫기' : '더보기'}
        </span>
      </div>
      {CharacterGems?.Gems === undefined || null ? (
        <div className="flex justify-between">
          {Array.from({ length: 11 }, (_, idx) => (
            <SkeletonGems key={idx} />
          ))}
        </div>
      ) : selectedTab ? (
        <>
          {mul?.map((gems, idx) => (
            <Characters_gemsCard items={gems} key={idx} moreView={true} />
          ))}
          {hong?.map((gems, idx) => (
            <Characters_gemsCard items={gems} key={idx} moreView={true} />
          ))}
        </>
      ) : (
        <>
          <div className="flex justify-between">
            {mul?.map((gems, idx) => (
              <Characters_gemsCard items={gems} key={idx} moreView={false} />
            ))}
            {hong?.map((gems, idx) => (
              <Characters_gemsCard items={gems} key={idx} moreView={false} />
            ))}
          </div>
          <div className="grid grid-cols-11">
            {mul.length === 0 ? null : (
              <div
                className={`col-span-${mul.length} justify-center font-semibold flex items-center px-2 gap-x-2  `}
                style={{ gridColumn: `span ${mul.length} / span ${mul.length}` }}
              >
                <div className="grow h-2 mb-[6px] border-l-2 border-b-2 border-basicGrey dark:border-placeholder dark:border-gray-500"></div>
                멸화 {mul.length}
                <div
                  className="grow h-2 mb-[6px] border-b-2 border-r-2 border-basicGrey dark:border-placeholder dark:border-gray-500"
                  style={{ gridColumn: `span ${mul.length} / span ${mul.length}` }}
                ></div>
              </div>
            )}

            {hong.length === 0 ? null : (
              <div
                className={` justify-center font-semibold flex items-center px-2 gap-x-2`}
                style={{ gridColumn: `span ${hong.length} / span ${hong.length}` }}
              >
                <div className="grow h-2 mb-[6px] border-l-2 border-b-2 border-basicGrey dark:border-placeholder dark:border-gray-500"></div>
                홍염 {hong.length}
                <div
                  className="grow h-2 mb-[6px] border-b-2 border-r-2 border-basicGrey dark:border-placeholder dark:border-gray-500"
                  style={{ gridColumn: `span ${hong.length} / span ${hong.length}` }}
                ></div>
              </div>
            )}
          </div>
        </>
      )}
    </ArkWhiteBox>
  );
};

export default Characters_gems;
