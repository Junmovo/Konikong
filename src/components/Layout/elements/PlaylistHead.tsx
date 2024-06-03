'use client';
import { IPropsPlaylist } from '@/types/Music';
import React from 'react';
import IconButton from './IconButton';
import { FiMoreVertical } from 'react-icons/fi';
import { CiShuffle } from 'react-icons/ci';
import { LuPencil } from 'react-icons/lu';
import { MdDownload } from 'react-icons/md';
import Image from 'next/image';
import { getRandomArrElements } from '@/lib/utils';
import Darkbutton from './Darkbutton';
import Whitebutton from './Whitebutton';

const PlayListHead = ({ playlist }: IPropsPlaylist) => {
  const { owner, playlistName, songList } = playlist;
  const src = getRandomArrElements(songList);
  console.log(src.imageSrc);
  return (
    <section>
      <article className="mb-10">
        <div className="flex gap-6 items-center mb-10">
          <div className="sm:w-[300px] sm:h-[300px] ">
            <Image src={src.imageSrc} width={300} height={300} alt="playlist사진" className="rounded-[8px]" />
          </div>
          <div>
            <div className="font-bold text-[30px]">{playlistName}</div>
            <div className="my-4 mb-[30px]">
              <div>{`공개 • ${owner} •`}</div>
              <div>{`트랙 ${songList.length} • time `}</div>
            </div>
            <ul className="hidden items-center gap-4 flex-wrap sm:flex ">
              <li>
                <Whitebutton icon={<CiShuffle />} title={'셔플'} />
              </li>
              <li>
                <Darkbutton icon={<LuPencil size={20} />} title={'재생목록 수정'} />
              </li>
              <li className="flex items-center bg-[rgba(0,0,0,0.4)] rounded-full">
                <IconButton icon={<MdDownload size={20} />} />
              </li>
              <li className="flex items-center">
                <IconButton icon={<FiMoreVertical size={24} />} />
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex items-center gap-4 flex-wrap sm:hidden">
          <li>
            <Whitebutton icon={<CiShuffle />} title={'셔플'} />
          </li>
          <li>
            <Darkbutton icon={<LuPencil size={20} />} title={'재생목록 수정'} />
          </li>
          <li className="flex items-center bg-[rgba(0,0,0,0.4)] rounded-full">
            <IconButton icon={<MdDownload size={20} />} />
          </li>
          <li className="flex items-center">
            <IconButton icon={<FiMoreVertical size={24} />} />
          </li>
        </ul>
      </article>
      <article>
        {/* <ul>
          {songList.map((songlist, idx) => {
            return (
              <li key={idx} className="flex items-center">
                <div>
                  <Image src={songlist.imageSrc} width={40} height={40} alt="이미지" />
                </div>
                {songlist.name}
                {songlist.channel}
                {songlist.imageSrc}
                {songlist.src}
                {owner}
              </li>
            );
          })}
        </ul> */}
      </article>
    </section>
  );
};

export default PlayListHead;
