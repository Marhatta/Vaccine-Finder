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
