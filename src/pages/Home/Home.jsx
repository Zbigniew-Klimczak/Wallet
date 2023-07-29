// import { useState, useEffect } from 'react';
import css from "./Home.module.css";

import HeaderForm from "../../components/headerForm/headerForm";
import HomeAndStatisticForm from "../../components/homeandstatisticForm/homeandstatisticForm";
import BalanceForm from "../../components/balanceForm/balanceForm";
import Exchange from "../../components/exchange/Exchange";
import AddTransaction from "../../components/addtransaction/addtransaction";
import TransactionHistory from "../../components/transactionHistory/transactionHistory";
import Chart from "../../components/Chart/Chart";

const MyComponent = () => {
  return (
    <div className={css.container}>
      <HeaderForm />
      <HomeAndStatisticForm />
      <BalanceForm />
      <Exchange />
      <AddTransaction />
      <TransactionHistory />
      <Chart />
    </div>
  );
};

export default MyComponent;
