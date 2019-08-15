import { put, takeEvery } from 'redux-saga/effects';

import { API_ACTION_TYPES, ApiActions } from '../../redux/actions';

export default function* watchersSaga() {
  yield takeEvery([API_ACTION_TYPES.SIGNED_IN], function* signedInSaga() {
    yield put(ApiActions.signedIn());
  });
}
