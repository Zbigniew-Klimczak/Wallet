import css from "./TransactionModal.module.css";

const TransactionModal = () => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date = new Date()) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }
  return (
    <div className={css.container}>
      <div className={css.modal}>
        <h2 className={css.title}>Add transaction</h2>
        <div className={css.toggleButtonCover}>
          <div className={css.buttonCover}>
            <div className={css.button}>
              <p className={css.incomeText}>Income</p>
              <input type="checkbox" className={css.checkbox} />
              <div className={css.knobs}></div>
              <p className={css.expenseText}>Expense</p>
            </div>
          </div>
        </div>
        <div className={css.amountAndDate}>
          <input type="text" placeholder="0.00" className={css.amount} />
          <input type="date" value={formatDate()} className={css.date} />
        </div>
        <div>comment</div>
        <button type="button">Add</button>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
};

export default TransactionModal;
