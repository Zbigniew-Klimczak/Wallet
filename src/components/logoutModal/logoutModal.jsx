import css from "./logoutModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLogoutModal } from "../../redux/userSlice/userSlice";
import { useEffect } from "react";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const handleLogoutModal = () => {
    dispatch(setLogoutModal(false));
  };
  const handleLogout = () => {
    dispatch(logout(token));
    handleLogoutModal();
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        handleLogoutModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className={css.container} onClick={handleLogoutModal}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <p className={css.text}>Are you sure you want to log out?</p>
        <div className={css.buttonContainer}>
          <button className={css.button} onClick={handleLogout}>
            Yes
          </button>
          <button className={css.button} onClick={handleLogoutModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
