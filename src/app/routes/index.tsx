import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import BookPage from '../pages/BookPage';
import CommonPage from '../pages/CommonPage';
import FavouritePage from '../pages/FavouritePage';
import RegistrationPage from '../pages/RegistrationPage';
import SignInPage from '../pages/SignInPage';
import RoutePaths from './paths';
import sm from './styles.module.scss';

export default function AppRoutes() {
  return (
    <div className={sm.AppRoutes}>
      <React.Suspense fallback={<div />}>
        <main className={sm.AppRoutes_Main}>
          <Switch>
            <Route
              path={RoutePaths.Favourite._()}
              render={() => <FavouritePage />}
            />
            <Route path={RoutePaths.Book._()} render={() => <BookPage />} />
            <Route path={RoutePaths.SignIn._()} render={() => <SignInPage />} />
            <Route
              path={RoutePaths.Registration._()}
              render={() => <RegistrationPage />}
            />
            <Route
              path={RoutePaths.Registration._()}
              render={() => <SignInPage />}
            />
            <Route path={RoutePaths._()} render={() => <CommonPage />} />
            <Redirect to={RoutePaths._()} />
          </Switch>
        </main>
      </React.Suspense>
    </div>
  );
}
