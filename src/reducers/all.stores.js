import { combineReducers } from 'redux';
import { demoReducer } from './demo.reducer';

let temp2 = (state = {}, action) => { return state;};

const app = combineReducers({
  demoReducer,
  temp2
});

export default app;
