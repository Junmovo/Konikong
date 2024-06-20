import { cn, colorGrade } from '@/lib/utils';
import { ICharacterGems, IEffect, IGem } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';
import SkeletonGems from './SkeletonGems';

interface IGemsCard {
  items: IGem;
  moreView: boolean;
}

const Characters_gemsCard: React.FC<IGemsCard> = ({ items, moreView }) => {
  const Tooltip = JSON.parse(items.Tooltip);
  const Effect = Object.keys(Tooltip)
    .filter((key) => Tooltip[key].type === 'ItemPartBox')
    .map((key) => Tooltip[key]);

  // 첫 번째 부분: 대괄호 안의 내용 추출
  let input = Effect[0]?.value.Element_001;
  const part1 = input.match(/\[([^\]]+)\]/)?.[1];
  const part2 = input.match(/<FONT COLOR='#FFD200'>([^<]+)<\/FONT>/)?.[1];
  const part3 = input.split('</FONT>')[1]?.trim();

  return (
    <div className={cn('flex flex-wrap gap-4 items-center', moreView ? ' mb-[10px] ' : 'justify-center')}>
      <div key={items.Name} className="flex flex-col items-center">
        <div
          className={cn('rounded-sm w-[50px] h-[50px] relative overflow-hidden', moreView ? 'w-[40px] h-[40px]' : '')}
        >
          <Image src={items.Icon} fill alt={items.Name} className={`${colorGrade(items.Grade)}`} />
        </div>
        <div className={cn(moreView ? 'hidden' : 'block')}>
          <span className="text-[12px]">Lv.</span>
          <span className="font-semibold text-[14px]">{items.Level}</span>
        </div>
      </div>
      {moreView ? (
        <div className="flex gap-3 items-center">
          <div className="flex w-[50px] items-center">
            <span className="text-[12px]">Lv.</span>
            <span className="font-semibold text-[14px]">
              {items.Level} {items.Name.includes('멸화') ? '멸' : '홍'}
            </span>
          </div>
          <div className="text-[14px] text-gray-400 ">{part1}</div>
          <div className="font-semibold w-[200px]">{part2}</div>
          <div className=" text-gray-600 dark:text-gray-400">{part3}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Characters_gemsCard;
