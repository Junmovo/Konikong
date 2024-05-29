import Section from '@/components/Layout/Section';
import Link from 'next/link';

export default function PagesDetail() {
  return (
    <>
      <Section>
        설명페이지입니다.
        <Link href="/YT_Music">유튜브 뮤직 메인페이지로 이동하기</Link>
      </Section>
    </>
  );
}
