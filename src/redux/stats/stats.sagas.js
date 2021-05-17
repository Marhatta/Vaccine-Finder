import {takeLatest, call, all, put} from 'redux-saga/effects';
import {GET_COWIN_PUBLIC_REPORT} from './stats.types';
import {getData} from '../utils/api';
import {
  getCowinPublicReportSuccess,
  getCowinPublicReportError,
} from './stats.actions';

//==================GET: Cowin Public Report ===========================//
export function* getCowinPublicReportAsync() {
  try {
    let report = yield getData(
      'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports',
    );
    if (report) {
      yield put(getCowinPublicReportSuccess(report));
    } else {
    }
  } catch (error) {
    yield put(getCowinPublicReportError(error));
  }
}

export function* getCowinPublicReport() {
  yield takeLatest(GET_COWIN_PUBLIC_REPORT, getCowinPublicReportAsync);
}
//=======================================================//

//=======================================================//
export function* statsSagas() {
  yield all([call(getCowinPublicReport)]);
}
