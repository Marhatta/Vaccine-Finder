import {
  GET_COWIN_PUBLIC_REPORT,
  GET_COWIN_PUBLIC_REPORT_SUCCESS,
  GET_COWIN_PUBLIC_REPORT_ERROR,
} from './stats.types';

const initialState = {
  loadingCowinReport: false,
  loadingCowinReportSuccess: false,
  loadingCowinReportError: false,
  report: null,
  reportError: null,
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COWIN_PUBLIC_REPORT:
      return {
        ...state,
        loadingCowinReport: true,
      };
    case GET_COWIN_PUBLIC_REPORT_SUCCESS:
      return {
        ...state,
        loadingCowinReport: false,
        loadingCowinReportSuccess: true,
        report: action.payload,
      };
    case GET_COWIN_PUBLIC_REPORT_ERROR:
      return {
        ...state,
        loadingCowinReport: false,
        loadingCowinReportError: true,
        reportError: action.payload,
      };
    default:
      return state;
  }
};
export default statsReducer;
