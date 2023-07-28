import css from "./logoutModal.module.css";

const LogoutModal = () => {
  return (
    <div className={css.container}>
      <div className={css.modal}>
        <p className={css.text}>Are you sure you want to log out?</p>
        <div className={css.buttonContainer}>
          <button className={css.button}>Yes</button>
          <button className={css.button}>No</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
