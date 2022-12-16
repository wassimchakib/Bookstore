import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const ManipulateBook = ({ id, title }) => {
  const newTitle = title;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    switch (e.target.name) {
      case 'Remove':
        dispatch(removeBookAsync(id));
        break;
      default:
    }
  };
  return (
    <button name={newTitle} className="manipulate__btn" type="button" onClick={handleClick}>{newTitle}</button>
  );
};

ManipulateBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ManipulateBook;
