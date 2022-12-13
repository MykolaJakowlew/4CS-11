import { configureStore, createSlice } from '@reduxjs/toolkit';

import reducerCounter1 from './counter_1.store';
import reducerCounter2 from './counter_2.store';

// const CountersSlice = createSlice({
//  name: 'counter',
//  initialState: {
//   counter_1: { value: 0 },
//   counter_2: { value: 0 }
//  },
//  reducers: {
//   increment (state, action) {
//    state.counter_1.value += action.payload;
//   },
//   decrement (state, action) {
//    state.counter_1.value -= action.payload;
//   },
//   increment_2 (state, action) {
//    state.counter_2.value += action.payload;
//   },
//   decrement_2 (state, action) {
//    state.counter_2.value -= action.payload;
//   },
//  }
// });

// export const actions = CountersSlice.actions;

export default configureStore({
 // reducer: CountersSlice.reducer
 reducer: {
  counter_1: reducerCounter1,
  counter_2: reducerCounter2,
 }
});
