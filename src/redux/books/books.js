const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const books = [
  {
    id: '1',
    name: 'The Hunger Games',
    categorie: 'Action',
    author: 'Suzanne Collins',
    completionStatus: 75,
    currentChapter: 'Chapter 17',
  },
  {
    id: '2',
    name: 'Dune',
    categorie: 'Science Fiction',
    author: 'Frank Herbert',
    completionStatus: 50,
    currentChapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: '3',
    name: 'Capital in the Twenty-First Century',
    categorie: 'Economy',
    author: 'Suzanne Collins',
    completionStatus: 0,
    currentChapter: 'Introduction',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
