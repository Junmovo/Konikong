'use client';
import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import EventBanner from '@/components/Layout/Ark_elements/EventBanner';
import UpdateBanner from '@/components/Layout/Ark_elements/UpdateBanner';
import SearchBar from '@/components/Layout/Ark_elements/commons/SearchBar';
import NoticeList from '@/components/Layout/Ark_elements/components/NoticeList';
import TopBanner from '@/components/Layout/Ark_elements/components/TopBanner';
import Logo from '@/components/Layout/elements/Logo';
import LostArkNotice from './notice/page';

export default function LostArk() {
  return (
    <div className="w-full">
      <TopBanner />
      <ArkPadding>
        <div className="flex flex-col h-full w-full">
          {/* <section className="flex flex-col h-[30vh] items-center justify-center">
            <Logo />
            <SearchBar header={false} />
          </section> */}
          {/* <section>
            <article className="w-full h-[280px] rounded-[10px] ">
              <UpdateBanner />
            </article>
          </section> */}
          <section className="relative">
            <article className="mt-[30px]">
              <div className="text-[20px] font-semibold mb-[10px] text-white ml-[10px]">진행중인 이벤트</div>
              <EventBanner />
            </article>
          </section>
          <section></section>
        </div>
      </ArkPadding>
    </div>
  );
}
