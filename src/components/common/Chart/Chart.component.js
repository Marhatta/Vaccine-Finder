import React from 'react';
import {XAxis} from 'react-native-svg-charts';
import {useTheme} from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text} from '../../common/Typography/Text.component';
import {
  CustomLineChart,
  SubLegendContainer,
  SubLegendColorBox,
} from './Chart.styles';
import {strings} from '../../../infrastructure/lang';

export const LineChart = ({data, height, color, strokeWidth, ...props}) => {
  const theme = useTheme();
  return (
    <>
      <CustomLineChart
        animate={true}
        data={data}
        svg={{
          stroke: color ? color : 'rgb(134, 65, 244)',
          strokeWidth: strokeWidth ? strokeWidth : 3,
        }}
        contentInset={{top: 20, bottom: 20}}
        {...props}
      />
      <XAxis
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{left: 10, right: 10}}
        svg={{fontSize: 10, fill: theme.colors.text.secondary}}
      />
      <SubLegendContainer>
        <Text fontSize={`${hp('1.8%')}px`} color={theme.colors.text.secondary}>
          {strings.totalCases}
        </Text>
        <SubLegendColorBox color={color} />
      </SubLegendContainer>
    </>
  );
};
