import { useEffect, useState } from "react";
import StatisticsTablet from "./StatisticsTablet";
import StatisticsMobile from "./StatisticsMobile";
const Statistics = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      {windowWidth < 768 && <StatisticsMobile />}
      {windowWidth >= 768 && <StatisticsTablet />}
    </>
  );
};
export default Statistics;
