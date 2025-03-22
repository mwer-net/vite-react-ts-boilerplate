import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { bitcoinApi } from './services/app';
import counterReducer from './slice/counterSlice';
import currencyReducer from './slice/currencySlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		currency: currencyReducer,
		[bitcoinApi.reducerPath]: bitcoinApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bitcoinApi.middleware)
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
