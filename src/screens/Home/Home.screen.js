import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {LineChart} from '../../components/common/Chart/Chart.component';
import {
  StatsCard,
  Container,
  StatsCardColumn,
  ChartContainer,
  BookSlotContainer,
  ColorBox,
  ColorBoxContainer,
  CardCustomeColumn,
} from './Home.styles';
import {strings} from '../../infrastructure/lang';

const Home = ({navigation}) => {
  const theme = useTheme();
  return (
    <Layout navigation={navigation}>
      <Container>
        <StatsCard>
          <StatsCardColumn>
            <Text variant="caption">45078000</Text>
            <ColorBoxContainer>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Confirmed Cases
              </Text>
              <ColorBox color={'rgb(134, 65, 244)'} />
            </ColorBoxContainer>
          </StatsCardColumn>
          <StatsCardColumn>
            <Text variant="caption">24700 0</Text>
            <ColorBoxContainer>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Deaths
              </Text>
              <ColorBox color={'#fada5e'} />
            </ColorBoxContainer>
          </StatsCardColumn>
          <StatsCardColumn>
            <Text variant="caption">2500000</Text>
            <ColorBoxContainer>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Recovered
              </Text>
              <ColorBox color={theme.colors.ui.primary} />
            </ColorBoxContainer>
          </StatsCardColumn>
        </StatsCard>

        <ChartContainer>
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
                  data: [1, 7, 6, 4, 2, 5],
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(134, 65, 244,${opacity})`, // optional
                },
                {
                  data: [2, 4, 6, 8, 8, 2],
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(255,255,0, ${opacity})`, // optional
                },
                {
                  data: [9, 4, 7, 8, 2, 4],
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(0,255,0, ${opacity})`, // optional
                },
              ],
            }}
          />
        </ChartContainer>

        <StatsCard>
          <CardCustomeColumn width="15%">
            <Icon
              width={`${hp('8%')}px`}
              height={`${hp('8%')}px`}
              source={require('../../assets/icons/hospital.png')}
            />
          </CardCustomeColumn>
          <CardCustomeColumn width="40%">
            <Text
              fontSize={`${hp('2%')}px`}
              color={theme.colors.text.secondary}>
              Sites Conducting Vaccination
            </Text>
            <Text variant="caption">48,166</Text>
          </CardCustomeColumn>
          <CardCustomeColumn width="35%">
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Goverment
            </Text>
            <Text variant="caption">45,11,9112</Text>
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Private
            </Text>
            <Text variant="caption">2,255</Text>
          </CardCustomeColumn>
        </StatsCard>

        <StatsCard>
          <CardCustomeColumn width="15%">
            <Icon
              width={`${hp('8%')}px`}
              height={`${hp('8%')}px`}
              source={require('../../assets/icons/group.png')}
            />
          </CardCustomeColumn>
          <CardCustomeColumn width="40%">
            <Text
              fontSize={`${hp('2%')}px`}
              color={theme.colors.text.secondary}>
              Total Registration
            </Text>
            <Text variant="caption">20,96,96,365</Text>
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
            <Text variant="caption">13,22,64,26,122</Text>
          </CardCustomeColumn>
        </StatsCard>

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

        <BookSlotContainer activeOpacity={0.7}>
          <Text fontSize={`${hp('1.8%')}px`}>{strings.vaccinesWork}</Text>
          <Text>{strings.bookYourSlotsNow}</Text>
        </BookSlotContainer>
      </Container>
    </Layout>
  );
};

export default Home;
