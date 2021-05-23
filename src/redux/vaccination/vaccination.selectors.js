import {createSelector} from 'reselect';

const selectVaccination = state => state.vaccinationCenters;

export const selectStates = createSelector([selectVaccination], vaccination => {
  return {
    stateList: vaccination.vaccinationStates,
  };
});

export const selectDistricts = createSelector(
  [selectVaccination],
  vaccination => {
    return {
      districtList: vaccination.vaccinationDistricts,
    };
  },
);

export const selectVaccinationCenters = createSelector(
  [selectVaccination],
  vaccination => {
    return {
      loading: vaccination.loadingVaccinationCenters,
      loadingSuccess: vaccination.loadingVaccinationCentersSuccess,
      loadingError: vaccination.loadingVaccinationCentersError,
      vaccinationCenters: vaccination.vaccinationCenters,
      vaccinationCentersError:
        vaccination.vaccinationCentersError?.vaccinationCentersError,
    };
  },
);
