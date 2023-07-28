// import { useState, useEffect } from 'react';
import css from "./Home.module.css";

import HeaderForm from "../../components/headerForm/headerForm";
import HomeAndStatisticForm from "../../components/homeandstatisticForm/homeandstatisticForm";
import BalanceForm from "../../components/balanceForm/balanceForm";
import Exchange from "../../components/exchange/Exchange";
import AddTransaction from "../../components/addtransaction/addtransaction";
import TransactionHistory from "../../components/transactionHistory/transactionHistory";

const MyComponent = () => {
  return (
    <div className={css.container}>
      <HeaderForm />
      <HomeAndStatisticForm />
      <BalanceForm />
      <Exchange />
      <AddTransaction />
      <TransactionHistory />
    </div>
  );
};

export default MyComponent;
