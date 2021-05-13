import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
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
  BookSlotContainer,
  ColorBox,
  ColorBoxContainer,
  TweetUpdatesContainer,
  TweetContainer,
} from './Home.styles';
import {strings} from '../../infrastructure/lang';
import {getTweets} from '../../redux/common/common.actions';
import {selectTweets} from '../../redux/common/common.selectors';

const Home = ({navigation, getTweets, tweets}) => {
  useEffect(() => {
    getTweets();
  }, [getTweets]);
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

        <BookSlotContainer activeOpacity={0.7}>
          <Text fontSize={`${hp('1.8%')}px`}>{strings.vaccinesWork}</Text>
          <Text>{strings.bookYourSlotsNow}</Text>
        </BookSlotContainer>

        <TweetUpdatesContainer horizontal>
          {tweets?.map(tweet => (
            <TweetContainer key={tweet.id}>
              {tweet?.retweeted_status?.entities?.media && (
                <Image
                  resizeMode="contain"
                  source={{
                    uri: tweet?.retweeted_status?.entities?.media[0]
                      ?.media_url_https,
                  }}
                  style={{
                    width: wp('65%'),
                    height: hp('22%'),
                    borderRadius: 10,
                  }}
                />
              )}
              <Text>
                {tweet?.retweeted_status
                  ? tweet.retweeted_status.text
                  : tweet.text}
              </Text>
            </TweetContainer>
          ))}
        </TweetUpdatesContainer>
      </Container>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  tweets: selectTweets,
});

export default connect(mapStateToProps, {getTweets})(Home);
