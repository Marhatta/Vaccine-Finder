import {takeLatest, call, all, put} from 'redux-saga/effects';
import {TWITTER_BEARER_TOKEN} from '../../env.json';
import {GET_TWEETS} from './common.types';
import {getData} from '../utils/api';
import {getTweetsSuccess, getTweetsError} from './common.actions';

//==================GET: Tweets ===========================//
export function* getTweetsAsync({payload: data}) {
  try {
    let tweets = yield getData(
      'https://api.twitter.com/2/tweets/search/recent?query=covid19india&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source',
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
