import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
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
