'use client';
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
        <article className="w-full bg-neutral-400 h-[200px] rounded-[30px]">swiper</article>
      </section>
      <section className="mt-[30px] grid grid-cols-3 gap-4">
        <article className="bg-neutral-400 h-[300px] rounded-[20px]">1</article>
        <article className="bg-neutral-400 h-[300px] rounded-[20px]">2</article>
        <article className="bg-neutral-400 h-[300px] rounded-[20px]">3</article>
      </section>
    </div>
  );
}
