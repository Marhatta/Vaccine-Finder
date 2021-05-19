import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {CustomLineChart, CustomPieChart} from './Chart.styles';

export const LineChart = ({data, height, verticalLabelRotation, ...props}) => {
  const theme = useTheme();
  let chartConfig = {
    backgroundGradientFrom: theme.colors.bg.primary,
    backgroundGradientTo: theme.colors.bg.primary,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: () => theme.colors.text.secondary,
    labelColor: () => theme.colors.text.secondary,
    propsForDots: {
      r: '2',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <CustomLineChart
      data={data}
      width={wp('100%')} // from react-native
      height={height ? height : 200}
      yAxisSuffix="k"
      yAxisInterval={10} // optional, defaults to 1
      withShadow
      withInnerLines={false}
      chartConfig={chartConfig}
      verticalLabelRotation={verticalLabelRotation ? verticalLabelRotation : 30}
      bezier
      {...props}>
      {' '}
    </CustomLineChart>
  );
};

export const PieChart = ({data, height, ...props}) => {
  let chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <CustomPieChart
      data={data}
      width={wp('100%')}
      height={height ? height : 250}
      chartConfig={chartConfig}
      accessor={'population'}
      backgroundColor={'transparent'}
      paddingLeft={wp('3%')}
      {...props}
    />
  );
};
