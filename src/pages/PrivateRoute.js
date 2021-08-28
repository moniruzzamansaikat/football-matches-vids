import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { loggedInUser } from "../adapter/user";
import { userContext } from "../App";

function PrivateRoute({ children, ...rest }) {
  const { user, setUser } = useContext(userContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
