import {takeLatest, call, all, put} from 'redux-saga/effects';
import {
  GET_VACCINATION_CENTERS_BY_PINCODE,
  GET_VACCINATION_CENTERS_BY_DISTRICT,
  GET_VACCINATION_STATES,
  GET_VACCINATION_DISTRICTS,
} from './vaccination.types';
import {getData} from '../utils/api';
import {
  getVaccinationCentersSuccess,
  getVaccinationCentersError,
  getVaccinationStatesSuccess,
  getVaccinationStatesError,
  getVaccinationDistrictsSuccess,
  getVaccinationDistrictsError,
} from './vaccination.actions';

//==================GET: Vaccination States ===========================//
export function* getStatesAsync() {
  try {
    let states = yield getData(
      'https://cdn-api.co-vin.in/api/v2/admin/location/states',
    );
    if (states) {
      yield put(getVaccinationStatesSuccess(states.states));
    } else {
    }
  } catch (error) {
    console.log(error);
    yield put(getVaccinationStatesError(error));
  }
}

export function* getStates() {
  yield takeLatest(GET_VACCINATION_STATES, getStatesAsync);
}

//==================GET: Vaccination Districts ===========================//
export function* getDistrictsAsync({payload: stateId}) {
  try {
    let districts = yield getData(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`,
    );
    if (districts) {
      yield put(getVaccinationDistrictsSuccess(districts.districts));
    } else {
    }
  } catch (error) {
    console.log(error);
    yield put(getVaccinationDistrictsError(error));
  }
}

export function* getDistricts() {
  yield takeLatest(GET_VACCINATION_DISTRICTS, getDistrictsAsync);
}

//==================GET: Vaccination Center By Pincode ===========================//
export function* getVaccinationCentersByPincodeAsync({payload}) {
  try {
    let centers = yield getData(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${payload.pincode}&date=${payload.date}`,
    );
    if (centers) {
      yield put(getVaccinationCentersSuccess(centers.centers));
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
export function* getVaccinationCentersByDistrictAsync({payload}) {
  try {
    let centers = yield getData(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${payload.districtId}&date=${payload.date}`,
    );
    if (centers) {
      yield put(getVaccinationCentersSuccess(centers.sessions));
    } else {
    }
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
    call(getStates),
    call(getDistricts),
  ]);
}
