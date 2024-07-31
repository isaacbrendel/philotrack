import React from 'react';

const ProgressBar = ({ progress }) => {
  const percentage = (progress / 56) * 100; // Assuming 56 days (8 weeks) total

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
      <span>{Math.round(percentage)}% Complete</span>
    </div>
  );
};

export default ProgressBar;