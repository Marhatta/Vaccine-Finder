import {
  GET_COWIN_PUBLIC_REPORT,
  GET_COWIN_PUBLIC_REPORT_SUCCESS,
  GET_COWIN_PUBLIC_REPORT_ERROR,
  GET_COVID19INDIA_REPORT,
  GET_COVID19INDIA_REPORT_SUCCESS,
  GET_COVID19INDIA_REPORT_ERROR,
} from './stats.types';

const initialState = {
  loadingCowinReport: false,
  loadingCowinReportSuccess: false,
  loadingCowinReportError: false,
  report: null,
  reportError: null,

  loadingCovid19IndiaReport: false,
  loadingCovid19IndiaReportSuccess: false,
  loadingCovid19IndiaReportError: false,
  covid19IndiaReport: null,
  covid19IndiaReportError: null,
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
        report: action.payload,
        loadingCowinReport: false,
        loadingCowinReportSuccess: true,
      };
    case GET_COWIN_PUBLIC_REPORT_ERROR:
      return {
        ...state,
        loadingCowinReport: false,
        loadingCowinReportError: true,
        reportError: action.payload,
      };
    case GET_COVID19INDIA_REPORT:
      return {
        ...state,
        loadingCovid19IndiaReport: true,
      };
    case GET_COVID19INDIA_REPORT_SUCCESS:
      return {
        ...state,
        covid19IndiaReport: action.payload,
        loadingCovid19IndiaReport: false,
        loadingCovid19IndiaReportSuccess: true,
      };
    case GET_COVID19INDIA_REPORT_ERROR:
      return {
        ...state,
        loadingCovid19IndiaReport: false,
        loadingCovid19IndiaReportError: true,
        covid19IndiaReportError: action.payload,
      };
    default:
      return state;
  }
};
export default statsReducer;
