import css from "./logoutModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLogoutModal } from "../../redux/userSlice/userSlice";

const LogoutModal = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout(token));
    handleLogoutModal();
  };
  const handleLogoutModal = () => {
    dispatch(setLogoutModal(false));
  };

  return (
    <div className={css.container}>
      <div className={css.modal}>
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
