import React from 'react';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { REGISTER } from 'redux-persist';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';



const App = () => {
  
  return <RegistrationForm />;
};

export default App;
