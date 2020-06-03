import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookPopup from '../components/AddBookPopup';
import {
  addBookSaga,
} from '../redux/modules/books';
import { RootState } from '../redux/modules/reducer';

function AddBookPopupContainer(props: any) {
  const loading: boolean = useSelector((state: RootState) => state.books.loading);
  const error: null | {} = useSelector((state: RootState) => state.books.error);
  const dispatch = useDispatch();

  const addBook = useCallback(
    (author: string, title: string) => {
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
