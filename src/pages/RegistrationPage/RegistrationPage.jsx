import { useState, useEffect } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';
// import bigLogo from "../../images/bigLogo.png";




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
            <img src={bigLogo} alt="Logo" className={css.logo} />
            <h1 className={css.title}>Finance App</h1>
          </div>
          <div className={css.RegistrationForm}>
            <RegistrationForm />
          </div>
        </main>
      )}
      {windowWidth >= 1280 && (
        <main className={css.container}>
          <div className={css.header}>
            <img src={bigLogo} alt="Logo" className={css.logo} />
            <h1 className={css.title}>Finance App</h1>
          </div>
          <div className={css.RegistrationFormBig}>
            <RegistrationForm />
          </div>
        </main>
      )}
    </>
  );
};

export default Registration;