import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const BookCards = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="book__cards">
      <div className="container">
        { books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookCards;
