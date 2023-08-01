import css from "./AddTransactionModal.module.css";
import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setAddTransactionModal } from "../../redux/userSlice/userSlice";

const AddTransactionModal = () => {
  const [date, setDate] = useState(formatDate());
  const [checkbox, setCheckbox] = useState("Expense");
  const [select, setSelect] = useState(null);
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");

  const Submit = () => {
    if (checkbox === "Expense") {
      console.log({
        type: "Income",
        category: "Income",
        value: amount,
        date: date,
        comment: comment,
      });
    }
    if (checkbox === "Income") {
      console.log({
        type: "Expense",
        category: select,
        value: amount,
        date: date,
        comment: comment,
      });
    }
  };

  const dispatch = useDispatch();
  const handleLogoutModal = () => {
    dispatch(setAddTransactionModal(false));
  };

  const options = [
    { value: "Main expenses", label: "Main expenses" },
    { value: "Products", label: "Products" },
    { value: "Car", label: "Car" },
    { value: "Self care", label: "Self care" },
    { value: "Child care", label: "Child care" },
    { value: "Household products", label: "Household products" },
    { value: "Education", label: "Education" },
    { value: "Leisure", label: "Leisure" },
    { value: "Other expenses", label: "Other expenses" },
    { value: "Entertainment", label: "Entertainment" },
  ];
  const customStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "inherit",
      border: "none",
      boxShadow: "none",
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: "#BDBDBD",
      backgroundColor: "inherit",
      fontSize: "18px",
      fontFamily: "Circe",
    }),
    container: (defaultStyles) => ({
      ...defaultStyles,
      width: "70%",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      borderRadius: "20px",
      background: "rgba(255, 255, 255)",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.10)",
    }),
    option: (defaultStyles) => ({
      ...defaultStyles,
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#000",
      fontFamily: "Circe",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    }),
  };

  function checkboxValue() {
    if (checkbox === "Income") {
      setCheckbox("Expense");
    }
    if (checkbox === "Expense") {
      setCheckbox("Income");
    }
  }
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
              <input
                type="checkbox"
                className={css.checkbox}
                onChange={checkboxValue}
              />
              <div className={css.knobs}></div>
              <p className={css.expenseText}>Expense</p>
            </div>
          </div>
        </div>
        {checkbox === "Income" && (
          <Select
            defaultValue={select}
            onChange={(e) => setSelect(e.value)}
            options={options}
            placeholder="Select a category"
            styles={customStyles}
          />
        )}
        <div className={css.amountAndDate}>
          <input
            type="text"
            placeholder="0.00"
            className={css.amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className={css.date}
          />
        </div>
        <textarea
          type="text"
          className={css.text}
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <div className={css.buttonContainer}>
          <button className={css.addButton} type="button" onClick={Submit}>
            Add
          </button>
          <button
            className={css.cancelButton}
            type="button"
            onClick={handleLogoutModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;
