// import { useState, useEffect } from 'react';
import css from "./Home.module.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderForm from "../../components/headerForm/headerForm";
import HomeAndStatistic from "../../components/homeandstatisticForm/homeandstatisticForm";
import BalanceForm from "../../components/balanceForm/balanceForm";
import Exchange from "../../components/exchange/Exchange";
import LogoutModal from "../../components/logoutModal/logoutModal";

const Home = () => {
  const { isLogoutModal } = useSelector((state) => state.user);
  return (
    <>
      {isLogoutModal && <LogoutModal />}
      <div className={css.container}>
        <HeaderForm />
        <div className={css.background}>
          <div className={css.leftSide}>
            <HomeAndStatistic />
            <BalanceForm />
            <Exchange />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
