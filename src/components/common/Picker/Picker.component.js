import React from 'react';
import {Picker, Icon} from 'native-base';
import {CustomPicker} from './Picker.styles';

export const PickerNew = () => {
  return (
    <CustomPicker
      mode="dropdown"
      placeholder="Select your SIM"
      iosIcon={<Icon name="arrow-down" />}
      // eslint-disable-next-line react-native/no-inline-styles
      textStyle={{color: '#5cb85c'}}
      // eslint-disable-next-line react-native/no-inline-styles
      itemStyle={{
        backgroundColor: '#d3d3d3',
        marginLeft: 0,
        paddingLeft: 10,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      itemTextStyle={{color: '#788ad2'}}>
      <Picker.Item label="Wallet" value="key0" />
      <Picker.Item label="ATM Card" value="key1" />
      <Picker.Item label="Debit Card" value="key2" />
      <Picker.Item label="Credit Card" value="key3" />
      <Picker.Item label="Net Banking" value="key4" />
    </CustomPicker>
  );
};
