import { ICharacterWeapon } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';
import InfoBedge from './InfoBedge';
import { Qualitycolor, colorGrade } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import Characters_Skeleton from './SkeletonUnder';

interface IItemsSectionProps {
  items: ICharacterWeapon;
}

const ItemSectionUnder: React.FC<IItemsSectionProps> = ({ items }) => {
  const Tooltip = JSON.parse(items.Tooltip, (key, value) => {
    if (key.startsWith('Element_01') && parseInt(key.substring(8)) >= 14) {
      return undefined;
    }
    return value;
  });

  const indentstring = Object.keys(Tooltip)
    .filter((key) => Tooltip[key].type === 'IndentStringGroup')
    .map((key) => Tooltip[key]);
  const upgrade = Object.keys(Tooltip)
    .filter((key) => Tooltip[key].type === 'SingleTextBox')
    .map((key) => Tooltip[key]);
  let containsKeyword: string | undefined;
  for (let i = 0; i < upgrade.length; i++) {
    if (upgrade[i].value.includes('[상급 재련]')) {
      containsKeyword = upgrade[i].value;
      break;
    }
  }
  containsKeyword = containsKeyword?.replace(/<[^>]*>/g, '');
  let indentKeyword: string | undefined;
  let elericser: string | undefined;

  for (let i = 0; i < indentstring.length; i++) {
    if (indentstring[i].value?.Element_000?.topStr.includes('[초월]')) {
      indentKeyword = indentstring[i].value.Element_000.contentStr.Element_001.contentStr;
    } else if (indentstring[i].value?.Element_000?.topStr.includes('연성 추가 효과')) {
      elericser = indentstring[i].value.Element_000.topStr;
    }
  }
  indentKeyword = indentKeyword?.replace(/<[^>]*>/g, '');
  elericser = elericser?.replace('<br>', 'TTAS').replace(/<[^>]*>/g, '');

  if (!elericser && !indentKeyword) return null;

  return (
    <>
      <div className="grid grid-cols-2 w-full">
        <div className="flex gap-3 mb-2 p-[10px]">
          {elericser ? (
            <div className="flex gap-3 mb-2">
              <div className={`${colorGrade('전설')} w-[45px] h-[45px] rounded-sm`}>
                <Image src={'/images/Lostark/eleric.webp'} width={45} height={45} alt="엘릭서" />
              </div>
              <div className="">
                <h1 className="font-semibold mb-[5px]">엘릭서</h1>
                <div className="text-[14px]">{elericser?.split('TTAS')[0]}</div>
                <div className="text-[14px]">{elericser?.split('TTAS')[1]}</div>
              </div>
            </div>
          ) : (
            <Characters_Skeleton title={'엘릭서'} />
          )}
        </div>
        <div className="flex p-[10px]  gap-3 mb-2">
          {indentKeyword ? (
            <div className="flex gap-3 mb-2">
              <div className={`${colorGrade('전설')} w-[45px] h-[45px] rounded-sm`}>
                <Image src={'/images/Lostark/coworld.webp'} width={45} height={45} alt="엘릭서" />
              </div>
              <div>
                <h1 className="font-semibold mb-[5px]">초월</h1>
                <div className="text-[14px]"> {indentKeyword?.split('총')[1]}</div>
              </div>
            </div>
          ) : (
            <Characters_Skeleton title={'초월'} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemSectionUnder;
