import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

const LoginPage = lazy(() => import("./pages/Login/Login"));

const RegistrationPage = lazy(() =>
  import("./pages/Registration/Registration")
);

const HomePage = lazy(() => import("./pages/Home/Home.jsx"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
