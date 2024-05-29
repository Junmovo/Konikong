'use client';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import * as S from '@/styles/mainStyles';

export default function MainContents(): JSX.Element {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Design', 'Publisher', 'JavaScript', 'FrontEnd', 'React', 'TypeScript', 'Next.js'],
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <S.MainWrapper>
        <S.InnerTextwrap>
          <S.FrontEndText>FrontEnd</S.FrontEndText>
          <S.CodeText>{'</>'}</S.CodeText>
          <S.NextJsText>Next.js</S.NextJsText>
          <S.TypeScript>TypeScript</S.TypeScript>
          <S.TitleCircle>FE Portfolio</S.TitleCircle>
          <S.Title>만나서 반가워</S.Title>
          <S.TypeTextwrap>
            {'{'} <S.TypedText ref={el} /> {'}'}
          </S.TypeTextwrap>
        </S.InnerTextwrap>
      </S.MainWrapper>
    </>
  );
}
