import React from 'react';
import { MouseScroll, Mouse, Wheel, ScrollArrows } from './styles';

const MouseWheel = ({onClick}) => {
  return (
    <MouseScroll onClick={onClick}>
      <Mouse>
        <Wheel />
      </Mouse>
      <div>
        <ScrollArrows />
        <ScrollArrows />
        <ScrollArrows />
      </div>
    </MouseScroll>
  );
};

export { MouseWheel };