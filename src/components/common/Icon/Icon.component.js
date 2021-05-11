import React from 'react';
import {PinpoinxIcon, PinpoinxTouchable} from './Icon.styles';

export const Icon = ({width, height, source, ...props}) => {
  return (
    <PinpoinxTouchable activeOpacity={0.7} {...props}>
      <PinpoinxIcon width={width} height={height} source={source} />
    </PinpoinxTouchable>
  );
};
