import { ICharacterWeapon } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';
import InfoBedge from './InfoBedge';
import { Qualitycolor, colorGrade } from '@/lib/utils';

interface IItemsSectionProps {
  items: ICharacterWeapon;
}

const ItemSection3: React.FC<IItemsSectionProps> = ({ items }) => {
  const Tooltip = JSON.parse(items.Tooltip, (key, value) => {
    if (key.startsWith('Element_01') && parseInt(key.substring(8)) >= 14) {
      return undefined;
    }
    return value;
  });
  const quality = Tooltip.Element_001.value.qualityValue;
  const SetLevel = Object.keys(Tooltip)
    .filter((key) => Tooltip[key].type === 'ItemPartBox')
    .map((key) => Tooltip[key]);
  const indentstring = Object.keys(Tooltip)
    .filter((key) => Tooltip[key].type === 'IndentStringGroup')
    .map((key) => Tooltip[key]);
  console.log(Tooltip);

  let elementValue: string | undefined;
  let OtherValue: string | undefined | null;
  let OtherValue2: string | undefined | null;
  let extractedPatterns1: string[] = [];
  let extractedPatterns2: string[] = [];

  if (SetLevel[0]?.value?.Element_001) {
    // "O + 숫자" 패턴 추출 정규식
    const pattern = /(?:치명|신속|특화|제압|인내|숙련|힘|민첩|체력|지능)\s*\+\s*\d+/g;

    // "[ O ]" 패턴 추출 정규식
    const pattern2 = /\[<FONT[^>]*>(.*?)<\/FONT>\]/g;

    extractedPatterns1 = SetLevel[0].value.Element_001.match(pattern) || [];
    extractedPatterns2 = SetLevel[0].value.Element_001.match(pattern2) || [];
  }

  return (
    <div className="flex gap-3 mb-2 p-[10px]">
      <div>
        <div className={`relative w-[45px] h-[45px] rounded-sm ${colorGrade(items.Grade)}`}>
          <Image src={items.Icon} fill alt="아이템" />
        </div>
        <div className={` text-white text-[12px] text-center rounded-full mt-1  ${Qualitycolor(quality)} `}>
          {Tooltip.Element_001.value.qualityValue}
        </div>
      </div>

      <div className="">
        <div className="flex"></div>
        <div className="font-semibold mb-[5px]">{items.Name}</div>
        <div className="mb-[3px] flex flex-col">
          <div className="flex gap-1 mb-1">
            {extractedPatterns1?.map((value, idx) => (
              <InfoBedge key={idx} contents={value} grade="level" />
            ))}
          </div>
          <div className="flex gap-1">
            {extractedPatterns2?.map((value, idx) => (
              <InfoBedge key={idx} contents={value.replace(/<[^>]*>/g, '').replace(/\[|\]/g, '')} grade="plus" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSection3;
