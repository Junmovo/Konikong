import { ICharacterWeapon } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';

interface IItemsSectionProps {
  items: ICharacterWeapon;
}

const ItemSection2: React.FC<IItemsSectionProps> = ({ items }) => {
  const colorVariants: { [key: string]: string } = {
    고대: ' bg-gradient-to-br from-[#3d3325] to-[#dcc999] ',
    유물: ' bg-gradient-to-br from-[#341a09] to-[#a24006] ',
    전설: ' bg-gradient-to-135deg from-[#362003] to-[#9e5f04] ',
    영웅: ' bg-gradient-to-br from-[#261331] to-[#480d5d] ',
    희귀: ' bg-gradient-to-br from-[#111f2c] to-[#113d5d] ',
  };

  const Tooltip = JSON.parse(items.Tooltip, (key, value) => {
    if (key.startsWith('Element_01') && parseInt(key.substring(8)) >= 14) {
      return undefined;
    }
    return value;
  });
  const quality = Tooltip.Element_001.value.qualityValue;
  const color = (v: number) => {
    if (v === 100) {
      return 'bg-[#f9ae00]';
    } else if (v >= 90) {
      return 'bg-[#8045dd]';
    } else if (v >= 70) {
      return 'bg-[#2AB1F6]';
    } else if (v >= 60) {
      return 'bg-[#A0E71C]';
    } else if (v >= 30) {
      return 'bg-[#FFE81D]';
    } else {
      return 'hidden';
    }
  };

  return (
    <div className="flex gap-2 mb-4 p-[10px]">
      <div>
        <div className={`relative w-[40px] h-[40px] rounded-sm ${colorVariants[items.Grade]}`}>
          <Image src={items.Icon} fill alt="아이템" />
        </div>
        <div className={` text-white text-[12px] text-center rounded-full mt-1  ${color(quality)} `}>
          {Tooltip.Element_001.value.qualityValue}
        </div>
      </div>
      <div className="font-semibold">{items.Name}</div>
      {/* {elementValue && <div style={{ fontSize: '14px', color: 'black' }}>{elementValue}</div>} */}
    </div>
  );
};

export default ItemSection2;
