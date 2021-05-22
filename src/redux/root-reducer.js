import {combineReducers} from 'redux';

import appReducer from './app/app.reducers';
import commonReducer from './common/common.reducers';
import statsReducer from './stats/stats.reducers';
import vaccinationCenterReducer from './vaccination/vaccination.reducers';

const reducers = combineReducers({
  app: appReducer,
  common: commonReducer,
  stats: statsReducer,
  vaccinationCenters: vaccinationCenterReducer,
});

export default reducers;
