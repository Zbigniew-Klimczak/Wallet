import { useState, useEffect } from "react";
import AddTransaction from "../../components/addtransaction/addtransaction";
import TransactionHistory from "../../components/transactionHistory/transactionHistory";
import BalanceForm from "../../components/balanceForm/balanceForm";
import css from "./TransactionsHistory.module.css";
const TransactionsHistory = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={css.container}>
      {windowWidth < 768 && <BalanceForm />}
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
};
export default TransactionsHistory;
