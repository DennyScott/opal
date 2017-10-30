import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducer.js';
import portfolio from './portfolio';

const loggerMiddleware = createLogger();

const defaultState = {
  portfolio,
};

const enhancers = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
