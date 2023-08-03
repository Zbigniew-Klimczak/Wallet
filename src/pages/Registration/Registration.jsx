import { useState, useEffect } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Registration.module.css";
import bigLogo2 from "../../images/bigLogo2.png";

const Registration = () => {
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
      {windowWidth < 768 && <RegistrationForm />}
      {windowWidth >= 768 && windowWidth < 1280 && (
        <main className={css.container}>
          <div className={css.header}>
            <img src={bigLogo2} alt="Logo" className={css.logo} />
            <h1 className={css.title}>Finance App</h1>
          </div>
          <div className={css.registrationForm}>
            <RegistrationForm />
          </div>
        </main>
      )}
      {windowWidth >= 1280 && (
        <main className={css.container}>
          <div className={css.header}>
            <img src={bigLogo2} alt="Logo" className={css.logo} />
            <h1 className={css.title}>Finance App</h1>
          </div>
          <div className={css.registrationFormBig}>
            <RegistrationForm />
          </div>
        </main>
      )}
    </>
  );
};

export default Registration;
