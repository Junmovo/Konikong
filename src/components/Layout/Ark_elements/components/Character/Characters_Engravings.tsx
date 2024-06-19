'use client';
import instance from '@/app/(myProject)/LostArk/service/service';
import { ICharacterEngravings, IEngravings, IEngravingsEffect } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import InfoBedge from './InfoBedge';
import NoneContents from '../../commons/NoneContents';
interface ICharacterEngravingsProps {
  decodedId: string;
}
const Characters_Engravings = ({ decodedId }: ICharacterEngravingsProps) => {
  const [CharacterEngravings, setCharacterEngravings] = useState<ICharacterEngravings | undefined>();

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/armories/characters/${decodedId}/engravings`);
        setCharacterEngravings(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, [decodedId]);

  // 배열 선언
  const arr1 = CharacterEngravings?.Engravings ?? [];
  const arr2 = CharacterEngravings?.Effects ?? [];
  const commonValues = arr1.filter((el) =>
    arr2.some((item) => {
      const name1 = item.Name.replace(/ Lv\..*/, '');
      return name1 === el.Name;
    })
  );
  const first = commonValues[0]?.Name;
  const second = commonValues[1]?.Name;

  return (
    <div className="">
      <div className="flex justify-between mb-4">
        <div className="font-bold text-[20px]">각인효과</div>
        <div className="flex items-center justify-center gap-2">
          {CharacterEngravings
            ? CharacterEngravings?.Engravings?.map((el: IEngravings, idx: number) => (
                <div key={idx} className="flex items-center">
                  <div className="font-semibold text-[14px] flex gap-1 items-center">
                    <span className="text-[12px]">{el.Name}</span>
                    {el.Tooltip &&
                      `+${
                        JSON.parse(el.Tooltip)
                          ?.Element_001?.value?.leftText.replace(/<[^>]*>/g, '')
                          .split('+')[1]
                      }`}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <div>
        {CharacterEngravings?.Effects?.map((effect: IEngravingsEffect, idx: number) => (
          <div key={idx} className="flex items-center gap-3 mb-[10px]">
            <div className="relative w-[40px] h-[40px] rounded-sm overflow-hidden">
              <Image src={effect.Icon} fill alt={effect.Name} />
            </div>
            <div className="font-semibold flex items-center">
              <div className="mr-[5px]">Lv.{effect.Name.split('Lv.')[1]}</div>
              <div>{effect.Name.split('Lv.')[0]}</div>
              {effect.Name.split('Lv.')[0].trim() === first ? (
                <div className="w-[4px] h-[4px] bg-[#425ad5] ml-2 rounded-full"></div>
              ) : null}
              {effect.Name.split('Lv.')[0].trim() === second ? (
                <div className="w-[4px] h-[4px] bg-[#425ad5] ml-2 rounded-full"></div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters_Engravings;