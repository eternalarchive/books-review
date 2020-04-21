import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookPopup from '../components/AddBookPopup';
import {
  addBookSaga,
} from '../redux/modules/books';

const AddBookPopupContainer = props => {
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);
  const dispatch = useDispatch();

  const addBook = useCallback(
    (author, title) => {
      dispatch(addBookSaga({ author, title }));
    },
    [dispatch],
  );

  return (
    <AddBookPopup
      {...props}
      loading={loading}
      error={error}
      addBook={addBook}
    />
  );
};

export default AddBookPopupContainer;
