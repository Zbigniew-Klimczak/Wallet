import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const LoginPage = lazy(() => import('./pages/Login/Login'));
const RegistrationPage = lazy(() =>
	import('./pages/Registration/Registration')
);

const App = () => {
	return (
		<div>
			<Suspense fallback={<h1>Loading</h1>}>
			<Routes>
				<Route
					path='/'
					element={<LoginPage />}
				/>
				<Route
					path='/register'
					element={<RegistrationPage />}
				/>
			</Routes>
			</Suspense>
		</div>
	);
};

export default App;
