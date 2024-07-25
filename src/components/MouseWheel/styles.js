
import styled, { keyframes } from 'styled-components';

const  wheelAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(6px);
  }
`;

const  arrowsAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const  MouseScroll = styled.div`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;
  cursor: pointer;
`;

export const  Mouse = styled.div`
  height: 42px;
  width: 24px;
  border-radius: 14px;
  border: 2px solid white;
  top: 170px;
`;

export const  Wheel = styled.div`
  height: 4px;
  width: 4px;
  margin: 5px auto;
  background: white;
  position: relative;
  border: 2px solid #fff;
  border-radius: 8px;
  animation: ${wheelAnimation} 0.6s linear infinite;
`;

export const  ScrollArrows = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  margin: 0 0 3px 4px;
  animation: ${arrowsAnimation} 2.5s infinite;

  &:nth-child(1) {
    margin-top: 1px;
    animation-delay: 1s;
  }

  &:nth-child(2) {
    margin-top: -6px;
    animation-delay: 1.3s;
  }

  &:nth-child(3) {
    margin-top: -6px;
    animation-delay: 1.5s;
  }
`;