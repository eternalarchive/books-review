import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from '../components/Books';
import {
  startBooksSaga,
  deleteBookSaga,
  editBookSaga,
} from '../redux/modules/books';

const BooksContainer = props => {
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);
  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(startBooksSaga());
  }, [dispatch]);

  const deleteBook = useCallback(
    bookId => {
      dispatch(deleteBookSaga({ bookId }));
    },
    [dispatch],
  );

  const editBook = useCallback(
    (bookId, title, author) => {
      console.log({ bookId, book: { title, author } });
      dispatch(editBookSaga({ bookId, book: { title, author } }));
    },
    [dispatch],
  );

  return (
    <Books
      {...props}
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
      deleteBook={deleteBook}
      editBook={editBook}
    />
  );
};

export default BooksContainer;
