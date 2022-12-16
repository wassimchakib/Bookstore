import PropTypes from 'prop-types';
import ManipulateBook from './ManipulateBook';
import ChapterInfo from './ChapterInfo';
import ProgressBar from './ProgressBar';

const BookCard = ({ book }) => (
  <div className="book__card">
    <div className="book__info">
      <span className="book__categories">{ book.categorie }</span>
      <h3 className="book__title">{book.name}</h3>
      <p className="book__author">{book.author}</p>

      <ul className="book__edit">
        <li><ManipulateBook id={book.id} title="Comments" /></li>
        <li><ManipulateBook id={book.id} title="Remove" /></li>
        <li><ManipulateBook id={book.id} title="Edit" /></li>
      </ul>
    </div>
    <div className="book__progress">
      <ProgressBar percentage={book.completionStatus} />
      <ChapterInfo chapter={book.currentChapter} />
    </div>
  </div>
);

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    categorie: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completionStatus: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
