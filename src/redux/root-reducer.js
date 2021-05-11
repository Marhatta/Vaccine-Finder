import {combineReducers} from 'redux';

import appReducer from './app/app.reducers';
import homeReducer from './home/home.reducers';

const reducers = combineReducers({
  app: appReducer,
  home: homeReducer,
});

export default reducers;
