import { PropTypes } from 'prop-types';
import BookCards from './BookCards';
import AddBook from './AddBook';

const Books = ({ books }) => (
  <>
    <BookCards books={books} />
    <AddBook />
  </>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    categorie: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completionStatus: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  })).isRequired,
};

export default Books;
