import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./transactionHistory.module.css";
import moment from "moment/moment";
import { deleteTransaction } from "../../redux/userSlice/userSlice";

const TransactionHistory = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  function formatDate(date) {
    return moment(date).format("DD.MM.YYYY");
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  const transactions = useSelector((state) => state.user.transactions);

  const removeTransaction = (e) => {
    dispatch(deleteTransaction({ id: e.target.dataset.id, token }));
  };

  return (
    <div className={styles.transactions}>
      {windowWidth < 768 ? (
        <ul className={styles.transactions__list}>
          {transactions.map((item) => (
            <li
              className={`${styles.transactions__item} ${
                item.type === "Income"
                  ? styles.transactions__item__positive
                  : styles.transactions__item__negative
              }`}
              key={item.id}
            >
              <div className={styles.transactions__row}>
                <div className={styles.transactions__th}>Date</div>
                <div className={styles.transactions__tb}>
                  {formatDate(item.date)}
                </div>
              </div>
              <div className={styles.transactions__row}>
                <div className={styles.transactions__th}>Type</div>
                <div className={styles.transactions__tb}>
                  {item.type === "Income" ? "+" : "-"}
                </div>
              </div>
              <div className={styles.transactions__row}>
                <div className={styles.transactions__th}>Category</div>
                <div className={styles.transactions__tb}>{item.category}</div>
              </div>
              <div className={styles.transactions__row}>
                <div className={styles.transactions__th}>Comment</div>
                <div className={styles.transactions__tb}>
                  {item.comment ?? "-"}
                </div>
              </div>
              <div className={styles.transactions__row}>
                <div className={styles.transactions__th}>Sum</div>
                <div
                  className={
                    item.type === "Income"
                      ? styles.transactions__green
                      : styles.transactions__red
                  }
                >
                  {item.value}
                </div>
              </div>
              <div className={styles.transactions__row}>
                <div>
                  <button className={styles.transactions__btn_d}>Delete</button>
                </div>
                <div className={styles.transactions__button_edit}>
                  <button className={styles.transactions__btn_e}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_37400_995)">
                        <path
                          d="M10.4999 5.83343L8.1666 3.5001M1.45825 12.5418L3.43247 12.3224C3.67367 12.2956 3.79427 12.2822 3.907 12.2457C4.007 12.2133 4.10218 12.1676 4.18994 12.1097C4.28885 12.0445 4.37465 11.9587 4.54626 11.7871L12.2499 4.08343C12.8943 3.4391 12.8943 2.39443 12.2499 1.75009C11.6056 1.10576 10.5609 1.10576 9.9166 1.75009L2.21293 9.45375C2.04132 9.62536 1.95552 9.71116 1.89029 9.81008C1.83242 9.89783 1.78668 9.99301 1.7543 10.093C1.71781 10.2057 1.70441 10.3263 1.67761 10.5675L1.45825 12.5418Z"
                          stroke="black"
                          strokeOpacity="0.8"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_37400_995">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <table className={styles.transactions__tbl}>
          <thead className={styles.transactions__thead}>
            <tr className={styles.transactions__thr}>
              <th className={styles.transactions__tbl_title}>Date</th>
              <th className={styles.transactions__tbl_title}>Type</th>
              <th className={styles.transactions__tbl_title}>Category</th>
              <th className={styles.transactions__tbl_title}>Comment</th>
              <th className={styles.transactions__tbl_title}>Sum</th>
              <th className={styles.transactions__tbl_title}></th>
            </tr>
          </thead>
          <tbody className={styles.transactions__tbody}>
            {transactions.map((item) => (
              <tr className={styles.transactions__tbl_string} key={item.id}>
                <td className={styles.transactions__tbl_item}>
                  {formatDate(item.date)}
                </td>
                <td className={styles.transactions__tbl_item}>
                  {item.type === "Income" ? "+" : "-"}
                </td>
                <td className={styles.transactions__tbl_item}>
                  {item.category}
                </td>
                <td className={styles.transactions__tbl_item}>
                  {item.comment ?? "-"}
                </td>
                <td className={styles.transactions__tbl_item}>
                  <div
                    className={
                      item.type === "Income"
                        ? styles.transactions__green
                        : styles.transactions__red
                    }
                  >
                    {item.value}
                  </div>
                </td>
                <td className={styles.transactions__tbl_item}>
                  <div className={styles.transactions__tbl_buttons}>
                    <button className={styles.transactions__tbl_btn_edit}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_37400_43)">
                          <path
                            d="M10.5 5.83343L8.16666 3.5001M1.45831 12.5418L3.43253 12.3224C3.67373 12.2956 3.79433 12.2822 3.90706 12.2457C4.00707 12.2133 4.10224 12.1676 4.19 12.1097C4.28891 12.0445 4.37471 11.9587 4.54632 11.7871L12.25 4.08343C12.8943 3.4391 12.8943 2.39443 12.25 1.75009C11.6057 1.10576 10.561 1.10576 9.91666 1.75009L2.21299 9.45375C2.04138 9.62536 1.95558 9.71116 1.89035 9.81008C1.83248 9.89783 1.78674 9.99301 1.75436 10.093C1.71787 10.2057 1.70447 10.3263 1.67767 10.5675L1.45831 12.5418Z"
                            stroke="black"
                            strokeOpacity="0.8"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_37400_43">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <button
                      data-id={item.id}
                      onClick={removeTransaction}
                      className={styles.transactions__tbl_btn_delete}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default TransactionHistory;
