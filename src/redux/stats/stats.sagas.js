import {takeLatest, call, all, put} from 'redux-saga/effects';
import {GET_COVID19INDIA_REPORT, GET_COWIN_PUBLIC_REPORT} from './stats.types';
import {getData} from '../utils/api';
import {
  getCowinPublicReportSuccess,
  getCowinPublicReportError,
  getCovid19IndiaReportSuccess,
  getCovid19IndiaReportError,
} from './stats.actions';

//==================GET: Cowin Public Report ===========================//
export function* getCowinPublicReportAsync({payload: stateId}) {
  console.log(stateId);
  try {
    let report = yield getData(
      !stateId
        ? 'https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports'
        : `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${stateId}`,
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
//========================================================================//

//==================GET: Covid 19 India Report ===========================//
export function* getCovid19IndiaReportAsync() {
  try {
    let report = yield getData('https://api.covid19india.org/data.json');
    if (report) {
      yield put(getCovid19IndiaReportSuccess(report));
    } else {
    }
  } catch (error) {
    yield put(getCovid19IndiaReportError(error));
  }
}

export function* getCovid19IndiaReport() {
  yield takeLatest(GET_COVID19INDIA_REPORT, getCovid19IndiaReportAsync);
}
//=====================================================================//

//=====================================================================//
export function* statsSagas() {
  yield all([call(getCowinPublicReport), call(getCovid19IndiaReport)]);
}
