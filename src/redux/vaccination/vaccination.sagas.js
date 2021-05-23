import {takeLatest, call, all, put} from 'redux-saga/effects';
import {
  GET_VACCINATION_CENTERS_BY_PINCODE,
  GET_VACCINATION_CENTERS_BY_DISTRICT,
} from './vaccination.types';
import {getData} from '../utils/api';
import {
  getVaccinationCentersSuccess,
  getVaccinationCentersError,
} from './vaccination.actions';

//==================GET: Vaccination Center By Pincode ===========================//
export function* getVaccinationCentersByPincodeAsync({payload}) {
  try {
    let centers = yield getData(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${payload.pincode}&date=${payload.date}`,
    );
    if (centers) {
      yield put(
        getVaccinationCentersSuccess([
          {
            date: payload.date,
            sessions: centers.sessions,
          },
        ]),
      );
    } else {
    }
  } catch (error) {
    console.log(error);
    yield put(getVaccinationCentersError(error));
  }
}

export function* getVaccinationCentersByPincode() {
  yield takeLatest(
    GET_VACCINATION_CENTERS_BY_PINCODE,
    getVaccinationCentersByPincodeAsync,
  );
}
//========================================================================//

//==================GET: Vaccination Center By District ===========================//
export function* getVaccinationCentersByDistrictAsync() {
  try {
    // let report = yield getData('https://api.covid19india.org/data.json');
    // if (report) {
    //   yield put(getVaccinationCentersSuccess(report));
    // } else {
    // }
  } catch (error) {
    yield put(getVaccinationCentersError(error));
  }
}

export function* getVaccinationCentersByDistrict() {
  yield takeLatest(
    GET_VACCINATION_CENTERS_BY_DISTRICT,
    getVaccinationCentersByDistrictAsync,
  );
}
//=====================================================================//

//=====================================================================//
export function* vaccinationSagas() {
  yield all([
    call(getVaccinationCentersByPincode),
    call(getVaccinationCentersByDistrict),
  ]);
}
