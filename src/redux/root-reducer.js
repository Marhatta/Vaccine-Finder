import {combineReducers} from 'redux';

import appReducer from './app/app.reducers';
import commonReducer from './common/common.reducers';

const reducers = combineReducers({
  app: appReducer,
  common: commonReducer,
});

export default reducers;
