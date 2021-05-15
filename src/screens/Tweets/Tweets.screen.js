import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createStructuredSelector} from 'reselect';
import {TweetUpdatesContainer, TweetContainer} from './Tweets.styles';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Text} from '../../components/common/Typography/Text.component';
import {selectTweets} from '../../redux/common/common.selectors';
import {getTweets} from '../../redux/common/common.actions';

const Tweets = ({navigation, getTweets, tweets}) => {
  useEffect(() => {
    getTweets();
  }, [getTweets]);
  return (
    <Layout>
      <TweetUpdatesContainer>
        {tweets?.data?.map(tweet => (
          <TweetContainer key={tweet.id}>
            <Image
              resizeMode="contain"
              source={{
                uri: tweet[0]?.entities?.urls[0]?.images[0]?.url,
              }}
              style={{
                width: wp('65%'),
                height: hp('22%'),
                borderRadius: 10,
              }}
            />
            <Text>{tweet.text}</Text>
          </TweetContainer>
        ))}
      </TweetUpdatesContainer>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  tweets: selectTweets,
});

export default connect(mapStateToProps, {getTweets})(Tweets);
