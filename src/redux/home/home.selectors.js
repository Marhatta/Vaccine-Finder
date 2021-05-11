import {createSelector} from 'reselect';

const selectHome = state => state.home;

export const selectPinpoinxMatched = createSelector(
  [selectHome],
  home => home.pinpoinxMatched,
);

export const selectPreferences = createSelector(
  [selectHome],
  home => home.preferences,
);

export const selectTestimonials = createSelector(
  [selectHome],
  home => home.testimonials,
);
