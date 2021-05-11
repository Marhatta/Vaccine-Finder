import {createSelector} from 'reselect';

const selectApp = state => state.app;

export const selectTheme = createSelector([selectApp], app => app.theme);
