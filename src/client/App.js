import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Global } from '@emotion/core';

import SuspenseSpinner from './common/components/Spinner/SuspenseSpinner';
import { global as GlobalStyles } from './common/styles/global';
import NavBar from './common/components/NavBar/NavBar';
import CountryMenu from './common/containers/CountryMenu/CountryMenu';
import PrivateRoute from './PrivateRoute';
import { NewsProvider } from './context';
import { AppStyles, AppContainer, AppContent, AppSection } from './styles';

const TopNewsScreen = lazy(() => import('./common/containers/TopNews/TopNewsScreen'));
const SearchScreen = lazy(() => import('./common/containers/Search/SearchScreen'));
const CategoriesScreen = lazy(() => import('./common/containers/Categories/CategoriesScreen'));
const FullArticleScreen = lazy(() => import('./common/containers/FullArticleScreen/FullArticleScreen'));
const FullCategoryScreen = lazy(() => import('./common/containers/FullCategory/FullCategoryScreen'));

const App = () => (
  <AppContainer>
    <Global styles={[GlobalStyles, AppStyles]} />
    <BrowserRouter>
      <AppContent>
        <NewsProvider>
          <NavBar />
          <CountryMenu />
          <Redirect from="/" to="/topnews" />
          <Switch>
            <AppSection>
              <SuspenseSpinner>
                <Route exact path="/topnews" component={TopNewsScreen} />
                <Route exact path="/categories" component={CategoriesScreen} />
                <Route exact path="/search" component={SearchScreen} />
                <PrivateRoute
                  component={FullArticleScreen}
                  path="/(topnews|categories|search)/article"
                />
                <PrivateRoute
                  component={FullCategoryScreen}
                  path="/categories/category"
                />
              </SuspenseSpinner>
            </AppSection>
          </Switch>
        </NewsProvider>
      </AppContent>
    </BrowserRouter>
  </AppContainer>
);

export default App;
