import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  let location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
