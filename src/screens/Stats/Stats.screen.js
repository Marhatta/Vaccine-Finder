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
  CardCustomeColumn,
  ChartContainer,
} from './Stats.styles';

const Stats = ({navigation}) => {
  const theme = useTheme();
  return (
    <Layout navigation={navigation}>
      <Container>
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
                name: 'Above 60',
                population: 56177096,
                color: 'rgba(131, 167, 234, 1)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
              {
                name: '18-30',
                population: 7672198,
                color: '#F00',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
              {
                name: '30-45',
                population: 13689750,
                color: 'red',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
              {
                name: '45-60',
                population: 64201322,
                color: '#ffffff',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              },
            ]}
          />
        </ChartContainer>

        <ChartContainer>
          <Text>Vaccination - Category</Text>
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <Text>Gender</Text>
                </TabHeading>
              }>
              <ProgressChart
                data={{
                  labels: ['Male', 'Female', 'Others'], // optional
                  data: [0.4, 0.6, 0.8],
                }}
              />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text>Vaccine</Text>
                </TabHeading>
              }>
              <ProgressChart
                data={{
                  labels: ['Covishield', 'Covaxin'], // optional
                  data: [0.4, 0.6],
                }}
              />
            </Tab>
          </Tabs>
        </ChartContainer>

        <ChartContainer>
          <Text>Vaccination Coverage</Text>
          <StackedBarChart
            data={{
              labels: ['MH', 'JK', 'PB', 'DL', 'MP', 'RJ', 'KA', 'HR', 'HR'],
              legend: ['Dose 1', 'Dose 2'],
              data: [
                [60, 60],
                [30, 30],
                [60, 60],
                [30, 30],
                [60, 60],
                [30, 30],
                [60, 60],
                [30, 30],
                [60, 60],
              ],
              barColors: ['#7F7F7F', '#F00'],
            }}
          />
        </ChartContainer>
      </Container>
    </Layout>
  );
};

export default Stats;
