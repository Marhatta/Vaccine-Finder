import {GET_TWEETS, GET_TWEETS_ERROR, GET_TWEETS_SUCCESS} from './common.types';

export const getTweets = maxTweetCount => {
  return {
    type: GET_TWEETS,
    payload: maxTweetCount,
  };
};

export const getTweetsSuccess = tweets => {
  return {
    type: GET_TWEETS_SUCCESS,
    payload: tweets,
  };
};

export const getTweetsError = error => {
  return {
    type: GET_TWEETS_ERROR,
    payload: error,
  };
};
