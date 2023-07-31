import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import css from "./statisticsTab.module.css";

const StatisticsTab = () => {
  const token = useSelector((state) => state.user.token);
  const [categories, setCategories] = useState([]);
  const [money, setMoney] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const colors = [
    "#FED057",
    "#FFD8D0",
    "#FD9498",
    "#C5BAFF",
    "#6E78E8",
    "#4A56E2",
    "#81E1FF",
    "#24CCA7",
    "#00AD84",
  ];

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://wallet-backend-efx6.onrender.com/users/statistics/10/2022",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const keys = Object.keys(response.data.data);
      const values = Object.values(response.data.data);
      setCategories(keys.slice(2, -1));
      setMoney(values.slice(2, -1));
      setExpenses(values[1]);
      setIncomes(values[0]);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
    setTimeout(() => {
    setIsLoading(false);
  }, 1000);

    setIsLoading(false);
    // setAllMoney(values.reduce((acc, value) => acc + value, 0));
  };

  return (
    <div className={css.container}>
      {isLoading ? (
        <p>Ładowanie, proszę czekać ...</p>
      ) : (
        <>
          <div className={css.header}>
            <p className={css.header__text}>Category</p>
            <p className={css.header__text}>Sum</p>
          </div>
          <ul className={css.list}>
            {categories.map((category, index) => (
              <li className={css.listItem} key={index}>
                <div className={css.categoryAndColor}>
                  <div
                    className={css.squere}
                    style={{ backgroundColor: `${colors[index]}` }}
                  ></div>
                  <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </div>
                <p>{money[index]}</p>
              </li>
            ))}
          </ul>
          <div className={css.expenses}>
            <p className={css.expenses__text}>Expenses:</p>
            <p className={`${css.expenses__text} ${css.expenses__red}`}>
              {expenses}
            </p>
          </div>
          <div className={css.expenses}>
            <p className={css.expenses__text}>Income:</p>
            <p className={`${css.expenses__text} ${css.expenses__green}`}>
              {incomes}
            </p>
          </div>
        </>
      )}
    </div>
  );
            };


export default StatisticsTab;
