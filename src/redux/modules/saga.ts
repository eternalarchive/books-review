import { all } from 'redux-saga/effects';
import { booksSaga } from './books';
import { userSaga } from './auth';

export default function* rootSaga() {
  yield all([
    booksSaga(),
    userSaga(),
  ]);
}
