import './App.scss';

import { ConnectedRouter } from 'connected-react-router';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import configureStore, { history } from '../redux/configureStore';
import AppRoutes from './routes';

export default AppRoot;

function AppRoot(): ReactElement {
  return (
    <Provider store={configureStore()}>
      <ConnectedRouter history={history}>
        <AppRoutes />
      </ConnectedRouter>
    </Provider>
  );
}
