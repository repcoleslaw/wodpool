import React from "react";
import Axios from "axios";

export const NONCE = "X-Session-Nonce";
export const TOKEN = "X-Session-Token";

export const AuthenticationContext = React.createContext({});

const AuthenticationContextProvider = ({ children }) => {
  const [init, setInit] = React.useState(true);
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    Axios.get("/profile")
      .then(({ data }) => {
        setProfile(data?.profile);
      })
      .catch(() => {
        // noop
      })
      .finally(() => {
        setInit(false);
      });
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        init,
        profile,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
