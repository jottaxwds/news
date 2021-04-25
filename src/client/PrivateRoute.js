import React, { useContext } from 'react';
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

import { NewsContext } from './context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state: { activeArticle, activeCategory } } = useContext(NewsContext);

  return (
    <Route
      {...rest}
      render={(props) => ((activeArticle || activeCategory) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      ))}
    />
  );
};

export default withRouter(PrivateRoute);
