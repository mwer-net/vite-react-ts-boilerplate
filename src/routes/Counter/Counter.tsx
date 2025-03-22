import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { increment } from '../../redux/slice/counterSlice';
import style from './Counter.module.scss';

function Counter() {
	const count = useAppSelector(state => state.counter.value);

	const dispatch = useAppDispatch();

	return (
		<div className={style.root}>
			Amount: {count} <div onClick={() => dispatch(increment())}>(add)</div>
		</div>
	);
}

export default Counter;
