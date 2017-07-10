import { combineReducers } from 'redux';

let temp1 = (state, action) => { return state;};
let temp2 = (state, action) => { return state;};

const app = combineReducers({
  temp1,
  temp2
});

export default app;