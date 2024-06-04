'use client';
import { IconButtonProps } from '@/types/Music';

export default function IconButton({ icon, onClickIcon = () => {} }: IconButtonProps) {
  return (
    <div
      onClick={onClickIcon}
      className="w-[36px] h-[36px] cursor-pointer hover:bg-[rgba(144,144,144,0.4)] flex justify-center items-center rounded-full "
    >
      {icon}
    </div>
  );
}
