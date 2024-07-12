import { cn, colorGrade } from '@/lib/utils';
import { ICharacterGems, IEffect, IGem } from '@/types/Ark';
import React from 'react';
import Image from 'next/image';

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
  const keyword = '피해';
  const keyword2 = '재사용';
  const part_m = input.indexOf(keyword);
  const part_h = input.indexOf(keyword2);
  let part4;
  let part5;
  let part6;
  if (part_m === -1) {
    //홍염
    const part = input
      .substring(part_h)
      .split('<BR>')
      .filter((el: string) => el.trim() !== '');
    part4 = part[0];
    part5 = part[1]?.replace(/<[^>]*>/g, '');
    part6 = part[2];
  } else {
    //멸화
    const part = input
      .substring(part_m)
      .split('<BR>')
      .filter((el: string) => el.trim() !== '');
    part4 = part[0];
    part5 = part[1]?.replace(/<[^>]*>/g, '');
    part6 = part[2];
  }

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
              {items.Level} {items.Name.includes('멸화') || items.Name.includes('겁화') ? '멸' : '홍'}
            </span>
          </div>
          <div className="text-[14px] text-gray-400 ">{part1}</div>
          <div className="font-semibold w-[200px]">{part2}</div>
          <div className=" text-gray-600 dark:text-gray-400">
            {part4}
            <div className="text-[12px] text-gray-400">
              <span>{part6}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Characters_gemsCard;
