import React from 'react';
import {Item, Input} from 'native-base';
import {PinpoinxLabel} from './Input.styles';
import {strings} from '../../../infrastructure/lang';

export const StackedInput = ({color, fontSize, ...props}) => {
  return (
    <Item stackedLabel>
      <PinpoinxLabel color={color} fontSize={fontSize}>
        {strings.emailAddress}
      </PinpoinxLabel>
      <Input {...props} />
    </Item>
  );
};
