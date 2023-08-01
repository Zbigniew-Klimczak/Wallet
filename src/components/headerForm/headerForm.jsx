import { useDispatch, useSelector } from "react-redux";
import { setLogoutModal } from "../../redux/userSlice/userSlice";
import headerLogo from "../../images/headerLogo.png";
import exitIcon from "../../SVG/exit.svg";
import exitIconBlack from "../../SVG/exit-czarny.svg"
import css from "./headerForm.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleLogoutModal = () => {
    dispatch(setLogoutModal(true));
  };

  return (
    <div className={css.header}>
      <div className={css["left-side"]}>
        <div className={css["logo-container"]}>
          <img className={css.logo} src={headerLogo} alt="logo" />
          <h1 className={css.wallet}>Wallet</h1>
        </div>
      </div>
      <div className={css["right-side"]}>
        <div className={css["name-container"]}>
          <button className={css.nameButton}>{user}</button>
          <span className={css.verticalLine}></span>
        </div>
        <div className={css.exitContainer}>
          <img
            className={css.exitIcon}
            src={exitIcon}
            alt="exit"
            onClick={handleLogoutModal}
          />
          <button className={css.exitButton} onClick={handleLogoutModal}>
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

