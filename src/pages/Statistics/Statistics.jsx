import Chart from "../../components/Chart/Chart";
import StatisticsTab from "../../components/statisticsTab/statisticsTab";
import css from "./Statistics.module.css";
const Statistics = () => {
  return (
    <div className={css.container}>
      <Chart />
      <StatisticsTab />
    </div>
  );
};
export default Statistics;
