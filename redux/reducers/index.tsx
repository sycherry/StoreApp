import {combineReducers} from 'redux';
import useReducer from './reducers';

let reducers = combineReducers({
  useReducer: useReducer,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

export default rootReducer;
