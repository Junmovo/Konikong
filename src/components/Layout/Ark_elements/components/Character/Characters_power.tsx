'use client';
import { ICharacterGems, ICharacterStats, ICharterProfiles, IGem } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import ArkWhiteBox from '../../ArkWhiteBox';
import Characters_Engravings from './Characters_Engravings';
import Character_stats from './Character_stats';
import NoneContents from '../../commons/NoneContents';
import Character_tenden from './Character_tenden';
import instance from '@/app/service/service';
import { useCharacterCollect } from '@/stores/useQueryLostarkStore';
interface ICharactersPower {
  decodedId: string;
}
const Characters_power = ({ decodedId }: ICharactersPower) => {
  const [selectedTab, setSelectedTab] = useState<boolean>(false);
  const { Power: CharacterPower } = useCharacterCollect(decodedId);

  if (!CharacterPower?.Stats) return null;
  const index = CharacterPower?.Stats.slice(-2);

  return (
    <div className="grid grid-cols-2 gap-4">
      <ArkWhiteBox>
        <div className="font-bold text-[20px] mb-4">전투효과</div>

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
        <div className="grid grid-cols-2 gap-2 bg-slate-50 rounded-lg mt-2 p-2 dark:bg-[#121212]">
          {CharacterPower.Tendencies.map((tenden, idx) => (
            <Character_tenden tenden={tenden} key={idx} />
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
