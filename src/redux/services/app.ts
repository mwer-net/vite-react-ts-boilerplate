import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type BitcoinData } from '../types';

export const bitcoinApi = createApi({
	reducerPath: 'bitcoinApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://blockchain.info' }),
	endpoints: builder => ({
		getBitcoinData: builder.query<BitcoinData, undefined>({
			query: () => '/ticker'
		})
	})
});

export const { useGetBitcoinDataQuery } = bitcoinApi;
