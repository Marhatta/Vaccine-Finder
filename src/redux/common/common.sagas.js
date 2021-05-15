import {takeLatest, call, all, put} from 'redux-saga/effects';
import {TWITTER_BEARER_TOKEN} from '../../env.json';
import {GET_TWEETS} from './common.types';
import {getData} from '../utils/api';
import {getTweetsSuccess, getTweetsError} from './common.actions';

//==================GET: Tweets ===========================//
export function* getTweetsAsync({payload: data}) {
  console.log('==next== ', data);
  try {
    let tweets = yield getData(
      'https://api.twitter.com/2/tweets/search/recent?query=covid19 india vaccine has:media -is:retweet is:verified lang:en&expansions=author_id,attachments.media_keys&media.fields=media_key,type,url&tweet.fields=entities&user.fields=profile_image_url&max_results=30',
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
