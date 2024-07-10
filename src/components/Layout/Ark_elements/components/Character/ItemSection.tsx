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

  let Elericser_Effect1: string | undefined;
  let Elericser_Effect2: string | undefined;
  let choLeveling: string | undefined;
  for (let i = 0; i < indentstring.length; i++) {
    if (indentstring[i]?.value?.Element_000.topStr.includes('엘릭서')) {
      Elericser_Effect1 = indentstring[i].value.Element_000.contentStr.Element_000?.contentStr;
      Elericser_Effect2 = indentstring[i].value.Element_000.contentStr.Element_001?.contentStr;
      break;
    } else if (indentstring[i]?.value?.Element_000.topStr.includes('[초월]')) {
      choLeveling = indentstring[i]?.value?.Element_000.topStr;
    }
  }
  const e_Effect1 = Elericser_Effect1?.split('<br>')[0]
    .replace(/<[^>]*>/g, '')
    .replace(/\[.*?\]/g, '');
  const e_Effect2 = Elericser_Effect2?.split('<br>')[0]
    .replace(/<[^>]*>/g, '')
    .replace(/\[.*?\]/g, '');

  let choLevel: string | undefined;
  let esther: string | undefined;
  let elementValue: string | undefined;
  console.log(SetLevel[2]);
  if (SetLevel[2]?.value?.Element_001) {
    if (SetLevel[2]?.value?.Element_000.includes('아크')) {
      elementValue = SetLevel[2].value.Element_001.replace(/<[^>]*>/g, '');
    } else {
      elementValue = SetLevel[2].value.Element_001.replace(/<[^>]*>/g, '').split(' ')[1];
    }
  }
  if (indentstring.length > 1) {
    const Level = indentstring[0].value?.Element_000;
    const Share = indentstring[1].value?.Element_000;
    //장비초월 한사람들
    choLevel = Level?.topStr
      .replace(/<\/?FONT[^>]*>/gi, '')
      .replace(/<img[^>]*>/gi, '')
      .replace(/<\/img[^>]*>/gi, '')
      .split(' ');
    esther = Share?.topStr
      .replace(/<\/?FONT[^>]*>/gi, '')
      .replace(/<img[^>]*>/gi, '')
      .replace(/<\/img[^>]*>/gi, '')
      .split(' ');
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
        <div className="flex items-center">
          {choLeveling && (
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
                  <span className="text-[12px] font-semibold mx-1">{choLevel?.[3]}</span>
                  <span className="text-[12px] ">{choLevel?.[2]}</span>
                </>
              )}
            </>
          )}
          {containsKeyword ? <span className="text-[12px] ml-2 ">{containsKeyword}</span> : null}
        </div>
        <div className="font-semibold mb-[5px]">{items.Name}</div>
        <div className="flex gap-1 mb-[3px]">
          <InfoBedge contents={elementValue} grade="level" />
          {e_Effect1 ? <InfoBedge contents={e_Effect1} grade="default" /> : null}
          {e_Effect2 ? <InfoBedge contents={e_Effect2} grade="default" /> : null}
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
