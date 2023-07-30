import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRedirect from "./components/AuthRedirect/AuthRedirect";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

const LoginPage = lazy(() => import("./pages/Login/Login"));

const RegistrationPage = lazy(() => import("./pages/Registration/Registration"));

const HomePage = lazy(() => import("./pages/Home/Home.jsx"));

const App = () => {
  return (
    <div>
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
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
