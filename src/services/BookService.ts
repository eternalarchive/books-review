import axios from 'axios';

const BOOK_API_URL = 'https://api.marktube.tv/v1/book';

export type Tbooks = {
  bookId:    number;
  ownerId:   string;
  title:     string;
  message:   null | string;
  author:    string;
  url:       null | string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};

export default class BookService {
  static async getBooks(token: string) {
    return axios.get<Tbooks[]>(BOOK_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async addBook(token: string, book) {
    return axios.post<Tbooks>(BOOK_API_URL, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async deleteBook(token: string, bookId: number) {
    return axios.delete(`${BOOK_API_URL}/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async editBook(token: string, bookId: number, book) {
    return axios.patch<Tbooks>(`${BOOK_API_URL}/${bookId}`, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
