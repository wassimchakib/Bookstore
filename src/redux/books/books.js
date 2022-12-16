import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_BOOK}/fulfilled`:
      return [...state, ...action.payload];
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

const getAllBooks = async () => {
  const result = await fetch(process.env.REACT_APP_BASE_URL);
  return result.json();
};

const createBook = async (book) => {
  const result = await fetch(process.env.REACT_APP_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  return result;
};

const deleteBook = async (id) => {
  const result = await fetch(`${process.env.REACT_APP_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return result;
};

export const addBookAsync = createAsyncThunk(
  ADD_BOOK,
  async (book) => createBook(book).then(() => book),
);

export const getBooksAsync = createAsyncThunk(
  GET_BOOK,
  async () => getAllBooks().then((books) => Object.entries(books)
    .map(([id, book]) => ({ item_id: id, ...book[0] }))),
);

export const removeBookAsync = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => deleteBook(id).then(() => id),
);
