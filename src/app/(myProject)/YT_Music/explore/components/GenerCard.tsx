'use client';
import React from 'react';
import { RandomColorHexcode } from '@/lib/utils';

interface GenericProps {
  generic: string;
}

const GenericCard: React.FC<GenericProps> = ({ generic }) => {
  const Color = RandomColorHexcode();
  const colorVariants = {
    type: 'bg-blue-600 hover:bg-blue-500 text-white',
  };
  return (
    <article className="flex gap-2 flex-row  w-full  items-center  group relative cursor-pointer bg-neutral-900 rounded-[7px] overflow-hidden py-[16px] px-[10px] transition hover:bg-neutral-800 h-[50px]">
      <div className="px-[20px]">{generic}</div>
      <div className="absolute left-0 h-full w-2" style={{ backgroundColor: Color }}></div>
    </article>
  );
};

export default GenericCard;
