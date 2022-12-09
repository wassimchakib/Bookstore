import ProgressBar from './ProgressBar';

const BookCard = () => (
  <div className="book__card">
    <div className="container">
      <div className="book_info">
        <span className="book__categories">Action</span>
        <h3 className="book__title">The Hunger Games</h3>
        <p className="book__author">Suzanne Collins</p>

        <ul className="book__edit">
          <li><a href="/">Comments</a></li>
          <li><a href="/">Remove</a></li>
          <li><a href="/">Edit</a></li>
        </ul>
      </div>
      <div className="book__progress">
        <ProgressBar />
        <div className="progress__chapter">
          <span>Current Chapter</span>
          <p>Chapter 17</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  </div>
);

export default BookCard;