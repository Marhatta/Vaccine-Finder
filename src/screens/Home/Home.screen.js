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
  const confirmed = [10, 20, 40, 55, 85, 91, 105, 200, 300, 400, 450, 490, 500];
  const deaths = [
    10, 90, 100, 155, 170, 180, 190, 300, 340, 400, 450, 490, 600,
  ];
  const recovered = [
    40, 90, 200, 255, 385, 399, 456, 500, 530, 540, 560, 588, 600,
  ];

  const data = [
    {
      data: confirmed,
    },
    {
      data: deaths,
      svg: {stroke: '#fada5e'},
    },
    {
      data: recovered,
      svg: {stroke: theme.colors.ui.primary},
    },
  ];
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
          <LineChart data={data} />
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
