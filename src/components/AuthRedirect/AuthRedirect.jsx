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
          console.log("Access Token is not null");
          if (redirectOnAuth) {
            console.log("Should redirect when auth, redirecting...", redirectTo);
            navigate(redirectTo);
          } else {
            console.log("Should redirect when not auth, showing content...");
            setReturnComponent(true);
          }
        } else if (userState.refreshToken !== null && userState.isAuth) {
          console.log("Access token is null, refresh token is not null, refreshing tokens");
          console.log("Refresh token is: ", userState.refreshToken);
          dispatch(refreshTokens(userState.refreshToken));
        } else {
          console.log("Both tokens are null or user is not authenticated");
          if (!redirectOnAuth) {
            console.log("Should redirect when not auth, redirecting...");
            navigate("/");
          } else {
            console.log("Should redirect when auth, showing content...");
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
        console.log("Auth is not false: dispatch updateInfo");
        dispatch(updateInfo(userState.accessToken));
      } else if (redirectOnAuth) {
        console.log("Auth is false, should redirect on auth: showing content...");
        setReturnComponent(true);
      } else {
        console.log("Auth is false, should redirect on not auth: redirecting to: ", redirectTo);
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
