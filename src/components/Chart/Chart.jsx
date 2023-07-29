import { Doughnut } from "react-chartjs-2";
import css from "./Chart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

const ChartDoughnut = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const token = useSelector((state) => state.user.token);
  const balance = useSelector((state) => state.user.balance);
  const [categories, setCategories] = useState([]);
  const [money, setMoney] = useState([]);
  const [allMoney, setAllMoney] = useState(0);
  const yes = true;

  const getCategories = async () => {
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
    setCategories(keys);
    setMoney(values);
    console.log(values);
    console.log(keys);
    setAllMoney(values.reduce((acc, value) => acc + value, 0));
  };

  const data = {
    labels: allMoney === 0 ? ["no transactions"] : categories.slice(2, -1),
    datasets: [
      {
        label: "",
        data: allMoney === 0 ? [1] : money.slice(2, -1),
        backgroundColor: [
          "#FED057",
          "#FFD8D0",
          "#FD9498",
          "#C5BAFF",
          "#6E78E8",
          "#4A56E2",
          "#81E1FF",
          "#24CCA7",
          "#00AD84",
        ],

        borderWidth: 0,
        cutout: "68%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    devicePixelRatio: 2,
  };

  return (
    <div className={css.container}>
      <button onClick={getCategories}>fetch</button>
      {yes ? (
        <>
          <Doughnut data={data} options={options} className={css.doughnut} />
          <p className={css.expense}>€{balance}</p>
        </>
      ) : (
        <>
          <Doughnut data={data} options={options} className={css.doughnut} />
          <p className={css.expense}>No expenses</p>
        </>
      )}
    </div>
  );
};

export default ChartDoughnut;
