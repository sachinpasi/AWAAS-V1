import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectUser } from "../Redux/_features/_userSlice";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
