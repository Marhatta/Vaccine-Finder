import {createSelector} from 'reselect';

const selectCommon = state => state.common;

export const selectTweets = createSelector([selectCommon], common => {
  return {
    loading: common.loadingTweets,
    loadingSuccess: common.loadingTweetsSuccess,
    loadingError: common.loadingTweetsError,
    tweetList: common.tweets,
  };
});
