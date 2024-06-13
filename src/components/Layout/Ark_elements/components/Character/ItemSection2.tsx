import { ICharacterWeapon } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';
import { Qualitycolor, colorGrade } from '@/lib/utils';

interface IItemsSectionProps {
  items: ICharacterWeapon;
}

const ItemSection2: React.FC<IItemsSectionProps> = ({ items }) => {
  const Tooltip = JSON.parse(items.Tooltip, (key, value) => {
    if (key.startsWith('Element_01') && parseInt(key.substring(8)) >= 14) {
      return undefined;
    }
    return value;
  });
  const quality = Tooltip.Element_001.value.qualityValue;

  return (
    <div className="flex gap-2 mb-4 p-[10px]">
      <div>
        <div className={`relative w-[40px] h-[40px] rounded-sm ${colorGrade(items.Grade)}`}>
          <Image src={items.Icon} fill alt="아이템" />
        </div>
        <div className={` text-white text-[12px] text-center rounded-full mt-1  ${Qualitycolor(quality)} `}>
          {Tooltip.Element_001.value.qualityValue}
        </div>
      </div>
      <div className="font-semibold">{items.Name}</div>
      {/* {elementValue && <div style={{ fontSize: '14px', color: 'black' }}>{elementValue}</div>} */}
    </div>
  );
};

export default ItemSection2;
