import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BookCards = ({ books }) => (
  <div className="book__cards">
    <div className="container">
      { books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  </div>
);

BookCards.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    categorie: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completionStatus: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookCards;
