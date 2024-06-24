import { montserrat } from './../../public/fonts/fonts';
import styled, { keyframes } from 'styled-components';
// 고정 이너
export const HeaderWrapper = styled.header`
  width: 100%;
  display: block;
  justify-content: center;
  background-color: inherit;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 9;
  margin: 0px auto;
  /* box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06); */
`;

export const HeaderInner = styled.div`
  width: 1300px;
  height: 60px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerMenuWrap = styled.ul`
  width: 30%;
  display: flex;
  align-items: center;

  height: 60px;
`;
export const InnerMenu = styled.li`
  width: 30%;
  font-family: 'montserrat';
  font-weight: 400;
  a {
    padding: 10px;
  }
`;
