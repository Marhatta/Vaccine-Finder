import React from 'react';
import {Icon} from 'native-base';
import {useTheme} from 'styled-components/native';

import {CustomPicker} from './Picker.styles';

export const Picker = ({placeholder, selectedValue, data, ...props}) => {
  const theme = useTheme();
  console.log('data---', data);
  const items = [];

  for (const item of data) {
    items.push(<CustomPicker.Item label={item.label} value={item.value} />);
  }
  return (
    <CustomPicker
      mode="dropdown"
      iosIcon={<Icon name="arrow-down" />}
      selectedValue={selectedValue}
      onValueChange={text => {
        selectedValue = text;
      }}
      placeholder={placeholder}
      iosHeader={placeholder}>
      {items}
    </CustomPicker>
  );
};
