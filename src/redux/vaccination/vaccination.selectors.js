import {createSelector} from 'reselect';

const selectStats = state => state.stats;

export const selectCowinReport = createSelector([selectStats], stats => {
  return {
    loading: stats.loadingCowinReport,
    loadingSuccess: stats.loadingCowinReportSuccess,
    loadingError: stats.loadingCowinReportError,
    report: stats.report,
  };
});

export const selectCovid19IndiaReport = createSelector([selectStats], stats => {
  return {
    loading: stats.loadingCovid19IndiaReport,
    loadingSuccess: stats.loadingCovid19IndiaReportSuccess,
    loadingError: stats.loadingCovid19IndiaReportError,
    report: stats.covid19IndiaReport,
    casesTimeSeries: stats.covid19IndiaReport?.cases_time_series,
  };
});

export const selectStates = createSelector([selectStats], stats => {
  return {
    stateList: stats.states,
    selectedState: stats.selectedState,
  };
});
