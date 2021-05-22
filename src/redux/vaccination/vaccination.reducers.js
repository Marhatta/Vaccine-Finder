import {
  GET_VACCINATION_CENTERS_BY_PINCODE,
  GET_VACCINATION_CENTERS_BY_DISTRICT,
  GET_VACCINATION_CENTERS_SUCCESS,
  GET_VACCINATION_CENTERS_ERROR,
  SET_SEARCH_BY,
} from './vaccination.types';

const initialState = {
  loadingVaccinationCenters: true,
  loadingVaccinationCentersSuccess: false,
  loadingVaccinationCentersError: false,
  vaccinationCenters: null,
  VaccinationCentersError: null,
  search: null,
};

const vaccinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VACCINATION_CENTERS_BY_PINCODE:
      return {
        ...state,
        loadingVaccinationCenters: true,
      };
    case GET_VACCINATION_CENTERS_BY_DISTRICT:
      return {
        ...state,
        loadingVaccinationCenters: true,
      };
    case GET_VACCINATION_CENTERS_SUCCESS:
      return {
        ...state,
        vaccinationCenters: action.payload,
        loadingVaccinationCenters: false,
        loadingVaccinationCentersSuccess: true,
      };
    case GET_VACCINATION_CENTERS_ERROR:
      return {
        ...state,
        loadingVaccinationCenters: false,
        loadingVaccinationCentersError: true,
        VaccinationCentersError: action.payload,
      };
    case SET_SEARCH_BY:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export default vaccinationReducer;
