import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { FormStateMap, reducer as form } from 'redux-form';

export interface RootState {
  router: RouterState;
  form: FormStateMap;
}

export default function createRootReducer({ history }: { history: History }) {
  return combineReducers({
    router: connectRouter(history),
    form
  });
}
