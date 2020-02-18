import { createStore, combineReducers } from 'redux';
import count from './reducers/count';

const reducers = combineReducers({
  count,
});

const store = createStore(reducers);

export default store;
