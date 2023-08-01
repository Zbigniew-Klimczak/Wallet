import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import css from "./Home.module.css";
import { Outlet } from "react-router-dom";
import HeaderForm from "../../components/headerForm/headerForm";
import HomeAndStatistic from "../../components/homeandstatisticForm/homeandstatisticForm";
import Exchange from "../../components/exchange/Exchange";
import LogoutModal from "../../components/logoutModal/logoutModal";
import Balance from "../../components/balanceForm/balanceForm";
import AddTransactionButton from "../../components/addTransactionButton/addTransactionButton";
import AddTransactionModal from "../../components/addTransactionModal/AddTransactionModal";

const Home = () => {
  const { isLogoutModal, isAddTransactionModal } = useSelector(
    (state) => state.user
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isLogoutModal && <LogoutModal />}
      <div className={css.container}>
        <AddTransactionButton />
        <HeaderForm />
        {windowWidth < 768 && (
          <>
            {isAddTransactionModal && <AddTransactionModal />}
            <div className={css.background}>
              <HomeAndStatistic />
              <Outlet />
            </div>
          </>
        )}
        {windowWidth >= 768 && windowWidth < 1280 && (
          <>
            {isAddTransactionModal && <AddTransactionModal />}
            <div className={css.background}>
              <AddTransactionButton />
              <div className={css.top}>
                <div className={css.homeAndBalance}>
                  <HomeAndStatistic />
                  <Balance />
                </div>
                <Exchange />
              </div>
              <Outlet />
            </div>
          </>
        )}
        {windowWidth >= 1280 && (
          <>
            {isAddTransactionModal && <AddTransactionModal />}
            <div className={css.background}>
              <div className={css.insideContainer}>
                <AddTransactionButton />
                <div className={css.leftSide}>
                  <HomeAndStatistic />
                  <Balance />
                  <Exchange />
                </div>
                <Outlet />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
