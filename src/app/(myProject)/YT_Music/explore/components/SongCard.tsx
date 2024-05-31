import { TopSong } from '@/types/Music';
import Image from 'next/image';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineCaretUp } from 'react-icons/ai';
import { GoThumbsup } from 'react-icons/go';
import { FiThumbsDown } from 'react-icons/fi';
import { MdMoreVert } from 'react-icons/md';
import IconButton from '@/components/Layout/elements/IconButton';
import { IoMdPlay } from 'react-icons/io';

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="flex gap-4 flex-row  w-full h-[48px] items-center mb-3 group relative cursor-pointer">
      <div className="relative w-[48px] h-[48px]">
        <Image src={song.imageSrc} fill alt="이미지" className="object-cover  w-[48px]" />
        <div className="absolute hidden items-center justify-center bottom-0 w-[48px] h-[48px] group-hover:flex group-hover:bg-[rgba(0,0,0,0.5)] ">
          <IoMdPlay size={16} />
        </div>
      </div>
      <div className="gap-4 flex flex-row items-center justify-center w-[40px]">
        {song.rank === song.prevRank ? (
          <FaCircle size={8} color="#aaaaaa" />
        ) : song.rank > song.prevRank ? (
          <AiOutlineCaretUp color="#3CA63F" size={10} />
        ) : (
          <AiOutlineCaretDown color="#FF0000" size={10} />
        )}
        <div>{song.rank + 1}</div>
      </div>
      <div className="">
        <div className="w-full  text-ellipsis whitespace-nowrap overflow-hidden">{song.name}</div>
        <div className="text-neutral-500">{song.channel}</div>
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

export default SongCard;
