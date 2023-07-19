import './App.css';
import { lazy } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RegistrationPage = lazy(() =>
	import('./pages/RegistrationPage/RegistrationPage')
);

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<RegistrationPage />}
				/>
			</Routes>
		</div>
	);
};

export default App;
