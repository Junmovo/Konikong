import { sleep } from '@/lib/utils';
import type { Metadata } from 'next';

export default async function YTMusic() {
  await sleep(2000);
  return (
    <>
      <section className="h-[500px] bg-neutral-600"> 공통 레이아웃 잡기</section>
      <section className="h-[500px] bg-neutral-600"> 공통 레이아웃 잡기</section>
      <section className="h-[500px] bg-neutral-600"> 공통 레이아웃 잡기</section>
      <section className="h-[500px] bg-neutral-600"> 공통 레이아웃 잡기</section>
      <section className="h-[500px] bg-neutral-600"> 공통 레이아웃 잡기</section>
      유튜브뮤직페이지입니다.
    </>
  );
}
