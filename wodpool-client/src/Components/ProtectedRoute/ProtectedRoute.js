import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../AuthenticationContext";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  const auth = React.useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        // ensure admins get redirected too as it's not their app
        // you should prob destory session in that case but I'm short on time
        auth?.profile?.role === "Competitor" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );
};

export default AuthRoute;
