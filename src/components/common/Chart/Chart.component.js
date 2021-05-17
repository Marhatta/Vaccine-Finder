import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {
  CustomLineChart,
  CustomPieChart,
  CustomProgressChart,
  CustomBarChart,
  CustomStackedBarChart,
} from './Chart.styles';

export const LineChart = ({data, height, verticalLabelRotation, ...props}) => {
  const theme = useTheme();
  let chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: theme.colors.bg.primary,
    backgroundGradientTo: theme.colors.bg.secondary,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
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
      yAxisInterval={1} // optional, defaults to 1
      withInnerLines={false}
      chartConfig={chartConfig}
      verticalLabelRotation={verticalLabelRotation ? verticalLabelRotation : 30}
      bezier
      onDataPointClick={({value, dataset, getColor}) => {
        console.log(value, dataset, getColor);
      }}
      {...props}
    />
  );
};

export const PieChart = ({data, height, ...props}) => {
  const theme = useTheme();
  let chartConfig = {
    backgroundGradientFrom: theme.colors.bg.primary,
    backgroundGradientTo: theme.colors.bg.secondary,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '2',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <CustomPieChart
      data={data}
      width={wp('92%')}
      height={height ? height : 250}
      chartConfig={chartConfig}
      accessor={'population'}
      backgroundColor={'transparent'}
      paddingLeft={'15'}
      absolute
      {...props}
    />
  );
};

export const ProgressChart = ({data, height, ...props}) => {
  const theme = useTheme();
  let chartConfig = {
    backgroundGradientFrom: theme.colors.bg.primary,
    backgroundGradientTo: theme.colors.bg.secondary,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '2',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <CustomProgressChart
      data={data}
      width={wp('100%')}
      height={height ? height : 250}
      chartConfig={chartConfig}
      strokeWidth={16}
      radius={32}
      {...props}
    />
  );
};

export const BarChart = ({data, height, ...props}) => {
  const theme = useTheme();
  let chartConfig = {
    backgroundGradientFrom: theme.colors.bg.primary,
    backgroundGradientTo: theme.colors.bg.secondary,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '2',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <CustomBarChart
      data={data}
      width={wp('100%')}
      height={height ? height : 250}
      chartConfig={chartConfig}
      yAxisLabel="$"
      verticalLabelRotation={30}
      {...props}
    />
  );
};

export const StackedBarChart = ({data, height, ...props}) => {
  const theme = useTheme();
  let chartConfig = {
    backgroundGradientFrom: theme.colors.bg.primary,
    backgroundGradientTo: theme.colors.bg.secondary,
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '2',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <CustomStackedBarChart
      data={data}
      width={wp('100%')}
      height={height ? height : 250}
      chartConfig={chartConfig}
      paddingLeft={'15'}
      {...props}
    />
  );
};