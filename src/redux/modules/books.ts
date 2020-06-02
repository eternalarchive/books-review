// import BookService from '../../services/BookService';
// import { put, call, select, takeLeading } from 'redux-saga/effects';
// import { createAction, createActions, handleActions } from 'redux-actions';

// const options = {
//   prefix: 'reactjs-books-review/books',
//   namespace: '/',
// };

// const { success, pending, fail } = createActions(
//   {
//     SUCCESS: books => ({ books }),
//   },
//   'PENDING',
//   'FAIL',
//   options,
// );

// export const startBooksSaga = createAction('START_BOOKS_SAGA');
// export const addBookSaga = createAction('ADD_BOOK_SAGA');
// export const deleteBookSaga = createAction('DELETE_BOOK_SAGA');
// export const editBookSaga = createAction('EDIT_BOOK_SAGA');

// function* getBooksSaga() {
//   const token = yield select(state => state.auth.token);
//   try {
//     yield put(pending());
//     const res = yield call(BookService.getBooks, token);
//     yield put(success(res.data));
//   } catch (error) {
//     yield put(fail(error));
//   }
// }

// function* clearBookSaga({ payload }) {
//   const token = yield select(state => state.auth.token);
//   const books = yield select(state => state.books.books);
//   const completedBooks = [
//     ...books.filter(book => book.bookId !== payload.bookId),
//   ];

//   try {
//     yield put(pending());
//     yield call(BookService.deleteBook, token, payload.bookId);
//     yield put(success(completedBooks));
//   } catch (error) {
//     yield put(fail(error));
//   }
// }

// function* plusBookSaga({ payload }) {
//   const token = yield select(state => state.auth.token);
//   const books = yield select(state => state.books.books);
//   try {
//     yield put(pending());
//     const res = yield call(BookService.addBook, token, payload);
//     console.log(res.data);
//     yield put(success([...books, res.data]));
//   } catch (error) {
//     yield put(fail(error));
//   }
// }

// function* changeBookSaga({ payload }) {
//   const token = yield select(state => state.auth.token);
//   const books = yield select(state => state.books.books);

//   try {
//     yield put(pending());
//     const res = yield call(BookService.editBook, token, payload.bookId, payload.book);
//     console.log(res.data);
//     // yield put(success(books));
//   } catch (error) {
//     yield put(fail(error));
//   }
// }

// export function* booksSaga() {
//   yield takeLeading('START_BOOKS_SAGA', getBooksSaga);
//   yield takeLeading('DELETE_BOOK_SAGA', clearBookSaga);
//   yield takeLeading('ADD_BOOK_SAGA', plusBookSaga);
//   yield takeLeading('EDIT_BOOK_SAGA', changeBookSaga);
// }

// // 초기값
// const initialState = {
//   books: [],
//   loading: false,
//   error: null,
// };

// const books = handleActions(
//   {
//     PENDING: (state, action) => ({
//       books: state.books ? state.books : [],
//       loading: true,
//       error: null,
//     }),
//     SUCCESS: (state, action) => ({
//       books: action.payload.books,
//       loading: false,
//       error: null,
//     }),
//     FAIL: (state, action) => ({
//       books: [],
//       loading: true,
//       error: action.payload,
//     }),
//   },
//   initialState,
//   options,
// );

// export default books;

import BookService, { Tbooks } from '../../services/BookService';
import { put, call, select, takeLeading } from 'redux-saga/effects';
import { createAction, createAsyncAction, createReducer } from 'typesafe-actions';
import { AxiosError } from 'axios';

const prefix: string = 'reactjs-books-review/books/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

export const actions = createAsyncAction(pending, success, fail)<
  string,
  Tbooks[],
  AxiosError
>();

export const startBooksSaga = createAction('START_BOOKS_SAGA')();
export const deleteBookSaga = createAction('DELETE_BOOK_SAGA')<{ bookId: number }>();
export const addBookSaga = createAction('ADD_BOOK_SAGA')<{author: string, title: string }>();

function* getBooksSaga() {
  const token: string = yield select(state => state.auth.token);
  try {
    // yield put(actions.request());
    const res = yield call(BookService.getBooks, token);
    yield put(actions.success(res.data));
  } catch (error) {
    yield put(actions.failure(error));
  }
}

function* clearBookSaga({ payload }: ReturnType<typeof deleteBookSaga>) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);
  const completedBooks = [
    ...books.filter(book => book.bookId !== payload.bookId),
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
    // yield put(actions.request());
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

type TinitialState = {
  books: Tbooks[];
  loading: boolean;
  error: null | {};
}
// 초기값
const initialState: TinitialState  = {
  books: [],
  loading: false,
  error: null,
};

const books = createReducer<TinitialState>(initialState, {
  [pending]: (state) => ({
    books: state.books ? state.books : [],
    loading: true,
    error: null,
  }),
  [success]: (state, action) => ({
    ...state,
    books: action.payload.books,
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
