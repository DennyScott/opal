import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';

import portfolio from 'modules/portfolio/ducks';

const rootReducer = combineReducers({
  portfolio,
  browser: responsiveStateReducer,
  routing: routerReducer,
});

export default rootReducer;
