import LoginService from '../../services/LoginService';
import { push } from 'connected-react-router';
import { put, call, select, takeLeading } from 'redux-saga/effects';
import { createAsyncAction, createAction, createReducer, ActionType } from 'typesafe-actions';
import { AxiosError } from 'axios';

const prefix: string = 'reactjs-books-review/auth/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

export const actions = createAsyncAction(pending, success, fail)<
  string,
  any,
  AxiosError
>();

export const startLoginSaga = createAction('START_LOGIN')<{ email: string, password: string }>();
export const startLogoutSaga = createAction('START_LOGOUT')();

function* loginSaga({ payload }: ReturnType<typeof startLoginSaga>) {
  const userId = payload.email;
  try {
    yield put(actions.request(''));
    const res = yield call(LoginService.login, payload.email, payload.password);
    const { token } = res.data;
    localStorage.setItem('token', token);
    yield put(actions.success({ token, userId }));
    yield put(push('/'));
  } catch (error) {
    console.log(error);
    yield put(actions.failure(error));
  }
}

function* logoutSaga() {
  const token = yield select(state => state.auth.token);
  try {
    yield put(actions.request(''));
    yield call(LoginService.logout, token);
    localStorage.removeItem('token');
    yield put(actions.success({
      token: null,
      userId: null,
    }));
    yield put(push('/signin'));
  } catch (error) {
    console.log(error);
    yield put(actions.failure(error));
    throw error;
  }
}

export function* userSaga() {
  yield takeLeading('START_LOGIN', loginSaga);
  yield takeLeading('START_LOGOUT', logoutSaga);
}

export type TAuthInitialState = {
  token: null | string;
  userId: null | string;
  loading: boolean;
  error: null | {};
};

const initialState: TAuthInitialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
};

type AuthAction = ActionType<typeof actions>;

const auth = createReducer<TAuthInitialState, AuthAction>(initialState, {
  [pending]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [success]: (state, action) => ({
    ...state,
    token: action.payload.token,
    userId: action.payload.userId,
    loading: false,
    error: null,
  }),
  [fail]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default auth;
