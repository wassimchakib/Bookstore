import { PropTypes } from 'prop-types';

const ProgressBar = ({ percentage }) => (
  <div className="progress__percent">
    <svg width={90} height={90}>
      <circle cx="40" cy="40" r="40" />
      <circle style={{ strokeDashoffset: (250 - (250 * percentage) / 100) }} cx="40" cy="40" r="40" />
    </svg>
    <div className="progress__number">
      <h2 className="progress__percentage">
        {percentage}
        <span>%</span>
      </h2>
      <h2 className="progress__status">Completed</h2>
    </div>
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.func.isRequired,
};

export default ProgressBar;
