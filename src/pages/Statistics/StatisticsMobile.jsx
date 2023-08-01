import { useState } from "react";
import Chart from "../../components/Chart/Chart";
import StatisticsTab from "../../components/statisticsTab/statisticsTab";
import Select from "../../components/Select/Select";
import css from "./Statistics.module.css";

const StatisticsMobile = () => {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState("08");
  return (
    <div className={css.container}>
      <Chart year={year} month={month} />
      <Select setMonth={setMonth} year={year} month={month} />
      <Select setYear={setYear} year={year} month={month} />
      <StatisticsTab year={year} month={month} />
    </div>
  );
};

export default StatisticsMobile;
