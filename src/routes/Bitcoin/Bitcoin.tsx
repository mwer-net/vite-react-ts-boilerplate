import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useGetBitcoinDataQuery } from '../../redux/services/app';
import { changeCurrency } from '../../redux/slice/currencySlice';
import { type Currencies } from '../../redux/types';

const Bitcoin = () => {
	const { currency } = useAppSelector(state => state.currency);
	const dispatch = useAppDispatch();

	const { data, error, isLoading } = useGetBitcoinDataQuery(undefined, {
		pollingInterval: 5000
	});

	const handleCurrencySelection = (currency: Currencies) => dispatch(changeCurrency(currency));

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	if (error) {
		return <div>Something went horrible wrong ...</div>;
	}

	return (
		<>
			<h2>Bitcoin Price</h2>
			<select value={currency} onChange={e => handleCurrencySelection(e.currentTarget.value as Currencies)}>
				{data &&
					Object.keys(data).map(currency => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
			</select>
			<div>
				<h2>
					{data?.[currency].symbol}
					{data?.[currency].last}
				</h2>
			</div>
		</>
	);
};

export default Bitcoin;
