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
  let choLevel: string | undefined;
  let esther: string | undefined;
  let choEffect: string | undefined;
  let choEffect2: string | undefined;
  let elementValue: string | undefined;
  if (SetLevel[2]?.value?.Element_001) {
    elementValue = SetLevel[2].value.Element_001.replace(/<[^>]*>/g, '').split(' ')[1];
  }
  if (indentstring.length > 1) {
    const Level = indentstring[0].value.Element_000;
    const Share = indentstring[1].value.Element_000;
    //장비초월 한사람들
    choLevel = Level.topStr
      .replace(/<\/?FONT[^>]*>/gi, '')
      .replace(/<img[^>]*>/gi, '')
      .replace(/<\/img[^>]*>/gi, '')
      .split(' ');
    esther = Share.topStr
      .replace(/<\/?FONT[^>]*>/gi, '')
      .replace(/<img[^>]*>/gi, '')
      .replace(/<\/img[^>]*>/gi, '')
      .split(' ');
    //엘릭서부여
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
        <div className="flex">
          {choLevel && (
            <>
              <div className="w-[18px] h-[17px] relative">
                <Image
                  src={`https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png`}
                  fill
                  alt="초월"
                />
              </div>
              {items.Grade === '에스더' ? (
                <>
                  <span className="text-[12px] font-semibold mx-1">{esther?.[2]}</span>
                  <span className="text-[12px]">{esther?.[1]}</span>
                </>
              ) : (
                <>
                  <span className="text-[12px] font-semibold mx-1">{choLevel[2]}</span>
                  <span className="text-[12px] ">{choLevel[1]}</span>
                </>
              )}
            </>
          )}
        </div>
        <div className="font-semibold mb-[5px]">{items.Name}</div>
        <div className="flex gap-1 mb-[3px]">
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
