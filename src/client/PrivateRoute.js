import React, { useContext } from "react";
import { NewsContext } from "./context";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    state: { activeArticle, activeCategory }
  } = useContext(NewsContext);

  return (
    <Route
      {...rest}
      render={props =>
        activeArticle || activeCategory ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default withRouter(PrivateRoute);
