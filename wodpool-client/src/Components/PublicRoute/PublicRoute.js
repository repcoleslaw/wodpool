import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../AuthenticationContext";

// might want to find a way to combine public route and protected route
// i've had some drinks so the code is super redundant lol
const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  const auth = React.useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !auth?.profile?.role ? (
          <Component {...props} />
        ) : (
          <Redirect to="/profile" />
        )
      }
    />
  );
};

export default PublicRoute;
