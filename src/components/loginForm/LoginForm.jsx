// import React from "react";
import css from "./LoginForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

// import { envelope } from "../../SVG/envelope.svg";
const LoginForm = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const dispatch = useDispatch();
  const { user, token, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      toast(`Hello ${user.email}`);
    }
    if (error !== null) {
      toast("Zły email lub hasło");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, error]);

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <Toaster
          toastOptions={{
            style: {
              border: "5px solid yellow",
              fontSize: "36px",
              backgroundColor: "red",
              color: "#fff",
            },
          }}
        />
        <img className={css.logo__icon} src="/logo.svg" alt="logo" />
        <h1 className={css.logo__txt}>Wallet</h1>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        <Form className={css.form}>
          <div className={css.input__div}>
            <Field
              className={css.input__email}
              id="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="Field" />
          </div>
          <div className={css.input__div}>
            <Field
              className={css.input__password}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="Field" />
          </div>
          <button className={css.login} type="submit">
            LOG IN
          </button>
        </Form>
      </Formik>
      <button className={css.register} type="button">
        REGISTER
      </button>
    </div>
  );
};

export default LoginForm;
