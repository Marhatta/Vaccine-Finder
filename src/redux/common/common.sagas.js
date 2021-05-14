import {takeLatest, call, all, put} from 'redux-saga/effects';
import {TWITTER_BEARER_TOKEN} from '../../env.json';
import {GET_TWEETS} from './common.types';
import {getData} from '../utils/api';
import {getTweetsSuccess, getTweetsError} from './common.actions';

//==================GET: Tweets ===========================//
export function* getTweetsAsync({payload: data}) {
  try {
    let tweets = yield getData(
      'https://api.twitter.com/1.1/search/tweets.json?q=(covid19 india #covid19) or (india #sos covid19) filter:media covaxin covisheild max_tweets=1&tweet_mode=extended',
      {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    );
    if (tweets) {
      yield put(getTweetsSuccess(tweets));
    } else {
    }
  } catch (error) {
    yield put(getTweetsError(error));
  }
}

export function* getTweets() {
  yield takeLatest(GET_TWEETS, getTweetsAsync);
}
//=======================================================//

//=======================================================//
export function* commonSagas() {
  yield all([call(getTweets)]);
}
