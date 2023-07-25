// import { useState, useEffect } from 'react';
// import css from './Home.module.css';


import HeaderForm from '../../components/headerForm/headerForm';
import HomeAndStatisticForm from '../../components/homeandstatisticForm/homeandstatisticForm';
import BalanceForm from '../../components/balanceForm/balanceForm';
import Exchange from '../../components/exchange/Exchange';
import AddTransaction from '../../components/addtransaction/addtransaction'
  
const MyComponent = () => {
  return (
    <div>
      <HeaderForm />
      <HomeAndStatisticForm />
      <BalanceForm />
      <Exchange />
      <AddTransaction />
    </div>
  );
};


export default MyComponent;
