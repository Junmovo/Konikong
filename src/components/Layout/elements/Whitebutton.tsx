'use client';
import React from 'react';
import { IconButtonColorProps } from '@/types/Music';
import { cn } from '@/lib/utils';

const Whitebutton = ({ icon, title, className, ...props }: IconButtonColorProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-[6px] bg-white text-black rounded-full px-[15px] py-[5px] cursor-pointer hover:bg-neutral-200',
        className
      )}
      {...props}
    >
      {icon}
      {title}
    </div>
  );
};

export default Whitebutton;
