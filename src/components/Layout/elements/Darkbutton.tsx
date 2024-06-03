import React from 'react';
import { IconButtonColorProps } from '@/types/Music';
import { cn } from '@/lib/utils';

const Darkbutton = ({ icon, title, className, ...props }: IconButtonColorProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-[6px] px-[15px] py-[5px] cursor-pointer bg-[rgba(0,0,0,0.4)] border border-neutral-500 rounded-full hover:bg-neutral-600',
        className
      )}
      {...props}
    >
      {icon}
      {title}
    </div>
  );
};

export default Darkbutton;
