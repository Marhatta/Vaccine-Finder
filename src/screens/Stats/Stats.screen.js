import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {PureChart} from '../../components/common/Chart/Chart.component';
import {PickerNew} from '../../components/common/Picker/Picker.component';
import {StatsCard, Container, CardCustomeColumn} from './Stats.styles';

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
      </Container>
    </Layout>
  );
};

export default Stats;
