import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import books, { Book } from '../app/containers/BooksLIst/reducer';

export interface RootState {
  router: RouterState;
  books: Book[];
}

export default function createRootReducer({ history }: { history: History }) {
  return combineReducers({
    router: connectRouter(history),
    books
  });
}
