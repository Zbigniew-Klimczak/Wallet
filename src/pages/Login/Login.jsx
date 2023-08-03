import { useState, useEffect } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import css from "./Login.module.css";
import bigLogo from "../../images/headerLogo.png";

const Login = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <>
      {windowWidth < 768 && <LoginForm />}
      {windowWidth >= 768 && windowWidth < 1280 && (
        <main className={css.container}>
          <div className={css.header}>
            <img src={bigLogo} alt="Logo" className={css.logo} />
            <h1 className={css.title}>Finance App</h1>
          </div>
          <div className={css.loginForm}>
            <LoginForm />
          </div>
        </main>
      )}
      {windowWidth >= 1280 && (
        <main className={css.container}>
          <div className={css.header}>
            <img src={bigLogo} alt="Logo" className={css.logo} />
            <h1 className={css.title}>Finance App</h1>
          </div>
          <div className={css.loginFormBig}>
            <LoginForm />
          </div>
        </main>
      )}
    </>
  );
};

export default Login;
