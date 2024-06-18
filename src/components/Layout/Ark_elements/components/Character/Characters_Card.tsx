import instance from '@/app/(myProject)/LostArk/service/service';
import { ICharacterCards } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import ArkWhiteBox from '../../ArkWhiteBox';
import Image from 'next/image';
import { ImgStar } from '@/lib/utils';
import InfoBedge from './InfoBedge';

interface ICharacterCardProps {
  decodedId: string;
}

const Characters_Card = ({ decodedId }: ICharacterCardProps) => {
  const [CharacterCard, setCharacterCard] = useState<ICharacterCards>();

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/armories/characters/${decodedId}/cards`);
        setCharacterCard(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, [decodedId]);

  const getLastItem = (arr: any) => (arr.length > 0 ? arr[arr.length - 1] : undefined);

  const result = CharacterCard?.Effects.map((effect) => {
    return getLastItem(effect.Items).Name.replace('합계', '');
  });
  if (!CharacterCard) return null;

  return (
    <ArkWhiteBox>
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-[20px] ">카드효과</div>
        <div className="font-semibold text-[14px] flex gap-2">
          <div>{result?.[0]} /</div>
          <div>{result?.[1]}</div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-6 pb-3  border-b-[1px]">
          {CharacterCard?.Cards.map((card, idx) => (
            <div key={idx} className="flex items-center flex-col p-1">
              <div className="relative ">
                <div className="relative w-[100px] h-[145px] rounded-sm overflow-hidden">
                  <Image src={card.Icon} fill alt={card.Name} />
                </div>
                <Image
                  src={ImgStar(card.AwakeCount)}
                  width={95}
                  height={30}
                  alt={card.Name}
                  className="absolute bottom-[10px] left-[2.5px]"
                />
              </div>
              <div className="text-[14px] text-gray-500 mt-[5px]">{card.Name}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2  text-[16px] rounded-lg p-[20px]">
          {CharacterCard?.Effects.map((effect, _) =>
            effect.Items.map((el, idx) => (
              <div key={idx} className="p-2 gap-2 flex">
                <div className="flex-shrink-0">
                  <InfoBedge contents={`${el.Name.match(/\d+/)}세트`} grade="minus" />
                </div>
                <div>
                  <div className="font-semibold">{el.Name}</div>
                  <div className="text-[14px]">- {el.Description}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </ArkWhiteBox>
  );
};

export default Characters_Card;
