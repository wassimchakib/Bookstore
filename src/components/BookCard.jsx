import PropTypes from 'prop-types';
import ChapterInfo from './ChapterInfo';
import ProgressBar from './ProgressBar';

const BookCard = ({ book }) => (
  <div className="book__card">
    <div className="book__info">
      <span className="book__categories">{ book.categorie }</span>
      <h3 className="book__title">{book.name}</h3>
      <p className="book__author">{book.author}</p>

      <ul className="book__edit">
        <li><a href="/">Comments</a></li>
        <li><a href="/">Remove</a></li>
        <li><a href="/">Edit</a></li>
      </ul>
    </div>
    <div className="book__progress">
      <ProgressBar percentage={book.completionStatus} />
      <ChapterInfo chapter={book.currentChapter} />
    </div>
  </div>
);

BookCard.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    categorie: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completionStatus: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookCard;
