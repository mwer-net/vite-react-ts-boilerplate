import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Bitcoin from './routes/Bitcoin';
import Counter from './routes/Counter';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/bitcoin' element={<Bitcoin />} />
				<Route path='/' element={<Counter />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
