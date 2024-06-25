'use client';
import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import TopBanner from '@/components/Layout/Ark_elements/components/TopBanner';
import EventBanner from '@/components/Layout/Ark_elements/components/EventBanner';
import Dungeons from '@/components/Layout/Ark_elements/components/Dungeons';
import Guardian from '@/components/Layout/Ark_elements/components/Guardian';

export default function LostArk() {
  return (
    <div className="w-full">
      <TopBanner />
      <ArkPadding>
        <div className="flex flex-col h-full w-full">
          <section className="relative">
            <article className="mt-[30px]">
              <div className="text-[20px] font-semibold mb-[10px] text-white ml-[10px]">진행중인 이벤트</div>
              <EventBanner />
            </article>
          </section>
          <section className="mt-10">
            <article>
              <div className="text-[20px] font-semibold mb-[0px]">이번주 일정</div>
              <div className="grid gap-1">
                <Dungeons />
                <Guardian />
              </div>
            </article>
          </section>
        </div>
      </ArkPadding>
    </div>
  );
}
