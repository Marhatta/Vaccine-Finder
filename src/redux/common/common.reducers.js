import {GET_TWEETS, GET_TWEETS_SUCCESS, GET_TWEETS_ERROR} from './common.types';

const initialState = {
  loadingTweets: false,
  loadingTweetsSuccess: false,
  loadingTweetsError: false,
  tweets: null,
  tweetsError: null,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWEETS:
      return {
        ...state,
        loadingTweets: true,
      };
    case GET_TWEETS_SUCCESS:
      return {
        ...state,
        loadingTweets: false,
        loadingTweetsSuccess: true,
        tweets: action.payload,
      };
    case GET_TWEETS_ERROR:
      return {
        ...state,
        loadingTweets: false,
        loadingTweetsError: true,
        tweetsError: action.payload,
      };
    default:
      return state;
  }
};
export default commonReducer;
