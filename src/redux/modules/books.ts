import BookService, { Tbooks } from '../../services/BookService';
import { put, call, select, takeLeading } from 'redux-saga/effects';
import { createAction, createAsyncAction, createReducer, ActionType } from 'typesafe-actions';
import { AxiosError } from 'axios';

const prefix: string = 'reactjs-books-review/books/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

export const actions = createAsyncAction(pending, success, fail)<
  string,
  any,
  AxiosError
>();

export const startBooksSaga = createAction('START_BOOKS_SAGA')();
export const deleteBookSaga = createAction('DELETE_BOOK_SAGA')<{ bookId: number }>();
export const addBookSaga = createAction('ADD_BOOK_SAGA')<{author: string, title: string }>();

function* getBooksSaga() {
  const token: string = yield select(state => state.auth.token);
  try {
    yield put(actions.request(''));
    const res = yield call(BookService.getBooks, token);
    yield put(actions.success(res.data));
  } catch (error) {
    yield put(actions.failure(error));
  }
}

function* clearBookSaga({ payload }: ReturnType<typeof deleteBookSaga>) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);
  const completedBooks: Tbooks[] = [
    ...books.filter((book: { bookId: number; }) => book.bookId !== payload.bookId),
  ];

  try {
    // yield put(actions.request());
    yield call(BookService.deleteBook, token, payload.bookId);
    yield put(actions.success(completedBooks));
  } catch (error) {
    yield put(actions.failure(error));
  }
}

function* plusBookSaga({ payload }: ReturnType<typeof addBookSaga>) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);
  try {
    yield put(actions.request(''));
    const res = yield call(BookService.addBook, token, payload);
    console.log(res.data);
    yield put(actions.success([...books, res.data]));
  } catch (error) {
    yield put(actions.failure(error));
  }
}

export function* booksSaga() {
  yield takeLeading('START_BOOKS_SAGA', getBooksSaga);
  yield takeLeading('DELETE_BOOK_SAGA', clearBookSaga);
  yield takeLeading('ADD_BOOK_SAGA', plusBookSaga);
}

export type TBooksInitialState = {
  books: Tbooks[];
  loading: boolean;
  error: null | {};
}
// 초기값
const initialState: TBooksInitialState  = {
  books: [],
  loading: false,
  error: null,
};

type BooksAction = ActionType<typeof actions>;

const books = createReducer<TBooksInitialState, BooksAction>(initialState, {
  [pending]: (state) => ({
    books: state.books ? state.books : [],
    loading: true,
    error: null,
  }),
  [success]: (state, action) => ({
    ...state,
    books: action.payload,
    loading: false,
    error: null,
  }),
  [fail]: (state, action) => ({
    ...state,
    books: [],
    loading: true,
    error: action.payload,
  }),
});

export default books;
