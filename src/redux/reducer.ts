import { combineReducers } from 'redux';

import firebase from '../api/firebase';
import { API_ACTION_TYPES } from './actions';

export interface ApiState {
  signedIn: boolean;
}

const api = combineReducers<ApiState>({
  signedIn(state = Boolean(firebase.auth().currentUser), { type }) {
    switch (type) {
      case API_ACTION_TYPES.SIGNED_IN:
        return true;
      case API_ACTION_TYPES.SIGNED_OUT:
        return false;
      default:
        return state;
    }
  }
});

export default api;
