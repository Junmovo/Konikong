'use client';
import EventBanner from '@/components/Layout/Ark_elements/EventBanner';
import UpdateBanner from '@/components/Layout/Ark_elements/UpdateBanner';
import SearchBar from '@/components/Layout/Ark_elements/commons/SearchBar';
import Logo from '@/components/Layout/elements/Logo';

export default function LostArk() {
  return (
    <div className="flex flex-col h-full w-full">
      <section className="flex flex-col h-[30vh] items-center justify-center">
        <Logo />
        <SearchBar header={false} />
      </section>
      <section>
        <article className="w-full h-[280px] rounded-[10px]">
          <UpdateBanner />
        </article>
      </section>
      <section className="mt-[30px]">
        <article className="">
          <EventBanner />
        </article>
      </section>
    </div>
  );
}
