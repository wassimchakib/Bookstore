import PropTypes from 'prop-types';
import ManipulateBook from './ManipulateBook';
import ChapterInfo from './ChapterInfo';
import ProgressBar from './ProgressBar';

const BookCard = ({ book }) => (
  <div className="book__card">
    <div className="book__info">
      <span className="book__categories">{ book.category }</span>
      <h3 className="book__title">{book.title}</h3>
      <p className="book__author">{book.author}</p>

      <ul className="book__edit">
        <li><ManipulateBook id={book.item_id} title="Comments" /></li>
        <li><ManipulateBook id={book.item_id} title="Remove" /></li>
        <li><ManipulateBook id={book.item_id} title="Edit" /></li>
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
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completionStatus: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
