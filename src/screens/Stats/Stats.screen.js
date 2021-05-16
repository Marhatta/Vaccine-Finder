import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {PureChart} from '../../components/common/Chart/Chart.component';
import {PickerNew} from '../../components/common/Picker/Picker.component';
import {StatsCard, Container, CardCustomeColumn} from './Stats.styles';
import {LineChart} from 'react-native-chart-kit';

const Stats = ({navigation}) => {
  const theme = useTheme();
  let lineChartData = [
    {seriesName: 'series1', data: [30, 200, 170, 250, 10], color: '#297AB1'},
    {seriesName: 'series2', data: [20, 100, 150, 130, 15], color: 'yellow'},
  ];
  let pieChartData = [
    {
      value: 50,
      label: '18-20',
      color: theme.colors.ui.primary,
    },
    {
      value: 40,
      label: '30-45',
      color: '#fada5e',
    },
    {
      value: 25,
      label: 'Above 60',
      color: 'green',
    },
  ];
  return (
    <Layout navigation={navigation}>
      <Container>
        {/* <PickerNew /> */}
        <StatsCard>
          <CardCustomeColumn width="15%">
            <Icon
              width={`${hp('8%')}px`}
              height={`${hp('8%')}px`}
              source={require('../../assets/icons/syringe.png')}
              color={theme.colors.ui.primary}
            />
          </CardCustomeColumn>
          <CardCustomeColumn width="40%">
            <Text
              fontSize={`${hp('2%')}px`}
              color={theme.colors.text.secondary}>
              Total Vaccination Doses
            </Text>
            <Text variant="caption">17,96,52,123</Text>
          </CardCustomeColumn>
          <CardCustomeColumn width="35%">
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Age 18-44
            </Text>
            <Text variant="caption">7,32,70,243</Text>
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Age 45+
            </Text>
            <Text variant="caption">13,64,26,122</Text>
          </CardCustomeColumn>
        </StatsCard>
        <PureChart data={lineChartData} type="line" />
        <PureChart data={pieChartData} type="pie" />

        <LineChart
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sept',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={wp('100%')} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          withInnerLines={false}
          onDataPointClick={({value, dataset, getColor}) => {
            console.log(value, dataset, getColor);
          }}
          chartConfig={{
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
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </Container>
    </Layout>
  );
};

export default Stats;
