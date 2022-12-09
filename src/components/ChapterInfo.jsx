import PropTypes from 'prop-types';

const ChapterInfo = ({ chapter }) => (
  <div className="progress__chapter">
    <span>Current Chapter</span>
    <p>{chapter}</p>
    <button type="button" className="chapter__button">Update Progress</button>
  </div>
);

ChapterInfo.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default ChapterInfo;
