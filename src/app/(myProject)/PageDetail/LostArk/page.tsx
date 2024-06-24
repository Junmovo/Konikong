'use client';
import LostarkDetailTop from '@/components/Layout/DetailElements/LostarkDetailTop';

import * as S from '@/styles/Detail';

export default function LostArkDetail(): JSX.Element {
  return (
    <>
      <LostarkDetailTop />
      <section className="grid grid-cols-2 p-[20px] gap-7">
        <article>
          <div>
            <S.TitleText>👋 프로젝트 소개</S.TitleText>
            <S.TitleUnderText>
              코니콩은 RPG게임 로스트아크의 전적검색 시스템입니다.
              <br /> 기존 나와있는 로스트아크 전적검색 사이트의 불편한 UI를 개선하고,
              <br /> UX를 활용하여 핵심적인 정보만 나오게 바꾸었습니다.
            </S.TitleUnderText>
          </div>
        </article>
        <article>
          <div>
            <S.TitleText>🤔 어떠한 기능이 있나요?</S.TitleText>
            <S.TitleUnderText>
              <div>
                <span>Axios</span> 및 <span>Axios Instance</span>를 활용한 코드 가독성 향상
              </div>
              <div>
                <span>Zustand의 전역변수</span>를 활용한 <span>최근검색어, 즐겨찾기 기능</span>
              </div>
              <div>엔터(Enter)를 활용한 UI/UX 향상</div>
              <div>Skeleton UI 를 활용한 사용자 경험 개선</div>
              <div>다크모드 제공</div>
              <div>다른사람에게 쉽게 공유 할 수 있는 URL 복사 기능</div>
            </S.TitleUnderText>
          </div>
        </article>
        <article>
          <div>
            <S.TitleText>💥 문제는 없었나요?</S.TitleText>
            <S.TitleUnderText>
              <div>Axios 및 Axios Instance를 활용한 코드 가독성 향상</div>
              <div>엔터(Enter)를 활용한 검색속도 향상</div>
              <div>Zustand를 활용한 최근검색어, 즐겨찾기 기능</div>
              <div>Skeleton UI 를 활용한 사용자 경험 개선</div>
              <div>다크모드 제공</div>
              <div>다른사람에게 쉽게 공유 할 수 있는 공유하기 기능</div>
            </S.TitleUnderText>
          </div>
        </article>
      </section>
    </>
  );
}
