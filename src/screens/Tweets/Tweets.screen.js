import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useTheme} from 'styled-components/native';
import {
  TweetContainer,
  TweetImage,
  ProfileContainer,
  ProfilePicture,
} from './Tweets.styles';
import {TweetSkeleton} from '../../components/common/Skeleton/Skeleton.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Text} from '../../components/common/Typography/Text.component';
import {selectTweets} from '../../redux/common/common.selectors';
import {getTweets} from '../../redux/common/common.actions';

const Tweets = ({navigation, getTweets, tweets}) => {
  useEffect(() => {
    getTweets();
  }, []);

  const theme = useTheme();
  console.log(tweets);
  return (
    <Layout>
      {tweets.loading ? (
        <TweetSkeleton />
      ) : (
        <FlatList
          data={tweets.tweetList?.data?.data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            const userProfile = tweets.tweetList.data.includes.users[index];
            const tweetMedia = tweets.tweetList.data.includes.media[index];
            return (
              <TweetContainer key={item.id}>
                {userProfile && (
                  <ProfileContainer>
                    <ProfilePicture
                      small
                      source={{
                        uri: userProfile.profile_image_url,
                      }}
                    />
                    <Text variant="label" color={theme.colors.text.secondary}>
                      {userProfile.name}
                    </Text>
                  </ProfileContainer>
                )}
                {tweetMedia.url && (
                  <TweetImage
                    resizeMode="stretch"
                    source={{
                      uri: tweetMedia.url,
                    }}
                  />
                )}
                <Text variant="caption" selectable={true}>
                  {item.text}
                </Text>
              </TweetContainer>
            );
          }}
        />
      )}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  tweets: selectTweets,
});

export default connect(mapStateToProps, {getTweets})(Tweets);
