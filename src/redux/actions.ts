import createAction from '../utils/createAction';
import createAsyncActionTypes from '../utils/createAsyncActionTypes';

const API = {
  SIGNED_IN: 'API.SIGNED_IN',
  SIGNED_OUT: 'API.SIGNED_OUT'
};

const ApiActions = {
  signedIn: createAction(API.SIGNED_IN),
  signedOut: createAction(API.SIGNED_OUT)
};

const API_REQ = {
  MY_BOOKS: {
    FETCH_FAVOURITES_BOOKS: createAsyncActionTypes(
      'API_REQ.MY_BOOKS.FETCH_FAVOURITES_BOOKS'
    )
  },
  BOOKS: {
    FETCH_BOOKS_BY_ID: createAsyncActionTypes(
      'API_REQ.BOOKS.FETCH_BOOKS_BY_ID'
    ),
    FETCH_ALL_BOOKS: createAsyncActionTypes('API_REQ.BOOKS.FETCH_ALL_BOOKS')
  }
};

export { API as API_ACTION_TYPES, API_REQ as API_REQ_ACTION_TYPES, ApiActions };
