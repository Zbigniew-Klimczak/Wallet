import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { refreshTokens, updateInfo } from "../../redux/userSlice/userSlice";

const AuthRedirect = ({ redirectOnAuth, redirectTo, children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const isLoading = useSelector((state) => state.user.isLoading);
  const accessToken = useSelector((state) => state.user.token);
  const refreshToken = useSelector((state) => state.user.refreshToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [firstOnPage, setFirstOnPage] = useState(true);
  let [returnComponent, setReturnComponent] = useState(false);

  useEffect(() => {
    if (!firstOnPage) {
      if (!isLoading) {
        if (accessToken !== null && isAuth) {
          if (redirectOnAuth) {
            navigate(redirectTo);
          } else {
            setReturnComponent(true);
          }
        } else if (refreshToken !== null && isAuth) {
          dispatch(refreshTokens(refreshToken));
        } else {
          if (!redirectOnAuth) {
            navigate("/");
          } else {
            setReturnComponent(true);
          }
        }
      }
    }
  }, [
    accessToken,
    dispatch,
    firstOnPage,
    isAuth,
    isLoading,
    navigate,
    redirectOnAuth,
    redirectTo,
    refreshToken,
  ]);

  useEffect(() => {
    if (firstOnPage) {
      setFirstOnPage(false);
      if (isAuth) {
        dispatch(updateInfo(accessToken));
      } else if (redirectOnAuth) {
        setReturnComponent(true);
      } else {
        navigate(redirectTo);
      }
    }
  }, [accessToken, dispatch, firstOnPage, isAuth, navigate, redirectOnAuth, redirectTo]);
  return returnComponent ? <>{children}</> : <p>Use Spinner Here!</p>;
};

AuthRedirect.defaultProps = {
  redirectOnAuth: true,
  redirectTo: "/home",
};

AuthRedirect.propTypes = {
  children: propTypes.any,
  redirectOnAuth: propTypes.bool,
  redirectTo: propTypes.string,
};

export default AuthRedirect;
