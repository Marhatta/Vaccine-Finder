import {GET_PINPOINX_MATCHED} from './home.types';

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PINPOINX_MATCHED:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default homeReducer;
