import css from "./RegistrationForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/userSlice/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";

const RegistrationForm = () => {
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [firstName, setFirstName] = useState("");

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "The password must be minimum six symbols")
      .max(12, "The password should not be more than 12 symbols")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    firstName: Yup.string()
      .min(1, "The name must be consist of at least 1 symbol")
      .max(12, "The name should not be more than 12 symbols")
      .required("Required"),
  });

  const dispatch = useDispatch();

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
          confirmPassword: "",
          firstName: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);
          dispatch(
            register({
              email: values.email,
              password: values.password,
              firstName: values.firstName,
            })
          );
          toast(`Hello ${values.firstName} możesz się teraz zalogować`);
        }}
      >
        {({ values }) => (
          <Form className={css.form}>
            <div className={css.input__div}>
              <Field
                className={css.input__email}
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={css.input__div}>
              <Field
                className={css.input__password}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <ErrorMessage name="password" component="div">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
              <PasswordStrengthMeter password={values.password} />
            </div>
            <div className={css.input__div}>
              <Field
                className={css.input__password}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="off"
              />
              <ErrorMessage name="confirmPassword" component="div">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={css.input__div}>
              <Field
                className={css.input__firstName}
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage name="firstName" component="div">
                {(msg) => <div>{msg}</div>}
              </ErrorMessage>
            </div>
            <button className={css.login} type="submit">
              REGISTER
            </button>
          </Form>
        )}
      </Formik>
      <button className={css.register} type="button">
        <Link className={css.registerBtn} to="/">
          LOG IN
        </Link>
      </button>
    </div>
  );
};

export default RegistrationForm;
