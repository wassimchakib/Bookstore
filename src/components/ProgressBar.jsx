import { PropTypes } from 'prop-types';

const ProgressBar = ({ percentage }) => (
  <div className="progress__percent">
    <svg>
      <circle cx="70" cy="70" r="70" />
      <circle style={{ strokeDashoffset: 440 - (440 * percentage) / 100 }} cx="70" cy="70" r="70" />
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
