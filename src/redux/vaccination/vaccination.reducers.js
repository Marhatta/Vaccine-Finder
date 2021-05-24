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

const initialState = {
  loadingVaccinationCenters: false,
  loadingVaccinationCentersSuccess: false,
  loadingVaccinationCentersError: false,
  vaccinationCenters: [],
  vaccinationCentersError: null,
  searchBy: 'pincode',
  vaccinationStates: [],
  loadingVaccinationStates: false,
  loadingVaccinationStatesSuccess: false,
  loadingVaccinationStatesError: false,
  vaccinationStatesError: null,
  vaccinationDistricts: [],
  loadingVaccinationDistricts: false,
  loadingVaccinationDistrictsSuccess: false,
  loadingVaccinationDistrictsError: false,
  vaccinationDistrictsError: null,
};

const vaccinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VACCINATION_CENTERS_BY_PINCODE:
      return {
        ...state,
        loadingVaccinationCenters: true,
        searchBy: `pincode-${action.payload.pincode}`, //pincode-180013
      };
    case GET_VACCINATION_CENTERS_BY_DISTRICT:
      return {
        ...state,
        loadingVaccinationCenters: true,
        searchBy: `district-${action.payload.pincode}`, //district-22
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
        vaccinationCentersError: action.payload,
      };
    case GET_VACCINATION_STATES:
      return {
        ...state,
        loadingVaccinationStates: true,
      };
    case GET_VACCINATION_STATES_SUCCESS:
      return {
        ...state,
        vaccinationStates: [
          ...action.payload,
          {state_id: 40, state_name: 'Cancel'},
        ],
        loadingVaccinationStates: false,
        loadingVaccinationStatesSuccess: true,
      };
    case GET_VACCINATION_STATES_ERROR:
      return {
        ...state,
        loadingVaccinationStates: false,
        loadingVaccinationStatesError: true,
        vaccinationStatesError: action.payload,
      };
    case GET_VACCINATION_DISTRICTS:
      return {
        ...state,
        loadingVaccinationDistricts: true,
      };
    case GET_VACCINATION_DISTRICTS_SUCCESS:
      return {
        ...state,
        vaccinationDistricts: [
          ...action.payload,
          {district_id: 100, district_name: 'Cancel'},
        ],
        loadingVaccinationDistricts: false,
        loadingVaccinationDistrictsSuccess: true,
      };
    case GET_VACCINATION_DISTRICTS_ERROR:
      return {
        ...state,
        loadingVaccinationDistricts: false,
        loadingVaccinationDistrictsError: true,
        vaccinationDistrictsError: action.payload,
      };
    default:
      return state;
  }
};
export default vaccinationReducer;
