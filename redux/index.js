import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import count from '../reducers/count'

const reducers = combineReducers({
  count
})

const store = createStore(reducers, /* preloadedState, */);

export default store;
