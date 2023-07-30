import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { refreshTokens, updateInfo } from "../../redux/userSlice/userSlice";

const AuthRedirect = ({ redirectOnAuth, redirectTo, children }) => {
  const userState = useSelector((state) => {
    return {
      isAuth: state.user.isAuth,
      isLoading: state.user.isLoading,
      accessToken: state.user.token,
      refreshToken: state.user.refreshToken,
      error: state.user.error,
    };
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [firstOnPage, setFirstOnPage] = useState(true);
  let [returnComponent, setReturnComponent] = useState(false);

  useEffect(() => {
    if (!firstOnPage) {
      if (!userState.isLoading) {
        if (userState.accessToken !== null && userState.isAuth) {
          if (redirectOnAuth) {
            navigate(redirectTo);
          } else {
            setReturnComponent(true);
          }
        } else if (userState.refreshToken !== null && userState.isAuth) {
          dispatch(refreshTokens(userState.refreshToken));
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
    userState.accessToken,
    userState.isLoading,
    firstOnPage,
    userState.refreshToken,
    redirectOnAuth,
    navigate,
    redirectTo,
    dispatch,
    userState.isAuth,
  ]);

  useEffect(() => {
    if (firstOnPage) {
      setFirstOnPage(false);
      if (userState.isAuth) {
        dispatch(updateInfo(userState.accessToken));
      } else if (redirectOnAuth) {
        setReturnComponent(true);
      } else {
        navigate(redirectTo);
      }
    }
  }, [
    dispatch,
    firstOnPage,
    navigate,
    redirectOnAuth,
    redirectTo,
    userState.accessToken,
    userState.isAuth,
  ]);
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
