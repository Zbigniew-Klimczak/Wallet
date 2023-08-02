import { useEffect } from "react";
import css from "./Exchange.module.css";
import refreshExchangeRates from "./ExchangeCurrency";
const Exchange = () => {
  useEffect(() => {
    refreshExchangeRates();
    const interval = setInterval(() => {
      refreshExchangeRates();
    }, 3600000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={css.container}>
      <ul className={`${css.listHeader}`}>
        <li className={`${css.itemHeader} ${css.left}`}>Currency</li>
        <li className={`${css.itemHeader} ${css.middle}`}>Purchase</li>
        <li className={`${css.itemHeader} ${css.itemHeaderLast}`}>Sale</li>
      </ul>
      <ul className={css.list}>
        <li className={`${css.item} ${css.itemLeft}`}>USD</li>
        <li className={`${css.item} ${css.itemRight}`}>27.55</li>
        <li className={`${css.item} ${css.itemLast}`}>27.65</li>
      </ul>
      <ul className={css.list}>
        <li className={`${css.item} ${css.itemLeft}`}>EUR</li>
        <li className={`${css.item} ${css.itemRight}`}>30.00</li>
        <li className={`${css.item} ${css.itemLast}`}>30.10</li>
      </ul>
    </div>
  );
};

export default Exchange;
