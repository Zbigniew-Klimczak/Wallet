import { useState } from "react";
import Chart from "../../components/Chart/Chart";
import StatisticsTab from "../../components/statisticsTab/statisticsTab";
import Select from "../../components/Select/Select";
import css from "./Statistics.module.css";
const Statistics = () => {
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState("01");
  return (
    <div className={css.container}>
      <Select setYear={setYear} year={year} month={month} />
      <Select setMonth={setMonth} year={year} month={month} />
      <Chart year={year} month={month} />
      <StatisticsTab year={year} month={month} />
    </div>
  );
};
export default Statistics;
