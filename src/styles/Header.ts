import styled, { keyframes } from 'styled-components';
// 고정 이너
export const HeaderWrapper = styled.header`
  width: 100%;
  display: block;
  justify-content: center;
  background-color: #ddd;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 9;
  margin: 0px auto;
`;

export const HeaderInner = styled.div`
  width: 1340px;
  background-color: #aaa;
  height: 80px;
  margin: 0px auto;
`;
