import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { FormStateMap, reducer as form } from 'redux-form';

import api from './reducer';

export interface RootState {
  router: RouterState;
  form: FormStateMap;
  api;
}

export default function createRootReducer({ history }: { history: History }) {
  return combineReducers({
    router: connectRouter(history),
    form,
    api
  });
}
