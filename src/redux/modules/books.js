import BookService from '../../services/BookService';
import { put, call, select, takeLeading } from 'redux-saga/effects';
import { createAction, createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'reactjs-books-review/books',
  namespace: '/',
};

const { success, pending, fail } = createActions(
  {
    SUCCESS: books => ({ books }),
  },
  'PENDING',
  'FAIL',
  options,
);

export const startBooksSaga = createAction('START_BOOKS_SAGA');
export const addBookSaga = createAction('ADD_BOOK_SAGA');
export const deleteBookSaga = createAction('DELETE_BOOK_SAGA');
export const editBookSaga = createAction('EDIT_BOOK_SAGA');

function* getBooksSaga() {
  const token = yield select(state => state.auth.token);
  try {
    yield put(pending());
    const res = yield call(BookService.getBooks, token);
    yield put(success(res.data));
  } catch (error) {
    yield put(fail(error));
  }
}

function* clearBookSaga({ payload }) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);
  const completedBooks = [
    ...books.filter(book => book.bookId !== payload.bookId),
  ];

  try {
    yield put(pending());
    yield call(BookService.deleteBook, token, payload.bookId);
    yield put(success(completedBooks));
  } catch (error) {
    yield put(fail(error));
  }
}

function* plusBookSaga({ payload }) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);
  try {
    yield put(pending());
    const res = yield call(BookService.addBook, token, payload);
    console.log(res.data);
    yield put(success([...books, res.data]));
  } catch (error) {
    yield put(fail(error));
  }
}

function* changeBookSaga({ payload }) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);

  try {
    yield put(pending());
    const res = yield call(BookService.editBook, token, payload.bookId, payload.book);
    console.log(res.data);
    // yield put(success(books));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* booksSaga() {
  yield takeLeading('START_BOOKS_SAGA', getBooksSaga);
  yield takeLeading('DELETE_BOOK_SAGA', clearBookSaga);
  yield takeLeading('ADD_BOOK_SAGA', plusBookSaga);
  yield takeLeading('EDIT_BOOK_SAGA', changeBookSaga);
}

// 초기값
const initialState = {
  books: [],
  loading: false,
  error: null,
};

const books = handleActions(
  {
    PENDING: (state, action) => ({
      books: state.books ? state.books : [],
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      books: action.payload.books,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      books: [],
      loading: true,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

export default books;
