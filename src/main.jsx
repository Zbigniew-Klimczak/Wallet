import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<App />}
				/>
				<Route
					path='/registration'
					element={<RegistrationForm />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
