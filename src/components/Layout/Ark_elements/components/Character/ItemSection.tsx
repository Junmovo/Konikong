import { ICharacterWeapon } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';
import InfoBedge from './InfoBedge';
import { Qualitycolor, colorGrade } from '@/lib/utils';

interface IItemsSectionProps {
  items: ICharacterWeapon;
}

const ItemSection: React.FC<IItemsSectionProps> = ({ items }) => {
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

  let choName: string | undefined;
  let choEffect: string | undefined;
  let choEffect2: string | undefined;
  if (indentstring.length > 1) {
    const Share = indentstring[1].value.Element_000;
    //장비초월 한사람들
    choName = Share.topStr.replace(/<[^>]*>/g, '').split('<br>'); // 엘릭서이름
    // 부여앞
    choEffect = Share.contentStr.Element_000.contentStr
      .split('<br>')[0]
      .replace(/<[^>]*>/g, '')
      .replace(/\[.*?\]/g, '');
    //부여뒤
    choEffect2 = Share.contentStr.Element_001?.contentStr
      .split('<br>')[0]
      .replace(/<[^>]*>/g, '')
      .replace(/\[.*?\]/g, '');
  }
  console.log(choEffect2);
  let elementValue = SetLevel[2].value.Element_001.replace(/<[^>]*>/g, '').split(' ')[1];

  return (
    <div className="flex flex-wrap gap-2 mb-4 p-[10px]">
      <div>
        <div className={`relative w-[40px] h-[40px] rounded-sm ${colorGrade(items.Grade)}`}>
          <Image src={items.Icon} fill alt="아이템" />
        </div>
        <div className={` text-white text-[12px] text-center rounded-full mt-1  ${Qualitycolor(quality)} `}>
          {Tooltip.Element_001.value.qualityValue}
        </div>
      </div>

      <div className="">
        <div className="font-semibold">{items.Name}</div>
        <div className="flex gap-1">
          <InfoBedge contents={elementValue} grade="level" />
          {choEffect2 && items.Type !== '무기' && (
            <>
              <InfoBedge contents={choEffect} grade="defalt" />
              <InfoBedge contents={choEffect2} grade="defalt" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
