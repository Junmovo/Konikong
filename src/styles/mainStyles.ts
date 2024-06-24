import { montserrat } from './../../public/fonts/fonts';
import styled, { keyframes } from 'styled-components';
// 고정 이너
const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const MainWrapper = styled.div`
  margin: 0px auto;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerTextwrap = styled.div`
  width: 100%;
  position: relative;
`;

export const TitleCircle = styled.span`
  font-size: 14px;
  padding: 10px 20px;
  border: 1px solid #1a1a1a;
  border-radius: 25px;
  font-family: 'montserrat';
  display: inline-block;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  color: #1a1a1a;
  & span {
    background: var(--text-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 30px;
  }
`;

export const TypedText = styled.span`
  font-size: 80px;
  font-weight: 400;
  font-family: 'montserrat';
  ~ .typed-cursor {
    font-size: 80px;
  }
`;

export const TypeTextwrap = styled.div`
  padding: 20px;
  display: block;
  font-size: 70px;
`;

export const DesignText = styled.div`
  font-size: 70px;
  position: absolute;
  filter: blur(10px);
  font-family: 'montserrat';

  font-weight: 600;
`;

export const NextJsText = styled(DesignText)`
  right: 5px;
  font-size: 80px;
  top: 30%;
  filter: blur(7px);
  color: #ddd;
  animation: ${bounceAnimation} 2s infinite alternate;
`;

export const FrontEndText = styled(DesignText)`
  filter: blur(7px);
  left: 0;
  font-size: 50px;
  top: 18%;
  color: #999;
  animation: ${bounceAnimation} 4s infinite alternate;
`;

export const TypeScript = styled(DesignText)`
  filter: blur(10px);
  bottom: 10%;
  left: 50%;
  color: #555;

  rotate: -10deg;
  font-size: 80px;
  animation: ${bounceAnimation} 3s infinite alternate;
`;

export const CodeText = styled(DesignText)`
  filter: blur(1px);
  rotate: 30deg;
  top: 10%;
  right: 20%;
  font-size: 80px;
  animation: ${bounceAnimation} 3s infinite alternate;
`;
