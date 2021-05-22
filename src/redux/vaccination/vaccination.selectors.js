import {createSelector} from 'reselect';

const selectVaccination = state => state.vaccinationCenters;
const selectStats = state => state.stats;

export const selectStates = createSelector([selectStats], stats => {
  return {
    stateList: stats.states,
    selectedState: stats.selectedState,
  };
});

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
