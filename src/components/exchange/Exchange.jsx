import { useEffect, useState } from "react";
import css from "./Exchange.module.css";
import refreshExchangeRates from "./ExchangeCurrency";

const Exchange = () => {
  const [rates, setRates] = useState(null);
  useEffect(() => {
    refreshExchangeRates().then((result) => {
      setRates(result);
    });
    const interval = setInterval(() => {
      refreshExchangeRates().then((result) => setRates(result));
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
        <li className={`${css.item} ${css.itemRight}`}>
          {rates ? ((1 * 0.999908) / rates.USD).toFixed(4) : "Not loaded"}
        </li>
        <li className={`${css.item} ${css.itemLast}`}>
          {rates ? ((1 * 1.000913) / rates.USD).toFixed(4) : "Not loaded"}
        </li>
      </ul>
      <ul className={css.list}>
        <li className={`${css.item} ${css.itemLeft}`}>EUR</li>
        <li className={`${css.item} ${css.itemRight}`}>
          {rates ? ((1 * 0.999908) / rates.EUR).toFixed(4) : "Not loaded"}
        </li>
        <li className={`${css.item} ${css.itemLast}`}>
          {rates ? ((1 * 1.000913) / rates.EUR).toFixed(4) : "Not loaded"}
        </li>
      </ul>
    </div>
  );
};

export default Exchange;
