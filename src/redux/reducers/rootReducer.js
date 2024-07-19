import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  session: sessionReducer,
});

export default rootReducer;
