'use client';
import { ICharacterWeapon, ISearchParams } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import instance from '../../service/service';
import cunkArray from '@/lib/utils';
import ItemSection from '@/components/Layout/Ark_elements/components/Character/ItemSection';
import ItemSection2 from '@/components/Layout/Ark_elements/components/Character/ItemSection2';
import ItemSection3 from '@/components/Layout/Ark_elements/components/Character/ItemSection3';
import ItemSectionUnder from '@/components/Layout/Ark_elements/components/Character/ItemSectionUnder';
import ArkWhiteBox from '@/components/Layout/Ark_elements/ArkWhiteBox';
import SkeletonWeapon from '@/components/Layout/Ark_elements/components/Character/SkeletonWeapon';
import { useCharacterWeapon } from '@/stores/useQueryLostarkStore';
import NoneContents from '@/components/Layout/Ark_elements/commons/NoneContents';

const CharacterPages = ({ params }: { params: ISearchParams }) => {
  const decodedId = decodeURIComponent(params.Id);
  const { data: CharacterWeapon, isLoading, refetch } = useCharacterWeapon(decodedId);

  if (isLoading) {
    return <SkeletonWeapon />;
  }
  if (!CharacterWeapon) {
    return <NoneContents contents="장기 미사용 캐릭터입니다." />;
  }
  const newWeapon = [...CharacterWeapon];
  const WeaponValue = cunkArray(newWeapon, 6);
  const items = WeaponValue[0].splice(5, 1)[0];
  WeaponValue[0].splice(2, 0, items);
  const WeaponArray = WeaponValue[0].shift();
  WeaponValue[0].push(WeaponArray);

  return (
    <ArkWhiteBox>
      {isLoading ? (
        <SkeletonWeapon></SkeletonWeapon>
      ) : (
        <>
          <div className="grid grid-cols-2  border-b-[1px]">
            <div className="">
              {WeaponValue[0]?.map((items, idx) => (
                <ItemSection items={items} key={idx} />
              ))}
            </div>
            <div className="">
              {WeaponValue[1]?.map((items, idx) => (
                <ItemSection2 items={items} key={idx} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 w-full pt-[10px]">
            <div className="">
              {WeaponValue[2]?.map((items, idx) => {
                if (idx === 0) {
                  return <ItemSection3 items={items} key={idx} />;
                }
              })}
            </div>
            <ItemSectionUnder items={WeaponValue[0][0]} />
          </div>
        </>
      )}
    </ArkWhiteBox>
  );
};

export default CharacterPages;
