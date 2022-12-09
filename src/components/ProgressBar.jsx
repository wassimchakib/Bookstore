const ProgressBar = () => (
  <div className="progress__percent">
    <svg>
      <circle cx="70" cy="70" r="70" />
      <circle cx="70" cy="70" r="70" />
    </svg>
    <div className="progress__number">
      <h2 className="progress__percentage">
        87
        <span>%</span>
      </h2>
      <h2 className="progress__status">Completed</h2>
    </div>
  </div>
);

export default ProgressBar;
