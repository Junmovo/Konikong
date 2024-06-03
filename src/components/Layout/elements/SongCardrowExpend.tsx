'use client';
import { Song } from '@/types/Music';
import Image from 'next/image';
import React from 'react';
import { GoThumbsup } from 'react-icons/go';
import { FiThumbsDown } from 'react-icons/fi';
import { MdMoreVert } from 'react-icons/md';
import IconButton from '@/components/Layout/elements/IconButton';
import { IoMdPlay } from 'react-icons/io';
import { useRouter } from 'next/navigation';

interface SongCardrowExpendProps {
  song: Song;
}

const SongCardrowExpend: React.FC<SongCardrowExpendProps> = ({ song }) => {
  const { name, channel, src, imageSrc, channelId } = song;
  const router = useRouter();
  const onClickChannel = () => {
    router.push(`/YT_Music/channel/${channelId}`);
  };
  return (
    <article className="flex gap-4 flex-row  w-full h-[48px] items-center mb-3 group relative cursor-pointer">
      <div className="relative w-[48px] h-[48px]">
        <Image src={imageSrc} fill alt="이미지" className="object-cover  w-[48px]" />
        <div className="absolute hidden items-center justify-center bottom-0 w-[48px] h-[48px] group-hover:flex group-hover:bg-[rgba(0,0,0,0.5)] ">
          <IoMdPlay size={16} />
        </div>
      </div>

      <div className="flex flex-row gap-4 justify-between basis-1/3">
        <div className="w-full text-ellipsis whitespace-nowrap overflow-hidden">{name}</div>
        <div onClick={onClickChannel} className="text-neutral-500 hover:underline cursor-pointer">
          {channel}
        </div>
      </div>
      <div className="absolute group-hover:flex hidden right-[5px] bg-[rgba(0,0,0,0.4)]">
        <span>
          <IconButton icon={<FiThumbsDown size={20} />}></IconButton>
        </span>
        <span>
          <IconButton icon={<GoThumbsup size={20} />}></IconButton>
        </span>
        <span>
          <IconButton icon={<MdMoreVert size={20} />}></IconButton>
        </span>
      </div>
    </article>
  );
};

export default SongCardrowExpend;
