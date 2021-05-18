import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Tab, Tabs, TabHeading} from 'native-base';
import {
  LineChart,
  PieChart,
  ProgressChart,
  StackedBarChart,
} from '../../components/common/Chart/Chart.component';
import {
  StatsCard,
  Container,
  CardCustomColumn,
  ChartContainer,
} from './Stats.styles';

const Stats = ({navigation}) => {
  const theme = useTheme();
  return (
    <Layout navigation={navigation}>
      <Container showsVerticalScrollIndicator={false}>
        <StatsCard>
          <CardCustomColumn width="15%">
            <Icon
              width={`${hp('8%')}px`}
              height={`${hp('8%')}px`}
              source={require('../../assets/icons/syringe.png')}
              color={theme.colors.ui.primary}
            />
          </CardCustomColumn>
          <CardCustomColumn width="40%">
            <Text
              fontSize={`${hp('2%')}px`}
              color={theme.colors.text.secondary}>
              Total Vaccination Doses
            </Text>
            <Text variant="caption">17,96,52,123</Text>
          </CardCustomColumn>
          <CardCustomColumn width="35%">
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
          </CardCustomColumn>
        </StatsCard>

        <ChartContainer>
          <Text>Vaccination Trends</Text>
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
          />
        </ChartContainer>

        <ChartContainer>
          <Text>Vaccination by Age</Text>
          <PieChart
            data={[
              {
                name: ', Above 60',
                population: 56177096,
                color: '#e84545',
                legendFontColor: theme.colors.text.secondary,
                legendFontSize: wp('3%'),
                legendFontFamily: 'Poppins-Regular',
              },
              {
                name: ', 18-30',
                population: 7672198,
                color: '#b6c9f0',
                legendFontColor: theme.colors.text.secondary,
                legendFontSize: wp('3%'),
                legendFontFamily: 'Poppins-Regular',
              },
              {
                name: ', 30-45',
                population: 13689750,
                color: '#233e8b',
                legendFontColor: theme.colors.text.secondary,
                legendFontSize: wp('3%'),
                legendFontFamily: 'Poppins-Regular',
              },
              {
                name: ', 45-60',
                population: 64201322,
                color: '#94d0cc',
                legendFontColor: theme.colors.text.secondary,
                legendFontSize: wp('3%'),
                legendFontFamily: 'Poppins-Regular',
              },
            ]}
          />
        </ChartContainer>

        <Text>Vaccination - Category</Text>
        <Tabs style={{height: hp('35%')}}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: theme.colors.bg.secondary}}>
                <Text fontSize={`${hp('2%')}px`}>Gender</Text>
              </TabHeading>
            }>
            <ProgressChart
              height={hp('30%')}
              data={{
                labels: ['Male', 'Female', 'Others'], // optional
                data: [0.4, 0.6, 0.8],
                colors: ['#e84545', '#233e8b', '#94d0cc'],
              }}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: theme.colors.bg.secondary}}>
                <Text fontSize={`${hp('2%')}px`}>Vaccine</Text>
              </TabHeading>
            }>
            <ProgressChart
              height={hp('30%')}
              data={{
                labels: ['Covishield', 'Covaxin'], // optional
                data: [0.4, 0.6],
                colors: ['#233e8b', '#94d0cc'],
              }}
            />
          </Tab>
        </Tabs>

        <ChartContainer>
          <Text>Vaccination Coverage</Text>
          <StackedBarChart
            data={{
              labels: ['MH', 'JK', 'PB', 'DL', 'MP', 'RJ', 'KA', 'HR', 'HR'],
              legend: ['Dose 1', 'Dose 2'],
              data: [
                [60, 60],
                [70, 30],
                [60, 60],
                [30, 30],
                [60, 60],
                [30, 30],
                [60, 60],
                [30, 30],
                [60, 60],
              ],
              barColors: ['#233e8b', '#94d0cc'],
            }}
            stacked
          />
        </ChartContainer>
      </Container>
    </Layout>
  );
};

export default Stats;
