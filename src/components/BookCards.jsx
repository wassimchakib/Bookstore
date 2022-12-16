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
        { books.length > 0 ? books.map((book) => (
          <BookCard key={book.item_id} book={{ ...book, completionStatus: 0, currentChapter: 'Chapter 1' }} />
        )) : <h2>No content found</h2>}
      </div>
    </div>
  );
};

export default BookCards;
