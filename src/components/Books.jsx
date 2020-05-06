import React, { useEffect } from 'react';
import * as S from './homeStyle';

const Books = ({
  books,
  getBooks,
  deleteBook,
  editBook,
  error,
  loading,
}) => {

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  const clearBook = id => {
    deleteBook(id);
  };

  return (
    <S.BookListUl>
      {books.map(book => {
        return (
          <S.BookInfo key={book.bookId} tabIndex="0">
            <S.BookNumber>{book.bookId}</S.BookNumber>
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthor>{book.author}</S.BookAuthor>
            <S.BookDeleteButton onClick={() => clearBook(book.bookId)} tabIndex="0"><S.DeleteImg src="/images/plus-white.png" alt="책 지우기"/></S.BookDeleteButton>
          </S.BookInfo>
        );
      })}
  </S.BookListUl>
  );
};

export default Books;
