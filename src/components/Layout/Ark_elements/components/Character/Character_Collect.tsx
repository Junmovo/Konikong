import React, { useEffect, useState } from 'react';
import { ICharacterCollect } from '@/types/Ark';
import ArkWhiteBox from '../../ArkWhiteBox';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import InfoBedge from './InfoBedge';
import { FaCheck } from 'react-icons/fa6';
import instance from '@/app/service/service';
import { useCharacterCollect } from '@/stores/useQueryLostarkStore';

interface ICharacterCollectProps {
  decodedId: string;
}

const Character_Collect = ({ decodedId }: ICharacterCollectProps) => {
  const [SelectedTab, setSelectedTab] = useState<boolean>(true);
  const [SelectedValue, setSelectedValue] = useState<string>('모코코 씨앗');
  const { Collect: CharacterCollect } = useCharacterCollect(decodedId);

  const ImageVariants: Record<string, string> = {
    '모코코 씨앗': 'bg-[-234px_-94px]',
    '섬의 마음': 'bg-[-234px_-24px]',
    '위대한 미술품': 'bg-[-183px_-173px]',
    '거인의 심장': 'bg-[-205px_-173px]',
    '이그네아의 징표': 'bg-[-234px_0px]',
    '항해 모험물': 'bg-[-234px_-117px]',
    '세계수의 잎': 'bg-[-234px_-48px]',
    '오르페우스의 별': 'bg-[-234px_-70px]',
    '기억의 오르골': 'bg-[0px_-216px]',
  };

  const onClickSelected = (v: string) => () => {
    setSelectedValue(v);
    setSelectedTab(true);
  };

  return (
    <div>
      <ArkWhiteBox>
        <div className=" grid grid-cols-3 gap-4 ">
          {CharacterCollect?.map((el, idx) => (
            <div
              key={idx}
              className={cn(
                'p-4 rounded-lg border border-slate-50 flex justify-between cursor-pointer items-center bg-slate-50 dark:bg-[#121212] dark:border-[#121212]',
                el.Type === SelectedValue ? 'border-[#a8b4f3] dark:border-white' : ''
              )}
              onClick={onClickSelected(el.Type)}
            >
              <div className="flex items-center">
                <div
                  className={`relative w-[20px] h-[20px] overflow-hidden bg-[url('https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/sprite/sprite_profile.png')] bg-no-repeat ${
                    ImageVariants[el.Type]
                  } mr-4`}
                ></div>
                <div>
                  <div className="font-semibold">{el.Type}</div>
                  <div className="text-[14px] text-gray-500">
                    {el.Point} / {el.MaxPoint}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ArkWhiteBox>
      <ArkWhiteBox>
        {SelectedTab && (
          <div className="grid grid-cols-2  gap-2">
            {CharacterCollect?.find((el) => el.Type === SelectedValue)?.CollectiblePoints.map((items, index) => (
              <div key={index} className="flex items-center justify-between p-2">
                <div>
                  <div>{items.PointName}</div>
                </div>
                <div>
                  {items.MaxPoint - items.Point === 0 ? (
                    <FaCheck color="#425ad5" />
                  ) : (
                    <div className="text-[14px] font-semibold">
                      <span className="">{items.Point}</span> / <span className=" ">{items.MaxPoint}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </ArkWhiteBox>
    </div>
  );
};

export default Character_Collect;
