import { ICharacterWeapon } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';
import { Qualitycolor, colorGrade } from '@/lib/utils';
import InfoBedge from './InfoBedge';

interface IItemsSectionProps {
  items: ICharacterWeapon;
}

const ItemSection2: React.FC<IItemsSectionProps> = ({ items }) => {
  const Tooltip = JSON.parse(items.Tooltip, (key, value) => {
    if (key.startsWith('Element_00') && parseInt(key.substring(8)) >= 8) {
      return undefined;
    }
    return value;
  });
  const SetStone = Object.keys(Tooltip)
    .filter((key) => Tooltip[key].type === 'IndentStringGroup')
    .map((key) => Tooltip[key]);

  const quality = Tooltip.Element_001.value.qualityValue;

  if (!SetStone[0]) return;
  const addEffect = Tooltip.Element_005.value.Element_001;
  const { Element_000, Element_001, Element_002 } = SetStone[0].value.Element_000.contentStr;
  const removeFontTags = (html: string) => {
    return html
      .replace(/<\/?FONT[^>]*>/gi, '')
      .replace('<BR>', '')
      .replace(/\[(.*?)\]/g, (match, text) => text)
      .split('활성도');
  };
  const addEffect0 = removeFontTags(Element_000.contentStr);
  const addEffect1 = removeFontTags(Element_001?.contentStr || '');
  const addEffect2 = removeFontTags(Element_002?.contentStr || '');
  const NewTag = removeFontTags(addEffect);

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
      <div className="flex flex-col">
        <div className="font-semibold">{items.Name}</div>
        {addEffect ? (
          <div className="text-[14px] mb-[4px]">
            <span className="mr-[5px]">{addEffect.split('<BR>')[0] ?? ''}</span>
            <span className="mr-[5px]">{addEffect.split('<BR>')[1] ?? ''}</span>
          </div>
        ) : (
          ''
        )}

        <div className="flex gap-[4px]">
          <InfoBedge contents={addEffect0} grade="plus" />
          <InfoBedge contents={addEffect1} grade="plus" />
          <InfoBedge contents={addEffect2} grade="minus" />
        </div>
      </div>
    </div>
  );
};

export default ItemSection2;
