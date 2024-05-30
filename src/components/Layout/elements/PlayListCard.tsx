import { getRandomArrElements } from '@/lib/utils';
import { IPropsPlaylist } from '@/types/Music';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const PlayListCard = ({ playlist }: IPropsPlaylist) => {
  const router = useRouter();
  const { id, owner, playlistName, songList } = playlist;
  const imageSrc = getRandomArrElements(songList).imageSrc;
  const onClickCard = () => {
    router.push(`/YT_Music/playlist?list=${id}`);
  };

  return (
    <article className="mt-[20px] cursor-pointer h-[240px]" onClick={onClickCard}>
      <section className=" relative h-[160px] mb-4 ">
        <Image src={imageSrc} fill={true} alt="사진" className="object-cover" />
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
