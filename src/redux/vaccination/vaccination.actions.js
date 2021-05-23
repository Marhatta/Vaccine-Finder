import {
  GET_VACCINATION_CENTERS_BY_PINCODE,
  GET_VACCINATION_CENTERS_BY_DISTRICT,
  GET_VACCINATION_CENTERS_SUCCESS,
  GET_VACCINATION_CENTERS_ERROR,
  GET_VACCINATION_STATES,
  GET_VACCINATION_STATES_SUCCESS,
  GET_VACCINATION_STATES_ERROR,
  GET_VACCINATION_DISTRICTS,
  GET_VACCINATION_DISTRICTS_SUCCESS,
  GET_VACCINATION_DISTRICTS_ERROR,
} from './vaccination.types';

export const getVaccinationCentersByPincode = (pincode, date) => {
  return {
    type: GET_VACCINATION_CENTERS_BY_PINCODE,
    payload: {pincode, date},
  };
};

export const getVaccinationCentersByDistrict = (districtId, date) => {
  return {
    type: GET_VACCINATION_CENTERS_BY_DISTRICT,
    payload: {districtId, date},
  };
};

export const getVaccinationCentersSuccess = centers => {
  return {
    type: GET_VACCINATION_CENTERS_SUCCESS,
    payload: centers,
  };
};

export const getVaccinationCentersError = error => {
  return {
    type: GET_VACCINATION_CENTERS_ERROR,
    payload: error.message,
  };
};

export const getVaccinationStates = () => {
  return {
    type: GET_VACCINATION_STATES,
  };
};

export const getVaccinationStatesSuccess = states => {
  return {
    type: GET_VACCINATION_STATES_SUCCESS,
    payload: states,
  };
};

export const getVaccinationStatesError = error => {
  return {
    type: GET_VACCINATION_STATES_ERROR,
    payload: error.message,
  };
};

export const getVaccinationDistricts = stateId => {
  return {
    type: GET_VACCINATION_DISTRICTS,
    payload: stateId,
  };
};

export const getVaccinationDistrictsSuccess = districts => {
  return {
    type: GET_VACCINATION_DISTRICTS_SUCCESS,
    payload: districts,
  };
};

export const getVaccinationDistrictsError = error => {
  return {
    type: GET_VACCINATION_DISTRICTS_ERROR,
    payload: error.message,
  };
};