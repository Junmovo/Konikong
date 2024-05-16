import { Swiper } from 'swiper/react';
import Link from 'next/link';
import styled from 'styled-components';
// 고정 이너
export const ListWrapper = styled.div`
  text-align: center;
  display: block;
`;

export const ListInner = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 30%;
  overflow: visible;
  padding: 50px 0;
`;

export const List = styled(Link)`
  display: inline-block;
  background-color: #f7f7f7;
  width: 400px;
  height: 450px;
  border-radius: 10px;
  position: relative;
`;

export const ListTag = styled.span`
  display: inline-block;
  background: rgb(103, 142, 255);
  background: linear-gradient(90deg, rgba(103, 142, 255, 1) 0%, rgba(159, 54, 190, 1) 100%);
  position: absolute;
  padding: 5px 10px;
  color: #fff;
  left: 0;
  top: -5px;
  border-radius: 5px;
`;
export const ListImgWrap = styled.div`
  width: 100%;
  overflow: hidden;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
  }
`;
export const ListContentsWrap = styled.div`
  text-align: left;
  padding: 30px;
`;
export const ListTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const ListContents = styled.div`
  text-align: left;
  color: var(--gray-color);
`;
