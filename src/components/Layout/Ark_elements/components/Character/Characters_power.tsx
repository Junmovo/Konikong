'use client';
import instance from '@/app/(myProject)/LostArk/service/service';
import { ICharacterGems, ICharacterStats, ICharterProfiles, IGem } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import ArkWhiteBox from '../../ArkWhiteBox';
import Image from 'next/image';
import { colorGrade } from '@/lib/utils';
import InfoBedge from './InfoBedge';
import SkeletonGems from './SkeletonGems';
import Characters_Engravings from './Characters_Engravings';
import Character_stats from './Character_stats';
interface ICharactersPower {
  decodedId: string;
}
const Characters_power = ({ decodedId }: ICharactersPower) => {
  const [selectedTab, setSelectedTab] = useState<boolean>(false);
  const [CharacterPower, setCharacterPower] = useState<ICharterProfiles>();

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/armories/characters/${decodedId}/profiles`);
        setCharacterPower(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, [decodedId]);

  const index = CharacterPower?.Stats.slice(-2);
  console.log(index);

  return (
    <div className="grid grid-cols-2 gap-4">
      <ArkWhiteBox>
        <div className="font-bold text-[20px] mb-3">전투효과</div>

        <div className=" border-b-[1px] grid grid-cols-2 mb-2">
          {index?.map((el: ICharacterStats, idx: number) => (
            <Character_stats key={idx} Stats={el} top={true} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {CharacterPower?.Stats.slice(0, -2)
            .sort((a, b) => Number(b.Value) - Number(a.Value))
            .map((el: ICharacterStats, idx: number) => (
              <Character_stats key={idx} Stats={el} top={false} />
            ))}
        </div>
      </ArkWhiteBox>
      <ArkWhiteBox>
        <div>
          <Characters_Engravings decodedId={decodedId} />
        </div>
      </ArkWhiteBox>
    </div>
  );
};

export default Characters_power;
