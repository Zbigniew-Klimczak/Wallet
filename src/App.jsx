import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRedirect from "./components/AuthRedirect/AuthRedirect";
import GlobalLoader from "./components/loader/loader";

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

const LoginPage = lazy(() => import("./pages/Login/Login"));

const RegistrationPage = lazy(() =>
  import("./pages/Registration/Registration")
);
const TransactionsHistory = lazy(() =>
  import("./pages/TransactionsHistory/TransactionsHistory")
);
const Statistics = lazy(() => import("./pages/Statistics/Statistics"));
const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
const Exchange = lazy(() => import("./components/exchange/Exchange"));

const App = () => {
  return (
    <div>
      <GlobalLoader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRedirect>
                <LoginPage />
              </AuthRedirect>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRedirect>
                <RegistrationPage />
              </AuthRedirect>
            }
          />
          <Route
            path="/home"
            element={
              <AuthRedirect redirectTo="/" redirectOnAuth={false}>
                <HomePage />
              </AuthRedirect>
            }
          >
            <Route path="" element={<TransactionsHistory />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="exchange" element={<Exchange />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
