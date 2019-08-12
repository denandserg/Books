import { fork } from 'redux-saga/effects';

import watchersSaga from './watchers';

export default function* apiSaga() {
  yield fork(watchersSaga);
}
