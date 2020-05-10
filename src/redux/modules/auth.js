import LoginService from '../../services/LoginService';
import { push } from 'connected-react-router';
import { put, call, select, takeLeading } from 'redux-saga/effects';
import { createAction, createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'reactjs-books-review/auth',
  namespace: '/',
};

const { success, pending, fail } = createActions(
  {
    SUCCESS: loginInfo => ({ loginInfo }),
  },
  'PENDING',
  'FAIL',
  options,
);

export const startLoginSaga = createAction('START_LOGIN');
export const startLogoutSaga = createAction('START_LOGOUT');

function* loginSaga({ payload }) {
  const userId = payload.email;
  try {
    yield put(pending());
    const res = yield call(LoginService.login, payload.email, payload.password);
    const { token } = res.data;
    localStorage.setItem('token', token);
    yield put(success({ token, userId }));
    yield put(push('/'));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
  }
}

function* logoutSaga() {
  const token = yield select(state => state.auth.token);
  try {
    yield put(pending());
    yield call(LoginService.logout, token);
    localStorage.removeItem('token');
    yield put(success({
      token: null,
      userId: null,
    }));
    yield put(push('/signin'));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
    throw error;
  }
}

export function* userSaga() {
  yield takeLeading('START_LOGIN', loginSaga);
  yield takeLeading('START_LOGOUT', logoutSaga);
}

const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
};

const auth = handleActions(
  {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      ...action.payload.loginInfo,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

export default auth;
