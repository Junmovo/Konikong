'use client';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import * as S from '@/styles/mainStyles';
import MainWrapper from './MainWrapper';

export default function MainContents_ver2(): JSX.Element {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Design',
        'Publisher',
        'JavaScript',
        'FrontEnd',
        'React',
        'TypeScript',
        'Next.js',
        'Zustand',
        'Tailwind',
        'RestApi',
      ],
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
    <MainWrapper>
      <S.FrontEndText>FrontEnd</S.FrontEndText>
      <S.CodeText>{'</>'}</S.CodeText>
      <S.NextJsText>Next.js</S.NextJsText>
      <S.TypeScript>TypeScript</S.TypeScript>
      <div className="flex flex-col">
        <div className="text-[14px] text-gray-400">FE PortFolio</div>
        <h1 className="text-[80px] font-[800]">만나서 반가워 👋</h1>
        <div>
          <S.TypedText ref={el} />
        </div>
        <div className="flex gap-2 mt-[10px]">
          <S.TitleCircle>Web Project</S.TitleCircle>
          <S.TitleCircle>About Me</S.TitleCircle>
          <S.TitleCircle>About Me</S.TitleCircle>
        </div>
      </div>
      {/* <div className="flex">우측고민</div> */}
    </MainWrapper>
  );
}
