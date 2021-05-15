import {createSelector} from 'reselect';

const selectCommon = state => state.common;

export const selectTweets = createSelector(
  [selectCommon],
  common => common.tweets,
);
