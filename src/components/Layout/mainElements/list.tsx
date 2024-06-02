import Link from 'next/link';
import * as S from '@/styles/ListStyles';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
// import Listimg from '@/';

export default function List(): JSX.Element {
  return (
    <>
      <S.ListWrapper>
        <S.Title>MyProject</S.Title>
        <p>기타등등 얘기</p>
        <S.ListInner>
          <S.StyledSwiper
            spaceBetween={30}
            slidesPerView={1}
            initialSlide={1}
            centeredSlides={true}
            // loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <S.List href="PageDetail/MusicApp" scroll={true}>
                <S.ListTag>React</S.ListTag>
                <S.ListImgWrap>{/* <Image src={Listimg} alt="임시" /> */}</S.ListImgWrap>
                <S.ListContentsWrap>
                  <S.ListTitle>제목입니다.</S.ListTitle>
                  <S.ListContents>내용입니다.</S.ListContents>
                </S.ListContentsWrap>
              </S.List>
            </SwiperSlide>
          </S.StyledSwiper>
        </S.ListInner>
      </S.ListWrapper>
    </>
  );
}
