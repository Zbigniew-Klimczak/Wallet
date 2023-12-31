import { useSelector } from "react-redux";
import css from "./balanceForm.module.css";

function Balance() {
  const { balance } = useSelector((state) => state.user);
  return (
    <div className={css["container"]}>
      <p className={css["text"]}>YOUR BALANCE</p>
      <h1 className={css["headertext"]}>{balance} PLN</h1>
    </div>
  );
}

export default Balance;
