import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAsync } from '../redux/books/books';
import BookCard from './BookCard';

const BookCards = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  return (
    <div className="book__cards">
      <div className="container">
        { books.map((book, index) => (
          <BookCard key={book[index].id} book={book[index]} />
        ))}
      </div>
    </div>
  );
};

export default BookCards;
