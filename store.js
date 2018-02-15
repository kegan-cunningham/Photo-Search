import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import Reducer from './reducer';

const configureStore = (preloadedState = {}) => (
  createStore(Reducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;
