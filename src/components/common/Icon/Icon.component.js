import React from 'react';
import {CustomIcon, CustomTouchable, CustomNativeBaseIcon} from './Icon.styles';

export const Icon = ({width, height, source, color, ...props}) => {
  return (
    <CustomTouchable activeOpacity={0.7} {...props}>
      <CustomIcon width={width} height={height} source={source} />
    </CustomTouchable>
  );
};

export const NativeBaseIcon = ({...props}) => {
  return <CustomNativeBaseIcon {...props} />;
};
