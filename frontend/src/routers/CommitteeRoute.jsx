import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "context/context";

const CommitteeRoute = ({ component: Component, ...rest }) => {
  const {
    state: { isAuthenticated, userType },
  } = useContext(Context);

  return (
    <Route
      {...rest}
      component={(props) =>
         userType === "COMMITTEE" ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" exact={true} />
        )
      }
    />
  );
};

export default CommitteeRoute;
