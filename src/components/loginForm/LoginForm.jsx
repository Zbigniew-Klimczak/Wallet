// import React from "react";
import css from "./LoginForm.module.css";
// import { envelope } from "../../SVG/envelope.svg";
const LoginForm = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img className={css.logo__icon} src="/logo.svg" alt="logo" />
        <h1 className={css.logo__txt}>Wallet</h1>
      </div>
      <form className={css.form}>
        <input className={css.input__email} type="email" placeholder="Email" />
        <input
          className={css.input__password}
          type="password"
          placeholder="Password"
        />
        <button className={css.login} type="submit">
          LOG IN
        </button>
      </form>
      <button className={css.register} type="button">
        REGISTER
      </button>
    </div>
  );
};

export default LoginForm;
