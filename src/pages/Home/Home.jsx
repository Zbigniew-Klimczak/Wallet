// import { useState, useEffect } from 'react';
// import css from './Home.module.css';


import HeaderForm from '../../components/headerForm/headerForm';
import HomeAndStatisticForm from '../../components/homeandstatisticForm/homeandstatisticForm';
import BalanceForm from '../../components/balanceForm/balanceForm'

const MyComponent = () => {
  return (
    <div>
      <HeaderForm />
      <HomeAndStatisticForm />
      <BalanceForm />
    </div>
  );
};


export default MyComponent;
