import React, { useEffect } from 'react';
import * as S from './homeStyle';
import { Tbooks } from '../services/BookService';

type BooksProps = {
  books: Tbooks[];
  getBooks: () => void;
  deleteBook: (bookId: number) => void;
  error: null | {};
  loading: boolean;
};

const Books = ({
  books,
  getBooks,
  deleteBook,
  error,
  loading,
}: BooksProps) => {

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  const clearBook = (id: number) => {
    deleteBook(id);
  };

  return (
    <S.BookListUl>
      {books.map(book => {
        return (
          <S.BookInfo key={book.bookId} tabIndex={0}>
            <S.BookNumber>{book.bookId}</S.BookNumber>
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthor>{book.author}</S.BookAuthor>
            <S.BookDeleteButton onClick={() => clearBook(book.bookId)} tabIndex={0}><S.DeleteImg src="/images/plus-white.png" alt="책 지우기"/></S.BookDeleteButton>
          </S.BookInfo>
        );
      })}
  </S.BookListUl>
  );
};

export default Books;
