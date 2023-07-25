import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom';
import { logout } from "../../redux/userSlice/userSlice";
import headerLogo from "../../images/headerLogo.png";
import exitIcon from "../../SVG/exit.svg";
import css from "./headerForm.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// const LoginPage = lazy(() => import('./pages/Login/Login'));

const Header = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user);
  // const history = useHistory();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Obsługuje wylogowanie użytkownika po kliknięciu przycisku "Exit"
  const handleLogout = () => {
    dispatch(logout(token));

    //   history.push('../../pages/Login/Login');

    // Dodaj kod obsługi wylogowania, np. przekierowanie na stronę logowania
  };

  const handleSVGClick = () => {
    dispatch(logout(token));

    // Dodaj kod obsługi wylogowania, np. przekierowanie na stronę logowania
  };

  return (
    <div className={css.header}>
      <div className={css["left-side"]}>
        <div className={css["logo-container"]}>
          <img className={css.logo} src={headerLogo} alt="logo" />
          <h1>Wallet</h1>
        </div>
      </div>
      <div className={css["right-side"]}>
        <div className={css["name-container"]}>
          <button className={css.nameButton}>{user}</button>
          <span className={css.verticalLine}></span>
        </div>
        <img
          className={css.exitIcon}
          src={exitIcon}
          alt="exit"
          onClick={handleSVGClick}
        />
        <button className={css.exitButton} onClick={handleLogout}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Header;
