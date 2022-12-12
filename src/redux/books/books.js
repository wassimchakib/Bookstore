const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
});

export const removeBOok = (title) => ({
  type: REMOVE_BOOK,
  title,
});

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { title: action.title, author: action.author }];
    case REMOVE_BOOK:
      return state.filter((obj) => obj.title !== action.title);
    default:
      return state;
  }
};
