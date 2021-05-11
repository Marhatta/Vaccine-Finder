import {SET_THEME} from './app.types';

export const setTheme = theme => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
