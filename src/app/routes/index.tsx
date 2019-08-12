import { DatePicker } from 'antd';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import RoutePaths from './paths';
import sm from './styles.module.scss';

export default function AppRoutes() {
  return (
    <div className={sm.AppRoutes}>
      <React.Suspense fallback={<div />}>
        <main className={sm.AppRoutes_Main}>
          <Switch>
            <Route path={RoutePaths._()} render={() => <DatePicker />} />

            <Redirect to={RoutePaths._()} />
          </Switch>
        </main>
      </React.Suspense>
    </div>
  );
}
