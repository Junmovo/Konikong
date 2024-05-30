'use client';
import IconButton from './IconButton';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoImg from './LogoImg';
import { IoMdClose } from 'react-icons/io';
import { ILogoProps } from '@/types/Music';

export default function Logo({ Open, onClickClose }: ILogoProps) {
  return (
    <section className="flex items-center gap-3">
      {Open ? (
        <IconButton icon={<IoMdClose size={30} />} onClickIcon={onClickClose} />
      ) : (
        <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickClose} />
      )}

      <LogoImg />
    </section>
  );
}
