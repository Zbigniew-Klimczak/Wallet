
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import css from "./Home.module.css";
import { Outlet } from "react-router-dom";
import HeaderForm from "../../components/headerForm/headerForm";
import HomeAndStatistic from "../../components/homeandstatisticForm/homeandstatisticForm";
import BalanceForm from "../../components/balanceForm/balanceForm";
import Exchange from "../../components/exchange/Exchange";
import LogoutModal from "../../components/logoutModal/logoutModal";

const Home = () => {
  const { isLogoutModal } = useSelector((state) => state.user);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isLogoutModal && <LogoutModal />}
      <div className={css.container}>
        <HeaderForm />
        <div className={css.content}>
          <div className={css.leftSide}>
            <div className={css.leftSideTablet}>
              <HomeAndStatistic />
              <BalanceForm />
            </div>
            {windowWidth >= 768 && ( 
              <div className={css.exchange}>
                <Exchange />
              </div>
            )}
          </div>
          <div className={css.rightSide}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
