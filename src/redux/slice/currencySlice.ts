import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Currencies } from '../types.d';

type Currencytate = {
	currency: Currencies;
};

export const initialState: Currencytate = {
	currency: Currencies.USD
};

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		changeCurrency(state, action: PayloadAction<Currencies>) {
			state.currency = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
