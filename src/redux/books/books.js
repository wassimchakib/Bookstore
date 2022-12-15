import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';

// const books = [
//   {
//     id: '1',
//     name: 'The Hunger Games',
//     categorie: 'Action',
//     author: 'Suzanne Collins',
//     completionStatus: 75,
//     currentChapter: 'Chapter 17',
//   },
//   {
//     id: '2',
//     name: 'Dune',
//     categorie: 'Science Fiction',
//     author: 'Frank Herbert',
//     completionStatus: 50,
//     currentChapter: 'Chapter 3: "A Lesson Learned"',
//   },
//   {
//     id: '3',
//     name: 'Capital in the Twenty-First Century',
//     categorie: 'Economy',
//     author: 'Suzanne Collins',
//     completionStatus: 0,
//     currentChapter: 'Introduction',
//   },
// ];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_BOOK}/fulfilled`:
      return [...state, action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.id);
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
  async (book) => createBook(book),
);

export const getBooksAsync = createAsyncThunk(
  GET_BOOK,
  async () => getAllBooks().then((books) => Object.entries(books)
    .map(([id, book]) => ({ id, ...book[0] }))),
);

export const removeBookAsync = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => deleteBook(id).then(() => id),
);
