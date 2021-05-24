import {SET_THEME} from './app.types';

const initialState = {
  theme: 'light',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
export default appReducer;
