'use client';
import * as S from '@/styles/Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaMoon } from 'react-icons/fa6';
import { IoSunnySharp } from 'react-icons/io5';
import { useTheme } from 'next-themes';

import IconButton from './elements/IconButton';
import DarkModeButton from '../commons/DarkModeButton';

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const onClickMode = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderInner>
          <S.InnerMenuWrap>
            <S.InnerMenu>
              <Link href={'/'}>Home</Link>
            </S.InnerMenu>
            <S.InnerMenu>
              <Link href={'/Project'}>Project</Link>
            </S.InnerMenu>
            <S.InnerMenu>
              <Link href={'/Project'}>Project</Link>
            </S.InnerMenu>
          </S.InnerMenuWrap>
          <DarkModeButton />
        </S.HeaderInner>
      </S.HeaderWrapper>
    </>
  );
}
