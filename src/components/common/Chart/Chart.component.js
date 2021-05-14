import React from 'react';
import {Grid} from 'react-native-svg-charts';
import {CustomLineChart} from './Chart.styles';

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
