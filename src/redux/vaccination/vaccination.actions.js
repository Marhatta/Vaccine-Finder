import {
  GET_VACCINATION_CENTERS_BY_PINCODE,
  GET_VACCINATION_CENTERS_BY_DISTRICT,
  GET_VACCINATION_CENTERS_SUCCESS,
  GET_VACCINATION_CENTERS_ERROR,
} from './vaccination.types';

export const getVaccinationCentersByPincode = (pincode, date) => {
  return {
    type: GET_VACCINATION_CENTERS_BY_PINCODE,
    payload: {pincode, date},
  };
};

export const getVaccinationCentersByDistrict = (stateId, districtId) => {
  return {
    type: GET_VACCINATION_CENTERS_BY_DISTRICT,
    payload: (stateId, districtId),
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
