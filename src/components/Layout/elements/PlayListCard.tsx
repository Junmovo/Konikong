'use client';
import { getRandomArrElements } from '@/lib/utils';
import { IPropsPlaylist } from '@/types/Music';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { MouseEvent } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { IoMdPlay } from 'react-icons/io';
import IconButton from './IconButton';

const PlayListCard = ({ playlist }: IPropsPlaylist) => {
  const router = useRouter();
  const { id, owner, playlistName, songList } = playlist;
  const imageSrc = getRandomArrElements(songList).imageSrc;
  const onClickCard = () => {
    router.push(`/YT_Music/playlist?list=${id}`);
  };
  const onClickPlay = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log(1);
  };

  return (
    <article className="mt-[20px]  cursor-pointer" onClick={onClickCard}>
      <section className=" relative h-[160px] mb-4 group ">
        <Image
          src={imageSrc}
          fill={true}
          alt="사진"
          className="object-cover rounded-md"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
        />
        <div className="relative hidden group-hover:block bg-[rgba(0,0,0,0.4)] w-full h-[160px]">
          <div className="absolute right-[5px] top-2">
            <IconButton icon={<MdMoreVert size={24} />}></IconButton>
          </div>
          <div
            onClick={onClickPlay}
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transform-gpu group-hover:scale-125 w-[45px] h-[45px] transition flex items-center justify-center align-middle"
          >
            <IoMdPlay size={24} />
          </div>
        </div>
      </section>
      <section>
        <div className="text-lg">{playlistName}</div>
        <div className="text-neutral-500">
          {owner} - 트랙{songList.length}개
        </div>
      </section>
    </article>
  );
};

export default PlayListCard;
