
import "./App.css";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

const LoginPage = lazy(() => import("./pages/Login/Login"));
const RegistrationPage = lazy(() => import("./pages/Registration/Registration"));
const ReduxExample = lazy(() => import("./pages/example/reduxExample"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/redux" element={<ReduxExample />} />
      </Routes>
    </div>
  );

};

export default App;
