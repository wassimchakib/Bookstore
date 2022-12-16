import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBookAsync } from '../redux/books/books';

const AddBook = () => {
  const initialState = {
    title: '', author: '', category: 'Drama', completionStatus: 0, currentChapter: 'Chapter 1',
  };
  const [book, setBook] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'title':
        setBook({
          ...book,
          title: e.target.value,
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
    dispatch(addBookAsync({ ...book, item_id: v4() }));
    setBook(initialState);
  };

  return (
    <div className="form__book">
      <div className="container">
        <h2>Add New Book</h2>
        <form className="form__wrapper">
          <input name="title" className="input" type="text" value={book.title} placeholder="Book title" onChange={handleChange} />
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
