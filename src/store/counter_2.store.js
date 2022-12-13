import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
 name: 'counter_2',
 initialState: { value: 0 },
 reducers: {
  increment (state, action) {
   state.value += action.payload;
  },
  decrement (state, action) {
   state.value -= action.payload;
  },
 }
});

export const actions = CounterSlice.actions;

export default CounterSlice.reducer;
