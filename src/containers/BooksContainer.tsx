import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from '../components/Books';
import {
  startBooksSaga,
  deleteBookSaga,
} from '../redux/modules/books';
import { RootState } from '../redux/modules/reducer';
import { Tbooks } from '../services/BookService';

function BooksContainer(props: any) {
  const books: Tbooks[] = useSelector((state: RootState) => state.books.books);
  const loading: boolean = useSelector((state: RootState) => state.books.loading);
  const error: {} | null = useSelector((state: RootState) => state.books.error);
  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(startBooksSaga());
  }, [dispatch]);

  const deleteBook = useCallback(
   (bookId: number) => {
      dispatch(deleteBookSaga({ bookId }));
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
    />
  );
};

export default BooksContainer;
