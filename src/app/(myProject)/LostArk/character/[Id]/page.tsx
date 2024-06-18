'use client';
import { ICharacterWeapon, ISearchParams } from '@/types/Ark';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import instance from '../../service/service';
import cunkArray from '@/lib/utils';
import ItemSection from '@/components/Layout/Ark_elements/components/Character/ItemSection';
import ItemSection2 from '@/components/Layout/Ark_elements/components/Character/ItemSection2';
import NoneContents from '@/components/Layout/Ark_elements/commons/NoneContents';
import ItemSection3 from '@/components/Layout/Ark_elements/components/Character/ItemSection3';
import ItemSectionUnder from '@/components/Layout/Ark_elements/components/Character/ItemSectionUnder';
import ArkWhiteBox from '@/components/Layout/Ark_elements/ArkWhiteBox';

const CharacterPages = ({ params }: { params: ISearchParams }) => {
  const [CharacterWeapon, setCharacterWeapon] = useState<ICharacterWeapon[]>();
  const decodedId = decodeURIComponent(params.Id);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/armories/characters/${decodedId}/equipment`);
        setCharacterWeapon(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, [params.Id, decodedId]);
  if (!CharacterWeapon) {
    return <div></div>;
  }
  const newWeapon = [...CharacterWeapon];
  const WeaponValue = cunkArray(newWeapon, 6);
  const items = WeaponValue[0].splice(5, 1)[0];
  WeaponValue[0].splice(2, 0, items);
  const WeaponArray = WeaponValue[0].shift();
  WeaponValue[0].push(WeaponArray);

  return (
    <ArkWhiteBox>
      <div className="grid grid-cols-2  border-b-[1px] ">
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
    </ArkWhiteBox>
  );
};

export default CharacterPages;
