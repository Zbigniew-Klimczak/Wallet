import AddTransaction from "../../components/addtransaction/addtransaction";
import TransactionHistory from "../../components/transactionHistory/transactionHistory";
import css from "./TransactionsHistory.module.css";
const TransactionsHistory = () => {
  return (
    <div className={css.TransactionsHistory}>
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
};
export default TransactionsHistory;
