import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export const NONCE = "X-Session-Nonce";
export const TOKEN = "X-Session-Token";

export const AuthenticationContext = React.createContext({});

const AuthenticationContextProvider = ({ children }) => {
  const [init, setInit] = React.useState(true);
  const [profile, setProfile] = React.useState(null);
  const history = useHistory();

  const getProfile = () =>
    Axios.get("/profile")
      .then(({ data }) => {
        setProfile(data?.profile);
        return data;
      })
      .catch((e) => {
        return Promise.reject(e);
      });

  const authenticate = (credentials = {}) =>
    Axios.post("/authenticate", credentials)
      .then(({ data }) => {
        Cookies.set(TOKEN, data?.token);
        Cookies.set(NONCE, data?.nonce);
        return getProfile();
      })
      .then(() => {
        console.log(history);
        history.push("/profile");
      });

  React.useEffect(() => {
    getProfile().finally(() => {
      setInit(false);
    });
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        init,
        profile,
        authenticate,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
