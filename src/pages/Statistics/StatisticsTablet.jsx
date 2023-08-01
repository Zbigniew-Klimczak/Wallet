import { useState } from "react";
import Chart from "../../components/Chart/Chart";
import StatisticsTab from "../../components/statisticsTab/statisticsTab";
import Select from "../../components/Select/Select";
import css from "./Statistics.module.css";

const StatisticsTablet = () => {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState("08");
  return (
    <div className={css.container}>
      <div>
        <Chart year={year} month={month} />
      </div>
      <div className={css.rightSide}>
        <div className={css.selects}>
          <Select setMonth={setMonth} year={year} month={month} />
          <Select setYear={setYear} year={year} month={month} />
        </div>
        <StatisticsTab year={year} month={month} />
      </div>
    </div>
  );
};

export default StatisticsTablet;
