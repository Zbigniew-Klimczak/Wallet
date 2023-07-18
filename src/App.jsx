import "./App.css";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const LoginPage = lazy(() => import("./pages/Login/Login"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
