import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const initialState = { name: '', author: '' };
  const [book, setBook] = useState(initialState);
  const dispatch = useDispatch();
  const id = v4();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setBook({
          ...book,
          name: e.target.value,
        });
        break;
      case 'author':
        setBook({
          ...book,
          author: e.target.value,
        });
        break;
      default:
    }
  };

  const submitBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id }));
    setBook(initialState);
  };

  return (
    <div className="form__book">
      <div className="container">
        <h2>Add New Book</h2>
        <form className="form__wrapper">
          <input name="name" className="input" type="text" value={book.name} placeholder="Book title" onChange={handleChange} />
          <input name="author" className="input" type="text" value={book.author} placeholder="Author" onChange={handleChange} />

          {/* <select className="input select">
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select> */}
          <button type="submit" className="form__btn" onClick={submitBook}>Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
