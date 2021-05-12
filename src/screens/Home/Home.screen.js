import React from 'react';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {LineChart} from '../../components/common/Chart/Chart.component';
import {
  StatsCard,
  Container,
  StatsCardColumn,
  ChartContainer,
} from './Home.styles';

const Home = ({navigation}) => {
  const theme = useTheme();
  const data = [10, 20, 40, 55, 85, 91, 105, 200, 300, 400, 450, 490, 500];
  return (
    <Layout navigation={navigation}>
      <Container>
        <StatsCard>
          <StatsCardColumn>
            <Text variant="caption">45078000</Text>
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Confirmed Cases
            </Text>
          </StatsCardColumn>
          <StatsCardColumn>
            <Text variant="caption">247000</Text>
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Deaths
            </Text>
          </StatsCardColumn>
          <StatsCardColumn>
            <Text variant="caption">2500000</Text>
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Recovered
            </Text>
          </StatsCardColumn>
        </StatsCard>

        <ChartContainer>
          <LineChart data={data} />
        </ChartContainer>
      </Container>
    </Layout>
  );
};

export default Home;
