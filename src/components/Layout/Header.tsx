'use client';
import * as S from '@/styles/Header';
import { usePathname } from 'next/navigation';

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const showHeader = pathname === '/';

  return (
    <>
      {showHeader ? (
        <S.HeaderWrapper>
          <S.HeaderInner>이곳은 헤더입니다.</S.HeaderInner>
        </S.HeaderWrapper>
      ) : (
        ''
      )}
    </>
  );
}
