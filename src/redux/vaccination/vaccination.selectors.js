import {createSelector} from 'reselect';

const selectVaccination = state => state.vaccinationCenters;

export const selectStates = createSelector([selectVaccination], vaccination => {
  return {
    stateList: vaccination.vaccinationStates,
    loadingVaccinationStatesSuccess:
      vaccination.loadingVaccinationStatesSuccess,
  };
});

export const selectDistricts = createSelector(
  [selectVaccination],
  vaccination => {
    return {
      districtList: vaccination.vaccinationDistricts,
      loadingVaccinationDistrictsSuccess:
        vaccination.loadingVaccinationDistrictsSuccess,
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
      centerList: vaccination.vaccinationCenters,
      searchBy: vaccination.searchBy,
      centersError:
        vaccination.vaccinationCentersError?.vaccinationCentersError,
    };
  },
);

export const selectNotify = createSelector([selectVaccination], vaccination => {
  return {
    loading: vaccination.loadingNotifyMe,
    loadingSuccess: vaccination.loadingNotifyMeSuccess,
    notifyMeResponse: vaccination.notifyMeResponse,
  };
});
