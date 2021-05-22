import {all, call} from 'redux-saga/effects';
import {commonSagas} from './common/common.sagas';
import {statsSagas} from './stats/stats.sagas';
import {vaccinationSagas} from './vaccination/vaccination.sagas';

export default function* rootSaga() {
  yield all([call(commonSagas), call(statsSagas), call(vaccinationSagas)]);
}
