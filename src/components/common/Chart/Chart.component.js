import React from 'react';
import {Grid} from 'react-native-svg-charts';
import {useTheme} from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import {CustomLineChart, CustomPureChart} from './Chart.styles';

export const LineChart = ({data, height, color, strokeWidth, ...props}) => {
  return (
    <CustomLineChart
      animate={true}
      data={data}
      svg={{
        stroke: color ? color : 'rgb(134, 65, 244)',
        strokeWidth: strokeWidth ? strokeWidth : 3,
      }}
      contentInset={{top: 20, bottom: 20}}
      {...props}>
      <Grid />
    </CustomLineChart>
  );
};

export const PureChart = ({type, data, height, ...props}) => {
  const theme = useTheme();
  return (
    <CustomPureChart
      type={type}
      data={data}
      backgroundColor={theme.colors.bg.primary}
      height={height ? height : 200}
      width={`${hp('100%')}px`}
      defaultColumnWidth={50}
      defaultColumnMargin={40}
      numberOfYAxisGuideLine={10}
      numberOfXAxisGuideLine={10}
      {...props}
    />
  );
};
