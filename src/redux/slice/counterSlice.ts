import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		// This will filed by your state function like increment or decrement func below

		increment(state) {
			state.value += 1;
		},
		decrement(state) {
			state.value -= 1;
		},
		incrementByAmount(state, action: PayloadAction<number>) {
			state.value += action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { decrement, increment, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
