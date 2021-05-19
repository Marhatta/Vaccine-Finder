import {
  GET_COWIN_PUBLIC_REPORT,
  GET_COWIN_PUBLIC_REPORT_SUCCESS,
  GET_COWIN_PUBLIC_REPORT_ERROR,
  GET_COVID19INDIA_REPORT,
  GET_COVID19INDIA_REPORT_SUCCESS,
  GET_COVID19INDIA_REPORT_ERROR,
} from './stats.types';

export const getCowinPublicReport = () => {
  return {
    type: GET_COWIN_PUBLIC_REPORT,
  };
};

export const getCowinPublicReportSuccess = report => {
  return {
    type: GET_COWIN_PUBLIC_REPORT_SUCCESS,
    payload: report,
  };
};

export const getCowinPublicReportError = error => {
  return {
    type: GET_COWIN_PUBLIC_REPORT_ERROR,
    payload: error.message,
  };
};

export const getCovid19IndiaReport = () => {
  return {
    type: GET_COVID19INDIA_REPORT,
  };
};

export const getCovid19IndiaReportSuccess = report => {
  return {
    type: GET_COVID19INDIA_REPORT_SUCCESS,
    payload: report,
  };
};

export const getCovid19IndiaReportError = error => {
  return {
    type: GET_COVID19INDIA_REPORT_ERROR,
    payload: error.message,
  };
};
