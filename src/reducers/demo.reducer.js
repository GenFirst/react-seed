import { handleActions } from 'redux-actions';
import {increment, decrement} from '../actions/demo.actions';

export const demoReducer = handleActions({
  [increment]: (state, action) => {
    return ({
      counter: state.counter + action.payload
    })
  },
  [decrement]: (state, action) => ({
    counter: state.counter - action.payload
  })
}, { counter: 0 });
