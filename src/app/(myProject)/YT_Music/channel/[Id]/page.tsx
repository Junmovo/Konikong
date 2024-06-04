import Darkbutton from '@/components/Layout/elements/Darkbutton';
import HeaderBgChanger from '@/components/Layout/elements/HeaderBgChanger';
import IconButton from '@/components/Layout/elements/IconButton';
import PagePadding from '@/components/Layout/elements/PagePadding';
import Whitebutton from '@/components/Layout/elements/Whitebutton';
import { getChannelById } from '@/lib/dummyData';
import { getRandomArrElements } from '@/lib/utils';
import { permanentRedirect } from 'next/navigation';
import React from 'react';
import { CiShuffle } from 'react-icons/ci';
import { FiMoreVertical } from 'react-icons/fi';
import { GoBroadcast } from 'react-icons/go';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Message from './components/Message';
import Openmore from './components/Openmore';
import SongCardrowExpend from '@/components/Layout/elements/SongCardrowExpend';
import PlayListCarousel from '@/components/Layout/elements/PlayListCarousel';

interface IChannelProps {
  params: { Id: string };
}

const page = async (props: IChannelProps) => {
  const channel = await getChannelById(props.params.Id);
  if (!channel) permanentRedirect('/');
  const Imagesrc = getRandomArrElements(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger Imagesrc={Imagesrc} />
      <section>
        <article className="mt-40">
          <div className="text-[40px] font-bold mb-4">{channel.name}</div>
          <Openmore />
          <div className="flex w-[320px] mb-4  lg:hidden">
            <Darkbutton title="구독중 4.18만" className="w-full justify-center"></Darkbutton>
          </div>
          <div className="flex gap-2 mb-6">
            <Whitebutton icon={<CiShuffle />} title={'셔플'} className="w-[150px] justify-center" />
            <Whitebutton icon={<GoBroadcast />} title={'뮤직 스테이션'} className="w-[150px] justify-center" />
            <Darkbutton title="구독중 4.18만" className="hidden lg:flex w-[180px] justify-center"></Darkbutton>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <IconButton icon={<FiMoreVertical size={24} />} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[100px] bg-neutral-800">
                  <DropdownMenuCheckboxItem className="p-4 hover:bg-neutral-600 cursor-pointer h-[40px]">
                    <Message />
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-[80px]">
        <div className="font-bold text-[24px]">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, idx) => {
              return <SongCardrowExpend song={song} key={idx} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-10">
        <div className="font-bold text-[24px]">앨범</div>
        <PlayListCarousel playlistArray={channel.playlistArray} />
      </section>
    </PagePadding>
  );
};

export default page;
